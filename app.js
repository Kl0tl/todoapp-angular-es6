!function o(t,e,r){function n(s,a){if(!e[s]){if(!t[s]){var c="function"==typeof require&&require;if(!a&&c)return c(s,!0);if(i)return i(s,!0);var d=new Error("Cannot find module '"+s+"'");throw d.code="MODULE_NOT_FOUND",d}var u=e[s]={exports:{}};t[s][0].call(u.exports,function(o){var e=t[s][1][o];return n(e?e:o)},u,u.exports,o,t,e,r)}return e[s].exports}for(var i="function"==typeof require&&require,s=0;s<r.length;s++)n(r[s]);return n}({"./app/app.js":[function(o){"use strict";o("./todo/todo"),angular.module("app",["ngRoute","app.todo"]).config(["$routeProvider",function(o){o.when("/",{controller:"TodoController",controllerAs:"ctrl",templateUrl:"todo/todo.html"}).when("/:status",{controller:"TodoController",controllerAs:"ctrl",templateUrl:"todo/todo.html"}).otherwise({redirectTo:"/"})}])},{"./todo/todo":"/workspace/todoapp-angular-es6/app/todo/todo.js"}],"/workspace/todoapp-angular-es6/app/components/todo-escape-directive/todo-escape-directive.js":[function(o,t,e){"use strict";Object.defineProperties(e,{"default":{get:function(){return i}},__esModule:{value:!0}});var r=27,n=function(){this.restrict="A"};$traceurRuntime.createClass(n,{link:function(o,t,e){t.on("keydown",function(t){t.keyCode===r&&o.$apply(e.todoEscape)})}},{});var i=angular.module("app.todo-escape-directive",[]).directive("todoEscape",function(){return new n})},{}],"/workspace/todoapp-angular-es6/app/components/todo-focus-directive/todo-focus-directive.js":[function(o,t,e){"use strict";Object.defineProperties(e,{"default":{get:function(){return n}},__esModule:{value:!0}});var r=function(o){this.$timeout=o,this.restrict="A",this.link=this.link.bind(this)};$traceurRuntime.createClass(r,{link:function(o,t,e){var r=this,n=t[0];o.$watch(e.todoFocus,function(o){o&&r.$timeout(function(){return n.focus()},0)})}},{});var n=angular.module("app.todo-focus-directive",[]).directive("todoFocus",["$injector",function(o){return o.instantiate(["$timeout",r])}])},{}],"/workspace/todoapp-angular-es6/app/components/todo-storage-service/todo-storage-service.js":[function(o,t,e){"use strict";Object.defineProperties(e,{"default":{get:function(){return i}},__esModule:{value:!0}});var r="todoapp-angular-es6",n=function(){};$traceurRuntime.createClass(n,{get:function(){return JSON.parse(localStorage.getItem(r)||"[]")},put:function(o){localStorage.setItem(r,JSON.stringify(o))}},{});var i=angular.module("app.todo-storage-service",[]).service("TodoStorageService",n)},{}],"/workspace/todoapp-angular-es6/app/todo/todo-controller.js":[function(o,t,e){"use strict";Object.defineProperties(e,{"default":{get:function(){return n}},__esModule:{value:!0}});var r=function(o,t,e){var r=this;this.todos=e.get(),this.newTodo="",this.editedTodo=null,this.originalTodo=null,this.remainingCount=0,this.completedCount=0,this.allChecked=!0,this.status="",this.statusFilter=null,t.$watch(function(){return r.todos},function(o,t){r.remainingCount=r.todos.filter(function(o){return!o.completed}).length,r.completedCount=r.todos.length-r.remainingCount,r.allChecked=!r.remainingCount,o!==t&&e.put(r.todos)},!0),t.$on("$routeChangeSuccess",function(){var t=r.status=o.status||"";r.statusFilter="active"===t?{completed:!1}:"completed"===t?{completed:!0}:null})};$traceurRuntime.createClass(r,{addTodo:function(){var o=this.newTodo.trim();o.length&&(this.todos.unshift({title:o,completed:!1}),this.newTodo="")},editTodo:function(o){this.editedTodo=o,this.originalTodo=Object.assign({},o)},doneEditing:function(o){this.editedTodo=null,o.title=o.title.trim(),o.title||this.removeTodo(o)},revertEditing:function(o){this.todos[this.todos.indexOf(o)]=this.originalTodo,this.doneEditing(this.originalTodo)},removeTodo:function(o){this.todos.splice(this.todos.indexOf(o),1)},clearCompletedTodos:function(){this.todos=this.todos.filter(function(o){return!o.completed})},markAll:function(o){for(var t,e=this.todos[Symbol.iterator]();!(t=e.next()).done;){var r=t.value;r.completed=!o}}},{});var n=["$routeParams","$scope","TodoStorageService",r]},{}],"/workspace/todoapp-angular-es6/app/todo/todo.js":[function(o,t,e){"use strict";Object.defineProperties(e,{"default":{get:function(){return n}},__esModule:{value:!0}}),o("../components/todo-storage-service/todo-storage-service"),o("../components/todo-escape-directive/todo-escape-directive"),o("../components/todo-focus-directive/todo-focus-directive");var r=o("./todo-controller").default,n=angular.module("app.todo",["app.todo-storage-service","app.todo-escape-directive","app.todo-focus-directive"]).controller("TodoController",r)},{"../components/todo-escape-directive/todo-escape-directive":"/workspace/todoapp-angular-es6/app/components/todo-escape-directive/todo-escape-directive.js","../components/todo-focus-directive/todo-focus-directive":"/workspace/todoapp-angular-es6/app/components/todo-focus-directive/todo-focus-directive.js","../components/todo-storage-service/todo-storage-service":"/workspace/todoapp-angular-es6/app/components/todo-storage-service/todo-storage-service.js","./todo-controller":"/workspace/todoapp-angular-es6/app/todo/todo-controller.js"}]},{},["./app/app.js"]);