'use strict';
var GulpConfig = (function () {
    function gulpConfig() {        
        this.source = './src/';
        this.sourceApp = this.source + 'server/';

        this.tsOutputPath = this.source + 'server/js';
        this.allJavaScript = [this.source + 'server/js/**/*.js'];
        this.allTypeScript = this.sourceApp + 'ts/**/*.ts';

        this.typings = './typings/';
        this.libraryTypeScriptDefinitions = './typings/**/*.ts';
    }
    return gulpConfig;
})();
module.exports = GulpConfig;