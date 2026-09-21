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

After you have run a migration with the {% data variables.product.prodname_elm_cli %} tool, there are some follow-up tasks to complete.

## Restore users' access

Because {% data variables.product.prodname_ghe_server %} and {% data variables.enterprise.data_residency_site %} use different provisioning and authentication systems, organization membership is not carried over between platforms. You will need to add users to the organization before you can reattribute activity to them in a migrated repository.

1. If you created a new organization for the migration process, add members to the organization. You can do this manually, but many enterprises manage organization membership from their identity provider (IdP) by syncing enterprise teams with IdP groups.
1. Add organization members to the migrated repositories.

## Reattribute activity to users

{% data reusables.enterprise-migration-tool.about-mannequins %} For more information, see [AUTOTITLE](/migrations/overview/mannequins-and-user-activity).

Once user accounts have been added to the organization on {% data variables.enterprise.data_residency_site %}, you can invite users to reclaim a mannequin's activity. You can do this in the browser or, with the {% data variables.product.prodname_elm_cli %} tool, reclaim mannequins in bulk without the invite process.

### Reclaiming mannequins in bulk using the {% data variables.product.prodname_elm_cli %}

You can use the {% data variables.product.prodname_elm_cli %} to reclaim mannequins in bulk. 

1. Generate the list of mannequins in the migration. The following command produces a CSV file that maps mannequins to organization members. Optionally, to include mannequins that have already been reclaimed, add the `--include-reclaimed` flag.
   
   ```shell copy
   gh target mannequin list ORGANIZATION_NAME
   ```

   This will produce a CSV file of all mannequins in the target organization, in the form `mannequin-user,mannequin-id,target-user`:

   ```text
   ghe-admin,M_kgDOAAw-zw,
   unit-test,M_kgDOAA5FYg,
   admin-octoshift,M_kgDOAA5FZw,
   ```

1. Output the command to a file that you can edit.

   ```shell copy
   gh elm target mannequin list ORGANIZATION_NAME > MANNEQUINS.csv
   ```
   
1. Edit the CSV file, adding the username of the organization member that corresponds to each mannequin. Ensure you save the file after you edit it.
1. Reclaim mannequins using the `mannequin reclaim` command. Use the ORGANIZATION_NAME and filename from the previous step.
   
   ```shell copy
   gh target mannequin reclaim ORGANIZATION_NAME --csv MANNEQUINS.csv
   ```
   
For a full reference of the reclaim command, including options to control invitations and prompting, see [AUTOTITLE](/migrations/elm/elm-cli-reference).

### Reclaiming mannequins in the browser

{% data reusables.elm.reclaim-mannequins-in-browser %}

## Reattribute Git activity

{% data reusables.elm.git-activity %}

To reattribute Git activity on {% data variables.enterprise.data_residency_site %}, ensure the user's primary email address in your identity provider (IdP) matches the email address used for their commits. With {% data variables.product.prodname_emus %}, users cannot add email addresses to their user account on {% data variables.product.github %}, so users will not be able to reattribute their Git commits independently.

## Recreate organization settings

If you created a new organization for the migration process, restore settings such as policies, organization teams, and projects.
