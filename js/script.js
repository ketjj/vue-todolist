// **Descrizione:**
// Questa volta però ogni todo sarà un oggetto, formato da due proprietà:
// - `text`, una stringa che indica il testo del todo
// - `done`, un booleano (true/false) che indica se il todo è stato fatto oppure no

// **MILESTONE 1**
// Stampare all’interno di una lista, un item per ogni todo.
// Se la proprietà `done` è uguale a `true`, visualizzare il testo del todo ~~sbarrato~~.




const app = new Vue({
  el: '#app',

  data: {
    todo: [
      {
        text: 'fare la spesa',
        done: false
      },
      {
        text: 'fare recup di Javascript',
        done: false
      },
      
      {
        text: 'fare una passeggiata',
        done: false
      },
      {
        text: 'sorridi',
        done: false
      }     
    ],

    toDoList: '',
    lineThrought: 'cancella'
    

  },

  methods: {

    addNewTodo(){
      if (this.toDoList.length > 0)
      {
      const objectAdd = {
        text: this.toDoList,
        done: false
      } 
      this.todo.push(objectAdd);
      this.toDoList = ''
      }

    },

    removeTodo(index){
      this.todo.splice(index, 1)

    },


  }


})