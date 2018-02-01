var linkLayerPrefix = "linkto:";
var backLinkKeyword = "$BACK";

function showLinkLayers (context) {
  return showOrHideLinkLayers(context, true);
}

function hideLinkLayers (context) {
  return showOrHideLinkLayers(context, false);
}

function toggle(context) {
  return showOrHideLinkLayers (context, -1);
}

function showOrHideLinkLayers (context, shouldShowLayers) {
  var doc = context.document
  var layers = doc.currentPage().children().objectEnumerator();
  while (layer = layers.nextObject()) {

    var name = layer.name();
    if (name == linkLayerPrefix || name.indexOf(linkLayerPrefix) != -1) {

      if (shouldShowLayers === -1) {
        // decide whether to hide or show all layers, based on the visibility of the first layer we find
        shouldShowLayers = ![layer isVisible];
      }

      [layer setIsVisible:shouldShowLayers];
    }
  }
  return shouldShowLayers;
}