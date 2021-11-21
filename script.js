function createdSearch() {
    var x = document.createElement("INPUT");
    x.setAttribute("type", "search");
    x.setAttribute("placeholder", "search here")
    document.body.appendChild(x);
}
createdSearch();

function createdButton() {
    var x = document.createElement("INPUT");
    x.setAttribute("type", "Submit");
    document.body.appendChild(x);
  }
createdButton();

function myFunction() {
    var x = document.createElement("DIV");
    x.setAttribute("id","result")
    // var y = document.createElement("IMG");
    // y.setAttribute("src", "");
    // y.setAttribute("width", "304");
    // y.setAttribute("height", "228");
    // y.setAttribute("alt", "");
    // document.body.appendChild(y);
    document.body.appendChild(x);
}
myFunction();
async function getData() {
    result.innerText = "Loading...";
    try {
        const res = await fetch("https://cataas.com/api/cats");
        const JsonResult = await res.json();
        console.log(JsonResult);
        let result1 = "";
        JsonResult.forEach((item) => {
            result1 += `https://cataas.com/cat/${item.id}` + "\n";
            //onload
        });
        document.getElementById("result").innerText = result1;
        //result.innerHTML = JSON.stringify(JsonResult, null, 2);
    } catch (error) {
        console.log(error);
    } finally {
        console.log("Finally");
    }
}
getData();
