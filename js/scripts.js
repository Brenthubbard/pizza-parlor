function Pizza(topping1, topping2, topping3, size) {
  this.topping1 = topping1;
  this.topping2 = topping2;
  this.topping3 = topping3;
  this.size = size;
}
Pizza.prototype.pizzaPrice = function () {
  BobPie = this.topping1 + this.topping2 + this.topping3 + this.size;
  return BobPie;
};
// UI Logic
$(document).ready(function () {
  $("form#pick-a-pizza").submit(function (event) {
    event.preventDefault();
    const pickedTopping1 = parseInt($("#topping1").val());
    const pickedTopping2 = parseInt($("#topping2").val());
    const pickedTopping3 = parseInt($("#topping3").val());
    const pickedSize = parseInt($("#size").val());
    let bobsPie = new Pizza(pickedTopping1, pickedTopping2, pickedTopping3, pickedSize);
    let price = bobsPie.pizzaPrice();
    $("#output").text(`Your ${$("#size option:selected").text()} pie with ${$("#topping1 option:selected").text()}, ${$("#topping2 option:selected").text()}, ${$("#topping3 option:selected").text()} will be ready shortly and your total will be $${price}. 00`);
    $("#answer").empty();
  });
});