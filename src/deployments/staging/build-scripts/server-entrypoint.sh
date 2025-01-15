#!/usr/bin/env sh

# We require a server-entrypoint to set environment variables that can't be set via Docker ENV
# This is a workaround to set vars from the .env file

. ./build-scripts/read-dot-env.sh

# We keep these logs here to make it clear what env vars are set in server logs
echo "MODA_APP_NAME: $MODA_APP_NAME"
echo "Using port: $PORT"
echo "Using branch: $STAGING_BRANCH"
echo "Using SHA: $SHA"
echo "Is review server?, $REVIEW_SERVER"

# Start the server
exec ./node_modules/.bin/tsx src/frame/server.ts
