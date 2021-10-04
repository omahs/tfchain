FROM node:14 AS processor
WORKDIR /hydra-project
ADD package.json .
ADD yarn.lock .
RUN yarn

ADD tsconfig.json .
ADD db db
ADD generated generated
ADD mappings mappings
ADD chain chain
ADD manifest.yml .
ADD .env .
ADD init-countries.js .
ENV HYDRA_NO_TS=false
CMD [ "yarn", "processor:migrate"]
CMD [ "yarn", "processor:start"]


FROM processor AS query-node
CMD ["yarn", "query-node:start"]