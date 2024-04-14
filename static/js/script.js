document.addEventListener("DOMContentLoaded", function() {
    let canvas = document.querySelector("canvas");
    
    let ctx = canvas.getContext("2d");
    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;
    let str = "A+jk js:2 @dfs17 tr YY ufds 28Tz op0 Ig_ 34*= {23RT &qwK #fKb $hJ ()! :? &*dUF WE4 5$K bUi";
    let matrix = str.split("");
    let font = 12;
    let col = width / font;
    let arr = [];
    
    for (let i = 0; i < col; i++)
    {
        arr[i] = 1;
    }
    
    const draw = () => {
        ctx.fillStyle = "rgba(0,0,0,0.05)";
        ctx.fillRect(0,0,width,height);
        ctx.fillStyle = "#009000";
        ctx.font = `${font}px system-ui`;
    
        for (let i = 0; i < arr.length; i++)
        {
            let txt = matrix[Math.floor(Math.random() * matrix.length)];
            ctx.fillText(txt, i * font, arr[i] * font);
        
            if (arr[i] * font > height && Math.random() > 0.975)
            {
                arr[i] = 0;
            }
            arr[i]++;
        
        }
    }
    
    setInterval(draw, 25);
    
    window.addEventListener("resize", () => location.reload());
    
    
    // Get the button element
    var copyButton = document.getElementById("copyButton");
    // Add click event listener to the button
    copyButton.addEventListener("click", function() {
        // Get the content of the <p> tag
        var passwordContent = document.querySelector(".result").textContent;
        // Copy the content to the clipboard
        navigator.clipboard.writeText(passwordContent)
            .then(function() {
                // Alert user that content was copied successfully
                alert("Content copied to clipboard: " + passwordContent);
            })
            .catch(function(error) {
                // Handle error
                console.error("Could not copy content: ", error);
            });
    });

});