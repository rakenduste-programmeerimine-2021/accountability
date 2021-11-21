FROM node:14.17.5-alpine

RUN apk add --no-cache su-exec

ENV HOME=/home/node

USER node

RUN mkdir -p $HOME/app
WORKDIR $HOME/app

COPY . $HOME/app

RUN npm install && \
    npm cache clean --force

ENTRYPOINT ["npm"]
CMD ["start"]

EXPOSE 3000