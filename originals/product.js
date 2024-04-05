let proitem = document.querySelectorAll('.profunction2 .proitem');
let next = document.getElementById('protech2');
let prev = document.getElementById('protech1');
const probtn2 = document.querySelector('.probtn2');

let proimg = document.querySelectorAll('.promonster1 .proimg');

let countItem = proitem.length;
let itemActive = 0;
next.onclick = function() {
    itemActive = itemActive + 1;
    if (itemActive >= countItem) {
        itemActive = 0;
    }
    showSlider();
}
prev.onclick = function() {
    itemActive = itemActive - 1;
    if (itemActive < 0) {
        itemActive = countItem - 1;
    }
    showSlider();
}

function showSlider() {
    let itemActiveOld = document.querySelector('.profunction2 .proitem.active');
    let thumbnailActiveOld = document.querySelector('.promonster1 .proimg.active');
    itemActiveOld.classList.remove('active');
    thumbnailActiveOld.classList.remove('active');
    proitem[itemActive].classList.add('active');
    proimg[itemActive].classList.add('active');

}
proimg.forEach((thumbnail, index) => {
    thumbnail.addEventListener('click', () => {
        itemActive = index;
        showSlider();
    })
})

let added = false;
probtn2.addEventListener('click', () => {
    if (added) {
        probtn2.style.backgroundColor = "black";
        probtn2.innerHTML = `<h3>Add to cart</h3>`;
        added = false;
    } else {
        probtn2.style.backgroundColor = "grey";
        probtn2.style.border = "none";
        probtn2.innerHTML = `<h3>Added</h3><i class="fas fa-check"></i>`;
        added = true;
    }

});