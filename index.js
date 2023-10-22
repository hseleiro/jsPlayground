class Node {
	constructor(data, next = null) {
		this.data = data;
		this.next = next;
	}
}

class LinkedList {
	constructor() {
		this.head = null;
		this.size = 0
	}

	// Insert first node


    inserFirst(data) {
    	this.head = new Node(data, this.head)
    	this.size++
    }


	// Insert last node
	inserLast(data) {
		let node = new Node(data);
		let current;

		// if empty, make head
		if(!this.head) {
			this.head = node;
		} else {
			current = this.head;
			while(current.next) {
				current = current.next;
			}

			current.next = node;
		}

		this.size++;

	}

	// Insert at index 

	// Get at index

	// Remove at index

	// Clear list

	// Print list data
	printListData() {
		let current = this.head;

		while(current) {
			console.log(current.data);
			current = current.next;
		}
	}
}

const ll = new LinkedList();

//ll.inserFirst(100);
//ll.inserFirst(200);
//ll.inserFirst(300);
//ll.inserLast(400);

//ll.printListData();

class Expense {
	constructor(cost, name, date = new Date()) {
		this.cost = cost;
		this.name = name;
		this.date = date;
	}

	addVat(vatRate) {
		let vatAmount = 0;
		let totalAmount = 0;
		vatAmount = this.cost * (vatRate / 100);
		totalAmount = this.cost + vatAmount;
		console.log(`${vatRate}% vat rate adds ${vatAmount} to your exepense`);
		console.log(`The total of your expense is ${totalAmount}`);
	}

	logExpense() {
		console.log('name :', this.name);
		console.log('date :', this.date);
		console.log('type :', this.type);
	}
}

class FoodExpense extends Expense {
	constructor(cost, name, type) {
		super(cost, name)
		this.type = type;
	}

}

class HouseExpense extends Expense {
	constructor(cost, name, date) {
		super(cost, name, date)
	}
}


const foodExpense = new FoodExpense(100, 'vegi', 'processed');
const houseExpense = new HouseExpense(200, 'seguro', new Date());

foodExpense.logExpense();
houseExpense.logExpense();

foodExpense.addVat(23);
houseExpense.addVat(23);


/*class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a sound.`);
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name);
    this.breed = breed;
  }

  speak() {
    console.log(`${this.name} barks.`);
  }
}

const myDog = new Dog("Max", "Labrador Retriever");
myDog.speak(); // Output: Max barks.

/*class Expense extends ExpenseComputations {
	constructor(id, date) {
		super(id, date);
	} 
}


class ExpenseComputations {
	constructor(id, date = null, expense = []){
		this.id = id;
		this.date = date;
		this.expense = expense;
	}

	addExpenseDetails(name, type) {
		this.expense = new ExpenseDetails(name, type, this.expense);
		console.log('this.expense', this.expense)
	}
}


class ExpenseDetails {
	constructor(name, type, expense) {
		this.name = name;
		this.type = type;
		this.expense = expense
	} 
}



todayExpense = new Expense(1, new Date(), []);

todayExpense.addExpenseDetails('ps5', 'games');


const todayExpense = new Expense(1, new Date());

todayExpense.addExpense(1, 'ps5');
todayExpense.addExpense(2, 'uber');

console.log(todayExpense);






// Helpers




	constructor(name, cost, previous = null){
		this.name = name;
		this.cost = cost;
	}

	addVat(vatRate) {
		let vatAmount = 0;
		let totalAmount = 0;
		vatAmount = this.cost * (vatRate / 100);
		totalAmount = this.cost + vatAmount;
		console.log(`${vatRate}% vat rate adds ${vatAmount} to your exepense`);
		console.log(`The total of your expense is ${totalAmount}`);
	}*/
