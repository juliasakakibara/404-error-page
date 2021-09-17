

const eyeball = document.querySelector(".pupil");

document.onmousemove = (event) => {
    const x = event.clientX * 100 / window.innerWidth + "%";
    const y = event.clientY * 100 / window.innerHeight + "%";

    eyeball.style.left = x;
    eyeball.style.top = y;
    eyeball.style.transform = "translate(- "+x+", -"+y+")";
    console.log(eyeball.style.left)
}
