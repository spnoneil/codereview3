const beep = "Beep!"
const boop = "BOOP!"
const neighb = "Won't you be my neighbor?"

let robo = function(end) {
    let array = [];
    for (i = 0; i <= end; i++) {
        array.push(i.toString());
    };

    let robog = array.map(function(arrays) {
        if (arrays.includes("3")) {
            return arrays = neighb;
        } else if (arrays.includes("2")) {
            return arrays = boop;
        } else if (arrays.includes("1")) {
            return arrays = beep;
        } else {
            return arrays;
        };
    });
    return robog;
};


$(document).ready(function() {
    $("form#submit").submit(function(event) {
        event.preventDefault();
        let roboger = parseInt($("input#robo").val());
        let results = robo(roboger);
        $("#answer").text(results);
        $("#answer").show();
    });
});