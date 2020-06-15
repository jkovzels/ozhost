(function OZIntegration() {
    //Global configuration
    var OZ_CONFIG = {
        settings: {
            apiKey: 'YOUR_API_KEY_HERE',
            container: "oz-sizing-container",
            primary: 'hsl(187, 74%, 70%)',
            cta: 'rgb(150, 186, 50)',
        }
    };
    //window.OZ_CONFIG = OZ_CONFIG;
    //Ensures that container element is present on the page
    //, otherwise container is created and aded to the end of the page
    function ensureContainer(id) {
        var container = document.getElementById(id);
        if (!container) {
            container = document.createElement('div');
            container.id = id;
            document.body.appendChild(container);
        }
        return container;
    }
    function loadScript(key, config, src) {
        window['___OnlineSizing'] = key;
        window['___OnlineSizingConfig'] = config;
        var js = document.createElement('script');
        js.id = key;
        js.src = src;
        js.async = true;
        var scripts = document.getElementsByTagName('script');
        var lastScript = scripts[scripts.length - 1];
        lastScript.parentNode.insertBefore(js, lastScript);
    }
    ;
    (function init() {
        ensureContainer(OZ_CONFIG.settings.container);
        loadScript('oz', OZ_CONFIG, 'https://staging-widgets.onlinesizing.bike/loader.js');
        console.log('all good');
    })();
})();
