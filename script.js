const KittenApi = "https://api.pexels.com/v1/search?query=kittens"
const raccoonApi = "https://api.pexels.com/v1/search?query=raccoon"

const fetchAndUpdateImages = (apiUrl) => {
  fetch(apiUrl, {
    headers: {
      Authorization: "DwXHiHjKo2OxAjEwQXmDIZ3wSDdAoBYiJ0nXHDpIGL6rkYrI81IRWNHd",
    },
  })
    .then((response) => {
      if (response.ok) {
        return response.json()
      } else {
        throw new Error("Qualcosa non va")
      }
    })
    .then((data) => {
      const images = document.querySelectorAll(".card-img-top")
      data.photos.forEach((photo, i) => {
        if (images[i]) {
          images[i].setAttribute("src", photo.src.medium)
          images[i].setAttribute("alt", `Photo by ${photo.photographer}`)
        }
      })
    })
    .catch((error) => {
      console.error("Si è verificato un errore:", error)
    })
}

document.getElementById("load-images").addEventListener("click", () => {
  fetchAndUpdateImages(KittenApi)
})

document
  .getElementById("load-secondary-images")
  .addEventListener("click", () => {
    fetchAndUpdateImages(raccoonApi)
  })

const edit = document.querySelectorAll(".btn-outline-secondary")
edit.forEach((edit, i) => {
  edit.innerText = "Hide"
})
