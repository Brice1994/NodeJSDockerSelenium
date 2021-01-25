FROM selenium/node-chrome:87.0

USER root

RUN sudo apt-get update

COPY ./package.json ./

RUN sudo apt-get install -y curl 
RUN sudo curl -sL https://deb.nodesource.com/setup_15.x | bash - 
RUN sudo apt-get install -y nodejs 
RUN sudo curl -L https://www.npmjs.com/install.sh | sh
RUN npm install --verbose
COPY . .
CMD ["node", "index.js"]