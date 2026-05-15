let totalAdmins = 0
let totalStudents = 0
firebase.database().ref("userDetails").once("value", function(snapshot){
    snapshot.forEach(function(childSnapshot) {
        let data = childSnapshot.val()
        if (data.Role == "Admin"){
        totalAdmins ++ 
        }else{
            totalStudents ++
        }
    })
    // Display total count
    drawbargraph()
})
function drawbargraph(){
    const canvasforbargraph = document.getElementById("mybargraph")
    new Chart(canvasforbargraph, {
        type : 'bar',
        data : {
            labels : ['Admins', 'Students'],
            datasets : [{
                label : "System users",
                data : [totalAdmins, totalStudents],
                borderWidth : 1           
            }]
        },
        options: {
            responsive : true,
            scale : {
                y:{
                    beginAtZero:true
                }
            }
        }
    })
}
// Courses pie
let totalactiveCourses = 0
let totalinactiveCourses = 0
firebase.database().ref("Courses").once("value", function(snapshot){
    let total = 0
    snapshot.forEach(function(childSnapshot) {
        let data = childSnapshot.val()
        if (data.Status == "active"){
          totalactiveCourses ++ 
        }else{
            totalinactiveCourses ++  
        }
       
    })
    //show data
    coursespie()
})
function coursespie(){
    const canvasforcourses = document.getElementById('mypiecourses')
    new Chart(canvasforcourses, {
        type: 'pie',
        data: {
            labels: ["Active", "Inactive"],
            datasets: [{
                data:[totalactiveCourses, totalinactiveCourses]
            }]
        }
    })
} 
let totalLecturers = 0;

firebase.database().ref("userDetails").once("value", function(snapshot){

    snapshot.forEach(function(childSnapshot){

        let data = childSnapshot.val();

        if(data.Role == "Admin"){
            totalLecturers ++
        }

        if(data.Role == "Student"){
            totalStudents ++
        }

    });

    lecturerlinechart();

});

function lecturerlinechart(){

    const canvas =
        document.getElementById("mylinelecturers");

    new Chart(canvas, {

        type: 'line',

        data: {

            labels: ['Lecturers', 'Students'],

            datasets: [{
                label: 'System Population',
                data: [totalLecturers, totalStudents],
                borderWidth: 2,
                fill: false
            }]

        },

        options: {

            responsive: true,

            scales: {
                y: {
                    beginAtZero: true
                }
            }

        }

    });

}
let inactiveTotal = 0
let activeTotal = 0

firebase.database().ref("userDetails").once("value", function(snapshot){

    snapshot.forEach(function(childSnapshot){

        let data = childSnapshot.val()

        if(data.Status == "inactive"){
            inactiveTotal ++
        }else{
            activeTotal ++
        }

    })

    approvalchart()

})

function approvalchart(){

    const canvas =
        document.getElementById("mydoughnutapproval")

    new Chart(canvas, {

        type: 'doughnut',

        data: {

            labels: ['Inactive', 'Active'],

            datasets: [{
                data: [inactiveTotal, activeTotal]
            }]

        }

    })

}