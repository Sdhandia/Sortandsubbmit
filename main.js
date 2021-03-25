var students=[];
function submit()
{
    var name1=document.getElementById("nameofstudents1").value;
    var name2=document.getElementById("nameofstudents2").value;
    var name3=document.getElementById("nameofstudents3").value;
    var name4=document.getElementById("nameofstudents4").value;
    var name5=document.getElementById("nameofstudents5").value;
    var name6=document.getElementById("nameofstudents6").value;
    var name7=document.getElementById("nameofstudents7").value;
    students.push(name1);
    students.push(name2);
    students.push(name3);
    students.push(name4);
    students.push(name5);
    students.push(name6);
    students.push(name7);
    console.log(students);
    document.getElementById("147").innerHTML=students;
    document.getElementById("258").style.display=none;
    document.getElementById("258").style.display="inline-block";
}
function sormt(){
    students.sort();
    document.getElementById("147").innerHTML=students;

}