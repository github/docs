---
title: 'Permissions for {% data variables.product.github %} in Teams'
shortTitle: Teams permissions
intro: 'Learn about the permissions required for the {% data variables.product.github %} app in Teams to function.'
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
contentType: reference
category:
  - Learn about integrations
---

By granting the {% data variables.product.github %} app access to your Microsoft Teams workspace, you are providing necessary authorizations to your {% data variables.product.github %} account and your Teams workspace. These permissions enable the app to perform its functions and provide you with a seamless experience when using {% data variables.product.github %} in Teams.

## Teams permissions

When you install the {% data variables.product.github %} app in your Teams workspace, you are authorizing the app to access certain information and perform specific actions within your Teams workspace. The app requires the following permissions:

|Permission scope|Why we need it|
|----------------|--------------|
|Access private conversations between you and the App | To message you with instructions.  |
|Add link previews to {% data variables.product.prodname_dotcom %} to messages| To render rich links to `github.com`.|
|Add {% data variables.product.github %} commands| To add the `@GitHub Notifications` command to your Teams channels. |
|View the workspace or organization's name, email domain, and icon| To store subscriptions you set up.|
|Post messages as the app| To notify you of activity that happens on {% data variables.product.github %}, in Teams.|

## {% data variables.product.github %} permissions

When you connect your {% data variables.product.github %} account to the {% data variables.product.github %} app in Teams, you are authorizing the app to access your {% data variables.product.github %} account. The app requires the following permissions:

|Permission scope|Why we need it|
|---|---|
|Read access to issues, metadata, pull requests, discussions, and repository projects | To render previews of links shared in Teams.|
|Read access to code| To render code snippets in Teams.|
|Write access to actions, issues, and pull requests | To take action from Teams with cards and commands.|

{% ifversion fpt or ghec %}

## Additional permissions for {% data variables.copilot.copilot_coding_agent %}

|Permission scope|Why we need it|
|---|---|
|Write access to content| To open pull requests authored by {% data variables.copilot.copilot_coding_agent %}.|
|Read/write access to workflows| To initiate {% data variables.copilot.copilot_coding_agent %} sessions.|

{% endif %}
