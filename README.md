# Our Routine  

## Requirements
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