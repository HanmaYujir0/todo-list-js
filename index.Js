function createTodoList() {
    const todoListObject = {
      items: [
        {
          text: "Завершить текущий челлендж",
          completed: false
        },
        {
          text: "Отдохнуть во время перерыва",
          completed: false
        },
        {
          text: "Помочь напарнику понять код",
          completed: false
        },
        {
          text: "Выиграть в мафию",
          completed: true
        },
      ],
   printAll() {
       for (let i = 0; i < this.items.length; i++) {
           
           console.log(this.print(i));
       }
   },
   add(newDela) {
       this.items = [{text: newDela, completed: false}, ...this.items]
           console.log(this.printAll())
   },
   remove(num) {
       this.items.splice((num - 1), 1)
       console.log(this.printAll())
   },
   print(num) {
     const compleat = this.items[num].completed === true ? '[x]' : '[ ]'
     return `${compleat} ${this.items[num].text}`
   },
   complete(num) {
     this.items[num].completed = true
     this.printAll()
   }
  
    }
  
    return todoListObject;
  }
  
  const todoList = createTodoList();
  todoList.printAll()