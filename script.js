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

function updateSearch() {
    tarauthor = document.getElementById("searchByAuthor").value;
    tarauthor = tarauthor.toLowerCase()
    targenre = document.getElementById("searchByGenre").value;
    targenre = targenre.toLowerCase()
    taryear = document.getElementById("searchByYear").value;
    taryear = taryear.toLowerCase()

    things=document.getElementById("containerofshowcase")
    for(let i = 0; i < things.childNodes.length; i++) {
        let card = things.childNodes[i];
        if(card.nodeName=="DIV") {
            let author=card.childNodes[1].childNodes[3].childNodes[3].childNodes[1].innerHTML
            author=author.substring(7).toLowerCase()

            let genre=card.childNodes[1].childNodes[3].childNodes[3].childNodes[5].innerHTML
            genre = genre.substring(8).toLowerCase()

            let year=card.childNodes[1].childNodes[3].childNodes[3].childNodes[3].innerHTML
            year = year.substring(15).toLowerCase()
            

            
            if(author.includes(tarauthor))card.style.display="block"
            if(genre.includes(targenre))card.style.display="block"
            if(year.includes(taryear))card.style.display="block"

        }
    }
    
    for(let i = 0; i < things.childNodes.length; i++) {
        let card = things.childNodes[i];
        if(card.nodeName=="DIV") {
            let author=card.childNodes[1].childNodes[3].childNodes[3].childNodes[1].innerHTML
            author=author.substring(7).toLowerCase()

            let genre=card.childNodes[1].childNodes[3].childNodes[3].childNodes[5].innerHTML
            genre = genre.substring(8).toLowerCase()

            let year=card.childNodes[1].childNodes[3].childNodes[3].childNodes[3].innerHTML
            year = year.substring(15).toLowerCase()
            
            
            if(!author.includes(tarauthor))card.style.display="none"
            if(!genre.includes(targenre))card.style.display="none"
            if(!year.includes(taryear))card.style.display="none"

        }
    }

}