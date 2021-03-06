(function() {
    'use strict';
    angular.module('nx-library', []);
})();
(function() {
    'use strict';
    angular.module('nx-library').factory('nx', nx);
    nx.$inject = ['nxMessage', 'nxCache'];

    function nx(nxMessage, nxCache) {
        return {
            message: nxMessage,
            cache: nxCache
        };
    };
})();
(function() {
    'use strict';
    angular.module('nx-library').factory('nxMessage', nxMessage);
    nxMessage.$inject = [];

    function nxMessage() {
        function success(msg) {
            toastr['success'](msg);
        };

        function error(msg) {
            toastr['error'](msg);
        };

        function warning(msg) {
            toastr['warning'](msg);
        };

        function info(msg) {
            toastr['info'](msg);
        };
        return {
            success: success,
            error: error,
            warning: warning,
            info: info
        };
    };
})();
(function() {
    'use strict';
    angular.module('nx-library').factory('nxCache', nxCache);
    nxCache.$inject = [];

    function nxCache() {
        var data = {};

        function clear() {
            data = {};
        };

        function get(key) {
            return data[key];
        };

        function set(key, value) {
            data[key] = value;
        };

        function exists(key) {
            return !!data[key];
        };

        function remove(key) {
            delete data[key];
        };
        clear();
        return {
            get: get,
            set: set,
            exists: exists,
            remove: remove,
            clear: clear
        };
    };
})();
