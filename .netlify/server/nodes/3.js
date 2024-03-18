import * as server from '../entries/pages/_photoshoot_/_page.server.js';

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_photoshoot_/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/[photoshoot]/+page.server.js";
export const imports = ["_app/immutable/nodes/3.Dm4UKQSZ.js","_app/immutable/chunks/scheduler.DHL8RVOD.js","_app/immutable/chunks/index.UZAK4o6Q.js","_app/immutable/chunks/content.Cy-iDWWj.js"];
export const stylesheets = ["_app/immutable/assets/3.DrgmSPR2.css"];
export const fonts = [];
