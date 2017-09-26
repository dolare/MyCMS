<template>
    <div class="sidebar">
        <el-menu :default-active="onRoutes" class="el-menu-vertical-demo" theme="dark" unique-opened router>
            <el-menu-item index="DashBoard">
               
                    <span class="sb-icon"><i class="material-icons"></i></span>
                    <span class="sb-cn">Overview</span>
            </el-menu-item>

            <el-submenu index="2">
                <template slot="title">       
                    <span class="sb-icon"><i class="material-icons"></i></span>
                    <span class="sb-cn">用户管理</span>
                </template>
                <el-menu-item index="administrators">管理员</el-menu-item>
                <el-menu-item index="userGroup">用户组</el-menu-item>
                <el-menu-item index="permissions">权限设置</el-menu-item>
                <el-menu-item index="users">普通用户</el-menu-item>   
            </el-submenu>

            <el-submenu index="3">
                <template slot="title">       
                    <span class="sb-icon"><i class="material-icons"></i></span>
                    <span class="sb-cn">文档管理</span>
                </template>
                <el-menu-item index="blogs">日志</el-menu-item>
                <el-menu-item index="categories">分类</el-menu-item>
                <el-menu-item index="tags">标签</el-menu-item>
                <el-menu-item index="comments">留言</el-menu-item>
            </el-submenu>

            <el-submenu index="4">
                <template slot="title">       
                    <span class="sb-icon"><i class="material-icons"></i></span>
                    <span class="sb-cn">系统管理</span>
                </template>
                <el-menu-item index="announcement">公告</el-menu-item>
                <el-menu-item index="systemLogs">系统日志</el-menu-item>
                <el-menu-item index="dataBackup">数据备份</el-menu-item>
                <el-menu-item index="notifications">消息管理</el-menu-item>
                <el-menu-item index="settings">网站配置</el-menu-item>
            </el-submenu>

            <el-submenu index="4">
                <template slot="title">       
                    <span class="sb-icon"><i class="material-icons"></i></span>
                    <span class="sb-cn">Components</span>
                </template>
                <el-menu-item index="EditorPage">Editor</el-menu-item>
                <el-menu-item index="MarkdownPage">Markdown</el-menu-item>
                <el-menu-item index="TodoList">TodoList</el-menu-item>
            </el-submenu>

            <el-submenu index="3">
                <template slot="title">
                    <span class="sb-icon"><i class="material-icons"></i></span>
                    <span class="sb-cn">charts</span>
                </template>
                <el-menu-item index="BasicCharts"> BasicCharts</el-menu-item>
            </el-submenu>

            <el-submenu index="4">
                <template slot="title">
                    <span class="sb-icon"><i class="material-icons"></i></span>
                    <span class="sb-cn">Form Elements</span>
                </template>
                <el-menu-item index="FormInput"> Form Inputs</el-menu-item>
                <el-menu-item index="FormLayouts">  Form Layouts</el-menu-item>
            </el-submenu>

             <el-submenu index="5">
                <template slot="title">
                    <span class="sb-icon"><i class="material-icons"></i></span>
                    <span class="sb-cn">Tables</span>
                </template>
                <el-menu-item index="BasicTables"> Basic Tables</el-menu-item>
                
            </el-submenu>


 

 
            
        </el-menu>
    </div>
</template>
<script>
    export default {
        computed:{
            onRoutes(){
                return this.$route.path.replace('/','');
            }
        }
    }
</script>

<style scoped>
    .sidebar{
        display: block;
        position: absolute;
        width: 200px;
        left: 0;
        top: 66px;
        bottom:0;
        background: #324157;
       
    }
    .sidebar > ul {
        height:100%;
    }
   .el-menu-item, .el-submenu__title{
       font-size:14px;
     
   }
   
    .material-icons {font-size:12px;}
</style>