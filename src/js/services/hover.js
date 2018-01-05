app.service("hoverService", function() {
    
    this.hover = function(classList, eventType, listNo){

        //more list @ https://daneden.github.io/animate.css/
        let list = ["tada", "jello", "rubberBand"];
        let animation = ["animated", "infinite", list[listNo]];

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
