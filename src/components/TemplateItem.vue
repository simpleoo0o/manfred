<template>
    <div class="template-item">
        <div class="blank" :style="style" v-if="templateData.type === 'blank'">
        </div>
        <div class="blank" :style="style" v-if="templateData.type === 'line'">
        </div>
        <div class="bold-text" :style="style" v-if="templateData.type === 'boldText'">
            {{templateData.text}}
        </div>
        <div class="text" :style="style" v-if="templateData.type === 'text'">
            {{templateData.text}}
        </div>
        <div class="big-bold-text" :style="style" v-if="templateData.type === 'bigBoldText'">
            {{templateData.text}}
        </div>
        <div class="img-and-text" :style="style" v-if="templateData.type === 'imgAndText'">
            <div class="img-and-text-item"
                 :style="templateStyle[templateData.type].itemStyle">
                <img
                        :style="templateStyle[templateData.type].imgStyle"
                        :src="templateData.img"
                        alt="">
                <div :style="templateStyle[templateData.type].textStyle">{{templateData.text}}</div>
            </div>
        </div>
        <div class="group" :style="style" v-if="templateData.type === 'group'">
            <template-item
                    v-for="(item, index) of templateData.settings"
                    :templateData="item"
                    :key="index"></template-item>
        </div>
        <a
                :href="templateData.hyperlink"
                class="hyperlink"
                target="_blank"
                v-if="templateData.type === 'hyperlink'"
                :style="style">
            <template-item :templateData="templateData.content"></template-item>
        </a>
        <div class="custom" :style="style" v-if="templateData.type === 'custom'" v-html="templateData.html">
        </div>
    </div>
</template>

<script>
import * as _ from 'lodash'

export default {
    name: 'TemplateItem',
    props: {
        templateData: Object
    },
    data () {
        return {
            style: {},
            templateStyle: {}
        }
    },
    created () {
        this.templateStyle = _.cloneDeep(window.staticConfig.templateStyle.template2)
        this.style = _.assign({}, this.templateStyle[this.templateData.type].style || {}, this.templateData.style || {})
    },
    methods: {}
}
</script>

<style lang="scss">
    .template-item {
    }
</style>
