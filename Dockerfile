FROM node:lts-alpine as build-stage
WORKDIR /app
COPY package*.json ./
#RUN npm install
RUN npm ci
COPY ./ .
RUN npm run build

# production stage
FROM nginx:stable-alpine as production-stage
COPY nginx.conf /etc/nginx/nginx.conf
COPY default.conf.template /etc/nginx/conf.d/default.conf.template
# FIXME: problem with Parcel here? SRC is being uploaded to heroku for some reason, was app/dist
#RUN mkdir /app
# COPY --from=build-stage /app/dist /app
COPY --from=build-stage /app/dist /usr/share/nginx/html
CMD /bin/sh -c "envsubst '\$PORT' < /etc/nginx/conf.d/default.conf.template > /etc/nginx/conf.d/default.conf" && nginx -g 'daemon off;'