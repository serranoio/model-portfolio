import { c as create_ssr_component, e as escape, h as each, f as add_attribute } from "../../../chunks/ssr.js";
import { P as Photoshoots } from "../../../chunks/content.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "section.svelte-1bd75qp{padding:12.4rem 2.4rem}h2.svelte-1bd75qp{font-size:var(--fontSizeXXLarge);color:var(--gray92);text-align:center;margin-bottom:var(--spacing)}p.svelte-1bd75qp{font-size:var(--fontSizeLarge);color:var(--gray80);text-align:center;margin-bottom:calc(var(--spacing) * 2);line-height:1.5}.photo-grid.svelte-1bd75qp{display:grid;grid-template-columns:1fr 1fr 1fr;gap:var(--spacing);width:100%}img.svelte-1bd75qp{width:100%}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let photoshoot = Photoshoots.filter((photoshoot2) => photoshoot2.url === data.photoshoot)[0];
  console.log(photoshoot);
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-31cv8u_START -->${$$result.title = `<title>David Serrano</title>`, ""}<meta name="description" content="Svelte demo app"><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com"><link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400..900&display=swap" rel="stylesheet"><!-- HEAD_svelte-31cv8u_END -->`, ""} <section class="svelte-1bd75qp"><h2 class="cinzel-main svelte-1bd75qp">${escape(photoshoot.title)}</h2> <p class="cinzel-main svelte-1bd75qp">${escape(photoshoot.description)}</p> <figure class="photo-grid svelte-1bd75qp">${each(photoshoot.photos, (photos) => {
    return `<img${add_attribute("src", photos, 0)} class="svelte-1bd75qp">`;
  })}</figure> </section>`;
});
export {
  Page as default
};
