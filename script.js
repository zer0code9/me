    // { "name": "", "desc": "", "url": "./projects/", "img", "./img/"}
var projects = 
    [
        { "name": "SlashPack", "desc": "URLs to subprojects", "url": "https://slashpack.vercel.app/", "img": "./img/slashp.png" },
        { "name": "CSS Shortcuts", "desc": "CSS shortcuts by class names", "url": "./projects/sc.html", "img": "./img/csssc.png" },
        { "name": "Alias", "desc": "A moderating Discord Bot", "url": "./projects/bot.html", "img": "./img/boticon.png" },
        { "name": "Snippet Master", "desc": "A Snippets VS Code Extension", "url": "./projects/sm.html", "img": "./img/sm.png" },
        { "name": "Break My Stride (Unofficial Music Video)", "desc": "A video of a song by Matthew Wilder",
            "url": "https://docs.google.com/presentation/d/1lUMKIlWoc9HZ6LBY5jwsnKIHYzms_El99yWiq25ZADE/edit#slide=id.g11b37cc8821_0_230"}
    ]
    //{ "name": "", "loc": "", "date": "", "desc": "" },
var experiences = 
    [
        { "name": "Tennis", "loc": "Mills High School", "date": "2016 - Present", "desc": "I play tennis every school year and I started when I was about 6 yo." },
        { "name": "Foster Children Christmas Fair", "loc": "401 Roland Way, Oakland", "date": "December 18, 2021", "desc": "I helped install the fair and deliver Christmas gifts to kids." },
        { "name": "PC Club", "loc": "Mills High School", "date": "October 2020 - May 2023", "desc": "I am learning to assemble the CPU and keys to make a keyboard." },
        { "name": "Boba Bots", "loc": "Mills High School", "date": "October 2019 - May 2020", "desc": "I learned how to make electrical connections from the CPU to other like the motherboard using cables." },
        { "name": "Java Programming", "loc": "Mills High School", "date": "August 2021 - May 2022", "desc": "I took AP Computer Science where I programmed in Java using Eclipse." },
        { "name": "Film Making", "loc": "Mills High School", "date": "August 2021 - May 2022", "desc": "I edited videos to make films both serious and comic using Adobe Premiere Pro." },
    ]
    //{ "name": "", "desc": "", "type": "", "key": "", "color": "" },
var skills = 
    [
        { "name": "JavaScript", "desc": "Good", "type": "Programming", "key": "fab fa-js", "color": "yellow" },
        { "name": "Python", "desc": "Good", "type": "Programming", "key": "fab fa-python", "color": "steelblue" },
        { "name": "Java", "desc": "Good", "type": "Programming", "key": "fab fa-java", "color": "rgb(48, 105, 151)" },
        { "name": "Shell", "desc": "Somewhat Good", "type": "Programming", "key": "fas fa-terminal", "color": "rgb(19, 21, 22)" },
        { "name": "HTML", "desc": "Very Good", "type": "Scripting", "key": "fab fa-html5", "color": "orangered" },
        { "name": "CSS", "desc": "Very Good", "type": "Scripting", "key": "fab fa-css3-alt", "color": "blue" },
        { "name": "MarkDown", "desc": "Very Good", "type": "Scripting", "key": "fab fa-markdown", "color": "rgb(55, 129, 214)" },
        { "name": "SASS", "desc": "Starting", "type": "Scripting", "key": "fab fa-sass", "color": "#c69" },
        { "name": "JSON", "desc": "Excellent", "type": "Scripting", "key": "fas fa-brackets-curly", "color": "black" },
        { "name": "Terminal", "desc": "Good", "type": "UI", "key": "", "color": "" },
        { "name": "Git", "desc": "Very Good", "type": "UI", "key": "fab fa-git-alt", "color": "orangered" },
        { "name": "GitHub", "desc": "Very Good", "type": "UI", "key": "fab fa-github", "color": "" },
        { "name": "VS Code", "desc": "Very Good", "type": "UI", "key": "", "color": "" },
        { "name": "Eclipse", "desc": "Good", "type": "UI", "key": "", "color": "" },
        { "name": "Problem Solving", "desc": "Good", "type": "", "key": "", "color": "" },
        { "name": "Debugging", "desc": "Good", "type": "", "key": "fas fa-bug", "color": "" },
        { "name": "Calculating Results", "desc": "Good", "type": "", "key": "fas fa-gears", "color": "" },
        { "name": "GIMP/Photoshop", "desc": "Good", "type": "Editing", "key": "fas fa-image", "color": "" },
        { "name": "Premiere Pro", "desc": "Good", "type": "Editing", "key": "fas fa-video", "color": "" },
        { "name": "Blender/Three.js", "desc": "Starting", "type": "Editing", "key": "fas fa-cube", "color": "" },
        { "name": "Presentation", "desc": "Good", "type": "Communication", "key": "", "color": "" },
        { "name": "Written", "desc": "Good", "type": "Communication", "key": "", "color": "" },
        { "name": "Teamwork", "desc": "Good", "type": "Work", "key": "", "color": "" },
        { "name": "Selfwork", "desc": "Very Good", "type": "Work", "key": "", "color": "" },
        { "name": "Management", "desc": "Good", "type": "Work", "key": "", "color": "" },
        { "name": "Organization", "desc": "Good", "type": "Work", "key": "", "color": "" },
    ]

function createSkillCard(contents) {
    let card = 
    `<cardc class="card">
        <div class="cardcontent">
            <div class="title">${contents['name']}</div>
            <div class="subtitle">${contents['desc']}</div>
            <div class="creadits">${contents['type']}</div>
        </div>
        <i class="icon ${contents['key']}" style="color: ${contents['color']};"></i>
    </cardc>`
    var place = document.getElementById(`skicards`);
    place.insertAdjacentHTML('beforeend', card);
}
skills.forEach((skill) => {
    createSkillCard(skill);
})

function createExperienceCard(contents) {
    let card = 
    `<cardb class="card">
        <div class="cardcontent">
            <div style="flex-direction; row;"><span class="title">${contents['name']}</span> - <span>${contents['loc']}</span></div>
            <div class="subtitle">${contents['date']}</div>
            <div class="creadits">${contents['desc']}</div>
        </div>
    </cardb>`
    var place = document.getElementById(`expcards`);
    place.insertAdjacentHTML('beforeend', card);
}
experiences.forEach((experience) => {
    createExperienceCard(experience);
})

function createProjectCard(contents) {
    let card = 
    `<a href="${contents['url']}">
    <carda class="card">
        <div class="cardcontent">
            <div class="title">${contents['name']}</div>
            <div class="subtitle">${contents['desc']}</div>
        </div>
        <img class="img" width="212" height="212" 
        src="${contents['img']}">
    </carda>
    </a>`
    var place = document.getElementById(`procards`);
    place.insertAdjacentHTML('beforeend', card);
}
projects.forEach((project) => {
    createProjectCard(project);
})
