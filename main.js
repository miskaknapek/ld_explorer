
// TEST class 

class Main { 

	constructor( one, two ){
		this.one = one ;
		this.two = two ;

		console.log(">]>]> Instantiating Main this .one / .two = "+this.one+" / "+this.two )
	}

}





// =||=||=||=||=||=||=|| Main main =||=||=||=||=||=||=||=||=||=||=||=||

class MainMain {

	constructor( one, two ){
		this.one = one;
		this.two = two;

		console.log(">]>]> Instantiating MainMain - with this.one/this.two = "+this.one+" / "+this.two );


		// slightly external startup… 
		// this.start_me_up();

	}

	// --------------------- various objects reference

	various_object_reference = [];

	// --------------------- objects 

	dataholder = [];

	windows = [];


	// --------------------- parameters






	// ===================  methods 


 	// - set up the relevant objects 

	setup_objects = function(){

		console.log(">>>> setup_objects()");

		this.dataholder = new window.LD_data_holder();

	}



	// =-=-==-=-=-=-=-=-=- start me up 

	// - - - - - - startup script

	start_me_up = function(){

		console.log(">>> start_me_up() ");

		// set up objects
		this.setup_objects();


	}


}





// =||=||=||=||=||=||=||=||=||   Various objects   =||=||=||=||=||=||=||=||




class Various_objects_object {

	constructor(){
		console.log(">]>]> - instantiating  Various_objects_object  object ");
	}

	// parameter

	one = 1;
	two = 2; 


	// method 


	print_something = function(){

		console.log("-- hellow from Various_objects_object instantiation ");
		console.log("\t - got variables one/two : "+this.one+" / "+this.two );
	}

}


various_objects = new Various_objects_object();



// =-=-=-=-=-=  data holder ( and loader ) object 

various_objects.LD_data_holder = class {

	constructor(){

		console.log(">]>]> - instantiating  LD_data_holder object ");
	}


	// ----- objects  




	// ----- parameters



	// ----- methods 


	// load ld data 
	//
	// - has callback? 
	fetch_tabular_ld_data = function(){
	}

	// parse ld tabular data
	//
	//
	parse_loaded_tabular_ld_data = function(){
	}

}




// |||||||||||||||||||   Object : Windows holder 


various_objects.Windows_holder = class {

	constructor(){

		console.log(">]>]> - instantiating  Windows_holder object ");
	}

}




// |||||||||||||||||||   Object : LD Map window 


various_objects.LD_map_window = class {

	constructor(){ 

		console.log(">]>]> - instantiating  LD_map_window object ");
	}
}



// // // // // // 
// // // // // // 
// // // // // // 
// // // // // // 


// instantiate 

// …the objects 
// // various_objects = new Various_objects_object();

// … the main 
var newMain = new Main( 1, 2 );
newMain.various_object_reference = various_objects;
// test
newMain.various_object_reference.print_something();
