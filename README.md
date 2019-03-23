# LD Mapper 

Trying to work on making an interface to some PM pollution data, which allows people to change the displayed time.


### Various resources 

#### -- Canvas general

##### - Canvas and mobile web 
https://mobiforge.com/design-development/html5-mobile-web-canvas

##### - Mozilla canvas tutorial
https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial


#### --  Debugging on mobile 
https://creative-coding.decontextualize.com/mobile/


#### -- Canvas and leaflet

https://leafletjs.com/reference-1.4.0.html#canvas


##### semi-related about leaflet and  canvas
// ( it's a canvas-leaflet library, hopefully giving some hints )
http://bl.ocks.org/Sumbera/11114288/ba15e1f5953dab372f0adb4a19ef06800113b6f2


#### -- Coordinate systems 

##### - Code libraries for coordinate conversion 

- JS library for coordinte conversion 
http://proj4js.org/

- Leaflet library for different map projections 
https://kartena.github.io/Proj4Leaflet/

- Mike Bostock's classic d3 let's make a map tutorial 
https://bost.ocks.org/mike/map/


##### - Tips about coordinate sytems defined in meters 

- stackoverflow : on different flat map projections 
https://stackoverflow.com/questions/2103924/mercator-longitude-and-latitude-calculations-to-x-and-y-on-a-cropped-map-of-the

- WGS84 ? 
https://www.google.com/search?q=wgs84&rlz=1C5CHFA_enDE820DE820&oq=WGS84&aqs=chrome.0.0l6.417j0j7&sourceid=chrome&ie=UTF-8

-- Historical note on WGS84
https://www.ngs.noaa.gov/PUBS_LIB/Geodesy4Layman/TR80003E.HTM#ZZ11



#### Various tips & tricks

- Check Leaflet API about getting pixelinformation about map bounds 
. eg getPixelOrigin
https://leafletjs.com/reference-1.3.0.html

- The feinstaub map's hexagon code … 
https://github.com/opendata-stuttgart/feinstaub-map/blob/master/src/hexbin-layer.js


#### TO DO : 

( - set up test Leaflet environment… maybe somewhre separate )

- Try the Leaflet map pixel operations mentioned just above - eg getPixelOrigin

- Try figure out if you can create a hexagon map with leaflet alone 
( you could always test using d3 to do it… )
