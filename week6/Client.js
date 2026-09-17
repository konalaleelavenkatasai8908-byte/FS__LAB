const os = require('os');
const path = require('path');
const dns = require('dns');
const net = require('net');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
 

function osFunction(){
  console.log('platform : '+os.platform());
  console.log('CPU architecture : '+os.arch());
  console.log('CPU information: ',os.cpus());
  console.log('Total memory: '+os.totalmem() +"bytes.");
  console.log('Free memory: '+os.freemem() +"bytes.");
  showMenu();
}
 
function pathFunction() {
    rl.question("Enter a file path: ", (filePath) => {

        console.log("Directory: " + path.dirname(filePath));
        console.log("File name: " + path.basename(filePath));
        console.log("Extension: " + path.extname(filePath));
        console.log("Normalized path: " + path.normalize(filePath));
        showMenu();
    });
}

function dnsFunction(){
    rl.question("Enter a domain name: " ,(domainname) =>{
     
        dns.lookup(domainname,(err,address) => {
            if (err){
                console.log("Error: "+err.message);
                return;
            }        
           
            console.log("IP address: "+ address);
            showMenu();
        });
     
    });

}

function netFunction(){  
    const server = net.createServer((socket) => {  
        console.log("Client Connected");  

        socket.write("Welcome to the Node.js TCP Server!");

        socket.on("data", (data) => {  
            console.log("Message from Client:", data.toString());  
        });

        socket.on("end", () => {  
            console.log("Client disconnected");  
        });  
    });  

    server.listen(5000, () => {  
        console.log("Server is running on port 5000");  
    });  
}


function showMenu() {
    console.log("\n========================================");
    console.log(" Node.js System and Network Information");
    console.log("========================================");
    console.log("1. Operating System Information");
    console.log("2. File Path Information");
    console.log("3. DNS Lookup");
    console.log("4. TCP Server");
    console.log("5. Exit");

    rl.question("Enter your choice: ", (choice) => {

        if (choice === "1") {
            osFunction();
        }
        else if (choice === "2") {
            pathFunction();
        }
        else if (choice === "3") {
            dnsFunction();
        }
        else if (choice === "4") {
            netFunction();
        }
        else if (choice === "5") {
            console.log("Exiting...");
            rl.close();
        }
        else {
            console.log("Invalid choice.");
            showMenu();
        }
    });
}
   
 

showMenu();
