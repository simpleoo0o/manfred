<template>
    <div class="template-two" :style="templateStyle.style">
        <template-item
                v-for="(item, index) of templateData.content"
                :templateData="item"
                :key="index">
        </template-item>
    </div>
</template>

<script>
import TemplateItem from './TemplateItem'
import * as _ from 'lodash'
export default {
    name: 'TemplateTwo',
    components: {
        TemplateItem
    },
    props: {
        templateData: Object
    },
    data(){
        return {
            templateStyle: {}
        }
    },
    created() {
        this.templateStyle = _.cloneDeep(window.staticConfig.templateStyle.template2)
    },
    methods: {
    }
}
</script>

<style lang="scss">
    .template-two{
        overflow: visible;
    }
</style>
