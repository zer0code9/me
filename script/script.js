  
    // { "name": "", "desc": "", "url": "./projects/", "img": "./img/"}
var projects = 
    [
        { "name": "SlashPack", "desc": "URLs to subprojects", "url": "https://slashpack.vercel.app/", "img": "./img/slashp.png" },
        { "name": "CSS Shortcuts", "desc": "CSS shortcuts by class names", "url": "./projects/sc.html", "img": "./img/csssc.png" },
        { "name": "Alias", "desc": "A moderating Discord Bot", "url": "./projects/bot.html", "img": "./img/boticon.png" },
        { "name": "Snippet Master", "desc": "A Snippets VS Code Extension", "url": "./projects/sm.html", "img": "./img/sm.png" },
        { "name": "Me Tech Porfolio", "desc": "This website was made from scratch", "url": "./projects/me.html", "img": "./img/"}
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
var i = 0;
var j = 0;
function createSkillCard(contents, j) {
    let card = 
    `<cardc class="card">
        <div class="cardcontent">
            <div class="title">${contents['name']}</div>
            <div class="subtitle">${contents['desc']}</div>
            <div class="creadits">${contents['type']}</div>
        </div>
        <i class="icon ${contents['key']}" style="color: ${contents['color']};"></i>
    </cardc>`
    var place = document.getElementById(`takers${j}`);
    place.insertAdjacentHTML('beforeend', card);
}
skills.forEach((skill) => {
    if (i % 5 == 0) {
        let taker =
        `<taker id="takers${j}"></taker>`
        var place = document.getElementById(`skicards`);
        place.insertAdjacentHTML('beforeend', taker);
        j++;
    }
    createSkillCard(skill, j-1);
    i++;
})

i = 0;
j = 0;
function createExperienceCard(contents, j) {
    let card = 
    `<cardb class="card">
        <div class="cardcontent">
            <div style="flex-direction; row;"><span class="title">${contents['name']}</span> - <span>${contents['loc']}</span></div>
            <div class="subtitle">${contents['date']}</div>
            <div class="creadits">${contents['desc']}</div>
        </div>
    </cardb>`
    var place = document.getElementById(`takere${j}`);
    place.insertAdjacentHTML('beforeend', card);
}
experiences.forEach((experience) => {
    if (i % 3 == 0) {
        let taker =
        `<taker id="takere${j}"></taker>`
        var place = document.getElementById(`expcards`);
        place.insertAdjacentHTML('beforeend', taker);
        j++;
    }
    createExperienceCard(experience, j-1);
    i++;
})

function createProjectCard(contents, j) {
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
    var place = document.getElementById(`takerp${j}`);
    place.insertAdjacentHTML('beforeend', card);
}
projects.forEach((project) => {
    if (i % 3 == 0) {
        let taker =
        `<taker id="takerp${j}"></taker>`
        var place = document.getElementById(`procards`);
        place.insertAdjacentHTML('beforeend', taker);
        j++;
    }
    createProjectCard(project, j-1);
    i++;
})