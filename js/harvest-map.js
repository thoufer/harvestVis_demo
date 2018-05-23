
svg1=document.getElementById('svg1');
svgAlaska=document.getElementById('svgAlaska');
svgAlabama=document.getElementById('svgAlabama');
svgArkansas=document.getElementById('svgArkansas');
svgArizona=document.getElementById('svgArizona');
svgCalifornia=document.getElementById('svgCalifornia');
svgColorado=document.getElementById('svgColorado');
svgHawaii=document.getElementById('svgHawaii');
svgConnecticut=document.getElementById('svgConnecticut');
svgDelaware=document.getElementById('svgDelaware');
svgFlorida=document.getElementById('svgFlorida');
svgGeorgia=document.getElementById('svgGeorgia');
svgIowa=document.getElementById('svgIowa');
svgIdaho=document.getElementById('svgIdaho');
svgIllinois=document.getElementById('svgIllinois');
svgIndiana=document.getElementById('svgIndiana');
svgKansas=document.getElementById('svgKansas');
svgKentucky=document.getElementById('svgKentucky');
svgLouisiana=document.getElementById('svgLouisiana');
svgMassachusetts=document.getElementById('svgMassachusetts');
svgMaryland=document.getElementById('svgMaryland');
svgMaine=document.getElementById('svgMaine');
svgMichigan=document.getElementById('svgMichigan');
svgMinnesota=document.getElementById('svgMinnesota');
svgMissouri=document.getElementById('svgMissouri');
svgMississippi=document.getElementById('svgMississippi');
svgMontana=document.getElementById('svgMontana');
svgNorthcarolina=document.getElementById('svgNorthcarolina');
svgNorthdakota=document.getElementById('svgNorthdakota');
svgNebraska=document.getElementById('svgNebraska');
svgNewhampshire=document.getElementById('svgNewhampshire');
svgNewjersey=document.getElementById('svgNewjersey');
svgNewmexico=document.getElementById('svgNewmexico');
svgNevada=document.getElementById('svgNevada');
svgNewyork=document.getElementById('svgNewyork');
svgOhio=document.getElementById('svgOhio');
svgOklahoma=document.getElementById('svgOklahoma');
svgOregon=document.getElementById('svgOregon');
svgPennsylvania=document.getElementById('svgPennsylvania');
svgRhodeisland=document.getElementById('svgRhodeisland');
svgSouthcarolina=document.getElementById('svgSouthcarolina');
svgSouthdakota=document.getElementById('svgSouthdakota');
svgTennessee=document.getElementById('svgTennessee');
svgTexas=document.getElementById('svgTexas');
svgUtah=document.getElementById('svgUtah');
svgVirginia=document.getElementById('svgVirginia');
svgVermont=document.getElementById('svgVermont');
svgWashington=document.getElementById('svgWashington');
svgWisconsin=document.getElementById('svgWisconsin');
svgWestvirginia=document.getElementById('svgWestvirginia');
svgWyoming=document.getElementById('svgWyoming');

AK=document.getElementById('AK');
AL=document.getElementById('AL');
AR=document.getElementById('AR');
AZ=document.getElementById('AZ');
CA=document.getElementById('CA');
CO=document.getElementById('CO');
HI=document.getElementById('HI');
CT=document.getElementById('CT');
DE=document.getElementById('DE');
FL=document.getElementById('FL');
GA=document.getElementById('GA');
IA=document.getElementById('IA');
ID=document.getElementById('ID');
IL=document.getElementById('IL');
IN=document.getElementById('IN');
KS=document.getElementById('KS');
KY=document.getElementById('KY');
LA=document.getElementById('LA');
MA=document.getElementById('MA');
MD=document.getElementById('MD');
ME=document.getElementById('ME');
MI=document.getElementById('MI');
MN=document.getElementById('MN');
MO=document.getElementById('MO');
MS=document.getElementById('MS');
MT=document.getElementById('MT');
NC=document.getElementById('NC');
ND=document.getElementById('ND');
NE=document.getElementById('NE');
NH=document.getElementById('NH');
NJ=document.getElementById('NJ');
NM=document.getElementById('NM');
NV=document.getElementById('NV');
NY=document.getElementById('NY');
OH=document.getElementById('OH');
OK=document.getElementById('OK');
OR=document.getElementById('OR');
PA=document.getElementById('PA');
RI=document.getElementById('RI');
SC=document.getElementById('SC');
SD=document.getElementById('SD');
TN=document.getElementById('TN');
TX=document.getElementById('TX');
UT=document.getElementById('UT');
VA=document.getElementById('VA');
VT=document.getElementById('VT');
WA=document.getElementById('WA');
WI=document.getElementById('WI');
WV=document.getElementById('WV');
WY=document.getElementById('WY');

//make for each state
function hideall(){
svgAlaska.style.display = 'none';
svgAlabama.style.display = 'none';
svgArkansas.style.display = 'none';
svgArizona.style.display = 'none';
svgCalifornia.style.display = 'none';
svgColorado.style.display = 'none';
svgHawaii.style.display = 'none';
svgConnecticut.style.display = 'none';
svgDelaware.style.display = 'none';
svgFlorida.style.display = 'none';
svgGeorgia.style.display = 'none';
svgIowa.style.display = 'none';
svgIdaho.style.display = 'none';
svgIllinois.style.display = 'none';
svgIndiana.style.display = 'none';
svgKansas.style.display = 'none';
svgKentucky.style.display = 'none';
svgLouisiana.style.display = 'none';
svgMassachusetts.style.display = 'none';
svgMaryland.style.display = 'none';
svgMaine.style.display = 'none';
svgMichigan.style.display = 'none';
svgMinnesota.style.display = 'none';
svgMissouri.style.display = 'none';
svgMississippi.style.display = 'none';
svgMontana.style.display = 'none';
svgNorthcarolina.style.display = 'none';
svgNorthdakota.style.display = 'none';
svgNebraska.style.display = 'none';
svgNewhampshire.style.display = 'none';
svgNewjersey.style.display = 'none';
svgNewmexico.style.display = 'none';
svgNevada.style.display = 'none';
svgNewyork.style.display = 'none';
svgOhio.style.display = 'none';
svgOklahoma.style.display = 'none';
svgOregon.style.display = 'none';
svgPennsylvania.style.display = 'none';
svgRhodeisland.style.display = 'none';
svgSouthcarolina.style.display = 'none';
svgSouthdakota.style.display = 'none';
svgTennessee.style.display = 'none';
svgTexas.style.display = 'none';
svgUtah.style.display = 'none';
svgVirginia.style.display = 'none';
svgVermont.style.display = 'none';
svgWashington.style.display = 'none';
svgWisconsin.style.display = 'none';
svgWestvirginia.style.display = 'none';
svgWyoming.style.display = 'none';
}
function hideselect(){

$("#AK").css('fill', '');
$("#AL").css('fill', '');
$("#AZ").css('fill', '');
$("#AR").css('fill', '');
$("#CA").css('fill', '');
$("#CO").css('fill', '');
$("#CT").css('fill', '');
$("#DE").css('fill', '');
$("#FL").css('fill', '');
$("#GA").css('fill', '');
$("#HI").css('fill', '');
$("#ID").css('fill', '');
$("#IL").css('fill', '');
$("#IN").css('fill', '');
$("#IA").css('fill', '');
$("#KS").css('fill', '');
$("#KY").css('fill', '');
$("#LA").css('fill', '');
$("#ME").css('fill', '');
$("#MD").css('fill', '');
$("#MA").css('fill', '');
$("#MI").css('fill', '');
$("#MN").css('fill', '');
$("#MS").css('fill', '');
$("#MO").css('fill', '');
$("#MT").css('fill', '');
$("#NE").css('fill', '');
$("#NV").css('fill', '');
$("#NH").css('fill', '');
$("#NJ").css('fill', '');
$("#NM").css('fill', '');
$("#NY").css('fill', '');
$("#NC").css('fill', '');
$("#ND").css('fill', '');
$("#OH").css('fill', '');
$("#OK").css('fill', '');
$("#OR").css('fill', '');
$("#PA").css('fill', '');
$("#RI").css('fill', '');
$("#SC").css('fill', '');
$("#SD").css('fill', '');
$("#TN").css('fill', '');
$("#TX").css('fill', '');
$("#UT").css('fill', '');
$("#VT").css('fill', '');
$("#VA").css('fill', '');
$("#WA").css('fill', '');
$("#WV").css('fill', '');
$("#WI").css('fill', '');
$("#WY").css('fill', '');
}
function suffix(i) {
		var j = i % 10,
			k = i % 100;
		if (j == 1 && k != 11) {
			return i + "st";
		}
		if (j == 2 && k != 12) {
			return i + "nd";
		}
		if (j == 3 && k != 13) {
			return i + "rd";
		}
		return i + "th";
	}
hideall();
	
	var svgW=window.innerWidth
	var svgH=window.innerHeight
    var bb=svg1.getBBox()
	var bbx=bb.x
	var bby=bb.y
	var bbw=bb.width
	var bbh=bb.height
    svg1.setAttribute("viewBox",bbx+" "+bby+" "+bbw+" "+bbh )
    svg1.setAttribute("width",svgW/1.7)
    svg1.setAttribute("height",svgH)
//document.getElementById('svg1').addEventListener('click', function(ev){
	
	var $statesmap = $('.statesmap')
	//$statesmap.click(function(e) {
		//console.log('mouse enter');
		$("path, circle").click(function(e) {
	 // $('#info-box').css('display','block');
	 // $('#info-box').html($(this).data('info3'));
	  //$('#info-box').html($(this).data('info2'));
	 
	  var statespecies = $(this).data('info4');
	  var duckrank = $(this).data('info6');
	  var gooserank = $(this).data('info7');
	  var staterank = $(this).data('info3').substring(0,2);
	   var stateid = $(this).data('info3').replace(staterank,'');
	  staterank = parseInt(staterank);
	  
	staterank = suffix(staterank);
	duckrank = suffix(duckrank);
	gooserank = suffix(gooserank);
	//staterank = staterank.toString();
	//console.log(staterank);
	  if($(this).data('info3')!="Hawaii"){
	  statespecies=statespecies.replace(';','<tr><td class="indented">');
	  statespecies=statespecies.replace(';','</td></tr><tr><td class="indented">');
	  }
	 // var myArray3    = new Array();
	

		var myTable2= "<table style='bottom-border=none;'>"; //<tr><td style='height:15px; color:black; font-variant: small-caps; font-weight: bold; font-style:italic;'>Highlighted state rank within the nation</td>
	  	//var myTable2= "<table><tr><td style='height:15px; color:black; font-variant: small-caps; font-weight: bolder; font-size:larger;'>Top Ranked States within the Country</td>";
		//myTable2+="<tr><td style='height:15px; color:black; font-variant: small-caps; font-weight: bold; font-style:italic;'>Highlighted state rank within the nation</td></tr><tr><td style='height:15px;'>&nbsp;" +myArray3[i]+ "</td></tr>";
		
	  if($(this).data('info3')=="Hawaii"){
				myTable2+="<tr><td>Waterfowl are not hunted in <strong>Hawaii</strong>.</td></tr>";
			
		}
		else{
		myTable2+="<tr><td><strong>"+stateid+"</strong> ranks...</td></tr><tr><td class='indented'>"+staterank+" in the U.S. in waterfowl harvest</td></tr><tr><td class='indented'>"+duckrank+" in duck harvest</td></tr><tr><td class='indented'>"+gooserank+" in goose harvest</td></tr>";	
		//myTable2+="<tr><td style='height:15px;'> " + i + " - " +myArray3[i]+ "</td>";
		myTable2+= "<table>"; //<tr><td style='height:15px; color:black; font-variant: small-caps; font-weight: bold; font-style:italic;'></td>
		myTable2+="<tr><td>The top harvested duck species are</td></tr><tr><td class='indented'>"+statespecies+"</td></tr>";
		if(stateid==" Alaska"){
				myTable2+="<tr><td><br><strong><p><span id='subhead-text' style='margin-left: 0px; font-weight: normal;'>Alaskan harvest data are not <br>available at the borough-level.</span></p></strong></td></tr>";
			}
			else{
			myTable2+="<tr><td><br><p><span id='subhead-text' style='margin-left: 0px; font-weight: normal;'>Hover over the state map below<br> for county-level information!</span></p></td></td>"
			}
		}
	   
	   myTable2+="</table>";
	
	 document.getElementById('mytable2').innerHTML = myTable2;

	 $('.statesmap').mouseover(function(){
	$('#info-box').css('display','none');
	});
	
	 $("path, circle").mouseleave(function(e) {
  $('#info-box').css('display','none');
});
	});
//})
/*
$("path, circle").click(function(e) {
  $('#info-box').css('display','block');
  $('#info-box').html($(this).data('info2'));
   $('object').on("click", function(){
            alert($(this).attr('id'));
			console.log('cali');
        });
});
*/
$("path, circle").mousemove(function(e) {
	//paths = svg1.querySelectorAll('.statesmap > path');
	//
  $('#info-box').css('top',e.pageY-$('#info-box').height()-160);
// $('#info-box').css('right',e.pageX-$('#info-box').width());
	
}).mouseover();


var ios = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
if(ios) {
  $('a').on('click touchend', function() {
    var link = $(this).attr('href');
    window.open(link,'_blank');
    return false;
  });
}

//CALIFORNIA
CA.addEventListener('click', function(ev){
	
	
	/*
	 var $paths = $('path'); // Get all paths
    for (var i=0;i<$paths.length;i++){ // Iterate through each one
        var $path =$($paths[i]); // This gets a single path
        //console.log($path.data('info2'));
    }
	var $svg = d3.selectAll("path.california");
	var $svg = d3.selectAll("path");
	for (var i=0;i<$svg.length;i++){ // Iterate through each one
        var $path =$($svg[i]); // This gets a single path
        console.log($path.data('info2'));
    }
	*/
	 
	//var svg = $("#svgCalifornia").getSVG();
    //use jquery functions to do some thing
	

    //console.log(svgCalifornia.find("g path:first-child()").data('info2'));
      //$('.california').mouseenter(function(){
	//.getElementById('svgCalifornia').addEventListener('mouseover', function(ev){
		//console.log('cali');
		
		// if (typeof $(this).data('info2') != 'undefined'){
			
	hideall();
	hideselect();    
	
	svgCalifornia.style.display = 'block';
	CA.style.fill = '#002868';
	var svgW=window.innerWidth
	var svgH=window.innerHeight
    var bb=svgCalifornia.getBBox()
	var bbx=bb.x
	var bby=bb.y
	var bbw=bb.width
	var bbh=bb.height
    svgCalifornia.setAttribute("viewBox",bbx+" "+bby+" "+bbw+" "+bbh )
    svgCalifornia.setAttribute("width",svgW/1.5)
    svgCalifornia.setAttribute("height",svgH)
	
	var myArray2    = new Array();
	
	 paths = svgCalifornia.querySelectorAll('.california > path');
	 stringstate = ', CA'
	pathlength=paths.length;
		for(var i=0; i<pathlength; ++i) {
		pathdata = paths[i].attributes['data-info2'].value;
		pathdata2 = paths[i].attributes['data-info5'].value;
		if(parseInt(pathdata)< 11){
		pathdata2=pathdata2.replace(stringstate,'')
		if(pathdata== '1'){
			myArray2[1] =pathdata2;
			continue;
		}if(pathdata== '2'){
			myArray2[2] =pathdata2;
			continue;
		}if(pathdata== '3'){
			myArray2[3] =pathdata2;
			continue;
		}if(pathdata== '4'){
			myArray2[4] =pathdata2;
			continue;
		}if(pathdata== '5'){
			myArray2[5] =pathdata2;
			continue;
		}if(pathdata== '6'){
			myArray2[6] =pathdata2;
			continue;
		}if(pathdata== '7'){
			myArray2[7] =pathdata2;
			continue;
		}if(pathdata== '8'){
			myArray2[8] =pathdata2;
			continue;
		}if(pathdata== '9'){
			myArray2[9] =pathdata2;
			continue;
		}if(pathdata== '10'){
			myArray2[10] =pathdata2;
			continue;
		}
		}
	}
	var myTable= "<table>"; //<tr><td style='height:15px; color:black; font-variant: small-caps; font-weight: bolder; font-size:larger;'>Top Ranked Counties within the State</td></tr>
	  for (var i=1; i<12; i++) {
		if (i==11){
			myTable+="<tr><td style='height:15px; color:black; font-variant: small-caps; font-weight: bold; font-style:italic;'>Highlighted county rank within the state (out of "+pathlength+")</td></tr><tr><td style='height:15px;'>&nbsp;</td></tr>";
			myTable+="<tr><td style='height:15px; color:black; font-variant: small-caps; font-weight: bold; font-style:italic;'>Highlighted county rank within the country (out of 3111)</td></tr><tr><td style='heigh:15px;'>&nbsp;</td></tr>";
		}
		else{
		myTable+="<td style='height:15px;'> " +myArray2[i]+ "</td></tr>";
		}
	  }  
	   myTable+="</table>";
	 document.getElementById('mytable').innerHTML = myTable;

	$("path, circle").mouseenter(function(e) {
	  $('#info-box').css('display','block');
	  var var1 = ""
	  var var3 = ""
	  var var4 = ""
	  var type1=" County"
	  if (typeof $(this).data('info5') != 'undefined'){
	  var stringcounty = $(this).data('info5').replace(stringstate,'');
	  var var1 = $(this).data('info');
	  var var3 = $(this).data('info2')
	  var var4 = $(this).data('info5')
	  var nationrank=suffix(var1);
	  var3=suffix(var3);
	  if (nationrank.length=='6'){
		  nationrank=nationrank.replace(nationrank[0],nationrank[0]+',');
		  }
	  }
	  //!San Francisco
	   if (nationrank=="2,927th"){
			 if (stringcounty=="!San Francisco"){
			   stringcounty=stringcounty.replace('!','');
			   type1=" City"
		   }
		   
		   $('#info-box').html(stringcounty +" County: <strong>No harvest reported in survey</strong>");
		  type1=" County"
		  }
		  else{
			  if (stringcounty=="!San Francisco"){
			   stringcounty=stringcounty.replace('!','');
			   type1=" City"
			  }
	  $('#info-box').html(stringcounty +type1+" ranks <strong>"+var3+"</strong> out of "+pathlength+" counties in the state<br>and <strong>"+nationrank+"</strong> out of 3,111 counties in the U.S.");
	  type1=" County"
		  }
	  
		var myTable= "<table><tr><td style='height:15px; color:black; font-variant: small-caps; font-weight: bolder; font-size:larger;'>Top Ranked Counties within the State</td></tr>";
	  for (var i=1; i<12; i++) {
		if (i==11){
			myTable+="<tr><td style='height:15px; color:black; font-variant: small-caps; font-weight: bold; font-style:italic;'>Highlighted county rank within the state (out of "+pathlength+")</td></tr><tr><td style='height:15px;'>&nbsp;" +var4+" - "+var3+ "</td></tr>";
			myTable+="<tr><td style='height:15px; color:black; font-variant: small-caps; font-weight: bold; font-style:italic;'>Highlighted county rank within the country (out of 3111)</td></tr><tr><td style='heigh:15px;'>&nbsp;" +var4+" - "+var1+ "</td></tr>";
		}
		else{
		myTable+="<td style='height:15px;'> " +myArray2[i]+ "</td></tr>";
		}
	  }  
	   myTable+="</table>";
	 document.getElementById('mytable').innerHTML = myTable;
	 });
	
	svgCalifornia.addEventListener('click', function(ev){
		//svgCalifornia.style.display = 'none';
		svg1.style.display = 'block';
		return;
	})
	$("path, circle").mouseleave(function(e) {
  $('#info-box').css('display','none');
});
})
AZ.addEventListener('click', function(ev){
	hideall();
	hideselect();
	svgArizona.style.display = 'block';
	AZ.style.fill = '#002868';
	var svgW=window.innerWidth
	var svgH=window.innerHeight
    var bb=svgArizona.getBBox()
	var bbx=bb.x
	var bby=bb.y
	var bbw=bb.width
	var bbh=bb.height
    svgArizona.setAttribute("viewBox",bbx+" "+bby+" "+bbw+" "+bbh )
    svgArizona.setAttribute("width",svgW/1.5)
    svgArizona.setAttribute("height",svgH)
	var myArray2    = new Array();
	 paths = svgArizona.querySelectorAll('.arizona > path');
	 stringstate = ', AZ'
	pathlength=paths.length;
		for(var i=0; i<pathlength; ++i) {
		pathdata = paths[i].attributes['data-info2'].value;
		pathdata2 = paths[i].attributes['data-info5'].value;
		if(parseInt(pathdata)< 11){
		pathdata2=pathdata2.replace(stringstate,'')
		if(pathdata== '1'){
			myArray2[1] =pathdata2;
			continue;
		}if(pathdata== '2'){
			myArray2[2] =pathdata2;
			continue;
		}if(pathdata== '3'){
			myArray2[3] =pathdata2;
			continue;
		}if(pathdata== '4'){
			myArray2[4] =pathdata2;
			continue;
		}if(pathdata== '5'){
			myArray2[5] =pathdata2;
			continue;
		}if(pathdata== '6'){
			myArray2[6] =pathdata2;
			continue;
		}if(pathdata== '7'){
			myArray2[7] =pathdata2;
			continue;
		}if(pathdata== '8'){
			myArray2[8] =pathdata2;
			continue;
		}if(pathdata== '9'){
			myArray2[9] =pathdata2;
			continue;
		}if(pathdata== '10'){
			myArray2[10] =pathdata2;
			continue;
		}
		}
	}
	var myTable= "<table><tr><td style='height:15px; color:black; font-variant: small-caps; font-weight: bolder; font-size:larger;'>Top Ranked Counties within the State</td></tr>";
	  for (var i=1; i<12; i++) {
		if (i==11){
			myTable+="<tr><td style='height:15px; color:black; font-variant: small-caps; font-weight: bold; font-style:italic;'>Highlighted county rank within the state (out of "+pathlength+")</td></tr><tr><td style='height:15px;'>&nbsp;</td></tr>";
			myTable+="<tr><td style='height:15px; color:black; font-variant: small-caps; font-weight: bold; font-style:italic;'>Highlighted county rank within the country (out of 3111)</td></tr><tr><td style='heigh:15px;'>&nbsp;</td></tr>";
		}
		else{
		myTable+="<td style='height:15px;'> " +myArray2[i]+ "</td></tr>";
		}
	  }  
	   myTable+="</table>";
	 document.getElementById('mytable').innerHTML = myTable;
	  var var1 = "";
	  var var3 = "";
	  var var4 = "";
	  var nationrank="";
	  var stringcounty ="";
	  
	$("path, circle").mouseenter(function(e) {
	  $('#info-box').css('display','block');
	  if (typeof $(this).data('info5') != 'undefined'){
	  stringcounty = $(this).data('info5').replace(stringstate,'');
	  var1 = $(this).data('info');
	  var3 = $(this).data('info2')
	   var4 = $(this).data('info5')
	   nationrank=suffix(var1);
	  var3=suffix(var3);
	  if (nationrank.length=='6'){
		  nationrank=nationrank.replace(nationrank[0],nationrank[0]+',');
		  }
	  }
	   if (nationrank=="2,927th"){
			  $('#info-box').html(stringcounty +" County: <strong>No harvest reported in survey</strong>");
		  }
		  else{
	  $('#info-box').html(stringcounty +" County ranks <strong>"+var3+"</strong> out of "+pathlength+" counties in the state<br>and <strong>"+nationrank+"</strong> out of 3,111 counties in the U.S.");
		  }
	  
	  
		myTable= "<table><tr><td style='height:15px; color:black; font-variant: small-caps; font-weight: bolder; font-size:larger;'>Top Ranked Counties within the State</td></tr>";
	  for (var i=1; i<12; i++) {
		if (i==11){
			myTable+="<tr><td style='height:15px; color:black; font-variant: small-caps; font-weight: bold; font-style:italic;'>Highlighted county rank within the state (out of "+pathlength+")</td></tr><tr><td style='height:15px;'>&nbsp;" +var4+" - "+var3+ "</td></tr>";
			myTable+="<tr><td style='height:15px; color:black; font-variant: small-caps; font-weight: bold; font-style:italic;'>Highlighted county rank within the country (out of 3111)</td></tr><tr><td style='heigh:15px;'>&nbsp;" +var4+" - "+var1+ "</td></tr>";
		}
		else{
		myTable+="<td style='height:15px;'> " +myArray2[i]+ "</td></tr>";
		}
	  }  
	   myTable+="</table>";
	 document.getElementById('mytable').innerHTML = myTable;
	 });
	svgArizona.addEventListener('click', function(ev){
		//svgArizona.style.display = 'none';
		svg1.style.display = 'block';
		return;
	})
	$("path, circle").mouseleave(function(e) {
  $('#info-box').css('display','none');
});
})

//TEXAS
TX.addEventListener('click', function(ev){
	
	hideall();
	hideselect();
	svgTexas.style.display = 'block';
	
	TX.style.fill = '#002868';
	var svgW=window.innerWidth
	var svgH=window.innerHeight
    var bb=svgTexas.getBBox()
	var bbx=bb.x
	var bby=bb.y
	var bbw=bb.width
	var bbh=bb.height
    svgTexas.setAttribute("viewBox",bbx+" "+bby+" "+bbw+" "+bbh )
    svgTexas.setAttribute("width",svgW/1.5)
    svgTexas.setAttribute("height",svgH)
	var myArray2    = new Array();
	 paths = svgTexas.querySelectorAll('.texas > path');
	 stringstate = ', TX'
	pathlength=paths.length;
	pathlength=paths.length;
		for(var i=0; i<pathlength; ++i) {
		pathdata = paths[i].attributes['data-info2'].value;
		pathdata2 = paths[i].attributes['data-info5'].value;
		if(parseInt(pathdata)< 11){
		pathdata2=pathdata2.replace(stringstate,'')
		if(pathdata== '1'){
			myArray2[1] =pathdata2;
			continue;
		}if(pathdata== '2'){
			myArray2[2] =pathdata2;
			continue;
		}if(pathdata== '3'){
			myArray2[3] =pathdata2;
			continue;
		}if(pathdata== '4'){
			myArray2[4] =pathdata2;
			continue;
		}if(pathdata== '5'){
			myArray2[5] =pathdata2;
			continue;
		}if(pathdata== '6'){
			myArray2[6] =pathdata2;
			continue;
		}if(pathdata== '7'){
			myArray2[7] =pathdata2;
			continue;
		}if(pathdata== '8'){
			myArray2[8] =pathdata2;
			continue;
		}if(pathdata== '9'){
			myArray2[9] =pathdata2;
			continue;
		}if(pathdata== '10'){
			myArray2[10] =pathdata2;
			continue;
		}
		}
	}
	var myTable= "<table><tr><td style='height:15px; color:black; font-variant: small-caps; font-weight: bolder; font-size:larger;'>Top Ranked Counties within the State</td></tr>";
	  for (var i=1; i<12; i++) {
		if (i==11){
			myTable+="<tr><td style='height:15px; color:black; font-variant: small-caps; font-weight: bold; font-style:italic;'>Highlighted county rank within the state (out of "+pathlength+")</td></tr><tr><td style='height:15px;'>&nbsp;</td></tr>";
			myTable+="<tr><td style='height:15px; color:black; font-variant: small-caps; font-weight: bold; font-style:italic;'>Highlighted county rank within the country (out of 3111)</td></tr><tr><td style='heigh:15px;'>&nbsp;</td></tr>";
		}
		else{
		myTable+="<td style='height:15px;'> " +myArray2[i]+ "</td></tr>";
		}
	  }  
	   myTable+="</table>";
	 document.getElementById('mytable').innerHTML = myTable;
	  var var1 = "";
	  var var3 = "";
	  var var4 = "";
	  var nationrank="";
	  var stringcounty ="";
	  
	$("path, circle").mouseenter(function(e) {
	  $('#info-box').css('display','block');
	  if (typeof $(this).data('info5') != 'undefined'){
	  stringcounty = $(this).data('info5').replace(stringstate,'');
	  var1 = $(this).data('info');
	  var3 = $(this).data('info2')
	   var4 = $(this).data('info5')
	   nationrank=suffix(var1);
	  var3=suffix(var3);
	  if (nationrank.length=='6'){
		  nationrank=nationrank.replace(nationrank[0],nationrank[0]+',');
		  }
	  }
	   if (nationrank=="2,927th"){
			  $('#info-box').html(stringcounty +" County: <strong>No harvest reported in survey</strong>");
		  }
		  else{
	  $('#info-box').html(stringcounty +" County ranks <strong>"+var3+"</strong> out of "+pathlength+" counties in the state<br>and <strong>"+nationrank+"</strong> out of 3,111 counties in the U.S.");
		  }
	  
	  
		myTable= "<table><tr><td style='height:15px; color:black; font-variant: small-caps; font-weight: bolder; font-size:larger;'>Top Ranked Counties within the State</td></tr>";
	  for (var i=1; i<12; i++) {
		if (i==11){
			myTable+="<tr><td style='height:15px; color:black; font-variant: small-caps; font-weight: bold; font-style:italic;'>Highlighted county rank within the state (out of "+pathlength+")</td></tr><tr><td style='height:15px;'>&nbsp;" +var4+" - "+var3+ "</td></tr>";
			myTable+="<tr><td style='height:15px; color:black; font-variant: small-caps; font-weight: bold; font-style:italic;'>Highlighted county rank within the country (out of 3111)</td></tr><tr><td style='heigh:15px;'>&nbsp;" +var4+" - "+var1+ "</td></tr>";
		}
		else{
		myTable+="<td style='height:15px;'> " +myArray2[i]+ "</td></tr>";
		}
	  }  
	   myTable+="</table>";
	 document.getElementById('mytable').innerHTML = myTable;
	 });
	document.getElementById('svgTexas').addEventListener('click', function(ev){
		//svgTexas.style.display = 'none';
		svg1.style.display = 'block';
	})
		$("path, circle").mouseleave(function(e) {
  $('#info-box').css('display','none');
});
	
})

//NORTH DAKOTA
ND.addEventListener('click', function(ev){
	hideall();
	hideselect();
	svgNorthdakota.style.display = 'block';
	
	ND.style.fill = '#002868';
	var svgW=window.innerWidth
	var svgH=window.innerHeight
    var bb=svgNorthdakota.getBBox()
	var bbx=bb.x
	var bby=bb.y
	var bbw=bb.width
	var bbh=bb.height
    svgNorthdakota.setAttribute("viewBox",bbx+" "+bby+" "+bbw+" "+bbh )
    svgNorthdakota.setAttribute("width",svgW/1.5)
    svgNorthdakota.setAttribute("height",svgH)
var myArray2    = new Array();
	 paths = svgNorthdakota.querySelectorAll('.northdakota > path');
	 stringstate = ', ND'
	pathlength=paths.length;
		for(var i=0; i<pathlength; ++i) {
		pathdata = paths[i].attributes['data-info2'].value;
		pathdata2 = paths[i].attributes['data-info5'].value;
		if(parseInt(pathdata)< 11){
		pathdata2=pathdata2.replace(stringstate,'')
		if(pathdata== '1'){
			myArray2[1] =pathdata2;
			continue;
		}if(pathdata== '2'){
			myArray2[2] =pathdata2;
			continue;
		}if(pathdata== '3'){
			myArray2[3] =pathdata2;
			continue;
		}if(pathdata== '4'){
			myArray2[4] =pathdata2;
			continue;
		}if(pathdata== '5'){
			myArray2[5] =pathdata2;
			continue;
		}if(pathdata== '6'){
			myArray2[6] =pathdata2;
			continue;
		}if(pathdata== '7'){
			myArray2[7] =pathdata2;
			continue;
		}if(pathdata== '8'){
			myArray2[8] =pathdata2;
			continue;
		}if(pathdata== '9'){
			myArray2[9] =pathdata2;
			continue;
		}if(pathdata== '10'){
			myArray2[10] =pathdata2;
			continue;
		}
		}
	}
	var myTable= "<table><tr><td style='height:15px; color:black; font-variant: small-caps; font-weight: bolder; font-size:larger;'>Top Ranked Counties within the State</td></tr>";
	  for (var i=1; i<12; i++) {
		if (i==11){
			myTable+="<tr><td style='height:15px; color:black; font-variant: small-caps; font-weight: bold; font-style:italic;'>Highlighted county rank within the state (out of "+pathlength+")</td></tr><tr><td style='height:15px;'>&nbsp;</td></tr>";
			myTable+="<tr><td style='height:15px; color:black; font-variant: small-caps; font-weight: bold; font-style:italic;'>Highlighted county rank within the country (out of 3111)</td></tr><tr><td style='heigh:15px;'>&nbsp;</td></tr>";
		}
		else{
		myTable+="<td style='height:15px;'> " +myArray2[i]+ "</td></tr>";
		}
	  }  
	   myTable+="</table>";
	 document.getElementById('mytable').innerHTML = myTable;
	  var var1 = "";
	  var var3 = "";
	  var var4 = "";
	  var nationrank="";
	  var stringcounty ="";
	  
	$("path, circle").mouseenter(function(e) {
	  $('#info-box').css('display','block');
	  if (typeof $(this).data('info5') != 'undefined'){
	  stringcounty = $(this).data('info5').replace(stringstate,'');
	  var1 = $(this).data('info');
	  var3 = $(this).data('info2')
	   var4 = $(this).data('info5')
	   nationrank=suffix(var1);
	  var3=suffix(var3);
	  if (nationrank.length=='6'){
		  nationrank=nationrank.replace(nationrank[0],nationrank[0]+',');
		  }
	  }
	   if (nationrank=="2,927th"){
			  $('#info-box').html(stringcounty +" County: <strong>No harvest reported in survey</strong>");
		  }
		  else{
	  $('#info-box').html(stringcounty +" County ranks <strong>"+var3+"</strong> out of "+pathlength+" counties in the state<br>and <strong>"+nationrank+"</strong> out of 3,111 counties in the U.S.");
		  }
	  
	  
		myTable= "<table><tr><td style='height:15px; color:black; font-variant: small-caps; font-weight: bolder; font-size:larger;'>Top Ranked Counties within the State</td></tr>";
	  for (var i=1; i<12; i++) {
		if (i==11){
			myTable+="<tr><td style='height:15px; color:black; font-variant: small-caps; font-weight: bold; font-style:italic;'>Highlighted county rank within the state (out of "+pathlength+")</td></tr><tr><td style='height:15px;'>&nbsp;" +var4+" - "+var3+ "</td></tr>";
			myTable+="<tr><td style='height:15px; color:black; font-variant: small-caps; font-weight: bold; font-style:italic;'>Highlighted county rank within the country (out of 3111)</td></tr><tr><td style='heigh:15px;'>&nbsp;" +var4+" - "+var1+ "</td></tr>";
		}
		else{
		myTable+="<td style='height:15px;'> " +myArray2[i]+ "</td></tr>";
		}
	  }  
	   myTable+="</table>";
	 document.getElementById('mytable').innerHTML = myTable;
	 });
	svgNorthdakota.addEventListener('click', function(ev){
		//svgNorthdakota.style.display = 'none';
		svg1.style.display = 'block';
	})
	$("path, circle").mouseleave(function(e) {
  $('#info-box').css('display','none');
});
})

//LOUISIANA
LA.addEventListener('click', function(ev){
	hideall();
	hideselect();
	svgLouisiana.style.display = 'block';
	
	LA.style.fill = '#002868';
	var svgW=window.innerWidth
	var svgH=window.innerHeight
    var bb=svgLouisiana.getBBox()
	var bbx=bb.x
	var bby=bb.y
	var bbw=bb.width
	var bbh=bb.height
    svgLouisiana.setAttribute("viewBox",bbx+" "+bby+" "+bbw+" "+bbh )
    svgLouisiana.setAttribute("width",svgW/1.5)
    svgLouisiana.setAttribute("height",svgH)
	var myArray2    = new Array();
	 paths = svgLouisiana.querySelectorAll('.louisiana > path');
	 stringstate = ', LA'
	pathlength=paths.length;
		for(var i=0; i<pathlength; ++i) {
		pathdata = paths[i].attributes['data-info2'].value;
		pathdata2 = paths[i].attributes['data-info5'].value;
		if(parseInt(pathdata)< 11){
		pathdata2=pathdata2.replace(stringstate,'')
		if(pathdata== '1'){
			myArray2[1] =pathdata2;
			continue;
		}if(pathdata== '2'){
			myArray2[2] =pathdata2;
			continue;
		}if(pathdata== '3'){
			myArray2[3] =pathdata2;
			continue;
		}if(pathdata== '4'){
			myArray2[4] =pathdata2;
			continue;
		}if(pathdata== '5'){
			myArray2[5] =pathdata2;
			continue;
		}if(pathdata== '6'){
			myArray2[6] =pathdata2;
			continue;
		}if(pathdata== '7'){
			myArray2[7] =pathdata2;
			continue;
		}if(pathdata== '8'){
			myArray2[8] =pathdata2;
			continue;
		}if(pathdata== '9'){
			myArray2[9] =pathdata2;
			continue;
		}if(pathdata== '10'){
			myArray2[10] =pathdata2;
			continue;
		}
		}
	}
	var myTable= "<table><tr><td style='height:15px; color:black; font-variant: small-caps; font-weight: bolder; font-size:larger;'>Top Ranked parishes within the State</td></tr>";
	  for (var i=1; i<12; i++) {
		if (i==11){
			myTable+="<tr><td style='height:15px; color:black; font-variant: small-caps; font-weight: bold; font-style:italic;'>Highlighted parish rank within the state (out of "+pathlength+")</td></tr><tr><td style='height:15px;'>&nbsp;</td></tr>";
			myTable+="<tr><td style='height:15px; color:black; font-variant: small-caps; font-weight: bold; font-style:italic;'>Highlighted parish rank within the country (out of 3111)</td></tr><tr><td style='heigh:15px;'>&nbsp;</td></tr>";
		}
		else{
		myTable+="<td style='height:15px;'> " +myArray2[i]+ "</td></tr>";
		}
	  }  
	   myTable+="</table>";
	 document.getElementById('mytable').innerHTML = myTable;
	  var var1 = "";
	  var var3 = "";
	  var var4 = "";
	  var nationrank="";
	  var stringcounty ="";
	  
	$("path, circle").mouseenter(function(e) {
	  $('#info-box').css('display','block');
	  if (typeof $(this).data('info5') != 'undefined'){
	  stringcounty = $(this).data('info5').replace(stringstate,'');
	  var1 = $(this).data('info');
	  var3 = $(this).data('info2')
	   var4 = $(this).data('info5')
	   nationrank=suffix(var1);
	  var3=suffix(var3);
	  if (nationrank.length=='6'){
		  nationrank=nationrank.replace(nationrank[0],nationrank[0]+',');
		  }
	  }
	   if (nationrank=="2,927th"){
			  $('#info-box').html(stringcounty +" parish: <strong>No harvest reported in survey</strong>");
		  }
		  else{
	  $('#info-box').html(stringcounty +" Parish ranks <strong>"+var3+"</strong> out of "+pathlength+" parishes in the state<br>and <strong>"+nationrank+"</strong> out of 3,111 parishes in the U.S.");
		  }
	  
	  
		myTable= "<table><tr><td style='height:15px; color:black; font-variant: small-caps; font-weight: bolder; font-size:larger;'>Top Ranked parishes within the State</td></tr>";
	  for (var i=1; i<12; i++) {
		if (i==11){
			myTable+="<tr><td style='height:15px; color:black; font-variant: small-caps; font-weight: bold; font-style:italic;'>Highlighted parish rank within the state (out of "+pathlength+")</td></tr><tr><td style='height:15px;'>&nbsp;" +var4+" - "+var3+ "</td></tr>";
			myTable+="<tr><td style='height:15px; color:black; font-variant: small-caps; font-weight: bold; font-style:italic;'>Highlighted parish rank within the country (out of 3111)</td></tr><tr><td style='heigh:15px;'>&nbsp;" +var4+" - "+var1+ "</td></tr>";
		}
		else{
		myTable+="<td style='height:15px;'> " +myArray2[i]+ "</td></tr>";
		}
	  }  
	   myTable+="</table>";
	 document.getElementById('mytable').innerHTML = myTable;
	 });
	svgLouisiana.addEventListener('click', function(ev){
//svgLouisiana.style.display = 'none';
		svg1.style.display = 'block';
	})
	$("path, circle").mouseleave(function(e) {
  $('#info-box').css('display','none');
});
})


AK.addEventListener('click', function(ev){
	hideall();
	hideselect();
	//svgAlaska.style.display = 'block';
	AK.style.fill = '#002868';
	var svgW=window.innerWidth
	var svgH=window.innerHeight
    var bb=svgAlaska.getBBox()
	var bbx=bb.x
	var bby=bb.y
	var bbw=bb.width
	var bbh=bb.height
    svgAlaska.setAttribute("viewBox",bbx+" "+bby+" "+bbw+" "+bbh )
    svgAlaska.setAttribute("width",svgW/1.5)
    svgAlaska.setAttribute("height",svgH)
	var myArray2    = new Array();
	 paths = svgAlaska.querySelectorAll('.alaska > path');
	 stringstate = ', AK'
	pathlength=paths.length;
		for(var i=0; i<pathlength; ++i) {
		pathdata = paths[i].attributes['data-info2'].value;
		pathdata2 = paths[i].attributes['data-info5'].value;
		if(parseInt(pathdata)< 11){
		pathdata2=pathdata2.replace(stringstate,'')
		if(pathdata== '1'){
			myArray2[1] =pathdata2;
			continue;
		}if(pathdata== '2'){
			myArray2[2] =pathdata2;
			continue;
		}if(pathdata== '3'){
			myArray2[3] =pathdata2;
			continue;
		}if(pathdata== '4'){
			myArray2[4] =pathdata2;
			continue;
		}if(pathdata== '5'){
			myArray2[5] =pathdata2;
			continue;
		}if(pathdata== '6'){
			myArray2[6] =pathdata2;
			continue;
		}if(pathdata== '7'){
			myArray2[7] =pathdata2;
			continue;
		}if(pathdata== '8'){
			myArray2[8] =pathdata2;
			continue;
		}if(pathdata== '9'){
			myArray2[9] =pathdata2;
			continue;
		}if(pathdata== '10'){
			myArray2[10] =pathdata2;
			continue;
		}
		}
	}
	var myTable= "<table><tr><td style='height:15px; color:black; font-variant: small-caps; font-weight: bolder; font-size:larger;'>Top Ranked Counties within the State</td></tr>";
	  for (var i=1; i<12; i++) {
		if (i==11){
			myTable+="<tr><td style='height:15px; color:black; font-variant: small-caps; font-weight: bold; font-style:italic;'>Highlighted county rank within the state (out of "+pathlength+")</td></tr><tr><td style='height:15px;'>&nbsp;</td></tr>";
			myTable+="<tr><td style='height:15px; color:black; font-variant: small-caps; font-weight: bold; font-style:italic;'>Highlighted county rank within the country (out of 3111)</td></tr><tr><td style='heigh:15px;'>&nbsp;</td></tr>";
		}
		else{
		myTable+="<td style='height:15px;'> " +myArray2[i]+ "</td></tr>";
		}
	  }  
	   myTable+="</table>";
	 document.getElementById('mytable').innerHTML = myTable;
	  var var1 = "";
	  var var3 = "";
	  var var4 = "";
	  var nationrank="";
	  var stringcounty ="";
	  
	$("path, circle").mouseenter(function(e) {
	  $('#info-box').css('display','block');
	  if (typeof $(this).data('info5') != 'undefined'){
	  stringcounty = $(this).data('info5').replace(stringstate,'');
	  var1 = $(this).data('info');
	  var3 = $(this).data('info2')
	   var4 = $(this).data('info5')
	   nationrank=suffix(var1);
	  var3=suffix(var3);
	  if (nationrank.length=='6'){
		  nationrank=nationrank.replace(nationrank[0],nationrank[0]+',');
		  }
	  }
	   if (nationrank=="2,927th"){
			  $('#info-box').html(stringcounty +" County: <strong>No harvest reported in survey</strong>");
		  }
		  else{
	  $('#info-box').html(stringcounty +" County ranks <strong>"+var3+"</strong> out of "+pathlength+" counties in the state<br>and <strong>"+nationrank+"</strong> out of 3,111 counties in the U.S.");
		  }
	  
	  
		myTable= "<table><tr><td style='height:15px; color:black; font-variant: small-caps; font-weight: bolder; font-size:larger;'>Top Ranked Counties within the State</td></tr>";
	  for (var i=1; i<12; i++) {
		if (i==11){
			myTable+="<tr><td style='height:15px; color:black; font-variant: small-caps; font-weight: bold; font-style:italic;'>Highlighted county rank within the state (out of "+pathlength+")</td></tr><tr><td style='height:15px;'>&nbsp;" +var4+" - "+var3+ "</td></tr>";
			myTable+="<tr><td style='height:15px; color:black; font-variant: small-caps; font-weight: bold; font-style:italic;'>Highlighted county rank within the country (out of 3111)</td></tr><tr><td style='heigh:15px;'>&nbsp;" +var4+" - "+var1+ "</td></tr>";
		}
		else{
		myTable+="<td style='height:15px;'> " +myArray2[i]+ "</td></tr>";
		}
	  }  
	   myTable+="</table>";
	 document.getElementById('mytable').innerHTML = myTable;
	 });
	svgAlaska.addEventListener('click', function(ev){
		//svgAlaska.style.display = 'none';
		svg1.style.display = 'block';
		return;
	})
	$("path, circle").mouseleave(function(e) {
  $('#info-box').css('display','none');
});
})

AL.addEventListener('click', function(ev){
	hideall();
	hideselect();
	svgAlabama.style.display = 'block';
	
	AL.style.fill = '#002868';
	var svgW=window.innerWidth
	var svgH=window.innerHeight
    var bb=svgAlabama.getBBox()
	var bbx=bb.x
	var bby=bb.y
	var bbw=bb.width
	var bbh=bb.height
    svgAlabama.setAttribute("viewBox",bbx+" "+bby+" "+bbw+" "+bbh )
    svgAlabama.setAttribute("width",svgW/1.5)
    svgAlabama.setAttribute("height",svgH)
	var myArray2    = new Array();
	 paths = svgAlabama.querySelectorAll('.alabama > path');
	 stringstate = ', AL'
	pathlength=paths.length;
		for(var i=0; i<pathlength; ++i) {
		pathdata = paths[i].attributes['data-info2'].value;
		pathdata2 = paths[i].attributes['data-info5'].value;
		if(parseInt(pathdata)< 11){
		pathdata2=pathdata2.replace(stringstate,'')
		if(pathdata== '1'){
			myArray2[1] =pathdata2;
			continue;
		}if(pathdata== '2'){
			myArray2[2] =pathdata2;
			continue;
		}if(pathdata== '3'){
			myArray2[3] =pathdata2;
			continue;
		}if(pathdata== '4'){
			myArray2[4] =pathdata2;
			continue;
		}if(pathdata== '5'){
			myArray2[5] =pathdata2;
			continue;
		}if(pathdata== '6'){
			myArray2[6] =pathdata2;
			continue;
		}if(pathdata== '7'){
			myArray2[7] =pathdata2;
			continue;
		}if(pathdata== '8'){
			myArray2[8] =pathdata2;
			continue;
		}if(pathdata== '9'){
			myArray2[9] =pathdata2;
			continue;
		}if(pathdata== '10'){
			myArray2[10] =pathdata2;
			continue;
		}
		}
	}
	var myTable= "<table><tr><td style='height:15px; color:black; font-variant: small-caps; font-weight: bolder; font-size:larger;'>Top Ranked Counties within the State</td></tr>";
	  for (var i=1; i<12; i++) {
		if (i==11){
			myTable+="<tr><td style='height:15px; color:black; font-variant: small-caps; font-weight: bold; font-style:italic;'>Highlighted county rank within the state (out of "+pathlength+")</td></tr><tr><td style='height:15px;'>&nbsp;</td></tr>";
			myTable+="<tr><td style='height:15px; color:black; font-variant: small-caps; font-weight: bold; font-style:italic;'>Highlighted county rank within the country (out of 3111)</td></tr><tr><td style='heigh:15px;'>&nbsp;</td></tr>";
		}
		else{
		myTable+="<td style='height:15px;'> " +myArray2[i]+ "</td></tr>";
		}
	  }  
	   myTable+="</table>";
	 document.getElementById('mytable').innerHTML = myTable;
	  var var1 = "";
	  var var3 = "";
	  var var4 = "";
	  var nationrank="";
	  var stringcounty ="";
	  
	$("path, circle").mouseenter(function(e) {
	  $('#info-box').css('display','block');
	  if (typeof $(this).data('info5') != 'undefined'){
	  stringcounty = $(this).data('info5').replace(stringstate,'');
	  var1 = $(this).data('info');
	  var3 = $(this).data('info2')
	   var4 = $(this).data('info5')
	   nationrank=suffix(var1);
	  var3=suffix(var3);
	  if (nationrank.length=='6'){
		  nationrank=nationrank.replace(nationrank[0],nationrank[0]+',');
		  }
	  }
	   if (nationrank=="2,927th"){
			  $('#info-box').html(stringcounty +" County: <strong>No harvest reported in survey</strong>");
		  }
		  else{
	  $('#info-box').html(stringcounty +" County ranks <strong>"+var3+"</strong> out of "+pathlength+" counties in the state<br>and <strong>"+nationrank+"</strong> out of 3,111 counties in the U.S.");
		  }
	  
	  
		myTable= "<table><tr><td style='height:15px; color:black; font-variant: small-caps; font-weight: bolder; font-size:larger;'>Top Ranked Counties within the State</td></tr>";
	  for (var i=1; i<12; i++) {
		if (i==11){
			myTable+="<tr><td style='height:15px; color:black; font-variant: small-caps; font-weight: bold; font-style:italic;'>Highlighted county rank within the state (out of "+pathlength+")</td></tr><tr><td style='height:15px;'>&nbsp;" +var4+" - "+var3+ "</td></tr>";
			myTable+="<tr><td style='height:15px; color:black; font-variant: small-caps; font-weight: bold; font-style:italic;'>Highlighted county rank within the country (out of 3111)</td></tr><tr><td style='heigh:15px;'>&nbsp;" +var4+" - "+var1+ "</td></tr>";
		}
		else{
		myTable+="<td style='height:15px;'> " +myArray2[i]+ "</td></tr>";
		}
	  }  
	   myTable+="</table>";
	 document.getElementById('mytable').innerHTML = myTable;
	 });
	svgAlabama.addEventListener('click', function(ev){
		//svgAlabama.style.display = 'none';
		svg1.style.display = 'block';
		return;
	})
	$("path, circle").mouseleave(function(e) {
  $('#info-box').css('display','none');
});
})

AR.addEventListener('click', function(ev){
	hideall();
	hideselect();
	svgArkansas.style.display = 'block';
	
	
  	AR.style.fill = '#002868';
	var svgW=window.innerWidth
	var svgH=window.innerHeight
    var bb=svgArkansas.getBBox()
	var bbx=bb.x
	var bby=bb.y
	var bbw=bb.width
	var bbh=bb.height
    svgArkansas.setAttribute("viewBox",bbx+" "+bby+" "+bbw+" "+bbh )
    svgArkansas.setAttribute("width",svgW/1.5)
    svgArkansas.setAttribute("height",svgH)
		var myArray2    = new Array();
	 paths = svgArkansas.querySelectorAll('.arkansas > path');
	 stringstate = ', AR'
	pathlength=paths.length;
		for(var i=0; i<pathlength; ++i) {
		pathdata = paths[i].attributes['data-info2'].value;
		pathdata2 = paths[i].attributes['data-info5'].value;
		if(parseInt(pathdata)< 11){
		pathdata2=pathdata2.replace(stringstate,'')
		if(pathdata== '1'){
			myArray2[1] =pathdata2;
			continue;
		}if(pathdata== '2'){
			myArray2[2] =pathdata2;
			continue;
		}if(pathdata== '3'){
			myArray2[3] =pathdata2;
			continue;
		}if(pathdata== '4'){
			myArray2[4] =pathdata2;
			continue;
		}if(pathdata== '5'){
			myArray2[5] =pathdata2;
			continue;
		}if(pathdata== '6'){
			myArray2[6] =pathdata2;
			continue;
		}if(pathdata== '7'){
			myArray2[7] =pathdata2;
			continue;
		}if(pathdata== '8'){
			myArray2[8] =pathdata2;
			continue;
		}if(pathdata== '9'){
			myArray2[9] =pathdata2;
			continue;
		}if(pathdata== '10'){
			myArray2[10] =pathdata2;
			continue;
		}
		}
	}
	var myTable= "<table><tr><td style='height:15px; color:black; font-variant: small-caps; font-weight: bolder; font-size:larger;'>Top Ranked Counties within the State</td></tr>";
	  for (var i=1; i<12; i++) {
		if (i==11){
			myTable+="<tr><td style='height:15px; color:black; font-variant: small-caps; font-weight: bold; font-style:italic;'>Highlighted county rank within the state (out of "+pathlength+")</td></tr><tr><td style='height:15px;'>&nbsp;</td></tr>";
			myTable+="<tr><td style='height:15px; color:black; font-variant: small-caps; font-weight: bold; font-style:italic;'>Highlighted county rank within the country (out of 3111)</td></tr><tr><td style='heigh:15px;'>&nbsp;</td></tr>";
		}
		else{
		myTable+="<td style='height:15px;'> " +myArray2[i]+ "</td></tr>";
		}
	  }  
	   myTable+="</table>";
	 document.getElementById('mytable').innerHTML = myTable;
	  var var1 = "";
	  var var3 = "";
	  var var4 = "";
	  var nationrank="";
	  var stringcounty ="";
	  
	$("path, circle").mouseenter(function(e) {
	  $('#info-box').css('display','block');
	  if (typeof $(this).data('info5') != 'undefined'){
	  stringcounty = $(this).data('info5').replace(stringstate,'');
	  var1 = $(this).data('info');
	  var3 = $(this).data('info2')
	   var4 = $(this).data('info5')
	   nationrank=suffix(var1);
	  var3=suffix(var3);
	  if (nationrank.length=='6'){
		  nationrank=nationrank.replace(nationrank[0],nationrank[0]+',');
		  }
	  }
	   if (nationrank=="2,927th"){
			  $('#info-box').html(stringcounty +" County: <strong>No harvest reported in survey</strong>");
		  }
		  else{
	  $('#info-box').html(stringcounty +" County ranks <strong>"+var3+"</strong> out of "+pathlength+" counties in the state<br>and <strong>"+nationrank+"</strong> out of 3,111 counties in the U.S.");
		  }
	  
	  
		myTable= "<table><tr><td style='height:15px; color:black; font-variant: small-caps; font-weight: bolder; font-size:larger;'>Top Ranked Counties within the State</td></tr>";
	  for (var i=1; i<12; i++) {
		if (i==11){
			myTable+="<tr><td style='height:15px; color:black; font-variant: small-caps; font-weight: bold; font-style:italic;'>Highlighted county rank within the state (out of "+pathlength+")</td></tr><tr><td style='height:15px;'>&nbsp;" +var4+" - "+var3+ "</td></tr>";
			myTable+="<tr><td style='height:15px; color:black; font-variant: small-caps; font-weight: bold; font-style:italic;'>Highlighted county rank within the country (out of 3111)</td></tr><tr><td style='heigh:15px;'>&nbsp;" +var4+" - "+var1+ "</td></tr>";
		}
		else{
		myTable+="<td style='height:15px;'> " +myArray2[i]+ "</td></tr>";
		}
	  }  
	   myTable+="</table>";
	 document.getElementById('mytable').innerHTML = myTable;
	 });
	svgArkansas.addEventListener('click', function(ev){
		//svgArkansas.style.display = 'none';
		svg1.style.display = 'block';
		return;
	})
	$("path, circle").mouseleave(function(e) {
  $('#info-box').css('display','none');
});
})

CO.addEventListener('click', function(ev){
	hideall();
	hideselect();
	svgColorado.style.display = 'block';
	
	CO.style.fill = '#002868';
	var svgW=window.innerWidth
	var svgH=window.innerHeight
    var bb=svgColorado.getBBox()
	var bbx=bb.x
	var bby=bb.y
	var bbw=bb.width
	var bbh=bb.height
    svgColorado.setAttribute("viewBox",bbx+" "+bby+" "+bbw+" "+bbh )
    svgColorado.setAttribute("width",svgW/1.5)
    svgColorado.setAttribute("height",svgH)
		var myArray2    = new Array();
	 paths = svgColorado.querySelectorAll('.colorado > path');
	 stringstate = ', CO'
	pathlength=paths.length;
		for(var i=0; i<pathlength; ++i) {
		pathdata = paths[i].attributes['data-info2'].value;
		pathdata2 = paths[i].attributes['data-info5'].value;
		if(parseInt(pathdata)< 11){
		pathdata2=pathdata2.replace(stringstate,'')
		if(pathdata== '1'){
			myArray2[1] =pathdata2;
			continue;
		}if(pathdata== '2'){
			myArray2[2] =pathdata2;
			continue;
		}if(pathdata== '3'){
			myArray2[3] =pathdata2;
			continue;
		}if(pathdata== '4'){
			myArray2[4] =pathdata2;
			continue;
		}if(pathdata== '5'){
			myArray2[5] =pathdata2;
			continue;
		}if(pathdata== '6'){
			myArray2[6] =pathdata2;
			continue;
		}if(pathdata== '7'){
			myArray2[7] =pathdata2;
			continue;
		}if(pathdata== '8'){
			myArray2[8] =pathdata2;
			continue;
		}if(pathdata== '9'){
			myArray2[9] =pathdata2;
			continue;
		}if(pathdata== '10'){
			myArray2[10] =pathdata2;
			continue;
		}
		}
	}
	var myTable= "<table><tr><td style='height:15px; color:black; font-variant: small-caps; font-weight: bolder; font-size:larger;'>Top Ranked Counties within the State</td></tr>";
	  for (var i=1; i<12; i++) {
		if (i==11){
			myTable+="<tr><td style='height:15px; color:black; font-variant: small-caps; font-weight: bold; font-style:italic;'>Highlighted county rank within the state (out of "+pathlength+")</td></tr><tr><td style='height:15px;'>&nbsp;</td></tr>";
			myTable+="<tr><td style='height:15px; color:black; font-variant: small-caps; font-weight: bold; font-style:italic;'>Highlighted county rank within the country (out of 3111)</td></tr><tr><td style='heigh:15px;'>&nbsp;</td></tr>";
		}
		else{
		myTable+="<td style='height:15px;'> " +myArray2[i]+ "</td></tr>";
		}
	  }  
	   myTable+="</table>";
	 document.getElementById('mytable').innerHTML = myTable;
	  var var1 = "";
	  var var3 = "";
	  var var4 = "";
	  var nationrank="";
	  var stringcounty ="";
	  
	$("path, circle").mouseenter(function(e) {
	  $('#info-box').css('display','block');
	  if (typeof $(this).data('info5') != 'undefined'){
	  stringcounty = $(this).data('info5').replace(stringstate,'');
	  var1 = $(this).data('info');
	  var3 = $(this).data('info2')
	   var4 = $(this).data('info5')
	   nationrank=suffix(var1);
	  var3=suffix(var3);
	  if (nationrank.length=='6'){
		  nationrank=nationrank.replace(nationrank[0],nationrank[0]+',');
		  }
	  }
	   if (nationrank=="2,927th"){
			  $('#info-box').html(stringcounty +" County: <strong>No harvest reported in survey</strong>");
		  }
		  else{
	  $('#info-box').html(stringcounty +" County ranks <strong>"+var3+"</strong> out of "+pathlength+" counties in the state<br>and <strong>"+nationrank+"</strong> out of 3,111 counties in the U.S.");
		  }
	  
	  
		myTable= "<table><tr><td style='height:15px; color:black; font-variant: small-caps; font-weight: bolder; font-size:larger;'>Top Ranked Counties within the State</td></tr>";
	  for (var i=1; i<12; i++) {
		if (i==11){
			myTable+="<tr><td style='height:15px; color:black; font-variant: small-caps; font-weight: bold; font-style:italic;'>Highlighted county rank within the state (out of "+pathlength+")</td></tr><tr><td style='height:15px;'>&nbsp;" +var4+" - "+var3+ "</td></tr>";
			myTable+="<tr><td style='height:15px; color:black; font-variant: small-caps; font-weight: bold; font-style:italic;'>Highlighted county rank within the country (out of 3111)</td></tr><tr><td style='heigh:15px;'>&nbsp;" +var4+" - "+var1+ "</td></tr>";
		}
		else{
		myTable+="<td style='height:15px;'> " +myArray2[i]+ "</td></tr>";
		}
	  }  
	   myTable+="</table>";
	 document.getElementById('mytable').innerHTML = myTable;
	 });
	svgColorado.addEventListener('click', function(ev){
		//svgColorado.style.display = 'none';
		svg1.style.display = 'block';
		return;
	})
	$("path, circle").mouseleave(function(e) {
  $('#info-box').css('display','none');
});
})
CT.addEventListener('click', function(ev){
	hideall();
	hideselect();
	svgConnecticut.style.display = 'block';
	
	CT.style.fill = '#002868';
	var svgW=window.innerWidth
	var svgH=window.innerHeight
    var bb=svgConnecticut.getBBox()
	var bbx=bb.x
	var bby=bb.y
	var bbw=bb.width
	var bbh=bb.height
    svgConnecticut.setAttribute("viewBox",bbx+" "+bby+" "+bbw+" "+bbh )
    svgConnecticut.setAttribute("width",svgW/1.5)
    svgConnecticut.setAttribute("height",svgH)
		var myArray2    = new Array();
	 paths = svgConnecticut.querySelectorAll('.connecticut > path');
	 stringstate = ', CT'
	pathlength=paths.length;
		for(var i=0; i<pathlength; ++i) {
		pathdata = paths[i].attributes['data-info2'].value;
		pathdata2 = paths[i].attributes['data-info5'].value;
		if(parseInt(pathdata)< 11){
		pathdata2=pathdata2.replace(stringstate,'')
		if(pathdata== '1'){
			myArray2[1] =pathdata2;
			continue;
		}if(pathdata== '2'){
			myArray2[2] =pathdata2;
			continue;
		}if(pathdata== '3'){
			myArray2[3] =pathdata2;
			continue;
		}if(pathdata== '4'){
			myArray2[4] =pathdata2;
			continue;
		}if(pathdata== '5'){
			myArray2[5] =pathdata2;
			continue;
		}if(pathdata== '6'){
			myArray2[6] =pathdata2;
			continue;
		}if(pathdata== '7'){
			myArray2[7] =pathdata2;
			continue;
		}if(pathdata== '8'){
			myArray2[8] =pathdata2;
			continue;
		}if(pathdata== '9'){
			myArray2[9] =pathdata2;
			continue;
		}if(pathdata== '10'){
			myArray2[10] =pathdata2;
			continue;
		}
		}
	}
	var myTable= "<table><tr><td style='height:15px; color:black; font-variant: small-caps; font-weight: bolder; font-size:larger;'>Top Ranked Counties within the State</td></tr>";
	  for (var i=1; i<12; i++) {
		if (i==11){
			myTable+="<tr><td style='height:15px; color:black; font-variant: small-caps; font-weight: bold; font-style:italic;'>Highlighted county rank within the state (out of "+pathlength+")</td></tr><tr><td style='height:15px;'>&nbsp;</td></tr>";
			myTable+="<tr><td style='height:15px; color:black; font-variant: small-caps; font-weight: bold; font-style:italic;'>Highlighted county rank within the country (out of 3111)</td></tr><tr><td style='heigh:15px;'>&nbsp;</td></tr>";
		}
		else{
		myTable+="<td style='height:15px;'> " +myArray2[i]+ "</td></tr>";
		}
	  }  
	   myTable+="</table>";
	 document.getElementById('mytable').innerHTML = myTable;
	  var var1 = "";
	  var var3 = "";
	  var var4 = "";
	  var nationrank="";
	  var stringcounty ="";
	  
	$("path, circle").mouseenter(function(e) {
	  $('#info-box').css('display','block');
	  if (typeof $(this).data('info5') != 'undefined'){
	  stringcounty = $(this).data('info5').replace(stringstate,'');
	  var1 = $(this).data('info');
	  var3 = $(this).data('info2')
	   var4 = $(this).data('info5')
	   nationrank=suffix(var1);
	  var3=suffix(var3);
	  if (nationrank.length=='6'){
		  nationrank=nationrank.replace(nationrank[0],nationrank[0]+',');
		  }
	  }
	   if (nationrank=="2,927th"){
			  $('#info-box').html(stringcounty +" County: <strong>No harvest reported in survey</strong>");
		  }
		  else{
	  $('#info-box').html(stringcounty +" County ranks <strong>"+var3+"</strong> out of "+pathlength+" counties in the state<br>and <strong>"+nationrank+"</strong> out of 3,111 counties in the U.S.");
		  }
	  
	  
		myTable= "<table><tr><td style='height:15px; color:black; font-variant: small-caps; font-weight: bolder; font-size:larger;'>Top Ranked Counties within the State</td></tr>";
	  for (var i=1; i<12; i++) {
		if (i==11){
			myTable+="<tr><td style='height:15px; color:black; font-variant: small-caps; font-weight: bold; font-style:italic;'>Highlighted county rank within the state (out of "+pathlength+")</td></tr><tr><td style='height:15px;'>&nbsp;" +var4+" - "+var3+ "</td></tr>";
			myTable+="<tr><td style='height:15px; color:black; font-variant: small-caps; font-weight: bold; font-style:italic;'>Highlighted county rank within the country (out of 3111)</td></tr><tr><td style='heigh:15px;'>&nbsp;" +var4+" - "+var1+ "</td></tr>";
		}
		else{
		myTable+="<td style='height:15px;'> " +myArray2[i]+ "</td></tr>";
		}
	  }  
	   myTable+="</table>";
	 document.getElementById('mytable').innerHTML = myTable;
	 });
	svgConnecticut.addEventListener('click', function(ev){
		//svgConnecticut.style.display = 'none';
		svg1.style.display = 'block';
		return;
	})
	$("path, circle").mouseleave(function(e) {
  $('#info-box').css('display','none');
});
})
DE.addEventListener('click', function(ev){
	hideall();
	hideselect();
	svgDelaware.style.display = 'block';
	
	DE.style.fill = '#002868';
	var svgW=window.innerWidth
	var svgH=window.innerHeight
    var bb=svgDelaware.getBBox()
	var bbx=bb.x
	var bby=bb.y
	var bbw=bb.width
	var bbh=bb.height
    svgDelaware.setAttribute("viewBox",bbx+" "+bby+" "+bbw+" "+bbh )
    svgDelaware.setAttribute("width",svgW/1.5)
    svgDelaware.setAttribute("height",svgH)
		var myArray2    = new Array();
	 paths = svgDelaware.querySelectorAll('.delaware > path');
	 stringstate = ', DE'
	pathlength=paths.length;
		for(var i=0; i<pathlength; ++i) {
		pathdata = paths[i].attributes['data-info2'].value;
		pathdata2 = paths[i].attributes['data-info5'].value;
		if(parseInt(pathdata)< 11){
		pathdata2=pathdata2.replace(stringstate,'')
		if(pathdata== '1'){
			myArray2[1] =pathdata2;
			continue;
		}if(pathdata== '2'){
			myArray2[2] =pathdata2;
			continue;
		}if(pathdata== '3'){
			myArray2[3] =pathdata2;
			continue;
		}if(pathdata== '4'){
			myArray2[4] =pathdata2;
			continue;
		}if(pathdata== '5'){
			myArray2[5] =pathdata2;
			continue;
		}if(pathdata== '6'){
			myArray2[6] =pathdata2;
			continue;
		}if(pathdata== '7'){
			myArray2[7] =pathdata2;
			continue;
		}if(pathdata== '8'){
			myArray2[8] =pathdata2;
			continue;
		}if(pathdata== '9'){
			myArray2[9] =pathdata2;
			continue;
		}if(pathdata== '10'){
			myArray2[10] =pathdata2;
			continue;
		}
		}
	}
	var myTable= "<table><tr><td style='height:15px; color:black; font-variant: small-caps; font-weight: bolder; font-size:larger;'>Top Ranked Counties within the State</td></tr>";
	  for (var i=1; i<12; i++) {
		if (i==11){
			myTable+="<tr><td style='height:15px; color:black; font-variant: small-caps; font-weight: bold; font-style:italic;'>Highlighted county rank within the state (out of "+pathlength+")</td></tr><tr><td style='height:15px;'>&nbsp;</td></tr>";
			myTable+="<tr><td style='height:15px; color:black; font-variant: small-caps; font-weight: bold; font-style:italic;'>Highlighted county rank within the country (out of 3111)</td></tr><tr><td style='heigh:15px;'>&nbsp;</td></tr>";
		}
		else{
		myTable+="<td style='height:15px;'> " +myArray2[i]+ "</td></tr>";
		}
	  }  
	   myTable+="</table>";
	 document.getElementById('mytable').innerHTML = myTable;
	  var var1 = "";
	  var var3 = "";
	  var var4 = "";
	  var nationrank="";
	  var stringcounty ="";
	  
	$("path, circle").mouseenter(function(e) {
	  $('#info-box').css('display','block');
	  if (typeof $(this).data('info5') != 'undefined'){
	  stringcounty = $(this).data('info5').replace(stringstate,'');
	  var1 = $(this).data('info');
	  var3 = $(this).data('info2')
	   var4 = $(this).data('info5')
	   nationrank=suffix(var1);
	  var3=suffix(var3);
	  if (nationrank.length=='6'){
		  nationrank=nationrank.replace(nationrank[0],nationrank[0]+',');
		  }
	  }
	   if (nationrank=="2,927th"){
			  $('#info-box').html(stringcounty +" County: <strong>No harvest reported in survey</strong>");
		  }
		  else{
	  $('#info-box').html(stringcounty +" County ranks <strong>"+var3+"</strong> out of "+pathlength+" counties in the state<br>and <strong>"+nationrank+"</strong> out of 3,111 counties in the U.S.");
		  }
	  
	  
		myTable= "<table><tr><td style='height:15px; color:black; font-variant: small-caps; font-weight: bolder; font-size:larger;'>Top Ranked Counties within the State</td></tr>";
	  for (var i=1; i<12; i++) {
		if (i==11){
			myTable+="<tr><td style='height:15px; color:black; font-variant: small-caps; font-weight: bold; font-style:italic;'>Highlighted county rank within the state (out of "+pathlength+")</td></tr><tr><td style='height:15px;'>&nbsp;" +var4+" - "+var3+ "</td></tr>";
			myTable+="<tr><td style='height:15px; color:black; font-variant: small-caps; font-weight: bold; font-style:italic;'>Highlighted county rank within the country (out of 3111)</td></tr><tr><td style='heigh:15px;'>&nbsp;" +var4+" - "+var1+ "</td></tr>";
		}
		else{
		myTable+="<td style='height:15px;'> " +myArray2[i]+ "</td></tr>";
		}
	  }  
	   myTable+="</table>";
	 document.getElementById('mytable').innerHTML = myTable;
	 });
	svgDelaware.addEventListener('click', function(ev){
		//svgDelaware.style.display = 'none';
		svg1.style.display = 'block';
		return;
	})
	$("path, circle").mouseleave(function(e) {
  $('#info-box').css('display','none');
});
})
FL.addEventListener('click', function(ev){
	hideall();
	hideselect();
	svgFlorida.style.display = 'block';
	
	FL.style.fill = '#002868';
	var svgW=window.innerWidth
	var svgH=window.innerHeight
    var bb=svgFlorida.getBBox()
	var bbx=bb.x
	var bby=bb.y
	var bbw=bb.width
	var bbh=bb.height
    svgFlorida.setAttribute("viewBox",bbx+" "+bby+" "+bbw+" "+bbh )
    svgFlorida.setAttribute("width",svgW/1.5)
    svgFlorida.setAttribute("height",svgH)
		var myArray2    = new Array();
	 paths = svgFlorida.querySelectorAll('.florida > path');
	 stringstate = ', FL'
	pathlength=paths.length;
		for(var i=0; i<pathlength; ++i) {
		pathdata = paths[i].attributes['data-info2'].value;
		pathdata2 = paths[i].attributes['data-info5'].value;
		if(parseInt(pathdata)< 11){
		pathdata2=pathdata2.replace(stringstate,'')
		if(pathdata== '1'){
			myArray2[1] =pathdata2;
			continue;
		}if(pathdata== '2'){
			myArray2[2] =pathdata2;
			continue;
		}if(pathdata== '3'){
			myArray2[3] =pathdata2;
			continue;
		}if(pathdata== '4'){
			myArray2[4] =pathdata2;
			continue;
		}if(pathdata== '5'){
			myArray2[5] =pathdata2;
			continue;
		}if(pathdata== '6'){
			myArray2[6] =pathdata2;
			continue;
		}if(pathdata== '7'){
			myArray2[7] =pathdata2;
			continue;
		}if(pathdata== '8'){
			myArray2[8] =pathdata2;
			continue;
		}if(pathdata== '9'){
			myArray2[9] =pathdata2;
			continue;
		}if(pathdata== '10'){
			myArray2[10] =pathdata2;
			continue;
		}
		}
	}
	var myTable= "<table><tr><td style='height:15px; color:black; font-variant: small-caps; font-weight: bolder; font-size:larger;'>Top Ranked Counties within the State</td></tr>";
	  for (var i=1; i<12; i++) {
		if (i==11){
			myTable+="<tr><td style='height:15px; color:black; font-variant: small-caps; font-weight: bold; font-style:italic;'>Highlighted county rank within the state (out of "+pathlength+")</td></tr><tr><td style='height:15px;'>&nbsp;</td></tr>";
			myTable+="<tr><td style='height:15px; color:black; font-variant: small-caps; font-weight: bold; font-style:italic;'>Highlighted county rank within the country (out of 3111)</td></tr><tr><td style='heigh:15px;'>&nbsp;</td></tr>";
		}
		else{
		myTable+="<td style='height:15px;'> " +myArray2[i]+ "</td></tr>";
		}
	  }  
	   myTable+="</table>";
	 document.getElementById('mytable').innerHTML = myTable;
	  var var1 = "";
	  var var3 = "";
	  var var4 = "";
	  var nationrank="";
	  var stringcounty ="";
	  
	$("path, circle").mouseenter(function(e) {
	  $('#info-box').css('display','block');
	  if (typeof $(this).data('info5') != 'undefined'){
	  stringcounty = $(this).data('info5').replace(stringstate,'');
	  var1 = $(this).data('info');
	  var3 = $(this).data('info2')
	   var4 = $(this).data('info5')
	   nationrank=suffix(var1);
	  var3=suffix(var3);
	  if (nationrank.length=='6'){
		  nationrank=nationrank.replace(nationrank[0],nationrank[0]+',');
		  }
	  }
	   if (nationrank=="2,927th"){
			  $('#info-box').html(stringcounty +" County: <strong>No harvest reported in survey</strong>");
		  }
		  else{
	  $('#info-box').html(stringcounty +" County ranks <strong>"+var3+"</strong> out of "+pathlength+" counties in the state<br>and <strong>"+nationrank+"</strong> out of 3,111 counties in the U.S.");
		  }
	  
	  
		myTable= "<table><tr><td style='height:15px; color:black; font-variant: small-caps; font-weight: bolder; font-size:larger;'>Top Ranked Counties within the State</td></tr>";
	  for (var i=1; i<12; i++) {
		if (i==11){
			myTable+="<tr><td style='height:15px; color:black; font-variant: small-caps; font-weight: bold; font-style:italic;'>Highlighted county rank within the state (out of "+pathlength+")</td></tr><tr><td style='height:15px;'>&nbsp;" +var4+" - "+var3+ "</td></tr>";
			myTable+="<tr><td style='height:15px; color:black; font-variant: small-caps; font-weight: bold; font-style:italic;'>Highlighted county rank within the country (out of 3111)</td></tr><tr><td style='heigh:15px;'>&nbsp;" +var4+" - "+var1+ "</td></tr>";
		}
		else{
		myTable+="<td style='height:15px;'> " +myArray2[i]+ "</td></tr>";
		}
	  }  
	   myTable+="</table>";
	 document.getElementById('mytable').innerHTML = myTable;
	 });
	svgFlorida.addEventListener('click', function(ev){
		//svgFlorida.style.display = 'none';
		svg1.style.display = 'block';
		return;
	})
	$("path, circle").mouseleave(function(e) {
  $('#info-box').css('display','none');
});
})

GA.addEventListener('click', function(ev){
	hideall();
	hideselect();
	svgGeorgia.style.display = 'block';

	GA.style.fill = '#002868';
	var svgW=window.innerWidth
	var svgH=window.innerHeight
    var bb=svgGeorgia.getBBox()
	var bbx=bb.x
	var bby=bb.y
	var bbw=bb.width
	var bbh=bb.height
    svgGeorgia.setAttribute("viewBox",bbx+" "+bby+" "+bbw+" "+bbh )
    svgGeorgia.setAttribute("width",svgW/1.5)
    svgGeorgia.setAttribute("height",svgH)
		var myArray2    = new Array();
	 paths = svgGeorgia.querySelectorAll('.georgia > path');
	 stringstate = ', GA'
	pathlength=paths.length;
		for(var i=0; i<pathlength; ++i) {
		pathdata = paths[i].attributes['data-info2'].value;
		pathdata2 = paths[i].attributes['data-info5'].value;
		if(parseInt(pathdata)< 11){
		pathdata2=pathdata2.replace(stringstate,'')
		if(pathdata== '1'){
			myArray2[1] =pathdata2;
			continue;
		}if(pathdata== '2'){
			myArray2[2] =pathdata2;
			continue;
		}if(pathdata== '3'){
			myArray2[3] =pathdata2;
			continue;
		}if(pathdata== '4'){
			myArray2[4] =pathdata2;
			continue;
		}if(pathdata== '5'){
			myArray2[5] =pathdata2;
			continue;
		}if(pathdata== '6'){
			myArray2[6] =pathdata2;
			continue;
		}if(pathdata== '7'){
			myArray2[7] =pathdata2;
			continue;
		}if(pathdata== '8'){
			myArray2[8] =pathdata2;
			continue;
		}if(pathdata== '9'){
			myArray2[9] =pathdata2;
			continue;
		}if(pathdata== '10'){
			myArray2[10] =pathdata2;
			continue;
		}
		}
	}
	var myTable= "<table><tr><td style='height:15px; color:black; font-variant: small-caps; font-weight: bolder; font-size:larger;'>Top Ranked Counties within the State</td></tr>";
	  for (var i=1; i<12; i++) {
		if (i==11){
			myTable+="<tr><td style='height:15px; color:black; font-variant: small-caps; font-weight: bold; font-style:italic;'>Highlighted county rank within the state (out of "+pathlength+")</td></tr><tr><td style='height:15px;'>&nbsp;</td></tr>";
			myTable+="<tr><td style='height:15px; color:black; font-variant: small-caps; font-weight: bold; font-style:italic;'>Highlighted county rank within the country (out of 3111)</td></tr><tr><td style='heigh:15px;'>&nbsp;</td></tr>";
		}
		else{
		myTable+="<td style='height:15px;'> " +myArray2[i]+ "</td></tr>";
		}
	  }  
	   myTable+="</table>";
	 document.getElementById('mytable').innerHTML = myTable;
	  var var1 = "";
	  var var3 = "";
	  var var4 = "";
	  var nationrank="";
	  var stringcounty ="";
	  
	$("path, circle").mouseenter(function(e) {
	  $('#info-box').css('display','block');
	  if (typeof $(this).data('info5') != 'undefined'){
	  stringcounty = $(this).data('info5').replace(stringstate,'');
	  var1 = $(this).data('info');
	  var3 = $(this).data('info2')
	   var4 = $(this).data('info5')
	   nationrank=suffix(var1);
	  var3=suffix(var3);
	  if (nationrank.length=='6'){
		  nationrank=nationrank.replace(nationrank[0],nationrank[0]+',');
		  }
	  }
	   if (nationrank=="2,927th"){
			  $('#info-box').html(stringcounty +" County: <strong>No harvest reported in survey</strong>");
		  }
		  else{
	  $('#info-box').html(stringcounty +" County ranks <strong>"+var3+"</strong> out of "+pathlength+" counties in the state<br>and <strong>"+nationrank+"</strong> out of 3,111 counties in the U.S.");
		  }
	  
	  
		myTable= "<table><tr><td style='height:15px; color:black; font-variant: small-caps; font-weight: bolder; font-size:larger;'>Top Ranked Counties within the State</td></tr>";
	  for (var i=1; i<12; i++) {
		if (i==11){
			myTable+="<tr><td style='height:15px; color:black; font-variant: small-caps; font-weight: bold; font-style:italic;'>Highlighted county rank within the state (out of "+pathlength+")</td></tr><tr><td style='height:15px;'>&nbsp;" +var4+" - "+var3+ "</td></tr>";
			myTable+="<tr><td style='height:15px; color:black; font-variant: small-caps; font-weight: bold; font-style:italic;'>Highlighted county rank within the country (out of 3111)</td></tr><tr><td style='heigh:15px;'>&nbsp;" +var4+" - "+var1+ "</td></tr>";
		}
		else{
		myTable+="<td style='height:15px;'> " +myArray2[i]+ "</td></tr>";
		}
	  }  
	   myTable+="</table>";
	 document.getElementById('mytable').innerHTML = myTable;
	 });
	svgGeorgia.addEventListener('click', function(ev){
		//svgGeorgia.style.display = 'none';
		svg1.style.display = 'block';
		return;
	})
	$("path, circle").mouseleave(function(e) {
  $('#info-box').css('display','none');
});
})

HI.addEventListener('click', function(ev){
	hideall();
	hideselect();
	//svgHawaii.style.display = 'block';
	
	HI.style.fill = '#002868';
	var svgW=window.innerWidth
	var svgH=window.innerHeight
    var bb=svgHawaii.getBBox()
	var bbx=bb.x
	var bby=bb.y
	var bbw=bb.width
	var bbh=bb.height
    svgHawaii.setAttribute("viewBox",bbx+" "+bby+" "+bbw+" "+bbh )
    svgHawaii.setAttribute("width",svgW/1.5)
    svgHawaii.setAttribute("height",svgH)
		
	svgHawaii.addEventListener('click', function(ev){
		//svgHawaii.style.display = 'none';
		svg1.style.display = 'block';
		return;
	})
	$("path, circle").mouseleave(function(e) {
  $('#info-box').css('display','none');
});
})
ID.addEventListener('click', function(ev){
	hideall();
	hideselect();
	svgIdaho.style.display = 'block';
	
	ID.style.fill = '#002868';
	var svgW=window.innerWidth
	var svgH=window.innerHeight
    var bb=svgIdaho.getBBox()
	var bbx=bb.x
	var bby=bb.y
	var bbw=bb.width
	var bbh=bb.height
    svgIdaho.setAttribute("viewBox",bbx+" "+bby+" "+bbw+" "+bbh )
    svgIdaho.setAttribute("width",svgW/1.5)
    svgIdaho.setAttribute("height",svgH)
		var myArray2    = new Array();
	 paths = svgIdaho.querySelectorAll('.idaho > path');
	 stringstate = ', ID'
	pathlength=paths.length;
		for(var i=0; i<pathlength; ++i) {
		pathdata = paths[i].attributes['data-info2'].value;
		pathdata2 = paths[i].attributes['data-info5'].value;
		if(parseInt(pathdata)< 11){
		pathdata2=pathdata2.replace(stringstate,'')
		if(pathdata== '1'){
			myArray2[1] =pathdata2;
			continue;
		}if(pathdata== '2'){
			myArray2[2] =pathdata2;
			continue;
		}if(pathdata== '3'){
			myArray2[3] =pathdata2;
			continue;
		}if(pathdata== '4'){
			myArray2[4] =pathdata2;
			continue;
		}if(pathdata== '5'){
			myArray2[5] =pathdata2;
			continue;
		}if(pathdata== '6'){
			myArray2[6] =pathdata2;
			continue;
		}if(pathdata== '7'){
			myArray2[7] =pathdata2;
			continue;
		}if(pathdata== '8'){
			myArray2[8] =pathdata2;
			continue;
		}if(pathdata== '9'){
			myArray2[9] =pathdata2;
			continue;
		}if(pathdata== '10'){
			myArray2[10] =pathdata2;
			continue;
		}
		}
	}
	var myTable= "<table><tr><td style='height:15px; color:black; font-variant: small-caps; font-weight: bolder; font-size:larger;'>Top Ranked Counties within the State</td></tr>";
	  for (var i=1; i<12; i++) {
		if (i==11){
			myTable+="<tr><td style='height:15px; color:black; font-variant: small-caps; font-weight: bold; font-style:italic;'>Highlighted county rank within the state (out of "+pathlength+")</td></tr><tr><td style='height:15px;'>&nbsp;</td></tr>";
			myTable+="<tr><td style='height:15px; color:black; font-variant: small-caps; font-weight: bold; font-style:italic;'>Highlighted county rank within the country (out of 3111)</td></tr><tr><td style='heigh:15px;'>&nbsp;</td></tr>";
		}
		else{
		myTable+="<td style='height:15px;'> " +myArray2[i]+ "</td></tr>";
		}
	  }  
	   myTable+="</table>";
	 document.getElementById('mytable').innerHTML = myTable;
	  var var1 = "";
	  var var3 = "";
	  var var4 = "";
	  var nationrank="";
	  var stringcounty ="";
	  
	$("path, circle").mouseenter(function(e) {
	  $('#info-box').css('display','block');
	  if (typeof $(this).data('info5') != 'undefined'){
	  stringcounty = $(this).data('info5').replace(stringstate,'');
	  var1 = $(this).data('info');
	  var3 = $(this).data('info2')
	   var4 = $(this).data('info5')
	   nationrank=suffix(var1);
	  var3=suffix(var3);
	  if (nationrank.length=='6'){
		  nationrank=nationrank.replace(nationrank[0],nationrank[0]+',');
		  }
	  }
	   if (nationrank=="2,927th"){
			  $('#info-box').html(stringcounty +" County: <strong>No harvest reported in survey</strong>");
		  }
		  else{
	  $('#info-box').html(stringcounty +" County ranks <strong>"+var3+"</strong> out of "+pathlength+" counties in the state<br>and <strong>"+nationrank+"</strong> out of 3,111 counties in the U.S.");
		  }
	  
	  
		myTable= "<table><tr><td style='height:15px; color:black; font-variant: small-caps; font-weight: bolder; font-size:larger;'>Top Ranked Counties within the State</td></tr>";
	  for (var i=1; i<12; i++) {
		if (i==11){
			myTable+="<tr><td style='height:15px; color:black; font-variant: small-caps; font-weight: bold; font-style:italic;'>Highlighted county rank within the state (out of "+pathlength+")</td></tr><tr><td style='height:15px;'>&nbsp;" +var4+" - "+var3+ "</td></tr>";
			myTable+="<tr><td style='height:15px; color:black; font-variant: small-caps; font-weight: bold; font-style:italic;'>Highlighted county rank within the country (out of 3111)</td></tr><tr><td style='heigh:15px;'>&nbsp;" +var4+" - "+var1+ "</td></tr>";
		}
		else{
		myTable+="<td style='height:15px;'> " +myArray2[i]+ "</td></tr>";
		}
	  }  
	   myTable+="</table>";
	 document.getElementById('mytable').innerHTML = myTable;
	 });
	svgIdaho.addEventListener('click', function(ev){
		//svgIdaho.style.display = 'none';
		svg1.style.display = 'block';
		return;
	})
	$("path, circle").mouseleave(function(e) {
  $('#info-box').css('display','none');
});
})
IL.addEventListener('click', function(ev){
	hideall();
	hideselect();
	svgIllinois.style.display = 'block';
	
	IL.style.fill = '#002868';
	var svgW=window.innerWidth
	var svgH=window.innerHeight
    var bb=svgIllinois.getBBox()
	var bbx=bb.x
	var bby=bb.y
	var bbw=bb.width
	var bbh=bb.height
    svgIllinois.setAttribute("viewBox",bbx+" "+bby+" "+bbw+" "+bbh )
    svgIllinois.setAttribute("width",svgW/1.5)
    svgIllinois.setAttribute("height",svgH)
		var myArray2    = new Array();
	 paths = svgIllinois.querySelectorAll('.illinois > path');
	 stringstate = ', IL'
	pathlength=paths.length;
		for(var i=0; i<pathlength; ++i) {
		pathdata = paths[i].attributes['data-info2'].value;
		pathdata2 = paths[i].attributes['data-info5'].value;
		if(parseInt(pathdata)< 11){
		pathdata2=pathdata2.replace(stringstate,'')
		if(pathdata== '1'){
			myArray2[1] =pathdata2;
			continue;
		}if(pathdata== '2'){
			myArray2[2] =pathdata2;
			continue;
		}if(pathdata== '3'){
			myArray2[3] =pathdata2;
			continue;
		}if(pathdata== '4'){
			myArray2[4] =pathdata2;
			continue;
		}if(pathdata== '5'){
			myArray2[5] =pathdata2;
			continue;
		}if(pathdata== '6'){
			myArray2[6] =pathdata2;
			continue;
		}if(pathdata== '7'){
			myArray2[7] =pathdata2;
			continue;
		}if(pathdata== '8'){
			myArray2[8] =pathdata2;
			continue;
		}if(pathdata== '9'){
			myArray2[9] =pathdata2;
			continue;
		}if(pathdata== '10'){
			myArray2[10] =pathdata2;
			continue;
		}
		}
	}
	var myTable= "<table><tr><td style='height:15px; color:black; font-variant: small-caps; font-weight: bolder; font-size:larger;'>Top Ranked Counties within the State</td></tr>";
	  for (var i=1; i<12; i++) {
		if (i==11){
			myTable+="<tr><td style='height:15px; color:black; font-variant: small-caps; font-weight: bold; font-style:italic;'>Highlighted county rank within the state (out of "+pathlength+")</td></tr><tr><td style='height:15px;'>&nbsp;</td></tr>";
			myTable+="<tr><td style='height:15px; color:black; font-variant: small-caps; font-weight: bold; font-style:italic;'>Highlighted county rank within the country (out of 3111)</td></tr><tr><td style='heigh:15px;'>&nbsp;</td></tr>";
		}
		else{
		myTable+="<td style='height:15px;'> " +myArray2[i]+ "</td></tr>";
		}
	  }  
	   myTable+="</table>";
	 document.getElementById('mytable').innerHTML = myTable;
	  var var1 = "";
	  var var3 = "";
	  var var4 = "";
	  var nationrank="";
	  var stringcounty ="";
	  
	$("path, circle").mouseenter(function(e) {
	  $('#info-box').css('display','block');
	  if (typeof $(this).data('info5') != 'undefined'){
	  stringcounty = $(this).data('info5').replace(stringstate,'');
	  var1 = $(this).data('info');
	  var3 = $(this).data('info2')
	   var4 = $(this).data('info5')
	   nationrank=suffix(var1);
	  var3=suffix(var3);
	  if (nationrank.length=='6'){
		  nationrank=nationrank.replace(nationrank[0],nationrank[0]+',');
		  }
	  }
	   if (nationrank=="2,927th"){
			  $('#info-box').html(stringcounty +" County: <strong>No harvest reported in survey</strong>");
		  }
		  else{
	  $('#info-box').html(stringcounty +" County ranks <strong>"+var3+"</strong> out of "+pathlength+" counties in the state<br>and <strong>"+nationrank+"</strong> out of 3,111 counties in the U.S.");
		  }
	  
	  
		myTable= "<table><tr><td style='height:15px; color:black; font-variant: small-caps; font-weight: bolder; font-size:larger;'>Top Ranked Counties within the State</td></tr>";
	  for (var i=1; i<12; i++) {
		if (i==11){
			myTable+="<tr><td style='height:15px; color:black; font-variant: small-caps; font-weight: bold; font-style:italic;'>Highlighted county rank within the state (out of "+pathlength+")</td></tr><tr><td style='height:15px;'>&nbsp;" +var4+" - "+var3+ "</td></tr>";
			myTable+="<tr><td style='height:15px; color:black; font-variant: small-caps; font-weight: bold; font-style:italic;'>Highlighted county rank within the country (out of 3111)</td></tr><tr><td style='heigh:15px;'>&nbsp;" +var4+" - "+var1+ "</td></tr>";
		}
		else{
		myTable+="<td style='height:15px;'> " +myArray2[i]+ "</td></tr>";
		}
	  }  
	   myTable+="</table>";
	 document.getElementById('mytable').innerHTML = myTable;
	 });
	svgIllinois.addEventListener('click', function(ev){
		//svgIllinois.style.display = 'none';
		svg1.style.display = 'block';
		return;
	})
	$("path, circle").mouseleave(function(e) {
  $('#info-box').css('display','none');
});
})
IN.addEventListener('click', function(ev){
	hideall();
	hideselect();
	svgIndiana.style.display = 'block';
	
	IN.style.fill = '#002868';
	var svgW=window.innerWidth
	var svgH=window.innerHeight
    var bb=svgIndiana.getBBox()
	var bbx=bb.x
	var bby=bb.y
	var bbw=bb.width
	var bbh=bb.height
    svgIndiana.setAttribute("viewBox",bbx+" "+bby+" "+bbw+" "+bbh )
    svgIndiana.setAttribute("width",svgW/1.5)
    svgIndiana.setAttribute("height",svgH)
		var myArray2    = new Array();
	 paths = svgIndiana.querySelectorAll('.indiana > path');
	 stringstate = ', IN'
	pathlength=paths.length;
		for(var i=0; i<pathlength; ++i) {
		pathdata = paths[i].attributes['data-info2'].value;
		pathdata2 = paths[i].attributes['data-info5'].value;
		if(parseInt(pathdata)< 11){
		pathdata2=pathdata2.replace(stringstate,'')
		if(pathdata== '1'){
			myArray2[1] =pathdata2;
			continue;
		}if(pathdata== '2'){
			myArray2[2] =pathdata2;
			continue;
		}if(pathdata== '3'){
			myArray2[3] =pathdata2;
			continue;
		}if(pathdata== '4'){
			myArray2[4] =pathdata2;
			continue;
		}if(pathdata== '5'){
			myArray2[5] =pathdata2;
			continue;
		}if(pathdata== '6'){
			myArray2[6] =pathdata2;
			continue;
		}if(pathdata== '7'){
			myArray2[7] =pathdata2;
			continue;
		}if(pathdata== '8'){
			myArray2[8] =pathdata2;
			continue;
		}if(pathdata== '9'){
			myArray2[9] =pathdata2;
			continue;
		}if(pathdata== '10'){
			myArray2[10] =pathdata2;
			continue;
		}
		}
	}
	var myTable= "<table><tr><td style='height:15px; color:black; font-variant: small-caps; font-weight: bolder; font-size:larger;'>Top Ranked Counties within the State</td></tr>";
	  for (var i=1; i<12; i++) {
		if (i==11){
			myTable+="<tr><td style='height:15px; color:black; font-variant: small-caps; font-weight: bold; font-style:italic;'>Highlighted county rank within the state (out of "+pathlength+")</td></tr><tr><td style='height:15px;'>&nbsp;</td></tr>";
			myTable+="<tr><td style='height:15px; color:black; font-variant: small-caps; font-weight: bold; font-style:italic;'>Highlighted county rank within the country (out of 3111)</td></tr><tr><td style='heigh:15px;'>&nbsp;</td></tr>";
		}
		else{
		myTable+="<td style='height:15px;'> " +myArray2[i]+ "</td></tr>";
		}
	  }  
	   myTable+="</table>";
	 document.getElementById('mytable').innerHTML = myTable;
	  var var1 = "";
	  var var3 = "";
	  var var4 = "";
	  var nationrank="";
	  var stringcounty ="";
	  
	$("path, circle").mouseenter(function(e) {
	  $('#info-box').css('display','block');
	  if (typeof $(this).data('info5') != 'undefined'){
	  stringcounty = $(this).data('info5').replace(stringstate,'');
	  var1 = $(this).data('info');
	  var3 = $(this).data('info2')
	   var4 = $(this).data('info5')
	   nationrank=suffix(var1);
	  var3=suffix(var3);
	  if (nationrank.length=='6'){
		  nationrank=nationrank.replace(nationrank[0],nationrank[0]+',');
		  }
	  }
	   if (nationrank=="2,927th"){
			  $('#info-box').html(stringcounty +" County: <strong>No harvest reported in survey</strong>");
		  }
		  else{
	  $('#info-box').html(stringcounty +" County ranks <strong>"+var3+"</strong> out of "+pathlength+" counties in the state<br>and <strong>"+nationrank+"</strong> out of 3,111 counties in the U.S.");
		  }
	  
	  
		myTable= "<table><tr><td style='height:15px; color:black; font-variant: small-caps; font-weight: bolder; font-size:larger;'>Top Ranked Counties within the State</td></tr>";
	  for (var i=1; i<12; i++) {
		if (i==11){
			myTable+="<tr><td style='height:15px; color:black; font-variant: small-caps; font-weight: bold; font-style:italic;'>Highlighted county rank within the state (out of "+pathlength+")</td></tr><tr><td style='height:15px;'>&nbsp;" +var4+" - "+var3+ "</td></tr>";
			myTable+="<tr><td style='height:15px; color:black; font-variant: small-caps; font-weight: bold; font-style:italic;'>Highlighted county rank within the country (out of 3111)</td></tr><tr><td style='heigh:15px;'>&nbsp;" +var4+" - "+var1+ "</td></tr>";
		}
		else{
		myTable+="<td style='height:15px;'> " +myArray2[i]+ "</td></tr>";
		}
	  }  
	   myTable+="</table>";
	 document.getElementById('mytable').innerHTML = myTable;
	 });
	svgIndiana.addEventListener('click', function(ev){
		//svgIndiana.style.display = 'none';
		svg1.style.display = 'block';
		return;
	})
	$("path, circle").mouseleave(function(e) {
  $('#info-box').css('display','none');
});
})
IA.addEventListener('click', function(ev){
	hideall();
	hideselect();
	svgIowa.style.display = 'block';
	
	IA.style.fill = '#002868';
	var svgW=window.innerWidth
	var svgH=window.innerHeight
    var bb=svgIowa.getBBox()
	var bbx=bb.x
	var bby=bb.y
	var bbw=bb.width
	var bbh=bb.height
    svgIowa.setAttribute("viewBox",bbx+" "+bby+" "+bbw+" "+bbh )
    svgIowa.setAttribute("width",svgW/1.5)
    svgIowa.setAttribute("height",svgH)
		var myArray2    = new Array();
	 paths = svgIowa.querySelectorAll('.iowa > path');
	 stringstate = ', IA'
	pathlength=paths.length;
		for(var i=0; i<pathlength; ++i) {
		pathdata = paths[i].attributes['data-info2'].value;
		pathdata2 = paths[i].attributes['data-info5'].value;
		if(parseInt(pathdata)< 11){
		pathdata2=pathdata2.replace(stringstate,'')
		if(pathdata== '1'){
			myArray2[1] =pathdata2;
			continue;
		}if(pathdata== '2'){
			myArray2[2] =pathdata2;
			continue;
		}if(pathdata== '3'){
			myArray2[3] =pathdata2;
			continue;
		}if(pathdata== '4'){
			myArray2[4] =pathdata2;
			continue;
		}if(pathdata== '5'){
			myArray2[5] =pathdata2;
			continue;
		}if(pathdata== '6'){
			myArray2[6] =pathdata2;
			continue;
		}if(pathdata== '7'){
			myArray2[7] =pathdata2;
			continue;
		}if(pathdata== '8'){
			myArray2[8] =pathdata2;
			continue;
		}if(pathdata== '9'){
			myArray2[9] =pathdata2;
			continue;
		}if(pathdata== '10'){
			myArray2[10] =pathdata2;
			continue;
		}
		}
	}
	var myTable= "<table><tr><td style='height:15px; color:black; font-variant: small-caps; font-weight: bolder; font-size:larger;'>Top Ranked Counties within the State</td></tr>";
	  for (var i=1; i<12; i++) {
		if (i==11){
			myTable+="<tr><td style='height:15px; color:black; font-variant: small-caps; font-weight: bold; font-style:italic;'>Highlighted county rank within the state (out of "+pathlength+")</td></tr><tr><td style='height:15px;'>&nbsp;</td></tr>";
			myTable+="<tr><td style='height:15px; color:black; font-variant: small-caps; font-weight: bold; font-style:italic;'>Highlighted county rank within the country (out of 3111)</td></tr><tr><td style='heigh:15px;'>&nbsp;</td></tr>";
		}
		else{
		myTable+="<td style='height:15px;'> " +myArray2[i]+ "</td></tr>";
		}
	  }  
	   myTable+="</table>";
	 document.getElementById('mytable').innerHTML = myTable;
	  var var1 = "";
	  var var3 = "";
	  var var4 = "";
	  var nationrank="";
	  var stringcounty ="";
	  
	$("path, circle").mouseenter(function(e) {
	  $('#info-box').css('display','block');
	  if (typeof $(this).data('info5') != 'undefined'){
	  stringcounty = $(this).data('info5').replace(stringstate,'');
	  var1 = $(this).data('info');
	  var3 = $(this).data('info2')
	   var4 = $(this).data('info5')
	   nationrank=suffix(var1);
	  var3=suffix(var3);
	  if (nationrank.length=='6'){
		  nationrank=nationrank.replace(nationrank[0],nationrank[0]+',');
		  }
	  }
	   if (nationrank=="2,927th"){
			  $('#info-box').html(stringcounty +" County: <strong>No harvest reported in survey</strong>");
		  }
		  else{
	  $('#info-box').html(stringcounty +" County ranks <strong>"+var3+"</strong> out of "+pathlength+" counties in the state<br>and <strong>"+nationrank+"</strong> out of 3,111 counties in the U.S.");
		  }
	  
	  
		myTable= "<table><tr><td style='height:15px; color:black; font-variant: small-caps; font-weight: bolder; font-size:larger;'>Top Ranked Counties within the State</td></tr>";
	  for (var i=1; i<12; i++) {
		if (i==11){
			myTable+="<tr><td style='height:15px; color:black; font-variant: small-caps; font-weight: bold; font-style:italic;'>Highlighted county rank within the state (out of "+pathlength+")</td></tr><tr><td style='height:15px;'>&nbsp;" +var4+" - "+var3+ "</td></tr>";
			myTable+="<tr><td style='height:15px; color:black; font-variant: small-caps; font-weight: bold; font-style:italic;'>Highlighted county rank within the country (out of 3111)</td></tr><tr><td style='heigh:15px;'>&nbsp;" +var4+" - "+var1+ "</td></tr>";
		}
		else{
		myTable+="<td style='height:15px;'> " +myArray2[i]+ "</td></tr>";
		}
	  }  
	   myTable+="</table>";
	 document.getElementById('mytable').innerHTML = myTable;
	 });
	svgIowa.addEventListener('click', function(ev){
		//svgIowa.style.display = 'none';
		svg1.style.display = 'block';
		return;
	})
	$("path, circle").mouseleave(function(e) {
  $('#info-box').css('display','none');
});
})
KS.addEventListener('click', function(ev){
	hideall();
	hideselect();
	svgKansas.style.display = 'block';
	
	KS.style.fill = '#002868';
	var svgW=window.innerWidth
	var svgH=window.innerHeight
    var bb=svgKansas.getBBox()
	var bbx=bb.x
	var bby=bb.y
	var bbw=bb.width
	var bbh=bb.height
    svgKansas.setAttribute("viewBox",bbx+" "+bby+" "+bbw+" "+bbh )
    svgKansas.setAttribute("width",svgW/1.5)
    svgKansas.setAttribute("height",svgH)
		var myArray2    = new Array();
	 paths = svgKansas.querySelectorAll('.kansas > path');
	 stringstate = ', KS'
	pathlength=paths.length;
		for(var i=0; i<pathlength; ++i) {
		pathdata = paths[i].attributes['data-info2'].value;
		pathdata2 = paths[i].attributes['data-info5'].value;
		if(parseInt(pathdata)< 11){
		pathdata2=pathdata2.replace(stringstate,'')
		if(pathdata== '1'){
			myArray2[1] =pathdata2;
			continue;
		}if(pathdata== '2'){
			myArray2[2] =pathdata2;
			continue;
		}if(pathdata== '3'){
			myArray2[3] =pathdata2;
			continue;
		}if(pathdata== '4'){
			myArray2[4] =pathdata2;
			continue;
		}if(pathdata== '5'){
			myArray2[5] =pathdata2;
			continue;
		}if(pathdata== '6'){
			myArray2[6] =pathdata2;
			continue;
		}if(pathdata== '7'){
			myArray2[7] =pathdata2;
			continue;
		}if(pathdata== '8'){
			myArray2[8] =pathdata2;
			continue;
		}if(pathdata== '9'){
			myArray2[9] =pathdata2;
			continue;
		}if(pathdata== '10'){
			myArray2[10] =pathdata2;
			continue;
		}
		}
	}
	var myTable= "<table><tr><td style='height:15px; color:black; font-variant: small-caps; font-weight: bolder; font-size:larger;'>Top Ranked Counties within the State</td></tr>";
	  for (var i=1; i<12; i++) {
		if (i==11){
			myTable+="<tr><td style='height:15px; color:black; font-variant: small-caps; font-weight: bold; font-style:italic;'>Highlighted county rank within the state (out of "+pathlength+")</td></tr><tr><td style='height:15px;'>&nbsp;</td></tr>";
			myTable+="<tr><td style='height:15px; color:black; font-variant: small-caps; font-weight: bold; font-style:italic;'>Highlighted county rank within the country (out of 3111)</td></tr><tr><td style='heigh:15px;'>&nbsp;</td></tr>";
		}
		else{
		myTable+="<td style='height:15px;'> " +myArray2[i]+ "</td></tr>";
		}
	  }  
	   myTable+="</table>";
	 document.getElementById('mytable').innerHTML = myTable;
	  var var1 = "";
	  var var3 = "";
	  var var4 = "";
	  var nationrank="";
	  var stringcounty ="";
	  
	$("path, circle").mouseenter(function(e) {
	  $('#info-box').css('display','block');
	  if (typeof $(this).data('info5') != 'undefined'){
	  stringcounty = $(this).data('info5').replace(stringstate,'');
	  var1 = $(this).data('info');
	  var3 = $(this).data('info2')
	   var4 = $(this).data('info5')
	   nationrank=suffix(var1);
	  var3=suffix(var3);
	  if (nationrank.length=='6'){
		  nationrank=nationrank.replace(nationrank[0],nationrank[0]+',');
		  }
	  }
	   if (nationrank=="2,927th"){
			  $('#info-box').html(stringcounty +" County: <strong>No harvest reported in survey</strong>");
		  }
		  else{
	  $('#info-box').html(stringcounty +" County ranks <strong>"+var3+"</strong> out of "+pathlength+" counties in the state<br>and <strong>"+nationrank+"</strong> out of 3,111 counties in the U.S.");
		  }
	  
	  
		myTable= "<table><tr><td style='height:15px; color:black; font-variant: small-caps; font-weight: bolder; font-size:larger;'>Top Ranked Counties within the State</td></tr>";
	  for (var i=1; i<12; i++) {
		if (i==11){
			myTable+="<tr><td style='height:15px; color:black; font-variant: small-caps; font-weight: bold; font-style:italic;'>Highlighted county rank within the state (out of "+pathlength+")</td></tr><tr><td style='height:15px;'>&nbsp;" +var4+" - "+var3+ "</td></tr>";
			myTable+="<tr><td style='height:15px; color:black; font-variant: small-caps; font-weight: bold; font-style:italic;'>Highlighted county rank within the country (out of 3111)</td></tr><tr><td style='heigh:15px;'>&nbsp;" +var4+" - "+var1+ "</td></tr>";
		}
		else{
		myTable+="<td style='height:15px;'> " +myArray2[i]+ "</td></tr>";
		}
	  }  
	   myTable+="</table>";
	 document.getElementById('mytable').innerHTML = myTable;
	 });
	svgKansas.addEventListener('click', function(ev){
		//svgKansas.style.display = 'none';
		svg1.style.display = 'block';
		return;
	})
	$("path, circle").mouseleave(function(e) {
  $('#info-box').css('display','none');
});
})
KY.addEventListener('click', function(ev){
	hideall();
	hideselect();
	svgKentucky.style.display = 'block';
	
	KY.style.fill = '#002868';
	var svgW=window.innerWidth
	var svgH=window.innerHeight
    var bb=svgKentucky.getBBox()
	var bbx=bb.x
	var bby=bb.y
	var bbw=bb.width
	var bbh=bb.height
    svgKentucky.setAttribute("viewBox",bbx+" "+bby+" "+bbw+" "+bbh )
    svgKentucky.setAttribute("width",svgW/1.5)
    svgKentucky.setAttribute("height",svgH)
	var myArray2    = new Array();
	 paths = svgKentucky.querySelectorAll('.kentucky > path');
	 stringstate = ', KY'
	pathlength=paths.length;
		for(var i=0; i<pathlength; ++i) {
		pathdata = paths[i].attributes['data-info2'].value;
		pathdata2 = paths[i].attributes['data-info5'].value;
		if(parseInt(pathdata)< 11){
		pathdata2=pathdata2.replace(stringstate,'')
		if(pathdata== '1'){
			myArray2[1] =pathdata2;
			continue;
		}if(pathdata== '2'){
			myArray2[2] =pathdata2;
			continue;
		}if(pathdata== '3'){
			myArray2[3] =pathdata2;
			continue;
		}if(pathdata== '4'){
			myArray2[4] =pathdata2;
			continue;
		}if(pathdata== '5'){
			myArray2[5] =pathdata2;
			continue;
		}if(pathdata== '6'){
			myArray2[6] =pathdata2;
			continue;
		}if(pathdata== '7'){
			myArray2[7] =pathdata2;
			continue;
		}if(pathdata== '8'){
			myArray2[8] =pathdata2;
			continue;
		}if(pathdata== '9'){
			myArray2[9] =pathdata2;
			continue;
		}if(pathdata== '10'){
			myArray2[10] =pathdata2;
			continue;
		}
		}
	}
	var myTable= "<table><tr><td style='height:15px; color:black; font-variant: small-caps; font-weight: bolder; font-size:larger;'>Top Ranked Counties within the State</td></tr>";
	  for (var i=1; i<12; i++) {
		if (i==11){
			myTable+="<tr><td style='height:15px; color:black; font-variant: small-caps; font-weight: bold; font-style:italic;'>Highlighted county rank within the state (out of "+pathlength+")</td></tr><tr><td style='height:15px;'>&nbsp;</td></tr>";
			myTable+="<tr><td style='height:15px; color:black; font-variant: small-caps; font-weight: bold; font-style:italic;'>Highlighted county rank within the country (out of 3111)</td></tr><tr><td style='heigh:15px;'>&nbsp;</td></tr>";
		}
		else{
		myTable+="<td style='height:15px;'> " +myArray2[i]+ "</td></tr>";
		}
	  }  
	   myTable+="</table>";
	document.getElementById('mytable').innerHTML = myTable;
	  var var1 = "";
	  var var3 = "";
	  var var4 = "";
	  var nationrank="";
	  var stringcounty ="";
	  
	$("path, circle").mouseenter(function(e) {
	  $('#info-box').css('display','block');
	  if (typeof $(this).data('info5') != 'undefined'){
	  stringcounty = $(this).data('info5').replace(stringstate,'');
	  var1 = $(this).data('info');
	  var3 = $(this).data('info2')
	   var4 = $(this).data('info5')
	   nationrank=suffix(var1);
	  var3=suffix(var3);
	  if (nationrank.length=='6'){
		  nationrank=nationrank.replace(nationrank[0],nationrank[0]+',');
		  }
	  }
	   if (nationrank=="2,927th"){
			  $('#info-box').html(stringcounty +" County: <strong>No harvest reported in survey</strong>");
		  }
		  else{
	  $('#info-box').html(stringcounty +" County ranks <strong>"+var3+"</strong> out of "+pathlength+" counties in the state<br>and <strong>"+nationrank+"</strong> out of 3,111 counties in the U.S.");
		  }
	  
	  
		myTable= "<table><tr><td style='height:15px; color:black; font-variant: small-caps; font-weight: bolder; font-size:larger;'>Top Ranked Counties within the State</td></tr>";
	  for (var i=1; i<12; i++) {
		if (i==11){
			myTable+="<tr><td style='height:15px; color:black; font-variant: small-caps; font-weight: bold; font-style:italic;'>Highlighted county rank within the state (out of "+pathlength+")</td></tr><tr><td style='height:15px;'>&nbsp;" +var4+" - "+var3+ "</td></tr>";
			myTable+="<tr><td style='height:15px; color:black; font-variant: small-caps; font-weight: bold; font-style:italic;'>Highlighted county rank within the country (out of 3111)</td></tr><tr><td style='heigh:15px;'>&nbsp;" +var4+" - "+var1+ "</td></tr>";
		}
		else{
		myTable+="<td style='height:15px;'> " +myArray2[i]+ "</td></tr>";
		}
	  }  
	   myTable+="</table>";
	 document.getElementById('mytable').innerHTML = myTable;
	 });
	svgKentucky.addEventListener('click', function(ev){
		//svgKentucky.style.display = 'none';
		svg1.style.display = 'block';
		return;
	})
	$("path, circle").mouseleave(function(e) {
  $('#info-box').css('display','none');
});
})
ME.addEventListener('click', function(ev){
	hideall();
	hideselect();
	svgMaine.style.display = 'block';
	
	ME.style.fill = '#002868';
	var svgW=window.innerWidth
	var svgH=window.innerHeight
    var bb=svgMaine.getBBox()
	var bbx=bb.x
	var bby=bb.y
	var bbw=bb.width
	var bbh=bb.height
    svgMaine.setAttribute("viewBox",bbx+" "+bby+" "+bbw+" "+bbh )
    svgMaine.setAttribute("width",svgW/1.5)
    svgMaine.setAttribute("height",svgH)
		var myArray2    = new Array();
	 paths = svgMaine.querySelectorAll('.maine > path');
	 stringstate = ', ME'
	pathlength=paths.length;
		for(var i=0; i<pathlength; ++i) {
		pathdata = paths[i].attributes['data-info2'].value;
		pathdata2 = paths[i].attributes['data-info5'].value;
		if(parseInt(pathdata)< 11){
		pathdata2=pathdata2.replace(stringstate,'')
		if(pathdata== '1'){
			myArray2[1] =pathdata2;
			continue;
		}if(pathdata== '2'){
			myArray2[2] =pathdata2;
			continue;
		}if(pathdata== '3'){
			myArray2[3] =pathdata2;
			continue;
		}if(pathdata== '4'){
			myArray2[4] =pathdata2;
			continue;
		}if(pathdata== '5'){
			myArray2[5] =pathdata2;
			continue;
		}if(pathdata== '6'){
			myArray2[6] =pathdata2;
			continue;
		}if(pathdata== '7'){
			myArray2[7] =pathdata2;
			continue;
		}if(pathdata== '8'){
			myArray2[8] =pathdata2;
			continue;
		}if(pathdata== '9'){
			myArray2[9] =pathdata2;
			continue;
		}if(pathdata== '10'){
			myArray2[10] =pathdata2;
			continue;
		}
		}
	}
	var myTable= "<table><tr><td style='height:15px; color:black; font-variant: small-caps; font-weight: bolder; font-size:larger;'>Top Ranked Counties within the State</td></tr>";
	  for (var i=1; i<12; i++) {
		if (i==11){
			myTable+="<tr><td style='height:15px; color:black; font-variant: small-caps; font-weight: bold; font-style:italic;'>Highlighted county rank within the state (out of "+pathlength+")</td></tr><tr><td style='height:15px;'>&nbsp;</td></tr>";
			myTable+="<tr><td style='height:15px; color:black; font-variant: small-caps; font-weight: bold; font-style:italic;'>Highlighted county rank within the country (out of 3111)</td></tr><tr><td style='heigh:15px;'>&nbsp;</td></tr>";
		}
		else{
		myTable+="<td style='height:15px;'> " +myArray2[i]+ "</td></tr>";
		}
	  }  
	   myTable+="</table>";
	 document.getElementById('mytable').innerHTML = myTable;
	  var var1 = "";
	  var var3 = "";
	  var var4 = "";
	  var nationrank="";
	  var stringcounty ="";
	  
	$("path, circle").mouseenter(function(e) {
	  $('#info-box').css('display','block');
	  if (typeof $(this).data('info5') != 'undefined'){
	  stringcounty = $(this).data('info5').replace(stringstate,'');
	  var1 = $(this).data('info');
	  var3 = $(this).data('info2')
	   var4 = $(this).data('info5')
	   nationrank=suffix(var1);
	  var3=suffix(var3);
	  if (nationrank.length=='6'){
		  nationrank=nationrank.replace(nationrank[0],nationrank[0]+',');
		  }
	  }
	   if (nationrank=="2,927th"){
			  $('#info-box').html(stringcounty +" County: <strong>No harvest reported in survey</strong>");
		  }
		  else{
	  $('#info-box').html(stringcounty +" County ranks <strong>"+var3+"</strong> out of "+pathlength+" counties in the state<br>and <strong>"+nationrank+"</strong> out of 3,111 counties in the U.S.");
		  }
	  
	  
		myTable= "<table><tr><td style='height:15px; color:black; font-variant: small-caps; font-weight: bolder; font-size:larger;'>Top Ranked Counties within the State</td></tr>";
	  for (var i=1; i<12; i++) {
		if (i==11){
			myTable+="<tr><td style='height:15px; color:black; font-variant: small-caps; font-weight: bold; font-style:italic;'>Highlighted county rank within the state (out of "+pathlength+")</td></tr><tr><td style='height:15px;'>&nbsp;" +var4+" - "+var3+ "</td></tr>";
			myTable+="<tr><td style='height:15px; color:black; font-variant: small-caps; font-weight: bold; font-style:italic;'>Highlighted county rank within the country (out of 3111)</td></tr><tr><td style='heigh:15px;'>&nbsp;" +var4+" - "+var1+ "</td></tr>";
		}
		else{
		myTable+="<td style='height:15px;'> " +myArray2[i]+ "</td></tr>";
		}
	  }  
	   myTable+="</table>";
	 document.getElementById('mytable').innerHTML = myTable;
	 });
	svgMaine.addEventListener('click', function(ev){
		//svgMaine.style.display = 'none';
		svg1.style.display = 'block';
		return;
	})
	$("path, circle").mouseleave(function(e) {
  $('#info-box').css('display','none');
});
})
MD.addEventListener('click', function(ev){
	hideall();
	hideselect();
	svgMaryland.style.display = 'block';
	
	MD.style.fill = '#002868';
	var svgW=window.innerWidth
	var svgH=window.innerHeight
    var bb=svgMaryland.getBBox()
	var bbx=bb.x
	var bby=bb.y
	var bbw=bb.width
	var bbh=bb.height
    svgMaryland.setAttribute("viewBox",bbx+" "+bby+" "+bbw+" "+bbh )
    svgMaryland.setAttribute("width",svgW/1.5)
    svgMaryland.setAttribute("height",svgH)
	var myArray2    = new Array();
	 paths = svgMaryland.querySelectorAll('.maryland > path');
	 stringstate = ', MD'
	pathlength=paths.length;
		for(var i=0; i<pathlength; ++i) {
		pathdata = paths[i].attributes['data-info2'].value;
		pathdata2 = paths[i].attributes['data-info5'].value;
		if(parseInt(pathdata)< 11){
		pathdata2=pathdata2.replace(stringstate,'')
		if(pathdata== '1'){
			myArray2[1] =pathdata2;
			continue;
		}if(pathdata== '2'){
			myArray2[2] =pathdata2;
			continue;
		}if(pathdata== '3'){
			myArray2[3] =pathdata2;
			continue;
		}if(pathdata== '4'){
			myArray2[4] =pathdata2;
			continue;
		}if(pathdata== '5'){
			myArray2[5] =pathdata2;
			continue;
		}if(pathdata== '6'){
			myArray2[6] =pathdata2;
			continue;
		}if(pathdata== '7'){
			myArray2[7] =pathdata2;
			continue;
		}if(pathdata== '8'){
			myArray2[8] =pathdata2;
			continue;
		}if(pathdata== '9'){
			myArray2[9] =pathdata2;
			continue;
		}if(pathdata== '10'){
			myArray2[10] =pathdata2;
			continue;
		}
		}
	}
	var myTable= "<table><tr><td style='height:15px; color:black; font-variant: small-caps; font-weight: bolder; font-size:larger;'>Top Ranked Counties within the State</td></tr>";
	  for (var i=1; i<12; i++) {
		if (i==11){
			myTable+="<tr><td style='height:15px; color:black; font-variant: small-caps; font-weight: bold; font-style:italic;'>Highlighted county rank within the state (out of "+pathlength+")</td></tr><tr><td style='height:15px;'>&nbsp;</td></tr>";
			myTable+="<tr><td style='height:15px; color:black; font-variant: small-caps; font-weight: bold; font-style:italic;'>Highlighted county rank within the country (out of 3111)</td></tr><tr><td style='heigh:15px;'>&nbsp;</td></tr>";
		}
		else{
			 console.log(myArray2[i]);
		myTable+="<td style='height:15px;'> " +myArray2[i]+ "</td></tr>";
		}
	  }  
	   myTable+="</table>";
	 document.getElementById('mytable').innerHTML = myTable;
	  var var1 = "";
	  var var3 = "";
	  var var4 = "";
	  var nationrank="";
	  var stringcounty ="";
	  
	$("path, circle").mouseenter(function(e) {
	  $('#info-box').css('display','block');
	  if (typeof $(this).data('info5') != 'undefined'){
	  stringcounty = $(this).data('info5').replace(stringstate,'');
	  var1 = $(this).data('info');
	  var3 = $(this).data('info2')
	   var4 = $(this).data('info5')
	   nationrank=suffix(var1);
	  var3=suffix(var3);
	  if (nationrank.length=='6'){
		  nationrank=nationrank.replace(nationrank[0],nationrank[0]+',');
		  }
	  }
	   if (nationrank=="2,927th"){
		   if (stringcounty=="!Baltimore"){
			   stringcounty=stringcounty.replace('!','');
			   $('#info-box').html(stringcounty +" City: <strong>No harvest reported in survey</strong>");
		   }
		   else{
		   $('#info-box').html(stringcounty +" County: <strong>No harvest reported in survey</strong>");}
		  }
		  else{
	  $('#info-box').html(stringcounty +" County ranks <strong>"+var3+"</strong> out of "+pathlength+" counties in the state<br>and <strong>"+nationrank+"</strong> out of 3,111 counties in the U.S.");
		  }
	  
	  
		myTable= "<table><tr><td style='height:15px; color:black; font-variant: small-caps; font-weight: bolder; font-size:larger;'>Top Ranked Counties within the State</td></tr>";
	  for (var i=1; i<12; i++) {
		if (i==11){
			myTable+="<tr><td style='height:15px; color:black; font-variant: small-caps; font-weight: bold; font-style:italic;'>Highlighted county rank within the state (out of "+pathlength+")</td></tr><tr><td style='height:15px;'>&nbsp;" +var4+" - "+var3+ "</td></tr>";
			myTable+="<tr><td style='height:15px; color:black; font-variant: small-caps; font-weight: bold; font-style:italic;'>Highlighted county rank within the country (out of 3111)</td></tr><tr><td style='heigh:15px;'>&nbsp;" +var4+" - "+var1+ "</td></tr>";
		}
		else{
		myTable+="<td style='height:15px;'> " +myArray2[i]+ "</td></tr>";
		}
	  }  
	   myTable+="</table>";
	 document.getElementById('mytable').innerHTML = myTable;
	 });
	svgMaryland.addEventListener('click', function(ev){
		//svgMaryland.style.display = 'none';
		svg1.style.display = 'block';
		return;
	})
	$("path, circle").mouseleave(function(e) {
  $('#info-box').css('display','none');
});
})
MA.addEventListener('click', function(ev){
	hideall();
	hideselect();
	svgMassachusetts.style.display = 'block';
	
	MA.style.fill = '#002868';
	var svgW=window.innerWidth
	var svgH=window.innerHeight
    var bb=svgMassachusetts.getBBox()
	var bbx=bb.x
	var bby=bb.y
	var bbw=bb.width
	var bbh=bb.height
    svgMassachusetts.setAttribute("viewBox",bbx+" "+bby+" "+bbw+" "+bbh )
    svgMassachusetts.setAttribute("width",svgW/1.5)
    svgMassachusetts.setAttribute("height",svgH)
		var myArray2    = new Array();
	 paths = svgMassachusetts.querySelectorAll('.massachusetts > path');
	 stringstate = ', MA'
	pathlength=paths.length;
		for(var i=0; i<pathlength; ++i) {
		pathdata = paths[i].attributes['data-info2'].value;
		pathdata2 = paths[i].attributes['data-info5'].value;
		if(parseInt(pathdata)< 11){
		pathdata2=pathdata2.replace(stringstate,'')
		if(pathdata== '1'){
			myArray2[1] =pathdata2;
			continue;
		}if(pathdata== '2'){
			myArray2[2] =pathdata2;
			continue;
		}if(pathdata== '3'){
			myArray2[3] =pathdata2;
			continue;
		}if(pathdata== '4'){
			myArray2[4] =pathdata2;
			continue;
		}if(pathdata== '5'){
			myArray2[5] =pathdata2;
			continue;
		}if(pathdata== '6'){
			myArray2[6] =pathdata2;
			continue;
		}if(pathdata== '7'){
			myArray2[7] =pathdata2;
			continue;
		}if(pathdata== '8'){
			myArray2[8] =pathdata2;
			continue;
		}if(pathdata== '9'){
			myArray2[9] =pathdata2;
			continue;
		}if(pathdata== '10'){
			myArray2[10] =pathdata2;
			continue;
		}
		}
	}
	var myTable= "<table><tr><td style='height:15px; color:black; font-variant: small-caps; font-weight: bolder; font-size:larger;'>Top Ranked Counties within the State</td></tr>";
	  for (var i=1; i<12; i++) {
		if (i==11){
			myTable+="<tr><td style='height:15px; color:black; font-variant: small-caps; font-weight: bold; font-style:italic;'>Highlighted county rank within the state (out of "+pathlength+")</td></tr><tr><td style='height:15px;'>&nbsp;</td></tr>";
			myTable+="<tr><td style='height:15px; color:black; font-variant: small-caps; font-weight: bold; font-style:italic;'>Highlighted county rank within the country (out of 3111)</td></tr><tr><td style='heigh:15px;'>&nbsp;</td></tr>";
		}
		else{
		myTable+="<td style='height:15px;'> " +myArray2[i]+ "</td></tr>";
		}
	  }  
	   myTable+="</table>";
	 document.getElementById('mytable').innerHTML = myTable;
	  var var1 = "";
	  var var3 = "";
	  var var4 = "";
	  var nationrank="";
	  var stringcounty ="";
	  
	$("path, circle").mouseenter(function(e) {
	  $('#info-box').css('display','block');
	  if (typeof $(this).data('info5') != 'undefined'){
	  stringcounty = $(this).data('info5').replace(stringstate,'');
	  var1 = $(this).data('info');
	  var3 = $(this).data('info2')
	   var4 = $(this).data('info5')
	   nationrank=suffix(var1);
	  var3=suffix(var3);
	  if (nationrank.length=='6'){
		  nationrank=nationrank.replace(nationrank[0],nationrank[0]+',');
		  }
	  }
	   if (nationrank=="2,927th"){
			  $('#info-box').html(stringcounty +" County: <strong>No harvest reported in survey</strong>");
		  }
		  else{
	  $('#info-box').html(stringcounty +" County ranks <strong>"+var3+"</strong> out of "+pathlength+" counties in the state<br>and <strong>"+nationrank+"</strong> out of 3,111 counties in the U.S.");
		  }
	  
	  
		myTable= "<table><tr><td style='height:15px; color:black; font-variant: small-caps; font-weight: bolder; font-size:larger;'>Top Ranked Counties within the State</td></tr>";
	  for (var i=1; i<12; i++) {
		if (i==11){
			myTable+="<tr><td style='height:15px; color:black; font-variant: small-caps; font-weight: bold; font-style:italic;'>Highlighted county rank within the state (out of "+pathlength+")</td></tr><tr><td style='height:15px;'>&nbsp;" +var4+" - "+var3+ "</td></tr>";
			myTable+="<tr><td style='height:15px; color:black; font-variant: small-caps; font-weight: bold; font-style:italic;'>Highlighted county rank within the country (out of 3111)</td></tr><tr><td style='heigh:15px;'>&nbsp;" +var4+" - "+var1+ "</td></tr>";
		}
		else{
		myTable+="<td style='height:15px;'> " +myArray2[i]+ "</td></tr>";
		}
	  }  
	   myTable+="</table>";
	 document.getElementById('mytable').innerHTML = myTable;
	 });
	svgMassachusetts.addEventListener('click', function(ev){
		//svgMassachusetts.style.display = 'none';
		svg1.style.display = 'block';
		return;
	})
	$("path, circle").mouseleave(function(e) {
  $('#info-box').css('display','none');
});
})
MI.addEventListener('click', function(ev){
	hideall();
	hideselect();
	svgMichigan.style.display = 'block';

	MI.style.fill = '#002868';
	var svgW=window.innerWidth
	var svgH=window.innerHeight
    var bb=svgMichigan.getBBox()
	var bbx=bb.x
	var bby=bb.y
	var bbw=bb.width
	var bbh=bb.height
    svgMichigan.setAttribute("viewBox",bbx+" "+bby+" "+bbw+" "+bbh )
    svgMichigan.setAttribute("width",svgW/1.5)
    svgMichigan.setAttribute("height",svgH)
		var myArray2    = new Array();
	 paths = svgMichigan.querySelectorAll('.michigan > path');
	 stringstate = ', MI'
	pathlength=paths.length;
		for(var i=0; i<pathlength; ++i) {
		pathdata = paths[i].attributes['data-info2'].value;
		pathdata2 = paths[i].attributes['data-info5'].value;
		if(parseInt(pathdata)< 11){
		pathdata2=pathdata2.replace(stringstate,'')
		if(pathdata== '1'){
			myArray2[1] =pathdata2;
			continue;
		}if(pathdata== '2'){
			myArray2[2] =pathdata2;
			continue;
		}if(pathdata== '3'){
			myArray2[3] =pathdata2;
			continue;
		}if(pathdata== '4'){
			myArray2[4] =pathdata2;
			continue;
		}if(pathdata== '5'){
			myArray2[5] =pathdata2;
			continue;
		}if(pathdata== '6'){
			myArray2[6] =pathdata2;
			continue;
		}if(pathdata== '7'){
			myArray2[7] =pathdata2;
			continue;
		}if(pathdata== '8'){
			myArray2[8] =pathdata2;
			continue;
		}if(pathdata== '9'){
			myArray2[9] =pathdata2;
			continue;
		}if(pathdata== '10'){
			myArray2[10] =pathdata2;
			continue;
		}
		}
	}
	
	var myTable= "<table><tr><td style='height:15px; color:black; font-variant: small-caps; font-weight: bolder; font-size:larger;'>Top Ranked Counties within the State</td></tr>";
	  for (var i=1; i<12; i++) {
		if (i==11){
			myTable+="<tr><td style='height:15px; color:black; font-variant: small-caps; font-weight: bold; font-style:italic;'>Highlighted county rank within the state (out of "+pathlength+")</td></tr><tr><td style='height:15px;'>&nbsp;</td></tr>";
			myTable+="<tr><td style='height:15px; color:black; font-variant: small-caps; font-weight: bold; font-style:italic;'>Highlighted county rank within the country (out of 3111)</td></tr><tr><td style='heigh:15px;'>&nbsp;</td></tr>";
		}
		else{
		myTable+="<td style='height:15px;'> " +myArray2[i]+ "</td></tr>";
		}
	  }  
	   myTable+="</table>";
	 document.getElementById('mytable').innerHTML = myTable;
	  var var1 = "";
	  var var3 = "";
	  var var4 = "";
	  var nationrank="";
	  var stringcounty ="";
	  
	$("path, circle").mouseenter(function(e) {
	  $('#info-box').css('display','block');
	  if (typeof $(this).data('info5') != 'undefined'){
	  stringcounty = $(this).data('info5').replace(stringstate,'');
	  var1 = $(this).data('info');
	  var3 = $(this).data('info2')
	   var4 = $(this).data('info5')
	   nationrank=suffix(var1);
	  var3=suffix(var3);
	  if (nationrank.length=='6'){
		  nationrank=nationrank.replace(nationrank[0],nationrank[0]+',');
		  }
	  }
	   if (nationrank=="2,927th"){
			  $('#info-box').html(stringcounty +" County: <strong>No harvest reported in survey</strong>");
		  }
		  else{
	  $('#info-box').html(stringcounty +" County ranks <strong>"+var3+"</strong> out of "+pathlength+" counties in the state<br>and <strong>"+nationrank+"</strong> out of 3,111 counties in the U.S.");
		  }
	  
	  
		myTable= "<table><tr><td style='height:15px; color:black; font-variant: small-caps; font-weight: bolder; font-size:larger;'>Top Ranked Counties within the State</td></tr>";
	  for (var i=1; i<12; i++) {
		if (i==11){
			myTable+="<tr><td style='height:15px; color:black; font-variant: small-caps; font-weight: bold; font-style:italic;'>Highlighted county rank within the state (out of "+pathlength+")</td></tr><tr><td style='height:15px;'>&nbsp;" +var4+" - "+var3+ "</td></tr>";
			myTable+="<tr><td style='height:15px; color:black; font-variant: small-caps; font-weight: bold; font-style:italic;'>Highlighted county rank within the country (out of 3111)</td></tr><tr><td style='heigh:15px;'>&nbsp;" +var4+" - "+var1+ "</td></tr>";
		}
		else{
		myTable+="<td style='height:15px;'> " +myArray2[i]+ "</td></tr>";
		}
	  }  
	   myTable+="</table>";
	 document.getElementById('mytable').innerHTML = myTable;
	 });
	svgMichigan.addEventListener('click', function(ev){
		//svgMichigan.style.display = 'none';
		svg1.style.display = 'block';
		return;
	})
	$("path, circle").mouseleave(function(e) {
  $('#info-box').css('display','none');
});
})
MN.addEventListener('click', function(ev){
	hideall();
	hideselect();
	svgMinnesota.style.display = 'block';
	
	MN.style.fill = '#002868';
	var svgW=window.innerWidth
	var svgH=window.innerHeight
    var bb=svgMinnesota.getBBox()
	var bbx=bb.x
	var bby=bb.y
	var bbw=bb.width
	var bbh=bb.height
    svgMinnesota.setAttribute("viewBox",bbx+" "+bby+" "+bbw+" "+bbh )
    svgMinnesota.setAttribute("width",svgW/1.5)
    svgMinnesota.setAttribute("height",svgH)
		var myArray2    = new Array();
	 paths = svgMinnesota.querySelectorAll('.minnesota > path');
	 stringstate = ', MN'
	pathlength=paths.length;
		for(var i=0; i<pathlength; ++i) {
		pathdata = paths[i].attributes['data-info2'].value;
		pathdata2 = paths[i].attributes['data-info5'].value;
		if(parseInt(pathdata)< 11){
		pathdata2=pathdata2.replace(stringstate,'')
		if(pathdata== '1'){
			myArray2[1] =pathdata2;
			continue;
		}if(pathdata== '2'){
			myArray2[2] =pathdata2;
			continue;
		}if(pathdata== '3'){
			myArray2[3] =pathdata2;
			continue;
		}if(pathdata== '4'){
			myArray2[4] =pathdata2;
			continue;
		}if(pathdata== '5'){
			myArray2[5] =pathdata2;
			continue;
		}if(pathdata== '6'){
			myArray2[6] =pathdata2;
			continue;
		}if(pathdata== '7'){
			myArray2[7] =pathdata2;
			continue;
		}if(pathdata== '8'){
			myArray2[8] =pathdata2;
			continue;
		}if(pathdata== '9'){
			myArray2[9] =pathdata2;
			continue;
		}if(pathdata== '10'){
			myArray2[10] =pathdata2;
			continue;
		}
		}
	}
	var myTable= "<table><tr><td style='height:15px; color:black; font-variant: small-caps; font-weight: bolder; font-size:larger;'>Top Ranked Counties within the State</td></tr>";
	  for (var i=1; i<12; i++) {
		if (i==11){
			myTable+="<tr><td style='height:15px; color:black; font-variant: small-caps; font-weight: bold; font-style:italic;'>Highlighted county rank within the state (out of "+pathlength+")</td></tr><tr><td style='height:15px;'>&nbsp;</td></tr>";
			myTable+="<tr><td style='height:15px; color:black; font-variant: small-caps; font-weight: bold; font-style:italic;'>Highlighted county rank within the country (out of 3111)</td></tr><tr><td style='heigh:15px;'>&nbsp;</td></tr>";
		}
		else{
		myTable+="<td style='height:15px;'> " +myArray2[i]+ "</td></tr>";
		}
	  }  
	   myTable+="</table>";
	 document.getElementById('mytable').innerHTML = myTable;
	  var var1 = "";
	  var var3 = "";
	  var var4 = "";
	  var nationrank="";
	  var stringcounty ="";
	  
	$("path, circle").mouseenter(function(e) {
	  $('#info-box').css('display','block');
	  if (typeof $(this).data('info5') != 'undefined'){
	  stringcounty = $(this).data('info5').replace(stringstate,'');
	  var1 = $(this).data('info');
	  var3 = $(this).data('info2')
	   var4 = $(this).data('info5')
	   nationrank=suffix(var1);
	  var3=suffix(var3);
	  if (nationrank.length=='6'){
		  nationrank=nationrank.replace(nationrank[0],nationrank[0]+',');
		  }
	  }
	   if (nationrank=="2,927th"){
			  $('#info-box').html(stringcounty +" County: <strong>No harvest reported in survey</strong>");
		  }
		  else{
	  $('#info-box').html(stringcounty +" County ranks <strong>"+var3+"</strong> out of "+pathlength+" counties in the state<br>and <strong>"+nationrank+"</strong> out of 3,111 counties in the U.S.");
		  }
	  
	  
		myTable= "<table><tr><td style='height:15px; color:black; font-variant: small-caps; font-weight: bolder; font-size:larger;'>Top Ranked Counties within the State</td></tr>";
	  for (var i=1; i<12; i++) {
		if (i==11){
			myTable+="<tr><td style='height:15px; color:black; font-variant: small-caps; font-weight: bold; font-style:italic;'>Highlighted county rank within the state (out of "+pathlength+")</td></tr><tr><td style='height:15px;'>&nbsp;" +var4+" - "+var3+ "</td></tr>";
			myTable+="<tr><td style='height:15px; color:black; font-variant: small-caps; font-weight: bold; font-style:italic;'>Highlighted county rank within the country (out of 3111)</td></tr><tr><td style='heigh:15px;'>&nbsp;" +var4+" - "+var1+ "</td></tr>";
		}
		else{
		myTable+="<td style='height:15px;'> " +myArray2[i]+ "</td></tr>";
		}
	  }  
	   myTable+="</table>";
	 document.getElementById('mytable').innerHTML = myTable;
	 });
	svgMinnesota.addEventListener('click', function(ev){
		//svgMinnesota.style.display = 'none';
		svg1.style.display = 'block';
		return;
	})
	$("path, circle").mouseleave(function(e) {
  $('#info-box').css('display','none');
});
})
MS.addEventListener('click', function(ev){
	hideall();
	hideselect();
	svgMississippi.style.display = 'block';
	
	MS.style.fill = '#002868';
	var svgW=window.innerWidth
	var svgH=window.innerHeight
    var bb=svgMississippi.getBBox()
	var bbx=bb.x
	var bby=bb.y
	var bbw=bb.width
	var bbh=bb.height
    svgMississippi.setAttribute("viewBox",bbx+" "+bby+" "+bbw+" "+bbh )
    svgMississippi.setAttribute("width",svgW/1.5)
    svgMississippi.setAttribute("height",svgH)
		var myArray2    = new Array();
	 paths = svgMississippi.querySelectorAll('.mississippi > path');
	 stringstate = ', MS'
	pathlength=paths.length;
		for(var i=0; i<pathlength; ++i) {
		pathdata = paths[i].attributes['data-info2'].value;
		pathdata2 = paths[i].attributes['data-info5'].value;
		if(parseInt(pathdata)< 11){
		pathdata2=pathdata2.replace(stringstate,'')
		if(pathdata== '1'){
			myArray2[1] =pathdata2;
			continue;
		}if(pathdata== '2'){
			myArray2[2] =pathdata2;
			continue;
		}if(pathdata== '3'){
			myArray2[3] =pathdata2;
			continue;
		}if(pathdata== '4'){
			myArray2[4] =pathdata2;
			continue;
		}if(pathdata== '5'){
			myArray2[5] =pathdata2;
			continue;
		}if(pathdata== '6'){
			myArray2[6] =pathdata2;
			continue;
		}if(pathdata== '7'){
			myArray2[7] =pathdata2;
			continue;
		}if(pathdata== '8'){
			myArray2[8] =pathdata2;
			continue;
		}if(pathdata== '9'){
			myArray2[9] =pathdata2;
			continue;
		}if(pathdata== '10'){
			myArray2[10] =pathdata2;
			continue;
		}
		}
	}
	var myTable= "<table><tr><td style='height:15px; color:black; font-variant: small-caps; font-weight: bolder; font-size:larger;'>Top Ranked Counties within the State</td></tr>";
	  for (var i=1; i<12; i++) {
		if (i==11){
			myTable+="<tr><td style='height:15px; color:black; font-variant: small-caps; font-weight: bold; font-style:italic;'>Highlighted county rank within the state (out of "+pathlength+")</td></tr><tr><td style='height:15px;'>&nbsp;</td></tr>";
			myTable+="<tr><td style='height:15px; color:black; font-variant: small-caps; font-weight: bold; font-style:italic;'>Highlighted county rank within the country (out of 3111)</td></tr><tr><td style='heigh:15px;'>&nbsp;</td></tr>";
		}
		else{
		myTable+="<td style='height:15px;'> " +myArray2[i]+ "</td></tr>";
		}
	  }  
	   myTable+="</table>";
	 document.getElementById('mytable').innerHTML = myTable;
	  var var1 = "";
	  var var3 = "";
	  var var4 = "";
	  var nationrank="";
	  var stringcounty ="";
	  
	$("path, circle").mouseenter(function(e) {
	  $('#info-box').css('display','block');
	  if (typeof $(this).data('info5') != 'undefined'){
	  stringcounty = $(this).data('info5').replace(stringstate,'');
	  var1 = $(this).data('info');
	  var3 = $(this).data('info2')
	   var4 = $(this).data('info5')
	   nationrank=suffix(var1);
	  var3=suffix(var3);
	  if (nationrank.length=='6'){
		  nationrank=nationrank.replace(nationrank[0],nationrank[0]+',');
		  }
	  }
	   if (nationrank=="2,927th"){
			  $('#info-box').html(stringcounty +" County: <strong>No harvest reported in survey</strong>");
		  }
		  else{
	  $('#info-box').html(stringcounty +" County ranks <strong>"+var3+"</strong> out of "+pathlength+" counties in the state<br>and <strong>"+nationrank+"</strong> out of 3,111 counties in the U.S.");
		  }
	  
	  
		myTable= "<table><tr><td style='height:15px; color:black; font-variant: small-caps; font-weight: bolder; font-size:larger;'>Top Ranked Counties within the State</td></tr>";
	  for (var i=1; i<12; i++) {
		if (i==11){
			myTable+="<tr><td style='height:15px; color:black; font-variant: small-caps; font-weight: bold; font-style:italic;'>Highlighted county rank within the state (out of "+pathlength+")</td></tr><tr><td style='height:15px;'>&nbsp;" +var4+" - "+var3+ "</td></tr>";
			myTable+="<tr><td style='height:15px; color:black; font-variant: small-caps; font-weight: bold; font-style:italic;'>Highlighted county rank within the country (out of 3111)</td></tr><tr><td style='heigh:15px;'>&nbsp;" +var4+" - "+var1+ "</td></tr>";
		}
		else{
		myTable+="<td style='height:15px;'> " +myArray2[i]+ "</td></tr>";
		}
	  }  
	   myTable+="</table>";
	 document.getElementById('mytable').innerHTML = myTable;
	 });
	svgMississippi.addEventListener('click', function(ev){
		//svgMississippi.style.display = 'none';
		svg1.style.display = 'block';
		return;
	})
	$("path, circle").mouseleave(function(e) {
  $('#info-box').css('display','none');
});
})
MO.addEventListener('click', function(ev){
	hideall();
	hideselect();
	svgMissouri.style.display = 'block';
	
	MO.style.fill = '#002868';
	var svgW=window.innerWidth
	var svgH=window.innerHeight
    var bb=svgMissouri.getBBox()
	var bbx=bb.x
	var bby=bb.y
	var bbw=bb.width
	var bbh=bb.height
    svgMissouri.setAttribute("viewBox",bbx+" "+bby+" "+bbw+" "+bbh )
    svgMissouri.setAttribute("width",svgW/1.5)
    svgMissouri.setAttribute("height",svgH)
		var myArray2    = new Array();
	 paths = svgMissouri.querySelectorAll('.missouri > path');
	 stringstate = ', MO'
	pathlength=paths.length;
		for(var i=0; i<pathlength; ++i) {
		pathdata = paths[i].attributes['data-info2'].value;
		pathdata2 = paths[i].attributes['data-info5'].value;
		if(parseInt(pathdata)< 11){
		pathdata2=pathdata2.replace(stringstate,'')
		if(pathdata== '1'){
			myArray2[1] =pathdata2;
			continue;
		}if(pathdata== '2'){
			myArray2[2] =pathdata2;
			continue;
		}if(pathdata== '3'){
			myArray2[3] =pathdata2;
			continue;
		}if(pathdata== '4'){
			myArray2[4] =pathdata2;
			continue;
		}if(pathdata== '5'){
			myArray2[5] =pathdata2;
			continue;
		}if(pathdata== '6'){
			myArray2[6] =pathdata2;
			continue;
		}if(pathdata== '7'){
			myArray2[7] =pathdata2;
			continue;
		}if(pathdata== '8'){
			myArray2[8] =pathdata2;
			continue;
		}if(pathdata== '9'){
			myArray2[9] =pathdata2;
			continue;
		}if(pathdata== '10'){
			myArray2[10] =pathdata2;
			continue;
		}
		}
	}
	var myTable= "<table><tr><td style='height:15px; color:black; font-variant: small-caps; font-weight: bolder; font-size:larger;'>Top Ranked Counties within the State</td></tr>";
	  for (var i=1; i<12; i++) {
		if (i==11){
			myTable+="<tr><td style='height:15px; color:black; font-variant: small-caps; font-weight: bold; font-style:italic;'>Highlighted county rank within the state (out of "+pathlength+")</td></tr><tr><td style='height:15px;'>&nbsp;</td></tr>";
			myTable+="<tr><td style='height:15px; color:black; font-variant: small-caps; font-weight: bold; font-style:italic;'>Highlighted county rank within the country (out of 3111)</td></tr><tr><td style='heigh:15px;'>&nbsp;</td></tr>";
		}
		else{
		myTable+="<td style='height:15px;'> " +myArray2[i]+ "</td></tr>";
		}
	  }  
	   myTable+="</table>";
	 document.getElementById('mytable').innerHTML = myTable;
	  var var1 = "";
	  var var3 = "";
	  var var4 = "";
	  var nationrank="";
	  var stringcounty ="";
	  
	$("path, circle").mouseenter(function(e) {
	  $('#info-box').css('display','block');
	  if (typeof $(this).data('info5') != 'undefined'){
	  stringcounty = $(this).data('info5').replace(stringstate,'');
	  var1 = $(this).data('info');
	  var3 = $(this).data('info2')
	   var4 = $(this).data('info5')
	   nationrank=suffix(var1);
	  var3=suffix(var3);
	  if (nationrank.length=='6'){
		  nationrank=nationrank.replace(nationrank[0],nationrank[0]+',');
		  }
	  }
	   if (nationrank=="2,927th"){
			  $('#info-box').html(stringcounty +" County: <strong>No harvest reported in survey</strong>");
		  }
		  else{
	  $('#info-box').html(stringcounty +" County ranks <strong>"+var3+"</strong> out of "+pathlength+" counties in the state<br>and <strong>"+nationrank+"</strong> out of 3,111 counties in the U.S.");
		  }
	  
	  
		myTable= "<table><tr><td style='height:15px; color:black; font-variant: small-caps; font-weight: bolder; font-size:larger;'>Top Ranked Counties within the State</td></tr>";
	  for (var i=1; i<12; i++) {
		if (i==11){
			myTable+="<tr><td style='height:15px; color:black; font-variant: small-caps; font-weight: bold; font-style:italic;'>Highlighted county rank within the state (out of "+pathlength+")</td></tr><tr><td style='height:15px;'>&nbsp;" +var4+" - "+var3+ "</td></tr>";
			myTable+="<tr><td style='height:15px; color:black; font-variant: small-caps; font-weight: bold; font-style:italic;'>Highlighted county rank within the country (out of 3111)</td></tr><tr><td style='heigh:15px;'>&nbsp;" +var4+" - "+var1+ "</td></tr>";
		}
		else{
		myTable+="<td style='height:15px;'> " +myArray2[i]+ "</td></tr>";
		}
	  }  
	   myTable+="</table>";
	 document.getElementById('mytable').innerHTML = myTable;
	 });
	svgMissouri.addEventListener('click', function(ev){
		//svgMissouri.style.display = 'none';
		svg1.style.display = 'block';
		return;
	})
	$("path, circle").mouseleave(function(e) {
  $('#info-box').css('display','none');
});
})
MT.addEventListener('click', function(ev){
	hideall();
	hideselect();
	svgMontana.style.display = 'block';
	
	MT.style.fill = '#002868';
	var svgW=window.innerWidth
	var svgH=window.innerHeight
    var bb=svgMontana.getBBox()
	var bbx=bb.x
	var bby=bb.y
	var bbw=bb.width
	var bbh=bb.height
    svgMontana.setAttribute("viewBox",bbx+" "+bby+" "+bbw+" "+bbh )
    svgMontana.setAttribute("width",svgW/1.5)
    svgMontana.setAttribute("height",svgH)
		var myArray2    = new Array();
	 paths = svgMontana.querySelectorAll('.montana > path');
	 stringstate = ', MT'
	pathlength=paths.length;
		for(var i=0; i<pathlength; ++i) {
		pathdata = paths[i].attributes['data-info2'].value;
		pathdata2 = paths[i].attributes['data-info5'].value;
		if(parseInt(pathdata)< 11){
		pathdata2=pathdata2.replace(stringstate,'')
		if(pathdata== '1'){
			myArray2[1] =pathdata2;
			continue;
		}if(pathdata== '2'){
			myArray2[2] =pathdata2;
			continue;
		}if(pathdata== '3'){
			myArray2[3] =pathdata2;
			continue;
		}if(pathdata== '4'){
			myArray2[4] =pathdata2;
			continue;
		}if(pathdata== '5'){
			myArray2[5] =pathdata2;
			continue;
		}if(pathdata== '6'){
			myArray2[6] =pathdata2;
			continue;
		}if(pathdata== '7'){
			myArray2[7] =pathdata2;
			continue;
		}if(pathdata== '8'){
			myArray2[8] =pathdata2;
			continue;
		}if(pathdata== '9'){
			myArray2[9] =pathdata2;
			continue;
		}if(pathdata== '10'){
			myArray2[10] =pathdata2;
			continue;
		}
		}
	}
	var myTable= "<table><tr><td style='height:15px; color:black; font-variant: small-caps; font-weight: bolder; font-size:larger;'>Top Ranked Counties within the State</td></tr>";
	  for (var i=1; i<12; i++) {
		if (i==11){
			myTable+="<tr><td style='height:15px; color:black; font-variant: small-caps; font-weight: bold; font-style:italic;'>Highlighted county rank within the state (out of "+pathlength+")</td></tr><tr><td style='height:15px;'>&nbsp;</td></tr>";
			myTable+="<tr><td style='height:15px; color:black; font-variant: small-caps; font-weight: bold; font-style:italic;'>Highlighted county rank within the country (out of 3111)</td></tr><tr><td style='heigh:15px;'>&nbsp;</td></tr>";
		}
		else{
		myTable+="<td style='height:15px;'> " +myArray2[i]+ "</td></tr>";
		}
	  }  
	   myTable+="</table>";
	 document.getElementById('mytable').innerHTML = myTable;
	  var var1 = "";
	  var var3 = "";
	  var var4 = "";
	  var nationrank="";
	  var stringcounty ="";
	  
	$("path, circle").mouseenter(function(e) {
	  $('#info-box').css('display','block');
	  if (typeof $(this).data('info5') != 'undefined'){
	  stringcounty = $(this).data('info5').replace(stringstate,'');
	  var1 = $(this).data('info');
	  var3 = $(this).data('info2')
	   var4 = $(this).data('info5')
	   nationrank=suffix(var1);
	  var3=suffix(var3);
	  if (nationrank.length=='6'){
		  nationrank=nationrank.replace(nationrank[0],nationrank[0]+',');
		  }
	  }
	   if (nationrank=="2,927th"){
			  $('#info-box').html(stringcounty +" County: <strong>No harvest reported in survey</strong>");
		  }
		  else{
	  $('#info-box').html(stringcounty +" County ranks <strong>"+var3+"</strong> out of "+pathlength+" counties in the state<br>and <strong>"+nationrank+"</strong> out of 3,111 counties in the U.S.");
		  }
	  
	  
		myTable= "<table><tr><td style='height:15px; color:black; font-variant: small-caps; font-weight: bolder; font-size:larger;'>Top Ranked Counties within the State</td></tr>";
	  for (var i=1; i<12; i++) {
		if (i==11){
			myTable+="<tr><td style='height:15px; color:black; font-variant: small-caps; font-weight: bold; font-style:italic;'>Highlighted county rank within the state (out of "+pathlength+")</td></tr><tr><td style='height:15px;'>&nbsp;" +var4+" - "+var3+ "</td></tr>";
			myTable+="<tr><td style='height:15px; color:black; font-variant: small-caps; font-weight: bold; font-style:italic;'>Highlighted county rank within the country (out of 3111)</td></tr><tr><td style='heigh:15px;'>&nbsp;" +var4+" - "+var1+ "</td></tr>";
		}
		else{
		myTable+="<td style='height:15px;'> " +myArray2[i]+ "</td></tr>";
		}
	  }  
	   myTable+="</table>";
	 document.getElementById('mytable').innerHTML = myTable;
	 });
	svgMontana.addEventListener('click', function(ev){
		//svgMontana.style.display = 'none';
		svg1.style.display = 'block';
		return;
	})
	$("path, circle").mouseleave(function(e) {
  $('#info-box').css('display','none');
});
})
NE.addEventListener('click', function(ev){
	hideall();
	hideselect();
	svgNebraska.style.display = 'block';
	
	NE.style.fill = '#002868';
	var svgW=window.innerWidth
	var svgH=window.innerHeight
    var bb=svgNebraska.getBBox()
	var bbx=bb.x
	var bby=bb.y
	var bbw=bb.width
	var bbh=bb.height
    svgNebraska.setAttribute("viewBox",bbx+" "+bby+" "+bbw+" "+bbh )
    svgNebraska.setAttribute("width",svgW/1.5)
    svgNebraska.setAttribute("height",svgH)
		var myArray2    = new Array();
	 paths = svgNebraska.querySelectorAll('.nebraska > path');
	 stringstate = ', NE'
	pathlength=paths.length;
		for(var i=0; i<pathlength; ++i) {
		pathdata = paths[i].attributes['data-info2'].value;
		pathdata2 = paths[i].attributes['data-info5'].value;
		if(parseInt(pathdata)< 11){
		pathdata2=pathdata2.replace(stringstate,'')
		if(pathdata== '1'){
			myArray2[1] =pathdata2;
			continue;
		}if(pathdata== '2'){
			myArray2[2] =pathdata2;
			continue;
		}if(pathdata== '3'){
			myArray2[3] =pathdata2;
			continue;
		}if(pathdata== '4'){
			myArray2[4] =pathdata2;
			continue;
		}if(pathdata== '5'){
			myArray2[5] =pathdata2;
			continue;
		}if(pathdata== '6'){
			myArray2[6] =pathdata2;
			continue;
		}if(pathdata== '7'){
			myArray2[7] =pathdata2;
			continue;
		}if(pathdata== '8'){
			myArray2[8] =pathdata2;
			continue;
		}if(pathdata== '9'){
			myArray2[9] =pathdata2;
			continue;
		}if(pathdata== '10'){
			myArray2[10] =pathdata2;
			continue;
		}
		}
	}
	var myTable= "<table><tr><td style='height:15px; color:black; font-variant: small-caps; font-weight: bolder; font-size:larger;'>Top Ranked Counties within the State</td></tr>";
	  for (var i=1; i<12; i++) {
		if (i==11){
			myTable+="<tr><td style='height:15px; color:black; font-variant: small-caps; font-weight: bold; font-style:italic;'>Highlighted county rank within the state (out of "+pathlength+")</td></tr><tr><td style='height:15px;'>&nbsp;</td></tr>";
			myTable+="<tr><td style='height:15px; color:black; font-variant: small-caps; font-weight: bold; font-style:italic;'>Highlighted county rank within the country (out of 3111)</td></tr><tr><td style='heigh:15px;'>&nbsp;</td></tr>";
		}
		else{
		myTable+="<td style='height:15px;'> " +myArray2[i]+ "</td></tr>";
		}
	  }  
	   myTable+="</table>";
	 document.getElementById('mytable').innerHTML = myTable;
	  var var1 = "";
	  var var3 = "";
	  var var4 = "";
	  var nationrank="";
	  var stringcounty ="";
	  
	$("path, circle").mouseenter(function(e) {
	  $('#info-box').css('display','block');
	  if (typeof $(this).data('info5') != 'undefined'){
	  stringcounty = $(this).data('info5').replace(stringstate,'');
	  var1 = $(this).data('info');
	  var3 = $(this).data('info2')
	   var4 = $(this).data('info5')
	   nationrank=suffix(var1);
	  var3=suffix(var3);
	  if (nationrank.length=='6'){
		  nationrank=nationrank.replace(nationrank[0],nationrank[0]+',');
		  }
	  }
	   if (nationrank=="2,927th"){
			  $('#info-box').html(stringcounty +" County: <strong>No harvest reported in survey</strong>");
		  }
		  else{
	  $('#info-box').html(stringcounty +" County ranks <strong>"+var3+"</strong> out of "+pathlength+" counties in the state<br>and <strong>"+nationrank+"</strong> out of 3,111 counties in the U.S.");
		  }
	  
	  
		myTable= "<table><tr><td style='height:15px; color:black; font-variant: small-caps; font-weight: bolder; font-size:larger;'>Top Ranked Counties within the State</td></tr>";
	  for (var i=1; i<12; i++) {
		if (i==11){
			myTable+="<tr><td style='height:15px; color:black; font-variant: small-caps; font-weight: bold; font-style:italic;'>Highlighted county rank within the state (out of "+pathlength+")</td></tr><tr><td style='height:15px;'>&nbsp;" +var4+" - "+var3+ "</td></tr>";
			myTable+="<tr><td style='height:15px; color:black; font-variant: small-caps; font-weight: bold; font-style:italic;'>Highlighted county rank within the country (out of 3111)</td></tr><tr><td style='heigh:15px;'>&nbsp;" +var4+" - "+var1+ "</td></tr>";
		}
		else{
		myTable+="<td style='height:15px;'> " +myArray2[i]+ "</td></tr>";
		}
	  }  
	   myTable+="</table>";
	 document.getElementById('mytable').innerHTML = myTable;
	 });
	svgNebraska.addEventListener('click', function(ev){
		//svgNebraska.style.display = 'none';
		svg1.style.display = 'block';
		return;
	})
	$("path, circle").mouseleave(function(e) {
  $('#info-box').css('display','none');
});
})
NV.addEventListener('click', function(ev){
	hideall();
	hideselect();
	svgNevada.style.display = 'block';

	NV.style.fill = '#002868';
	var svgW=window.innerWidth
	var svgH=window.innerHeight
    var bb=svgNevada.getBBox()
	var bbx=bb.x
	var bby=bb.y
	var bbw=bb.width
	var bbh=bb.height
    svgNevada.setAttribute("viewBox",bbx+" "+bby+" "+bbw+" "+bbh )
    svgNevada.setAttribute("width",svgW/1.5)
    svgNevada.setAttribute("height",svgH)
	var myArray2    = new Array();
	 paths = svgNevada.querySelectorAll('.nevada > path');
	 stringstate = ', NV'
	pathlength=paths.length;
		for(var i=0; i<pathlength; ++i) {
		pathdata = paths[i].attributes['data-info2'].value;
		pathdata2 = paths[i].attributes['data-info5'].value;
		if(parseInt(pathdata)< 11){
		pathdata2=pathdata2.replace(stringstate,'')
		if(pathdata== '1'){
			myArray2[1] =pathdata2;
			continue;
		}if(pathdata== '2'){
			myArray2[2] =pathdata2;
			continue;
		}if(pathdata== '3'){
			myArray2[3] =pathdata2;
			continue;
		}if(pathdata== '4'){
			myArray2[4] =pathdata2;
			continue;
		}if(pathdata== '5'){
			myArray2[5] =pathdata2;
			continue;
		}if(pathdata== '6'){
			myArray2[6] =pathdata2;
			continue;
		}if(pathdata== '7'){
			myArray2[7] =pathdata2;
			continue;
		}if(pathdata== '8'){
			myArray2[8] =pathdata2;
			continue;
		}if(pathdata== '9'){
			myArray2[9] =pathdata2;
			continue;
		}if(pathdata== '10'){
			myArray2[10] =pathdata2;
			continue;
		}
		}
	}
	var myTable= "<table><tr><td style='height:15px; color:black; font-variant: small-caps; font-weight: bolder; font-size:larger;'>Top Ranked Counties within the State</td></tr>";
	  for (var i=1; i<12; i++) {
		if (i==11){
			myTable+="<tr><td style='height:15px; color:black; font-variant: small-caps; font-weight: bold; font-style:italic;'>Highlighted county rank within the state (out of "+pathlength+")</td></tr><tr><td style='height:15px;'>&nbsp;</td></tr>";
			myTable+="<tr><td style='height:15px; color:black; font-variant: small-caps; font-weight: bold; font-style:italic;'>Highlighted county rank within the country (out of 3111)</td></tr><tr><td style='heigh:15px;'>&nbsp;</td></tr>";
		}
		else{
		myTable+="<td style='height:15px;'> " +myArray2[i]+ "</td></tr>";
		}
	  }  
	   myTable+="</table>";
	 document.getElementById('mytable').innerHTML = myTable;
	  var var1 = "";
	  var var3 = "";
	  var var4 = "";
	  var nationrank="";
	  var stringcounty ="";
	  
	$("path, circle").mouseenter(function(e) {
	  $('#info-box').css('display','block');
	  if (typeof $(this).data('info5') != 'undefined'){
	  stringcounty = $(this).data('info5').replace(stringstate,'');
	  var1 = $(this).data('info');
	  var3 = $(this).data('info2')
	   var4 = $(this).data('info5')
	   nationrank=suffix(var1);
	  var3=suffix(var3);
	  if (nationrank.length=='6'){
		  nationrank=nationrank.replace(nationrank[0],nationrank[0]+',');
		  }
	  }
	   if (nationrank=="2,927th"){
			  $('#info-box').html(stringcounty +" County: <strong>No harvest reported in survey</strong>");
		  }
		  else{
	  $('#info-box').html(stringcounty +" County ranks <strong>"+var3+"</strong> out of "+pathlength+" counties in the state<br>and <strong>"+nationrank+"</strong> out of 3,111 counties in the U.S.");
		  }
	  
	  
		myTable= "<table><tr><td style='height:15px; color:black; font-variant: small-caps; font-weight: bolder; font-size:larger;'>Top Ranked Counties within the State</td></tr>";
	  for (var i=1; i<12; i++) {
		if (i==11){
			myTable+="<tr><td style='height:15px; color:black; font-variant: small-caps; font-weight: bold; font-style:italic;'>Highlighted county rank within the state (out of "+pathlength+")</td></tr><tr><td style='height:15px;'>&nbsp;" +var4+" - "+var3+ "</td></tr>";
			myTable+="<tr><td style='height:15px; color:black; font-variant: small-caps; font-weight: bold; font-style:italic;'>Highlighted county rank within the country (out of 3111)</td></tr><tr><td style='heigh:15px;'>&nbsp;" +var4+" - "+var1+ "</td></tr>";
		}
		else{
		myTable+="<td style='height:15px;'> " +myArray2[i]+ "</td></tr>";
		}
	  }  
	   myTable+="</table>";
	 document.getElementById('mytable').innerHTML = myTable;
	 });
	svgNevada.addEventListener('click', function(ev){
		//svgNevada.style.display = 'none';
		svg1.style.display = 'block';
		return;
	})
	$("path, circle").mouseleave(function(e) {
  $('#info-box').css('display','none');
});
})
NH.addEventListener('click', function(ev){
	hideall();
	hideselect();
	svgNewhampshire.style.display = 'block';
	
	NH.style.fill = '#002868';
	var svgW=window.innerWidth
	var svgH=window.innerHeight
    var bb=svgNewhampshire.getBBox()
	var bbx=bb.x
	var bby=bb.y
	var bbw=bb.width
	var bbh=bb.height
    svgNewhampshire.setAttribute("viewBox",bbx+" "+bby+" "+bbw+" "+bbh )
    svgNewhampshire.setAttribute("width",svgW/1.5)
    svgNewhampshire.setAttribute("height",svgH)
		var myArray2    = new Array();
	 paths = svgNewhampshire.querySelectorAll('.newhampshire > path');
	 stringstate = ', NH'
	pathlength=paths.length;
		for(var i=0; i<pathlength; ++i) {
		pathdata = paths[i].attributes['data-info2'].value;
		pathdata2 = paths[i].attributes['data-info5'].value;
		if(parseInt(pathdata)< 11){
		pathdata2=pathdata2.replace(stringstate,'')
		if(pathdata== '1'){
			myArray2[1] =pathdata2;
			continue;
		}if(pathdata== '2'){
			myArray2[2] =pathdata2;
			continue;
		}if(pathdata== '3'){
			myArray2[3] =pathdata2;
			continue;
		}if(pathdata== '4'){
			myArray2[4] =pathdata2;
			continue;
		}if(pathdata== '5'){
			myArray2[5] =pathdata2;
			continue;
		}if(pathdata== '6'){
			myArray2[6] =pathdata2;
			continue;
		}if(pathdata== '7'){
			myArray2[7] =pathdata2;
			continue;
		}if(pathdata== '8'){
			myArray2[8] =pathdata2;
			continue;
		}if(pathdata== '9'){
			myArray2[9] =pathdata2;
			continue;
		}if(pathdata== '10'){
			myArray2[10] =pathdata2;
			continue;
		}
		}
	}
	var myTable= "<table><tr><td style='height:15px; color:black; font-variant: small-caps; font-weight: bolder; font-size:larger;'>Top Ranked Counties within the State</td></tr>";
	  for (var i=1; i<12; i++) {
		if (i==11){
			myTable+="<tr><td style='height:15px; color:black; font-variant: small-caps; font-weight: bold; font-style:italic;'>Highlighted county rank within the state (out of "+pathlength+")</td></tr><tr><td style='height:15px;'>&nbsp;</td></tr>";
			myTable+="<tr><td style='height:15px; color:black; font-variant: small-caps; font-weight: bold; font-style:italic;'>Highlighted county rank within the country (out of 3111)</td></tr><tr><td style='heigh:15px;'>&nbsp;</td></tr>";
		}
		else{
		myTable+="<td style='height:15px;'> " +myArray2[i]+ "</td></tr>";
		}
	  }  
	   myTable+="</table>";
	 document.getElementById('mytable').innerHTML = myTable;
	  var var1 = "";
	  var var3 = "";
	  var var4 = "";
	  var nationrank="";
	  var stringcounty ="";
	  
	$("path, circle").mouseenter(function(e) {
	  $('#info-box').css('display','block');
	  if (typeof $(this).data('info5') != 'undefined'){
	  stringcounty = $(this).data('info5').replace(stringstate,'');
	  var1 = $(this).data('info');
	  var3 = $(this).data('info2')
	   var4 = $(this).data('info5')
	   nationrank=suffix(var1);
	  var3=suffix(var3);
	  if (nationrank.length=='6'){
		  nationrank=nationrank.replace(nationrank[0],nationrank[0]+',');
		  }
	  }
	   if (nationrank=="2,927th"){
			  $('#info-box').html(stringcounty +" County: <strong>No harvest reported in survey</strong>");
		  }
		  else{
	  $('#info-box').html(stringcounty +" County ranks <strong>"+var3+"</strong> out of "+pathlength+" counties in the state<br>and <strong>"+nationrank+"</strong> out of 3,111 counties in the U.S.");
		  }
	  
	  
		myTable= "<table><tr><td style='height:15px; color:black; font-variant: small-caps; font-weight: bolder; font-size:larger;'>Top Ranked Counties within the State</td></tr>";
	  for (var i=1; i<12; i++) {
		if (i==11){
			myTable+="<tr><td style='height:15px; color:black; font-variant: small-caps; font-weight: bold; font-style:italic;'>Highlighted county rank within the state (out of "+pathlength+")</td></tr><tr><td style='height:15px;'>&nbsp;" +var4+" - "+var3+ "</td></tr>";
			myTable+="<tr><td style='height:15px; color:black; font-variant: small-caps; font-weight: bold; font-style:italic;'>Highlighted county rank within the country (out of 3111)</td></tr><tr><td style='heigh:15px;'>&nbsp;" +var4+" - "+var1+ "</td></tr>";
		}
		else{
		myTable+="<td style='height:15px;'> " +myArray2[i]+ "</td></tr>";
		}
	  }  
	   myTable+="</table>";
	 document.getElementById('mytable').innerHTML = myTable;
	 });
	svgNewhampshire.addEventListener('click', function(ev){
		//svgNewhampshire.style.display = 'none';
		svg1.style.display = 'block';
		return;
	})
	$("path, circle").mouseleave(function(e) {
  $('#info-box').css('display','none');
});
})
NJ.addEventListener('click', function(ev){
	hideall();
	hideselect();
	svgNewjersey.style.display = 'block';
	
	NJ.style.fill = '#002868';
	var svgW=window.innerWidth
	var svgH=window.innerHeight
    var bb=svgNewjersey.getBBox()
	var bbx=bb.x
	var bby=bb.y
	var bbw=bb.width
	var bbh=bb.height
    svgNewjersey.setAttribute("viewBox",bbx+" "+bby+" "+bbw+" "+bbh )
    svgNewjersey.setAttribute("width",svgW/1.5)
    svgNewjersey.setAttribute("height",svgH)
		var myArray2    = new Array();
	 paths = svgNewjersey.querySelectorAll('.newjersey > path');
	 stringstate = ', NJ'
	pathlength=paths.length;
		for(var i=0; i<pathlength; ++i) {
		pathdata = paths[i].attributes['data-info2'].value;
		pathdata2 = paths[i].attributes['data-info5'].value;
		if(parseInt(pathdata)< 11){
		pathdata2=pathdata2.replace(stringstate,'')
		if(pathdata== '1'){
			myArray2[1] =pathdata2;
			continue;
		}if(pathdata== '2'){
			myArray2[2] =pathdata2;
			continue;
		}if(pathdata== '3'){
			myArray2[3] =pathdata2;
			continue;
		}if(pathdata== '4'){
			myArray2[4] =pathdata2;
			continue;
		}if(pathdata== '5'){
			myArray2[5] =pathdata2;
			continue;
		}if(pathdata== '6'){
			myArray2[6] =pathdata2;
			continue;
		}if(pathdata== '7'){
			myArray2[7] =pathdata2;
			continue;
		}if(pathdata== '8'){
			myArray2[8] =pathdata2;
			continue;
		}if(pathdata== '9'){
			myArray2[9] =pathdata2;
			continue;
		}if(pathdata== '10'){
			myArray2[10] =pathdata2;
			continue;
		}
		}
	}
	var myTable= "<table><tr><td style='height:15px; color:black; font-variant: small-caps; font-weight: bolder; font-size:larger;'>Top Ranked Counties within the State</td></tr>";
	  for (var i=1; i<12; i++) {
		if (i==11){
			myTable+="<tr><td style='height:15px; color:black; font-variant: small-caps; font-weight: bold; font-style:italic;'>Highlighted county rank within the state (out of "+pathlength+")</td></tr><tr><td style='height:15px;'>&nbsp;</td></tr>";
			myTable+="<tr><td style='height:15px; color:black; font-variant: small-caps; font-weight: bold; font-style:italic;'>Highlighted county rank within the country (out of 3111)</td></tr><tr><td style='heigh:15px;'>&nbsp;</td></tr>";
		}
		else{
		myTable+="<td style='height:15px;'> " +myArray2[i]+ "</td></tr>";
		}
	  }  
	   myTable+="</table>";
	 document.getElementById('mytable').innerHTML = myTable;
	  var var1 = "";
	  var var3 = "";
	  var var4 = "";
	  var nationrank="";
	  var stringcounty ="";
	  
	$("path, circle").mouseenter(function(e) {
	  $('#info-box').css('display','block');
	  if (typeof $(this).data('info5') != 'undefined'){
	  stringcounty = $(this).data('info5').replace(stringstate,'');
	  var1 = $(this).data('info');
	  var3 = $(this).data('info2')
	   var4 = $(this).data('info5')
	   nationrank=suffix(var1);
	  var3=suffix(var3);
	  if (nationrank.length=='6'){
		  nationrank=nationrank.replace(nationrank[0],nationrank[0]+',');
		  }
	  }
	   if (nationrank=="2,927th"){
			  $('#info-box').html(stringcounty +" County: <strong>No harvest reported in survey</strong>");
		  }
		  else{
	  $('#info-box').html(stringcounty +" County ranks <strong>"+var3+"</strong> out of "+pathlength+" counties in the state<br>and <strong>"+nationrank+"</strong> out of 3,111 counties in the U.S.");
		  }
	  
	  
		myTable= "<table><tr><td style='height:15px; color:black; font-variant: small-caps; font-weight: bolder; font-size:larger;'>Top Ranked Counties within the State</td></tr>";
	  for (var i=1; i<12; i++) {
		if (i==11){
			myTable+="<tr><td style='height:15px; color:black; font-variant: small-caps; font-weight: bold; font-style:italic;'>Highlighted county rank within the state (out of "+pathlength+")</td></tr><tr><td style='height:15px;'>&nbsp;" +var4+" - "+var3+ "</td></tr>";
			myTable+="<tr><td style='height:15px; color:black; font-variant: small-caps; font-weight: bold; font-style:italic;'>Highlighted county rank within the country (out of 3111)</td></tr><tr><td style='heigh:15px;'>&nbsp;" +var4+" - "+var1+ "</td></tr>";
		}
		else{
		myTable+="<td style='height:15px;'> " +myArray2[i]+ "</td></tr>";
		}
	  }  
	   myTable+="</table>";
	 document.getElementById('mytable').innerHTML = myTable;
	 });
	svgNewjersey.addEventListener('click', function(ev){
		//svgNewjersey.style.display = 'none';
		svg1.style.display = 'block';
		return;
	})
	$("path, circle").mouseleave(function(e) {
  $('#info-box').css('display','none');
});
})
NM.addEventListener('click', function(ev){
	hideall();
	hideselect();
	svgNewmexico.style.display = 'block';
	
	NM.style.fill = '#002868';
	var svgW=window.innerWidth
	var svgH=window.innerHeight
    var bb=svgNewmexico.getBBox()
	var bbx=bb.x
	var bby=bb.y
	var bbw=bb.width
	var bbh=bb.height
    svgNewmexico.setAttribute("viewBox",bbx+" "+bby+" "+bbw+" "+bbh )
    svgNewmexico.setAttribute("width",svgW/1.5)
    svgNewmexico.setAttribute("height",svgH)
		var myArray2    = new Array();
	 paths = svgNewmexico.querySelectorAll('.newmexico > path');
	 stringstate = ', NM'
	pathlength=paths.length;
		for(var i=0; i<pathlength; ++i) {
		pathdata = paths[i].attributes['data-info2'].value;
		pathdata2 = paths[i].attributes['data-info5'].value;
		if(parseInt(pathdata)< 11){
		pathdata2=pathdata2.replace(stringstate,'')
		if(pathdata== '1'){
			myArray2[1] =pathdata2;
			continue;
		}if(pathdata== '2'){
			myArray2[2] =pathdata2;
			continue;
		}if(pathdata== '3'){
			myArray2[3] =pathdata2;
			continue;
		}if(pathdata== '4'){
			myArray2[4] =pathdata2;
			continue;
		}if(pathdata== '5'){
			myArray2[5] =pathdata2;
			continue;
		}if(pathdata== '6'){
			myArray2[6] =pathdata2;
			continue;
		}if(pathdata== '7'){
			myArray2[7] =pathdata2;
			continue;
		}if(pathdata== '8'){
			myArray2[8] =pathdata2;
			continue;
		}if(pathdata== '9'){
			myArray2[9] =pathdata2;
			continue;
		}if(pathdata== '10'){
			myArray2[10] =pathdata2;
			continue;
		}
		}
	}
	var myTable= "<table><tr><td style='height:15px; color:black; font-variant: small-caps; font-weight: bolder; font-size:larger;'>Top Ranked Counties within the State</td></tr>";
	  for (var i=1; i<12; i++) {
		if (i==11){
			myTable+="<tr><td style='height:15px; color:black; font-variant: small-caps; font-weight: bold; font-style:italic;'>Highlighted county rank within the state (out of "+pathlength+")</td></tr><tr><td style='height:15px;'>&nbsp;</td></tr>";
			myTable+="<tr><td style='height:15px; color:black; font-variant: small-caps; font-weight: bold; font-style:italic;'>Highlighted county rank within the country (out of 3111)</td></tr><tr><td style='heigh:15px;'>&nbsp;</td></tr>";
		}
		else{
		myTable+="<td style='height:15px;'> " +myArray2[i]+ "</td></tr>";
		}
	  }  
	   myTable+="</table>";
	 document.getElementById('mytable').innerHTML = myTable;
	  var var1 = "";
	  var var3 = "";
	  var var4 = "";
	  var nationrank="";
	  var stringcounty ="";
	  
	$("path, circle").mouseenter(function(e) {
	  $('#info-box').css('display','block');
	  if (typeof $(this).data('info5') != 'undefined'){
	  stringcounty = $(this).data('info5').replace(stringstate,'');
	  var1 = $(this).data('info');
	  var3 = $(this).data('info2')
	   var4 = $(this).data('info5')
	   nationrank=suffix(var1);
	  var3=suffix(var3);
	  if (nationrank.length=='6'){
		  nationrank=nationrank.replace(nationrank[0],nationrank[0]+',');
		  }
	  }
	   if (nationrank=="2,927th"){
			  $('#info-box').html(stringcounty +" County: <strong>No harvest reported in survey</strong>");
		  }
		  else{
	  $('#info-box').html(stringcounty +" County ranks <strong>"+var3+"</strong> out of "+pathlength+" counties in the state<br>and <strong>"+nationrank+"</strong> out of 3,111 counties in the U.S.");
		  }
	  
	  
		myTable= "<table><tr><td style='height:15px; color:black; font-variant: small-caps; font-weight: bolder; font-size:larger;'>Top Ranked Counties within the State</td></tr>";
	  for (var i=1; i<12; i++) {
		if (i==11){
			myTable+="<tr><td style='height:15px; color:black; font-variant: small-caps; font-weight: bold; font-style:italic;'>Highlighted county rank within the state (out of "+pathlength+")</td></tr><tr><td style='height:15px;'>&nbsp;" +var4+" - "+var3+ "</td></tr>";
			myTable+="<tr><td style='height:15px; color:black; font-variant: small-caps; font-weight: bold; font-style:italic;'>Highlighted county rank within the country (out of 3111)</td></tr><tr><td style='heigh:15px;'>&nbsp;" +var4+" - "+var1+ "</td></tr>";
		}
		else{
		myTable+="<td style='height:15px;'> " +myArray2[i]+ "</td></tr>";
		}
	  }  
	   myTable+="</table>";
	 document.getElementById('mytable').innerHTML = myTable;
	 });
	svgNewmexico.addEventListener('click', function(ev){
		//svgNewmexico.style.display = 'none';
		svg1.style.display = 'block';
		return;
	})
	$("path, circle").mouseleave(function(e) {
  $('#info-box').css('display','none');
});
})
NY.addEventListener('click', function(ev){
	hideall();
	hideselect();
	svgNewyork.style.display = 'block';
	
	NY.style.fill = '#002868';
	var svgW=window.innerWidth
	var svgH=window.innerHeight
    var bb=svgNewyork.getBBox()
	var bbx=bb.x
	var bby=bb.y
	var bbw=bb.width
	var bbh=bb.height
    svgNewyork.setAttribute("viewBox",bbx+" "+bby+" "+bbw+" "+bbh )
    svgNewyork.setAttribute("width",svgW/1.5)
    svgNewyork.setAttribute("height",svgH)
		var myArray2    = new Array();
	 paths = svgNewyork.querySelectorAll('.newyork > path');
	 stringstate = ', NY'
	pathlength=paths.length;
		for(var i=0; i<pathlength; ++i) {
		pathdata = paths[i].attributes['data-info2'].value;
		pathdata2 = paths[i].attributes['data-info5'].value;
		if(parseInt(pathdata)< 11){
		pathdata2=pathdata2.replace(stringstate,'')
		if(pathdata== '1'){
			myArray2[1] =pathdata2;
			continue;
		}if(pathdata== '2'){
			myArray2[2] =pathdata2;
			continue;
		}if(pathdata== '3'){
			myArray2[3] =pathdata2;
			continue;
		}if(pathdata== '4'){
			myArray2[4] =pathdata2;
			continue;
		}if(pathdata== '5'){
			myArray2[5] =pathdata2;
			continue;
		}if(pathdata== '6'){
			myArray2[6] =pathdata2;
			continue;
		}if(pathdata== '7'){
			myArray2[7] =pathdata2;
			continue;
		}if(pathdata== '8'){
			myArray2[8] =pathdata2;
			continue;
		}if(pathdata== '9'){
			myArray2[9] =pathdata2;
			continue;
		}if(pathdata== '10'){
			myArray2[10] =pathdata2;
			continue;
		}
		}
	}
	var myTable= "<table><tr><td style='height:15px; color:black; font-variant: small-caps; font-weight: bolder; font-size:larger;'>Top Ranked Counties within the State</td></tr>";
	  for (var i=1; i<12; i++) {
		if (i==11){
			myTable+="<tr><td style='height:15px; color:black; font-variant: small-caps; font-weight: bold; font-style:italic;'>Highlighted county rank within the state (out of "+pathlength+")</td></tr><tr><td style='height:15px;'>&nbsp;</td></tr>";
			myTable+="<tr><td style='height:15px; color:black; font-variant: small-caps; font-weight: bold; font-style:italic;'>Highlighted county rank within the country (out of 3111)</td></tr><tr><td style='heigh:15px;'>&nbsp;</td></tr>";
		}
		else{
		myTable+="<td style='height:15px;'> " +myArray2[i]+ "</td></tr>";
		}
	  }  
	   myTable+="</table>";
	 document.getElementById('mytable').innerHTML = myTable;
	  var var1 = "";
	  var var3 = "";
	  var var4 = "";
	  var nationrank="";
	  var stringcounty ="";
	  
	$("path, circle").mouseenter(function(e) {
	  $('#info-box').css('display','block');
	  if (typeof $(this).data('info5') != 'undefined'){
	  stringcounty = $(this).data('info5').replace(stringstate,'');
	  var1 = $(this).data('info');
	  var3 = $(this).data('info2')
	   var4 = $(this).data('info5')
	   nationrank=suffix(var1);
	  var3=suffix(var3);
	  if (nationrank.length=='6'){
		  nationrank=nationrank.replace(nationrank[0],nationrank[0]+',');
		  }
	  }
	   if (nationrank=="2,927th"){
			  $('#info-box').html(stringcounty +" County: <strong>No harvest reported in survey</strong>");
		  }
		  else{
	  $('#info-box').html(stringcounty +" County ranks <strong>"+var3+"</strong> out of "+pathlength+" counties in the state<br>and <strong>"+nationrank+"</strong> out of 3,111 counties in the U.S.");
		  }
	  
	  
		myTable= "<table><tr><td style='height:15px; color:black; font-variant: small-caps; font-weight: bolder; font-size:larger;'>Top Ranked Counties within the State</td></tr>";
	  for (var i=1; i<12; i++) {
		if (i==11){
			myTable+="<tr><td style='height:15px; color:black; font-variant: small-caps; font-weight: bold; font-style:italic;'>Highlighted county rank within the state (out of "+pathlength+")</td></tr><tr><td style='height:15px;'>&nbsp;" +var4+" - "+var3+ "</td></tr>";
			myTable+="<tr><td style='height:15px; color:black; font-variant: small-caps; font-weight: bold; font-style:italic;'>Highlighted county rank within the country (out of 3111)</td></tr><tr><td style='heigh:15px;'>&nbsp;" +var4+" - "+var1+ "</td></tr>";
		}
		else{
		myTable+="<td style='height:15px;'> " +myArray2[i]+ "</td></tr>";
		}
	  }  
	   myTable+="</table>";
	 document.getElementById('mytable').innerHTML = myTable;
	 });
	svgNewyork.addEventListener('click', function(ev){
		//svgNewyork.style.display = 'none';
		svg1.style.display = 'block';
		return;
	})
	$("path, circle").mouseleave(function(e) {
  $('#info-box').css('display','none');
});
})
NC.addEventListener('click', function(ev){
	hideall();
	hideselect();
	svgNorthcarolina.style.display = 'block';
	
	NC.style.fill = '#002868';
	var svgW=window.innerWidth
	var svgH=window.innerHeight
    var bb=svgNorthcarolina.getBBox()
	var bbx=bb.x
	var bby=bb.y
	var bbw=bb.width
	var bbh=bb.height
    svgNorthcarolina.setAttribute("viewBox",bbx+" "+bby+" "+bbw+" "+bbh )
    svgNorthcarolina.setAttribute("width",svgW/1.5)
    svgNorthcarolina.setAttribute("height",svgH)
		var myArray2    = new Array();
	 paths = svgNorthcarolina.querySelectorAll('.northcarolina > path');
	 stringstate = ', NC'
	pathlength=paths.length;
		for(var i=0; i<pathlength; ++i) {
		pathdata = paths[i].attributes['data-info2'].value;
		pathdata2 = paths[i].attributes['data-info5'].value;
		if(parseInt(pathdata)< 11){
		pathdata2=pathdata2.replace(stringstate,'')
		if(pathdata== '1'){
			myArray2[1] =pathdata2;
			continue;
		}if(pathdata== '2'){
			myArray2[2] =pathdata2;
			continue;
		}if(pathdata== '3'){
			myArray2[3] =pathdata2;
			continue;
		}if(pathdata== '4'){
			myArray2[4] =pathdata2;
			continue;
		}if(pathdata== '5'){
			myArray2[5] =pathdata2;
			continue;
		}if(pathdata== '6'){
			myArray2[6] =pathdata2;
			continue;
		}if(pathdata== '7'){
			myArray2[7] =pathdata2;
			continue;
		}if(pathdata== '8'){
			myArray2[8] =pathdata2;
			continue;
		}if(pathdata== '9'){
			myArray2[9] =pathdata2;
			continue;
		}if(pathdata== '10'){
			myArray2[10] =pathdata2;
			continue;
		}
		}
	}
	var myTable= "<table><tr><td style='height:15px; color:black; font-variant: small-caps; font-weight: bolder; font-size:larger;'>Top Ranked Counties within the State</td></tr>";
	  for (var i=1; i<12; i++) {
		if (i==11){
			myTable+="<tr><td style='height:15px; color:black; font-variant: small-caps; font-weight: bold; font-style:italic;'>Highlighted county rank within the state (out of "+pathlength+")</td></tr><tr><td style='height:15px;'>&nbsp;</td></tr>";
			myTable+="<tr><td style='height:15px; color:black; font-variant: small-caps; font-weight: bold; font-style:italic;'>Highlighted county rank within the country (out of 3111)</td></tr><tr><td style='heigh:15px;'>&nbsp;</td></tr>";
		}
		else{
		myTable+="<td style='height:15px;'> " +myArray2[i]+ "</td></tr>";
		}
	  }  
	   myTable+="</table>";
	 document.getElementById('mytable').innerHTML = myTable;
	  var var1 = "";
	  var var3 = "";
	  var var4 = "";
	  var nationrank="";
	  var stringcounty ="";
	  
	$("path, circle").mouseenter(function(e) {
	  $('#info-box').css('display','block');
	  if (typeof $(this).data('info5') != 'undefined'){
	  stringcounty = $(this).data('info5').replace(stringstate,'');
	  var1 = $(this).data('info');
	  var3 = $(this).data('info2')
	   var4 = $(this).data('info5')
	   nationrank=suffix(var1);
	  var3=suffix(var3);
	  if (nationrank.length=='6'){
		  nationrank=nationrank.replace(nationrank[0],nationrank[0]+',');
		  }
	  }
	   if (nationrank=="2,927th"){
			  $('#info-box').html(stringcounty +" County: <strong>No harvest reported in survey</strong>");
		  }
		  else{
	  $('#info-box').html(stringcounty +" County ranks <strong>"+var3+"</strong> out of "+pathlength+" counties in the state<br>and <strong>"+nationrank+"</strong> out of 3,111 counties in the U.S.");
		  }
	  
	  
		myTable= "<table><tr><td style='height:15px; color:black; font-variant: small-caps; font-weight: bolder; font-size:larger;'>Top Ranked Counties within the State</td></tr>";
	  for (var i=1; i<12; i++) {
		if (i==11){
			myTable+="<tr><td style='height:15px; color:black; font-variant: small-caps; font-weight: bold; font-style:italic;'>Highlighted county rank within the state (out of "+pathlength+")</td></tr><tr><td style='height:15px;'>&nbsp;" +var4+" - "+var3+ "</td></tr>";
			myTable+="<tr><td style='height:15px; color:black; font-variant: small-caps; font-weight: bold; font-style:italic;'>Highlighted county rank within the country (out of 3111)</td></tr><tr><td style='heigh:15px;'>&nbsp;" +var4+" - "+var1+ "</td></tr>";
		}
		else{
		myTable+="<td style='height:15px;'> " +myArray2[i]+ "</td></tr>";
		}
	  }  
	   myTable+="</table>";
	 document.getElementById('mytable').innerHTML = myTable;
	 });
	svgNorthcarolina.addEventListener('click', function(ev){
		//svgNorthcarolina.style.display = 'none';
		svg1.style.display = 'block';
		return;
	})
	$("path, circle").mouseleave(function(e) {
  $('#info-box').css('display','none');
});
})
OH.addEventListener('click', function(ev){
	hideall();
	hideselect();
	svgOhio.style.display = 'block';
	
	OH.style.fill = '#002868';
	var svgW=window.innerWidth
	var svgH=window.innerHeight
    var bb=svgOhio.getBBox()
	var bbx=bb.x
	var bby=bb.y
	var bbw=bb.width
	var bbh=bb.height
    svgOhio.setAttribute("viewBox",bbx+" "+bby+" "+bbw+" "+bbh )
    svgOhio.setAttribute("width",svgW/1.5)
    svgOhio.setAttribute("height",svgH)
		var myArray2    = new Array();
	 paths = svgOhio.querySelectorAll('.ohio > path');
	 stringstate = ', OH'
	pathlength=paths.length;
		for(var i=0; i<pathlength; ++i) {
		pathdata = paths[i].attributes['data-info2'].value;
		pathdata2 = paths[i].attributes['data-info5'].value;
		if(parseInt(pathdata)< 11){
		pathdata2=pathdata2.replace(stringstate,'')
		if(pathdata== '1'){
			myArray2[1] =pathdata2;
			continue;
		}if(pathdata== '2'){
			myArray2[2] =pathdata2;
			continue;
		}if(pathdata== '3'){
			myArray2[3] =pathdata2;
			continue;
		}if(pathdata== '4'){
			myArray2[4] =pathdata2;
			continue;
		}if(pathdata== '5'){
			myArray2[5] =pathdata2;
			continue;
		}if(pathdata== '6'){
			myArray2[6] =pathdata2;
			continue;
		}if(pathdata== '7'){
			myArray2[7] =pathdata2;
			continue;
		}if(pathdata== '8'){
			myArray2[8] =pathdata2;
			continue;
		}if(pathdata== '9'){
			myArray2[9] =pathdata2;
			continue;
		}if(pathdata== '10'){
			myArray2[10] =pathdata2;
			continue;
		}
		}
	}
	var myTable= "<table><tr><td style='height:15px; color:black; font-variant: small-caps; font-weight: bolder; font-size:larger;'>Top Ranked Counties within the State</td></tr>";
	  for (var i=1; i<12; i++) {
		if (i==11){
			myTable+="<tr><td style='height:15px; color:black; font-variant: small-caps; font-weight: bold; font-style:italic;'>Highlighted county rank within the state (out of "+pathlength+")</td></tr><tr><td style='height:15px;'>&nbsp;</td></tr>";
			myTable+="<tr><td style='height:15px; color:black; font-variant: small-caps; font-weight: bold; font-style:italic;'>Highlighted county rank within the country (out of 3111)</td></tr><tr><td style='heigh:15px;'>&nbsp;</td></tr>";
		}
		else{
		myTable+="<td style='height:15px;'> " +myArray2[i]+ "</td></tr>";
		}
	  }  
	   myTable+="</table>";
	 document.getElementById('mytable').innerHTML = myTable;
	  var var1 = "";
	  var var3 = "";
	  var var4 = "";
	  var nationrank="";
	  var stringcounty ="";
	  
	$("path, circle").mouseenter(function(e) {
	  $('#info-box').css('display','block');
	  if (typeof $(this).data('info5') != 'undefined'){
	  stringcounty = $(this).data('info5').replace(stringstate,'');
	  var1 = $(this).data('info');
	  var3 = $(this).data('info2')
	   var4 = $(this).data('info5')
	   nationrank=suffix(var1);
	  var3=suffix(var3);
	  if (nationrank.length=='6'){
		  nationrank=nationrank.replace(nationrank[0],nationrank[0]+',');
		  }
	  }
	   if (nationrank=="2,927th"){
			  $('#info-box').html(stringcounty +" County: <strong>No harvest reported in survey</strong>");
		  }
		  else{
	  $('#info-box').html(stringcounty +" County ranks <strong>"+var3+"</strong> out of "+pathlength+" counties in the state<br>and <strong>"+nationrank+"</strong> out of 3,111 counties in the U.S.");
		  }
	  
	  
		myTable= "<table><tr><td style='height:15px; color:black; font-variant: small-caps; font-weight: bolder; font-size:larger;'>Top Ranked Counties within the State</td></tr>";
	  for (var i=1; i<12; i++) {
		if (i==11){
			myTable+="<tr><td style='height:15px; color:black; font-variant: small-caps; font-weight: bold; font-style:italic;'>Highlighted county rank within the state (out of "+pathlength+")</td></tr><tr><td style='height:15px;'>&nbsp;" +var4+" - "+var3+ "</td></tr>";
			myTable+="<tr><td style='height:15px; color:black; font-variant: small-caps; font-weight: bold; font-style:italic;'>Highlighted county rank within the country (out of 3111)</td></tr><tr><td style='heigh:15px;'>&nbsp;" +var4+" - "+var1+ "</td></tr>";
		}
		else{
		myTable+="<td style='height:15px;'> " +myArray2[i]+ "</td></tr>";
		}
	  }  
	   myTable+="</table>";
	 document.getElementById('mytable').innerHTML = myTable;
	 });
	svgOhio.addEventListener('click', function(ev){
		//svgOhio.style.display = 'none';
		svg1.style.display = 'block';
		return;
	})
	$("path, circle").mouseleave(function(e) {
  $('#info-box').css('display','none');
});
})
OK.addEventListener('click', function(ev){
	hideall();
	hideselect();
	svgOklahoma.style.display = 'block';
	
	OK.style.fill = '#002868';
	var svgW=window.innerWidth
	var svgH=window.innerHeight
    var bb=svgOklahoma.getBBox()
	var bbx=bb.x
	var bby=bb.y
	var bbw=bb.width
	var bbh=bb.height
    svgOklahoma.setAttribute("viewBox",bbx+" "+bby+" "+bbw+" "+bbh )
    svgOklahoma.setAttribute("width",svgW/1.5)
    svgOklahoma.setAttribute("height",svgH)
		var myArray2    = new Array();
	 paths = svgOklahoma.querySelectorAll('.oklahoma > path');
	 stringstate = ', OK'
	pathlength=paths.length;
		for(var i=0; i<pathlength; ++i) {
		pathdata = paths[i].attributes['data-info2'].value;
		pathdata2 = paths[i].attributes['data-info5'].value;
		if(parseInt(pathdata)< 11){
		pathdata2=pathdata2.replace(stringstate,'')
		if(pathdata== '1'){
			myArray2[1] =pathdata2;
			continue;
		}if(pathdata== '2'){
			myArray2[2] =pathdata2;
			continue;
		}if(pathdata== '3'){
			myArray2[3] =pathdata2;
			continue;
		}if(pathdata== '4'){
			myArray2[4] =pathdata2;
			continue;
		}if(pathdata== '5'){
			myArray2[5] =pathdata2;
			continue;
		}if(pathdata== '6'){
			myArray2[6] =pathdata2;
			continue;
		}if(pathdata== '7'){
			myArray2[7] =pathdata2;
			continue;
		}if(pathdata== '8'){
			myArray2[8] =pathdata2;
			continue;
		}if(pathdata== '9'){
			myArray2[9] =pathdata2;
			continue;
		}if(pathdata== '10'){
			myArray2[10] =pathdata2;
			continue;
		}
		}
	}
	var myTable= "<table><tr><td style='height:15px; color:black; font-variant: small-caps; font-weight: bolder; font-size:larger;'>Top Ranked Counties within the State</td></tr>";
	  for (var i=1; i<12; i++) {
		if (i==11){
			myTable+="<tr><td style='height:15px; color:black; font-variant: small-caps; font-weight: bold; font-style:italic;'>Highlighted county rank within the state (out of "+pathlength+")</td></tr><tr><td style='height:15px;'>&nbsp;</td></tr>";
			myTable+="<tr><td style='height:15px; color:black; font-variant: small-caps; font-weight: bold; font-style:italic;'>Highlighted county rank within the country (out of 3111)</td></tr><tr><td style='heigh:15px;'>&nbsp;</td></tr>";
		}
		else{
		myTable+="<td style='height:15px;'> " +myArray2[i]+ "</td></tr>";
		}
	  }  
	   myTable+="</table>";
	 document.getElementById('mytable').innerHTML = myTable;
	  var var1 = "";
	  var var3 = "";
	  var var4 = "";
	  var nationrank="";
	  var stringcounty ="";
	  
	$("path, circle").mouseenter(function(e) {
	  $('#info-box').css('display','block');
	  if (typeof $(this).data('info5') != 'undefined'){
	  stringcounty = $(this).data('info5').replace(stringstate,'');
	  var1 = $(this).data('info');
	  var3 = $(this).data('info2')
	   var4 = $(this).data('info5')
	   nationrank=suffix(var1);
	  var3=suffix(var3);
	  if (nationrank.length=='6'){
		  nationrank=nationrank.replace(nationrank[0],nationrank[0]+',');
		  }
	  }
	   if (nationrank=="2,927th"){
			  $('#info-box').html(stringcounty +" County: <strong>No harvest reported in survey</strong>");
		  }
		  else{
	  $('#info-box').html(stringcounty +" County ranks <strong>"+var3+"</strong> out of "+pathlength+" counties in the state<br>and <strong>"+nationrank+"</strong> out of 3,111 counties in the U.S.");
		  }
	  
	  
		myTable= "<table><tr><td style='height:15px; color:black; font-variant: small-caps; font-weight: bolder; font-size:larger;'>Top Ranked Counties within the State</td></tr>";
	  for (var i=1; i<12; i++) {
		if (i==11){
			myTable+="<tr><td style='height:15px; color:black; font-variant: small-caps; font-weight: bold; font-style:italic;'>Highlighted county rank within the state (out of "+pathlength+")</td></tr><tr><td style='height:15px;'>&nbsp;" +var4+" - "+var3+ "</td></tr>";
			myTable+="<tr><td style='height:15px; color:black; font-variant: small-caps; font-weight: bold; font-style:italic;'>Highlighted county rank within the country (out of 3111)</td></tr><tr><td style='heigh:15px;'>&nbsp;" +var4+" - "+var1+ "</td></tr>";
		}
		else{
		myTable+="<td style='height:15px;'> " +myArray2[i]+ "</td></tr>";
		}
	  }  
	   myTable+="</table>";
	 document.getElementById('mytable').innerHTML = myTable;
	 });
	svgOklahoma.addEventListener('click', function(ev){
		//svgOklahoma.style.display = 'none';
		svg1.style.display = 'block';
		return;
	})
	$("path, circle").mouseleave(function(e) {
  $('#info-box').css('display','none');
});
})
OR.addEventListener('click', function(ev){
	hideall();
	hideselect();
	svgOregon.style.display = 'block';
	
	OR.style.fill = '#002868';
	var svgW=window.innerWidth
	var svgH=window.innerHeight
    var bb=svgOregon.getBBox()
	var bbx=bb.x
	var bby=bb.y
	var bbw=bb.width
	var bbh=bb.height
    svgOregon.setAttribute("viewBox",bbx+" "+bby+" "+bbw+" "+bbh )
    svgOregon.setAttribute("width",svgW/1.5)
    svgOregon.setAttribute("height",svgH)
		var myArray2    = new Array();
	 paths = svgOregon.querySelectorAll('.oregon > path');
	 stringstate = ', OR'
	pathlength=paths.length;
		for(var i=0; i<pathlength; ++i) {
		pathdata = paths[i].attributes['data-info2'].value;
		pathdata2 = paths[i].attributes['data-info5'].value;
		if(parseInt(pathdata)< 11){
		pathdata2=pathdata2.replace(stringstate,'')
		if(pathdata== '1'){
			myArray2[1] =pathdata2;
			continue;
		}if(pathdata== '2'){
			myArray2[2] =pathdata2;
			continue;
		}if(pathdata== '3'){
			myArray2[3] =pathdata2;
			continue;
		}if(pathdata== '4'){
			myArray2[4] =pathdata2;
			continue;
		}if(pathdata== '5'){
			myArray2[5] =pathdata2;
			continue;
		}if(pathdata== '6'){
			myArray2[6] =pathdata2;
			continue;
		}if(pathdata== '7'){
			myArray2[7] =pathdata2;
			continue;
		}if(pathdata== '8'){
			myArray2[8] =pathdata2;
			continue;
		}if(pathdata== '9'){
			myArray2[9] =pathdata2;
			continue;
		}if(pathdata== '10'){
			myArray2[10] =pathdata2;
			continue;
		}
		}
	}
	var myTable= "<table><tr><td style='height:15px; color:black; font-variant: small-caps; font-weight: bolder; font-size:larger;'>Top Ranked Counties within the State</td></tr>";
	  for (var i=1; i<12; i++) {
		if (i==11){
			myTable+="<tr><td style='height:15px; color:black; font-variant: small-caps; font-weight: bold; font-style:italic;'>Highlighted county rank within the state (out of "+pathlength+")</td></tr><tr><td style='height:15px;'>&nbsp;</td></tr>";
			myTable+="<tr><td style='height:15px; color:black; font-variant: small-caps; font-weight: bold; font-style:italic;'>Highlighted county rank within the country (out of 3111)</td></tr><tr><td style='heigh:15px;'>&nbsp;</td></tr>";
		}
		else{
		myTable+="<td style='height:15px;'> " +myArray2[i]+ "</td></tr>";
		}
	  }  
	   myTable+="</table>";
	 document.getElementById('mytable').innerHTML = myTable;
	  var var1 = "";
	  var var3 = "";
	  var var4 = "";
	  var nationrank="";
	  var stringcounty ="";
	  
	$("path, circle").mouseenter(function(e) {
	  $('#info-box').css('display','block');
	  if (typeof $(this).data('info5') != 'undefined'){
	  stringcounty = $(this).data('info5').replace(stringstate,'');
	  var1 = $(this).data('info');
	  var3 = $(this).data('info2')
	   var4 = $(this).data('info5')
	   nationrank=suffix(var1);
	  var3=suffix(var3);
	  if (nationrank.length=='6'){
		  nationrank=nationrank.replace(nationrank[0],nationrank[0]+',');
		  }
	  }
	   if (nationrank=="2,927th"){
			  $('#info-box').html(stringcounty +" County: <strong>No harvest reported in survey</strong>");
		  }
		  else{
	  $('#info-box').html(stringcounty +" County ranks <strong>"+var3+"</strong> out of "+pathlength+" counties in the state<br>and <strong>"+nationrank+"</strong> out of 3,111 counties in the U.S.");
		  }
	  
	  
		myTable= "<table><tr><td style='height:15px; color:black; font-variant: small-caps; font-weight: bolder; font-size:larger;'>Top Ranked Counties within the State</td></tr>";
	  for (var i=1; i<12; i++) {
		if (i==11){
			myTable+="<tr><td style='height:15px; color:black; font-variant: small-caps; font-weight: bold; font-style:italic;'>Highlighted county rank within the state (out of "+pathlength+")</td></tr><tr><td style='height:15px;'>&nbsp;" +var4+" - "+var3+ "</td></tr>";
			myTable+="<tr><td style='height:15px; color:black; font-variant: small-caps; font-weight: bold; font-style:italic;'>Highlighted county rank within the country (out of 3111)</td></tr><tr><td style='heigh:15px;'>&nbsp;" +var4+" - "+var1+ "</td></tr>";
		}
		else{
		myTable+="<td style='height:15px;'> " +myArray2[i]+ "</td></tr>";
		}
	  }  
	   myTable+="</table>";
	 document.getElementById('mytable').innerHTML = myTable;
	 });
	svgOregon.addEventListener('click', function(ev){
		//svgOregon.style.display = 'none';
		svg1.style.display = 'block';
		return;
	})
	$("path, circle").mouseleave(function(e) {
  $('#info-box').css('display','none');
});
})
PA.addEventListener('click', function(ev){
	hideall();
	hideselect();
	svgPennsylvania.style.display = 'block';
	
	PA.style.fill = '#002868';
	var svgW=window.innerWidth
	var svgH=window.innerHeight
    var bb=svgPennsylvania.getBBox()
	var bbx=bb.x
	var bby=bb.y
	var bbw=bb.width
	var bbh=bb.height
    svgPennsylvania.setAttribute("viewBox",bbx+" "+bby+" "+bbw+" "+bbh )
    svgPennsylvania.setAttribute("width",svgW/1.5)
    svgPennsylvania.setAttribute("height",svgH)
		var myArray2    = new Array();
	 paths = svgPennsylvania.querySelectorAll('.pennsylvania > path');
	 stringstate = ', PA'
	pathlength=paths.length;
		for(var i=0; i<pathlength; ++i) {
		pathdata = paths[i].attributes['data-info2'].value;
		pathdata2 = paths[i].attributes['data-info5'].value;
		if(parseInt(pathdata)< 11){
		pathdata2=pathdata2.replace(stringstate,'')
		if(pathdata== '1'){
			myArray2[1] =pathdata2;
			continue;
		}if(pathdata== '2'){
			myArray2[2] =pathdata2;
			continue;
		}if(pathdata== '3'){
			myArray2[3] =pathdata2;
			continue;
		}if(pathdata== '4'){
			myArray2[4] =pathdata2;
			continue;
		}if(pathdata== '5'){
			myArray2[5] =pathdata2;
			continue;
		}if(pathdata== '6'){
			myArray2[6] =pathdata2;
			continue;
		}if(pathdata== '7'){
			myArray2[7] =pathdata2;
			continue;
		}if(pathdata== '8'){
			myArray2[8] =pathdata2;
			continue;
		}if(pathdata== '9'){
			myArray2[9] =pathdata2;
			continue;
		}if(pathdata== '10'){
			myArray2[10] =pathdata2;
			continue;
		}
		}
	}
	var myTable= "<table><tr><td style='height:15px; color:black; font-variant: small-caps; font-weight: bolder; font-size:larger;'>Top Ranked Counties within the State</td></tr>";
	  for (var i=1; i<12; i++) {
		if (i==11){
			myTable+="<tr><td style='height:15px; color:black; font-variant: small-caps; font-weight: bold; font-style:italic;'>Highlighted county rank within the state (out of "+pathlength+")</td></tr><tr><td style='height:15px;'>&nbsp;</td></tr>";
			myTable+="<tr><td style='height:15px; color:black; font-variant: small-caps; font-weight: bold; font-style:italic;'>Highlighted county rank within the country (out of 3111)</td></tr><tr><td style='heigh:15px;'>&nbsp;</td></tr>";
		}
		else{
		myTable+="<td style='height:15px;'> " +myArray2[i]+ "</td></tr>";
		}
	  }  
	   myTable+="</table>";
	 document.getElementById('mytable').innerHTML = myTable;
	  var var1 = "";
	  var var3 = "";
	  var var4 = "";
	  var nationrank="";
	  var stringcounty ="";
	  
	$("path, circle").mouseenter(function(e) {
	  $('#info-box').css('display','block');
	  if (typeof $(this).data('info5') != 'undefined'){
	  stringcounty = $(this).data('info5').replace(stringstate,'');
	  var1 = $(this).data('info');
	  var3 = $(this).data('info2')
	   var4 = $(this).data('info5')
	   nationrank=suffix(var1);
	  var3=suffix(var3);
	  if (nationrank.length=='6'){
		  nationrank=nationrank.replace(nationrank[0],nationrank[0]+',');
		  }
	  }
	   if (nationrank=="2,927th"){
			  $('#info-box').html(stringcounty +" County: <strong>No harvest reported in survey</strong>");
		  }
		  else{
	  $('#info-box').html(stringcounty +" County ranks <strong>"+var3+"</strong> out of "+pathlength+" counties in the state<br>and <strong>"+nationrank+"</strong> out of 3,111 counties in the U.S.");
		  }
	  
	  
		myTable= "<table><tr><td style='height:15px; color:black; font-variant: small-caps; font-weight: bolder; font-size:larger;'>Top Ranked Counties within the State</td></tr>";
	  for (var i=1; i<12; i++) {
		if (i==11){
			myTable+="<tr><td style='height:15px; color:black; font-variant: small-caps; font-weight: bold; font-style:italic;'>Highlighted county rank within the state (out of "+pathlength+")</td></tr><tr><td style='height:15px;'>&nbsp;" +var4+" - "+var3+ "</td></tr>";
			myTable+="<tr><td style='height:15px; color:black; font-variant: small-caps; font-weight: bold; font-style:italic;'>Highlighted county rank within the country (out of 3111)</td></tr><tr><td style='heigh:15px;'>&nbsp;" +var4+" - "+var1+ "</td></tr>";
		}
		else{
		myTable+="<td style='height:15px;'> " +myArray2[i]+ "</td></tr>";
		}
	  }  
	   myTable+="</table>";
	 document.getElementById('mytable').innerHTML = myTable;
	 });
	svgPennsylvania.addEventListener('click', function(ev){
		//svgPennsylvania.style.display = 'none';
		svg1.style.display = 'block';
		return;
	})
	$("path, circle").mouseleave(function(e) {
  $('#info-box').css('display','none');
});
})
RI.addEventListener('click', function(ev){
	hideall();
	hideselect();
	svgRhodeisland.style.display = 'block';
	
	RI.style.fill = '#002868';
	var svgW=window.innerWidth
	var svgH=window.innerHeight
    var bb=svgRhodeisland.getBBox()
	var bbx=bb.x
	var bby=bb.y
	var bbw=bb.width
	var bbh=bb.height
    svgRhodeisland.setAttribute("viewBox",bbx+" "+bby+" "+bbw+" "+bbh )
    svgRhodeisland.setAttribute("width",svgW/1.5)
    svgRhodeisland.setAttribute("height",svgH)
		var myArray2    = new Array();
	 paths = svgRhodeisland.querySelectorAll('.rhodeisland > path');
	 stringstate = ', RI'
	pathlength=paths.length;
		for(var i=0; i<pathlength; ++i) {
		pathdata = paths[i].attributes['data-info2'].value;
		pathdata2 = paths[i].attributes['data-info5'].value;
		if(parseInt(pathdata)< 11){
		pathdata2=pathdata2.replace(stringstate,'')
		if(pathdata== '1'){
			myArray2[1] =pathdata2;
			continue;
		}if(pathdata== '2'){
			myArray2[2] =pathdata2;
			continue;
		}if(pathdata== '3'){
			myArray2[3] =pathdata2;
			continue;
		}if(pathdata== '4'){
			myArray2[4] =pathdata2;
			continue;
		}if(pathdata== '5'){
			myArray2[5] =pathdata2;
			continue;
		}if(pathdata== '6'){
			myArray2[6] =pathdata2;
			continue;
		}if(pathdata== '7'){
			myArray2[7] =pathdata2;
			continue;
		}if(pathdata== '8'){
			myArray2[8] =pathdata2;
			continue;
		}if(pathdata== '9'){
			myArray2[9] =pathdata2;
			continue;
		}if(pathdata== '10'){
			myArray2[10] =pathdata2;
			continue;
		}
		}
	}
	var myTable= "<table><tr><td style='height:15px; color:black; font-variant: small-caps; font-weight: bolder; font-size:larger;'>Top Ranked Counties within the State</td></tr>";
	  for (var i=1; i<12; i++) {
		if (i==11){
			myTable+="<tr><td style='height:15px; color:black; font-variant: small-caps; font-weight: bold; font-style:italic;'>Highlighted county rank within the state (out of "+pathlength+")</td></tr><tr><td style='height:15px;'>&nbsp;</td></tr>";
			myTable+="<tr><td style='height:15px; color:black; font-variant: small-caps; font-weight: bold; font-style:italic;'>Highlighted county rank within the country (out of 3111)</td></tr><tr><td style='heigh:15px;'>&nbsp;</td></tr>";
		}
		else{
		myTable+="<td style='height:15px;'> " +myArray2[i]+ "</td></tr>";
		}
	  }  
	   myTable+="</table>";
	 document.getElementById('mytable').innerHTML = myTable;
	  var var1 = "";
	  var var3 = "";
	  var var4 = "";
	  var nationrank="";
	  var stringcounty ="";
	  
	$("path, circle").mouseenter(function(e) {
	  $('#info-box').css('display','block');
	  if (typeof $(this).data('info5') != 'undefined'){
	  stringcounty = $(this).data('info5').replace(stringstate,'');
	  var1 = $(this).data('info');
	  var3 = $(this).data('info2')
	   var4 = $(this).data('info5')
	   nationrank=suffix(var1);
	  var3=suffix(var3);
	  if (nationrank.length=='6'){
		  nationrank=nationrank.replace(nationrank[0],nationrank[0]+',');
		  }
	  }
	   if (nationrank=="2,927th"){
			  $('#info-box').html(stringcounty +" County: <strong>No harvest reported in survey</strong>");
		  }
		  else{
	  $('#info-box').html(stringcounty +" County ranks <strong>"+var3+"</strong> out of "+pathlength+" counties in the state<br>and <strong>"+nationrank+"</strong> out of 3,111 counties in the U.S.");
		  }
	  
	  
		myTable= "<table><tr><td style='height:15px; color:black; font-variant: small-caps; font-weight: bolder; font-size:larger;'>Top Ranked Counties within the State</td></tr>";
	  for (var i=1; i<12; i++) {
		if (i==11){
			myTable+="<tr><td style='height:15px; color:black; font-variant: small-caps; font-weight: bold; font-style:italic;'>Highlighted county rank within the state (out of "+pathlength+")</td></tr><tr><td style='height:15px;'>&nbsp;" +var4+" - "+var3+ "</td></tr>";
			myTable+="<tr><td style='height:15px; color:black; font-variant: small-caps; font-weight: bold; font-style:italic;'>Highlighted county rank within the country (out of 3111)</td></tr><tr><td style='heigh:15px;'>&nbsp;" +var4+" - "+var1+ "</td></tr>";
		}
		else{
		myTable+="<td style='height:15px;'> " +myArray2[i]+ "</td></tr>";
		}
	  }  
	   myTable+="</table>";
	 document.getElementById('mytable').innerHTML = myTable;
	 });
	svgRhodeisland.addEventListener('click', function(ev){
		//svgRhodeisland.style.display = 'none';
		svg1.style.display = 'block';
		return;
	})
	$("path, circle").mouseleave(function(e) {
  $('#info-box').css('display','none');
});
})
SC.addEventListener('click', function(ev){
	hideall();
	hideselect();
	svgSouthcarolina.style.display = 'block';

	SC.style.fill = '#002868';
	var svgW=window.innerWidth
	var svgH=window.innerHeight
    var bb=svgSouthcarolina.getBBox()
	var bbx=bb.x
	var bby=bb.y
	var bbw=bb.width
	var bbh=bb.height
    svgSouthcarolina.setAttribute("viewBox",bbx+" "+bby+" "+bbw+" "+bbh )
    svgSouthcarolina.setAttribute("width",svgW/1.5)
    svgSouthcarolina.setAttribute("height",svgH)
		var myArray2    = new Array();
	 paths = svgSouthcarolina.querySelectorAll('.southcarolina > path');
	 stringstate = ', SC'
	pathlength=paths.length;
		for(var i=0; i<pathlength; ++i) {
		pathdata = paths[i].attributes['data-info2'].value;
		pathdata2 = paths[i].attributes['data-info5'].value;
		if(parseInt(pathdata)< 11){
		pathdata2=pathdata2.replace(stringstate,'')
		if(pathdata== '1'){
			myArray2[1] =pathdata2;
			continue;
		}if(pathdata== '2'){
			myArray2[2] =pathdata2;
			continue;
		}if(pathdata== '3'){
			myArray2[3] =pathdata2;
			continue;
		}if(pathdata== '4'){
			myArray2[4] =pathdata2;
			continue;
		}if(pathdata== '5'){
			myArray2[5] =pathdata2;
			continue;
		}if(pathdata== '6'){
			myArray2[6] =pathdata2;
			continue;
		}if(pathdata== '7'){
			myArray2[7] =pathdata2;
			continue;
		}if(pathdata== '8'){
			myArray2[8] =pathdata2;
			continue;
		}if(pathdata== '9'){
			myArray2[9] =pathdata2;
			continue;
		}if(pathdata== '10'){
			myArray2[10] =pathdata2;
			continue;
		}
		}
	}
	var myTable= "<table><tr><td style='height:15px; color:black; font-variant: small-caps; font-weight: bolder; font-size:larger;'>Top Ranked Counties within the State</td></tr>";
	  for (var i=1; i<12; i++) {
		if (i==11){
			myTable+="<tr><td style='height:15px; color:black; font-variant: small-caps; font-weight: bold; font-style:italic;'>Highlighted county rank within the state (out of "+pathlength+")</td></tr><tr><td style='height:15px;'>&nbsp;</td></tr>";
			myTable+="<tr><td style='height:15px; color:black; font-variant: small-caps; font-weight: bold; font-style:italic;'>Highlighted county rank within the country (out of 3111)</td></tr><tr><td style='heigh:15px;'>&nbsp;</td></tr>";
		}
		else{
		myTable+="<td style='height:15px;'> " +myArray2[i]+ "</td></tr>";
		}
	  }  
	   myTable+="</table>";
	 document.getElementById('mytable').innerHTML = myTable;
	  var var1 = "";
	  var var3 = "";
	  var var4 = "";
	  var nationrank="";
	  var stringcounty ="";
	  
	$("path, circle").mouseenter(function(e) {
	  $('#info-box').css('display','block');
	  if (typeof $(this).data('info5') != 'undefined'){
	  stringcounty = $(this).data('info5').replace(stringstate,'');
	  var1 = $(this).data('info');
	  var3 = $(this).data('info2')
	   var4 = $(this).data('info5')
	   nationrank=suffix(var1);
	  var3=suffix(var3);
	  if (nationrank.length=='6'){
		  nationrank=nationrank.replace(nationrank[0],nationrank[0]+',');
		  }
	  }
	   if (nationrank=="2,927th"){
			  $('#info-box').html(stringcounty +" County: <strong>No harvest reported in survey</strong>");
		  }
		  else{
	  $('#info-box').html(stringcounty +" County ranks <strong>"+var3+"</strong> out of "+pathlength+" counties in the state<br>and <strong>"+nationrank+"</strong> out of 3,111 counties in the U.S.");
		  }
	  
	  
		myTable= "<table><tr><td style='height:15px; color:black; font-variant: small-caps; font-weight: bolder; font-size:larger;'>Top Ranked Counties within the State</td></tr>";
	  for (var i=1; i<12; i++) {
		if (i==11){
			myTable+="<tr><td style='height:15px; color:black; font-variant: small-caps; font-weight: bold; font-style:italic;'>Highlighted county rank within the state (out of "+pathlength+")</td></tr><tr><td style='height:15px;'>&nbsp;" +var4+" - "+var3+ "</td></tr>";
			myTable+="<tr><td style='height:15px; color:black; font-variant: small-caps; font-weight: bold; font-style:italic;'>Highlighted county rank within the country (out of 3111)</td></tr><tr><td style='heigh:15px;'>&nbsp;" +var4+" - "+var1+ "</td></tr>";
		}
		else{
		myTable+="<td style='height:15px;'> " +myArray2[i]+ "</td></tr>";
		}
	  }  
	   myTable+="</table>";
	 document.getElementById('mytable').innerHTML = myTable;
	 });
	svgSouthcarolina.addEventListener('click', function(ev){
		//svgSouthcarolina.style.display = 'none';
		svg1.style.display = 'block';
		return;
	})
	$("path, circle").mouseleave(function(e) {
  $('#info-box').css('display','none');
});
})
SD.addEventListener('click', function(ev){
	hideall();
	hideselect();
	svgSouthdakota.style.display = 'block';

	SD.style.fill = '#002868';
	var svgW=window.innerWidth
	var svgH=window.innerHeight
    var bb=svgSouthdakota.getBBox()
	var bbx=bb.x
	var bby=bb.y
	var bbw=bb.width
	var bbh=bb.height
    svgSouthdakota.setAttribute("viewBox",bbx+" "+bby+" "+bbw+" "+bbh )
    svgSouthdakota.setAttribute("width",svgW/1.5)
    svgSouthdakota.setAttribute("height",svgH)
		var myArray2    = new Array();
	 paths = svgSouthdakota.querySelectorAll('.southdakota > path');
	 stringstate = ', SD'
	pathlength=paths.length;
		for(var i=0; i<pathlength; ++i) {
		pathdata = paths[i].attributes['data-info2'].value;
		pathdata2 = paths[i].attributes['data-info5'].value;
		if(parseInt(pathdata)< 11){
		pathdata2=pathdata2.replace(stringstate,'')
		if(pathdata== '1'){
			myArray2[1] =pathdata2;
			continue;
		}if(pathdata== '2'){
			myArray2[2] =pathdata2;
			continue;
		}if(pathdata== '3'){
			myArray2[3] =pathdata2;
			continue;
		}if(pathdata== '4'){
			myArray2[4] =pathdata2;
			continue;
		}if(pathdata== '5'){
			myArray2[5] =pathdata2;
			continue;
		}if(pathdata== '6'){
			myArray2[6] =pathdata2;
			continue;
		}if(pathdata== '7'){
			myArray2[7] =pathdata2;
			continue;
		}if(pathdata== '8'){
			myArray2[8] =pathdata2;
			continue;
		}if(pathdata== '9'){
			myArray2[9] =pathdata2;
			continue;
		}if(pathdata== '10'){
			myArray2[10] =pathdata2;
			continue;
		}
		}
	}
	var myTable= "<table><tr><td style='height:15px; color:black; font-variant: small-caps; font-weight: bolder; font-size:larger;'>Top Ranked Counties within the State</td></tr>";
	  for (var i=1; i<12; i++) {
		if (i==11){
			myTable+="<tr><td style='height:15px; color:black; font-variant: small-caps; font-weight: bold; font-style:italic;'>Highlighted county rank within the state (out of "+pathlength+")</td></tr><tr><td style='height:15px;'>&nbsp;</td></tr>";
			myTable+="<tr><td style='height:15px; color:black; font-variant: small-caps; font-weight: bold; font-style:italic;'>Highlighted county rank within the country (out of 3111)</td></tr><tr><td style='heigh:15px;'>&nbsp;</td></tr>";
		}
		else{
		myTable+="<td style='height:15px;'> " +myArray2[i]+ "</td></tr>";
		}
	  }  
	   myTable+="</table>";
	 document.getElementById('mytable').innerHTML = myTable;
	  var var1 = "";
	  var var3 = "";
	  var var4 = "";
	  var nationrank="";
	  var stringcounty ="";
	  
	$("path, circle").mouseenter(function(e) {
	  $('#info-box').css('display','block');
	  if (typeof $(this).data('info5') != 'undefined'){
	  stringcounty = $(this).data('info5').replace(stringstate,'');
	  var1 = $(this).data('info');
	  var3 = $(this).data('info2')
	   var4 = $(this).data('info5')
	   nationrank=suffix(var1);
	  var3=suffix(var3);
	  if (nationrank.length=='6'){
		  nationrank=nationrank.replace(nationrank[0],nationrank[0]+',');
		  }
	  }
	   if (nationrank=="2,927th"){
			  $('#info-box').html(stringcounty +" County: <strong>No harvest reported in survey</strong>");
		  }
		  else{
	  $('#info-box').html(stringcounty +" County ranks <strong>"+var3+"</strong> out of "+pathlength+" counties in the state<br>and <strong>"+nationrank+"</strong> out of 3,111 counties in the U.S.");
		  }
	  
	  
		myTable= "<table><tr><td style='height:15px; color:black; font-variant: small-caps; font-weight: bolder; font-size:larger;'>Top Ranked Counties within the State</td></tr>";
	  for (var i=1; i<12; i++) {
		if (i==11){
			myTable+="<tr><td style='height:15px; color:black; font-variant: small-caps; font-weight: bold; font-style:italic;'>Highlighted county rank within the state (out of "+pathlength+")</td></tr><tr><td style='height:15px;'>&nbsp;" +var4+" - "+var3+ "</td></tr>";
			myTable+="<tr><td style='height:15px; color:black; font-variant: small-caps; font-weight: bold; font-style:italic;'>Highlighted county rank within the country (out of 3111)</td></tr><tr><td style='heigh:15px;'>&nbsp;" +var4+" - "+var1+ "</td></tr>";
		}
		else{
		myTable+="<td style='height:15px;'> " +myArray2[i]+ "</td></tr>";
		}
	  }  
	   myTable+="</table>";
	 document.getElementById('mytable').innerHTML = myTable;
	 });
	svgSouthdakota.addEventListener('click', function(ev){
		//svgSouthdakota.style.display = 'none';
		svg1.style.display = 'block';
		return;
	})
	$("path, circle").mouseleave(function(e) {
  $('#info-box').css('display','none');
});
})
TN.addEventListener('click', function(ev){
	hideall();
	hideselect();
	svgTennessee.style.display = 'block';

	TN.style.fill = '#002868';
	var svgW=window.innerWidth
	var svgH=window.innerHeight
    var bb=svgTennessee.getBBox()
	var bbx=bb.x
	var bby=bb.y
	var bbw=bb.width
	var bbh=bb.height
    svgTennessee.setAttribute("viewBox",bbx+" "+bby+" "+bbw+" "+bbh )
    svgTennessee.setAttribute("width",svgW/1.5)
    svgTennessee.setAttribute("height",svgH)
		var myArray2    = new Array();
	 paths = svgTennessee.querySelectorAll('.tennessee > path');
	 stringstate = ', TN'
	pathlength=paths.length;
		for(var i=0; i<pathlength; ++i) {
		pathdata = paths[i].attributes['data-info2'].value;
		pathdata2 = paths[i].attributes['data-info5'].value;
		if(parseInt(pathdata)< 11){
		pathdata2=pathdata2.replace(stringstate,'')
		if(pathdata== '1'){
			myArray2[1] =pathdata2;
			continue;
		}if(pathdata== '2'){
			myArray2[2] =pathdata2;
			continue;
		}if(pathdata== '3'){
			myArray2[3] =pathdata2;
			continue;
		}if(pathdata== '4'){
			myArray2[4] =pathdata2;
			continue;
		}if(pathdata== '5'){
			myArray2[5] =pathdata2;
			continue;
		}if(pathdata== '6'){
			myArray2[6] =pathdata2;
			continue;
		}if(pathdata== '7'){
			myArray2[7] =pathdata2;
			continue;
		}if(pathdata== '8'){
			myArray2[8] =pathdata2;
			continue;
		}if(pathdata== '9'){
			myArray2[9] =pathdata2;
			continue;
		}if(pathdata== '10'){
			myArray2[10] =pathdata2;
			continue;
		}
		}
	}
	var myTable= "<table><tr><td style='height:15px; color:black; font-variant: small-caps; font-weight: bolder; font-size:larger;'>Top Ranked Counties within the State</td></tr>";
	  for (var i=1; i<12; i++) {
		if (i==11){
			myTable+="<tr><td style='height:15px; color:black; font-variant: small-caps; font-weight: bold; font-style:italic;'>Highlighted county rank within the state (out of "+pathlength+")</td></tr><tr><td style='height:15px;'>&nbsp;</td></tr>";
			myTable+="<tr><td style='height:15px; color:black; font-variant: small-caps; font-weight: bold; font-style:italic;'>Highlighted county rank within the country (out of 3111)</td></tr><tr><td style='heigh:15px;'>&nbsp;</td></tr>";
		}
		else{
		myTable+="<td style='height:15px;'> " +myArray2[i]+ "</td></tr>";
		}
	  }  
	   myTable+="</table>";
	 document.getElementById('mytable').innerHTML = myTable;
	  var var1 = "";
	  var var3 = "";
	  var var4 = "";
	  var nationrank="";
	  var stringcounty ="";
	  
	$("path, circle").mouseenter(function(e) {
	  $('#info-box').css('display','block');
	  if (typeof $(this).data('info5') != 'undefined'){
	  stringcounty = $(this).data('info5').replace(stringstate,'');
	  var1 = $(this).data('info');
	  var3 = $(this).data('info2')
	   var4 = $(this).data('info5')
	   nationrank=suffix(var1);
	  var3=suffix(var3);
	  if (nationrank.length=='6'){
		  nationrank=nationrank.replace(nationrank[0],nationrank[0]+',');
		  }
	  }
	   if (nationrank=="2,927th"){
			  $('#info-box').html(stringcounty +" County: <strong>No harvest reported in survey</strong>");
		  }
		  else{
	  $('#info-box').html(stringcounty +" County ranks <strong>"+var3+"</strong> out of "+pathlength+" counties in the state<br>and <strong>"+nationrank+"</strong> out of 3,111 counties in the U.S.");
		  }
	  
	  
		myTable= "<table><tr><td style='height:15px; color:black; font-variant: small-caps; font-weight: bolder; font-size:larger;'>Top Ranked Counties within the State</td></tr>";
	  for (var i=1; i<12; i++) {
		if (i==11){
			myTable+="<tr><td style='height:15px; color:black; font-variant: small-caps; font-weight: bold; font-style:italic;'>Highlighted county rank within the state (out of "+pathlength+")</td></tr><tr><td style='height:15px;'>&nbsp;" +var4+" - "+var3+ "</td></tr>";
			myTable+="<tr><td style='height:15px; color:black; font-variant: small-caps; font-weight: bold; font-style:italic;'>Highlighted county rank within the country (out of 3111)</td></tr><tr><td style='heigh:15px;'>&nbsp;" +var4+" - "+var1+ "</td></tr>";
		}
		else{
		myTable+="<td style='height:15px;'> " +myArray2[i]+ "</td></tr>";
		}
	  }  
	   myTable+="</table>";
	 document.getElementById('mytable').innerHTML = myTable;
	 });
	svgTennessee.addEventListener('click', function(ev){
		//svgTennessee.style.display = 'none';
		svg1.style.display = 'block';
		return;
	})
	$("path, circle").mouseleave(function(e) {
  $('#info-box').css('display','none');
});
})
UT.addEventListener('click', function(ev){
	hideall();
	hideselect();
	svgUtah.style.display = 'block';
	
	UT.style.fill = '#002868';
	var svgW=window.innerWidth
	var svgH=window.innerHeight
    var bb=svgUtah.getBBox()
	var bbx=bb.x
	var bby=bb.y
	var bbw=bb.width
	var bbh=bb.height
    svgUtah.setAttribute("viewBox",bbx+" "+bby+" "+bbw+" "+bbh )
    svgUtah.setAttribute("width",svgW/1.5)
    svgUtah.setAttribute("height",svgH)
		var myArray2    = new Array();
	 paths = svgUtah.querySelectorAll('.utah > path');
	 stringstate = ', UT'
	pathlength=paths.length;
		for(var i=0; i<pathlength; ++i) {
		pathdata = paths[i].attributes['data-info2'].value;
		pathdata2 = paths[i].attributes['data-info5'].value;
		if(parseInt(pathdata)< 11){
		pathdata2=pathdata2.replace(stringstate,'')
		if(pathdata== '1'){
			myArray2[1] =pathdata2;
			continue;
		}if(pathdata== '2'){
			myArray2[2] =pathdata2;
			continue;
		}if(pathdata== '3'){
			myArray2[3] =pathdata2;
			continue;
		}if(pathdata== '4'){
			myArray2[4] =pathdata2;
			continue;
		}if(pathdata== '5'){
			myArray2[5] =pathdata2;
			continue;
		}if(pathdata== '6'){
			myArray2[6] =pathdata2;
			continue;
		}if(pathdata== '7'){
			myArray2[7] =pathdata2;
			continue;
		}if(pathdata== '8'){
			myArray2[8] =pathdata2;
			continue;
		}if(pathdata== '9'){
			myArray2[9] =pathdata2;
			continue;
		}if(pathdata== '10'){
			myArray2[10] =pathdata2;
			continue;
		}
		}
	}
	var myTable= "<table><tr><td style='height:15px; color:black; font-variant: small-caps; font-weight: bolder; font-size:larger;'>Top Ranked Counties within the State</td></tr>";
	  for (var i=1; i<12; i++) {
		if (i==11){
			myTable+="<tr><td style='height:15px; color:black; font-variant: small-caps; font-weight: bold; font-style:italic;'>Highlighted county rank within the state (out of "+pathlength+")</td></tr><tr><td style='height:15px;'>&nbsp;</td></tr>";
			myTable+="<tr><td style='height:15px; color:black; font-variant: small-caps; font-weight: bold; font-style:italic;'>Highlighted county rank within the country (out of 3111)</td></tr><tr><td style='heigh:15px;'>&nbsp;</td></tr>";
		}
		else{
		myTable+="<td style='height:15px;'> " +myArray2[i]+ "</td></tr>";
		}
	  }  
	   myTable+="</table>";
	 document.getElementById('mytable').innerHTML = myTable;
	  var var1 = "";
	  var var3 = "";
	  var var4 = "";
	  var nationrank="";
	  var stringcounty ="";
	  
	$("path, circle").mouseenter(function(e) {
	  $('#info-box').css('display','block');
	  if (typeof $(this).data('info5') != 'undefined'){
	  stringcounty = $(this).data('info5').replace(stringstate,'');
	  var1 = $(this).data('info');
	  var3 = $(this).data('info2')
	   var4 = $(this).data('info5')
	   nationrank=suffix(var1);
	  var3=suffix(var3);
	  if (nationrank.length=='6'){
		  nationrank=nationrank.replace(nationrank[0],nationrank[0]+',');
		  }
	  }
	   if (nationrank=="2,927th"){
			  $('#info-box').html(stringcounty +" County: <strong>No harvest reported in survey</strong>");
		  }
		  else{
	  $('#info-box').html(stringcounty +" County ranks <strong>"+var3+"</strong> out of "+pathlength+" counties in the state<br>and <strong>"+nationrank+"</strong> out of 3,111 counties in the U.S.");
		  }
	  
	  
		myTable= "<table><tr><td style='height:15px; color:black; font-variant: small-caps; font-weight: bolder; font-size:larger;'>Top Ranked Counties within the State</td></tr>";
	  for (var i=1; i<12; i++) {
		if (i==11){
			myTable+="<tr><td style='height:15px; color:black; font-variant: small-caps; font-weight: bold; font-style:italic;'>Highlighted county rank within the state (out of "+pathlength+")</td></tr><tr><td style='height:15px;'>&nbsp;" +var4+" - "+var3+ "</td></tr>";
			myTable+="<tr><td style='height:15px; color:black; font-variant: small-caps; font-weight: bold; font-style:italic;'>Highlighted county rank within the country (out of 3111)</td></tr><tr><td style='heigh:15px;'>&nbsp;" +var4+" - "+var1+ "</td></tr>";
		}
		else{
		myTable+="<td style='height:15px;'> " +myArray2[i]+ "</td></tr>";
		}
	  }  
	   myTable+="</table>";
	 document.getElementById('mytable').innerHTML = myTable;
	 });
	svgUtah.addEventListener('click', function(ev){
		//svgUtah.style.display = 'none';
		svg1.style.display = 'block';
		return;
	})
	$("path, circle").mouseleave(function(e) {
  $('#info-box').css('display','none');
});
})
VT.addEventListener('click', function(ev){
	hideall();
	hideselect();
	svgVermont.style.display = 'block';
	
	VT.style.fill = '#002868';
	var svgW=window.innerWidth
	var svgH=window.innerHeight
    var bb=svgVermont.getBBox()
	var bbx=bb.x
	var bby=bb.y
	var bbw=bb.width
	var bbh=bb.height
    svgVermont.setAttribute("viewBox",bbx+" "+bby+" "+bbw+" "+bbh )
    svgVermont.setAttribute("width",svgW/1.5)
    svgVermont.setAttribute("height",svgH)
		var myArray2    = new Array();
	 paths = svgVermont.querySelectorAll('.vermont > path');
	 stringstate = ', VT'
	pathlength=paths.length;
		for(var i=0; i<pathlength; ++i) {
		pathdata = paths[i].attributes['data-info2'].value;
		pathdata2 = paths[i].attributes['data-info5'].value;
		if(parseInt(pathdata)< 11){
		pathdata2=pathdata2.replace(stringstate,'')
		if(pathdata== '1'){
			myArray2[1] =pathdata2;
			continue;
		}if(pathdata== '2'){
			myArray2[2] =pathdata2;
			continue;
		}if(pathdata== '3'){
			myArray2[3] =pathdata2;
			continue;
		}if(pathdata== '4'){
			myArray2[4] =pathdata2;
			continue;
		}if(pathdata== '5'){
			myArray2[5] =pathdata2;
			continue;
		}if(pathdata== '6'){
			myArray2[6] =pathdata2;
			continue;
		}if(pathdata== '7'){
			myArray2[7] =pathdata2;
			continue;
		}if(pathdata== '8'){
			myArray2[8] =pathdata2;
			continue;
		}if(pathdata== '9'){
			myArray2[9] =pathdata2;
			continue;
		}if(pathdata== '10'){
			myArray2[10] =pathdata2;
			continue;
		}
		}
	}
	var myTable= "<table><tr><td style='height:15px; color:black; font-variant: small-caps; font-weight: bolder; font-size:larger;'>Top Ranked Counties within the State</td></tr>";
	  for (var i=1; i<12; i++) {
		if (i==11){
			myTable+="<tr><td style='height:15px; color:black; font-variant: small-caps; font-weight: bold; font-style:italic;'>Highlighted county rank within the state (out of "+pathlength+")</td></tr><tr><td style='height:15px;'>&nbsp;</td></tr>";
			myTable+="<tr><td style='height:15px; color:black; font-variant: small-caps; font-weight: bold; font-style:italic;'>Highlighted county rank within the country (out of 3111)</td></tr><tr><td style='heigh:15px;'>&nbsp;</td></tr>";
		}
		else{
		myTable+="<td style='height:15px;'> " +myArray2[i]+ "</td></tr>";
		}
	  }  
	   myTable+="</table>";
	 document.getElementById('mytable').innerHTML = myTable;
	  var var1 = "";
	  var var3 = "";
	  var var4 = "";
	  var nationrank="";
	  var stringcounty ="";
	  
	$("path, circle").mouseenter(function(e) {
	  $('#info-box').css('display','block');
	  if (typeof $(this).data('info5') != 'undefined'){
	  stringcounty = $(this).data('info5').replace(stringstate,'');
	  var1 = $(this).data('info');
	  var3 = $(this).data('info2')
	   var4 = $(this).data('info5')
	   nationrank=suffix(var1);
	  var3=suffix(var3);
	  if (nationrank.length=='6'){
		  nationrank=nationrank.replace(nationrank[0],nationrank[0]+',');
		  }
	  }
	   if (nationrank=="2,927th"){
			  $('#info-box').html(stringcounty +" County: <strong>No harvest reported in survey</strong>");
		  }
		  else{
	  $('#info-box').html(stringcounty +" County ranks <strong>"+var3+"</strong> out of "+pathlength+" counties in the state<br>and <strong>"+nationrank+"</strong> out of 3,111 counties in the U.S.");
		  }
	  
	  
		myTable= "<table><tr><td style='height:15px; color:black; font-variant: small-caps; font-weight: bolder; font-size:larger;'>Top Ranked Counties within the State</td></tr>";
	  for (var i=1; i<12; i++) {
		if (i==11){
			myTable+="<tr><td style='height:15px; color:black; font-variant: small-caps; font-weight: bold; font-style:italic;'>Highlighted county rank within the state (out of "+pathlength+")</td></tr><tr><td style='height:15px;'>&nbsp;" +var4+" - "+var3+ "</td></tr>";
			myTable+="<tr><td style='height:15px; color:black; font-variant: small-caps; font-weight: bold; font-style:italic;'>Highlighted county rank within the country (out of 3111)</td></tr><tr><td style='heigh:15px;'>&nbsp;" +var4+" - "+var1+ "</td></tr>";
		}
		else{
		myTable+="<td style='height:15px;'> " +myArray2[i]+ "</td></tr>";
		}
	  }  
	   myTable+="</table>";
	 document.getElementById('mytable').innerHTML = myTable;
	 });
	svgVermont.addEventListener('click', function(ev){
		//svgVermont.style.display = 'none';
		svg1.style.display = 'block';
		return;
	})
	$("path, circle").mouseleave(function(e) {
  $('#info-box').css('display','none');
});
})
VA.addEventListener('click', function(ev){
	hideall();
	hideselect();
	svgVirginia.style.display = 'block';
	
	VA.style.fill = '#002868';
	var svgW=window.innerWidth
	var svgH=window.innerHeight
    var bb=svgVirginia.getBBox()
	var bbx=bb.x
	var bby=bb.y
	var bbw=bb.width
	var bbh=bb.height
    svgVirginia.setAttribute("viewBox",bbx+" "+bby+" "+bbw+" "+bbh )
    svgVirginia.setAttribute("width",svgW/1.5)
    svgVirginia.setAttribute("height",svgH)
		var myArray2    = new Array();
	 paths = svgVirginia.querySelectorAll('.virginia > path');
	 stringstate = ', VA'
	pathlength=paths.length;
		for(var i=0; i<pathlength; ++i) {
		pathdata = paths[i].attributes['data-info2'].value;
		pathdata2 = paths[i].attributes['data-info5'].value;
		if(parseInt(pathdata)< 11){
		pathdata2=pathdata2.replace(stringstate,'')
		if(pathdata== '1'){
			myArray2[1] =pathdata2;
			continue;
		}if(pathdata== '2'){
			myArray2[2] =pathdata2;
			continue;
		}if(pathdata== '3'){
			myArray2[3] =pathdata2;
			continue;
		}if(pathdata== '4'){
			myArray2[4] =pathdata2;
			continue;
		}if(pathdata== '5'){
			myArray2[5] =pathdata2;
			continue;
		}if(pathdata== '6'){
			myArray2[6] =pathdata2;
			continue;
		}if(pathdata== '7'){
			myArray2[7] =pathdata2;
			continue;
		}if(pathdata== '8'){
			myArray2[8] =pathdata2;
			continue;
		}if(pathdata== '9'){
			myArray2[9] =pathdata2;
			continue;
		}if(pathdata== '10'){
			myArray2[10] =pathdata2;
			continue;
		}
		}
	}
	/*
	if (your_string.indexOf('hello') > -1)
{
  alert("hello found inside your_string");
}
*/
	var myTable= "<table><tr><td style='height:15px; color:black; font-variant: small-caps; font-weight: bolder; font-size:larger;'>Top Ranked Counties within the State</td></tr>";
	  for (var i=1; i<12; i++) {
		if (i==11){
			myTable+="<tr><td style='height:15px; color:black; font-variant: small-caps; font-weight: bold; font-style:italic;'>Highlighted county rank within the state (out of "+pathlength+")</td></tr><tr><td style='height:15px;'>&nbsp;</td></tr>";
			myTable+="<tr><td style='height:15px; color:black; font-variant: small-caps; font-weight: bold; font-style:italic;'>Highlighted county rank within the country (out of 3111)</td></tr><tr><td style='heigh:15px;'>&nbsp;</td></tr>";
		}
		else{
		myTable+="<td style='height:15px;'> " +myArray2[i]+ "</td></tr>";
		}
	  }  
	   myTable+="</table>";
	 document.getElementById('mytable').innerHTML = myTable;
	  var var1 = "";
	  var var3 = "";
	  var var4 = "";
	  var nationrank="";
	  var stringcounty ="";
	  
	$("path, circle").mouseenter(function(e) {
	  $('#info-box').css('display','block');
	  if (typeof $(this).data('info5') != 'undefined'){
	  stringcounty = $(this).data('info5').replace(stringstate,'');
	  var1 = $(this).data('info');
	  var3 = $(this).data('info2')
	   var4 = $(this).data('info5')
	   nationrank=suffix(var1);
	  var3=suffix(var3);
	  
	  
	  if (nationrank.length=='6'){
		  nationrank=nationrank.replace(nationrank[0],nationrank[0]+',');
		  }
	  }
	   if (nationrank=="2,927th"){
		   if (stringcounty.indexOf('!') > -1){
			stringcounty=stringcounty.replace('!','');
		   $('#info-box').html(stringcounty +" City: <strong>No harvest reported in survey</strong>");
		   }
		   else{
			  $('#info-box').html(stringcounty +" County: <strong>No harvest reported in survey</strong>");
		   }
		  }
		  else{
	  $('#info-box').html(stringcounty +" County ranks <strong>"+var3+"</strong> out of "+pathlength+" counties in the state<br>and <strong>"+nationrank+"</strong> out of 3,111 counties in the U.S.");
		  }
	  
	  
		myTable= "<table><tr><td style='height:15px; color:black; font-variant: small-caps; font-weight: bolder; font-size:larger;'>Top Ranked Counties within the State</td></tr>";
	  for (var i=1; i<12; i++) {
		if (i==11){
			myTable+="<tr><td style='height:15px; color:black; font-variant: small-caps; font-weight: bold; font-style:italic;'>Highlighted county rank within the state (out of "+pathlength+")</td></tr><tr><td style='height:15px;'>&nbsp;" +var4+" - "+var3+ "</td></tr>";
			myTable+="<tr><td style='height:15px; color:black; font-variant: small-caps; font-weight: bold; font-style:italic;'>Highlighted county rank within the country (out of 3111)</td></tr><tr><td style='heigh:15px;'>&nbsp;" +var4+" - "+var1+ "</td></tr>";
		}
		else{
		myTable+="<td style='height:15px;'> " +myArray2[i]+ "</td></tr>";
		}
	  }  
	   myTable+="</table>";
	 document.getElementById('mytable').innerHTML = myTable;
	 });
	svgVirginia.addEventListener('click', function(ev){
		//svgVirginia.style.display = 'none';
		svg1.style.display = 'block';
		return;
	})
	$("path, circle").mouseleave(function(e) {
  $('#info-box').css('display','none');
});
})
WA.addEventListener('click', function(ev){
	hideall();
	hideselect();
	svgWashington.style.display = 'block';

	WA.style.fill = '#002868';
	var svgW=window.innerWidth
	var svgH=window.innerHeight
    var bb=svgWashington.getBBox()
	var bbx=bb.x
	var bby=bb.y
	var bbw=bb.width
	var bbh=bb.height
    svgWashington.setAttribute("viewBox",bbx+" "+bby+" "+bbw+" "+bbh )
    svgWashington.setAttribute("width",svgW/1.5)
    svgWashington.setAttribute("height",svgH)
		var myArray2    = new Array();
	 paths = svgWashington.querySelectorAll('.washington > path');
	 stringstate = ', WA'
	pathlength=paths.length;
		for(var i=0; i<pathlength; ++i) {
		pathdata = paths[i].attributes['data-info2'].value;
		pathdata2 = paths[i].attributes['data-info5'].value;
		if(parseInt(pathdata)< 11){
		pathdata2=pathdata2.replace(stringstate,'')
		if(pathdata== '1'){
			myArray2[1] =pathdata2;
			continue;
		}if(pathdata== '2'){
			myArray2[2] =pathdata2;
			continue;
		}if(pathdata== '3'){
			myArray2[3] =pathdata2;
			continue;
		}if(pathdata== '4'){
			myArray2[4] =pathdata2;
			continue;
		}if(pathdata== '5'){
			myArray2[5] =pathdata2;
			continue;
		}if(pathdata== '6'){
			myArray2[6] =pathdata2;
			continue;
		}if(pathdata== '7'){
			myArray2[7] =pathdata2;
			continue;
		}if(pathdata== '8'){
			myArray2[8] =pathdata2;
			continue;
		}if(pathdata== '9'){
			myArray2[9] =pathdata2;
			continue;
		}if(pathdata== '10'){
			myArray2[10] =pathdata2;
			continue;
		}
		}
	}
	var myTable= "<table><tr><td style='height:15px; color:black; font-variant: small-caps; font-weight: bolder; font-size:larger;'>Top Ranked Counties within the State</td></tr>";
	  for (var i=1; i<12; i++) {
		if (i==11){
			myTable+="<tr><td style='height:15px; color:black; font-variant: small-caps; font-weight: bold; font-style:italic;'>Highlighted county rank within the state (out of "+pathlength+")</td></tr><tr><td style='height:15px;'>&nbsp;</td></tr>";
			myTable+="<tr><td style='height:15px; color:black; font-variant: small-caps; font-weight: bold; font-style:italic;'>Highlighted county rank within the country (out of 3111)</td></tr><tr><td style='heigh:15px;'>&nbsp;</td></tr>";
		}
		else{
		myTable+="<td style='height:15px;'> " +myArray2[i]+ "</td></tr>";
		}
	  }  
	   myTable+="</table>";
	document.getElementById('mytable').innerHTML = myTable;
	  var var1 = "";
	  var var3 = "";
	  var var4 = "";
	  var nationrank="";
	  var stringcounty ="";
	  
	$("path, circle").mouseenter(function(e) {
	  $('#info-box').css('display','block');
	  if (typeof $(this).data('info5') != 'undefined'){
	  stringcounty = $(this).data('info5').replace(stringstate,'');
	  var1 = $(this).data('info');
	  var3 = $(this).data('info2')
	   var4 = $(this).data('info5')
	   nationrank=suffix(var1);
	  var3=suffix(var3);
	  if (nationrank.length=='6'){
		  nationrank=nationrank.replace(nationrank[0],nationrank[0]+',');
		  }
	  }
	   if (nationrank=="2,927th"){
			  $('#info-box').html(stringcounty +" County: <strong>No harvest reported in survey</strong>");
		  }
		  else{
	  $('#info-box').html(stringcounty +" County ranks <strong>"+var3+"</strong> out of "+pathlength+" counties in the state<br>and <strong>"+nationrank+"</strong> out of 3,111 counties in the U.S.");
		  }
	  
	  
		myTable= "<table><tr><td style='height:15px; color:black; font-variant: small-caps; font-weight: bolder; font-size:larger;'>Top Ranked Counties within the State</td></tr>";
	  for (var i=1; i<12; i++) {
		if (i==11){
			myTable+="<tr><td style='height:15px; color:black; font-variant: small-caps; font-weight: bold; font-style:italic;'>Highlighted county rank within the state (out of "+pathlength+")</td></tr><tr><td style='height:15px;'>&nbsp;" +var4+" - "+var3+ "</td></tr>";
			myTable+="<tr><td style='height:15px; color:black; font-variant: small-caps; font-weight: bold; font-style:italic;'>Highlighted county rank within the country (out of 3111)</td></tr><tr><td style='heigh:15px;'>&nbsp;" +var4+" - "+var1+ "</td></tr>";
		}
		else{
		myTable+="<td style='height:15px;'> " +myArray2[i]+ "</td></tr>";
		}
	  }  
	   myTable+="</table>";
	 document.getElementById('mytable').innerHTML = myTable;
	 });
	svgWashington.addEventListener('click', function(ev){
		//svgWashington.style.display = 'none';
		svg1.style.display = 'block';
		return;
	})
	$("path, circle").mouseleave(function(e) {
  $('#info-box').css('display','none');
});
})
WV.addEventListener('click', function(ev){
	hideall();
	hideselect();
	svgWestvirginia.style.display = 'block';
	WV.style.fill = '#002868';
	var svgW=window.innerWidth
	var svgH=window.innerHeight
    var bb=svgWestvirginia.getBBox()
	var bbx=bb.x
	var bby=bb.y
	var bbw=bb.width
	var bbh=bb.height
    svgWestvirginia.setAttribute("viewBox",bbx+" "+bby+" "+bbw+" "+bbh )
    svgWestvirginia.setAttribute("width",svgW/1.5)
    svgWestvirginia.setAttribute("height",svgH)
		var myArray2    = new Array();
	 paths = svgWestvirginia.querySelectorAll('.westvirginia > path');
	 stringstate = ', WV'
	pathlength=paths.length;
		for(var i=0; i<pathlength; ++i) {
		pathdata = paths[i].attributes['data-info2'].value;
		pathdata2 = paths[i].attributes['data-info5'].value;
		if(parseInt(pathdata)< 11){
		pathdata2=pathdata2.replace(stringstate,'')
		if(pathdata== '1'){
			myArray2[1] =pathdata2;
			continue;
		}if(pathdata== '2'){
			myArray2[2] =pathdata2;
			continue;
		}if(pathdata== '3'){
			myArray2[3] =pathdata2;
			continue;
		}if(pathdata== '4'){
			myArray2[4] =pathdata2;
			continue;
		}if(pathdata== '5'){
			myArray2[5] =pathdata2;
			continue;
		}if(pathdata== '6'){
			myArray2[6] =pathdata2;
			continue;
		}if(pathdata== '7'){
			myArray2[7] =pathdata2;
			continue;
		}if(pathdata== '8'){
			myArray2[8] =pathdata2;
			continue;
		}if(pathdata== '9'){
			myArray2[9] =pathdata2;
			continue;
		}if(pathdata== '10'){
			myArray2[10] =pathdata2;
			continue;
		}
		}
	}
	var myTable= "<table><tr><td style='height:15px; color:black; font-variant: small-caps; font-weight: bolder; font-size:larger;'>Top Ranked Counties within the State</td></tr>";
	  for (var i=1; i<12; i++) {
		if (i==11){
			myTable+="<tr><td style='height:15px; color:black; font-variant: small-caps; font-weight: bold; font-style:italic;'>Highlighted county rank within the state (out of "+pathlength+")</td></tr><tr><td style='height:15px;'>&nbsp;</td></tr>";
			myTable+="<tr><td style='height:15px; color:black; font-variant: small-caps; font-weight: bold; font-style:italic;'>Highlighted county rank within the country (out of 3111)</td></tr><tr><td style='heigh:15px;'>&nbsp;</td></tr>";
		}
		else{
		myTable+="<td style='height:15px;'> " +myArray2[i]+ "</td></tr>";
		}
	  }  
	   myTable+="</table>";
	document.getElementById('mytable').innerHTML = myTable;
	  var var1 = "";
	  var var3 = "";
	  var var4 = "";
	  var nationrank="";
	  var stringcounty ="";
	  
	$("path, circle").mouseenter(function(e) {
	  $('#info-box').css('display','block');
	  if (typeof $(this).data('info5') != 'undefined'){
	  stringcounty = $(this).data('info5').replace(stringstate,'');
	  var1 = $(this).data('info');
	  var3 = $(this).data('info2')
	   var4 = $(this).data('info5')
	   nationrank=suffix(var1);
	  var3=suffix(var3);
	  if (nationrank.length=='6'){
		  nationrank=nationrank.replace(nationrank[0],nationrank[0]+',');
		  }
	  }
	   if (nationrank=="2,927th"){
			  $('#info-box').html(stringcounty +" County: <strong>No harvest reported in survey</strong>");
		  }
		  else{
	  $('#info-box').html(stringcounty +" County ranks <strong>"+var3+"</strong> out of "+pathlength+" counties in the state<br>and <strong>"+nationrank+"</strong> out of 3,111 counties in the U.S.");
		  }
	  
	  
		myTable= "<table><tr><td style='height:15px; color:black; font-variant: small-caps; font-weight: bolder; font-size:larger;'>Top Ranked Counties within the State</td></tr>";
	  for (var i=1; i<12; i++) {
		if (i==11){
			myTable+="<tr><td style='height:15px; color:black; font-variant: small-caps; font-weight: bold; font-style:italic;'>Highlighted county rank within the state (out of "+pathlength+")</td></tr><tr><td style='height:15px;'>&nbsp;" +var4+" - "+var3+ "</td></tr>";
			myTable+="<tr><td style='height:15px; color:black; font-variant: small-caps; font-weight: bold; font-style:italic;'>Highlighted county rank within the country (out of 3111)</td></tr><tr><td style='heigh:15px;'>&nbsp;" +var4+" - "+var1+ "</td></tr>";
		}
		else{
		myTable+="<td style='height:15px;'> " +myArray2[i]+ "</td></tr>";
		}
	  }  
	   myTable+="</table>";
	 document.getElementById('mytable').innerHTML = myTable;
	 });
	svgWestvirginia.addEventListener('click', function(ev){
	//	svgWestvirginia.style.display = 'none';
		svg1.style.display = 'block';
		return;
	})
	$("path, circle").mouseleave(function(e) {
  $('#info-box').css('display','none');
});
})
WI.addEventListener('click', function(ev){
	hideall();
	hideselect();
	svgWisconsin.style.display = 'block';

	WI.style.fill = '#002868';
	var svgW=window.innerWidth
	var svgH=window.innerHeight
    var bb=svgWisconsin.getBBox()
	var bbx=bb.x
	var bby=bb.y
	var bbw=bb.width
	var bbh=bb.height
    svgWisconsin.setAttribute("viewBox",bbx+" "+bby+" "+bbw+" "+bbh )
    svgWisconsin.setAttribute("width",svgW/1.5)
    svgWisconsin.setAttribute("height",svgH)
		var myArray2    = new Array();
	 paths = svgWisconsin.querySelectorAll('.wisconsin > path');
	 stringstate = ', WI'
	pathlength=paths.length;
		for(var i=0; i<pathlength; ++i) {
		pathdata = paths[i].attributes['data-info2'].value;
		pathdata2 = paths[i].attributes['data-info5'].value;
		if(parseInt(pathdata)< 11){
		pathdata2=pathdata2.replace(stringstate,'')
		if(pathdata== '1'){
			myArray2[1] =pathdata2;
			continue;
		}if(pathdata== '2'){
			myArray2[2] =pathdata2;
			continue;
		}if(pathdata== '3'){
			myArray2[3] =pathdata2;
			continue;
		}if(pathdata== '4'){
			myArray2[4] =pathdata2;
			continue;
		}if(pathdata== '5'){
			myArray2[5] =pathdata2;
			continue;
		}if(pathdata== '6'){
			myArray2[6] =pathdata2;
			continue;
		}if(pathdata== '7'){
			myArray2[7] =pathdata2;
			continue;
		}if(pathdata== '8'){
			myArray2[8] =pathdata2;
			continue;
		}if(pathdata== '9'){
			myArray2[9] =pathdata2;
			continue;
		}if(pathdata== '10'){
			myArray2[10] =pathdata2;
			continue;
		}
		}
	}
	var myTable= "<table><tr><td style='height:15px; color:black; font-variant: small-caps; font-weight: bolder; font-size:larger;'>Top Ranked Counties within the State</td></tr>";
	  for (var i=1; i<12; i++) {
		if (i==11){
			myTable+="<tr><td style='height:15px; color:black; font-variant: small-caps; font-weight: bold; font-style:italic;'>Highlighted county rank within the state (out of "+pathlength+")</td></tr><tr><td style='height:15px;'>&nbsp;</td></tr>";
			myTable+="<tr><td style='height:15px; color:black; font-variant: small-caps; font-weight: bold; font-style:italic;'>Highlighted county rank within the country (out of 3111)</td></tr><tr><td style='heigh:15px;'>&nbsp;</td></tr>";
		}
		else{
		myTable+="<td style='height:15px;'> " +myArray2[i]+ "</td></tr>";
		}
	  }  
	   myTable+="</table>";
	 document.getElementById('mytable').innerHTML = myTable;
	  var var1 = "";
	  var var3 = "";
	  var var4 = "";
	  var nationrank="";
	  var stringcounty ="";
	  
	$("path, circle").mouseenter(function(e) {
	  $('#info-box').css('display','block');
	  if (typeof $(this).data('info5') != 'undefined'){
	  stringcounty = $(this).data('info5').replace(stringstate,'');
	  var1 = $(this).data('info');
	  var3 = $(this).data('info2')
	   var4 = $(this).data('info5')
	   nationrank=suffix(var1);
	  var3=suffix(var3);
	  if (nationrank.length=='6'){
		  nationrank=nationrank.replace(nationrank[0],nationrank[0]+',');
		  }
	  }
	   if (nationrank=="2,927th"){
			  $('#info-box').html(stringcounty +" County: <strong>No harvest reported in survey</strong>");
		  }
		  else{
	  $('#info-box').html(stringcounty +" County ranks <strong>"+var3+"</strong> out of "+pathlength+" counties in the state<br>and <strong>"+nationrank+"</strong> out of 3,111 counties in the U.S.");
		  }
	  
	  
		myTable= "<table><tr><td style='height:15px; color:black; font-variant: small-caps; font-weight: bolder; font-size:larger;'>Top Ranked Counties within the State</td></tr>";
	  for (var i=1; i<12; i++) {
		if (i==11){
			myTable+="<tr><td style='height:15px; color:black; font-variant: small-caps; font-weight: bold; font-style:italic;'>Highlighted county rank within the state (out of "+pathlength+")</td></tr><tr><td style='height:15px;'>&nbsp;" +var4+" - "+var3+ "</td></tr>";
			myTable+="<tr><td style='height:15px; color:black; font-variant: small-caps; font-weight: bold; font-style:italic;'>Highlighted county rank within the country (out of 3111)</td></tr><tr><td style='heigh:15px;'>&nbsp;" +var4+" - "+var1+ "</td></tr>";
		}
		else{
		myTable+="<td style='height:15px;'> " +myArray2[i]+ "</td></tr>";
		}
	  }  
	   myTable+="</table>";
	 document.getElementById('mytable').innerHTML = myTable;
	 });
	svgWisconsin.addEventListener('click', function(ev){
		//svgWisconsin.style.display = 'none';
		svg1.style.display = 'block';
		return;
	})
	$("path, circle").mouseleave(function(e) {
  $('#info-box').css('display','none');
});
})
WY.addEventListener('click', function(ev){
	hideall();
	hideselect();
	svgWyoming.style.display = 'block';

	WY.style.fill = '#002868';
	var svgW=window.innerWidth
	var svgH=window.innerHeight
    var bb=svgWyoming.getBBox()
	var bbx=bb.x
	var bby=bb.y
	var bbw=bb.width
	var bbh=bb.height
    svgWyoming.setAttribute("viewBox",bbx+" "+bby+" "+bbw+" "+bbh )
    svgWyoming.setAttribute("width",svgW/1.5)
    svgWyoming.setAttribute("height",svgH)
	
		var myArray2    = new Array();
	 paths = svgWyoming.querySelectorAll('.wyoming > path');
	 stringstate = ', WY'
	pathlength=paths.length;
		for(var i=0; i<pathlength; ++i) {
		pathdata = paths[i].attributes['data-info2'].value;
		pathdata2 = paths[i].attributes['data-info5'].value;
		if(parseInt(pathdata)< 11){
		pathdata2=pathdata2.replace(stringstate,'')
		if(pathdata== '1'){
			myArray2[1] =pathdata2;
			continue;
		}if(pathdata== '2'){
			myArray2[2] =pathdata2;
			continue;
		}if(pathdata== '3'){
			myArray2[3] =pathdata2;
			continue;
		}if(pathdata== '4'){
			myArray2[4] =pathdata2;
			continue;
		}if(pathdata== '5'){
			myArray2[5] =pathdata2;
			continue;
		}if(pathdata== '6'){
			myArray2[6] =pathdata2;
			continue;
		}if(pathdata== '7'){
			myArray2[7] =pathdata2;
			continue;
		}if(pathdata== '8'){
			myArray2[8] =pathdata2;
			continue;
		}if(pathdata== '9'){
			myArray2[9] =pathdata2;
			continue;
		}if(pathdata== '10'){
			myArray2[10] =pathdata2;
			continue;
		}
		}
	}
	var myTable= "<table><tr><td style='height:15px; color:black; font-variant: small-caps; font-weight: bolder; font-size:larger;'>Top Ranked Counties within the State</td></tr>";
	  for (var i=1; i<12; i++) {
		if (i==11){
			myTable+="<tr><td style='height:15px; color:black; font-variant: small-caps; font-weight: bold; font-style:italic;'>Highlighted county rank within the state (out of "+pathlength+")</td></tr><tr><td style='height:15px;'>&nbsp;</td></tr>";
			myTable+="<tr><td style='height:15px; color:black; font-variant: small-caps; font-weight: bold; font-style:italic;'>Highlighted county rank within the country (out of 3111)</td></tr><tr><td style='heigh:15px;'>&nbsp;</td></tr>";
		}
		else{
		myTable+="<td style='height:15px;'> " +myArray2[i]+ "</td></tr>";
		}
	  }  
	   myTable+="</table>";
	 document.getElementById('mytable').innerHTML = myTable;
	  var var1 = "";
	  var var3 = "";
	  var var4 = "";
	  var nationrank="";
	  var stringcounty ="";
	  
	$("path, circle").mouseenter(function(e) {
	  $('#info-box').css('display','block');
	  if (typeof $(this).data('info5') != 'undefined'){
	  stringcounty = $(this).data('info5').replace(stringstate,'');
	  var1 = $(this).data('info');
	  var3 = $(this).data('info2')
	   var4 = $(this).data('info5')
	   nationrank=suffix(var1);
	  var3=suffix(var3);
	  if (nationrank.length=='6'){
		  nationrank=nationrank.replace(nationrank[0],nationrank[0]+',');
		  }
	  }
	   if (nationrank=="2,927th"){
			  $('#info-box').html(stringcounty +" County: <strong>No harvest reported in survey</strong>");
		  }
		  else{
	  $('#info-box').html(stringcounty +" County ranks <strong>"+var3+"</strong> out of "+pathlength+" counties in the state<br>and <strong>"+nationrank+"</strong> out of 3,111 counties in the U.S.");
		  }
	  
	  
		myTable= "<table><tr><td style='height:15px; color:black; font-variant: small-caps; font-weight: bolder; font-size:larger;'>Top Ranked Counties within the State</td></tr>";
	  for (var i=1; i<12; i++) {
		if (i==11){
			myTable+="<tr><td style='height:15px; color:black; font-variant: small-caps; font-weight: bold; font-style:italic;'>Highlighted county rank within the state (out of "+pathlength+")</td></tr><tr><td style='height:15px;'>&nbsp;" +var4+" - "+var3+ "</td></tr>";
			myTable+="<tr><td style='height:15px; color:black; font-variant: small-caps; font-weight: bold; font-style:italic;'>Highlighted county rank within the country (out of 3111)</td></tr><tr><td style='heigh:15px;'>&nbsp;" +var4+" - "+var1+ "</td></tr>";
		}
		else{
		myTable+="<td style='height:15px;'> " +myArray2[i]+ "</td></tr>";
		}
	  }  
	   myTable+="</table>";
	 document.getElementById('mytable').innerHTML = myTable;
	 });
	svgWyoming.addEventListener('click', function(ev){
		//svgWyoming.style.display = 'none';
		svg1.style.display = 'block';
		return;
	})
	$("path, circle").mouseleave(function(e) {
  $('#info-box').css('display','none');
});
})


function getBBox(elem){
    var svg1 = document.getElementById('svg1'), e = elem.cloneNode(true);
    e.style.display = "inline";
    svg1.appendChild(e);
    var b = e.getBBox();
    svg1.removeChild(e);
    return b;
}

//window.onload = function () {
// var myArray2 = new Array();
//    	myArray2[1] = "Louisiana";
//		myArray2[2] = "California";
//		myArray2[3] = "Texas";
//		myArray2[4] = "Arkansas";
//		myArray2[5] = "Minnesota";
//		
//    	myArray2[6] = "-";
//	  	var myTable2= "<table><tr><td style='height:15px; color:black; font-variant: small-caps; font-weight: bolder; font-size:larger;'></td></tr>";
//	  for (var i=6; i<7; i++) {
//		if (i==6){
//			myTable2+="<tr><td style='height:15px; color:black; font-variant: small-caps; font-weight: bold; font-style:italic;'>Highlighted state rank within the country</td></tr><tr><td style='height:15px;'>&nbsp;" +myArray2[i]+ "</td></tr>";
//		}
//		else{
//		myTable2+="<tr><td style='height:15px;'>" + i + " - " +myArray2[i]+ "</td>";
//		}
//	  }  
//	   myTable2+="</table>";
//
//	 document.getElementById('mytable2').innerHTML = myTable2;
//	 var myArray    = new Array();
//		myArray[1] = "-";
//		myArray[2] = "-";
//		myArray[3] = "-";
//		myArray[4] = "-";
//		myArray[5] = "-";
//		myArray[6] = "-";
//		myArray[7] = "-";
//		myArray[8] = "-";
//		myArray[9] = "-";
//		var myTable= "<table><tr><td style='height:15px; color:black; font-variant: small-caps; font-weight: bolder; font-size:larger;'>Top Ranked Counties within the Nation</td></tr>";
//	  for (var i=1; i<10; i++) {
//		
//		myTable+="<td style='height:15px;'> " + i + " - " +myArray[i]+ "</td></tr>";
//		
//	  }  
//	  myTable+="</table>";
//	 document.getElementById('mytable').innerHTML = myTable;
//}
