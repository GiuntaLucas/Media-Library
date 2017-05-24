module Components{

class mediaItemCtrl{
    public item:Models.MediaItem
    public MEDIA_TYPES:Array<string> = Config.Constant.Default.MEDIA_TYPES
    static $inject = ['$scope','MediaService']

    constructor(private $scope, private MediaService:Services.MediaService){
        console.log(this.MEDIA_TYPES)
    };

    change = () => {
        this.MediaService.update(this.item);
    }
    ratings = (r) => {
        this.item.rating = r;
        this.change();
    }
    remove = () => {
        this.MediaService.remove(this.item);
    }
}

class mediaItemComponent{
    public controller:any;
    public template:string;
    public bindings:any;
    constructor(){
        this.controller = mediaItemCtrl;
        this.template = `
        <div class='lg-card'>
                <span class="label label-primary" style="position: relative;left: 95%;" ng-click="$ctrl.remove()">remove</span>
            
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
    `;
        this.bindings = {
            item:'<'
        }
    }
}

    MediaLibraryT.component('mediaItem',new mediaItemComponent());
}
