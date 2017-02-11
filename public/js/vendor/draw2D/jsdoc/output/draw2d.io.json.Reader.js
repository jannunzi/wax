Ext.data.JsonP.draw2d_io_json_Reader({"tagname":"class","name":"draw2d.io.json.Reader","autodetected":{},"files":[{"filename":"Reader.js","href":"Reader.html#draw2d-io-json-Reader"}],"extends":"draw2d.io.Reader","members":[{"name":"constructor","tagname":"method","owner":"draw2d.io.Reader","id":"method-constructor","meta":{"private":true}},{"name":"createFigureFromType","tagname":"method","owner":"draw2d.io.json.Reader","id":"method-createFigureFromType","meta":{}},{"name":"unmarshal","tagname":"method","owner":"draw2d.io.json.Reader","id":"method-unmarshal","meta":{}}],"alternateClassNames":[],"aliases":{},"id":"class-draw2d.io.json.Reader","short_doc":"Read a JSON data and import them into the canvas. ...","component":false,"superclasses":["draw2d.io.Reader"],"subclasses":[],"mixedInto":[],"mixins":[],"parentMixins":[],"requires":[],"uses":[],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'><a href='#!/api/draw2d.io.Reader' rel='draw2d.io.Reader' class='docClass'>draw2d.io.Reader</a><div class='subclass '><strong>draw2d.io.json.Reader</strong></div></div><h4>Files</h4><div class='dependency'><a href='source/Reader.html#draw2d-io-json-Reader' target='_blank'>Reader.js</a></div></pre><div class='doc-contents'><p>Read a JSON data and import them into the canvas. The JSON must be generated with the\n<a href=\"#!/api/draw2d.io.json.Writer\" rel=\"draw2d.io.json.Writer\" class=\"docClass\">draw2d.io.json.Writer</a>.</p>\n\n<pre><code> // Load a standard draw2d JSON object into the canvas\n //\n var jsonDocument = \n     [\n      {\n         \"type\": \"<a href=\"#!/api/draw2d.shape.basic.Oval\" rel=\"draw2d.shape.basic.Oval\" class=\"docClass\">draw2d.shape.basic.Oval</a>\",\n         \"id\": \"5b4c74 b0-96d1-1aa3-7eca-bbeaed5fffd7\",\n         \"x\": 237,\n         \"y\": 236,\n         \"width\": 93,\n         \"height\": 38\n       },\n       {\n         \"type\": \"<a href=\"#!/api/draw2d.shape.basic.Rectangle\" rel=\"draw2d.shape.basic.Rectangle\" class=\"docClass\">draw2d.shape.basic.Rectangle</a>\",\n         \"id\": \"354fa3b9-a834-0221-2009-abc2d6bd852a\",\n         \"x\": 225,\n         \"y\": 97,\n         \"width\": 201,\n         \"height\": 82,\n         \"radius\": 2\n       }\n     ];\n // unmarshal the JSON document into the canvas\n // (load)\n var reader = new <a href=\"#!/api/draw2d.io.json.Reader\" rel=\"draw2d.io.json.Reader\" class=\"docClass\">draw2d.io.json.Reader</a>();\n reader.unmarshal(canvas, jsonDocument);\n</code></pre>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-constructor' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/draw2d.io.Reader' rel='draw2d.io.Reader' class='defined-in docClass'>draw2d.io.Reader</a><br/><a href='source/Reader2.html#draw2d-io-Reader-method-constructor' target='_blank' class='view-source'>view source</a></div><strong class='new-keyword'>new</strong><a href='#!/api/draw2d.io.Reader-method-constructor' class='name expandable'>draw2d.io.json.Reader</a>( <span class='pre'></span> ) : <a href=\"#!/api/draw2d.io.Reader\" rel=\"draw2d.io.Reader\" class=\"docClass\">draw2d.io.Reader</a><span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/draw2d.io.Reader\" rel=\"draw2d.io.Reader\" class=\"docClass\">draw2d.io.Reader</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-createFigureFromType' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='draw2d.io.json.Reader'>draw2d.io.json.Reader</span><br/><a href='source/Reader.html#draw2d-io-json-Reader-method-createFigureFromType' target='_blank' class='view-source'>view source</a></div><a href='#!/api/draw2d.io.json.Reader-method-createFigureFromType' class='name expandable'>createFigureFromType</a>( <span class='pre'>type</span> ) : <a href=\"#!/api/draw2d.Figure\" rel=\"draw2d.Figure\" class=\"docClass\">draw2d.Figure</a><span class=\"signature\"></span></div><div class='description'><div class='short'>Factory method to create an instance of the given element type. ...</div><div class='long'><p>Factory method to create an instance of the given element type.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>type</span> : String<div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/draw2d.Figure\" rel=\"draw2d.Figure\" class=\"docClass\">draw2d.Figure</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-unmarshal' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='draw2d.io.json.Reader'>draw2d.io.json.Reader</span><br/><a href='source/Reader.html#draw2d-io-json-Reader-method-unmarshal' target='_blank' class='view-source'>view source</a></div><a href='#!/api/draw2d.io.json.Reader-method-unmarshal' class='name expandable'>unmarshal</a>( <span class='pre'>canvas, document</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Restore the canvas from a given JSON object. ...</div><div class='long'><p>Restore the canvas from a given JSON object.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>canvas</span> : <a href=\"#!/api/draw2d.Canvas\" rel=\"draw2d.Canvas\" class=\"docClass\">draw2d.Canvas</a><div class='sub-desc'><p>the canvas to restore</p>\n</div></li><li><span class='pre'>document</span> : Object<div class='sub-desc'><p>the json object to load.</p>\n</div></li></ul><p>Overrides: <a href=\"#!/api/draw2d.io.Reader-method-unmarshal\" rel=\"draw2d.io.Reader-method-unmarshal\" class=\"docClass\">draw2d.io.Reader.unmarshal</a></p></div></div></div></div></div></div></div>","meta":{}});