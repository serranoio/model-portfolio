var BuzzWords = /* @__PURE__ */ ((BuzzWords2) => {
  BuzzWords2["Hipster"] = "Hipster";
  BuzzWords2["SoftwareDev"] = "Software Dev";
  BuzzWords2["GenZ"] = "Gen Z";
  BuzzWords2["Dancer"] = "Dancer";
  BuzzWords2["Cyberpoet"] = "Cyberpoet";
  BuzzWords2["Technophilosopher"] = "Technophilosopher";
  return BuzzWords2;
})(BuzzWords || {});
var targetDate = /* @__PURE__ */ new Date("December 11, 2023");
var currentDate = /* @__PURE__ */ new Date();
var difference = currentDate.getTime() - targetDate.getTime();
var daysPassed = Math.floor(difference / (1e3 * 60 * 60 * 24));
const buzzWordPages = [
  {
    buzzWord: "Cyberpoet",
    content: `I believe that coding is a form of poetry. It is because coding is merely the process of 
        interweaving logic and abstraction within lines to create meaning. I want to write a book about the art of coding.
        It is currently in the making, and the first revision will be published this summer after I build my startups.`,
    url: "me-rose.jpg"
  },
  {
    buzzWord: "Technophilosopher",
    content: `Technology has changed our psyche in ways humanity has never seen before for good and for bad. We have to be using technology to its fullest potential while not letting it rot our brain.
        I am not your traditional programmer (I don't think any programmer has a model portfolio, rarely any are jacked). My unique background and skillset poises me to bring balance to the industry. You have my word.`,
    url: "me-rose.jpg"
  },
  {
    buzzWord: "Hipster",
    content: "My moustache says it all. Who cares about fitting in with everyone? We should celebrate our uniqueness & individuality with how we look.",
    url: "me-rose.jpg"
  },
  {
    buzzWord: "Software Dev",
    content: `To take on software development as my craft has enlightened me to climb mountain after mountain for the rest of my life.
        The art of making mistakes, learning from them and growing is BEAUTIFUL! This is actually what inspired my first photoshoot. Software development is hard; I have failed so many times. I have made so many bugs, but growing from them is what makes it so meaningful. `,
    url: "me-rose.jpg"
  },
  {
    buzzWord: "Gen Z",
    content: `I put emojis in my tech presentations at work 😜. This is because the rich character set of UTF-8 should be used to its fullest potential as it allows us to express ourselves and extend language in a way that humanity has never seen before ❤️.`,
    url: "me-rose.jpg"
  },
  {
    buzzWord: "Dancer",
    content: `December 11th, 2023 I took my first dance lesson. Oh boy was I humbled 😬. 
        I did not know anything. ${daysPassed} days have passed and I have grown so much since :).`,
    url: "me-rose.jpg"
  }
];
const Photoshoots = [
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
    url: "opportunities",
    photographer: "https://www.simonayordanova.com/"
  },
  {
    title: "This is The Beginning.",
    photos: ["grad-1.jpg", "grad-2.jpg", "grad-3.jpg", "grad-4.jpg", "grad-5.jpg"],
    description: `
    I have planned out my next two months of work. I will be sacrificing my life in order to pursue my dreams because you are not living unless you are living on the edge of life.
    
    `,
    url: "grad",
    photographer: "My parents"
  },
  {
    title: "Planta",
    photos: ["planta-drink.jpg", "planta-smile.jpg"],
    description: `    
    You can explore the world with the food that you eat, and planta offers you that experience. I ordered the entire non-alcoholic drink menu here to indulge myself with the plethora and rich flavors of this planet. It was 100% worth it.
    `,
    url: "planta",
    photographer: "My parents"
  },
  {
    title: "Puerto Ricoooo",
    photos: ["pr-1.jpg", "pr-2.jpg", "pr-3.jpg", "pr-4.jpg", "pr-5.jpg"],
    description: `PUERTO RICOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO. Baila LA SALSA.`,
    url: "puerto-rico",
    photographer: "Mary"
  }
];
var Row = /* @__PURE__ */ ((Row2) => {
  Row2["FiveAm"] = "5am";
  Row2["Meditate"] = "meditate";
  Row2["PlanDay"] = "plan-day";
  Row2["CreativitySession"] = "creativity-session";
  Row2["BrushTeethCommunte"] = "brush-teeth-communte";
  Row2["Gym"] = "gym";
  Row2["EatShower"] = "eat-shower";
  Row2["FirstPomodoroSession"] = "first-pomodoro-session";
  Row2["EatLunch"] = "eat-lunch";
  Row2["Nap"] = "nap";
  Row2["MiddayPomodoroSession"] = "midday-pomodoro-session";
  Row2["Dinner"] = "dinner";
  Row2["LastPomodoroSession"] = "last-pomodoro-session";
  Row2["Recharge"] = "recharge";
  Row2["CommuteToDance"] = "communte-to-dance";
  Row2["Dance"] = "dance";
  Row2["Sleep"] = "sleep";
  return Row2;
})(Row || {});
const meRose = "/_app/immutable/assets/me-rose.e52cecf0.jpg";
const sexyPose = "/_app/immutable/assets/sexy-pose.89285ec8.jpg";
const grad1 = "/_app/immutable/assets/grad-1.7e1396f1.jpg";
const grad2 = "/_app/immutable/assets/grad-2.1adaaaad.jpg";
const grad3 = "/_app/immutable/assets/grad-3.9f12202c.jpg";
const grad4 = "/_app/immutable/assets/grad-4.d1e2a4e2.jpg";
const grad5 = "/_app/immutable/assets/grad-5.4d9fe4ec.jpg";
const plantaDrink = "/_app/immutable/assets/planta-drink.184da0e9.jpg";
const plantaSmile = "/_app/immutable/assets/planta-smile.2b969da5.jpg";
const pr1 = "/_app/immutable/assets/pr-1.01b6e2fc.jpg";
const pr2 = "/_app/immutable/assets/pr-2.3fe683ed.jpg";
const pr3 = "/_app/immutable/assets/pr-3.49ab8dc3.jpg";
const pr4 = "/_app/immutable/assets/pr-4.f5b65acf.jpg";
const pr5 = "/_app/immutable/assets/pr-5.f8dc237d.jpg";
export {
  BuzzWords as B,
  Photoshoots as P,
  Row as R,
  grad1 as a,
  buzzWordPages as b,
  grad3 as c,
  grad4 as d,
  grad5 as e,
  plantaSmile as f,
  grad2 as g,
  pr1 as h,
  pr2 as i,
  pr3 as j,
  pr4 as k,
  pr5 as l,
  meRose as m,
  plantaDrink as p,
  sexyPose as s
};
