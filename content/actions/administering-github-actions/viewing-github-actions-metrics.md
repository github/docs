---
title: Viewing GitHub Actions metrics
shortTitle: GitHub Actions metrics
intro: 'You can view metrics to monitor where your organization or repositories use {% data variables.product.prodname_actions %} and how they are performing.'
permissions: Organization owners and users with the "View organization Actions metrics" permission can view organization-level metrics. <br><br> Users with the base repository role can view repository-level metrics. 
versions:
  feature: actions-metrics
redirect_from:
  - /actions/monitoring-and-troubleshooting-workflows/viewing-github-actions-usage-metrics-for-your-organization
  - /actions/administering-github-actions/viewing-github-actions-usage-metrics-for-your-organization
  - /actions/administering-github-actions/viewing-github-actions-metrics-for-your-organization
---

{% data reusables.actions.about-actions-metrics %}

{% data reusables.actions.enabling-actions-metrics %}

## About {% data variables.product.prodname_actions %} usage metrics

{% data reusables.actions.about-actions-usage-metrics %}

## About {% data variables.product.prodname_actions %} performance metrics

{% data reusables.actions.about-actions-performance-metrics %}

## Understanding {% data variables.product.prodname_actions %} metrics aggregation

{% data reusables.actions.about-actions-usage-metrics-aggregation %}

## Viewing {% data variables.product.prodname_actions %} metrics for your organization

{% data reusables.actions.actions-metrics-discrepancy-note %}

{% data reusables.profile.access_org %}
{% data reusables.user-settings.access_org %}
{% data reusables.organizations.insights %}
{% data reusables.actions.viewing-actions-metrics %}

## Viewing {% data variables.product.prodname_actions %} metrics for your repository

> [!NOTE] Repository-level metrics for {% data variables.product.prodname_actions %} is in {% data variables.release-phases.public_preview %} and subject to change.

{% data reusables.actions.actions-metrics-discrepancy-note %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.navigate-to-insights %}
{% data reusables.actions.viewing-actions-metrics %}
