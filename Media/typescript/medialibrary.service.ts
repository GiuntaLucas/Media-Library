module Models{
    export class MediaItem{

        constructor(public id:number, public title:string, public creator:string, public type:string, public rating?:number){

        }   
    }
}
module Services{

    let CONST = Config.Constant.Default;
    export class MediaService{
        private id:number;
        private array:Array<Models.MediaItem> = [];

        private MEDIA_TYPES = Config.Constant.Default;

        constructor(){

            this.init();
        }

        init = () => {
           for(let i = 0; i < 6; i ++){
                let obj = new Models.MediaItem(i,'Book '+ i,'Lucas Giunta '+i,this.MEDIA_TYPES[i], i);
                this.array.push(obj);
            } 
        }

        list = ():Array<Models.MediaItem> => {
            return this.array;
        }
        update = (item:Models.MediaItem):Models.MediaItem => {
            let obj = this.list().filter(x => x.id === item.id)[0];
            if(obj != null){
                for(let key in item){
                        obj[key] = item[key];            
                        item[key] = item[key];
                }
            return obj;
            }

        }
        remove = (item:Models.MediaItem):boolean =>{
            for(let i = 0; i < this.list().length; i ++){
                if(this.list()[i].title === item.title){
                    this.list().splice(i,1);
                    return true;
                }
            }
            return false;
        }
        add = (title:string,creator:string,type:string,rating:number):Models.MediaItem => {
            let id = this.list().length + 1;
            let obj = new Models.MediaItem(id,title, creator, type,rating);
            this.list().push(obj);
            return obj;
        }
    }
    MediaLibraryT.service('MediaService', Services.MediaService)

}

