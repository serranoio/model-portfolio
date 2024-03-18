

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.f5904c78.js","_app/immutable/chunks/scheduler.5549988b.js","_app/immutable/chunks/index.8b9e0e2c.js","_app/immutable/chunks/singletons.bc8c0b8a.js","_app/immutable/chunks/paths.c741d032.js"];
export const stylesheets = [];
export const fonts = [];
