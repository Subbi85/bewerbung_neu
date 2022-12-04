document.getElementById("discordButton").addEventListener("click",validateForm);

//Per Click die Bodyklasse ändern
let switcher = document.getElementById("switcher");
let body = document.body;
switcher.addEventListener("click", function(){
    body.classList.toggle("light");  
})

function clearForm(){
  document.forms["contact_form"]["company"].value = "";
  document.forms["contact_form"]["email"].value ="";
  document.forms["contact_form"]["message"].value =""; 
  document.getElementById("formResponse").innerHTML ="Nachricht gesendet!";
}

//An meinen Discord-Server schicken
function sendToDiscord(data){

  const request = new XMLHttpRequest();
  request.open("POST", "https://discord.com/api/webhooks/1023999128570695831/DrXxfEBT4JVnm02pQr1mg3Wwm78VVbLL2Z3GLrDwB4C0yv3ftUd9_QwlDkhCqEROSCz9");

  request.setRequestHeader('Content-type', 'application/json');

  var payload = JSON.stringify({
    "embeds": [
        {
            "title": "Bewerbungsseite",
            "color": 15418782,
            "url": "https://lars.schleyer-sw.de",



            "thumbnail": {
                "url": "https://order-and-chaos.eu/css/img/classicons/warlock.png"
            },

          "fields": [
              {
                  "name": "Firma: ",
                  "value": data.company
              },
              {
                "name":"E-Mail",
                "value": data.email
              },
              {
                "name": "Nachricht",
                "value": data.message
              }
          ]
        }
    ]
  });

  request.send(payload);
  clearForm();
}

//Honeypot
function validateForm() {
  const phone = document.getElementById("phone").value;
  
    if ( phone == "" || phone == null ){ // if the honeypot was ignored, it's a hu-mon

      let data = {};
      data.company = document.forms["contact_form"]["company"].value;
      data.email = document.forms["contact_form"]["email"].value;
      data.message = document.forms["contact_form"]["message"].value;

      if (data.company != "" || data.email != "" || data.message != "") {
        sendToDiscord(data);
      } else{
        document.getElementById("formResponse").innerHTML ="Nachricht nicht gesendet";
      }
    }
    else{ // the honeypot was filled in, it's a robot
      //form.action="http://..." // link directly to thank you without actually processing form    

      return false;
      }
  }

//Tabbed
function openTab(evt, cityName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}

document.getElementById("defaultOpen").click();