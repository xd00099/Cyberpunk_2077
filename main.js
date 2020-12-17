function plotSteamStatsCur() {
	Highcharts.chart('steam', {
        chart:{
            type:'column',
            backgroundColor: ' #021517',
            height: '800px',
            marginTop: 100,
            marginBottom: 80,
            marginLeft: 300,
            marginRight: 300
        },
        credits: {enabled: false},
        legend: {enabled: false},
        title:{
           text: 'Top 5 Games by Current Player Count (Current Players)',
           style: {
             color: '#a0bbbd',
             fontSize: '30px'
           },
           margin: 50
        },
        subtitle: {
            text: 'Source: <a href="https://store.steampowered.com/stats/" style="color: #a0bbbd">Steam Stats</a>',
            style: {
              color: '#a0bbbd',
              fontSize: '15px',
            }
        },
        xAxis: {
            categories: [
              'Cyberpunk 2077',
              'Counter-Strike: Global Offensive',
              'Dota 2',
              'Grand Theft Auto V',
              'Destiny 2',
            ],
            crosshair: true,
            labels: {
              style: {
                color: '#a0bbbd',
                fontSize: '15px'
              }
            }
        },
        yAxis: {
            title: {
              text: 'Number of Players',
              style: {
                color: '#a0bbbd',
                fontSize: '20px'
              },
            },
            labels:{
              lineColor: '#a0bbbd',
              style: {
                color: '#a0bbbd',
                fontSize: '15px'
              }
            }
        },
        series: [{
            name: 'Current Players',
            data: [
              {y: 505901, color:'#fcee09'},
              {y: 460320, color:'#89e3f6'}, 
              {y: 279707, color:'#89e3f6'},
              {y: 122205, color:'#89e3f6'},
              {y: 92294, color:'#89e3f6'},
            ]
          },
        ]
    });	
}

function plotSteamStatsPeak() {
	Highcharts.chart('steam', {
        chart:{
            type:'column',
            backgroundColor: ' #021517',
            height: '800px',
            marginTop: 100,
            marginBottom: 80,
            marginLeft: 300,
            marginRight: 300
        },
        credits: {enabled: false},
        legend: {enabled: false},
        title:{
           text: 'Top 5 Games by Current Player Count (Peak)',
           style: {
             color: '#a0bbbd',
             fontSize: '30px'
           },
           margin: 50
        },
        subtitle: {
            text: 'Source: <a href="https://store.steampowered.com/stats/" style="color: #a0bbbd">Steam Stats</a>',
            style: {
              color: '#a0bbbd',
              fontSize: '15px',
            }
        },
        xAxis: {
            categories: [
              'Cyberpunk 2077',
              'Counter-Strike: Global Offensive',
              'Dota 2',
              'Grand Theft Auto V',
              'Destiny 2',
            ],
            crosshair: true,
            labels: {
              style: {
                color: '#a0bbbd',
                fontSize: '15px'
              }
            }
        },
        yAxis: {
            title: {
              text: 'Number of Players',
              style: {
                color: '#a0bbbd',
                fontSize: '20px'
              },
            },
            labels:{
              lineColor: '#a0bbbd',
              style: {
                color: '#a0bbbd',
                fontSize: '15px'
              }
            }
        },
        series: [{
            name: 'Current Players',
            data: [
              {y: 736047, color:'#ff003c'},
              {y: 698712, color:'#89e3f6'}, 
              {y: 533454, color:'#89e3f6'},
              {y: 258721, color:'#89e3f6'},
              {y: 110318, color:'#89e3f6'},
            ]
          },
        ]
    });	
}

function plotTimeLine(){
  Highcharts.chart('timeline', {
    chart: {
        zoomType: 'x',
        type: 'timeline',
        backgroundColor: '#021517',
        marginTop: 100,
        marginLeft: 200,
        marginRight: 200
    },
    subtitle: {
      text: 'source: <a href="https://en.wikipedia.org/wiki/Cyberpunk_2077" style="color: #a0bbbd">www.wikipedia.org</a>',
      style: {
        color: '#a0bbbd',
        fontSize: '15px',
      }
		},
    xAxis: {
        type: 'datetime',
        visible: false
    },
    yAxis: {
        gridLineWidth: 1,
        title: null,
        labels: {
            enabled: false
        }
    },
    credits: {
      enabled: false
    },
    legend: {
        enabled: false
    },
    title: {
        text: 'Cyberpunk Timeline',
        style: {
          color: '#a0bbbd',
          fontSize: '40px'
        },
    },
    
    tooltip: {
			useHTML: true,
			outside: true,
			style: {
        width: 300,
        height: 400,
        fontSize: '18px'
			},
		},
    series: [{
      dataLabels: {
				enabled: true,
				outside: true,
				allowOverlap: false,
				format: '<span style="color:{point.color}">● </span><span style="font-weight: bold;" > ' +
					'{point.x: %Y}</span><br/>{point.label}',
				connectorWidth: 3,
        width: 130,
        style: {
          fontSize:'18px',
          fontFamily: 'Tomorrow, sans-serif;'
        }
			},
			marker: {
				symbol: 'circle',
				lineWidth: 5,
				lineColor: null
			},
        data: [{
            x: Date.UTC(1982),
            name: 'The game first drew its influences from the 1982 film Blade Runner',
            label: 'Blade Runner',
            description: 'Blade Runner is a 1982 science fiction film directed by Ridley Scott, and written by Hampton Fancher and David Peoples.'+ 
            '<br><img src="Blade_Runner.png"style="height:45%;width:45%;" class="center"></img><br><br><br><br><br><br><br><br><br><br><br><br><br><br>',
            color: "#fcee09"
          }, {
            x: Date.UTC(1994),
            name: 'Early influence from video game System Shock',
            label: 'System Shock',
            description: "System Shock is a 1994 first-person action-adventure video game developed by LookingGlass Technologies and published by Origin Systems." +
            '<br><img src="Sysshock.jpg"style="height:45%;width:45%;" class="center"></img><br><br><br><br><br><br><br><br><br><br><br><br><br>',
            color: '#fcee09'
        }, {
            x: Date.UTC(2000),
            name: 'Another video game which brought influence',
            label: 'Deus Ex',
            description: "Deus Ex is a 2000 action role-playing game developed by Ion Storm and published by Eidos Interactive."+
            '<br><img src="Dxcover.jpg"style="height:45%;width:45%;" class="center"></img><br><br><br><br><br><br><br><br><br><br><br><br>',
            color: '#fcee09'
        }, {
            x: Date.UTC(2004),
            name: 'Media company brought inflence to Cyberpunk',
            label: 'Ghost in the shell',
            description: "Ghost in the Shell[a] is a Japanese cyberpunk media franchise based on the seinen manga series of the same name written and illustrated by Masamune Shirow."+
            '<br><img src="ghost.jpeg"style="height:45%;width:45%;" class="center"></img><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>',
            color: '#fcee09'
        }, {
            x: Date.UTC(2012),
            name: 'Cyberpunk first Announced',
            label: 'Announced',
            description: "Cyberpunk 2077 was announced in May 2012."+
            '<br><img src="announ.jpg"style="height:100%;width:100%;" class="center"></img><br><br><br><br><br><br><br><br><br><br>',
            color: '#fcee09'
        }, {
            x: Date.UTC(2013),
            name: 'First Trailor Debuts in 2013',
            label: 'First Trailor',
            description: "Grubb, Jeff (10 January 2013). 'CD Projekt Red reveals Cyberpunk 2077 teaser trailer'. GamesBeat."+
            '<br><img src="firsttrail.jpg"style="height:100%;width:100%;" class="center"></img><br><br><br><br><br><br><br><br><br><br>',
            color: '#fcee09'
        }, {
            x: Date.UTC(2020),
            name: 'Published',
            label: 'Published',
            description: 'Cyberpunk officially released on December 10, 2020'+
            '<br><img src="cyberpunk.jpeg"style="height:80%;width:80%;" class="center"></img><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>',
            color: '#fcee09'
        }], function (chartt) { 
          chartt.renderer.image('https://www.highcharts.com/samples/graphics/sun.png',5,5,30,30)
            .add();
        }
    }]
  });
}
data = [
  {
    "code": "Washington",
    "value": 100
  },
  {
    "code": "Alaska",
    "value": 98
  },
  {
    "code": "Oregon",
    "value": 89
  },
  {
    "code": "Colorado",
    "value": 85
  },
  {
    "code": "Utah",
    "value": 78
  },
  {
    "code": "Wyoming",
    "value": 78
  },
  {
    "code": "Idaho",
    "value": 77
  },
  {
    "code": "Nevada",
    "value": 77
  },
  {
    "code": "Montana",
    "value": 74
  },
  {
    "code": "Kansas",
    "value": 73
  },
  {
    "code": "Minnesota",
    "value": 73
  },
  {
    "code": "South Dakota",
    "value": 71
  },
  {
    "code": "Maine",
    "value": 70
  },
  {
    "code": "Michigan",
    "value": 70
  },
  {
    "code": "Arkansas",
    "value": 69
  },
  {
    "code": "New Hampshire",
    "value": 68
  },
  {
    "code": "Indiana",
    "value": 68
  },
  {
    "code": "Wisconsin",
    "value": 68
  },
  {
    "code": "North Dakota",
    "value": 68
  },
  {
    "code": "Oklahoma",
    "value": 68
  },
  {
    "code": "Virginia",
    "value": 68
  },
  {
    "code": "Arizona",
    "value": 67
  },
  {
    "code": "Vermont",
    "value": 67
  },
  {
    "code": "Missouri",
    "value": 67
  },
  {
    "code": "Iowa",
    "value": 65
  },
  {
    "code": "New Mexico",
    "value": 65
  },
  {
    "code": "California",
    "value": 64
  },
  {
    "code": "Kentucky",
    "value": 63
  },
  {
    "code": "Nebraska",
    "value": 63
  },
  {
    "code": "Ohio",
    "value": 63
  },
  {
    "code": "Massachusetts",
    "value": 61
  },
  {
    "code": "Hawaii",
    "value": 60
  },
  {
    "code": "West Virginia",
    "value": 60
  },
  {
    "code": "Texas",
    "value": 59
  },
  {
    "code": "Pennsylvania",
    "value": 59
  },
  {
    "code": "Tennessee",
    "value": 59
  },
  {
    "code": "Connecticut",
    "value": 58
  },
  {
    "code": "Maryland",
    "value": 58
  },
  {
    "code": "Illinois",
    "value": 57
  },
  {
    "code": "Rhode Island",
    "value": 57
  },
  {
    "code": "North Carolina",
    "value": 55
  },
  {
    "code": "Florida",
    "value": 55
  },
  {
    "code": "Delaware",
    "value": 55
  },
  {
    "code": "Georgia",
    "value": 54
  },
  {
    "code": "New Jersey",
    "value": 53
  },
  {
    "code": "District of Columbia",
    "value": 51
  },
  {
    "code": "Alabama",
    "value": 51
  },
  {
    "code": "New York",
    "value": 50
  },
  {
    "code": "Louisiana",
    "value": 48
  },
  {
    "code": "South Carolina",
    "value": 47
  },
  {
    "code": "Mississippi",
    "value": 46
  }
]

function plotMap() {
	Highcharts.mapChart('mapChart', {
    chart: {
      backgroundColor: '#021517',
      margin: 100,
      height: '1000px',
      marginTop: 100,
      marginBottom: 80,
      marginLeft: 500,
      marginRight: 500
  },
		title: {
      text: 'US Google Search Interest of Keyword "Cyberpunk 2077" in Last 30 Days',
      style: {
        color: '#a0bbbd',
        fontSize: '30px'
      },
      margin: 50
		},
	
		subtitle: {
      text: 'Source: <a href="https://trends.google.com/trends/explore?date=today%201-m&geo=US&q=%2Fm%2F0kvfm9q" style="color: #a0bbbd">trends.google.com</a>',
      style: {
        color: '#a0bbbd',
        fontSize: '15px',
      }
		},
	
		mapNavigation: {
			enabled: false
		},

		legend: {
            layout: 'horizontal',
            title: {
                text: 'Search Interest'
            }
        },
	
		colorAxis: {
			min: 40,
			max: 100,
            type: 'linear',
            minColor: '#ffffff',
			maxColor: '#ffd500',
		},

		plotOptions: {
			series: {
				fillOpacity: 0.3
			}
		},
		
		tooltip: { 
			formatter: function() {
				return this.point.name + ': ' + this.point.value + ' search interest'
			}
		},

		credits: {
			enabled: false
		},
	
		series: [{
			mapData: Highcharts.maps['countries/us/us-all'],
			data: data,
			joinBy: ['name', 'code'],
            dataLabels: {
                enabled: true,
				style: {
					color: '#70bfff',
					fontSize: '11px',
					textOutline: false
				},
                format: '{point.value}'
			},
			borderWidth: 0.2,
			borderColor: 'orange',
			states: {
				hover: {
					color: '#94d6e3',
					borderColor: '#0C3'
				},
				select: {
					color: '#7CA82B'
				}
			}
        }]
	});	
}

function plotBar() {
  const bar = Highcharts.chart('compare-bar', {
    chart:{
        type:'column',
        backgroundColor: ' #021517',
        margin: 100
    },
    credits: {enabled: false},
    legend: {enabled: false},
    title:{
       text: '',
       style: {
         color: '#a0bbbd',
         fontSize: '30px'
       },
       margin: 50
    },
    subtitle: {
        text: '',
        style: {
          color: '#a0bbbd',
          fontSize: '15px',
        }
    },
    xAxis: {
        categories: [
          'Cyberpunk 2077',
          'Grand Theft Auto V',
          'League of Legends',
          'Counter-Strike: Global Offensive',
        ],
        crosshair: true,
        labels: {
          style: {
            color: '#a0bbbd',
            fontSize: '15px'
          }
        }
    },
    yAxis: {
        title: {
          text: 'Interest Level',
          style: {
            color: '#a0bbbd',
            fontSize: '20px'
          },
        },
        labels:{
          lineColor: '#a0bbbd',
          style: {
            color: '#a0bbbd',
            fontSize: '15px'
          }
        }
    },
    series: [{
        name: 'Current Players',
        data: [
          {y: 20, color:'#fcee09'},
          {y: 0.5, color:'#de004e'},
          {y: 4, color:'#fe00fe'}, 
          {y: 1, color:'#00f0ff'},
          
        ]
      },
    ]
  });	
  bar.reflow()
}

function plotLine() {
  
  const line = Highcharts.chart('lineChart', {
  chart: {
    backgroundColor: '#021517',
    marginTop: 100,
    marginBottom: 100,
    marginLeft: 100,
    marginRight: 100
  },
  title: {
      text: '',
  },

  subtitle: {
      text: ''
  },
  
  yAxis: {
      title: {
          text: 'Interest Level',
          style: {
            color: '#a0bbbd',
            fontSize: '20px'
          },
      },
      labels:{
        lineColor: '#a0bbbd',
        style: {
          color: '#a0bbbd',
          fontSize: '15px'
        }
      }
  },
  credits: {
    enabled: false
  },
  xAxis: {
      accessibility: {
          rangeDescription: 'Range: Nov16-Dec14'
      },
      
      type: 'datetime',
      labels: {
        style: {
          color: '#a0bbbd',
          fontSize: '15px'
        }
      }
    
  },

  legend: {
      x:0,
      y:0,
      verticalAlign: 'top',
      itemStyle: {"fontSize": "20px", color:"#a0bbbd"}

  },

  plotOptions: {
      series: {
          label: {
              connectorAllowed: false
          },
          pointStart: Date.UTC(2010, 10, 16),
          pointInterval: 24 * 3600 * 1000
      }
  },

  series: [{
      name: 'Cyberpunk 2077',
      data: [  3,   3,   3,   5,   5,   4,   5,   5,   5,   4,   5,   5,   5,
        5,   5,   5,   7,  10,   9,  12,  14,  22,  26,  46, 100,  81,
       80,  75],
       color:'#fcee09'
    },
    {
      name: 'GTA5',
      data: [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0, 1, 0, 0, 1, 0, 1, 0,
        0, 0, 0, 1, 1, 0],
      color:'#de004e'
    },
    {
      name: "League of Legends",
      data: [3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 3, 4, 3, 3, 4, 3, 4, 3,
        3, 4, 3, 3, 3, 3],
      color:'#fe00fe'
    },
    {
      name: "Counter-Strike: Global Offensive",
      data: [1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2,
        1, 1, 2, 1, 1, 2],
      color:'#00f0ff'
    }
  ],

  responsive: {
      rules: [{
          condition: {
              maxWidth: 500
          },
          chartOptions: {
              legend: {
                  layout: 'horizontal',
                  align: 'center',
                  verticalAlign: 'bottom'
              }
          }
      }]
  }

});
line.reflow()
}


var pos_comment = "<li>Great game with huge focus on story, characters and world building. I dont remember last time when the rpg story absorbed me so much. Yes there are few bugs here are there (playing on ps4pro), but nothing gamebreaking. Usually minor visual glitches. If you like story RPGs this is simply game for you. If the small bugs bother you too much, then this will be a game for you after few updates. But it one the must have eigter way. (sooner or later)</li><br><li>AFTER Patch 1.04 huge improvement on ps4 pro. Great game love it so much. Waiting for new patches to fix the game.</li><br><li>What I liked: incredibly beautiful and detailed world, incredible interesting characters, the plot is very attractive. I played 60 hours and I can't stop.</li><br><li>I had no problems with the game on my PS4 Slim. No bugs that spoiled the story or something. I'm playing after patch 1.04, and my experience has been very satisfying.</li><br><li>One of the most epic stories in video game history .. you better be prepared for the greatest experience in your life!!!</li>"
var neg_comment = "<li>Unbelievable. ps3 quality graphics. fps drops, bugs, looks terrible. cd projekt achieved the biggest disappointment of years. like a joke.</li><br><li>Unplayable mess. CDPR are a bunch of lying thieves! They knew the game was crap and kept their mouth shut about because they wanted to scam its fanbase. At least the veil had dropped now and their reputation is gone.</li><br><li>Don't buy it for PS4. It's unplayeble. 720p and 15 fps in open world... Are you serious? Why don't you cancel this game for past gen consoles, if they can't run it? It's really, really, REALLY BAD. Maybe it's a good game, but it's not for ps4 or xbox one</li><br><li>Game is completely broken. Was sold on PC videos while PS4 got completely hidden from everybody. It is at the verge of unplayable and I cannot recommend it to anyone. Terrible graphics, ridiculous performance, no NPCs in the city, no cars at the street, missing basic features like getting haircut to important ones like driving AI (which simply doesn't exist outside scripted missions, that's why police pops up out of nowhere, they can't pursue you in a car). Don't support such a scam.</li><br><li>This game should never be released on ps4 and xbox one. Give the money back</li>"

window.onload = function() {
    plotTimeLine()
    plotSteamStatsCur()
    plotMap()
    plotBar()
    plotLine()

    document.getElementById('current_btn').addEventListener('click', function () {
      plotSteamStatsCur()
    });
    
    document.getElementById('peak_btn').addEventListener('click', function () {
      plotSteamStatsPeak()
    });

    document.getElementById('pos_btn').addEventListener('click', function () {
      document.getElementById("ul-comment").innerHTML = pos_comment;
      document.getElementById("ul-comment").style.color = "#fcee09";
      document.getElementById("pos-img").src = "pos.png";
      document.getElementById("comments-title").style.color = "#fcee09";
    });

    document.getElementById('neg_btn').addEventListener('click', function () {
      document.getElementById("ul-comment").innerHTML = neg_comment;
      document.getElementById("ul-comment").style.color = "#00f0ff";
      document.getElementById("pos-img").src = "neg.png";
      document.getElementById("comments-title").style.color = "#00f0ff";
    });

    document.getElementById('official').addEventListener('click', function () {
      document.getElementById("youtube").innerHTML = '<iframe width="1500" height="800" src="https://www.youtube.com/embed/BO8lX3hDU30" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
    });

    document.getElementById('night').addEventListener('click', function () {
      document.getElementById("youtube").innerHTML = '<iframe width="1500" height="800" src="https://www.youtube.com/embed/LWprxxtVeGk" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
    });

    document.getElementById('car').addEventListener('click', function () {
      document.getElementById("youtube").innerHTML = '<iframe width="1500" height="800" src="https://www.youtube.com/embed/6IMO0PaX7Yc" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
    });

    document.getElementById('char').addEventListener('click', function () {
      document.getElementById("youtube").innerHTML = '<iframe width="1500" height="800" src="https://www.youtube.com/embed/DcsVhYJU-P0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
    });

    document.getElementById('review').addEventListener('click', function () {
      document.getElementById("youtube").innerHTML = '<iframe width="1500" height="800" src="https://www.youtube.com/embed/z1rUP17fayA" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
    });
}


