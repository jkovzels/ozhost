(function OZIntegration() {
	//Global configuration
	const OZ_CONFIG: OzConfig = {
		settings: {
			apiKey: '{{smartfit_apiKey}}',
			primary: 'hsl(187, 74%, 70%)', // colors can be any format accepted by css. Hey, rgb, hsl, …
			cta: 'rgb(150, 186, 50)',
		}
	};
	(function loadScript(key: string, config: Object, src: string) {
		window['___OnlineSizing'] = key;
		window['___OnlineSizingConfig'] = config;
		const js = document.createElement('script') as HTMLScriptElement;
		js.id = key;
		js.src = src;
		js.async = true;

		const scripts = document.getElementsByTagName('script');
		const lastScript = scripts[scripts.length - 1];
		lastScript.parentNode.insertBefore(js, lastScript);
	})('oz', OZ_CONFIG, 'https://staging-widgets.onlinesizing.bike/loader.js');

})();