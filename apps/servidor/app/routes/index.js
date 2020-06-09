module.exports = function(application){
	application.get('/', function(req, res){

		res.format({
			html: function(){
				res.send('Bem vindo a sua app NodeJS! - HTML');
			},

			json: function(){
				var retorno = {
					body: 'Bem vindo a sua app NodeJS! - JSON'
				}
				res.json(retorno);
			}
		});
		
	});
}