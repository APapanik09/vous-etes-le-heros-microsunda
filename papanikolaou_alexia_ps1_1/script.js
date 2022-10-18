let chaptersObj = {
prologue: {
    subtitle: "C'est l'apocalypse!",
    text: "Vous et votre ami avez été à la recherche d'un mystérieux laboratoire qui est censé contenir un prototype de l'antidote contre le virus zombie et aujourd'hui est le jour où vous avez enfin trouvé son emplacement. Vous êtes maintenant prêts à partir ! ",
    img:"lab_PS1.png",
    options: [
        {text:'Commencez votre adventure?', action:'goToChapter("livres")'}
    ]
},

livres: {
    subtitle: "C'est une matière de langues!",
    text: "Vous êtes en route vers le laboratoire quand vous apercevez deux livres de traductions par terre; vous avez de la place dans votre sac pour un de ces deux livres. Lequel choisissez-vous?",
    img:"",
    options: [
        {text:'Sanskrit', action:'goToChapter("barricade")'},
        {text:'Latin', action:'goToChapter("barricade")'},
    ]
},

barricade: {
    subtitle: "Faites vite!",
    text: "Vous avez trouvé le laboratoire mais une horde de zombies s'approche rapidement de vous. Ton amie se fait mordre et vous rentrer hâtivement dans dans le laboratoire. Vous avez le choix entre deux types de barricades pour vous protéger des zombies affamés.",
    img:"",
    options: [
        {text:'Déplacer une commode devant la porte?', action:'goToChapter("finbarr")'},
        {text:'Renforcer la porte avec des planches de bois?', action:'goToChapter("trouvliv")'},
    ]
},

trouvliv: {
    subtitle: "Une belle trouvaille",
    text: "Après avoir barricadé adéquatement la porte, vous vous mettez toute suite à chercher cet supposé antidote, vous devez vite faire vu que votre amie à été mordue et elle va se changer en zombie d'ici 5 minutes. Pendant vos recherches vous tombez sur un livre qui s'appelle Microsunda. ",
    img:"",
    options: [
        {text:'Ouvrir le livre', action:'goToChapter("verifliv")'},
    ]
},

finbarr: {
    subtitle: "MAUVAISE FIN I",
    text: "Les zombies avec leur force font tomber la commode et défoncent la porte.Vous êtes mort!",
    img:"",
    options: [
        {text:'Réessayer', action:'goToChapter("prologue")'},
    ]
},

verifliv: {
    subtitle: "Le fameux remède!",
    text: "Vous ouvrez le livre et découvrez qu'il est en latin. Heureusement, vous avez justement pris le livre de traduction latin lors de votre trajet vers le laboratoire. Vous pouvez donc le traduire. Les mots sur la première page racontent l'histoire d'un scientifique et de sa miraculeuse découverte d'un antidote contre ce fichu virus. Malheureusement en s'utilisant comme propre cobaye durant ses expérimentations, il s'est condamné à mourir et n'a pas pu transmettre son savoir. À cause de son infection, les instructions pour recréer le virus sont énigmatiques et disjonctées, vous devez donc résoudre plusieurs énigmes pour connaître les ingrédients ainsi que les étapes nécessaires à la fabrication de cet antidote. Le livre vous dit qu'il vous faut une fleur, un élément chimique et quelque chose d'organique mais ne spécifie pas plus que ça. Vous réalisez qu'il y a trois pages du livre qui sont déchirées, celles-ci sont éparpillées près de substances qui pourraient servir d'ingrédients. La dernière ligne du livre souligne que l'antidote devrait virer au bleu une fois mélangé.",
    img:"",
    options: [
        {text:'Suivant', action:'goToChapter("enigfleur")'},
    ]
},

finliv: {
    subtitle: "MAUVAISE FIN II",
    text: "Vous ouvrez le livre et découvrez qu'il est en latin. Malheureusement vous avez choisi de garder le livre de traduction Sanskrit, vous ne pouvez pas traduire le livre qui contient le remède, ton amie se change en zombie. Vous êtes mort!",
    img:"",
    options: [
        {text:'Réessayer', action:'goToChapter("prologue")'},
    ]
},

enigfleur: {
    subtitle: "Un joyeux bouquet",
    text: "Vous vous approchez d'une des pages déchirées, près de celle-ci se trouve un bac où poussent plusieurs types de fleurs, sur la feuille est écrit une charade: « Je suis la fleur qui fait fuir la peur de l'au-delà, et qui met au repos ceux qui ne sont plus-là.»",
    img:"",
    options: [
        {text:'Lycoris Radiata', action:'goToChapter("engichim")'},
        {text:'Echinacea', action:'goToChapter("engichim")'},
    ]
},

enigchim: {
    subtitle: "Des fioles et des substances",
    text: "Avec votre fleur en main, vous vous dirigez vers l'autre feuille déchirée, celle-ci se trouve devant un bureau avec plusieurs fioles contenant des substances chimiques et odorantes. Vous lisez la charade: « Je suis utilisé pour préserver un corps, hors pour l'alimenter. »",
    img:"",
    options: [
        {text:'Formaldéhyde', action:'goToChapter("enigorg")'},
        {text:'Acide Ascorbique', action:'goToChapter("enigorg")'},
    ]
},

enigorg: {
    subtitle: "C'est un peu glauque...",
    text: "Avec votre fleur et votre substance chimique en main, vous vous dirigez vers la dernière feuille déchirée, celle-ci se trouve devant une table avec plusieurs pots contenant des parties différentes du corps humain. Vous êtes dégouté mais vous lisez tout de même la charade: « De mon essence y découle la vie, de la vie y en découle ma survie »",
    img:"",
    options: [
        {text:'Oculus', action:'goToChapter("verifing")'},
        {text:'Medulla Ossium', action:'goToChapter("verifing")'}
    ]
},

verifing: {
    subtitle: "Le moment de vérité",
    text: "Vous pensez avoir tous les ingrédients, alors vous allez trouver un récipient où les mélanger.",
    img:"",
    options: [
        {text:'Mélanger?', action:'goToChapter("choixcui")'}
    
    ]
},

fining: {
    subtitle: "MAUVAISE FIN III",
    text: "Malheureusement, la concoction ne vire pas au bleu, vous avez mal résolu les charades. Votre amie se change en zombie et vous mange la cervelle! Vous êtes mort!",
    img:"",
    options: [
        {text:'Réessayer', action:'goToChapter("prologue")'}
    ]
},

choixcui: {
    subtitle: "Cuire ou ne pas cuire",
    text: "Votre mélange devient bleu! Vous avez bien résolu les charades et obtenu les bons ingrédients. Il est indiqué dans le livre qu'il ne reste plus qu'à cuire le mélange. Bizarrement,  il n'y aucune indication inscrite pour la méthode de cuisson à utiliser. Vous avez le choix entre un micro-onde ou un four… Choisissez-bien.",
    img:"",
    options: [
        {text:'Micro-onde', action:'goToChapter("finmicro")'},
        {text:'Four', action:'goToChapter("finfour")'},
    ]
},

finfour: {
    subtitle: "MAUVAISE FIN IV",
    text: "Oh non! L'antidote prend feu! Votre amie se transforme en zombie! Avant de mourir, vous réalisez que le nom du livre était Microsunda, traduit du latin au français cela donne… micro-onde… Vous êtes mort!!",
    img:"",
    options: [
        {text:'Réessayer', action:'goToChapter("prologue")'}
    ]
},

finmicro: {
    subtitle: "BONNE FIN",
    text: "C'était la bonne méthode de cuisson! Votre amie est guérie et vous pouvez commencer à guérir l'humanité aussi!",
    img:"",
    options: [
        {text:'Recommencer?', action:'goToChapter("prologue")'}
    ]
},


}

function goToChapter(chapterName) {
    document.querySelector(".chapitre").textContent=chaptersObj[chapterName]["subtitle"];
    document.querySelector(".texte").textContent=chaptersObj[chapterName]["text"];
    document.querySelector(".imags").innerHTML= '<img class="representation" src="assets/images/'+ chaptersObj[chapterName]["img"] +'">';
    console.log(chaptersObj[chapterName]["options"]);
}; 