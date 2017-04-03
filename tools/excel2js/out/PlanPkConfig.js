var PlanBase = require('./../../FrameWork/Utils/PlanBase'),
util = require('util');

var PlanPkConfig = function () {

	var data = [[1,1,1],[2,1,2],[3,1,3],[4,1,4],[5,1,5],[6,1,6],[7,1,7],[8,1,8],[9,1,9],[10,1,10],[11,1,11],[12,1,12],[13,1,13],[14,2,1],[15,2,2],[16,2,3],[17,2,4],[18,2,5],[19,2,6],[20,2,7],[21,2,8],[22,2,9],[23,2,10],[24,2,11],[25,2,12],[26,2,13],[27,3,1],[28,3,2],[29,3,3],[30,3,4],[31,3,5],[32,3,6],[33,3,7],[34,3,8],[35,3,9],[36,3,10],[37,3,11],[38,3,12],[39,3,13],[40,4,1],[41,4,2],[42,4,3],[43,4,4],[44,4,5],[45,4,6],[46,4,7],[47,4,8],[48,4,9],[49,4,10],[50,4,11],[51,4,12],[52,4,13],[53,5,1],[54,5,2]];

	var indexs = {"1":0,"2":1,"3":2,"4":3,"5":4,"6":5,"7":6,"8":7,"9":8,"10":9,"11":10,"12":11,"13":12,"14":13,"15":14,"16":15,"17":16,"18":17,"19":18,"20":19,"21":20,"22":21,"23":22,"24":23,"25":24,"26":25,"27":26,"28":27,"29":28,"30":29,"31":30,"32":31,"33":32,"34":33,"35":34,"36":35,"37":36,"38":37,"39":38,"40":39,"41":40,"42":41,"43":42,"44":43,"45":44,"46":45,"47":46,"48":47,"49":48,"50":49,"51":50,"52":51,"53":52,"54":53};

	var indexNames = {"id":0,"cardType":1,"value":2};

	PlanBase.call( this, data , indexs , indexNames );

};

util.inherits( PlanPkConfig, PlanBase );

var pro = PlanPkConfig.prototype;

pro.getCardtype = function(id)
{
	var data = this.findById(id);
	return data.cardType
};
pro.getId = function(id)
{
	var data = this.findById(id);
	return data.id
};
pro.getValue = function(id)
{
	var data = this.findById(id);
	return data.value
};
module.exports = PlanPkConfig;

