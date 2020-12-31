# Installation
clone the application with git clone

# then install the npm modules using
npm install

# Running the application
npm start

# Building docker image
docker build -t <imagename:version>.

# Running docker container
 3000 port is given since the docker file contains 3000 port
 docker run -it -d -p <outside-port-of-your-choice>:3000 <imagename:version>
