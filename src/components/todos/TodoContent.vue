<template>
    <div>
        <ion-img :src="img" :alt="title"></ion-img>
        <h2 class="ion-text-center">{{ title }}</h2>
        <p>{{description}}</p>
    </div>    
</template>

<script>
import {IonImg} from '@ionic/vue'

export default {
    components: {
        IonImg
    },
    props: ["title", "description", "img"]
}
</script>