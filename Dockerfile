FROM node:lts as builder
ENV NPM_CONFIG_LOGLEVEL=warn
ENV NPM_CONFIG_COLOR=false
WORKDIR /app
COPY ./website ./
COPY ./wiki ./docs
RUN yarn install && yarn build

FROM nginx:stable-alpine
WORKDIR /home/node/app
COPY .github/workflows/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/build /usr/share/nginx/html/
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

