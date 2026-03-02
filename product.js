// ===== PRODUCTS DATA =====
const products = [

{
id:1,
name:"आयुर्वेदिक साबुन",
desc:"🌿 शुद्ध, रसायन-मुक्त और कोमल साबुन। यह साबुन रोज़ाना उपयोग से त्वचा को साफ़, पोषित और चमकदार बनाता है। प्राकृतिक सामग्री से बना होने के कारण संवेदनशील त्वचा वालों के लिए भी सुरक्षित है। इसमें पंच गाय तत्वों का संतुलित मिश्रण त्वचा की नमी बनाए रखता है और उसे मुलायम बनाता है। नियमित उपयोग से त्वचा स्वस्थ और ताज़गीपूर्ण महसूस करती है।",
price:99,
features:[
"100% प्राकृतिक सामग्री",
"रसायन-मुक्त निर्माण",
"संवेदनशील त्वचा के लिए सुरक्षित",
"दैनिक उपयोग हेतु उपयुक्त"
]
},

{
id:2,
name:"पंच गाय शैम्पू",
desc:"✨ सल्फेट-फ्री हर्बल शैम्पू जो बालों को मजबूत, घना और चमकदार बनाता है। प्राकृतिक तत्व बालों की जड़ों को पोषण देते हैं और रूखापन कम करते हैं। यह शैम्पू बालों की प्राकृतिक नमी बनाए रखता है और लंबे समय तक ताजगी देता है।",
price:149,
features:[
"सल्फेट-फ्री फॉर्मूला",
"बालों की जड़ों को पोषण",
"रूखापन कम करता है",
"प्राकृतिक चमक बढ़ाता है"
]
},

{
id:3,
name:"पंच गाय तेल",
desc:"🌿 यह पोषणयुक्त तेल बालों और त्वचा दोनों के लिए लाभकारी है। नियमित मालिश से बाल मजबूत होते हैं और त्वचा में प्राकृतिक निखार आता है। सिर की त्वचा को स्वस्थ रखकर बालों की वृद्धि में सहायक होता है।",
price:199,
features:[
"गहराई से पोषण",
"बालों की वृद्धि में सहायक",
"त्वचा को मॉइस्चर देता है",
"प्राकृतिक तत्वों से निर्मित"
]
},

{
id:4,
name:"अगरबत्ती",
desc:"🕯️ प्राकृतिक सुगंध वाली अगरबत्ती जो घर और पूजा स्थल में सकारात्मक वातावरण बनाती है। ध्यान और पूजा के समय मन को शांति देती है। कम धुआँ और लंबे समय तक रहने वाली सुगंध इसकी विशेषता है।",
price:79,
features:[
"लंबे समय तक सुगंध",
"कम धुआँ",
"पूजा व ध्यान के लिए उत्तम",
"सकारात्मक वातावरण बनाती है"
]
},

{
id:5,
name:"हवन सामग्री",
desc:"🔥 शुद्ध और विशेष रूप से तैयार हवन सामग्री। धार्मिक अनुष्ठानों के लिए उपयुक्त, यह वातावरण को पवित्र और सुगंधित बनाती है। प्राकृतिक तत्वों से तैयार होने के कारण आध्यात्मिक वातावरण को और प्रभावी बनाती है।",
price:299,
features:[
"पारंपरिक विधि से निर्मित",
"पूजा हेतु श्रेष्ठ",
"शुद्ध प्राकृतिक मिश्रण",
"आध्यात्मिक ऊर्जा बढ़ाए"
]
}

];


// ===== URL SE PRODUCT ID =====
const params = new URLSearchParams(window.location.search);
const id = Number(params.get("id"));

const currentProduct = products.find(p => p.id === id);


// ===== PRODUCT LOAD =====
if(!currentProduct){
alert("Product load nahi hua!");
}else{

document.getElementById("productName").innerText =
currentProduct.name;

document.getElementById("productDesc").innerText =
currentProduct.desc;

document.getElementById("productPrice").innerText =
"कीमत: ₹" + currentProduct.price;


// FEATURES LIST SHOW
const featureBox = document.getElementById("productFeatures");

if(featureBox && currentProduct.features){
currentProduct.features.forEach(f=>{
const li=document.createElement("li");
li.innerText=f;
featureBox.appendChild(li);
});
}

updateTotal();
}


// ===== TOTAL PRICE =====
function updateTotal(){

const qtyInput=document.getElementById("quantity");
if(!qtyInput) return;

const qty=Number(qtyInput.value)||1;
const total=qty*currentProduct.price;

document.getElementById("totalPrice").innerText=
"कुल कीमत: ₹"+total;
}


// ===== QUANTITY CHANGE =====
const qtyInput=document.getElementById("quantity");
if(qtyInput){
qtyInput.addEventListener("input",updateTotal);
}


// ===== WHATSAPP ORDER =====
function orderWhatsApp(){

if(!currentProduct){
alert("Product load nahi hua!");
return;
}

const qty=Number(document.getElementById("quantity").value)||1;
const total=qty*currentProduct.price;

const phone="919170545988";

const message=
`नमस्ते,
मुझे ${currentProduct.name} ऑर्डर करना है।

मात्रा: ${qty}
कुल कीमत: ₹${total}

कृपया आगे की प्रक्रिया बताएं।`;

const url=
"https://api.whatsapp.com/send?phone="+
phone+
"&text="+encodeURIComponent(message);

window.location.href=url;
}