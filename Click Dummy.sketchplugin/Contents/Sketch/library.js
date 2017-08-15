var linkLayerPrefix = ['linkto:','tabto:'];
var linkTargetAttribute = ['_self','_blank'];

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
    for(var i=0; i<linkLayerPrefix.length; i++) {
      if (name == linkLayerPrefix[i] || name.indexOf(linkLayerPrefix[i]) != -1) {
        if (shouldShowLayers === -1) {
          // decide whether to hide or show all layers, based on the visibility of the first layer we find
          shouldShowLayers = ![layer isVisible];
        }
        [layer setIsVisible:shouldShowLayers];
      }
    }
  }
  return shouldShowLayers;
}
