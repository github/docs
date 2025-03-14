---
title: About migrating to GitHub Enterprise Cloud
intro: 'Learn about migrating your current solution into {% data variables.product.prodname_ghe_cloud %}.'
versions:
  ghec: '*'
type: overview
topics:
  - Accounts
  - Enterprise
shortTitle: Migrating to {% data variables.product.prodname_ghe_cloud %}
---

{% data reusables.migrations.about-migrations %}

{% data variables.product.company_short %} provides a variety of different tools to support these migrations. Different tools support different migration pathways and provide different levels of migration fidelity. To determine the best tool for your migration, understand what you can migrate, and learn how to make your migration successful, see [AUTOTITLE](/migrations/overview/planning-your-migration-to-github) and [Migrations to GHE.com](/migrations/overview/migration-paths-to-github#migrations-to-ghecom).

The steps you will take to migrate to {% data variables.product.prodname_ghe_cloud %} include:

1. Define the origin (source) for your migration. Your destination is {% data variables.product.prodname_ghe_cloud %}.
1. Understand what data you will migrate, and build a basic inventory.
1. Evaluate the size of your migration data, and recognize if you need to first move any repositories to Git.
1. Decide on your migration type, based on your organization's needs and the tools available to you.
1. Choose if you will perform the migration yourself (a "self-serve migration"), or if you will work with {% data variables.product.company_short %}'s Expert Services team or a {% data variables.product.company_short %} Partner (an "expert-led migration").

In a later stage of setting up your trial, when you're ready to create your organization and teams, you will take additional steps to finish your migration, including:

1. Design your organization structure for the migration to {% data variables.product.prodname_ghe_cloud %}.
1. Plan a test of your migration, including performing a dry run migration of all your repositories.
1. Establish your pre-migration and post-migration steps, and create a migration plan.
1. Prepare your organization and schedule for the migration.
1. Perform the migration, and execute any post-migration tasks.

## About enterprise migrations to {% data variables.product.prodname_actions %}

To migrate your enterprise to {% data variables.product.prodname_actions %} from an existing system, you can plan the migration, complete the migration, and retire existing systems. To learn how to migrate your workflows to {% data variables.product.prodname_actions %}, see [AUTOTITLE](/admin/github-actions/getting-started-with-github-actions-for-your-enterprise/migrating-your-enterprise-to-github-actions).

If you're planning to switch to {% data variables.product.prodname_actions %}, we do not recommend doing so at the same time that you migrate your repositories. Instead, wait until a later date, and perform your CI/CD migration as a separate step. This makes the migration process more manageable. When you're ready to migrate, see [AUTOTITLE](/actions/migrating-to-github-actions).

## Next steps

Next, learn about [AUTOTITLE](/enterprise-onboarding/getting-started-with-your-enterprise/securing-your-enterprise-with-managed-users) and [AUTOTITLE](/enterprise-onboarding/getting-started-with-your-enterprise/securing-enterprise-resources-with-single-sign-on).
