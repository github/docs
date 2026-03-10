---
title: Secret scanning push protection metrics
shortTitle: Push protection metrics
intro: 'Understand push protection''s performance across your organizations.'
permissions: '{% data reusables.permissions.security-overview %}'
product: '{% data reusables.gated-features.security-overview-fpt-sp-only %}'
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - Security overview
  - Secret Protection
  - Secret scanning
  - Organizations
  - Teams
contentType: concepts
---

## Overview

The metrics overview for {% data variables.product.prodname_secret_scanning %} push protection on security overview helps you understand how well you are preventing secret leaks in your organization or across organizations in your enterprise. You can view the entire dataset or filter for specific criteria, making it easy to identify repositories where you may need to take action to prevent future leaks.

## Available metrics

The overview shows you a summary of how many pushes containing secrets have been successfully blocked by push protection, as well as how many times push protection was bypassed.

You can also find more granular metrics, such as:
* The secret types that have been blocked or bypassed the most
* The repositories that have had the most pushes blocked
* The repositories that are bypassing push protection the most
* The percentage distribution of reasons that users give when they bypass the protection

## Visibility

You can see {% data variables.product.prodname_secret_scanning %} metrics for a repository if you have:

* The `admin` role for the repository
* A custom repository role with the "View {% data variables.product.prodname_secret_scanning %} alerts" fine-grained permissions for the repository
* Access to alerts for the repository

## Next steps

To find your push protection metrics, see [AUTOTITLE](/code-security/how-tos/view-and-interpret-data/analyze-organization-data/viewing-metrics-for-secret-scanning-push-protection).
