<template>
    <div class="container">
        <div class="header" :style="configData.header.style">
            <img
                    :src="configData.header.logo.src"
                    :style="configData.header.logo.style" alt="">
            <el-menu
                    class="menu-top"
                    :style="configData.content.topMenu.style"
                    @select="topMenuItemSelect"
                    :default-active="activeTop"
                    mode="horizontal">
                <el-menu-item
                        :style="configData.content.topMenu.itemStyle"
                        v-for="(item, index) of configData.content.data"
                        :index="item.name"
                        :key="index + 'nav1'">{{item.name}}
                </el-menu-item>
            </el-menu>
        </div>
        <div :style="contentStyle" class="content">
            <div
                    :style="configData.content.leftMenu.containerStyle"
                    v-if="currentData.name !== configData.content.data[0].name"
                    class="menu-left-container">
                <el-menu
                        :background-color="configData.content.leftMenu.background"
                        unique-opened
                        class="menu-left"
                        @select="leftMenuItemSelect"
                        :default-active="activeLeft">
                    <nav-item
                            v-for="(item, index) of configData.content.data"
                            :key="index + 'nav2'"
                            :nav-data="item"></nav-item>
                </el-menu>
            </div>
            <div class="main">
                <template-one
                        @go="go"
                        :templateData="currentData"
                        v-if="currentData.template === 'template1'"></template-one>
                <template-two
                        :key="currentData.name"
                        :templateData="currentData"
                        v-if="currentData.template === 'template2'"></template-two>
            </div>
        </div>
        <div class="footer" :style="configData.footer.style">
            {{configData.footer.text}}
        </div>
    </div>
</template>

<script>
import NavItem from '../components/NavItem'
import TemplateOne from '../components/TemplateOne'
import TemplateTwo from '../components/TemplateTwo'
import * as _ from 'lodash'

export default {
    name: 'Container',
    components: {
        NavItem,
        TemplateOne,
        TemplateTwo
    },
    data () {
        return {
            activeLeft: 'Startseite',
            activeTop: 'Startseite',
            configData: {},
            currentData: {},
            contentStyle: {}
        }
    },
    created() {
        this.configData = _.cloneDeep(window.staticConfig)
        this.currentData = _.cloneDeep(window.staticConfig.content.data[0])
        this.contentStyle = _.cloneDeep(window.staticConfig.content.style)
    },
    methods: {
        go (data) {
            this.activeTop = data[0]
            this.activeLeft = data[data.length - 1]
            let templateData = this.configData.content.data
            for (let item of data) {
                if (templateData.children) {
                    templateData = templateData.children
                }
                templateData = _.find(templateData, (o) => {
                    return o.name === item
                })
            }
            this.currentData = templateData
        },
        leftMenuItemSelect (index, indexArray) {
            this.activeLeft = index
            this.activeTop = indexArray[0]
            let templateData = this.configData.content.data
            for (let item of indexArray) {
                if (templateData.children) {
                    templateData = templateData.children
                }
                templateData = _.find(templateData, (o) => {
                    return o.name === item
                })
            }
            this.currentData = templateData
        },
        topMenuItemSelect (index) {
            let data = _.cloneDeep(this.configData.content.data)
            let a = _.find(data, (o) => {
                return o.name === index
            })
            this.activeTop = index
            this.activeLeft = a && a.children ? a.children[0].name : index
            this.currentData = a && a.children ? a.children[0] : a
        }
    }
}
</script>

<style lang="scss">
    @import "../assets/style/common";
    .container{
        height:100%;
        display: flex;
        flex-direction: column;
        .header{
            flex-grow: 0;
            flex-shrink: 0;
            .menu-top{
                .el-menu-item{
                    &.is-active, &:hover{
                        background-color: transparent!important;
                        border: none!important;
                        color: #febf00!important;
                    }
                }
            }
        }
        .content{
            flex-grow: 1;
            .menu-left-container{
                min-height: inherit;
                .menu-left{
                    width: 100%;
                    height: 100%;
                    .el-menu-item, .el-submenu__title{
                        font-size: 20px;
                        color: #fff;
                        text-shadow: 0 0 3px #4372c4;
                        &.is-active{
                            background: #fcaf11!important;
                        }
                    }
                }
            }
            .main{
                min-height: 100%;
                width: 100%;
                flex-grow: 1;
                @include scroll;
            }

        }
    }
</style>
