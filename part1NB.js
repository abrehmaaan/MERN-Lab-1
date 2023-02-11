const fs = require('fs');
fs.mkdir('Part1', (err)=>{
    if(err) {
        console.log('Error = '+err);
    }
    else{
        console.log("Folder Created!");
        fs.writeFile('Part1/test.txt', '04071913025', (err)=>{
            if(err){
                console.log('Error = '+err);
            }
            else{
                console.log("File Created!\nData Written!");
                fs.readFile('Part1/test.txt', 'utf-8', (err, regNo)=>{
                    if(err) {
                        console.log('Error = '+err);
                    }
                    else {
                        console.log("File Read!");
                        console.log("Registration No = "+regNo);
                        regNo = regNo.substring(7);
                        fs.writeFile('Part1/test.txt', regNo, (err)=>{
                            if(err) {
                                console.log('Error = '+err);
                            }
                            else{
                                console.log("Last four digits written!");
                                fs.readFile('Part1/test.txt', 'utf-8', (err, regNo)=>{
                                    if(err) {
                                        console.log('Error = '+err);
                                    }
                                    else {
                                        console.log("File Read");
                                        console.log("Registration No = "+regNo);
                                        fs.writeFile('Part1/test.txt', '', (err)=>{
                                            if(err) {
                                                console.log('Error = '+err);
                                            }
                                            else{
                                                console.log("File Erased!");
                                                fs.writeFile('Part1/test.txt', '04071913025', (err)=>{
                                                    if(err) {
                                                        console.log('Error = '+err);
                                                    }
                                                    else{
                                                        console.log("File Written");
                                                    }
                                                });
                                            }
                                        });
                                    }
                                });
                            }
                        });
                    }
                });
            }
        });
    }
});