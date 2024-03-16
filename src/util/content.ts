

export interface BuzzWordPage {
    buzzWord: string,
    content: string,
    url: string,
}

export enum BuzzWords {
    EthnicMinority = "Ethnic Minority",
    Hipster = "Hipster",
    SoftwareDev = "Software Dev",
    GenZ = "Gen Z",
    Dancer = "Dancer",
    Poet= "Poet",
}

export const buzzWordPages: BuzzWordPage[] = [
    {
        buzzWord: "Poet",
        content: `I believe that coding is a form of poetry. It is because coding is merely the process of 
        interweaving logic and abstraction within lines to create meaning. I want to write a book about the art of coding
        by when I am 30 years old.`,
        url: "me-rose.jpg",
    },
    {
        buzzWord: "Ethnic Minority",
        content: `1.5 generation American. My Dad came to the states when he was 7. My mom was born here, but her parents are from Toluca, Mexico.
        I celebrate my latino culture through singing Mexican folk songs and by dancing.`,
        url: "me-rose.jpg",
    },
    {
        buzzWord: "Hipster",
        content: "My moustache says it all. Who cares about fitting in with everyone? We should celebrate our uniqueness & individuality with how we look.",
        url: "me-rose.jpg",
    },
    {
        buzzWord: "Software Dev",
        content: `To take on software development as my craft has enlightened me to climb mountain after mountain for the rest of my life.
        The art of making mistakes, learning from them and growing is BEAUTIFUL! This is actually what inspired my first photoshoot. Software development is hard,
        I have failed so many times. I have made so many bugs, but growing from them is what makes it so meaningful. `,
        url: "me-rose.jpg",
    },
    {
        buzzWord: "Gen Z",
        content: `I put emojis in my tech presentations at work 😜. This is because the rich character set of UTF-8 should be used to its fullest potential as it allows us to express ourselves and extend language in a way that humanity has never seen before ❤️.`,
        url: "me-rose.jpg",
    },
    {
        buzzWord: "Dancer",
        content: `December 11th, 2023 I took my first dance lesson. Oh boy was I humbled 😬. 
        I did not know anything. After only 3 months of 5 lessons a week, I can confidently say that
        I am a dancer. The art is beautiful! I dance salsa and bachata 🕺🏽.`,
        url: "me-rose.jpg",
    }
]

export enum PhotoshootTypes {
    Opportunities = "opportunities"
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
    photos: ["sexy-pose.jpg", "me-rose.jpg", "sexy-pose.jpg", "me-rose.jpg"],
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