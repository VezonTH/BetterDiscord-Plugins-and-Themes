//META{"name":"clockPlugin"}*//

//Original clock code from http://cssdeck.com/labs/minimal-css3-digital-clock

var clockPlugin = function () {};

clockPlugin.prototype.start = function () {
	BdApi.clearCSS("clockPluginCss");
	BdApi.injectCSS("clockPluginCss", '#clockPluginClock { position:absolute; color:#FFF; background:#333333; padding:0 12px 0 10px; min-width:70px; }');
	var self = this;
	this.clock = $("<div/>", { id: "clockPluginClock" });
	$("body").append(this.clock);

	this.pad = function(x) {
		return x < 10 ? '0'+x : x;
	};

	this.ticktock = function() {
		var d = new Date();
		var h = self.pad(d.getHours());
		var m = self.pad(d.getMinutes());
		var s = self.pad(d.getSeconds());
		var current_time = [h,m,s].join(':');
		self.clock.html(current_time);
	};
	this.ticktock();
	this.interval = setInterval(this.ticktock, 1000);
};

clockPlugin.prototype.load = function () {

};

clockPlugin.prototype.unload = function () {}
;

clockPlugin.prototype.stop = function () {
	BdApi.clearCSS("clockPluginCss");
	clearInterval(this.interval);
	this.clock.remove();
};

clockPlugin.prototype.onMessage = function () {

};

clockPlugin.prototype.onSwitch = function () {

};

clockPlugin.prototype.observer = function (e) {

};

clockPlugin.prototype.getSettingsPanel = function () {
    return "";
};

clockPlugin.prototype.getName = function () {
    return "Clock Plugin";
};

clockPlugin.prototype.getDescription = function () {
    return "Adds a clock to Discord";
};

clockPlugin.prototype.getVersion = function () {
    return "0.1.0";
};

clockPlugin.prototype.getAuthor = function () {
    return "Jiiks";
};
try{exports.clockPlugin = clockPlugin;}catch(e){console.warn('Using old version, not exporting functions.');}