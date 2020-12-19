var data = {
	projects: [
		{
			title: "Star Citizen - Road to Dynamic Server Meshing",
			date: "June 2020",
			info: "In-depth Prezi Presentation about the Architecture of the Dynamic Server Meshing software system",
			text: "I have been very excited about the technology that one day will be <b>Star Citizens Dynamic Server Meshing</b>. However, I had trouble finding any great single source of information which gives a good overview and explanation of what it is and how CIG is planning to realize it and what the status currently is. Therefore, I took it upon myself, <b>researched all the information available</b> to us and created <b>a visual and textual explanation as an extensive Prezi presentation with over 100 individual slides</b> for everyone to check out and refer to. All the available information I was able to find can be found in the presentation making it a great source about Dynamic Server Meshing! The sources used were provided at the end of the presentation as well.",
			links: [
				{
					website: "star",
					url: "https://robertsspaceindustries.com/spectrum/community/SC/forum/3/thread/road-to-dynamic-server-meshing-tech-overview-with-"
				},
				{
					website: "link",
					url: "https://prezi.com/view/l5DorjAy1dUz8BoDnuoF/"
				}
				
			],
			images: [
				"road-to-dynamic-server-meshing/image1.png",
				"road-to-dynamic-server-meshing/image2.png",
				"road-to-dynamic-server-meshing/image3.png",
				"road-to-dynamic-server-meshing/image4.png",
				"road-to-dynamic-server-meshing/image5.png",
				"road-to-dynamic-server-meshing/image6.png",
				"road-to-dynamic-server-meshing/image7.png"
			],
			isHighlight: true
		},
		{
			title: "CodingBuddy",
			date: "2019-2020",
			info: "Java, JavaParser, Node.js, Express, MongoDB, React",
			text: "This website <b>visualizes the execution of Java programs</b>. It allows programming students to write Java code and then provides them with <b>step-by-step statement highlighting</b> at runtime. The goal was to help programming novices get a much more <b>intuitive understanding about how the computer executes their code</b>. This project was made possible by creating a <b>custom debugger</b> by parsing the users Java program and <b>injecting custom code</b> at various Abstract Syntax Tree nodes. At runtime, that code calls custom functions which <b>log the execution of each statement</b>. The position information of statements from the parser was used to be able to correctly highlight the executed statement on the frontend editor. This project is <b>currently expanded upon</b> to optionally display the Stack and Heap of the Java Virtual Machine through the Java Platform Debugger Architecture (JPDA). This information could be useful for visualizing more advanced programming concepts.",
			images: [
				"coding-buddy/codingbuddy_forloop.gif",
			],
			isHighlight: true
		},
		{
			title: "THM MoCaInfo Indoor 360° Panorama Tour",
			date: "February 2020",
			info: "Javascript, HTML, CSS, Marzipano 360° Library, THM Backend Services, JSON Web Tokens",
			text: "A website was created as a project at university that <b>allows users to explore indoor places via interactive 360° panoramas</b>. It accessed the <b>university's backend databases</b> about Points of Interests and Room Outlines. That information was then presented inside the panorama as <b>clickable hotspots and in the minimap</b>. A lot of effort was made on an <b>editor</b> (locked behind a login) which allows the admin to add, change and remove panoramas as well as link them together through clickable buttons. The backend automatically converts newly added panorama images into the <b>cubemap format</b>. It also supports high resolution images by providing <b>multiple levels of detail by splitting each cubemap face into more and more tiles (1x1, 2x2, 4x4, 8x8, etc.)</b>.",
			links: [
				{
					website: "link",
					url: "https://mocainfo.thm.de/moca-360/"
				}
			],
			images: [
				"indoor360/image1.png",
				"indoor360/image2.png",
				"indoor360/image3.png",
				"indoor360/image6.png",
				"indoor360/image4.png",
				"indoor360/image5.png",
			],
			isHighlight: true
		},
		{
			title: "Phasmophobia Cheatsheet",
			date: "October 2019",
			info: "JavaScript, React",
			text: "TODO",
			links: [
				{
					website: "github",
					url: "https://github.com/un0btanium/phasmophobia-cheatsheet"
				},
				{
					website: "link",
					url: "https://un0btanium.github.io/phasmophobia-cheatsheet/"
				}
			],
			images: [
				"phasmophobia-cheatsheet/image1.png",
				"phasmophobia-cheatsheet/image2.png"
			]
		},
		{
			title: "Teamfight Tactics Cheatsheet",
			date: "August 2019",
			info: "JavaScript, React",
			text: "TODO",
			links: [
				{
					website: "github",
					url: "https://github.com/un0btanium/tft-cheatsheet"
				},
				{
					website: "link",
					url: "https://un0btanium.github.io/tft-cheatsheet/"
				}
			],
			images: [
				"tft-cheatsheet/image1.png"
			]
		},
		{
			title: "Ghost In The Cell AI Bot - CodinGames",
			date: "March 2019",
			info: "Java",
			text: "This was a very successful <b>AI graduate course group project</b> at university. This AI bot for the Ghost in the Cell game on the CodinGames website plays against bots of other players. The <b>bot had to manage its resources efficiently</b> by commanding units on a playing field from cell to cell, conquering and upgrading cells to produce more units, send and prepare for bombings and eventually eliminate the opponent. Our <b>bot predicted outcomes</b> into the future to determine the use of <b>various defense and attack strategies</b>. It used a <b>Floyd-Warschall Algorithm for efficient pathfinding</b> between cells to prevent long travel times for units. Various bomb attack and defend strategies were implemented as well. Our bot was able to get into the <b>Top 400</b> bots, almost hitting the gold league as well.",
			links: [
				{
					website: "github",
					url: "https://github.com/un0btanium/GhostInTheCell-Bot/blob/master/GhostInTheCellPresentation.pdf"
				}
			],
			images: [
				"ghost-in-the-cell/example1.gif",
				"ghost-in-the-cell/example2.gif",
				"ghost-in-the-cell/example3.gif",
				"ghost-in-the-cell/example4.gif"
			],
			isHighlight: true
		},
		{
			title: "Factorio Script",
			date: "July 2017",
			info: "Java, Antlr4, Factorio BASE-64 Import String",
			text: "A <b>programming language</b> that allows the user to code in a high level programming language that is then converted into Factorio combinator logic. The compiled result was <b>exported as a base64 Factorio import string</b> which allowed users to compile their programs and then easily import the logic into the game.",
			links: [
				{
					website: "github",
					url: "https://github.com/un0btanium/FactorioScript"
				},
				{
					website: "reddit",
					url: "https://www.reddit.com/r/factorio/comments/6m8civ/factorioscript_by_unobtanium/"
				},
				{
					website: "link",
					url: "https://forums.factorio.com/viewtopic.php?f=8&t=50722"
				}
			],
			images: [
				"factorio-script/image1.png",
				"factorio-script/image2.png"
			],
		},
		{
			title: "Scalable Shulker Storage System",
			date: "November 2016",
			info: "Minecraft Redstone",
			text: "This creation in Minecraft allowed players to store large amounts of items in Shulker Boxes. The user was able to insert Shulker Boxes into the system and then retrieve them again by querying. The main feature was <b>high query speed</b> which was accomplished <b>by running multiple search engines in parallel</b> (16 are shown in the video). For this to work the Shulker Boxes had to be <b>evenly distributed</b> among all search engines. When Shulker Boxes were taken out of a search engine the system remembered from which engine it was taken out to later correctly insert it back in to always ensure even distribution over multiple queries as well. The query filter item for the search engines was delivered and retrieved via a storage minecart. The YouTube video showcasing the contraption <b>attracted 3.5k+ views and a lot of positive and impressed feedback</b> from the viewers.",
			video: "7wc2c2ovZ-c"
		},
		{
			title: "Shulker Storage System",
			date: "October 2016",
			info: "Minecraft Redstone",
			text: "This was a first <b>prototype</b> for a Shulker Box storage system in Minecraft which would allow players to <b>store large amounts of items in Shulker Boxes</b> and retrieve them by querying for them. This prototype was designed in a way that would allow it to be <b>scalable later on</b> to have multiple search engines work in parallel to speed up the query process.",
			video: "K4iBWZcXoyA"
		},
		{
			title: "Champion Challenge - RIOT API Challenge 2016",
			date: "May 2016",
			info: "Node.js, Express, MongoDB, AngularJS, League of Legends API",
			text: "This was <b>my entry in the League of Legends RIOT API Challenge in 2016</b> where participants had <b>three weeks time</b> to create something with the recently released mastery points. For this project <b>I taught myself</b> Node.js, Express, MongoDB and Angular to create a website which would <b>allow users to enter weekly competitions</b>. Players would gather as many mastery points on a champion as possible by playing the game and would be retrieved by my application via the League of Legends API. Players would then be <b>placed on a leaderboard</b> to reflect their current ranking. At the end of a contest <b>top players received rewards in the form of collectible items</b> from the game. Those items saved and displayed the champion name and the accumulated points from that contest it was won from. Although this project did not win any prices in the API contents it still <b>made me learn a lot of new skills</b>. My newly gained knowledge was <b>thoroughly documented in the github readme file</b>.",
			links: [
				{
					website: "github",
					url: "https://github.com/un0btanium/ChampionChallenge"
				}
			],
			images: [
				"riot-api-challenge-2016/image1.png",
				"riot-api-challenge-2016/image2.png",
				"riot-api-challenge-2016/image3.png",
			],
			isHighlight: true
		},
		{
			title: "Better Budget - Cities: Skylines UI Mod",
			date: "April 2015 - November 2019",
			info: "C#, Unity",
			text: "This <b>quality-of-life mod developed for the videogame Cities: Skylines</b> improves the UI by providing access to the budget sliders outside of the main budget window. It <b>required me to reverse engineer</b> the game objects and their structure at runtime to then <b>programmatically extract the UI elements, create identical copies</b> and place those where they were most useful: in the individual consumption/production windows. This was very convienient because it allowed players to <b>change and minmax their expenses without having to switch between multiple windows constantly</b>.<br/><br/>Two of the main features I am particularly proud of were the <b>automatic detection of all budgets in the game on level startup</b> (since the game received regular expansions and I didnt want to have to manually update the mod each time) as well as <b>an editor allowing players to customize</b> their experience. The mod became popular shortly after its release in 2015 <b>accumulating 18,000+ downloads from players on Steam</b> and has been receiving periodic updates since then.",
			links: [
				{
					website: "github",
					url: "https://github.com/un0btanium/BetterBudget"
				},
				{
					website: "steam",
					url: "https://steamcommunity.com/sharedfiles/filedetails/?id=420972688"
				}
			],
			images: [
				"better-budget/image1.png",
				"better-budget/image2.jpg",
				"better-budget/image3.jpg",
				"better-budget/image4.jpg",
				"better-budget/image5.jpg"
			],
			isHighlight: true
		},
		{
			title: "ComputerCraft Programs",
			date: "December 2012 - February 2014",
			info: "LUA",
			text: "The ComputerCraft mod for the videogame Minecraft introduced programmable computers and robots (called turtles) to the game. In 2013 I was very active on the official ComputerCraft forums <b>creating various programs with the mod</b>. The two most successful ones were the 'Client for OpenPeripheral's Glasses' and 'Ultimate Wood Chopper' programs, both of which <b>featured session persistence</b> by saving and loading their state. The programs were <b>downloaded over 12,000+ times</b> from pastebin.<br/>The linked video was made by SeleckPlays on YT who approached me and asked if he was allowed to create a tutorial on the Ultimate Wood Chooper program I created. At the time this program was highly efficient when it came to producing wood and bio-fuel thanks to the Fir Wood tree not checking for any leaves being in the way and instantly grew which allowed the turtle to non-stop chop wood. ",
			links: [
				{
					website: "github",
					url: "https://github.com/un0btanium/ComputerCraft-Programs"
				},
				{
					website: "link",
					url: "http://www.computercraft.info/forums2/index.php?/topic/13187-unobtaniums-program-collection/"
				}
			],
			images: [
				"ultimate-wood-chopper/image1.png",
				"ultimate-wood-chopper/image2.png",
				"ultimate-wood-chopper/image3.png"
			],
			video: 'wU_iR1DQeqI',
			isHighlight: true
		},
		{
			title: "Game Maker Studio games",
			date: "2008-2010",
			info: "Game Maker Script",
			text: "After creating a few programs in batch script files I eventually ventured out and wanted to program something more visually pleasing. I came across the Game Maker Studio online and was introduced to its custom programming language. <b>I created a few game prototypes</b>, often times inspired by other video- and boardgames.",
			images: [
			]
		},
		{
			title: "Batch Script - Windows Startup and TicTacToe",
			date: "2007",
			info: "Windows Batch Scripting Files",
			text: "<b>My first program</b> was a simple batch script that helped me <b>optimize my Windows XP startup sequence</b> because the Windows autostart did not provide the functionality I was looking for. Since my computer took a long time to boot I wanted to start the computer and come back a few minutes later with various programs and game patchers opened and running already. I found out about Windows batch scripting files and created a simple startup program that would one-by-one start my programs with small delays inbetween to give the computer time to open it. While working on this script I found out that more complicated logic was possible as well <b>and shortly after a simple TicTacToe game</b> on the console was created.",
			images: [
			],
			isHighlight: true
		},
	]
};
export default data;