export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","me-rose.jpg","robots.txt"]),
	mimeTypes: {".png":"image/png",".jpg":"image/jpeg",".txt":"text/plain"},
	_: {
		client: {"start":"_app/immutable/entry/start.9fceecb1.js","app":"_app/immutable/entry/app.0da56698.js","imports":["_app/immutable/entry/start.9fceecb1.js","_app/immutable/chunks/scheduler.8b5db029.js","_app/immutable/chunks/singletons.b1b9d5e1.js","_app/immutable/chunks/paths.349b2348.js","_app/immutable/entry/app.0da56698.js","_app/immutable/chunks/scheduler.8b5db029.js","_app/immutable/chunks/index.502df315.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js'))
		],
		routes: [
			
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
