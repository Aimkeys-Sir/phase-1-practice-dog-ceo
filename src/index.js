console.log('%c HI', 'color: firebrick')
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'

document.addEventListener("DOMContentLoaded", async () => {
    fetch(imgUrl)
        .then(response => response.json())
        .then(jsonData => {
            jsonData.message.forEach(src => {
                const image = document.createElement("img")
                image.src = src
                document.getElementById("dog-image-container").append(image)
            })

        })
    let breeds;
    await fetch(breedUrl)
        .then(response => response.json())
        .then(jsonData => {
            breeds = Object.keys(jsonData.message)
            populateLis(breeds)
        })
    
    const options = document.querySelector("#breed-dropdown").children
   
    for(let i=0;i<options.length;i+=1)
    {
        options[i].addEventListener('click',()=>{
           populateLis(findWithFirstLetter(breeds, options[i].value))
        })
    }

})

function findWithFirstLetter(array, letter) {
    return array.filter(element => element[0] == letter)
}
function populateLis(array) {
    const ul= document.getElementById("dog-breeds")
    ul.innerHTML=""
    array.forEach(element => {
        const li = document.createElement("li")
        li.textContent =element
        li.addEventListener('click', () => {
            li.style.color = "red"
        })
       
            ul.append(li)
    })
}


