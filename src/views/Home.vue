<template>
    <div class="container">
        <div class="header" :style="configData.header.style">
            <img
                    :src="configData.header.logo.src"
                    :style="configData.header.logo.style" alt="">
            <el-menu
                    class="menu-top"
                    @select="topMenuItemSelect"
                    :default-active="activeTop"
                    mode="horizontal">
                <el-menu-item
                        v-for="(item, index) of configData.content"
                        :index="item.name"
                        :key="index + 'nav1'">{{item.name}}
                </el-menu-item>
            </el-menu>
        </div>
        <div class="content">
            <div class="menu-left-container">
                <el-menu
                        class="menu-left"
                        @select="leftMenuItemSelect"
                        :default-active="activeLeft"
                        background-color="#545c64"
                        text-color="#fff"
                        active-text-color="#ffd04b">
                    <nav-item
                            v-for="(item, index) of configData.content"
                            :key="index + 'nav2'"
                            :nav-data="item"></nav-item>
                </el-menu>
            </div>
            <router-view/>
        </div>
        <div class="footer">
            {{configData.footer.text}}
        </div>

    </div>
</template>

<script>
import NavItem from '../components/NavItem'
import * as _ from 'lodash'

export default {
    name: 'Container',
    components: {
        NavItem
    },
    data () {
        return {
            activeLeft: 'Startseite',
            activeTop: 'Startseite',
            configData: window.staticConfig
        }
    },
    methods: {
        leftMenuItemSelect (index, indexArray) {
            console.log(index, indexArray)
            this.activeLeft = index
            this.activeTop = indexArray[0]
        },
        topMenuItemSelect (index) {
            let data = _.cloneDeep(this.configData.content)
            let a = _.find(data, (o) => {
                return o.name === index
            })
            console.log(a, index)
            this.activeTop = index
            this.activeLeft = a && a.children ? a.children[0].name : index
        }
    }
}
</script>

<style lang="scss">
    .container{
        height: calc(100% + 50px);
        overflow: hidden;
        .header{
            .menu-top{
                flex-grow: 0;
                height: auto;
                border: none;
                background-color: transparent;
                align-self: flex-end;
                cursor: pointer;
                .el-menu-item{
                    color: #fff;
                    text-shadow: 0 0 15px #567ab1;
                    border: none;
                    font-size: 40px;
                    &.is-active, &:hover{
                        background-color: transparent;
                        border: none;
                        color: #febf00;
                    }
                }
            }
        }
        .content{
            margin: 16px 0;
            height: calc(100% - 282px);
            .menu-left-container{
                height: 100%;
                overflow-y: auto;
                overflow-x: hidden;
                width: 300px;
                .menu-left{
                    height: 100%;
                    width: 100%;
                }
            }

        }
        .footer{
            background: #2d75b6;
            height: 50px;
            line-height: 50px;
            text-align: center;
            font-size: 32px;
            color: #fff;
        }
    }
</style>
