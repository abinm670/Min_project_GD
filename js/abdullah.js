/* code goes here */

var msg = document.getElementById("msgArea");
msg.value = "Here is some text";




let countries = [];


var m = [];

var title = document.getElementById("pageTitle").innerHTML = "Min Project";

// msg.value = document.getElementById("first").innerHTML;
// msg.value = document.getElementById("first").innerText;
// msg.value = "My class is" + msg.getAttribute("class");
// var elem = document.getElementsByTagName("textarea");
// elem[1].value = "select by tage name"

// elem =document.getElementsByTagName("span")
// for(i=0; i<elem.length; i++)
// {
//     document.getElementById("msgArea").value += "\n" + elem[i].innerText;
// }
// document.getElementById("msgArea").value = " ";
// var counts = document.getElementsByClassName("count-number")
// for (i = 0; i < counts.length; i++) {
//     document.getElementById("msgArea").value += "\n" + counts[i].innerText;
// }


// var ps = document.querySelector("#first h1");
// document.getElementById("msgArea").value = ps.innerHTML;


// ps = document.querySelectorAll("#first p");
// for (i = 0; i < ps.length; i++) 
// { document.getElementById("msgArea").value += ps[i].innerHTML + "\n"; }

// document.getElementById("msgArea").setAttribute("class", "hidden");

// document.getElementById("features").style.backgroundColor = "red";
const data =
    axios({
        method: 'GET',
        url: 'https://jobs.github.com/positions.json?description=python&location'
    })

        .then(function (res) {
            var ul = document.getElementById("check");
            // var li = document.createElement('li');
            // ul.appendChild(li);
            console.log(res.data)

            // res.data.map(e => {
            for (i in res.data) {
                var li = document.createElement('li');
                li.innerHTML = `<a href = ${res.data[i].url}> ${res.data[i].title} </a>`;

                ul.appendChild(li);

            }
            // });

            // console.log(res.data[0].title);

            // res.data.map(x => {
            //     var li = document.createElement('li');
            //     li.innerHTML = x.title;
            //     ul.appendChild(li);

            // })
        })



        .catch(function (error) {
            // handle error
            console.log(error);
        });

// var obj1 = [];
// Promise.all([data]).then(values => obj1.push(values));
// // m = x.map(res => res)s

// console.log(obj1.constructor())

// console.log(data);