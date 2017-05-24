function mediaItemComponent($scope, MediaService, MEDIA_TYPES){
    var vm = this;
    vm.MEDIA_TYPES = MEDIA_TYPES;
    vm.MediaService = MediaService;

    vm.change = change;
    vm.ratings = ratings;
    vm.remove = remove;

    function change(){
        console.log(vm.MediaService.update(vm.item));
        console.log(vm.item)
    }
    function ratings(r){
        vm.item.rating = r;
        change();
    }
    function remove(){
        vm.MediaService.remove(vm.item);
    }
}

MediaLibraryA.component('mediaItem',{
    template: `
            <div class='lg-card'>
                <span class="label label-danger" style="position: relative;left: 95%;" ng-click="$ctrl.remove()">remove</span>
            
            <div>
                <h1>{{$ctrl.item.title}}</h1>
                <h2>By {{$ctrl.item.creator}}</h2>
            </div>
            <div>
                <label>Media types</label>
                <select ng-model="$ctrl.item.type" ng-change="$ctrl.change()">
                    <option ng-repeat="i in $ctrl.MEDIA_TYPES" value="{{i}}">{{i}}</option>
                </select>
            </div>
            <div>
                <label>Rating</label><br>
                <span ng-click="$ctrl.ratings(i)" ng-repeat="i in [1,2,3,4,5]" ng-class="{'fa fa-star':$index+1 <= $ctrl.item.rating, 'fa fa-star-o':$index+1 > $ctrl.item.rating}"></span>
            </div>
        </div>
    `,
    controller: mediaItemComponent,
    bindings:{
        item:'<'
    }

})