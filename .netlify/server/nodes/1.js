

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.08b6d05a.js","_app/immutable/chunks/scheduler.8b5db029.js","_app/immutable/chunks/index.502df315.js","_app/immutable/chunks/singletons.b1b9d5e1.js","_app/immutable/chunks/paths.349b2348.js"];
export const stylesheets = [];
export const fonts = [];
