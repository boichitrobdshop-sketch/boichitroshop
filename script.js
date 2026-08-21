document.addEventListener("DOMContentLoaded", () => {

// ==========================================
    // অটোমেটিক প্রোডাক্ট লিস্ট জেনারেট (Order Form)
    // ==========================================
    const productSelect = document.getElementById("productSelect");
    // পুরো ওয়েবসাইটের সব .product-card সিলেক্ট করবে (Product এবং Offer সেকশন মিলিয়ে)
    const allProducts = document.querySelectorAll(".product-card"); 

    if (productSelect && allProducts.length > 0) {
        productSelect.innerHTML = ""; // আগের সব মুছে ফেলবে
        
        let addedProducts = []; // ডুপ্লিকেট প্রোডাক্ট চেক করার জন্য একটি লিস্ট
        
        allProducts.forEach(card => {
            const name = card.getAttribute("data-name");
            const price = card.getAttribute("data-price");
            
            // যদি প্রোডাক্টটি ফর্মে আগে থেকে যুক্ত না হয়ে থাকে, তবেই যুক্ত করবে
            if (!addedProducts.includes(name)) {
                addedProducts.push(name); // লিস্টে নাম সেভ করে রাখলো
                
                const option = document.createElement("option");
                option.value = name;
                option.setAttribute("data-price", price);
                option.textContent = `${name} - ৳${price}`;
                
                productSelect.appendChild(option);
            }
        });
    }
    
    // ==========================================
    // ১. মেনু এবং স্ক্রল ট্র্যাকিং (Desktop + Mobile)
    // ==========================================
    const menuBtn = document.getElementById("menuBtn");
    const navbar = document.getElementById("navbar");
    if (menuBtn) {
        menuBtn.addEventListener("click", () => navbar.classList.toggle("active"));
    }

    // স্ক্রল করলে মেনু অটো হাইলাইট হওয়ার লজিক
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".navbar .nav-link");
    const mobileNavLinks = document.querySelectorAll(".mobile-bottom-nav .mobile-nav-item");

    window.addEventListener("scroll", () => {
        let current = "";

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (pageYOffset >= (sectionTop - 150)) {
                current = section.getAttribute("id");
            }
        });

        // ডেক্সটপ মেনু আপডেট
        navLinks.forEach(link => {
            if(link.getAttribute("id") !== "trackNavBtn") {
                link.classList.remove("active");
            }
            if (link.getAttribute("href") === `#${current}`) {
                link.classList.add("active");
            }
        });

        // মোবাইল বটম মেনু আপডেট
        mobileNavLinks.forEach(link => {
            if(!link.classList.contains("cart-trigger")) { // মাঝখানের কার্ট বাটন বাদে
                link.classList.remove("active");
                if (link.getAttribute("href") === `#${current}`) {
                    link.classList.add("active");
                }
            }
        });
    });

    // ==========================================
    // ২. সার্চ ফিল্টার (এখন অফার সেকশনেও কাজ করবে)
    // ==========================================
    const searchInput = document.getElementById("searchInput");
    if (searchInput) {
        searchInput.addEventListener("keyup", (e) => {
            const query = e.target.value.toLowerCase();
            const productCards = document.querySelectorAll(".product-card");
            productCards.forEach(card => {
                const name = card.getAttribute("data-name").toLowerCase();
                card.style.display = name.includes(query) ? "block" : "none";
            });
        });
    }

    // ==========================================
    // ৩. কার্ট সিস্টেম (Cart Management)
    // ==========================================
    let cart = [];
    const cartDrawer = document.getElementById("cartDrawer");
    const drawerOverlay = document.getElementById("drawerOverlay");
    const cartItemsContainer = document.getElementById("cartItemsContainer");
    const cartBadge = document.getElementById("cartBadge"); 
    const mobileCartBadge = document.getElementById("mobileCartBadge"); 
    const cartTotal = document.getElementById("cartTotal");

    function toggleCart() {
        cartDrawer.classList.toggle("active");
        drawerOverlay.classList.toggle("active");
    }

    // কার্ট ওপেন করার বাটনগুলো
    document.getElementById("cartIcon").addEventListener("click", toggleCart);
    document.getElementById("closeCart").addEventListener("click", toggleCart);
    drawerOverlay.addEventListener("click", toggleCart);
    
    const mobileCartBtn = document.getElementById("mobileCartBtn");
    if(mobileCartBtn) {
        mobileCartBtn.addEventListener("click", toggleCart);
    }

    // Add To Cart বাটনে ক্লিক করলে
    document.querySelectorAll(".btn-add-cart").forEach(button => {
        button.addEventListener("click", (e) => {
            const card = e.target.closest(".product-card");
            const id = card.getAttribute("data-id");
            const name = card.getAttribute("data-name");
            const price = parseInt(card.getAttribute("data-price"));
            const img = card.querySelector(".product-img img").src;

            const existingItem = cart.find(item => item.id === id);
            if (existingItem) {
                existingItem.qty += 1;
            } else {
                cart.push({ id, name, price, qty: 1, img });
            }
            updateCartUI();
            toggleCart();
        });
    });

    // কার্টের ডিজাইন ও ডাটা আপডেট করা
    function updateCartUI() {
        cartItemsContainer.innerHTML = "";
        let total = 0, itemCount = 0;

        if (cart.length === 0) {
            cartItemsContainer.innerHTML = `
                <div class="empty-cart-msg">
                    <i class="fa-solid fa-cart-arrow-down"></i>
                    <p>আপনার কার্ট সম্পূর্ণ খালি!</p>
                </div>`;
            document.getElementById("singleProductSelectDiv").style.display = "block";
            document.getElementById("singleQtyDiv").style.display = "block";
        } else {
            document.getElementById("singleProductSelectDiv").style.display = "none";
            document.getElementById("singleQtyDiv").style.display = "none";

            cart.forEach((item, index) => {
                total += item.price * item.qty;
                itemCount += item.qty;

                const itemDiv = document.createElement("div");
                itemDiv.classList.add("cart-item");
                itemDiv.innerHTML = `
                    <img src="${item.img}" alt="${item.name}" class="cart-item-img">
                    <div class="cart-item-info">
                        <h4>${item.name}</h4>
                        <p>৳${item.price}</p>
                    </div>
                    <div class="cart-qty-controls">
                        <button class="qty-btn-sm" data-action="minus" data-index="${index}">-</button>
                        <span>${item.qty}</span>
                        <button class="qty-btn-sm" data-action="plus" data-index="${index}">+</button>
                    </div>
                    <button class="cart-del-btn" data-action="delete" data-index="${index}">
                        <i class="fa-solid fa-trash"></i>
                    </button>
                `;
                cartItemsContainer.appendChild(itemDiv);
            });
        }

        // ব্যাজ আপডেট
        if(cartBadge) cartBadge.innerText = itemCount;
        if(mobileCartBadge) mobileCartBadge.innerText = itemCount;
        
        cartTotal.innerText = `৳${total}`;
        calculateOrderTotal();
    }

    // কার্টের ভেতরের + / - / ডিলিট বাটন কাজ করানো
    cartItemsContainer.addEventListener("click", (e) => {
        const btn = e.target.closest("button");
        if (!btn) return;

        const action = btn.getAttribute("data-action");
        const index = btn.getAttribute("data-index");

        if (action === "plus") cart[index].qty += 1;
        if (action === "minus") {
            cart[index].qty -= 1;
            if (cart[index].qty <= 0) cart.splice(index, 1);
        }
        if (action === "delete") cart.splice(index, 1);

        updateCartUI();
    });

    document.getElementById("checkoutBtn").addEventListener("click", () => {
        toggleCart();
        document.getElementById("order").scrollIntoView({ behavior: 'smooth' });
    });

    // ==========================================
    // ৪. অর্ডার ফর্ম ও হোয়াটসঅ্যাপ লজিক
    // ==========================================
    function calculateOrderTotal() {
        let subtotal = 0;
        let deliveryCharge = parseInt(document.querySelector('input[name="deliveryCharge"]:checked').value);

        if (cart.length > 0) {
            cart.forEach(item => subtotal += (item.price * item.qty));
        } else {
            const productSelect = document.getElementById("productSelect");
            const unitPrice = parseInt(productSelect.options[productSelect.selectedIndex].getAttribute("data-price")) || 0;
            const qty = parseInt(document.getElementById("orderQty").value) || 1;
            subtotal = unitPrice * qty;
        }

        document.getElementById("subtotalPrice").innerText = `৳${subtotal}`;
        document.getElementById("deliveryPrice").innerText = `৳${deliveryCharge}`;
        document.getElementById("finalTotalPrice").innerText = `৳${subtotal + deliveryCharge}`;
    }

    document.querySelectorAll('input[name="deliveryCharge"]').forEach(r => r.addEventListener("change", calculateOrderTotal));
    document.getElementById("productSelect").addEventListener("change", calculateOrderTotal);
    
    // Initial call to set total correctly when page loads
    calculateOrderTotal();
    
    document.getElementById("qtyMinus").addEventListener("click", () => {
        let val = parseInt(document.getElementById("orderQty").value);
        if (val > 1) { document.getElementById("orderQty").value = val - 1; calculateOrderTotal(); }
    });
    document.getElementById("qtyPlus").addEventListener("click", () => {
        let val = parseInt(document.getElementById("orderQty").value);
        document.getElementById("orderQty").value = val + 1; calculateOrderTotal();
    });

    document.querySelectorAll(".btn-buy-now").forEach(btn => {
        btn.addEventListener("click", (e) => {
            const name = e.target.closest(".product-card").getAttribute("data-name");
            const select = document.getElementById("productSelect");
            for (let option of select.options) {
                if (option.value === name) { option.selected = true; break; }
            }
            cart = []; 
            updateCartUI();
            calculateOrderTotal();
            document.getElementById("order").scrollIntoView({ behavior: 'smooth' });
        });
    });















    document.getElementById("orderForm").addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("custName").value.trim();
    const phone = document.getElementById("custPhone").value.trim();
    const address = document.getElementById("custAddress").value.trim();

    const deliveryCharge = parseInt(
        document.querySelector('input[name="deliveryCharge"]:checked').value
    );

    const deliveryArea =
        deliveryCharge === 100 ? "চট্টগ্রাম শহর" : "চট্টগ্রামের বাইরে";

    let productDetails = "";
    let productName = "";
    let quantity = 0;
    let subtotal = 0;

    if (cart.length > 0) {

        cart.forEach((item, index) => {

            productDetails +=
                `${index + 1}. *${item.name}* - ${item.qty} টি - ৳${item.price * item.qty}%0A`;

            subtotal += item.price * item.qty;
            quantity += item.qty;

            if (index === 0) {
                productName = item.name;
            }
        });

    } else {

        productName = document.getElementById("productSelect").value;

        quantity =
            parseInt(document.getElementById("orderQty").value) || 1;

        const productSelect =
            document.getElementById("productSelect");

        const unitPrice =
            parseInt(
                productSelect.options[
                    productSelect.selectedIndex
                ].getAttribute("data-price")
            ) || 0;

        subtotal = unitPrice * quantity;

        productDetails =
            `📦 *পণ্য:* ${productName}%0A` +
            `🔢 *পরিমাণ:* ${quantity} টি%0A`;
    }

    const grandTotal = subtotal + deliveryCharge;


    // ==========================================
    // 1. GOOGLE SHEET-এ BACKGROUND-এ SAVE
    // ==========================================

    const googleSheetURL =
        "https://script.google.com/macros/s/AKfycbzT9Ptm0sBBhUtIAMz-lWwPzegGaIUVVwqsoMLzSH89-Yd8p_HIlJyocbv2ujEhCh42/exec";

    fetch(googleSheetURL, {
        method: "POST",
        mode: "no-cors",
        headers: {
            "Content-Type": "text/plain;charset=utf-8"
        },
        body: JSON.stringify({
            name: name,
            phone: phone,
            address: address,
            deliveryArea: deliveryArea,
            product: productName,
            quantity: quantity,
            subtotal: subtotal,
            deliveryCharge: deliveryCharge,
            total: grandTotal
        })
    }).catch(error => {
        console.error("Google Sheet Error:", error);
    });


    // ==========================================
    // 2. সাথে সাথে WHATSAPP খুলবে
    // ==========================================

    const message =
        `🛍️ *নতুন অর্ডার!*%0A` +
        `------------------------%0A` +
        `*অর্ডারকৃত পণ্যসমূহ:*%0A` +
        `${productDetails}` +
        `------------------------%0A` +
        `🚚 *ডেলিভারি এরিয়া:* ${deliveryArea}%0A` +
        `💵 *সাবটোটাল:* ৳${subtotal}%0A` +
        `🚚 *ডেলিভারি চার্জ:* ৳${deliveryCharge}%0A` +
        `💰 *সর্বমোট বিল:* ৳${grandTotal}%0A` +
        `------------------------%0A` +
        `👤 *নাম:* ${name}%0A` +
        `📞 *ফোন:* ${phone}%0A` +
        `📍 *ঠিকানা:* ${address}%0A` +
        `💳 *পেমেন্ট:* ক্যাশ অন ডেলিভারি`;

    window.open(
        `https://wa.me/8801818028094?text=${message}`,
        "_blank"
    );


        // ==========================================
        // 3. FORM RESET
        // ==========================================

        cart = [];
        updateCartUI();
        document.getElementById("orderForm").reset();

    });

    
});