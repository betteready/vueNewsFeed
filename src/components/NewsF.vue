<template>
    <div>
        <CreateContent />
    </div>
    <div>
        <ContentList :contents="contents" />
    </div>
</template>

<script>

import ContentList from '../components/ContentList.vue'
import CreateContent from '../components/CreateContent.vue'
import getData from '@/composables/getData'

export default {
    name: 'NewsF',
    components: {
        ContentList,
        CreateContent
        },
    setup() {
        const {contents} = getData()
        return {
            contents,
        }
    }
}
</script>