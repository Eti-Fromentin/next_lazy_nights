FROM node:14 as builder
WORKDIR /usr/src/app
ENV PATH /usr/src/app/node_modules/.bin:$PATH
ARG NEXT_PUBLIC_MOVIE_API_KEY=${NEXT_PUBLIC_MOVIE_API_KEY}
ARG NEXT_PUBLIC_RECIPE_API_KEY=${NEXT_PUBLIC_RECIPE_API_KEY}
COPY . /usr/src/app
RUN npm install
RUN npm run build

# production environment
FROM nginx:1.13.9-alpine
# RUN rm -rf /etc/nginx/conf.d
# RUN mkdir -p /etc/nginx/conf.d
# COPY ./default.conf /etc/nginx/conf.d/

COPY --from=builder /usr/src/app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]