const keyy_acces = "2RoPgrtX_bUgfB7GYX5PPEkqxz-rL9GNUaFCZj4WpN8"
const formEl = document.querySelector("form")

const inputEl = document.getElementById("search_input")
const searchResult = document.querySelector(".search-results")
const showmore = document.getElementById("show-more-button")

let inputData = ""
let page = 1

async function searchImages(){
    inputData =inputEl.value
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=2RoPgrtX_bUgfB7GYX5PPEkqxz-rL9GNUaFCZj4WpN8`

    const response = await fetch(url)
    const data = await response.json()

    const results =data.results
    console.log(results)

    if (page === 1){
        searchResult.innerHTML=""
    }
    results.map((result)=>{
        const imageWrapper = document.createElement('div')
        imageWrapper.classList.add("search-result")
        const image = document.createElement('img')
        image.src = result.urls.small
        image.alt = result.alt_description
        const imageLink = document.createElement('a')
        imageLink.href = result.links.html 
        imageLink.target = "_blank"
        imageLink.textContent = result.alt_description


        imageWrapper.appendChild(image)
        imageWrapper.appendChild(imageLink)
        searchResult.appendChild(imageWrapper)
    })

    page++
    if(page>1){
        showmore.style.display="block"

    }
} 

formEl.addEventListener("submit",(event)=>{
    event.preventDefault()
    page=1
    // collectWorks()
    searchImages()
})

showmore.addEventListener("click",(event)=>{
    searchImages()
})