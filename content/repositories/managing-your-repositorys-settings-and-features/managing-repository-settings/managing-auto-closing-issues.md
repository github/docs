---
title: Managing the automatic closing of issues in your repository
intro: You can select whether merged linked pull requests will auto-close your issues.
versions:
  fpt: '*'
  ghes: '>=3.18'
  ghec: '*'
permissions: Repository administrators and maintainers can configure the automating closing of issues in the repository, once related pull requests are merged.
topics:
  - Repositories
  - Issues
  - Pull requests
shortTitle: Manage auto-closing issues
allowTitleToDifferFromFilename: true
---

## About auto-closing issues

By default, merging a linked pull request automatically closes the associated issue. You can override the default behavior by disabling auto-closing.

## Enabling or disabling auto-closing of issues

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
1. Under **General**, scroll down to the **Issues** section.
1. Select or deselect **Auto-close issues with merged linked pull requests** to enable or disable auto-closing.
