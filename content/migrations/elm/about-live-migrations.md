---
title: About live migrations
intro: 'How do live migrations minimize downtime for developers?'
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
contentType: concepts
---

## What is {% data variables.product.prodname_elm %}?

{% data variables.product.prodname_elm %} ({% data variables.product.prodname_elm_short %}) is a service for migrating repositories to {% data variables.enterprise.data_residency %} ({% data variables.enterprise.data_residency_site %}) with minimal downtime for developers. You can migrate from {% data variables.product.prodname_ghe_server %} or from Azure DevOps Services.

Migrations are "live" because users can continue working in the source repository during most of the migration process. After the repository data is initially copied, {% data variables.product.prodname_elm_short %} continues to synchronize any changes made in the source repository, such as new commits, so that these changes are included in the migration.

A migration includes repository data only. Data that is not part of a repository, such as settings for the organization or project that contains it, is **not** included and must be migrated or reconfigured separately on the destination enterprise.

The tools you use to run a migration, and the data that {% data variables.product.prodname_elm_short %} can migrate, depend on your source platform. For details, see the documentation for your migration path in [Next steps](#next-steps).

## Differences from {% data variables.product.prodname_importer_proper_name %}

{% data variables.product.prodname_elm_short %} and {% data variables.product.prodname_importer_proper_name %} (GEI) are separate tools that both support migrating repositories to {% data variables.enterprise.data_residency_site %}.

The main benefits of {% data variables.product.prodname_elm_short %} are:

* **Reduced developer downtime**: During a migration with GEI, developers lose access to the repository for the duration of the migration. This downtime creates risks like blocked deployments or stalled feature work.
* **Monorepo support**: {% data variables.product.prodname_elm_short %} is capable of migrating large, complex monorepos with deep histories. These often exceed the capacity of GEI.
* **Better visibility**: {% data variables.product.prodname_elm_short %} provides detailed repository-level visibility into migration progress, surfacing granular failures so that you can be confident the migrated repository is an accurate replica.

However, because of the higher traffic load associated with live updates, {% data variables.product.prodname_elm_short %} supports fewer concurrent migrations than GEI.

You may want to use both tools over the course of a platform migration, prioritizing the repositories that will benefit most from {% data variables.product.prodname_elm_short %}.

## Overview of a migration

The high-level phases of a migration are:

1. **Preparation and validation**: You choose the repositories to migrate, grant the migration operator the required access, and prepare the source and destination platforms. {% data variables.product.prodname_elm_short %} then checks that each repository is ready to migrate.
1. **Initial copy**: {% data variables.product.prodname_elm_short %} copies the repository data to the destination enterprise.
1. **Continuous synchronization**: {% data variables.product.prodname_elm_short %} tracks changes made in the source repository and applies them to the destination repository, until you are ready to cut over.
1. **Cutover**: The source repository becomes read-only and any final changes are synchronized. This is the downtime period for developers.
1. **Verification**: The operator checks that the data was migrated successfully.
1. **Follow-up**: An organization owner performs follow-up tasks on the destination enterprise, such as configuring organization settings and reattributing activity to users.

## Next steps

Your next steps depend on your migration path.

* **{% data variables.product.prodname_ghe_server %} to {% data variables.enterprise.data_residency_site %}**: To get ready to run a migration, see [AUTOTITLE](/migrations/elm/ghes-to-ghecom/prepare-for-your-migration).
* **Azure DevOps to {% data variables.enterprise.data_residency_site %}**: For guidance on migrating from Azure DevOps Services, see [Enterprise live migrations overview](https://learn.microsoft.com/azure/devops/repos/enterprise-live-migrations/overview) in the Microsoft Learn documentation. If you currently use Azure DevOps Server, first migrate to Azure DevOps Services before you use {% data variables.product.prodname_elm_short %}.
