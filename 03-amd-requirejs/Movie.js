define(["Director.js"],function(_){
	{
		/*
			Clase Movie, usada para definir objetos "movie"
		*/

		var name;
		var dur;
		var actors = [];
		Social.call(this);

		this.set = function(n,d,a){
			//	Metodo usado para establecer los atributos de un objeto del tipo "Movie"
			this.name = n || "NoName";
			this.dur = d || 0;
			this.actors = a || [];
		}

		this.getName = function(){
			// Metodo usado para obtener el nombre de un objeto del tipo "Movie"
			return this.name;
		}
		this.setName = function(n){
			// Metodo usado para modificar el nombre de una pelicula
			this.name = n || "NoTitle";
			return "New name: " + this.name;
		}

		this.setDur = function(d){
			// Metodo usado para modificar la duracion de una pelicula
			this.dur = d || 0;
			return "New duration: " + this.dur;
		}
		this.getDur = function(){
			// Metodo usado para obtener la duracion de un objeto del tipo "Movie"
			return this.dur;
		}

		this.play = function(){
			// Metodo para reproducir una pelicula
			observer.playing(this.name);
		}

		this.stop = function(){
			// Metodo para detener una pelicula
			observer.stopped(this.name);
		}

		this.addactor=function(actor){
			// metodo usado para agregar un actor a una pelicula
			this.actors.push(actor);
		    return this;
		}
		return this.name;
	}
});
