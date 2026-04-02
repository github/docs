---
title: Customizing notifications for {% data variables.product.github %} in Teams
shortTitle: Customize notifications
intro: Customize {% data variables.product.github %} notifications to manage your work within Teams.
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
contentType: how-tos
category:
  - Use integrations
---

You can customize your notifications by subscribing to activity that is relevant to your Microsoft Teams channel, and unsubscribing from activity that is less helpful to your project.

### Notifications enabled by default

The following notifications are enabled by default, but you can disable any of them using the `@GitHub Notifications unsubscribe owner/repo [feature]` command.

|Feature|Description|
|-------|-----------|
|`issues`|Opened, closed, or reopened issues.|
|`pulls`|New, merged, closed, or reopened pull requests.|
|`commits`|New commits on the default branch (usually `main`).|
|`comments`|New comments on issues and pull requests.|
|`deployments`|Deployment status updates.|
|`releases`|New releases and pre-releases published.|

> [!NOTE]
> Repository notifications are also enabled by default. You will be notified when your repository is made public or deleted. This notification cannot be disabled, as repository updates are destructive activities.

### Notifications disabled by default

The following notifications are disabled by default, but you can enable any of them using the `@GitHub Notifications subscribe owner/repo [feature]` command.

|Feature|Description|
|-------|-----------|
|`reviews`|Pull request reviews.|
|`workflows`|{% data variables.product.prodname_actions %} workflow runs and approval notifications.|
|`branches`|Branch creation and deletion.|
|`discussions`|Discussions created or answered.|
|`+label:"your label"`|Filter issues, pull requests, and comments based on their labels.|

You can subscribe or unsubscribe from multiple settings at once. For example:

* To turn on activity for pull request reviews and comments, use `@GitHub Notifications subscribe owner/repo reviews comments`.
* To turn off activity for issues and pull requests, use `@GitHub Notifications unsubscribe owner/repo issues pulls`.

## Filtering notifications

You can further customize your notifications with branch and label filters. Branch filters allow you to filter commit notifications based on branch names, while label filters allow you to filter issue and pull request notifications based on labels applied to them.

### Branch filters for commit notifications

Branch filters allow you to filter commit notifications based on branch names. By default when you subscribe to the `commits` event, you will get notifications for your default branch. However, you can choose to filter on a specific branch, or a pattern of branches or all branches.

|Example configuration|Description|
|-------|-----------|
|`@GitHub Notifications subscribe owner/repo commits`|Receive commit notifications for the default branch.|
|`@GitHub Notifications subscribe owner/repo commits:main`|Only receive commit notifications for the `main` branch.|
|`@GitHub Notifications subscribe owner/repo commits:feature/*`|Receive commit notifications for all branches that start with `feature/`.|
|`@GitHub Notifications subscribe owner/repo commits:*`|Receive commit notifications for all branches.|

You can unsubscribe from the commits feature using `@GitHub Notifications unsubscribe owner/repo commits`.

>[!NOTE] You may have previously used the `commits:all` filter to receive commit notifications for all branches. This filter is {% data variables.release-phases.closing_down %}. To receive commit notifications for all branches, use the `commits:*` filter instead. If you have previously set up the `commits:all` filter, it will continue to work until you update your configuration to use the `commits:*` filter.

### Label filters for issue and pull request notifications

Label filters allow you to filter notifications based on labels applied to issues and pull requests. When a label filter is set, only notifications for events including the specified label will be sent. For more information about labels, see [AUTOTITLE](/issues/using-labels-and-milestones-to-track-work/managing-labels) and [AUTOTITLE](/issues/tracking-your-work-with-issues/using-issues/filtering-and-searching-issues-and-pull-requests).

Currently, it is only possible to have one required label filter per repository. The table below shows which event types are affected by label filters.

|Event type|Is filtered by label|
|-------|-----------|
|Pull requests|{% octicon "check" aria-label="Included" %}|
|Issues|{% octicon "check" aria-label="Included" %}|
|Comments|{% octicon "check" aria-label="Included" %}|
|Reviews|{% octicon "check" aria-label="Included" %}|
|Commits/Pushes|{% octicon "x" aria-label="Not included" %}|
|Branches|{% octicon "x" aria-label="Not included" %}|

#### Creating label filters

To create a label filter, use the following command format:

```text copy
@GitHub Notifications subscribe [owner/repo] +label:"your label"
```

This creates a required-label filter with the value `your label`. Incoming events that support filters are discarded unless they have that label.

#### Updating label filters

You can update an existing label filter by specifying a new label value:

```text copy
@GitHub Notifications subscribe [owner/repo] +label:"new label"
```

This will replace the "your label" filter with the "new label" filter.

#### Removing label filters

You can remove an existing label filter by using the unsubscribe command with the `+label` option:

```text copy
@GitHub Notifications unsubscribe [owner/repo] +label:"new label"
```

This will remove the "new label" filter, and the channel will receive all notifications for the subscribed events without any label filtering.

#### Viewing active label filters

To view the currently active label filters for a channel, use the following command:

```text copy
@GitHub Notifications subscribe list features
```

#### Valid filters

The {% data variables.product.github %} app in Teams supports the most common special characters for label filters, including all emojis that Teams and {% data variables.product.github %} provide as standard. Rarely, you may encounter a label that contains a special character that is not supported. For example, any multibyte character not encoded as `:foo:`, or labels using the `,` character may not work as expected.

## {% data variables.product.prodname_actions %} workflow notifications

You can subscribe to {% data variables.product.prodname_actions %} workflow run notifications from your channel or personal app using "workflows" feature, using the format `@GitHub Notifications subscribe owner/repo workflows`.

When you are subscribed to "workflows", the following functionality is available:

* You will get notified when a new workflow run is triggered.
* You can track the approval notifications as a reply in the thread and you can approve the notifications directly from the channel or personal app.
* Once the workflow is completed, you will get an update as a reply in the thread so that you can see the complete context and history of the workflow run.
* If something fails, you can choose to rerun the workflow in place and you can also enable debug logs if needed.

>[!NOTE] After March 10, 2025 and for {% data variables.product.prodname_ghe_server %} version 3.17 onwards, you will no longer be notified about the progress of individual workflow jobs. See the [{% data variables.product.github %} changelog](https://github.blog/changelog/2025-02-03-deprecation-of-real-time-github-actions-workflow-job-events-in-slack-and-microsoft-teams-apps/) for more details.

### Workflow notification filters

You can filter workflow notifications by using the following options:

|Filter|Description|
|-------|-----------|
|`name`|Filter by the name of the workflow.|
|`actor`|Filter by the user who triggered the workflow.|
|`branch`|Filter by the branch the workflow is running on. In cases where the `pull_request` event is included, the branch will be the target branch the pull request is created for.|
|`event`|Filter by the event that triggered the workflow (e.g., push, pull_request).|

You can configure workflow notification filters with the following format:

```text copy
@GitHub Notifications subscribe owner/repo workflows:{name:"your workflow name" event:"workflow event" branch:"branch name" actor:"username"}
```

You can also pass multiple values for each filter, separated by commas. For example:

```text copy
@GitHub Notifications subscribe owner/repo workflows:{name:"your workflow name","another workflow name" event:"workflow event","another workflow event" branch:"branch name","another branch name" actor:"username","another-username"}
```

By default, when you configure workflow notifications without passing any filters, it is configured for workflows triggered via pull requests targeting your default branch. You can pass one or multiple entries.

You can unsubscribe from workflow notifications using the command: `@GitHub Notifications unsubscribe owner/repo workflows`.

>[!NOTE] To receive {% data variables.product.prodname_actions %} notifications in Teams, the {% data variables.product.github %} app requires additional permissions. When you attempt to subscribe to workflows for the first time, you will be prompted to grant these permissions.

## Deployment notifications

You can also configure separate deployment notifications. These deployments can happen from {% data variables.product.prodname_actions %} or from external sources using the deployments API. See [AUTOTITLE](/rest/deployments/deployments).

You can subscribe or unsubscribe to deployment notifications using the following commands:

```text copy
@GitHub Notifications subscribe owner/repo deployments
@GitHub Notifications unsubscribe owner/repo deployments
```

>[!NOTE] If you are using {% data variables.product.prodname_actions %} and want to track your deployments to environments, the `workflows` feature is recommended, as it provides a more complete picture and the ability to approve your deployments directly from Teams.
