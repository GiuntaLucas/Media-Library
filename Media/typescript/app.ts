var MediaLibraryT  = angular.module('MediaLibraryT',[])



module Config{
     export class Constant {

        static get Default(): any {
            
            return {
                MEDIA_TYPES: ['Type 1', 'Type 2', 'Type 3', 'Type 4','Type 5','Other']
            };
        }

    }
    MediaLibraryT.constant('CONST', Constant.Default)
}