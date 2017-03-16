/**
 * Created by tony on 2017/3/6.
 */
var pomelo = require('./../pomelo');
cmds = module.exports ={};


/*
 *   连接服务器
 * */
cmds.connect = function (cb, host, port  ) {
    host = host || '127.0.0.1';
    port = port || '3010';
    pomelo.init({host: host, port: port, log: true}, function(){
        cmds.enterWorld(cb);
    });
};

cmds.enterWorld = function(cb){
    pomelo.request('world.playerHandler.enterScene',{msg:'hello world'},function(data){
        cb(data)
    });
};