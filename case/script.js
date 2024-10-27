const light_count = 6;
let current_light = -1;
let direction = "RIGHT";
let intervalId = null;

updateLight = () => {
    if (direction==="RIGHT"){
        current_light++;
        $(".light").css("background", "black");
        $(".light").eq(current_light).css("background", "crimson");
        $(".light").eq(current_light-1).css("background", "lightcoral");
        $(".light").eq(current_light-2).css("background", "lightpink");


        if(current_light == light_count-1){
            direction = "LEFT";
        }
    }else {
        current_light--;
        $(".light").css("background", "black");
        $(".light").eq(current_light).css("background", "crimson");
        $(".light").eq(current_light+1).css("background", "lightcoral");
        $(".light").eq(current_light+2).css("background", "lightpink");

        if (current_light == 0){
            direction = "RIGHT";
        }
    }

}

$('#start').on('click', function (){
    intervalId = setInterval(updateLight,100);
});

$('#stop').on('click', function (){
    clearInterval(intervalId);
});