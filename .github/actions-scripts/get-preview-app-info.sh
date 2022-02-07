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

# Number of resource groups that we use to split preview envs across
PREVIEW_ENV_RESOURCE_GROUPS=4

REPO_NAME="${GITHUB_REPOSITORY#*\/}"
echo "REPO_NAME=${REPO_NAME}" >> $GITHUB_ENV

DEPLOYMENT_NAME="${REPO_NAME}-pr-${PR_NUMBER}"
echo "DEPLOYMENT_NAME=${DEPLOYMENT_NAME}" >> $GITHUB_ENV

RESOURCE_GROUP="preview-env-${REPO_NAME}-$((${PR_NUMBER} % ${PREVIEW_ENV_RESOURCE_GROUPS}))"
echo "RESOURCE_GROUP=${RESOURCE_GROUP}" >> $GITHUB_ENV

APP_NAME_SHORT="${REPO_NAME}-preview-${PR_NUMBER}"
echo "APP_NAME_SHORT=${APP_NAME_SHORT}" >> $GITHUB_ENV

IMAGE_REPO="${GITHUB_REPOSITORY}/pr-${PR_NUMBER}"
echo "IMAGE_REPO=${IMAGE_REPO}" >> $GITHUB_ENV

# Since this incurs a network request and can be slow, we make it optional
if [ $FULL_APP_INFO ]; then
  APP_INFO=$(az webapp list -g ${RESOURCE_GROUP} --query "[?tags.DocsAppName == '${APP_NAME_SHORT}'].{defaultHostName:defaultHostName, name:name} | [0]")

  APP_URL=$(echo $APP_INFO | jq '.defaultHostName' | tr -d '"')
  echo "APP_URL=${APP_URL}" >> $GITHUB_ENV

  APP_NAME_FULL=$(echo $APP_INFO | jq '.name' | tr -d '"')
  echo "APP_NAME_FULL=${APP_NAME_FULL}" >> $GITHUB_ENV
fi
