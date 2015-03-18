MovieObserver = function(){
	this.playing = function(title){
		console.log("Playing " + title);
	}
	this.stopped = function(title){
		console.log("Stopping " + title);
	}
}