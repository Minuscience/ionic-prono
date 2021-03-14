<template>
    <layout :page-title="loadedTodo ? loadedTodo.title : 'Chargement ...'" page-default-back-link="/todos">
        <todo-content :title="loadedTodo.title" :description="loadedTodo.description"
             :img="loadedTodo.img" />
    </layout>
</template>

<script>
import TodoContent from '../components/todos/TodoContent';

export default {
    components: {
        TodoContent
    },
    data() {
        return {
            todoId: this.$route.params.id
        }
    },
    computed: {
        loadedTodo() {
            return this.$store.getters.todo(this.todoId);
        }
    },
    watch: {
        '$route'(currentRoute) {
            this.todoId = currentRoute.params.id
        }
    }
}
</script>