var Components;
(function (Components) {
    var mediaItemCtrl = (function () {
        function mediaItemCtrl($scope, MediaService) {
            var _this = this;
            this.$scope = $scope;
            this.MediaService = MediaService;
            this.MEDIA_TYPES = Config.Constant.Default.MEDIA_TYPES;
            this.change = function () {
                _this.MediaService.update(_this.item);
            };
            this.ratings = function (r) {
                _this.item.rating = r;
                _this.change();
            };
            this.remove = function () {
                _this.MediaService.remove(_this.item);
            };
            console.log(this.MEDIA_TYPES);
        }
        ;
        return mediaItemCtrl;
    }());
    mediaItemCtrl.$inject = ['$scope', 'MediaService'];
    var mediaItemComponent = (function () {
        function mediaItemComponent() {
            this.controller = mediaItemCtrl;
            this.template = "\n        <div class='lg-card'>\n                <span class=\"label label-primary\" style=\"position: relative;left: 95%;\" ng-click=\"$ctrl.remove()\">remove</span>\n            \n            <div>\n                <h1>{{$ctrl.item.title}}</h1>\n                <h2>By {{$ctrl.item.creator}}</h2>\n            </div>\n            <div>\n                <label>Media types</label>\n                <select ng-model=\"$ctrl.item.type\" ng-change=\"$ctrl.change()\">\n                    <option ng-repeat=\"i in $ctrl.MEDIA_TYPES\" value=\"{{i}}\">{{i}}</option>\n                </select>\n            </div>\n            <div>\n                <label>Rating</label><br>\n                <span ng-click=\"$ctrl.ratings(i)\" ng-repeat=\"i in [1,2,3,4,5]\" ng-class=\"{'fa fa-star':$index+1 <= $ctrl.item.rating, 'fa fa-star-o':$index+1 > $ctrl.item.rating}\"></span>\n            </div>\n        </div>\n    ";
            this.bindings = {
                item: '<'
            };
        }
        return mediaItemComponent;
    }());
    MediaLibraryT.component('mediaItem', new mediaItemComponent());
})(Components || (Components = {}));
//# sourceMappingURL=mediadetail.component.js.map