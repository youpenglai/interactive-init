module.exports = (api, opts, rootOptions) => {
    // api.extendPackage({
    //     dependencies: {
    //         '@youpenglai/interactive': '^0.0.0'
    //     }
    // });

    // api.injectImports(utils.getMain(), `import './plugins/element.js'`)

    api.render({
        '.vue.config.js': './templates/vue.config.js',

        './public/plinteractive.json': './templates/public/plinteractive.json',
        './src/views/Main.vue': './templates/src/views/Main.vue',
        './src/views/Config.vue': './templates/src/views/Config.vue',
        './src/views/Console.vue': './templates/src/views/Console.vue',
        './src/views/Client.vue': './templates/src/views/Client.vue',

        './src/router.js': './templates/src/router.js',
        './src/App.vue': './templates/src/App.vue',
    });
};
