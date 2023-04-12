"# Prep.js" 
<!DOCTYPE html>
<html>
    <script>
        var x = 10;
        let y = 20;
        let z;
        z = x + y;
        // x = 10;                  
        // y = 20;
        document.write(z);
    </script>
    <p id="demo"></p>
    <script>
        let n = "dawood" +" "+"Israr";
         document.getElementById("demo").innerHTML = n;
        // alert(n);
    </script>
    <h2>hosting</h2>
    <p id="dmo"></p>
    <script>
        try{
            carName = "Honda";
            let carName = "Honda";
            // document.getElementById("carName");
        }
        catch (err) {
            document.getElementById("dmo").innerHTML = err;
        }
    </script>
    <script>
        const car = ["volvo","honda","saab"];
        car[0] = "phtan car";
        car.push("volvo");
        car.color[1]  = "red";
        document.getElementById("demo").innerHTML = car;
    </script>
    
        <p id="demo"></p>
        <script>
            function myfunction(p1,p2)
            {
                return p1*p2;
            }
            document.getElementById("demo").innerHTML = myfunction(10,5);
            document.getElementById("demo").innerHTML = myfunction(10,500);
        </script>
    <script>
        function celi(f){
            return(5/9)*(f-32);
        }
        document.getElementById("demo").innerHTML = celi(69);
    </script>
    
    
</html>
