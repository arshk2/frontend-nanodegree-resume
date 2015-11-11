/*
	This is empty on purpose! Your code to build the resume will go here.
 

	//var name = "Arsh Khan";
	//var role = "Fallen student";
*/




	skills=["angry attitude","vivid procastinator","worst proggramer","characterless","Pervert"];

	var bio = {
		"name" : "Arsh Khan",
		"role"  :"Fallen student",
		"contacts":{
			"mobile":"932-833-9447",
			"email":"arshkhn2@hotmail.com",
			"github":"arshk2",
			"twitter":"arshkhn2",
			"location":"Ahmedabad"
		},
		"WelcomeMessage":"Bonjour Monsenier!",
		"skills":skills,
		"bioPic":"images/fry.jpg",
		"display": function(){

			var formatedname=HTMLheaderName.replace("%data%",bio.name);
			var formatedrole=HTMLheaderRole.replace("%data%",bio.role);

			$("#header").append(formatedname);
			$("#header").append(formatedrole);

			//  unsafe version of for loop in method commented
/*
			for(var index in bio.contacts)
			{
				if(bio.contacts.hasOwnProperty(index))
				{
					var formatedcontactgeneric=HTMLcontactGeneric.replace("%data%",bio.contacts[index]);
					formatedcontactgeneric=formatedcontactgeneric.replace("%contact%",index);
					$("#header").append(formatedcontactgeneric);
				}
			}
*/
			$.each(bio.contacts, function(index,value){

				var formatedcontactgeneric=HTMLcontactGeneric.replace("%data%",value);
				formatedcontactgeneric=formatedcontactgeneric.replace("%contact%",index);

				$("#header").append(formatedcontactgeneric);
			});

 			var formated_welMsg=HTMLwelcomeMsg.replace("%data%",bio.WelcomeMessage);
 			$("#header").append(formated_welMsg);

 			var formatedPic=HTMLbioPic.replace("%data%",bio.bioPic);
 			$("#header").append(formatedPic);

 			var formatedskills=HTMLskillsStart;
 			bio.skills.forEach( function(item){
 				formatedskills=formatedskills+HTMLskills.replace("%data%",item);
 			});
 			$("#header").append(formatedskills);

		}

	};

	var education={
		"schools":[
			{	"name":"L.J.I.E.T",
				"location":"Ahmedabad",
				"degree":"UnderGraduate",
				"majors":["electrical","electronic"],
				"dates":"2017",
				"url":"fakeurl.xyz"
			},
			{	"name":"Stanfort",
				"location":"San Francisco",
				"degree":"Graduate",
				"majors":["Design","CS"],
				"dates":"2019",
				"url":"stanford.online.edu"
			}
		],
		"onlineCourses":[
			{	"title":"Intro-to-Comp-Science",
				"school":"MITx",
				"date":2016,
				"url":"https://www.edx.org/course/introduction-computer-science-mitx-6-00-1x-6"
			},
			{	"title":"Intro-to-Artificial-Inteligence",
				"school":"UCBerkleyX",
				"date":2016,
				"url":"abc.com/Intro-to-Artificial-Inteligence"
			},
			{	"title":"Intro-to-Computational-Structure",
				"school":"MITx",
				"date":2016,
				"url":"abc.com/Intro-to-Computational-Structure"
			},
			{	"title":"Scalable-Machine-Learning",
				"school":"UCBerkleyX",
				"date":2016,
				"url":"abc.com/Scalable-Machine-Learning"
			},
			{	"title":"Intro-to-big-data-Apache-Spark",
				"school":"UCBerkleyX",
				"date":2016,
				"url":"abc.com/Intro-to-big-data-Apache-Spark"
			},
			{	"title":"Intro-to-Git-and-GitHub",
				"school":"Udacity",
				"date":2016,
				"url":"https://www.udacity.com/course/how-to-use-git-and-github--ud775"
			},
			{	"title":"Learning-how-to-learn",
				"school":"Coursera",
				"date":2016,
				"url":"abc.com/Learning-how-to-learn"
			}
		],
		"display":function(){

			
			education.schools.forEach(function(item){

				$("#education").append(HTMLschoolStart);
				formated_str=HTMLschoolName.replace("%data%",item.name);
				formated_str=formated_str+HTMLschoolDegree.replace("%data%",item.degree);
				$(".education-entry:last").append(formated_str);

				formated_str=HTMLschoolDates.replace("%data%",item.dates);
				$(".education-entry:last").append(formated_str);

				formated_str=HTMLschoolLocation.replace("%data%",item.location);
				$(".education-entry:last").append(formated_str);

				formated_str=HTMLschoolMajor.replace("%data%",item.majors.join(" & "));
				$(".education-entry:last").append(formated_str);

			});

			$("#education").append(HTMLonlineClasses);
			education.onlineCourses.forEach(function(item){

				$("#education").append(HTMLschoolStart);
				formated_str=HTMLonlineTitle.replace("%data%",item.title);
				formated_str=formated_str+HTMLonlineSchool.replace("%data%",item.school);
				$(".education-entry:last").append(formated_str);

				formated_str=HTMLonlineDates.replace("%data%",item.date);
				$(".education-entry:last").append(formated_str);

				formated_str=HTMLonlineURL.replace(/%data%/g,item.url);
				$(".education-entry:last").append(formated_str);

				
			});
		}

	};

	var db1="stepper motor speed controller using Cypress FX2 MCU 8051 "+
			"by genreating variable frequency using timer output. a GUI is "+
			"developed using VC++ microsoft visual Studio to control the speed of "+
			"motor .A scroll is provided in GUI to vary the speed as value increase "+
			"the speed of motor increase.";
	var db2="stepper motor speed controller using Cypress FX2 MCU 8051 "+
			"by genreating variable frequency using timer output. a GUI is "+
			"developed using VC++ microsoft visual Studio to control the speed of "+
			"motor .A scroll is provided in GUI to vary the speed as value increase "+
			"the speed of motor increase.";
	var work ={
		"jobs":[
			{	"employer":"Indian Textile Engineer Pvt Ltd",
				"title":"Intern",
				"location":"Ahmedabad",
				"dates":"2012-2016",
				"describtion":db1
			},
			{	"employer":"Darwin Solution",
				"title":"Imaginary Engineer",
				"location":"Dreamland",
				"dates":"birth-death",
				"describtion":db2
			}
		],
		"display": function(){

			
			work.jobs.forEach(function(item){

				$("#workExperience").append(HTMLworkStart);
				formatedemployer=HTMLworkEmployer.replace("%data%",item.employer);
				//comment out due to format (employer-title) 
				//$(".work-entry:last").append(formatedemployer);
				formatedtitle=HTMLworkTitle.replace("%data%",item.title);
				$(".work-entry:last").append(formatedemployer+formatedtitle);

				formateddate=HTMLworkDates.replace("%data%",item.dates);
				$(".work-entry:last").append(formateddate);

				formatedlocation=HTMLworkLocation.replace("%data%",item.location);
				$(".work-entry:last").append(formatedlocation);

				formateddescribtion=HTMLworkDescription.replace("%data%",item.describtion);
				$(".work-entry:last").append(formateddescribtion);
				
			});
			
		}
	};

	var db3="stepper motor speed controller using Cypress FX2 MCU 8051 "+
			"by genreating variable frequency using timer output. a GUI is "+
			"developed using VC++ microsoft visual Studio to control the speed of "+
			"motor .A scroll is provided in GUI to vary the speed as value increase "+
			"the speed of motor increase.";
	var db4="stepper motor speed controller using Cypress FX2 MCU 8051 "+
			"by genreating variable frequency using timer output. a GUI is "+
			"developed using VC++ microsoft visual Studio to control the speed of "+
			"motor .A scroll is provided in GUI to vary the speed as value increase "+
			"the speed of motor increase.";
	var projects ={
		"projects":[
			{	"title":"Stepper Motor Speed Controller",
				"dates":"2013",
				"describtion":db3,
				"image":"http://placehold.it/350x150"
			},
			{	"title":"Quora Profile Analytics",
				"dates":"2016",
				"describtion":db4,
				"image":"http://placehold.it/350x150"
			},
		],
		"display":function(){

			
			projects.projects.forEach(function(item){

				$("#projects").append(HTMLprojectStart);
				var formated_proj_str=HTMLprojectTitle.replace("%data%",item.title);
				$(".project-entry:last").append(formated_proj_str);

				var formated_proj_str=HTMLprojectDates.replace("%data%",item.dates);
				$(".project-entry:last").append(formated_proj_str);

				var formated_proj_str=HTMLprojectDescription.replace("%data%",item.describtion);
				$(".project-entry:last").append(formated_proj_str);

				var formated_proj_str=HTMLprojectImage.replace("%data%",item.image);
				$(".project-entry:last").append(formated_proj_str);

				
			});
		}
	};


	

	var inName= function(){
		arr=bio.name.split(" ");

		return arr[0][0].toUpperCase()+arr[0].slice(1).toLowerCase()+" "+arr[1].toUpperCase();
	}


	bio.display();
	work.display();
	projects.display();
	education.display();

	$("#main").prepend(internationalizeButton);
	$("#mapDiv").append(googleMap);
/*

	var awesomeThoughts = "\nI am Arsh and I am AWESOME";
	var age     = 19;

	console.log(awesomeThoughts);
	console.log(age);

	var email = "arshkhn2@hotmail.com";
	var newemail = email.replace("hotmail","gmail");

	console.log(email);
	console.log(newemail);

	var funThoughts = awesomeThoughts.replace("AWESOME","FUN");

	$("#main").append(funThoughts);


	var formattedname= HTMLheaderName.replace("%data%",bio.name);
	var formattedrole= HTMLheaderRole.replace("%data%",bio.role);


	$("#header").prepend(formattedrole);
	$("#header").prepend(formattedname);

	$("#main").prepend(bio.name);
	$("#main").prepend(bio.name);
	$("#main").prepend(bio.skills);
	$("#main").prepend(bio.role);
	$("#main").prepend(bio.name);
*/