FROM  node:25.4

WORKDIR /app


COPY package *json


COPY . .


RUN npm run dev

EXPOSE 3000


CMD [ "executable" ]