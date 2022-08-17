---
title: Deployment branch policies
allowTitleToDifferFromFilename: true
shortTitle: Deployment branch policies
intro: The Deployment branch policies API allows you to manage custom deployment branch policies.
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
---

## About the Deployment branch policies API

The Deployment branch policies API allows you to specify custom name patterns that branches must match in order to deploy to an environment. The `deployment_branch_policy.custom_branch_policies` property for the environment must be set to `true` to use these endpoints. To update the `deployment_branch_policy` for an environment, see "[Create or update an environment](/rest/deployments/environments#create-or-update-an-environment)."

For more information about restricting environment deployments to certain branches, see "[Using environments for deployment](/actions/deployment/targeting-different-environments/using-environments-for-deployment#deployment-branches)."
