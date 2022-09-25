const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
    transpileDependencies: true,
    publicPath: "/inbox",
    pwa: {
        workboxOptions: {
            exclude: [/_redirects/],
        },
    },
});