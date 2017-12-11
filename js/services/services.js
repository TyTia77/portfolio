app.service('myService', function(){

	// data
	this.projectsItems = [{
            img: 'images/project/simon-game.PNG',
            title: 'simon game',
            source: 'simon-game',
            live: 'simon-game',
            color: '#fff',
            category: 'angularJS'
        },
        {
            img: 'images/project/movie-db.png',
            title: 'movieDB',
            source: 'movieDB/tree/trunk',
            live: 'movieDB',
            color: '#000',
            category: 'react',
            progress: true
        },
        {
            img: 'images/project/tic-tac-toe-game.PNG',
            title: 'tic tac toe game',
            source: 'tictactoe',
            live: 'tictactoe',
            color: '#162924',
            category: 'angularJS'
        },
        {
            img: 'images/project/weather-app.PNG',
            title: 'weather app',
            source: 'weatherapp',
            live: 'weatherapp',
            color: '#0262B6',
            category: 'angularJS'
        },
        {
            img: 'images/project/todo.png',
            title: 'todo app',
            source: 'todo',
            live: 'todo',
            color: '#fff',
            category: 'react'
        },
        {
            img: 'images/project/wikipedia-search.PNG',
            title: 'wikipedia search',
            source: 'wiki-viewer',
            live: 'wiki-viewer',
            color: '#092B40',
            category: 'angularJS'
        },
        {
            img: 'images/project/twitch-stream-viewer.PNG',
            title: 'twitch stream viewer',
            source: 'twitch-streams',
            live: 'twitch-streams',
            color: '#fff',
            category: 'angularJS'
        },
        {
            img: 'images/project/calculator.PNG',
            title: 'calculator',
            source: 'calculator',
            live: 'calculator',
            color: '#fff',
            category: 'angularJS'
        },
        {
            img: 'images/project/quote-generater.PNG',
            title: 'quote generater',
            source: 'quotes',
            live: 'quotes',
            color: '#E74C3C',
            category: 'angularJS'
        }
    ];

    this.projectCategory = [{
        category: 'react'
    },{
        category: 'angularJS'
    },{
        category: 'all'
    }];

    this.skillItems = [
        {label: 'HTML', scale: '.75', category: 'language'},
        {label: 'CSS', category: 'language'},
        {label: 'javascript', scale: '.8', category: 'language'},
        {label: 'SCSS', category: 'language'},
        {label: 'bootstrap', category: 'library'},
        {label: 'responsive', category: 'all'},
        {label: 'JQuery', scale: '.7', category: 'library'},
        {label: 'angularJS', category: 'framework'},
        {label: 'polymer', category: 'framework'},
        {label: 'NPM', category: 'package manager'},
        {label: 'gulp', category: 'build system'},
        {label: 'bower', category: 'package manager'},
        {label: 'git hub', scale: '.95', category: 'version control'},
        {label: 'bit bucket', category: 'version control'},
        {label: 'source tree', category: 'version control'},
        {label: 'git', category: 'version control'},
        {label: 'sub version', category: 'version control'},
        {label: 'photoshop', category: 'all'}
    ];


    // get
    this.getProjectItems = () => this.projectsItems;
    this.getProjectCategory = () => this.projectCategory;
    this.getSkillItems = () => this.skillItems.filter(item => item.label !== 'photoshop');
    this.getImage = (img, color) => 
        color 
        ? `background-image: url(${img}); background-color: ${color};` 
        : `images/icons/${img.replace(' ', '').toLowerCase()}.png`;
    this.getStyle = value => {
            // if scale prop valid, else return standard scale of 1,1
            value = value ? `${value},${value}` : `1, 1`;
            return `transform: scale(${value})`;
    }

    // functions
    this.convertButton = (value, applyDot) => {
    	return value === 'all'
            ? '*'
            : applyDot
                ? '.' +value.replace(' ', '-')
                : value.replace(' ', '-');
    }


    // events
    this.handleButton = (classArea, itemSelector) => {

        let $grid = $(classArea).isotope({
            // options
            itemSelector: itemSelector,
            layoutMode: 'fitRows'
        });

        return event => {

            let dataset = event.target.dataset.filter;

            return btnClass => {

                if(dataset){
                    // toggle active button state
                    if (event.target.classList.contains(btnClass)){

                        $(`.${btnClass}`).removeClass('btn-danger');
                        event.target.classList.add('btn-danger');
                    }

                    $grid.isotope({ filter: dataset });
                }
            }
        }
    }
});