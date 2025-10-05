
//Task 1: Using forEach()
//Create an array of five of your favorite cities.
//Use forEach( ) to log each city name to the console in uppercase.
//Submit the output format by adding comments to the code.

let cities = ["Chicago", "Seattle", "New York City", "San Diego", "Asheville"];
cities.forEach(city => {
    console.log(city.toUpperCase());
});

//Task 2: Transforming with map()
//1. Create an array called numbers with the numbers 1-5.
//2. Use map( ) to create an array where each number is squared. Call this array squares.
//3. Log the new array.
//4. Submit the output by adding comments to the code.

let numbers = [1,2,3,4,5];
let squaredNumbers = numbers.map(num => num*num);
console.log("List of numbers squared is:  " + squaredNumbers);

//Task 3: Filtering with filter()
//1. Create an array called scores containing the numbers 85, 42, 90, 75, 30, and 100.
//2. Use filter ( ) to create a new array containing only the scores greater than or equal to 80. Call this array highScores.
//3. Log the new array.
//4. Submit the output by adding comments to the code.

let scores = [85,42,90,75,30,100];
let highScores = scores.filter(score => score>=80);
console.log("Scores greater than or equal to 80 are:  "+ highScores);

//Task 4: Finding with find() and findIndex()
//Create an array called favoriteFood that contains a list of your favorite dishes. Try to add 5 or 6 elements.
//Use find() to locate the first food with more than 4 letters.
//Use findIndex( ) to find the index of that fruit.

let favoriteFood = ["tacos","spaghetti","salmon","chocolate","meatloaf"];
console.log("List of favorite foods:  " + favoriteFood);


let foodGreaterThanFour = favoriteFood.find(food => (food.length > 4));
console.log("First food with more than 4 letters:  " + foodGreaterThanFour);

let indexOfFood = favoriteFood.findIndex(food => (food.length > 4));
console.log("Index of first food with more than 4 letters:  " + indexOfFood);
