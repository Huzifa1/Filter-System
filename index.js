Reactor({
    "App": "[main]",
    "defaultView": "home",
    "authView": "login",
    "init": function(){
        console.log('hi');
    },
    "tick": function(){
        
    },
    "auth": function(){
        
        return false;
    }
});
