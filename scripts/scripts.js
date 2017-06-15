// Not DRY, may refactor later
function emailWebPhone(){ $( ".emailWebPhone" ).toggle(); }
function digits(){ $( ".digits" ).toggle(); }

function computation(){ $( ".computation" ).fadeToggle(); }
function projects(){ $( ".projects" ).fadeToggle(); }
function fellows(){ $( ".fellows" ).fadeToggle(); }
function interests(){ $( ".interests" ).fadeToggle(); }
function professional(){ $( ".professional" ).fadeToggle(); }

function cat(){ $( ".cat" ).toggle(); }
function founder(){ $( ".founder" ).toggle(); }
function hacker(){ $( ".hacker" ).toggle(); }
function launchcode(){ $( ".launchcode" ).toggle(); }
function publication(){ $( ".publication" ).toggle(); }

var state = document.getElementById("technicolor_btn").value="OFF";
function toggleTechnicolor(state) {
    if(state.value=="OFF"){
        state.value="ON";
    } else if(state.value=="ON"){
        state.value="OFF";
    }
    console.log(state.value);
    technicolor_off(state.value);
    return state.value
}

function technicolor_off(state){
    if (state=="OFF") {
        $('body').css('color', 'black');
        $('a').css('color', 'black');
    }
}

// relative to current window tracks mouse position
$("body").mousemove(function(e) {
    var x = e.pageX;
    var y = e.pageY;
    var state = document.getElementById("technicolor_btn").value;

    // only track position when button is on
    if (state == "ON") {
        var position = document.getElementById("position").innerHTML = 'x=' + x + ', y=' + y;

        // only fire while state is ON and less often with modulus
        if (x % 10 == 0 | y % 10 == 0) {
            var a = x % 255;
            var b = y % 255;
            var c = 255;
            var current_color = "rgb(" + a + ", " + b + ", " + c + ")"

            // only using jQuery for a few things
            $('body').css('color', current_color);
            $('a').css('color', current_color);
            $("#rgb").text(current_color);
        }
    // }
    } else {
        document.getElementById("rgb").innerHTML = '';
        document.getElementById("position").innerHTML = '';
    }
})
