var ans=document.getElementById("textarea").value = eval(x);
            
            function myFunction(){
                var x = document.getElementById("textarea").value;
                document.getElementById("textarea").value = eval(x)
                var ans=document.getElementById("textarea").value = eval(x);
            }
            function myFunction1(){
                var x = document.getElementById("textarea").value;
                var string=x.substring(0, x.length-1);
                document.getElementById("textarea").value = string
            } 
            function myFunction2(){
                var x = document.getElementById("textarea").value;
                var string=x.substring(0, x.length-1);
                document.getElementById("textarea").value +=document.getElementById("textarea").value = eval(string);
            } 
            function myFunction3(){
                var x = document.getElementById("textarea").value;
                document.getElementById("textarea").value=eval(Math.log10(x))
            }
            function myFunction4(){
                var x = document.getElementById("textarea").value;
                document.getElementById("textarea").value=eval(Math.log(x))
            }
            function myFunction5(){
                var x = document.getElementById("textarea").value;
                document.getElementById("textarea").value = eval(Math.sqrt(x));
            }