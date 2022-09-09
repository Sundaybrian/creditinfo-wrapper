FROM node:15

# COPY . /usr/app

WORKDIR /usr/app

COPY package.json .

RUN npm install

RUN if [ "$NODE_ENV" = "development" ]; \
    then npm install; \
    else npm install --only=production; \
    fi   

COPY . .

ENV PORT 4000
EXPOSE $PORT
#
# for typescript
# RUN  npm run build
# COPY .env ./dist/
# WORKDIR ./dist

# EXPOSE 4000
# CMD ["npm", "start"]

RUN npm start



# FROM  node:16.14.0-slim as builder

# WORKDIR /usr/app

# COPY package*.json ./
# COPY yarn.lock ./
# COPY server/. ./server
# USER 0
# RUN yarn install --production

# ## stage 2
# FROM node:16.14.0-slim
# USER node

# WORKDIR /usr/app
# # copy only the server
# COPY --from=builder /usr/app/server /usr/app 

# # RUN yarn install --production

# # COPY .env .
# ENV PORT 1030
# EXPOSE $PORT

# CMD ["yarn","start"]
# # Add "AS build" for later use
