//var name = 'Christina Goeders'
//var role = 'Web Developer'

//var formattedName = HTMLheaderName.replace('%data%', name);
//var formattedRole = HTMLheaderRole.replace('%data%', role);

//$('#header').prepend(formattedRole);
//$('#header').prepend(formattedName);


var work = {
	'jobs': [
		{
			'employer': 'Stanford University; Department of Biology',
			'title': 'Course Coordinator and Assistant; Human Genome and Disease Course Sequence',
			'location': 'Stanford, CA, USA',
			'dates': 'January 2012 - Present',
			'description': 'Design two-quarter course sequence consisting of lectures ' +
				'from faculty and researchers in academia and industry. Create course ' +
				'assessments and coordinate with faculty in biomedical and information ' +
				'sciences. Course sequence addresses stem cell biology and regenerative ' +
				'medicine, epigenetics, cancer genomics, bioethics, bioinformatics and ' +
				'big data analysis, sequencing technologies, and pharmacogenomics.'
		},
		{
			'employer': 'Stanford University, School of Medicine; Department of Medicine -- ' +
				'Gastroenterology & Hepatology',
			'title': 'Clinical Research Assistant',
			'location': 'Stanford, CA, USA',
			'dates': 'June - December 2014',
			'description': 'Conducted Stanford and NIH research projects relating to ' +
				'pancreatic cysts and pancreatitis. Coordinated with faculty, physicians, '+
				'nurses, and medical staff to recruit, obtain consent from, and interview ' +
				'patients in hospital and clinic settings. Collected and processed blood ' +
				'and tissue samples for use in biomarker experiments. Maintained RedCap ' +
				'and VSIMS databases.'
		},
		{
			'employer': 'Stanford University; Department of Biology',
			'title': 'Teaching Assistant; Human Physiology Course',
			'location': 'Stanford, CA, USA',
			'dates': 'January - March 2012, January - March 2011',
			'description': 'Worked in a team of five TAs to teach core medical physiology ' +
				'concepts to a class of 200 premedical students (undergraduates and graduates). ' +
				'Designed course assessments, led multiple weekly discussion sections, and ' +
				'co-led large-group, formalized review sessions.'
		},
		{
			'employer': 'Stanford University; Department of Biology',
			'title': 'Teaching Assistant; Introduction to Brain and Behavior',
			'location': 'Stanford, CA, USA',
			'dates': 'September - December 2010',
			'description': 'Worked in a team of four TAs to introduce neuroscience principles ' +
				'to undergraduate and graduate students.'
		},
		{
			'employer': 'Stanford University, School of Medicine; Department of Surgery',
			'title': 'Teaching Staff Member; Emergency Medical Technician (EMT) Training',
			'location': 'Stanford, CA, USA',
			'dates': 'September 2012 - June 2014',
			'description': 'Worked in a team of 10-15 TAs to practically train EMT-B stduents ' +
				'throughout year-long course.'
		},
		{
			'employer': 'AJ Tutoring, LLC.',
			'title': 'Professional Private Tutor',
			'location': 'Palo Alto, CA, USA',
			'dates': 'October 2013 - March 2014',
			'description': 'Tutored high school students one-on-one in calculus and physics.'
		},
		{
			'employer': 'HealthTap, Inc.',
			'title': 'Bioinformatics Intern',
			'location': 'Palo Alto, CA, USA',
			'dates': 'June - September 2013',
			'description': 'Analyzed large data sets of doctor- and user-generated health ' +
				'information to optimize search and personalization algorithms.'
		},
		{
			'employer': 'Stanford University, School of Medicine; Department of Neurosurgery',
			'title': 'Undergraduate Research Assistant; Chan Lab',
			'location': 'Stanford, CA, USA',
			'dates': 'October 2007 - May 2010',
			'description': 'Investigated mechanisms of oxidative stress in mouse models of ' +
				'ischemic stroke. Performed immunohistochemistry on fixed, paraffin-embedded ' +
				'tissue sections and conducted immunofluorescence on frozen sections following ' +
				'occlusion and reperfusion of middle cerebral artery in SOD2-KO mice.'
		},
		{
			'employer': 'Stanford University; Residential Education and Undergraduate Advising ' +
				'and Research',
			'title': 'Head Peer Academic Coordinator',
			'location': 'Stanford, CA, USA',
			'dates': 'September 2008 - June 2009',
			'description': 'Organized academic events and helped advise 170 freshmen living ' +
				'in a Stanford residence hall.'
		}
	]
}



var projects = {
	'projects': [
		{
			'title': 'Udacity Front-End Web Developer, Project 1: Mockup Page',
			'dates': 'January 2015',
			'description': 'Created mockup of website using HTML and CSS principles.',
			'images': []
		},
		{
			'title': 'Udacity Front-End Web Developer, Project 2: Interactive Resume',
			'dates': 'February 2015',
			'description': 'Built interactive online resume using JavaScript, jQuery, ' +
				'HTML, and CSS.'
			'images': []
		},
		{
			'title': 'Photography Portfolio',
			'dates': '2009 - Present',
			'description': 'Created collection of photos I\'ve taken with DSLRs, iPhones, ' +
				'medium-format cameras, and point-and-shoots.',
			'images': []
		}
	]
}



var bio = {
	'name': 'Christina Goeders',
	'role': 'Web Developer',
	'welcomeMessage': '\'One ought, every day at least, to hear a little song, ' +
		'read a good poem, see a fine picture, and, if it were possible, to speak ' +
		'a few reasonable words.\' --Johann Wolfgang von Goethe',
	'contacts':
		{
			'mobile': '(650)427-0270',
			'email': 'xgoeders@gmail.com',
			'github': 'cgoeders',
			'location': 'Palo Alto, CA, USA'
		},
	'skills':
		[
			'programming', 'teaching', 'classical piano performance', 'cooking',
			'digital photography', 'π digit memorization'
		],
	'bioPic': 'images/me.jpg'
}



var education = {
	'schools': [
		{
			'name': 'Stanford University',
			'location': 'Stanford, CA, USA',
			'degree': 'MS',
			'majors': ['Biology'],
			'dates': '2012',
			'url': 'http://www.stanford.edu'
		},
		{
			'name': 'Stanford University',
			'location': 'Stanford, CA, USA',
			'degree': 'BS',
			'majors': ['Biological Sciences'],
			'dates': '2010',
			'url': 'http://www.stanford.edu'
		}
	],
	'online courses': [
		{
			'title': 'Intro to Computer Science',
			'school': 'Udacity',
			'dates': '2014',
			'url': 'http://www.udacity.com/course/cs101'
		},
		{
			'title': 'Intro to HTML and CSS',
			'school': 'Udacity',
			'dates': '2014',
			'url': 'http://www.udacity.com/course/ud304'
		},
		{
			'title': 'JavaScript Basics',
			'school': 'Udacity',
			'dates': '2015',
			'url': 'http://www.udacity.com/course/ud804'
		}
	]
}

//from instructor's video:

var education = {
	"schools": [
	{
		"name": "blah",
		"city": "blah",
		"degree": "blah",
		"major": ["blah1", "blah2"]
	}
	]
}








$("#main").append(work.jobs);


//console.log('')
