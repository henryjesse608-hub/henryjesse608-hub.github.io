let lecturerSelect = document.getElementById('lecturerSelect')
firebase.database().ref("userDetails").once("value",function(snapshot){
    lecturerSelect.innerHTML = "<option>selectlecturer </option>"
    snapshot.forEach(function(childsnapshot){
        let data = childsnapshot.val()
        if(data.Role =="Admin" && data.Status == "active"){
            let option = document.createElement("option")
            option.textContent = data.FirstName
            lecturerSelect.appendChild(option)
        }
    })
})
// venue
let venueSelect = document.getElementById('venueSelect')
firebase.database().ref("venueSelect").once("value",function(snapshot){
    venueSelect.innerHTML = "<option>selectvenue </option>"
    snapshot.forEach(function(childsnapshot){
        let data = childsnapshot.val()
        if(data.Status == "active"){
            let option = document.createElement("option")
            option.value = data.VenueCode
            option.textContent = data.FirstName
            venueSelect.appendChild(option)
        }
    })
})



//Add new course to firebase

let btnaddcourse = document.getElementById("btnaddcourse");

  // event
  btnAdd.addEventListener("click", () => {

    // inputs
    let txtcoursename = document.getElementById("txtcoursename").value.trim();
    let txtcoursecode = document.getElementById("txtcoursecode").value.trim();
    let lecturerSelect = document.getElementById("lecturerSelect").value.trim();
    let venueSelect = document.getElementById("venueSelect").value.trim();
    let statusSelect = document.getElementById("statusSelect").value.trim();
    // select status for html dropdown 
    // get create by 
      let user = firebase.auth().currentUser;
      let createdby = user.email;
      let timenow = Date.now(); 

    // validation
    if (txtcoursename == "") {
      alert("Enter venue name");
      return;
    }
    // check if venue code is empty the return code stops here
    if (txtcoursecode == "") {
      alert("Enter course code");
      return;
    }
    // check if longitude is empty the return code stops here
    if (lecturerSelect == "selectLecturer") {
      alert("Enter lecturer");
      return;
    }
    // check if latitude is empty the return code stops here
    if (venueSelect == "selectvenue") {
      alert("Enter venue");
      return;
    }

    // firebase insert
    firebase.database().ref("courses/" + txtcoursecode).set({
      courseName: txtcoursename,
      CourseCode: txtcoursecode,
      Status: status,
      lecturer: lecturerSelect,
      venue: venueSelect,
      CreatedAt: timenow,
      CreatedBy: createdby
    })

    .then(() => {
      alert("Course added successfully");

      // clear inputs
      document.getElementById("txtvenuename").value = "";
      document.getElementById("txtvenuecode").value = "";
      document.getElementById("txtlongitude").value = "";
      document.getElementById("txtlatitude").value = "";
      loaddata();
      
    })

    .catch((error) => {
      alert(error.message);
    });
  });
