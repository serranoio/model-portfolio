import * as universal from '../entries/pages/_page.ts.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+page.ts";
export const imports = ["_app/immutable/nodes/2.725e12e8.js","_app/immutable/chunks/scheduler.8b5db029.js","_app/immutable/chunks/index.502df315.js","_app/immutable/chunks/paths.349b2348.js"];
export const stylesheets = ["_app/immutable/assets/2.2709e41d.css","_app/immutable/assets/Header.ac0b02ff.css"];
export const fonts = [];
