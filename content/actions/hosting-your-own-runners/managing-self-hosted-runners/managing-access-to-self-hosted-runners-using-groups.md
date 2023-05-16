---
title: Managing access to self-hosted runners using groups
shortTitle: Manage access with runner groups
intro: You can use policies to limit access to self-hosted runners that have been added to an organization{% ifversion ghec or ghes or ghae %} or enterprise{% endif %}.
permissions: 'Enterprise accounts, organizations owned by enterprise accounts, and organizations using {% data variables.product.prodname_team %} can create and manage additional runner groups.'
redirect_from:
  - /actions/hosting-your-own-runners/managing-self-hosted-runners/managing-access-to-self-hosted-runners
  - /actions/hosting-your-own-runners/managing-access-to-self-hosted-runners
  - /actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: tutorial
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

## About runner groups

{% data reusables.actions.about-runner-groups %}

## Creating a self-hosted runner group for an organization

{%- ifversion fpt or ghec or ghes %}

{% data reusables.actions.self-hosted-runner-security-admonition %}

{%- endif %}

{% data reusables.actions.creating-a-runner-group-for-an-organization %}

{% ifversion ghec or ghes or ghae %}

## Creating a self-hosted runner group for an enterprise

 {%- ifversion ghec or ghes %}

{% data reusables.actions.self-hosted-runner-security-admonition %}

{%- endif %}

{% data reusables.actions.creating-a-runner-group-for-an-enterprise %}

{% endif %}

## Changing the access policy of a self-hosted runner group

{%- ifversion fpt or ghec or ghes %}

{% data reusables.actions.self-hosted-runner-security-admonition %}

{%- endif %}

{% data reusables.actions.changing-the-access-policy-of-a-runner-group %}

## Changing the name of a runner group

{% data reusables.actions.changing-the-name-of-a-runner-group %}

## Automatically adding a self-hosted runner to a group

{% data reusables.actions.automatically-adding-a-runner-to-a-group %}

## Moving a self-hosted runner to a group

{% data reusables.actions.moving-a-runner-to-a-group %}

## Removing a self-hosted runner group

{% data reusables.actions.removing-a-runner-group %}

{% data reusables.actions.section-using-unique-names-for-runner-groups %}
