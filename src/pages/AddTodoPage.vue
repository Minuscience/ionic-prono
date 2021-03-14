<template>
    <layout page-title="Add Todo Page" page-default-back-link="/tabs/todos">
        <create-todo-form @save-todo="saveTodo"></create-todo-form>
    </layout>
</template>

<script>
import CreateTodoForm from '../components/todos/CreateTodoForm';

export default {
    components: {
        CreateTodoForm
    },
    methods: {
        saveTodo(todoData) {
            this.$store.dispatch("addTodo", todoData);
            this.$router.replace("/tabs/todos");
        }
    }
}
</script>