


function Pizza(topping1, topping2, topping3, size) {//#3 builds object with values.
  this.topping1 = topping1;
  this.topping2 = topping2;
  this.topping3 = topping3;
  this.size = size
  this.totalToppings = topping1 + topping2 + topping3 + size;
  this.pizzaPrice = 0;
  console.log(Pizza)
}

Pizza.prototype.pizzaPrice = function () {
  let BobPie = this.topping1 + this.topping2 + this.topping3 + this.size;
  if ($("#topping1").is(":checked")) {
    pizzaPrice += 1;
  } else {
    this.pizzaPrice + 0
  }
};
  // pizzaPrice();
  // console.log(pizzaPrice)
let pizzaPrice = this.topping1 + this.topping2 + this.topping3 + this.size;



  // if (this.size > 0) {
  //   this.pizzaPrice === this.size
  // } if (this.topping1 > 0) {
  //   this.pizzaPrice + this.topping1;
  // } else if (this.topping2 > 0) {
  //   this.pizzaPrice + this.topping2;
  // } else if (this.topping3 > 0) {
  //   this.pizzaPrice + this.topping3;
  // } else {
  //   this.pizzaPrice += 0;
  // }

  // UI Logic

  $(document).ready(function () {
    $("form#pick-a-pizza").submit(function (event) {
      event.preventDefault();
      debugger;
      pickedTopping1 = parseInt($("#topping1").val()),//#1 gether info from form
        pickedTopping2 = parseInt($("#topping2").val()),
        pickedTopping3 = parseInt($("#topping3").val()),
        pickedSize = parseInt($("#size").val());
      console.log(pickedTopping1)
      

      let BobPie = new Pizza(pickedTopping1, pickedTopping2, pickedTopping3, pickedSize)//#2 calling constructor and passing values gathered

      $("#output").text(`Your ${$("#size option:selected").text()} pie with ${$("#pickedTopping1 option:selected").text()}, ${$("#pickedTopping2 option:selected").text()}, ${$("#pickedTopping3 option:selected").text()} will be ready shortly and your total will be $. 00`);//#4 calls pizzaPrice after object construction
      // console.log(BobPie)
      // $("$output").text()
    });
  });
// ${ pizzaPrice() }
// ${ BobPie.pizzaPrice() }





























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

