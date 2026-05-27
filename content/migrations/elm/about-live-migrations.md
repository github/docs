---
title: About live migrations from GitHub Enterprise Server to GHE.com
shortTitle: About live migrations
intro: 'How do live migrations minimize downtime for developers?'
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
contentType: concepts
product: '{% data reusables.elm.ghes-version-requirement %}'
---

{% data reusables.elm.preview-note %}

## What is {% data variables.product.prodname_elm %}?

{% data variables.product.prodname_elm %} ({% data variables.product.prodname_elm_short %}) is a service for migrating repositories from {% data variables.product.prodname_ghe_server %} to {% data variables.enterprise.data_residency %} ({% data variables.enterprise.data_residency_site %}). It is operated using a command line tool on {% data variables.product.prodname_ghe_server %}.

Migrations are "live" because users can continue using the source repository during most of the migration process. After the repository data is initially collected, webhooks check for changes to the repository, such as new commits or updates to settings. These changes are reported to {% data variables.product.prodname_elm_short %} and included in the migration.

An {% data variables.product.prodname_elm_short %} migration includes a single repository. Organization-level data, such as organization settings, teams, and projects, are **not** included in the migration and must be reconfigured manually on the destination enterprise.

## Differences from {% data variables.product.prodname_importer_proper_name %}

{% data variables.product.prodname_elm_short %} and {% data variables.product.prodname_importer_proper_name %} (GEI) are separate tools that both support migrating repositories from {% data variables.product.prodname_ghe_server %} to {% data variables.enterprise.data_residency_site %}.

The main benefits of {% data variables.product.prodname_elm_short %} are:

* **Reduced developer downtime**: During a migration with GEI, developers lose access to the repository for the duration of the migration. This downtime creates risks like blocked deployments or stalled feature work.
* **Monorepo support**: {% data variables.product.prodname_elm_short %} is capable of migrating large, complex monorepos with deep histories. These often exceed the capacity of GEI.
* **Better visibility**: {% data variables.product.prodname_elm_short %} provides detailed repository-level visibility into migration progress, surfacing granular failures so that you can be confident the migrated repository is an accurate replica.

However, because of the higher traffic load associated with live updates, {% data variables.product.prodname_elm_short %} supports fewer concurrent migrations than GEI: {% data reusables.elm.concurrent-migrations %}

You may want to use both tools over the course of a platform migration, prioritizing the repositories that will benefit most from {% data variables.product.prodname_elm_short %}.

## Overview of a migration

Typically, a site administrator runs a migration using the `elm` CLI tool, in a terminal session over SSH. The operator must provide {% data variables.product.pat_generic_plural %} with access to both {% data variables.product.prodname_ghe_server %} and the destination enterprise.

The high-level phases of a migration are:

1. **Creation**: The site admin runs CLI commands to create and start the migration, specifying the source repository and destination.
1. **Preflight checks**: The migration service verifies parameters, tokens, network connectivity, and repository configuration.
1. **Backfill**: The {% data variables.product.prodname_elm_short %} tool does an initial crawl to capture all repository data and sends it to the migration service on the destination platform. During the backfill phase, webhooks check for live updates to the repository as the migration continues.
1. **Cutover**: The source repository is locked and any final live updates are sent to {% data variables.product.prodname_elm_short %}. This is the downtime period for developers.
1. **Completion**: The migration is finished. The site admin can check the data was migrated successfully.
1. **Follow-up**: An organization owner performs follow-up tasks on the destination enterprise, such as reconfiguring organization settings and reattributing activity to users.

## Next steps

To get ready to run a migration, see [AUTOTITLE](/migrations/elm/prepare-for-your-migration).
