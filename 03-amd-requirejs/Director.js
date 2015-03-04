define([],function(){
	{
		var name;
		var age;

		this.set = function(name, age){
			this.name = name || "NoName";
			this.age = age || 0;
			return this.name + ", " + this.age;
		}

		this.get = function(){
			return this.name + ", " + this.age;	
		}
		return this.get;
	}
});
