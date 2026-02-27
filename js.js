document.addEventListener('DOMContentLoaded', () => {

  // Mobile menu toggle
  const menuToggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('nav');
  menuToggle.addEventListener('click', () => {
    nav.classList.toggle('active');
  });

  // Products Array (Hindi, sab products included)
  const products = [
    {name:"आयुर्वेदिक साबुन", desc:"🌿 शुद्ध, सल्फेट-फ्री साबुन, गोबर से बना – कोमल, प्राकृतिक और पर्यावरण के अनुकूल।", link:"#contact"},
    {name:"घी एसेन्स", desc:"✨ पंच गाय का ऑर्गेनिक घी – पोषण और शुद्धता का संगम।", link:"#contact"},
    {name:"गाय का मूत्र उर्वरक", desc:"🌱 100% प्राकृतिक – मिट्टी मजबूत करे, फसल उन्नति में मदद।", link:"#contact"},
    {name:"दही और दूध एसेन्स", desc:"🥛 शुद्ध गाय का दूध और दही – स्किनकेयर और पोषण।", link:"#contact"},
    {name:"पंच गाय शैम्पू", desc:"💧 सल्फेट-फ्री – बालों को मजबूत और स्वस्थ रखें।", link:"#contact"},
    {name:"पंच गाय तेल", desc:"🌿 प्राकृतिक तेल – त्वचा और बालों को पोषण।", link:"#contact"},
    {name:"अगरबत्ती और धूपबत्ती", desc:"🕯 हाथ से बनी प्राकृतिक अगरबत्ती – घर में खुशबू और सकारात्मकता।", link:"#contact"},
    {name:"हवन सामग्री", desc:"🔥 विशेष पंच गाय हवन सामग्री – पवित्र और सुगंधित।", link:"#contact"},
    {name:"पंच गाय फेस क्रीम", desc:"🌸 प्राकृतिक पंच गाय फेस क्रीम – त्वचा के लिए पोषण और नमी।", link:"#contact"},
    {name:"पंच गाय साबुन सेट", desc:"🛁 विभिन्न प्रकार के पंच गाय साबुन का सेट – त्वचा की देखभाल के लिए।", link:"#contact"},
    {name:"पंच गाय हैंड सैनीटाइज़र", desc:"👐 प्राकृतिक पंच गाय सामग्री से बना – सुरक्षित और शुद्ध।", link:"#contact"},
    {name:"अन्य उत्पाद", desc:"✨ अन्य पंच गाय आधारित उत्पाद – शुद्ध, ऑर्गेनिक और पर्यावरण के अनुकूल।", link:"#contact"}
  ];

  // Generate product cards dynamically
  const grid = document.querySelector('.products-grid');
  products.forEach(p => {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.innerHTML = `<h3>${p.name}</h3><p>${p.desc}</p><a href="${p.link}" class="btn">ऑर्डर करें</a>`;
    grid.appendChild(card);
  });

  // Contact form alert
  const form = document.getElementById('contactForm');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('धन्यवाद! हम जल्द ही आपसे संपर्क करेंगे।');
    form.reset();
  });

});