var data = {
	projects: [
		{
			title: "Star Citizen - Road to Dynamic Server Meshing",
			date: "June 2020",
			info: "Prezi Presentation about the technical aspects of the Dynamic Server Meshing technology",
			text: "I have been very excited about the technology that one day will be Star Citizens Dynamic Server Meshing. However, I had trouble finding any great single source of information which gives a good overview and explanation of what it is and how CIG is planning to realize it and what the status currently is. Therefore, I took it upon myself and created a visual and textual explanation as an extensive Prezi presentation with over 100 individual slides for everyone to check out and refer to. All the available information I was able to find can be found in the presentation making it a great source about Dynamic Server Meshing! The sources that were used can be found at the end of the presentation as well.",
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
			info: "",
			text: "",
			images: [
				"coding-buddy/codingbuddy_forloop.gif",
			],
			isHighlight: true
		},
		{
			title: "THM MoCaInfo Indoor 360° Panorama",
			date: "February 2020",
			info: "Javascript, HTML, CSS, Marzipano 360° Library, THM Backend Services, JSON Web Tokens",
			text: "",
			links: [
				{
					website: "star",
					url: "https://mocainfo.thm.de/moca-360/"
				}
			],
			images: [],
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
			text: "This project was a group project created in cooperation with an AI graduate course at university. This AI bot for the Ghost in the Cell game on the CodinGames website plays against bots of other players. The bot had to manage its resources efficiently by commanding units on a playing field from cell to cell, conquering and upgrading cells to produce more units, send and prepare for bombings and eventually eliminate the opponent. Our bot predicted outcomes into the future to determine the use of various defense and attack strategies. It used a Floyd-Warschall Algorithm for efficient pathfinding between cells to prevent long travel times for units. Various bomb attack and defend strategies were implemented as well. Our bot was able to get into the Top 400, almost hitting the gold league as well.",
			links: [
				{
					website: "github",
					url: "https://github.com/un0btanium/GhostInTheCell-Bot/blob/master/GhostInTheCellPresentation.pdf"
				}
			],
			images: [
				"ghost-in-the-cell/image1.png"
			]
		},
		{
			title: "Factorio Script",
			date: "July 2017",
			info: "Java, Antlr4, Factorio BASE-64 Import String",
			text: "A programming language that allows the user to code in a high level programming language that is then converted into Factorio combinator logic. The compiled result was exported as a Factorio import string which allowed users to compile their programs and then easily import the logic into the game.",
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
			text: "This creation in Minecraft allowed players to store large amounts of items in Shulker Boxes. The user was able to insert Shulker Boxes into the system and then retrieve them again by querying. The main feature was high query speed which was accomplished by running multiple search engines in parallel. For this to work the Shulker Boxes had to be evenly distributed among all search engines. When Shulker Boxes were taken out of a search engine the system remembered from which engine it was taken out to later correctly insert it back in to always ensure even distribution over multiple queries as well. The query filter item for the search engines was delivered and retrieved via a storage minecart. The YouTube video showcasing the contraption attracted 3.5k+ views and a lot of positive and impressed feedback from the viewers.",
			video: "7wc2c2ovZ-c"
		},
		{
			title: "Shulker Storage System",
			date: "October 2016",
			info: "Minecraft Redstone",
			text: "This was a first prototype for a Shulker Box storage system in Minecraft which would allow players to store large amounts of items in Shulker Boxes and retrieve them by querying for them. This prototype was designed in a way that would allow it to be scaled up to have multiple search engines work in parallel to speed up the query process.",
			video: "K4iBWZcXoyA"
		},
		{
			title: "Champion Challenge - RIOT API Challenge 2016",
			date: "May 2016",
			info: "Node.js, Express, MongoDB, AngularJS, League of Legends API",
			text: "This was my entry in the League of Legends RIOT API Challenge in 2016 where participants had three weeks time to create something with the recently released mastery points. For this project I taught myself Node.js, Express, MongoDB and Angular to create a website which would allow users to enter weekly competitions. Players would gather as many mastery points on a champion as possible by playing the game. Players would then be placed on a leaderboard to reflect their current ranking. At the end of a contest top players received rewards in the form of collectible items. Those items saved and displayed the champion name and the accumulated points from that contest it was won from. My newly gained knowledge was thoroughly documented in the github readme file.",
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
			text: "This quality-of-life mod developed for the videogame Cities: Skylines improves the UI by providing access to the budget sliders outside of the main budget window. The mod became popular shortly after its release accumulating 18000+ downloads from players on Steam and has been receiving periodic updates since then.",
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
			text: "The ComputerCraft mod for the videogame Minecraft introduced programmable computers and robots (called turtles) to the game. In 2013 I was very active on the official ComputerCraft forums, creating various programs with the mod. The two most successful ones were the 'Client for OpenPeripheral's Glasses' and 'Ultimate Wood Chopper' programs. The linked video was made by SeleckPlays on YT who approached me and asked if he could created tutorial on the Ultimate Wood Chooper program I created. At the time this program was highly efficient when it came to producing wood and bio-fuel thanks to the Fir Wood tree not checking for leaves when growing and allowing the turtle to non-stop chop wood. The program was downloaded 10k+ times from pastebin.",
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
				"ultimate-wood-chopper/image5.png",
				"ultimate-wood-chopper/image1.png",
				"ultimate-wood-chopper/image2.png",
				"ultimate-wood-chopper/image3.png"
			],
			video: 'wU_iR1DQeqI',
			isHighlight: true
		},
		{
			title: "Game Maker Studio",
			date: "2008-2010",
			info: "Game Maker Script",
			text: "After creating a few programs in batch script files I eventually ventured out and wanted to program something more visually pleasing. I came across the Game Maker Studio online and was introduced to its custom programming language. I created a few game prototypes, sometimes being inspired by other video and board games.",
			images: [
			]
		},
		{
			title: "Batch Script - Windows Startup and TicTacToe",
			date: "2007",
			info: "Game Maker Script",
			text: "My first program was a simple batch script that helped me optimize my Windows XP Startup. Since the computer took a long time to boot I wanted to start the computer and come back a few minutes later with various programs and game patchers opened already. I found out about Windows batch scripting files and created a simple startup program that would one-by-one start my programs with a delay inbetween to give the computer time to open it. While working on this script I found out that more complicated logic was possible as well and shortly after a simple TicTacToe game on the console was created.",
			images: [
			],
			isHighlight: true
		},
	]
};
export default data;