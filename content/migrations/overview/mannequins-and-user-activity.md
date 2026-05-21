---
title: Mannequins and user activity
intro: Mannequins are placeholder identities that users can reclaim after a migration.
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
category:
  - Plan your migration
---

## What are mannequins?

{% data reusables.enterprise-migration-tool.about-mannequins %}

Each mannequin only has a display name, which comes from the display name in the source repository. Mannequins do not have organization membership or repository access. Mannequins always use the same avatar, a ghost octocat, and include a mannequin label following the display name.

![Screenshot of the header of an issue comment. The commenter is labeled as a mannequin, and the "Mannequin" label is outlined in dark orange.](/assets/images/help/github-enterprise-importer/mannequin-example.png)

Reclaiming is optional and can happen any time after a migration is finished. For this reason, you can allow your team to begin working in migrated repositories before reclaiming.

{% data reusables.elm.git-activity %}

## How can I reclaim mannequins?

{% data reusables.enterprise-migration-tool.how-to-reclaim %} For instructions, see [AUTOTITLE](/migrations/using-github-enterprise-importer/completing-your-migration-with-github-enterprise-importer/reclaiming-mannequins-for-github-enterprise-importer).

By default, reclaiming a mannequin will send an attribution invitation to the target user. The target user can choose to accept or reject the invitation.

After a user accepts an attribution invitation, all contributions previously attributed to the mannequin will be attributed to the user instead. In future migrations to the same organization, any contributions from the same mannequin will be automatically reclaimed for the same user.

If your organization uses {% data variables.product.prodname_emus %} and you choose to reclaim mannequins with the {% data variables.product.prodname_cli %}, you can optionally skip the invitation process, immediately reclaiming the mannequin without the user's approval.
