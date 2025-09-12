// live2d_path 参数建议使用绝对路径
//const live2d_path = "https://fastly.jsdelivr.net/gh/stevenjoezhang/live2d-widget@latest/";
const live2d_path = '/live2d-widget/dist/';

// 封装异步加载资源的方法
function loadExternalResource(url, type) {
	return new Promise((resolve, reject) => {
		let tag;

		if (type === "css") {
			tag = document.createElement("link");
			tag.rel = "stylesheet";
			tag.href = url;
		}
		else if (type === "js") {
			tag = document.createElement("script");
			tag.type = 'module';
			tag.src = url;
		}
		if (tag) {
			tag.onload = () => resolve(url);
			tag.onerror = () => reject(url);
			document.head.appendChild(tag);
		}
	});
}

(async () => {
	// 加载 waifu.css live2d.min.js waifu-tips.js
	if (screen.width < 768) return;

	await Promise.all([
		loadExternalResource(live2d_path + "waifu.css", "css"),
		loadExternalResource(live2d_path + "live2d.min.js", "js"),
		loadExternalResource(live2d_path + "waifu-tips.js", "js")
	]);
	// 配置选项的具体用法见 README.md
	initWidget({
		waifuPath: live2d_path + "waifu-tips.json",
		cdnPath: "/live2d_api/",
		//apiPath: "https://live2d.fghrsh.net/api/",
		cubism2Path: live2d_path + 'live2d.min.js',
		tools: ["hitokoto", "asteroids", "switch-model", "photo", "info", "quit"]
	});
})();
