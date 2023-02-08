let columns = document.querySelectorAll("div.coluna");
                show1 = document.getElementById("hover_1");

            window.onload = function (){
                show1.style.visibility = "hidden";
            }

            columns.onmouseover = function (){
                columns.style.opacity = .5;
                show1.style.visibility = "visible"
                
            }
            columns.onmouseout = function (){
                columns.style.opacity = "1";
                show1.style.visibility = "hidden"
            }
        