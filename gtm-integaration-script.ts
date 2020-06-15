(function OZIntegration() {
	//Global configuration
	const OZ_CONFIG = {
		settings: {
			apiKey: 'YOUR_API_KEY_HERE',
			container: "oz-sizing-container", // the ID of your empty target element, which will then contain the generated iframe element
			primary: 'hsl(187, 74%, 70%)', // colors can be any format accepted by css. Hey, rgb, hsl, …
			cta: 'rgb(150, 186, 50)',
		}
	};
	//window.OZ_CONFIG = OZ_CONFIG;
	
	//Ensures that container element is present on the page
	//, otherwise container is created and aded to the end of the page
	function ensureContainer(id: string){
		let container = document.getElementById(id);
		if(!container) {
			container = document.createElement('div');
			container.id = id;
			document.body.appendChild(container);
		}
		return container;
	}

	function loadScript(key: string, config: Object, src: string) {
		window['___OnlineSizing'] = key;
		window['___OnlineSizingConfig'] = config;
		const js = document.createElement('script') as HTMLScriptElement;
		js.id = key;
		js.src = src;
		js.async = true;

		const scripts = document.getElementsByTagName('script');
		const lastScript = scripts[scripts.length - 1];
		lastScript.parentNode.insertBefore(js, lastScript);
	};

	(function init(){
		ensureContainer(OZ_CONFIG.settings.container);
		loadScript('oz', OZ_CONFIG, 'https://staging-widgets.onlinesizing.bike/loader.js');
		console.log('all good');
	})();
})();