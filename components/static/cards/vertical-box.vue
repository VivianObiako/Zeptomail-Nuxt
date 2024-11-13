<template>
  <div class="vertical-box-sec">
      <div class="vertical-box mb-6 text-md-left text-center">
          <span class="pri-bg">1</span>
           <h3 class="fs-18">{{verticalBoxTitle1}}</h3>
           <p class="mt-3">{{verticalBoxDesc1}}</p>
      </div><!-- /. vertical-box -->

      <div class="vertical-box mb-6  text-md-left text-center">
        <span class="pri-bg">2</span>
        <h3 class="fs-18">{{verticalBoxTitle2}}</h3>
        <p class="mt-3">{{verticalBoxDesc2}}</p>
      </div><!-- /. vertical-box -->

    <div class="vertical-box  text-md-left text-center">
      <span class="pri-bg">3</span>
      <h3 class="fs-18">{{verticalBoxTitle3}}</h3>
      <p class="mt-3">{{verticalBoxDesc3}}</p>
    </div><!-- /. vertical-box -->
  </div>


</template>

<script>
  const  carousel = process.client ? require('vue-owl-carousel'): undefined;
  export default {
    name: "vertical-box",
    components: { carousel },
    props: [
      'verticalBoxTitle1',
      'verticalBoxTitle2',
      'verticalBoxTitle3',
       'verticalBoxDesc1',
       'verticalBoxDesc2',
       'verticalBoxDesc3',
    ]
  }
</script>


<style scoped>
  .vertical-box{
    background: #F9F9F9;
    padding: 30px 30px 30px 50px;
    position: relative;
  }
  .vertical-box span{
    position: absolute;
    top: 0;
    top: 40%;
    left: -34px;
    color: white;
    font-size: 25px;
    width: 45px;
    height: 45px;
    padding-top: 3px;
    border-radius: 50%;
    text-align: center;
  }
  @media only screen and (max-width: 965px) {
    .vertical-box span{
      position: static;
      font-size: 25px;
      width: 100%!important;
      height: 45px;
      text-align: center;
      padding: 0 10px;
    }
  }

</style>
