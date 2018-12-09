
var repo = function(){
    return {
        get: function(id){
            console.log('Getting Task')
            return {
                name: 'Finish JS'
            }
        }
    }
}

module.exports = repo();