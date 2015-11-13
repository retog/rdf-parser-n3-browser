# rdf-parser-n3 for browser usage

This provides a version of [rdf-parser-n3](https://github.com/rdf-ext/rdf-parser-n3)
for usage in the browser. It does not include rdf-ext so this needs to be loaded
separately.

What is is good for? If you're using a library that includes rdf-ext and just 
want to add support to parse turtle adding [dist/n3-parser.js](dist/n3-parser.js) 
is the easiest way.

## Building

For convenience the result of the built is included in the `dist/` directory. To
build it yourself run:

    npm install
