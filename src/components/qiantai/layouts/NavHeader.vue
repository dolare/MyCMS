<template>
    <div>
        <el-row class="bg-light-blue social-header">
            <el-col :md="8">
                <h1>
                    <a href="">Dolare</a>
                </h1>
            </el-col>
            <el-col :md="12" >
                <el-menu  mode="horizontal" @select="handleSelect">
                    <el-menu-item index="1">归档</el-menu-item>
                    <el-menu-item index="2">标签</el-menu-item>
                    <el-menu-item index="3">分类</el-menu-item>
                    <el-menu-item index="4">项目</el-menu-item>
                    <el-menu-item index="5">关于</el-menu-item>
                </el-menu>
            </el-col>
            <el-col :span="4" class="">
                    <ul class="social-icon-ul">
                        <li class="social-icon-list bg-white" v-for="icon in icons">
                            <a href="">
                                <img class="social-icon" :src="icon.url" alt="">
                            </a>
                        </li>
                    </ul>
            </el-col>
        </el-row>
    </div>
</template>


<script>
    export default {
        data() {
            return {
                icons:[
                    {
                        name: 'github',
                        url: '/static/images/icons/github.png'
                    },
                    {
                        name: 'linkedIn',
                        url: '/static/images/icons/linkedin.png'
                    }
                ],
                activeIndex: '1',
                activeIndex2: '1'
            }
        },
        method: {
            handleSelect(key, keyPath){
                console.log(key,  keyPath);
            }
        }
    }
</script>

<style scoped>
    ul, li{
        list-style: none;
    }
    .el-menu-item{
        letter-spacing: 3px;
        font-size: 15px;
    }
    .el-menu-item:hover{
        background-color: #FAFAFA;
        color: #3D89C1;
        border: 1px #FFF solid;
    }
    .social-icon-ul{
        float: right
    }
    .bg-light-white{
        background-color:  #e5e9f2;
    }
    .social-header{
        min-height: 50px;
    }
    .social-icon{
        width: 20px;
        height: 20px;
        display: block;
        position: relative;
        margin: 6px 6px;
    }
    .social-icon-list{
        width: 32px;
        height: 32px;
        margin: 14px 4px 9px 4px;
        display: inline-block;
    }
    .pad-2{
        padding: 2px;
    }
    .social-icon-list a{
        display: block;
        width: 32px;
        height: 32px;
        position: absolute;
        background-color: #99a9bf;
        border-radius: 5px;
    }
    .social-icon-list a:hover{
        background-color:#24292E;
    }
</style>
