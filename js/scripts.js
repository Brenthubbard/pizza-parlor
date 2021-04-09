


function Pizza(topping1, topping2, topping3, size) {//#3 builds object with values.
  this.topping1 = topping1;
  this.topping2 = topping2;
  this.topping3 = topping3;
  this.size = size
  this.totalToppings = topping1 + topping2 + topping3;
  this.pizzaPrice = 0;
};

Pizza.prototype.pizzaPrice = function () {
  let pizzaPrice = this.topping1 + this.topping2 + this.topping3 + this.size;
  pizzaPrice();
  console.log(pizzPrice)
  console.log(this.size)

};


// UI Logic

$(document).ready(function () {
  $("form#pick-a-pizza").submit(function (event) {
    event.preventDefault();
    pickedTopping1 = parseInt($("#topping1").val()),//#1 gether info from form
      pickedTopping2 = parseInt($("#topping2").val()),
      pickedTopping3 = parseInt($("#topping3").val()),
      pickedSize = parseInt($("#size").val());
    console.log(pizzaPrice)
    let bobPie = new Pizza(pickedTopping1, pickedTopping2, pickedTopping3, pickedSize)//#2 calling constructor and passing values gathered
    $("#output").text(`Your ${$("#size option:selected").text()} with ${$("#pickedTopping1, #pickedTopping2, #pickedTopping3 option:selected").text()} will be ready shortly`);//#4 calls pizzaPrice after object construction
    console.log(bobPie)
  });
});































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

