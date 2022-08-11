
//ADD YOUR FIREBASE LINKS HERE
user_name=localStorage.getItem("user_name");
document.getElementsById("user_name").innerHTML="Welcome"+user_name+"!";
function addroom(){
      {
            room_name=document.getElementById("room_name").value;
            firebase.database().ref("/").child(room_name).update(
                  {
                        purpose:"adding room name"
                  }
            );
            localStorage.setItem("room_name",room_name);
      window.Location="kwitter_page.html"; 
      }
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("Room name-"+Room_names);
row="<div class='room_name' id="+ Room_names+"  onclick='redirecttoRoom_name(this.id)'>#"+Room_names+"</div></hr>";
      //End code
      });});}
getData();

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="kwitter.html"; 
}
