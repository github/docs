---
title: Reclaiming mannequins for GitHub Enterprise Importer
shortTitle: Reclaim mannequins
intro: 'After your migration, you can assign the history of a placeholder identity, or mannequin, to a member of your organization.'
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
permissions: Organization owners can reclaim mannequins.
redirect_from:
  - /early-access/github/migrating-with-github-enterprise-importer/running-a-migration-with-github-enterprise-importer/reclaiming-mannequins-for-github-enterprise-importer
  - /early-access/enterprise-importer/completing-your-migration-with-github-enterprise-importer/reclaiming-mannequins-for-github-enterprise-importer
---

## About mannequins

{% data reusables.enterprise-migration-tool.about-mannequins %}

Each mannequin only has a display name, which comes from the display name in the source repository. Mannequins do not have organization membership or repository access. Mannequins always use the same avatar, a ghost octocat, and include a mannequin label following the display name.

![Screenshot of the header of an issue comment. The commenter is labeled as a mannequin, and the "Mannequin" label is outlined in dark orange.](/assets/images/help/github-enterprise-importer/mannequin-example.png)

{% data reusables.enterprise-migration-tool.how-to-reclaim %}

Reclaiming is optional and can happen any time after a migration is finished. For this reason, you can allow your team to begin working in migrated repositories before reclaiming.

Mannequins are not used for Git commit attribution. For more details about commit attribution, see "[Managing authorship for commit commits](#managing-authorship-for-git-commits)" below.

## Reclaiming mannequins

You can reclaim mannequins with {% data variables.product.prodname_cli %} (recommended) or the browser.

- [Reclaiming mannequins with the {% data variables.product.prodname_cli %} (recommended)](#reclaiming-mannequins-with-the-github-cli-recommended)
- [Reclaiming mannequins in your browser](#reclaiming-mannequins-in-your-browser)

By default, reclaiming a mannequin will send an attribution invitation to the target user.

The target user can choose to accept or reject the invitation. After a user accepts an attribution invitation, all contributions previously attributed to the mannequin will be attributed to the user instead. In future migrations to the same organization, any contributions from the same mannequin will be automatically reclaimed for the same user.

If your organization uses {% data variables.product.prodname_emus %} and you choose to reclaim mannequins with the {% data variables.product.prodname_cli %}, you can optionally skip the invitation process, immediately reclaiming the mannequin without the user's approval.

{% note %}

**Notes:**
- You cannot reclaim mannequins after you have transferred a repository to another organization. If you wish to transfer a repository to another organization after your migration, you must reclaim the mannequins before the transfer.
- When reclaiming mannequins, you can only target existing organization members. Before attempting to reclaim a mannequin, verify that the {% data variables.product.prodname_dotcom %} user you want to invite is already added to the organization.

{% endnote %}

{% data variables.product.prodname_importer_proper_name %} does not migrate user access to repositories. After reclaiming mannequins, if any of the users do not already have appropriate access to the repository via team membership, you must separately give the users access to the repository. For more information, see "[Managing an individual's access to an organization repository](/organizations/managing-access-to-your-organizations-repositories/managing-an-individuals-access-to-an-organization-repository)."

### Reclaiming mannequins with the {% data variables.product.prodname_cli %} (recommended)

You can use the {% data variables.product.prodname_cli %} to reclaim mannequins individually or in bulk. For more information about installing and updating migration extensions for the {% data variables.product.prodname_cli %}, see "[AUTOTITLE](/migrations/using-github-enterprise-importer/migrating-repositories-with-github-enterprise-importer)."

The exact command you need to use depends on which extension of the {% data variables.product.prodname_cli %} that you're using.

- [Reclaiming mannequins with the {% data variables.product.prodname_gei_cli_short %}](#reclaiming-mannequins-with-the-gei-extension)
- [Reclaiming mannequins with the {% data variables.product.prodname_ado2gh_cli_short %}](#reclaiming-mannequins-with-the-ado2gh-extension)

#### Reclaiming mannequins with the {% data variables.product.prodname_gei_cli_short %}

If your migration source is a {% data variables.product.prodname_dotcom %} product, you can reclaim mannequins with the {% data variables.product.prodname_gei_cli %}.

{% data reusables.enterprise-migration-tool.add-pat-to-reclaim-mannequins %}

{% data reusables.enterprise-migration-tool.create-csv-mannequins %}

   - To generate a CSV file with a list of mannequins for an organization, use the `gh gei generate-mannequin-csv` command, replacing DESTINATION with the destination organization and FILENAME with a file name for the resulting CSV file.

     {% data reusables.enterprise-migration-tool.include-reclaimed %}

     ```shell copy
     gh gei generate-mannequin-csv --github-target-org DESTINATION --output FILENAME.csv
     ```

   {% data reusables.enterprise-migration-tool.edit-csv %}
1. To reclaim mannequins, use the `gh gei reclaim-mannequin` command.

   {% data reusables.enterprise-migration-tool.reclaim-bulk-csv %}

      ```shell copy
      gh gei reclaim-mannequin --github-target-org DESTINATION --csv FILENAME.csv
      ```

   {% data reusables.enterprise-migration-tool.reclaim-individual-mannequin %}

      ```shell copy
      gh gei reclaim-mannequin --github-target-org DESTINATION --mannequin-user MANNEQUIN --target-user USERNAME
      ```

{% data reusables.enterprise-migration-tool.mannequin-reclaim-must-accept %}

#### Reclaiming mannequins with the {% data variables.product.prodname_ado2gh_cli_short %}

If your migration source is Azure DevOps, you can reclaim mannequins with the {% data variables.product.prodname_ado2gh_cli %}.

{% data reusables.enterprise-migration-tool.add-pat-to-reclaim-mannequins %}

{% data reusables.enterprise-migration-tool.create-csv-mannequins %}

   - To generate a CSV file with a list of mannequins for an organization, use the `gh ado2gh generate-mannequin-csv` command, replacing DESTINATION with the destination organization and FILENAME with a file name for the resulting CSV file.

     {% data reusables.enterprise-migration-tool.include-reclaimed %}

     ```shell copy
     gh ado2gh generate-mannequin-csv --github-org DESTINATION --output FILENAME.csv
     ```

   {% data reusables.enterprise-migration-tool.edit-csv %}
1. To reclaim mannequins, use the `gh ado2gh reclaim-mannequin` command.

    {% data reusables.enterprise-migration-tool.reclaim-bulk-csv %}

      ```shell copy
      gh ado2gh reclaim-mannequin --github-org DESTINATION --csv FILENAME.csv
      ```

   {% data reusables.enterprise-migration-tool.reclaim-individual-mannequin %}

      ```shell copy
      gh ado2gh reclaim-mannequin --github-org DESTINATION --mannequin-user MANNEQUIN --target-user USERNAME
      ```

{% data reusables.enterprise-migration-tool.mannequin-reclaim-must-accept %}

### Reclaiming mannequins in your browser

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.enterprise-migration-tool.import-export-tab %}
1. To the right of the mannequin you want to reclaim, click **Reattribute**.
1. In the search field, type the username of the organization member you want to attribute the mannequin's contributions to, then click the member.

   {% note %}

   **Note:** You can only send attribution invitations to user accounts that are already members of the organization.

   {% endnote %}
1. Click **Invite**.
{% data reusables.enterprise-migration-tool.mannequin-reclaim-must-accept %}

## Viewing the status of your attribution invitations

You can view the status of all attribution invitations for your organization.

- Invited: The user has been sent an invitation, but has not replied to the invitation yet.
- Completed: The user has accepted, or the invitation process was skipped. The user's contributions have been reattributed.
- Rejected: The user chose not to be credited for the mannequin's contributions.

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.enterprise-migration-tool.import-export-tab %}
1. Under "{% octicon "arrow-switch" aria-hidden="true" %} Import/Export", click **Attribution Invitations**.

   ![Screenshot of the "Import/Export" page for a repository. A tab, labeled "Attribution Invitations," is outlined in dark orange.](/assets/images/help/github-enterprise-importer/attribution-invitations-tab.png)

## Managing authorship for Git commits

Authorship for Git commits is not associated with mannequins and cannot be attributed to {% data variables.product.prodname_dotcom %} users by reclaiming mannequins. Instead, commit authorship is attributed to user accounts on {% data variables.product.prodname_dotcom %} based on the email address that was used to author the commit in Git.

In many cases, users can reattribute commits to themselves by adding the email address used to author the commit to their user account on {% data variables.product.prodname_dotcom %}. For more information, see "[AUTOTITLE](/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-email-preferences/adding-an-email-address-to-your-github-account)."

However, if you use {% data variables.product.prodname_emus %}, users cannot add email addresses to their user account on {% data variables.product.prodname_dotcom %} and will therefore not be able to reattribute Git commits. Only commits authored by a user's primary email address in your identity provider (IdP) will be attributed to {% data variables.enterprise.prodname_managed_users %}.

Additionally, commits authored by a {% data variables.product.company_short %}-provided `noreply` email address cannot be reattributed, because you can't manually add a `noreply` email address to a user account. For more information, see "[AUTOTITLE](/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-email-preferences/setting-your-commit-email-address)."
