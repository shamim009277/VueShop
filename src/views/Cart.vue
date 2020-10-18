<template>
  <div class="cart">
     <Navbar></Navbar>
     <img src="img/banner-shop.gif" alt="" class="top-100 banner">
     <div class="container">
       <div class="row">
         <div class="col-md-12">
           <div class="cart-table">
              <table class="table table-striped">
                <thead>
                  <tr>
                    <th>Product</th>
                    <th>Image</th>
                    <th>Unit Value</th>
                    <th>Quantity</th>
                    <th>Total</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>data</td>
                    <td>data</td>
                    <td>data</td>
                    <td>data</td>
                    <td>data</td>
                  </tr>
                </tbody>
              </table>
           </div>
           <div class="calculation">
              <div class="row">
                 <div class="col-md-6">
                   <p>Promo code</p>
                 </div>
                 <div class="col-md-6">
                   <p>Calculate</p>
                 </div>
              </div>
           </div>
         </div>
       </div>
     </div>
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue';   
export default {
  name: "Cart",
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
 .banner{
    width:100%;
    height:230px;
 }
</style>
