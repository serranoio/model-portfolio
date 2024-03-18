

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.8a387980.js","_app/immutable/chunks/scheduler.5549988b.js","_app/immutable/chunks/index.8b9e0e2c.js","_app/immutable/chunks/paths.c741d032.js"];
export const stylesheets = ["_app/immutable/assets/0.00045b34.css"];
export const fonts = [];
