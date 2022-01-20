let request = new XMLHttpRequest();
request.open("GET","index.json", false);
request.send(null);
let jsonfile = JSON.parse(request.responseText);

console.log(jsonfile);

for (let key in jsonfile) {
    if (jsonfile.hasOwnProperty(key)) {
        console.log(key + " -> " + jsonfile[key]);
        element = document.getElementById(key)
        console.log(element.id);
        console.log(element.nodeName);
        if (element.nodeName.includes("IMG")){
            document.getElementById(key).src = jsonfile[key];        
        }
        if (element.id.includes("header-social-links")||element.id.includes("footer-social-links")){
            document.getElementById(key).href = jsonfile[key];        
        }
        else {
        document.getElementById(key).innerHTML = JSON.parse(JSON.stringify(jsonfile[key]));
        }    
    }
}
//