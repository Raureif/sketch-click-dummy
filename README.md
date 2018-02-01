# Click Dummy Sketch Plugin

Exports a simple HTML click dummy so you can easily prototype flows between your screens.

![Sketch Click Dummy](https://cloud.githubusercontent.com/assets/418877/5471648/6ff1f756-85f8-11e4-9645-05e76d699709.png)

# Installation
1. Download the files in this repository.
2. Open the `.sketchplugin` file.

# How to use
- To create a link placeholder, draw a rectangle and rename it to _linkto:ArtboardName_.
- Rename the rectangle to _linkto:$BACK_ if you want to create a back link.
- From the _Plugins_ Menu, choose _Show or Hide Link Layers_ (^⇧⌘H) to toggle visibility of the link placeholder layers.
- Use _Export Click Dummy_ (^⇧⌘E) to export the HTML click dummy.
- Have a look at the Sketch file `Example.sketch` to get started.

# Known issues
- Sketch crashes when there are too many objects on the page. Splitting the document into pages or multiple documents is currently the only workaround we know of.

# Author
Frank Rausch, [Raureif GmbH](http://raureif.net)

Uses the [Sketch Sandbox](https://github.com/bomberstudios/sketch-sandbox) library by Ale Muñoz.

# License
MIT License