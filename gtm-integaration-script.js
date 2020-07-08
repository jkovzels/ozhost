(function OZIntegration() {
    //Global configuration
    var OZ_CONFIG = {
        settings: {
            apiKey: '{{smartfit_apiKey}}',
            primary: 'hsl(187, 74%, 70%)',
            cta: 'rgb(150, 186, 50)',
        }
    };
    (function loadScript(key, config, src) {
        window['___OnlineSizing'] = key;
        window['___OnlineSizingConfig'] = config;
        var js = document.createElement('script');
        js.id = key;
        js.src = src;
        js.async = true;
        var scripts = document.getElementsByTagName('script');
        var lastScript = scripts[scripts.length - 1];
        lastScript.parentNode.insertBefore(js, lastScript);
    })('oz', OZ_CONFIG, 'https://staging-widgets.onlinesizing.bike/loader.js');
})();
