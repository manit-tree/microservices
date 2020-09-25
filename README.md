# a simple microservices using Nginx & Express

A simple project that demonstrate how to create microservices using Nginx (as a reverse proxy) + Express (as microservices)

This project will show you how to use Nginx as a reverse proxy that forward request to each microservices (Express) based on URL request. 

### Setup Instruction

1. clone this project
2. move to microservices directory and run "docker-compose up -d" (to run Nginx as a reverse proxy)
3. move to microservices/app-1 and run "npm install" (to install express library for app-1) then run "npm run test" (to start app-1)
4. move to microservices/app-1 and run "npm install" (to install express library for app-2) then run "npm run test" (to start app-2)

### Testing Instruction

1. from your browser, if type http://localhost (this request will be handled by Nginx)
2. from your browser, if type http://localhost/app-1 (this request will be handled by app-1)
3. from your browser, if type http://localhost/app-2 (this request will be handled by app-2)
