<template>
    <form @submit.prevent="submitForm">
        <ion-list>
            <ion-item>
                <ion-label position="floating" >Titre</ion-label>  
                <ion-input v-model="inputTitle" type="text" /> 
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
                description: this.inputDescription
            };
            this.$emit("save-todo", todoData);
        }
    }
}
</script>