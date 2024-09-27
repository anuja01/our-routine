# Our Routine  

## The application is intented to run as a PWA (Progressive web app)
Please visit https://6b4f-95-140-187-78.ngrok-free.app/ from mobile browser   
Press 'share' icon next to browsers address bar   
Then select 'Add to Home Screen'

## Development Requirements
node js > v21  
docker

## Development

``` yarn```  
``` yarn run dev ```  

## Build and run - dev
```docker build -t our-routine:dev -f Dockerfile.dev .```  
```docker run -d -p 8080:8080 our-routine:dev```  

## Build and run - prod
```docker build -t our-routine:prod -f Dockerfile.prod .```   
```docker run -d -p 8082:3000 our-routine:prod```
