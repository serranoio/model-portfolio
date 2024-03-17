

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.fc610f33.js","_app/immutable/chunks/scheduler.5549988b.js","_app/immutable/chunks/index.8b9e0e2c.js","_app/immutable/chunks/paths.257a36d6.js"];
export const stylesheets = ["_app/immutable/assets/0.26920a38.css","_app/immutable/assets/Header.f51d8b04.css"];
export const fonts = [];
