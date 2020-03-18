// console.log("app.js is linked")
let cat = {
  name: "Mr. Snibbley",
  petCount: 0,
  dosed: false,
  moods: [
    {
      img: "https://images2.minutemediacdn.com/image/upload/c_crop,h_1414,w_2101,x_10,y_0/v1554921998/shape/mentalfloss/549585-istock-909106260.jpg?itok=NB9DbGG9",
      status: "Happy"
    },
    {
      img: "https://media.istockphoto.com/photos/portrait-of-british-short-hair-blue-cat-with-yellow-eyes-picture-id866080898?k=6&m=866080898&s=612x612&w=0&h=WowvebXRpSx52wzJCDs_DD0FrOUCJE5c90nNJ329uIs=",
      status: "Irritated"
    },
    {
      img: "https://us.123rf.com/450wm/baggira/baggira1703/baggira170300027/75539553-a-ferocious-evil-cat-on-the-windowsill-on-the-street-angry-mistrustful-cussing-cat-the-cat-looks-mal.jpg?ver=6",
      status: "Bitey"
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSg8rVyvIUPa2qZ1I-DaipSIjtjQaGuA3kTAmrsK7fLk85qn4qS",
      status: "Bloodthirsty"
    }
  ]
}


// NOTE pet the cat by incrementing the pet counter
function petCat() {
  // console.log("Petting the cat")
  cat.petCount++
  // console.log(cat.petCount)
  draw()
  if (cat.petCount > 5) {
    drawCatMood()
  }
}

function randomizeCatMood() {
  let moodIndex = Math.floor(Math.random() * cat.moods.length)
  let mood = cat.moods[moodIndex]
  return mood
}

function drawCatMood() {
  let catImageElem = document.getElementById("cat-image")
  let catStatusElem = document.getElementById("cat-status")
  let catMood = randomizeCatMood()

  catStatusElem.innerText = catMood.status
  catImageElem.src = catMood.img
}

function intialDraw() {
  let catNameElem = document.querySelector("#cat-name")
  let catStatusElem = document.getElementById("cat-status")
  let catImageElem = document.getElementById("cat-image")
  catImageElem.src = cat.moods[0].img
  catNameElem.textContent = cat.name
  catStatusElem.innerText = cat.moods[0].status

}

function giveCatnip() {
  if (cat.dosed) {
    return
  }
  let interval = setInterval(drawCatMood, 1000)
  setTimeout(function () { cat.dosed = false; clearInterval(interval) }, 10000)
  cat.dosed = true
}



// update petcount on the page dynamically with each button click
function draw() {
  let catPetCountElem = document.getElementById("cat-pet-count")

  // @ts-ignore
  catPetCountElem.innerText = cat.petCount.toString()
}


intialDraw()