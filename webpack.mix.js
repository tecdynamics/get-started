const mix = require('laravel-mix')
const path = require('path')

const directory = path.basename(path.resolve(__dirname))
const source = `platform/packages/${directory}`
const dist = `public/vendor/core/packages/${directory}`

// mix
//     .js(`${source}/resources/js/get-started.js`, `${dist}/js`)
//     .sass(`${source}/resources/sass/get-started.scss`, `${dist}/css`)
//
// if (mix.inProduction()) {
//     mix
//         .copy(`${dist}/js/get-started.js`, `${source}/public/js`)
//         .copy(`${dist}/css/get-started.css`, `${source}/public/css`)
// }
