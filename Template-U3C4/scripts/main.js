async function apiCall(url) {


    //add api call logic here

    try{

        let res = await fetch(url);
        let data = await res.json();
        return data;
    }
    catch(err){
        console.log(err)
    }

}


function appendArticles(articles, main) {

    //add append logic here
articles.forEach(el => {
// let maindiv = document.getElementById("main");

let newsdiv = document.createElement("div");
newsdiv.setAttribute("id","news")

let div1 = document.createElement("div");
let h1 = document.createElement("h3");
 h1.innerText = el.title

 let div2 = document.createElement("div");
let h2 = document.createElement("h3");
h2.textContent = el.description

let img = document.createElement("img");
img.src = el.urlToImage;

div1.append(h1)

div2.append(h2)

newsdiv.append(div1,div2,img);
newsdiv.onclick=()=>{
    localStorage.setItem("article",JSON.stringify(el));
    window.location.href = "/Template-U3C4/news.html"
}
main.append(newsdiv)

});

}

export { apiCall, appendArticles }