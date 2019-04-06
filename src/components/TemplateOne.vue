<template>
    <div class="template-one" :style="templateStyle.style">
        <div>
            <p :style="templateStyle.text">{{templateData.text[0]}}</p>
            <div :style="templateStyle.text">
                {{templateData.text[1]}}
                <span @click="go" :style="templateStyle.a">{{templateData.aText}}</span>
            </div>
        </div>
        <el-carousel
                :interval="4000"
                :style="templateStyle.carousel"
                type="card">
            <el-carousel-item
                    :style="templateStyle.carouselItem"
                    v-for="item in templateData.img.items"
                    :key="item">
                <img :src="item" alt="">
            </el-carousel-item>
        </el-carousel>
    </div>
</template>

<script>
import * as _ from 'lodash'
export default {
    name: 'TemplateOne',
    props: {
        templateData: Object
    },
    data(){
        return {
            templateStyle: {}
        }
    },
    created(){
        this.templateStyle = _.cloneDeep(window.staticConfig.templateStyle.template1)
    },
    methods: {
        go () {
            this.$emit('go', this.templateData.aHrefPath)
        }
    }
}
</script>

<style lang="scss">
    .template-one{
        .el-carousel__container{
            flex-grow: 1;
            img{
                height: 100%;
                width: auto;
            }
        }
    }
</style>
