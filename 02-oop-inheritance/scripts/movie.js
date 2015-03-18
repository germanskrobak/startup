Movie = function(){
	var title;
	var director;
	var duration;


	this.set = function(t,du,di){
		this.title=t;
		this.duration=du;
		this.director=di;
	}

	this.get = function(){
		return " * Title: " + this.title + 
		", Director: " + this.director + 
		", Duration: " + this.duration;
	}

	this.play = function(){
		MO.playing(this.title);
	}
	this.stop = function(){
		MO.stopping(this.title);
	}

}

var MovieModule = ( function( window, undefined ) {
  Movie = function(){
	var title;
	var director;
	var duration;


	this.set = function(t,du,di){
		this.title=t;
		this.duration=du;
		this.director=di;
	}

	this.get = function(){
		return " * Title: " + this.title + 
		", Director: " + this.director + 
		", Duration: " + this.duration;
	}

	this.play = function(){
		MO.playing(this.title);
	}
	this.stop = function(){
		MO.stopping(this.title);
	}

}
  
} )( window );