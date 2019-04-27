$(document).ready(function(){
    $(".select-step").selectStep({
        incrementLabel: "+",
        decrementLabel: "-",
      });
      
    // سعر لعدد  المختار
    $('[data-cartoon-quantity]').change(function(){
        var newQuantity = $(this).val();
        var $parent = $(this).parents('[data-cartoon-info]');
        var pricePerUnit = $parent.attr('data-cartoon-price');
        var totalPriceForBook = newQuantity * pricePerUnit;
        $parent.find('.total-price-for-cartoons').text(totalPriceForBook + " SAR");

        // calculateTotalPrice();
    });

    // حساب سعر الإجمالي
    // function calculateTotalPrice(){
    //     var totalPriceForAllbooks = 0;

    //     $('[data-book-info]').each(function(){
    //         var pricePerUnit = $(this).attr('data-book-price');
    //         var quantity = $(this).find('[data-cartoon-quantity]').val();
    //         var totalPriceForBook = pricePerUnit * quantity;
    //         totalPriceForAllbooks = totalPriceForAllbooks + (totalPriceForBook);
    //     });
    //     $('#total-price-for-all-books').text(totalPriceForAllbooks);
    // }
});