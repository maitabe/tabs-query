var cars;

//ex1
function copyMe(input) {

	var output;

	output = input;

	return output + ' Cooolllll!';
}

//ex2
function poweroftwo(input) {
	// declare the variable
		var output;
		//initialize the variable
		output = [];

		for (var i = 0; i<input.length; i++) {
			console.log(i);
			output[i] = input[i] * input[i];
			// output.push(input[i] * input[i]);
		}
		return output;
}

//ex3
function findhypo(input){
	var output;

	var sideA = input.a * input.a;
	var sideB = input.b * input.b;

	var sideC = Math.sqrt(sideA + sideB);

	output = Math.round(sideC);
	return output;
}
//ex4
function hideForm(){
	$('#modelList').hide();
	$('#carTransmission').hide();
	$('#imageCar').attr('src', '' );
	$('#transmText').hide();
	$('#featureText').hide();
	$('#carFeatures').hide();
	$('button').hide();
	$('#calendar').hide();
	$('#totalDays').hide();
	//the 2 lines below are nested in the button element
	// ($('#buyMe').hide();
	// $('#rentMe').hide();)

};

function getCarManufModels(){
	var valueOption = $('#carsList :selected').attr('value');
 	return cars[valueOption];
};

function selectAllItems() {

		//select all checkbox features
  	$('#selectAll').on('click', function() {
  		if(this.checked){
  			$('input[type="checkbox"]').each(function() {
  				this.checked = true;
  			});
  		}else{
  			$('input[type="checkbox"]').each(function() {
  				this.checked = false;
  			});
  		}
  	});

  	$('input[type="checkbox"]').on('click', function() {
  		if($('input[type="checkbox"]:checked').length == $('input[type="checkbox"]').length) {
  			$('#selectAll').prop('checked', true);
  		}else{
  			$('#selectAll').prop('checked', false);
  		}
  	});
};

	//
	function getCarsData(callback) {
		$.get('http://localhost:3000/db',function(carsDataFromServer, status) {
			console.log(carsDataFromServer);
			//if(status !== 200) return;
			callback(carsDataFromServer);
		});
	 }


	// a sync function , return users list
	function getUsers(callback) {
		var root = 'http://jsonplaceholder.typicode.com';
		$.get(root + '/users',function(dataFromServer, status) {
			//if(status !== 200) return;
			callback(dataFromServer);
		});
	 }


//ex4
	// var cars = {
 //  			'Suzuki': [
	// 			 {model: 'Jimny',
	// 			 image: 'img/Jimny_Phoenix_Red.png'},
	// 			 {model: 'SX4 S-cross',
	// 			 image: 'img/SX4_S-cross.jpg'},
	// 			 {model: 'Vitara',
	// 			 image: 'img/Vitara.jpg'}
 //  			  ],
 //  			'Mazda' : [
	//   			 {model: 'Active 3',
	//   			 image: 'img/Active3.jpg'},
	//   			 {model: 'CX3',
	//   			 image: 'img/CX3.jpg'},
	//   			 {model: 'MX-5',
	//   			 image:'img/MX-5.jpg'}
 //  			 ],
 //  			'Hyundai': [
 //  				 {model: 'Accent',
	//   			 image: 'img/Accent.jpg'},
	//   			 {model: 'Tucson',
	//   			 image: 'img/Tucson.jpg'},
	//   			 {model: 'i20',
	//   			 image: 'img/i20.jpg'}
	//   		 ],
 //  			'BMW': [
 //  				 {model: 'Mini cooper',
	//   			 image: 'img/Mini_cooper.jpg'},
	//   			 {model: 'G30',
	//   			 image: 'img/G30.jpg'},
	//   			 {model: 'M3',
	//   			 image: 'img/M3.jpg'}
 //  			 ]
 //  		};

  	var features = ['stereo', 'AC', 'sun roof', 'GPS'];

  	var transmission = ['manual', 'automatic'];



$(document).ready(function() {


	getCarsData(function(data) {
		cars = data;
	});

  	// event handlers
  	$('.nav-tabs>li').click(function(){
		// $('h1.title').remove();

		var tab_id = $(this).attr('data-tab');

		// $('.nav-tabs>li').removeClass('tabactive');
		// $(this).addClass('tabactive');

		// $('.tab-content').removeClass('current');
		// $("#"+tab_id).addClass('current');

		// handle the tabs
		$('.nav-tabs>li').removeClass('tabactive');
		$(this).addClass('tabactive');

		// handle the box
		$('.tab-content').hide();
		$("#"+tab_id).show();
	});

  	//ex1
  	$('#result1').click(function(){
  		var typying1 = $('input#tab1-in').val();

  		var cmoutput = copyMe(typying1);

  		console.log(cmoutput);

  		$('#addresult1').text(cmoutput);
  	});

  	//ex2
  	$('#result2').click(function(){
  		var typying2 = $('input#tab2-in').val();

  		// var regexNumComma = /^[0-9](,[0-9])*$/;

  		// if(typying2 === !regexNumComma){
  		// 	alert("write numbers separated by commas");
  		// 	return false;
  		// }

  		//convert string of numbers in array of integers
  		var arrTypying = typying2.split(',').map(Number);
  		console.log(arrTypying);

  		var outputext2 = poweroftwo(arrTypying);

  		$('#addresult2').text(outputext2);
  	});

  	//ex3
  	$('input[name="c"]').click(function(){

  		var sideA = $('input[name="a"]').val();
  		var sideB = $('input[name="b"]').val();

  		var sideC = {a:sideA, b:sideB};
  			console.log(sideC);

  		var sideTrgle = findhypo(sideC);

  		$('#addresult3').text(sideTrgle);
  	});

  	//ex4
  	$('.nav-tabs>li:nth-child(4)').click(function() {
  		//clean the tab when clicking again
  		hideForm();
  		$('#carsList').empty();
  	 	$('#carsList').append('<option id="manufactureCar" value="Car Manufacture">Car Manufacture</option>');


  		// init select elm
  		// how to get the "key" of an object console.log(Object.keys(cars));
  		var mySelect = $('#carsList');

	  		for (key in cars) {
	  			mySelect.append('<option value="' + key + '">' + key + '</option>');
	  		}
    });


	  	$('#carsList').change(function() {

	  		// build model dropdown
	  	 	$('#modelList').empty();
	  	 	$('#modelList').append('<option value="Car Model">Car Model</option>');
	  	 	$('#modelList').show();
	  	 	$('#addresult4').text('Choose the coolest car model');
	  	 	$('#carFeatures').hide();
	  	 	$('#carTransmission').hide();
	  	 	$('button').hide();
	  	 	$('#imageCar').hide();


	  	 	// get car models
	  	 	var carManufModels = getCarManufModels();

			// if default hide model dropdown
	  	 	if(carManufModels === undefined) {
	  	 		hideForm();
	  	 	}else{
	  	 		$('#imageCar').attr('src', '' );
	  	 	}

	  	 	// adding models dropdown
	  	 	if (carManufModels !== undefined) {
		  	 	for (var i =0; i < carManufModels.length; i++){
		  	 		$('#modelList').append('<option value="' + carManufModels[i].model + '">' + carManufModels[i].model + '</option>');
		  	 	}
		  	 }
	  	});

	  	$('select#modelList').change(function() {

	  		$('#carFeatures').hide();
	  	 	$('button').hide();
	  	 	$('#calendar').hide();

	  		// get car models manufacture
	  	 	var carManufModels = getCarManufModels();

		  	//get value of the "car model"
		  	var valueOptionModel = $('#modelList :selected').attr('value');

	  		for (var i =0; i < carManufModels.length; i++){
	  	 		if(valueOptionModel === carManufModels[i].model ) {
		  	 		$('#imageCar').attr({src: carManufModels[i].image,
		  	 							 width:'300px',
		  	 							 height:'210px',
		  	 							 border: '2px solid grey'}).hide().fadeIn(1000);
		  	 		break;
	  	 		}
	  	 		else {
	  	 			$('#imageCar').attr('src', 'img/not_found.png' );
	  	 		}
	  	 	}

	  		//add car transmission
	  		$('#carTransmission').empty();
	  		$('#carTransmission').show();
	  		if($('#carTransmission label').length === 2){
	  			return ;
	  		}

	  		for(var i = 0; i < transmission.length; i++) {
	  				console.log(transmission);
				$('#carTransmission').append('<label> <input type="radio" name="transmission"  value=" ' + transmission[i] + ' ">' + transmission[i] + '</label> <br />');
	  				console.log(transmission[i]);
	  		}

	  	});

	  	$('#carTransmission').change(function() {

	  		//get the value of the "transmission"
	  		var transOption = $('input[type="radio"]:checked').val();
	  		$('#transmText').text('you had selected ' + transOption + ' transmission');

	  			$('#carFeatures').empty();
		  		//get value of the "car manufacture"
		  		var valueOption = $('#carsList :selected').attr('value');
		  		console.log(valueOption);
		  		//get value of the "car model"
		  	 	var valueOptionModel = $('#modelList :selected').attr('value');
		  		console.log(valueOptionModel);


		  		$('#carFeatures').show();
		  		//add features to the car model selected with checkbox once the model is selected
		  		$('#carFeatures').append('<label><input  type="checkbox" value="selectAll"  id="selectAll">Select all features</label><br />');

		  		for(var i=0; i < features.length; i++) {
		  			console.log(features);
		  			$('#carFeatures').append('<label><input type="checkbox" value="' + features[i] + '">' + features[i] + '</label><span> only this</span><br />');
		  			console.log(features[i]);
		  		}

		  		//select all checkbox features
		  		selectAllItems();

		  		$('#featureText').html('for a ' + valueOption + ' model ' + valueOptionModel + ', choose the features  <br />  to have a custom car');

		  		$('#buyMe').show();
		  		$('#rentMe').show();
		  		$('#calendar').show();
		  		$('#datepickerFrom').datepicker();
		  		$('#datepickerTo').datepicker();
		  		$('#totalDays').show();

	  	});

	  	//display how many days to rent a car
	  	$('#totalDays').click(function() {
	  		$('#resultDays').empty();
	  		$('#totalMoney').empty();

	  		var dateFrom,
	  			dateTo,
	          	oneDay,
	          	firstDate,
	          	secondDate,
	  			daysDiff

			  dateFrom = $('#datepickerFrom').val();
	  		dateTo = $('#datepickerTo').val();
	  		//get numbers of day to rent a car
	  		oneDay = 24*60*60*1000;  // hours*minutes*seconds*milliseconds
	  		firstDate = new Date(dateFrom);
	  		secondDate = new Date(dateTo);

	    		daysDiff = Math.abs((secondDate.getTime() - firstDate.getTime()) / (oneDay));

	    		// $('#resultDays').append('<p> Total days:' + daysDiff + '</p>');

			  		function getPrice(daysDiff, priceCar){
			  			$('#resultDays').append('<p> Total days:' + daysDiff + '</p>');
			  			priceCar(20);
			  		}
			  			var priceCar = function(price){
			  				var money =  price * daysDiff;
			  				return $('#totalMoney').append('<p>Cost: ' + money + '</p>');
			  			};

			  			getPrice(daysDiff, priceCar);
		  })


	  	//event handler when BUYING a car
	  	$('#buyMe').click(function() {
	  		// $('#featureText').hide();
	  		var manufactureSelected,
	  			modelSelected
	  		// get checkbox selected

	  		var featureSelectedArr = [];
	  		$("#carFeatures input:checked").each(function(index, elm) {
	  			console.log(index);
	  			console.log(elm);
	  			// console.log(featureSelectedArr[elm.value]);
	  			featureSelectedArr.push(elm.value);
	  		});

	  		manufactureSelected = $('#carsList :selected').attr('value');
	  		modelSelected = $('#modelList :selected').attr('value');

	  		var finalPurchase = {
	  			nameManufacture: manufactureSelected,
	  			nameModel: modelSelected,
	  			nameFeatures: featureSelectedArr
	  		};

	  		console.log('sending final selection to the buyer:' + JSON.stringify(finalPurchase) );
	  		//get the Modal
	  		$('#myModal').show();
	  		$('#myModal').html('<div class="modal-content"><span class="close">×</span>\
	  			<p>You are about to buy the best customized ' + manufactureSelected + ' model ' + modelSelected + '\
	  			with ' + featureSelectedArr + '</p>' + '<p>Purchase info sending to server .....</p></div>');


		  		$('span.close').click(function(){
					$('#myModal').hide();
				});

	  		// $('span.close').hide('slow', function() {
	  		// 	$('#myModal').css('display', 'none');
	  		// });

	  		// send selected car to the server
	  		$.post('www.buy.com/buy', finalPurchase ,function(data, status) {
	  			console.log(data);
	  			console.log(status);
	  		  }
	  		);

	  		$('#confirmPurchase').append();

	  	})

	  	//event handler when RENTING a car
	  	$('#rentMe').click(function() {

	  		var manufactureSelected,
	  			modelSelected
	  		// get checkbox selected
	  		var featureSelectedArr = [];
	  		$("#carFeatures input:checked").each(function(index, elm) {
	  			console.log(index);
	  			console.log(elm);

	  			// console.log(featureSelectedArr[elm.value]);
	  			featureSelectedArr.push(elm.value);
	  		});

	  		manufactureSelected = $('#carsList :selected').attr('value');
	  		modelSelected = $('#modelList :selected').attr('value');

	  		var finalPurchase = {
	  			nameManufacture: manufactureSelected,
	  			nameModel: modelSelected,
	  			nameFeatures: featureSelectedArr
	  		};

	  		console.log('sending final selection to the buyer:' + JSON.stringify(finalPurchase) );
	  		//get the Modal
	  		$('#myModal').show();
	  		$('#myModal').html('<div class="modal-content"><span class="close">×</span>\
	  			<p>You are about to rent the best customized ' + manufactureSelected + ' model ' + modelSelected + '\
	  			with ' + featureSelectedArr + '</p>' + '<p>Renting info sending to server .....</p></div>');


		  		$('span.close').click(function(){
					$('#myModal').hide();
				});

	  		// send selected car to the server
	  		$.post('www.rent.com/rent', finalPurchase ,function(data, status) {
	  			console.log(data);
	  			console.log(status);
	  		  }
	  		);

	  	})


	  			// 	for (key in cars) {
	  			//  	var value = cars[key];
	  			//  	console.log(value);
	  			//  		for(var i = 0; i < value.length; i++) {
	  			//  			value[i];
	  			//  			console.log(value[i]);
	  			//  			$('#modelList').append('<p>' + value[i] + '</p>');
	  			//  		}
	  			//  	console.log(value[0]);

	  			//  	$('#modelList').append('<p>' + value + '</p>');

	  			//  	}

	  			// });

	//ex5
	$('.nav-tabs>li:nth-child(5)').click(function() {

		$('#getUsers').on('click', function() {

			getUsers(function(data){
				for(var x in data){
				  	$('#userList').append('<div>'+ data[x].name+ '</div>');
				  }
			});
		})

	});

	// init code
	$('.nav-tabs>li[data-tab="tab-1"]').click();


});

//function getUsers() {

// }