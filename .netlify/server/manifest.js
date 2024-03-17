export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","me-rose.jpg","robots.txt","sexy-pose.jpg"]),
	mimeTypes: {".png":"image/png",".jpg":"image/jpeg",".txt":"text/plain"},
	_: {
		client: {"start":"_app/immutable/entry/start.a6201403.js","app":"_app/immutable/entry/app.76687ef1.js","imports":["_app/immutable/entry/start.a6201403.js","_app/immutable/chunks/scheduler.5549988b.js","_app/immutable/chunks/singletons.dd004ea8.js","_app/immutable/chunks/paths.257a36d6.js","_app/immutable/entry/app.76687ef1.js","_app/immutable/chunks/scheduler.5549988b.js","_app/immutable/chunks/index.8b9e0e2c.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/3.js'))
		],
		routes: [
			{
				id: "/[photoshoot]",
				pattern: /^\/([^/]+?)\/?$/,
				params: [{"name":"photoshoot","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
