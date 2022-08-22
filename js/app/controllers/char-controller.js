define(['views/char-view', 'services/char-service'], function(
    charView,
    charService
) {
    var externals = {};
    var internals = {};

    externals.start = function() {
        internals.bindEventHandlers();
        charView.render();
    };

    internals.bindEventHandlers = function() {
        charView.bind('button', internals.buttonHandler);
    };

    internals.buttonHandler = function() {
        charService.getChar(charView.render);
    };

    return externals;
});
