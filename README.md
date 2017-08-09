# loadingjs


$('body').loading(); to show loading
$('body').loading('stop'); to hide loading
configuraciones

$('body').loading({
            message:"Loading", //message in center loading
            background:"rgba(255,255,255,0.75)", //color of overlay
            textcolor:"#000000", //color of text
            overlay:true, // is show overlay
            configLoading:[ //config for default 
            //each element is a line
                {
                    width:150, // size of circle
                    border:"3px", // border of line
                    color:"#3498db", //color of line
                    effect:"spin", //effect for line
                    time:"1.5s" // time of effect
                },
                {
                    width:130,
                    border:"3px",
                    color:"#e74c3c",
                    effect:"spinR",
                    time:"1.5s"
                },
                {
                    width:110,
                    border:"3px",
                    color:"#f9c922",
                    effect:"spin",
                    time:"1s"
                }
            ],
            custom:[
            {
            display: "block",
            position: "absolute",
            left: "50%",
            top: "50%",
            width: "50px",
            height: "50px",
            margin: "-25px 0 0 -25px",
            "border-radius": "50%",
            border: "3px solid transparent",
            "border-top-color": "red",
            "z-index": "7500",
            "-webkit-animation": "spin 2s linear infinite", /* Chrome, Opera 15+, Safari 5+ */
            "animation": "spinR 0.5s linear infinite"
            }
            ] // create element width config css 
});
