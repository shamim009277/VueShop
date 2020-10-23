<template>
  <div class="shop">
  	<Navbar></Navbar>
  	<div class="container">
  	   <div class="row top-100">
  	   	  <div class="col-md-8">
  	   	  	 <div class="product">
              <div class="row">
  	   	  	 	<div class="col-lg-4 col-md-4 col-sm-6 pb-5" v-for="product in products">
		             <div class="card">
		              <img src="img/pr.jpg" class="card-img-top" alt="...">
		              <div class="card-body">
		                <h5 class="card-title">Latest Watch-A203</h5>
		                <p>
		                  <span class="fa fa-star checked"></span>
		                  <span class="fa fa-star checked"></span>
		                  <span class="fa fa-star checked"></span>
		                  <span class="fa fa-star checked"></span>
		                  <span class="fa fa-star-half-alt checked"></span>
		                  (5.6)
		                </p>
		                <h5 class="pb-2">$ 199.00</h5>
		                <a href="#" class="btn btn-outline-info">
		                  <i class="fas fa-cart-plus pr-2"></i>
		                Add to Cart</a>
		              </div>
		            </div>
                </div>
              
               </div>
  	   	  	 </div>
  	   	  </div>
  	   	  <div class="col-md-4">
  	   	  	 <div class="sidebar border">
  	   	  	 	<h4 class="title-top">Top Rated Product</h4>
  	   	  	 	<div class="top-rated-product" v-for="top in tops">
	  	   	  	 	<a href="#">
	  	   	  	 	  <div class="rated">
	  	   	  	 		<img src="img/pr.jpg" alt="...">
	  	   	  	 		<h6>Latest Watch-A735</h6>
	  	   	  	 		<p>
		                  <span class="fa fa-star checked size"></span>
		                  <span class="fa fa-star checked size"></span>
		                  <span class="fa fa-star checked size"></span>
		                  <span class="fa fa-star checked size"></span>
		                  <span class="fa fa-star-half-alt checked size"></span>
		                  (5.6)
		                </p>
		              </div>
		            </a>
  	   	  	 	</div>
  	   	  	 </div>
  	   	  </div>
  	   </div>
  	</div>
    <Footer></Footer>
  </div>
</template>

<script>
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default {
  name: "ProductShop",
  data(){
  	return{
       products:12,
       tops:7,
  	}
  },
  components:{
    Navbar
  },
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .top-rated-product{
     height: 100px;
     background-color: #fff;
     padding: 15px 5px;
  }
  .top-rated-product img{
      width:30%;
      float:left;
      margin-right:10px;   
  }
  p{
  	font-size:12px;
  	font-weight:bold;
  }
  .size{
  	font-size:8px;	
  }
  .rated{
  	text-align: left;
  }
  h6{
  	margin:0px;
  	padding:0px;
  	font-size:14px;
  	font-weight:bold;
  	color:#05736c;
  }
  a{
  	text-style-type:none;
  }
  .title-top{
  	 padding: 15px 10px;
  	 color: #0e1290;
  }
  
</style>
