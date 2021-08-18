class Stack {
  constructor() {
    this.stack = [];
    // this is an arbitrary value to make testing easier
    // 1,024 would be way too high to test!
    this.limit = 10;
  }

  // add item to top of stack if not full
  // if full throw error
  push(item) {
    if(this.limit === this.stack.length){
      throw new Error()
    } else {
      this.stack[this.stack.length] = item
    }
  }

  // remove item from top of stack and return it
  pop() {
    let popped = this.stack.splice((this.stack.length - 1), 1)
    return popped[0]
  }

  // return item at top of stack without removing it
  peek() {
    let peeked = this.stack[this.stack.length - 1]
    return peeked
  }

  // return true if stack is empty, otherwise false
  isEmpty() {
    if(this.stack.length === 0){
      return true
    } else {
      return false
    }
  }

  // return true if stack is full, otherwise false
  isFull() {
    if(this.stack.length === this.limit){
      return true
    } else {
      return false
    }
  }

  // return number of items in stack
  size() {
    return this.stack.length
  }

  // return -1 if item not in stack, otherwise integer representing 
  // how far it is from the top
  search(target) {
    let result
    this.stack.forEach((element, index) => {
      if(element === target){
        result = (this.stack.length - 1) - index
      }
    })
    if(!!result || result === 0){
      return result
    } else {
      return -1
    }
  }

  // print contents of stack: do not return the stack itself!
  print() {
    this.stack.forEach(element => console.log(element))
  }
}

if (require.main === module) {
  // add your own tests in here
  let testStack = new(Stack)

  console.log("Expecting: true")
  console.log(testStack.isEmpty())

  console.log("Expecting: 0")
  console.log(testStack.size())
  
  console.log("Expecting: [0]...[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]")
  console.log(testStack.push(0))
  console.log(testStack.push(1))
  console.log(testStack.push(2))
  console.log(testStack.push(3))
  console.log(testStack.push(4))
  console.log(testStack.push(5))
  console.log(testStack.push(6))
  console.log(testStack.push(7))
  console.log(testStack.push(8))
  console.log(testStack.push(9))

  console.log("Expecting: Error: 'Stack is full'")
  console.log(testStack.push(10))

  console.log("Expecting: true")
  console.log(testStack.isFull())

  console.log("Expecting: 9")
  console.log(testStack.pop())

  console.log("Expecting: 8")
  console.log(testStack.peek())

  console.log("Expecting: 0, 1, 2, 3, 4, 5, 6, 7, 8")
  console.log(testStack.print())

  console.log("Expecting: 2")
  console.log(testStack.search(6))

  console.log("Expecting: -1")
  console.log(testStack.search(20))
}

module.exports = Stack;
