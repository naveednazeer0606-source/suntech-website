export const categories = [
    { id: 'electrical', name: 'Electrical & Lighting', desc: 'CFL lamps, halogen lamps, metal-halide lamps and fittings.' },
    { id: 'plumbing', name: 'Plumbing & Pipe Fittings', desc: 'Copper pipe, GI pipes, black steel pipes, and fittings.' },
    { id: 'hardware', name: 'Hardware & Fasteners', desc: 'Bolts, nuts, washers, U-bolts, roofing bolts, and anchors.' },
    { id: 'tools', name: 'Power Tools & Hand Tools', desc: 'Cutting discs, grinding discs, screwdrivers, and precision tools.' },
    { id: 'safety', name: 'Safety Equipment', desc: 'Helmets, respirators, dust masks, and safety supplies.' },
    { id: 'hvac', name: 'HVAC, Ducting & Insulation', desc: 'Duct materials, grilles, diffusers, and insulation.' },
    { id: 'lifting', name: 'Lifting Materials', desc: 'Heavy-duty lifting equipment for site operations.' },
    { id: 'consumables', name: 'Construction Consumables', desc: 'Wire nails, tapes, polythene sheets, and fixing systems.' }
];

export const products = [
    // Electrical & Lighting
    { id: 'p1', category: 'electrical', name: 'Light Fittings', spec: 'Standard industrial light fittings', img: 'https://images.unsplash.com/photo-1563453392212-326f5e854473?auto=format&fit=crop&q=80&w=400' },
    { id: 'p2', category: 'electrical', name: 'CFL & Halogen Lamps', spec: 'CFL, Halogen Spot Light, Metal halide', img: 'https://images.unsplash.com/photo-1522204523234-8729aa6e3d5f?auto=format&fit=crop&q=80&w=400' },
    { id: 'p3', category: 'electrical', name: 'Electrical Materials', spec: 'General electrical supplies', img: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&q=80&w=400' },
    
    // Plumbing
    { id: 'p4', category: 'plumbing', name: 'Copper Pipe and fittings', spec: 'Various sizes and joints', img: 'https://images.unsplash.com/photo-1584985223049-74d326f74a90?auto=format&fit=crop&q=80&w=400' },
    { id: 'p5', category: 'plumbing', name: 'GI Pipe & Fittings', spec: 'GI & Black steel pipe', img: 'https://images.unsplash.com/photo-1599388302061-0b5c16503c5f?auto=format&fit=crop&q=80&w=400' },
    
    // Hardware & Fasteners
    { id: 'p6', category: 'hardware', name: 'G.I. Threaded Rod "M M"', spec: 'x 2 Mtr Length', img: 'https://images.unsplash.com/photo-1530982011887-3cc11cc85693?auto=format&fit=crop&q=80&w=400' },
    { id: 'p7', category: 'hardware', name: 'G.I. Threaded Rod "Inches"', spec: 'x 2 Mtr Length', img: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&q=80&w=400' },
    { id: 'p8', category: 'hardware', name: 'G.I. Threaded Rod "M M"', spec: 'x 3Mtr Length', img: 'https://images.unsplash.com/photo-1530982011887-3cc11cc85693?auto=format&fit=crop&q=80&w=400' },
    { id: 'p9', category: 'hardware', name: 'Fisher plug', spec: 'Nylon wall plugs', img: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&q=80&w=400' },
    { id: 'p10', category: 'hardware', name: 'G.I Nut, Bolt, Washer', spec: 'Spring Washer, "L" Hooks', img: 'https://images.unsplash.com/photo-1530982011887-3cc11cc85693?auto=format&fit=crop&q=80&w=400' },
    { id: 'p11', category: 'hardware', name: 'Unifix (Wedge Anchor)', spec: 'Concrete wedge anchors', img: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&q=80&w=400' },
    { id: 'p12', category: 'hardware', name: 'Fix bolt set & shield', spec: 'Heavy duty fixing', img: 'https://images.unsplash.com/photo-1530982011887-3cc11cc85693?auto=format&fit=crop&q=80&w=400' },
    { id: 'p13', category: 'hardware', name: 'G.I. Hanging Clamps', spec: 'With & without Rubber Sleeves', img: 'https://images.unsplash.com/photo-1622322384724-5d519b78c182?auto=format&fit=crop&q=80&w=400' },
    { id: 'p14', category: 'hardware', name: 'Vibrating Box hanger', spec: 'Duct mounts bush Clamps', img: 'https://images.unsplash.com/photo-1590845947376-2831c26f0927?auto=format&fit=crop&q=80&w=400' },
    { id: 'p15', category: 'hardware', name: 'Sprinkler, Saddle, "U", Nail Clamps', spec: 'Pipe clamping solutions', img: 'https://images.unsplash.com/photo-1616423640778-28d1b53229bd?auto=format&fit=crop&q=80&w=400' },
    { id: 'p16', category: 'hardware', name: 'Wire Nails', spec: 'Assorted sizes', img: 'https://images.unsplash.com/photo-1588607147716-e554d3dbecb2?auto=format&fit=crop&q=80&w=400' },
    { id: 'p17', category: 'hardware', name: 'G.I. "U" Bolt', spec: 'U-Bolts for piping', img: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&q=80&w=400' },
    { id: 'p18', category: 'hardware', name: 'G.I. Roofing Bolt', spec: '(Bolt only)', img: 'https://images.unsplash.com/photo-1530982011887-3cc11cc85693?auto=format&fit=crop&q=80&w=400' },
    { id: 'p19', category: 'hardware', name: '"GRIPP" Hose Clamps', spec: 'Worm drive hose clips', img: 'https://images.unsplash.com/photo-1590845947376-2831c26f0927?auto=format&fit=crop&q=80&w=400' },
    
    // Safety & Consumables
    { id: 'p20', category: 'safety', name: 'Dust mask (Orange)', spec: 'Standard dust protection', img: 'https://images.unsplash.com/photo-1584680238038-f86a24be67be?auto=format&fit=crop&q=80&w=400' },
    { id: 'p21', category: 'safety', name: 'Dust mask (Blue)', spec: 'Standard dust protection', img: 'https://images.unsplash.com/photo-1584744982491-665216d95f8b?auto=format&fit=crop&q=80&w=400' },
    { id: 'p22', category: 'consumables', name: 'Cotton Rags', spec: 'Industrial cleaning rags', img: 'https://images.unsplash.com/photo-1528698827591-e19ccd7bc23d?auto=format&fit=crop&q=80&w=400' },
    { id: 'p23', category: 'safety', name: 'Safety Helmet', spec: 'Light & Heavy Duty', img: 'https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?auto=format&fit=crop&q=80&w=400' },
    { id: 'p24', category: 'safety', name: 'Dust Chemical respirator', spec: 'Chemical Cartridge Respirator', img: 'https://images.unsplash.com/photo-1586942467385-db7c7a10fbda?auto=format&fit=crop&q=80&w=400' },
    { id: 'p25', category: 'consumables', name: 'Polythene Sheet', spec: 'Construction sheeting', img: 'https://images.unsplash.com/photo-1584985223049-74d326f74a90?auto=format&fit=crop&q=80&w=400' },
    { id: 'p26', category: 'consumables', name: 'Magnetic / Non Magnetic Tapes', spec: 'Industrial tapes', img: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&q=80&w=400' },
    
    // Tools
    { id: 'p27', category: 'tools', name: 'Gripp Screw Driver', spec: '(India) Hand tools', img: 'https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&q=80&w=400' },
    { id: 'p28', category: 'tools', name: 'Cutting/Grinding Disc', spec: 'PFERD Brand Germany', img: 'https://images.unsplash.com/photo-1616423640778-28d1b53229bd?auto=format&fit=crop&q=80&w=400' },
    { id: 'p29', category: 'lifting', name: 'Lifting Materials', spec: 'Slings, shackles & hoists', img: 'https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?auto=format&fit=crop&q=80&w=400' },
    
    // HVAC
    { id: 'p30', category: 'hvac', name: 'Grilles & Diffusers', spec: 'Duct materials and Insulation', img: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&q=80&w=400' }
];

export const views = {
    home: `
        <div class="home-marquee-container" id="homeBrandsMarqueeContainer">
            <div class="home-marquee-track" id="homeBrandsMarquee">
                <!-- Brands injected via JS -->
            </div>
        </div>
        <section class="hero container">
            <div class="hero-content">
                <span class="hero-label">Suntech Group Qatar</span>
                <h1 class="hero-title">Industrial Supply,<br>Built for Every Project.</h1>
                <p class="hero-desc">Reliable electrical, plumbing, hardware, tools, fasteners, safety, and HVAC materials for projects across Qatar.</p>
                <div class="hero-actions">
                    <a href="#products" class="btn-secondary" data-route="products">Explore Products</a>
                    <a href="#contact" class="btn-primary" data-route="contact">Request a Quote</a>
                </div>
            </div>
            <div class="hero-visual">
                <!-- Fallback to a high-quality abstract engineered image -->
                <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800" alt="Precision Engineered Materials">
            </div>
        </section>
        
        <section class="credibility-strip">
            <div class="container credibility-content">
                <div class="credibility-item">
                    <span class="label">Established</span>
                    <span class="value">2009</span>
                </div>
                <div class="credibility-item">
                    <span class="label">Location</span>
                    <span class="value">Doha, Qatar</span>
                </div>
                <div class="credibility-item">
                    <span class="label">Commitment</span>
                    <span class="value">Quality, Cost & Delivery</span>
                </div>
            </div>
        </section>

        <section class="container section-padding">
            <div class="section-header">
                <div class="section-header-content">
                    <h2 class="section-title">Core Supply Divisions</h2>
                    <p>Comprehensive material sourcing for contractors and engineering teams.</p>
                </div>
                <a href="#divisions" class="btn-secondary" data-route="divisions">View All Divisions</a>
            </div>
            
            <div class="category-grid">
                ${categories.slice(0, 6).map(c => `
                    <div class="category-card" data-route="products" data-category="${c.id}">
                        <div class="category-card-content">
                            <h3 class="category-card-title">${c.name}</h3>
                            <p class="category-card-desc">${c.desc}</p>
                        </div>
                    </div>
                `).join('')}
            </div>
        </section>

        <section class="container section-padding">
            <div class="cta-banner">
                <h2>Need materials for your next project?</h2>
                <p style="margin-bottom: 2rem;">Submit your material list for a comprehensive quote.</p>
                <a href="#contact" class="btn-primary" data-route="contact">Request a Quote</a>
            </div>
        </section>
    `,
    products: `
        <div class="page-header">
            <div class="container">
                <h1 style="font-size: 2.5rem;">Product Catalogue</h1>
                <p>Select materials to add to your quote list.</p>
            </div>
        </div>
        <div class="container products-layout section-padding" style="padding-top: 2rem;">
            <aside class="filter-sidebar">
                <h3>Categories</h3>
                <div class="filter-list" id="category-filters">
                    <button class="filter-btn active" data-filter="all">All Products</button>
                    ${categories.map(c => `
                        <button class="filter-btn" data-filter="${c.id}">${c.name}</button>
                    `).join('')}
                </div>
            </aside>
            <main>
                <div class="product-grid" id="products-container">
                    <!-- Products injected via JS -->
                </div>
            </main>
            <aside class="brands-sidebar">
                <div class="brands-header">
                    <h3>Featured Brands</h3>
                    <div class="indicator-line"></div>
                </div>
                <div class="brands-rail-container" id="brandsRailContainer">
                    <div class="brands-rail" id="brandsRail">
                        <!-- Brands injected via JS -->
                    </div>
                </div>
                <div class="scroll-indicator">
                    <span>Scroll to explore</span>
                </div>
            </aside>
        </div>
    `,
    about: `
        <div class="page-header">
            <div class="container">
                <h1 style="font-size: 2.5rem;">About Suntech</h1>
                <p>Dependable supply since 2009.</p>
            </div>
        </div>
        <div class="container section-padding">
            <div class="about-grid">
                <div>
                    <h2 style="margin-bottom: 1.5rem;">Built for the demands of real projects.</h2>
                    <p style="margin-bottom: 1rem;">Established in 2009 in Doha, Qatar, Suntech Group has developed a steadfast reputation for quality and consistent supply in the industrial sector.</p>
                    <p style="margin-bottom: 2rem;">We focus exclusively on serving complex customer requirements through strict adherence to Quality, Cost, and Delivery. Our procurement networks and local stock capabilities ensure that contractors, engineers, and project managers receive the materials they need, exactly when they need them.</p>
                    <a href="#contact" class="btn-secondary" data-route="contact">Partner With Us</a>
                </div>
                <div class="about-visual">
                    <img src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=800" alt="Industrial Facility">
                </div>
            </div>
        </div>
    `,
    divisions: `
        <div class="page-header">
            <div class="container">
                <h1 style="font-size: 2.5rem;">Our Divisions</h1>
                <p>Specialized procurement across key industrial sectors.</p>
            </div>
        </div>
        <div class="container section-padding">
            <div class="category-grid">
                <div class="category-card technical-border-left">
                    <div class="category-card-content">
                        <h3 class="category-card-title">Trading & Industrial Supply</h3>
                        <p class="category-card-desc">General material supply for construction and heavy industry.</p>
                    </div>
                </div>
                <div class="category-card technical-border-left">
                    <div class="category-card-content">
                        <h3 class="category-card-title">Electrical & Lighting</h3>
                        <p class="category-card-desc">Comprehensive electrical components, cabling, and industrial lighting solutions.</p>
                    </div>
                </div>
                <div class="category-card technical-border-left">
                    <div class="category-card-content">
                        <h3 class="category-card-title">Plumbing & HVAC</h3>
                        <p class="category-card-desc">Piping, fittings, valves, ducting, and thermal insulation materials.</p>
                    </div>
                </div>
                <div class="category-card technical-border-left">
                    <div class="category-card-content">
                        <h3 class="category-card-title">Hardware, Tools & Fasteners</h3>
                        <p class="category-card-desc">High-tensile fasteners, power tools, and abrasive consumables.</p>
                    </div>
                </div>
                <div class="category-card technical-border-left">
                    <div class="category-card-content">
                        <h3 class="category-card-title">Safety & Site Consumables</h3>
                        <p class="category-card-desc">PPE, fall protection, lifting gear, and general site supplies.</p>
                    </div>
                </div>
            </div>
        </div>
    `,
    catalog: `
        <div class="page-header">
            <div class="container" style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 1rem;">
                <div>
                    <h1 style="font-size: 2.5rem;">Product Catalog</h1>
                    <p>Official technical specifications and material procurement guide.</p>
                </div>
                <div style="display: flex; gap: 0.75rem;">
                    <a href="catalog.pdf" target="_blank" class="btn-primary" download="Suntech-Product-Catalog.pdf">
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="display: inline-block; vertical-align: middle; margin-right: 4px;">
                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                            <polyline points="7 10 12 15 17 10"/>
                            <line x1="12" y1="15" y2="3"/>
                        </svg>
                        Download PDF
                    </a>
                    <a href="catalog.pdf" target="_blank" class="btn-secondary">
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="display: inline-block; vertical-align: middle; margin-right: 4px;">
                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                            <polyline points="15 3 21 3 21 9"/>
                            <line x1="10" x2="21" y1="14" y2="3"/>
                        </svg>
                        Full Screen
                    </a>
                </div>
            </div>
        </div>
        <div class="container section-padding" style="padding-top: 1.5rem;">
            <div style="width: 100%; height: 80vh; min-height: 600px; background: #fff; border-radius: 14px; border: 1px solid #cbd5e1; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.06);">
                <iframe src="catalog.pdf#toolbar=1&navpanes=0" title="Suntech Product Catalog PDF" width="100%" height="100%" style="border: none; display: block; width: 100%; height: 100%;"></iframe>
            </div>
        </div>
    `,
    contact: `
        <div class="page-header">
            <div class="container">
                <h1 style="font-size: 2.5rem;">Request a Quote</h1>
                <p>Submit your requirements for a comprehensive proposal.</p>
            </div>
        </div>
        <div class="container section-padding">
            <div class="contact-grid">
                <div>
                    <form id="quote-form">
                        <div class="form-group">
                            <label class="form-label">Full Name</label>
                            <input type="text" class="form-control" required>
                        </div>
                        <div class="form-group">
                            <label class="form-label">Company / Project Name</label>
                            <input type="text" class="form-control" required>
                        </div>
                        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
                            <div class="form-group">
                                <label class="form-label">Email Address</label>
                                <input type="email" class="form-control" required>
                            </div>
                            <div class="form-group">
                                <label class="form-label">Phone Number</label>
                                <input type="tel" class="form-control" required>
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="form-label">Required Materials / Quote List</label>
                            <textarea class="form-control" id="form-quote-details" required placeholder="Specify items, quantities, and specifications..."></textarea>
                        </div>
                        <button type="submit" class="btn-primary">Submit Enquiry</button>
                    </form>
                </div>
                <div class="contact-info">
                    <h3>Contact Information</h3>
                    <div class="info-block">
                        <span class="text-label">Head Office</span>
                        <p style="color: var(--text-primary); margin-top: 0.25rem;">Suntech Group<br>P.O. Box 33115<br>Doha, Qatar</p>
                    </div>
                    <div class="info-block">
                        <span class="text-label">Phone</span>
                        <p style="color: var(--text-primary); margin-top: 0.25rem;">+974 4443 4601<br>+974 4427 0671</p>
                    </div>
                    <div class="info-block">
                        <span class="text-label">Email</span>
                        <p style="margin-top: 0.25rem;"><a href="mailto:sales@suntechqatar.com" style="color: var(--text-primary);">sales@suntechqatar.com</a></p>
                    </div>
                    <div class="info-block" style="margin-top: 2rem;">
                        <div style="width: 100%; height: 200px; background-color: var(--bg-charcoal); border: var(--engineered-border); display: flex; align-items: center; justify-content: center;">
                            <span class="text-muted">Map Integration Area</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `,
    privacy: `
        <div class="page-header">
            <div class="container">
                <h1 style="font-size: 2.5rem;">Privacy Policy</h1>
                <p>Last updated: September 2026</p>
            </div>
        </div>
        <div class="container section-padding" style="max-width: 800px; margin: 0 auto;">
            <h3 style="margin-bottom: 1rem;">1. Information We Collect</h3>
            <p style="margin-bottom: 2rem;">When you request a quote or contact us through our website, we collect your name, company details, email address, phone number, and project information. This information is strictly used to fulfill your request and provide accurate material sourcing.</p>
            
            <h3 style="margin-bottom: 1rem;">2. How We Use Your Data</h3>
            <p style="margin-bottom: 2rem;">Your information is used exclusively to process quote requests, communicate regarding your projects, and improve our services. We do not sell or share your personal data with third-party marketing agencies.</p>
            
            <h3 style="margin-bottom: 1rem;">3. Data Security</h3>
            <p style="margin-bottom: 2rem;">We implement standard security measures to protect the information you submit via our website against unauthorized access or disclosure.</p>
        </div>
    `,
    terms: `
        <div class="page-header">
            <div class="container">
                <h1 style="font-size: 2.5rem;">Terms & Conditions</h1>
                <p>Last updated: September 2026</p>
            </div>
        </div>
        <div class="container section-padding" style="max-width: 800px; margin: 0 auto;">
            <h3 style="margin-bottom: 1rem;">1. Acceptance of Terms</h3>
            <p style="margin-bottom: 2rem;">By accessing and using the Suntech Group Qatar website, you agree to these terms and conditions. The website is provided for informational and business-to-business procurement purposes.</p>
            
            <h3 style="margin-bottom: 1rem;">2. Quotations and Pricing</h3>
            <p style="margin-bottom: 2rem;">All product listings and specifications on this website are for general reference. Submitting a quote request does not constitute a binding contract. Final pricing, availability, and delivery terms will be provided in a formal quotation document sent by our sales team.</p>
            
            <h3 style="margin-bottom: 1rem;">3. Intellectual Property</h3>
            <p style="margin-bottom: 2rem;">The content, layout, design, data, and graphics on this website are protected by intellectual property laws. You may not reproduce or use any materials without prior written consent from Suntech Group Qatar.</p>
        </div>
    `,
    'admin-dashboard': `
        <div class="page-header admin-header">
            <div class="container">
                <div class="admin-header-flex">
                    <div>
                        <div class="admin-badge-wrap">
                            <span class="admin-demo-tag">DEMO PLACEHOLDER</span>
                            <span class="text-label" style="color: rgba(255,255,255,0.7);">Suntech Group Qatar Operations</span>
                        </div>
                        <h1 style="font-size: 2.25rem;">Operations & Procurement Portal</h1>
                        <p>Simulated daily fulfillment, contractor RFQ queue, and inventory alerts.</p>
                    </div>
                    <div class="admin-header-actions">
                        <a href="#admin-quotes" class="btn-primary" data-route="admin-quotes">View RFQ Queue</a>
                        <a href="#admin-inventory" class="btn-secondary" style="background:#fff;" data-route="admin-inventory">Check Inventory</a>
                    </div>
                </div>
            </div>
        </div>

        <div class="container section-padding">
            <div class="demo-disclaimer-card">
                <div class="disclaimer-icon">⚠️</div>
                <div class="disclaimer-text">
                    <strong>Demonstration Operations Management View</strong>
                    <p>This section is a frontend-only interactive placeholder created to demonstrate how role-based operations and quote review integrate into the Suntech website. It does not connect to a production ERP or live database.</p>
                </div>
            </div>

            <div class="admin-stats-grid">
                <div class="admin-stat-card">
                    <div class="stat-top">
                        <span class="stat-label">Pending Contractor RFQs</span>
                        <span class="stat-icon">📄</span>
                    </div>
                    <div class="stat-number">14</div>
                    <div class="stat-sub positive">↑ 3 Urgent requests awaiting pricing</div>
                </div>
                <div class="admin-stat-card">
                    <div class="stat-top">
                        <span class="stat-label">Stocked Product Lines</span>
                        <span class="stat-icon">📦</span>
                    </div>
                    <div class="stat-number">48</div>
                    <div class="stat-sub">Across 8 core MEP categories</div>
                </div>
                <div class="admin-stat-card">
                    <div class="stat-top">
                        <span class="stat-label">Warehouse Stock Health</span>
                        <span class="stat-icon">🏭</span>
                    </div>
                    <div class="stat-number">94.2%</div>
                    <div class="stat-sub">Industrial Area Wh. 4 (Doha)</div>
                </div>
                <div class="admin-stat-card">
                    <div class="stat-top">
                        <span class="stat-label">Dispatched Deliveries</span>
                        <span class="stat-icon">🚚</span>
                    </div>
                    <div class="stat-number">8</div>
                    <div class="stat-sub">Scheduled for Doha & Lusail today</div>
                </div>
            </div>

            <div class="admin-panel-card" style="margin-top: 2rem;">
                <div class="panel-header">
                    <div>
                        <h3>Recent Contractor Quote Inquiries</h3>
                        <p>Incoming project material requests submitted through the portal.</p>
                    </div>
                    <a href="#admin-quotes" class="btn-secondary" data-route="admin-quotes">Full RFQ Queue (14)</a>
                </div>
                <div class="table-responsive">
                    <table class="admin-table">
                        <thead>
                            <tr>
                                <th>RFQ ID</th>
                                <th>Project / Contractor</th>
                                <th>Key Materials Requested</th>
                                <th>Submitted</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><strong>#RFQ-1048</strong></td>
                                <td>Al-Khor Infrastructure JV<br><span class="table-sub">Eng. Tariq Al-Nuaimi</span></td>
                                <td>200x GI Threaded Rods, 50x Unifix Wedge Anchors</td>
                                <td>Today, 10:15 AM</td>
                                <td><span class="status-pill status-urgent">Pending Review</span></td>
                                <td><button class="btn-table-action" onclick="window.demoShowRfqDetails('RFQ-1048')">Review</button></td>
                            </tr>
                            <tr>
                                <td><strong>#RFQ-1047</strong></td>
                                <td>Lusail Marina Towers Package 4<br><span class="table-sub">Al-Jaber MEP Division</span></td>
                                <td>80x Copper Pipes 2", 120x Brass Compression Fittings</td>
                                <td>Yesterday</td>
                                <td><span class="status-pill status-dispatched">Quote Sent</span></td>
                                <td><button class="btn-table-action" onclick="window.demoShowRfqDetails('RFQ-1047')">Details</button></td>
                            </tr>
                            <tr>
                                <td><strong>#RFQ-1046</strong></td>
                                <td>Qatar Metro Red Line Maintenance<br><span class="table-sub">Consolidated Engineering</span></td>
                                <td>40x PFERD Grinding Discs, 60x 3M Electrical Tapes</td>
                                <td>Oct 23, 2026</td>
                                <td><span class="status-pill status-approved">Approved</span></td>
                                <td><button class="btn-table-action" onclick="window.demoShowRfqDetails('RFQ-1046')">Details</button></td>
                            </tr>
                            <tr>
                                <td><strong>#RFQ-1045</strong></td>
                                <td>West Bay Commercial Tower B<br><span class="table-sub">Redco Construction</span></td>
                                <td>30x Industrial Grilles, Duct Insulation Rolls</td>
                                <td>Oct 22, 2026</td>
                                <td><span class="status-pill status-processing">In Sourcing</span></td>
                                <td><button class="btn-table-action" onclick="window.demoShowRfqDetails('RFQ-1045')">Details</button></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <div class="admin-panel-card" style="margin-top: 2rem;">
                <div class="panel-header">
                    <div>
                        <h3>Warehouse Replenishment Alerts</h3>
                        <p>Simulated alerts for items reaching minimum reorder threshold.</p>
                    </div>
                    <a href="#admin-inventory" class="btn-secondary" data-route="admin-inventory">Manage Stock</a>
                </div>
                <div class="alert-item-row">
                    <div class="alert-item-info">
                        <span class="alert-tag">Low Stock</span>
                        <strong>Copper Pipe 2" Class 0 (Table X)</strong>
                        <span class="alert-meta">Current Stock: 18 lengths | Min Threshold: 50 lengths | Wh. 4 Bay C</span>
                    </div>
                    <button class="btn-primary" onclick="window.demoTriggerRestock('Copper Pipe 2\"')">Simulate Reorder</button>
                </div>
                <div class="alert-item-row">
                    <div class="alert-item-info">
                        <span class="alert-tag">Low Stock</span>
                        <strong>PFERD Cutting/Grinding Disc 115mm (Germany)</strong>
                        <span class="alert-meta">Current Stock: 45 units | Min Threshold: 100 units | Wh. 4 Bay E</span>
                    </div>
                    <button class="btn-primary" onclick="window.demoTriggerRestock('PFERD Grinding Disc')">Simulate Reorder</button>
                </div>
            </div>
        </div>
    `,
    'admin-quotes': `
        <div class="page-header admin-header">
            <div class="container">
                <div class="admin-header-flex">
                    <div>
                        <div class="admin-badge-wrap">
                            <span class="admin-demo-tag">DEMO PLACEHOLDER</span>
                            <span class="text-label" style="color: rgba(255,255,255,0.7);">Suntech Quote Queue</span>
                        </div>
                        <h1 style="font-size: 2.25rem;">Contractor RFQ Management</h1>
                        <p>Review, price, and dispatch quotations for ongoing construction projects in Qatar.</p>
                    </div>
                    <div class="admin-header-actions">
                        <button class="btn-primary" onclick="window.demoExportRfqs()">Export RFQ List (Demo)</button>
                    </div>
                </div>
            </div>
        </div>

        <div class="container section-padding">
            <div class="demo-disclaimer-card">
                <div class="disclaimer-icon">⚠️</div>
                <div class="disclaimer-text">
                    <strong>Demo Quotation Queue</strong>
                    <p>Demonstrates how Suntech operational staff receive, evaluate, and fulfill contractor quote submissions. Actions in this table update client demo states locally.</p>
                </div>
            </div>

            <div class="admin-panel-card">
                <div class="table-controls-bar">
                    <div class="filter-pills" id="rfq-filter-tabs">
                        <button class="filter-pill active" onclick="window.demoFilterRfqs('all', this)">All Inquiries (6)</button>
                        <button class="filter-pill" onclick="window.demoFilterRfqs('pending', this)">Pending (2)</button>
                        <button class="filter-pill" onclick="window.demoFilterRfqs('sent', this)">Sent (2)</button>
                        <button class="filter-pill" onclick="window.demoFilterRfqs('approved', this)">Approved (2)</button>
                    </div>
                </div>

                <div class="table-responsive">
                    <table class="admin-table" id="all-rfqs-table">
                        <thead>
                            <tr>
                                <th>RFQ #</th>
                                <th>Contractor & Project</th>
                                <th>Contact Details</th>
                                <th>Materials Spec</th>
                                <th>Date</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr data-status="pending">
                                <td><strong>#RFQ-1048</strong></td>
                                <td>Al-Khor Infrastructure JV<br><span class="table-sub">Sports Complex Expansion</span></td>
                                <td>tariq@alkhor-jv.qa<br>+974 5512 8890</td>
                                <td>200x GI Threaded Rods, 50x Unifix Anchors</td>
                                <td>Oct 25, 2026</td>
                                <td><span class="status-pill status-urgent">Pending Review</span></td>
                                <td><button class="btn-table-action" onclick="window.demoDispatchRfq('RFQ-1048')">Send Quote</button></td>
                            </tr>
                            <tr data-status="sent">
                                <td><strong>#RFQ-1047</strong></td>
                                <td>Lusail Marina Towers Package 4<br><span class="table-sub">Tower 3 Plumbing Core</span></td>
                                <td>procurement@aljaber.qa<br>+974 4433 2211</td>
                                <td>80x Copper Pipes 2", 120x Brass Fittings</td>
                                <td>Oct 24, 2026</td>
                                <td><span class="status-pill status-dispatched">Quote Sent</span></td>
                                <td><button class="btn-table-action" onclick="window.demoShowRfqDetails('RFQ-1047')">View PDF</button></td>
                            </tr>
                            <tr data-status="approved">
                                <td><strong>#RFQ-1046</strong></td>
                                <td>Qatar Metro Red Line Maintenance<br><span class="table-sub">Depot Overhaul</span></td>
                                <td>materials@conseng-doha.com<br>+974 4498 7654</td>
                                <td>40x PFERD Grinding Discs, 60x 3M Tapes</td>
                                <td>Oct 23, 2026</td>
                                <td><span class="status-pill status-approved">Approved</span></td>
                                <td><button class="btn-table-action" onclick="window.demoShowRfqDetails('RFQ-1046')">Order Slip</button></td>
                            </tr>
                            <tr data-status="pending">
                                <td><strong>#RFQ-1045</strong></td>
                                <td>West Bay Commercial Tower B<br><span class="table-sub">HVAC Subcontractor</span></td>
                                <td>hvac@redco.com.qa<br>+974 6622 3344</td>
                                <td>30x Industrial Grilles, Duct Insulation</td>
                                <td>Oct 22, 2026</td>
                                <td><span class="status-pill status-urgent">Pending Review</span></td>
                                <td><button class="btn-table-action" onclick="window.demoDispatchRfq('RFQ-1045')">Send Quote</button></td>
                            </tr>
                            <tr data-status="sent">
                                <td><strong>#RFQ-1044</strong></td>
                                <td>Ras Laffan Industrial Substation<br><span class="table-sub">Electrical Contractor</span></td>
                                <td>elec@q-energy.qa<br>+974 4411 9988</td>
                                <td>150x Cable Glands, 20x Earth Rods</td>
                                <td>Oct 20, 2026</td>
                                <td><span class="status-pill status-dispatched">Quote Sent</span></td>
                                <td><button class="btn-table-action" onclick="window.demoShowRfqDetails('RFQ-1044')">View PDF</button></td>
                            </tr>
                            <tr data-status="approved">
                                <td><strong>#RFQ-1043</strong></td>
                                <td>Al-Wakrah Logistics Park<br><span class="table-sub">Warehouse 7 MEP</span></td>
                                <td>site@gulfcontracting.qa<br>+974 5533 1122</td>
                                <td>100x Safety Helmets, 200x Chemical Masks</td>
                                <td>Oct 19, 2026</td>
                                <td><span class="status-pill status-approved">Approved</span></td>
                                <td><button class="btn-table-action" onclick="window.demoShowRfqDetails('RFQ-1043')">Order Slip</button></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    `,
    'admin-inventory': `
        <div class="page-header admin-header">
            <div class="container">
                <div class="admin-header-flex">
                    <div>
                        <div class="admin-badge-wrap">
                            <span class="admin-demo-tag">DEMO PLACEHOLDER</span>
                            <span class="text-label" style="color: rgba(255,255,255,0.7);">Suntech Warehouse Logistics</span>
                        </div>
                        <h1 style="font-size: 2.25rem;">Industrial Inventory Monitor</h1>
                        <p>Track real-time stock levels across pipes, fittings, fasteners, tools, and PPE.</p>
                    </div>
                    <div class="admin-header-actions">
                        <button class="btn-primary" onclick="window.demoRestockAll()">Restock Low Items (Demo)</button>
                    </div>
                </div>
            </div>
        </div>

        <div class="container section-padding">
            <div class="demo-disclaimer-card">
                <div class="disclaimer-icon">⚠️</div>
                <div class="disclaimer-text">
                    <strong>Demo Inventory Monitor</strong>
                    <p>Demonstrates simulated stock levels, minimum reorder thresholds, and warehouse allocation in Doha Industrial Area. Data is local to this demo session.</p>
                </div>
            </div>

            <div class="admin-panel-card">
                <div class="table-responsive">
                    <table class="admin-table">
                        <thead>
                            <tr>
                                <th>SKU Code</th>
                                <th>Product Line</th>
                                <th>Division</th>
                                <th>Warehouse Location</th>
                                <th>Current Stock</th>
                                <th>Threshold</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><code>ST-CU-01</code></td>
                                <td><strong>Copper Pipe 2" Class 0</strong><br><span class="table-sub">Table X - 6 Meter Lengths</span></td>
                                <td>Plumbing & Pipes</td>
                                <td>Wh. 4, Bay C-12</td>
                                <td><strong>18 lengths</strong></td>
                                <td>50 lengths</td>
                                <td><span class="status-pill status-urgent">Low Stock</span></td>
                                <td><button class="btn-table-action" onclick="window.demoTriggerRestock('ST-CU-01')">Restock</button></td>
                            </tr>
                            <tr>
                                <td><code>ST-PF-02</code></td>
                                <td><strong>PFERD Grinding Disc 115mm</strong><br><span class="table-sub">Abrasive Cutting Wheels (Germany)</span></td>
                                <td>Power & Hand Tools</td>
                                <td>Wh. 4, Bay E-04</td>
                                <td><strong>45 units</strong></td>
                                <td>100 units</td>
                                <td><span class="status-pill status-urgent">Low Stock</span></td>
                                <td><button class="btn-table-action" onclick="window.demoTriggerRestock('ST-PF-02')">Restock</button></td>
                            </tr>
                            <tr>
                                <td><code>ST-GI-03</code></td>
                                <td><strong>GI Threaded Rod M12 x 2M</strong><br><span class="table-sub">High-Tensile Zinc Plated</span></td>
                                <td>Hardware & Fasteners</td>
                                <td>Wh. 4, Bay A-08</td>
                                <td><strong>320 rods</strong></td>
                                <td>150 rods</td>
                                <td><span class="status-pill status-approved">Optimal</span></td>
                                <td><button class="btn-table-action" onclick="window.demoShowStockDetails('ST-GI-03')">Audit</button></td>
                            </tr>
                            <tr>
                                <td><code>ST-3M-04</code></td>
                                <td><strong>3M Heavy Duty Electrical Tape</strong><br><span class="table-sub">Scotch Super 33+ Vinyl</span></td>
                                <td>Electrical & Lighting</td>
                                <td>Wh. 4, Bay B-02</td>
                                <td><strong>480 rolls</strong></td>
                                <td>200 rolls</td>
                                <td><span class="status-pill status-approved">Optimal</span></td>
                                <td><button class="btn-table-action" onclick="window.demoShowStockDetails('ST-3M-04')">Audit</button></td>
                            </tr>
                            <tr>
                                <td><code>ST-SF-05</code></td>
                                <td><strong>Safety Helmet (Heavy Duty)</strong><br><span class="table-sub">ANSI / CE Certified White</span></td>
                                <td>Safety & PPE</td>
                                <td>Wh. 4, Bay D-01</td>
                                <td><strong>140 units</strong></td>
                                <td>80 units</td>
                                <td><span class="status-pill status-approved">Optimal</span></td>
                                <td><button class="btn-table-action" onclick="window.demoShowStockDetails('ST-SF-05')">Audit</button></td>
                            </tr>
                            <tr>
                                <td><code>ST-HV-06</code></td>
                                <td><strong>Grilles & Diffusers (Aluminum)</strong><br><span class="table-sub">Double Deflection 600x600</span></td>
                                <td>HVAC & Ducting</td>
                                <td>Wh. 4, Bay F-09</td>
                                <td><strong>64 units</strong></td>
                                <td>40 units</td>
                                <td><span class="status-pill status-approved">Optimal</span></td>
                                <td><button class="btn-table-action" onclick="window.demoShowStockDetails('ST-HV-06')">Audit</button></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    `,
    'admin-console': `
        <div class="page-header admin-header administrator-theme">
            <div class="container">
                <div class="admin-header-flex">
                    <div>
                        <div class="admin-badge-wrap">
                            <span class="admin-demo-tag tag-superadmin">EXECUTIVE CONSOLE</span>
                            <span class="text-label" style="color: rgba(255,255,255,0.7);">Suntech Enterprise Governance</span>
                        </div>
                        <h1 style="font-size: 2.25rem;">Executive Administration & RBAC</h1>
                        <p>Enterprise performance analytics, role-based permission control, and governance oversight.</p>
                    </div>
                    <div class="admin-header-actions">
                        <a href="#admin-logs" class="btn-primary" data-route="admin-logs">Audit Log</a>
                        <a href="#admin-dashboard" class="btn-secondary" style="background:#fff;" data-route="admin-dashboard">Operations</a>
                    </div>
                </div>
            </div>
        </div>

        <div class="container section-padding">
            <div class="demo-disclaimer-card superadmin-disclaimer">
                <div class="disclaimer-icon">🛡️</div>
                <div class="disclaimer-text">
                    <strong>Administrator Executive Console (Demo Simulation)</strong>
                    <p>This console demonstrates the highest-tier executive interface for Suntech Group leadership. It simulates enterprise KPI aggregates, role-based access management, and audit log tracking.</p>
                </div>
            </div>

            <!-- Executive KPI Row -->
            <div class="admin-stats-grid">
                <div class="admin-stat-card executive-card">
                    <div class="stat-top">
                        <span class="stat-label">Sourcing Volume (YTD)</span>
                        <span class="stat-icon">💰</span>
                    </div>
                    <div class="stat-number">QAR 4.28M</div>
                    <div class="stat-sub positive">↑ +14.2% YoY across Qatar projects</div>
                </div>
                <div class="admin-stat-card executive-card">
                    <div class="stat-top">
                        <span class="stat-label">Active Client Accounts</span>
                        <span class="stat-icon">🏢</span>
                    </div>
                    <div class="stat-number">156</div>
                    <div class="stat-sub">Tier-1 & Tier-2 Contractor Entities</div>
                </div>
                <div class="admin-stat-card executive-card">
                    <div class="stat-top">
                        <span class="stat-label">On-Time Fulfillment Rate</span>
                        <span class="stat-icon">⏱️</span>
                    </div>
                    <div class="stat-number">99.1%</div>
                    <div class="stat-sub positive">Adherence to site delivery SLAs</div>
                </div>
                <div class="admin-stat-card executive-card">
                    <div class="stat-top">
                        <span class="stat-label">System Security State</span>
                        <span class="stat-icon">🔒</span>
                    </div>
                    <div class="stat-number">RBAC Active</div>
                    <div class="stat-sub">Frontend Demo Verification Enforced</div>
                </div>
            </div>

            <!-- RBAC User Directory -->
            <div class="admin-panel-card" style="margin-top: 2rem;">
                <div class="panel-header">
                    <div>
                        <h3>Role-Based Access Control (RBAC) Directory</h3>
                        <p>Demo accounts, role permissions, and session access enforcement.</p>
                    </div>
                    <span class="status-pill status-approved">3 Roles Configured</span>
                </div>
                <div class="table-responsive">
                    <table class="admin-table">
                        <thead>
                            <tr>
                                <th>Demo Account</th>
                                <th>Assigned Role</th>
                                <th>Access Scope</th>
                                <th>Permissions</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <strong>administrator.demo</strong><br>
                                    <span class="table-sub">Executive Director (Head Office)</span>
                                </td>
                                <td><span class="role-pill pill-superadmin">Administrator</span></td>
                                <td>Enterprise Console, Operations, Quotes, Inventory, Audit Logs, Products</td>
                                <td><code>READ</code> <code>WRITE</code> <code>GOVERN</code> <code>AUDIT</code></td>
                                <td><button class="btn-table-action" onclick="window.demoAuditRole('Administrator')">Inspect</button></td>
                            </tr>
                            <tr>
                                <td>
                                    <strong>admin.demo</strong><br>
                                    <span class="table-sub">Operations & Inventory Manager</span>
                                </td>
                                <td><span class="role-pill pill-admin">Admin</span></td>
                                <td>Operations Portal, Contractor Quotes, Stock Inventory, Products</td>
                                <td><code>READ</code> <code>WRITE</code> <code>FULFILL</code></td>
                                <td><button class="btn-table-action" onclick="window.demoAuditRole('Admin')">Inspect</button></td>
                            </tr>
                            <tr>
                                <td>
                                    <strong>customer.demo</strong><br>
                                    <span class="table-sub">Procurement Engineer (Client)</span>
                                </td>
                                <td><span class="role-pill pill-customer">Customer</span></td>
                                <td>Public Home, Products Catalogue, RFQ Quote List, Company Divisions, Contact</td>
                                <td><code>BROWSE</code> <code>QUOTE_SUBMIT</code></td>
                                <td><button class="btn-table-action" onclick="window.demoAuditRole('Customer')">Inspect</button></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <!-- Quick Jump to Operations -->
            <div class="admin-panel-card" style="margin-top: 2rem;">
                <div class="panel-header">
                    <div>
                        <h3>Operational Portals Quick Access</h3>
                        <p>Navigate directly to administrative operational sub-modules.</p>
                    </div>
                </div>
                <div class="admin-quick-links-grid">
                    <a href="#admin-dashboard" class="quick-link-box" data-route="admin-dashboard">
                        <div class="quick-link-icon">📊</div>
                        <div class="quick-link-meta">
                            <strong>Operations Dashboard</strong>
                            <span>Daily fulfillment, delivery schedule, and stock warnings.</span>
                        </div>
                    </a>
                    <a href="#admin-quotes" class="quick-link-box" data-route="admin-quotes">
                        <div class="quick-link-icon">📑</div>
                        <div class="quick-link-meta">
                            <strong>Quote Management</strong>
                            <span>Incoming contractor inquiries and pricing dispatch.</span>
                        </div>
                    </a>
                    <a href="#admin-inventory" class="quick-link-box" data-route="admin-inventory">
                        <div class="quick-link-icon">🏭</div>
                        <div class="quick-link-meta">
                            <strong>Warehouse Inventory</strong>
                            <span>Stock monitor across Doha industrial storage facilities.</span>
                        </div>
                    </a>
                    <a href="#admin-logs" class="quick-link-box" data-route="admin-logs">
                        <div class="quick-link-icon">📜</div>
                        <div class="quick-link-meta">
                            <strong>System Audit Trail</strong>
                            <span>Activity tracking, logins, and permission events.</span>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    `,
    'admin-logs': `
        <div class="page-header admin-header administrator-theme">
            <div class="container">
                <div class="admin-header-flex">
                    <div>
                        <div class="admin-badge-wrap">
                            <span class="admin-demo-tag tag-superadmin">SECURITY & AUDIT</span>
                            <span class="text-label" style="color: rgba(255,255,255,0.7);">System Event Log</span>
                        </div>
                        <h1 style="font-size: 2.25rem;">Audit & Governance Logs</h1>
                        <p>Simulated trail of authentications, role enforcement checks, and RFQ dispatches.</p>
                    </div>
                    <div class="admin-header-actions">
                        <a href="#admin-console" class="btn-primary" data-route="admin-console">Executive Console</a>
                    </div>
                </div>
            </div>
        </div>

        <div class="container section-padding">
            <div class="demo-disclaimer-card superadmin-disclaimer">
                <div class="disclaimer-icon">📋</div>
                <div class="disclaimer-text">
                    <strong>Demo Security & Activity Audit Log</strong>
                    <p>Demonstrates how administrative events, logins, and RBAC permission checks are logged for governance purposes. In this local demo, events reflect simulated and current browser actions.</p>
                </div>
            </div>

            <div class="admin-panel-card">
                <div class="table-responsive">
                    <table class="admin-table">
                        <thead>
                            <tr>
                                <th>Timestamp</th>
                                <th>Actor (User)</th>
                                <th>Role</th>
                                <th>Event Type</th>
                                <th>Details / Resource</th>
                                <th>Result</th>
                            </tr>
                        </thead>
                        <tbody id="admin-audit-logs-body">
                            <tr>
                                <td>Today, 14:10:22</td>
                                <td>administrator.demo</td>
                                <td><span class="role-pill pill-superadmin">Administrator</span></td>
                                <td><code>AUTH_SIGNIN</code></td>
                                <td>Session authenticated via Demo Portal</td>
                                <td><span class="status-pill status-approved">SUCCESS</span></td>
                            </tr>
                            <tr>
                                <td>Today, 13:45:10</td>
                                <td>admin.demo</td>
                                <td><span class="role-pill pill-admin">Admin</span></td>
                                <td><code>RFQ_DISPATCH</code></td>
                                <td>Priced and sent quotation #RFQ-1047</td>
                                <td><span class="status-pill status-approved">SUCCESS</span></td>
                            </tr>
                            <tr>
                                <td>Today, 12:30:05</td>
                                <td>customer.demo</td>
                                <td><span class="role-pill pill-customer">Customer</span></td>
                                <td><code>QUOTE_SUBMIT</code></td>
                                <td>Created quote enquiry for 200x GI Rods</td>
                                <td><span class="status-pill status-approved">SUCCESS</span></td>
                            </tr>
                            <tr>
                                <td>Today, 11:15:40</td>
                                <td>customer.demo</td>
                                <td><span class="role-pill pill-customer">Customer</span></td>
                                <td><code>RBAC_CHECK</code></td>
                                <td>Attempted route to #admin-console (Blocked)</td>
                                <td><span class="status-pill status-urgent">RESTRICTED</span></td>
                            </tr>
                            <tr>
                                <td>Oct 24, 16:50:12</td>
                                <td>admin.demo</td>
                                <td><span class="role-pill pill-admin">Admin</span></td>
                                <td><code>STOCK_REORDER</code></td>
                                <td>Triggered replenishment for Copper Pipes</td>
                                <td><span class="status-pill status-approved">LOGGED</span></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    `,
    'admin-staff': `
        <div class="page-header admin-header">
            <div class="container">
                <div class="admin-header-flex">
                    <div>
                        <div class="admin-badge-wrap">
                            <span class="admin-demo-tag">DEMO PLACEHOLDER</span>
                            <span class="text-label" style="color: rgba(255,255,255,0.7);">Suntech Human Resources & Logistics</span>
                        </div>
                        <h1 style="font-size: 2.25rem;">HR & Field Personnel Portal</h1>
                        <p>Workforce roster, site deployment tracking, and MEP technician certifications.</p>
                    </div>
                    <div class="admin-header-actions">
                        <button class="btn-primary" onclick="window.demoToast('Staff roster synchronized (Demo)')">Sync Field Staff</button>
                    </div>
                </div>
            </div>
        </div>

        <div class="container section-padding">
            <div class="demo-disclaimer-card">
                <div class="disclaimer-icon">👷</div>
                <div class="disclaimer-text">
                    <strong>HR & Field Personnel Management (Demo)</strong>
                    <p>Demonstrates simulated site employee tracking, technician deployment across Doha construction projects, and safety training verification.</p>
                </div>
            </div>

            <div class="admin-stats-grid">
                <div class="admin-stat-card">
                    <div class="stat-top">
                        <span class="stat-label">Total Active Staff</span>
                        <span class="stat-icon">👥</span>
                    </div>
                    <div class="stat-number">42</div>
                    <div class="stat-sub positive">100% compliant safety certifications</div>
                </div>
                <div class="admin-stat-card">
                    <div class="stat-top">
                        <span class="stat-label">Field Logistics Crews</span>
                        <span class="stat-icon">🚚</span>
                    </div>
                    <div class="stat-number">6 Crews</div>
                    <div class="stat-sub">Dispatched to Doha Port & Lusail</div>
                </div>
                <div class="admin-stat-card">
                    <div class="stat-top">
                        <span class="stat-label">Warehouse Supervisors</span>
                        <span class="stat-icon">🏭</span>
                    </div>
                    <div class="stat-number">8</div>
                    <div class="stat-sub">Industrial Area Wh. 4 & St. 41</div>
                </div>
                <div class="admin-stat-card">
                    <div class="stat-top">
                        <span class="stat-label">Today's Shift Status</span>
                        <span class="stat-icon">✅</span>
                    </div>
                    <div class="stat-number">Active</div>
                    <div class="stat-sub">Morning Shift Operations On-Schedule</div>
                </div>
            </div>

            <div class="admin-panel-card" style="margin-top: 2rem;">
                <div class="panel-header">
                    <div>
                        <h3>MEP Field Technicians & Key Personnel</h3>
                        <p>Current site deployment and direct Qatar mobile contact info.</p>
                    </div>
                </div>
                <div class="table-responsive">
                    <table class="admin-table">
                        <thead>
                            <tr>
                                <th>Staff Name</th>
                                <th>Role / Title</th>
                                <th>Assigned Project / Site</th>
                                <th>Safety License</th>
                                <th>Status</th>
                                <th>Contact</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><strong>Naveed Khan</strong><br><span class="table-sub">Emp ID: #ST-804</span></td>
                                <td>Senior Piping Specialist</td>
                                <td>Lusail Marina Towers Pkg 4</td>
                                <td>QCS 2024 / OSHA Verified</td>
                                <td><span class="status-pill status-approved">On Site</span></td>
                                <td>+974 5511 2233</td>
                            </tr>
                            <tr>
                                <td><strong>Mohammad Tariq</strong><br><span class="table-sub">Emp ID: #ST-812</span></td>
                                <td>Electrical & Lighting Tech</td>
                                <td>Qatar Metro Red Line Overhaul</td>
                                <td>KAHRAMAA Approved</td>
                                <td><span class="status-pill status-approved">On Site</span></td>
                                <td>+974 6622 4455</td>
                            </tr>
                            <tr>
                                <td><strong>Rashid Al-Hajri</strong><br><span class="table-sub">Emp ID: #ST-790</span></td>
                                <td>HVAC Ducting Lead</td>
                                <td>West Bay Commercial Tower</td>
                                <td>Civil Defense Safety Lead</td>
                                <td><span class="status-pill status-approved">On Site</span></td>
                                <td>+974 3344 5566</td>
                            </tr>
                            <tr>
                                <td><strong>Suresh Kumar</strong><br><span class="table-sub">Emp ID: #ST-830</span></td>
                                <td>Warehouse Logistics Lead</td>
                                <td>Industrial Area Wh. 4</td>
                                <td>Forklift & Heavy Rigging</td>
                                <td><span class="status-pill status-dispatched">Warehouse</span></td>
                                <td>+974 7788 9900</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    `
};

export const DEMO_ACCOUNTS = {
    administrator: {
        role: 'administrator',
        username: 'executive@suntechqatar.com',
        aliasUsernames: ['administrator.demo', 'superadmin.demo', 'executive', 'administrator@suntechqatar.com', 'administrator', 'executive@suntechqatar.com'],
        password: '12345',
        displayName: 'Administrator',
        roleCategory: 'Executive Management',
        description: 'System Console, Audit Logs & Full Enterprise Access',
        name: 'Executive Director',
        title: 'Enterprise Administrator',
        company: 'Suntech Group Qatar (Head Office)',
        badgeText: 'Administrator (Executive)',
        badgeClass: 'pill-superadmin',
        defaultRoute: 'home'
    },
    admin: {
        role: 'admin',
        username: 'admin@suntechqatar.com',
        aliasUsernames: ['admin.demo', 'admin@linsinfotech.in', 'admin', 'operations', 'admin@suntechqatar.com'],
        password: '12345',
        displayName: 'Admin',
        roleCategory: 'Operations & RFQs',
        description: 'Daily Operations, Material Quotes & Procurement Queue',
        name: 'Tariq Mansour',
        title: 'Operations & Procurement Manager',
        company: 'Suntech Group Qatar',
        badgeText: 'Admin (Operations)',
        badgeClass: 'pill-admin',
        defaultRoute: 'home'
    },
    customer: {
        role: 'customer',
        username: 'customer@suntechqatar.com',
        aliasUsernames: ['customer.demo', 'customer', 'client', 'customer@suntechqatar.com'],
        password: '12345',
        displayName: 'Customer',
        roleCategory: 'Client Portal',
        description: 'Product Catalog, Material Sourcing & RFQ Submissions',
        name: 'Ahmed Al-Kuwari',
        title: 'Procurement Specialist',
        company: 'Doha Contracting Consortium',
        badgeText: 'Customer (Demo)',
        badgeClass: 'pill-customer',
        defaultRoute: 'home'
    },
    hr: {
        role: 'hr',
        username: 'hr@suntechqatar.com',
        aliasUsernames: ['hr.demo', 'hr', 'hr@suntechqatar.com'],
        password: '12345',
        displayName: 'HR Manager',
        roleCategory: 'Personnel & Safety',
        description: 'Field Staff Directory, Site Logistics & Certifications',
        name: 'Sara Al-Mahmoud',
        title: 'HR & Personnel Coordinator',
        company: 'Suntech Group Qatar',
        badgeText: 'HR & Staff',
        badgeClass: 'pill-admin',
        defaultRoute: 'home'
    },
    employee: {
        role: 'employee',
        username: 'employee@suntechqatar.com',
        aliasUsernames: ['employee.demo', 'employee', 'staff', 'technician', 'warehouse', 'employee@suntechqatar.com'],
        password: '12345',
        displayName: 'Warehouse Staff',
        roleCategory: 'Logistics Hub',
        description: 'Inventory Balances, Bin Locations & Material Receiving',
        name: 'Rashid Khan',
        title: 'Warehouse & Logistics Supervisor',
        company: 'Suntech Group Qatar (Street 24 Hub)',
        badgeText: 'Employee (Warehouse)',
        badgeClass: 'pill-admin',
        defaultRoute: 'home'
    }
};

export const ROLE_PERMISSIONS = {
    customer: {
        defaultRoute: 'home',
        allowedRoutes: ['home', 'products', 'catalog', 'divisions', 'about', 'contact', 'privacy', 'terms'],
        roleLabel: 'Customer Portal',
        badgeText: 'Customer (Demo)',
        navItems: [
            { route: 'products', label: 'Products' },
            { route: 'catalog', label: 'Catalog' },
            { route: 'divisions', label: 'Divisions' },
            { route: 'about', label: 'About' },
            { route: 'contact', label: 'Contact' }
        ]
    },
    admin: {
        defaultRoute: 'home',
        allowedRoutes: ['home', 'products', 'catalog', 'divisions', 'about', 'contact', 'admin-dashboard', 'admin-quotes', 'admin-inventory', 'admin-staff', 'privacy', 'terms'],
        roleLabel: 'Admin (Operations)',
        badgeText: 'Admin (Operations)',
        navItems: [
            { route: 'products', label: 'Products' },
            { route: 'catalog', label: 'Catalog' },
            { route: 'divisions', label: 'Divisions' },
            { route: 'about', label: 'About' },
            { route: 'contact', label: 'Contact' },
            { route: 'admin-dashboard', label: 'Operations' }
        ]
    },
    hr: {
        defaultRoute: 'home',
        allowedRoutes: ['home', 'products', 'catalog', 'divisions', 'about', 'contact', 'admin-staff', 'admin-dashboard', 'privacy', 'terms'],
        roleLabel: 'HR & Field Staff',
        badgeText: 'HR & Staff',
        navItems: [
            { route: 'products', label: 'Products' },
            { route: 'catalog', label: 'Catalog' },
            { route: 'divisions', label: 'Divisions' },
            { route: 'about', label: 'About' },
            { route: 'contact', label: 'Contact' },
            { route: 'admin-staff', label: 'Staff' }
        ]
    },
    employee: {
        defaultRoute: 'home',
        allowedRoutes: ['home', 'products', 'catalog', 'divisions', 'about', 'contact', 'admin-inventory', 'privacy', 'terms'],
        roleLabel: 'Warehouse & Logistics Staff',
        badgeText: 'Employee (Warehouse)',
        navItems: [
            { route: 'products', label: 'Products' },
            { route: 'catalog', label: 'Catalog' },
            { route: 'divisions', label: 'Divisions' },
            { route: 'about', label: 'About' },
            { route: 'contact', label: 'Contact' },
            { route: 'admin-inventory', label: 'Warehouse' }
        ]
    },
    administrator: {
        defaultRoute: 'home',
        allowedRoutes: ['home', 'products', 'catalog', 'divisions', 'about', 'contact', 'admin-console', 'admin-dashboard', 'admin-quotes', 'admin-inventory', 'admin-staff', 'privacy', 'terms'],
        roleLabel: 'Administrator (Executive)',
        badgeText: 'Administrator (Executive)',
        navItems: [
            { route: 'products', label: 'Products' },
            { route: 'catalog', label: 'Catalog' },
            { route: 'divisions', label: 'Divisions' },
            { route: 'about', label: 'About' },
            { route: 'contact', label: 'Contact' },
            { route: 'admin-console', label: 'Executive' }
        ]
    }
};

window.featuredBrands = [
    { name: "3M", desc: "Electrical Tapes", img: "assets/brands/media_1790529862746.png" },
    { name: "BAND-IT", desc: "Cable Ties", img: "assets/brands/media_1790529871977.png" },
    { name: "CELLPACK", desc: "Cable Joint Kits", img: "assets/brands/media_1790529878349.png" },
    { name: "CMP PRODUCTS", desc: "Cable Glands", img: "assets/brands/media_1790529884867.png" },
    { name: "COOPER", desc: "Ex Proof Fittings", img: "assets/brands/media_1790529889793.png" },
    { name: "ERICO", desc: "Earthing Materials", img: "assets/brands/media_1790529991712.png" },
    { name: "HEX", desc: "Cable Lugs & Glands", img: "assets/brands/media_1790529998623.png" },
    { name: "HAWKE", desc: "Cable Glands & JB", img: "assets/brands/media_1790530005211.png" },
    { name: "Klauke", desc: "Tools", img: "assets/brands/media_1790530011456.png" },
    { name: "Raychem", desc: "Termination & Joints", img: "assets/brands/media_1790530018294.png" },
    { name: "thermOweld", desc: "Molds & Powder", img: "assets/brands/media_1790530039157.png" },
    { name: "Yesha", desc: "SS Cable Ties", img: "assets/brands/media_1790530046265.png" },
    { name: "Weidmuller", desc: "Terminal Blocks", img: "assets/brands/media_1790530051851.png" },
    { name: "HIOKI", desc: "Testing Equipment", img: "assets/brands/media_1790530059265.png" }
];
window.__suntechViews = views;
window.__suntechDemoAccounts = DEMO_ACCOUNTS;
