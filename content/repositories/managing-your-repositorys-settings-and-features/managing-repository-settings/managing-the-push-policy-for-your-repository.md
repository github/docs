---
title: Managing the push policy for your repository
intro: You can limit how many branches and tags can be updated in a single push.
versions:
  feature: limit-branches-tags-in-push
permissions: People with admin permissions for a repository can manage the push policy for the repository.
topics:
  - Repositories
shortTitle: Manage the push policy
---

## About the push policy

{% note %}

**Note:** The push policy is currently in beta and subject to change.

{% endnote %}

By default, there is no limit to the number of branches and tags that can be updated in a single push.

You can limit the number of branches and tags that can be updated in a single push to block potentially destructive pushes. This can prevent or limit the loss of data.

The push policy also blocks the Git command: `git push --mirror`. This is a potentially destructive command for making the remote exactly match the local clone. When run by accident, it can cause many force-pushes and branch deletions on the remote without any warning.

## Limiting how many branches and tags can be updated in a single push

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
1. Under "Pushes", select **Limit how many branches and tags can be updated in a single push**.
1. After "Up to", type the number of branches and tags you want to limit in a single push. Lower numbers are more restrictive of which pushes are allowed, and higher numbers are less restrictive but have more potential for being destructive.

   We recommend the default maximum of `5` branch or tag updates allowed in one push. The minimum value is `2`, because Git requires two branch updates to rename a branch in a single push: _delete branch_ and _create branch_.
