<template>

    <footer>
        <el-row>
            <el-col :span="4" offset="1" class="link-block">
                <h1 class="text-h1">链接</h1>
                <ul>
                    <li v-for="o in 4"  class="link-list">
                        <a href="" class="text">{{'List item ' + o }}</a>
                    </li>
                </ul>
            </el-col>
            <el-col :span="4" offset="1" class="link-block">
                <h1 class="text-h1 hide">链接</h1>
                <ul>
                    <li v-for="o in 4"  class="link-list">
                        <a href="" class="text">{{'List item ' + o }}</a>
                    </li>
                </ul>
            </el-col>
            <el-col :span="4" offset="1" class="link-block">
                <h1 class="text-h1 hide" >链接</h1>
                <ul>
                    <li v-for="o in 4"  class="link-list">
                        <a href="" class="text">{{'List item ' + o }}</a>
                    </li>
                </ul>
            </el-col>
            <el-col :span="4" offset="1" class="link-block">
                <h1 class="text-h1 hide" >链接</h1>
                <ul>
                    <li v-for="o in 4"  class="link-list">
                        <a href="" class="text">{{'List item ' + o }}</a>
                    </li>
                </ul>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="24" id="copyright">
                <span>Designed by Dolare with Vue2 + Express, Copyright © 2017 Dolare</span>
            </el-col>
        </el-row>
    </footer>


</template>

<style>
    #copyright{
        background-color: #111111;
        height: 60px;
        padding-left: 100px;
        line-height: 60px;
    }
    #copyright span{
        font-size: 12px;
        color: white;
        display: inline-block;
        height: inherit;
    }
    .hide{
        visibility: hidden;
    }
    .link-block{
        margin: 40px 30px;

    }
    .link-list{
        border-top: 1pt solid #333;
        border-bottom: 1pt solid #333;
        vertical-align: middle;
        padding: 5px;
        display: list-item;
    }
    .link-list a{
        margin: auto auto;
        position: relative;
    }
    .text-h1{
        color: #40F2FF;
        letter-spacing: 4px;
        margin-bottom: 20px;
    }
    .text {
        font-size: 12px;
        color: #FAFAFA;
    }
    .text:hover{
        font-size: 12px;
        color: #40F2FF;
        text-decoration: underline;
    }

    ul, li{
        list-style: none;
    }
</style>
