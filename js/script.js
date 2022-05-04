
// **MILESTONE 1**
// Stampare all’interno di una lista, un item per ogni todo.
// Se la proprietà `done` è uguale a `true`, visualizzare il testo del todo ~~sbarrato~~.




const app = new Vue({
  el: '#app',

  data: {
    todo: [
      {
        text: 'fare la spesa',
        done: true
      },
      {
        text: 'fare recup di Javascript',
        done: false
      },
      
      {
        text: 'fare una passeggiata',
        done: true
      },
      {
        text: 'sorridi',
        done: false
      }     
    ],

    toDoList: '',
    listDone: ''

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

    }


    // toggleLine(index){
    //   console.log(index)
    //   this.todo[index].done = !this.todo[index].done
    //   if(this.todo[index].done == true){
    //     listDone = 'cancella'
    //   }else{
    //     listDone = ''
    //   }


  }


})