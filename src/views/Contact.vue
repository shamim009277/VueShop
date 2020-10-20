<template>
  <div class="contact">
     <Navbar></Navbar>
     <img src="img/banner-shop.gif" alt="" class="top-100 banner">
     <div class="container">
     	<div class="row top-100">
     		<div class="col-lg-12 col-md-12">
     			<h1 class="bottom">Contact Us! </h1>
     			<form action="" method="get" accept-charset="utf-8">
     				<div class="row form-group">
		                <input type="text" class="col-md-5 mb form-control center" id="fname" placeholder="First Name*" name="fname">
		            
		                <input type="text" class="col-md-5 form-control center" id="lname" placeholder="Last Name*" name="lname">
		            </div>

		            <div class="row form-group">
		                <input type="email" class="col-md-5 mb form-control center" id="email" placeholder="Email*" name="email">
		            
		                <input type="text" class="col-md-5 form-control center" id="phone" placeholder="Phone*" name="phone">
		            </div>
		            <div class="row form-group">
		                <textarea name="message" class="col-md-11 form-control center" placeholder="Message ..."></textarea>
		            </div>
		            <button type="submit" class="btn btn-outline-info btn-md my-4">Send Us</button>
     			</form>
     		</div>
     	</div>
     </div>
  </div>
</template>

<script>
  import Navbar from '../components/Navbar';
  import Footer from '../components/Footer';
export default {
  name: "Contact",
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
  .center{
  	 margin:0 auto;
  }
  .mb{
     margin-bottom: 20px;
  }
  input{
    width: 100%;
    padding: 22px 10px;
    margin: 8px 0;
    box-sizing: border-box;
  }
</style>
