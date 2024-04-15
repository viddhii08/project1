let main = document.getElementById("main")
let math = 90
let science = 85
let english = 92
let history = 88
let geography = 82
main.innerHTML = `
<h1> -------Report card ------- </h1>
<h1> Student Name : JS </h1>
<h1> Grade: 8 </h1>
<p> --------------------------------- </p>
<p> subject score grade </p>

<p> ----------------------------------- </p>

<p > Math     ${math}  A+ </p>
<p > Science  ${science} A+ </p>
<p  > English  ${english}  A </p>
<p > History  ${history}  A+ </p>
<p  > Geography  ${geography}  A </p>
<p>-------------------------------------------</p>
<h1> Total marks :  ${math + science + english + history + geography} </h1>
<h1> Average marks : ${(math + science + english + history + geography) / 5} </h1>
`

