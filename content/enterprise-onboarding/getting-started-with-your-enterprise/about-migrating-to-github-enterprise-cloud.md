---
title: About migrating to GitHub Enterprise Cloud
intro: Explore migrating your current solution into {% data variables.product.prodname_ghe_cloud %}.
versions:
  ghec: '*'
type: overview
topics:
  - Accounts
  - Enterprise
shortTitle: Migrations
contentType: other
---

{% data reusables.migrations.about-migrations %}

{% data variables.product.company_short %} provides a variety of different tools to support these migrations. Different tools support different migration pathways and provide different levels of migration fidelity. To determine the best tool for your migration, understand what you can migrate, and learn how to make your migration successful, see [AUTOTITLE](/migrations/overview/planning-your-migration-to-github).

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

To migrate your enterprise to {% data variables.product.prodname_actions %} from an existing system, you can plan the migration, complete the migration, and retire existing systems.

If you're planning to switch to {% data variables.product.prodname_actions %}, we do not recommend doing so at the same time that you migrate your repositories. Instead, wait until a later date, and perform your CI/CD migration as a separate step. This makes the migration process more manageable.

## Next steps

Now that you've started your trial and added users to your enterprise, you can set up organizations and teams to manage access. See [AUTOTITLE](/enterprise-onboarding/setting-up-organizations-and-teams/best-practices-for-organizations-in-your-enterprise).
