var likes = 3;
var likesElement = document.querySelector("#likes")

function counter() {
    likes++;
    likesElement.innerText = likes + " like(s)"
    console.log(likes);
}