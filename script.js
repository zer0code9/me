var projects = 
    [
        { "name": "SlashPack", "desc": "URLs to subprojects", "url": "https://slashpack.vercel.app/", "img": "./img/slashp.png" },
        { "name": "CSS Shortcuts", "desc": "CSS shortcuts by class names", "url": "https://slashpack.vercel.app/shortcut/cssSC.css", "img": "./img/csssc.png" },
        { "name": "SlashDEV", "desc": "A multi-action online program", "url": "", "img": "./img/slash.png" },
        { "name": "Alias", "desc": "A moderating Discord Bot", "url": "./projects/bot.html", "img": "./img/boticon.png" },
        { "name": "Snippet Master", "desc": "A Snippets VS Code Extension", "url": "https://marketplace.visualstudio.com/items?itemName=SlashDEV.snippet-master", "img": "./img/sm.png" }
    ]
var experiences = 
    [
        { "name": "" }
    ]
var skills = 
    [
        { "name": "JavaScript", "desc": "Advanced", "type": "Programming", "key": "js", "color": "yellow" },
        { "name": "Python", "desc": "Intermediate", "type": "Programming", "key": "python", "color": "steelblue" },
        { "name": "Java", "desc": "Advanced", "type": "Programming", "key": "java", "color": "rgb(48, 105, 151)" },
        { "name": "Shell", "desc": "Intermediate", "type": "Programming", "key": "rectangle-terminal", "color": "rgb(19, 21, 22)" },
        { "name": "HTML", "desc": "Advanced", "type": "Scripting", "key": "html5", "color": "orangered" },
        { "name": "CSS", "desc": "Advanced", "type": "Scripting", "key": "css3-alt", "color": "blue" },
        { "name": "MarkDown", "desc": "Advanced", "type": "Scripting", "key": "markdown", "color": "rgb(55, 129, 214)" },
        { "name": "SASS", "desc": "Beginner", "type": "Scripting", "key": "sass", "color": "#c69" },
        { "name": "JSON", "desc": "Expert", "type": "Scripting", "key": "brackets-curly", "color": "black" },
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
