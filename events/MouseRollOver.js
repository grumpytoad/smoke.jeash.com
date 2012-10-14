var $estr = function() { return js.Boot.__string_rec(this,''); };
function $extend(from, fields) {
	function inherit() {}; inherit.prototype = from; var proto = new inherit();
	for (var name in fields) proto[name] = fields[name];
	return proto;
}
var EReg = function(r,opt) {
	opt = opt.split("u").join("");
	this.r = new RegExp(r,opt);
};
EReg.__name__ = true;
EReg.prototype = {
	replace: function(s,by) {
		return s.replace(this.r,by);
	}
	,matched: function(n) {
		return this.r.m != null && n >= 0 && n < this.r.m.length?this.r.m[n]:(function($this) {
			var $r;
			throw "EReg::matched";
			return $r;
		}(this));
	}
	,match: function(s) {
		if(this.r.global) this.r.lastIndex = 0;
		this.r.m = this.r.exec(s);
		this.r.s = s;
		return this.r.m != null;
	}
	,__class__: EReg
}
var HxOverrides = function() { }
HxOverrides.__name__ = true;
HxOverrides.cca = function(s,index) {
	var x = s.charCodeAt(index);
	if(x != x) return undefined;
	return x;
}
HxOverrides.substr = function(s,pos,len) {
	if(pos != null && pos != 0 && len != null && len < 0) return "";
	if(len == null) len = s.length;
	if(pos < 0) {
		pos = s.length + pos;
		if(pos < 0) pos = 0;
	} else if(len < 0) len = s.length + len - pos;
	return s.substr(pos,len);
}
HxOverrides.remove = function(a,obj) {
	var i = 0;
	var l = a.length;
	while(i < l) {
		if(a[i] == obj) {
			a.splice(i,1);
			return true;
		}
		i++;
	}
	return false;
}
var MouseRollOver = function() {
	var s = new jeash.display.Sprite();
	s.jeashGetGraphics().beginFill(11193599);
	s.jeashGetGraphics().drawCircle(100,100,20);
	jeash.Lib.jeashGetCurrent().addChild(s);
	s.addEventListener(jeash.events.MouseEvent.MOUSE_OVER,$bind(this,this.rollOver));
};
MouseRollOver.__name__ = true;
MouseRollOver.main = function() {
	new MouseRollOver();
}
MouseRollOver.prototype = {
	rollOver: function(e) {
		console.log("I am rolled over");
		window.phantomTestResult = true;
	}
	,__class__: MouseRollOver
}
var Reflect = function() { }
Reflect.__name__ = true;
Reflect.hasField = function(o,field) {
	return Object.prototype.hasOwnProperty.call(o,field);
}
Reflect.field = function(o,field) {
	var v = null;
	try {
		v = o[field];
	} catch( e ) {
	}
	return v;
}
Reflect.fields = function(o) {
	var a = [];
	if(o != null) {
		var hasOwnProperty = Object.prototype.hasOwnProperty;
		for( var f in o ) {
		if(hasOwnProperty.call(o,f)) a.push(f);
		}
	}
	return a;
}
Reflect.isFunction = function(f) {
	return typeof(f) == "function" && !(f.__name__ || f.__ename__);
}
Reflect.compareMethods = function(f1,f2) {
	if(f1 == f2) return true;
	if(!Reflect.isFunction(f1) || !Reflect.isFunction(f2)) return false;
	return f1.scope == f2.scope && f1.method == f2.method && f1.method != null;
}
var Std = function() { }
Std.__name__ = true;
Std.string = function(s) {
	return js.Boot.__string_rec(s,"");
}
Std.parseInt = function(x) {
	var v = parseInt(x,10);
	if(v == 0 && (HxOverrides.cca(x,1) == 120 || HxOverrides.cca(x,1) == 88)) v = parseInt(x);
	if(isNaN(v)) return null;
	return v;
}
Std.parseFloat = function(x) {
	return parseFloat(x);
}
var StringBuf = function() {
	this.b = "";
};
StringBuf.__name__ = true;
StringBuf.prototype = {
	__class__: StringBuf
}
var StringTools = function() { }
StringTools.__name__ = true;
StringTools.startsWith = function(s,start) {
	return s.length >= start.length && HxOverrides.substr(s,0,start.length) == start;
}
StringTools.hex = function(n,digits) {
	var s = "";
	var hexChars = "0123456789ABCDEF";
	do {
		s = hexChars.charAt(n & 15) + s;
		n >>>= 4;
	} while(n > 0);
	if(digits != null) while(s.length < digits) s = "0" + s;
	return s;
}
var Xml = function() {
};
Xml.__name__ = true;
Xml.prototype = {
	getParent: function() {
		return this._parent;
	}
	,setNodeValue: function(v) {
		if(this.nodeType == Xml.Element || this.nodeType == Xml.Document) throw "bad nodeType";
		return this._nodeValue = v;
	}
	,getNodeValue: function() {
		if(this.nodeType == Xml.Element || this.nodeType == Xml.Document) throw "bad nodeType";
		return this._nodeValue;
	}
	,setNodeName: function(n) {
		if(this.nodeType != Xml.Element) throw "bad nodeType";
		return this._nodeName = n;
	}
	,getNodeName: function() {
		if(this.nodeType != Xml.Element) throw "bad nodeType";
		return this._nodeName;
	}
	,__class__: Xml
}
var haxe = haxe || {}
if(!haxe.io) haxe.io = {}
haxe.io.Input = function() { }
haxe.io.Input.__name__ = true;
haxe.io.Input.prototype = {
	setEndian: function(b) {
		this.bigEndian = b;
		return b;
	}
	,__class__: haxe.io.Input
}
var jeash = jeash || {}
jeash.Selection = function() { }
jeash.Selection.__name__ = true;
jeash.Selection.prototype = {
	__class__: jeash.Selection
}
jeash.MessagePortArray = function() { }
jeash.MessagePortArray.__name__ = true;
jeash.MessagePort = function() { }
jeash.MessagePort.__name__ = true;
jeash.MessagePort.prototype = {
	__class__: jeash.MessagePort
}
if(!jeash._Lib) jeash._Lib = {}
jeash._Lib.CursorType = { __ename__ : true, __constructs__ : ["Pointer","Text","Default"] }
jeash._Lib.CursorType.Pointer = ["Pointer",0];
jeash._Lib.CursorType.Pointer.toString = $estr;
jeash._Lib.CursorType.Pointer.__enum__ = jeash._Lib.CursorType;
jeash._Lib.CursorType.Text = ["Text",1];
jeash._Lib.CursorType.Text.toString = $estr;
jeash._Lib.CursorType.Text.__enum__ = jeash._Lib.CursorType;
jeash._Lib.CursorType.Default = ["Default",2];
jeash._Lib.CursorType.Default.toString = $estr;
jeash._Lib.CursorType.Default.__enum__ = jeash._Lib.CursorType;
jeash.Lib = function(title,width,height) {
	this.mKilled = false;
	var document = js.Lib.document;
	this.__scr = document.getElementById(title);
	if(this.__scr == null) throw "Element with id '" + title + "' not found";
	this.__scr.style.setProperty("overflow","hidden","");
	this.__scr.style.setProperty("position","absolute","");
	if(this.__scr.style.getPropertyValue("width") != "100%") this.__scr.style.width = width + "px";
	if(this.__scr.style.getPropertyValue("height") != "100%") this.__scr.style.height = height + "px";
};
jeash.Lib.__name__ = true;
jeash.Lib.trace = function(arg) {
	if(window.console != null) window.console.log(arg);
}
jeash.Lib.jeashGetCurrent = function() {
	if(jeash.Lib.mMainClassRoot == null) {
		jeash.Lib.mMainClassRoot = new jeash.display.MovieClip();
		jeash.Lib.mCurrent = jeash.Lib.mMainClassRoot;
		jeash.Lib.jeashGetStage().addChild(jeash.Lib.mCurrent);
	}
	return jeash.Lib.mMainClassRoot;
}
jeash.Lib.jeashGetStage = function() {
	if(jeash.Lib.mStage == null) {
		var width = jeash.Lib.jeashGetWidth();
		var height = jeash.Lib.jeashGetHeight();
		jeash.Lib.mStage = new jeash.display.Stage(width,height);
	}
	return jeash.Lib.mStage;
}
jeash.Lib.jeashAppendSurface = function(surface,before,after) {
	if(jeash.Lib.mMe.__scr != null) {
		surface.style.setProperty("position","absolute","");
		surface.style.setProperty("left","0px","");
		surface.style.setProperty("top","0px","");
		surface.style.setProperty("transform-origin","0 0","");
		surface.style.setProperty("-moz-transform-origin","0 0","");
		surface.style.setProperty("-webkit-transform-origin","0 0","");
		surface.style.setProperty("-o-transform-origin","0 0","");
		surface.style.setProperty("-ms-transform-origin","0 0","");
		try {
			if(surface.localName == "canvas") surface.onmouseover = surface.onselectstart = function() {
				return false;
			};
		} catch( e ) {
		}
		var rootNode = jeash.Lib.mMe.__scr;
		if(before != null) rootNode.insertBefore(surface,before); else if(after != null && after.nextSibling != null) rootNode.insertBefore(surface,after.nextSibling); else rootNode.appendChild(surface);
	}
}
jeash.Lib.jeashSwapSurface = function(surface1,surface2) {
	var c1 = -1;
	var c2 = -1;
	var swap;
	var _g1 = 0, _g = jeash.Lib.mMe.__scr.childNodes.length;
	while(_g1 < _g) {
		var i = _g1++;
		if(jeash.Lib.mMe.__scr.childNodes[i] == surface1) c1 = i; else if(jeash.Lib.mMe.__scr.childNodes[i] == surface2) c2 = i;
	}
	if(c1 != -1 && c2 != -1) {
		swap = jeash.Lib.jeashRemoveSurface(jeash.Lib.mMe.__scr.childNodes[c1]);
		if(c2 > c1) c2--;
		if(c2 < jeash.Lib.mMe.__scr.childNodes.length - 1) jeash.Lib.mMe.__scr.insertBefore(swap,jeash.Lib.mMe.__scr.childNodes[c2++]); else jeash.Lib.mMe.__scr.appendChild(swap);
		swap = jeash.Lib.jeashRemoveSurface(jeash.Lib.mMe.__scr.childNodes[c2]);
		if(c1 > c2) c1--;
		if(c1 < jeash.Lib.mMe.__scr.childNodes.length - 1) jeash.Lib.mMe.__scr.insertBefore(swap,jeash.Lib.mMe.__scr.childNodes[c1++]); else jeash.Lib.mMe.__scr.appendChild(swap);
	}
}
jeash.Lib.jeashSetSurfaceZIndexAfter = function(surface1,surface2) {
	var c1 = -1;
	var c2 = -1;
	var swap;
	var _g1 = 0, _g = jeash.Lib.mMe.__scr.childNodes.length;
	while(_g1 < _g) {
		var i = _g1++;
		if(jeash.Lib.mMe.__scr.childNodes[i] == surface1) c1 = i; else if(jeash.Lib.mMe.__scr.childNodes[i] == surface2) c2 = i;
	}
	if(c1 != -1 && c2 != -1) {
		swap = jeash.Lib.jeashRemoveSurface(jeash.Lib.mMe.__scr.childNodes[c1]);
		if(c2 < jeash.Lib.mMe.__scr.childNodes.length - 1) jeash.Lib.mMe.__scr.insertBefore(swap,jeash.Lib.mMe.__scr.childNodes[c2++]); else jeash.Lib.mMe.__scr.appendChild(swap);
	}
}
jeash.Lib.jeashIsOnStage = function(surface) {
	var success = false;
	var nodes = jeash.Lib.mMe.__scr.childNodes;
	var _g1 = 0, _g = nodes.length;
	while(_g1 < _g) {
		var i = _g1++;
		if(nodes[i] == surface) {
			success = true;
			break;
		}
	}
	return success;
}
jeash.Lib.jeashRemoveSurface = function(surface) {
	if(jeash.Lib.mMe.__scr != null) {
		var anim = surface.getAttribute("data-jeash-anim");
		if(anim != null) {
			var style = js.Lib.document.getElementById(anim);
			if(style != null) jeash.Lib.mMe.__scr.removeChild(style);
		}
		jeash.Lib.mMe.__scr.removeChild(surface);
	}
	return surface;
}
jeash.Lib.jeashSetSurfaceTransform = function(surface,matrix) {
	if(matrix.a == 1 && matrix.b == 0 && matrix.c == 0 && matrix.d == 1 && surface.getAttribute("data-jeash-anim") == null) {
		surface.style.left = matrix.tx + "px";
		surface.style.top = matrix.ty + "px";
	} else {
		surface.style.left = "0px";
		surface.style.top = "0px";
		surface.style.setProperty("transform",matrix.toString(),"");
		surface.style.setProperty("-moz-transform",matrix.toMozString(),"");
		surface.style.setProperty("-webkit-transform",matrix.to3DString(),"");
		surface.style.setProperty("-o-transform",matrix.toString(),"");
		surface.style.setProperty("-ms-transform",matrix.toString(),"");
	}
}
jeash.Lib.jeashSetSurfaceOpacity = function(surface,alpha) {
	surface.style.setProperty("opacity",Std.string(alpha),"");
}
jeash.Lib.jeashCopyStyle = function(src,tgt) {
	tgt.id = src.id;
	var _g = 0, _g1 = ["left","top","transform","transform-origin","-moz-transform","-moz-transform-origin","-webkit-transform","-webkit-transform-origin","-o-transform","-o-transform-origin","opacity","display"];
	while(_g < _g1.length) {
		var prop = _g1[_g];
		++_g;
		tgt.style.setProperty(prop,src.style.getPropertyValue(prop),"");
	}
}
jeash.Lib.jeashDrawToSurface = function(surface,tgt,matrix,alpha,clipRect) {
	if(alpha == null) alpha = 1.0;
	var srcCtx = surface.getContext("2d");
	var tgtCtx = tgt.getContext("2d");
	if(alpha != 1.0) tgtCtx.globalAlpha = alpha;
	if(surface.width > 0 && surface.height > 0) {
		if(matrix != null) {
			tgtCtx.save();
			if(matrix.a == 1 && matrix.b == 0 && matrix.c == 0 && matrix.d == 1) tgtCtx.translate(matrix.tx,matrix.ty); else tgtCtx.setTransform(matrix.a,matrix.b,matrix.c,matrix.d,matrix.tx,matrix.ty);
			jeash.Lib.jeashDrawClippedImage(surface,tgtCtx,clipRect);
			tgtCtx.restore();
		} else jeash.Lib.jeashDrawClippedImage(surface,tgtCtx,clipRect);
	}
}
jeash.Lib.jeashDrawClippedImage = function(surface,tgtCtx,clipRect) {
	if(clipRect != null) {
		if(clipRect.x < 0) {
			clipRect.width += clipRect.x;
			clipRect.x = 0;
		}
		if(clipRect.y < 0) {
			clipRect.height += clipRect.y;
			clipRect.y = 0;
		}
		if(clipRect.width > surface.width - clipRect.x) clipRect.width = surface.width - clipRect.x;
		if(clipRect.height > surface.height - clipRect.y) clipRect.height = surface.height - clipRect.y;
		tgtCtx.drawImage(surface,clipRect.x,clipRect.y,clipRect.width,clipRect.height,clipRect.x,clipRect.y,clipRect.width,clipRect.height);
	} else tgtCtx.drawImage(surface,0,0);
}
jeash.Lib.jeashDisableRightClick = function() {
	if(jeash.Lib.mMe != null) try {
		jeash.Lib.mMe.__scr.oncontextmenu = function() {
			return false;
		};
	} catch( e ) {
		jeash.Lib.trace("Disable right click not supported in this browser.");
	}
}
jeash.Lib.jeashEnableRightClick = function() {
	if(jeash.Lib.mMe != null) try {
		jeash.Lib.mMe.__scr.oncontextmenu = null;
	} catch( e ) {
		jeash.Lib.trace("Enable right click not supported in this browser.");
	}
}
jeash.Lib.jeashEnableFullScreen = function() {
	if(jeash.Lib.mMe != null) {
		var origWidth = jeash.Lib.mMe.__scr.style.getPropertyValue("width");
		var origHeight = jeash.Lib.mMe.__scr.style.getPropertyValue("height");
		jeash.Lib.mMe.__scr.style.setProperty("width","100%","");
		jeash.Lib.mMe.__scr.style.setProperty("height","100%","");
		jeash.Lib.jeashDisableFullScreen = function() {
			jeash.Lib.mMe.__scr.style.setProperty("width",origWidth,"");
			jeash.Lib.mMe.__scr.style.setProperty("height",origHeight,"");
		};
	}
}
jeash.Lib.jeashDisableFullScreen = function() {
}
jeash.Lib.jeashFullScreenWidth = function() {
	var window = js.Lib.window;
	return window.innerWidth;
}
jeash.Lib.jeashFullScreenHeight = function() {
	var window = js.Lib.window;
	return window.innerHeight;
}
jeash.Lib.jeashSetCursor = function(type) {
	if(jeash.Lib.mMe != null) jeash.Lib.mMe.__scr.style.cursor = (function($this) {
		var $r;
		switch( (type)[1] ) {
		case 0:
			$r = "pointer";
			break;
		case 1:
			$r = "text";
			break;
		default:
			$r = "default";
		}
		return $r;
	}(this));
}
jeash.Lib.jeashSetSurfaceVisible = function(surface,visible) {
	if(visible) surface.style.setProperty("display","block",""); else surface.style.setProperty("display","none","");
}
jeash.Lib.jeashSetSurfaceId = function(surface,name) {
	var regex = new EReg("[^a-zA-Z0-9\\-]","g");
	surface.id = regex.replace(name,"_");
}
jeash.Lib.Run = function(tgt,width,height) {
	jeash.Lib.mMe = new jeash.Lib(tgt.id,width,height);
	var _g1 = 0, _g = tgt.attributes.length;
	while(_g1 < _g) {
		var i = _g1++;
		var attr = tgt.attributes.item(i);
		if(StringTools.startsWith(attr.name,"data-")) switch(attr.name) {
		case "data-" + "framerate":
			jeash.Lib.jeashGetStage().jeashSetFrameRate(Std.parseFloat(attr.value));
			break;
		default:
		}
	}
	if(Reflect.hasField(tgt,"on" + jeash.Lib.HTML_TOUCH_EVENT_TYPES[0])) {
		var _g = 0, _g1 = jeash.Lib.HTML_TOUCH_EVENT_TYPES;
		while(_g < _g1.length) {
			var type = _g1[_g];
			++_g;
			tgt.addEventListener(type,($_=jeash.Lib.jeashGetStage(),$bind($_,$_.jeashQueueStageEvent)),true);
		}
	}
	var _g = 0, _g1 = jeash.Lib.HTML_DIV_EVENT_TYPES;
	while(_g < _g1.length) {
		var type = _g1[_g];
		++_g;
		tgt.addEventListener(type,($_=jeash.Lib.jeashGetStage(),$bind($_,$_.jeashQueueStageEvent)),true);
	}
	var window = js.Lib.window;
	if(Reflect.hasField(window,"on" + "devicemotion")) window.addEventListener("devicemotion",($_=jeash.Lib.jeashGetStage(),$bind($_,$_.jeashQueueStageEvent)),true);
	if(Reflect.hasField(window,"on" + "orientationchange")) window.addEventListener("orientationchange",($_=jeash.Lib.jeashGetStage(),$bind($_,$_.jeashQueueStageEvent)),true);
	var _g = 0, _g1 = jeash.Lib.HTML_WINDOW_EVENT_TYPES;
	while(_g < _g1.length) {
		var type = _g1[_g];
		++_g;
		window.addEventListener(type,($_=jeash.Lib.jeashGetStage(),$bind($_,$_.jeashQueueStageEvent)),false);
	}
	jeash.Lib.jeashGetStage().jeashSetBackgroundColour(tgt.style.backgroundColor != null && tgt.style.backgroundColor != ""?jeash.Lib.jeashParseColor(tgt.style.backgroundColor,function(res,pos,cur) {
		return (function($this) {
			var $r;
			switch(pos) {
			case 0:
				$r = res | cur << 16;
				break;
			case 1:
				$r = res | cur << 8;
				break;
			case 2:
				$r = res | cur;
				break;
			}
			return $r;
		}(this));
	}):16777215);
	jeash.Lib.jeashGetCurrent().jeashGetGraphics().beginFill(jeash.Lib.jeashGetStage().jeashGetBackgroundColour());
	jeash.Lib.jeashGetCurrent().jeashGetGraphics().drawRect(0,0,width,height);
	jeash.Lib.jeashSetSurfaceId(jeash.Lib.jeashGetCurrent().jeashGetGraphics().jeashSurface,"Root MovieClip");
	jeash.Lib.jeashGetStage().jeashUpdateNextWake();
	try {
		var winParameters = window.winParameters();
		var _g = 0, _g1 = Reflect.fields(winParameters);
		while(_g < _g1.length) {
			var prop = _g1[_g];
			++_g;
			jeash.Lib.jeashGetCurrent().loaderInfo.parameters[prop] = Reflect.field(winParameters,prop);
		}
	} catch( e ) {
	}
	return jeash.Lib.mMe;
}
jeash.Lib.jeashParseColor = function(str,cb) {
	var re = new EReg("rgb\\(([0-9]*), ?([0-9]*), ?([0-9]*)\\)","");
	var hex = new EReg("#([0-9a-zA-Z][0-9a-zA-Z])([0-9a-zA-Z][0-9a-zA-Z])([0-9a-zA-Z][0-9a-zA-Z])","");
	if(re.match(str)) {
		var col = 0;
		var _g = 1;
		while(_g < 4) {
			var pos = _g++;
			var v = Std.parseInt(re.matched(pos));
			col = cb(col,pos - 1,v);
		}
		return col;
	} else if(hex.match(str)) {
		var col = 0;
		var _g = 1;
		while(_g < 4) {
			var pos = _g++;
			var v = "0x" + hex.matched(pos) & 255;
			v = cb(col,pos - 1,v);
		}
		return col;
	} else throw "Cannot parse color '" + str + "'.";
}
jeash.Lib.jeashGetWidth = function() {
	var tgt = jeash.Lib.mMe != null?jeash.Lib.mMe.__scr:js.Lib.document.getElementById("haxe:jeash");
	return tgt.clientWidth > 0?tgt.clientWidth:500;
}
jeash.Lib.jeashGetHeight = function() {
	var tgt = jeash.Lib.mMe != null?jeash.Lib.mMe.__scr:js.Lib.document.getElementById("haxe:jeash");
	return tgt.clientHeight > 0?tgt.clientHeight:500;
}
jeash.Lib.jeashBootstrap = function() {
	if(jeash.Lib.mMe == null) {
		var tgt = js.Lib.document.getElementById("haxe:jeash");
		if(navigator.userAgent.indexOf("BlackBerry") > -1 && tgt.style.height == "100%") tgt.style.height = screen.height + "px";
		jeash.Lib.Run(tgt,jeash.Lib.jeashGetWidth(),jeash.Lib.jeashGetHeight());
	}
}
jeash.Lib.prototype = {
	__class__: jeash.Lib
}
if(!jeash.events) jeash.events = {}
jeash.events.IEventDispatcher = function() { }
jeash.events.IEventDispatcher.__name__ = true;
jeash.events.IEventDispatcher.prototype = {
	__class__: jeash.events.IEventDispatcher
}
jeash.events.EventDispatcher = function(target) {
	if(target != null) this.jeashTarget = target; else this.jeashTarget = this;
	this.jeashEventMap = [];
};
jeash.events.EventDispatcher.__name__ = true;
jeash.events.EventDispatcher.__interfaces__ = [jeash.events.IEventDispatcher];
jeash.events.EventDispatcher.compareListeners = function(l1,l2) {
	return l1.mPriority == l2.mPriority?0:l1.mPriority > l2.mPriority?-1:1;
}
jeash.events.EventDispatcher.prototype = {
	willTrigger: function(type) {
		return this.hasEventListener(type);
	}
	,toString: function() {
		return "[ " + this.__name__ + " ]";
	}
	,removeEventListener: function(type,listener,inCapture) {
		if(!this.existList(type)) return;
		var list = this.getList(type);
		var capture = inCapture == null?false:inCapture;
		var _g1 = 0, _g = list.length;
		while(_g1 < _g) {
			var i = _g1++;
			if(list[i].Is(listener,capture)) {
				list.splice(i,1);
				return;
			}
		}
	}
	,hasEventListener: function(type) {
		return this.existList(type);
	}
	,dispatchEvent: function(event) {
		if(event.target == null) event.target = this.jeashTarget;
		var capture = event.eventPhase == jeash.events.EventPhase.CAPTURING_PHASE;
		if(this.existList(event.type)) {
			var list = this.getList(event.type);
			var idx = 0;
			while(idx < list.length) {
				var listener = list[idx];
				if(listener.mUseCapture == capture) {
					listener.dispatchEvent(event);
					if(event.jeashGetIsCancelledNow()) return true;
				}
				if(idx < list.length && listener != list[idx]) {
				} else idx++;
			}
			return true;
		}
		return false;
	}
	,addEventListener: function(type,inListener,useCapture,inPriority,useWeakReference) {
		var capture = useCapture == null?false:useCapture;
		var priority = inPriority == null?0:inPriority;
		var list = this.getList(type);
		if(!this.existList(type)) {
			list = [];
			this.setList(type,list);
		}
		list.push(new jeash.events.Listener(inListener,capture,priority));
		list.sort(jeash.events.EventDispatcher.compareListeners);
	}
	,existList: function(type) {
		return this.jeashEventMap[type] != undefined;
	}
	,setList: function(type,list) {
		this.jeashEventMap[type] = list;
	}
	,getList: function(type) {
		return this.jeashEventMap[type];
	}
	,__class__: jeash.events.EventDispatcher
}
if(!jeash.display) jeash.display = {}
jeash.display.IBitmapDrawable = function() { }
jeash.display.IBitmapDrawable.__name__ = true;
jeash.display.IBitmapDrawable.prototype = {
	__class__: jeash.display.IBitmapDrawable
}
jeash.display.DisplayObject = function() {
	jeash.events.EventDispatcher.call(this,null);
	this._jeashId = jeash.utils.Uuid.uuid();
	this.jeashSetParent(null);
	this.setTransform(new jeash.geom.Transform(this));
	this.jeashX = this.jeashY = 0.0;
	this.jeashScaleX = this.jeashScaleY = 1.0;
	this.jeashRotation = 0.0;
	this.jeashWidth = this.jeashHeight = 0.0;
	this.jeashSetVisible(true);
	this.alpha = 1.0;
	this.jeashFilters = new Array();
	this.jeashBoundsRect = new jeash.geom.Rectangle();
	this.jeashScrollRect = null;
	this.jeashMask = null;
	this.jeashMaskingObj = null;
};
jeash.display.DisplayObject.__name__ = true;
jeash.display.DisplayObject.__interfaces__ = [jeash.display.IBitmapDrawable];
jeash.display.DisplayObject.__super__ = jeash.events.EventDispatcher;
jeash.display.DisplayObject.prototype = $extend(jeash.events.EventDispatcher.prototype,{
	jeashInvalidateBounds: function() {
		this._jeashRenderFlags |= 64;
		if(this.parent != null) this.parent._jeashRenderFlags |= 64;
	}
	,getBoundsInvalid: function() {
		var gfx = this.jeashGetGraphics();
		if(gfx == null) return (this._jeashRenderFlags & 64) != 0; else return (this._jeashRenderFlags & 64) != 0 || gfx.boundsDirty;
	}
	,validateBounds: function() {
		if(this.getBoundsInvalid()) {
			var gfx = this.jeashGetGraphics();
			if(gfx == null) {
				this.jeashBoundsRect.x = this.jeashGetX();
				this.jeashBoundsRect.y = this.jeashGetY();
				this.jeashBoundsRect.width = 0;
				this.jeashBoundsRect.height = 0;
			} else {
				this.jeashBoundsRect = gfx.jeashExtent.clone();
				if(this.scale9Grid != null) {
					this.jeashBoundsRect.width *= this.jeashScaleX;
					this.jeashBoundsRect.height *= this.jeashScaleY;
					this.jeashWidth = this.jeashBoundsRect.width;
					this.jeashHeight = this.jeashBoundsRect.height;
				} else {
					this.jeashWidth = this.jeashBoundsRect.width * this.jeashScaleX;
					this.jeashHeight = this.jeashBoundsRect.height * this.jeashScaleY;
				}
				gfx.boundsDirty = false;
			}
			this._jeashRenderFlags &= -65;
		}
	}
	,jeashUnifyChildrenWithDOM: function(lastMoveGfx) {
		var gfx = this.jeashGetGraphics();
		if(gfx != null && lastMoveGfx != null) jeash.Lib.jeashSetSurfaceZIndexAfter(gfx.jeashSurface,lastMoveGfx.jeashSurface);
	}
	,jeashSetRotation: function(inValue) {
		if(this.jeashRotation != inValue) {
			this.jeashRotation = inValue;
			this.jeashInvalidateMatrix(true);
			this._jeashRenderFlags |= 64;
			if(this.parent != null) this.parent._jeashRenderFlags |= 64;
		}
		return inValue;
	}
	,jeashGetRotation: function() {
		return this.jeashRotation;
	}
	,jeashSetScaleY: function(inValue) {
		if(this.jeashScaleY != inValue) {
			this.jeashScaleY = inValue;
			this.jeashInvalidateMatrix(true);
			this._jeashRenderFlags |= 64;
			if(this.parent != null) this.parent._jeashRenderFlags |= 64;
		}
		return inValue;
	}
	,jeashGetScaleY: function() {
		return this.jeashScaleY;
	}
	,jeashSetScaleX: function(inValue) {
		if(this.jeashScaleX != inValue) {
			this.jeashScaleX = inValue;
			this.jeashInvalidateMatrix(true);
			this._jeashRenderFlags |= 64;
			if(this.parent != null) this.parent._jeashRenderFlags |= 64;
		}
		return inValue;
	}
	,jeashGetScaleX: function() {
		return this.jeashScaleX;
	}
	,jeashSetY: function(inValue) {
		if(this.jeashY != inValue) {
			this.jeashY = inValue;
			this.jeashInvalidateMatrix(true);
			if(this.parent != null) this.parent.jeashInvalidateBounds();
		}
		return inValue;
	}
	,jeashGetY: function() {
		return this.jeashY;
	}
	,jeashSetX: function(inValue) {
		if(this.jeashX != inValue) {
			this.jeashX = inValue;
			this.jeashInvalidateMatrix(true);
			if(this.parent != null) this.parent.jeashInvalidateBounds();
		}
		return inValue;
	}
	,jeashGetX: function() {
		return this.jeashX;
	}
	,jeashSetHeight: function(inValue) {
		if(this.getBoundsInvalid()) this.validateBounds();
		var h = this.jeashBoundsRect.height;
		if(this.jeashScaleY * h != inValue) {
			if(h <= 0) return 0;
			this.jeashScaleY = inValue / h;
			this.jeashInvalidateMatrix(true);
			this._jeashRenderFlags |= 64;
			if(this.parent != null) this.parent._jeashRenderFlags |= 64;
		}
		return inValue;
	}
	,jeashGetHeight: function() {
		if(this.getBoundsInvalid()) this.validateBounds();
		return this.jeashHeight;
	}
	,jeashSetWidth: function(inValue) {
		if(this.getBoundsInvalid()) this.validateBounds();
		var w = this.jeashBoundsRect.width;
		if(this.jeashScaleX * w != inValue) {
			if(w <= 0) return 0;
			this.jeashScaleX = inValue / w;
			this.jeashInvalidateMatrix(true);
			this._jeashRenderFlags |= 64;
			if(this.parent != null) this.parent._jeashRenderFlags |= 64;
		}
		return inValue;
	}
	,jeashGetWidth: function() {
		if(this.getBoundsInvalid()) this.validateBounds();
		return this.jeashWidth;
	}
	,jeashSetVisible: function(inValue) {
		var gfx = this.jeashGetGraphics();
		if(gfx != null && gfx.jeashSurface != null) jeash.Lib.jeashSetSurfaceVisible(gfx.jeashSurface,inValue);
		this.jeashVisible = inValue;
		return this.jeashGetVisible();
	}
	,jeashGetVisible: function() {
		return this.jeashVisible;
	}
	,jeashRemoveFromStage: function() {
		var gfx = this.jeashGetGraphics();
		if(gfx != null && jeash.Lib.jeashIsOnStage(gfx.jeashSurface)) {
			jeash.Lib.jeashRemoveSurface(gfx.jeashSurface);
			var evt = new jeash.events.Event(jeash.events.Event.REMOVED_FROM_STAGE,false,false);
			this.dispatchEvent(evt);
		}
	}
	,jeashAddToStage: function(newParent,beforeSibling) {
		var wasOnStage = this.jeashIsOnStage();
		var gfx = this.jeashGetGraphics();
		if(gfx == null) throw Std.string(this) + " tried to add to stage with null graphics context";
		if(newParent.jeashGetGraphics() != null) {
			jeash.Lib.jeashSetSurfaceId(gfx.jeashSurface,this._jeashId);
			if(beforeSibling != null && beforeSibling.jeashGetGraphics() != null) jeash.Lib.jeashAppendSurface(gfx.jeashSurface,beforeSibling.jeashGetGraphics().jeashSurface); else {
				var stageChildren = [];
				var _g = 0, _g1 = newParent.jeashChildren;
				while(_g < _g1.length) {
					var child = _g1[_g];
					++_g;
					if(child.getStage() != null) stageChildren.push(child);
				}
				if(stageChildren.length < 1) jeash.Lib.jeashAppendSurface(gfx.jeashSurface,null,newParent.jeashGetGraphics().jeashSurface); else {
					var nextSibling = stageChildren[stageChildren.length - 1];
					var container;
					while(js.Boot.__instanceof(nextSibling,jeash.display.DisplayObjectContainer)) {
						container = js.Boot.__cast(nextSibling , jeash.display.DisplayObjectContainer);
						if(container.jeashChildren.length > 0) nextSibling = container.jeashChildren[container.jeashChildren.length - 1]; else break;
					}
					if(nextSibling.jeashGetGraphics() != gfx) jeash.Lib.jeashAppendSurface(gfx.jeashSurface,null,nextSibling.jeashGetGraphics().jeashSurface); else jeash.Lib.jeashAppendSurface(gfx.jeashSurface);
				}
			}
		} else if(newParent.name == "Stage") jeash.Lib.jeashAppendSurface(gfx.jeashSurface);
		if(!wasOnStage && this.jeashIsOnStage()) {
			var evt = new jeash.events.Event(jeash.events.Event.ADDED_TO_STAGE,false,false);
			this.dispatchEvent(evt);
		}
	}
	,dispatchEvent: function(event) {
		var result = this.jeashDispatchEvent(event);
		if(event.jeashGetIsCancelled()) return true;
		if(event.bubbles && this.parent != null) this.parent.dispatchEvent(event);
		return result;
	}
	,jeashDispatchEvent: function(event) {
		if(event.target == null) event.target = this;
		event.currentTarget = this;
		return jeash.events.EventDispatcher.prototype.dispatchEvent.call(this,event);
	}
	,jeashBroadcast: function(event) {
		this.jeashDispatchEvent(event);
	}
	,jeashFireEvent: function(event) {
		var stack = [];
		if(this.parent != null) this.parent.jeashGetInteractiveObjectStack(stack);
		var l = stack.length;
		if(l > 0) {
			event.jeashSetPhase(jeash.events.EventPhase.CAPTURING_PHASE);
			stack.reverse();
			var _g = 0;
			while(_g < stack.length) {
				var obj = stack[_g];
				++_g;
				event.currentTarget = obj;
				obj.jeashDispatchEvent(event);
				if(event.jeashGetIsCancelled()) return;
			}
		}
		event.jeashSetPhase(jeash.events.EventPhase.AT_TARGET);
		event.currentTarget = this;
		this.jeashDispatchEvent(event);
		if(event.jeashGetIsCancelled()) return;
		if(event.bubbles) {
			event.jeashSetPhase(jeash.events.EventPhase.BUBBLING_PHASE);
			stack.reverse();
			var _g = 0;
			while(_g < stack.length) {
				var obj = stack[_g];
				++_g;
				event.currentTarget = obj;
				obj.jeashDispatchEvent(event);
				if(event.jeashGetIsCancelled()) return;
			}
		}
	}
	,jeashGetInteractiveObjectStack: function(outStack) {
		var io = this;
		if(io != null) outStack.push(io);
		if(this.parent != null) this.parent.jeashGetInteractiveObjectStack(outStack);
	}
	,jeashGetFilters: function() {
		if(this.jeashFilters == null) return [];
		var result = new Array();
		var _g = 0, _g1 = this.jeashFilters;
		while(_g < _g1.length) {
			var filter = _g1[_g];
			++_g;
			result.push(filter.clone());
		}
		return result;
	}
	,invalidateGraphics: function() {
		var gfx = this.jeashGetGraphics();
		if(gfx != null) gfx.jeashChanged = gfx.jeashClearNextCycle = true;
	}
	,jeashSetFilters: function(filters) {
		var oldFilterCount = this.jeashFilters == null?0:this.jeashFilters.length;
		if(filters == null) {
			this.jeashFilters = null;
			if(oldFilterCount > 0) this.invalidateGraphics();
		} else {
			this.jeashFilters = new Array();
			var _g = 0;
			while(_g < filters.length) {
				var filter = filters[_g];
				++_g;
				this.jeashFilters.push(filter.clone());
			}
			this.invalidateGraphics();
		}
		return filters;
	}
	,setMask: function(inValue) {
		if(this.jeashMask != null) this.jeashMask.jeashMaskingObj = null;
		this.jeashMask = inValue;
		if(this.jeashMask != null) this.jeashMask.jeashMaskingObj = this;
		return this.jeashMask;
	}
	,getMask: function() {
		return this.jeashMask;
	}
	,jeashGetObjectUnderPoint: function(point) {
		if(!this.jeashGetVisible()) return null;
		var gfx = this.jeashGetGraphics();
		if(gfx != null) {
			var extX = gfx.jeashExtent.x;
			var extY = gfx.jeashExtent.y;
			var local = this.globalToLocal(point);
			if(local.x - extX < 0 || local.y - extY < 0 || (local.x - extX) * this.jeashGetScaleX() > this.jeashGetWidth() || (local.y - extY) * this.jeashGetScaleY() > this.jeashGetHeight()) return null;
			switch( (this.getStage().jeashPointInPathMode)[1] ) {
			case 0:
				if(gfx.jeashHitTest(local.x,local.y)) return this;
				break;
			case 1:
				if(gfx.jeashHitTest(local.x * this.jeashGetScaleX(),local.y * this.jeashGetScaleY())) return this;
				break;
			}
		}
		return null;
	}
	,drawToSurface: function(inSurface,matrix,inColorTransform,blendMode,clipRect,smoothing) {
		var oldAlpha = this.alpha;
		this.alpha = 1;
		this.jeashRender(inSurface,clipRect);
		this.alpha = oldAlpha;
	}
	,getSurfaceTransform: function(gfx) {
		var extent = gfx.jeashExtentWithFilters;
		var fm = this.transform.jeashGetFullMatrix(null);
		fm.jeashTranslateTransformed(extent.get_topLeft());
		return fm;
	}
	,jeashRender: function(inMask,clipRect) {
		if(!this.jeashVisible) return;
		var gfx = this.jeashGetGraphics();
		if(gfx == null) return;
		if((this._jeashRenderFlags & 4) != 0 || (this._jeashRenderFlags & 8) != 0) this.jeashValidateMatrix();
		if(gfx.jeashRender(inMask,this.jeashFilters,1,1)) {
			this._jeashRenderFlags |= 64;
			if(this.parent != null) this.parent._jeashRenderFlags |= 64;
			this.jeashApplyFilters(gfx.jeashSurface);
			this._jeashRenderFlags |= 32;
		}
		if(inMask != null) {
			var m = this.getSurfaceTransform(gfx);
			jeash.Lib.jeashDrawToSurface(gfx.jeashSurface,inMask,m,(this.parent != null?this.parent.alpha:1) * this.alpha,clipRect);
		} else {
			if((this._jeashRenderFlags & 32) != 0) {
				var m = this.getSurfaceTransform(gfx);
				jeash.Lib.jeashSetSurfaceTransform(gfx.jeashSurface,m);
				this._jeashRenderFlags &= -33;
			}
			jeash.Lib.jeashSetSurfaceOpacity(gfx.jeashSurface,(this.parent != null?this.parent.alpha:1) * this.alpha);
		}
	}
	,jeashApplyFilters: function(surface) {
		if(this.jeashFilters != null) {
			var _g = 0, _g1 = this.jeashFilters;
			while(_g < _g1.length) {
				var filter = _g1[_g];
				++_g;
				filter.jeashApplyFilter(surface);
			}
		}
	}
	,jeashValidateMatrix: function() {
		var parentMatrixInvalid = (this._jeashRenderFlags & 8) != 0 && this.parent != null;
		if((this._jeashRenderFlags & 4) != 0 || parentMatrixInvalid) {
			if(parentMatrixInvalid) this.parent.jeashValidateMatrix();
			var m = this.transform.getMatrix();
			if((this._jeashRenderFlags & 16) != 0) this._jeashRenderFlags &= -5;
			if((this._jeashRenderFlags & 4) != 0) {
				m.identity();
				m.scale(this.jeashScaleX,this.jeashScaleY);
				var rad = this.jeashRotation * (Math.PI / 180.0);
				if(rad != 0.0) m.rotate(rad);
				m.translate(this.jeashX,this.jeashY);
				this.transform._matrix.copy(m);
				m;
			}
			var cm = this.transform.jeashGetFullMatrix(null);
			var fm = this.parent == null?m:this.parent.transform.jeashGetFullMatrix(m);
			this._fullScaleX = fm._sx;
			this._fullScaleY = fm._sy;
			if(cm.a != fm.a || cm.b != fm.b || cm.c != fm.c || cm.d != fm.d || cm.tx != fm.tx || cm.ty != fm.ty) {
				this.transform.jeashSetFullMatrix(fm);
				this._jeashRenderFlags |= 32;
			}
			this._jeashRenderFlags &= -29;
		}
	}
	,jeashMatrixOverridden: function() {
		this._jeashRenderFlags |= 16;
		this._jeashRenderFlags |= 4;
		this._jeashRenderFlags |= 64;
		if(this.parent != null) this.parent._jeashRenderFlags |= 64;
	}
	,jeashInvalidateMatrix: function(local) {
		if(local == null) local = false;
		if(local) this._jeashRenderFlags |= 4; else this._jeashRenderFlags |= 8;
	}
	,jeashGetGraphics: function() {
		return null;
	}
	,globalToLocal: function(inPos) {
		if((this._jeashRenderFlags & 4) != 0 || (this._jeashRenderFlags & 8) != 0) this.jeashValidateMatrix();
		return this.transform.jeashGetFullMatrix(null).invert().transformPoint(inPos);
	}
	,getBounds: function(targetCoordinateSpace) {
		if((this._jeashRenderFlags & 4) != 0 || (this._jeashRenderFlags & 8) != 0) this.jeashValidateMatrix();
		if(this.getBoundsInvalid()) this.validateBounds();
		var m = this.transform.jeashGetFullMatrix(null);
		if(targetCoordinateSpace != null) m.concat(targetCoordinateSpace.transform.jeashGetFullMatrix(null).invert());
		var rect = this.jeashBoundsRect.transform(m);
		return rect;
	}
	,setTransform: function(inValue) {
		this.transform = inValue;
		this.jeashInvalidateMatrix(true);
		return inValue;
	}
	,jeashGetMouseY: function() {
		return this.globalToLocal(new jeash.geom.Point(0,this.getStage().jeashGetMouseY())).y;
	}
	,jeashGetMouseX: function() {
		return this.globalToLocal(new jeash.geom.Point(this.getStage().jeashGetMouseX(),0)).x;
	}
	,setScrollRect: function(inValue) {
		this.jeashScrollRect = inValue;
		return inValue;
	}
	,getScrollRect: function() {
		if(this.jeashScrollRect == null) return null;
		return this.jeashScrollRect.clone();
	}
	,jeashIsOnStage: function() {
		var gfx = this.jeashGetGraphics();
		if(gfx != null && jeash.Lib.jeashIsOnStage(gfx.jeashSurface)) return true;
		return false;
	}
	,getStage: function() {
		var gfx = this.jeashGetGraphics();
		if(gfx != null) return jeash.Lib.jeashGetStage();
		return null;
	}
	,jeashSetParent: function(inValue) {
		if(inValue == this.parent) return inValue;
		this.jeashInvalidateMatrix();
		if(this.parent != null) {
			HxOverrides.remove(this.parent.jeashChildren,this);
			this.parent.jeashInvalidateBounds();
		}
		if(inValue != null) {
			inValue._jeashRenderFlags |= 64;
			if(inValue.parent != null) inValue.parent._jeashRenderFlags |= 64;
		}
		if(this.parent == null && inValue != null) {
			this.parent = inValue;
			var evt = new jeash.events.Event(jeash.events.Event.ADDED,true,false);
			this.dispatchEvent(evt);
		} else if(this.parent != null && inValue == null) {
			this.parent = inValue;
			var evt = new jeash.events.Event(jeash.events.Event.REMOVED,true,false);
			this.dispatchEvent(evt);
		} else this.parent = inValue;
		return inValue;
	}
	,toString: function() {
		return "[DisplayObject name=" + this.name + " id=" + this._jeashId + "]";
	}
	,__class__: jeash.display.DisplayObject
});
jeash.display.Bitmap = function() { }
jeash.display.Bitmap.__name__ = true;
jeash.display.Bitmap.__super__ = jeash.display.DisplayObject;
jeash.display.Bitmap.prototype = $extend(jeash.display.DisplayObject.prototype,{
	jeashGetObjectUnderPoint: function(point) {
		if(!this.jeashGetVisible()) return null; else if(this.bitmapData != null) {
			var local = this.globalToLocal(point);
			if(local.x < 0 || local.y < 0 || local.x > this.jeashGetWidth() || local.y > this.jeashGetHeight()) return null; else return this;
		} else return jeash.display.DisplayObject.prototype.jeashGetObjectUnderPoint.call(this,point);
	}
	,getBitmapSurfaceTransform: function(gfx) {
		var extent = gfx.jeashExtentWithFilters;
		var fm = this.transform.jeashGetFullMatrix(null);
		fm.jeashTranslateTransformed(extent.get_topLeft());
		return fm;
	}
	,jeashRender: function(inMask,clipRect) {
		if(!this.jeashVisible) return;
		if(this.bitmapData == null) return;
		if((this._jeashRenderFlags & 4) != 0 || (this._jeashRenderFlags & 8) != 0) this.jeashValidateMatrix();
		var imageDataLease = this.bitmapData.jeashLease;
		if(imageDataLease != null && (this.jeashCurrentLease == null || imageDataLease.seed != this.jeashCurrentLease.seed || imageDataLease.time != this.jeashCurrentLease.time)) {
			var srcCanvas = this.bitmapData._jeashTextureBuffer;
			this.jeashGraphics.jeashSurface.width = srcCanvas.width;
			this.jeashGraphics.jeashSurface.height = srcCanvas.height;
			this.jeashGraphics.clear();
			jeash.Lib.jeashDrawToSurface(srcCanvas,this.jeashGraphics.jeashSurface);
			this.jeashCurrentLease = imageDataLease.clone();
			this._jeashRenderFlags |= 64;
			if(this.parent != null) this.parent._jeashRenderFlags |= 64;
			this.jeashApplyFilters(this.jeashGraphics.jeashSurface);
			this._jeashRenderFlags |= 32;
		}
		if(inMask != null) {
			this.jeashApplyFilters(this.jeashGraphics.jeashSurface);
			var m = this.getBitmapSurfaceTransform(this.jeashGraphics);
			jeash.Lib.jeashDrawToSurface(this.jeashGraphics.jeashSurface,inMask,m,(this.parent != null?this.parent.alpha:1) * this.alpha,clipRect);
		} else {
			if((this._jeashRenderFlags & 32) != 0) {
				var m = this.getBitmapSurfaceTransform(this.jeashGraphics);
				jeash.Lib.jeashSetSurfaceTransform(this.jeashGraphics.jeashSurface,m);
				this._jeashRenderFlags &= -33;
			}
			jeash.Lib.jeashSetSurfaceOpacity(this.jeashGraphics.jeashSurface,(this.parent != null?this.parent.alpha:1) * this.alpha);
		}
	}
	,validateBounds: function() {
		if(this.getBoundsInvalid()) {
			jeash.display.DisplayObject.prototype.validateBounds.call(this);
			if(this.bitmapData != null) {
				var r = new jeash.geom.Rectangle(0,0,this.bitmapData.getWidth(),this.bitmapData.getHeight());
				if(r.width != 0 || r.height != 0) {
					if(this.jeashBoundsRect.width == 0 && this.jeashBoundsRect.height == 0) this.jeashBoundsRect = r.clone(); else this.jeashBoundsRect.extendBounds(r);
				}
			}
			if(this.scale9Grid != null) {
				this.jeashBoundsRect.width *= this.jeashScaleX;
				this.jeashBoundsRect.height *= this.jeashScaleY;
				this.jeashWidth = this.jeashBoundsRect.width;
				this.jeashHeight = this.jeashBoundsRect.height;
			} else {
				this.jeashWidth = this.jeashBoundsRect.width * this.jeashScaleX;
				this.jeashHeight = this.jeashBoundsRect.height * this.jeashScaleY;
			}
		}
	}
	,jeashGetGraphics: function() {
		return this.jeashGraphics;
	}
	,jeashSetBitmapData: function(inBitmapData) {
		this._jeashRenderFlags |= 64;
		if(this.parent != null) this.parent._jeashRenderFlags |= 64;
		this.bitmapData = inBitmapData;
		return inBitmapData;
	}
	,toString: function() {
		return "[Bitmap name=" + this.name + " id=" + this._jeashId + "]";
	}
	,__class__: jeash.display.Bitmap
});
jeash.display.ImageDataLease = function() {
};
jeash.display.ImageDataLease.__name__ = true;
jeash.display.ImageDataLease.prototype = {
	clone: function() {
		var leaseClone = new jeash.display.ImageDataLease();
		leaseClone.seed = this.seed;
		leaseClone.time = this.time;
		return leaseClone;
	}
	,set: function(s,t) {
		this.seed = s;
		this.time = t;
	}
	,__class__: jeash.display.ImageDataLease
}
jeash.display.BitmapData = function() { }
jeash.display.BitmapData.__name__ = true;
jeash.display.BitmapData.__interfaces__ = [jeash.display.IBitmapDrawable];
jeash.display.BitmapData.prototype = {
	colorTransform: function(rect,colorTransform) {
		if(rect == null) return;
		rect = this.clipRect(rect);
		if(!this.jeashLocked) {
			this.jeashLease.set(this.jeashLeaseNum++,new Date().getTime());
			var ctx = this._jeashTextureBuffer.getContext("2d");
			var imagedata = ctx.getImageData(rect.x,rect.y,rect.width,rect.height);
			var offsetX;
			var _g1 = 0, _g = imagedata.data.length >> 2;
			while(_g1 < _g) {
				var i = _g1++;
				offsetX = i * 4;
				imagedata.data[offsetX] = imagedata.data[offsetX] * colorTransform.redMultiplier + colorTransform.redOffset | 0;
				imagedata.data[offsetX + 1] = imagedata.data[offsetX + 1] * colorTransform.greenMultiplier + colorTransform.greenOffset | 0;
				imagedata.data[offsetX + 2] = imagedata.data[offsetX + 2] * colorTransform.blueMultiplier + colorTransform.blueOffset | 0;
				imagedata.data[offsetX + 3] = imagedata.data[offsetX + 3] * colorTransform.alphaMultiplier + colorTransform.alphaOffset | 0;
			}
			ctx.putImageData(imagedata,rect.x,rect.y);
		} else {
			var s = 4 * (Math.round(rect.x) + Math.round(rect.y) * this.jeashImageData.width);
			var offsetY;
			var offsetX;
			var _g1 = 0, _g = Math.round(rect.height);
			while(_g1 < _g) {
				var i = _g1++;
				offsetY = i * this.jeashImageData.width;
				var _g3 = 0, _g2 = Math.round(rect.width);
				while(_g3 < _g2) {
					var j = _g3++;
					offsetX = 4 * (j + offsetY);
					this.jeashImageData.data[s + offsetX] = this.jeashImageData.data[s + offsetX] * colorTransform.redMultiplier + colorTransform.redOffset | 0;
					this.jeashImageData.data[s + offsetX + 1] = this.jeashImageData.data[s + offsetX + 1] * colorTransform.greenMultiplier + colorTransform.greenOffset | 0;
					this.jeashImageData.data[s + offsetX + 2] = this.jeashImageData.data[s + offsetX + 2] * colorTransform.blueMultiplier + colorTransform.blueOffset | 0;
					this.jeashImageData.data[s + offsetX + 3] = this.jeashImageData.data[s + offsetX + 3] * colorTransform.alphaMultiplier + colorTransform.alphaOffset | 0;
				}
			}
			this.jeashImageDataChanged = true;
		}
	}
	,drawToSurface: function(inSurface,matrix,inColorTransform,blendMode,clipRect,smothing) {
		this.jeashLease.set(this.jeashLeaseNum++,new Date().getTime());
		var ctx = inSurface.getContext("2d");
		if(matrix != null) {
			ctx.save();
			if(matrix.a == 1 && matrix.b == 0 && matrix.c == 0 && matrix.d == 1) ctx.translate(matrix.tx,matrix.ty); else ctx.setTransform(matrix.a,matrix.b,matrix.c,matrix.d,matrix.tx,matrix.ty);
			ctx.drawImage(this._jeashTextureBuffer,0,0);
			ctx.restore();
		} else ctx.drawImage(this._jeashTextureBuffer,0,0);
		if(inColorTransform != null) this.colorTransform(new jeash.geom.Rectangle(0,0,this._jeashTextureBuffer.width,this._jeashTextureBuffer.height),inColorTransform);
	}
	,getHeight: function() {
		if(this._jeashTextureBuffer != null) return this._jeashTextureBuffer.height; else return 0;
	}
	,getWidth: function() {
		if(this._jeashTextureBuffer != null) return this._jeashTextureBuffer.width; else return 0;
	}
	,clipRect: function(r) {
		if(r.x < 0) {
			r.width -= -r.x;
			r.x = 0;
			if(r.x + r.width <= 0) return null;
		}
		if(r.y < 0) {
			r.height -= -r.y;
			r.y = 0;
			if(r.y + r.height <= 0) return null;
		}
		if(r.x + r.width >= (this._jeashTextureBuffer != null?this._jeashTextureBuffer.width:0)) {
			r.width -= r.x + r.width - (this._jeashTextureBuffer != null?this._jeashTextureBuffer.width:0);
			if(r.width <= 0) return null;
		}
		if(r.y + r.height >= (this._jeashTextureBuffer != null?this._jeashTextureBuffer.height:0)) {
			r.height -= r.y + r.height - (this._jeashTextureBuffer != null?this._jeashTextureBuffer.height:0);
			if(r.height <= 0) return null;
		}
		return r;
	}
	,__class__: jeash.display.BitmapData
}
jeash.display.InteractiveObject = function() {
	jeash.display.DisplayObject.call(this);
	this.tabEnabled = false;
	this.mouseEnabled = true;
	this.doubleClickEnabled = true;
	this.jeashSetTabIndex(0);
};
jeash.display.InteractiveObject.__name__ = true;
jeash.display.InteractiveObject.__super__ = jeash.display.DisplayObject;
jeash.display.InteractiveObject.prototype = $extend(jeash.display.DisplayObject.prototype,{
	jeashGetObjectUnderPoint: function(point) {
		if(!this.mouseEnabled) return null; else return jeash.display.DisplayObject.prototype.jeashGetObjectUnderPoint.call(this,point);
	}
	,jeashSetTabIndex: function(inIndex) {
		this.jeashTabIndex = inIndex;
		return inIndex;
	}
	,jeashGetTabIndex: function() {
		return this.jeashTabIndex;
	}
	,toString: function() {
		return "[InteractiveObject name=" + this.name + " id=" + this._jeashId + "]";
	}
	,__class__: jeash.display.InteractiveObject
});
jeash.display.DisplayObjectContainer = function() {
	this.jeashChildren = new Array();
	this.mouseChildren = true;
	this.tabChildren = true;
	jeash.display.InteractiveObject.call(this);
};
jeash.display.DisplayObjectContainer.__name__ = true;
jeash.display.DisplayObjectContainer.__super__ = jeash.display.InteractiveObject;
jeash.display.DisplayObjectContainer.prototype = $extend(jeash.display.InteractiveObject.prototype,{
	jeashSetVisible: function(visible) {
		jeash.display.InteractiveObject.prototype.jeashSetVisible.call(this,visible);
		var _g = 0, _g1 = this.jeashChildren;
		while(_g < _g1.length) {
			var child = _g1[_g];
			++_g;
			if(child.jeashIsOnStage()) child.jeashSetVisible(visible);
		}
		return visible;
	}
	,jeashSetFilters: function(filters) {
		jeash.display.InteractiveObject.prototype.jeashSetFilters.call(this,filters);
		var _g = 0, _g1 = this.jeashChildren;
		while(_g < _g1.length) {
			var child = _g1[_g];
			++_g;
			child.jeashSetFilters(filters);
		}
		return filters;
	}
	,jeashGetObjectUnderPoint: function(point) {
		if(!this.jeashGetVisible()) return null;
		var l = this.jeashChildren.length - 1;
		var _g1 = 0, _g = this.jeashChildren.length;
		while(_g1 < _g) {
			var i = _g1++;
			var result = this.jeashChildren[l - i].jeashGetObjectUnderPoint(point);
			if(result != null) return this.mouseChildren?result:this;
		}
		return jeash.display.InteractiveObject.prototype.jeashGetObjectUnderPoint.call(this,point);
	}
	,jeashUnifyChildrenWithDOM: function(lastMoveGfx) {
		var gfx1 = this.jeashGetGraphics();
		if(gfx1 != null) {
			lastMoveGfx = gfx1;
			var _g = 0, _g1 = this.jeashChildren;
			while(_g < _g1.length) {
				var child = _g1[_g];
				++_g;
				var gfx2 = child.jeashGetGraphics();
				if(gfx2 != null) {
					jeash.Lib.jeashSetSurfaceZIndexAfter(gfx2.jeashSurface,lastMoveGfx.jeashSurface);
					lastMoveGfx = gfx2;
				}
				child.jeashUnifyChildrenWithDOM(lastMoveGfx);
			}
		}
	}
	,swapChildren: function(child1,child2) {
		var c1 = -1;
		var c2 = -1;
		var swap;
		var _g1 = 0, _g = this.jeashChildren.length;
		while(_g1 < _g) {
			var i = _g1++;
			if(this.jeashChildren[i] == child1) c1 = i; else if(this.jeashChildren[i] == child2) c2 = i;
		}
		if(c1 != -1 && c2 != -1) {
			swap = this.jeashChildren[c1];
			this.jeashChildren[c1] = this.jeashChildren[c2];
			this.jeashChildren[c2] = swap;
			swap = null;
			this.jeashSwapSurface(c1,c2);
		}
	}
	,jeashSwapSurface: function(c1,c2) {
		if(this.jeashChildren[c1] == null) throw "Null element at index " + c1 + " length " + this.jeashChildren.length;
		if(this.jeashChildren[c2] == null) throw "Null element at index " + c2 + " length " + this.jeashChildren.length;
		var gfx1 = this.jeashChildren[c1].jeashGetGraphics();
		var gfx2 = this.jeashChildren[c2].jeashGetGraphics();
		if(gfx1 != null && gfx2 != null) jeash.Lib.jeashSwapSurface(gfx1.jeashSurface,gfx2.jeashSurface);
	}
	,setChildIndex: function(child,index) {
		if(index > this.jeashChildren.length) throw "Invalid index position " + index;
		var oldIndex = this.getChildIndex(child);
		if(oldIndex < 0) {
			var msg = "setChildIndex : object " + child.name + " not found.";
			if(child.parent == this) {
				var realindex = -1;
				var _g1 = 0, _g = this.jeashChildren.length;
				while(_g1 < _g) {
					var i = _g1++;
					if(this.jeashChildren[i] == child) {
						realindex = i;
						break;
					}
				}
				if(realindex != -1) msg += "Internal error: Real child index was " + Std.string(realindex); else msg += "Internal error: Child was not in jeashChildren array!";
			}
			throw msg;
		}
		if(index < oldIndex) {
			var i = oldIndex;
			while(i > index) {
				this.swapChildren(this.jeashChildren[i],this.jeashChildren[i - 1]);
				i--;
			}
		} else if(oldIndex < index) {
			var i = oldIndex;
			while(i < index) {
				this.swapChildren(this.jeashChildren[i],this.jeashChildren[i + 1]);
				i++;
			}
		}
	}
	,getChildIndex: function(inChild) {
		var _g1 = 0, _g = this.jeashChildren.length;
		while(_g1 < _g) {
			var i = _g1++;
			if(this.jeashChildren[i] == inChild) return i;
		}
		return -1;
	}
	,addChild: function(object) {
		if(object == null) throw "DisplayObjectContainer asked to add null child object";
		if(object == this) throw "Adding to self";
		if(object.parent == this) {
			this.setChildIndex(object,this.jeashChildren.length - 1);
			return object;
		}
		object.jeashSetParent(this);
		if(this.jeashIsOnStage()) object.jeashAddToStage(this);
		this.jeashChildren.push(object);
		return object;
	}
	,jeashRemoveFromStage: function() {
		jeash.display.InteractiveObject.prototype.jeashRemoveFromStage.call(this);
		var _g = 0, _g1 = this.jeashChildren;
		while(_g < _g1.length) {
			var child = _g1[_g];
			++_g;
			child.jeashRemoveFromStage();
		}
	}
	,jeashAddToStage: function(newParent,beforeSibling) {
		jeash.display.InteractiveObject.prototype.jeashAddToStage.call(this,newParent,beforeSibling);
		var _g = 0, _g1 = this.jeashChildren;
		while(_g < _g1.length) {
			var child = _g1[_g];
			++_g;
			if(!child.jeashIsOnStage()) child.jeashAddToStage(this);
		}
	}
	,jeashRender: function(inMask,clipRect) {
		if(!this.jeashVisible) return;
		if(clipRect == null && this.jeashScrollRect != null) clipRect = this.jeashScrollRect;
		jeash.display.InteractiveObject.prototype.jeashRender.call(this,inMask,clipRect);
		var _g = 0, _g1 = this.jeashChildren;
		while(_g < _g1.length) {
			var child = _g1[_g];
			++_g;
			if(child.jeashVisible) {
				if(clipRect != null) {
					if((child._jeashRenderFlags & 4) != 0 || (child._jeashRenderFlags & 8) != 0) {
						child.invalidateGraphics();
						child.jeashValidateMatrix();
					}
				}
				child.jeashRender(inMask,clipRect);
			}
		}
	}
	,jeashInvalidateMatrix: function(local) {
		if(local == null) local = false;
		if(!((this._jeashRenderFlags & 8) != 0) && !((this._jeashRenderFlags & 4) != 0)) {
			var _g = 0, _g1 = this.jeashChildren;
			while(_g < _g1.length) {
				var child = _g1[_g];
				++_g;
				child.jeashInvalidateMatrix();
			}
		}
		jeash.display.InteractiveObject.prototype.jeashInvalidateMatrix.call(this,local);
	}
	,validateBounds: function() {
		if(this.getBoundsInvalid()) {
			jeash.display.InteractiveObject.prototype.validateBounds.call(this);
			var _g = 0, _g1 = this.jeashChildren;
			while(_g < _g1.length) {
				var obj = _g1[_g];
				++_g;
				if(obj.jeashGetVisible()) {
					var r = obj.getBounds(this);
					if(r.width != 0 || r.height != 0) {
						if(this.jeashBoundsRect.width == 0 && this.jeashBoundsRect.height == 0) this.jeashBoundsRect = r.clone(); else this.jeashBoundsRect.extendBounds(r);
					}
				}
			}
			if(this.scale9Grid != null) {
				this.jeashBoundsRect.width *= this.jeashScaleX;
				this.jeashBoundsRect.height *= this.jeashScaleY;
				this.jeashWidth = this.jeashBoundsRect.width;
				this.jeashHeight = this.jeashBoundsRect.height;
			} else {
				this.jeashWidth = this.jeashBoundsRect.width * this.jeashScaleX;
				this.jeashHeight = this.jeashBoundsRect.height * this.jeashScaleY;
			}
		}
	}
	,jeashBroadcast: function(event) {
		var _g = 0, _g1 = this.jeashChildren;
		while(_g < _g1.length) {
			var child = _g1[_g];
			++_g;
			child.jeashBroadcast(event);
		}
		this.dispatchEvent(event);
	}
	,toString: function() {
		return "[DisplayObjectContainer name=" + this.name + " id=" + this._jeashId + "]";
	}
	,__class__: jeash.display.DisplayObjectContainer
});
jeash.display.GfxPoint = function(inX,inY,inCX,inCY,inType) {
	this.x = inX;
	this.y = inY;
	this.cx = inCX;
	this.cy = inCY;
	this.type = inType;
};
jeash.display.GfxPoint.__name__ = true;
jeash.display.GfxPoint.prototype = {
	__class__: jeash.display.GfxPoint
}
jeash.display.GradPoint = function() { }
jeash.display.GradPoint.__name__ = true;
jeash.display.GradPoint.prototype = {
	__class__: jeash.display.GradPoint
}
jeash.display.Grad = function() { }
jeash.display.Grad.__name__ = true;
jeash.display.Grad.prototype = {
	__class__: jeash.display.Grad
}
jeash.display.LineJob = function(inGrad,inPoint_idx0,inPoint_idx1,inThickness,inAlpha,inColour,inPixel_hinting,inJoints,inCaps,inScale_mode,inMiter_limit) {
	this.grad = inGrad;
	this.point_idx0 = inPoint_idx0;
	this.point_idx1 = inPoint_idx1;
	this.thickness = inThickness;
	this.alpha = inAlpha;
	this.colour = inColour;
	this.pixel_hinting = inPixel_hinting;
	this.joints = inJoints;
	this.caps = inCaps;
	this.scale_mode = inScale_mode;
	this.miter_limit = inMiter_limit;
};
jeash.display.LineJob.__name__ = true;
jeash.display.LineJob.prototype = {
	__class__: jeash.display.LineJob
}
jeash.display.Drawable = function(inPoints,inFillColour,inFillAlpha,inSolidGradient,inBitmap,inLineJobs) {
	this.points = inPoints;
	this.fillColour = inFillColour;
	this.fillAlpha = inFillAlpha;
	this.solidGradient = inSolidGradient;
	this.bitmap = inBitmap;
	this.lineJobs = inLineJobs;
};
jeash.display.Drawable.__name__ = true;
jeash.display.Drawable.prototype = {
	__class__: jeash.display.Drawable
}
jeash.display.PointInPathMode = { __ename__ : true, __constructs__ : ["USER_SPACE","DEVICE_SPACE"] }
jeash.display.PointInPathMode.USER_SPACE = ["USER_SPACE",0];
jeash.display.PointInPathMode.USER_SPACE.toString = $estr;
jeash.display.PointInPathMode.USER_SPACE.__enum__ = jeash.display.PointInPathMode;
jeash.display.PointInPathMode.DEVICE_SPACE = ["DEVICE_SPACE",1];
jeash.display.PointInPathMode.DEVICE_SPACE.toString = $estr;
jeash.display.PointInPathMode.DEVICE_SPACE.__enum__ = jeash.display.PointInPathMode;
jeash.display.Graphics = function(inSurface) {
	jeash.Lib.jeashBootstrap();
	if(inSurface == null) {
		this.jeashSurface = js.Lib.document.createElement("canvas");
		this.jeashSurface.width = 0;
		this.jeashSurface.height = 0;
	} else this.jeashSurface = inSurface;
	this.mLastMoveID = 0;
	this.mPenX = 0.0;
	this.mPenY = 0.0;
	this.mDrawList = new Array();
	this.mPoints = [];
	this.mSolidGradient = null;
	this.mBitmap = null;
	this.mFilling = false;
	this.mFillColour = 0;
	this.mFillAlpha = 0.0;
	this.mLastMoveID = 0;
	this.boundsDirty = true;
	this.jeashClearLine();
	this.mLineJobs = [];
	this.jeashChanged = true;
	this.nextDrawIndex = 0;
	this.jeashExtent = new jeash.geom.Rectangle();
	this.jeashExtentWithFilters = new jeash.geom.Rectangle();
	this._padding = 0.0;
	this.jeashClearNextCycle = true;
};
jeash.display.Graphics.__name__ = true;
jeash.display.Graphics.jeashDetectIsPointInPathMode = function() {
	var canvas = js.Lib.document.createElement("canvas");
	var ctx = canvas.getContext("2d");
	if(ctx.isPointInPath == null) return jeash.display.PointInPathMode.USER_SPACE;
	ctx.save();
	ctx.translate(1,0);
	ctx.beginPath();
	ctx.rect(0,0,1,1);
	var rv = ctx.isPointInPath(0.3,0.3)?jeash.display.PointInPathMode.USER_SPACE:jeash.display.PointInPathMode.DEVICE_SPACE;
	ctx.restore();
	return rv;
}
jeash.display.Graphics.prototype = {
	jeashAdjustSurface: function(sx,sy) {
		if(sy == null) sy = 1.0;
		if(sx == null) sx = 1.0;
		if(Reflect.field(this.jeashSurface,"getContext") != null) {
			var width = Math.ceil((this.jeashExtentWithFilters.width - this.jeashExtentWithFilters.x) * sx);
			var height = Math.ceil((this.jeashExtentWithFilters.height - this.jeashExtentWithFilters.y) * sy);
			if(width <= 5000 && height <= 5000) {
				var dstCanvas = js.Lib.document.createElement("canvas");
				dstCanvas.width = width;
				dstCanvas.height = height;
				jeash.Lib.jeashDrawToSurface(this.jeashSurface,dstCanvas);
				if(jeash.Lib.jeashIsOnStage(this.jeashSurface)) {
					jeash.Lib.jeashAppendSurface(dstCanvas);
					jeash.Lib.jeashCopyStyle(this.jeashSurface,dstCanvas);
					jeash.Lib.jeashSwapSurface(this.jeashSurface,dstCanvas);
					jeash.Lib.jeashRemoveSurface(this.jeashSurface);
					if(this.jeashSurface.id != null) jeash.Lib.jeashSetSurfaceId(dstCanvas,this.jeashSurface.id);
				}
				this.jeashSurface = dstCanvas;
			}
		}
	}
	,closePolygon: function(inCancelFill) {
		var l = this.mPoints.length;
		if(l > 0) {
			if(l > 1) {
				if(this.mFilling && l > 2) {
					if(this.mPoints[this.mLastMoveID].x != this.mPoints[l - 1].x || this.mPoints[this.mLastMoveID].y != this.mPoints[l - 1].y) this.lineTo(this.mPoints[this.mLastMoveID].x,this.mPoints[this.mLastMoveID].y);
				}
				this.addLineSegment();
				var drawable = new jeash.display.Drawable(this.mPoints,this.mFillColour,this.mFillAlpha,this.mSolidGradient,this.mBitmap,this.mLineJobs);
				this.addDrawable(drawable);
			}
			this.mLineJobs = [];
			this.mPoints = [];
		}
		if(inCancelFill) {
			this.mFillAlpha = 0;
			this.mSolidGradient = null;
			this.mBitmap = null;
			this.mFilling = false;
		}
		this.jeashChanged = true;
	}
	,addLineSegment: function() {
		if(this.mCurrentLine.point_idx1 > 0) this.mLineJobs.push(new jeash.display.LineJob(this.mCurrentLine.grad,this.mCurrentLine.point_idx0,this.mCurrentLine.point_idx1,this.mCurrentLine.thickness,this.mCurrentLine.alpha,this.mCurrentLine.colour,this.mCurrentLine.pixel_hinting,this.mCurrentLine.joints,this.mCurrentLine.caps,this.mCurrentLine.scale_mode,this.mCurrentLine.miter_limit));
		this.mCurrentLine.point_idx0 = this.mCurrentLine.point_idx1 = -1;
	}
	,addDrawable: function(inDrawable) {
		if(inDrawable == null) return;
		this.mDrawList.unshift(inDrawable);
	}
	,curveTo: function(inCX,inCY,inX,inY) {
		var pid = this.mPoints.length;
		if(pid == 0) {
			this.mPoints.push(new jeash.display.GfxPoint(this.mPenX,this.mPenY,0.0,0.0,0));
			pid++;
		}
		this.mPenX = inX;
		this.mPenY = inY;
		this.jeashExpandStandardExtent(inX,inY,this.mCurrentLine.thickness);
		this.mPoints.push(new jeash.display.GfxPoint(inX,inY,inCX,inCY,2));
		if(this.mCurrentLine.grad != null || this.mCurrentLine.alpha > 0) {
			if(this.mCurrentLine.point_idx0 < 0) this.mCurrentLine.point_idx0 = pid - 1;
			this.mCurrentLine.point_idx1 = pid;
		}
	}
	,lineTo: function(inX,inY) {
		var pid = this.mPoints.length;
		if(pid == 0) {
			this.mPoints.push(new jeash.display.GfxPoint(this.mPenX,this.mPenY,0.0,0.0,0));
			pid++;
		}
		this.mPenX = inX;
		this.mPenY = inY;
		this.jeashExpandStandardExtent(inX,inY,this.mCurrentLine.thickness);
		this.mPoints.push(new jeash.display.GfxPoint(this.mPenX,this.mPenY,0.0,0.0,1));
		if(this.mCurrentLine.grad != null || this.mCurrentLine.alpha > 0) {
			if(this.mCurrentLine.point_idx0 < 0) this.mCurrentLine.point_idx0 = pid - 1;
			this.mCurrentLine.point_idx1 = pid;
		}
		if(!this.mFilling) this.closePolygon(false);
	}
	,moveTo: function(inX,inY) {
		this.mPenX = inX;
		this.mPenY = inY;
		this.jeashExpandStandardExtent(inX,inY);
		if(!this.mFilling) this.closePolygon(false); else {
			this.addLineSegment();
			this.mLastMoveID = this.mPoints.length;
			this.mPoints.push(new jeash.display.GfxPoint(this.mPenX,this.mPenY,0.0,0.0,0));
		}
	}
	,jeashExpandFilteredExtent: function(x,y) {
		var maxX, minX, maxY, minY;
		minX = this.jeashExtent.x;
		minY = this.jeashExtent.y;
		maxX = this.jeashExtent.width + minX;
		maxY = this.jeashExtent.height + minY;
		maxX = x > maxX?x:maxX;
		minX = x < minX?x:minX;
		maxY = y > maxY?y:maxY;
		minY = y < minY?y:minY;
		this.jeashExtentWithFilters.x = minX;
		this.jeashExtentWithFilters.y = minY;
		this.jeashExtentWithFilters.width = maxX - minX;
		this.jeashExtentWithFilters.height = maxY - minY;
	}
	,jeashExpandStandardExtent: function(x,y,thickness) {
		if(this._padding > 0) {
			this.jeashExtent.width -= this._padding;
			this.jeashExtent.height -= this._padding;
		}
		if(thickness != null && thickness > this._padding) this._padding = thickness;
		var maxX, minX, maxY, minY;
		minX = this.jeashExtent.x;
		minY = this.jeashExtent.y;
		maxX = this.jeashExtent.width + minX;
		maxY = this.jeashExtent.height + minY;
		maxX = x > maxX?x:maxX;
		minX = x < minX?x:minX;
		maxY = y > maxY?y:maxY;
		minY = y < minY?y:minY;
		this.jeashExtent.x = minX;
		this.jeashExtent.y = minY;
		this.jeashExtent.width = maxX - minX + this._padding;
		this.jeashExtent.height = maxY - minY + this._padding;
		this.boundsDirty = true;
	}
	,clear: function() {
		this.jeashClearLine();
		this.mPenX = 0.0;
		this.mPenY = 0.0;
		this.mDrawList = new Array();
		this.nextDrawIndex = 0;
		this.mPoints = [];
		this.mSolidGradient = null;
		this.mFilling = false;
		this.mFillColour = 0;
		this.mFillAlpha = 0.0;
		this.mLastMoveID = 0;
		this.jeashClearNextCycle = true;
		this.boundsDirty = true;
		this.jeashExtent.x = 0.0;
		this.jeashExtent.y = 0.0;
		this.jeashExtent.width = 0.0;
		this.jeashExtent.height = 0.0;
		this._padding = 0.0;
		this.mLineJobs = [];
	}
	,jeashClearCanvas: function() {
		if(this.jeashSurface != null) {
			var w = this.jeashSurface.width;
			this.jeashSurface.width = w;
		}
	}
	,jeashClearLine: function() {
		this.mCurrentLine = new jeash.display.LineJob(null,-1,-1,0.0,0.0,0,1,0,256,3,3.0);
	}
	,drawRect: function(x,y,width,height) {
		this.closePolygon(false);
		this.moveTo(x,y);
		this.lineTo(x + width,y);
		this.lineTo(x + width,y + height);
		this.lineTo(x,y + height);
		this.lineTo(x,y);
		this.closePolygon(false);
	}
	,drawCircle: function(x,y,rad) {
		this.closePolygon(false);
		this.jeashDrawEllipse(x,y,rad,rad);
		this.closePolygon(false);
	}
	,jeashDrawEllipse: function(x,y,rx,ry) {
		this.moveTo(x + rx,y);
		this.curveTo(rx + x,-0.4142 * ry + y,0.7071 * rx + x,-0.7071 * ry + y);
		this.curveTo(0.4142 * rx + x,-ry + y,x,-ry + y);
		this.curveTo(-0.4142 * rx + x,-ry + y,-0.7071 * rx + x,-0.7071 * ry + y);
		this.curveTo(-rx + x,-0.4142 * ry + y,-rx + x,y);
		this.curveTo(-rx + x,0.4142 * ry + y,-0.7071 * rx + x,0.7071 * ry + y);
		this.curveTo(-0.4142 * rx + x,ry + y,x,ry + y);
		this.curveTo(0.4142 * rx + x,ry + y,0.7071 * rx + x,0.7071 * ry + y);
		this.curveTo(rx + x,0.4142 * ry + y,rx + x,y);
	}
	,beginFill: function(color,alpha) {
		this.closePolygon(true);
		this.mFillColour = color;
		this.mFillAlpha = alpha == null?1.0:alpha;
		this.mFilling = true;
		this.mSolidGradient = null;
		this.mBitmap = null;
	}
	,jeashHitTest: function(inX,inY) {
		var ctx = (function($this) {
			var $r;
			try {
				$r = $this.jeashSurface.getContext("2d");
			} catch( e ) {
				$r = null;
			}
			return $r;
		}(this));
		if(ctx == null) return false;
		if(ctx.isPointInPath(inX,inY)) return true; else if(this.mDrawList.length == 0 && this.jeashExtent.width > 0 && this.jeashExtent.height > 0) return true;
		return false;
	}
	,jeashRender: function(maskHandle,filters,sx,sy,clip0,clip1,clip2,clip3) {
		if(sy == null) sy = 1.0;
		if(sx == null) sx = 1.0;
		if(!this.jeashChanged) return false;
		this.closePolygon(true);
		var padding = this._padding;
		if(filters != null) {
			var _g = 0;
			while(_g < filters.length) {
				var filter = filters[_g];
				++_g;
				if(Reflect.hasField(filter,"blurX")) padding += Math.max(Reflect.field(filter,"blurX"),Reflect.field(filter,"blurY")) * 4;
			}
		}
		this.jeashExpandFilteredExtent(-(padding * sx) / 2,-(padding * sy) / 2);
		if(this.jeashClearNextCycle) {
			this.nextDrawIndex = 0;
			this.jeashClearCanvas();
			this.jeashClearNextCycle = false;
		}
		if(this.jeashExtentWithFilters.width - this.jeashExtentWithFilters.x > this.jeashSurface.width || this.jeashExtentWithFilters.height - this.jeashExtentWithFilters.y > this.jeashSurface.height) this.jeashAdjustSurface(sx,sy);
		var ctx = (function($this) {
			var $r;
			try {
				$r = $this.jeashSurface.getContext("2d");
			} catch( e ) {
				$r = null;
			}
			return $r;
		}(this));
		if(ctx == null) return false;
		if(clip0 != null) {
			ctx.beginPath();
			ctx.moveTo(clip0.x * sx,clip0.y * sy);
			ctx.lineTo(clip1.x * sx,clip1.y * sy);
			ctx.lineTo(clip2.x * sx,clip2.y * sy);
			ctx.lineTo(clip3.x * sx,clip3.y * sy);
			ctx.closePath();
			ctx.clip();
		}
		if(filters != null) {
			var _g = 0;
			while(_g < filters.length) {
				var filter = filters[_g];
				++_g;
				if(js.Boot.__instanceof(filter,jeash.filters.DropShadowFilter)) filter.jeashApplyFilter(this.jeashSurface,true);
			}
		}
		var len = this.mDrawList.length;
		ctx.save();
		if(this.jeashExtentWithFilters.x != 0 || this.jeashExtentWithFilters.y != 0) ctx.translate(-this.jeashExtentWithFilters.x * sx,-this.jeashExtentWithFilters.y * sy);
		if(sx != 1 || sy != 0) ctx.scale(sx,sy);
		var doStroke = false;
		var _g = this.nextDrawIndex;
		while(_g < len) {
			var i = _g++;
			var d = this.mDrawList[len - 1 - i];
			if(d.lineJobs.length > 0) {
				var _g1 = 0, _g2 = d.lineJobs;
				while(_g1 < _g2.length) {
					var lj = _g2[_g1];
					++_g1;
					ctx.lineWidth = lj.thickness;
					switch(lj.joints) {
					case 0:
						ctx.lineJoin = "round";
						break;
					case 4096:
						ctx.lineJoin = "miter";
						break;
					case 8192:
						ctx.lineJoin = "bevel";
						break;
					}
					switch(lj.caps) {
					case 256:
						ctx.lineCap = "round";
						break;
					case 512:
						ctx.lineCap = "square";
						break;
					case 0:
						ctx.lineCap = "butt";
						break;
					}
					ctx.miterLimit = lj.miter_limit;
					if(lj.grad != null) ctx.strokeStyle = this.createCanvasGradient(ctx,lj.grad); else ctx.strokeStyle = this.createCanvasColor(lj.colour,lj.alpha);
					ctx.beginPath();
					var _g4 = lj.point_idx0, _g3 = lj.point_idx1 + 1;
					while(_g4 < _g3) {
						var i1 = _g4++;
						var p = d.points[i1];
						switch(p.type) {
						case 0:
							ctx.moveTo(p.x,p.y);
							break;
						case 2:
							ctx.quadraticCurveTo(p.cx,p.cy,p.x,p.y);
							break;
						default:
							ctx.lineTo(p.x,p.y);
						}
					}
					ctx.closePath();
					doStroke = true;
				}
			} else {
				ctx.beginPath();
				var _g1 = 0, _g2 = d.points;
				while(_g1 < _g2.length) {
					var p = _g2[_g1];
					++_g1;
					switch(p.type) {
					case 0:
						ctx.moveTo(p.x,p.y);
						break;
					case 2:
						ctx.quadraticCurveTo(p.cx,p.cy,p.x,p.y);
						break;
					default:
						ctx.lineTo(p.x,p.y);
					}
				}
				ctx.closePath();
			}
			var fillColour = d.fillColour;
			var fillAlpha = d.fillAlpha;
			var g = d.solidGradient;
			if(g != null) ctx.fillStyle = this.createCanvasGradient(ctx,g); else ctx.fillStyle = this.createCanvasColor(fillColour,Math.min(1.0,Math.max(0.0,fillAlpha)));
			ctx.fill();
			if(doStroke) ctx.stroke();
			ctx.save();
			var bitmap = d.bitmap;
			if(bitmap != null) {
				var img = bitmap.texture_buffer;
				var m = bitmap.matrix;
				if(m != null) ctx.transform(m.a,m.b,m.c,m.d,m.tx,m.ty);
				ctx.drawImage(img,0,0);
			}
			ctx.restore();
		}
		ctx.restore();
		this.jeashChanged = false;
		this.nextDrawIndex = len;
		this.mDrawList = [];
		return true;
	}
	,createCanvasGradient: function(ctx,g) {
		var gradient;
		var matrix = g.matrix;
		if((g.flags & 1) == 0) {
			var p1 = matrix.transformPoint(new jeash.geom.Point(-819.2,0));
			var p2 = matrix.transformPoint(new jeash.geom.Point(819.2,0));
			gradient = ctx.createLinearGradient(p1.x,p1.y,p2.x,p2.y);
		} else {
			var p1 = matrix.transformPoint(new jeash.geom.Point(g.focal * 819.2,0));
			var p2 = matrix.transformPoint(new jeash.geom.Point(0,819.2));
			gradient = ctx.createRadialGradient(p1.x,p1.y,0,p2.x,p1.y,p2.y);
		}
		var _g = 0, _g1 = g.points;
		while(_g < _g1.length) {
			var point = _g1[_g];
			++_g;
			var color = this.createCanvasColor(point.col,point.alpha);
			var pos = point.ratio / 255;
			gradient.addColorStop(pos,color);
		}
		return gradient;
	}
	,createCanvasColor: function(color,alpha) {
		var r;
		var g;
		var b;
		r = (16711680 & color) >> 16;
		g = (65280 & color) >> 8;
		b = 255 & color;
		return "rgba" + "(" + r + "," + g + "," + b + "," + alpha + ")";
	}
	,__class__: jeash.display.Graphics
}
jeash.display.IGraphicsData = function() { }
jeash.display.IGraphicsData.__name__ = true;
jeash.display.IGraphicsData.prototype = {
	__class__: jeash.display.IGraphicsData
}
jeash.display.IGraphicsFill = function() { }
jeash.display.IGraphicsFill.__name__ = true;
jeash.display.IGraphicsFill.prototype = {
	__class__: jeash.display.IGraphicsFill
}
jeash.display.Loader = function() { }
jeash.display.Loader.__name__ = true;
jeash.display.Loader.__super__ = jeash.display.DisplayObjectContainer;
jeash.display.Loader.prototype = $extend(jeash.display.DisplayObjectContainer.prototype,{
	validateBounds: function() {
		if(this.getBoundsInvalid()) {
			jeash.display.DisplayObjectContainer.prototype.validateBounds.call(this);
			if(this.mImage != null) {
				var r = new jeash.geom.Rectangle(0,0,this.mImage.getWidth(),this.mImage.getHeight());
				if(r.width != 0 || r.height != 0) {
					if(this.jeashBoundsRect.width == 0 && this.jeashBoundsRect.height == 0) this.jeashBoundsRect = r.clone(); else this.jeashBoundsRect.extendBounds(r);
				}
			}
			if(this.scale9Grid != null) {
				this.jeashBoundsRect.width *= this.jeashScaleX;
				this.jeashBoundsRect.height *= this.jeashScaleY;
				this.jeashWidth = this.jeashBoundsRect.width;
				this.jeashHeight = this.jeashBoundsRect.height;
			} else {
				this.jeashWidth = this.jeashBoundsRect.width * this.jeashScaleX;
				this.jeashHeight = this.jeashBoundsRect.height * this.jeashScaleY;
			}
		}
	}
	,toString: function() {
		return "[Loader name=" + this.name + " id=" + this._jeashId + "]";
	}
	,__class__: jeash.display.Loader
});
jeash.display.LoaderInfo = function() {
	jeash.events.EventDispatcher.call(this);
	this.bytesLoaded = 0;
	this.bytesTotal = 0;
	this.childAllowsParent = true;
	this.parameters = { };
};
jeash.display.LoaderInfo.__name__ = true;
jeash.display.LoaderInfo.create = function(ldr) {
	var li = new jeash.display.LoaderInfo();
	if(ldr != null) li.loader = ldr;
	return li;
}
jeash.display.LoaderInfo.__super__ = jeash.events.EventDispatcher;
jeash.display.LoaderInfo.prototype = $extend(jeash.events.EventDispatcher.prototype,{
	__class__: jeash.display.LoaderInfo
});
jeash.display.Sprite = function() {
	jeash.display.DisplayObjectContainer.call(this);
	this.jeashGraphics = new jeash.display.Graphics();
	this.buttonMode = false;
};
jeash.display.Sprite.__name__ = true;
jeash.display.Sprite.__super__ = jeash.display.DisplayObjectContainer;
jeash.display.Sprite.prototype = $extend(jeash.display.DisplayObjectContainer.prototype,{
	jeashGetDropTarget: function() {
		return this.jeashDropTarget;
	}
	,jeashSetUseHandCursor: function(cursor) {
		if(cursor == this.useHandCursor) return cursor;
		if(this.jeashCursorCallbackOver != null) this.removeEventListener(jeash.events.MouseEvent.ROLL_OVER,this.jeashCursorCallbackOver);
		if(this.jeashCursorCallbackOut != null) this.removeEventListener(jeash.events.MouseEvent.ROLL_OUT,this.jeashCursorCallbackOut);
		if(!cursor) jeash.Lib.jeashSetCursor(jeash._Lib.CursorType.Default); else {
			this.jeashCursorCallbackOver = function(_) {
				jeash.Lib.jeashSetCursor(jeash._Lib.CursorType.Pointer);
			};
			this.jeashCursorCallbackOut = function(_) {
				jeash.Lib.jeashSetCursor(jeash._Lib.CursorType.Default);
			};
			this.addEventListener(jeash.events.MouseEvent.ROLL_OVER,this.jeashCursorCallbackOver);
			this.addEventListener(jeash.events.MouseEvent.ROLL_OUT,this.jeashCursorCallbackOut);
		}
		this.useHandCursor = cursor;
		return cursor;
	}
	,jeashGetGraphics: function() {
		return this.jeashGraphics;
	}
	,toString: function() {
		return "[Sprite name=" + this.name + " id=" + this._jeashId + "]";
	}
	,__class__: jeash.display.Sprite
});
jeash.display.MovieClip = function() {
	jeash.display.Sprite.call(this);
	this.enabled = true;
	this.mCurrentFrame = 0;
	this.mTotalFrames = 0;
	this.loaderInfo = jeash.display.LoaderInfo.create(null);
};
jeash.display.MovieClip.__name__ = true;
jeash.display.MovieClip.__super__ = jeash.display.Sprite;
jeash.display.MovieClip.prototype = $extend(jeash.display.Sprite.prototype,{
	toString: function() {
		return "[MovieClip name=" + this.name + " id=" + this._jeashId + "]";
	}
	,GetCurrentFrame: function() {
		return this.mCurrentFrame;
	}
	,GetTotalFrames: function() {
		return this.mTotalFrames;
	}
	,__class__: jeash.display.MovieClip
});
jeash.display.Shape = function() { }
jeash.display.Shape.__name__ = true;
jeash.display.Shape.__super__ = jeash.display.DisplayObject;
jeash.display.Shape.prototype = $extend(jeash.display.DisplayObject.prototype,{
	jeashGetObjectUnderPoint: function(point) {
		if(this.parent == null) return null;
		if(this.parent.mouseEnabled && jeash.display.DisplayObject.prototype.jeashGetObjectUnderPoint.call(this,point) == this) return this.parent; else return null;
	}
	,jeashGetGraphics: function() {
		return this.jeashGraphics;
	}
	,toString: function() {
		return "[Shape name=" + this.name + " id=" + this._jeashId + "]";
	}
	,__class__: jeash.display.Shape
});
jeash.events.Event = function(inType,inBubbles,inCancelable) {
	if(inCancelable == null) inCancelable = false;
	if(inBubbles == null) inBubbles = false;
	this.type = inType;
	this.bubbles = inBubbles;
	this.cancelable = inCancelable;
	this.jeashIsCancelled = false;
	this.jeashIsCancelledNow = false;
	this.target = null;
	this.currentTarget = null;
	this.eventPhase = jeash.events.EventPhase.AT_TARGET;
};
jeash.events.Event.__name__ = true;
jeash.events.Event.prototype = {
	jeashCreateSimilar: function(type,related,targ) {
		var result = new jeash.events.Event(type,this.bubbles,this.cancelable);
		if(targ != null) result.target = targ;
		return result;
	}
	,jeashGetIsCancelledNow: function() {
		return this.jeashIsCancelledNow;
	}
	,jeashGetIsCancelled: function() {
		return this.jeashIsCancelled;
	}
	,jeashSetPhase: function(phase) {
		this.eventPhase = phase;
	}
	,__class__: jeash.events.Event
}
jeash.events.MouseEvent = function(type,bubbles,cancelable,localX,localY,relatedObject,ctrlKey,altKey,shiftKey,buttonDown,delta,commandKey,clickCount) {
	if(clickCount == null) clickCount = 0;
	if(commandKey == null) commandKey = false;
	if(delta == null) delta = 0;
	if(buttonDown == null) buttonDown = false;
	if(shiftKey == null) shiftKey = false;
	if(altKey == null) altKey = false;
	if(ctrlKey == null) ctrlKey = false;
	if(localY == null) localY = 0;
	if(localX == null) localX = 0;
	if(cancelable == null) cancelable = false;
	if(bubbles == null) bubbles = true;
	jeash.events.Event.call(this,type,bubbles,cancelable);
	this.shiftKey = shiftKey;
	this.altKey = altKey;
	this.ctrlKey = ctrlKey;
	this.bubbles = bubbles;
	this.relatedObject = relatedObject;
	this.delta = delta;
	this.localX = localX;
	this.localY = localY;
	this.buttonDown = buttonDown;
	this.commandKey = commandKey;
	this.clickCount = clickCount;
};
jeash.events.MouseEvent.__name__ = true;
jeash.events.MouseEvent.jeashCreate = function(type,event,local,target) {
	var jeashMouseDown = false;
	var delta = type == jeash.events.MouseEvent.MOUSE_WHEEL?(function($this) {
		var $r;
		var mouseEvent = event;
		$r = mouseEvent.wheelDelta?mouseEvent.wheelDelta / 120 | 0:mouseEvent.detail?-mouseEvent.detail | 0:null;
		return $r;
	}(this)):2;
	if(type == jeash.events.MouseEvent.MOUSE_DOWN) jeashMouseDown = event.which != null?event.which == 1:event.button != null?event.button == 0:false; else if(type == jeash.events.MouseEvent.MOUSE_UP) {
		if(event.which != null) {
			if(event.which == 1) jeashMouseDown = false; else if(event.button != null) {
				if(event.button == 0) jeashMouseDown = false; else jeashMouseDown = false;
			}
		}
	}
	var pseudoEvent = new jeash.events.MouseEvent(type,true,false,local.x,local.y,null,event.ctrlKey,event.altKey,event.shiftKey,jeashMouseDown,delta);
	pseudoEvent.stageX = jeash.Lib.jeashGetCurrent().getStage().jeashGetMouseX();
	pseudoEvent.stageY = jeash.Lib.jeashGetCurrent().getStage().jeashGetMouseY();
	pseudoEvent.target = target;
	return pseudoEvent;
}
jeash.events.MouseEvent.__super__ = jeash.events.Event;
jeash.events.MouseEvent.prototype = $extend(jeash.events.Event.prototype,{
	jeashCreateSimilar: function(type,related,targ) {
		var result = new jeash.events.MouseEvent(type,this.bubbles,this.cancelable,this.localX,this.localY,related == null?this.relatedObject:related,this.ctrlKey,this.altKey,this.shiftKey,this.buttonDown,this.delta,this.commandKey,this.clickCount);
		if(targ != null) result.target = targ;
		return result;
	}
	,__class__: jeash.events.MouseEvent
});
jeash.events.TouchEvent = function(type,bubbles,cancelable,localX,localY,relatedObject,ctrlKey,altKey,shiftKey,buttonDown,delta,commandKey,clickCount) {
	if(clickCount == null) clickCount = 0;
	if(commandKey == null) commandKey = false;
	if(delta == null) delta = 0;
	if(buttonDown == null) buttonDown = false;
	if(shiftKey == null) shiftKey = false;
	if(altKey == null) altKey = false;
	if(ctrlKey == null) ctrlKey = false;
	if(localY == null) localY = 0;
	if(localX == null) localX = 0;
	if(cancelable == null) cancelable = false;
	if(bubbles == null) bubbles = true;
	jeash.events.Event.call(this,type,bubbles,cancelable);
	this.shiftKey = shiftKey;
	this.altKey = altKey;
	this.ctrlKey = ctrlKey;
	this.bubbles = bubbles;
	this.relatedObject = relatedObject;
	this.delta = delta;
	this.localX = localX;
	this.localY = localY;
	this.buttonDown = buttonDown;
	this.commandKey = commandKey;
	this.touchPointID = 0;
	this.isPrimaryTouchPoint = true;
};
jeash.events.TouchEvent.__name__ = true;
jeash.events.TouchEvent.jeashCreate = function(type,event,touch,local,target) {
	var evt = new jeash.events.TouchEvent(type,true,false,local.x,local.y,null,event.ctrlKey,event.altKey,event.shiftKey,false,0,null,0);
	evt.stageX = jeash.Lib.jeashGetCurrent().getStage().jeashGetMouseX();
	evt.stageY = jeash.Lib.jeashGetCurrent().getStage().jeashGetMouseY();
	evt.target = target;
	return evt;
}
jeash.events.TouchEvent.__super__ = jeash.events.Event;
jeash.events.TouchEvent.prototype = $extend(jeash.events.Event.prototype,{
	jeashCreateSimilar: function(type,related,targ) {
		var result = new jeash.events.TouchEvent(type,this.bubbles,this.cancelable,this.localX,this.localY,related == null?this.relatedObject:related,this.ctrlKey,this.altKey,this.shiftKey,this.buttonDown,this.delta,this.commandKey);
		result.touchPointID = this.touchPointID;
		result.isPrimaryTouchPoint = this.isPrimaryTouchPoint;
		if(targ != null) result.target = targ;
		return result;
	}
	,__class__: jeash.events.TouchEvent
});
jeash.display.Stage = function(width,height) {
	jeash.display.DisplayObjectContainer.call(this);
	this.jeashFocusObject = null;
	this.jeashWindowWidth = width;
	this.jeashWindowHeight = height;
	this.stageFocusRect = false;
	this.scaleMode = jeash.display.StageScaleMode.SHOW_ALL;
	this.jeashStageMatrix = new jeash.geom.Matrix();
	this.tabEnabled = true;
	this.jeashSetFrameRate(60.0);
	this.jeashSetBackgroundColour(16777215);
	this.name = "Stage";
	this.loaderInfo = jeash.display.LoaderInfo.create(null);
	this.loaderInfo.parameters.width = Std.string(this.jeashWindowWidth);
	this.loaderInfo.parameters.height = Std.string(this.jeashWindowHeight);
	this.jeashPointInPathMode = jeash.display.Graphics.jeashDetectIsPointInPathMode();
	this.jeashMouseOverObjects = [];
	this.jeashSetShowDefaultContextMenu(true);
	this.jeashTouchInfo = [];
	this.jeashFocusOverObjects = [];
	this.jeashUIEventsQueue = new Array(1000);
	this.jeashUIEventsQueueIndex = 0;
};
jeash.display.Stage.__name__ = true;
jeash.display.Stage.__super__ = jeash.display.DisplayObjectContainer;
jeash.display.Stage.prototype = $extend(jeash.display.DisplayObjectContainer.prototype,{
	jeashSetDisplayState: function(displayState) {
		if(displayState != this.displayState && this.displayState != null) {
			switch( (displayState)[1] ) {
			case 1:
				jeash.Lib.jeashDisableFullScreen();
				break;
			case 0:
				jeash.Lib.jeashEnableFullScreen();
				break;
			}
		}
		this.displayState = displayState;
		return displayState;
	}
	,jeashSetShowDefaultContextMenu: function(showDefaultContextMenu) {
		if(showDefaultContextMenu != this.jeashShowDefaultContextMenu && this.jeashShowDefaultContextMenu != null) {
			if(!showDefaultContextMenu) jeash.Lib.jeashDisableRightClick(); else jeash.Lib.jeashEnableRightClick();
		}
		this.jeashShowDefaultContextMenu = showDefaultContextMenu;
		return showDefaultContextMenu;
	}
	,jeashGetMouseY: function() {
		return this._mouseY;
	}
	,jeashGetMouseX: function() {
		return this._mouseX;
	}
	,jeashStageRender: function(_) {
		if(!this.jeashStageActive) {
			this.jeashOnResize(this.jeashWindowWidth,this.jeashWindowHeight);
			var event = new jeash.events.Event(jeash.events.Event.ACTIVATE);
			event.target = this;
			this.jeashBroadcast(event);
			this.jeashStageActive = true;
		}
		var _g1 = 0, _g = this.jeashUIEventsQueueIndex;
		while(_g1 < _g) {
			var i = _g1++;
			if(this.jeashUIEventsQueue[i] != null) this.jeashProcessStageEvent(this.jeashUIEventsQueue[i]);
		}
		this.jeashUIEventsQueueIndex = 0;
		var event = new jeash.events.Event(jeash.events.Event.ENTER_FRAME);
		this.jeashBroadcast(event);
		this.jeashRenderAll();
		var event1 = new jeash.events.Event(jeash.events.Event.RENDER);
		this.jeashBroadcast(event1);
	}
	,jeashUpdateNextWake: function() {
		var window = js.Lib.window;
		window.clearInterval(this.jeashTimer);
		this.jeashTimer = window.setInterval($bind(this,this.jeashStageRender),this.jeashInterval,[]);
	}
	,jeashSetFrameRate: function(speed) {
		var window = js.Lib.window;
		this.jeashInterval = 1000.0 / speed | 0;
		this.jeashUpdateNextWake();
		this.jeashFrameRate = speed;
		return speed;
	}
	,jeashGetFrameRate: function() {
		return this.jeashFrameRate;
	}
	,jeashGetQuality: function() {
		return this.quality != null?this.quality:jeash.display.StageQuality.BEST;
	}
	,jeashSetQuality: function(inQuality) {
		this.quality = inQuality;
		return inQuality;
	}
	,jeashRenderAll: function() {
		this.jeashRender(null,null);
	}
	,jeashGetFocus: function() {
		return this.jeashFocusObject;
	}
	,jeashSetFocus: function(inObj) {
		return this.jeashFocusObject = inObj;
	}
	,jeashSetBackgroundColour: function(col) {
		this.jeashBackgroundColour = col;
		return col;
	}
	,jeashGetBackgroundColour: function() {
		return this.jeashBackgroundColour;
	}
	,jeashOnResize: function(inW,inH) {
		this.jeashWindowWidth = inW;
		this.jeashWindowHeight = inH;
		var event = new jeash.events.Event(jeash.events.Event.RESIZE);
		event.target = this;
		this.jeashBroadcast(event);
	}
	,jeashOnKey: function(code,pressed,inChar,ctrl,alt,shift) {
		var event = new jeash.events.KeyboardEvent(pressed?jeash.events.KeyboardEvent.KEY_DOWN:jeash.events.KeyboardEvent.KEY_UP,true,false,inChar,code,shift || ctrl?1:0,ctrl,alt,shift);
		this.dispatchEvent(event);
	}
	,jeashOnTouch: function(event,touch,type,touchInfo,isPrimaryTouchPoint) {
		var point = new jeash.geom.Point(touch.pageX - jeash.Lib.mMe.__scr.offsetLeft + window.pageXOffset,touch.pageY - jeash.Lib.mMe.__scr.offsetTop + window.pageYOffset);
		var obj = this.jeashGetObjectUnderPoint(point);
		this._mouseX = point.x;
		this._mouseY = point.y;
		var stack = new Array();
		if(obj != null) obj.jeashGetInteractiveObjectStack(stack);
		if(stack.length > 0) {
			stack.reverse();
			var local = obj.globalToLocal(point);
			var evt = jeash.events.TouchEvent.jeashCreate(type,event,touch,local,obj);
			evt.touchPointID = touch.identifier;
			evt.isPrimaryTouchPoint = isPrimaryTouchPoint;
			this.jeashCheckInOuts(evt,stack,touchInfo);
			obj.jeashFireEvent(evt);
			var mouseType = (function($this) {
				var $r;
				switch(type) {
				case jeash.events.TouchEvent.TOUCH_BEGIN:
					$r = jeash.events.MouseEvent.MOUSE_DOWN;
					break;
				case jeash.events.TouchEvent.TOUCH_END:
					$r = jeash.events.MouseEvent.MOUSE_UP;
					break;
				default:
					$r = (function($this) {
						var $r;
						if($this.jeashDragObject != null) $this.jeashDrag(point);
						$r = jeash.events.MouseEvent.MOUSE_MOVE;
						return $r;
					}($this));
				}
				return $r;
			}(this));
			obj.jeashFireEvent(jeash.events.MouseEvent.jeashCreate(mouseType,evt,local,obj));
		} else {
			var evt = jeash.events.TouchEvent.jeashCreate(type,event,touch,point,null);
			evt.touchPointID = touch.identifier;
			evt.isPrimaryTouchPoint = isPrimaryTouchPoint;
			this.jeashCheckInOuts(evt,stack,touchInfo);
		}
	}
	,jeashOnMouse: function(event,type) {
		var point = new jeash.geom.Point(event.clientX - jeash.Lib.mMe.__scr.offsetLeft + window.pageXOffset,event.clientY - jeash.Lib.mMe.__scr.offsetTop + window.pageYOffset);
		if(this.jeashDragObject != null) this.jeashDrag(point);
		var obj = this.jeashGetObjectUnderPoint(point);
		this._mouseX = point.x;
		this._mouseY = point.y;
		var stack = new Array();
		if(obj != null) obj.jeashGetInteractiveObjectStack(stack);
		if(stack.length > 0) {
			stack.reverse();
			var local = obj.globalToLocal(point);
			var evt = jeash.events.MouseEvent.jeashCreate(type,event,local,obj);
			this.jeashCheckInOuts(evt,stack);
			if(type == jeash.events.MouseEvent.MOUSE_DOWN) this.jeashCheckFocusInOuts(evt,stack);
			obj.jeashFireEvent(evt);
		} else {
			var evt = jeash.events.MouseEvent.jeashCreate(type,event,point,null);
			this.jeashCheckInOuts(evt,stack);
			if(type == jeash.events.MouseEvent.MOUSE_DOWN) this.jeashCheckFocusInOuts(evt,stack);
		}
	}
	,jeashHandleOrientationChange: function() {
	}
	,jeashHandleAccelerometer: function(evt) {
		jeash.display.Stage.jeashAcceleration.x = evt.accelerationIncludingGravity.x;
		jeash.display.Stage.jeashAcceleration.y = evt.accelerationIncludingGravity.y;
		jeash.display.Stage.jeashAcceleration.z = evt.accelerationIncludingGravity.z;
	}
	,jeashProcessStageEvent: function(evt) {
		evt.stopPropagation();
		switch(evt.type) {
		case "resize":
			this.jeashOnResize(jeash.Lib.jeashGetWidth(),jeash.Lib.jeashGetHeight());
			break;
		case "mousemove":
			this.jeashOnMouse(evt,jeash.events.MouseEvent.MOUSE_MOVE);
			break;
		case "mousedown":
			this.jeashOnMouse(evt,jeash.events.MouseEvent.MOUSE_DOWN);
			break;
		case "mouseup":
			this.jeashOnMouse(evt,jeash.events.MouseEvent.MOUSE_UP);
			break;
		case "click":
			this.jeashOnMouse(evt,jeash.events.MouseEvent.CLICK);
			break;
		case "mousewheel":
			this.jeashOnMouse(evt,jeash.events.MouseEvent.MOUSE_WHEEL);
			break;
		case "dblclick":
			this.jeashOnMouse(evt,jeash.events.MouseEvent.DOUBLE_CLICK);
			break;
		case "keydown":
			var evt1 = evt;
			var keyCode = evt1.keyIdentifier != null?(function($this) {
				var $r;
				try {
					$r = jeash.ui.Keyboard.jeashConvertWebkitCode(evt1.keyIdentifier);
				} catch( e ) {
					$r = evt1.keyCode;
				}
				return $r;
			}(this)):jeash.ui.Keyboard.jeashConvertMozillaCode(evt1.keyCode);
			this.jeashOnKey(keyCode,true,evt1.keyLocation,evt1.ctrlKey,evt1.altKey,evt1.shiftKey);
			break;
		case "keyup":
			var evt1 = evt;
			var keyCode = evt1.keyIdentifier != null?(function($this) {
				var $r;
				try {
					$r = jeash.ui.Keyboard.jeashConvertWebkitCode(evt1.keyIdentifier);
				} catch( e ) {
					$r = evt1.keyCode;
				}
				return $r;
			}(this)):jeash.ui.Keyboard.jeashConvertMozillaCode(evt1.keyCode);
			this.jeashOnKey(keyCode,false,evt1.keyLocation,evt1.ctrlKey,evt1.altKey,evt1.shiftKey);
			break;
		case "touchstart":
			var evt1 = evt;
			evt1.preventDefault();
			var touchInfo = new jeash.display._Stage.TouchInfo();
			this.jeashTouchInfo[evt1.changedTouches[0].identifier] = touchInfo;
			this.jeashOnTouch(evt1,evt1.changedTouches[0],jeash.events.TouchEvent.TOUCH_BEGIN,touchInfo,false);
			break;
		case "touchmove":
			var evt1 = evt;
			var touchInfo = this.jeashTouchInfo[evt1.changedTouches[0].identifier];
			this.jeashOnTouch(evt1,evt1.changedTouches[0],jeash.events.TouchEvent.TOUCH_MOVE,touchInfo,true);
			break;
		case "touchend":
			var evt1 = evt;
			var touchInfo = this.jeashTouchInfo[evt1.changedTouches[0].identifier];
			this.jeashOnTouch(evt1,evt1.changedTouches[0],jeash.events.TouchEvent.TOUCH_END,touchInfo,true);
			this.jeashTouchInfo[evt1.changedTouches[0].identifier] = null;
			break;
		case "devicemotion":
			var evt1 = evt;
			this.jeashHandleAccelerometer(evt1);
			break;
		case "orientationchange":
			this.jeashHandleOrientationChange();
			break;
		default:
		}
	}
	,jeashQueueStageEvent: function(evt) {
		this.jeashUIEventsQueue[this.jeashUIEventsQueueIndex++] = evt;
	}
	,jeashCheckInOuts: function(event,stack,touchInfo) {
		var prev = touchInfo == null?this.jeashMouseOverObjects:touchInfo.touchOverObjects;
		var events = touchInfo == null?jeash.display.Stage.jeashMouseChanges:jeash.display.Stage.jeashTouchChanges;
		var new_n = stack.length;
		var new_obj = new_n > 0?stack[new_n - 1]:null;
		var old_n = prev.length;
		var old_obj = old_n > 0?prev[old_n - 1]:null;
		if(new_obj != old_obj) {
			if(old_obj != null) old_obj.jeashFireEvent(event.jeashCreateSimilar(events[0],new_obj,old_obj));
			if(new_obj != null) new_obj.jeashFireEvent(event.jeashCreateSimilar(events[1],old_obj,new_obj));
			var common = 0;
			while(common < new_n && common < old_n && stack[common] == prev[common]) common++;
			var rollOut = event.jeashCreateSimilar(events[2],new_obj,old_obj);
			var i = old_n - 1;
			while(i >= common) {
				prev[i].dispatchEvent(rollOut);
				i--;
			}
			var rollOver = event.jeashCreateSimilar(events[3],old_obj);
			var i1 = new_n - 1;
			while(i1 >= common) {
				stack[i1].dispatchEvent(rollOver);
				i1--;
			}
			if(touchInfo == null) this.jeashMouseOverObjects = stack; else touchInfo.touchOverObjects = stack;
		}
	}
	,jeashCheckFocusInOuts: function(event,inStack) {
		var new_n = inStack.length;
		var new_obj = new_n > 0?inStack[new_n - 1]:null;
		var old_n = this.jeashFocusOverObjects.length;
		var old_obj = old_n > 0?this.jeashFocusOverObjects[old_n - 1]:null;
		if(new_obj != old_obj) {
			var common = 0;
			while(common < new_n && common < old_n && inStack[common] == this.jeashFocusOverObjects[common]) common++;
			var focusOut = new jeash.events.FocusEvent(jeash.events.FocusEvent.FOCUS_OUT,false,false,new_obj,false,0);
			var i = old_n - 1;
			while(i >= common) {
				this.jeashFocusOverObjects[i].dispatchEvent(focusOut);
				i--;
			}
			var focusIn = new jeash.events.FocusEvent(jeash.events.FocusEvent.FOCUS_IN,false,false,old_obj,false,0);
			var i1 = new_n - 1;
			while(i1 >= common) {
				inStack[i1].dispatchEvent(focusIn);
				i1--;
			}
			this.jeashFocusOverObjects = inStack;
			this.jeashSetFocus(new_obj);
		}
	}
	,jeashDrag: function(point) {
		var p = this.jeashDragObject.parent;
		if(p != null) point = p.globalToLocal(point);
		var x = point.x + this.jeashDragOffsetX;
		var y = point.y + this.jeashDragOffsetY;
		if(this.jeashDragBounds != null) {
			if(x < this.jeashDragBounds.x) x = this.jeashDragBounds.x; else if(x > this.jeashDragBounds.get_right()) x = this.jeashDragBounds.get_right();
			if(y < this.jeashDragBounds.y) y = this.jeashDragBounds.y; else if(y > this.jeashDragBounds.get_bottom()) y = this.jeashDragBounds.get_bottom();
		}
		this.jeashDragObject.jeashSetX(x);
		this.jeashDragObject.jeashSetY(y);
	}
	,jeashIsOnStage: function() {
		return true;
	}
	,getStage: function() {
		return jeash.Lib.jeashGetStage();
	}
	,toString: function() {
		return "[Stage id=" + this._jeashId + "]";
	}
	,jeashGetStageHeight: function() {
		return this.jeashWindowHeight;
	}
	,jeashGetStageWidth: function() {
		return this.jeashWindowWidth;
	}
	,__class__: jeash.display.Stage
});
if(!jeash.display._Stage) jeash.display._Stage = {}
jeash.display._Stage.TouchInfo = function() {
	this.touchOverObjects = [];
};
jeash.display._Stage.TouchInfo.__name__ = true;
jeash.display._Stage.TouchInfo.prototype = {
	__class__: jeash.display._Stage.TouchInfo
}
jeash.display.StageDisplayState = { __ename__ : true, __constructs__ : ["FULL_SCREEN","NORMAL"] }
jeash.display.StageDisplayState.FULL_SCREEN = ["FULL_SCREEN",0];
jeash.display.StageDisplayState.FULL_SCREEN.toString = $estr;
jeash.display.StageDisplayState.FULL_SCREEN.__enum__ = jeash.display.StageDisplayState;
jeash.display.StageDisplayState.NORMAL = ["NORMAL",1];
jeash.display.StageDisplayState.NORMAL.toString = $estr;
jeash.display.StageDisplayState.NORMAL.__enum__ = jeash.display.StageDisplayState;
jeash.display.StageQuality = function() { }
jeash.display.StageQuality.__name__ = true;
jeash.display.StageScaleMode = { __ename__ : true, __constructs__ : ["SHOW_ALL","NO_SCALE","NO_BORDER","EXACT_FIT"] }
jeash.display.StageScaleMode.SHOW_ALL = ["SHOW_ALL",0];
jeash.display.StageScaleMode.SHOW_ALL.toString = $estr;
jeash.display.StageScaleMode.SHOW_ALL.__enum__ = jeash.display.StageScaleMode;
jeash.display.StageScaleMode.NO_SCALE = ["NO_SCALE",1];
jeash.display.StageScaleMode.NO_SCALE.toString = $estr;
jeash.display.StageScaleMode.NO_SCALE.__enum__ = jeash.display.StageScaleMode;
jeash.display.StageScaleMode.NO_BORDER = ["NO_BORDER",2];
jeash.display.StageScaleMode.NO_BORDER.toString = $estr;
jeash.display.StageScaleMode.NO_BORDER.__enum__ = jeash.display.StageScaleMode;
jeash.display.StageScaleMode.EXACT_FIT = ["EXACT_FIT",3];
jeash.display.StageScaleMode.EXACT_FIT.toString = $estr;
jeash.display.StageScaleMode.EXACT_FIT.__enum__ = jeash.display.StageScaleMode;
jeash.events.Listener = function(inListener,inUseCapture,inPriority) {
	this.mListner = inListener;
	this.mUseCapture = inUseCapture;
	this.mPriority = inPriority;
	this.mID = jeash.events.Listener.sIDs++;
};
jeash.events.Listener.__name__ = true;
jeash.events.Listener.prototype = {
	dispatchEvent: function(event) {
		this.mListner(event);
	}
	,Is: function(inListener,inCapture) {
		return Reflect.compareMethods(this.mListner,inListener) && this.mUseCapture == inCapture;
	}
	,__class__: jeash.events.Listener
}
jeash.events.EventPhase = function() { }
jeash.events.EventPhase.__name__ = true;
jeash.events.FocusEvent = function(type,bubbles,cancelable,inObject,inShiftKey,inKeyCode) {
	jeash.events.Event.call(this,type,bubbles,cancelable);
	this.keyCode = inKeyCode;
	this.shiftKey = inShiftKey == null?false:inShiftKey;
	this.target = inObject;
};
jeash.events.FocusEvent.__name__ = true;
jeash.events.FocusEvent.__super__ = jeash.events.Event;
jeash.events.FocusEvent.prototype = $extend(jeash.events.Event.prototype,{
	__class__: jeash.events.FocusEvent
});
jeash.events.KeyboardEvent = function(type,bubbles,cancelable,inCharCode,inKeyCode,inKeyLocation,inCtrlKey,inAltKey,inShiftKey) {
	jeash.events.Event.call(this,type,bubbles,cancelable);
	this.keyCode = inKeyCode;
	this.keyLocation = inKeyLocation == null?0:inKeyLocation;
	this.charCode = inCharCode == null?0:inCharCode;
	this.shiftKey = inShiftKey == null?false:inShiftKey;
	this.altKey = inAltKey == null?false:inAltKey;
	this.ctrlKey = inCtrlKey == null?false:inCtrlKey;
};
jeash.events.KeyboardEvent.__name__ = true;
jeash.events.KeyboardEvent.__super__ = jeash.events.Event;
jeash.events.KeyboardEvent.prototype = $extend(jeash.events.Event.prototype,{
	__class__: jeash.events.KeyboardEvent
});
if(!jeash.filters) jeash.filters = {}
jeash.filters.BitmapFilter = function(inType) {
	this._mType = inType;
};
jeash.filters.BitmapFilter.__name__ = true;
jeash.filters.BitmapFilter.prototype = {
	jeashApplyFilter: function(surface,refreshCache) {
	}
	,clone: function() {
		throw "Implement in subclass. BitmapFilter::clone";
		return null;
	}
	,__class__: jeash.filters.BitmapFilter
}
jeash.filters.DropShadowFilter = function(in_distance,in_angle,in_color,in_alpha,in_blurX,in_blurY,in_strength,in_quality,in_inner,in_knockout,in_hideObject) {
	if(in_hideObject == null) in_hideObject = false;
	if(in_knockout == null) in_knockout = false;
	if(in_inner == null) in_inner = false;
	if(in_quality == null) in_quality = 1;
	if(in_strength == null) in_strength = 1.0;
	if(in_blurY == null) in_blurY = 4.0;
	if(in_blurX == null) in_blurX = 4.0;
	if(in_alpha == null) in_alpha = 1.0;
	if(in_color == null) in_color = 0;
	if(in_angle == null) in_angle = 45.0;
	if(in_distance == null) in_distance = 4.0;
	jeash.filters.BitmapFilter.call(this,"DropShadowFilter");
	this.distance = in_distance;
	this.angle = in_angle;
	this.color = in_color;
	this.alpha = in_alpha;
	this.blurX = in_blurX;
	this.blurY = in_blurX;
	this.strength = in_strength;
	this.quality = in_quality;
	this.inner = in_inner;
	this.knockout = in_knockout;
	this.hideObject = in_hideObject;
	this._jeashCached = false;
};
jeash.filters.DropShadowFilter.__name__ = true;
jeash.filters.DropShadowFilter.__super__ = jeash.filters.BitmapFilter;
jeash.filters.DropShadowFilter.prototype = $extend(jeash.filters.BitmapFilter.prototype,{
	jeashApplyFilter: function(surface,refreshCache) {
		if(!this._jeashCached || refreshCache) {
			var distanceX = this.distance * Math.sin(2 * Math.PI * this.angle / 360.0);
			var distanceY = this.distance * Math.cos(2 * Math.PI * this.angle / 360.0);
			var blurRadius = Math.max(this.blurX,this.blurY);
			var context = surface.getContext("2d");
			context.shadowOffsetX = distanceX;
			context.shadowOffsetY = distanceY;
			context.shadowBlur = blurRadius;
			context.shadowColor = "#" + StringTools.hex(this.color,6);
			this._jeashCached = true;
		}
	}
	,clone: function() {
		return new jeash.filters.DropShadowFilter(this.distance,this.angle,this.color,this.alpha,this.blurX,this.blurY,this.strength,this.quality,this.inner,this.knockout,this.hideObject);
	}
	,__class__: jeash.filters.DropShadowFilter
});
if(!jeash.geom) jeash.geom = {}
jeash.geom.ColorTransform = function(inRedMultiplier,inGreenMultiplier,inBlueMultiplier,inAlphaMultiplier,inRedOffset,inGreenOffset,inBlueOffset,inAlphaOffset) {
	this.redMultiplier = inRedMultiplier == null?1.0:inRedMultiplier;
	this.greenMultiplier = inGreenMultiplier == null?1.0:inGreenMultiplier;
	this.blueMultiplier = inBlueMultiplier == null?1.0:inBlueMultiplier;
	this.alphaMultiplier = inAlphaMultiplier == null?1.0:inAlphaMultiplier;
	this.redOffset = inRedOffset == null?0.0:inRedOffset;
	this.greenOffset = inGreenOffset == null?0.0:inGreenOffset;
	this.blueOffset = inBlueOffset == null?0.0:inBlueOffset;
	this.alphaOffset = inAlphaOffset == null?0.0:inAlphaOffset;
};
jeash.geom.ColorTransform.__name__ = true;
jeash.geom.ColorTransform.prototype = {
	jeashSetColor: function(value) {
		this.redOffset = value >> 16 & 255;
		this.greenOffset = value >> 8 & 255;
		this.blueOffset = value & 255;
		this.redMultiplier = 0;
		this.greenMultiplier = 0;
		this.blueMultiplier = 0;
		return this.jeashGetColor();
	}
	,jeashGetColor: function() {
		return (this.redOffset | 0) << 16 | (this.greenOffset | 0) << 8 | (this.blueOffset | 0);
	}
	,__class__: jeash.geom.ColorTransform
}
jeash.geom.Matrix = function(in_a,in_b,in_c,in_d,in_tx,in_ty) {
	this.a = in_a == null?1.0:in_a;
	this.b = in_b == null?0.0:in_b;
	this.c = in_c == null?0.0:in_c;
	this.d = in_d == null?1.0:in_d;
	this.setTx(in_tx == null?0.0:in_tx);
	this.setTy(in_ty == null?0.0:in_ty);
	this._sx = 1.0;
	this._sy = 1.0;
};
jeash.geom.Matrix.__name__ = true;
jeash.geom.Matrix.prototype = {
	to3DString: function() {
		var m = "matrix3d(";
		m += this.a;
		m += ", ";
		m += this.b;
		m += ", ";
		m += "0, 0, ";
		m += this.c;
		m += ", ";
		m += this.d;
		m += ", ";
		m += "0, 0, 0, 0, 1, 0, ";
		m += this.tx;
		m += ", ";
		m += this.ty;
		m += ", ";
		m += "0, 1";
		m += ")";
		return m;
	}
	,toString: function() {
		var m = "matrix(";
		m += this.a;
		m += ", ";
		m += this.b;
		m += ", ";
		m += this.c;
		m += ", ";
		m += this.d;
		m += ", ";
		m += this.tx;
		m += ", ";
		m += this.ty;
		m += ")";
		return m;
	}
	,toMozString: function() {
		var m = "matrix(";
		m += this.a;
		m += ", ";
		m += this.b;
		m += ", ";
		m += this.c;
		m += ", ";
		m += this.d;
		m += ", ";
		m += this.tx;
		m += "px, ";
		m += this.ty;
		m += "px)";
		return m;
	}
	,identity: function() {
		this.a = 1;
		this.b = 0;
		this.c = 0;
		this.d = 1;
		this.setTx(0);
		this.setTy(0);
		this._sx = 1.0;
		this._sy = 1.0;
	}
	,mult: function(m) {
		var result = this.clone();
		result.concat(m);
		return result;
	}
	,concat: function(m) {
		var a1 = this.a * m.a + this.b * m.c;
		this.b = this.a * m.b + this.b * m.d;
		this.a = a1;
		var c1 = this.c * m.a + this.d * m.c;
		this.d = this.c * m.b + this.d * m.d;
		this.c = c1;
		var tx1 = this.tx * m.a + this.ty * m.c + m.tx;
		this.setTy(this.tx * m.b + this.ty * m.d + m.ty);
		this.setTx(tx1);
		this._sx *= m._sx;
		this._sy *= m._sy;
		this.a = Math.round(this.a * 1000) / 1000;
		this.b = Math.round(this.b * 1000) / 1000;
		this.c = Math.round(this.c * 1000) / 1000;
		this.d = Math.round(this.d * 1000) / 1000;
		this.setTx(Math.round(this.tx * 10) / 10);
		this.setTy(Math.round(this.ty * 10) / 10);
	}
	,scale: function(inSX,inSY) {
		this._sx = inSX;
		this._sy = inSY;
		this.a *= inSX;
		this.b *= inSY;
		this.c *= inSX;
		this.d *= inSY;
		var _g = this;
		_g.setTx(_g.tx * inSX);
		var _g = this;
		_g.setTy(_g.ty * inSY);
		this.a = Math.round(this.a * 1000) / 1000;
		this.b = Math.round(this.b * 1000) / 1000;
		this.c = Math.round(this.c * 1000) / 1000;
		this.d = Math.round(this.d * 1000) / 1000;
		this.setTx(Math.round(this.tx * 10) / 10);
		this.setTy(Math.round(this.ty * 10) / 10);
	}
	,rotate: function(inTheta) {
		var cos = Math.cos(inTheta);
		var sin = Math.sin(inTheta);
		var a1 = this.a * cos - this.b * sin;
		this.b = this.a * sin + this.b * cos;
		this.a = a1;
		var c1 = this.c * cos - this.d * sin;
		this.d = this.c * sin + this.d * cos;
		this.c = c1;
		var tx1 = this.tx * cos - this.ty * sin;
		this.setTy(this.tx * sin + this.ty * cos);
		this.setTx(tx1);
		this.a = Math.round(this.a * 1000) / 1000;
		this.b = Math.round(this.b * 1000) / 1000;
		this.c = Math.round(this.c * 1000) / 1000;
		this.d = Math.round(this.d * 1000) / 1000;
		this.setTx(Math.round(this.tx * 10) / 10);
		this.setTy(Math.round(this.ty * 10) / 10);
	}
	,setTy: function(inValue) {
		this.ty = inValue;
		return this.ty;
	}
	,setTx: function(inValue) {
		this.tx = inValue;
		return this.tx;
	}
	,translate: function(inDX,inDY) {
		var m = new jeash.geom.Matrix();
		m.setTx(inDX);
		m.setTy(inDY);
		this.concat(m);
	}
	,jeashTranslateTransformed: function(inPos) {
		this.setTx(inPos.x * this.a + inPos.y * this.c + this.tx);
		this.setTy(inPos.x * this.b + inPos.y * this.d + this.ty);
		this.a = Math.round(this.a * 1000) / 1000;
		this.b = Math.round(this.b * 1000) / 1000;
		this.c = Math.round(this.c * 1000) / 1000;
		this.d = Math.round(this.d * 1000) / 1000;
		this.setTx(Math.round(this.tx * 10) / 10);
		this.setTy(Math.round(this.ty * 10) / 10);
	}
	,transformPoint: function(inPos) {
		return new jeash.geom.Point(inPos.x * this.a + inPos.y * this.c + this.tx,inPos.x * this.b + inPos.y * this.d + this.ty);
	}
	,invert: function() {
		var norm = this.a * this.d - this.b * this.c;
		if(norm == 0) {
			this.a = this.b = this.c = this.d = 0;
			this.setTx(-this.tx);
			this.setTy(-this.ty);
		} else {
			norm = 1.0 / norm;
			var a1 = this.d * norm;
			this.d = this.a * norm;
			this.a = a1;
			this.b *= -norm;
			this.c *= -norm;
			var tx1 = -this.a * this.tx - this.c * this.ty;
			this.setTy(-this.b * this.tx - this.d * this.ty);
			this.setTx(tx1);
		}
		this._sx /= this._sx;
		this._sy /= this._sy;
		this.a = Math.round(this.a * 1000) / 1000;
		this.b = Math.round(this.b * 1000) / 1000;
		this.c = Math.round(this.c * 1000) / 1000;
		this.d = Math.round(this.d * 1000) / 1000;
		this.setTx(Math.round(this.tx * 10) / 10);
		this.setTy(Math.round(this.ty * 10) / 10);
		return this;
	}
	,copy: function(m) {
		this.a = m.a;
		this.b = m.b;
		this.c = m.c;
		this.d = m.d;
		this.setTx(m.tx);
		this.setTy(m.ty);
		this._sx = m._sx;
		this._sy = m._sy;
	}
	,clone: function() {
		var m = new jeash.geom.Matrix(this.a,this.b,this.c,this.d,this.tx,this.ty);
		m._sx = this._sx;
		m._sy = this._sy;
		return m;
	}
	,__class__: jeash.geom.Matrix
}
jeash.geom.Point = function(inX,inY) {
	this.x = inX == null?0.0:inX;
	this.y = inY == null?0.0:inY;
};
jeash.geom.Point.__name__ = true;
jeash.geom.Point.prototype = {
	get_length: function() {
		return Math.sqrt(this.x * this.x + this.y * this.y);
	}
	,clone: function() {
		return new jeash.geom.Point(this.x,this.y);
	}
	,__class__: jeash.geom.Point
}
jeash.geom.Rectangle = function(inX,inY,inWidth,inHeight) {
	if(inHeight == null) inHeight = 0.;
	if(inWidth == null) inWidth = 0.;
	if(inY == null) inY = 0.;
	if(inX == null) inX = 0.;
	this.x = inX;
	this.y = inY;
	this.width = inWidth;
	this.height = inHeight;
};
jeash.geom.Rectangle.__name__ = true;
jeash.geom.Rectangle.prototype = {
	extendBounds: function(r) {
		var dx = this.x - r.x;
		if(dx > 0) {
			this.x -= dx;
			this.width += dx;
		}
		var dy = this.y - r.y;
		if(dy > 0) {
			this.y -= dy;
			this.height += dy;
		}
		if(r.get_right() > this.get_right()) this.set_right(r.get_right());
		if(r.get_bottom() > this.get_bottom()) this.set_bottom(r.get_bottom());
	}
	,transform: function(m) {
		var tx0 = m.a * this.x + m.c * this.y;
		var tx1 = tx0;
		var ty0 = m.b * this.x + m.d * this.y;
		var ty1 = tx0;
		var tx = m.a * (this.x + this.width) + m.c * this.y;
		var ty = m.b * (this.x + this.width) + m.d * this.y;
		if(tx < tx0) tx0 = tx;
		if(ty < ty0) ty0 = ty;
		if(tx > tx1) tx1 = tx;
		if(ty > ty1) ty1 = ty;
		tx = m.a * (this.x + this.width) + m.c * (this.y + this.height);
		ty = m.b * (this.x + this.width) + m.d * (this.y + this.height);
		if(tx < tx0) tx0 = tx;
		if(ty < ty0) ty0 = ty;
		if(tx > tx1) tx1 = tx;
		if(ty > ty1) ty1 = ty;
		tx = m.a * this.x + m.c * (this.y + this.height);
		ty = m.b * this.x + m.d * (this.y + this.height);
		if(tx < tx0) tx0 = tx;
		if(ty < ty0) ty0 = ty;
		if(tx > tx1) tx1 = tx;
		if(ty > ty1) ty1 = ty;
		return new jeash.geom.Rectangle(tx0 + m.tx,ty0 + m.ty,tx1 - tx0,ty1 - ty0);
	}
	,clone: function() {
		return new jeash.geom.Rectangle(this.x,this.y,this.width,this.height);
	}
	,set_bottomRight: function(p) {
		this.width = p.x - this.x;
		this.height = p.y - this.y;
		return p.clone();
	}
	,get_bottomRight: function() {
		return new jeash.geom.Point(this.x + this.width,this.y + this.height);
	}
	,set_size: function(p) {
		this.width = p.x;
		this.height = p.y;
		return p.clone();
	}
	,get_size: function() {
		return new jeash.geom.Point(this.width,this.height);
	}
	,set_topLeft: function(p) {
		this.x = p.x;
		this.y = p.y;
		return p.clone();
	}
	,get_topLeft: function() {
		return new jeash.geom.Point(this.x,this.y);
	}
	,set_bottom: function(b) {
		this.height = b - this.y;
		return b;
	}
	,get_bottom: function() {
		return this.y + this.height;
	}
	,set_top: function(t) {
		this.height -= t - this.y;
		this.y = t;
		return t;
	}
	,get_top: function() {
		return this.y;
	}
	,set_right: function(r) {
		this.width = r - this.x;
		return r;
	}
	,get_right: function() {
		return this.x + this.width;
	}
	,set_left: function(l) {
		this.width -= l - this.x;
		this.x = l;
		return l;
	}
	,get_left: function() {
		return this.x;
	}
	,__class__: jeash.geom.Rectangle
}
jeash.geom.Transform = function(displayObject) {
	if(displayObject == null) throw "Cannot create Transform with no DisplayObject.";
	this._displayObject = displayObject;
	this._matrix = new jeash.geom.Matrix();
	this._fullMatrix = new jeash.geom.Matrix();
	this.setColorTransform(new jeash.geom.ColorTransform());
};
jeash.geom.Transform.__name__ = true;
jeash.geom.Transform.prototype = {
	getPixelBounds: function() {
		return this._displayObject.getBounds(null);
	}
	,setColorTransform: function(inValue) {
		this.colorTransform = inValue;
		return inValue;
	}
	,jeashSetFullMatrix: function(inValue) {
		this._fullMatrix.copy(inValue);
		return this._fullMatrix;
	}
	,jeashGetFullMatrix: function(localMatrix) {
		var m;
		if(localMatrix != null) m = localMatrix.mult(this._fullMatrix); else m = this._fullMatrix.clone();
		return m;
	}
	,setMatrix: function(inValue) {
		this._matrix.copy(inValue);
		this._displayObject.jeashMatrixOverridden();
		return this._matrix;
	}
	,getMatrix: function() {
		return this._matrix.clone();
	}
	,__class__: jeash.geom.Transform
}
if(!jeash.ui) jeash.ui = {}
jeash.ui.Keyboard = function() { }
jeash.ui.Keyboard.__name__ = true;
jeash.ui.Keyboard.jeashConvertWebkitCode = function(code) {
	switch(code.toLowerCase()) {
	case "backspace":
		return jeash.ui.Keyboard.BACKSPACE;
	case "tab":
		return jeash.ui.Keyboard.TAB;
	case "enter":
		return jeash.ui.Keyboard.ENTER;
	case "shift":
		return jeash.ui.Keyboard.SHIFT;
	case "control":
		return jeash.ui.Keyboard.CONTROL;
	case "capslock":
		return jeash.ui.Keyboard.CAPS_LOCK;
	case "escape":
		return jeash.ui.Keyboard.ESCAPE;
	case "space":
		return jeash.ui.Keyboard.SPACE;
	case "pageup":
		return jeash.ui.Keyboard.PAGE_UP;
	case "pagedown":
		return jeash.ui.Keyboard.PAGE_DOWN;
	case "end":
		return jeash.ui.Keyboard.END;
	case "home":
		return jeash.ui.Keyboard.HOME;
	case "left":
		return jeash.ui.Keyboard.LEFT;
	case "right":
		return jeash.ui.Keyboard.RIGHT;
	case "up":
		return jeash.ui.Keyboard.UP;
	case "down":
		return jeash.ui.Keyboard.DOWN;
	case "insert":
		return jeash.ui.Keyboard.INSERT;
	case "delete":
		return jeash.ui.Keyboard.DELETE;
	case "numlock":
		return jeash.ui.Keyboard.NUMLOCK;
	case "break":
		return jeash.ui.Keyboard.BREAK;
	}
	if(code.indexOf("U+") == 0) return Std.parseInt("0x" + HxOverrides.substr(code,3,null));
	throw "Unrecognised key code: " + code;
	return 0;
}
jeash.ui.Keyboard.jeashConvertMozillaCode = function(code) {
	switch(code) {
	case jeash.ui.Keyboard.DOM_VK_BACK_SPACE:
		return jeash.ui.Keyboard.BACKSPACE;
	case jeash.ui.Keyboard.DOM_VK_TAB:
		return jeash.ui.Keyboard.TAB;
	case jeash.ui.Keyboard.DOM_VK_RETURN:
		return jeash.ui.Keyboard.ENTER;
	case jeash.ui.Keyboard.DOM_VK_ENTER:
		return jeash.ui.Keyboard.ENTER;
	case jeash.ui.Keyboard.DOM_VK_SHIFT:
		return jeash.ui.Keyboard.SHIFT;
	case jeash.ui.Keyboard.DOM_VK_CONTROL:
		return jeash.ui.Keyboard.CONTROL;
	case jeash.ui.Keyboard.DOM_VK_CAPS_LOCK:
		return jeash.ui.Keyboard.CAPS_LOCK;
	case jeash.ui.Keyboard.DOM_VK_ESCAPE:
		return jeash.ui.Keyboard.ESCAPE;
	case jeash.ui.Keyboard.DOM_VK_SPACE:
		return jeash.ui.Keyboard.SPACE;
	case jeash.ui.Keyboard.DOM_VK_PAGE_UP:
		return jeash.ui.Keyboard.PAGE_UP;
	case jeash.ui.Keyboard.DOM_VK_PAGE_DOWN:
		return jeash.ui.Keyboard.PAGE_DOWN;
	case jeash.ui.Keyboard.DOM_VK_END:
		return jeash.ui.Keyboard.END;
	case jeash.ui.Keyboard.DOM_VK_HOME:
		return jeash.ui.Keyboard.HOME;
	case jeash.ui.Keyboard.DOM_VK_LEFT:
		return jeash.ui.Keyboard.LEFT;
	case jeash.ui.Keyboard.DOM_VK_RIGHT:
		return jeash.ui.Keyboard.RIGHT;
	case jeash.ui.Keyboard.DOM_VK_UP:
		return jeash.ui.Keyboard.UP;
	case jeash.ui.Keyboard.DOM_VK_DOWN:
		return jeash.ui.Keyboard.DOWN;
	case jeash.ui.Keyboard.DOM_VK_INSERT:
		return jeash.ui.Keyboard.INSERT;
	case jeash.ui.Keyboard.DOM_VK_DELETE:
		return jeash.ui.Keyboard.DELETE;
	case jeash.ui.Keyboard.DOM_VK_NUM_LOCK:
		return jeash.ui.Keyboard.NUMLOCK;
	default:
		return code;
	}
}
if(!jeash.utils) jeash.utils = {}
jeash.utils.ByteArray = function() { }
jeash.utils.ByteArray.__name__ = true;
jeash.utils.ByteArray.prototype = {
	jeashSetEndian: function(endian) {
		this.littleEndian = endian == "littleEndian";
		return endian;
	}
	,jeashGetEndian: function() {
		return this.littleEndian == true?"littleEndian":"bigEndian";
	}
	,jeashGetBytesAvailable: function() {
		return this.length - this.position;
	}
	,__class__: jeash.utils.ByteArray
}
jeash.utils.Endian = function() { }
jeash.utils.Endian.__name__ = true;
jeash.utils.Uuid = function() { }
jeash.utils.Uuid.__name__ = true;
jeash.utils.Uuid.random = function(size) {
	if(size == null) size = 32;
	var nchars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ".length;
	var uid = new StringBuf();
	var _g = 0;
	while(_g < size) {
		var i = _g++;
		uid.b += Std.string("0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ".charAt(Math.random() * nchars | 0));
	}
	return uid.b;
}
jeash.utils.Uuid.uuid = function() {
	return jeash.utils.Uuid.random(8) + "-" + jeash.utils.Uuid.random(4) + "-" + jeash.utils.Uuid.random(4) + "-" + jeash.utils.Uuid.random(4) + "-" + jeash.utils.Uuid.random(12);
}
var js = js || {}
js.Boot = function() { }
js.Boot.__name__ = true;
js.Boot.__string_rec = function(o,s) {
	if(o == null) return "null";
	if(s.length >= 5) return "<...>";
	var t = typeof(o);
	if(t == "function" && (o.__name__ || o.__ename__)) t = "object";
	switch(t) {
	case "object":
		if(o instanceof Array) {
			if(o.__enum__) {
				if(o.length == 2) return o[0];
				var str = o[0] + "(";
				s += "\t";
				var _g1 = 2, _g = o.length;
				while(_g1 < _g) {
					var i = _g1++;
					if(i != 2) str += "," + js.Boot.__string_rec(o[i],s); else str += js.Boot.__string_rec(o[i],s);
				}
				return str + ")";
			}
			var l = o.length;
			var i;
			var str = "[";
			s += "\t";
			var _g = 0;
			while(_g < l) {
				var i1 = _g++;
				str += (i1 > 0?",":"") + js.Boot.__string_rec(o[i1],s);
			}
			str += "]";
			return str;
		}
		var tostr;
		try {
			tostr = o.toString;
		} catch( e ) {
			return "???";
		}
		if(tostr != null && tostr != Object.toString) {
			var s2 = o.toString();
			if(s2 != "[object Object]") return s2;
		}
		var k = null;
		var str = "{\n";
		s += "\t";
		var hasp = o.hasOwnProperty != null;
		for( var k in o ) { ;
		if(hasp && !o.hasOwnProperty(k)) {
			continue;
		}
		if(k == "prototype" || k == "__class__" || k == "__super__" || k == "__interfaces__" || k == "__properties__") {
			continue;
		}
		if(str.length != 2) str += ", \n";
		str += s + k + " : " + js.Boot.__string_rec(o[k],s);
		}
		s = s.substring(1);
		str += "\n" + s + "}";
		return str;
	case "function":
		return "<function>";
	case "string":
		return o;
	default:
		return String(o);
	}
}
js.Boot.__interfLoop = function(cc,cl) {
	if(cc == null) return false;
	if(cc == cl) return true;
	var intf = cc.__interfaces__;
	if(intf != null) {
		var _g1 = 0, _g = intf.length;
		while(_g1 < _g) {
			var i = _g1++;
			var i1 = intf[i];
			if(i1 == cl || js.Boot.__interfLoop(i1,cl)) return true;
		}
	}
	return js.Boot.__interfLoop(cc.__super__,cl);
}
js.Boot.__instanceof = function(o,cl) {
	try {
		if(o instanceof cl) {
			if(cl == Array) return o.__enum__ == null;
			return true;
		}
		if(js.Boot.__interfLoop(o.__class__,cl)) return true;
	} catch( e ) {
		if(cl == null) return false;
	}
	switch(cl) {
	case Int:
		return Math.ceil(o%2147483648.0) === o;
	case Float:
		return typeof(o) == "number";
	case Bool:
		return o === true || o === false;
	case String:
		return typeof(o) == "string";
	case Dynamic:
		return true;
	default:
		if(o == null) return false;
		if(cl == Class && o.__name__ != null) return true; else null;
		if(cl == Enum && o.__ename__ != null) return true; else null;
		return o.__enum__ == cl;
	}
}
js.Boot.__cast = function(o,t) {
	if(js.Boot.__instanceof(o,t)) return o; else throw "Cannot cast " + Std.string(o) + " to " + Std.string(t);
}
js.Lib = function() { }
js.Lib.__name__ = true;
var $_;
function $bind(o,m) { var f = function(){ return f.method.apply(f.scope, arguments); }; f.scope = o; f.method = m; return f; };
if(Array.prototype.indexOf) HxOverrides.remove = function(a,o) {
	var i = a.indexOf(o);
	if(i == -1) return false;
	a.splice(i,1);
	return true;
}; else null;
Math.__name__ = ["Math"];
Math.NaN = Number.NaN;
Math.NEGATIVE_INFINITY = Number.NEGATIVE_INFINITY;
Math.POSITIVE_INFINITY = Number.POSITIVE_INFINITY;
Math.isFinite = function(i) {
	return isFinite(i);
};
Math.isNaN = function(i) {
	return isNaN(i);
};
String.prototype.__class__ = String;
String.__name__ = true;
Array.prototype.__class__ = Array;
Array.__name__ = true;
Date.prototype.__class__ = Date;
Date.__name__ = ["Date"];
var Int = { __name__ : ["Int"]};
var Dynamic = { __name__ : ["Dynamic"]};
var Float = Number;
Float.__name__ = ["Float"];
var Bool = Boolean;
Bool.__ename__ = ["Bool"];
var Class = { __name__ : ["Class"]};
var Enum = { };
Xml.Element = "element";
Xml.PCData = "pcdata";
Xml.CData = "cdata";
Xml.Comment = "comment";
Xml.DocType = "doctype";
Xml.Prolog = "prolog";
Xml.Document = "document";
if(typeof document != "undefined") js.Lib.document = document;
if(typeof window != "undefined") {
	js.Lib.window = window;
	js.Lib.window.onerror = function(msg,url,line) {
		var f = js.Lib.onerror;
		if(f == null) return false;
		return f(msg,[url + ":" + line]);
	};
}
jeash.Lib.HTML_DIV_EVENT_TYPES = ["resize","mouseup","mouseover","mouseout","mousemove","mousedown","mousewheel","dblclick","click"];
jeash.Lib.HTML_WINDOW_EVENT_TYPES = ["keyup","keypress","keydown","resize"];
jeash.Lib.HTML_TOUCH_EVENT_TYPES = ["touchstart","touchmove","touchend"];
jeash.events.Event.ACTIVATE = "activate";
jeash.events.Event.ADDED = "added";
jeash.events.Event.ADDED_TO_STAGE = "addedToStage";
jeash.events.Event.ENTER_FRAME = "enterFrame";
jeash.events.Event.REMOVED = "removed";
jeash.events.Event.REMOVED_FROM_STAGE = "removedFromStage";
jeash.events.Event.RENDER = "render";
jeash.events.Event.RESIZE = "resize";
jeash.events.MouseEvent.CLICK = "click";
jeash.events.MouseEvent.DOUBLE_CLICK = "doubleClick";
jeash.events.MouseEvent.MOUSE_DOWN = "mouseDown";
jeash.events.MouseEvent.MOUSE_MOVE = "mouseMove";
jeash.events.MouseEvent.MOUSE_OUT = "mouseOut";
jeash.events.MouseEvent.MOUSE_OVER = "mouseOver";
jeash.events.MouseEvent.MOUSE_UP = "mouseUp";
jeash.events.MouseEvent.MOUSE_WHEEL = "mouseWheel";
jeash.events.MouseEvent.ROLL_OUT = "rollOut";
jeash.events.MouseEvent.ROLL_OVER = "rollOver";
jeash.events.TouchEvent.TOUCH_BEGIN = "touchBegin";
jeash.events.TouchEvent.TOUCH_END = "touchEnd";
jeash.events.TouchEvent.TOUCH_MOVE = "touchMove";
jeash.events.TouchEvent.TOUCH_OUT = "touchOut";
jeash.events.TouchEvent.TOUCH_OVER = "touchOver";
jeash.events.TouchEvent.TOUCH_ROLL_OUT = "touchRollOut";
jeash.events.TouchEvent.TOUCH_ROLL_OVER = "touchRollOver";
jeash.display.Stage.jeashAcceleration = { x : 0.0, y : 1.0, z : 0.0};
jeash.display.Stage.jeashMouseChanges = [jeash.events.MouseEvent.MOUSE_OUT,jeash.events.MouseEvent.MOUSE_OVER,jeash.events.MouseEvent.ROLL_OUT,jeash.events.MouseEvent.ROLL_OVER];
jeash.display.Stage.jeashTouchChanges = [jeash.events.TouchEvent.TOUCH_OUT,jeash.events.TouchEvent.TOUCH_OVER,jeash.events.TouchEvent.TOUCH_ROLL_OUT,jeash.events.TouchEvent.TOUCH_ROLL_OVER];
jeash.display.StageQuality.BEST = "best";
jeash.events.Listener.sIDs = 1;
jeash.events.EventPhase.CAPTURING_PHASE = 0;
jeash.events.EventPhase.AT_TARGET = 1;
jeash.events.EventPhase.BUBBLING_PHASE = 2;
jeash.events.FocusEvent.FOCUS_IN = "FOCUS_IN";
jeash.events.FocusEvent.FOCUS_OUT = "FOCUS_OUT";
jeash.events.KeyboardEvent.KEY_DOWN = "KEY_DOWN";
jeash.events.KeyboardEvent.KEY_UP = "KEY_UP";
jeash.ui.Keyboard.BACKSPACE = 8;
jeash.ui.Keyboard.TAB = 9;
jeash.ui.Keyboard.ENTER = 13;
jeash.ui.Keyboard.SHIFT = 16;
jeash.ui.Keyboard.CONTROL = 17;
jeash.ui.Keyboard.CAPS_LOCK = 18;
jeash.ui.Keyboard.ESCAPE = 27;
jeash.ui.Keyboard.SPACE = 32;
jeash.ui.Keyboard.PAGE_UP = 33;
jeash.ui.Keyboard.PAGE_DOWN = 34;
jeash.ui.Keyboard.END = 35;
jeash.ui.Keyboard.HOME = 36;
jeash.ui.Keyboard.LEFT = 37;
jeash.ui.Keyboard.RIGHT = 39;
jeash.ui.Keyboard.UP = 38;
jeash.ui.Keyboard.DOWN = 40;
jeash.ui.Keyboard.INSERT = 45;
jeash.ui.Keyboard.DELETE = 46;
jeash.ui.Keyboard.NUMLOCK = 144;
jeash.ui.Keyboard.BREAK = 19;
jeash.ui.Keyboard.DOM_VK_BACK_SPACE = 8;
jeash.ui.Keyboard.DOM_VK_TAB = 9;
jeash.ui.Keyboard.DOM_VK_RETURN = 13;
jeash.ui.Keyboard.DOM_VK_ENTER = 14;
jeash.ui.Keyboard.DOM_VK_SHIFT = 16;
jeash.ui.Keyboard.DOM_VK_CONTROL = 17;
jeash.ui.Keyboard.DOM_VK_CAPS_LOCK = 20;
jeash.ui.Keyboard.DOM_VK_ESCAPE = 27;
jeash.ui.Keyboard.DOM_VK_SPACE = 32;
jeash.ui.Keyboard.DOM_VK_PAGE_UP = 33;
jeash.ui.Keyboard.DOM_VK_PAGE_DOWN = 34;
jeash.ui.Keyboard.DOM_VK_END = 35;
jeash.ui.Keyboard.DOM_VK_HOME = 36;
jeash.ui.Keyboard.DOM_VK_LEFT = 37;
jeash.ui.Keyboard.DOM_VK_UP = 38;
jeash.ui.Keyboard.DOM_VK_RIGHT = 39;
jeash.ui.Keyboard.DOM_VK_DOWN = 40;
jeash.ui.Keyboard.DOM_VK_INSERT = 45;
jeash.ui.Keyboard.DOM_VK_DELETE = 46;
jeash.ui.Keyboard.DOM_VK_NUM_LOCK = 144;
MouseRollOver.main();
