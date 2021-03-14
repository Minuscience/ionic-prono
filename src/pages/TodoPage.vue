<template>
    <layout page-title="Todos Page">
        <template v-slot:actions-right>
            <ion-button router-link="/tabs/todos/add">
                <!--<h2>+</h2>-->
                <ion-icon slot="icon-only" :icon="add"></ion-icon>
            </ion-button>
        </template>    
        <h2>Title</h2>
        <todo-list :todos="todos" />
    </layout>    
</template>

<script>
import TodoList from '../components/todos/TodoList';
import { IonButton, IonIcon } from '@ionic/vue';
import { add } from "ionicons/icons";

export default {
    data() {
        return {
            add
        }
    },
    components: {
        TodoList,
        IonButton,
        IonIcon
    },
    computed: {
        todos() {
            return this.$store.getters.todos;
        }
    },
    created() {
        this.$store.dispatch("getData");
    }
}
</script>