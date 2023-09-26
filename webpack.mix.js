let mix = require('laravel-mix');

mix.js('assets/scripts/main.js', 'scripts')
   .sass('assets/styles/main.scss', 'styles')
   .setPublicPath('dist')
   .setResourceRoot('../');