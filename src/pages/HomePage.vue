<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-title>Home Page</ion-title>
            </ion-toolbar>
        </ion-header>

        <ion-content>
            <h2>Ceci est la page d'accueil.</h2>
        </ion-content>
    </ion-page>
</template>

<script>
import { IonContent, IonPage, IonHeader, IonToolbar, IonTitle } from "@ionic/vue"

export default {
    components: {
        IonContent,
        IonPage,
        IonHeader,
        IonToolbar,
        IonTitle
    }
}
</script>