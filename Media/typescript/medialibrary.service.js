var Models;
(function (Models) {
    var MediaItem = (function () {
        function MediaItem(id, title, creator, type, rating) {
            this.id = id;
            this.title = title;
            this.creator = creator;
            this.type = type;
            this.rating = rating;
        }
        return MediaItem;
    }());
    Models.MediaItem = MediaItem;
})(Models || (Models = {}));
var Services;
(function (Services) {
    var CONST = Config.Constant.Default;
    var MediaService = (function () {
        function MediaService() {
            var _this = this;
            this.array = [];
            this.MEDIA_TYPES = Config.Constant.Default;
            this.init = function () {
                for (var i = 0; i < 6; i++) {
                    var obj = new Models.MediaItem(i, 'Book ' + i, 'Lucas Giunta ' + i, _this.MEDIA_TYPES[i], i);
                    _this.array.push(obj);
                }
            };
            this.list = function () {
                return _this.array;
            };
            this.update = function (item) {
                var obj = _this.list().filter(function (x) { return x.id === item.id; })[0];
                if (obj != null) {
                    for (var key in item) {
                        obj[key] = item[key];
                        item[key] = item[key];
                    }
                    return obj;
                }
            };
            this.remove = function (item) {
                for (var i = 0; i < _this.list().length; i++) {
                    if (_this.list()[i].title === item.title) {
                        _this.list().splice(i, 1);
                        return true;
                    }
                }
                return false;
            };
            this.add = function (title, creator, type, rating) {
                var id = _this.list().length + 1;
                var obj = new Models.MediaItem(id, title, creator, type, rating);
                _this.list().push(obj);
                return obj;
            };
            this.init();
        }
        return MediaService;
    }());
    Services.MediaService = MediaService;
    MediaLibraryT.service('MediaService', Services.MediaService);
})(Services || (Services = {}));
//# sourceMappingURL=medialibrary.service.js.map