

  function CarService() {
  	// data
  	this.cars = undefined;

  	//methods
  	this.getCars = function(callback) {
  		var that = this;
  		$.get('http://localhost:3000/db',function(carsDataFromServer, status) {
			//if(status !== 200) return;
			that.cars = carsDataFromServer;
			callback();

		});
  	};
  	this.getModels = function(valueOption){
  		var availableModels = [];

  		for (var i = 0; i < this.cars[valueOption].length; i++) {
  			 if(this.cars[valueOption][i].available){
  			 	availableModels.push(this.cars[valueOption][i]);
  			 }
  		}
  		return availableModels;
	};
  }

