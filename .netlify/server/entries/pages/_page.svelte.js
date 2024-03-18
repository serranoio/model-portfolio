import { c as create_ssr_component, e as escape, d as null_to_empty, f as add_attribute, h as each, v as validate_component } from "../../chunks/ssr.js";
import { B as BuzzWords, b as buzzWordPages, P as Photoshoots, R as Row } from "../../chunks/content.js";
const css$4 = {
  code: ".image-box.svelte-mftr96{width:auto;height:100%;background-position:50% 50%;background-size:cover}.regular.svelte-mftr96{transform-origin:right;left:0}h2.svelte-mftr96{text-align:center;font-size:var(--fontSizeXLarge);margin-bottom:calc(var(--spacing) * 1.5)}p.svelte-mftr96{font-size:var(--fontSizeLarge);color:var(--gray80);line-height:2}.reverse.svelte-mftr96{transform-origin:left;right:0}.page.svelte-mftr96{padding:var(--spacing);box-shadow:inset 0 0 1px 1px var(--gray92);height:100%;position:absolute;transition:all 1s ease-in;width:50%;transform-style:preserve-3d;perspective:500px;transform:rotateY(90deg);opacity:0}.open.svelte-mftr96{transform:rotateY(0deg);opacity:1}h2.svelte-mftr96{color:var(--gray92)}@media(max-width: 56em){.page.svelte-mftr96{width:100%}.regular.svelte-mftr96{top:80%;height:60%;overflow-y:scroll}.reverse.svelte-mftr96{top:0%;height:80%;width:100%}}",
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
  $$result.css.add(css$4);
  open = buzzWord.buzzWord === selected ? "open" : "";
  return `<figure class="${escape(null_to_empty(`page ${reverse ? "reverse" : "regular"} ${open}`), true) + " svelte-mftr96"}"${add_attribute("data-page", pageNumber, 0)}>${reverse ? `<div class="image-box svelte-mftr96"${add_attribute("style", styles, 0)}></div>` : `<div><h2 class="cinzel-main svelte-mftr96">${escape(buzzWord.buzzWord)}</h2> <p class="svelte-mftr96">${escape(buzzWord.content)}</p></div>`} </figure>`;
});
const css$3 = {
  code: ".title-box.svelte-1od5v0i.svelte-1od5v0i{margin-bottom:var(--spacing)}.page-box.svelte-1od5v0i.svelte-1od5v0i{width:80%;height:60rem;margin:0 auto;position:relative}.selected.svelte-1od5v0i.svelte-1od5v0i{color:var(--gray92)}button.svelte-1od5v0i.svelte-1od5v0i{color:var(--gray60);padding:0;display:inline;background-color:transparent;border:none;font-size:var(--fontSizeXXLarge);cursor:pointer}.buzz-words.svelte-1od5v0i.svelte-1od5v0i{color:var(--gray92);font-size:var(--fontSizeXXLarge);text-align:center}.about-grid.svelte-1od5v0i.svelte-1od5v0i{grid-template-columns:1fr 1fr;gap:var(--spacingQuarter)}.about-image.svelte-1od5v0i.svelte-1od5v0i{width:10rem;height:30rem}@media(max-width: 87em){.buzz-words.svelte-1od5v0i.svelte-1od5v0i{display:flex;gap:var(--spacingHalf);flex-wrap:wrap;justify-content:space-evenly}.buzz-words.svelte-1od5v0i button.svelte-1od5v0i{font-size:3rem !important}.bullet-point.svelte-1od5v0i.svelte-1od5v0i{display:none}@media(max-width: 56em){}}",
  map: null
};
const About = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let selectedTab = BuzzWords.EthnicMinority;
  $$result.css.add(css$3);
  return `<section id="about"><div class="title-box svelte-1od5v0i"><div class="buzz-words cinzel-main svelte-1od5v0i">${each(buzzWordPages, (buzzWord, index) => {
    let bulletPoint = index !== buzzWordPages.length - 1 ? "•" : "";
    return `  <button class="${escape(null_to_empty(`cinzel-main ${selectedTab === buzzWord.buzzWord ? "selected" : ""}`), true) + " svelte-1od5v0i"}">${escape(buzzWord.buzzWord)}</button> <span class="bullet-point svelte-1od5v0i">${escape(bulletPoint)}</span> `;
  })}</div></div> <div class="page-box svelte-1od5v0i">${each(buzzWordPages, (buzzWord, index) => {
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
  })}</div> <div class="about-grid svelte-1od5v0i" data-svelte-h="svelte-1fzt03i"><div class="about-text"><h3>Header</h3> <p>Text</p></div> <div class="about-image-section"><div class="about-image svelte-1od5v0i"></div></div></div> </section>`;
});
const css$2 = {
  code: ".photoshoot-grid.svelte-alvfat{display:grid;grid-template-columns:3fr 2fr;cursor:pointer}a.svelte-alvfat{grid-column:2}.photoshoot-grid.svelte-alvfat:hover{background-image:rgba(255, 255, 255, 50)}img.svelte-alvfat{width:100%}#gallery.svelte-alvfat{padding:9.8rem 0}.grid.svelte-alvfat{display:grid;margin:0 auto;max-width:120rem;grid-template-columns:repeat(3, 1fr);justify-content:center;align-items:center;gap:calc(var(--spacing) * 2)}h2.svelte-alvfat,p.svelte-alvfat{text-align:center}h2.svelte-alvfat{font-size:var(--fontSizeXXLarge);color:var(--gray92)}p.svelte-alvfat{font-size:var(--fontSizeXLarge);color:var(--gray80);margin-bottom:calc(var(--spacing) * 2)}",
  map: null
};
const Gallery = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  console.log(Photoshoots);
  $$result.css.add(css$2);
  return `<section id="gallery" class="svelte-alvfat"><h2 class="svelte-alvfat" data-svelte-h="svelte-1bz9miu">Photoshoots</h2> <p class="svelte-alvfat" data-svelte-h="svelte-hnq0vo">This is where I tell my story.</p> <div class="grid svelte-alvfat">${each(Photoshoots, (photoshoot) => {
    return `<a${add_attribute("href", "/" + photoshoot.url, 0)} class="svelte-alvfat"><figure class="photoshoot-grid svelte-alvfat">${each(photoshoot.photos, (photo) => {
      return `<img${add_attribute("src", photo, 0)} class="svelte-alvfat">`;
    })}</figure> </a>`;
  })}</div> </section>`;
});
const topochico = "/_app/immutable/assets/IMG_2865.BPfJ1SV_.jpg";
const sexyPose = "/_app/immutable/assets/sexy-pose.DeXtk9Jd.jpg";
const css$1 = {
  code: "h1.svelte-18p80h9.svelte-18p80h9{position:relative}span.svelte-18p80h9 img.svelte-18p80h9{width:100%;height:100%}img.svelte-18p80h9.svelte-18p80h9{background-image:linear-gradient(rgba(0, 0, 0, 1), rgba(0,0,0,0.5));filter:brightness(75%)}.image-right.svelte-18p80h9.svelte-18p80h9{position:absolute;background-color:white;width:35rem;height:55rem;right:13%;top:-60%;animation:svelte-18p80h9-fadeIn;animation-duration:3s;animation-timing-function:ease-in-out;;}.first-name.svelte-18p80h9.svelte-18p80h9{animation:svelte-18p80h9-fadeIn;animation-duration:3s;animation-timing-function:ease-in-out;;}.last-name.svelte-18p80h9.svelte-18p80h9{animation:svelte-18p80h9-fadeIn;animation-duration:4s;animation-timing-function:ease-in-out;;}.image-left.svelte-18p80h9.svelte-18p80h9{opacity:.75;position:absolute;width:35rem;top:0%;background-color:green;height:55rem;left:15%;animation:svelte-18p80h9-fadeIn;animation-duration:6s;animation-timing-function:ease-in-out;;}@keyframes svelte-18p80h9-fadeIn{0%{opacity:0}100%{opacity:1}}section.svelte-18p80h9.svelte-18p80h9{display:flex;min-height:100vh;width:100%;justify-content:center;align-items:center}h1.svelte-18p80h9.svelte-18p80h9{text-transform:uppercase;letter-spacing:2px}h1.svelte-18p80h9 span.svelte-18p80h9{display:block}.first-name.svelte-18p80h9.svelte-18p80h9{transform:translate(-25%)}.last-name.svelte-18p80h9.svelte-18p80h9{transform:translate(25%)}h1.svelte-18p80h9.svelte-18p80h9{font-size:15rem;color:var(--gray92)}@media(max-width: 69em){.image-left.svelte-18p80h9.svelte-18p80h9{left:0%;top:10%}.image-right.svelte-18p80h9.svelte-18p80h9{right:0%;bottom:10%}.first-name.svelte-18p80h9.svelte-18p80h9{transform:translate(-10%, -20%)}.last-name.svelte-18p80h9.svelte-18p80h9{transform:translate(10%, 20%)}}@media(max-width: 44em){.image-left.svelte-18p80h9.svelte-18p80h9{left:-10%;top:50%;transform:translate(50%, 0%)}.image-right.svelte-18p80h9.svelte-18p80h9{right:-10%;bottom:0%;transform:translate(-50%, 0%)}.first-name.svelte-18p80h9.svelte-18p80h9{text-align:center;transform:translate(0%, -20%)}.last-name.svelte-18p80h9.svelte-18p80h9{text-align:center;transform:translate(0%, 20%)}}@media(max-width: 37em){.image-left.svelte-18p80h9.svelte-18p80h9{left:-30%;top:50%;transform:translate(50%, 0%)}.image-right.svelte-18p80h9.svelte-18p80h9{right:-30%;bottom:0%;transform:translate(-50%, 0%)}.first-name.svelte-18p80h9.svelte-18p80h9,.last-name.svelte-18p80h9.svelte-18p80h9{font-size:11rem}}",
  map: null
};
const Hero = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<section id="hero" class="svelte-18p80h9" data-svelte-h="svelte-10gkwbi"><div class="center"><h1 class="cinzel-main svelte-18p80h9"><span class="image-left svelte-18p80h9"><img alt="topo chico"${add_attribute("src", topochico, 0)} class="svelte-18p80h9"></span> <span class="image-right svelte-18p80h9"><img alt="topo chico"${add_attribute("src", sexyPose, 0)} class="svelte-18p80h9"></span> <span class="first-name svelte-18p80h9">David</span> <span class="last-name svelte-18p80h9">Serrano</span></h1></div> </section>`;
});
const css = {
  code: ".close-button.svelte-1pag3gl{position:absolute;right:18%;background-color:var(--gray25);padding:calc(var(--spacingHalf) * 3);width:12rem;height:3rem;top:-6%;font-size:var(--fontSizeLarge);border:none;cursor:pointer;color:var(--gray80);transition:all .2s}.close-button.svelte-1pag3gl:hover{background-color:var(--gray30)}.drawer.svelte-1pag3gl{overflow:visible;background-color:var(--gray20);width:100vw;height:40rem;position:fixed;bottom:0%;transition:all .7s ease-in-out;clip-path:polygon(20% 0%, 80% 0%, 100% 100%, 0% 100%);transform:translateY(100%)}.open.svelte-1pag3gl{transform:translateY(0%)}table.svelte-1pag3gl{margin:0 auto;max-width:120rem}tr.svelte-1pag3gl{display:flex;justify-content:space-between;gap:var(--spacing);padding:var(--spacing);transition:all .2s;border-radius:var(--borderRadius)}tr.svelte-1pag3gl:hover{box-shadow:0 0 0 2px rgba(255,255,255,200);cursor:pointer}h2.svelte-1pag3gl{font-size:var(--fontSizeXXLarge);color:var(--gray92);text-align:center;font-family:inherit;margin-bottom:calc(var(--spacing) * 2)}p.svelte-1pag3gl{font-size:var(--fontSizeXLarge);color:var(--gray80);font-style:italic;text-align:center;font-family:inherit;margin-bottom:calc(var(--spacing) * 2)}.svelte-1pag3gl{font-family:inherit}td.svelte-1pag3gl{font-size:var(--fontSizeXLarge);font-family:inherit;color:var(--gray80)}",
  map: null
};
const Routine = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<section id="routine" class="cinzel-main svelte-1pag3gl"><h2 class="cinzel-main svelte-1pag3gl" data-svelte-h="svelte-c13g33">My Daily Routine</h2> <p class="cinzel-main svelte-1pag3gl" data-svelte-h="svelte-1tccpj6">I believe in optimizing my systems so that I can effectively acheive my goals. Everything here is calculated and adjusted for randomness.</p> <div class="${escape(null_to_empty(`drawer ${""}`), true) + " svelte-1pag3gl"}"><button class="close-button svelte-1pag3gl" data-svelte-h="svelte-132jc13">X</button></div> <table class="svelte-1pag3gl" data-svelte-h="svelte-seu43q"><tr${add_attribute("id", Row.FiveAm, 0)} class="svelte-1pag3gl"><td class="svelte-1pag3gl">05:00</td> <td class="svelte-1pag3gl">Wake up</td></tr> <tr${add_attribute("id", Row.Meditate, 0)} class="svelte-1pag3gl"><td class="svelte-1pag3gl">05:00-05:15</td> <td class="svelte-1pag3gl">Meditate</td></tr> <tr${add_attribute("id", Row.PlanDay, 0)} class="svelte-1pag3gl"><td class="svelte-1pag3gl">05:15-05:30</td> <td class="svelte-1pag3gl">Plan day</td></tr> <tr${add_attribute("id", Row.PlanDay, 0)} class="svelte-1pag3gl"><td class="svelte-1pag3gl">05:30-05:45</td> <td class="svelte-1pag3gl">Creativity session</td></tr> <tr${add_attribute("id", Row.BrushTeethCommunte, 0)} class="svelte-1pag3gl"><td class="svelte-1pag3gl">05:45-06:00</td> <td class="svelte-1pag3gl">Brush teeth, commute to gym</td></tr> <tr${add_attribute("id", Row.Gym, 0)} class="svelte-1pag3gl"><td class="svelte-1pag3gl">06:00-07:30</td> <td class="svelte-1pag3gl">Gym</td></tr> <tr${add_attribute("id", Row.EatShower, 0)} class="svelte-1pag3gl"><td class="svelte-1pag3gl">07:30-08:15</td> <td class="svelte-1pag3gl">Eat, Shower</td></tr> <tr${add_attribute("id", Row.FirstPomodoroSession, 0)} class="svelte-1pag3gl"><td class="svelte-1pag3gl">08:15~11:00</td> <td class="svelte-1pag3gl">First Pomodoro session</td></tr> <tr${add_attribute("id", Row.EatLunch, 0)} class="svelte-1pag3gl"><td class="svelte-1pag3gl">11:00-11:30</td> <td class="svelte-1pag3gl">Eat Lunch</td></tr> <tr${add_attribute("id", Row.Nap, 0)} class="svelte-1pag3gl"><td class="svelte-1pag3gl">11:30-12:00</td> <td class="svelte-1pag3gl">Nap</td></tr> <tr${add_attribute("id", Row.MiddayPomodoroSession, 0)} class="svelte-1pag3gl"><td class="svelte-1pag3gl">12:00-15:00</td> <td class="svelte-1pag3gl">Mid-day pomodoro session</td></tr> <tr${add_attribute("id", Row.Dinner, 0)} class="svelte-1pag3gl"><td class="svelte-1pag3gl">15:00-15:30</td> <td class="svelte-1pag3gl">Dinner</td></tr> <tr${add_attribute("id", Row.LastPomodoroSession, 0)} class="svelte-1pag3gl"><td class="svelte-1pag3gl">15:30-17:00</td> <td class="svelte-1pag3gl">Last pomodoro session</td></tr> <tr${add_attribute("id", Row.Recharge, 0)} class="svelte-1pag3gl"><td class="svelte-1pag3gl">17:00-17:45</td> <td class="svelte-1pag3gl">Recharge</td></tr> <tr${add_attribute("id", Row.CommuteToDance, 0)} class="svelte-1pag3gl"><td class="svelte-1pag3gl">17:45-18:00</td> <td class="svelte-1pag3gl">Commute to dance</td></tr> <tr${add_attribute("id", Row.Dance, 0)} class="svelte-1pag3gl"><td class="svelte-1pag3gl">18:00-20:45</td> <td class="svelte-1pag3gl">Dance classes Or cook/ buy food</td></tr> <tr${add_attribute("id", Row.Sleep, 0)} class="svelte-1pag3gl"><td class="svelte-1pag3gl">9:00</td> <td class="svelte-1pag3gl">In bed, Sleep</td></tr></table> </section>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `<!-- HEAD_svelte-31cv8u_START -->${$$result.title = `<title>David Serrano</title>`, ""}<meta name="description" content="Svelte demo app"><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com"><link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400..900&display=swap" rel="stylesheet"><!-- HEAD_svelte-31cv8u_END -->`, ""} ${validate_component(Hero, "Hero").$$render($$result, {}, {}, {})} ${validate_component(About, "About").$$render($$result, {}, {}, {})} ${validate_component(Gallery, "Gallery").$$render($$result, {}, {}, {})} ${validate_component(Routine, "Routine").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
