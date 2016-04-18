var N3Parser = require('rdf-parser-n3');
rdf.parsers['text/turtle'] = N3Parser;
if (typeof window !== 'undefined') {
    window.N3Parser = N3Parser;
}