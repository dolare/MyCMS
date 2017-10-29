<template>
    <div>
        <el-autocomplete
            popper-class="my-autocomplete"
            v-model="state3"
            :fetch-suggestions="querySearch"
            placeholder="Search"
            @select="handleSelect"
            size="mini">
            <i
                class="el-icon-edit el-input__icon"
                slot="suffix"
                @click="handleIconClick">
            </i>
            <template slot-scope="props">
                <div class="value">{{ props.item.value }}</div>
                <span class="link">{{ props.item.link }}</span>
            </template>
        </el-autocomplete>

        <h4 class="catigory-title">分类</h4>

        <el-tree :data="categories" :props="defaultProps" @node-click="handleNodeClick">

        </el-tree>

        <h4 class="date-title">归档</h4>
        <el-tree :data="dates" :props="defaultProps" @node-click="handleNodeClick">

        </el-tree>

    </div>
</template>

<script>
    export default {
        data() {
            return {
                msg: 'hellow vue',
                categories: [{
                    label: 'Level one 1',
                    children: [{
                        label: 'Level two 1-1',
                        children: [{
                            label: 'Level three 1-1-1'
                        }]
                    }]
                }],
                dates: [{
                    label: 'Level one 1',
                    children: [{
                        label: 'Level two 1-1',
                        children: [{
                            label: 'Level three 1-1-1'
                        }]
                    }]
                }]
            }
        },
        method: {

        }
    }
</script>


<style scoped="">
    ul, li{
        list-style: none;
    }
    .el-tree{
        margin: 0 auto;
        position: relative;
        display: inline-block;
    }
    .el-autocomplete{
        margin-top: 50px;
    }
    h4{
        margin-top: 60px;
        margin-bottom: 10px;
        position: relative;
        left: -50px;
    }
</style>
