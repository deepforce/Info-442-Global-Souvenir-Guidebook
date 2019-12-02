var PAGE_LIMIT = 2;
var active_cards = [];

$(document).ready(function(){  
  $.getJSON("https://api.myjson.com/bins/12ubge", function(result){
    $.each(result.data, function(i, field){
      var cardEle = "<div class='col-sm-6'> <div class='cardItem' style='width: 290px; height : 330px;'> <img class='card-img-top' src='http://img.mm4000.com/file/2/7d/ff204289f9_1044.jpg' alt='Card image cap' width='286px' height='180px'><div class='card-body'><h5 class='card-title'>Card title</h5><p class='card-text'>Some quick example text to build on the card title and make up the bulk of the card's content.</p><a href='#' class='btn btn-primary'>Go somewhere</a></div></div></div>";
      active_cards.push(cardEle);
      $("#cards").append(cardEle);
      $(".card-title:last").text(field.StoreName);
      //more attributes set here

      //set display limit
      if(i+1>PAGE_LIMIT) $(".col-sm-6:last").hide();
    });
  });

  $(".next").click(function(){
    for(i = 0; i<active_cards.length-PAGE_LIMIT; i++){
      if(active_cards[i].style.display!="none"){
        $(".col-sm-6").hide();
        for(j = i+PAGE_LIMIT; j<PAGE_LIMIT*2; j++){
          active_cards[j].style.display="inherit";
        }
        break;
      }
    } 
  });

  $(".previous").click(function(){
    for(i = 0; i<active_cards.length; i++){
      if(active_cards[i].style.display!="none"){
        $(".col-sm-6").hide();
        for(j = Math.max(0,i-PAGE_LIMIT); j<active_cards.length&&j<PAGE_LIMIT; j++){
          active_cards[j].style.display="inherit";
        }
        break;
      }
    } 
  });
});


function search_storename() { 
  var input = document.getElementById('search_box').value;
  input = input.toLowerCase(); 
  var cards = document.getElementsByClassName('col-sm-6'); 
  var names = document.getElementsByClassName('card-title'); 
  active_cards = [];

  for (i = 0; i < cards.length; i++) {  
      if (!names[i].innerHTML.toLowerCase().includes(input) || active_cards.length>=PAGE_LIMIT) { 
          cards[i].style.display="none"; 
      } 
      else { 
          cards[i].style.display="inherit";
          active_cards.push(cards[i]);                 
      } 
  } 
} 




  function getOption() { 
    selectElement = document.querySelector('#select1'); 
    var output = document.getElementById("select1").value; 
    // output =  
    //   selectElement.options[selectElement.selectedIndex].value; 
    // document.querySelector('.output').textContent = output; 

    var cards = document.getElementsByClassName('col-sm-6'); 
    var names = document.getElementsByClassName('card-title'); 
    active_cards = [];
  
    for (i = 0; i < cards.length; i++) {  
        if (!names[i].innerHTML.toLowerCase().includes(output) || active_cards.length>=PAGE_LIMIT) { 
            cards[i].style.display="none"; 
        } 
        else { 
            cards[i].style.display="inherit";
            active_cards.push(cards[i]);                 
        } 
      }
} 