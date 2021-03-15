import {createStore} from "vuex";
import axios from "axios";

const store = createStore({
    state() {
        return {
            todos: [
                {
                    id: 1,
                    title: "Faire le tp",
                    description: "description comment faire le tp de dev",
                    img: "https://hackernoon.com/hn-images/1*yffd7PaLMqVJ_30uZM4RXQ.png"
                },
                {
                    id: 2,
                    title: "Rendre le tp",
                    description: "description comment rendre le tp de dev",
                    img: "https://miro.medium.com/max/1200/1*lRiFVDcOgqiT-gQcrKsPeA.png"
                },
                {
                    id: 3,
                    title: "Faire le ménage",
                    description: "faire le ménage",
                    img: "https://lh3.googleusercontent.com/proxy/vvI2gBPF1I0XCZ3F8NmrgayHhrHA6uWulwrVsL3-TmR1VgFuVqjJb5uOIsGa2EazsJ0EneSTvfiDKKvUH9C0KMp_qOV0rXlrArc-OUIKPSoDPqb6BjfvZZwrFslO7SdT"
                },
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
//
// const storeProno = createStore({
//     state() {
//         return {
//             // type: [
//             //     {id: 1, type: "FOOTBALL"},
//             //     {id: 2, type: "TENNIS"},
//             //     {id: 3, type: "BASKETBALL"},
//             // ],
//             pronos: [
//                 {
//                     "id": 1,
//                     "name": "Match de dingue",
//                     "type": "FOOTBALL",
//                     "typeId": 1,
//                     "competition": "Ligue 1",
//                     "competitionId": 1,
//                     "analyse": "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il n'a pas fait que survivre cinq",
//                     "cote": 1.8,
//                     "resultat": "bon match de cette equipe",
//                     "res_prono": "1"
//                 },
//                 {
//                     "id": 2,
//                     "name": "Match ouf",
//                     "type": "TENNIS",
//                     "typeId": 2,
//                     "competition": "ATP Sydney",
//                     "competitionId": 2,
//                     "analyse": "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il n'a pas fait que survivre cinq",
//                     "cote": 1.3,
//                     "resultat": "bon match de se joueur",
//                     "res_prono": "2"
//                 },
//                 {
//                     "id": 3,
//                     "name": "Match de dingue",
//                     "type": "BASKETBALL",
//                     "typeId": 3,
//                     "competition": "Serie A",
//                     "competitionId": 3,
//                     "analyse": "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il n'a pas fait que survivre cinq",
//                     "cote": 1.6,
//                     "resultat": "bon match de cette equipe mais match nulle",
//                     "res_prono": "N"
//                 },
//                 {
//                     "id": 4,
//                     "name": "Match de dingue 1",
//                     "type": "FOOTBALL",
//                     "typeId": 1,
//                     "competition": "Serie A",
//                     "competitionId": 3,
//                     "analyse": "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il n'a pas fait que survivre cinq",
//                     "cote": 1.9,
//                     "resultat": "bon match de cette equipe",
//                     "res_prono": "2"
//                 }
//             ]
//         };
//     },
//     mutations: {
//         addProno(state, pronoData) {
//             //loadData = JSON.parse(todoData);
//             const newTodo = {
//                 id: pronoData.id,
//                 name: pronoData.name,
//                 type: pronoData.type,
//                 typeId: pronoData.typeId,
//                 competition: pronoData.competition,
//                 competitionId: pronoData.competitionId,
//                 analyse: pronoData.analyse,
//                 cote: pronoData.cote,
//                 resultat: pronoData.resultat,
//                 res_prono: pronoData.res_prono
//             }
//
//             state.todos.unshift(newTodo);
//         },
//         setPronos(state, pronosData) {
//             state.pronos = pronosData;
//         }
//     },
//     actions: {
//         addProno(context, pronoData) {
//             /*
//             const datatosend = JSON.stringify(todoData);
//             axios.post("https://jsonplaceholder.typicode.com/posts", datatosend)
//                 .then(response => {
//                     context.commit("addProno", pronoData)
//                 });
//             */
//             context.commit("addProno", pronoData);
//         },
//         getData(context) {
//             axios.get("https://jsonplaceholder.typicode.com/posts")
//                 .then(reponse => {
//                     context.commit("setPronos", reponse.data)
//                 });
//         }
//     },
//     getters: {
//         pronos(state) {
//             return state.pronos;
//         },
//         prono(state) {
//             return (pronoId) => {
//                 return state.pronos.find((td) => td.id === pronoId);
//             }
//         }
//     }
// });

export default store