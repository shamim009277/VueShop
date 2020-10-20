<template>
  <div class="home">
  	<Navbar></Navbar>
    <Hero></Hero>
    <Product></Product>
    <div class="section-about">
      <div class="container h-100">
      	 <div class="row h-100 justify-content-center align-items-center pb-5">
      	 	<div class="col-md-6 col-sm-12">
      	 		<img src="/img/about.jpg" class="rounded-circle" alt="" width="400">
      	 	</div>
      	 	<div class="col-md-6 col-sm-12">
      	 		<h1>Learn More About us</h1>
	            <p class="pt-1">
	              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur quaerat voluptate iusto? Nihil voluptas vitae veritatis magnam reprehenderit, reiciendis ex? Libero quasi natus veniam voluptatum, voluptas exercitationem ratione consectetur et!
	            </p>
	             <button class="btn custom-btn btn-outline-primary mr-4">Browse Products</button>
      	 	</div>
      	 </div>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
// @ is an alias to /src

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Product from "../section/Product";
import Footer from "../components/Footer";
export default {
  name: "Home",
  components:{
    Navbar,Hero,Product,Footer
  },
};
</script>
<style scoped lang="scss">
   .section-about{
   	  min-height:400px;
   	  text-align:left;
   }
</style>