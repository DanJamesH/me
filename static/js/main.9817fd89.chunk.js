(this.webpackJsonpme=this.webpackJsonpme||[]).push([[0],{10:function(e,a,t){e.exports=t(19)},15:function(e,a,t){},18:function(e,a,t){},19:function(e,a,t){"use strict";t.r(a);var n=t(0),i=t.n(n),r=t(9),o=t.n(r),s=(t(15),t(1)),l=t(2),c=t(4),m=t(3),d=t(7),u=(t(18),function(e){Object(c.a)(t,e);var a=Object(m.a)(t);function t(){return Object(s.a)(this,t),a.apply(this,arguments)}return Object(l.a)(t,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.name,a=this.props.data.occupation,t=this.props.data.description,n=this.props.data.address.city,r=this.props.data.social.map((function(e){return i.a.createElement("li",{key:e.name},i.a.createElement("a",{href:e.url},i.a.createElement("i",{className:e.className})))}));return i.a.createElement("header",{id:"home"},i.a.createElement("nav",{id:"nav-wrap"},i.a.createElement("a",{className:"mobile-btn",href:"#nav-wrap",title:"Show navigation"},"Show navigation"),i.a.createElement("a",{className:"mobile-btn",href:"#home",title:"Hide navigation"},"Hide navigation"),i.a.createElement("ul",{id:"nav",className:"nav"},i.a.createElement("li",{className:"current"},i.a.createElement("a",{className:"smoothscroll",href:"#home"},"Home")),i.a.createElement("li",null,i.a.createElement("a",{className:"smoothscroll",href:"#about"},"About")),i.a.createElement("li",null,i.a.createElement("a",{className:"smoothscroll",href:"#resume"},"Resume")),i.a.createElement("li",null,i.a.createElement("a",{className:"smoothscroll",href:"#portfolio"},"Works")),i.a.createElement("li",null,i.a.createElement("a",{className:"smoothscroll",href:"#testimonials"},"Testimonials")))),i.a.createElement("div",{className:"row banner"},i.a.createElement("div",{className:"banner-text"},i.a.createElement("h1",{className:"responsive-headline"},"I'm ",e,"."),i.a.createElement("h3",null,"I'm a ",n," based ",i.a.createElement("span",null,a),". ",t,"."),i.a.createElement("hr",null),i.a.createElement("ul",{className:"social"},r))),i.a.createElement("p",{className:"scrolldown"},i.a.createElement("a",{className:"smoothscroll",href:"#about"},i.a.createElement("i",{className:"icon-down-circle"}))))}}]),t}(n.Component)),p=function(e){Object(c.a)(t,e);var a=Object(m.a)(t);function t(){return Object(s.a)(this,t),a.apply(this,arguments)}return Object(l.a)(t,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.social.map((function(e){return i.a.createElement("li",{key:e.name},i.a.createElement("a",{href:e.url},i.a.createElement("i",{className:e.className})))}));return i.a.createElement("footer",null,i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"twelve columns"},i.a.createElement("ul",{className:"social-links"},e),i.a.createElement("ul",{className:"copyright"},i.a.createElement("li",null,"\xa9 Copyright 2017 Tim Baker"),i.a.createElement("li",null,"Design by ",i.a.createElement("a",{title:"Styleshout",href:"http://www.styleshout.com/"},"Styleshout")))),i.a.createElement("div",{id:"go-top"},i.a.createElement("a",{className:"smoothscroll",title:"Back to Top",href:"#home"},i.a.createElement("i",{className:"icon-up-open"})))))}}]),t}(n.Component),h=function(e){Object(c.a)(t,e);var a=Object(m.a)(t);function t(){return Object(s.a)(this,t),a.apply(this,arguments)}return Object(l.a)(t,[{key:"render",value:function(){if(this.props.data){this.props.data.name;var e="images/"+this.props.data.image,a=this.props.data.bio,t=this.props.data.address.street,n=(this.props.data.address.city,this.props.data.address.state,this.props.data.address.zip,this.props.data.phone),r=this.props.data.email;this.props.data.resumedownload}return i.a.createElement("section",{id:"about"},i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"three columns"},i.a.createElement("img",{className:"profile-pic",src:e,alt:"Tim Baker Profile Pic"})),i.a.createElement("div",{className:"nine columns main-col"},i.a.createElement("h2",null,"About Me"),i.a.createElement("p",null,a),i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"columns contact-details"},i.a.createElement("h2",null,"Contact Details"),i.a.createElement("p",{className:"address"},i.a.createElement("span",null,r),i.a.createElement("br",null),i.a.createElement("span",null,t),i.a.createElement("br",null),i.a.createElement("span",null,n)))))))}}]),t}(n.Component),g=function(e){Object(c.a)(t,e);var a=Object(m.a)(t);function t(){return Object(s.a)(this,t),a.apply(this,arguments)}return Object(l.a)(t,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.skillmessage,a=this.props.data.education.map((function(e){return i.a.createElement("div",{key:e.school},i.a.createElement("h3",null,e.school),i.a.createElement("p",{className:"info"},e.degree," ",i.a.createElement("span",null,"\u2022"),i.a.createElement("em",{className:"date"},e.graduated)),i.a.createElement("p",null,e.description))})),t=this.props.data.work.map((function(e){return i.a.createElement("div",{key:e.company},i.a.createElement("h3",null,e.company),i.a.createElement("p",{className:"info"},e.title,i.a.createElement("span",null,"\u2022")," ",i.a.createElement("em",{className:"date"},e.years)),i.a.createElement("p",null,e.description))})),n=this.props.data.skills.map((function(e){var a="bar-expand "+e.name.toLowerCase();return i.a.createElement("li",{key:e.name},i.a.createElement("span",{style:{width:e.level},className:a}),i.a.createElement("em",null,e.name))}));return i.a.createElement("section",{id:"resume"},i.a.createElement("div",{className:"row education"},i.a.createElement("div",{className:"three columns header-col"},i.a.createElement("h1",null,i.a.createElement("span",null,"Education"))),i.a.createElement("div",{className:"nine columns main-col"},i.a.createElement("div",{className:"row item"},i.a.createElement("div",{className:"twelve columns"},a)))),i.a.createElement("div",{className:"row work"},i.a.createElement("div",{className:"three columns header-col"},i.a.createElement("h1",null,i.a.createElement("span",null,"Work Experience"))),i.a.createElement("div",{className:"nine columns main-col"},t)),i.a.createElement("div",{className:"row skill"},i.a.createElement("div",{className:"three columns header-col"},i.a.createElement("h1",null,i.a.createElement("span",null,"Skills"))),i.a.createElement("div",{className:"nine columns main-col"},i.a.createElement("p",null,e),i.a.createElement("div",{className:"bars"},i.a.createElement("ul",{className:"skills"},n)))))}}]),t}(n.Component),v=(n.Component,function(e){Object(c.a)(t,e);var a=Object(m.a)(t);function t(){return Object(s.a)(this,t),a.apply(this,arguments)}return Object(l.a)(t,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.testimonials.map((function(e){return i.a.createElement("li",{key:e.user},i.a.createElement("blockquote",null,i.a.createElement("p",null,e.text),i.a.createElement("cite",null,e.user)))}));return i.a.createElement("section",{id:"testimonials"},i.a.createElement("div",{className:"text-container"},i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"two columns header-col"},i.a.createElement("h1",null,i.a.createElement("span",null,"Client Testimonials"))),i.a.createElement("div",{className:"ten columns flex-container"},i.a.createElement("ul",{className:"slides"},e)))))}}]),t}(n.Component)),f=function(e){Object(c.a)(t,e);var a=Object(m.a)(t);function t(){return Object(s.a)(this,t),a.apply(this,arguments)}return Object(l.a)(t,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.projects.map((function(e){var a="images/portfolio/"+e.image;return i.a.createElement("div",{key:e.title,className:"columns portfolio-item"},i.a.createElement("div",{className:"item-wrap"},i.a.createElement("a",{href:e.url,title:e.title},i.a.createElement("img",{alt:e.title,src:a}),i.a.createElement("div",{className:"overlay"},i.a.createElement("div",{className:"portfolio-item-meta"},i.a.createElement("h5",null,e.title),i.a.createElement("p",null,e.category))),i.a.createElement("div",{className:"link-icon"},i.a.createElement("i",{className:"fa fa-link"})))))}));return i.a.createElement("section",{id:"portfolio"},i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"twelve columns collapsed"},i.a.createElement("h1",null,"Check Out Some of My Works. (Right click to open)"),i.a.createElement("div",{id:"portfolio-wrapper",className:"bgrid-quarters s-bgrid-thirds cf"},e))))}}]),t}(n.Component),E=t(5),y=function(e){Object(c.a)(t,e);var a=Object(m.a)(t);function t(e){var n;return Object(s.a)(this,t),(n=a.call(this,e)).state={foo:"bar",resumeData:E},d.a.initialize("UA-110570651-1"),d.a.pageview(window.location.pathname),n}return Object(l.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"App"},i.a.createElement(u,{data:E.main}),i.a.createElement(h,{data:E.main}),i.a.createElement(g,{data:E.resume}),i.a.createElement(f,{data:E.portfolio}),i.a.createElement(v,{data:E.testimonials}),i.a.createElement(p,{data:E.main}))}}]),t}(n.Component),w=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function b(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}o.a.render(i.a.createElement(y,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/me",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("/me","/service-worker.js");w?function(e){fetch(e).then((function(a){404===a.status||-1===a.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):b(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e):b(e)}))}}()},5:function(e){e.exports=JSON.parse('{"main":{"name":"Daniel Hewlett","occupation":"university student and application developer","description":"With a background in computer science and geography, I seek to understand and save our beautiful world through technology","image":"profilepicture.jpg","bio":"I am a driven, optimistic computer science graduate with a keen interest in the geospatial sciences. I have proficiency in several fields of computer science, G.I.S, and remote sensing which I hope to apply to solve environmental and spatial problems. I have recently graduated with a BSc Honours Degree in geographic information sciences (GIS) and am currently working as an application developer for a utility management and smart metering solutions provider called Switch Energy. Lastly I love nature, reading, sports, all things ocean related and challenging myself in the kitchen!","contactmessage":"Here is where you should write your message to readers to have them get in contact with you.","email":"Email : DanielJamesHewlett@gmail.com","phone":"Telephone number : On request","address":{"street":"Address : On request","city":"South Africa","state":"(Your State)","zip":"(Your Zip/Postal Code)"},"social":[{"name":"facebook","url":"https://www.facebook.com/daniel.hewlett.56","className":"fa fa-facebook"},{"name":"linkedin","url":"www.linkedin.com/in/daniel-o-sullivan-hewlett-5894621b2","className":"fa fa-linkedin"},{"name":"github","url":"https://github.com/DanJamesH","className":"fa fa-github"},{"name":"instagram","url":"https://www.instagram.com/dannyboyheww","className":"fa fa-instagram"}]},"resume":{"skillmessage":"The following is a breakdown of my technical and practical skills","education":[{"school":"University of the Cape Town","degree":"Bachelor of Science (Honours) in Geographic Information Systems (GIS)","graduated":"February 2021 - December 2021","description":"I graduated cum laude with an Honours degree focusing on G.I.S, remote sensing, geospatial data processing and professionalism. As part of the degree, I completed a year-long research project which I received a distinction for and is in the process of being converted into a research paper. The project focused on using satellite imagery (in Google Earth Engine) and drone data (which I assisted in to gather) to observe, map and assess the damage caused to infrastructure and surrounding areas by the April, 2021 Table Mountain Fire. Satellite imagery was used with machine learning classification to create burnt area maps and 3-D models of damaged buildings were created using structure-from-motion photogrammetry. I also reconstructed a timeline for the fire event using Twitter data."},{"school":"University of the Witwatersrand","degree":"Occuasional student","graduated":"January 2020 - December 2020","description":"Completed two additional majors in geography and geospatial sciences in order to pursue my passion of merging geography and computer science."},{"school":"University of the Witwatersrand","degree":"BSc General (Double Computer Science major)","graduated":"March 2020","description":"Majoring in computer science and computational applications has provided me a broad basis in several computing fields including algorithms, software development, machine learning and computer graphics. Additionally a general degree allowed me to take mathematics and geography to a 2nd year level and physics to a 1st year level. Over my three year degree I achieved several first class certificates and best geography student for two consecutive years."},{"school":"Sacred Heart College Marist Observatory","degree":"IEB National Senior Certificate","graduated":"2016","description":"Matriculated with 5 distinctions, the title of head-boy, full colors in athletics and academics and several other commendation, sporting, academic, cultural and service awards (including a silver Duke of Edinburgh award). In addition, I completed the year-long Spirit of Youth leadership program hosted by the Gordon Institute of Business Science (GIBS) in 2015."}],"work":[{"company":"Switch","title":"Application developer","years":"June 2019 - Present","description":"Switch is an electricity billing provider with an end objective of entering the electricity trading and solutions market. My involvement includes developing React and React-native applications for end-user interaction with the Switch platform. I also have experience with the database (MongoDB) and API levels (Express). Creating these applications include developing with agile methodologies, working in a team environment, using AWS and the app stores for application deployment, interfacing with APIs (and physical IoT devices), deployment with continuous integration and utilizing 3rd party payment services such as Ozow."},{"company":"University of Cape Town","title":"University tutor","years":"Feb 2022 - Present","description":"I am currently a tutor for course entitled \'Programming for GIS\' which is a Python based programming course. I run tutoring sessions, mark student work, assist students with content and invigilate tests"},{"company":"Marist Young Adults Johannesburg (MYAJ)","title":"Coordinator/Volunteer","years":"January 2018 - December 2018","description":"The objective of MYAJ is to bring socially conscious youths together to participate in various charitable volunteer programs such as tutoring youths, assisting soup kitchens and spending time at orphanages. For nearly a year, I coordinated (and participated in) monthly community service events and community building events in conjunction with managing the group\u2019s Facebook page and email correspondence. Worked with refugee teenagers assisting them with school work and personal development."},{"company":"Private","title":"Tutor","years":"2017","description":"Tutored an individual Grade 12 level mathematics in order to boost their exam techniques and raise their self-confidence levels. Utilized several mathematics resources including past papers and textbook examples."}],"skills":[{"name":"QGIS/ArcGIS","level":"89%"},{"name":"Javascript","level":"87%"},{"name":"React/React-Native","level":"85%"},{"name":"Python","level":"75%"},{"name":"Java/C++","level":"71%"},{"name":"Blender/ThreeJS","level":"50%"},{"name":"German","level":"40%"}]},"portfolio":{"projects":[{"title":"Switch","category":"Switch company website","image":"switch.jpg","url":"https://switch.org.za"},{"title":"Space Evaders","category":"A semester computer graphics course project hosted on GitHub","image":"SpaceEvaders.jpg","url":"https://markalence.github.io/CGVAssignment/"},{"title":"Rafiki","category":"A group semester software development project from university","image":"rafiki.jpg","url":"https://github.com/DanJamesH/rafiki"},{"title":"Marist Young Adults Johannesburg","category":"A community of like-minded individuals","image":"MYAJ.jpg","url":"https://www.facebook.com/MaristYoungAdultsJohannesburg"}]},"testimonials":{"testimonials":[{"text":"We will always remember you for your strong leadership on and off the field, your commitment to justice and the ability to give those around you a voice","user":"Sacred Heart College Marist Observatory"},{"text":"In terms of academic capability, Daniel has proved to be an exceptional student. He has a strong computational background from his undergraduate studies with a notable curiosity around technical and academic work. He is energetic, pleasant, and polite.","user":"Dr Moreblessings Shoko (UCT) - Supervisor"},{"text":"Daniel is conscientious and has a great capacity to learn. It has been a pleasure working with Daniel this year and, in my opinion, Daniel is an asset to the Geomatics Division, and the university.","user":"Mignon Wells (UCT) - Chief Technical Office"}]}}')}},[[10,1,2]]]);
//# sourceMappingURL=main.9817fd89.chunk.js.map