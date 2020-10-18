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
  	   	  	 	<h1>sidebar</h1>
  	   	  	 </div>
  	   	  </div>
  	   </div>
  	</div>
  </div>
</template>

<script>
import Navbar from "../components/Navbar";

export default {
  name: "ProductShop",
  data(){
  	return{
       products:10,
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

  
</style>
