import { defineConfig } from 'cypress';

export default defineConfig({
    chromeWebSecurity: false,
    e2e: {
        experimentalSessionAndOrigin: true,
        defaultCommandTimeout: 10000,
        requestTimeout: 30000,
        baseUrl: "https://urlbase.com",
        video: false,

        setupNodeEvents(on, config) {

            on("task", {

            })
        }
    }
})
