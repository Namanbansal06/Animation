moving_cloud2();
moving_cloud1();
moving_boat();
function moving_cloud2() {
    var cloud_element1 = document.getElementById('cloud1');
    var x1 = 0;
    var x2 = 150;
    var y1 = 0;
    var y2 = 0;
    var change = 0;
    setInterval(animate, 90);
    function animate() {
        change += 0.032;
        x1 = 800 + Math.sin(change) * x2;
        y1 = 10 + Math.sin(change) * y2;
        cloud_element1.style.left = x1 + "px";
        cloud_element1.style.top = y1 + "px";
    }
}

function moving_cloud1() {
    var cloud_element2 = document.getElementById('cloud2');
    var x1 = 0;
    var x2 = 100;
    var change = 0;
    setInterval(animate, 100);
    function animate() {
        change += 0.032;
        x1 = 60 + Math.sin(change) * x2;
        cloud_element2.style.left = x1 + "px";
    }
}

function moving_boat() {
    var boating = document.getElementById('boat');
    var a=0;
    var x1 = 0;
    var x2 = 420;
    var change = 0;
    setInterval(animate, 200);
    function animate() {
        change += 0.054;
        x1 = 650 + Math.sin(change) * x2;
        boating.style.left = x1 + "px";
        if(x1==1069.9951690116095){
        boating.src="image/revertboat.png";
         document.getElementById("sky").src="image/nightsky2.png";
         document.getElementById("moon").src="image/moon.png";}
         else if(x1==230.04347822870523)
         {
            boating.src="image/boat.png";
            document.getElementById("sky").src="image/sky2.png";
            document.getElementById("moon").src="image/sun2.png";
         }
        console.log(x1);
    }
}