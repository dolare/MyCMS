<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
*{margin:0;padding:0;}
html,body,#app,.wrapper{
    width:100%;
    height:100%;
}
body{
    font-family:"Helvetica Neue",Helvetica, "Microsoft YaHei", Arial, STHeiTi, sans-serif;
    color:#777777;
}
.gradient{
    height: 100%;
    background: #40E0D0;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to left, #FF0080, #FF8C00, #40E0D0);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to left, #FF0080, #FF8C00, #40E0D0); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

}
a{text-decoration: none}

.el-badge__content{
    border:0px !important;
}
.content{
    background: none repeat scroll 0 0 #f0f3f4;
    position: absolute;
    left: 200px;
    right: 0;
    top: 66px;
    bottom:0;
    width: auto;
    padding:25px 40px 25px 40px;
    box-sizing: border-box;
    overflow-y: scroll;
}
.clear{
    width:100%;
    height:0px;
    clear:both;
}
.ql-editor{
    background-color: #fff;
      min-height: 20em;
      padding-bottom: 1em;
    max-height: 25em;
}
.ql-toolbar{
    background-color: #fff;
}
</style>
