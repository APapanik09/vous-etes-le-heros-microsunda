


let chaptersObj = {
prologue: {
    subtitle: "C'est l'apocalypse!",
    text: "Vous et votre ami avez été à la recherche d'un mystérieux laboratoire qui est censé contenir un prototype de l'antidote contre le virus zombie et aujourd'hui est le jour où vous avez enfin trouvé son emplacement. Vous êtes maintenant prêts à partir ! ",
    img:"main_zombie.jpg",
    options: [
        {text:'Commencez votre adventure?', action:'goToChapter("livres")'}
    ]
},

livres: {
    subtitle: "C'est une matière de langues!",
    text: "Vous êtes en route vers le laboratoire quand vous apercevez deux livres de traductions par terre; vous avez de la place dans votre sac pour un de ces deux livres. Lequel choisissez-vous?",
    img:"books.jpg",
    options: [
        {text:'Sanskrit', action:'goToChapter("barricade")'},
        {text:'Latin', action:'livreTrue()'},
    ]
},

barricade: {
    subtitle: "Faites vite!",
    text: "Vous avez trouvé le laboratoire mais une horde de zombies s'approche rapidement de vous. Ton amie se fait mordre et vous rentrer hâtivement dans dans le laboratoire. Vous avez le choix entre deux types de barricades pour vous protéger des zombies affamés.",
    img:"barricade_latch.jpg",
    options: [
        {text:'Déplacer une commode devant la porte?', action:'goToChapter("finbarr")'},
        {text:'Renforcer la porte avec des planches de bois?', action:'goToChapter("trouvliv")'},
    ]
},

trouvliv: {
    subtitle: "Une belle trouvaille",
    text: "Après avoir barricadé adéquatement la porte, vous vous mettez toute suite à chercher cet supposé antidote, vous devez vite faire vu que votre amie à été mordue et elle va se changer en zombie d'ici 5 minutes. Pendant vos recherches vous tombez sur un livre qui s'appelle Microsunda. ",
    img:"microsunda.jpg",
    options: [
        {text:'Ouvrir le livre', action:'livreStatus()'}
    ]
},

finbarr: {
    subtitle: "MAUVAISE FIN I",
    text: "Les zombies avec leur force font tomber la commode et défoncent la porte.Vous êtes mort!",
    img:"mauv_barr.jpg",
    options: [
        {text:'Réessayer', action:'goToChapter("prologue")'},
    ],
    video:"badendingzombie.mp4"
},

verifliv: {
    subtitle: "Le fameux remède!",
    text: "Vous ouvrez le livre et découvrez qu'il est en latin. Heureusement, vous avez justement pris le livre de traduction latin lors de votre trajet vers le laboratoire. Vous pouvez donc le traduire. Les mots sur la première page racontent l'histoire d'un scientifique et de sa miraculeuse découverte d'un antidote contre ce fichu virus. Malheureusement en s'utilisant comme propre cobaye durant ses expérimentations, il s'est condamné à mourir et n'a pas pu transmettre son savoir. À cause de son infection, les instructions pour recréer le virus sont énigmatiques et disjonctées, vous devez donc résoudre plusieurs énigmes pour connaître les ingrédients ainsi que les étapes nécessaires à la fabrication de cet antidote. Le livre vous dit qu'il vous faut une fleur, un élément chimique et quelque chose d'organique mais ne spécifie pas plus que ça. Vous réalisez qu'il y a trois pages du livre qui sont déchirées, celles-ci sont éparpillées près de substances qui pourraient servir d'ingrédients. La dernière ligne du livre souligne que l'antidote devrait virer au bleu une fois mélangé.",
    img:"livre_ouvert.jpg",
    options: [
        {text:'Suivant', action:'goToChapter("enigfleur")'},
    ],
    video:"booklatin.mp4"
},

finliv: {
    subtitle: "MAUVAISE FIN II",
    text: "Vous ouvrez le livre et découvrez qu'il est en latin. Malheureusement vous avez choisi de garder le livre de traduction Sanskrit, vous ne pouvez pas traduire le livre qui contient le remède, ton amie se change en zombie. Vous êtes mort!",
    img:"zombiefille.jpg",
    options: [
        {text:'Réessayer', action:'goToChapter("prologue")'},
    ],
    video:"badendingzombie.mp4"
},

enigfleur: {
    subtitle: "Un joyeux bouquet",
    text: "Vous vous approchez d'une des pages déchirées, près de celle-ci se trouve un bac où poussent plusieurs types de fleurs, sur la feuille est écrit une charade: « Je suis la fleur qui fait fuir la peur de l'au-delà, et qui met au repos ceux qui ne sont plus-là.»",
    img:"spiderlily.jpg",
    options: [
        {text:'Lycoris Radiata', action:'lycoTrue()'},
        {text:'Echinacea', action:'goToChapter("enigchim")'},
    ]
},

enigchim: {
    subtitle: "Des fioles et des substances",
    text: "Avec votre fleur en main, vous vous dirigez vers l'autre feuille déchirée, celle-ci se trouve devant un bureau avec plusieurs fioles contenant des substances chimiques et odorantes. Vous lisez la charade: « Je suis utilisé pour préserver un corps, hors pour l'alimenter. »",
    img:"chempotion.jpg",
    options: [
        {text:'Formaldéhyde', action:'formaTrue()'},
        {text:'Acide Ascorbique', action:'goToChapter("enigorg")'},
    ]
},

enigorg: {
    subtitle: "C'est un peu glauque...",
    text: "Avec votre fleur et votre substance chimique en main, vous vous dirigez vers la dernière feuille déchirée, celle-ci se trouve devant une table avec plusieurs pots contenant des parties différentes du corps humain. Vous êtes dégouté mais vous lisez tout de même la charade: « De mon essence y découle la vie, de la vie y en découle ma survie »",
    img:"bones.jpg",
    options: [
        {text:'Oculus', action:'goToChapter("verifing")'},
        {text:'Medulla Ossium', action:'meduTrue()'}
    ]
},

verifing: {
    subtitle: "Le moment de vérité",
    text: "Vous pensez avoir tous les ingrédients, alors vous allez trouver un récipient où les mélanger.",
    img:"flask.jpg",
    options: [
        {text:'Mélanger?', action:'ingStatus()'}
    
    ]
},

fining: {
    subtitle: "MAUVAISE FIN III",
    text: "Malheureusement, la concoction ne vire pas au bleu, vous avez mal résolu les charades. Votre amie se change en zombie et vous mange la cervelle! Vous êtes mort!",
    img:"zombiefille.jpg",
    options: [
        {text:'Réessayer', action:'goToChapter("prologue")'}
    ],
    video:"badendingzombie.mp4"
},

choixcui: {
    subtitle: "Cuire ou ne pas cuire",
    text: "Votre mélange devient bleu! Vous avez bien résolu les charades et obtenu les bons ingrédients. Il est indiqué dans le livre qu'il ne reste plus qu'à cuire le mélange. Bizarrement,  il n'y aucune indication inscrite pour la méthode de cuisson à utiliser. Vous avez le choix entre un micro-onde ou un four… Choisissez-bien.",
    img:"bluepotion.jpg",
    options: [
        {text:'Micro-onde', action:'goToChapter("finmicro")'},
        {text:'Four', action:'goToChapter("finfour")'},
    ],
    video:"bluepotion.mp4"
},

finfour: {
    subtitle: "MAUVAISE FIN IV",
    text: "Oh non! L'antidote prend feu! Votre amie se transforme en zombie! Avant de mourir, vous réalisez que le nom du livre était Microsunda, traduit du latin au français cela donne… micro-onde… Vous êtes mort!!",
    img:"zombiefille.jpg",
    options: [
        {text:'Réessayer', action:'goToChapter("prologue")'}
    ],
    video:"ovenfire.mp4"

},

finmicro: {
    subtitle: "BONNE FIN",
    text: "C'était la bonne méthode de cuisson! Votre amie est guérie et vous pouvez commencer à guérir l'humanité aussi!",
    img:"syringe.jpg",
    options: [
        {text:'Recommencer?', action:'goToChapter("prologue")'}
    ],
    video:"goodendingzombies.mp4"
},


}

function goToChapter(chapterName) {
    document.querySelector(".chapitre").textContent=chaptersObj[chapterName]["subtitle"];
    document.querySelector(".texte").textContent=chaptersObj[chapterName]["text"];
    document.querySelector(".imags").innerHTML= '<img class="representation" src="assets/images/'+ chaptersObj[chapterName]["img"] +'">';
    let mesopt = document.querySelector(".options");
    mesopt.innerHTML="";


    for(element of chaptersObj[chapterName]['options']){
        let bout = document.createElement("button");    
        bout.appendChild(document.createTextNode(element["text"]));
        mesopt.appendChild(bout);
        bout.setAttribute("onclick",element["action"]);
        bout.setAttribute("type","button");


    }

if (chaptersObj[chapterName]["video"]) {
    document.querySelector(".imags").innerHTML = '<video class="vids" src="assets/video/' + chaptersObj[chapterName]["video"] + '"autoplay loop muted"">';

} else {
    document.querySelector(".imags").innerHTML= '<img class="representation" src="assets/images/'+ chaptersObj[chapterName]["img"] +'">';

}
let soundEffect = new Audio("assets/sounds/buttonsounds.wav");
soundEffect.play();

localStorage.setItem("Name",[chapterName]);


}

let livreFound = Boolean("Livre");
let lycoChose = Boolean("Lycoris Radiata");
let formaChose = Boolean("Formaldehyde");
let meduChose = Boolean("Medulla Ossium");

localStorage.setItem("Livre", false);
localStorage.setItem("Lycoris Radiata", false);
localStorage.setItem("Formaldehyde", false);
localStorage.setItem("Medulla Ossium", false);

function livreTrue(){
    localStorage.setItem("Livre", true);
    livreFound = Boolean("Livre");
    goToChapter("barricade");
}

function livreStatus(){
    if (livreFound == true) {
        goToChapter("verifliv");
    } else {
        goToChapter("finliv");
    }
}

function lycoTrue() {
    localStorage.setItem("Lycoris Radiata", true);
    lycoChose = Boolean("Lycoris Radiata");
    goToChapter("enigchim");
}

function formaTrue(){
    localStorage.setItem("Formaldehyde", true);
    formaChose = Boolean("Formaldehyde");
    goToChapter("enigorg");
}

function meduTrue(){
    localStorage.setItem("Medulla Ossium", true);
    meduChose = Boolean("Medulla Ossium");
    goToChapter("verifing");
}

function ingStatus(){
    if (lycoChose==true && formaChose==true && meduChose==true){
        goToChapter("choixcui");
    } else {
        goToChapter("fining");
    }
}

let currentChapter = localStorage.getItem("Name")

function playStory() {
    if (currentChapter !=="prologue") {
        goToChapter(currentChapter)
    } else {
        goToChapter("prologue")
    }
}

playStory();


/*function reset() {
    livreFound = false;
    lycoChose = false;
    formaChose = false;
    meduChose = false;
    localStorage.clear();
    goToChapter("prologue");
}*/