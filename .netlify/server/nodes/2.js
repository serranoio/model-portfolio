import * as universal from '../entries/pages/_page.ts.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+page.ts";
export const imports = ["_app/immutable/nodes/2.c82192b0.js","_app/immutable/chunks/scheduler.5549988b.js","_app/immutable/chunks/index.8b9e0e2c.js","_app/immutable/chunks/content.3bbe00a3.js"];
export const stylesheets = ["_app/immutable/assets/2.3a184a35.css"];
export const fonts = [];
