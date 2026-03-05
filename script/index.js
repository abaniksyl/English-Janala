const loadlessons = () => {
    fetch("https://openapi.programming-hero.com/api/levels/all")
        .then(res => res.json())
        .then(json => displaylesson(json.data))

};



const displaylesson = (lessons) => {
    const levelcontainer = document.getElementById("level-container");
    levelcontainer.innerHTML = "";

    for (const lesson of lessons) {
        console.log(lesson);
        const bntdiv = document.createElement("div");
        bntdiv.innerHTML = `<button class="btn btn-outline btn-primary"><i class="fa-solid fa-book-open"></i>Lessons - ${lesson.level_no}</button>`;

        levelcontainer.append(bntdiv);
    }
};

loadlessons();