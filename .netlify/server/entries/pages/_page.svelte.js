import { c as create_ssr_component, e as escape, d as null_to_empty, f as add_attribute, h as each, v as validate_component } from "../../chunks/ssr.js";
/* empty css                                                 */var BuzzWords = /* @__PURE__ */ ((BuzzWords2) => {
  BuzzWords2["EthnicMinority"] = "Ethnic Minority";
  BuzzWords2["Hipster"] = "Hipster";
  BuzzWords2["SoftwareDev"] = "Software Dev";
  BuzzWords2["GenZ"] = "Gen Z";
  BuzzWords2["Dancer"] = "Dancer";
  BuzzWords2["Poet"] = "Poet";
  return BuzzWords2;
})(BuzzWords || {});
const buzzWordPages = [
  {
    buzzWord: "Poet",
    content: `I believe that coding is a form of poetry. It is because coding is merely the process of 
        interweaving logic and abstraction within lines to create meaning. I want to write a book about the art of coding
        by when I am 30 years old.`,
    url: "me-rose.jpg"
  },
  {
    buzzWord: "Ethnic Minority",
    content: `1.5 generation American. My Dad came to the states when he was 7. My mom was born here, but her parents are from Toluca, Mexico.
        I celebrate my latino culture through singing Mexican folk songs and by dancing.`,
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
        The art of making mistakes, learning from them and growing is BEAUTIFUL! This is actually what inspired my first photoshoot. Software development is hard,
        I have failed so many times. I have made so many bugs, but growing from them is what makes it so meaningful. `,
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
        I did not know anything. After only 3 months of 5 lessons a week, I can confidently say that
        I am a dancer. The art is beautiful! I dance salsa and bachata 🕺🏽.`,
    url: "me-rose.jpg"
  }
];
const Page_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: ".image-box.svelte-783w9r{width:auto;height:100%;background-position:50% 50%;background-size:cover}.regular.svelte-783w9r{transform-origin:right;left:0}h2.svelte-783w9r{text-align:center;font-size:var(--fontSizeXLarge);margin-bottom:calc(var(--spacing) * 1.5)}p.svelte-783w9r{font-size:var(--fontSizeLarge);color:var(--gray80);line-height:2}.reverse.svelte-783w9r{transform-origin:left;right:0}.page.svelte-783w9r{padding:var(--spacing);box-shadow:inset 0 0 1px 1px var(--gray92);height:100%;position:absolute;transition:all 1s ease-in;width:50%;transform-style:preserve-3d;perspective:500px;transform:rotateY(90deg)}.open.svelte-783w9r{transform:rotateY(0deg)}h2.svelte-783w9r{color:var(--gray92)}",
  map: null
};
const Page$1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let open;
  let { pageNumber } = $$props;
  let { buzzWord } = $$props;
  let { reverse } = $$props;
  let { selected } = $$props;
  const styles = `background-image: url(${buzzWord.url});`;
  if ($$props.pageNumber === void 0 && $$bindings.pageNumber && pageNumber !== void 0)
    $$bindings.pageNumber(pageNumber);
  if ($$props.buzzWord === void 0 && $$bindings.buzzWord && buzzWord !== void 0)
    $$bindings.buzzWord(buzzWord);
  if ($$props.reverse === void 0 && $$bindings.reverse && reverse !== void 0)
    $$bindings.reverse(reverse);
  if ($$props.selected === void 0 && $$bindings.selected && selected !== void 0)
    $$bindings.selected(selected);
  $$result.css.add(css$2);
  open = buzzWord.buzzWord === selected ? "open" : "";
  return `<figure class="${escape(null_to_empty(`page ${reverse ? "reverse" : "regular"} ${open}`), true) + " svelte-783w9r"}"${add_attribute("data-page", pageNumber, 0)}>${reverse ? `<div class="image-box svelte-783w9r"${add_attribute("style", styles, 0)}></div>` : `<div><h2 class="cinzel-main svelte-783w9r">${escape(buzzWord.buzzWord)}</h2> <p class="svelte-783w9r">${escape(buzzWord.content)}</p></div>`} </figure>`;
});
const About_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".title-box.svelte-eggfnf{margin-bottom:var(--spacing)}.page-box.svelte-eggfnf{width:80%;height:60rem;margin:0 auto;position:relative}.selected.svelte-eggfnf{color:var(--gray92)}button.svelte-eggfnf{color:var(--gray60);padding:0;display:inline;background-color:transparent;border:none;font-size:var(--fontSizeXXLarge);cursor:pointer}.buzz-words.svelte-eggfnf{color:var(--gray92);font-size:var(--fontSizeXXLarge);text-align:center}.about-grid.svelte-eggfnf{grid-template-columns:1fr 1fr;gap:var(--spacingQuarter)}.about-image.svelte-eggfnf{width:10rem;height:30rem}",
  map: null
};
const About = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let selectedTab = BuzzWords.EthnicMinority;
  $$result.css.add(css$1);
  return `<section id="about"><div class="title-box svelte-eggfnf"><div class="buzz-words cinzel-main svelte-eggfnf">${each(buzzWordPages, (buzzWord, index) => {
    let bulletPoint = index !== buzzWordPages.length - 1 ? "•" : "";
    return `  <button class="${escape(null_to_empty(`cinzel-main ${selectedTab === buzzWord.buzzWord ? "selected" : ""}`), true) + " svelte-eggfnf"}">${escape(buzzWord.buzzWord)}</button> ${escape(bulletPoint)} `;
  })}</div></div> <div class="page-box svelte-eggfnf">${each(buzzWordPages, (buzzWord, index) => {
    return `${validate_component(Page$1, "Page").$$render(
      $$result,
      {
        pageNumber: index,
        selected: selectedTab,
        buzzWord,
        reverse: false
      },
      {},
      {}
    )} ${validate_component(Page$1, "Page").$$render(
      $$result,
      {
        pageNumber: index,
        selected: selectedTab,
        buzzWord,
        reverse: true
      },
      {},
      {}
    )}`;
  })}</div> <div class="about-grid svelte-eggfnf" data-svelte-h="svelte-tqkg0y"><div class="about-text"><h3>Header</h3> <p>Text</p></div> <div class="about-image-section"><div class="about-image svelte-eggfnf"></div></div></div> </section>`;
});
const topochico = "/_app/immutable/assets/IMG_2865.aeb124cb.jpg";
const sexyPose = "/_app/immutable/assets/sexy-pose.89285ec8.jpg";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "h1.svelte-129qsfo.svelte-129qsfo{position:relative}span.svelte-129qsfo img.svelte-129qsfo{width:100%;height:100%}img.svelte-129qsfo.svelte-129qsfo{background-image:linear-gradient(rgba(0, 0, 0, 1), rgba(0,0,0,0.5));filter:brightness(75%)}.image-right.svelte-129qsfo.svelte-129qsfo{position:absolute;background-color:white;width:35rem;height:55rem;right:13%;top:-60%}.image-left.svelte-129qsfo.svelte-129qsfo{opacity:.75;position:absolute;width:35rem;top:0%;background-color:green;height:55rem;left:15%}section.svelte-129qsfo.svelte-129qsfo{display:flex;min-height:100vh;width:100%;justify-content:center;align-items:center}h1.svelte-129qsfo.svelte-129qsfo{text-transform:uppercase;letter-spacing:2px}h1.svelte-129qsfo span.svelte-129qsfo{display:block}.first-name.svelte-129qsfo.svelte-129qsfo{transform:translate(-25%)}.last-name.svelte-129qsfo.svelte-129qsfo{transform:translate(25%)}h1.svelte-129qsfo.svelte-129qsfo{font-size:15rem;color:var(--gray92)}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-s7wij9_START -->${$$result.title = `<title>Home</title>`, ""}<meta name="description" content="Svelte demo app"><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400..900&display=swap" rel="stylesheet"><!-- HEAD_svelte-s7wij9_END -->`, ""} <section id="hero" class="svelte-129qsfo" data-svelte-h="svelte-eb16xe"><div class="center"><h1 class="cinzel-main svelte-129qsfo"><span class="image-left svelte-129qsfo"><img alt="topo chico"${add_attribute("src", topochico, 0)} class="svelte-129qsfo"></span> <span class="image-right svelte-129qsfo"><img alt="topo chico"${add_attribute("src", sexyPose, 0)} class="svelte-129qsfo"></span> <span class="first-name svelte-129qsfo">David</span> <span class="last-name svelte-129qsfo">Serrano</span></h1></div></section> ${validate_component(About, "About").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
