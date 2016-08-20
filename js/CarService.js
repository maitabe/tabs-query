

  function CarService() {
    	// data
    	this.cars = undefined;

    	// methods

      // fetch all cars data from server rest api
    	this.getCars = function(callback) {
    		var that = this;
    		$.get('http://localhost:3000/db',function(carsDataFromServer, status) {
    			//if(status !== 200) return;
    			that.cars = carsDataFromServer;
    			callback();
  		  });
    	};

      // fetch from cars data only available models
    	this.getModels = function(valueOption){
        var carsListValue = this.cars[valueOption];
    		var availableModels = [];

    		for (var i = 0; i < carsListValue.length; i++) {
          //get the cars that have availability equal true
    			 if(carsListValue[i].available){
    			 	availableModels.push(carsListValue[i]);
    			 }
    		}
    		return availableModels;
  	  };
  }

