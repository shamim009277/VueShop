<template>
  <div class="checkout">
    <Navbar></Navbar>
    <img src="img/banner-shop.gif" alt="" class="top-100 banner">
    <div class="container">
      <div class="row top-100">
        <div class="col-md-6 col-sm-12 bottom">
           <div class="card">
            <div class="card-header">
              <h4>Billing Details</h4>
            </div>
            <div class="card-body">
              <form action="">
              <div class="form-group">
                <label for="fname">First Name</label>
                <input type="text" class="form-control" id="fname" placeholder="First Name*" name="fname">
              </div>
              <div class="form-group">
                <label for="fname">Last Name</label>
                <input type="text" class="form-control" id="lname" placeholder="Last name*" name="lname">
              </div>
              <div class="form-group">
                <label for="fname">Address1</label>
                <input type="text" class="form-control" id="address1" placeholder="Street Address1*" name="address1">
              </div>
              <div class="form-group">
                <label for="fname">Address2</label>
                <input type="text" class="form-control" id="address2" placeholder="Street Address2*" name="lname">
              </div>
              <div class="form-group">
                <label for="fname">Town / City*</label>
                <input type="text" class="form-control" id="city" placeholder="Town / City*" name="city">
              </div>
              <div class="form-group">
                <label for="fname">Zip*</label>
                <input type="text" class="form-control" id="zip" placeholder="Zip*" name="zip">
              </div>
              <div class="form-group">
                <label for="fname">Phone</label>
                <input type="text" class="form-control" id="phone" placeholder="phone" name="phone">
              </div>
              <div class="form-group">
                <label for="fname">Email*</label>
                <input type="email" class="form-control" id="email" placeholder="Email*" name="email">
              </div>
              <div class="form-group">
                <label for="fname">Message</label>
                <textarea name="message" class="form-control" rows="5"></textarea>
              </div>

              <button type="submit" class="btn btn-outline-info btn-md">Submit</button>
            </form>
            </div>
          </div> 
        </div> 

        <div class="col-md-6 col-sm-12 bottom">
           <div class="card">
            <div class="card-header">
              <h4>Your Order</h4>
            </div>
            <div class="card-body">
              <div class="checkout-total">
                <p class="left">Product</p>
                <p class="right">Watch-207</p>
              </div>
              <div class="checkout-total">
                <p class="left">Subtotal</p>
                <p class="right">$30.00</p>
              </div>
              <div class="checkout-total">
                <p class="left">Tax(10%)</p>
                <p class="right">$30.00</p>
              </div>
              <div class="checkout-total">
                <p class="left">Total</p>
                <p class="right">$300.00</p>
              </div>

              <div class="payment-options">
                  <ul>
                      <li>
                          <input type="radio" id="cash_on" name="payment" value="cash-on-delivery">
                          <label for="cash_on">Cash on delivery</label>
                          <div class="payment-option-text">
                              Make payment when you receive the item
                          </div>
                      </li>
                      <li>
                          <input type="radio" id="credit_card" name="payment" value="cash-payment">
                          <label for="credit_card">Credit or Debit card</label>
                          <div class="payment-option-text">
                              Credit card payment
                          </div>
                      </li>
                      <li>
                          <input type="radio" id="paypal_payment" name="payment" value="paypal">
                          <label for="paypal_payment">Paypal</label>
                          <div class="payment-option-text">
                              Use paypal to instant payment
                          </div>
                      </li>
                  </ul>
                  <a href="" class="btn btn-outline-info btn-md mt-5">Place Order</a>
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
  name: "Checkout",
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
  .container{
    text-align:left;
  }
  input{
    width: 100%;
    padding: 22px 10px;
    margin: 8px 0;
    box-sizing: border-box;
  }
.checkout-total{
   width: 100%;
   background-color: #fff;
   min-height: 40px;
   padding: 0px 10px;
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

input[type="radio"]{
  width:10%;

}
.payment-option-text{
    margin-left: 50px;
}
.payment-options{
  margin-top:30px;
}

</style>
