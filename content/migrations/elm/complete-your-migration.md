---
title: Completing your live migration from GitHub Enterprise Server to GHE.com
shortTitle: Complete your migration
intro: 'Complete follow-up tasks so users can start using the migrated repository.'
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
contentType: how-tos
permissions: 'Organization owners on {% data variables.enterprise.data_residency_site %}'
---

{% data reusables.elm.preview-note %}

After you have run a migration with the `elm` CLI tool, there are some follow-up tasks to complete.

## Restore users' access

Because {% data variables.product.prodname_ghe_server %} and {% data variables.enterprise.data_residency_site %} use different provisioning and authentication systems, organization membership is not carried over between platforms. You will need to add users to the organization before you can reattribute activity to them in a migrated repository.

1. If you created a new organization for the migration process, add members to the organization. You can do this manually, but many enterprises manage organization membership from their identity provider (IdP) by syncing enterprise teams with IdP groups.
1. Add organization members to the migrated repositories.

## Reattribute activity to users

{% data reusables.enterprise-migration-tool.about-mannequins %} For more information, see [AUTOTITLE](/migrations/overview/mannequins-and-user-activity).

Once user accounts have been added to the organization on {% data variables.enterprise.data_residency_site %}, you can invite users to reclaim a mannequin's activity. You can do this in the browser or, with the {% data variables.product.prodname_gei_cli %} tool, reclaim mannequins in bulk without the invite process.

### Reclaiming mannequins in the browser

{% data reusables.elm.reclaim-mannequins-in-browser %}

### Reclaiming mannequins in bulk

You can install the {% data variables.product.prodname_gei_cli %} to reclaim mannequins in bulk. See [AUTOTITLE](/migrations/using-github-enterprise-importer/completing-your-migration-with-github-enterprise-importer/reclaiming-mannequins-for-github-enterprise-importer#reclaiming-mannequins-with-the-gei-extension).

## Reattribute Git activity

{% data reusables.elm.git-activity %}

To reattribute Git activity on {% data variables.enterprise.data_residency_site %}, ensure the user's primary email address in your identity provider (IdP) matches the email address used for their commits. With {% data variables.product.prodname_emus %}, users cannot add email addresses to their user account on {% data variables.product.github %}, so users will not be able to reattribute their Git commits independently.

## Recreate organization settings

If you created a new organization for the migration process, restore settings such as policies, organization teams, and projects.
