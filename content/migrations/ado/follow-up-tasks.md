---
title: "Follow-up tasks"
shortTitle: "6. Follow-up tasks"
intro: "After each migration has finished, you'll need to complete some additional tasks before the repository is ready for work."
versions:
  fpt: '*'
  ghec: '*'
contentType: other
category:
  - Migrate from Azure DevOps
redirect_from:
  - /migrations/ado/phase-6-follow-up-tasks
---

{% data reusables.enterprise-migration-tool.follow-up-tasks-common %}

## Configure Azure Pipelines and Azure Boards

If you used Azure Pipelines or Azure Boards previously and want to continue using them with your repositories now they are hosted on {% data variables.product.github %}, you can follow these guides on Microsoft Learn to configure the relevant extension.

* [Connect Azure Pipelines to GitHub](https://learn.microsoft.com/en-us/azure/devops/pipelines/repos/github)
* [Configure the Azure Boards app for GitHub](https://learn.microsoft.com/en-us/azure/devops/boards/github/install-github-app)

## Supporting your developers in their new environment

There are some difference between Azure DevOps and {% data variables.product.github %} that would be helpful for you and your developers to know. Share [AUTOTITLE](/migrations/ado/key-differences-between-azure-devops-and-github) with them.
