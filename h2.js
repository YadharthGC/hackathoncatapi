function search() {
    const s = document.querySelector(".x").value;
    console.log("searching");

    fetch(`https://cataas.com/api/cats?tags=${s}`, {
            method: "GET"
        })
        .then(data => data.json())
        .then(users => load(users));

    function load(users) {
        var catlist = document.createElement("div");
        catlist.className = "container"
        catlist.id = "catlist"
        users.forEach((cat) => {
            var a = document.createElement("div");
            a.id = 'cat';
            a.innerHTML = `
            <div class="popup" onclick="myFunction()"><input type="image" class="popup" id="img" src="https://cataas.com/cat/${cat.id}"> <span class="popuptext" id="myPopup"><img src="https://cataas.com/cat/${cat.id}" style="width:150px;height:150px;"></span><div>
            <div>
               <div>Created on:${new Date(cat.created_at).toDateString()}</div>
               <div>Tags:${cat.tags}</div>
            </div>`


            console.log(a);
            catlist.append(a);
        })
        document.body.append(catlist);
    }
    document.querySelector("#catlist").remove();
}

function myFunction() {
    var popup = document.getElementById("myPopup");
    popup.id = "f";
    popup.classList.toggle("show");
}