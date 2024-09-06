---
title: Dependency graph supported package ecosystems
shortTitle: Dependabot ecosystem support # Max 31 characters
intro: 'Dependency graph supports a variety of ecosystems and repositories'
allowTitleToDifferFromFilename: true
type: reference
topics:
  - Dependency graph
  - Dependencies
  - Alerts
  - Vulnerabilities
  - Repositories
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
---

## About the dependency graph

TODO:

In this article, you can see what the supported ecosystems are.

## Supported package ecosystems

The recommended formats explicitly define which versions are used for all direct and all indirect dependencies. If you use these formats, your dependency graph is more accurate. It also reflects the current build set up and enables the dependency graph to report vulnerabilities in both direct and indirect dependencies.{% ifversion fpt or ghec %} Indirect dependencies that are inferred from a manifest file (or equivalent) are excluded from the checks for insecure dependencies.{% endif %}

{% data reusables.dependency-graph.supported-package-ecosystems %}
