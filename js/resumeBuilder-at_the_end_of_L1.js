/* var name ="Janhavi Joshi"
var formattedName = HTMLheaderName.replace("%data%", name);
$("#header").append(formattedName);

var role = "Web Developement Explorer";
var formattedRole = HTMLheaderRole.replace("%data%", role);
$("#header").append(formattedRole);

var skills = ["awesomeness", "programming", "teaching", "JS", "innovating", "understanding"];
$("#main").append(skills);
$("#main").append(skills[0]);
console.log(skills.length);
var skills = ["reading books", "painting", "cooking healthy food ", "cooking unhealthy yet tasty food ", "silliness ", "understanding my kid ", "loving my kid ", "generating excitement ", "you name it - I have it!"];
*/


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

$("#header").append(HTMLheaderName.replace("%data%", bio.name));
$("#header").append(HTMLheaderRole.replace("%data%", bio.role));
$("#header").append(HTMLemail.replace("%data%", bio.contacts.email));
$("#header").append(HTMLmobile.replace("%data%", bio.contacts.mobile));
$("#header").append(HTMLgithub.replace("%data%", bio.contacts.github));
$("#header").append(HTMLlocation.replace("%data%", bio.contacts.location));
$("#header").append(HTMLbioPic.replace("%data%", bio.bioPic));
$("#header").append(HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage));
$("#header").append(HTMLskillsStart);

function appendSkill(_skill){
	$("#header").append(HTMLskills.replace("%data%", _skill));
}

bio.skills.forEach(appendSkill);

var work = {};
work.employer = "That Little Girl";
work.title = "Mama";
work.dates = "Jan 2011 - Present";
work.description = "Do whatever it takes to make things fun! Arrange interesting art projects.\
Cook with my daughter while ensuring her safety. Think about parenting strategies to ensure \
that none of the family memebers are going crazy. Try to not act out the emotions. Make chores fun. \
Think about the future and DREAM BIG!";

$("#workExperience").append(HTMLworkStart);
var formattedEmployerTitle = HTMLworkEmployer.replace("%data%", work.employer) + HTMLworkTitle.replace("%data%", work.title);

$("#workExperience").append(formattedEmployerTitle);
$("#workExperience").append(HTMLworkDates.replace("%data%", work.dates));
$("#workExperience").append(HTMLworkDescription.replace("%data%", work.description));

var education = {};
education["schoolName"] = "Grandma's and Great Grandma's School of Parenting";
education["schoolDegree"] = "Jack of Parenting";
education["schoolDates"] = "From Birth to Present";
education["schoolLocation"] = "Mumbai, India";
education["schoolMajor"] = "Efficient Chores";

$("#education").append(HTMLschoolStart);

var formattedSchoolNameDegree = HTMLschoolName.replace("%data%", education.schoolName) + HTMLschoolDegree.replace("%data%", education.schoolDegree);
$("#education").append(formattedSchoolNameDegree);
//$("#education").append(HTMLschoolDegree.replace("%data%", education.schoolDegree));
$("#education").append(HTMLschoolDates.replace("%data%", education.schoolDates));
$("#education").append(HTMLschoolLocation.replace("%data%", education.schoolLocation));
$("#education").append(HTMLschoolMajor.replace("%data%", education.schoolMajor));

var onlineEd = {};
onlineEd["title"] = "Ph.D. in Diapering without Chemicals";
onlineEd["school"] = "Babycenter University";
onlineEd["dates"] = "May 2011 - May 2013";
var formattedOnlineTitleSchool =  HTMLonlineTitle.replace("%data%", onlineEd.title) + HTMLonlineSchool.replace("%data%", onlineEd.school);

$("#education").append(HTMLonlineClasses);
$("#education").append(formattedOnlineTitleSchool);
$("#education").append(HTMLonlineDates.replace("%data%", onlineEd.dates));

var onlineEd2 = {};
onlineEd2["title"] = "Healthy Eating for Kids";
onlineEd2["school"] = "What to Expect in first few years";
onlineEd2["dates"] = "May 2011 - Present";
var formattedOnlineTitleSchool2 =  HTMLonlineTitle.replace("%data%", onlineEd2.title) + HTMLonlineSchool.replace("%data%", onlineEd2.school);

$("#education").append(formattedOnlineTitleSchool2);
$("#education").append(HTMLonlineDates.replace("%data%", onlineEd2.dates));


var education = {
	"schools": [
		{
			"name": "Grandma's and Great Grandma's School of Parenting",
			"city": "Mumbai",
			"degree": "Work Smart",
			"major": ["Efficient Chores", "Healthy cooking"]
		},
		{
			"name": "Aunt Shaila's Cool School",
			"city": "Mumbai",
			"degree": "Masters in Random Complex Thinking",
			"major": ["Making Complexities of life Fun", "Work Smart"]
		}
	],
    "onlineClasses": [
        {
            "title": "Healthy Eating for Kids",
            "school": "What to Expect in first few years",
            "dates": "May 2011 - Present"
        },
        {
            "title": "Ph.D. in Diapering without Chemicals",
            "school": "Babycenter University",
            "dates": "May 2011 - May 2013"
        }
    ]
};





























