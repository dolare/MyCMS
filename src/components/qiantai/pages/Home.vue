<template>
    <div class="gradient">
        <el-row style="padding-top: 80px;" >
            <el-col :md="2" :lg="4" :xl="6"><div style="visibility: hidden">left aside</div></el-col>
            <el-col :sm="24" :md="20" :lg="16" :xl="12" class="main_page">
                <el-container :span="12" :offset="6" >
                    <el-header>
                        <nav-header>
                        </nav-header>
                    </el-header>
                    <el-container>
                        <el-main>
                            <article-content></article-content>
                        </el-main>
                        <el-aside >
                            <nav-sidebar></nav-sidebar>
                        </el-aside>
                    </el-container>
                    <div id="footer">
                        <home-footer></home-footer>
                    </div>
                </el-container>
            </el-col>
            <el-col :md="2" :lg="4" :xl="6"><div style="visibility: hidden">right aside</div></el-col>
        </el-row>
    </div>

</template>

<script>
    import NavHeader from '../layouts/NavHeader.vue'
    import NavSidebar from '../layouts/NavSidebar.vue'
    import HomeFooter from '../layouts/Footer.vue'
    import ArticleContent from '../layouts/ArticleContent.vue'

    export default {
        data() {
            return {

            }
        },
        components:{
            NavHeader,
            NavSidebar,
            HomeFooter,
            ArticleContent
        }
    }

</script>

<style scoped>
    .main_page{
        background-color: white;
    }
    #footer {
        background-color: #222222;
        color: #333;
    }

    .el-aside {
        color: #333;
        text-align: center;
        max-width: 200px;
    }

    .el-main {
        color: #333;
        text-align: center;
        line-height: 160px;
    }

    body > .el-container {
        margin-bottom: 40px;
    }

</style>
