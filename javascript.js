main = function(){

    
    $('.block').hide();
    $("#button").on("click", function() {
        val = $('#numberPlate').val();
        
        url = "http://86.147.187.219/getlicense.php?numberplate=" + val;
        $.ajax( {url: url,
                dataType: "json",
                type: "GET"}).done(function(result) {
            car = result;
                    if(car.fuelType.toLowerCase() == "petrol") {
                $('.block').hide();
                $('.petrol').show();
            }else if(car.fuelType.toLowerCase() == "gas") {
                $('.block').hide();
                $('.gas').show();
            }else if(car.fuelType.toLowerCase() == "diesel") {
                $('.block').hide();
                $('.diesel').show();
            }else if(car.fuelType.toLowerCase() == "electricity") {
                $('.block').hide();
                $('.electric').show();
            }else {
                $('.block').hide();
                alert('Error: That is NOT valid');
            }
        });
    });

   $("form").submit(function(evt){   
   evt.preventDefault();

   var formData = new FormData($(this)[0]); 

   $.ajax({
     url: 'http://86.147.187.219/post.php',
     type: 'POST',
     data: formData,
     async: false,
     dataType: "json",
     cache: false,
     contentType: false,
     enctype: 'multipart/form-data',
     processData: false,
   }).done(function(result){
            car = result["dvla"]["fuelType"].toLowerCase()

            if(car == "petrol") {
                $('.block').hide();
                $('.petrol').show();
            }else if(car == "gas") {
                $('.block').hide();
                $('.gas').show();
            }else if(car == "diesel") {
                $('.block').hide();
                $('.diesel').show();
            }else if(car == "electricity") {
                $('.block').hide();
                $('.electric').show();
            }else {
                $('.block').hide();
                alert('Error: That is NOT valid');
            }


   });

   return false;
 });
    
    }
$(document).ready(main);