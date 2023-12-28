

const getProduct = fetch("product.json")
.then(response => response.json())
.then(product => console.log(product))

const productItem = () => {
    productHtml= `
    <div class="image-card">
            <div class="top-image">
                <img src="${product.imgSource1}" alt="">
            </div>
            <div class="bottom-image">
                <img src="${product.imgSource1}" alt="">
                <img src="${product.imgSource2}" alt="">
            </div>
        </div>
        <div class="product-description">
            <div class="product-name">
                <div class="product-header">
                    <h2>${product.description}</h2>
                    <h3>${product.description2}</h3>
                    <div class="barcode-number">${product.barcode}</div>
                </div>
            </div>
            <div class="rate-price">
                <div class="product-price">
                    <h3>${product.price}</h3>
                </div>
                <p>
                    
                    <a><span>Henüz değerlendirme yapılmamış</span></a>
                </p>
            </div>
            <div class="discount">
                <p>Sepette Ek %10 İndirim</p>
            </div>
            <div class="product-quantity">
                <div class="default">
                    <p>Adet</p>
                    
                </div>
                <div class="quantity">
                    <div>1</div>
                    <div>2</div>
                    <div>3</div>
                    <div>4</div>
                    <div>5</div>
                    
                </div>
                <div class="basket">
                    <div class="basket-button">
                        <button>SEPETE EKLE</button>
                    </div>
                   
                </div>
                <div class="delivery">
                    <h4>Hızlı Gönderi</h4>
                    <p>Tahmini Kargoya Teslim: 8-9 Aralık</p>
                    <p>Kargo Bedava</p>
                    
                </div>
                <div class="delivery-info">
                    <div class="delivery1">
                        
                        <p>30 Gün Koşulsuz İade</p>
                    </div>
                    <div class="delivery2">
                        
                        <p>Mağazadan Değişim</p>
                    </div>
                    <div class="delivery3">
                        
                        <p>%100 Orijinal Ürün Garantisi</p>
                    </div>
                </div>
            </div>
            <div class="product-info">
                <ul>
                    <h3>Ürün Özellikleri</h3>
                    <li>${product.info}</li>
                </ul>
            </div>

        </div>`
}

let modal = document.getElementById("myModal");
let img = document.getElementById("myImg");
let modalImg = document.getElementById("image");

img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
 
}
let span = document.getElementsByClassName("close")[0];

span.onclick = function() { 
  modal.style.display = "none";
}

let sliders = document.getElementsByClassName("sliderImg");
let sliderCount = sliders.length;
let sliderNumber = 0;
let i=0;

sliderShow(sliderNumber);

function afterImg() {
    sliderNumber ++;
    sliderShow(sliderNumber);
}

function beforeImg() {
    sliderNumber --;
    sliderShow(sliderNumber);
}

function sliderShow(sliderNumbers) {
    sliderNumber = sliderNumbers;

    if (sliderNumbers >= sliderCount) sliderNumber = 0;
    if (sliderNumbers < 0) sliderNumber = sliderCount-1

    for (i=0; i<sliderNumbers; i++) {
        sliders[i].style.display = "none";
    }

    sliders[sliderNumber].style.display = "block";
}