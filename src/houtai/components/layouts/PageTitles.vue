<template>
    <div class="pageTitle">
        <div class="pt-left">
            <h2>{{vtitle.toUpperCase()}}</h2>
        </div>
        <div class="pt-right">
            <span class="pt-home">
                <router-link to="Overview">Overview</router-link>
            </span>
            <span class="pt-line">/</span>
            <span class="pt-page">{{vtitle}}</span>
        </div>
    </div>
</template>

<script>
    export default{
        props:['vtitle']
    }
</script>

<style scoped>
    .pageTitle{
        clear:both;
        height:55px;
    }
    .pt-left{
        float:left;
    }
    .pt-right{
        float:right;
    }
    .pt-home{
        font-size:20px;
    }
    a{
        color:#209e91;
    }
</style>