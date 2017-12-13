app.service("hoverService", function() {
    
    this.hover = function(classList, eventType, listno){

        //more list @ https://daneden.github.io/animate.css/
        let list = ["tada", "jello", "rubberBand"];
        let animation = ["animated", "infinite", list[listno]];

        switch (eventType) {
            case "mouseover":
                classList.add.apply(classList, animation);
                break;

            case "mouseout":
                classList.remove.apply(classList, animation);
                break;
        }
    }


});
