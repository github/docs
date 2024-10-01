---
title: About migrations from Bitbucket Server to GitHub Enterprise Cloud
shortTitle: About migrations
intro: 'Learn which data {% data variables.product.prodname_importer_proper_name %} can migrate.'
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
---

## About migrations from Bitbucket Server

You can use {% data variables.product.prodname_importer_proper_name %} to migrate repositories from Bitbucket Server to {% data variables.product.prodname_ghe_cloud %}. Migrations from Bitbucket Server are only supported for Bitbucket Server or Bitbucket Data Center version 5.14+ or higher.

## Data that is migrated

We currently only support migrating the following repository data from Bitbucket Server to {% data variables.product.prodname_ghe_cloud %}.

* Git source (including commit history)
* Pull requests (including comments, pull request reviews, pull request review comments at the file and line level, required reviewers, and attachments)

  > [!NOTE]
  > Users may receive a `500` error when attempting to view a pull request, if the pull request was merged and the head branch deleted on Bitbucket Server prior to migration. Bitbucket Server removes specific Git references to objects for such pull requests, and consequently those Git objects associated with the pull request are unable to be migrated.

## Data that is not migrated

Currently, the following data is **not** migrated.

* Personal repositories owned by users
* Branch permissions
* Commit comments
* Repository settings
* CI pipelines

## Limitations on migrated data

{% data reusables.enterprise-migration-tool.limitations-of-migrated-data %}

## Getting started

Before you migrate from Bitbucket Server, you should plan out how you will run your migration. Before migrating any data, you will need to choose someone to run the migration. You must grant that person the necessary access for both the source and the destination of the migration. We also recommend you run a trial migration first.

For an overview of the migration process from beginning to end, see "[AUTOTITLE](/migrations/using-github-enterprise-importer/migrating-from-bitbucket-server-to-github-enterprise-cloud/overview-of-a-migration-from-bitbucket-server-to-github-enterprise-cloud)."
