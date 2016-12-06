(() => {
    'use strict';
    const constants = {
        colors: [{
            rgb: '255,0,0'
        }, {
            rgb: '0,255,0'
        }, {
            rgb: '0,0,255'
        }, {
            rgb: '0,0,0'
        }],
        rows: 10,
        cols: 10
    };

    angular
        .module('app')
        .constant('constants', constants);
})();
