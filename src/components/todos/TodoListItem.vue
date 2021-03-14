<template>
    <ion-item :router-link="`/tabs/todos/${todo.id}`">  
        <ion-thumbnail slot="start">
            <ion-img :src="todo.img" :alt="todo.title" />
        </ion-thumbnail>
        {{ todo.title }}
    </ion-item>
</template>

<script>
import { IonItem, IonImg, IonThumbnail } from '@ionic/vue';

export default {
    props: ["todo"],
    components: {
        IonItem,
        IonImg,
        IonThumbnail
    }
}
</script>

<style scoped>

</style>