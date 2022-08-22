define([], function() {
    var internals = {
        handlers: {},
        elements: {}
    };

    var externals = {};

    internals.createButton = function() {
        return '<button class="random-char">Click Me for a Random Disney Character</button>';
    };

    internals.createCharCard = function(char) {
       
        return (
            '<div class="char-text">' + '<br>' +
             '<img src="' +char.imageUrl + '" + ></img>' + 
            '<p><strong>Name: </strong>' +
            char.name +
            '</p>' +
            '<p><strong>TV Shows: </strong>' +
            char.tvShows +
            '</p>' +
            '<p><strong>Video Games: </strong>' +
            char.videoGames +
            '</p>' +
            '<p><strong>Park Atractions: </strong>' +
            char.parkAttractions +
            '</p>' +
            '</div>'
        );
    };

    internals.renderChar = function(char) {
        if (internals.elements.charCard) {
            internals.elements.charCard.empty();
        }

        internals.elements.charCard = $(internals.createCharCard(char));
        internals.elements.app.append(internals.elements.charCard);
    };

    internals.renderButton = function() {
        if (internals.elements.button) {
            return;
        }

        internals.elements.button = $(internals.createButton());
        internals.elements.button.click(internals.handlers['button']);
        internals.elements.app.append(internals.elements.button);
    };

    externals.bind = function(event, handler) {
        internals.handlers[event] = handler;
    };

    externals.render = function(char) {
        internals.elements.app = $('#app');
        internals.renderButton();

        if (char) {
            internals.renderChar(char);
        }
    };

    return externals;
});
