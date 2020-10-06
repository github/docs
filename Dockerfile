# This Dockerfile can be used for docker-based deployments to platforms
# like Now or Moda, but it is currently _not_ used by our Heroku deployments
# It uses three multi-stage builds: `installation`, `bundles`, and the main build.

# --------------------------------------------------------------------------------
# INSTALLATION IMAGE
# A temporary image that installs production-only dependencies

FROM node:14-alpine as installation
ENV NODE_ENV production
WORKDIR /usr/src/docs
COPY package*.json ./

# Install the project's dependencies
RUN npm ci

# --------------------------------------------------------------------------------
# BUNDLE IMAGE
# A temporary image that installs dependencies and builds the production-ready front-end bundles.

FROM node:14-alpine as bundles
WORKDIR /usr/src/docs
# Install the files used to create the bundles
COPY package*.json ./
COPY javascripts ./javascripts
COPY stylesheets ./stylesheets
COPY lib ./lib
COPY webpack.config.js ./webpack.config.js
# Install the project's dependencies and build the bundles
RUN npm ci && npm run build

# --------------------------------------------------------------------------------
# MAIN IMAGE

FROM node:14-alpine

# Let's make our home
WORKDIR /usr/src/docs

# Ensure our node user owns the directory we're using
RUN chown node:node /usr/src/docs -R

# This should be our normal running user
USER node

# Copy our dependencies
COPY --chown=node:node --from=installation /usr/src/docs/node_modules /usr/src/docs/node_modules

# Copy our front-end code
COPY --chown=node:node --from=bundles /usr/src/docs/dist /usr/src/docs/dist

# We should always be running in production mode
ENV NODE_ENV production

# Copy only what's needed to run the server
COPY --chown=node:node assets ./assets
COPY --chown=node:node content ./content
COPY --chown=node:node data ./data
COPY --chown=node:node includes ./includes
COPY --chown=node:node lib ./lib
COPY --chown=node:node middleware ./middleware
COPY --chown=node:node translations ./translations
COPY --chown=node:node server.js ./server.js
COPY --chown=node:node package*.json ./

EXPOSE 443
CMD ["node", "server.js"]
