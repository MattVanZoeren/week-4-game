
        //set initial variables here
        var crystal = {
            blue: {
                name: "Blue",
                value: 0,
            },
            green: {
                name:"Green",
                value: 0,
            },
            yellow: {
                name:"Yellow",
                value: 0,
            },
            red: {
                name: "Red",
                value: 0,
            }
        };
        var winNumber = 0;
        var lossNumber = 0;
        var currentCount = 0;
        var numberGenerated = 0;



        //this function will set the counts for each crystal and set the initial score to 0, then
        //it will run our random number function
        var onStartup = function() {
            crystal.blue.value = Math.floor((Math.random() * 12 + 1));
            crystal.green.value = Math.floor((Math.random() * 12 + 1));
            crystal.yellow.value = Math.floor((Math.random() * 12 + 1));
            crystal.red.value = Math.floor((Math.random() * 12 + 1));
            console.log(crystal.blue.value, crystal.green.value, crystal.yellow.value, crystal.red.value)

            currentCount = 0;
            $(".crystalCount").html(currentCount);

            generateRandomNumber();
        };

        //this function will generate the random number we must match
        var generateRandomNumber = function() {   
            numberGenerated = Math.floor((Math.random() * 100 + 19));
            console.log("Number Generated: " + numberGenerated);
            $(".numberToMatch").html(numberGenerated);
        };



        //this set of onclick functions will increase the crystal count by the appropriate number per crystal,
        //and then check to see if there is a win or loss after the click
        $(".blueCrystal").click(function() {
            currentCount = currentCount + crystal.blue.value;
            $(".crystalCount").html(currentCount);
            checkWinLoss();
        });

        $(".greenCrystal").click(function() {
            currentCount = currentCount + crystal.green.value;
            $(".crystalCount").html(currentCount);
            checkWinLoss();
        });

        $(".yellowCrystal").click(function() {
            currentCount = currentCount + crystal.yellow.value;
            $(".crystalCount").html(currentCount);
            checkWinLoss();
        });

        $(".redCrystal").click(function() {
            currentCount = currentCount + crystal.red.value;
            $(".crystalCount").html(currentCount);
            checkWinLoss();
        });



        var checkWinLoss = function() {
            //if the numbers are equal, then we add a tally to the win number and then restart the game
            //if the crystalcount is too high, we add a tally to the loss number and then restart the game
            if(currentCount === numberGenerated) {
                winNumber ++;
                $(".wins").html(winNumber);
                onStartup();
            }
            else if(currentCount > numberGenerated) {
                lossNumber ++;
                $(".losses").html(lossNumber);
                onStartup();
            }
        };

        onStartup();
