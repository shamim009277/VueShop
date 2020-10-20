<template>
  <div class="cart">
     <Navbar></Navbar>
     <img src="img/banner-shop.gif" alt="" class="top-100 banner">
     <div class="container top-100">
       <div class="row">
         <div class="col-md-12">
           <div class="cart-table table-responsive bottom">
              <table class="table">
                <thead>
                  <tr>
                    <th width="25%">Product</th>
                    <th width="15%">Image</th>
                    <th width="15%">Unit Value</th>
                    <th width="15%">Quantity</th>
                    <th width="15%">Total</th>
                    <th width="15%">Cancel Item</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="name">This is Product Name</td>
                    <td class="product">
                      <img class="product-img" src="img/pr.jpg" alt="...">
                    </td>
                    <td class="unit">$70.00</td>
                    <td class="qty">
                      <form action="" method="get" accept-charset="utf-8">
                         <div class="form-group">
                            <input type="number" min="1" max="50" class="form-control" id="qty" name="qty" value="1">
                          </div>
                      </form>
                    </td>
                    <td class="total">$270.50</td>
                    <td class="item"><a href=""><i class="fas fa-times"></i></a></td>
                  </tr>
                </tbody>
              </table>
           </div>
           <div class="calculation">
              <div class="row">
                 <div class="col-lg-6 col-md-6 col-sm-12 bottom">
                   <div class="card">
                      <div class="card-header">
                        <h4 class="left">Promo Code</h4>
                      </div>
                      <div class="card-body">
                        <div class="checkout-total">
                           <form action="#" method="get">
                             <div class="form-group">
                               <input type="text" name="promo" class="form-control left" placeholder="Promo Code">
                             </div>
                              <a href="" class="btn btn-outline-info btn-md mt-4 left">Check</a>
                           </form>
                        </div> 
                      </div>
                    </div>
                 </div>
                 <div class="col-lg-6 col-md-6 col-sm-12 bottom">
                   <div class="card">
                      <div class="card-header">
                        <h4 class="left">Calculate Total</h4>
                      </div>
                      <div class="card-body">
                        <div class="checkout-total">
                          <p class="left">Product</p>
                          <h5 class="right">Watch-207</h5>
                        </div>
                        <div class="checkout-total">
                          <p class="left">Subtotal</p>
                          <h5 class="right">$30.00</h5>
                        </div>
                        <div class="checkout-total">
                          <p class="left">Shipping Cost</p>
                          <h5 class="right">$30.00</h5>
                        </div>
                        <div class="checkout-total">
                          <p class="left">Tax(10%)</p>
                          <h5 class="right">$30.00</h5>
                        </div>
                        <div class="checkout-total">
                          <p class="left">Total</p>
                          <h5 class="right">$300.00</h5>
                        </div> 
                      </div>
                    </div>
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
 
 .checkout-total{
   width: 100%;
   background-color: #fff;
   min-height: 40px;
   padding: 0px 5px;
 }
 input{
    width: 100%;
    padding: 24px 10px;
    margin: 8px 0;
    box-sizing: border-box;
  }
 ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}
ul li{
  list-style-type: none;
  margin: 0;
  padding: 8px 0px;
}
thead{
  background-color:#000c00;
  color:#fff;
}
.product-img{
  width:50%;
}
tr,th{
  border:1px solid #A8A8A8;
}

.table td{
  border:1px solid #A8A8A8;
}
.name, .unit, .total,.item,.product{
  padding: 35px 15px;
}
.qty{
  padding: 15px 20px;
}
@media(max-width:780px){
  .product-img{
   width:120%;
}
}

</style>
