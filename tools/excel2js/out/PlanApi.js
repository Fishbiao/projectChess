/**
* 本地数据管理
*/
var exp = module.exports = {};

var modules = exp.modules = {};

var names =['PlanCommonParameter', 'PlanMjConfig'];

function create( name ){
	if("PlanCommonParameter"==name){
		var PlanCommonParameter = require('./../../MgData/PlanData/PlanCommonParameter');
		return new PlanCommonParameter();
	}
	else if("PlanMjConfig"==name){
		var PlanMjConfig = require('./../../MgData/PlanData/PlanMjConfig');
		return new PlanMjConfig();
	}
}
function doman(){   
    for(var i = 0 ; i < 2 ; ++i ){
        var name = names[i];
        Object.defineProperty(exp, name, {
            get: (function (name) {
                var mod = modules[name];
                return function () {
                {
                    mod = modules[name] = create( name );
                }
                return mod;
            }
            })(name)
        });
    } 
}
doman();
window.PlanApi = exp;
