<template>
    <div>
        <div id="login">
            <el-card class="box-card">
                <div slot="header" class="clearfix">
                    <span style="color: #00B7FF; font-size: 18px;">Admin Console</span>
                </div>
                <el-form labelPosition="left" label-width="100px">
                    <el-form-item label="username" size="medium" required="true">
                        <el-input placeholder="admin"></el-input>
                    </el-form-item>
                    <el-form-item label="password" size="medium" required="true">
                        <el-input placeholder="***"></el-input>
                    </el-form-item>
                    <el-form-item size="medium">
                        <el-button>Login</el-button>
                    </el-form-item>
                </el-form>
            </el-card>
        </div>
    </div>

</template>

<script>

</script>

<style scoped>
    .el-form-item{
        margin-top: 30px;
        width: 90%;
    }
    label{
        color: #00B7FF; font-size: 16px;
    }
    #login{
        position: absolute;
        top:28%;
        left:40%;
    }

    .box-card {
        width: 480px;
    }
</style>

