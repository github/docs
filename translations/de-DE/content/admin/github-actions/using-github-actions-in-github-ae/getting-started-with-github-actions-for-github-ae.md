---
title: Getting started with GitHub Actions for GitHub AE
shortTitle: Erste Schritte mit GitHub Actions
intro: 'Learn configuring {% data variables.product.prodname_actions %} on {% data variables.product.prodname_ghe_managed %}.'
permissions: 'Site administrators can enable {% data variables.product.prodname_actions %} and configure enterprise settings.'
versions:
  github-ae: '*'
type: how_to
topics:
  - Actions
  - Enterprise
redirect_from:
  - /admin/github-actions/getting-started-with-github-actions-for-github-ae
---
{% data reusables.actions.ae-beta %}

This article explains how site administrators can configure {% data variables.product.prodname_ghe_managed %} to use {% data variables.product.prodname_actions %}.

### Managing access permissions for {% data variables.product.prodname_actions %} in your enterprise

You can use policies to manage access to {% data variables.product.prodname_actions %}. For more information, see "[Enforcing GitHub Actions policies for your enterprise](/admin/github-actions/enforcing-github-actions-policies-for-your-enterprise)."

### Adding runners

{% note %}

**Note:** To add {% data variables.actions.hosted_runner %}s to {% data variables.product.prodname_ghe_managed %}, you will need to contact {% data variables.product.prodname_dotcom %} support.

{% endnote %}

To run {% data variables.product.prodname_actions %} workflows, you need to add runners. You can add runners at the enterprise, organization, or repository levels. For more information, see  "[About {% data variables.actions.hosted_runner %}s](/actions/using-github-hosted-runners/about-ae-hosted-runners)."


### General security hardening for {% data variables.product.prodname_actions %}

If you want to learn more about security practices for {% data variables.product.prodname_actions %}, see "[Security hardening for {% data variables.product.prodname_actions %}](/actions/learn-github-actions/security-hardening-for-github-actions)."
