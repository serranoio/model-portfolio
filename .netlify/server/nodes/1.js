

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.01c6d439.js","_app/immutable/chunks/scheduler.5549988b.js","_app/immutable/chunks/index.8b9e0e2c.js","_app/immutable/chunks/singletons.db8bb036.js","_app/immutable/chunks/paths.83baf500.js"];
export const stylesheets = [];
export const fonts = [];
