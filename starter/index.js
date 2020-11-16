console.log("Pls work!")

// // Create
// // (NON DYNAMIC) Hand Crafted Artisinal DONT DO
// // step 1
// const cardHeader = document.createElement("h2")
// // step 2 assign any attributes (styule it up)
// cardHeader.id = "card-header"
// cardHeader.textContent = "Look at all these cute animals"
// // step 3 
// // find parent element
// const section = document.querySelector(".container")
// // add it to the page / Slap it on the DOM
// // add to the parent(append/prepend)
// section.prepend(cardHeader)


// // Create: Brute Force
// // step 1 find the parent element
// const animalList = document.querySelector("#animal-list")
// // step 2 set innerHTML to new content
// animalList.innerHTML = "<h3> new string here! <span>OK</span></h3>"
// animalList.innerHTML += 
// // HTML that was there before

// // HYBRID DO THIS 
// // step 1 create the outer element using createElement (&assign necessary attributes)
// const outerLI = document.createElement("li")
// outerLI.className = "card"
// // step 2 user innerHTML to create all of its children
// outerLI.innerHTML = 
// // HTML code that was in there before
// // step 3 slap it on the DOM
// animalList.append(outerLI)



// // Read
// const menu = document.querySelector("#menu")
// const menuHeader = menu.querySelector("h1")

// const cards = document.querySelectorAll(".card")

// // Update
// menuHeader.textContent = "something new!"
// menuHeader.id = "menu-header"
// menuHeader.style.color = "red"
// menuHeader.className = "redish"
// menuHeader.classList.add["primary"]

// // Destroy
// menuHeader.remove()