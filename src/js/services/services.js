app.service('myService', function(){

	// data
	this.projectsItems = [{
            category : 'angularJS',
            color    : '#fff',
            img      : 'images/project/simon-game.PNG',
            live     : 'simon-game',
            source   : 'simon-game',
            title    : 'simon game'
        },
        {
            category : 'react',
            color    : '#000',
            img      : 'images/project/movie-db.png',
            live     : 'movieDB',
            progress : true,
            source   : 'movieDB/tree/trunk',
            title    : 'movieDB',
        },
        {
            category : 'angularJS',
            color    : '#162924',
            img      : 'images/project/tic-tac-toe-game.PNG',
            live     : 'tictactoe',
            source   : 'tictactoe',
            title    : 'tic tac toe game'
        },
        {
            category : 'angularJS',
            color    : '#0262B6',
            img      : 'images/project/weather-app.PNG',
            live     : 'weatherapp',
            source   : 'weatherapp',
            title    : 'weather app'
        },
        {
            category : 'react',
            color    : '#fff',
            img      : 'images/project/todo.png',
            live     : 'todo',
            source   : 'todo/tree/trunk',
            title    : 'todo app'
        },
        {
            category : 'angularJS',
            color    : '#092B40',
            img      : 'images/project/wikipedia-search.PNG',
            live     : 'wiki-viewer',
            source   : 'wiki-viewer',
            title    : 'wikipedia search'
        },
        {
            category : 'angularJS',
            color    : '#fff',
            img      : 'images/project/twitch-stream-viewer.PNG',
            live     : 'twitch-streams',
            source   : 'twitch-streams',
            title    : 'twitch stream viewer'
        },
        {
            category : 'angularJS',
            color    : '#fff',
            img      : 'images/project/calculator.PNG',
            live     : 'calculator',
            source   : 'calculator',
            title    : 'calculator'
        },
        {
            category : 'angularJS',
            color    : '#E74C3C',
            img      : 'images/project/quote-generater.PNG',
            live     : 'quotes',
            source   : 'quotes',
            title    : 'quote generater'
        }
    ];

    this.projectCategory = [
        { category : 'react' },
        { category : 'angularJS' },
        { category : 'all' }
    ];

    this.skillItems = [
        { label: 'angularJS', category: 'framework' },
        { label: 'bit bucket', category: 'version control' },
        { label: 'bootstrap', category: 'library' },
        { label: 'bower', category: 'package manager' },
        { label: 'CSS', category: 'language' },
        { label: 'git hub', scale: '.95', category: 'version control' },
        { label: 'git', category: 'version control' },
        { label: 'gulp', category: 'build system' },
        { label: 'HTML', scale: '.75', category: 'language' },
        { label: 'javascript', scale: '.8', category: 'language' },
        { label: 'JQuery', scale: '.7', category: 'library' },
        { label: 'NPM', category: 'package manager' },
        { label: 'photoshop', category: 'all' },
        { label: 'polymer', category: 'framework' },
        { label: 'react', category: 'framework' },
        { label: 'responsive', category: 'all' },
        { label: 'SCSS', category: 'language' },
        { label: 'source tree', category: 'version control' },
        { label: 'sub version', category: 'version control' },
        { label: 'web pack', category: 'build system' },
    ];


    // get
    this.getProjectItems    = () => this.projectsItems;
    this.getProjectCategory = () => this.projectCategory;
    this.getSkillItems      = () => this.skillItems.filter(item => item.label !== 'photoshop');
    this.getImage           = (img, color) => 
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