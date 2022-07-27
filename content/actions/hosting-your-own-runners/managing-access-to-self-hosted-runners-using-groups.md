---
title: Managing access to self-hosted runners using groups
intro: You can use policies to limit access to self-hosted runners that have been added to an organization or enterprise.
redirect_from:
  - /actions/hosting-your-own-runners/managing-access-to-self-hosted-runners
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: tutorial
shortTitle: Manage access to runners
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

## About runner groups

{% data reusables.actions.about-runner-groups %}

## Creating a runner group for an organization

{% data reusables.actions.creating-a-runner-group-for-an-organization %}

## Creating a runner group for an enterprise

{% data reusables.actions.creating-a-runner-group-for-an-enterprise %}

## Changing the access policy of a runner group

{% data reusables.actions.changing-the-access-policy-of-a-runner-group %}

## Changing the name of a runner group

{% data reusables.actions.changing-the-name-of-a-runner-group %}

{% ifversion ghec or ghes or ghae %}
## Automatically adding a runner to a group

{% data reusables.actions.automatically-adding-a-runner-to-a-group %}

## Moving a runner to a group

{% data reusables.actions.moving-a-runner-to-a-group %}

## Removing a runner group

{% data reusables.actions.removing-a-runner-group %}

{% endif %}
