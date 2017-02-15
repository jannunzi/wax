Ext.data.JsonP.draw2d_layout_anchor_ConnectionAnchor({"tagname":"class","name":"draw2d.layout.anchor.ConnectionAnchor","autodetected":{},"files":[{"filename":"ConnectionAnchor.js","href":"ConnectionAnchor.html#draw2d-layout-anchor-ConnectionAnchor"}],"inheritable":true,"author":[{"tagname":"author","name":"Andreas Herz","email":null}],"members":[{"name":"constructor","tagname":"method","owner":"draw2d.layout.anchor.ConnectionAnchor","id":"method-constructor","meta":{}},{"name":"getBox","tagname":"method","owner":"draw2d.layout.anchor.ConnectionAnchor","id":"method-getBox","meta":{}},{"name":"getLocation","tagname":"method","owner":"draw2d.layout.anchor.ConnectionAnchor","id":"method-getLocation","meta":{}},{"name":"getOwner","tagname":"method","owner":"draw2d.layout.anchor.ConnectionAnchor","id":"method-getOwner","meta":{}},{"name":"getReferencePoint","tagname":"method","owner":"draw2d.layout.anchor.ConnectionAnchor","id":"method-getReferencePoint","meta":{}},{"name":"setOwner","tagname":"method","owner":"draw2d.layout.anchor.ConnectionAnchor","id":"method-setOwner","meta":{}}],"alternateClassNames":[],"aliases":{},"id":"class-draw2d.layout.anchor.ConnectionAnchor","component":false,"superclasses":[],"subclasses":["draw2d.layout.anchor.CenterEdgeConnectionAnchor","draw2d.layout.anchor.ChopboxConnectionAnchor","draw2d.layout.anchor.FanConnectionAnchor","draw2d.layout.anchor.ShortesPathConnectionAnchor"],"mixedInto":[],"mixins":[],"parentMixins":[],"requires":[],"uses":[],"html":"<div><pre class=\"hierarchy\"><h4>Subclasses</h4><div class='dependency'><a href='#!/api/draw2d.layout.anchor.CenterEdgeConnectionAnchor' rel='draw2d.layout.anchor.CenterEdgeConnectionAnchor' class='docClass'>draw2d.layout.anchor.CenterEdgeConnectionAnchor</a></div><div class='dependency'><a href='#!/api/draw2d.layout.anchor.ChopboxConnectionAnchor' rel='draw2d.layout.anchor.ChopboxConnectionAnchor' class='docClass'>draw2d.layout.anchor.ChopboxConnectionAnchor</a></div><div class='dependency'><a href='#!/api/draw2d.layout.anchor.FanConnectionAnchor' rel='draw2d.layout.anchor.FanConnectionAnchor' class='docClass'>draw2d.layout.anchor.FanConnectionAnchor</a></div><div class='dependency'><a href='#!/api/draw2d.layout.anchor.ShortesPathConnectionAnchor' rel='draw2d.layout.anchor.ShortesPathConnectionAnchor' class='docClass'>draw2d.layout.anchor.ShortesPathConnectionAnchor</a></div><h4>Files</h4><div class='dependency'><a href='source/ConnectionAnchor.html#draw2d-layout-anchor-ConnectionAnchor' target='_blank'>ConnectionAnchor.js</a></div></pre><div class='doc-contents'><p>An object to which a <a href=\"#!/api/draw2d.Connection\" rel=\"draw2d.Connection\" class=\"docClass\">draw2d.Connection</a> will be anchored.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-constructor' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='draw2d.layout.anchor.ConnectionAnchor'>draw2d.layout.anchor.ConnectionAnchor</span><br/><a href='source/ConnectionAnchor.html#draw2d-layout-anchor-ConnectionAnchor-method-constructor' target='_blank' class='view-source'>view source</a></div><strong class='new-keyword'>new</strong><a href='#!/api/draw2d.layout.anchor.ConnectionAnchor-method-constructor' class='name expandable'>draw2d.layout.anchor.ConnectionAnchor</a>( <span class='pre'>owner</span> ) : <a href=\"#!/api/draw2d.layout.anchor.ConnectionAnchor\" rel=\"draw2d.layout.anchor.ConnectionAnchor\" class=\"docClass\">draw2d.layout.anchor.ConnectionAnchor</a><span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>owner</span> : <a href=\"#!/api/draw2d.Figure\" rel=\"draw2d.Figure\" class=\"docClass\">draw2d.Figure</a><div class='sub-desc'><p>the figure to use for the anchor calculation</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/draw2d.layout.anchor.ConnectionAnchor\" rel=\"draw2d.layout.anchor.ConnectionAnchor\" class=\"docClass\">draw2d.layout.anchor.ConnectionAnchor</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getBox' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='draw2d.layout.anchor.ConnectionAnchor'>draw2d.layout.anchor.ConnectionAnchor</span><br/><a href='source/ConnectionAnchor.html#draw2d-layout-anchor-ConnectionAnchor-method-getBox' target='_blank' class='view-source'>view source</a></div><a href='#!/api/draw2d.layout.anchor.ConnectionAnchor-method-getBox' class='name expandable'>getBox</a>( <span class='pre'></span> ) : <a href=\"#!/api/draw2d.geo.Rectangle\" rel=\"draw2d.geo.Rectangle\" class=\"docClass\">draw2d.geo.Rectangle</a><span class=\"signature\"></span></div><div class='description'><div class='short'>Returns the bounds of this Anchor's owner. ...</div><div class='long'><p>Returns the bounds of this Anchor's owner.  Subclasses can override this method\nto adjust the box. Maybe you return the box of the port parent (the parent figure)</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/draw2d.geo.Rectangle\" rel=\"draw2d.geo.Rectangle\" class=\"docClass\">draw2d.geo.Rectangle</a></span><div class='sub-desc'><p>The bounds of this Anchor's owner</p>\n</div></li></ul></div></div></div><div id='method-getLocation' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='draw2d.layout.anchor.ConnectionAnchor'>draw2d.layout.anchor.ConnectionAnchor</span><br/><a href='source/ConnectionAnchor.html#draw2d-layout-anchor-ConnectionAnchor-method-getLocation' target='_blank' class='view-source'>view source</a></div><a href='#!/api/draw2d.layout.anchor.ConnectionAnchor-method-getLocation' class='name expandable'>getLocation</a>( <span class='pre'>reference, inquiringConnection</span> ) : <a href=\"#!/api/draw2d.geo.Point\" rel=\"draw2d.geo.Point\" class=\"docClass\">draw2d.geo.Point</a><span class=\"signature\"></span></div><div class='description'><div class='short'>Returns the location where the Connection should be anchored in absolute coordinates. ...</div><div class='long'><p>Returns the location where the Connection should be anchored in absolute coordinates.\nThe anchor may use the given reference Point to calculate this location.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>reference</span> : <a href=\"#!/api/draw2d.geo.Point\" rel=\"draw2d.geo.Point\" class=\"docClass\">draw2d.geo.Point</a><div class='sub-desc'><p>the opposite reference point</p>\n</div></li><li><span class='pre'>inquiringConnection</span> : <a href=\"#!/api/draw2d.Connection\" rel=\"draw2d.Connection\" class=\"docClass\">draw2d.Connection</a><div class='sub-desc'><p>the connection who ask for the location.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/draw2d.geo.Point\" rel=\"draw2d.geo.Point\" class=\"docClass\">draw2d.geo.Point</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getOwner' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='draw2d.layout.anchor.ConnectionAnchor'>draw2d.layout.anchor.ConnectionAnchor</span><br/><a href='source/ConnectionAnchor.html#draw2d-layout-anchor-ConnectionAnchor-method-getOwner' target='_blank' class='view-source'>view source</a></div><a href='#!/api/draw2d.layout.anchor.ConnectionAnchor-method-getOwner' class='name expandable'>getOwner</a>( <span class='pre'></span> ) : <a href=\"#!/api/draw2d.Figure\" rel=\"draw2d.Figure\" class=\"docClass\">draw2d.Figure</a><span class=\"signature\"></span></div><div class='description'><div class='short'>Returns the Figure that contains this ConnectionAnchor. ...</div><div class='long'><p>Returns the Figure that contains this ConnectionAnchor.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/draw2d.Figure\" rel=\"draw2d.Figure\" class=\"docClass\">draw2d.Figure</a></span><div class='sub-desc'><p>The Figure that contains this ConnectionAnchor</p>\n</div></li></ul></div></div></div><div id='method-getReferencePoint' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='draw2d.layout.anchor.ConnectionAnchor'>draw2d.layout.anchor.ConnectionAnchor</span><br/><a href='source/ConnectionAnchor.html#draw2d-layout-anchor-ConnectionAnchor-method-getReferencePoint' target='_blank' class='view-source'>view source</a></div><a href='#!/api/draw2d.layout.anchor.ConnectionAnchor-method-getReferencePoint' class='name expandable'>getReferencePoint</a>( <span class='pre'>[inquiringConnection]</span> ) : <a href=\"#!/api/draw2d.geo.Point\" rel=\"draw2d.geo.Point\" class=\"docClass\">draw2d.geo.Point</a><span class=\"signature\"></span></div><div class='description'><div class='short'>Returns the reference point for this anchor in absolute coordinates. ...</div><div class='long'><p>Returns the reference point for this anchor in absolute coordinates. This might be used\nby another anchor to determine its own location.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>inquiringConnection</span> : <a href=\"#!/api/draw2d.Connection\" rel=\"draw2d.Connection\" class=\"docClass\">draw2d.Connection</a> (optional)<div class='sub-desc'><p>the connection who ask for the location.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/draw2d.geo.Point\" rel=\"draw2d.geo.Point\" class=\"docClass\">draw2d.geo.Point</a></span><div class='sub-desc'><p>The reference Point</p>\n</div></li></ul></div></div></div><div id='method-setOwner' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='draw2d.layout.anchor.ConnectionAnchor'>draw2d.layout.anchor.ConnectionAnchor</span><br/><a href='source/ConnectionAnchor.html#draw2d-layout-anchor-ConnectionAnchor-method-setOwner' target='_blank' class='view-source'>view source</a></div><a href='#!/api/draw2d.layout.anchor.ConnectionAnchor-method-setOwner' class='name expandable'>setOwner</a>( <span class='pre'>owner</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Set the owner of the Anchor. ...</div><div class='long'><p>Set the owner of the Anchor.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>owner</span> : <a href=\"#!/api/draw2d.Figure\" rel=\"draw2d.Figure\" class=\"docClass\">draw2d.Figure</a><div class='sub-desc'><p>the new owner of the anchor locator</p>\n</div></li></ul></div></div></div></div></div></div></div>","meta":{}});