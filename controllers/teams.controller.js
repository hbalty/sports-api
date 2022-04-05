/**
* Get all leagues
*/
exports.getTeams= function(req, res){
    leaguesService.getAllLeagues().then((data) => {
        var leagues = {"results": data.results, leagues: {}};
        res.charset = 'utf-8';
        res.send(leagues); 
    })
    .catch(error => {
        res.json(error)
	})
}