// let pizza;
// let pizzaPrice;
// let topping1;
// let topping2;
// let topping3;


function Pizza(topping1, topping2, topping3, size) {
  this.topping1 = topping1;
  this.topping2 = topping2;
  this.topping3 = topping3;
  this.size = size
  this.totalToppings = topping1 + topping2 + topping3;
  this.pizzaPrice = 0;
}

console.log(Pizza)
console.log(this.size)
console.log(this.totalTopping)



let customer = new Pizza("pepperoni", "cheese", "olive", "weenub");
console.log(customer);

Pizza.prototype.pizzaPrice = function () {
  let pizzaPrice = this.topping1 + this.topping2 + this.topping3 + this.size;
  console.log(this.totalToppings)
}




// UI Logic

$(document).ready(function () {
  $("form#pick-a-pizza").submit(function (event) {
    event.preventDefault();
    let pizzaPrice =
      new customer(topping1 = parseInt($("#topping1").val()),
        topping2 = parseInt($("#topping2").val()),
        topping3 = parseInt($("#topping3").val()),
        size = parseInt($("#size").val()));

  });
});

// let totalToppings = new 





























  // let totalPrice = this.topping1 + this.topping2 + this.topping3 + this.size;
  // return this.topping1 + this.topping2
  // console.log(this.size)
  // if (this.size > 0) {
  // this.size = pizzaPrice
  // } if (this.topping1 > 0) {

  // this.topping1 + this.size = this.pizzaPrice
  // } if (this.topping2 > 0) {

// }


  // console.log(totalPrice);
  // return totalPrice;
// }







//downloaded dropdown menu

// $(document).ready(function () {

//   $(".dropdown").click(function () {
//     $(".menu").toggleClass("showMenu");
//     $(".menu > li").click(function () {
//       $(".dropdown > p").html($(this).html());
//       $(".menu").removeClass("showMenu");
//     });
//   });

// });