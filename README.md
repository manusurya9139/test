# WEBPY ASSIGNMENT

Development Mission for web developer:
Create simple page using:
1. Python Server side: Web.py
2. Client style: Boostrap
3. Client scripting: jquery
The page needs to contains, header, content area and footer using bootstrap (http://getbootstrap.com/examples/sticky-footer-navbar/)  :
a) Menu header with menu items: "Weather", "Clocks", “Performance”, 
"Clocks" has submenus: "Server Time", "Local Time"
b) Content area - changes to relevant menu page
"Weather" – in middle of the screen surrounded by border (1px solid black) :
                        List Box: New York, London, Paris
 			          Button: on click perform Ajax call to
			          http://api.openweathermap.org/data/2.5/weather?q=
                                                     Add the country selected to q= parameter Example:
			         http://api.openweathermap.org/data/2.5/weather?q=London
                                                    http://api.openweathermap.org/data/2.5/weather?q=New%20York
                                                    Get the Wind from it and display deg and speed on the screen under label.
                                   	         Response Example (the information needed is in bold and yellow 
background):

{"coord":{"lon":-75.5,"lat":43},"sys":{"message":0.0139,"country":"US","sunrise":1429093155,"sunset":1429141477},"weather":[{"id":800,"main":"Clear","description":"Sky is Clear","icon":"01d"}],"base":"stations","main":{"temp":276.091,"temp_min":276.091,"temp_max":276.091,"pressure":1005.97,"sea_level":1038.4,"grnd_level":1005.97,"humidity":62},"wind":{"speed":1.32,"deg":316.001},"clouds":{"all":0},"dt":1429102847,"id":5128638,"name":"New York","cod":200}


		
"Clocks" -> " Server Time":  in middle of the screen surrounded by border (1px solid Blue) : Make Ajax request to the “server” (web.py) and get the time, update every 5 seconds. Font size of the time: 20px, Bold.
" Clocks" -> "Local Time": in middle of the screen surrounded by border (1px solid Green) : Client time, updated every time the user clicks the text, 20px, Bold.
Performance – Choose whatever you feel best to show CPU and Memory from the server, please make sure the CPU and Memory is real data from the server (build with web.py) and updated every 5 seconds.
c) Footer – Changes background color every 5 seconds using the colors: white, blue, yellow, green… the color rotates after green there is white again.


Help links:
1) Install python
2) Install web.py (http://webpy.org/install)
3) http://webpy.org/cookbook/helloworld
4) Bootstrap: http://getbootstrap.com/examples/sticky-footer-navbar/

# web.py
