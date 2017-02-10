Ext.data.JsonP.draw2d_layout_connection_SketchConnectionRouter({"tagname":"class","name":"draw2d.layout.connection.SketchConnectionRouter","autodetected":{},"files":[{"filename":"SketchConnectionRouter.js","href":"SketchConnectionRouter.html#draw2d-layout-connection-SketchConnectionRouter"}],"inheritable":true,"author":[{"tagname":"author","name":"Andreas Herz","email":null}],"since":"2.7.2","extends":"draw2d.layout.connection.MazeConnectionRouter","members":[{"name":"constructor","tagname":"method","owner":"draw2d.layout.connection.SketchConnectionRouter","id":"method-constructor","meta":{}},{"name":"_route","tagname":"method","owner":"draw2d.layout.connection.MazeConnectionRouter","id":"method-_route","meta":{"private":true}},{"name":"canRemoveSegmentAt","tagname":"method","owner":"draw2d.layout.connection.ConnectionRouter","id":"method-canRemoveSegmentAt","meta":{}},{"name":"canRemoveVertexAt","tagname":"method","owner":"draw2d.layout.connection.ConnectionRouter","id":"method-canRemoveVertexAt","meta":{}},{"name":"generateNoGoGrid","tagname":"method","owner":"draw2d.layout.connection.MazeConnectionRouter","id":"method-generateNoGoGrid","meta":{}},{"name":"getAdjustedPoint","tagname":"method","owner":"draw2d.layout.connection.MazeConnectionRouter","id":"method-getAdjustedPoint","meta":{}},{"name":"getPersistentAttributes","tagname":"method","owner":"draw2d.layout.connection.ConnectionRouter","id":"method-getPersistentAttributes","meta":{}},{"name":"onDrag","tagname":"method","owner":"draw2d.layout.connection.ConnectionRouter","id":"method-onDrag","meta":{}},{"name":"onInstall","tagname":"method","owner":"draw2d.layout.connection.SketchConnectionRouter","id":"method-onInstall","meta":{}},{"name":"onUninstall","tagname":"method","owner":"draw2d.layout.connection.ConnectionRouter","id":"method-onUninstall","meta":{"template":true}},{"name":"route","tagname":"method","owner":"draw2d.layout.connection.MazeConnectionRouter","id":"method-route","meta":{}},{"name":"setPersistentAttributes","tagname":"method","owner":"draw2d.layout.connection.ConnectionRouter","id":"method-setPersistentAttributes","meta":{}},{"name":"verticesSet","tagname":"method","owner":"draw2d.layout.connection.ConnectionRouter","id":"method-verticesSet","meta":{"protected":true}}],"alternateClassNames":[],"aliases":{},"id":"class-draw2d.layout.connection.SketchConnectionRouter","short_doc":"Provide a router which routes the connection in a hand drawn manner. ...","component":false,"superclasses":["draw2d.layout.connection.ConnectionRouter","draw2d.layout.connection.MazeConnectionRouter"],"subclasses":[],"mixedInto":[],"mixins":[],"parentMixins":[],"requires":[],"uses":[],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'><a href='#!/api/draw2d.layout.connection.ConnectionRouter' rel='draw2d.layout.connection.ConnectionRouter' class='docClass'>draw2d.layout.connection.ConnectionRouter</a><div class='subclass '><a href='#!/api/draw2d.layout.connection.MazeConnectionRouter' rel='draw2d.layout.connection.MazeConnectionRouter' class='docClass'>draw2d.layout.connection.MazeConnectionRouter</a><div class='subclass '><strong>draw2d.layout.connection.SketchConnectionRouter</strong></div></div></div><h4>Files</h4><div class='dependency'><a href='source/SketchConnectionRouter.html#draw2d-layout-connection-SketchConnectionRouter' target='_blank'>SketchConnectionRouter.js</a></div></pre><div class='doc-contents'><p>Provide a router which routes the connection in a hand drawn manner.</p>\n\n<pre class='inline-example preview small frame'><code>var createConnection=function(){\n   var con = new <a href=\"#!/api/draw2d.Connection\" rel=\"draw2d.Connection\" class=\"docClass\">draw2d.Connection</a>();\n   con.setRouter(new <a href=\"#!/api/draw2d.layout.connection.SketchConnectionRouter\" rel=\"draw2d.layout.connection.SketchConnectionRouter\" class=\"docClass\">draw2d.layout.connection.SketchConnectionRouter</a>());\n   return con;\n};\n\n// install a custom connection create policy\n//\ncanvas.installEditPolicy(  new <a href=\"#!/api/draw2d.policy.connection.DragConnectionCreatePolicy\" rel=\"draw2d.policy.connection.DragConnectionCreatePolicy\" class=\"docClass\">draw2d.policy.connection.DragConnectionCreatePolicy</a>({\n       createConnection: createConnection\n}));\n\n// create and add two nodes which contains Ports (In and OUT)\n//\nvar f1 = new <a href=\"#!/api/draw2d.shape.analog.OpAmp\" rel=\"draw2d.shape.analog.OpAmp\" class=\"docClass\">draw2d.shape.analog.OpAmp</a>({x:10, y:10});\nvar f2 = new <a href=\"#!/api/draw2d.shape.analog.ResistorVertical\" rel=\"draw2d.shape.analog.ResistorVertical\" class=\"docClass\">draw2d.shape.analog.ResistorVertical</a>({angle:90, height:20, x:300, y:150});\n\n// ...add it to the canvas\n//\ncanvas.add( f1);\ncanvas.add( f2);\n\n// first Connection\n//\nvar c = createConnection();\nc.setSource(f1.getOutputPort(0));\nc.setTarget(f2.getHybridPort(0));\ncanvas.add(c);\n</code></pre>\n        <p>Available since: <b>2.7.2</b></p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-constructor' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='draw2d.layout.connection.SketchConnectionRouter'>draw2d.layout.connection.SketchConnectionRouter</span><br/><a href='source/SketchConnectionRouter.html#draw2d-layout-connection-SketchConnectionRouter-method-constructor' target='_blank' class='view-source'>view source</a></div><strong class='new-keyword'>new</strong><a href='#!/api/draw2d.layout.connection.SketchConnectionRouter-method-constructor' class='name expandable'>draw2d.layout.connection.SketchConnectionRouter</a>( <span class='pre'></span> ) : <a href=\"#!/api/draw2d.layout.connection.SketchConnectionRouter\" rel=\"draw2d.layout.connection.SketchConnectionRouter\" class=\"docClass\">draw2d.layout.connection.SketchConnectionRouter</a><span class=\"signature\"></span></div><div class='description'><div class='short'>Creates a new Router object. ...</div><div class='long'><p>Creates a new Router object.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/draw2d.layout.connection.SketchConnectionRouter\" rel=\"draw2d.layout.connection.SketchConnectionRouter\" class=\"docClass\">draw2d.layout.connection.SketchConnectionRouter</a></span><div class='sub-desc'>\n</div></li></ul><p>Overrides: <a href=\"#!/api/draw2d.layout.connection.MazeConnectionRouter-method-constructor\" rel=\"draw2d.layout.connection.MazeConnectionRouter-method-constructor\" class=\"docClass\">draw2d.layout.connection.MazeConnectionRouter.constructor</a></p></div></div></div><div id='method-_route' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/draw2d.layout.connection.MazeConnectionRouter' rel='draw2d.layout.connection.MazeConnectionRouter' class='defined-in docClass'>draw2d.layout.connection.MazeConnectionRouter</a><br/><a href='source/MazeConnectionRouter.html#draw2d-layout-connection-MazeConnectionRouter-method-_route' target='_blank' class='view-source'>view source</a></div><a href='#!/api/draw2d.layout.connection.MazeConnectionRouter-method-_route' class='name expandable'>_route</a>( <span class='pre'>conn, fromPt, fromDir, toPt, toDir</span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>Internal routing algorithm. ...</div><div class='long'><p>Internal routing algorithm.\n     * <p>\nPossible values:</p>\n\n<ul>\n  <li>up -&gt; 0</li>\n  <li>right -&gt; 1</li>\n  <li>down -&gt; 2</li>\n  <li>left -&gt; 3</li>\n</ul>\n\n\n<p><p></p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>conn</span> : <a href=\"#!/api/draw2d.Connection\" rel=\"draw2d.Connection\" class=\"docClass\">draw2d.Connection</a><div class='sub-desc'>\n</div></li><li><span class='pre'>fromPt</span> : <a href=\"#!/api/draw2d.geo.Point\" rel=\"draw2d.geo.Point\" class=\"docClass\">draw2d.geo.Point</a><div class='sub-desc'>\n</div></li><li><span class='pre'>fromDir</span> : Number<div class='sub-desc'>\n</div></li><li><span class='pre'>toPt</span> : <a href=\"#!/api/draw2d.geo.Point\" rel=\"draw2d.geo.Point\" class=\"docClass\">draw2d.geo.Point</a><div class='sub-desc'>\n</div></li><li><span class='pre'>toDir</span> : Number<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-canRemoveSegmentAt' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/draw2d.layout.connection.ConnectionRouter' rel='draw2d.layout.connection.ConnectionRouter' class='defined-in docClass'>draw2d.layout.connection.ConnectionRouter</a><br/><a href='source/ConnectionRouter.html#draw2d-layout-connection-ConnectionRouter-method-canRemoveSegmentAt' target='_blank' class='view-source'>view source</a></div><a href='#!/api/draw2d.layout.connection.ConnectionRouter-method-canRemoveSegmentAt' class='name expandable'>canRemoveSegmentAt</a>( <span class='pre'>index</span> ) : Boolean<span class=\"signature\"></span></div><div class='description'><div class='short'>Callback method for the PolyLine or Connection to verify that a segment is deletable. ...</div><div class='long'><p>Callback method for the PolyLine or Connection to verify that a segment is deletable.</p>\n        <p>Available since: <b>4.2.3</b></p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>index</span> : Number<div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-canRemoveVertexAt' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/draw2d.layout.connection.ConnectionRouter' rel='draw2d.layout.connection.ConnectionRouter' class='defined-in docClass'>draw2d.layout.connection.ConnectionRouter</a><br/><a href='source/ConnectionRouter.html#draw2d-layout-connection-ConnectionRouter-method-canRemoveVertexAt' target='_blank' class='view-source'>view source</a></div><a href='#!/api/draw2d.layout.connection.ConnectionRouter-method-canRemoveVertexAt' class='name expandable'>canRemoveVertexAt</a>( <span class='pre'>index</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Callback method for the PolyLine or Connection to check if it possible to remove a vertex from\nthe list. ...</div><div class='long'><p>Callback method for the PolyLine or Connection to check if it possible to remove a vertex from\nthe list. The router can send an veto for this.\nPer default it is not possible to remove any vertex from the PolyLine exceptional if any interactive\nrouter is installed.</p>\n        <p>Available since: <b>4.2.3</b></p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>index</span> : Number<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-generateNoGoGrid' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/draw2d.layout.connection.MazeConnectionRouter' rel='draw2d.layout.connection.MazeConnectionRouter' class='defined-in docClass'>draw2d.layout.connection.MazeConnectionRouter</a><br/><a href='source/MazeConnectionRouter.html#draw2d-layout-connection-MazeConnectionRouter-method-generateNoGoGrid' target='_blank' class='view-source'>view source</a></div><a href='#!/api/draw2d.layout.connection.MazeConnectionRouter-method-generateNoGoGrid' class='name expandable'>generateNoGoGrid</a>( <span class='pre'>conn</span> ) : PF.Grid<span class=\"signature\"></span></div><div class='description'><div class='short'>Generate a grid base no go map required for the path finding algorithm ...</div><div class='long'><p>Generate a grid base no go map required for the path finding algorithm</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>conn</span> : Object<div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>PF.Grid</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getAdjustedPoint' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/draw2d.layout.connection.MazeConnectionRouter' rel='draw2d.layout.connection.MazeConnectionRouter' class='defined-in docClass'>draw2d.layout.connection.MazeConnectionRouter</a><br/><a href='source/MazeConnectionRouter.html#draw2d-layout-connection-MazeConnectionRouter-method-getAdjustedPoint' target='_blank' class='view-source'>view source</a></div><a href='#!/api/draw2d.layout.connection.MazeConnectionRouter-method-getAdjustedPoint' class='name expandable'>getAdjustedPoint</a>( <span class='pre'>pt, direction, adjustment</span> ) : <a href=\"#!/api/draw2d.geo.Point\" rel=\"draw2d.geo.Point\" class=\"docClass\">draw2d.geo.Point</a><span class=\"signature\"></span></div><div class='description'><div class='short'>move the point in the given direction with the given offset ...</div><div class='long'><p>move the point in the given direction with the given offset</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>pt</span> : <a href=\"#!/api/draw2d.geo.Point\" rel=\"draw2d.geo.Point\" class=\"docClass\">draw2d.geo.Point</a><div class='sub-desc'>\n</div></li><li><span class='pre'>direction</span> : Number<div class='sub-desc'>\n</div></li><li><span class='pre'>adjustment</span> : Number<div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/draw2d.geo.Point\" rel=\"draw2d.geo.Point\" class=\"docClass\">draw2d.geo.Point</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getPersistentAttributes' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/draw2d.layout.connection.ConnectionRouter' rel='draw2d.layout.connection.ConnectionRouter' class='defined-in docClass'>draw2d.layout.connection.ConnectionRouter</a><br/><a href='source/ConnectionRouter.html#draw2d-layout-connection-ConnectionRouter-method-getPersistentAttributes' target='_blank' class='view-source'>view source</a></div><a href='#!/api/draw2d.layout.connection.ConnectionRouter-method-getPersistentAttributes' class='name expandable'>getPersistentAttributes</a>( <span class='pre'>line, memento</span> ) : Object<span class=\"signature\"></span></div><div class='description'><div class='short'>Tweak or enrich the polyline persistence data with routing information ...</div><div class='long'><p>Tweak or enrich the polyline persistence data with routing information</p>\n        <p>Available since: <b>2.10.0</b></p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>line</span> : <a href=\"#!/api/draw2d.shape.basic.PolyLine\" rel=\"draw2d.shape.basic.PolyLine\" class=\"docClass\">draw2d.shape.basic.PolyLine</a><div class='sub-desc'>\n</div></li><li><span class='pre'>memento</span> : Object<div class='sub-desc'><p>The memento data of the polyline</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-onDrag' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/draw2d.layout.connection.ConnectionRouter' rel='draw2d.layout.connection.ConnectionRouter' class='defined-in docClass'>draw2d.layout.connection.ConnectionRouter</a><br/><a href='source/ConnectionRouter.html#draw2d-layout-connection-ConnectionRouter-method-onDrag' target='_blank' class='view-source'>view source</a></div><a href='#!/api/draw2d.layout.connection.ConnectionRouter-method-onDrag' class='name expandable'>onDrag</a>( <span class='pre'>dx, dy, dx2, dy2</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>The draw2d.Connection delegates the drag operation to the router. ...</div><div class='long'><p>The <a href=\"#!/api/draw2d.Connection\" rel=\"draw2d.Connection\" class=\"docClass\">draw2d.Connection</a> delegates the drag operation to the router. The router can\nhandle the different constraints of the connection.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>dx</span> : Number<div class='sub-desc'><p>the x difference between the start of the drag drop operation and now</p>\n</div></li><li><span class='pre'>dy</span> : Number<div class='sub-desc'><p>the y difference between the start of the drag drop operation and now</p>\n</div></li><li><span class='pre'>dx2</span> : Number<div class='sub-desc'><p>The x diff since the last call of this dragging operation</p>\n</div></li><li><span class='pre'>dy2</span> : Number<div class='sub-desc'><p>The y diff since the last call of this dragging operation</p>\n</div></li></ul></div></div></div><div id='method-onInstall' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='draw2d.layout.connection.SketchConnectionRouter'>draw2d.layout.connection.SketchConnectionRouter</span><br/><a href='source/SketchConnectionRouter.html#draw2d-layout-connection-SketchConnectionRouter-method-onInstall' target='_blank' class='view-source'>view source</a></div><a href='#!/api/draw2d.layout.connection.SketchConnectionRouter-method-onInstall' class='name expandable'>onInstall</a>( <span class='pre'>connection</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Callback method if the router has been assigned to a connection. ...</div><div class='long'><p>Callback method if the router has been assigned to a connection.</p>\n        <p>Available since: <b>2.7.2</b></p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>connection</span> : <a href=\"#!/api/draw2d.Connection\" rel=\"draw2d.Connection\" class=\"docClass\">draw2d.Connection</a><div class='sub-desc'><p>The assigned connection</p>\n</div></li></ul><p>Overrides: <a href=\"#!/api/draw2d.layout.connection.MazeConnectionRouter-method-onInstall\" rel=\"draw2d.layout.connection.MazeConnectionRouter-method-onInstall\" class=\"docClass\">draw2d.layout.connection.MazeConnectionRouter.onInstall</a></p></div></div></div><div id='method-onUninstall' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/draw2d.layout.connection.ConnectionRouter' rel='draw2d.layout.connection.ConnectionRouter' class='defined-in docClass'>draw2d.layout.connection.ConnectionRouter</a><br/><a href='source/ConnectionRouter.html#draw2d-layout-connection-ConnectionRouter-method-onUninstall' target='_blank' class='view-source'>view source</a></div><a href='#!/api/draw2d.layout.connection.ConnectionRouter-method-onUninstall' class='name expandable'>onUninstall</a>( <span class='pre'>connection</span> )<span class=\"signature\"><span class='template' >template</span></span></div><div class='description'><div class='short'>Callback method if the router has been removed from the connection. ...</div><div class='long'><p>Callback method if the router has been removed from the connection.</p>\n        <p>Available since: <b>2.7.2</b></p>\n      <div class='rounded-box template-box'>\n      <p>This is a <a href=\"#!/guide/components\">template method</a>.\n         a hook into the functionality of this class.\n         Feel free to override it in child classes.</p>\n      </div>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>connection</span> : <a href=\"#!/api/draw2d.shape.basic.PolyLine\" rel=\"draw2d.shape.basic.PolyLine\" class=\"docClass\">draw2d.shape.basic.PolyLine</a><div class='sub-desc'><p>The related connection</p>\n</div></li></ul></div></div></div><div id='method-route' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/draw2d.layout.connection.MazeConnectionRouter' rel='draw2d.layout.connection.MazeConnectionRouter' class='defined-in docClass'>draw2d.layout.connection.MazeConnectionRouter</a><br/><a href='source/MazeConnectionRouter.html#draw2d-layout-connection-MazeConnectionRouter-method-route' target='_blank' class='view-source'>view source</a></div><a href='#!/api/draw2d.layout.connection.MazeConnectionRouter-method-route' class='name expandable'>route</a>( <span class='pre'>connection, oldVertices, [routingHints]</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Routes the Connection. ...</div><div class='long'><p>Routes the Connection.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>connection</span> : <a href=\"#!/api/draw2d.Connection\" rel=\"draw2d.Connection\" class=\"docClass\">draw2d.Connection</a><div class='sub-desc'><p>The Connection to route</p>\n\n</div></li><li><span class='pre'>oldVertices</span> : <a href=\"#!/api/draw2d.util.ArrayList\" rel=\"draw2d.util.ArrayList\" class=\"docClass\">draw2d.util.ArrayList</a><div class='sub-desc'><p>old/existing vertices of the Connection</p>\n\n</div></li><li><span class='pre'>routingHints</span> : Object (optional)<div class='sub-desc'><p>some helper attributes for the router</p>\n\n<ul><li><span class='pre'>startMoved</span> : Boolean (optional)<div class='sub-desc'><p>is true if just the start location has moved</p>\n\n</div></li><li><span class='pre'>endMoved</span> : Boolean (optional)<div class='sub-desc'><p>is true if the destination location has changed</p>\n\n</div></li><li><span class='pre'>oldVertices</span> : <a href=\"#!/api/draw2d.util.ArrayList\" rel=\"draw2d.util.ArrayList\" class=\"docClass\">draw2d.util.ArrayList</a> (optional)<div class='sub-desc'><p>the vertices before the reroute has been triggered</p>\n\n</div></li></ul></div></li></ul><p>Overrides: <a href=\"#!/api/draw2d.layout.connection.ConnectionRouter-method-route\" rel=\"draw2d.layout.connection.ConnectionRouter-method-route\" class=\"docClass\">draw2d.layout.connection.ConnectionRouter.route</a></p></div></div></div><div id='method-setPersistentAttributes' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/draw2d.layout.connection.ConnectionRouter' rel='draw2d.layout.connection.ConnectionRouter' class='defined-in docClass'>draw2d.layout.connection.ConnectionRouter</a><br/><a href='source/ConnectionRouter.html#draw2d-layout-connection-ConnectionRouter-method-setPersistentAttributes' target='_blank' class='view-source'>view source</a></div><a href='#!/api/draw2d.layout.connection.ConnectionRouter-method-setPersistentAttributes' class='name expandable'>setPersistentAttributes</a>( <span class='pre'>memento</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>set the attributes for the polyline with routing information ...</div><div class='long'><p>set the attributes for the polyline with routing information</p>\n        <p>Available since: <b>2.10.0</b></p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>memento</span> : Object<div class='sub-desc'><p>the JSON data to read</p>\n</div></li></ul></div></div></div><div id='method-verticesSet' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/draw2d.layout.connection.ConnectionRouter' rel='draw2d.layout.connection.ConnectionRouter' class='defined-in docClass'>draw2d.layout.connection.ConnectionRouter</a><br/><a href='source/ConnectionRouter.html#draw2d-layout-connection-ConnectionRouter-method-verticesSet' target='_blank' class='view-source'>view source</a></div><a href='#!/api/draw2d.layout.connection.ConnectionRouter-method-verticesSet' class='name expandable'>verticesSet</a>( <span class='pre'></span> )<span class=\"signature\"><span class='protected' >protected</span></span></div><div class='description'><div class='short'>@methid\nCalled by the connection if the vertices set outside. ...</div><div class='long'><p>@methid\nCalled by the connection if the vertices set outside.\nThis enforce the router to avoid full autoroute. E.g. InteractiveManhattanRouter</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'></span> : <a href=\"#!/api/draw2d.shape.basic.Line\" rel=\"draw2d.shape.basic.Line\" class=\"docClass\">draw2d.shape.basic.Line</a><div class='sub-desc'>\n</div></li></ul></div></div></div></div></div></div></div>","meta":{}});