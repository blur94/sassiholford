// Declare Variables
let fName = $('#fname'),
  password = $('#password'),
  email = $('#email'),
  phoneNumber = $('#phoneNum'),
  regBtn = $('#regBtn'),
  productIndex,
  products = [],
  globalIpAddress="http://159.65.21.42:9000";


  


  loadProducts()


  loadProducts()

function loadProducts() {
    // load products
    $.ajax({
      type: 'GET',
      url: `${globalIpAddress}/products`,
      success: function (response) {
        products = response;
        let rows = '';
        let sliderData=""
        for (let index = 0; index < products.length; index++) {
  
            if(products[index]['category']== "balm_slider" || products[index]['category']== "balm_shop_prod" ){
              rows += ` 
              <div class="shop4_cat1">
            <div class="cat_img">
                <div class="cat_img11">
                    <a href="product.html"><img src="${globalIpAddress}${products[index]['image']}" alt="" title="View ${products[index]['name']}"></a>
                </div>
                <div class="cat_img12">
                    <a href="product.html"><img src="${globalIpAddress}${products[index]['image']}" alt="" title="View ${products[index]['name']}"></a>
                </div>
            </div>
            <div class="cat_desc_price">
                <a href="product.html" title="View St Tropez Dress">
                    <h5>${products[index]['name']}</h5>
                </a>
                <p>&pound;${products[index]['price']}</p>
            </div>
        </div>`;
            }
  
            if(products[index]['category']== "balm_slider"){
              sliderData+=``
            }
         
        }
  
        $('#shopView').html(rows);
        $('#sliderSection').html(sliderData)
      },
      error: function (err) {
        console.log(err);
      },
    });
}

// Shop Image 1
$('.cat_img12').hide()
$('.cat_img11').on('mouseenter', function () {
    $('.cat_img12').show()  
    $('.cat_img11').hide()
    
})
$('.cat_img12').on('mouseleave', function () {
    $('.cat_img11').show()  
    $('.cat_img12').hide()  
})