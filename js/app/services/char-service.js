define(function() {
    var internals = {}; // internal state
    var externals = {}; // external api
    var api = "https://api.disneyapi.dev/characters"

    externals.getChar = function (cb) {

        fetch(api)
        .then(function(resp) {
            return resp.json();
        })
        .then(function(data) {
            var random = Math.floor(Math.random() * data.data.length);
            cb(data.data[random])
        })
    }

    
    return externals;
});
