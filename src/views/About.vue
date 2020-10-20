<template>
  <div class="about">
    <Navbar></Navbar>
  </div>
</template>
<script>
  import Navbar from '../components/Navbar'; 
export default {
  name: "About",
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

</style>
