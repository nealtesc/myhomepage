const modal = document.getElementById("myModal");
const modalImg = document.getElementById("img01");

function closeModal() { 
  modal.style.display = "none";
}

function zoom(event){
    let image = event.srcElement.closest(".article")
        .querySelector(".article__image");
    modal.style.display = "block";
    modalImg.src = image.src;
}

const elements = document.getElementsByClassName("article__button");

for (var i = 0; i < elements.length; i++) {
    elements[i].addEventListener('click', zoom);
}