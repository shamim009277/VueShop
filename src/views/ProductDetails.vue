<template>
  <div class="details">
     <Navbar></Navbar>
     <img src="img/banner-shop.gif" alt="" class="banner top-100">
     <div class="container">
       <div class="row top-100 bottom">
         <div class="col-lg-7 col-md-7 col-sm-12">
            <div class="row">
               <div class="col-2">
                  <div class="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">

                    <a class="nav-link active custom-nav" id="v-pills-home-tab" data-toggle="pill" href="#v-pills-home" role="tab" aria-controls="v-pills-home" aria-selected="true">
                        <img src="img/pr.jpg" alt="..." class="sm">
                    </a>

                    <a class="nav-link custom-nav" id="v-pills-profile-tab" data-toggle="pill" href="#v-pills-profile" role="tab" aria-controls="v-pills-profile" aria-selected="false">
                        <img src="img/pr.jpg" alt="..." class="sm">
                    </a>

                    <a class="nav-link custom-nav" id="v-pills-messages-tab" data-toggle="pill" href="#v-pills-messages" role="tab" aria-controls="v-pills-messages" aria-selected="false">
                        <img src="img/pr.jpg" alt="..." class="sm">
                    </a>

                    <a class="nav-link custom-nav" id="v-pills-settings-tab" data-toggle="pill" href="#v-pills-settings" role="tab" aria-controls="v-pills-settings" aria-selected="false">
                        <img src="img/pr.jpg" alt="..." class="sm">
                    </a>

                  </div>
               </div>
               <div class="col-10 main">
                 <div class="tab-content" id="v-pills-tabContent">

                    <div class="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">
                        <img src="img/pr.jpg" alt="..." class="main-img">
                    </div>

                    <div class="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">
                        <img src="img/pr.jpg" alt="..." class="main-img">
                    </div>
                    <div class="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab">
                        <img src="img/pr.jpg" alt="..." class="main-img">
                    </div>
                    <div class="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab">
                        <img src="img/pr.jpg" alt="..." class="main-img">
                    </div>

                  </div>
               </div>
            </div>
         </div>
         <div class="col-lg-5 col-md-5 col-sm-12">
            <div class="product-details-content left">
               <h3 class="product-title text-left">This is product title</h3>
               <div class="rating text-left">
                  <p class="size">
                      <span class="fas fa-star checked"></span>
                      <span class="fas fa-star checked"></span>
                      <span class="fas fa-star checked"></span>
                      <span class="fas fa-star checked"></span>
                      <span class="fas fa-star-half-alt checked"></span>
                      (5.6)
                  </p>
               </div>
               <div class="stock text-left">Available Item</div>
               <div class="price text-left">$325.00 USD</div>
               <div class="quantity text-left">
                  <a href="#" class="quantity__minus" @click.prevent="decrement"><span>-</span></a>
                  <input name="quantity" type="text" v-model="quantity" class="quantity__input">
                  <a href="#" class="quantity__plus" @click.prevent="increment"><span>+</span></a>
               </div>
               <div class="overview text-left">
                  <strong>Overview</strong>
                  <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur quaerat voluptate iusto? Nihil voluptas vitae veritatis magnam reprehenderit, reiciendis ex? Libero quasi natus veniam voluptatum, voluptas exercitationem ratione consectetur et!</p>
                  <ul>
                    <li>Head Area</li>
                    <li>Head Area</li>
                    <li>Head Area</li>
                    <li>Head Area</li>
                  </ul>
                  <a href="#" class="btn btn-outline-info mr-4">
                      <i class="fas fa-cart-plus pr-2"></i>
                    Add to Cart</a>

                  <a href="#" class="btn btn-outline-secondary btn-md">
                    Buy Now</a>
               </div>
               <div class="social-share text-left">
                  <h5>Share:</h5>
               </div>
            </div>
         </div>
       </div>
     </div>
     <Footer></Footer>
  </div>
</template>

<script>
  import Navbar from '../components/Navbar';
  import Footer from '../components/Footer';
export default {
  name: "ProductDetails",
  data(){
     return{
        quantity:1,
     }
  },
  methods:{
     increment(){
       this.quantity++;
     },
     decrement(){
       if (this.quantity >1) {
         this.quantity--;
       } 
     }
  },
  components:{
    Navbar,Footer
  },
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .sm{
     width:100%;
  }
  .main{
    border: 1px solid #A8A8A8;
    height:300px;
  }
  .nav-pills .nav-link.active, .nav-pills .show > .nav-link {
    color: #fff;
    background-color: #fff;
    border: 1px solid #00ABBF;
  }
  .custom-nav{
    background-color: #fff;
    padding: 5px 0px;
    margin: 0px 10px;
    margin-bottom:20px;
  }
  .main-img{
    width: 80%;
    padding: 20px 10px;
    margin: 34px 5px;
  }
  .text-left{
    text-align:left;
  }
  .stock{
    font-size: 16px;
    font-weight: bold;
    color: #088a24;
    padding: 5px 10px;
  }
  .price{
    font-size: 16px;
    font-weight: bold;
    color: #014810;
    padding: 10px 10px;
  }
  .quantity{
     border: 1px solid #A8A8A8;
     width:35%;
     margin:10px 10px;
  }
  input{
    border:none;
    width:25%;
    text-align:center;
    padding:5px;
    margin: 0px 25px;
  }
  a{
    text-style-type:none;
    padding: 6px 10px;
    font-weight:bold;
    background-color:#fff;
    qurser:pointer;
  }
  .overview,.product-title,.social-share{
    padding: 10px 10px;
  }
  .rating{
    padding: 5px 10px;
  }
  .size{
    font-size:12px;
  }

</style>
