// import _ from 'lodash';
// import $ from 'jquery';
// import User from './user'
import Vue from 'vue';
import TodoItemComponent from './components/TodoItemComponent.vue';

window.Vue = Vue;

var app = new Vue({
    el: '#app',
    data: {
        todos: [
            {id: 1, item: 'Watch', done: false},
            {id: 2, item: 'Play', done: false},
            {id: 3, item: 'Eat', done: false},
        ],
        message: 'Hello World'
    },
    components: {
        'todo-item': TodoItemComponent
    },
    mounted: () => {
        console.log(TodoItemComponent)
    }
})