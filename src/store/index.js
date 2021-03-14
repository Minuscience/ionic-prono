import {createStore} from "vuex";
import axios from "axios";

const store = createStore({
    state() {
        return {
            todos: [
                {id: 1, title: "Faire le tp", description: "description comment faire le tp de dev", img: "https://hackernoon.com/hn-images/1*yffd7PaLMqVJ_30uZM4RXQ.png"},
                {id: 2, title: "Rendre le tp", description: "description comment rendre le tp de dev", img: "https://miro.medium.com/max/1200/1*lRiFVDcOgqiT-gQcrKsPeA.png"},
                {id: 3, title: "Faire le ménage", description: "faire le ménage", img: "https://lh3.googleusercontent.com/proxy/vvI2gBPF1I0XCZ3F8NmrgayHhrHA6uWulwrVsL3-TmR1VgFuVqjJb5uOIsGa2EazsJ0EneSTvfiDKKvUH9C0KMp_qOV0rXlrArc-OUIKPSoDPqb6BjfvZZwrFslO7SdT"},
            ]
        };
    },
    mutations: {
        addTodo(state, todoData) {
            //loadData = JSON.parse(todoData);
            const newTodo = {
                id: new Date().toISOString(),
                title: todoData.title,
                description: todoData.description,
                img: todoData.img
            }

            state.todos.unshift(newTodo);
        },
        setTodos(state, todosData) {
            state.todos = todosData;
        }
    },
    actions: {
        addTodo(context, todoData) {
            /*
            const datatosend = JSON.stringify(todoData);
            axios.post("https://jsonplaceholder.typicode.com/posts", datatosend)
                .then(response => {
                    context.commit("addTodo", todoData)
                });
            */
            context.commit("addTodo", todoData);
        },
        getData(context) {
            axios.get("https://jsonplaceholder.typicode.com/posts")
                .then( reponse => {
                    context.commit("setTodos", reponse.data)
                });
        }
    },
    getters: {
        todos(state){
            return state.todos;
        },
        todo(state) {
            return (todoId) => {
                return state.todos.find((td) => td.id == todoId);
            }
        }
    }
});

export default store;