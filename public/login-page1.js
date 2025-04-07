
const bars = document.getElementById("bar");
const vnav =document.getElementById("vnav");
const hnav =document.getElementById("hnav");
bars.addEventListener("click",()=>{
  if(hnav.classList.add("w-[80%]"));
 hnav.classList.remove("w-full");
 vnav.classList.remove("hidden");
vnav.classList.add("flex");
 
 });
 
//   bars.addEventListener("click",()=>{
//     hnav.classList.add("w-full");
//   hnav.classList.remove("w-[80%]");
//  vnav.classList.remove("flex");
// vnav.addEventListener.add("hidden");
// });
