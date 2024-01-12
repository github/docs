---
title: Viewing and re-running checks in GitHub Desktop
shortTitle: Viewing and re-running checks
intro: 'You can view the status of checks and re-run them in {% data variables.product.prodname_desktop %}.'
versions:
  feature: desktop
redirect_from:
  - /desktop/contributing-and-collaborating-using-github-desktop/working-with-your-remote-repository-on-github-or-github-enterprise/viewing-and-re-running-checks-in-github-desktop
---
## About checks in {% data variables.product.prodname_desktop %}

{% data variables.product.prodname_desktop %} displays the status of checks that have run in your pull request branches. The checks badge next to the branch name will display the _pending, passing,_ or _failing_ state of the checks. You can also re-run all, failed, or individual checks when viewing the status of the checks in {% data variables.product.prodname_desktop %}. For more information on setting up checks in your repository, see "[AUTOTITLE](/pull-requests/collaborating-with-pull-requests/collaborating-on-repositories-with-code-quality-features/about-status-checks)."

{% data variables.product.prodname_desktop %} will also show a system notification when checks fail. For more information on enabling notifications, see "[AUTOTITLE](/desktop/working-with-your-remote-repository-on-github-or-github-enterprise/configuring-notifications-in-github-desktop)."

## Viewing and re-running checks

{% data reusables.desktop.current-branch-menu %}
{% data reusables.desktop.click-pull-requests %}
{% data reusables.desktop.choose-pr-from-list %}
1. Click on the pull request number, to the right of the pull request branch name.

   ![Screenshot of the repository bar. Next to the "Current Branch" button, a numbered label, displayed with a red cross for failing checks, is outlined in orange.](/assets/images/help/desktop/checks-dialog.png)
1. To re-run failed checks, click **{% octicon "sync" aria-hidden="true" %} Re-run** and select **Re-run Failed Checks**.

   ![Screenshot of a dropdown view from a pull request label. Next to the message "Some checks were not successful", a button labeled "Re-run" is outlined in orange.](/assets/images/help/desktop/re-run-failed-checks.png)
1. To re-run individual checks, hover over the individual check you want to re-run and select the {% octicon "sync" aria-label="The sync icon" %} icon to re-run the check.

   ![Screenshot of a dropdown view from a pull request label. The cursor hovers over a check, and an icon of two arrows forming a circle is outlined in orange.](/assets/images/help/desktop/re-run-individual-checks.png)
1. You will see a confirmation dialog with the summary of the checks that will be re-run. Click **Re-run Checks** to confirm that you want to perform the re-run.
