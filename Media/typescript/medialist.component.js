var Components;
(function (Components) {
    var mediaListCtrl = (function () {
        function mediaListCtrl($scope, MediaService) {
            this.$scope = $scope;
            this.MediaService = MediaService;
            this.data = [];
            this.asc = false;
            this.order = "";
            this.search = "";
            this.data = this.MediaService.list();
        }
        ;
        return mediaListCtrl;
    }());
    mediaListCtrl.$inject = ['$scope', 'MediaService'];
    var mediaListComponent = (function () {
        function mediaListComponent() {
            this.controller = mediaListCtrl;
            this.template = "\n        <div class='lg-card' style=\"padding:8px\">\n            <div>\n                <h1>List media</h1>\n            </div>\n            <div>\n                <label>Order by</label>\n                <select ng-model=\"$ctrl.order\">\n                    <option value=\"title\">title</option>\n                    <option value=\"creator\">creator</option>\n                    <option value=\"type\">type</option>\n                    <option value=\"rating\">rating</option>\n                </select>\n                <input type=\"checkbox\" ng-model=\"$ctrl.asc\"/>\n            </div>\n            <div>\n                <label>Search</label>\n                <input type=\"text\" class=\"form-control\" ng-model=\"$ctrl.search\"/>\n            </div>\n            <div>\n                <ul class=\"list-group\">\n                    <li class=\"list-grou-item\" ng-repeat=\"d in $ctrl.data | orderBy: $ctrl.order:$ctrl.asc | filter: $ctrl.search\" style=\"padding:8px\">\n                        <media-item item=\"d\"></media-item>\n                    </li>\n                </ul>\n            </div>\n        </div>\n    ";
        }
        return mediaListComponent;
    }());
    MediaLibraryT.component('mediaList', new mediaListComponent());
})(Components || (Components = {}));
//# sourceMappingURL=medialist.component.js.map