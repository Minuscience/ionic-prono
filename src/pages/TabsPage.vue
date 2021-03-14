<template>
    <ion-page>
        <ion-tabs>
            <ion-tab-bar slot="bottom">
                <ion-tab-button tab="home" href="/tabs/home">
                    <ion-icon :icon="home"></ion-icon>
                    <ion-label>Home</ion-label>
                </ion-tab-button>

                <ion-tab-button tab="todos" href="/tabs/todos">
                    <ion-icon :icon="list"></ion-icon>
                    <ion-label>Todos</ion-label>
                </ion-tab-button>

                <ion-tab-button tab="account" href="/tabs/account">
                    <ion-icon :icon="personCircle"></ion-icon>
                    <ion-label>Account</ion-label>
                </ion-tab-button>
            </ion-tab-bar>
        </ion-tabs>
    </ion-page>
</template>

<script>
import { IonPage, IonTabs, IonTabBar, IonTabButton, IonLabel, IonIcon } from '@ionic/vue'
import { home, list, personCircle } from "ionicons/icons";

export default {
    data() {
        return {
            home,
            list,
            personCircle
        }
    },
    components: {
        IonPage,
        IonTabs,
        IonTabBar,
        IonTabButton,
        IonLabel,
        IonIcon
    }
}
</script>