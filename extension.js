
const Main = imports.ui.main;

let old;

function init() {}

function enable() {
    old = Main.overview._controls._thumbnailsSlider._getAlwaysZoomOut;
    Main.overview._controls._thumbnailsSlider._getAlwaysZoomOut = function() {
        return true;
    };
}

function disable() {
    Main.overview._controls._thumbnailsSlider._getAlwaysZoomOut = old;
}
