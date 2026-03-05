const loadlessons = () => {
    fetch("https://openapi.programming-hero.com/api/levels/all")
        .then(res => res.json())
        .then(json => displaylesson(json.data))

};

const displaylesson = (lessons) => {
    const levelcontainer = document.getElementById("level-container");
    levelcontainer.innerHTML = "";
    for (let lesson of lessons) {
        const btndiv = document.createElement("div");
        btndiv.innerHTML = `
            <button class="btn btn-outline btn-primary">
            <i class="fa-solid fa-book-open"></i>Lesson - ${lesson.level_no}
            </button>
        `;
        levelcontainer.append(btndiv);
    }
};