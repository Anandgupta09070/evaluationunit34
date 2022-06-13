/*
Save the user to local storage with key "user", in following format:- 
{
name: "",
image: "",
email: "",
country: "" (store country code "in", "ch", "nz", "us", "uk")
}
*/
function submit(){
    let arr=JSON.parse(localStorage.getItem("user"))||[];
    let obj={
    name:document.getElementById("user_name").value,
    image:document.getElementById(" user_pic").value,
    email:document.getElementById("user_email").value,
    country:document.getElementById("user_country").value,
 
}
arr.push(obj);
console.log(arr)

localStorage.setItem("user",JSON.stringify(arr))
window.location.href="worldNews.html"
  
}