import { views, products, categories, DEMO_ACCOUNTS, ROLE_PERMISSIONS } from './data.js';

class App {
    constructor() {
        window.__suntechApp = this;
        this.root = document.getElementById('app-root');
        this.currentRoute = '';
        this.quoteList = JSON.parse(localStorage.getItem('suntech_quote_list')) || [];
        this.currentUser = JSON.parse(sessionStorage.getItem('suntech_auth_user')) || null;
        this.highlightedIndex = -1;
        this.isNavigating = false;
        this.init();
    }

    init() {
        this.setupBackgroundGrid();
        this.setupAuthUI();
        this.setupRouter();
        this.setupEventListeners();
        this.setupGlobalDemoHelpers();
        this.updateQuoteBadge();
        this.renderQuoteDrawer();

        // Optional convenience: instant preview via ?auth=admin | customer | employee | hr | manager
        const urlParams = new URLSearchParams(window.location.search);
        const authParam = urlParams.get('auth');
        if (authParam && DEMO_ACCOUNTS[authParam]) {
            this.currentUser = DEMO_ACCOUNTS[authParam];
            sessionStorage.setItem('suntech_auth_user', JSON.stringify(this.currentUser));
        }

        // Check if an existing authenticated session is saved in sessionStorage
        if (this.currentUser && ROLE_PERMISSIONS[this.currentUser.role]) {
            document.body.classList.remove('not-authenticated');
            document.body.classList.add('authenticated');
            
            const authScreen = document.getElementById('auth-screen');
            if (authScreen) authScreen.style.display = 'none';
            if (this.root) this.root.style.display = 'block';

            this.renderNavForRole(this.currentUser.role);
            
            const rawHash = window.location.hash.replace('#', '');
            const roleConfig = ROLE_PERMISSIONS[this.currentUser.role];
            const defaultRoute = 'home';
            const targetRoute = (rawHash && rawHash !== 'login' && roleConfig && roleConfig.allowedRoutes.includes(rawHash))
                ? rawHash
                : defaultRoute;
                
            this.navigate(targetRoute);
        } else {
            document.body.classList.add('not-authenticated');
            document.body.classList.remove('authenticated');
            const authScreen = document.getElementById('auth-screen');
            if (authScreen) authScreen.style.display = 'flex';
            if (this.root) this.root.style.display = 'none';
            
            // Pre-select Admin as the default demo account in the combobox
            this.selectDemoAccount('admin', false);
        }
    }

    setupBackgroundGrid() {
        // Create the 3D grid container dynamically
        const gridContainer = document.createElement('div');
        gridContainer.className = 'bg-3d-grid-container';
        
        const gridInner = document.createElement('div');
        gridInner.id = 'bg-3d-grid-inner';
        gridInner.className = 'bg-3d-grid-inner';
        
        gridContainer.appendChild(gridInner);
        document.body.prepend(gridContainer); // Prepend so it sits behind everything

        // Parallax effect on scroll
        window.addEventListener('scroll', () => {
            if (!gridInner) return;
            const scrolled = window.scrollY;
            gridInner.style.backgroundPosition = `center ${scrolled * 0.8}px`;
        }, { passive: true });
    }

    setupAuthUI() {
        if (window.__authEngineInitialized) {
            return;
        }
        const usernameInput = document.getElementById('login-username');
        const passwordInput = document.getElementById('login-password');
        const comboboxWrap = document.getElementById('email-combobox-wrap');
        const dropdownList = document.getElementById('email-dropdown-list');
        const dropdownToggleBtn = document.getElementById('btn-email-dropdown-toggle');
        const togglePasswordBtn = document.getElementById('btn-toggle-password');
        const toggleEyeIcon = document.getElementById('toggle-eye-icon');
        const loginForm = document.getElementById('login-form');
        const submitBtn = document.getElementById('btn-login-submit');
        const forgotPassLink = document.getElementById('link-forgot-pass');
        const headerSignoutBtn = document.getElementById('header-signout-btn');
        const mobileSignoutBtn = document.getElementById('mobile-signout-btn');

        if (!usernameInput || !dropdownList) return;

        // Populate initial dropdown options
        this.renderEmailDropdown('');

        // Helper to open dropdown
        const openDropdown = (filter = '') => {
            this.renderEmailDropdown(filter);
            dropdownList.style.display = 'block';
            comboboxWrap?.classList.add('is-open');
            usernameInput.setAttribute('aria-expanded', 'true');
            this.highlightedIndex = -1;
        };

        // Helper to close dropdown
        const closeDropdown = () => {
            dropdownList.style.display = 'none';
            comboboxWrap?.classList.remove('is-open');
            usernameInput.setAttribute('aria-expanded', 'false');
            this.highlightedIndex = -1;
            dropdownList.querySelectorAll('.combobox-item').forEach(el => el.classList.remove('highlighted'));
        };

        // Open on input focus or click
        usernameInput.addEventListener('focus', () => {
            openDropdown('');
        });

        usernameInput.addEventListener('click', () => {
            openDropdown('');
        });

        // Toggle button click
        if (dropdownToggleBtn) {
            dropdownToggleBtn.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                if (dropdownList.style.display === 'block') {
                    closeDropdown();
                } else {
                    usernameInput.focus();
                    openDropdown('');
                }
            });
        }

        // Filter dropdown while typing & live feedback
        usernameInput.addEventListener('input', () => {
            const val = usernameInput.value.trim().toLowerCase();
            openDropdown(val);
            this.hideLoginError();

            const matched = this.findDemoAccount(val);
            if (matched) {
                this.updateActiveCredentialsUI(matched);
                if (passwordInput && (!passwordInput.value || passwordInput.value === '12345')) {
                    passwordInput.value = matched.password || '12345';
                }
            } else {
                this.updateActiveCredentialsUI(null, usernameInput.value.trim());
            }
        });

        // Accessible Keyboard navigation within combobox
        usernameInput.addEventListener('keydown', (e) => {
            const items = dropdownList.querySelectorAll('.combobox-item');
            const isOpen = dropdownList.style.display === 'block';

            if (e.key === 'ArrowDown') {
                e.preventDefault();
                if (!isOpen) {
                    openDropdown('');
                    return;
                }
                if (items.length > 0) {
                    this.highlightedIndex = (this.highlightedIndex + 1) % items.length;
                    this.updateComboboxHighlight(items);
                }
            } else if (e.key === 'ArrowUp') {
                e.preventDefault();
                if (!isOpen) {
                    openDropdown('');
                    return;
                }
                if (items.length > 0) {
                    this.highlightedIndex = (this.highlightedIndex - 1 + items.length) % items.length;
                    this.updateComboboxHighlight(items);
                }
            } else if (e.key === 'Enter') {
                if (isOpen && this.highlightedIndex >= 0 && items[this.highlightedIndex]) {
                    e.preventDefault();
                    const key = items[this.highlightedIndex].dataset.key;
                    if (key && DEMO_ACCOUNTS[key]) {
                        this.selectDemoAccount(key);
                    }
                    closeDropdown();
                } else {
                    closeDropdown();
                    // Let normal form submit happen
                }
            } else if (e.key === 'Escape') {
                e.preventDefault();
                closeDropdown();
            } else if (e.key === 'Tab') {
                closeDropdown();
            }
        });

        // Close dropdown when clicking outside
        document.addEventListener('click', (e) => {
            if (comboboxWrap && !comboboxWrap.contains(e.target)) {
                closeDropdown();
            }
        });

        // Toggle Password Visibility
        if (togglePasswordBtn && passwordInput) {
            togglePasswordBtn.addEventListener('click', () => {
                const isPassword = passwordInput.type === 'password';
                passwordInput.type = isPassword ? 'text' : 'password';
                if (toggleEyeIcon) {
                    toggleEyeIcon.innerHTML = isPassword 
                        ? `<path d="M9.88 9.88a3 3 0 1 0 4.24 4.24"/><path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68"/><path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61"/><line x1="2" x2="22" y1="2" y2="22"/>`
                        : `<path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/>`;
                }
                togglePasswordBtn.setAttribute('aria-label', isPassword ? 'Hide password' : 'Show password');
            });
        }

        // Forgot password demo helper
        if (forgotPassLink) {
            forgotPassLink.addEventListener('click', (e) => {
                e.preventDefault();
                if (passwordInput) passwordInput.value = '12345';
                this.showToast('Demo Password is: 12345', 'info');
            });
        }

        // Direct Sign-In Button Click Handler
        if (submitBtn) {
            submitBtn.addEventListener('click', (e) => {
                e.preventDefault();
                closeDropdown();
                this.handleLoginSubmit();
            });
        }

        // Sign-In Form Submission Handler
        if (loginForm) {
            loginForm.addEventListener('submit', (e) => {
                e.preventDefault();
                closeDropdown();
                this.handleLoginSubmit();
            });
        }

        // Sign-Out Action Handler
        const doSignOut = () => {
            sessionStorage.removeItem('suntech_auth_user');
            this.currentUser = null;
            this.currentRoute = '';
            document.body.classList.remove('authenticated');
            document.body.classList.add('not-authenticated');

            const authScreen = document.getElementById('auth-screen');
            if (authScreen) authScreen.style.display = 'flex';
            if (this.root) this.root.style.display = 'none';

            // Close mobile menu if open
            document.querySelector('.mobile-nav-panel')?.classList.remove('is-open');
            document.querySelector('.mobile-menu-btn')?.classList.remove('active');

            // Reset inputs to default demo
            this.selectDemoAccount('admin', false);
            this.hideLoginError();

            window.location.hash = '';
            this.showToast('You have been signed out of the portal.', 'info');
        };

        if (headerSignoutBtn) headerSignoutBtn.addEventListener('click', doSignOut);
        if (mobileSignoutBtn) mobileSignoutBtn.addEventListener('click', doSignOut);
    }

    renderEmailDropdown(filterText = '') {
        const dropdownList = document.getElementById('email-dropdown-list');
        const usernameInput = document.getElementById('login-username');
        if (!dropdownList) return;

        const currentVal = usernameInput ? usernameInput.value.trim().toLowerCase() : '';
        const search = (filterText || '').trim().toLowerCase();

        const accountKeys = Object.keys(DEMO_ACCOUNTS);
        const filteredKeys = accountKeys.filter(key => {
            if (!search) return true;
            const acc = DEMO_ACCOUNTS[key];
            return (
                acc.username.toLowerCase().includes(search) ||
                acc.displayName.toLowerCase().includes(search) ||
                acc.roleCategory.toLowerCase().includes(search) ||
                acc.description.toLowerCase().includes(search) ||
                (acc.aliasUsernames && acc.aliasUsernames.some(a => a.toLowerCase().includes(search)))
            );
        });

        if (filteredKeys.length === 0) {
            dropdownList.innerHTML = `
                <li class="combobox-empty-message" role="status">
                    No matching demo account.<br>
                    <small>Available: Administrator, Admin, Customer, HR, Warehouse</small>
                </li>
            `;
            return;
        }

        dropdownList.innerHTML = filteredKeys.map(key => {
            const acc = DEMO_ACCOUNTS[key];
            const isSelected = currentVal === acc.username.toLowerCase() || currentVal === key;
            return `
                <li class="combobox-item ${isSelected ? 'is-selected' : ''}" 
                    role="option" 
                    id="email-opt-${key}"
                    aria-selected="${isSelected ? 'true' : 'false'}"
                    data-key="${key}" 
                    data-email="${acc.username}">
                    <div class="combobox-item-info">
                        <div class="combobox-item-header">
                            <span class="combobox-role-title">${acc.displayName}</span>
                            <span class="combobox-role-tag tag-${acc.role}">${acc.roleCategory}</span>
                        </div>
                        <div class="combobox-item-email">${acc.username}</div>
                        <div class="combobox-item-desc">${acc.description}</div>
                    </div>
                    <svg class="combobox-item-check" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                        <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                </li>
            `;
        }).join('');

        // Attach click handlers to each option
        dropdownList.querySelectorAll('.combobox-item').forEach(item => {
            item.addEventListener('click', (e) => {
                e.stopPropagation();
                const key = item.dataset.key;
                if (key && DEMO_ACCOUNTS[key]) {
                    this.selectDemoAccount(key);
                }
                const comboboxWrap = document.getElementById('email-combobox-wrap');
                dropdownList.style.display = 'none';
                comboboxWrap?.classList.remove('is-open');
                usernameInput?.setAttribute('aria-expanded', 'false');
            });
        });
    }

    updateComboboxHighlight(items) {
        items.forEach((item, idx) => {
            if (idx === this.highlightedIndex) {
                item.classList.add('highlighted');
                item.scrollIntoView({ block: 'nearest' });
                const usernameInput = document.getElementById('login-username');
                if (usernameInput) {
                    usernameInput.setAttribute('aria-activedescendant', item.id);
                }
            } else {
                item.classList.remove('highlighted');
            }
        });
    }

    selectDemoAccount(accountKey, focusInput = true) {
        const acc = DEMO_ACCOUNTS[accountKey];
        if (!acc) return;

        const usernameInput = document.getElementById('login-username');
        const passwordInput = document.getElementById('login-password');

        if (usernameInput) {
            usernameInput.value = acc.username;
            if (focusInput) usernameInput.focus();
        }
        if (passwordInput) {
            passwordInput.value = acc.password || '12345';
        }

        this.updateActiveCredentialsUI(acc);
        this.hideLoginError();
        this.renderEmailDropdown('');
    }

    updateActiveCredentialsUI(account, fallbackText = '') {
        const activeCredRole = document.getElementById('active-cred-role');
        const passwordHintText = document.getElementById('password-hint-text');

        if (account) {
            if (activeCredRole) activeCredRole.textContent = account.badgeText || account.displayName;
            if (passwordHintText) passwordHintText.textContent = `Demo: ${account.password || '12345'}`;
        } else {
            if (activeCredRole) activeCredRole.textContent = fallbackText ? `${fallbackText} (Unconfigured)` : `Demo Account Required`;
            if (passwordHintText) passwordHintText.textContent = `Demo: 12345`;
        }
    }

    findDemoAccount(identifier) {
        if (!identifier) return null;
        const needle = identifier.trim().toLowerCase();
        for (const key of Object.keys(DEMO_ACCOUNTS)) {
            const acc = DEMO_ACCOUNTS[key];
            if (
                key.toLowerCase() === needle ||
                acc.role.toLowerCase() === needle ||
                acc.username.toLowerCase() === needle ||
                (acc.aliasUsernames && acc.aliasUsernames.some(a => a.toLowerCase() === needle))
            ) {
                return acc;
            }
        }
        return null;
    }

    handleLoginSubmit() {
        const usernameInput = document.getElementById('login-username');
        const passwordInput = document.getElementById('login-password');
        const rawUsername = usernameInput ? usernameInput.value.trim().toLowerCase() : '';
        const rawPassword = passwordInput ? passwordInput.value.trim() : '';

        if (!rawUsername) {
            this.showLoginError('Please enter or select a demo account email.');
            if (usernameInput) usernameInput.focus();
            return;
        }

        // Validate that entered email is a configured demo account
        const matchedAccount = this.findDemoAccount(rawUsername);

        if (!matchedAccount) {
            this.showLoginError('Unknown demo account. Please select one of the configured demo accounts (Administrator, Admin, Customer, HR, or Warehouse) from the email dropdown.');
            if (usernameInput) usernameInput.focus();
            return;
        }

        if (!rawPassword) {
            this.showLoginError('Please enter your password. (Demo password is 12345)');
            if (passwordInput) passwordInput.focus();
            return;
        }

        // Validate password (demo password is 12345)
        const validDemoPassword = matchedAccount.password || '12345';
        const isPasswordValid = (
            rawPassword === validDemoPassword ||
            rawPassword === '12345' || 
            rawPassword === '12345 + 12345' || 
            rawPassword === '12345+12345' ||
            rawPassword === '12345 12345' || 
            rawPassword === '1234512345' || 
            rawPassword === 'password1234'
        );

        if (!isPasswordValid) {
            this.showLoginError(`Invalid credentials. Demo password for ${matchedAccount.displayName} is ${validDemoPassword}.`);
            if (passwordInput) passwordInput.focus();
            return;
        }

        this.hideLoginError();
        this.executeLoginTransition(matchedAccount);
    }

    executeLoginTransition(account) {
        const loadingOverlay = document.getElementById('auth-loading-overlay');
        const loadingRoleText = document.getElementById('auth-loading-role-text');
        const progressBar = document.getElementById('auth-progress-bar');
        const submitSpinner = document.getElementById('login-btn-spinner');
        const submitText = document.getElementById('login-btn-text');

        if (submitSpinner) submitSpinner.style.display = 'inline-block';
        if (submitText) submitText.textContent = 'Verifying...';
        if (loadingRoleText) loadingRoleText.textContent = `Authenticating ${account.badgeText || account.displayName}...`;
        if (loadingOverlay) loadingOverlay.classList.add('is-active');

        setTimeout(() => {
            if (progressBar) progressBar.style.width = '100%';
        }, 40);

        setTimeout(() => {
            // Save demo session
            sessionStorage.setItem('suntech_auth_user', JSON.stringify(account));
            this.currentUser = account;

            // Transition DOM classes to authenticated
            document.body.classList.remove('not-authenticated');
            document.body.classList.add('authenticated');

            // Explicitly hide the login card screen
            const authScreen = document.getElementById('auth-screen');
            if (authScreen) authScreen.style.display = 'none';

            // Ensure app-root is displayed
            if (this.root) this.root.style.display = 'block';

            // Render navigation for role
            this.renderNavForRole(account.role);

            // Always navigate to the authentic Suntech homepage
            const targetRoute = 'home';
            window.location.hash = targetRoute;
            this.navigate(targetRoute);

            // Scroll to top of the page
            window.scrollTo(0, 0);

            // Hide overlay smoothly
            if (loadingOverlay) loadingOverlay.classList.remove('is-active');
            if (progressBar) progressBar.style.width = '0%';
            if (submitSpinner) submitSpinner.style.display = 'none';
            if (submitText) submitText.textContent = 'Sign In';

            this.showToast(`Welcome! Signed in as ${account.displayName} (${account.badgeText})`, 'success');
        }, 550);
    }

    showLoginError(msg) {
        const errorAlert = document.getElementById('login-error-alert');
        const errorMessage = document.getElementById('login-error-message');
        if (errorAlert && errorMessage) {
            errorMessage.textContent = msg;
            errorAlert.style.display = 'flex';
        }
    }

    hideLoginError() {
        const errorAlert = document.getElementById('login-error-alert');
        if (errorAlert) errorAlert.style.display = 'none';
    }

    renderNavForRole(role) {
        const permissions = ROLE_PERMISSIONS[role];
        if (!permissions) return;

        // Update header role chip text
        const headerRoleText = document.getElementById('header-role-text');
        const mobileRoleText = document.getElementById('mobile-role-text');
        if (headerRoleText) headerRoleText.textContent = permissions.badgeText;
        if (mobileRoleText) mobileRoleText.textContent = `Signed in: ${permissions.badgeText}`;

        // Header main-nav links
        const mainNav = document.getElementById('main-nav');
        const activeRoute = this.currentRoute || 'home';
        if (mainNav) {
            mainNav.innerHTML = permissions.navItems.map(item => {
                const isActive = item.route === activeRoute;
                return `<a href="#${item.route}" class="nav-link ${isActive ? 'active' : ''}" data-route="${item.route}">${item.label}</a>`;
            }).join('');
        }

        // Mobile navigation links
        const mobileNavContent = document.getElementById('mobile-nav-content');
        if (mobileNavContent) {
            mobileNavContent.innerHTML = permissions.navItems.map(item => {
                const isActive = item.route === activeRoute;
                return `<a href="#${item.route}" class="mobile-nav-link ${isActive ? 'active' : ''}" data-route="${item.route}">${item.label}</a>`;
            }).join('');
        }

        // Quote drawer button visibility
        const quoteBtn = document.getElementById('open-quote-list');
        const requestQuoteBtn = document.getElementById('header-request-quote-btn');
        if (quoteBtn) {
            quoteBtn.style.display = (role === 'customer' || role === 'admin') ? 'inline-flex' : 'none';
        }
        if (requestQuoteBtn) {
            requestQuoteBtn.style.display = (role === 'customer') ? 'inline-flex' : 'none';
        }
    }

    setupRouter() {
        window.addEventListener('hashchange', () => {
            if (!this.currentUser) {
                this.currentUser = JSON.parse(sessionStorage.getItem('suntech_auth_user')) || null;
            }
            if (!this.currentUser) return;
            const hash = window.location.hash.replace('#', '') || 'home';
            if (hash !== this.currentRoute && !this.isNavigating) {
                this.navigate(hash);
            }
        });

        // Universal robust click delegation for all routes and catalog modals
        document.addEventListener('click', (e) => {
            // 1. Catalog button click (header, mobile, footer, inline)
            const catBtn = e.target.closest('#open-catalog-btn, #mobile-open-catalog-btn, [data-action="open-catalog"]');
            if (catBtn) {
                e.preventDefault();
                e.stopPropagation();
                const modal = document.getElementById('catalog-modal');
                if (modal) {
                    modal.classList.add('is-open');
                    const iframe = modal.querySelector('iframe');
                    if (iframe && (!iframe.src || iframe.src === 'about:blank' || !iframe.src.includes('catalog.pdf'))) {
                        iframe.src = 'catalog.pdf#toolbar=1&navpanes=0';
                    }
                }
                document.querySelector('.mobile-nav-panel')?.classList.remove('is-open');
                document.querySelector('.mobile-menu-btn')?.classList.remove('active');
                return;
            }

            // 2. Catalog close click or outside click
            const catClose = e.target.closest('.close-catalog-btn');
            if (catClose || e.target.id === 'catalog-modal') {
                e.preventDefault();
                document.getElementById('catalog-modal')?.classList.remove('is-open');
                return;
            }

            // 3. Navigation link click
            const link = e.target.closest('[data-route]');
            if (link) {
                e.preventDefault();
                const targetRoute = link.dataset.route;
                if (targetRoute) {
                    if (targetRoute === 'products' && link.dataset.category) {
                        sessionStorage.setItem('suntech_initial_category', link.dataset.category);
                    }
                    document.querySelector('.mobile-nav-panel')?.classList.remove('is-open');
                    document.querySelector('.mobile-menu-btn')?.classList.remove('active');
                    document.body.style.overflow = '';
                    this.navigate(targetRoute);
                }
            }
        });
    }

    setupEventListeners() {
        // Scroll event for 3D Nav Bar
        const header = document.querySelector('.site-header');
        const handleScroll = () => {
            if (window.scrollY > 25) {
                header?.classList.add('scrolled');
            } else {
                header?.classList.remove('scrolled');
            }
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll();

        // Mobile Menu Toggle & Close Handlers
        const menuBtn = document.querySelector('.mobile-menu-btn');
        const mobileNav = document.querySelector('.mobile-nav-panel');
        const closeNavBtn = document.getElementById('mobile-nav-close-btn');

        const toggleMobileNav = () => {
            if (!mobileNav) return;
            const isOpen = mobileNav.classList.toggle('is-open');
            menuBtn?.classList.toggle('active', isOpen);
            document.body.style.overflow = isOpen ? 'hidden' : '';
        };

        const closeMobileNav = () => {
            mobileNav?.classList.remove('is-open');
            menuBtn?.classList.remove('active');
            document.body.style.overflow = '';
        };

        if (menuBtn) {
            menuBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                toggleMobileNav();
            });
        }

        if (closeNavBtn) {
            closeNavBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                closeMobileNav();
            });
        }

        // Close modal on Escape key
        window.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                const modal = document.getElementById('catalog-modal');
                if (modal && modal.classList.contains('is-open')) {
                    modal.classList.remove('is-open');
                }
            }
        });

        // Quote Drawer
        const openQuoteBtn = document.getElementById('open-quote-list');
        const closeQuoteBtn = document.querySelector('.close-drawer-btn');
        const quoteDrawer = document.getElementById('quote-drawer');
        const overlay = document.querySelector('.drawer-overlay');

        const toggleDrawer = (force) => {
            if (!quoteDrawer || !overlay) return;
            const isOpen = force !== undefined ? force : !quoteDrawer.classList.contains('is-open');
            quoteDrawer.classList.toggle('is-open', isOpen);
            overlay.classList.toggle('is-open', isOpen);
            if(isOpen) this.renderQuoteDrawer();
        };

        if (openQuoteBtn) openQuoteBtn.addEventListener('click', () => toggleDrawer(true));
        if (closeQuoteBtn) closeQuoteBtn.addEventListener('click', () => toggleDrawer(false));
        if (overlay) overlay.addEventListener('click', () => toggleDrawer(false));
        
        const submitBtn = document.getElementById('submit-quote-btn');
        if (submitBtn) {
            submitBtn.addEventListener('click', () => {
                toggleDrawer(false);
            });
        }
    }

    async navigate(route) {
        if (this.isNavigating) return;
        this.isNavigating = true;

        try {
            // If not authenticated, attempt session restore
            if (!this.currentUser) {
                this.currentUser = JSON.parse(sessionStorage.getItem('suntech_auth_user')) || null;
            }
            if (!this.currentUser) {
                document.body.classList.add('not-authenticated');
                document.body.classList.remove('authenticated');
                return;
            }

            const permissions = ROLE_PERMISSIONS[this.currentUser.role] || ROLE_PERMISSIONS.customer;
            let targetRoute = route || permissions.defaultRoute || 'home';

            const publicRoutes = ['home', 'products', 'catalog', 'divisions', 'about', 'contact', 'privacy', 'terms'];

            // If targetRoute is an existing section element rather than a full view, scroll it into view
            const targetSection = document.getElementById(targetRoute);
            if (!views[targetRoute] && targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
                this.currentRoute = targetRoute;
                if (window.location.hash.replace('#', '') !== targetRoute) {
                    window.location.hash = targetRoute;
                }
                return;
            }

            // Role-based Access Control (RBAC) enforcement for elevated admin routes
            if (!publicRoutes.includes(targetRoute) && permissions.allowedRoutes && !permissions.allowedRoutes.includes(targetRoute)) {
                this.showToast(`Access Restricted: "${targetRoute}" requires elevated role privileges. Redirecting to home.`, 'warning');
                targetRoute = permissions.defaultRoute || 'home';
            }

            // Update URL hash without retriggering navigate
            if (window.location.hash.replace('#', '') !== targetRoute) {
                window.location.hash = targetRoute;
            }

            // Smooth fast transition
            this.root.classList.add('page-transitioning');
            
            const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
            await new Promise(resolve => setTimeout(resolve, prefersReducedMotion ? 20 : 80));
            
            // Update content
            const viewContent = views[targetRoute] || views[permissions.defaultRoute] || views['home'];
            this.root.innerHTML = viewContent;
            this.currentRoute = targetRoute;
            
            // Setup page specific logic
            if (targetRoute === 'products') {
                this.setupProductsPage();
            } else if (targetRoute === 'contact') {
                this.setupContactPage();
            } else if (targetRoute === 'home') {
                this.setupHomeBrandsMarquee();
            }
            
            // Update active nav links
            document.querySelectorAll('.nav-link').forEach(link => {
                link.classList.toggle('active', link.dataset.route === targetRoute);
            });
            document.querySelectorAll('.mobile-nav-link').forEach(link => {
                link.classList.toggle('active', link.dataset.route === targetRoute);
            });

            // Scroll to top
            window.scrollTo({ top: 0, behavior: 'instant' });
            
            // Fade in
            this.root.classList.remove('page-transitioning');
        } finally {
            this.isNavigating = false;
        }
    }

    showToast(message, type = 'info') {
        const container = document.getElementById('toast-container');
        if (!container) return;

        const toast = document.createElement('div');
        toast.className = `toast toast-${type}`;
        
        let icon = 'ℹ️';
        if (type === 'success') icon = '✓';
        if (type === 'warning') icon = '⚠️';
        if (type === 'error') icon = '✕';

        toast.innerHTML = `
            <span class="toast-icon">${icon}</span>
            <span class="toast-message">${message}</span>
            <button class="toast-close" aria-label="Close notification">&times;</button>
        `;

        container.appendChild(toast);

        const removeToast = () => {
            toast.classList.add('toast-hiding');
            setTimeout(() => toast.remove(), 250);
        };

        toast.querySelector('.toast-close').addEventListener('click', removeToast);
        setTimeout(removeToast, 4000);
    }

    setupGlobalDemoHelpers() {
        // RFQ Review Details Demo Modal/Alert
        window.demoShowRfqDetails = (rfqId) => {
            this.showToast(`[Demo Mode] Reviewing specifications for quotation ${rfqId}.`, 'info');
            alert(`Suntech RFQ Review (${rfqId})\n\nContractor: Al-Khor Infrastructure JV\nProject: Sports Complex Phase 2\nKey Materials: 200x GI Threaded Rods (M12), 50x Unifix Wedge Anchors\nDelivery Destination: Industrial Area, Doha\nTarget Delivery: Within 3 business days\n\n[Demo Status: Pricing Verified • Ready for Dispatch]`);
        };

        // Dispatch RFQ Demo Action
        window.demoDispatchRfq = (rfqId) => {
            this.showToast(`[Demo Action] Quotation ${rfqId} dispatched to contractor via email & client portal!`, 'success');
            const row = document.querySelector(`tr[data-status="pending"]`);
            if (row) {
                row.dataset.status = 'sent';
                const statusPill = row.querySelector('.status-pill');
                if (statusPill) {
                    statusPill.className = 'status-pill status-dispatched';
                    statusPill.textContent = 'Quote Sent';
                }
                const actionBtn = row.querySelector('.btn-table-action');
                if (actionBtn) {
                    actionBtn.textContent = 'View PDF';
                    actionBtn.onclick = () => window.demoShowRfqDetails(rfqId);
                }
            }
        };

        // Inventory Restock Demo Action
        window.demoTriggerRestock = (item) => {
            this.showToast(`[Demo Action] Restock purchase order created for "${item}". Supplier notified.`, 'success');
        };

        window.demoRestockAll = () => {
            this.showToast(`[Demo Action] Batch replenishment order generated for all low-stock items.`, 'success');
            document.querySelectorAll('.status-pill.status-urgent').forEach(el => {
                if (el.textContent.includes('Low Stock')) {
                    el.className = 'status-pill status-approved';
                    el.textContent = 'Restocking';
                }
            });
        };

        // RFQ Filter Tabs Demo Action
        window.demoFilterRfqs = (filter, btn) => {
            document.querySelectorAll('#rfq-filter-tabs .filter-pill').forEach(b => b.classList.remove('active'));
            if (btn) btn.classList.add('active');

            const rows = document.querySelectorAll('#all-rfqs-table tbody tr');
            rows.forEach(r => {
                if (filter === 'all' || r.dataset.status === filter) {
                    r.style.display = '';
                } else {
                    r.style.display = 'none';
                }
            });
        };

        // Export RFQs CSV Demo Action
        window.demoExportRfqs = () => {
            const csvContent = "data:text/csv;charset=utf-8," 
                + "RFQ_ID,Contractor,Project,Materials,Date,Status\n"
                + "RFQ-1048,Al-Khor JV,Sports Complex,200x GI Rods 50x Anchors,2026-10-25,Pending\n"
                + "RFQ-1047,Al-Jaber MEP,Lusail Marina Towers,80x Copper Pipes 120x Fittings,2026-10-24,Sent\n"
                + "RFQ-1046,Consolidated Eng,Qatar Metro,40x Grinding Discs 60x Tapes,2026-10-23,Approved\n"
                + "RFQ-1045,Redco Construction,West Bay Tower,30x Industrial Grilles,2026-10-22,Pending\n"
                + "RFQ-1044,Q-Energy Contractors,Ras Laffan Substation,150x Cable Glands,2026-10-20,Sent\n"
                + "RFQ-1043,Gulf Contracting,Al-Wakrah Logistics,100x Helmets 200x Masks,2026-10-19,Approved\n";
            
            const encodedUri = encodeURI(csvContent);
            const link = document.createElement("a");
            link.setAttribute("href", encodedUri);
            link.setAttribute("download", "suntech_rfq_summary_demo.csv");
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            this.showToast('Downloaded demo RFQ export: "suntech_rfq_summary_demo.csv"', 'success');
        };

        // RBAC Audit Inspection Demo Action
        window.demoAuditRole = (roleName) => {
            alert(`[RBAC Governance Inspection - Demo]\n\nRole: ${roleName}\nSecurity Level: Enforced via Client Demo Router\nAccess Permissions: ${roleName === 'Administrator' ? 'Full Executive, Operations, Inventory & Audit Logs' : roleName === 'Admin' ? 'Operations, RFQs, Stock Fulfillment & Products' : 'Public Home, Catalog Browsing & RFQ Submission'}\nSession Store: Browser Session Storage (Demo Sandbox)`);
        };

        window.demoShowStockDetails = (sku) => {
            this.showToast(`[Stock Audit] SKU ${sku} verified in Doha Industrial Area warehouse.`, 'info');
        };
    }


    setupHomeBrandsMarquee() {
        const marqueeContainer = document.getElementById('homeBrandsMarqueeContainer');
        const marqueeTrack = document.getElementById('homeBrandsMarquee');
        if (!marqueeContainer || !marqueeTrack || !window.featuredBrands) return;

        const renderCards = window.featuredBrands.map(b => `
            <div class="home-marquee-card">
                <img src="${b.img}" alt="${b.name}">
            </div>
        `).join('');

        // Duplicate enough times for a continuous horizontal scroll
        marqueeTrack.innerHTML = renderCards + renderCards + renderCards + renderCards; 

        let scrollPos = 0;
        let isHovered = false;
        const scrollSpeed = 0.5;

        const animateMarquee = () => {
            const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
            if (prefersReducedMotion) return;

            if (!isHovered) {
                scrollPos += scrollSpeed;
                
                // Seamless loop check
                if (scrollPos >= marqueeTrack.scrollWidth / 2) {
                    scrollPos = 0;
                }
                marqueeContainer.scrollLeft = scrollPos;
            }
            requestAnimationFrame(animateMarquee);
        };
        
        requestAnimationFrame(animateMarquee);

        marqueeContainer.addEventListener('mouseenter', () => { isHovered = true; });
        marqueeContainer.addEventListener('mouseleave', () => { 
            isHovered = false; 
            scrollPos = marqueeContainer.scrollLeft; 
        });

        marqueeContainer.addEventListener('touchstart', () => { isHovered = true; }, {passive: true});
        marqueeContainer.addEventListener('touchend', () => { 
            setTimeout(() => { isHovered = false; scrollPos = marqueeContainer.scrollLeft; }, 1000);
        }, {passive: true});
    }

    setupProductsPage() {
        const container = document.getElementById('products-container');
        const filterBtns = document.querySelectorAll('.filter-btn');
        
        const renderProducts = (filter) => {
            const filtered = filter === 'all' 
                ? products 
                : products.filter(p => p.category === filter);
            
            container.innerHTML = filtered.map(p => `
                <div class="product-card">
                    <div class="product-info">
                        <span class="product-tag">${categories.find(c => c.id === p.category)?.name || 'Product'}</span>
                        <h4 class="product-name">${p.name}</h4>
                        <p class="product-spec">${p.spec}</p>
                        <div class="product-action">
                            ${this.quoteList.some(item => item.id === p.id) 
                                ? `<button class="btn-secondary full-width" disabled style="opacity: 0.5;">Added to Quote</button>`
                                : `<button class="btn-secondary full-width add-to-quote-btn" data-id="${p.id}">Add to Quote List</button>`
                            }
                        </div>
                    </div>
                </div>
            `).join('');

            // Attach listeners to new buttons
            container.querySelectorAll('.add-to-quote-btn').forEach(btn => {
                btn.addEventListener('click', (e) => {
                    const id = e.target.dataset.id;
                    const product = products.find(p => p.id === id);
                    if (product) {
                        this.addToQuote(product);
                        renderProducts(filter); // Re-render to update button state
                    }
                });
            });
        };

        // Handle initial filter from session storage (if navigated from home category card)
        const initialFilter = sessionStorage.getItem('suntech_initial_category') || 'all';
        sessionStorage.removeItem('suntech_initial_category');
        
        filterBtns.forEach(btn => {
            btn.classList.toggle('active', btn.dataset.filter === initialFilter);
            btn.addEventListener('click', (e) => {
                filterBtns.forEach(b => b.classList.remove('active'));
                e.target.classList.add('active');
                renderProducts(e.target.dataset.filter);
            });
        });

        renderProducts(initialFilter);

        // Brands Rail Logic
        const setupBrandsRail = () => {
            const railContainer = document.getElementById('brandsRailContainer');
            const rail = document.getElementById('brandsRail');
            if (!railContainer || !rail || !window.featuredBrands) return;

            const renderCards = window.featuredBrands.map(b => `
                <div class="brand-card" data-brand="${b.name}">
                    <div class="img-wrapper">
                        <img src="${b.img}" alt="${b.name}">
                    </div>
                    <div class="brand-label">
                        ${b.name}
                        <span class="accent">${b.desc}</span>
                    </div>
                </div>
            `).join('');
            
            // Duplicate to create seamless scroll loop
            rail.innerHTML = renderCards + renderCards;

            let scrollPos = 0;
            let isHovered = false;
            const scrollSpeed = 0.4;
            
            const animateRail = () => {
                // Respect reduced motion
                const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
                if (prefersReducedMotion) return;

                if (!isHovered && window.innerWidth > 900) {
                    scrollPos += scrollSpeed;
                    
                    // Seamless loop check
                    if (scrollPos >= rail.scrollHeight / 2) {
                        scrollPos = 0;
                    }
                    railContainer.scrollTop = scrollPos;
                }
                requestAnimationFrame(animateRail);
            };
            
            requestAnimationFrame(animateRail);

            railContainer.addEventListener('mouseenter', () => { isHovered = true; });
            railContainer.addEventListener('mouseleave', () => { 
                isHovered = false; 
                scrollPos = railContainer.scrollTop; 
            });

            // Handle touch devices
            railContainer.addEventListener('touchstart', () => { isHovered = true; }, {passive: true});
            railContainer.addEventListener('touchend', () => { 
                setTimeout(() => { isHovered = false; scrollPos = railContainer.scrollTop; }, 1000);
            }, {passive: true});
        };

        setupBrandsRail();
    }

    setupContactPage() {
        const textarea = document.getElementById('form-quote-details');
        if (this.quoteList.length > 0 && textarea) {
            const listText = this.quoteList.map(item => `- ${item.name} (${item.spec})`).join('\\n');
            textarea.value = "Please provide a quote for the following items:\\n\\n" + listText + "\\n\\nAdditional Notes:\\n";
        }

        const form = document.getElementById('quote-form');
        if(form) {
            form.addEventListener('submit', (e) => {
                e.preventDefault();
                alert('Thank you for your enquiry. Our team will contact you shortly.');
                this.quoteList = [];
                this.saveQuoteList();
                this.updateQuoteBadge();
                this.navigate('home');
                window.location.hash = 'home';
            });
        }
    }

    addToQuote(product) {
        if (!this.quoteList.some(item => item.id === product.id)) {
            this.quoteList.push(product);
            this.saveQuoteList();
            this.updateQuoteBadge();
            
            // Visual feedback
            const drawerBtn = document.getElementById('open-quote-list');
            drawerBtn.style.color = 'var(--safety-orange)';
            setTimeout(() => drawerBtn.style.color = '', 500);
        }
    }

    removeFromQuote(id) {
        this.quoteList = this.quoteList.filter(item => item.id !== id);
        this.saveQuoteList();
        this.updateQuoteBadge();
        this.renderQuoteDrawer();
        
        // If on products page, refresh buttons
        if (this.currentRoute === 'products') {
            const activeFilter = document.querySelector('.filter-btn.active')?.dataset.filter || 'all';
            this.setupProductsPage(); // Re-render products to reset button state
        }
    }

    saveQuoteList() {
        localStorage.setItem('suntech_quote_list', JSON.stringify(this.quoteList));
    }

    updateQuoteBadge() {
        const badge = document.getElementById('quote-count');
        badge.textContent = this.quoteList.length;
        badge.style.display = this.quoteList.length > 0 ? 'flex' : 'none';
    }

    renderQuoteDrawer() {
        const container = document.getElementById('quote-list-items');
        if (this.quoteList.length === 0) {
            container.innerHTML = '<div class="empty-quote-state">Your quote list is currently empty.</div>';
            return;
        }

        container.innerHTML = this.quoteList.map(item => `
            <div class="quote-item">
                <img src="${item.img}" alt="${item.name}" class="quote-item-img">
                <div class="quote-item-details">
                    <h4>${item.name}</h4>
                    <p>${item.spec}</p>
                    <button class="remove-quote-item" data-id="${item.id}">Remove</button>
                </div>
            </div>
        `).join('');

        container.querySelectorAll('.remove-quote-item').forEach(btn => {
            btn.addEventListener('click', (e) => {
                this.removeFromQuote(e.target.dataset.id);
            });
        });
    }
}

// Initialize App immediately or on DOM ready
function startSuntechApp() {
    if (!window.__suntechApp) {
        window.__suntechApp = new App();
    }
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', startSuntechApp);
} else {
    startSuntechApp();
}

window.__startSuntechApp = startSuntechApp;

