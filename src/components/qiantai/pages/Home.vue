<template>
    <el-row>
        <el-col :md="2" :lg="4"><div style="border: 1px red solid;" class="grid-content bg-purple-light"></div></el-col>
        <el-col :sm="24" :md="20" :lg="16">
            <el-container :span="12" :offset="6">
                <el-header style="margin-top: 50px;">
                    <nav-header>
                    </nav-header>
                </el-header>
                <el-container>
                    <el-main>Main</el-main>
                    <el-aside>
                        <nav-sidebar></nav-sidebar>
                    </el-aside>
                </el-container>
                <el-footer>Footer</el-footer>
            </el-container>
        </el-col>
        <el-col :md="2" :lg="4"><div style="border: 1px red solid;"></div></el-col>

    </el-row>

</template>

<script>
    import NavHeader from '../layouts/NavHeader.vue'
    import NavSidebar from '../layouts/NavSidebar.vue'

    export default {
        data() {
            return {

            }
        },
        components:{
            NavHeader,
            NavSidebar
        }
    }

</script>

<style scoped>
    .el-footer {
        background-color: #B3C0D1;
        color: #333;
        text-align: center;
        line-height: 60px;
    }

    .el-aside {
        color: #333;
        text-align: center;
    }

    .el-main {
        background-color: #E9EEF3;
        color: #333;
        text-align: center;
        line-height: 160px;
    }

    body > .el-container {
        margin-bottom: 40px;
    }

    .el-container:nth-child(5) .el-aside,
    .el-container:nth-child(6) .el-aside {
        line-height: 260px;
        line-height: 260px;
    }

    .el-container:nth-child(7) .el-aside {
        line-height: 320px;
    }
</style>
