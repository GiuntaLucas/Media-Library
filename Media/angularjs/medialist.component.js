function mediaListComponent($scope, MediaService){
    var vm = this;
    vm.MediaService = MediaService;
    vm.data = [];
    vm.asc = false;
    vm.order = "";
    vm.search = "";

    function init () {                      //$onInit not called :/
        vm.data = vm.MediaService.list()
    }
    init();
}
MediaLibraryA.component('mediaList',{
    template: `
        <div class='lg-card' style="padding:8px">
            <div>
                <h1>List media</h1>
            </div>
            <div>
                <label>Order by</label>
                <select ng-model="$ctrl.order">
                    <option value="title">title</option>
                    <option value="creator">creator</option>
                    <option value="type">type</option>
                    <option value="rating">rating</option>
                </select>
                <input type="checkbox" ng-model="$ctrl.asc"/>
            </div>
            <div>
                <label>Search</label>
                <input type="text" class="form-control" ng-model="$ctrl.search"/>
            </div>
            <div>
                <ul class="list-group">
                    <li class="list-grou-item" ng-repeat="d in $ctrl.data | orderBy: $ctrl.order:$ctrl.asc | filter: $ctrl.search" style="padding:8px">
                        <media-item item="d"></media-item>
                    </li>
                </ul>
            </div>
        </div>
    `,
    controller: mediaListComponent,

})