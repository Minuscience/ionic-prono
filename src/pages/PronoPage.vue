<template>
    <layout page-title="Pronos Page">
        <template v-slot:actions-right>
            <ion-button router-link="/tabs/pronos/add">
                <!--<h2>+</h2>-->
                <ion-icon slot="icon-only" :icon="add"></ion-icon>
            </ion-button>
        </template>    
        <h2>Title</h2>
        <prono-list :pronos="pronos" />
    </layout>    
</template>

<script>
import PronoList from '../components/pronos/PronoList';
import { IonButton, IonIcon } from '@ionic/vue';
import { add } from "ionicons/icons";

export default {
    data() {
        return {
            add
        }
    },
    components: {
        PronoList,
        IonButton,
        IonIcon
    },
    computed: {
        pronos() {
            return this.$store.getters.pronos;
        }
    },
    created() {
        this.$store.dispatch("getData");
    }
}
</script>