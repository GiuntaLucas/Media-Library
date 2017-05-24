MediaLibraryA.factory('MediaService', MediaService);

MediaService.$inject = ['MEDIA_TYPES'];

function MediaService (MEDIA_TYPES) {
  var array  = [];
  var id = 1;
  var service = {
    list : list,
    update : update,
    remove : remove,
    add : add
  }
  
    function init (){
    
      for(let i = 0; i < 6; i ++){
        let obj = new MediaItem('Book '+ i,'Lucas Giunta '+i,MEDIA_TYPES[i], i);
        array.push(obj);
      }
  }
  init();

  return service;
  
  
  
  function list (){
    
      return array;
  };
  
  function update (item){

    let obj = list().filter(x => x.title === item.title);
    
    if(obj != null){
       for(let key in item){
            obj[key] = item[key];            
            item[key] = item[key];

          }
      return obj;
    
    }
    
  };
  
  function remove (item){
    for(let i = 0; i < list().length; i ++){
      if(list()[i].title === item.title){
        list().splice(i,1);
        return true;
      }
    }
    return false;
  };
  
  function add (title,creator,type,rating){
    id ++;
    let obj = new MediaItem(title, creator, type,rating);
      list().push(obj);
      return obj;
  };
  
  //----------"Model"------------
  
  function MediaItem(title,creator,type,rating){
    this.id = id;
    this.title = title;
    this.creator = creator;
    this.type = type;
    this.rating = rating;
    
    if(this.rating == null) this.rating = 0;
  }
}
