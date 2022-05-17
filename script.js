var projects = 
    [
        { "name": "SlashPack", "desc": "URLs to subprojects", "url": "https://slashpack.vercel.app/", "img": "./img/slashp.png" },
        { "name": "CSS Shortcuts", "desc": "CSS shortcuts by class names", "url": "https://slashpack.vercel.app/shortcut/cssSC.css", "img": "./img/csssc.png" },
        { "name": "Alias", "desc": "A moderating Discord Bot", "url": "./projects/bot.html", "img": "./img/boticon.png" },
        { "name": "Snippet Master", "desc": "A Snippets VS Code Extension", "url": "./projects/sm.html", "img": "./img/sm.png" },
        { "name": "Break My Stride (Unofficial Music Video)", "desc": "A video of a song by Matthew Wilder",
            "url": "https://docs.google.com/presentation/d/1lUMKIlWoc9HZ6LBY5jwsnKIHYzms_El99yWiq25ZADE/edit#slide=id.g11b37cc8821_0_230"}
    ]
var experiences = 
    [
        { "name": "" }
    ]
    //{ "name": "", "desc": "", "type": "", "key": "", "color": "" },
var skills = 
    [
        { "name": "JavaScript", "desc": "Good", "type": "Programming", "key": "js", "color": "yellow" },
        { "name": "Python", "desc": "Good", "type": "Programming", "key": "python", "color": "steelblue" },
        { "name": "Java", "desc": "Good", "type": "Programming", "key": "java", "color": "rgb(48, 105, 151)" },
        { "name": "Shell", "desc": "Somewhat Good", "type": "Programming", "key": "rectangle-terminal", "color": "rgb(19, 21, 22)" },
        { "name": "HTML", "desc": "Very Good", "type": "Scripting", "key": "html5", "color": "orangered" },
        { "name": "CSS", "desc": "Very Good", "type": "Scripting", "key": "css3-alt", "color": "blue" },
        { "name": "MarkDown", "desc": "Very Good", "type": "Scripting", "key": "markdown", "color": "rgb(55, 129, 214)" },
        { "name": "SASS", "desc": "Starting", "type": "Scripting", "key": "sass", "color": "#c69" },
        { "name": "JSON", "desc": "Excellent", "type": "Scripting", "key": "brackets-curly", "color": "black" },
        { "name": "Terminal", "desc": "Good", "type": "UI", "key": "", "color": "" },
        { "name": "Git", "desc": "Very Good", "type": "UI", "key": "", "color": "" },
        { "name": "GitHub", "desc": "Very Good", "type": "UI", "key": "", "color": "" },
        { "name": "VS Code", "desc": "Very Good", "type": "UI", "key": "", "color": "" },
        { "name": "Eclipse", "desc": "Good", "type": "UI", "key": "", "color": "" },
        { "name": "Problem Solving", "desc": "Good", "type": "", "key": "", "color": "" },
        { "name": "Debugging", "desc": "Good", "type": "", "key": "", "color": "" },
        { "name": "Calculating Results", "desc": "Good", "type": "", "key": "", "color": "" },
        { "name": "GIMP/Photoshop", "desc": "Good", "type": "Editing", "key": "", "color": "" },
        { "name": "Premiere Pro/WeVideo", "desc": "Good", "type": "Editing", "key": "", "color": "" },
        { "name": "Blender/Three.js", "desc": "Starting", "type": "Editing", "key": "", "color": "" },
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
        <i class="icon fab fa-${contents['key']}" style="color: ${contents['color']};"></i>
    </cardc>`
    var place = document.getElementById(`skicards`);
    place.insertAdjacentHTML('beforeend', card);
}
skills.forEach((skill) => {
    createSkillCard(skill);
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
