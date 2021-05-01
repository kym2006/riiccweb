function searchByAuthor() {
    var x = document.getElementById("searchByAuthor");
    tar = x.value
    tar = tar.toLowerCase()
    things=document.getElementById("containerofshowcase")
    for(let i = 0; i < things.childNodes.length; i++) {
        let card = things.childNodes[i];
        if(card.nodeName=="DIV") {
            let author=card.childNodes[1].childNodes[3].childNodes[3].childNodes[1].innerHTML
            author=author.toLowerCase()
            console.log(author)
            if(!author.includes(tar))card.style.display="none"
            if(author.includes(tar))card.style.display="block"
        }
    }
}
function searchByGenre() {
    var x = document.getElementById("searchByGenre");
    tar = x.value
    tar = tar.toLowerCase()
    things=document.getElementById("containerofshowcase")
    for(let i = 0; i < things.childNodes.length; i++) {
        let card = things.childNodes[i];
        if(card.nodeName=="DIV") {
            let author=card.childNodes[1].childNodes[3].childNodes[3].childNodes[5].innerHTML
            author=author.toLowerCase()
            console.log(author)
            if(!author.includes(tar))card.style.display="none"
            if(author.includes(tar))card.style.display="block"
        }
    }
}

function searchByYear() {
    var x = document.getElementById("searchByYear");
    tar = x.value
    tar = tar.toLowerCase()
    things=document.getElementById("containerofshowcase")
    for(let i = 0; i < things.childNodes.length; i++) {
        let card = things.childNodes[i];
        if(card.nodeName=="DIV") {
            let author=card.childNodes[1].childNodes[3].childNodes[3].childNodes[3].innerHTML
            author=author.toLowerCase()
            console.log(author)
            if(!author.includes(tar))card.style.display="none"
            if(author.includes(tar))card.style.display="block"
        }
    }
}