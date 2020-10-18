<template>
  <div class="blog">
    <Navbar></Navbar>
    <img src="img/banner-shop.gif" alt="" class="top-100 banner">
    <div class="container">
       <div class="row top-50">
          <div class="col-md-4">
             <div class="sidebar mb-5">
                <h2>Latest Post Title</h2>
                <div class="sidebar-post">
                   <h3><a href="">This is Blog Title</a></h3>
                   <h3><a href="">This is Blog Title</a></h3>
                   <h3><a href="">This is Blog Title</a></h3>
                   <h3><a href="">This is Blog Title</a></h3>
                   <h3><a href="">This is Blog Title</a></h3>
                   <h3><a href="">This is Blog Title</a></h3>
                </div>
             </div>
             <div class="sidebar">
                <h3>Social Pages</h3>
                <div class="social-follow">
                    <a href="" class="facebook-bg"><i class="fab fa-facebook-f"></i></a>
                    <a href="" class="twitter-bg"><i class="fab fa-twitter"></i></a>
                    <a href="" class="instagram-bg"><i class="fab fa-instagram"></i></a>
                    <a href="" class="linkedin-bg"><i class="fab fa-linkedin"></i></a>
                    <a href="" class="pinterest-bg"><i class="fab fa-pinterest"></i></a>
                </div>
             </div>
          </div>
          <div class="col-md-8">
             <div class="product">
              <div class="blog-post bottom">
                 <img src="img/blog.jpg" alt="" class="img">
                 <h2>Get Best Product From Us</h2>
                 <h3>12th May, 2020 || <span class="admin">John Doe</span></h3> 
                 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur quaerat voluptate iusto? Nihil voluptas vitae veritatis magnam reprehenderit, reiciendis ex? Libero quasi natus veniam voluptatum ......</p> 
                 <button class="btn btn-outline-info px-4">Read More</button> 
              </div>
              <div class="blog-post bottom">
                 <img src="img/blog.jpg" alt="">
                 <h2>Get Best Product From Us</h2>
                 <h3>12th May, 2020 || <span class="admin">John Doe</span></h3>
                 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur quaerat voluptate iusto? Nihil voluptas vitae veritatis magnam reprehenderit, reiciendis ex? Libero quasi natus veniam voluptatum ......</p> 
                 <button class="btn btn-outline-info px-4">Read More</button> 
              </div>
              <div class="blog-post bottom">
                 <img src="img/blog.jpg" alt="">
                 <h2>Get Best Product From Us</h2>
                 <h3>12th May, 2020 || <span class="admin">John Doe</span></h3> 
                 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur quaerat voluptate iusto? Nihil voluptas vitae veritatis magnam reprehenderit, reiciendis ex? Libero quasi natus veniam voluptatum ......</p> 
                 <button class="btn btn-outline-info px-4">Read More</button> 
              </div>
             </div>
             <nav aria-label="Page navigation example">
                <ul class="pagination pb-5">
                  <li class="page-item disabled">
                    <a class="page-link" href="#" tabindex="-1" aria-disabled="true">Previous</a>
                  </li>
                  <li class="page-item active" aria-current="page">
                    <span class="page-link">
                      1
                      <span class="sr-only">(current)</span>
                    </span>
                  </li>
                  <li class="page-item"><a class="page-link" href="#">2</a></li>
                  <li class="page-item"><a class="page-link" href="#">3</a></li>
                  <li class="page-item">
                    <a class="page-link" href="#">Next</a>
                  </li>
                </ul>
              </nav>
          </div>
       </div>
       
    </div>
  </div>
</template>

<script>
  import Navbar from '../components/Navbar';
export default {
  name: "Blog",
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
   .blog-post{
      border: 1px solid #A7EFEA;
      padding: 20px 20px;
      text-align: left;
      border-radius: 5px;
    }
    .banner{
       height:220px;
    }
    img{
      width:100%;
    }
    .blog-post img{
       width:100%;
       height:230px;   
    }
    .sidebar{
      border: 1px solid #A7EFEA;
      border-radius: 5px;
      padding: 20px 20px;
    }
    .social-follow a{
      font-size: 24px;
      display: inline-block;
      padding: 4px 4px;
      border-radius: 3px;
      margin: 8px;
    }
    .social-follow a i{
      padding: 5px 10px;
      color:white;
    }
    h2{
    font-size: 24px;
    font-weight: bold;
    font-style: italic;
    font-family: 'Font Awesome 5 Brands';
    padding-top: 10px;
    margin-bottom:0px;
    padding-bottom:0px;
    }
    h3{
      font-size: 14px;
      font-weight: bold;
      font-style: italic;
      color:green;
    }
    .sidebar-post h3{
       text-align:left;
       padding: 0px 5px;
       font-size: 16px;
       font-family: 'Font Awesome 5 Brands';
       margin-top:5px;
    }
    .sidebar-post h3 a{
      color: #560303;
      text-decoration:none;
    }

    .sidebar h2{
      margin: 0px;
      padding: 0px;
      border-bottom: 2px solid #7d0404;
      padding-bottom: 4px;
    }
    
</style>