// Write your code here
class Breakfast {
    constructor(food, drink){
        this.food = food;
        this.drink = drink;
    }
}

let yum = new Breakfast("Eggs & Bacon", "Orange Juice")
console.log(yum)

class Lunch {
    constructor(salad, soup, drink){
        this.salad = salad;
        this.soup = soup;
        this.drink = drink;
    }
}

let lunch = new Lunch("Greek Salad", "French Onion", "Green Tea")
console.log(lunch)

class Dinner{
    constructor(salad, soup, entree, dessert){
        this.salad = salad; 
        this.soup = soup;
        this.entree = entree;
        this._dessert = dessert;
    }
}

let dinner = new Dinner("Caesar Salad", "Tomato soup", "Seared Ahi Tuna w/ mashed potatoes", "Chocolate mousse cake")
console.log(dinner)
