<!DOCTYPE html>
<html>
    <body>
        <h2>call back function</h2>
        <p id="demo"></p>
        <p id="dm"></p>
        <p id="dmo"></p>
        <p id="dem"></p>
        <script>
            
            function display(value){
                document.getElementById("demo").innerHTML = value;
            }
            function add(a, b, callback){
                let sum = a + b;
                callback(sum);
            }
            add(5,689,display);


            setTimeout(myfunction, 2000);
            
                function myfunction(){
                document.getElementById("dm").innerHTML = "i love coding";
            }


            setInterval(fun, 3000);
            
                function fun(){
                    let d = new Date();
                    document.getElementById("dmo").innerHTML = d.getHours() +":"+ d.getMinutes() +":" + d.getSeconds();
            }

            function displyer(something){
                document.getElementById("dem").innerHTML = something;
            }
            async function chk(){
                return "hello";
            }
            chk().then(
                function(value){displyer(value);},
                function(error){displyer(error);}
            );

        </script>

    </body>
</html>
