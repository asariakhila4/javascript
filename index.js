// fetch("http://localhost:3000/database")
// .then((res)=>res.json())
// .then((res)=>console.log(res))

//const URL="http://localhost:8001/database/1"
//let options={
  //  "method":"DELETE"
//}
//fetch(URL,options)
//.then((res)=>{
  //  if(res.ok){
    //    console.log(res.statusText)
    //}
//})

//const URL="http://localhost:8001/database"
//let options={
  //  "method":"POST",
    //"headers":{
      //  "Content-Type":"application/JSON"
    //},
    //"body":JSON.stringify(
      //  {
        //    "id":"2",
          //  "name":"Vardhan",
            //"age":23
        //}
    //)
//}
//fetch(URL,options)
//.then((res)=>{
  //  if(res.ok){
    //    console.log(res.status,res.statusText)
    //}
//})

const URL="http://localhost:8001/database/3"
let options={
    "method":"PATCH",
    "headers":{
        "Content-Type":"application/JSON"
    },
    "body":JSON.stringify(
        {
            "name":"Akhila"
        }
    )
}
fetch(URL,options)
.then((res)=>{
    if(res.ok){
        console.log(res.status,res.statusText)
    }
})


// const URL="http://localhost:8001/database/2"
// let options={
//     "method":"PUT",
//     "headers":{
//         "Content-Type":"application/JSON"
//     },
//     "body":JSON.stringify(
//         {
//             "name":"Ruthi"
//         }
//     )
// }
// fetch(URL,options)
// .then((res)=>{
//     if(res.ok){
//         console.log(res.status,res.statusText)
//     }
// })


