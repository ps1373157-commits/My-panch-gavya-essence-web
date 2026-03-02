document.addEventListener('DOMContentLoaded', () => {

  // ===== MENU TOGGLE =====
  const menuToggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('nav');
  if(menuToggle){
    menuToggle.addEventListener('click', () => {
      nav.classList.toggle('active');
    });
  }

  // ===== PRODUCTS DATA =====
  const products = [
    {
      id:1,
      name:"आयुर्वेदिक साबुन",
      desc:"🌿 शुद्ध, रसायन-मुक्त और कोमल साबुन। यह साबुन रोज़ाना उपयोग से त्वचा को साफ़, पोषित और चमकदार बनाता है।",
      price:99,
      link:"product.html?id=1"
    },
    {
      id:2,
      name:"पंच गाय शैम्पू",
      desc:"✨ सल्फेट-फ्री हर्बल शैम्पू जो बालों को मजबूत, घना और चमकदार बनाता है।",
      price:149,
      link:"product.html?id=2"
    },
    {
      id:3,
      name:"पंच गाय तेल",
      desc:"🌿 पोषणयुक्त तेल बालों और त्वचा दोनों के लिए लाभकारी।",
      price:199,
      link:"product.html?id=3"
    },
    {
      id:4,
      name:"अगरबत्ती",
      desc:"🕯️ प्राकृतिक सुगंध वाली अगरबत्ती जो घर और पूजा स्थल में सकारात्मक वातावरण बनाती है।",
      price:79,
      link:"product.html?id=4"
    },
    {
      id:5,
      name:"हवन सामग्री",
      desc:"🔥 शुद्ध और विशेष हवन सामग्री।",
      price:299,
      link:"product.html?id=5"
    }
  ];

  // ===== INDEX.HTML: PRODUCTS GRID =====
  const grid = document.querySelector('.products-grid');
  if(grid){
    products.forEach(p => {
      const card = document.createElement('div');
      card.className = 'product-card';
      card.innerHTML = `
        <h3>${p.name}</h3>
        <p>${p.desc}</p>
        <a href="${p.link}" class="btn btn-product">विवरण देखें</a>
      `;
      grid.appendChild(card);
    });
  }

  // ===== PRODUCT.HTML: PRODUCT DETAILS + QUANTITY =====
  const productPageName = document.getElementById("productName");
  const productPageDesc = document.getElementById("productDesc");
  const productPagePrice = document.getElementById("productPrice");
  const qtyInput = document.getElementById("quantity");
  const totalPrice = document.getElementById("totalPrice");

  if(productPageName && productPageDesc && productPagePrice){
    // URL से id लेना
    const params = new URLSearchParams(window.location.search);
    const id = Number(params.get("id"));
    const currentProduct = products.find(p => p.id === id);

    if(!currentProduct){
      alert("Product load nahi hua!");
    } else {
      // Show product data
      productPageName.innerText = currentProduct.name;
      productPageDesc.innerText = currentProduct.desc;
      productPagePrice.innerText = "कीमत: ₹" + currentProduct.price;

      // Total price
      function updateTotal(){
        const qty = Number(qtyInput.value) || 1;
        totalPrice.innerText = "कुल कीमत: ₹" + (qty * currentProduct.price);
      }

      updateTotal();

      if(qtyInput){
        qtyInput.addEventListener("input", updateTotal);
      }

      // WhatsApp order function
      window.orderWhatsApp = function(){
        const qty = Number(qtyInput.value) || 1;
        const total = qty * currentProduct.price;
        const phone = "919170545988";
        const message = `नमस्ते,
मुझे ${currentProduct.name} ऑर्डर करना है।

मात्रा: ${qty}
कुल कीमत: ₹${total}

कृपया आगे की प्रक्रिया बताएं।`;

        const url = "https://api.whatsapp.com/send?phone=" + phone + "&text=" + encodeURIComponent(message);
        window.location.href = url;
      }
    }
  }

});