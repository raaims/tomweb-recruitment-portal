var contents = new Array()
contents[0] = '<div class="col-md-4 col-xs-6"><img src="images/raims.jpg" class="img-circle eb"><br><span class="name">Raims Cabrera</span><br><span class="position">President</span></div>'
contents[1] = '<div class="col-md-4 col-xs-6"><img src="images/mariejo.jpg" class="img-circle eb"><br><span class="name">Mariejo Gabuyo</span><br><span class="position">Executive Vice President</span></div>'
contents[2] = '<div class="col-md-4 col-xs-6"><img src="images/jastyn.jpg" class="img-circle eb"><br><span class="name">Jastyn Limon</span><br><span class="position">Executive Secretary</span></div>'
contents[3] = '<div class="col-md-4 col-xs-6"><img src="images/zeb.jpg" alt="" class="img-circle eb"><br><span class="name">Zebadiah Canero</span><br><span class="position">Vice President for Human Resources</span></div>'
contents[4] = '<div class="col-md-4 col-xs-6"><img src="images/jose.jpg" alt="" class="img-circle eb"><br><span class="name">Jose Chua Jr.</span><br><span class="position">Vice President for External Affairs</span></div>'
contents[5] = '<div class="col-md-4 col-xs-6"><img src="images/migz.jpg" alt="" class="img-circle eb"><br><span class="name">Migz Jimenez</span><br><span class="position">Vice President for Finance</span></div>'
contents[6] = '<div class="col-md-4 col-xs-6"><img src="images/julia.jpg" alt="" class="img-circle eb"><br><span class="name">Julia Ocampo</span><br><span class="position">Vice President for Community Development</span></div>'
contents[7] = '<div class="col-md-4 col-xs-6"><img src="images/nica.jpg" alt="" class="img-circle eb"><br><span class="name">Nica Roque</span><br><span class="position">Vice President for Publicity and Communications</span></div>'
contents[8] = '<div class="col-md-4 col-xs-6"><img src="images/xave.jpg" alt="" class="img-circle writing"><br><span class="name">Xave Gregorio</span><br><span class="position">Editor In Chief</span></div>'
contents[9] = '<div class="col-md-4 col-xs-6"><img src="images/rea.jpg" alt="" class="img-circle writing"><br><span class="name">Rea Stevens</span><br><span class="position">Managing Editor</span></div>'
contents[10] = '<div class="col-md-4 col-xs-6"><img src="images/jem.jpg" alt="" class="img-circle writing"><br><span class="name">Jem Sagcal</span><br><span class="position">Associate Editor</span></div>'
contents[11] = '<div class="col-md-4 col-xs-6"><img src="images/bria.jpg" alt="" class="img-circle photog"><br><span class="name">Bria Cardenas</span><br><span class="position">Chief Photographer</span></div>'
contents[12] = '<div class="col-md-4 col-xs-6"><img src="images/joshua.jpg" alt="" class="img-circle photog"><br><span class="name">Joshua Lugti</span><br><span class="position">Asst. Chief Photographer</span></div>'
contents[13] = '<div class="col-md-4 col-xs-6"><img src="images/julius.jpg" alt="" class="img-circle creatives"><br><span class="name">Julius Renomeron Jr.</span><br><span class="position">Creative Director</span></div>'
contents[14] = '<div class="col-md-4 col-xs-6"><img src="images/humphrey.jpg" alt="" class="img-circle creatives"><br><span class="name">Humphrey Litan</span><br><span class="position">Asst. Creative Director</span></div>'
contents[15] = '<div class="col-md-4 col-md-offset-2 col-xs-6"><img src="images/alecxis.jpg" alt="" class="img-circle webtech"><br><span class="name">Alecxis Banag</span><br><span class="position">Webmaster</span></div>'
contents[16] = '<div class="col-md-4 col-xs-6"><img src="images/manrick.jpg" alt="" class="img-circle webtech"><br><span class="name">Manrick Capotolan</span><br><span class="position">Asst. Webmaster</span></div>'

			var i = 0

			var random

			while(i<contents.length){
				random = Math.floor(Math.random()*contents.length)

				if(contents[random]!="selected"){
					document.write(contents[random])
					contents[random]="selected"
					i++
				}
			}