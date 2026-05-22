---
title: Preparing for your live migration from GitHub Enterprise Server to GHE.com
shortTitle: Prepare for your migration
intro: 'Key questions to consider before getting started with {% data variables.product.prodname_elm %}.'
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
contentType: concepts
---

{% data reusables.elm.preview-note %}

## Is our {% data variables.product.prodname_ghe_server %} instance ready?

<!-- expires 2026-05-12 -->
<!-- when the 3.21 RC is released, update this to indicate it's also available in all major releases from 3.21 -->
<!-- And update the min versions and wording in this reusable to indicate the minimum required versions to follow these instructions -->

{% data variables.product.prodname_elm_short %} has been backported to supported releases. To use it, you must upgrade to one of the following minor versions or later:

* `3.20.2`
* `3.19.6`
* `3.18.9`
* `3.17.15`

<!-- end expires 2026-05-12 -->

Your {% data variables.product.prodname_ghe_server %} instance must also:

* Use an **HTTPS** URL. HTTP URLs are not supported.
* Have migrations enabled and blob storage configured. You can check these settings in the "Migrations" section of the Management Console. If you don't already have these settings configured, we will explain how to set them to default values in [AUTOTITLE](/migrations/elm/migrate-your-repository).

## What will our destination organization look like?

You can migrate repositories to a new or existing organization on {% data variables.enterprise.data_residency_site %}. ELM creates the target organization if it doesn't already exist.

A platform migration is a good opportunity to reconsider your organization and team structure. See [AUTOTITLE](/admin/concepts/enterprise-best-practices/organize-work).

## Which repositories will we migrate?

{% data variables.product.prodname_elm_short %} supports {% data reusables.elm.concurrent-migrations %}

Plan which repositories you will migrate with {% data variables.product.prodname_elm_short %} first, and which you can migrate later or using a different migration tool. Repositories that are most likely to benefit from {% data variables.product.prodname_elm_short %} are:

* Important repositories where long periods of downtime would disrupt your business
* Large monorepos that are too big for other migration tools

Public repositories are not available on {% data variables.enterprise.data_residency_site %}, and these will be rejected by {% data variables.product.prodname_elm_short %}. You can change the visibility of these repositories on {% data variables.product.prodname_ghe_server %} before you start.

You should check that the repositories you choose don't contain release assets that are over 2GB, as this is the limit for {% data variables.product.prodname_elm_short %}.

## Who will run the migration?

The person who runs an {% data variables.product.prodname_elm_short %} migration must:

* Have site admin access to the {% data variables.product.prodname_ghe_server %} instance
* Be an enterprise owner on the {% data variables.enterprise.data_residency_site %} enterprise

This person will need to perform the following tasks:

* Before the migration, create {% data variables.product.pat_v1_plural %} on both the source and destination enterprise.
* During the migration, monitor the migration status and respond to issues.

For concurrent {% data variables.product.prodname_elm_short %} migrations from a {% data variables.product.prodname_ghe_server %} instance, the same person must run all the `elm` commands, using the same tokens.

After the migration, someone will need to perform some follow-up tasks on {% data variables.enterprise.data_residency_site %}. Any organization owner can do this.

## What should my developers know?

Before you start, communicate with developers that:

* The repository is moving to a new location. Users can continue to use the source repository during the migration until the operator begins the final cutover to the new location.
* While the migration is in progress, developers should avoid force pushes to the repository, because these will disrupt the Git history in a way that {% data variables.product.prodname_elm_short %} cannot resolve.
* Certain actions that developers perform during the migration process may not be reflected in the migrated repository. For details, see the unsupported actions in [AUTOTITLE](/migrations/elm/migrated-data-reference#events-included-in-live-updates).

## Next steps

When you're ready to run a migration, see [AUTOTITLE](/migrations/elm/migrate-your-repository).
