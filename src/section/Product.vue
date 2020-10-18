<template>
  <div class="product">
    <div class="container">
      <h3 class="py-5">Products List</h3>
       <div class="row justify-content-center align-items-center pb-5">
          <div class="col-lg-4 col-md-4 col-sm-6 pb-5">
            <div class="card">
              <img src="img/pr.jpg" class="card-img-top" alt="...">
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star-half-alt checked"></span>
                  (5.7)
                </p>
                <h5 class="pb-2">$ 199.00</h5>
                <a href="#" class="btn btn-outline-info">
                  <i class="fas fa-cart-plus pr-2"></i>
                Add to Cart</a>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-4 col-sm-6 pb-5">
             <div class="card">
              <img src="img/pr.jpg" class="card-img-top" alt="...">
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star-half-alt checked"></span>
                  (5.7)
                </p>
                <h5 class="pb-2">$ 199.00</h5>
                <a href="#" class="btn btn-outline-info">
                  <i class="fas fa-cart-plus pr-2"></i>
                Add to Cart</a>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-4 col-sm-6 pb-5">
             <div class="card">
              <img src="img/pr.jpg" class="card-img-top" alt="...">
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
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
</template>

<script>
  
export default {
  name: "Product",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
   .product{
      width:100%;
      background-color:#F9F9F9;
      
   }
   
</style>
