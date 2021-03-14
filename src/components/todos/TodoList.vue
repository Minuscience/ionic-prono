<template>
    <ion-list>
        <todo-list-item v-for="todo in todos" :key="todo.id" 
            :todo="todo" />
    </ion-list>
</template>

<script>
import { IonList } from '@ionic/vue';
import TodoListItem from './TodoListItem.vue';

export default {
    props: ["todos"],
    components: {
        IonList,
        TodoListItem
    }
    
}
</script>

<style scoped>

</style>