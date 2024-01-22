document.addEventListener("DOMContentLoaded", function() {
    let button1 = document.querySelector(".leesMeer1");
    let button2 = document.querySelector(".leesMeer2");
    let button3 = document.querySelector(".leesMeer3");

    let hiddenText1 = document.querySelector(".hiddenText1");
    let hiddenText2 = document.querySelector(".hiddenText2");
    let hiddenText3 = document.querySelector(".hiddenText3");

    button1.addEventListener("click", function() {
        leesMeer("feature1", hiddenText1, button1);
        console.log('test1')
    });

    button2.addEventListener("click", function() {
        leesMeer("feature2", hiddenText2, button2);
        console.log('test2')
    });

    button3.addEventListener("click", function() {
        leesMeer("feature3", hiddenText3, button3);
        console.log('test3')
    });

    function leesMeer(featureId, hiddenText, button) {
        var feature = document.getElementById(featureId);
        
        if(feature.style.height == '206px'){
            feature.style.height = '400px'
            feature.style.width = '320px'

            hiddenText.style.display = "block"
            
            button.textContent = "minder tekst";
            
        } else{
            feature.style.height = '206px'
            feature.style.width = '266px'

            hiddenText.style.display = "none"

            button.textContent = "lees meer";
        }
       
    }
});
