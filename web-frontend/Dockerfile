FROM node:16.15.0 AS deps
WORKDIR /workspace
COPY . .
RUN npm install
RUN npm i -g @angular/cli@13


FROM deps AS build
WORKDIR /workspace
RUN ng build


FROM nginx:1.21.6-alpine
COPY --from=build /workspace/dist/web-frontend /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

ENV PORT=80
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

LABEL org.opencontainers.image.description "Web frontend"