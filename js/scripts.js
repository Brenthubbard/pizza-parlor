let pizza;
let pizzaPrice;



function Pizza(topping1, topping2, topping3, size) {
  this.topping1 = topping1;
  this.topping2 = topping2;
  this.topping3 = topping3;
  this.size = size
  this.totalToppings = topping1 + topping2 + topping3;
  console.log(Pizza)
}



Pizza.prototype.pizzaPrice = function () {
  let totalPrice = this.topping1 + this.topping2 + this.topping3 + this.size;

  console.log(totalPrice);
  return totalPrice;
}




// UI Logic

// $(document).ready(function () {
//   $("form").submit(function (event) {
//     event.preventDefault();
//     const topping1 = parseInt($("topping1").val());
//     const topping2 = parseInt($("topping2").val());
//     const topping3 = parseInt($("topping3").val());
//   });
// });



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