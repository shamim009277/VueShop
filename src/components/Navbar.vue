<template>
  <div class="hello">
      <nav class="navbar fixed-top custom-nav navbar-expand-lg navbar-light bg-light">
      <div class="container">
        <router-link class="navbar-brand title" to="/">VueShop</router-link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item">
              <router-link class="nav-link" to="/">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/products">Products</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/about">About</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/blogs">Blog</router-link>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Pages
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <router-link class="dropdown-item" to="/cart">Cart Page</router-link>
                <router-link class="dropdown-item" to="/checkout">Checkout</router-link>
                <router-link class="dropdown-item" to="/contact">Contact</router-link>
                <router-link class="dropdown-item" to="/product_details">Product Details</router-link>
              </div>
            </li>  
          </ul>
          <form class="form-inline my-2 my-lg-0">
            <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
            <a class="btn btn-outline-success my-2 my-sm-0 mr-5" data-toggle="modal" data-target="#login">Get Starte</a>
          </form>
        </div>
        <a href="#" class="btn btn-outline-info mr-4">
            <i class="fas fa-cart-plus pr-2"><span class="badge badge-light"><b> 3</b></span></i>
        </a> 
      </div>
      </nav>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
   @media (min-width: 992px) {  
    .navbar.custom-nav{
      padding-top:16px;
      padding-bottom:16px;
      background-color: #fff !important;
    }
   }
</style>
