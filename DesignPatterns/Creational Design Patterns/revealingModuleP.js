var repo = function(){
    var get = function(id){
        console.log('Getting task');
        return {
            name: 'Task-1'
        }
    }
    var save = function(){
        console.log('Saving the task to db');
    }
    return {
        get: get,
        save: save
    }
}