<template>
    <ion-item :router-link="`/tabs/pronos/${prono.id}`">  
        <ion-thumbnail slot="start">
          <ion-textarea></ion-textarea>*
        </ion-thumbnail>
        {{ prono.name }}
    </ion-item>
</template>

<script>
import { IonItem, IonThumbnail } from '@ionic/vue';

export default {
    props: ["prono"],
    components: {
        IonItem,
        IonThumbnail
    }
}
</script>

<style scoped>

</style>