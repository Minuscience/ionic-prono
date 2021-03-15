<template>
    <layout page-title="Add Prono Page" page-default-back-link="/tabs/pronos">
        <create-prono-form @save-prono="saveProno"></create-prono-form>
    </layout>
</template>

<script>
import CreatePronoForm from '../components/pronos/CreatePronoForm';

export default {
    components: {
        CreatePronoForm
    },
    methods: {
        saveProno(pronoData) {
            this.storeProno.dispatch("addProno", pronoData);
            this.$router.replace("/tabs/pronos");
        }
    }
}
</script>