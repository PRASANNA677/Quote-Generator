
function genQuote(){
    const quote=document.getElementById('quote-text')
    const author=document.getElementById('author-text')
    fetch("https://type.fit/api/quotes")
    .then((x)=>{
        const jsonData=x.json()
        return jsonData
    })
    .then((z)=>{
        const quoteArray=z
        var randomNumber=Math.floor(Math.random()*quoteArray.length)
        author.innerText=z[randomNumber].author
        quote.innerText=z[randomNumber].text
    })
}