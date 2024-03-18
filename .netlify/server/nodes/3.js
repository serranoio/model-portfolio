import * as server from '../entries/pages/_photoshoot_/_page.server.js';

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_photoshoot_/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/[photoshoot]/+page.server.js";
export const imports = ["_app/immutable/nodes/3.016be422.js","_app/immutable/chunks/scheduler.5549988b.js","_app/immutable/chunks/index.8b9e0e2c.js","_app/immutable/chunks/content.3bbe00a3.js"];
export const stylesheets = ["_app/immutable/assets/3.cd9f59af.css"];
export const fonts = [];
