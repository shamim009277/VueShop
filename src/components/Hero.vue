<template>
  <div class="hero">
     <div class="container">
        <div class="row justify-content-center align-items-center">
           <div class="col-md-5 col-sm-12">
               <div class="main-content">
                  <h1 class="">Vue Shop For Developers</h1>
                  <p class="pt-1">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos numquam tempora, iure delectus totam minus quam aperiam ratione dolores magni voluptates ut necessitatibus odio ipsum fuga, voluptas ab praesentium nihil?
                </p>
               </div>
               <div class="hero-btn pt-2">
                 <button class="btn custom-btn btn-info mr-4 px-4">Explore</button>
                 <button class="btn custom-btn btn-outline-secondary px-4">Products</button>
               </div>
           </div>
           <div class="col-md-7 col-sm-12">
              <div class="graphic">
                 <img src="/img/logo.jpg" alt="">
              </div>
           </div>  
        </div>
     </div> 
  </div>
</template>

<script>
  
export default {
  name: "Hero",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
   .hero{
      padding-top:7rem;
      width:100%;
      min-height:500px;
      text-align:left;  
   }
   .main-content{
     padding-top: 4rem;
     width: 100%;
   }
   .graphic img{
     width:100%;
     float:right;
   }
</style>
