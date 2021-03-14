<template>
    <form @submit.prevent="submitForm">
        <ion-list>
            <ion-item>
                <ion-label position="floating" >Titre</ion-label>  
                <ion-input v-model="inputTitle" type="text" /> 
            </ion-item>    

            <ion-item>
                <ion-label position="floating" >Image URL</ion-label>  
                <ion-input v-model="inputImg" type="url" /> 
            </ion-item>

            <ion-item>
                <ion-label position="floating" >Description</ion-label>  
                <ion-textarea cols="5" v-model="inputDescription" ></ion-textarea> 
            </ion-item>

        </ion-list>

        <ion-button type="submit" expand="full" color="success" >Save</ion-button>
    </form>
</template>

<script>
import { IonList, IonItem, IonLabel, IonInput, IonTextarea, IonButton } from '@ionic/vue';

export default {
    data() {
        return {
            inputTitle: "",
            inputDescription: "",
            inputImg: ""
        }
    },
    emits: ["save-todo"],
    components: {
        IonList,
        IonItem,
        IonLabel,
        IonInput,
        IonTextarea,
        IonButton
    },
    methods: {
        submitForm() {
            const todoData = {
                title: this.inputTitle,
                img: this.inputImg,
                description: this.inputDescription
            };
            this.$emit("save-todo", todoData);
        }
    }
}
</script>