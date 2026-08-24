/* ========================================================================
   script.js — Boichitro Shop BD | Single Combined Engine
   (Merged from products.js + cart.js + checkout.js + app.js)
   Sections: 1) Product/Settings/Coupon/Order DB  2) Cart  3) Checkout  4) Theme/Nav/Init
   ========================================================================== */

/* ==========================================================================
   js/products.js — Boichitro Shop BD Central Product Data & Database Engine
   ========================================================================== */

// 1. DEFAULT DATASETS (Seeded on first launch)
const DEFAULT_PRODUCTS_DATA = [
    {
        id: "seven-oceans-1",
        name: "Seven Oceans Emergency Food",
        category: "Emergency Food",
        price: 500,
        oldPrice: null,
        image: "image/Seven Oceans.jpg",
        description: "১ টি সিঙ্গেল রেশন প্যাক (৫০০ গ্রাম)",
        badge: "Popular",
        type: "product",
        productType: "regular",
        featured: true,
        active: true,
        packageInfo: "ওজন: ৫০০ গ্রাম, ক্যালরি: ১০,৩০০ kJ / ২,৪০০ kcal, প্রিজারভেটিভ বিহীন, নরওয়েতে তৈরি। জরুরি দুর্যোগ ও দীর্ঘমেয়াদী মজুদের জন্য আদর্শ।"
    },
    {
        id: "seven-oceans-water-1",
        name: "Seven Oceans Emergency Water",
        category: "Emergency Water",
        price: 90,
        oldPrice: null,
        image: "image/Seven_Oceans_emergency_water.jpeg",
        description: "১টি Emergency Water Pack — (৫০০ ml)",
        badge: "Popular",
        type: "product",
        productType: "regular",
        featured: true,
        active: true,
        packageInfo: "পরিমাণ: ৫০০ মি.লি., ৫ বছরের মেয়াদী বিশুদ্ধ জরুরি পানীয় জল, আন্তর্জাতিক SOLAS স্ট্যান্ডার্ড অনুমোদিত প্যাকেজড ওয়াটার।"
    },
    {
        id: "seven-oceans-pack-2",
        name: "Seven Oceans (Pack - 2)",
        category: "Emergency Food",
        price: 980,
        oldPrice: 1000,
        image: "image/Seven Oceans1.jpg",
        description: "২ টি রেশন প্যাকের সাশ্রয়ী সেট",
        badge: "Best Value",
        type: "offer",
        productType: "offer",
        featured: true,
        active: true,
        packageInfo: "২ টি অরিজিনাল ৫০০ গ্রাম সাত মহাসাগরের রেশন প্যাকের মেগা সাশ্রয়ী কম্বো (মোট ১,০০০ গ্রাম, ৪,৮০০ কিলোক্যালোরি শক্তি)।"
    },
    {
        id: "seven-oceans-pack-3",
        name: "Seven Oceans (Pack - 3)",
        category: "Emergency Food",
        price: 1470,
        oldPrice: 1500,
        image: "image/Seven Oceans3.jpeg",
        description: "৩ টি রেশন প্যাক ফ্যামিলি অফার",
        badge: "Special Offer",
        type: "offer",
        productType: "offer",
        featured: true,
        active: true,
        packageInfo: "৩ টি অরিজিনাল ইমার্জেন্সি ফুড রেশন প্যাকেজ (মোট ১,৫০০ গ্রাম)। পরিবারের জরুরি প্রস্তুতির জন্য উপযুক্ত।"
    },
    {
        id: "seven-oceans-water-pack-2",
        name: "Seven Oceans Water (Pack - 2)",
        category: "Emergency Water",
        price: 150,
        oldPrice: 180,
        image: "image/Seven Oceans water Pack - 2.jpeg",
        description: "২ টি রেশন ওয়াটার প্যাকের সাশ্রয়ী সেট",
        badge: "Best Value",
        type: "offer",
        productType: "offer",
        featured: true,
        active: true,
        packageInfo: "২ টি ইমার্জেন্সি ওয়াটার প্যাক (১,০০০ ml total)। দুর্যোগ ও জরুরি মজুদে বিশুদ্ধ পানীয় নিশ্চিত করে।"
    },
    {
        id: "seven-oceans-pack-5",
        name: "Seven Oceans (Pack - 5)",
        category: "Emergency Food",
        price: 2450,
        oldPrice: 2500,
        image: "image/Seven Oceans(Pack - 5).jpeg",
        description: "৫ টি রেশন প্যাক মেগা কন্টেইনার",
        badge: "Mega Pack",
        type: "offer",
        productType: "offer",
        featured: true,
        active: true,
        packageInfo: "৫ টি রেশন প্যাক মেগা ফ্যামিলি প্যাকেজ (মোট ২,৫০০ গ্রাম / ১২,০০০ কিলোক্যালরি শক্তি)। সর্বোচ্চ সাশ্রয়ী ডিল।"
    },
    {
        id: "seven-oceans-water-pack-5",
        name: "Seven Oceans Water (Pack - 5)",
        category: "Emergency Water",
        price: 330,
        oldPrice: 450,
        image: "image/Seven Oceans water(Pack - 5).jpeg",
        description: "৫টি Emergency Water Pack — (২,৫০০ ml)",
        badge: "Mega Pack",
        type: "offer",
        productType: "offer",
        featured: false,
        active: true,
        packageInfo: "৫ টি বিশুদ্ধ জরুরি সুপেয় ওয়াটার প্যাক (মোট ২,৫০০ ml)। ৫ বছর পর্যন্ত অক্ষত থাকে।"
    }
];

const DEFAULT_SETTINGS = {
    siteName: "Boichitro Shop BD",
    whatsappNumber: "8801818028094",
    deliveryChattogram: 100,
    deliveryOutside: 150,
    currencySymbol: "৳",
    facebookUrl: "https://facebook.com",
    address: "চট্টগ্রাম, বাংলাদেশ"
};

const DEFAULT_COUPONS = [
    {
        id: "coupon-1",
        code: "WELCOME10",
        type: "percent",
        value: 10,
        minOrder: 500,
        active: true
    },
    {
        id: "coupon-2",
        code: "SAVE100",
        type: "fixed",
        value: 100,
        minOrder: 1000,
        active: true
    }
];

const DEFAULT_ADMIN = {
    email: "admin@boichitrobd.com",
    password: "admin123" // Default beginner-friendly credential
};

// 2. STORAGE KEYS
const STORAGE_KEYS = {
    PRODUCTS: "boichitro_db_products",
    SETTINGS: "boichitro_db_settings",
    COUPONS: "boichitro_db_coupons",
    ORDERS: "boichitro_db_orders",
    ADMIN: "boichitro_db_admin",
    SESSION: "boichitro_admin_session"
};

// Global reference for products (declared early to prevent TDZ errors during initial seeding)
let PRODUCTS_DATA = [];

// Helper functions for clean classification
function isRegularProduct(p) {
    if (!p) return false;
    if (p.type === "offer" || p.productType === "offer") return false;
    return p.type === "product" || p.productType === "regular" || !p.type;
}

function isOfferProduct(p) {
    if (!p) return false;
    return p.type === "offer" || p.productType === "offer";
}

// 3. DATABASE ACCESSORS & METHODS (Single Source of Truth)
function getDBProducts() {
    try {
        const data = localStorage.getItem(STORAGE_KEYS.PRODUCTS);
        if (data) {
            let parsed = JSON.parse(data);
            if (Array.isArray(parsed) && parsed.length > 0) {
                // Filter out obsolete/temporary IDs if any
                const cleaned = parsed.filter(p => p.id !== "seven-oceans-ration-pack" && p.id !== "seven-oceans-water-single-pack");

                // Ensure data synchronization & type classification
                let hasChanges = cleaned.length !== parsed.length;
                
                cleaned.forEach(p => {
                    if (p.type === "offer" || p.productType === "offer" || p.id.includes("pack-") || p.id.includes("offer")) {
                        if (p.type !== "offer" || p.productType !== "offer") {
                            p.type = "offer";
                            p.productType = "offer";
                            hasChanges = true;
                        }
                    } else {
                        if (p.type !== "product" || p.productType !== "regular") {
                            p.type = "product";
                            p.productType = "regular";
                            hasChanges = true;
                        }
                    }
                });

                // Ensure all default products and offers exist
                DEFAULT_PRODUCTS_DATA.forEach(defProd => {
                    if (!cleaned.some(p => p.id === defProd.id)) {
                        cleaned.push(defProd);
                        hasChanges = true;
                    }
                });

                if (hasChanges) {
                    saveDBProducts(cleaned);
                }
                return cleaned;
            }
        }
    } catch (e) {
        console.error("Error reading products db:", e);
    }
    // Seed default products
    saveDBProducts(DEFAULT_PRODUCTS_DATA);
    return DEFAULT_PRODUCTS_DATA;
}

function saveDBProducts(products) {
    try {
        localStorage.setItem(STORAGE_KEYS.PRODUCTS, JSON.stringify(products));
        // Update live PRODUCTS_DATA variable for legacy compatibility
        PRODUCTS_DATA = products;
    } catch (e) {
        console.error("Error saving products db:", e);
    }
}

function getDBSettings() {
    try {
        const data = localStorage.getItem(STORAGE_KEYS.SETTINGS);
        if (data) {
            return { ...DEFAULT_SETTINGS, ...JSON.parse(data) };
        }
    } catch (e) {
        console.error("Error reading settings db:", e);
    }
    saveDBSettings(DEFAULT_SETTINGS);
    return DEFAULT_SETTINGS;
}

function saveDBSettings(settings) {
    try {
        localStorage.setItem(STORAGE_KEYS.SETTINGS, JSON.stringify(settings));
    } catch (e) {
        console.error("Error saving settings db:", e);
    }
}

function getDBCoupons() {
    try {
        const data = localStorage.getItem(STORAGE_KEYS.COUPONS);
        if (data) {
            const parsed = JSON.parse(data);
            if (Array.isArray(parsed)) return parsed;
        }
    } catch (e) {
        console.error("Error reading coupons db:", e);
    }
    saveDBCoupons(DEFAULT_COUPONS);
    return DEFAULT_COUPONS;
}

function saveDBCoupons(coupons) {
    try {
        localStorage.setItem(STORAGE_KEYS.COUPONS, JSON.stringify(coupons));
    } catch (e) {
        console.error("Error saving coupons db:", e);
    }
}

function getDBOrders() {
    try {
        const data = localStorage.getItem(STORAGE_KEYS.ORDERS);
        if (data) {
            const parsed = JSON.parse(data);
            if (Array.isArray(parsed)) return parsed;
        }
    } catch (e) {
        console.error("Error reading orders db:", e);
    }
    return [];
}

function saveDBOrders(orders) {
    try {
        localStorage.setItem(STORAGE_KEYS.ORDERS, JSON.stringify(orders));
    } catch (e) {
        console.error("Error saving orders db:", e);
    }
}

function addDBOrder(order) {
    const orders = getDBOrders();
    orders.unshift(order); // Add to top of list
    saveDBOrders(orders);
    return order;
}

function updateDBOrderStatus(orderId, newStatus) {
    const orders = getDBOrders();
    const order = orders.find(o => o.orderId === orderId || o.id === orderId);
    if (order) {
        order.status = newStatus;
        saveDBOrders(orders);
        return true;
    }
    return false;
}

function getDBAdmin() {
    try {
        const data = localStorage.getItem(STORAGE_KEYS.ADMIN);
        if (data) {
            return JSON.parse(data);
        }
    } catch (e) {
        console.error("Error reading admin db:", e);
    }
    saveDBAdmin(DEFAULT_ADMIN);
    return DEFAULT_ADMIN;
}

function saveDBAdmin(adminData) {
    try {
        localStorage.setItem(STORAGE_KEYS.ADMIN, JSON.stringify(adminData));
    } catch (e) {
        console.error("Error saving admin db:", e);
    }
}

// 4. ACTIVE PRODUCTS & GLOBAL REFERENCE
PRODUCTS_DATA = getDBProducts();

// Helper: Format Price in Bangladeshi Currency Style (e.g. ৳১,০০০)
function formatCurrency(amount) {
    return "৳" + Number(amount).toLocaleString('en-IN');
}

// Helper: Get Product By ID
function getProductById(id) {
    const products = getDBProducts();
    return products.find(p => p.id === id) || null;
}

// Coupon Validator Helper
function validateCouponCode(code, subtotal) {
    if (!code || !code.trim()) {
        return { valid: false, message: "⚠️ অনুগ্রহ করে কুপন কোড লিখুন।" };
    }
    const cleanCode = code.trim().toUpperCase();
    const coupons = getDBCoupons();
    const coupon = coupons.find(c => c.code.toUpperCase() === cleanCode);

    if (!coupon || !coupon.active) {
        return { valid: false, message: "❌ কুপন কোডটি সঠিক নয় বা বর্তমানে সক্রিয় নয়।" };
    }

    if (coupon.minOrder && subtotal < coupon.minOrder) {
        return { 
            valid: false, 
            message: `⚠️ এই কুপন ব্যবহার করতে ন্যূনতম ${formatCurrency(coupon.minOrder)} টাকার অর্ডার প্রয়োজন।` 
        };
    }

    let discount = 0;
    if (coupon.type === "percent") {
        discount = Math.round((subtotal * coupon.value) / 100);
    } else {
        discount = Number(coupon.value);
    }

    if (discount > subtotal) {
        discount = subtotal;
    }

    return {
        valid: true,
        coupon: coupon,
        discount: discount,
        message: `✓ কুপন "${coupon.code}" সফলভাবে যুক্ত হয়েছে! (ছাড় ${formatCurrency(discount)})`
    };
}

// UI Card Generator for Catalog & Offer Grids
function createProductCardHTML(item) {
    let oldPriceHTML = '';
    let discountBadgeHTML = '';

    if (item.oldPrice && item.oldPrice > item.price) {
        const savings = item.oldPrice - item.price;
        oldPriceHTML = `<span class="old-price">${formatCurrency(item.oldPrice)}</span>`;
        discountBadgeHTML = `<span class="save-badge">Save ${formatCurrency(savings)}</span>`;
    }

    let badgeClass = 'card-badge';
    if (item.badge && item.badge.toLowerCase().includes('best')) badgeClass += ' badge-sale';
    if (item.badge && item.badge.toLowerCase().includes('mega')) badgeClass += ' badge-mega';

    return `
        <div class="product-card" data-id="${item.id}">
            ${item.badge ? `<span class="${badgeClass}">${item.badge}</span>` : ''}
            <div class="product-img" onclick="goToProductDetails('${item.id}')" title="${item.name}">
                <img src="${item.image}" alt="${item.name}" loading="lazy" onerror="this.src='image/Seven Oceans.jpg'">
            </div>
            <div class="product-details">
                <h3 onclick="goToProductDetails('${item.id}')">${item.name}</h3>
                <p class="desc">${item.description}</p>
                <div class="price-box">
                    <span class="price">${formatCurrency(item.price)}</span>
                    ${oldPriceHTML}
                    ${discountBadgeHTML}
                </div>
                <div class="card-actions">
                    <button type="button" class="btn-add-cart" onclick="handleAddToCart('${item.id}')">
                        <i class="fa-solid fa-cart-plus"></i> কার্টে রাখুন
                    </button>
                    <button type="button" class="btn-buy-now" onclick="handleBuyNow('${item.id}')">
                        অর্ডার করুন
                    </button>
                </div>
            </div>
        </div>
    `;
}

// 5. RENDERING CATALOG ON HOMEPAGE
function renderHomepage() {
    const productsGrid = document.getElementById("homepageProductsGrid");
    const offersGrid = document.getElementById("homepageOffersGrid");
    const offersSection = document.getElementById("offers");
    const products = getDBProducts();

    // Homepage shows a MAXIMUM of 4 cards — Featured items are prioritized first,
    // and if fewer than 4 are marked Featured, the remaining slots are filled with
    // the other active items so the homepage never looks empty.
    const HOMEPAGE_LIMIT = 4;

    if (productsGrid) {
        // Display active regular products on homepage (max 4)
        const regularProducts = products.filter(p => isRegularProduct(p) && p.active !== false);
        const featuredFirst = regularProducts.filter(p => p.featured)
            .concat(regularProducts.filter(p => !p.featured));
        const homepageProducts = featuredFirst.slice(0, HOMEPAGE_LIMIT);

        if (homepageProducts.length > 0) {
            productsGrid.innerHTML = homepageProducts.map(createProductCardHTML).join("");
        } else {
            productsGrid.innerHTML = `<p style="text-align:center; grid-column:1/-1; color:var(--text-muted);">বর্তমানে কোনো প্রোডাক্ট উপলব্ধ নেই।</p>`;
        }
    }

    if (offersGrid) {
        // Display active offers on homepage (max 4)
        const activeOffers = products.filter(p => isOfferProduct(p) && p.active !== false);
        const featuredOffersFirst = activeOffers.filter(p => p.featured)
            .concat(activeOffers.filter(p => !p.featured));
        const homepageOffers = featuredOffersFirst.slice(0, HOMEPAGE_LIMIT);

        if (homepageOffers.length === 0) {
            if (offersSection) {
                offersSection.style.display = "none";
            }
            offersGrid.innerHTML = `<p style="text-align:center; grid-column:1/-1; color:var(--text-muted);">বর্তমানে কোনো অফার চালু নেই।</p>`;
        } else {
            if (offersSection) {
                offersSection.style.display = "block";
            }
            offersGrid.innerHTML = homepageOffers.map(createProductCardHTML).join("");
        }
    }
}

// 6. RENDERING CATALOG ON PRODUCTS PAGE
function renderProductsPage(categoryFilter = "all", searchQuery = "", sortBy = "popular") {
    const grid = document.getElementById("allProductsGrid");
    const noResults = document.getElementById("noProductsMsg");
    if (!grid) return;

    const products = getDBProducts();
    // Only regular products belong on the products page
    let list = products.filter(p => isRegularProduct(p) && p.active !== false);

    if (categoryFilter !== "all") {
        list = list.filter(p => p.category === categoryFilter);
    }

    if (searchQuery) {
        const q = searchQuery.toLowerCase().trim();
        list = list.filter(p => 
            p.name.toLowerCase().includes(q) || 
            (p.description && p.description.toLowerCase().includes(q)) || 
            (p.category && p.category.toLowerCase().includes(q))
        );
    }

    if (sortBy === "low-high") {
        list.sort((a, b) => a.price - b.price);
    } else if (sortBy === "high-low") {
        list.sort((a, b) => b.price - a.price);
    }

    if (list.length === 0) {
        grid.innerHTML = "";
        if (noResults) noResults.style.display = "block";
    } else {
        if (noResults) noResults.style.display = "none";
        grid.innerHTML = list.map(createProductCardHTML).join("");
    }
}

// 7. RENDERING OFFERS PAGE
function renderOffersPage(searchQuery = "") {
    const grid = document.getElementById("allOffersGrid");
    const noResults = document.getElementById("noOffersMsg");
    if (!grid) return;

    const products = getDBProducts();
    // Only offer products belong on the offers page
    let offers = products.filter(p => isOfferProduct(p) && p.active !== false);

    if (searchQuery) {
        const q = searchQuery.toLowerCase().trim();
        offers = offers.filter(p => 
            p.name.toLowerCase().includes(q) || 
            (p.description && p.description.toLowerCase().includes(q))
        );
    }

    if (offers.length === 0) {
        grid.innerHTML = "";
        if (noResults) noResults.style.display = "block";
    } else {
        if (noResults) noResults.style.display = "none";
        grid.innerHTML = offers.map(createProductCardHTML).join("");
    }
}

// 8. RENDERING SINGLE PRODUCT DETAILS PAGE
function renderSingleProductDetailsPage() {
    const wrapper = document.getElementById("productDetailsWrapper");
    if (!wrapper) return;

    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get("id") || "seven-oceans-1";
    const products = getDBProducts();
    const item = products.find(p => p.id === productId) || products[0];

    if (!item) return;

    document.title = `${item.name} | Boichitro Shop BD`;

    let oldPriceHTML = '';
    if (item.oldPrice && item.oldPrice > item.price) {
        const savings = item.oldPrice - item.price;
        oldPriceHTML = `
            <span class="old-price" style="font-size: 18px;">${formatCurrency(item.oldPrice)}</span>
            <span class="save-badge">Save ${formatCurrency(savings)}</span>
        `;
    }

    wrapper.innerHTML = `
        <div class="product-details-grid">
            <div class="product-large-img">
                <img src="${item.image}" alt="${item.name}" onerror="this.src='image/Seven Oceans.jpg'">
            </div>
            <div class="product-info-col">
                <span class="badge badge-primary">${item.category || "General"}</span>
                <h1>${item.name}</h1>
                <p class="desc">${item.description}</p>
                
                <div class="price-box">
                    <span class="price" style="font-size: 28px;">${formatCurrency(item.price)}</span>
                    ${oldPriceHTML}
                </div>

                <div class="package-info-box">
                    <h4><i class="fa-solid fa-box-open"></i> প্যাকেজ বিবরণী</h4>
                    <p>${item.packageInfo || "১০০% নরওয়েজিয়ান অরিজিনাল সারভাইভাল এমার্জেন্সি ফুড রেশন।"}</p>
                </div>

                <div class="quantity-selector-box form-group">
                    <label>পরিমাণ:</label>
                    <div class="quantity-control">
                        <button type="button" class="qty-btn" onclick="adjustDetailQty(-1)">-</button>
                        <input type="number" id="detailQty" value="1" min="1" readonly>
                        <button type="button" class="qty-btn" onclick="adjustDetailQty(1)">+</button>
                    </div>
                </div>

                <div class="detail-actions">
                    <button type="button" class="btn btn-secondary btn-lg" onclick="addDetailToCart('${item.id}')">
                        <i class="fa-solid fa-cart-plus"></i> কার্টে রাখুন
                    </button>
                    <button type="button" class="btn btn-primary btn-lg" onclick="buyDetailNow('${item.id}')">
                        এখনই অর্ডার করুন
                    </button>
                </div>
            </div>
        </div>
    `;
}

function adjustDetailQty(delta) {
    const input = document.getElementById("detailQty");
    if (input) {
        let val = parseInt(input.value) || 1;
        val += delta;
        if (val < 1) val = 1;
        input.value = val;
    }
}

function goToProductDetails(id) {
    window.location.href = `product.html?id=${id}`;
}

// 7. HIDDEN ADMIN KEYBOARD SHORTCUT (Ctrl + Shift + A)
// Opens /admin/login.html securely without any visible UI buttons or links
(function initAdminShortcut() {
    if (window.__boichitroAdminShortcutInitialized) return;
    window.__boichitroAdminShortcutInitialized = true;

    window.addEventListener("keydown", function (e) {
        // Detect Ctrl + Shift + A (or Cmd + Shift + A on macOS)
        const isKeyA = e.key === "A" || e.key === "a" || e.code === "KeyA" || e.keyCode === 65;
        const hasModifiers = (e.ctrlKey || e.metaKey) && e.shiftKey;

        if (hasModifiers && isKeyA) {
            e.preventDefault();
            e.stopPropagation();

            const currentPath = window.location.pathname;
            if (currentPath.includes("/admin/")) {
                window.location.href = "login.html";
            } else {
                window.location.href = "admin/login.html";
            }
        }
    }, true);
})();

/* ==========================================================================
   js/cart.js — Boichitro Shop BD Central Cart & State Management Engine
   ========================================================================== */

let cart = [];

// 1. LOCAL STORAGE PERSISTENCE & PRICE RE-SYNC
function loadCart() {
    try {
        const savedCart = localStorage.getItem("boichitroCart");
        if (savedCart) {
            cart = JSON.parse(savedCart);
            if (!Array.isArray(cart)) cart = [];
            
            // Re-sync price from live DB in case price changed in Admin
            if (typeof getProductById === "function") {
                cart.forEach(item => {
                    const fresh = getProductById(item.id);
                    if (fresh) {
                        item.price = fresh.price;
                        item.name = fresh.name;
                        item.img = fresh.image;
                    }
                });
            }
        } else {
            cart = [];
        }
    } catch (e) {
        console.error("Cart loading error:", e);
        cart = [];
    }
}

function saveCart() {
    try {
        localStorage.setItem("boichitroCart", JSON.stringify(cart));
    } catch (e) {
        console.error("Cart saving error:", e);
    }
}

// 2. CART DRAWER CONTROLS
function openCartDrawer() {
    const cartDrawer = document.getElementById("cartDrawer");
    const drawerOverlay = document.getElementById("drawerOverlay");
    if (cartDrawer && drawerOverlay) {
        cartDrawer.classList.add("active");
        drawerOverlay.classList.add("active");
        document.body.style.overflow = "hidden"; // Prevent background scrolling
    }
}

function closeCartDrawer() {
    const cartDrawer = document.getElementById("cartDrawer");
    const drawerOverlay = document.getElementById("drawerOverlay");
    if (cartDrawer && drawerOverlay) {
        cartDrawer.classList.remove("active");
        drawerOverlay.classList.remove("active");
        document.body.style.overflow = ""; // Restore background scrolling
    }
}

// 3. CART OPERATIONS
function handleAddToCart(id, qty = 1) {
    const prod = typeof getProductById === "function" ? getProductById(id) : PRODUCTS_DATA.find(p => p.id === id);
    if (!prod) return;

    const existing = cart.find(item => item.id === id);
    if (existing) {
        existing.qty += qty;
        existing.price = prod.price; // update to fresh price
    } else {
        cart.push({ id: prod.id, name: prod.name, price: prod.price, qty: qty, img: prod.image });
    }

    saveCart();
    updateCartUI();
    openCartDrawer();
    if (typeof showToast === "function") {
        showToast(`✓ "${prod.name}" কার্টে যোগ হয়েছে`, "success");
    }
}

function handleBuyNow(id, qty = 1) {
    const prod = typeof getProductById === "function" ? getProductById(id) : PRODUCTS_DATA.find(p => p.id === id);
    if (!prod) return;

    // Preserves existing cart items and appends/increments requested item
    const existing = cart.find(item => item.id === id);
    if (existing) {
        existing.qty += qty;
        existing.price = prod.price; // update to fresh price
    } else {
        cart.push({ id: prod.id, name: prod.name, price: prod.price, qty: qty, img: prod.image });
    }

    saveCart();
    updateCartUI();
    window.location.href = "checkout.html";
}

function addDetailToCart(id) {
    const qtyInput = document.getElementById("detailQty");
    const qty = qtyInput ? parseInt(qtyInput.value) : 1;
    handleAddToCart(id, qty);
}

function buyDetailNow(id) {
    const qtyInput = document.getElementById("detailQty");
    const qty = qtyInput ? parseInt(qtyInput.value) : 1;
    handleBuyNow(id, qty);
}

function removeFromCart(index) {
    if (index >= 0 && index < cart.length) {
        cart.splice(index, 1);
        saveCart();
        updateCartUI();
        if (typeof showToast === "function") {
            showToast("কার্ট থেকে পণ্য সরানো হয়েছে।", "warning");
        }
    }
}

function updateCartQuantity(index, delta) {
    if (index >= 0 && index < cart.length) {
        cart[index].qty += delta;
        if (cart[index].qty <= 0) {
            cart.splice(index, 1);
            if (typeof showToast === "function") {
                showToast("কার্ট থেকে পণ্য সরানো হয়েছে।", "warning");
            }
        }
        saveCart();
        updateCartUI();
    }
}

// 4. CART UI UPDATES & BADGE SYNC
function updateCartUI() {
    const cartContainer = document.getElementById("cartItemsContainer");
    const cartBadge = document.getElementById("cartBadge");
    const mobileCartBadge = document.getElementById("mobileCartBadge");
    const cartTotal = document.getElementById("cartTotal");

    let itemCount = 0;
    let total = 0;

    cart.forEach(item => {
        itemCount += item.qty;
        total += item.price * item.qty;
    });

    if (cartBadge) cartBadge.innerText = itemCount;
    if (mobileCartBadge) mobileCartBadge.innerText = itemCount;
    if (cartTotal) cartTotal.innerText = formatCurrency(total);

    if (cartContainer) {
        if (cart.length === 0) {
            cartContainer.innerHTML = `
                <div class="empty-cart-msg">
                    <i class="fa-solid fa-cart-arrow-down"></i>
                    <p>আপনার কার্ট খালি!</p>
                    <a href="products.html" class="btn btn-secondary btn-sm" onclick="closeCartDrawer()" style="margin-top: 15px;">প্রোডাক্টস দেখুন</a>
                </div>`;
        } else {
            cartContainer.innerHTML = cart.map((item, index) => `
                <div class="cart-item">
                    <img src="${item.img}" alt="${item.name}" class="cart-item-img" onerror="this.src='image/Seven Oceans.jpg'">
                    <div class="cart-item-info">
                        <h4>${item.name}</h4>
                        <div class="cart-item-price">${formatCurrency(item.price)} × ${item.qty} = <span class="item-total-price">${formatCurrency(item.price * item.qty)}</span></div>
                        <div class="cart-item-actions">
                            <div class="cart-qty-controls">
                                <button type="button" class="qty-btn-sm" onclick="updateCartQuantity(${index}, -1)" aria-label="Decrease quantity">-</button>
                                <span class="qty-num">${item.qty}</span>
                                <button type="button" class="qty-btn-sm" onclick="updateCartQuantity(${index}, 1)" aria-label="Increase quantity">+</button>
                            </div>
                            <button type="button" class="cart-del-btn" onclick="removeFromCart(${index})" title="মুছে ফেলুন" aria-label="Delete item">
                                <i class="fa-solid fa-trash"></i>
                            </button>
                        </div>
                    </div>
                </div>
            `).join("");
        }
    }

    // Refresh checkout view if present on page
    if (typeof renderCheckoutReview === "function") {
        renderCheckoutReview();
    }
}

/* ==========================================================================
   js/checkout.js — Boichitro Shop BD Checkout, Validation & Order System
   ========================================================================== */

let isOrderJustSubmitted = false;
let appliedCoupon = null; // Stores currently applied coupon object

// 1. CHECKOUT INITIALIZER
function initCheckoutPage() {
    const checkoutGrid = document.getElementById("checkoutGrid");
    if (!checkoutGrid && !document.getElementById("checkoutEmptyState")) return;

    updateDeliveryRadiosFromSettings();
    renderCheckoutReview();
    setupCheckoutEvents();
}

// Helper: Sync delivery charges from Admin Settings
function updateDeliveryRadiosFromSettings() {
    const settings = typeof getDBSettings === "function" ? getDBSettings() : { deliveryChattogram: 100, deliveryOutside: 150 };
    const radioCtg = document.querySelector('input[name="deliveryCharge"][value="100"], input[name="deliveryCharge"][data-area="ctg"]');
    const radioOut = document.querySelector('input[name="deliveryCharge"][value="150"], input[name="deliveryCharge"][data-area="out"]');

    if (radioCtg) {
        radioCtg.value = settings.deliveryChattogram;
        radioCtg.setAttribute("data-area", "ctg");
        const parentLabel = radioCtg.closest(".radio-label");
        if (parentLabel) {
            parentLabel.innerHTML = `<input type="radio" name="deliveryCharge" value="${settings.deliveryChattogram}" data-area="ctg" checked> চট্টগ্রাম শহর — ৳${settings.deliveryChattogram}`;
        }
    }

    if (radioOut) {
        radioOut.value = settings.deliveryOutside;
        radioOut.setAttribute("data-area", "out");
        const parentLabel = radioOut.closest(".radio-label");
        if (parentLabel) {
            parentLabel.innerHTML = `<input type="radio" name="deliveryCharge" value="${settings.deliveryOutside}" data-area="out"> চট্টগ্রামের বাইরে — ৳${settings.deliveryOutside}`;
        }
    }
}

// 2. RENDER ORDER REVIEW
function renderCheckoutReview() {
    if (isOrderJustSubmitted) return;

    const emptyState = document.getElementById("checkoutEmptyState");
    const checkoutForm = document.getElementById("checkoutForm");
    const checkoutItemsList = document.getElementById("checkoutItemsList");
    const orderSuccessState = document.getElementById("orderSuccessState");

    if (orderSuccessState && orderSuccessState.style.display === "block") {
        return;
    }

    if (!checkoutItemsList) return;

    if (cart.length === 0) {
        if (emptyState) emptyState.style.display = "block";
        if (checkoutForm) checkoutForm.style.display = "none";
    } else {
        if (emptyState) emptyState.style.display = "none";
        if (checkoutForm) checkoutForm.style.display = "block";

        checkoutItemsList.innerHTML = cart.map((item, index) => `
            <div class="checkout-item-card">
                <div class="checkout-top-row">
                    <img src="${item.img}" alt="${item.name}" class="checkout-item-img" onerror="this.src='image/Seven Oceans.jpg'">
                    <div class="checkout-item-details">
                        <h4>${item.name}</h4>
                        <div class="price">${formatCurrency(item.price)} × ${item.qty} = <span class="item-total-price">${formatCurrency(item.price * item.qty)}</span></div>
                    </div>
                </div>
                <div class="cart-item-actions" style="margin-top: 4px; width: 100%;">
                    <div class="cart-qty-controls">
                        <button type="button" class="qty-btn-sm" onclick="updateCartQuantity(${index}, -1)" aria-label="Decrease quantity">-</button>
                        <span class="qty-num">${item.qty}</span>
                        <button type="button" class="qty-btn-sm" onclick="updateCartQuantity(${index}, 1)" aria-label="Increase quantity">+</button>
                    </div>
                    <button type="button" class="cart-del-btn" onclick="removeFromCart(${index})" title="মুছে ফেলুন" aria-label="Delete item">
                        <i class="fa-solid fa-trash"></i>
                    </button>
                </div>
            </div>
        `).join("");
    }

    calculateCheckoutTotals();
}

// 3. TOTALS & DELIVERY CHARGE CALCULATION WITH COUPONS
function calculateCheckoutTotals() {
    let subtotal = 0;
    cart.forEach(item => subtotal += (item.price * item.qty));

    const settings = typeof getDBSettings === "function" ? getDBSettings() : { deliveryChattogram: 100, deliveryOutside: 150 };
    const deliveryRadio = document.querySelector('input[name="deliveryCharge"]:checked');
    let deliveryCharge = deliveryRadio ? parseInt(deliveryRadio.value) : settings.deliveryChattogram;
    if (isNaN(deliveryCharge)) deliveryCharge = settings.deliveryChattogram;

    // Recalculate coupon discount if active
    let discount = 0;
    const discountRow = document.getElementById("couponDiscountRow");
    const discountElem = document.getElementById("summaryDiscount");
    const statusElem = document.getElementById("couponStatus");

    if (appliedCoupon && typeof validateCouponCode === "function") {
        const check = validateCouponCode(appliedCoupon.code, subtotal);
        if (check.valid) {
            discount = check.discount;
            if (discountRow) discountRow.style.display = "flex";
            if (discountElem) discountElem.innerText = `-${formatCurrency(discount)}`;
        } else {
            // Invalidate coupon if min order no longer met
            appliedCoupon = null;
            if (discountRow) discountRow.style.display = "none";
            if (statusElem) {
                statusElem.innerText = check.message;
                statusElem.style.color = "#ef4444";
            }
        }
    } else {
        if (discountRow) discountRow.style.display = "none";
    }

    let grandTotal = subtotal - discount + deliveryCharge;
    if (grandTotal < 0) grandTotal = 0;

    const subTotalElem = document.getElementById("summarySubtotal");
    const deliveryElem = document.getElementById("summaryDelivery");
    const grandTotalElem = document.getElementById("summaryGrandTotal");
    const btnText = document.getElementById("btnText");

    if (subTotalElem) subTotalElem.innerText = formatCurrency(subtotal);
    if (deliveryElem) deliveryElem.innerText = formatCurrency(deliveryCharge);
    if (grandTotalElem) grandTotalElem.innerText = formatCurrency(grandTotal);
    if (btnText) btnText.innerText = `অর্ডার কনফার্ম করুন — ${formatCurrency(grandTotal)}`;
}

// 4. CHECKOUT EVENT LISTENERS
function setupCheckoutEvents() {
    document.querySelectorAll('input[name="deliveryCharge"]').forEach(r => {
        r.addEventListener("change", calculateCheckoutTotals);
    });

    const applyCouponBtn = document.getElementById("applyCouponBtn");
    if (applyCouponBtn) {
        applyCouponBtn.addEventListener("click", () => {
            const codeInput = document.getElementById("couponCode");
            const code = codeInput ? codeInput.value.trim() : "";
            const status = document.getElementById("couponStatus");
            if (!status) return;

            let subtotal = 0;
            cart.forEach(item => subtotal += (item.price * item.qty));

            if (subtotal === 0) {
                status.innerText = "⚠️ কার্ট খালি থাকায় কুপন ব্যবহার করা যাবে না।";
                status.style.color = "#ef4444";
                return;
            }

            if (!code) {
                status.innerText = "⚠️ অনুগ্রহ করে কুপন কোড লিখুন।";
                status.style.color = "#ef4444";
                return;
            }

            if (typeof validateCouponCode === "function") {
                const res = validateCouponCode(code, subtotal);
                if (res.valid) {
                    appliedCoupon = { code: res.coupon.code, discount: res.discount };
                    status.innerText = res.message;
                    status.style.color = "#16a34a";
                    calculateCheckoutTotals();
                    if (typeof showToast === "function") {
                        showToast(`✓ কুপন "${res.coupon.code}" যুক্ত হয়েছে!`, "success");
                    }
                } else {
                    appliedCoupon = null;
                    status.innerText = res.message;
                    status.style.color = "#ef4444";
                    calculateCheckoutTotals();
                }
            }
        });
    }

    const checkoutForm = document.getElementById("checkoutForm");
    if (checkoutForm) {
        checkoutForm.addEventListener("submit", handleOrderSubmit);
    }
}

// 5. ORDER SUBMISSION, DB ORDERS, GOOGLE SHEET INTEGRATION & WHATSAPP REDIRECT
function handleOrderSubmit(e) {
    e.preventDefault();

    if (cart.length === 0) {
        if (typeof showToast === "function") {
            showToast("⚠️ আপনার কার্ট সম্পূর্ণ খালি! পণ্য সিলেক্ট করুন।", "warning");
        }
        return;
    }

    const nameInput = document.getElementById("custName");
    const phoneInput = document.getElementById("custPhone");
    const emailInput = document.getElementById("custEmail");
    const addressInput = document.getElementById("custAddress");
    const districtInput = document.getElementById("custDistrict");

    const name = nameInput ? nameInput.value.trim() : "";
    const phone = phoneInput ? phoneInput.value.trim() : "";
    const email = emailInput ? emailInput.value.trim() : "";
    const address = addressInput ? addressInput.value.trim() : "";
    const district = districtInput ? districtInput.value.trim() : "";

    let hasError = false;
    let firstInvalidInput = null;

    if (!name) {
        document.getElementById("errCustName").innerText = "আপনার পূর্ণ নাম লিখুন";
        hasError = true;
        if (!firstInvalidInput) firstInvalidInput = nameInput;
    } else {
        document.getElementById("errCustName").innerText = "";
    }

    const phoneRegex = /^01[3-9]\d{8}$/;
    if (!phone || !phoneRegex.test(phone)) {
        document.getElementById("errCustPhone").innerText = "সঠিক ১১ ডিজিটের মোবাইল নম্বর দিন (যেমন: 018XXXXXXXX)";
        hasError = true;
        if (!firstInvalidInput) firstInvalidInput = phoneInput;
    } else {
        document.getElementById("errCustPhone").innerText = "";
    }

    if (!address || address.length < 5) {
        document.getElementById("errCustAddress").innerText = "পূর্ণাঙ্গ ডেলিভারি ঠিকানা লিখুন (যেমন: বাসা/রোড, এলাকা, থানা)";
        hasError = true;
        if (!firstInvalidInput) firstInvalidInput = addressInput;
    } else {
        document.getElementById("errCustAddress").innerText = "";
    }

    if (!district) {
        document.getElementById("errCustDistrict").innerText = "জেলার নাম লিখুন (যেমন: চট্টগ্রাম / ঢাকা)";
        hasError = true;
        if (!firstInvalidInput) firstInvalidInput = districtInput;
    } else {
        document.getElementById("errCustDistrict").innerText = "";
    }

    if (hasError) {
        if (firstInvalidInput) {
            firstInvalidInput.focus();
            firstInvalidInput.scrollIntoView({ behavior: "smooth", block: "center" });
        }
        if (typeof showToast === "function") {
            showToast("⚠️ ফরমের লাল চিহ্নিত প্রয়োজনীয় তথ্যগুলো সঠিকভাবে পূরণ করুন", "error");
        }
        return;
    }

    const btn = document.getElementById("placeOrderBtn");
    if (btn) btn.disabled = true;
    const btnText = document.getElementById("btnText");
    if (btnText) btnText.innerText = "অর্ডার সম্পন্ন হচ্ছে...";

    const settings = typeof getDBSettings === "function" ? getDBSettings() : { deliveryChattogram: 100, deliveryOutside: 150, whatsappNumber: "8801818028094" };
    const deliveryRadio = document.querySelector('input[name="deliveryCharge"]:checked');
    const deliveryCharge = deliveryRadio ? parseInt(deliveryRadio.value) : settings.deliveryChattogram;
    const isCtg = deliveryRadio && (deliveryRadio.getAttribute("data-area") === "ctg" || parseInt(deliveryRadio.value) === settings.deliveryChattogram);
    const deliveryArea = isCtg ? "চট্টগ্রাম শহর" : "চট্টগ্রামের বাইরে";

    // Generate Unique Order ID and Timestamp
    const randomNum = Math.floor(10000 + Math.random() * 90000);
    const orderId = `BC-${randomNum}`;
    const now = new Date();
    const formattedDate = now.toLocaleDateString("bn-BD", { year: "numeric", month: "long", day: "numeric" });
    const formattedTime = now.toLocaleTimeString("bn-BD", { hour: "2-digit", minute: "2-digit" });

    let subtotal = 0;
    let productDetailsMessage = "";
    let productSummaryText = "";
    let itemsReceiptHTML = "";

    // Clone current cart items for order receipt before clearing cart
    const orderedItems = [...cart];

    orderedItems.forEach((item, idx) => {
        const lineTotal = item.price * item.qty;
        subtotal += lineTotal;
        productDetailsMessage += `${idx + 1}. *${item.name}* — ${item.qty} টি — ৳${lineTotal}\n`;
        productSummaryText += `${item.name} (${item.qty}টি); `;
        itemsReceiptHTML += `
            <div class="receipt-item-row">
                <span class="col-item">${item.name}</span>
                <span class="col-qty">${item.qty} টি</span>
                <span class="col-price">${formatCurrency(lineTotal)}</span>
            </div>
        `;
    });

    let discount = 0;
    let couponText = "";
    if (appliedCoupon) {
        discount = appliedCoupon.discount || 0;
        couponText = `\n🎟️ *কুপন ডিসকাউন্ট (${appliedCoupon.code}):* -৳${discount}`;
    }

    let grandTotal = subtotal - discount + deliveryCharge;
    if (grandTotal < 0) grandTotal = 0;

    // 1. SAVE TO ADMIN DATABASE (Single Source of Truth)
    const orderRecord = {
        id: orderId,
        orderId: orderId,
        customerName: name,
        phone: phone,
        email: email,
        address: address,
        district: district,
        deliveryArea: deliveryArea,
        items: orderedItems,
        totalQuantity: orderedItems.reduce((acc, c) => acc + c.qty, 0),
        subtotal: subtotal,
        discount: discount,
        couponCode: appliedCoupon ? appliedCoupon.code : "",
        deliveryCharge: deliveryCharge,
        total: grandTotal,
        status: "Pending",
        createdAt: now.toISOString(),
        dateFormatted: `${formattedDate} (${formattedTime})`
    };

    if (typeof addDBOrder === "function") {
        addDBOrder(orderRecord);
    }

    // 2. Send data to Google Sheet Webhook asynchronously
    const googleSheetURL = "https://script.google.com/macros/s/AKfycbzT9Ptm0sBBhUtIAMz-lWwPzegGaIUVVwqsoMLzSH89-Yd8p_HIlJyocbv2ujEhCh42/exec";
    
    fetch(googleSheetURL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "text/plain;charset=utf-8" },
        body: JSON.stringify({
            orderId: orderId,
            name: name,
            phone: phone,
            email: email,
            address: `${address}, ${district}`,
            district: district,
            deliveryArea: deliveryArea,
            product: productSummaryText,
            quantity: orderedItems.reduce((acc, c) => acc + c.qty, 0),
            subtotal: subtotal,
            discount: discount,
            coupon: appliedCoupon ? appliedCoupon.code : "",
            deliveryCharge: deliveryCharge,
            total: grandTotal,
            orderDate: new Date().toLocaleString("en-US", { timeZone: "Asia/Dhaka" })
        })
    }).catch(err => console.error("Google Sheet webhook log:", err));

    // 3. Construct detailed WhatsApp message using configured WhatsApp number
    let waMessage = 
        `🛍️ *নতুন অর্ডার - Boichitro Shop BD*\n` +
        `🆔 *অর্ডার আইডি:* #${orderId}\n\n` +
        `📦 *অর্ডারকৃত পণ্যসমূহ:*\n${productDetailsMessage}\n` +
        `💵 *সাবটোটাল:* ৳${subtotal}` +
        `${couponText}\n` +
        `🚚 *ডেলিভারি চার্জ:* ৳${deliveryCharge} (${deliveryArea})\n` +
        `💰 *সর্বমোট বিল:* ৳${grandTotal}\n\n` +
        `👤 *কাস্টমার নাম:* ${name}\n` +
        `📞 *মোবাইল নম্বর:* ${phone}\n` +
        `📍 *ঠিকানা:* ${address}\n` +
        `🏙️ *জেলা:* ${district}`;

    const waTargetNumber = (settings.whatsappNumber || "8801818028094").replace(/[^0-9]/g, "");
    const waURL = `https://wa.me/${waTargetNumber}?text=${encodeURIComponent(waMessage)}`;

    // 4. Populate Success State View with full order data
    const succOrderId = document.getElementById("succOrderId");
    const succOrderTime = document.getElementById("succOrderTime");
    const succCustName = document.getElementById("succCustName");
    const succCustPhone = document.getElementById("succCustPhone");
    const succCustAddress = document.getElementById("succCustAddress");
    const succAreaName = document.getElementById("succAreaName");
    const succSubtotal = document.getElementById("succSubtotal");
    const succDelivery = document.getElementById("succDelivery");
    const succGrandTotal = document.getElementById("succGrandTotal");
    const succItemsList = document.getElementById("succItemsList");
    const succWhatsappBtn = document.getElementById("succWhatsappBtn");

    if (succOrderId) succOrderId.innerText = `#${orderId}`;
    if (succOrderTime) succOrderTime.innerHTML = `<i class="fa-regular fa-clock"></i> ${formattedDate} (${formattedTime})`;
    if (succCustName) succCustName.innerText = name;
    if (succCustPhone) succCustPhone.innerText = phone;
    if (succCustAddress) succCustAddress.innerText = `${address}, ${district}`;
    if (succAreaName) succAreaName.innerText = deliveryArea;
    if (succSubtotal) succSubtotal.innerText = formatCurrency(subtotal);
    if (succDelivery) succDelivery.innerText = formatCurrency(deliveryCharge);
    if (succGrandTotal) succGrandTotal.innerText = formatCurrency(grandTotal);
    if (succItemsList) succItemsList.innerHTML = itemsReceiptHTML;

    if (succWhatsappBtn) {
        succWhatsappBtn.href = waURL;
    }

    // Set order placed flag so emptying cart won't toggle empty state
    isOrderJustSubmitted = true;

    // Switch view on checkout page: hide form, show order confirmation screen
    const checkoutForm = document.getElementById("checkoutForm");
    const checkoutEmptyState = document.getElementById("checkoutEmptyState");
    const orderSuccessState = document.getElementById("orderSuccessState");

    if (checkoutForm) checkoutForm.style.display = "none";
    if (checkoutEmptyState) checkoutEmptyState.style.display = "none";
    if (orderSuccessState) orderSuccessState.style.display = "block";

    // Clear cart in storage and state
    cart = [];
    appliedCoupon = null;
    saveCart();
    updateCartUI();

    // Scroll to top smoothly
    window.scrollTo({ top: 0, behavior: "smooth" });
    if (typeof showToast === "function") {
        showToast("✓ আপনার অর্ডারটি সফলভাবে গৃহীত হয়েছে!", "success");
    }

    // Open WhatsApp in a new tab
    try {
        window.open(waURL, "_blank");
    } catch (e) {
        console.warn("Popup blocked or direct open failed:", e);
    }
}

/* ==========================================================================
   js/app.js — Boichitro Shop BD Main Application Engine (Theme, Nav & Init)
   ========================================================================== */

// 1. TOAST NOTIFICATION SYSTEM
function showToast(message, type = "success") {
    let container = document.getElementById("toastContainer");
    if (!container) {
        container = document.createElement("div");
        container.id = "toastContainer";
        container.className = "toast-container";
        document.body.appendChild(container);
    }
    const toast = document.createElement("div");
    toast.className = `toast ${type}`;
    let icon = "fa-circle-check";
    if (type === "warning") icon = "fa-triangle-exclamation";
    if (type === "error") icon = "fa-circle-exclamation";
    
    toast.innerHTML = `<i class="fa-solid ${icon}"></i> <span>${message}</span>`;
    container.appendChild(toast);

    setTimeout(() => {
        toast.style.animation = "toastSlideIn 0.3s ease reverse forwards";
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

// 2. THEME CONTROLLER (Light / Dark Mode)
function initTheme() {
    const savedTheme = localStorage.getItem("boichitroTheme");
    const prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
    const activeTheme = savedTheme ? savedTheme : (prefersDark ? "dark" : "light");

    document.documentElement.setAttribute("data-theme", activeTheme);
    updateThemeToggleIcons(activeTheme);
}

function updateThemeToggleIcons(theme) {
    const toggleBtns = document.querySelectorAll(".theme-toggle-btn");
    toggleBtns.forEach(btn => {
        if (theme === "dark") {
            btn.innerHTML = `<i class="fa-solid fa-sun"></i>`;
            btn.setAttribute("title", "লাইট মোডে স্যুইচ করুন");
        } else {
            btn.innerHTML = `<i class="fa-solid fa-moon"></i>`;
            btn.setAttribute("title", "ডার্ক মোডে স্যুইচ করুন");
        }
    });
}

function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute("data-theme") || "light";
    const newTheme = currentTheme === "dark" ? "light" : "dark";

    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("boichitroTheme", newTheme);
    updateThemeToggleIcons(newTheme);
}

// 3. NAVIGATION ACTIVE STATE & SCROLLSPY SYSTEM
function initNavigation() {
    const navLinks = document.querySelectorAll(".navbar .nav-link");
    const mobileBottomLinks = document.querySelectorAll(".mobile-bottom-nav .mobile-nav-item:not(.cart-trigger)");
    const currentPath = window.location.pathname.toLowerCase();
    const isHomePage = currentPath.endsWith("index.html") || currentPath.endsWith("/") || currentPath === "" || (!currentPath.includes("products.html") && !currentPath.includes("offers.html") && !currentPath.includes("checkout.html") && !currentPath.includes("product.html"));

    function setActiveLink(targetId) {
        // targetId can be: 'home', 'products', 'offers', 'about', 'contact', 'checkout'
        if (!targetId) return;

        // Clear active class from all header nav links (except CTA button styling)
        navLinks.forEach(link => {
            if (!link.classList.contains("highlight")) {
                link.classList.remove("active");
            }
        });

        // Clear active class from all mobile bottom nav items
        mobileBottomLinks.forEach(link => link.classList.remove("active"));

        // Match Desktop Header Nav Links
        navLinks.forEach(link => {
            const href = link.getAttribute("href") || "";
            const dataSec = link.getAttribute("data-section");
            const dataPage = link.getAttribute("data-page");

            if (
                dataSec === targetId ||
                dataPage === targetId ||
                href === `#${targetId}` ||
                href === `index.html#${targetId}` ||
                (targetId === "home" && (href === "index.html" || href === "#home" || href === "index.html#home")) ||
                (targetId === "products" && href.includes("products.html")) ||
                (targetId === "offers" && href.includes("offers.html")) ||
                (targetId === "checkout" && href.includes("checkout.html"))
            ) {
                link.classList.add("active");
            }
        });

        // Match Mobile Bottom Navigation Links
        mobileBottomLinks.forEach(link => {
            const href = link.getAttribute("href") || "";
            if (
                (targetId === "home" && (href.endsWith("index.html") || href === "/" || href === "#home")) ||
                (targetId === "products" && href.includes("products.html")) ||
                (targetId === "offers" && href.includes("offers.html")) ||
                (targetId === "checkout" && href.includes("checkout.html"))
            ) {
                link.classList.add("active");
            }
        });
    }

    if (!isHomePage) {
        // Inner page handling
        if (currentPath.includes("products.html") || currentPath.includes("product.html")) {
            setActiveLink("products");
        } else if (currentPath.includes("offers.html")) {
            setActiveLink("offers");
        } else if (currentPath.includes("checkout.html")) {
            setActiveLink("checkout");
        }
    } else {
        // Homepage Section ScrollSpy & Anchor Click Handling
        let isClickScrollLocked = false;
        let lockTimer = null;

        // Check initial hash on load (e.g. index.html#about or index.html#contact)
        const initialHash = window.location.hash ? window.location.hash.replace("#", "") : "";
        if (initialHash && ["home", "products", "offers", "contact", "about"].includes(initialHash)) {
            setActiveLink(initialHash);
        } else {
            setActiveLink("home");
        }

        // Handle direct clicks on anchor links
        navLinks.forEach(link => {
            link.addEventListener("click", () => {
                const href = link.getAttribute("href") || "";
                let targetSec = "";
                if (href.includes("#")) {
                    targetSec = href.split("#")[1];
                } else if (link.getAttribute("data-section")) {
                    targetSec = link.getAttribute("data-section");
                }

                if (targetSec) {
                    setActiveLink(targetSec);
                    isClickScrollLocked = true;
                    if (lockTimer) clearTimeout(lockTimer);
                    lockTimer = setTimeout(() => {
                        isClickScrollLocked = false;
                    }, 800);
                }
            });
        });

        // Setup ScrollSpy for homepage sections
        const sectionIds = ["home", "products", "offers", "contact", "about"];
        const sections = sectionIds.map(id => ({
            id: id,
            elem: document.getElementById(id)
        })).filter(s => s.elem !== null);

        function handleScrollSpy() {
            if (isClickScrollLocked) return;

            const scrollY = window.scrollY || window.pageYOffset;
            const windowHeight = window.innerHeight;
            const docHeight = document.documentElement.scrollHeight;

            // 1. Near top of page
            if (scrollY < 80) {
                setActiveLink("home");
                return;
            }

            // 2. Near bottom of page - activate the bottom-most section
            if (scrollY + windowHeight >= docHeight - 60) {
                const bottomSection = sections[sections.length - 1];
                if (bottomSection) {
                    setActiveLink(bottomSection.id);
                    return;
                }
            }

            // 3. Find section occupying the viewport target point
            const checkPoint = scrollY + 150;
            let currentActiveId = "home";

            for (let i = 0; i < sections.length; i++) {
                const sec = sections[i];
                const top = sec.elem.offsetTop;
                const height = sec.elem.offsetHeight;

                if (checkPoint >= top && checkPoint < top + height) {
                    currentActiveId = sec.id;
                    break;
                }
            }

            setActiveLink(currentActiveId);
        }

        let scrollThrottle;
        window.addEventListener("scroll", () => {
            if (!scrollThrottle) {
                scrollThrottle = setTimeout(() => {
                    handleScrollSpy();
                    scrollThrottle = null;
                }, 50);
            }
        }, { passive: true });

        // Listen to hash changes (back/forward history)
        window.addEventListener("hashchange", () => {
            const hash = window.location.hash.replace("#", "");
            if (hash) {
                setActiveLink(hash);
            } else {
                setActiveLink("home");
            }
        });
    }
}

// 4. GLOBAL INITIALIZATION & COMMON UI EVENTS
document.addEventListener("DOMContentLoaded", () => {
    // 1. Initialize Theme, Navigation & Cart State
    initTheme();
    initNavigation();
    if (typeof loadCart === "function") loadCart();

    // 2. Theme Toggle Buttons
    document.querySelectorAll(".theme-toggle-btn").forEach(btn => {
        btn.addEventListener("click", toggleTheme);
    });

    // 3. Mobile Navbar Toggle
    const menuBtn = document.getElementById("menuBtn");
    const navbar = document.getElementById("navbar");
    if (menuBtn && navbar) {
        menuBtn.addEventListener("click", () => {
            navbar.classList.toggle("active");
        });

        navbar.querySelectorAll("a").forEach(link => {
            link.addEventListener("click", () => {
                navbar.classList.remove("active");
            });
        });
    }

    // 4. Cart Drawer Triggers & Controls
    const cartIcon = document.getElementById("cartIcon");
    const mobileCartBtn = document.getElementById("mobileCartBtn");
    const closeCart = document.getElementById("closeCart");
    const drawerOverlay = document.getElementById("drawerOverlay");

    if (cartIcon && typeof openCartDrawer === "function") cartIcon.addEventListener("click", openCartDrawer);
    if (mobileCartBtn && typeof openCartDrawer === "function") mobileCartBtn.addEventListener("click", openCartDrawer);
    if (closeCart && typeof closeCartDrawer === "function") closeCart.addEventListener("click", closeCartDrawer);
    if (drawerOverlay && typeof closeCartDrawer === "function") drawerOverlay.addEventListener("click", closeCartDrawer);

    // Escape key closes drawer and mobile nav
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
            if (typeof closeCartDrawer === "function") closeCartDrawer();
            if (navbar) navbar.classList.remove("active");
        }
    });

    const checkoutBtn = document.getElementById("checkoutBtn");
    if (checkoutBtn) {
        checkoutBtn.addEventListener("click", () => {
            if (typeof closeCartDrawer === "function") closeCartDrawer();
            window.location.href = "checkout.html";
        });
    }

    // 5. Search Bar Handling Across Pages
    const searchInput = document.getElementById("searchInput");
    if (searchInput) {
        searchInput.addEventListener("input", (e) => {
            const query = e.target.value;
            if (document.getElementById("allProductsGrid") && typeof renderProductsPage === "function") {
                const activeFilterBtn = document.querySelector(".filter-btn.active");
                const cat = activeFilterBtn ? activeFilterBtn.getAttribute("data-category") : "all";
                const sortSelect = document.getElementById("sortSelect");
                const sortBy = sortSelect ? sortSelect.value : "popular";
                renderProductsPage(cat, query, sortBy);
            } else if (document.getElementById("allOffersGrid") && typeof renderOffersPage === "function") {
                renderOffersPage(query);
            }
        });
        
        searchInput.addEventListener("keypress", (e) => {
            if (e.key === "Enter") {
                const q = searchInput.value.trim();
                if (!document.getElementById("allProductsGrid") && !document.getElementById("allOffersGrid")) {
                    window.location.href = `products.html?search=${encodeURIComponent(q)}`;
                }
            }
        });
    }

    // URL Search Query Extraction on Products Page
    const urlParams = new URLSearchParams(window.location.search);
    const searchParam = urlParams.get("search");
    if (searchParam && searchInput) {
        searchInput.value = searchParam;
    }

    // 6. Category Filter Buttons on Products Page
    const filterBtns = document.querySelectorAll(".filter-btn");
    filterBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            filterBtns.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            const cat = btn.getAttribute("data-category");
            const sortSelect = document.getElementById("sortSelect");
            const sortBy = sortSelect ? sortSelect.value : "popular";
            if (typeof renderProductsPage === "function") {
                renderProductsPage(cat, searchInput ? searchInput.value : "", sortBy);
            }
        });
    });

    // 7. Sort Selector on Products Page
    const sortSelect = document.getElementById("sortSelect");
    if (sortSelect) {
        sortSelect.addEventListener("change", (e) => {
            const activeFilterBtn = document.querySelector(".filter-btn.active");
            const cat = activeFilterBtn ? activeFilterBtn.getAttribute("data-category") : "all";
            if (typeof renderProductsPage === "function") {
                renderProductsPage(cat, searchInput ? searchInput.value : "", e.target.value);
            }
        });
    }

    // 8. Page Specific Renders
    if (typeof renderHomepage === "function") renderHomepage();
    if (document.getElementById("allProductsGrid") && typeof renderProductsPage === "function") {
        renderProductsPage("all", searchParam || "");
    }
    if (typeof renderOffersPage === "function") renderOffersPage();
    if (typeof renderSingleProductDetailsPage === "function") renderSingleProductDetailsPage();
    if (typeof initCheckoutPage === "function") initCheckoutPage();
    if (typeof updateCartUI === "function") updateCartUI();
});

/* ==========================================================================
   js/admin.js — Boichitro Shop BD Comprehensive Admin Controller
   ========================================================================== */

// 1. AUTHENTICATION & ROUTE PROTECTION
function checkAdminAuth() {
    const isLoginPage = window.location.pathname.endsWith("login.html") || window.location.pathname.endsWith("login");
    const session = sessionStorage.getItem(STORAGE_KEYS.SESSION) || localStorage.getItem(STORAGE_KEYS.SESSION);

    if (session) {
        try {
            const authObj = JSON.parse(session);
            if (authObj && authObj.isLoggedIn) {
                // If logged in and on login page, redirect to admin dashboard
                if (isLoginPage) {
                    window.location.href = "index.html";
                }
                return true;
            }
        } catch (e) {
            console.error("Auth session parse error:", e);
        }
    }

    // Not authenticated
    if (!isLoginPage) {
        window.location.href = "login.html";
        return false;
    }
    return false;
}

function handleAdminLogin(e) {
    e.preventDefault();
    const emailInput = document.getElementById("adminEmail");
    const passInput = document.getElementById("adminPassword");
    const errorMsg = document.getElementById("loginErrorMsg");

    const email = emailInput ? emailInput.value.trim() : "";
    const pass = passInput ? passInput.value.trim() : "";

    const adminCreds = getDBAdmin();

    if ((email === adminCreds.email || email === "admin") && pass === adminCreds.password) {
        const sessionData = {
            isLoggedIn: true,
            email: email,
            loginTime: new Date().toISOString()
        };
        sessionStorage.setItem(STORAGE_KEYS.SESSION, JSON.stringify(sessionData));
        localStorage.setItem(STORAGE_KEYS.SESSION, JSON.stringify(sessionData));
        window.location.href = "index.html";
    } else {
        if (errorMsg) {
            errorMsg.innerText = "❌ ভুল ইমেইল বা পাসওয়ার্ড! আবার চেষ্টা করুন।";
            errorMsg.style.display = "block";
        }
    }
}

function handleAdminLogout() {
    sessionStorage.removeItem(STORAGE_KEYS.SESSION);
    localStorage.removeItem(STORAGE_KEYS.SESSION);
    showAdminToast("লগআউট সফল হয়েছে", "info");
    setTimeout(() => {
        window.location.href = "login.html";
    }, 400);
}

// 2. ADMIN TOAST NOTIFICATION
function showAdminToast(message, type = "success") {
    let container = document.getElementById("adminToastContainer");
    if (!container) {
        container = document.createElement("div");
        container.id = "adminToastContainer";
        container.className = "admin-toast-container";
        document.body.appendChild(container);
    }

    const toast = document.createElement("div");
    toast.className = `admin-toast ${type}`;
    let icon = "fa-circle-check";
    if (type === "error") icon = "fa-circle-xmark";
    if (type === "warning") icon = "fa-triangle-exclamation";
    if (type === "info") icon = "fa-circle-info";

    toast.innerHTML = `<i class="fa-solid ${icon}"></i> <span>${message}</span>`;
    container.appendChild(toast);

    setTimeout(() => {
        toast.style.opacity = "0";
        toast.style.transform = "translateX(100%)";
        setTimeout(() => toast.remove(), 300);
    }, 3200);
}

// 3. TAB & VIEW SWITCHER
function switchAdminView(viewId) {
    const views = document.querySelectorAll(".admin-view");
    const menuLinks = document.querySelectorAll(".sidebar-menu a");

    views.forEach(v => v.classList.remove("active"));
    menuLinks.forEach(l => l.classList.remove("active"));

    const targetView = document.getElementById(`view-${viewId}`);
    const targetLink = document.querySelector(`.sidebar-menu a[data-view="${viewId}"]`);

    if (targetView) targetView.classList.add("active");
    if (targetLink) targetLink.classList.add("active");

    const pageTitle = document.getElementById("topbarPageTitle");
    if (pageTitle) {
        const titles = {
            dashboard: "ড্যাশবোর্ড ওভারভিউ",
            products: "প্রোডাক্ট ম্যানেজমেন্ট",
            offers: "অফার ও ডিসকাউন্ট",
            delivery: "ডেলিভারি চার্জ সেটিংস",
            coupons: "কুপন কোড ম্যানেজমেন্ট",
            orders: "অর্ডার ম্যানেজমেন্ট",
            settings: "ওয়েবসাইট সেটিংস"
        };
        pageTitle.innerText = titles[viewId] || "এডমিন প্যানেল";
    }

    // Refresh specific view data
    if (viewId === "dashboard") renderDashboardView();
    if (viewId === "products") renderProductsTable();
    if (viewId === "offers") renderOffersTable();
    if (viewId === "delivery") loadDeliverySettingsForm();
    if (viewId === "coupons") renderCouponsTable();
    if (viewId === "orders") renderOrdersTable();
    if (viewId === "settings") loadWebsiteSettingsForm();

    // Close mobile sidebar if open
    const sidebar = document.getElementById("adminSidebar");
    if (sidebar) sidebar.classList.remove("mobile-open");
}

// 4. DASHBOARD VIEW CONTROLLER
function renderDashboardView() {
    const products = getDBProducts();
    const orders = getDBOrders();
    const coupons = getDBCoupons();

    const regularProducts = products.filter(isRegularProduct);
    const offerProducts = products.filter(isOfferProduct);

    const totalRegProds = regularProducts.length;
    const activeRegProds = regularProducts.filter(p => p.active !== false).length;
    const activeOffers = offerProducts.filter(p => p.active !== false).length;
    const pendingOrders = orders.filter(o => o.status === "Pending" || !o.status).length;
    const activeCoupons = coupons.filter(c => c.active !== false).length;
    const totalRevenue = orders.filter(o => o.status !== "Cancelled").reduce((acc, o) => acc + (o.total || 0), 0);

    const mProds = document.getElementById("dashMetricProducts");
    const mOffers = document.getElementById("dashMetricOffers");
    const mPending = document.getElementById("dashMetricPending");
    const mCoupons = document.getElementById("dashMetricCoupons");
    const mRevenue = document.getElementById("dashMetricRevenue");

    if (mProds) mProds.innerText = `${activeRegProds} / ${totalRegProds}`;
    if (mOffers) mOffers.innerText = `${activeOffers}`;
    if (mPending) mPending.innerText = `${pendingOrders}`;
    if (mCoupons) mCoupons.innerText = `${activeCoupons}`;
    if (mRevenue) mRevenue.innerText = formatCurrency(totalRevenue);

    // Render Recent 5 Orders in Dashboard
    const recentOrdersContainer = document.getElementById("dashRecentOrdersList");
    if (recentOrdersContainer) {
        const recentOrders = orders.slice(0, 5);
        if (recentOrders.length === 0) {
            recentOrdersContainer.innerHTML = `<tr><td colspan="6" style="text-align: center; color: var(--admin-text-muted); padding: 20px;">কোনো অর্ডার এখনো আসেনি</td></tr>`;
        } else {
            recentOrdersContainer.innerHTML = recentOrders.map(o => `
                <tr>
                    <td><strong>#${o.orderId || o.id}</strong></td>
                    <td>${o.customerName || "Customer"}</td>
                    <td>${o.phone || ""}</td>
                    <td><strong>${formatCurrency(o.total || 0)}</strong></td>
                    <td><span class="status-badge ${(o.status || 'pending').toLowerCase()}">${o.status || 'Pending'}</span></td>
                    <td>
                        <button type="button" class="btn-admin btn-admin-secondary btn-admin-sm" onclick="viewOrderDetailsModal('${o.orderId || o.id}')">
                            <i class="fa-solid fa-eye"></i> বিস্তারিত
                        </button>
                    </td>
                </tr>
            `).join("");
        }
    }
}

// 5. REGULAR PRODUCT MANAGEMENT CONTROLLER (Shows ONLY Regular Products)
function renderProductsTable(filterType = "all", searchQuery = "") {
    const tbody = document.getElementById("productsTableBody");
    if (!tbody) return;

    const allProducts = getDBProducts();
    // Strictly isolate regular products only
    let products = allProducts.filter(isRegularProduct);

    if (filterType === "active") products = products.filter(p => p.active !== false);
    if (filterType === "inactive") products = products.filter(p => p.active === false);
    if (filterType === "featured") products = products.filter(p => p.featured);

    if (searchQuery) {
        const q = searchQuery.toLowerCase().trim();
        products = products.filter(p => 
            p.name.toLowerCase().includes(q) || 
            p.id.toLowerCase().includes(q) || 
            (p.category && p.category.toLowerCase().includes(q))
        );
    }

    if (products.length === 0) {
        tbody.innerHTML = `<tr><td colspan="7" style="text-align: center; color: var(--admin-text-muted); padding: 24px;">কোনো রেগুলার প্রোডাক্ট পাওয়া যায়নি। "নতুন প্রোডাক্ট যোগ করুন" বাটনে ক্লিক করুন।</td></tr>`;
        return;
    }

    tbody.innerHTML = products.map(p => `
        <tr>
            <td>
                <img src="${p.image}" alt="${p.name}" style="width: 44px; height: 44px; object-fit: cover; border-radius: 6px; border: 1px solid var(--admin-border);" onerror="this.src='../image/Seven Oceans.jpg'">
            </td>
            <td>
                <strong style="font-size: 14px;">${p.name}</strong><br>
                <small style="color: var(--admin-text-muted);">ID: ${p.id}</small>
            </td>
            <td>
                <span class="badge badge-primary" style="font-size: 12px; padding: 4px 8px;">${p.category || 'General'}</span>
            </td>
            <td>
                <strong style="color: var(--admin-primary); font-size: 15px;">${formatCurrency(p.price)}</strong>
                ${p.oldPrice ? `<br><small style="text-decoration: line-through; color: var(--admin-text-muted);">${formatCurrency(p.oldPrice)}</small>` : ''}
            </td>
            <td>
                <button type="button" class="btn-admin ${p.featured ? 'btn-admin-primary' : 'btn-admin-secondary'} btn-admin-sm" onclick="toggleProductFeatured('${p.id}')">
                    ${p.featured ? '★ Featured' : '☆ Normal'}
                </button>
            </td>
            <td>
                <span class="status-badge ${p.active !== false ? 'active' : 'inactive'}">
                    ${p.active !== false ? 'Active' : 'Inactive'}
                </span>
            </td>
            <td>
                <div style="display: flex; gap: 6px;">
                    <button type="button" class="btn-admin btn-admin-secondary btn-admin-sm" onclick="openEditProductModal('${p.id}')" title="এডিট">
                        <i class="fa-solid fa-pen-to-square"></i>
                    </button>
                    <button type="button" class="btn-admin ${p.active !== false ? 'btn-admin-secondary' : 'btn-admin-success'} btn-admin-sm" onclick="toggleProductActive('${p.id}')" title="${p.active !== false ? 'Disable' : 'Enable'}">
                        <i class="fa-solid ${p.active !== false ? 'fa-ban' : 'fa-check'}"></i>
                    </button>
                    <button type="button" class="btn-admin btn-admin-danger btn-admin-sm" onclick="confirmDeleteProduct('${p.id}')" title="ডিলিট">
                        <i class="fa-solid fa-trash"></i>
                    </button>
                </div>
            </td>
        </tr>
    `).join("");
}

function openAddProductModal(defaultType = 'product') {
    const form = document.getElementById("productForm");
    if (form) form.reset();
    document.getElementById("prodFormMode").value = "add";
    const isOffer = defaultType === "offer";
    document.getElementById("prodFormModalTitle").innerText = isOffer ? "নতুন অফার যোগ করুন" : "নতুন প্রোডাক্ট যোগ করুন";
    document.getElementById("prodId").value = (isOffer ? "offer-" : "prod-") + Date.now().toString().slice(-6);
    document.getElementById("prodType").value = isOffer ? "offer" : "product";
    document.getElementById("prodActive").checked = true;
    document.getElementById("prodFeatured").checked = false;
    document.getElementById("prodImagePreview").src = "../image/Seven Oceans.jpg";
    document.getElementById("productModalOverlay").classList.add("active");
}

function openEditProductModal(id) {
    const product = getProductById(id);
    if (!product) return;

    const isOffer = isOfferProduct(product);
    document.getElementById("prodFormMode").value = "edit";
    document.getElementById("prodFormModalTitle").innerText = isOffer ? "অফার এডিট করুন" : "প্রোডাক্ট এডিট করুন";
    document.getElementById("prodId").value = product.id;
    document.getElementById("prodName").value = product.name;
    document.getElementById("prodCategory").value = product.category || "Emergency Food";
    document.getElementById("prodPrice").value = product.price;
    document.getElementById("prodOldPrice").value = product.oldPrice || "";
    document.getElementById("prodImage").value = product.image;
    document.getElementById("prodBadge").value = product.badge || "";
    document.getElementById("prodType").value = isOffer ? "offer" : "product";
    document.getElementById("prodDescription").value = product.description || "";
    document.getElementById("prodPackageInfo").value = product.packageInfo || "";
    document.getElementById("prodFeatured").checked = !!product.featured;
    document.getElementById("prodActive").checked = product.active !== false;

    const preview = document.getElementById("prodImagePreview");
    if (preview) preview.src = product.image.startsWith("http") || product.image.startsWith("data:") ? product.image : `../${product.image}`;

    document.getElementById("productModalOverlay").classList.add("active");
}

function handleProductFormSubmit(e) {
    e.preventDefault();
    const mode = document.getElementById("prodFormMode").value;
    const id = document.getElementById("prodId").value.trim();
    const name = document.getElementById("prodName").value.trim();
    const category = document.getElementById("prodCategory").value.trim();
    const price = Number(document.getElementById("prodPrice").value);
    const oldPriceVal = document.getElementById("prodOldPrice").value;
    const oldPrice = oldPriceVal ? Number(oldPriceVal) : null;
    const image = document.getElementById("prodImage").value.trim() || "image/Seven Oceans.jpg";
    const badge = document.getElementById("prodBadge").value.trim();
    const type = document.getElementById("prodType").value;
    const productType = type === "offer" ? "offer" : "regular";
    const description = document.getElementById("prodDescription").value.trim();
    const packageInfo = document.getElementById("prodPackageInfo").value.trim();
    const featured = document.getElementById("prodFeatured").checked;
    const active = document.getElementById("prodActive").checked;

    if (!name || isNaN(price) || price < 0) {
        showAdminToast("প্রোডাক্টের নাম ও সঠিক মূল্য দিন", "error");
        return;
    }

    const products = getDBProducts();

    if (mode === "add") {
        const newProduct = {
            id: id || (type === "offer" ? "offer-" : "prod-") + Date.now().toString().slice(-6),
            name, category, price, oldPrice, image, badge, type, productType, description, packageInfo, featured, active
        };
        products.unshift(newProduct);
        saveDBProducts(products);
        showAdminToast(type === "offer" ? "✓ নতুন অফার সফলভাবে যোগ করা হয়েছে!" : "✓ নতুন প্রোডাক্ট সফলভাবে যোগ করা হয়েছে!", "success");
    } else {
        const idx = products.findIndex(p => p.id === id);
        if (idx !== -1) {
            products[idx] = {
                ...products[idx],
                name, category, price, oldPrice, image, badge, type, productType, description, packageInfo, featured, active
            };
            saveDBProducts(products);
            showAdminToast("✓ তথ্য আপডেট করা হয়েছে!", "success");
        }
    }

    closeModal("productModalOverlay");
    renderProductsTable();
    renderOffersTable();
    renderDashboardView();
}

function toggleProductActive(id) {
    const products = getDBProducts();
    const prod = products.find(p => p.id === id);
    if (prod) {
        prod.active = !(prod.active !== false);
        saveDBProducts(products);
        showAdminToast(`স্ট্যাটাস ${prod.active ? 'সক্রিয়' : 'নিষ্ক্রিয়'} করা হয়েছে`, "info");
        renderProductsTable();
        renderOffersTable();
        renderDashboardView();
    }
}

function toggleProductFeatured(id) {
    const products = getDBProducts();
    const prod = products.find(p => p.id === id);
    if (prod) {
        prod.featured = !prod.featured;
        saveDBProducts(products);
        showAdminToast(`হোমপেইজ Featured স্টেট আপডেট হয়েছে`, "info");
        renderProductsTable();
        renderOffersTable();
    }
}

function confirmDeleteProduct(id) {
    const prod = getProductById(id);
    if (!prod) return;

    if (confirm(`আপনি কি নিশ্চিতভাবে "${prod.name}" আইটেমটি মুছে ফেলতে চান?`)) {
        let products = getDBProducts();
        products = products.filter(p => p.id !== id);
        saveDBProducts(products);
        showAdminToast("আইটেমটি মুছে ফেলা হয়েছে", "warning");
        renderProductsTable();
        renderOffersTable();
        renderDashboardView();
    }
}

// Image File Upload Helper
function handleImageFileUpload(input) {
    if (input.files && input.files[0]) {
        const file = input.files[0];
        if (file.size > 2 * 1024 * 1024) {
            showAdminToast("ছবির সাইজ সর্বোচ্চ 2MB হতে হবে", "warning");
            return;
        }
        const reader = new FileReader();
        reader.onload = function(e) {
            const dataUrl = e.target.result;
            document.getElementById("prodImage").value = dataUrl;
            const preview = document.getElementById("prodImagePreview");
            if (preview) preview.src = dataUrl;
        };
        reader.readAsDataURL(file);
    }
}

// 6. OFFERS MANAGEMENT CONTROLLER (Shows ONLY Offer Products)
function renderOffersTable(filterType = "all", searchQuery = "") {
    const tbody = document.getElementById("offersTableBody");
    if (!tbody) return;

    const allProducts = getDBProducts();
    // Strictly isolate offer items only
    let offers = allProducts.filter(isOfferProduct);

    if (filterType === "active") offers = offers.filter(o => o.active !== false);
    if (filterType === "inactive") offers = offers.filter(o => o.active === false);

    if (searchQuery) {
        const q = searchQuery.toLowerCase().trim();
        offers = offers.filter(o => 
            o.name.toLowerCase().includes(q) || 
            o.id.toLowerCase().includes(q) || 
            (o.description && o.description.toLowerCase().includes(q))
        );
    }

    if (offers.length === 0) {
        tbody.innerHTML = `<tr><td colspan="6" style="text-align: center; color: var(--admin-text-muted); padding: 24px;">কোনো অফার আইটেম পাওয়া যায়নি। "নতুন অফার যোগ করুন" বাটনে ক্লিক করুন।</td></tr>`;
        return;
    }

    tbody.innerHTML = offers.map(o => `
        <tr>
            <td>
                <img src="${o.image}" alt="${o.name}" style="width: 44px; height: 44px; object-fit: cover; border-radius: 6px; border: 1px solid var(--admin-border);" onerror="this.src='../image/Seven Oceans.jpg'">
            </td>
            <td>
                <strong style="font-size: 14px;">${o.name}</strong><br>
                <small style="color: var(--admin-text-muted);">${o.description || ''}</small>
            </td>
            <td>
                <span class="status-badge confirmed">${o.badge || 'Special Offer'}</span>
            </td>
            <td>
                <strong style="color: var(--admin-primary); font-size: 15px;">${formatCurrency(o.price)}</strong>
                ${o.oldPrice ? `<br><small style="text-decoration: line-through; color: var(--admin-text-muted);">${formatCurrency(o.oldPrice)}</small>` : ''}
            </td>
            <td>
                <span class="status-badge ${o.active !== false ? 'active' : 'inactive'}">
                    ${o.active !== false ? 'Active' : 'Inactive'}
                </span>
            </td>
            <td>
                <div style="display: flex; gap: 6px;">
                    <button type="button" class="btn-admin btn-admin-secondary btn-admin-sm" onclick="openEditProductModal('${o.id}')" title="অফার এডিট">
                        <i class="fa-solid fa-pen-to-square"></i>
                    </button>
                    <button type="button" class="btn-admin ${o.active !== false ? 'btn-admin-secondary' : 'btn-admin-success'} btn-admin-sm" onclick="toggleProductActive('${o.id}')" title="${o.active !== false ? 'Disable' : 'Enable'}">
                        <i class="fa-solid ${o.active !== false ? 'fa-ban' : 'fa-check'}"></i>
                    </button>
                    <button type="button" class="btn-admin btn-admin-danger btn-admin-sm" onclick="confirmDeleteProduct('${o.id}')" title="ডিলিট">
                        <i class="fa-solid fa-trash"></i>
                    </button>
                </div>
            </td>
        </tr>
    `).join("");
}

// 7. DELIVERY CHARGES CONTROLLER
function loadDeliverySettingsForm() {
    const settings = getDBSettings();
    const ctgInput = document.getElementById("delCtgPrice");
    const outInput = document.getElementById("delOutPrice");

    if (ctgInput) ctgInput.value = settings.deliveryChattogram || 100;
    if (outInput) outInput.value = settings.deliveryOutside || 150;
}

function handleDeliverySettingsSubmit(e) {
    e.preventDefault();
    const ctgVal = Number(document.getElementById("delCtgPrice").value);
    const outVal = Number(document.getElementById("delOutPrice").value);

    if (isNaN(ctgVal) || isNaN(outVal) || ctgVal < 0 || outVal < 0) {
        showAdminToast("সঠিক ডেলিভারি চার্জ নির্ধারণ করুন", "error");
        return;
    }

    const settings = getDBSettings();
    settings.deliveryChattogram = ctgVal;
    settings.deliveryOutside = outVal;
    saveDBSettings(settings);

    showAdminToast("✓ ডেলিভারি চার্জ সফলভাবে আপডেট হয়েছে!", "success");
}

// 8. COUPON MANAGEMENT CONTROLLER
function renderCouponsTable() {
    const tbody = document.getElementById("couponsTableBody");
    if (!tbody) return;

    const coupons = getDBCoupons();

    if (coupons.length === 0) {
        tbody.innerHTML = `<tr><td colspan="6" style="text-align: center; color: var(--admin-text-muted); padding: 24px;">কোনো কুপন তৈরি করা হয়নি। "নতুন কুপন যোগ করুন" চাপুন।</td></tr>`;
        return;
    }

    tbody.innerHTML = coupons.map(c => `
        <tr>
            <td>
                <span style="font-family: monospace; font-size: 15px; font-weight: 700; background: var(--admin-bg); padding: 4px 8px; border-radius: 4px; border: 1px solid var(--admin-border);">${c.code}</span>
            </td>
            <td>${c.type === 'percent' ? 'শতাংশ (%)' : 'নির্দিষ্ট টাকা (৳)'}</td>
            <td><strong>${c.type === 'percent' ? c.value + '%' : formatCurrency(c.value)}</strong></td>
            <td>${c.minOrder ? formatCurrency(c.minOrder) : 'কোনো শর্ত নেই'}</td>
            <td>
                <span class="status-badge ${c.active ? 'active' : 'inactive'}">
                    ${c.active ? 'Active' : 'Inactive'}
                </span>
            </td>
            <td>
                <div style="display: flex; gap: 6px;">
                    <button type="button" class="btn-admin btn-admin-secondary btn-admin-sm" onclick="openEditCouponModal('${c.id}')">
                        <i class="fa-solid fa-pen-to-square"></i>
                    </button>
                    <button type="button" class="btn-admin ${c.active ? 'btn-admin-secondary' : 'btn-admin-success'} btn-admin-sm" onclick="toggleCouponActive('${c.id}')">
                        <i class="fa-solid ${c.active ? 'fa-ban' : 'fa-check'}"></i>
                    </button>
                    <button type="button" class="btn-admin btn-admin-danger btn-admin-sm" onclick="confirmDeleteCoupon('${c.id}')">
                        <i class="fa-solid fa-trash"></i>
                    </button>
                </div>
            </td>
        </tr>
    `).join("");
}

function openAddCouponModal() {
    const form = document.getElementById("couponForm");
    if (form) form.reset();
    document.getElementById("couponFormMode").value = "add";
    document.getElementById("couponId").value = "coupon-" + Date.now().toString().slice(-6);
    document.getElementById("couponActive").checked = true;
    document.getElementById("couponModalOverlay").classList.add("active");
}

function openEditCouponModal(id) {
    const coupons = getDBCoupons();
    const coupon = coupons.find(c => c.id === id);
    if (!coupon) return;

    document.getElementById("couponFormMode").value = "edit";
    document.getElementById("couponId").value = coupon.id;
    document.getElementById("couponCodeInput").value = coupon.code;
    document.getElementById("couponType").value = coupon.type;
    document.getElementById("couponValue").value = coupon.value;
    document.getElementById("couponMinOrder").value = coupon.minOrder || "";
    document.getElementById("couponActive").checked = !!coupon.active;

    document.getElementById("couponModalOverlay").classList.add("active");
}

function handleCouponFormSubmit(e) {
    e.preventDefault();
    const mode = document.getElementById("couponFormMode").value;
    const id = document.getElementById("couponId").value.trim();
    const code = document.getElementById("couponCodeInput").value.trim().toUpperCase();
    const type = document.getElementById("couponType").value;
    const value = Number(document.getElementById("couponValue").value);
    const minOrderVal = document.getElementById("couponMinOrder").value;
    const minOrder = minOrderVal ? Number(minOrderVal) : 0;
    const active = document.getElementById("couponActive").checked;

    if (!code || isNaN(value) || value <= 0) {
        showAdminToast("সঠিক কুপন কোড ও ডিসকাউন্ট ভ্যালু দিন", "error");
        return;
    }

    const coupons = getDBCoupons();

    if (mode === "add") {
        coupons.push({ id, code, type, value, minOrder, active });
        saveDBCoupons(coupons);
        showAdminToast("✓ নতুন কুপন সফলভাবে তৈরি হয়েছে!", "success");
    } else {
        const idx = coupons.findIndex(c => c.id === id);
        if (idx !== -1) {
            coupons[idx] = { ...coupons[idx], code, type, value, minOrder, active };
            saveDBCoupons(coupons);
            showAdminToast("✓ কুপন আপডেট হয়েছে!", "success");
        }
    }

    closeModal("couponModalOverlay");
    renderCouponsTable();
    renderDashboardView();
}

function toggleCouponActive(id) {
    const coupons = getDBCoupons();
    const coupon = coupons.find(c => c.id === id);
    if (coupon) {
        coupon.active = !coupon.active;
        saveDBCoupons(coupons);
        showAdminToast(`কুপন ${coupon.active ? 'সক্রিয়' : 'নিষ্ক্রিয়'} করা হয়েছে`, "info");
        renderCouponsTable();
        renderDashboardView();
    }
}

function confirmDeleteCoupon(id) {
    const coupons = getDBCoupons();
    const coupon = coupons.find(c => c.id === id);
    if (!coupon) return;

    if (confirm(`আপনি কি "${coupon.code}" কুপনটি মুছে ফেলতে চান?`)) {
        const updated = coupons.filter(c => c.id !== id);
        saveDBCoupons(updated);
        showAdminToast("কুপন মুছে ফেলা হয়েছে", "warning");
        renderCouponsTable();
        renderDashboardView();
    }
}

// 9. ORDERS MANAGEMENT CONTROLLER
function renderOrdersTable(statusFilter = "all", searchQuery = "") {
    const tbody = document.getElementById("ordersTableBody");
    if (!tbody) return;

    let orders = getDBOrders();

    if (statusFilter !== "all") {
        orders = orders.filter(o => (o.status || "Pending").toLowerCase() === statusFilter.toLowerCase());
    }

    if (searchQuery) {
        const q = searchQuery.toLowerCase().trim();
        orders = orders.filter(o => 
            (o.orderId && o.orderId.toLowerCase().includes(q)) ||
            (o.customerName && o.customerName.toLowerCase().includes(q)) ||
            (o.phone && o.phone.toLowerCase().includes(q)) ||
            (o.district && o.district.toLowerCase().includes(q))
        );
    }

    if (orders.length === 0) {
        tbody.innerHTML = `<tr><td colspan="7" style="text-align: center; color: var(--admin-text-muted); padding: 24px;">কোনো অর্ডার পাওয়া যায়নি</td></tr>`;
        return;
    }

    tbody.innerHTML = orders.map(o => {
        const status = o.status || "Pending";
        return `
            <tr>
                <td><strong>#${o.orderId || o.id}</strong><br><small style="color: var(--admin-text-muted);">${o.dateFormatted || ''}</small></td>
                <td>
                    <strong>${o.customerName || 'N/A'}</strong><br>
                    <a href="tel:${o.phone}" style="color: var(--admin-info); text-decoration: none;"><i class="fa-solid fa-phone"></i> ${o.phone}</a>
                </td>
                <td>${o.district || o.deliveryArea || ''}</td>
                <td><strong>${formatCurrency(o.total || 0)}</strong><br><small style="color: var(--admin-text-muted);">${(o.items || []).length} items</small></td>
                <td>
                    <select class="form-control-admin" style="padding: 4px 8px; font-size: 13px; width: auto;" onchange="changeOrderStatus('${o.orderId || o.id}', this.value)">
                        <option value="Pending" ${status === 'Pending' ? 'selected' : ''}>⏳ Pending</option>
                        <option value="Confirmed" ${status === 'Confirmed' ? 'selected' : ''}>✓ Confirmed</option>
                        <option value="Shipped" ${status === 'Shipped' ? 'selected' : ''}>🚚 Shipped</option>
                        <option value="Delivered" ${status === 'Delivered' ? 'selected' : ''}>🎉 Delivered</option>
                        <option value="Cancelled" ${status === 'Cancelled' ? 'selected' : ''}>❌ Cancelled</option>
                    </select>
                </td>
                <td>
                    <span class="status-badge ${status.toLowerCase()}">${status}</span>
                </td>
                <td>
                    <div style="display: flex; gap: 6px;">
                        <button type="button" class="btn-admin btn-admin-primary btn-admin-sm" onclick="viewOrderDetailsModal('${o.orderId || o.id}')">
                            <i class="fa-solid fa-receipt"></i> বিস্তারিত
                        </button>
                    </div>
                </td>
            </tr>
        `;
    }).join("");
}

function changeOrderStatus(orderId, newStatus) {
    if (updateDBOrderStatus(orderId, newStatus)) {
        showAdminToast(`অর্ডার #${orderId} এর স্ট্যাটাস "${newStatus}" করা হয়েছে`, "success");
        renderOrdersTable();
        renderDashboardView();
    }
}

function viewOrderDetailsModal(orderId) {
    const orders = getDBOrders();
    const order = orders.find(o => o.orderId === orderId || o.id === orderId);
    if (!order) return;

    const modalBody = document.getElementById("orderModalBody");
    if (!modalBody) return;

    let itemsHTML = "";
    if (order.items && Array.isArray(order.items)) {
        itemsHTML = order.items.map(item => `
            <div style="display: flex; justify-content: space-between; padding: 6px 0; border-bottom: 1px dashed var(--admin-border);">
                <span>${item.name} (${item.qty} টি)</span>
                <strong>${formatCurrency(item.price * item.qty)}</strong>
            </div>
        `).join("");
    }

    const cleanPhone = (order.phone || "").replace(/[^0-9]/g, "");
    const waUrl = `https://wa.me/88${cleanPhone}?text=${encodeURIComponent(`হ্যালো ${order.customerName}, Boichitro Shop BD থেকে আপনার #${order.orderId} অর্ডারের ব্যাপারে যোগাযোগ করা হচ্ছে।`)}`;

    modalBody.innerHTML = `
        <div style="margin-bottom: 16px;">
            <h4 style="font-size: 16px; margin-bottom: 8px;">কাস্টমার তথ্য:</h4>
            <p><strong>নাম:</strong> ${order.customerName}</p>
            <p><strong>ফোন:</strong> <a href="tel:${order.phone}">${order.phone}</a> &nbsp;|&nbsp; <a href="${waUrl}" target="_blank" style="color: #16a34a;"><i class="fa-brands fa-whatsapp"></i> WhatsApp মেসেজ পাঠান</a></p>
            <p><strong>ঠিকানা:</strong> ${order.address}, ${order.district}</p>
            <p><strong>ডেলিভারি এলাকা:</strong> ${order.deliveryArea || ''}</p>
            <p><strong>অর্ডার সময়:</strong> ${order.dateFormatted || ''}</p>
        </div>

        <div style="background: var(--admin-bg); padding: 14px; border-radius: 8px; margin-bottom: 16px; border: 1px solid var(--admin-border);">
            <h4 style="font-size: 15px; margin-bottom: 10px;">অর্ডারকৃত পণ্যসমূহ:</h4>
            ${itemsHTML}
            <div style="margin-top: 10px; padding-top: 10px; border-top: 1px solid var(--admin-border); display: flex; flex-direction: column; gap: 4px;">
                <div style="display: flex; justify-content: space-between;"><span>সাবটোটাল:</span> <span>${formatCurrency(order.subtotal || 0)}</span></div>
                ${order.discount ? `<div style="display: flex; justify-content: space-between; color: var(--admin-success);"><span>কুপন ডিসকাউন্ট (${order.couponCode || ''}):</span> <span>-${formatCurrency(order.discount)}</span></div>` : ''}
                <div style="display: flex; justify-content: space-between;"><span>ডেলিভারি চার্জ:</span> <span>${formatCurrency(order.deliveryCharge || 0)}</span></div>
                <div style="display: flex; justify-content: space-between; font-size: 16px; font-weight: 700; border-top: 1px solid var(--admin-border); padding-top: 6px;">
                    <span>সর্বমোট বিল:</span> <span style="color: var(--admin-primary);">${formatCurrency(order.total || 0)}</span>
                </div>
            </div>
        </div>

        <div class="form-group-admin">
            <label>অর্ডার স্ট্যাটাস পরিবর্তন করুন:</label>
            <select class="form-control-admin" id="modalOrderStatusSelect" onchange="changeOrderStatus('${order.orderId || order.id}', this.value)">
                <option value="Pending" ${(order.status || 'Pending') === 'Pending' ? 'selected' : ''}>⏳ Pending</option>
                <option value="Confirmed" ${order.status === 'Confirmed' ? 'selected' : ''}>✓ Confirmed</option>
                <option value="Shipped" ${order.status === 'Shipped' ? 'selected' : ''}>🚚 Shipped</option>
                <option value="Delivered" ${order.status === 'Delivered' ? 'selected' : ''}>🎉 Delivered</option>
                <option value="Cancelled" ${order.status === 'Cancelled' ? 'selected' : ''}>❌ Cancelled</option>
            </select>
        </div>
    `;

    document.getElementById("orderModalOverlay").classList.add("active");
}

// 10. WEBSITE SETTINGS CONTROLLER
function loadWebsiteSettingsForm() {
    const settings = getDBSettings();
    const admin = getDBAdmin();

    const nameInput = document.getElementById("setSiteName");
    const waInput = document.getElementById("setWhatsapp");
    const fbInput = document.getElementById("setFacebook");
    const adminEmailInput = document.getElementById("setAdminEmail");

    if (nameInput) nameInput.value = settings.siteName || "Boichitro Shop BD";
    if (waInput) waInput.value = settings.whatsappNumber || "8801818028094";
    if (fbInput) fbInput.value = settings.facebookUrl || "";
    if (adminEmailInput) adminEmailInput.value = admin.email || "admin@boichitrobd.com";
}

function handleWebsiteSettingsSubmit(e) {
    e.preventDefault();
    const siteName = document.getElementById("setSiteName").value.trim();
    const whatsappNumber = document.getElementById("setWhatsapp").value.trim();
    const facebookUrl = document.getElementById("setFacebook").value.trim();

    const settings = getDBSettings();
    settings.siteName = siteName;
    settings.whatsappNumber = whatsappNumber;
    settings.facebookUrl = facebookUrl;
    saveDBSettings(settings);

    // Update Admin Password if provided
    const newPass = document.getElementById("setAdminNewPass").value.trim();
    const confirmPass = document.getElementById("setAdminConfirmPass").value.trim();
    const adminEmail = document.getElementById("setAdminEmail").value.trim();

    const admin = getDBAdmin();
    if (adminEmail) admin.email = adminEmail;

    if (newPass) {
        if (newPass !== confirmPass) {
            showAdminToast("পাসওয়ার্ড দুটি মেলেনি!", "error");
            return;
        }
        admin.password = newPass;
        document.getElementById("setAdminNewPass").value = "";
        document.getElementById("setAdminConfirmPass").value = "";
    }

    saveDBAdmin(admin);
    showAdminToast("✓ ওয়েবসাইট সেটিংস সফলভাবে সংরক্ষিত হয়েছে!", "success");
}

function handleResetDemoData() {
    if (confirm("⚠️ আপনি কি নিশ্চিতভাবে সব ডেমো ডাটা ও সেটিংস রিস্টোর করতে চান? (আপনার বর্তমান পণ্যসমূহ ডিফল্ট অবস্থায় ফিরে যাবে)")) {
        localStorage.removeItem(STORAGE_KEYS.PRODUCTS);
        localStorage.removeItem(STORAGE_KEYS.SETTINGS);
        localStorage.removeItem(STORAGE_KEYS.COUPONS);
        localStorage.removeItem(STORAGE_KEYS.ORDERS);
        localStorage.removeItem(STORAGE_KEYS.ADMIN);
        showAdminToast("ডাটা রিস্টোর সম্পন্ন হয়েছে", "success");
        setTimeout(() => location.reload(), 600);
    }
}

// 11. MODAL HELPERS
function closeModal(overlayId) {
    const modal = document.getElementById(overlayId);
    if (modal) modal.classList.remove("active");
}

// 12. INITIALIZATION
document.addEventListener("DOMContentLoaded", () => {
    // Check if on login page
    const isLoginPage = window.location.pathname.endsWith("login.html") || window.location.pathname.endsWith("login");

    if (isLoginPage) {
        checkAdminAuth();
        const loginForm = document.getElementById("adminLoginForm");
        if (loginForm) loginForm.addEventListener("submit", handleAdminLogin);
        return;
    }

    // On Admin Dashboard
    if (!checkAdminAuth()) return;

    // Sidebar navigation clicks
    document.querySelectorAll(".sidebar-menu a").forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const viewId = link.getAttribute("data-view");
            if (viewId) switchAdminView(viewId);
        });
    });

    // Mobile sidebar toggle
    const toggleBtn = document.getElementById("btnMenuToggle");
    const sidebar = document.getElementById("adminSidebar");
    if (toggleBtn && sidebar) {
        toggleBtn.addEventListener("click", () => {
            sidebar.classList.toggle("mobile-open");
        });
    }

    // Setup forms
    const prodForm = document.getElementById("productForm");
    if (prodForm) prodForm.addEventListener("submit", handleProductFormSubmit);

    const delForm = document.getElementById("deliveryForm");
    if (delForm) delForm.addEventListener("submit", handleDeliverySettingsSubmit);

    const couponForm = document.getElementById("couponForm");
    if (couponForm) couponForm.addEventListener("submit", handleCouponFormSubmit);

    const settingsForm = document.getElementById("settingsForm");
    if (settingsForm) settingsForm.addEventListener("submit", handleWebsiteSettingsSubmit);

    // Initial View
    switchAdminView("dashboard");
});


// 13. ADMIN SEARCH & FILTER BAR WIRING (Products / Offers / Orders views)
function initAdminFilterBars() {
    // --- Products filter/search ---
    const productSearchInput = document.getElementById("productSearchInput");
    const productFilterChips = document.querySelectorAll('[data-pfilter]');
    if (productSearchInput || productFilterChips.length) {
        const runProductFilter = () => {
            const activeChip = document.querySelector('[data-pfilter].active');
            const filterType = activeChip ? activeChip.getAttribute("data-pfilter") : "all";
            const query = productSearchInput ? productSearchInput.value : "";
            renderProductsTable(filterType, query);
        };
        if (productSearchInput) productSearchInput.addEventListener("input", runProductFilter);
        productFilterChips.forEach(chip => {
            chip.addEventListener("click", () => {
                productFilterChips.forEach(c => c.classList.remove("active"));
                chip.classList.add("active");
                runProductFilter();
            });
        });
    }

    // --- Offers filter/search ---
    const offerSearchInput = document.getElementById("offerSearchInput");
    const offerFilterChips = document.querySelectorAll('[data-ofilter]');
    if (offerSearchInput || offerFilterChips.length) {
        const runOfferFilter = () => {
            const activeChip = document.querySelector('[data-ofilter].active');
            const filterType = activeChip ? activeChip.getAttribute("data-ofilter") : "all";
            const query = offerSearchInput ? offerSearchInput.value : "";
            renderOffersTable(filterType, query);
        };
        if (offerSearchInput) offerSearchInput.addEventListener("input", runOfferFilter);
        offerFilterChips.forEach(chip => {
            chip.addEventListener("click", () => {
                offerFilterChips.forEach(c => c.classList.remove("active"));
                chip.classList.add("active");
                runOfferFilter();
            });
        });
    }

    // --- Orders filter/search ---
    const orderSearchInput = document.getElementById("orderSearchInput");
    const orderFilterChips = document.querySelectorAll('[data-statusfilter]');
    if (orderSearchInput || orderFilterChips.length) {
        const runOrderFilter = () => {
            const activeChip = document.querySelector('[data-statusfilter].active');
            const filterType = activeChip ? activeChip.getAttribute("data-statusfilter") : "all";
            const query = orderSearchInput ? orderSearchInput.value : "";
            renderOrdersTable(filterType, query);
        };
        if (orderSearchInput) orderSearchInput.addEventListener("input", runOrderFilter);
        orderFilterChips.forEach(chip => {
            chip.addEventListener("click", () => {
                orderFilterChips.forEach(c => c.classList.remove("active"));
                chip.classList.add("active");
                runOrderFilter();
            });
        });
    }

    // Allow sidebar "view all orders" shortcut link from dashboard to also switch view
    document.querySelectorAll('a[data-view]').forEach(link => {
        if (!link.closest('.sidebar-menu')) {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                switchAdminView(link.getAttribute('data-view'));
            });
        }
    });
}

// Hook filter bar init into the existing admin DOMContentLoaded init
document.addEventListener("DOMContentLoaded", () => {
    if (document.getElementById("adminSidebar")) {
        initAdminFilterBars();
    }
});
