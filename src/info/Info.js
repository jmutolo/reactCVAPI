import self from "../img/self.png"


/* Hi there! Thanks for checking out my portfolio template. Be sure to read the comments to get a better understanding of
how to make this template work best for you! */

//export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];
export let colors = ["rgb(187, 249, 242)", "rgb(13, 26, 60)"];
/*
I highly recommend using a gradient generator like https://gradientgenerator.paytonpierce.dev/ to generate a pair of colors that you like.
These colors will be used to style your name on the homepage, the background of your picture, and some other accents throughout
the site.
 */


/*
So let's get started! Some of the info below is pretty self-explanatory, like 'firstName' and 'bio'. I'll try to explain anything
that might not be obvious right off the bat :) I recommend looking at the template example live using "npm start" to get an idea
of what each of the values mean.
 */

export const info = {
    firstName: "Joaquin",
    lastName: "Mutolo",
    initials: "jm", // the example uses first and last, but feel free to use three or more if you like.
    position: "Desarrollador Front-End",
    selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
    baseColor: colors[0],
    miniBio: [ // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like
        {
            emoji: '📳',
            text: '+54 9 11 2256 4423'
        },
        {
            emoji: '🌎',
            text: 'Buenos Aires - Argentina'
        },
        {
            emoji: "💼",
            text: "Desarrollador Front-End Freelancer"
        },
        {
            emoji: "📧",
            text: "joaquinmutolo@gmail.com"
        }
    ],
    socials: [
        {
            link: "https://www.linkedin.com/in/joaqu%C3%ADn-m%C3%BAtolo-826178219/?locale=en_US",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        },
        {
            link: "https://www.instagram.com/joacomutolo/",
            icon: 'fa fa-instagram',
            label: 'instagram'
        }
// Feel free to remove any of these that you don't have. I'll write an FAQ on how to add new ones later, let me know if you have a request for an icon!
// Just change the links so that they lead to your social profiles.

    ],
    
    bio: "Hola! Soy Joaquin Mutolo, desarrollador frontend freelancer. Estudio Desarrollo de Software en la UADE y me gusta crear sitios webs creativos y amigables",
    skills:
        {
            proficientWith: ['javascript', 'react', 'git', 'github', 'bootstrap', 'html5', 'css3', 'figma', 'webflow', 'wordpress', 'python', 'sql'],
            exposedTo: ['nodejs', 'django', 'adobe illustrator', 'mongodb', 'photoshop']
        }
    ,
    hobbies: [
        {
            label: 'ciclismo',
            emoji: '🚴‍♀️'
        },
        {
            label: 'nautica',
            emoji: '⛵'
        },
        {
            label: 'musica',
            emoji: '🎹'
        }
// Same as above, change the emojis to match / relate to your hobbies or interests.
// You can also remove the emojis if you'd like, I just think they look cute :P
    ],
    idiomas: [
        {
            label: 'español',
            emoji: '🇪🇸'
        },
        {
            label: 'ingles',
            emoji: '🇬🇧'
        }
    ],
    certificaciones: [
        {
            titulo: "Tecnico en Desarrollo de Software",
            institucion: "UADE",
            año: "2024"
        }
    ],
    
}