// count total students
let lbtoTotalStudents = document.getElementById("lbtoTotalStudents")
firebase.database().ref("userDetails").once("value",function(snapshot){
    let total = 0
    snapshot.forEach(function(childsnapshot){
        let data = childsnapshot.val()
        total ++
    })

    lbtoTotalStudents.innerHTML = total
})


// count total courses
let lbtoTotalcourses = document.getElementById("lbtoTotalcourses")
firebase.database().ref("userDetails").once("value",function(snapshot){
    let total = 0
    snapshot.forEach(function(childsnapshot){
        let data = childsnapshot.val()
        total++
       
   
})
 lbtoTotalcourses.innerHTML = total
})



// count for total lecturersS
let lbtoTotalLecturers = document.getElementById("lbtoTotalLecturers")
firebase.database().ref("userDetails").once("value",function(snapshot){   
    let total = 0
    snapshot.forEach(function(childsnapshot){
        let data = childsnapshot.val()
       if (data.Role =="Admin"){
        total++
       }
    })
    lbtoTotalLecturers.innerHTML = total
})


// approval all counts that are suspended
let lbtototalApprovals = document.getElementById("lbtototalApprovals")
firebase.database().ref("userDetails").once("value",function(snapshot){
    let total = 0
    snapshot.forEach(function(childsnapshot){
        let data = childsnapshot.val()
       if (data.Status =="inactive"){
        total++
       } 
    })
    lbtototalApprovals.innerHTML = total
})

