<template>
  <div class="footer">
    <div class="container">
       <div class="row justify-content-center align-items-center">
         <div class="col-md-4 col-sm-12">
            <h3 class="footer-heading text-white">Quick Menu</h3>
            <p class="pl-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat quos rem ullam, placeat amet. </p>
            <p class="pl-3"><a href="#" class="btn btn-primary text-white px-4">Read More</a></p>
         </div>
         
         <div class="col-md-4 col-sm-12">
           <h3 class="footer-heading text-white">Follow Us On</h3>
           <ul class="list-group">
             <li>
               <a href="#">About</a>
             </li>
             <li>
               <a href="#">Services</a>
             </li>
             <li>
               <a href="#">News</a>
             </li>
             <li>
               <a href="#">Blogs</a>
             </li>
           </ul>
         </div>
         <div class="col-md-4 col-sm-12">
            <h3 class=" footer-heading text-white">Quick Menu</h3>
           <ul class="list-group">
             <li>
               <i class="fab fa-facebook-square text-white ml-3"></i>
               <a href="#">Facebook</a>
             </li>
             <li>
               <i class="fab fa-twitter-square text-white ml-3"></i>
               <a href="#">Twitter</a>
             </li>
             <li>
               <i class="fab fa-instagram text-white ml-3"></i>
               <a href="#">Instagram</a>
             </li>
             <li>
               <i class="fab fa-youtube-square text-white ml-3"></i>
               <a href="#">Youtube</a>
             </li>
           </ul>
         </div>
         
       </div>
    </div>
    
  </div>
</template>

<script>
  
export default {
  name: "Footer",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
   .footer{
      padding-top:5rem;
      background-color: #000;
      min-height:400px;
      text-align:left;
      width:100%;
   }
   ul{
     list-style-type:none;
     align-item:left;
   }
   ul li{
     text-align:left;
     padding: 5px 2px;
   }
   ul li a{
     text-align:left;
     text-decoration:none;
     color: #fff !important;
     padding: 0px 10px;
   }
   ul li a:hover{
     color:#1F3E50 !important;
   }
   
</style>
