#!/usr/bin/env bash

# [start-readme]
#
# This script sets environment variables with info about the preview app for a given PR
#
# [end-readme]

# ENV VARS NEEDED TO RUN
[[ -z $GITHUB_REPOSITORY ]] && { echo "Missing GITHUB_REPOSITORY. Exiting."; exit 1; }
[[ -z $PR_NUMBER ]] && { echo "Missing PR_NUMBER. Exiting."; exit 1; }
[[ -z $GITHUB_ENV ]] && { echo "Missing GITHUB_ENV. Exiting."; exit 1; }
[[ -z $APP_NAME_SEED ]] && { echo "Missing APP_NAME_SEED. Exiting."; exit 1; }

PREVIEW_ENV_LOCATION="eastus"

REPO_NAME="${GITHUB_REPOSITORY#*\/}"
echo "REPO_NAME=${REPO_NAME}" >> $GITHUB_ENV

DEPLOYMENT_NAME="${REPO_NAME}-pr-${PR_NUMBER}"
echo "DEPLOYMENT_NAME=${DEPLOYMENT_NAME}" >> $GITHUB_ENV

APP_NAME_BASE="${REPO_NAME}-preview-${PR_NUMBER}"

# pseudo random string so guessing a preview env URL is more difficult
APP_SHA=$(echo -n "${APP_NAME_SEED}-${APP_NAME_BASE}" | sha1sum | cut -c1-6)

APP_NAME="${APP_NAME_BASE}-${APP_SHA}"
echo "APP_NAME=${APP_NAME}" >> $GITHUB_ENV

APP_URL="https://${REPO_NAME}-${PR_NUMBER}-${APP_SHA}.preview.ghdocs.com"
echo "APP_URL=${APP_URL}" >> $GITHUB_ENV

IMAGE_REPO="${GITHUB_REPOSITORY}/pr-${PR_NUMBER}"
echo "IMAGE_REPO=${IMAGE_REPO}" >> $GITHUB_ENV
