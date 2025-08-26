---
title: Personal dashboard
intro: 'Find information on the display criteria for items on your personal dashboard.'
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
topics:
  - Accounts
---

## Recent activity

In the "Recent activity" section of your dashboard, you can preview up to 4 updates made in the last two weeks.

{% data reusables.dashboard.recent-activity-qualifying-events %}

## Top repositories

Your list of top repositories is automatically generated, and can include any repository you have interacted with, whether it's owned directly by your account or not. Interactions include:
* Making commits
* Opening issues
* Commenting on issues
* Opening pull requests
* Commenting on pull requests

The list of top repositories cannot be edited, but repositories will drop off the list 1 year after you last interacted with them.

## Feed activity

{% ifversion feed %}

{% data reusables.dashboard.feed-beta-note %}

You'll see updates on your feed when someone you follow:

* Stars a repository
* Follows another user
* Creates a public repository
* Opens an issue or pull request with `help wanted` or `good first issue` label on a repository you're watching
* Pushes commits to a repository you watch
* Forks a public repository
* Publishes a new release

{% else %}
The main section of your dashboard has two activity feeds:

* Following: Activity by people you follow and from repositories you watch.
* For you: Activity and recommendations based on your {% data variables.product.github %} network.

### Following feed

You'll see updates in your following feed when a user you follow:

* Stars a repository
* Follows another user
* Creates a public repository
* Opens an issue or pull request with `help wanted` or `good first issue` label on a repository you're watching
* Pushes commits to a repository you watch
* Forks a public repository
* Publishes a new release

### For you feed

{% data reusables.dashboard.for-you-feed-beta-note %}

You will see updates from the network you have created, including:

* Repositories you have starred
* Repositories you've contributed to
* Users you follow or sponsor
* Users you've collaborated with
* Organizations you follow

{% endif %}
