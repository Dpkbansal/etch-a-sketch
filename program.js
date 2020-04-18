let n=prompt("Enter the number of rows and columns required to create a sketchpad. Range(2-100)", "");
        let rowsAndColumns="";

            if(n>1 && n<=100){
                rowsAndColumns = "repeat("+n+",auto)";
            }
            else{
                alert("Please enter a valid input");
                rowsAndColumns=0;
            }

                const divMain = document.querySelector("#grid");
                divMain.style.display="grid";
                divMain.style.gridTemplateRows = rowsAndColumns;
                divMain.style.gridTemplateColumns = rowsAndColumns;
                divMain.style.position="absolute";
                divMain.style.height = "60vh";
                divMain.style.width = "30vw";
                divMain.style.border ="2px solid black";
                divMain.style.left= "50vw";
                divMain.style.margin = "auto auto auto -15vw";

            if(n>1 && n<=100){
                for(let j=1;j<=n*n;j++){
                    const div = document.createElement('div');
                    div.classList.add('child');
                    div.style.border="1px solid #CCC";
                    divMain.appendChild(div);
                }
            }
            else{
                n=0;
            }

            function randomColor(){
                let divs = document.querySelectorAll('.child');
                    divs.forEach((div)=> {
                        div.addEventListener('mouseover',function() {
                            let hexString = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
                            let color1 =hexString[Math.floor(Math.random()*hexString.length)];
                            let color2 =hexString[Math.floor(Math.random()*hexString.length)];
                            let color3 =hexString[Math.floor(Math.random()*hexString.length)];
                            let color4 =hexString[Math.floor(Math.random()*hexString.length)];
                            let color5 =hexString[Math.floor(Math.random()*hexString.length)];
                            let color6 =hexString[Math.floor(Math.random()*hexString.length)];
                            div.style.backgroundColor = "#"+color1+color2+color3+color4+color5+color6;
                        })
                    })
            }

            function blackColor(){
                let divs = document.querySelectorAll('.child');
                    divs.forEach((div)=> {
                        div.addEventListener('mouseover',function() {
                        div.style.backgroundColor = "black";
                        })
                        div.addEventListener('touchmove',function() {
                        div.style.backgroundColor = "black";
                        })                
                    })
            }

            const button = document.querySelector('#clear');
                button.addEventListener('click',function(){
                    const children = document.querySelectorAll(".child");
                        children.forEach((div) => {
                            div.style.backgroundColor = "white";
                        })
                });

            const randomButton = document.querySelector('#random');
                randomButton.addEventListener('click',randomColor);

            const blackButton = document.querySelector('#black');
                blackButton.addEventListener('click',blackColor);