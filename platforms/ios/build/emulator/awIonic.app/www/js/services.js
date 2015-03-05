angular.module('starter.services', [])

.factory('Chats', function() {

        var chats = [{
                id: 0,
                name: 'Ben Sparrow',
                lastText: 'You on your way?',
                face: 'https://pbs.twimg.com/profile_images/514549811765211136/9SgAuHeY.png'
        }, {
                id: 1,
                name: 'Max Lynx',
                lastText: 'Hey, it\'s me',
                face: 'https://avatars3.githubusercontent.com/u/11214?v=3&s=460'
        }, {
                id: 2,
                name: 'Andrew Jostlin',
                lastText: 'Did you get the ice cream?',
                face: 'https://pbs.twimg.com/profile_images/491274378181488640/Tti0fFVJ.jpeg'
        }, {
                id: 3,
                name: 'Adam Bradleyson',
                lastText: 'I should buy a boat',
                face: 'https://pbs.twimg.com/profile_images/479090794058379264/84TKj_qa.jpeg'
        }, {
                id: 4,
                name: 'Perry Governor',
                lastText: 'Look at my mukluks!',
                face: 'https://pbs.twimg.com/profile_images/491995398135767040/ie2Z_V6e.jpeg'
        }];

        return {
                all: function() {
                        return chats;
                },
                remove: function(chat) {
                        chats.splice(chats.indexOf(chat), 1);
                },
                get: function(chatId) {
                        for (var i = 0; i < chats.length; i++) {
                                if (chats[i].id === parseInt(chatId)) {
                                        return chats[i];
                                }
                        }
                        return null;
                }
        }
})

.factory('Friends', function() {

        var friends = [{
                id: 0,
                name: 'Ben Sparrow',
                notes: 'Enjoys drawing things',
                face: 'https://pbs.twimg.com/profile_images/514549811765211136/9SgAuHeY.png'
        }, {
                id: 1,
                name: 'Max Lynx',
                notes: 'Odd obsession with everything',
                face: 'https://avatars3.githubusercontent.com/u/11214?v=3&s=460'
        }, {
                id: 2,
                name: 'Andrew Jostlen',
                notes: 'Wears a sweet leather Jacket. I\'m a bit jealous',
                face: 'https://pbs.twimg.com/profile_images/491274378181488640/Tti0fFVJ.jpeg'
        }, {
                id: 3,
                name: 'Adam Bradleyson',
                notes: 'I think he needs to buy a boat',
                face: 'https://pbs.twimg.com/profile_images/479090794058379264/84TKj_qa.jpeg'
        }, {
                id: 4,
                name: 'Perry Governor',
                notes: 'Just the nicest guy',
                face: 'https://pbs.twimg.com/profile_images/491995398135767040/ie2Z_V6e.jpeg'
        }];


        return {
                all: function() {
                        return friends;
                },
                get: function(friendId) {
                        // Simple index lookup
                        return friends[friendId];
                }
        }
})

.factory('Aw', function() {

        var me = {

                name: "Adam Winick",
                description: "hybrid sr interactive designer / developer",
                intro: "I bring a unique hybrid of applying passion and strength to both Interactive Design and Front End Development. A designer and developer of creative technology.  I adopt a device and screen agnostic approach using a holistic combination of both design, and development. My approach is adaptive and performant.  My current stack focus is engaging advanced Javascript using MEAN stack: Angular/Node/Express/Mongo, Ionic, Famo.us, Velocity.js, GSAP, Phonegap/Cordova, Node/Express and Socket.io.",
                logoUrl: "http://www.adamwinick.com/svg/adamWinickLogo.svg",
                homePageLinks: ["dev/blog", "work", "skills"]

        };
        var skills = [{
                id: 1,
                title: "Web/WebApp/SPA/Mobile/Touch User Interface Engineering: Design and Front End Development",
                skillList: [
                        "Adaptive and/or responsive prototyping / MVP for any device / screen size",
                        "Fullstack and front end UI and WebApp / Single Page Applications using JSON driven API back end build/dev",
                        "Any screen / device UI frameworks: Bootstrap, Foundation, Polymer or any UI framework of preference",
                        "Mobile Specific: Sencha, Ratchet, Famo.us, Ionic, Ember or Angular + Phonegap or Cordova",
                        "Node: RESTful API development using Node + Express, Hapi, Restify, and Koa",
                        "Wordpress:  core customization and custom theme / templates"
                ]
        }, {
                id: 2,
                title: "Front End UI/UX Technologies",
                skillList: [
                        "HTML5 (DOM, BOM, CSSOM, dataTypes and data binding/persistence, advanced browser / vendor API's \"Chrome / Mozilla specific\" )",
                        "Deep working and production knowledge of the most popular APIs available: Facebook, Twitter, Google (Maps), videoJS",
                        "Advanced OO JavaScript for the browser/DOM using Crockford / Osamni / Resig / JSiS best practices",
                        "CSS3 enhanced for performance and mobile ( modernizr, polyfills, preprocessors: LESS, SASS/Compass )",
                        "Markdown for enhanced security",
                        "Enhancements, interaction and elegent UI transitions using CSS3, HTML5, Canvas, WebGL and JS: custom matrix2d/3d transforms usin rAf)",
                        "Customized animations Canvas, HTML5 and CSS3 or using a framework such as Famo.us, Velocity.js, GSAP, jQuery or native JS"
                ]
        }, {
                id: 3,
                title: "Javascript (Frameworks, stack and tools)",
                skillList: [
                        "Desktop / WebApp / SPA: Stack of choice is: MEAN.js, Node, Angular, Ember, Express, MongoDB/Mongoose",
                        "Mobile / Touch: Stack of choice is Ionic/Angular, Famo.us / Angular,  Ember / PhoneGap/Cordova",
                        "Any screen / device UI frameworks: Bootstrap, Foundation, Polymer or any UI framework of preference",
                        "Tooling: Grunt, Gulp, Yeoman, npm, bower, AWS, git (gitHub)",
                        "Node: RESTful API development using Node + Express, Hapi, Restify, Koa",
                        "Dependency Injection: CommonJS, AMD, Browserify"
                ]
        }];

        var work = [{
                        id: 1,
                        slug: null,
                        projectName: "2015 PanAm Games: by Chevrolet",
                        client: "General Motors",
                        agency: "Maclaren McCann",
                        roll: "Front End Developer",
                        technology: "HTML, CSS3, JavaScript, jQuery, XML, AJAX, Java + Struts",
                        description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy.  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy.  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy.  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy.  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy",
                        thumbnail: "Thumbnail Image",
                        images: ["Project Image"]
                },

                {
                        id: 2,
                        slug: null,
                        projectName: "GM Vehicle Comparison WebApp",
                        client: "General Motors",
                        agency: "Maclaren McCann",
                        roll: "Fullstack Developer",
                        technology: "HTML5, CSS3, Bootstrap, JavaScript, jQuery, XML, AJAX, Java + Struts, Ember.js",
                        description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy.  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy.  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy.  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy.  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy",
                        thumbnail: "Thumbnail Image",
                        images: ["Project Image"]
                },

                {
                        id: 3,
                        slug: null,
                        projectName: "Throwback Thursday",
                        client: "Internal Project",
                        agency: "Maclaren McCann",
                        roll: "UI Designer, Fullstack Developer",
                        technology: "HTMl5, CSS3, Javascript, Node, Express, Highcharts.js",
                        description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy.  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy.  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy.  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy.  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy",
                        thumbnail: "Thumbnail Image",
                        images: ["Project Image"]
                },

                {
                        id: 4,
                        slug: null,
                        projectName: "GM Mobile Preferred Pricing Microsite",
                        client: "General Motors",
                        agency: "Maclaren McCann",
                        roll: "Front End Developer",
                        technology: "HTML, CSS3, JavaScript, jQuery, XML, AJAX, Java + Struts",
                        description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy.  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy.  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy.  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy.  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy",
                        thumbnail: "Thumbnail Image",
                        images: ["Project Image"]
                },

                {
                        id: 5,
                        slug: null,
                        projectName: "General Motors 2014 Owners Center",
                        client: "General Motors",
                        agency: "Maclaren McCann",
                        roll: "Front End Developer",
                        technology: "HTML, CSS, JavaScript, jQuery, XML, AJAX, Java + Struts",
                        description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy.  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy.  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy.  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy.  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy",
                        thumbnail: "Thumbnail Image",
                        images: ["Project Image"]
                },

                {
                        id: 6,
                        slug: null,
                        projectName: "Jobliss: WebApp: UI development",
                        client: "http://www.gojobbliss.com/",
                        agency: "Lush Concepts",
                        roll: "UI Design and Front End Development for user logged in view/state: Calendar and Scheduling UI",
                        technology: "Bootstrap, FullCalendar.js, JavaScript, jQuery, Rails",
                        description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy.  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy.  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy.  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy.  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy",
                        thumbnail: "Thumbnail Image",
                        images: ["Project Image"]
                },

                {
                        id: 7,
                        slug: null,
                        projectName: "Manage Your Gambling Urges: iOS App",
                        client: "CAMH",
                        agency: "Lush Concepts",
                        roll: "UI Designer",
                        technology: "Obj C, Cocoa 2d, Sketch",
                        description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy.  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy.  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy.  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy.  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy",
                        thumbnail: "Thumbnail Image",
                        images: ["Project Image"]
                },

                {
                        id: 8,
                        slug: null,
                        projectName: "Break It Off: iOS/Android App",
                        client: "Canadian Cancer Society",
                        agency: "Lush Concepts",
                        roll: "UI Designer",
                        technology: "HTML5, CSS3, JavaScript, jQuery Mobile, PhoneGap/Cordova",
                        description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy.  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy.  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy.  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy.  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy",
                        thumbnail: "Thumbnail Image",
                        images: ["Project Image"]
                },

                {
                        id: 9,
                        slug: null,
                        projectName: "Earl's Restaurants Responsive Joomla Template and Integration",
                        client: "Earl's Restaurants",
                        agency: "Leo Burnett",
                        roll: "Front End Developer",
                        technology: "HTML5, CSS3, Bootstrap, JavaScript, jQuery, Joomla, PHP/MySQL",
                        description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy.  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy.  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy.  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy.  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy",
                        thumbnail: "Thumbnail Image",
                        images: ["Project Image"]
                },

                {
                        id: 10,
                        slug: null,
                        projectName: "Redvault: Visual Asset Management WebApp",
                        client: "Internal Project",
                        agency: "Ogilvy",
                        roll: "Fullstack Developer, UI Designer, UI Developer, Technical Architecture",
                        technology: "HTML5, CSS3, Bootstrap, JavaScript, jQuery, Ember.js",
                        description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy.  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy.  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy.  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy.  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy",
                        thumbnail: "Thumbnail Image",
                        images: ["Project Image"]
                }
        ];

        return {

                allMe: function() {
                        return me
                },
                allSkills: function() {
                        return skills
                },
                allWork: function() {
                        return work
                }

        }

});