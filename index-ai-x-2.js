var format = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
var aa = 0; bb = 0; cc = 0; dd = 0; ee = 0; ff = 0; gg = 0; hh = 0;

var bestMove = []; ChosenTile = []
function pcMove() {
    if (format[0][0] === "x" && format[0][1] === "x" && format[0][2] === 0 || format[0][1] === "x" && format[0][2] === "x" && format[0][0] === 0 || format[0][2] === "x" && format[0][0] === "x" && format[0][1] === 0) {
        for (var i = 0; i < 3; i++) {
            if (format[0][i] === 0) {

                $(".btn" + "0" + i.toString()).css("font-size", "50px")
                $(".btn" + "0" + i.toString()).css("color", "white")
                $(".btn" + "0" + i.toString()).text("X")
                format[0][i] = "x"
                document.getElementById("0" + i.toString()).disabled = true;
                $(".title").text("COMPUTER WON..!! GAME OVER!!");
                $(".tiletop").append("<hr class='newhorizontal1'>");
                $(".newhorizontal1").animate({
                    opacity: 1
                }, "slow")
                start = false
                for (var i = 0; i < 3; i++) {
                    for (var j = 0; j < 3; j++) {
                        if (i === 0) {
                            continue;
                        }
                        else if (format[i][j] !== 0) {
                            $(".btn" + i.toString() + j.toString()).addClass("over")

                        }
                        else {
                            $(".btn" + i.toString() + j.toString()).addClass("over")
                            document.querySelector(".btn" + i.toString() + j.toString()).disabled = true;
                        }
                    }
                }
                startAgain()

            }
        }
    }
    else if (format[1][0] === "x" && format[1][1] === "x" && format[1][2] === 0 || format[1][1] === "x" && format[1][2] === "x" && format[1][0] === 0 || format[1][2] === "x" && format[1][0] === "x" && format[1][1] === 0) {
        for (var i = 0; i < 3; i++) {
            if (format[1][i] === 0) {

                $(".btn" + "1" + i.toString()).css("font-size", "50px")
                $(".btn" + "1" + i.toString()).css("color", "white")
                $(".btn" + "1" + i.toString()).text("X")
                format[1][i] = "x"
                document.getElementById("1" + i.toString()).disabled = true;
                $(".title").text("COMPUTER WON..!! GAME OVER!!");
                $(".tiletop").append("<hr class='newhorizontal2'>");
                $(".newhorizontal2").animate({
                    opacity: 1
                }, "slow")
                start = false
                for (var i = 0; i < 3; i++) {
                    for (var j = 0; j < 3; j++) {
                        if (i === 1) {
                            continue;
                        }
                        else if (format[i][j] !== 0) {
                            $(".btn" + i.toString() + j.toString()).addClass("over")

                        }
                        else {
                            $(".btn" + i.toString() + j.toString()).addClass("over")
                            document.querySelector(".btn" + i.toString() + j.toString()).disabled = true;
                        }
                    }
                }
                startAgain()

            }
        }
    }
    else if (format[2][0] === "x" && format[2][1] === "x" && format[2][2] === 0 || format[2][1] === "x" && format[2][2] === "x" && format[2][0] === 0 || format[2][2] === "x" && format[2][0] === "x" && format[2][1] === 0) {
        for (var i = 0; i < 3; i++) {
            if (format[2][i] === 0) {

                $(".btn" + "2" + i.toString()).css("font-size", "50px")
                $(".btn" + "2" + i.toString()).css("color", "white")
                $(".btn" + "2" + i.toString()).text("X")
                format[2][i] = "x"
                document.getElementById("2" + i.toString()).disabled = true;
                $(".title").text("COMPUTER WON..!! GAME OVER!!");
                $(".tiletop").append("<hr class='newhorizontal3'>");
                $(".newhorizontal3").animate({
                    opacity: 1
                }, "slow")
                start = false
                for (var i = 0; i < 3; i++) {
                    for (var j = 0; j < 3; j++) {
                        if (i === 2) {
                            continue;
                        }
                        else if (format[i][j] !== 0) {
                            $(".btn" + i.toString() + j.toString()).addClass("over")

                        }
                        else {
                            $(".btn" + i.toString() + j.toString()).addClass("over")
                            document.querySelector(".btn" + i.toString() + j.toString()).disabled = true;
                        }
                    }
                }
                startAgain()

            }
        }
    }
    else if (format[0][0] === "x" && format[1][0] === "x" && format[2][0] === 0 || format[1][0] === "x" && format[2][0] === "x" && format[0][0] === 0 || format[2][0] === "x" && format[0][0] === "x" && format[1][0] === 0) {
        for (var i = 0; i < 3; i++) {
            if (format[i][0] === 0) {

                $(".btn" + i.toString() + "0").css("font-size", "50px")
                $(".btn" + i.toString() + "0").css("color", "white")
                $(".btn" + i.toString() + "0").text("X")
                format[i][0] = "x"
                document.getElementById(i.toString() + "0").disabled = true;
                $(".title").text("COMPUTER WON..!! GAME OVER!!");
                $(".tiletop").append("<hr class='newvertical1'>");
                $(".newvertical1").animate({
                    opacity: 1
                }, "slow")
                start = false
                for (var i = 0; i < 3; i++) {
                    for (var j = 0; j < 3; j++) {
                        if (j === 0) {
                            continue;
                        }
                        else if (format[i][j] !== 0) {
                            $(".btn" + i.toString() + j.toString()).addClass("over")

                        }
                        else {
                            $(".btn" + i.toString() + j.toString()).addClass("over")
                            document.querySelector(".btn" + i.toString() + j.toString()).disabled = true;
                        }
                    }
                }
                startAgain()

            }
        }
    }
    else if (format[0][1] === "x" && format[1][1] === "x" && format[2][1] === 0 || format[1][1] === "x" && format[2][1] === "x" && format[0][1] === 0 || format[2][1] === "x" && format[0][1] === "x" && format[1][1] === 0) {
        for (var i = 0; i < 3; i++) {
            if (format[i][1] === 0) {

                $(".btn" + i.toString() + "1").css("font-size", "50px")
                $(".btn" + i.toString() + "1").css("color", "white")
                $(".btn" + i.toString() + "1").text("X")
                format[i][1] = "x"
                document.getElementById(i.toString() + "1").disabled = true;
                $(".title").text("COMPUTER WON..!! GAME OVER!!");
                $(".tiletop").append("<hr class='newvertical2'>");
                $(".newvertical2").animate({
                    opacity: 1
                }, "slow")
                start = false
                for (var i = 0; i < 3; i++) {
                    for (var j = 0; j < 3; j++) {
                        if (j === 1) {
                            continue;
                        }
                        else if (format[i][j] !== 0) {
                            $(".btn" + i.toString() + j.toString()).addClass("over")

                        }
                        else {
                            $(".btn" + i.toString() + j.toString()).addClass("over")
                            document.querySelector(".btn" + i.toString() + j.toString()).disabled = true;
                        }
                    }
                }
                startAgain()
            }
        }
    }
    else if (format[0][2] === "x" && format[1][2] === "x" && format[2][2] === 0 || format[1][2] === "x" && format[2][2] === "x" && format[0][2] === 0 || format[2][2] === "x" && format[0][2] === "x" && format[1][2] === 0) {
        for (var i = 0; i < 3; i++) {
            if (format[i][2] === 0) {

                $(".btn" + i.toString() + "2").css("font-size", "50px")
                $(".btn" + i.toString() + "2").css("color", "white")
                $(".btn" + i.toString() + "2").text("X")
                format[i][2] = "x"
                document.getElementById(i.toString() + "2").disabled = true;
                $(".title").text("COMPUTER WON..!! GAME OVER!!");
                $(".tiletop").append("<hr class='newvertical3'>");
                $(".newvertical3").animate({
                    opacity: 1
                }, "slow")
                start = false
                for (var i = 0; i < 3; i++) {
                    for (var j = 0; j < 3; j++) {
                        if (j === 2) {
                            continue;
                        }
                        else if (format[i][j] !== 0) {
                            $(".btn" + i.toString() + j.toString()).addClass("over")

                        }
                        else {
                            $(".btn" + i.toString() + j.toString()).addClass("over")
                            document.querySelector(".btn" + i.toString() + j.toString()).disabled = true;
                        }
                    }
                }

                startAgain()
            }
        }
    }
    else if (format[0][0] === "x" && format[1][1] === "x" && format[2][2] === 0 || format[1][1] === "x" && format[2][2] === "x" && format[0][0] === 0 || format[2][2] === "x" && format[0][0] === "x" && format[1][1] === 0) {
        for (var i = 0; i < 3; i++) {
            if (format[i][i] === 0) {

                $(".btn" + i.toString() + i.toString()).css("font-size", "50px")
                $(".btn" + i.toString() + i.toString()).css("color", "white")
                $(".btn" + i.toString() + i.toString()).text("X")
                format[i][i] = "x"
                document.getElementById(i.toString() + i.toString()).disabled = true;
                $(".title").text("COMPUTER WON..!! GAME OVER!!");
                $(".tiletop").append("<hr class='newdiagonel1'>");
                $(".newdiagonel1").animate({
                    opacity: 1
                }, "slow")
                start = false
                for (var i = 0; i < 3; i++) {
                    for (var j = 0; j < 3; j++) {
                        if (i === j) {
                            continue;
                        }
                        else if (format[i][j] !== 0) {
                            $(".btn" + i.toString() + j.toString()).addClass("over")

                        }
                        else {
                            $(".btn" + i.toString() + j.toString()).addClass("over")
                            document.querySelector(".btn" + i.toString() + j.toString()).disabled = true;
                        }
                    }
                }

                startAgain()
            }
        }
    }
    else if (format[0][2] === "x" && format[1][1] === "x" && format[2][0] === 0 || format[1][1] === "x" && format[2][0] === "x" && format[0][2] === 0 || format[2][0] === "x" && format[0][2] === "x" && format[1][1] === 0) {
        for (var i = 0; i < 3; i++) {
            if (i === 1) {
                if (format[i][i] === 0) {

                    $(".btn" + i.toString() + i.toString()).css("font-size", "50px")
                    $(".btn" + i.toString() + i.toString()).css("color", "white")
                    $(".btn" + i.toString() + i.toString()).text("X")
                    format[i][i] = "x"
                    document.getElementById(i.toString() + i.toString()).disabled = true;


                }
                else if (format[i - 1][i + 1] === 0) {
                    userWins()
                    $(".btn" + (i - 1).toString() + (i + 1).toString()).css("font-size", "50px")
                    $(".btn" + (i - 1).toString() + (i + 1).toString()).css("color", "white")
                    $(".btn" + (i - 1).toString() + (i + 1).toString()).text("X")
                    format[i - 1][i + 1] = "x"
                    document.getElementById((i - 1).toString() + (i + 1).toString()).disabled = true;

                }
                else if (format[i + 1][i - 1] === 0) {
                    userWins()
                    $(".btn" + (i + 1).toString() + (i - 1).toString()).css("font-size", "50px")
                    $(".btn" + (i + 1).toString() + (i - 1).toString()).css("color", "white")
                    $(".btn" + (i + 1).toString() + (i - 1).toString()).text("X")
                    format[i + 1][i - 1] = "x"
                    document.getElementById((i + 1).toString() + (i - 1).toString()).disabled = true;


                }
                userWins()
                $(".title").text("COMPUTER WON..!! GAME OVER!!");
                $(".tiletop").append("<hr class='newdiagonel2'>");
                $(".newdiagonel2").animate({
                    opacity: 1
                }, "slow")
                start = false
                for (var i = 0; i < 3; i++) {
                    for (var j = 0; j < 3; j++) {
                        if (i === 0 && j === 2 || i === 2 && j === 0 || i === 1 && j === 1) {
                            continue;
                        }
                        else if (format[i][j] !== 0) {
                            $(".btn" + i.toString() + j.toString()).addClass("over")

                        }
                        else {
                            $(".btn" + i.toString() + j.toString()).addClass("over")
                            document.querySelector(".btn" + i.toString() + j.toString()).disabled = true;
                        }
                    }
                }

                startAgain()
            }
            else {
                continue
            }
        }
    }
    else if (format[0][0] === "o" && format[0][1] === "o" && format[0][2] === 0 && aa === 0 || format[0][1] === "o" && format[0][2] === "o" && format[0][0] === 0 && aa === 0 || format[0][2] === "o" && format[0][0] === "o" && format[0][1] === 0 && aa === 0) {
        for (var i = 0; i < 3; i++) {
            if (format[0][i] === 0) {
                $(".btn" + "0" + i.toString()).css("font-size", "50px")
                $(".btn" + "0" + i.toString()).css("color", "white")
                $(".btn" + "0" + i.toString()).text("X")
                format[0][i] = "x"
                document.getElementById("0" + i.toString()).disabled = true;


            }
        }
        aa = 1
    }
    else if (format[1][0] === "o" && format[1][1] === "o" && format[1][2] === 0 && bb === 0 || format[1][1] === "o" && format[1][2] === "o" && format[1][0] === 0 && bb === 0 || format[1][2] === "o" && format[1][0] === "o" && format[1][1] === 0 && bb === 0) {
        for (var i = 0; i < 3; i++) {
            if (format[1][i] === 0) {
                $(".btn" + "1" + i.toString()).css("font-size", "50px")
                $(".btn" + "1" + i.toString()).css("color", "white")
                $(".btn" + "1" + i.toString()).text("X")
                format[1][i] = "x"
                document.getElementById("1" + i.toString()).disabled = true;


            }
        }
        bb = 1
    }
    else if (format[2][0] === "o" && format[2][1] === "o" && format[2][2] === 0 && cc === 0 || format[2][1] === "o" && format[2][2] === "o" && format[2][0] === 0 && cc === 0 || format[2][2] === "o" && format[2][0] === "o" && format[2][1] === 0 && cc === 0) {
        for (var i = 0; i < 3; i++) {
            if (format[2][i] === 0) {
                $(".btn" + "2" + i.toString()).css("font-size", "50px")
                $(".btn" + "2" + i.toString()).css("color", "white")
                $(".btn" + "2" + i.toString()).text("X")
                format[2][i] = "x"
                document.getElementById("2" + i.toString()).disabled = true;


            }
        }
        cc = 1
    }
    else if (format[0][0] === "o" && format[1][0] === "o" && format[2][0] === 0 && dd === 0 || format[1][0] === "o" && format[2][0] === "o" && format[0][0] === 0 && dd === 0 || format[2][0] === "o" && format[0][0] === "o" && format[1][0] === 0 && dd === 0) {
        for (var i = 0; i < 3; i++) {
            if (format[i][0] === 0) {
                $(".btn" + i.toString() + "0").css("font-size", "50px")
                $(".btn" + i.toString() + "0").css("color", "white")
                $(".btn" + i.toString() + "0").text("X")
                format[i][0] = "x"
                document.getElementById(i.toString() + "0").disabled = true;


            }
        }
        dd = 1
    }
    else if (format[0][1] === "o" && format[1][1] === "o" && format[2][1] === 0 && ee === 0 || format[1][1] === "o" && format[2][1] === "o" && format[0][1] === 0 && ee === 0 || format[2][1] === "o" && format[0][1] === "o" && format[1][1] === 0 && ee === 0) {
        for (var i = 0; i < 3; i++) {
            if (format[i][1] === 0) {
                $(".btn" + i.toString() + "1").css("font-size", "50px")
                $(".btn" + i.toString() + "1").css("color", "white")
                $(".btn" + i.toString() + "1").text("X")
                format[i][1] = "x"
                document.getElementById(i.toString() + "1").disabled = true;


            }
        }
        ee = 1
    }
    else if (format[0][2] === "o" && format[1][2] === "o" && format[2][2] === 0 && ff === 0 || format[1][2] === "o" && format[2][2] === "o" && format[0][2] === 0 && ff === 0 || format[2][2] === "o" && format[0][2] === "o" && format[1][2] === 0 && ff === 0) {
        for (var i = 0; i < 3; i++) {
            if (format[i][2] === 0) {
                $(".btn" + i.toString() + "2").css("font-size", "50px")
                $(".btn" + i.toString() + "2").css("color", "white")
                $(".btn" + i.toString() + "2").text("X")
                format[i][2] = "x"
                document.getElementById(i.toString() + "2").disabled = true;


            }
        }
        ff = 1
    }
    else if (format[0][0] === "o" && format[1][1] === "o" && format[2][2] === 0 && gg === 0 || format[1][1] === "o" && format[2][2] === "o" && format[0][0] === 0 && gg === 0 || format[2][2] === "o" && format[0][0] === "o" && format[1][1] === 0 && gg === 0) {
        for (var i = 0; i < 3; i++) {
            if (format[i][i] === 0) {
                $(".btn" + i.toString() + i.toString()).css("font-size", "50px")
                $(".btn" + i.toString() + i.toString()).css("color", "white")
                $(".btn" + i.toString() + i.toString()).text("X")
                format[i][i] = "x"
                document.getElementById(i.toString() + i.toString()).disabled = true;


            }
        }
        gg = 1
    }
    else if (format[0][2] === "o" && format[1][1] === "o" && format[2][0] === 0 && hh === 0 || format[1][1] === "o" && format[2][0] === "o" && format[0][2] === 0 && hh === 0 || format[2][0] === "o" && format[0][2] === "o" && format[1][1] === 0 && hh === 0) {
        for (var i = 0; i < 3; i++) {
            if (i === 1) {
                if (format[i][i] === 0) {
                    $(".btn" + i.toString() + i.toString()).css("font-size", "50px")
                    $(".btn" + i.toString() + i.toString()).css("color", "white")
                    $(".btn" + i.toString() + i.toString()).text("X")
                    format[i][i] = "x"
                    document.getElementById(i.toString() + i.toString()).disabled = true;

                }
                else if (format[i - 1][i + 1] === 0) {
                    $(".btn" + (i - 1).toString() + (i + 1).toString()).css("font-size", "50px")
                    $(".btn" + (i - 1).toString() + (i + 1).toString()).css("color", "white")
                    $(".btn" + (i - 1).toString() + (i + 1).toString()).text("X")
                    format[i - 1][i + 1] = "x"
                    document.getElementById((i - 1).toString() + (i + 1).toString()).disabled = true;

                }
                else if (format[i + 1][i - 1] === 0) {
                    $(".btn" + (i + 1).toString() + (i - 1).toString()).css("font-size", "50px")
                    $(".btn" + (i + 1).toString() + (i - 1).toString()).css("color", "white")
                    $(".btn" + (i + 1).toString() + (i - 1).toString()).text("X")
                    format[i + 1][i - 1] = "x"
                    document.getElementById((i + 1).toString() + (i - 1).toString()).disabled = true;

                }

            }
            else {
                continue
            }
        }
        hh = 1
    }
    else {
        newStartMove()
    }
}

function newStartMove() {
    var value1 = Math.floor((Math.random() * 3))
    var value2 = Math.floor((Math.random() * 3))
    if (format[value1][value2] === 0) {
        format[value1][value2] = "x"
        $(".btn" + value1.toString() + value2.toString()).css("font-size", "50px")
        $(".btn" + value1.toString() + value2.toString()).css("color", "white")
        $(".btn" + value1.toString() + value2.toString()).text("X")
        document.getElementById(value1.toString() + value2.toString()).disabled = true;
    }
    else if (count <= 5) {
        newStartMove()
    }
}


var returnvalue = 0
function userWins() {
    if (format[0][0] === "o" && format[0][1] === "o" && format[0][2] === "o") {
        $(".title").text("YOU WON..!! GAME OVER!!");
        $(".tiletop").append("<hr class='newhorizontal1'>");
        $(".newhorizontal1").animate({
            opacity: 1
        }, "slow")
        start = false
        for (var i = 0; i < 3; i++) {
            for (var j = 0; j < 3; j++) {
                if (i === 0 && j === 0 || i === 0 && j === 1 || i === 0 && j === 2) {
                    continue;
                }
                else if (format[i][j] !== 0) {
                    $(".btn" + i.toString() + j.toString()).addClass("over")

                }
                else {
                    $(".btn" + i.toString() + j.toString()).addClass("over")

                }
                document.querySelector(".btn" + i.toString() + j.toString()).disabled = true;

            }
        }
        returnvalue = 1
        
    }
    else if (format[1][0] === "o" && format[1][1] === "o" && format[1][2] === "o") {
        $(".title").text("YOU WON..!! GAME OVER!!");
        $(".tiletop").append("<hr class='newhorizontal2'>");
        $(".newhorizontal1").animate({
            opacity: 1
        }, "slow")
        start = false
        for (var i = 0; i < 3; i++) {
            for (var j = 0; j < 3; j++) {
                if (i === 1 && j === 0 || i === 1 && j === 1 || i === 1 && j === 2) {
                    continue;
                }
                else if (format[i][j] !== 0) {
                    $(".btn" + i.toString() + j.toString()).addClass("over")

                }
                else {
                    $(".btn" + i.toString() + j.toString()).addClass("over")
                }
                document.querySelector(".btn" + i.toString() + j.toString()).disabled = true;


            }
        }
        returnvalue = 1
    }
    else if (format[2][0] === "o" && format[2][1] === "o" && format[2][2] === "o") {
        $(".title").text("YOU WON..!! GAME OVER!!");
        $(".tiletop").append("<hr class='newhorizontal3'>");
        $(".newhorizontal1").animate({
            opacity: 1
        }, "slow")
        start = false
        for (var i = 0; i < 3; i++) {
            for (var j = 0; j < 3; j++) {
                if (i === 2 && j === 0 || i === 2 && j === 1 || i === 2 && j === 2) {
                    continue;
                }
                else if (format[i][j] !== 0) {
                    $(".btn" + i.toString() + j.toString()).addClass("over")

                }
                else {
                    $(".btn" + i.toString() + j.toString()).addClass("over")
                }
                document.querySelector(".btn" + i.toString() + j.toString()).disabled = true;

            }
        }
        returnvalue = 1
    }
    else if (format[0][0] === "o" && format[1][0] === "o" && format[2][0] === "o") {
        $(".title").text("YOU WON..!! GAME OVER!!");
        $(".tiletop").append("<hr class='newvertical1'>");
        $(".newvertical1").animate({
            opacity: 1
        }, "slow")
        start = false
        for (var i = 0; i < 3; i++) {
            for (var j = 0; j < 3; j++) {
                if (i === 0 && j === 0 || i === 1 && j === 0 || i === 2 && j === 0) {
                    continue;
                }
                else if (format[i][j] !== 0) {
                    $(".btn" + i.toString() + j.toString()).addClass("over")

                }
                else {
                    $(".btn" + i.toString() + j.toString()).addClass("over")
                }
                document.querySelector(".btn" + i.toString() + j.toString()).disabled = true;

            }
        }
        returnvalue = 1
    }
    else if (format[0][1] === "o" && format[1][1] === "o" && format[2][1] === "o") {
        $(".title").text("YOU WON..!! GAME OVER!!");
        $(".tiletop").append("<hr class='newvertical2'>");
        $(".newvertical2").animate({
            opacity: 1
        }, "slow")
        start = false
        for (var i = 0; i < 3; i++) {
            for (var j = 0; j < 3; j++) {
                if (i === 0 && j === 1 || i === 1 && j === 1 || i === 2 && j === 1) {
                    continue;
                }
                else if (format[i][j] !== 0) {
                    $(".btn" + i.toString() + j.toString()).addClass("over")

                }
                else {
                    $(".btn" + i.toString() + j.toString()).addClass("over")
                }
                document.querySelector(".btn" + i.toString() + j.toString()).disabled = true;


            }
        }
        returnvalue = 1
    }
    else if (format[0][2] === "o" && format[1][2] === "o" && format[2][2] === "o") {
        $(".title").text("YOU WON..!! GAME OVER!!");
        $(".tiletop").append("<hr class='newvertical3'>");
        $(".newvertical3").animate({
            opacity: 1
        }, "slow")
        start = false
        for (var i = 0; i < 3; i++) {
            for (var j = 0; j < 3; j++) {
                if (i === 0 && j === 2 || i === 1 && j === 2 || i === 2 && j === 2) {
                    continue;
                }
                else if (format[i][j] !== 0) {
                    $(".btn" + i.toString() + j.toString()).addClass("over")

                }
                else {
                    $(".btn" + i.toString() + j.toString()).addClass("over")
                }
                document.querySelector(".btn" + i.toString() + j.toString()).disabled = true;


            }
        }
        returnvalue = 1
    }
    else if (format[0][0] === "o" && format[1][1] === "o" && format[2][2] === "o") {
        $(".title").text("YOU WON..!! GAME OVER!!");
        $(".tiletop").append("<hr class='newdiagonel1'>");
        $(".newdiagonel1").animate({
            opacity: 1
        }, "slow")
        start = false
        for (var i = 0; i < 3; i++) {
            for (var j = 0; j < 3; j++) {
                if (i === 0 && j === 0 || i === 1 && j === 1 || i === 2 && j === 2) {
                    continue;
                }
                else if (format[i][j] !== 0) {
                    $(".btn" + i.toString() + j.toString()).addClass("over")

                }
                else {
                    $(".btn" + i.toString() + j.toString()).addClass("over")
                }
                document.querySelector(".btn" + i.toString() + j.toString()).disabled = true;


            }
        }
        returnvalue = 1
    }
    else if (format[0][2] === "o" && format[1][1] === "o" && format[2][0] === "o") {
        $(".title").text("YOU WON..!! GAME OVER!!");
        $(".tiletop").append("<hr class='newdiagonel2'>");
        $(".newdiagonel2").animate({
            opacity: 1
        }, "slow")
        start = false
        for (var i = 0; i < 3; i++) {
            for (var j = 0; j < 3; j++) {
                if (i === 0 && j === 2 || i === 1 && j === 1 || i === 2 && j === 0) {
                    continue;
                }
                else if (format[i][j] !== 0) {
                    $(".btn" + i.toString() + j.toString()).addClass("over")

                }
                else {
                    $(".btn" + i.toString() + j.toString()).addClass("over")
                }
                document.querySelector(".btn" + i.toString() + j.toString()).disabled = true;


            }
        }
        returnvalue = 1
    }
}

function checkDraw() {
    while (count === 5) {
        for (var i = 0; i < 3; i++) {
            for (var j = 0; j < 3; j++) {
                if (format[i][j] !== 0) {
                    $(".btn" + i.toString() + j.toString()).addClass("over")
                    $(".title").text("GAME DRAW")
                }
            }
        }
        count = 6
        startAgain()    

    }
}
var count = 0
function main() {
    $(".btn").one("click", function () {
        count = count + 1
        var userChosenTile = $(this).attr("id")
        $("#" + userChosenTile).css("font-size", "50px")
        $("#" + userChosenTile).css("color", "white")
        $("#" + userChosenTile).text("O")
        format[parseInt(userChosenTile[0])][parseInt(userChosenTile[1])] = "o"
        document.getElementById(userChosenTile).disabled = true;
        ChosenTile.push(userChosenTile)
        checkDraw()
        userWins()
        if (returnvalue !== 1) {
            pcMove()
        }
        else if(returnvalue === 1){
            startAgain()
        }

    })
}
function startGameAgain() {
    location.reload()
}
function gotomenu(){
    window.location.href="C:/Users/HP/OneDrive/Desktop/VS CODE PROJECTS/TIC TAC TOE/index-main.html"
}
function startAgain(){
    $(".index").append("<div><button class='gotomenubtn'><h4 class='gotomenutext'>GO TO MENU</h4></button></div>")
    $(".index").append("<div><button class='playagainbtn'><h4 class='playagaintext'>PLAY AGAIN</h4></button></div>")
    $(".playagainbtn").addClass("playagainbtn1")
    $(".playagainbtn").click(startGameAgain)
    $(".gotomenubtn").addClass("gotomenubtn1")
    $(".gotomenubtn").click(gotomenu)
   
}

main()





