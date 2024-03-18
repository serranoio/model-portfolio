

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.CLpWTSJ2.js","_app/immutable/chunks/scheduler.DHL8RVOD.js","_app/immutable/chunks/index.UZAK4o6Q.js","_app/immutable/chunks/entry.nwNpYavh.js"];
export const stylesheets = [];
export const fonts = [];
