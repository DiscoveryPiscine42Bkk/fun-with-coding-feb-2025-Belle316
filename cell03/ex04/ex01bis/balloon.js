$(document).ready(function() {
    let size = 200;
    let colors = ["red", "green", "blue"];
    let colorIndex = 0;
    let shrinkInterval;

   
    function updateBalloon() {
        $("#balloon").css({
            "width": size + "px",
            "height": size + "px",
            "background-color": colors[colorIndex]
        });
    }

    
    $("#balloon").click(function() {
        size += 10;
        if (size > 420) {
            size = 200;
        }
        colorIndex = (colorIndex + 1) % colors.length;
        updateBalloon();
    });

    
    $("#balloon").mouseleave(function() {
        clearInterval(shrinkInterval); 
        shrinkInterval = setInterval(() => {
            if (size > 200) {
                size -= 5;
                updateBalloon();
            } else {
                clearInterval(shrinkInterval); 
            }
        }, 100); 
    });

    
    $("#balloon").mouseenter(function() {
        clearInterval(shrinkInterval);
    });
});

