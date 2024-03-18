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
		client: {"start":"_app/immutable/entry/start.BFK--lIG.js","app":"_app/immutable/entry/app.CUBgks0K.js","imports":["_app/immutable/entry/start.BFK--lIG.js","_app/immutable/chunks/entry.nwNpYavh.js","_app/immutable/chunks/scheduler.DHL8RVOD.js","_app/immutable/entry/app.CUBgks0K.js","_app/immutable/chunks/scheduler.DHL8RVOD.js","_app/immutable/chunks/index.UZAK4o6Q.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
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
		},
		server_assets: {}
	}
}
})();
