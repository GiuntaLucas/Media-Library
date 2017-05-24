var MediaLibraryT = angular.module('MediaLibraryT', []);
var Config;
(function (Config) {
    var Constant = (function () {
        function Constant() {
        }
        Object.defineProperty(Constant, "Default", {
            get: function () {
                return {
                    MEDIA_TYPES: ['Type 1', 'Type 2', 'Type 3', 'Type 4', 'Type 5', 'Other']
                };
            },
            enumerable: true,
            configurable: true
        });
        return Constant;
    }());
    Config.Constant = Constant;
    MediaLibraryT.constant('CONST', Constant.Default);
})(Config || (Config = {}));
//# sourceMappingURL=app.js.map