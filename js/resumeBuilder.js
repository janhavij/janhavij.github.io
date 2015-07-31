
var bio = {
	"name" : "Janhavi Joshi",
	"role" : "Super Mom",
	"age" : 32,
	"skills" : ["reading picture books", "painting", "cooking tasty meals", "silliness"],
	"contacts" : {
		"mobile" : "650-555-5555",
		"email": "janhavij@udacity.com",
		"github": "janhavij",
		"location": "Planet Earth"
	},
	"bioPic" : "images/me.jpg",
	"welcomeMessage" : "Welcome to mommy side of me!"
};

var bio = {
	"name" : "Janhavi Joshi",
	"role" : "Super Mom",
	"age" : 32,
	"skills" : ["reading picture books", "painting", "cooking tasty meals", "silliness", "doing nothing"],
	"contacts" : {
		"mobile" : "650-555-5555",
		"email": "janhavij@udacity.com",
		"github": "janhavij",
		"location": "Planet Earth"
	},
	"bioPic" : "images/me.jpg",
	"welcomeMessage" : "Welcome to mommy side of me!"
};

$("#header").append(HTMLheaderName.replace("%data%", bio.name));
$("#header").append(HTMLheaderRole.replace("%data%", bio.role));
$("#header").append(HTMLemail.replace("%data%", bio.contacts.email));
$("#header").append(HTMLmobile.replace("%data%", bio.contacts.mobile));
$("#header").append(HTMLgithub.replace("%data%", bio.contacts.github));
$("#header").append(HTMLlocation.replace("%data%", bio.contacts.location));
$("#header").append(HTMLbioPic.replace("%data%", bio.bioPic));
$("#header").append(HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage));

function appendSkill(_skill) {
	$("#header").append(HTMLskills.replace("%data%", _skill));
}

if (bio.skills) {
	$("#header").append(HTMLskillsStart);
	bio.skills.forEach(appendSkill);
};



var work = {
	"jobs": [
			{
			"employer": "That Little Girl",
			"title": "Mama",
			"dates": "Jan 2011 - Present",
			"location": "Magical World",
			"description": "Do whatever it takes to make things fun! Arrange interesting art projects.\
				Cook with my daughter while ensuring her safety. Think about parenting strategies to ensure \
				that none of the family memebers are going crazy. Try to not act out the emotions. Make chores fun. \
				Think about the future and DREAM BIG!"
			},
				{
			"employer": "That nice guy",
			"title": "Wife",
			"dates": "Dec 2008 - Present",
			//"location": "Moon",
			"description": "Build a strong relationship. Turn a house into a home. Respect and earn respect :)"
		}

		]
	};


function displayWork(){
	for(var job in work.jobs){
		$("#workExperience").append(HTMLworkStart);
		$(".work-entry:last").append(HTMLworkEmployer.replace("%data%", work.jobs[job].employer)+
		 HTMLworkTitle.replace("%data%", work.jobs[job].title));
		$(".work-entry:last").append(HTMLworkDates.replace("%data%", work.jobs[job].dates));
		if(work.jobs[job].location){
			$(".work-entry:last").append(HTMLworkLocation.replace("%data%", work.jobs[job].location));
		}
		$(".work-entry:last").append(HTMLworkDescription.replace("%data%", work.jobs[job].description));
	}
}

displayWork();

var projects = {"projects": [
	{
		"title": "Baking Cakes",
		"dates": "Whenever WE think it is the right time",
		"description": "Baking tasty and great looking cakes. We have so far made Jiraffe, Butterfly, Honeybee, Owl(asthetic failure!) cakes. Also, different kinds of cupcakes were made successfully - which really means we had fun making those.",
		"images": ["images/jiraffeCake.jpeg", "images/pineappleUpsideDown.jpeg"]
	},
	{
		"title": "Visiting Parks",
		"dates": "rain or shine - we just have to go all the time",
		"description": "Visited various parks with different play structures. We did whatever we felt like doing and that was the purpose of this project. It has been one of the most successful projects in my life. It makes us happy and our kid falls a sleep quicker than other days.",
		"images": ["images/vasona.jpg", "images/memorialPark.jpg"]
	}
]
};

projects.display = function(){
	for (project in projects.projects){

			$("#projects").append(HTMLprojectStart);
			$(".project-entry:last").append(HTMLprojectTitle.replace("%data%", projects.projects[project].title));
			$(".project-entry:last").append(HTMLprojectDates.replace("%data%", projects.projects[project].dates));
			$(".project-entry:last").append(HTMLprojectDescription.replace("%data%", projects.projects[project].description));

			for (image in projects.projects[project].images){
			$(".project-entry:last").append(HTMLprojectImage.replace("%data%", projects.projects[project].images[image]));
			}
		}
	}


projects.display();

var education = {
	"schools": [
		{
			"name": "Grandma's and Great Grandma's School of Parenting",
			"city": "Mumbai",
			"degree": "Work Smart",
			"major": ["Efficient Chores", "Healthy cooking"], 
			"dates": "About 18 years of my life"
		},
		{
			"name": "Aunt Shaila's Cool School",
			"city": "Mumbai",
			"degree": "Masters in Random Complex Thinking",
			"major": ["Making Complexities of life Fun", "Work Smart"],
			"dates": "About 10 years of my life"
		}
	],
    "onlineClasses": [
        {
            "title": "Healthy Eating for Kids",
            "school": "What to Expect in first few years",
            "dates": "May 2011 - Present", 
            "url": "www.amazon.com"
        },
        {
            "title": "Ph.D. in Diapering without Chemicals",
            "school": "Babycenter University",
            "dates": "May 2011 - May 2013",
            "url": "http://www.babycenter.com/"
        }
    ]
};

education.display = function(){
	for (school in education.schools){
		console.log(school);
		$("#education").append(HTMLschoolStart);
		$(".education-entry:last").append(HTMLschoolName.replace("%data%", education.schools[school].name) +
			HTMLschoolDegree.replace("%data%", education.schools[school].degree));
		$(".education-entry:last").append(HTMLschoolDates.replace("%data%", education.schools[school].dates));
		$(".education-entry:last").append(HTMLschoolLocation.replace("%data%", education.schools[school].city));
		$(".education-entry:last").append(HTMLschoolMajor.replace("%data%", education.schools[school].major));
	}
	
	$("#education").append(HTMLonlineClasses);
	for (_class in education.onlineClasses){
		$("#education").append(HTMLschoolStart);
		$(".education-entry:last").append(HTMLonlineTitle.replace("%data%", education.onlineClasses[_class].title) + 
			HTMLonlineSchool.replace("%data%", education.onlineClasses[_class].school));
		$(".education-entry:last").append(HTMLonlineDates.replace("%data%", education.onlineClasses[_class].dates));
		$(".education-entry:last").append(HTMLonlineURL.replace("%data%", education.onlineClasses[_class].url));
	}
};

education.display();























