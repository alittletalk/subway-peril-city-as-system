let trackSelect = false;
let platformSelect = false;
let ShowAndHideSelect = false;
 

function showclickme (){
var x = document.getElementById('click');
        if (trackSelect==true &&  platformSelect==true && ShowAndHideSelect==true) {
            x.style.display = '';
        } else {
            x.style.display = 'none';
    }
}

 function track () {
    alert("July 10, 2022 A 14-year-old boy was fatally stabbed while on a New York City subway platform and a person of interest in the episode was taken into custody Officers found the victim on the northbound No. 1 line platform with a stab wound to the abdomen. He was taken by ambulance to nearby Mount Sinai Hospital, where he was pronounced dead.");
trackSelect=true;
showclickme()
}



function platform () {
    alert("OCT. 01, 2022 Police said 43-year-old Tommy Bailey was pronounced dead at Brookdale Hospital after a man slashed his neck Friday night on a southbound L train in Brooklyn No arrests have been made as police continue their investigation, the NYPD said According to police, Bailey and another man had been arguing but it is not clear what the argument was about");
 platformSelect=true;
 showclickme()
}


 function ShowAndHide() {
    var x = document.getElementById('chat-1');
    if (x.style.display == 'none') {
        x.style.display = '';
    } else {
        x.style.display = 'none';
    }

ShowAndHideSelect=true;
showclickme()

}



function showclickme1 (){
    var x = document.getElementById('click');
            if (ShowAndHide1Select=true &&  ShowAndHide2Select==true && ShowAndHide3Select==true) {
                x.style.display = '';
            } else {
                x.style.display = 'none';
        }
    }



function ShowAndHide1() {
    var x = document.getElementById('chat-2');
    if (x.style.display == 'none') {
        x.style.display = '';
    } else {
        x.style.display = 'none';
    }

ShowAndHide1Select=true;
showclickme1()

}
function ShowAndHide2() {
    var x = document.getElementById("chat-3");
    if (x.style.display == 'none') {
        x.style.display = '';
    } else {
        x.style.display = 'none';
    }

ShowAndHide2Select=true;
showclickme1()

}
function ShowAndHide3() {
    var x = document.getElementById("news-2");
    if (x.style.display == 'none') {
        x.style.display = '';
    } else {
        x.style.display = 'none';
    }

ShowAndHide3Select=true;
showclickme1()

}


function on() {
    document.getElementById("overlay").style.display = "block";
  }
  
  function off() {
    document.getElementById("overlay").style.display = "none";
  }


  function on1() {
    document.getElementById("overlay1").style.display = "block";
  }
  
  function off1() {
    document.getElementById("overlay1").style.display = "none";
  }





