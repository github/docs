---
title: Managing prebuilds
shortTitle: Manage prebuilds
intro: 'You can review, modify, and delete the prebuild configurations for your repository.'
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Codespaces
product: '{% data reusables.gated-features.codespaces-repo %}'
---

## About managing prebuilds

The prebuilds that you configure for a repository are created and updated using a {% data variables.product.prodname_actions %} workflow, managed by the {% data variables.product.prodname_github_codespaces %} service.

Depending on the settings in a prebuild configuration, the workflow to update the prebuild may be triggered by these events:

- Creating or updating the prebuild configuration
- Pushing a commit or a pull request to a branch that's configured to have prebuilds
- Changing any of the dev container configuration files
- A schedule that you've defined in the prebuild configuration
- Manually triggering the workflow

The settings in the prebuild configuration determine which events automatically trigger an update of the prebuild. For more information, see "[AUTOTITLE](/codespaces/prebuilding-your-codespaces/configuring-prebuilds#configuring-prebuilds)."

People with admin access to a repository can check the progress of prebuilds, edit, and delete prebuild configurations.

To locate all repositories that are hosting a prebuild configuration, you must obtain a copy of your usage report by following the steps for "[AUTOTITLE](/billing/managing-billing-for-github-codespaces/viewing-your-github-codespaces-usage)."

## Viewing the progress of prebuilds

You can view the current status of the latest workflow run for each prebuild configuration you've set up on the {% data variables.product.prodname_github_codespaces %} page of your repository settings. For example, "Currently running" or "Last run 1 hour ago."

To see the log output for the latest prebuild workflow run, click **See output**.

![Screenshot of the "Prebuild configuration" page. Two prebuild configurations are listed. The "See output" button for one configuration is highlighted.](/assets/images/help/codespaces/prebuilds-see-output.png)

This displays the output of the most recent run of the workflow in the **Actions** tab.

![Screenshot of the prebuild workflow output in the "Actions" tab of {% data variables.product.prodname_dotcom_the_website %}.](/assets/images/help/codespaces/prebuilds-log-output.png)

Alternatively, to view all prebuild workflow runs associated with the specified branch, select the {% octicon "kebab-horizontal" aria-label="options" %} dropdown menu and click **View runs**.

![Screenshot of the options dropdown menu for a configuration, shown by clicking a button labeled with three dots. The "View runs" option is selected.](/assets/images/help/codespaces/prebuilds-view-runs.png)

This displays the workflow run history for prebuilds for the associated branch.

![Screenshot of the "Codespaces Prebuilds" list showing a run history for prebuild workflows.](/assets/images/help/codespaces/prebuilds-workflow-runs.png)

## Editing a prebuild configuration

1. On the {% data variables.product.prodname_codespaces %} page of your repository settings, click the ellipsis to the right of the prebuild configuration you want to edit.
1. In the dropdown menu, click **Edit**.

   ![Screenshot of the options dropdown menu for a configuration, displayed by clicking a button labeled with three dots. The "Edit" option is selected.](/assets/images/help/codespaces/prebuilds-edit.png)

1. Make the required changes to the prebuild configuration, then click **Update**.

   {% data reusables.codespaces.prebuilds-permission-authorization %}

## Disabling a prebuild configuration

To pause the update of prebuilds for a configuration, you can disable workflow runs for the configuration. Disabling the workflow runs for a prebuild configuration does not delete any previously created prebuilds for that configuration and, as a result, codespaces will continue to be generated from an existing prebuild.

Disabling the workflow runs for a prebuild configuration is useful if you need to investigate prebuild creation failures.

1. On the {% data variables.product.prodname_codespaces %} page of your repository settings, click the ellipsis to the right of the prebuild configuration you want to disable.
1. In the dropdown menu, click **Disable runs**.

   ![Screenshot of the options dropdown menu for a configuration, shown by clicking a button labeled with three dots. The "Disable runs" option is selected.](/assets/images/help/codespaces/prebuilds-disable.png)

1. To confirm that you want to disable this configuration, click **OK**.

## Deleting a prebuild configuration

{% note %}

**Note**: You can find a list of the repositories that contain a prebuild by obtaining a copy of your “[usage report](/billing/managing-billing-for-github-codespaces/viewing-your-github-codespaces-usage).”

{% endnote %}

Deleting a prebuild configuration also deletes all previously created prebuilds for that configuration. As a result, shortly after you delete a configuration, prebuilds generated by that configuration will no longer be available when you create a new codespace.

After you delete a prebuild configuration, workflow runs for that configuration that have been queued or started will still run. They will be listed in the workflow run history, along with previously completed workflow runs.

1. On the {% data variables.product.prodname_codespaces %} page of your repository settings, click the ellipsis to the right of the prebuild configuration you want to delete.
1. In the dropdown menu, click **Delete**.

   ![Screenshot of the options dropdown menu for a configuration, displayed by clicking a button labeled with three dots. The "Delete" option is selected.](/assets/images/help/codespaces/prebuilds-delete.png)

1. Click **OK** to confirm the deletion.

## Manually trigger prebuilds

It may be useful to manually trigger a workflow run for a prebuild configuration. Generally, this is only necessary if you are debugging a problem with the workflow for a prebuild configuration.

1. On the {% data variables.product.prodname_codespaces %} page of your repository settings, click the ellipsis to the right of the prebuild configuration whose workflow you want to trigger.
1. In the dropdown menu, click **Manually trigger**.

   ![Screenshot of the options dropdown menu for a configuration, shown by clicking a button labeled with three dots. The "Manually trigger" option is selected.](/assets/images/help/codespaces/prebuilds-manually-trigger.png)

## Further reading

- "[AUTOTITLE](/codespaces/troubleshooting/troubleshooting-prebuilds)"
