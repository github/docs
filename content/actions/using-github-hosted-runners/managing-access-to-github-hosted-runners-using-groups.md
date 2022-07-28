---
title: Managing access to GitHub-hosted runners using groups
intro: You can use policies to limit access to GitHub-hosted runners that have been added to an organization or enterprise.
versions:
  feature: 'actions-larger-runners'
type: tutorial
shortTitle: Using runner groups
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

## About runner groups

{% data reusables.actions.about-runner-groups %}

{% ifversion ghec or ghes or ghae %}

## Creating a runner group for an organization

{% data reusables.actions.creating-a-runner-group-for-an-organization %}

## Creating a runner group for an enterprise

{% data reusables.actions.creating-a-runner-group-for-an-enterprise %}

{% endif %}

## Changing the access policy of a runner group

{% data reusables.actions.changing-the-access-policy-of-a-runner-group %}

## Changing the name of a runner group

{% data reusables.actions.changing-the-name-of-a-runner-group %}

{% ifversion ghec or ghes or ghae %}
## Moving a runner to a group

{% data reusables.actions.moving-a-runner-to-a-group %}

## Removing a runner group

{% data reusables.actions.removing-a-runner-group %}

{% endif %}
