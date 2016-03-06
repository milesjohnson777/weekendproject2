$(document).ready(function(){

    var kappa = [];

    $.ajax({
      type: "GET",
      url: "/data",
      success: function(data){

          for(var i=0; i<data.kappa.length; i++){
              kappa.push(data.kappa[i]);
         }
         var index = 0;
         var time = 10000;

         setInterval(function(){
             $('.carousel').children().remove();
             $('.carousel').append('<h1>'+ kappa[index].name +'</h1>' +
                '<h4><q><em>' + kappa[index].shoutout + '</em></q></h4>' +
                '<p>' + kappa[index].location + '</p>' +
                '<p>' + kappa[index].spirit_animal + '</p>');
             index++;
             if(index>kappa.length -1){
                 index=0;
             }
         }, time);



         $('.carousel').append('<h1>'+ kappa[index].name +'</h1>' +
            '<h4><q><em>' + kappa[index].shoutout + '</em></q></h4>' +
            '<p>' + kappa[index].location + '</p>' +
            '<p>' + kappa[index].spirit_animal + '</p>');

            //event listeners:
                $('.buttons').on('click', '.prev', function(){
                    index--;
                    if(index == -1){
                        index = kappa.length -1;
                    }
                    console.log(index);
                    $('.carousel').children().remove();
                    $('.carousel').append('<h1>'+ kappa[index].name +'</h1>' +
                       '<h4><q><em>' + kappa[index].shoutout + '</em></q></h4>' +
                       '<p>' + kappa[index].location + '</p>' +
                       '<p>' + kappa[index].spirit_animal + '</p>');
                       time = 10000;
                });

                $('.buttons').on('click', '.next', function(){
                    index++;
                    if(index>kappa.length-1){
                        index=0;
                    }
                    console.log(index);
                    $('.carousel').children().remove();
                    $('.carousel').append('<h1>'+ kappa[index].name +'</h1>' +
                       '<h4><q><em>' + kappa[index].shoutout + '</em></q></h4>' +
                       '<p>' + kappa[index].location + '</p>' +
                       '<p>' + kappa[index].spirit_animal + '</p>');
                       time = 10000;
                });

     }
    });

});
