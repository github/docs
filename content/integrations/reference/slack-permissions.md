---
title: Permissions for GitHub in Slack
shortTitle: Slack permissions
intro: 'Learn about the permissions required for the GitHub app in Slack to function.'
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - Integration
contentType: reference
category:
  - Learn about integrations
---

By granting the {% data variables.product.github %} app access to your Slack workspace, you are providing necessary authorizations to your {% data variables.product.github %} account and your Slack workspace. These permissions enable the app to perform its functions and provide you with a seamless experience when using GitHub in Slack.

## Slack permissions

When you install the {% data variables.product.github %} app in your Slack workspace, you are authorizing the app to access certain information and perform specific actions within your Slack workspace. The app requires the following permissions:

|Permission scope|Why we need it|
|----------------|--------------|
|Access private conversations between you and the App | To message you with instructions.  |
|View links to GitHub.com in messages| To render rich links from `github.com`|
|Add link previews to GitHub.com to messages| To render rich links to `github.com`|
|Add slash commands| To add the `/github` slash command to your Slack workspace |
|View the workspace or organization's name, email domain, and icon| To store subscriptions you set up|
|Post messages as the app| To notify you of activity that happens on GitHub, in Slack|

## GitHub permissions

When you connect your {% data variables.product.github %} account to the {% data variables.product.github %} app in Slack, you are authorizing the app to access your {% data variables.product.github %} account. The app requires the following permissions:

|Permission scope|Why we need it|
|---|---|
|Read access to code| To render code snippets in Slack|
|Read access to actions, commit statuses, checks, discussions, issues, metadata, pull requests, and repository projects | To render previews of links shared in Slack|
|Write access to actions, issues, deployments, and pull requests | To take action from Slack with the `/github` command and directly from messages|
|Write access to content| To open pull requests authored by {% data variables.copilot.copilot_coding_agent %}|
|Read/write access to workflows|To initiate {% data variables.copilot.copilot_coding_agent %} sessions|
