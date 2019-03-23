
/* === VARIOUS RESOURCES 

// -- Canvas general

// - Canvas and mobile web 
https://mobiforge.com/design-development/html5-mobile-web-canvas

// - Mozilla canvas tutorial
https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial


// - Debugging on mobile 
https://creative-coding.decontextualize.com/mobile/


// -- Canvas and leaflet

https://leafletjs.com/reference-1.4.0.html#canvas


// semi-related about leaflet and  canvas
// ( it's a canvas-leaflet library, hopefully giving some hints )
http://bl.ocks.org/Sumbera/11114288/ba15e1f5953dab372f0adb4a19ef06800113b6f2

*/



/* ==== STARTUP SEQUENCE - mental checklist : 

	\ needed : 

		- libraries
			- leaflet 

		- main main() 

			- data holder()
				
				- specific data types[] : 

					- data_object()

			- windows holder()

				- specific windows types[]:

					- window()
						- layers : 
							- leaflet
							- canvas 
							- dom


	/ startup sequence : 

		- setup mainMain
	
			- get : input parameters 

			- setup : data holder
				- setup basic structures 

			- setup : windows holder 

			THEN : 

				- windows holder : initialise relevant windows 
					 - setup : visual objects
					 - setup : listeners etc 
					 - setup : visual drawing loops

				THEN : Send draw : 

					¿¿ Update map? ?? 

					- window : 
						- make sure the map is ok 
						- fetch/check relevant data is present given time info 
							- load data and parse it if necessary
							- check relevant time inidices in data 
							- setup data shapes 
								- lat/long lookups 
								- do existing shapes exist, 
								- fetch relevant sensor id indicies for each data shape
								- generate average data for shape? of all sensors?

						- draw : 
							- check whether the relevant data shape is drawing or not 
*/



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

	// --------------------- root this!

	mainMain_Root = this;


	// --------------------- various objects reference

	various_object_reference = false;	


	// --------------------- objects 

	dataholder = [];

	windows_holder = [];


	// --------------------- variables






	// =====================  methods 


 	// - set up the relevant objects 

	setup_LD_data_holder = function(){

		console.log(">>>> setup_objects()");

		this.dataholder = new this.various_object_reference.LD_data_holder();

	}


	// - setup the windows holder 

	setup_windows_holder = function( mainMain_Root_ ){

		console.log(">>>> setup_windows_holder() ");

		this.windows_holder = new this.various_object_reference.Windows_holder( mainMain_Root_ );
	}


	// =-=-==-=-=-=-=-=-=- initialise one LD map window 

	setup__custom_LD_map_window_01 = function( mainMain_Root_ ){

		console.log(">>>> setup__custom_LD_map_window_01() ");

		mainMain_Root_.windows_holder.ld_map_windows.push( new this.various_object_reference.LD_map_window( mainMain_Root_, 0 ) );

		// make it a bit easier to use 
		this.curr_window = mainMain_Root_.windows_holder.ld_map_windows[0];

		// test set something
		// - OK - IT WORKS! 
		this.curr_window.top_left_x = -1;

		/* TO DO : 
			
			- set up coordinates … 
				- the rest of the dom setup will rely on this a b i t
	
			- - DOM setup : 

				- set up basic parent dom 

				- set up leaflet area / dom 

				- set up canvas area in div 

				- set up interfacing divs … timelie, graph, menu 

			- - Data setup 

				- - figure out how to set up data shapes 

					- figure out the coorindate multiples for the left / top -> bottom - right 

					- generate the data shapes needed. 



		*/
	}



	// =|=|==|=|==|=|==|=|==|=|= start me up 


	// - - - - - - startup script

	start_me_up = function(){

		console.log(">>> start_me_up() ");

		// set up the data holder
		this.setup_LD_data_holder();

		// set up the winodws holder 
		this.setup_windows_holder( this.mainMain_Root );

		// // // very custom setup 
		this.setup__custom_LD_map_window_01( this.mainMain_Root );
	}


}





// =||=||=||=||=||=||=||=||=||   Various objects   =||=||=||=||=||=||=||=||




class Various_objects_object {

	constructor(){
		console.log(">]>]> - instantiating  Various_objects_object  object ");
	}

	// LINK TO ROOT! 
	link_to_root = false;	

	// variables

	one = 1;
	two = 2; 


	// method 


	print_something = function(){

		console.log("-- hellow from Various_objects_object instantiation ");
		console.log("\t - got variables one/two : "+this.one+" / "+this.two );
	}

}


// Instantiate, so there's somewhere to put the objects… 
various_objects = new Various_objects_object();



// =-=-=-=-=-=  data holder ( and loader ) object 


various_objects.LD_data_holder = class {

	constructor(){

		console.log(">]>]> - instantiating  LD_data_holder object ");
	}

	// LINK TO ROOT! 
	link_to_root = false;

	// ----- OBJECTS  

	// put tabular data in here 
	tabular_LD_data_objects = [];


	// ----- variables



	// ----- methods 

	// load relevant data? 

}


// |||||||||||||||||||   Object : tabular_LD_data_object


various_objects.Tabular_LD_data_object = class {

	constructor(){

		console.log(">]>]> - instantiating  Tabular_LD_data_object object ");
	}

	// LINK TO ROOT! 
	link_to_root = false;

	// ----- OBJECTS  

	// put tabular data in here 

	sensor_data = [];

	// with lat long? 
	sensor_list = [];

	// 
	sensor_lat_lon_list = [];


	// ----- variables

	data_url = "";

	data_starttime_in_s = 0;

	data_endtime_in_s = 0;


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


	// CHECK if and where an object has a particular time 
	//
	//
	has_given_time_in_s = function(){
	}

	// Find the index in the data of a given time.
	//
	get_index_of_given_time = function(){
	}

}




// |||||||||||||||||||   Object : Windows holder 


various_objects.Windows_holder = class {

	constructor( mainMain_Root_ ){

		console.log(">]>]> - instantiating  Windows_holder object ");

		this.mainMain_Root_ = mainMain_Root_;
	}

	// LINK TO ROOT! 
	mainMain_Root_ = false;


	// ----- OBJECTS  

	// the window instances go in here 
	ld_map_windows = []


	// ----- variables



	// ----- methods 

}




// |||||||||||||||||||   Object : LD Map window 


various_objects.LD_map_window = class {

	constructor( mainMain_Root_, LD_map_window_id ){ 

		console.log(">]>]> - instantiating  LD_map_window object - got ID# "+this.LD_map_window_id );
		
		//
		this.mainMain_Root_ = mainMain_Root_;

		// id 
		this.LD_map_window_id = LD_map_window_id;

		console.log("\t - got ID# "+this.LD_map_window_id );
	}

	// LINK TO ROOT! 
	mainMain_Root_ = false;


	// ---- my number

	LD_map_window_id = false;

	// ----- OBJECTS  

	// -- data-shapes 

	data_shapes = []; // the drawing shapes 

	// -- dom 

	// main div - we create and use this as the main one 
	main_div = 0;

	// leaflet div 
	leaflet_div ; 

	// goes on top of the leaflet layer 
	map_canvas_layer = 0;

	// timeline interfacing layer - canvas
	timeline_interfacing_layer = 0 ;

	// where the menu button is - above everything else… 
	menu_div = 0;


	// ----- variables


	// SET SIZE RELATIELY OR ABSOLUTELY? 

	// -- visual settings 

	top_left_x = 0;

	top_left_y = 0;

	width = 0;    // SET THESE RELATIVELY? 

	height = 0;   // SET THESE RELATIVELY? 


	// -- TIME 

	current_time_in_s = 0 ;


	// -- Playback

	playing_time = false;

	playing_time__time_change_per_frame = 1;


	// --- DOM objects



	// ----- methods 

	// -- setup divs 

	// - set up main div 

	// - set up leaflet 

	// - bind the canvas overlay to leaflet div 
	// - - method to test draw 

	// - set up timeline div 
	// - - test draw

	// - set up menu div 
	// - - add content 

	// -- bind listeners
	//    ( touch and click will be a bit different )

	// - also leaflet pan/zoom 

	// - bind timeline movement

	// - bind menu action

	// -- draw? 

	// - normal data drawing likely happens inside the data shapes 
	// - overall drawing likely happens higher up the chain 

	// - check if data is available … 

}


// |||||||||||||||||||   Object : LD Map window 


various_objects.LD_map_window__data_shape = class {

	constructor(){ 

		console.log(">]>]> - instantiating  LD_map_window__data_shape object ");
	}

	// LINK TO ROOT! 
	link_to_root = false;

	// ----- OBJECTS  

	// for finding which 
	array_of_relevant_sensors_for_this_shape__as_sensor_ids = []
	array_of_relevant_sensors_for_this_shape__as_data_indicies = []

	//

	// ----- variables

	// -- personal id? 
	//    - based on location, to make it easier to compare to others
	sensor_shape_id = 0;

	// -- visual

	top_left_X = 0;
	top_left_Y = 0;

	bottom_right_X = 0;
	bottom_right_Y = 0;

	width_in_px = 0;
	heigh_in_px = 0;

	// ----- methods

	// -- draw?

	draw_me_basic = function(){		
	}

}




// // // // // // 
// // // // // // 
// // // // // // 
// // // // // // 


// --- instantiate 

// make main! 
var mainMain = new MainMain()
// attach various objects … 
mainMain.various_object_reference = various_objects;
// get things going 
mainMain.start_me_up();

// …the objects 
// // various_objects = new Various_objects_object();

// … the main 
var newMain = new Main( 1, 2 );
newMain.various_object_reference = various_objects;
// test
newMain.various_object_reference.print_something();
