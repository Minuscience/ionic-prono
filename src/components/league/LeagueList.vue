<template>
    <ion-list>
        <league-list-item v-for="league in leagues" :key="league.id" 
            :league="league" />
    </ion-list>
</template>

<script>
import { IonList } from '@ionic/vue';

export default {
    props: ["leagues"],
    components: {
        IonList
    }
    
}
</script>

<style scoped>

</style>