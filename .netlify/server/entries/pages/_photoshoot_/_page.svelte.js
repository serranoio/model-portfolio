import { c as create_ssr_component, e as escape, h as each, f as add_attribute } from "../../../chunks/ssr.js";
import { P as Photoshoots, m as meRose, s as sexyPose, g as grad2, a as grad1, c as grad3, d as grad4, e as grad5, p as plantaDrink, f as plantaSmile, h as pr1, i as pr2, j as pr3, k as pr4, l as pr5 } from "../../../chunks/pr-5.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "section.svelte-11hc1mp{padding:12.4rem 2.4rem}h2.svelte-11hc1mp{font-size:var(--fontSizeXXLarge);color:var(--gray92);text-align:center;margin-bottom:var(--spacing)}p.svelte-11hc1mp{font-size:var(--fontSizeLarge);color:var(--gray80);text-align:center;margin-bottom:calc(var(--spacing) * 2);line-height:1.5}.photo-grid.svelte-11hc1mp{display:grid;grid-template-columns:1fr 1fr 1fr;gap:var(--spacing);width:100%}img.svelte-11hc1mp{width:100%}@media(max-width: 50em){h2.svelte-11hc1mp{font-size:var(--fontSizeXLarge)}}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let photoshoot = Photoshoots.filter((photoshoot2) => photoshoot2.url === data.photoshoot)[0];
  console.log(photoshoot);
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-31cv8u_START -->${$$result.title = `<title>David Serrano</title>`, ""}<meta name="description" content="Svelte demo app"><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com"><link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400..900&display=swap" rel="stylesheet"><!-- HEAD_svelte-31cv8u_END -->`, ""} <section class="svelte-11hc1mp"><h2 class="cinzel-main svelte-11hc1mp">${escape(photoshoot.title)}</h2> <p class="cinzel-main svelte-11hc1mp">${escape(photoshoot.description)}</p> <figure class="photo-grid svelte-11hc1mp">${each(photoshoot.photos, (photo) => {
    return `${photo === "me-rose.jpg" ? `<img${add_attribute("src", meRose, 0)} class="svelte-11hc1mp">` : ``} ${photo === "sexy-pose.jpg" ? `<img${add_attribute("src", sexyPose, 0)} class="svelte-11hc1mp">` : ``} ${photo === "grad-2.jpg" ? `<img${add_attribute("src", grad2, 0)} class="svelte-11hc1mp">` : ``} ${photo === "grad-1.jpg" ? `<img${add_attribute("src", grad1, 0)} class="svelte-11hc1mp">` : ``} ${photo === "grad-3.jpg" ? `<img${add_attribute("src", grad3, 0)} class="svelte-11hc1mp">` : ``} ${photo === "grad-4.jpg" ? `<img${add_attribute("src", grad4, 0)} class="svelte-11hc1mp">` : ``} ${photo === "grad-5.jpg" ? `<img${add_attribute("src", grad5, 0)} class="svelte-11hc1mp">` : ``} ${photo === "planta-drink.jpg" ? `<img${add_attribute("src", plantaDrink, 0)} class="svelte-11hc1mp">` : ``} ${photo === "planta-smile.jpg" ? `<img${add_attribute("src", plantaSmile, 0)} class="svelte-11hc1mp">` : ``} ${photo === "pr-1.jpg" ? `<img${add_attribute("src", pr1, 0)} class="svelte-11hc1mp">` : ``} ${photo === "pr-2.jpg" ? `<img${add_attribute("src", pr2, 0)} class="svelte-11hc1mp">` : ``} ${photo === "pr-3.jpg" ? `<img${add_attribute("src", pr3, 0)} class="svelte-11hc1mp">` : ``} ${photo === "pr-4.jpg" ? `<img${add_attribute("src", pr4, 0)} class="svelte-11hc1mp">` : ``} ${photo === "pr-5.jpg" ? `<img${add_attribute("src", pr5, 0)} class="svelte-11hc1mp">` : ``}`;
  })}</figure> </section>`;
});
export {
  Page as default
};
