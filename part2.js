const fs = require('fs');
fs.writeFileSync('A.txt', 'IP Addresses of Class A\n');
fs.writeFileSync('B.txt', 'IP Addresses of Class B\n');
fs.writeFileSync('C.txt', 'IP Addresses of Class C\n');
let data = fs.readFileSync('IPs.txt', 'utf-8');
let IPs = data.split(/\r?\n|\r|\n/g);
for(let IP of IPs){
    let octates = IP.split(".");
    if(parseInt(octates[0], 10) < 128){
        fs.appendFileSync('A.txt', IP+'\n');
    }
    else if(parseInt(octates[0], 10) < 192){
        fs.appendFileSync('B.txt', IP+'\n');
    }
    else if(parseInt(octates[0], 10) < 224){
        fs.appendFileSync('C.txt', IP+'\n');
    }
}
let IPsOfA = fs.readFileSync('A.txt', 'utf-8');
let IPsOfB = fs.readFileSync('B.txt', 'utf-8');
let IPsOfC = fs.readFileSync('C.txt', 'utf-8');
console.log(IPsOfA);
console.log(IPsOfB);
console.log(IPsOfC);