

export interface BuzzWordPage {
    buzzWord: string,
    content: string,
    url: string,
}

export enum BuzzWords {
    Hipster = "Hipster",
    SoftwareDev = "Software Dev",
    GenZ = "Gen Z",
    Dancer = "Dancer",
    Cyberpoet= "Cyberpoet",
    Technophilosopher = "Technophilosopher",
}
var targetDate = new Date('December 11, 2023');
// Get the current date
var currentDate = new Date();

// Calculate the difference in milliseconds
var difference = currentDate.getTime() - targetDate.getTime()
// Convert milliseconds to days
var daysPassed = Math.floor(difference / (1000 * 60 * 60 * 24));

export const buzzWordPages: BuzzWordPage[] = [
    {
        buzzWord: "Cyberpoet",
        content: `I believe that coding is a form of poetry. It is because coding is merely the process of 
        interweaving logic and abstraction within lines to create meaning. I want to write a book about the art of coding.
        It is currently in the making, and the first revision will be published this summer after I build my startups.`,
        url: "me-rose.jpg",
    },
    {
        buzzWord: "Technophilosopher",
        content: `Technology has changed our psyche in ways humanity has never seen before for good and for bad. We have to be using technology to its fullest potential while not letting it rot our brain.
        I am not your traditional programmer (I don't think any programmer has a model portfolio, rarely any are jacked). My unique background and skillset poises me to bring balance to the industry. You have my word.`,
        url: "planta-wow.jpg",
    },
    {
        buzzWord: "Hipster",
        content: "My moustache says it all. Who cares about fitting in with everyone? We should celebrate our uniqueness & individuality with how we look.",
        url: "trump.jpg",
    },
    {
        buzzWord: "Software Dev",
        content: `To take on software development as my craft has enlightened me to climb mountain after mountain for the rest of my life.
        The art of making mistakes, learning from them and growing is BEAUTIFUL! This is actually what inspired my first photoshoot. Software development is hard; I have failed so many times. I have made so many bugs, but growing from them is what makes it so meaningful. `,
        url: "github.png",
    },
    {
        buzzWord: "Gen Z",
        content: `I put emojis in my tech presentations at work 😜. This is because the rich character set of UTF-8 should be used to its fullest potential as it allows us to express ourselves and extend language in a way that humanity has never seen before ❤️.`,
        url: "side.png",
    },
    {
        buzzWord: "Dancer",
        content: `December 11th, 2023 I took my first dance lesson. Oh boy was I humbled 😬. 
        I did not know anything. ${daysPassed} days have passed and I have grown so much since :).`,
        url: "side.png",
    }
]

export enum PhotoshootTypes {
    Opportunities = "opportunities",
    Grad = "grad",
    Planta = "planta",
    PuertoRico = "puerto-rico"
}

export interface Photoshoot {
    title: string,
    photos: string[],
    description: string,
    url: string,
    photographer: string
}

export const Photoshoots: Photoshoot[] = [
{
    title: "Problems Are Opportunities For Growth",
    photos: ["sexy-pose.jpg", "me-rose.jpg"],
    description: `
    We need to accept that problems are a part of life, we need to accept that we will make mistakes, because it is what makes life so beautiful. 
    From the day that you were born, you have been exploring this world, making mistakes and having problems. They are a part of life.
    And when the light becomes dim and the times become obscure, don't ever forget that this darkness is what makes life so beautiful and the good times so sweet.
    So treat the problems as opportunities for growth, mistakes as lessons to be learned from, because the pressure can transform you into a diamond.  You can channel the negative energy into raw, immense power for you to grow into who youre meant to be. 
    You are the artist of your life who paints it to whatever you want and every stroke that you paint is intentful towards creating a beautiful, elegant, extraordinary life.
    `,
    url: PhotoshootTypes.Opportunities,
    photographer: "https://www.simonayordanova.com/",
},
{
    title: "This is The Beginning.",
    photos: ["grad-1.jpg", "grad-2.jpg", "grad-3.jpg", "grad-4.jpg", "grad-5.jpg"],
    description: `
    I have planned out my next two months of work. I will be sacrificing my life in order to pursue my dreams because you are not living unless you are living on the edge of life.
    
    `,
    url: PhotoshootTypes.Grad, 
    photographer: "My parents",
},
{
    title: "Planta",
    photos: ["planta-drink.jpg", "planta-smile.jpg"],
    description: `    
    You can explore the world with the food that you eat, and planta offers you that experience. I ordered the entire non-alcoholic drink menu here to indulge myself with the plethora and rich flavors of this planet. It was 100% worth it.
    `,
    url: PhotoshootTypes.Planta, 
    photographer: "My parents",
},
{
    title: "Puerto Ricoooo",
    photos: ["pr-1.jpg", "pr-2.jpg", "pr-3.jpg", "pr-4.jpg", "pr-5.jpg"],
    description: `PUERTO RICOOOOOOOOOOOOOO. Baila LA SALSA.`,
    url: PhotoshootTypes.PuertoRico, 
    photographer: "Mary",
},
]




export enum Row {
    FiveAm = "5am",
    Meditate = "meditate",
    PlanDay = "plan-day",
    CreativitySession = "creativity-session",
    BrushTeethCommunte = "brush-teeth-communte",
    Gym = "gym",
    EatShower = "eat-shower",
    FirstPomodoroSession = "first-pomodoro-session",
    EatLunch = "eat-lunch",
    Nap = "nap",
    MiddayPomodoroSession = "midday-pomodoro-session",
    Dinner = "dinner",
    LastPomodoroSession = "last-pomodoro-session",
    Recharge = "recharge",
    CommuteToDance = "communte-to-dance",
    Dance = "dance",
    Sleep = "sleep",
}