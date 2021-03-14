<template>
    <layout :page-title="loadedProno ? loadedProno.title : 'Chargement ...'" page-default-back-link="/pronos">
        <prono-content :title="loadedProno.title" :description="loadedProno.description"
             :img="loadedProno.img" />
    </layout>
</template>

<script>
import PronoContent from '../components/pronos/PronoContent';

export default {
    components: {
        PronoContent
    },
    data() {
        return {
            pronoId: this.$route.params.id
        }
    },
    computed: {
        loadedProno() {
            return this.$store.getters.prono(this.pronoId);
        }
    },
    watch: {
        '$route'(currentRoute) {
            this.pronoId = currentRoute.params.id
        }
    }
}
</script>