/* ========================================================================
   script.js — Boichitro Shop BD | সম্পূর্ণ ওয়েবসাইট ইঞ্জিন
   ========================================================================

   ✏️  কোড এডিট গাইড (বাংলা):
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

   📦 নতুন প্রোডাক্ট যোগ করতে:
      ↓ নিচে DEFAULT_PRODUCTS_DATA array-এ একটি নতুন object যোগ করুন।
      type: "product"  এবং  productType: "regular"  রাখুন।
      উদাহরণ:
      {
          id: "unique-id-here",         ← ইউনিক id (English, হাইফেন দিয়ে)
          name: "প্রোডাক্টের নাম",
          category: "Emergency Food",   ← অথবা "Emergency Water"
          price: 300,                   ← মূল্য (টাকা)
          oldPrice: null,               ← পুরনো দাম থাকলে লিখুন, না থাকলে null
          image: "image/ফাইল.jpg",     ← ছবির ফাইল নাম
          description: "সংক্ষিপ্ত বিবরণ",
          badge: "Popular",             ← "Popular" / "New" / "Best Value" / "Mega Pack" / null
          type: "product",
          productType: "regular",
          featured: true,               ← হোমপেজে দেখাতে চাইলে true
          active: true,                 ← পণ্য চালু থাকলে true, বন্ধ করতে false
          inStock: true,                ← স্টক আছে হলে true, স্টক আউট দেখাতে false
          packageInfo: "বিস্তারিত প্যাকেজ তথ্য..."
      },

   📦 স্টক আউট করতে:
      ↓ যেকোনো প্রোডাক্ট/অফারে  inStock: false  সেট করুন।
      তখন "স্টক আউট" দেখাবে, Add to Cart ও অর্ডার বাটন বন্ধ হয়ে যাবে।

   🎁 নতুন অফার যোগ করতে:
      ↓ একইভাবে, কিন্তু type: "offer"  এবং  productType: "offer"  রাখুন।
      oldPrice সেট করলে স্বয়ংক্রিয়ভাবে "Save ৳X" badge দেখাবে।

   🎟️ কুপন যোগ/পরিবর্তন করতে:
      ↓ নিচে DEFAULT_COUPONS array দেখুন।
      type: "percent"  → % ছাড়
      type: "fixed"    → নির্দিষ্ট টাকা ছাড়
      minOrder: 500    → কমপক্ষে ৳500 অর্ডার করলে কুপন চলবে
      active: false    → কুপন বন্ধ করতে

   🚚 ডেলিভারি চার্জ পরিবর্তন করতে:
      ↓ নিচে DEFAULT_SETTINGS-এ deliveryChattogram ও deliveryOutside পরিবর্তন করুন।

   📱 WhatsApp নম্বর পরিবর্তন করতে:
      ↓ DEFAULT_SETTINGS-এ whatsappNumber পরিবর্তন করুন।

   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   ⚠️  গুরুত্বপূর্ণ: প্রতিটি পণ্যের id অবশ্যই ইউনিক হতে হবে।
   ⚠️  image ফাইলটি অবশ্যই image/ ফোল্ডারে রাখতে হবে।
   ======================================================================== */

/* =====================================================================
   ১. পণ্য ও অফার ডেটাবেজ (DEFAULT_PRODUCTS_DATA)
   ===================================================================== */

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
        inStock: false,
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
        inStock: true,
        packageInfo: "পরিমাণ: ৫০০ মি.লি., ৫ বছরের মেয়াদী বিশুদ্ধ জরুরি পানীয় জল, আন্তর্জাতিক SOLAS স্ট্যান্ডার্ড অনুমোদিত প্যাকেজড ওয়াটার।"
    },
    {
        id: "Huahai emergency food rations - 1",
        name: "Huahai Emergency Food Rations",
        category: "Emergency Food",
        price: 280,
        oldPrice: null,
        image: "image/Huahai emergency-1.png",
        description: "১ টি সিঙ্গেল রেশন প্যাক (৫০০~৫৫০g)",
        badge: "New",
        type: "product",
        productType: "regular",
        featured: true,
        active: true,
        inStock: true,
        packageInfo: "Huahai Emergency Life-Saving Food Rations — জরুরি পরিস্থিতির জন্য দীর্ঘমেয়াদি সংরক্ষণযোগ্য খাবার। সহজে বহনযোগ্য এবং প্রয়োজনের সময় ব্যবহারের উপযোগী। এই প্যাকটির নিট ওজন ৫০০ থেকে ৫৫০ গ্রাম (৫০০~৫৫০g) এবং এতে মোট ১৬টি ব্লক বা টুকরা রয়েছে।"
    },
    {
        id: "ANA Survival Craft Ration- 1",
        name: "ANA Survival Craft Ration",
        category: "Emergency Food",
        price: 280,
        oldPrice: null,
        image: "image/ANA Survival Craft Ration.jpeg",
        description: "১টি সিঙ্গেল রেশন প্যাক (৫০০–৫৫০ গ্রাম)",
        badge: "New",
        type: "product",
        productType: "regular",
        featured: true,
        active: true,
        inStock: true,
        packageInfo: "ANA Survival Craft Ration হলো জরুরি পরিস্থিতির জন্য তৈরি একটি কমপ্যাক্ট ও দীর্ঘমেয়াদি সংরক্ষণযোগ্য খাবার। এটি baked wheat, fat ও sugars দিয়ে তৈরি compressed food, যা দুর্যোগ, সমুদ্রযাত্রা, ক্যাম্পিং, ট্রেকিং বা জরুরি অবস্থায় দ্রুত খাবারের প্রয়োজন মেটাতে ব্যবহার করা যায়।"
    },


    // ===== নতুন অফার: Huahai Pack - 2 =====
    // দুটি Huahai প্যাক একসাথে কিনলে মোট ৳500 (প্রতিটি ৳250)
    // oldPrice = 560 (2 × ৳280), price = 500 (সেভ ৳60)
    {
        id: "huahai-pack-2",
        name: "Huahai Emergency Rations (Pack - 2)",
        category: "Emergency Food",
        price: 500,
        oldPrice: 560,
        image: "image/Huahai emergency-2.jpeg",
        description: "২টি Huahai Ration একসাথে — সাশ্রয়ী কম্বো",
        badge: "Best Value",
        type: "offer",
        productType: "offer",
        featured: true,
        active: true,
        inStock: true,
        packageInfo: "Huahai Emergency Life-Saving Food Rations (Pack - 2) — ২টি প্যাক একসাথে কিনলে প্রতিটি মাত্র ৳250! মোট ১,০০০~১,১০০ গ্রাম, ৩২ টি ব্লক। জরুরি পরিস্থিতিতে পরিবারের জন্য আদর্শ।"
    },
    {
        id: "ANA Survival Craft Ration-2",
        name: "ANA Survival Craft Ration (Pack - 2)",
        category: "Emergency Food",
        price: 500,
        oldPrice: 560,
        image: "image/ANA Survival Craft Ration.jpeg",
        description: "২ টি রেশন প্যাকের সাশ্রয়ী সেট",
        badge: "Best Value",
        type: "offer",
        productType: "offer",
        featured: true,
        active: true,
        inStock: true,
        packageInfo: "২ টি অরিজিনাল ৫০০–৫৫০ গ্রাম রেশন প্যাকের মেগা সাশ্রয়ী কম্বো ।"
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
        inStock: true,
        packageInfo: "৫ টি বিশুদ্ধ জরুরি সুপেয় ওয়াটার প্যাক (মোট ২,৫০০ ml)। ৫ বছর পর্যন্ত অক্ষত থাকে।"
    }
];

/* =====================================================================
   ২. সাইটের মূল সেটিংস (পরিবর্তন করতে এখানে edit করুন)
   ===================================================================== */
const DEFAULT_SETTINGS = {
    siteName: "Boichitro Shop BD",
    whatsappNumber: "8801818028094",   // ← WhatsApp নম্বর (880 দিয়ে শুরু, + বা - ছাড়া)
    deliveryChattogram: 70,            // ← চট্টগ্রাম শহরের ডেলিভারি চার্জ (টাকা)
    deliveryOutside: 120,              // ← চট্টগ্রামের বাইরে ডেলিভারি চার্জ (টাকা)
    currencySymbol: "৳",
    facebookUrl: "https://facebook.com/boichitrobdshop",
    address: "চট্টগ্রাম, বাংলাদেশ"
};

/* =====================================================================
   ৩. কুপন কোড (যোগ / পরিবর্তন / বন্ধ করতে এখানে edit করুন)
   ===================================================================== */
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


// 2. STORAGE KEYS
const STORAGE_KEYS = {
    PRODUCTS: "boichitro_db_products",   // পণ্য ডেটা
    SETTINGS: "boichitro_db_settings",   // ডেলিভারি চার্জ, WhatsApp নম্বর ইত্যাদি
    COUPONS:  "boichitro_db_coupons",    // কুপন কোড
    ORDERS:   "boichitro_db_orders"      // অর্ডার রেকর্ড
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
// In-memory caches avoid re-reading & re-parsing localStorage on every call
// (renderHomepage, renderProductsPage, getProductById, cart sync, etc. all
// used to trigger a fresh localStorage.getItem + JSON.parse each time).
let _dbProductsCache = null;
let _dbSettingsCache = null;

function getDBProducts() {
    if (_dbProductsCache) return _dbProductsCache;

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
                    // Backward compatibility: older saved data may not have inStock yet
                    if (typeof p.inStock !== "boolean") {
                        p.inStock = true;
                        hasChanges = true;
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
                } else {
                    _dbProductsCache = cleaned;
                    PRODUCTS_DATA = cleaned;
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
        _dbProductsCache = products;
    } catch (e) {
        console.error("Error saving products db:", e);
    }
}

function getDBSettings() {
    if (_dbSettingsCache) return _dbSettingsCache;
    try {
        const data = localStorage.getItem(STORAGE_KEYS.SETTINGS);
        if (data) {
            _dbSettingsCache = { ...DEFAULT_SETTINGS, ...JSON.parse(data) };
            return _dbSettingsCache;
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
        _dbSettingsCache = settings;
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
    const outOfStock = item.inStock === false;
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

    let badgeHTML = '';
    if (outOfStock) {
        badgeHTML = `<span class="card-badge badge-outofstock">স্টক আউট</span>`;
    } else if (item.badge) {
        badgeHTML = `<span class="${badgeClass}">${item.badge}</span>`;
    }

    const cardActionsHTML = outOfStock
        ? `<div class="card-actions">
                <button type="button" class="btn-add-cart" disabled aria-disabled="true">
                    <i class="fa-solid fa-ban"></i> স্টক আউট
                </button>
           </div>`
        : `<div class="card-actions">
                <button type="button" class="btn-add-cart" onclick="handleAddToCart('${item.id}')">
                    <i class="fa-solid fa-cart-plus"></i> কার্টে রাখুন
                </button>
                <button type="button" class="btn-buy-now" onclick="handleBuyNow('${item.id}')">
                    অর্ডার করুন
                </button>
           </div>`;

    return `
        <div class="product-card${outOfStock ? ' out-of-stock' : ''}" data-id="${item.id}">
            ${badgeHTML}
            <div class="product-img" onclick="goToProductDetails('${item.id}')" title="${item.name}">
                <img src="${item.image}" alt="${item.name}" loading="lazy" decoding="async" onerror="this.src='image/Seven Oceans.jpg'">
            </div>
            <div class="product-details">
                <h3 onclick="goToProductDetails('${item.id}')">${item.name}</h3>
                <p class="desc">${item.description}</p>
                <div class="price-box">
                    <span class="price">${formatCurrency(item.price)}</span>
                    ${oldPriceHTML}
                    ${discountBadgeHTML}
                </div>
                ${cardActionsHTML}
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

    const outOfStock = item.inStock === false;

    let oldPriceHTML = '';
    if (item.oldPrice && item.oldPrice > item.price) {
        const savings = item.oldPrice - item.price;
        oldPriceHTML = `
            <span class="old-price" style="font-size: 18px;">${formatCurrency(item.oldPrice)}</span>
            <span class="save-badge">Save ${formatCurrency(savings)}</span>
        `;
    }

    const stockBadgeHTML = outOfStock
        ? `<span class="badge badge-outofstock" style="margin-left:8px;">স্টক আউট</span>`
        : '';

    const detailActionsHTML = outOfStock
        ? `<div class="detail-actions">
                <button type="button" class="btn btn-secondary btn-lg" disabled aria-disabled="true">
                    <i class="fa-solid fa-ban"></i> স্টক আউট — এই মুহূর্তে অনুপলব্ধ
                </button>
           </div>`
        : `<div class="quantity-selector-box form-group">
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
           </div>`;

    wrapper.innerHTML = `
        <div class="product-details-grid">
            <div class="product-large-img${outOfStock ? ' out-of-stock' : ''}">
                <img src="${item.image}" alt="${item.name}" onerror="this.src='image/Seven Oceans.jpg'" style="${outOfStock ? 'opacity:0.55; filter:grayscale(55%);' : ''}">
            </div>
            <div class="product-info-col">
                <span class="badge badge-primary">${item.category || "General"}</span>${stockBadgeHTML}
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

                ${detailActionsHTML}
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

// 6b. DYNAMIC HERO PRODUCT CAROUSEL (Homepage)
// Automatically cycles through all active products/offers using real
// uploaded images from the existing product data — no hardcoding.
// New products added to DEFAULT_PRODUCTS_DATA (or via the DB) will
// automatically be picked up here.
function initHeroSlider() {
    const sliderBox = document.querySelector(".hero-slider-box");
    const imgEl = document.getElementById("sliderImg");
    const tagEl = sliderBox ? sliderBox.querySelector(".product-tag") : null;
    if (!sliderBox || !imgEl || !tagEl) return;

    const products = getDBProducts().filter(p => p.active !== false && p.image);
    if (products.length === 0) return;

    // Featured items get priority, but every active product/offer is included
    // so the carousel always reflects the current catalog automatically.
    const ordered = products.filter(p => p.featured).concat(products.filter(p => !p.featured));

    let currentIndex = 0;
    imgEl.decoding = "async";

    // Preload the next slide's image so transitions stay smooth
    function preload(src) {
        const pre = new Image();
        pre.src = src;
    }

    function showSlide(i) {
        const item = ordered[i];
        if (!item) return;
        imgEl.style.opacity = "0";
        setTimeout(() => {
            imgEl.src = item.image;
            imgEl.alt = item.name;
            imgEl.onerror = function () { this.src = "image/Seven Oceans.jpg"; };
            tagEl.textContent = item.name;
            imgEl.style.opacity = "1";
        }, 350);

        const next = ordered[(i + 1) % ordered.length];
        if (next) preload(next.image);
    }

    showSlide(currentIndex);

    if (ordered.length > 1) {
        setInterval(() => {
            currentIndex = (currentIndex + 1) % ordered.length;
            showSlide(currentIndex);
        }, 3800);
    }
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
    if (prod.inStock === false) {
        if (typeof showToast === "function") {
            showToast(`❌ "${prod.name}" বর্তমানে স্টক আউট।`, "error");
        }
        return;
    }

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
    if (prod.inStock === false) {
        if (typeof showToast === "function") {
            showToast(`❌ "${prod.name}" বর্তমানে স্টক আউট।`, "error");
        }
        return;
    }

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
            cartContainer.innerHTML = cart.map((item, index) => {
                const fresh = typeof getProductById === "function" ? getProductById(item.id) : null;
                const isOOS = !fresh || fresh.inStock === false;
                return `
                <div class="cart-item">
                    <img src="${item.img}" alt="${item.name}" class="cart-item-img" loading="lazy" decoding="async" onerror="this.src='image/Seven Oceans.jpg'">
                    <div class="cart-item-info">
                        <h4>${item.name}</h4>
                        ${isOOS ? `<div class="cart-item-stock-warning">স্টক আউট — অর্ডার করা যাবে না</div>` : ''}
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
            `;
            }).join("");
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
    const settings = typeof getDBSettings === "function" ? getDBSettings() : { deliveryChattogram: 70, deliveryOutside: 120 };
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

        checkoutItemsList.innerHTML = cart.map((item, index) => {
            const fresh = typeof getProductById === "function" ? getProductById(item.id) : null;
            const isOOS = !fresh || fresh.inStock === false;
            return `
            <div class="checkout-item-card">
                <div class="checkout-top-row">
                    <img src="${item.img}" alt="${item.name}" class="checkout-item-img" loading="lazy" decoding="async" onerror="this.src='image/Seven Oceans.jpg'">
                    <div class="checkout-item-details">
                        <h4>${item.name}</h4>
                        ${isOOS ? `<div class="cart-item-stock-warning">স্টক আউট — অনুগ্রহ করে সরিয়ে ফেলুন</div>` : ''}
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
            `;
        }).join("");
    }

    calculateCheckoutTotals();
}

// 3. TOTALS & DELIVERY CHARGE CALCULATION WITH COUPONS
function calculateCheckoutTotals() {
    let subtotal = 0;
    cart.forEach(item => subtotal += (item.price * item.qty));

    const settings = typeof getDBSettings === "function" ? getDBSettings() : { deliveryChattogram: 70, deliveryOutside: 120 };
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

    // Block order if any cart item has since gone out of stock
    const outOfStockItem = cart.find(item => {
        const fresh = typeof getProductById === "function" ? getProductById(item.id) : null;
        return !fresh || fresh.inStock === false;
    });
    if (outOfStockItem) {
        if (typeof showToast === "function") {
            showToast(`❌ "${outOfStockItem.name}" বর্তমানে স্টক আউট। অনুগ্রহ করে কার্ট থেকে সরিয়ে আবার চেষ্টা করুন।`, "error");
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

    const settings = typeof getDBSettings === "function" ? getDBSettings() : { deliveryChattogram: 70, deliveryOutside: 120, whatsappNumber: "8801818028094" };
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
        // Debounce input handling — avoids re-rendering the whole grid on every keystroke
        let searchDebounceTimer;
        searchInput.addEventListener("input", (e) => {
            const query = e.target.value;
            clearTimeout(searchDebounceTimer);
            searchDebounceTimer = setTimeout(() => {
                if (document.getElementById("allProductsGrid") && typeof renderProductsPage === "function") {
                    const activeFilterBtn = document.querySelector(".filter-btn.active");
                    const cat = activeFilterBtn ? activeFilterBtn.getAttribute("data-category") : "all";
                    const sortSelect = document.getElementById("sortSelect");
                    const sortBy = sortSelect ? sortSelect.value : "popular";
                    renderProductsPage(cat, query, sortBy);
                } else if (document.getElementById("allOffersGrid") && typeof renderOffersPage === "function") {
                    renderOffersPage(query);
                }
            }, 180);
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
    if (typeof initHeroSlider === "function") initHeroSlider();
    if (document.getElementById("allProductsGrid") && typeof renderProductsPage === "function") {
        renderProductsPage("all", searchParam || "");
    }
    if (typeof renderOffersPage === "function") renderOffersPage();
    if (typeof renderSingleProductDetailsPage === "function") renderSingleProductDetailsPage();
    if (typeof initCheckoutPage === "function") initCheckoutPage();
    if (typeof updateCartUI === "function") updateCartUI();
});
