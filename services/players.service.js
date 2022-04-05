/**
* @returns Promise
*/
exports.getTeams = function(){
    return new Promise((resolve, reject) => {
        Team.find({}).populate('players').exec(function(err, teams){
            if (err) reject(err);
            resolve(temas)
        })
    })
}