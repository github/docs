---
title: Configuring notifications in GitHub Desktop
shortTitle: Configuring notifications
intro: 'You can view the status of checks and re-run them in {% data variables.product.prodname_desktop %}.'
versions:
  fpt: '*'
---
## About checks in {% data variables.product.prodname_desktop %}

{% data variables.product.prodname_desktop %} displays the status of checks that have run in your pull request branches. For more information on setting up checks in your repository, see "[About status checks](/github/collaborating-with-pull-requests/collaborating-on-repositories-with-code-quality-features/about-status-checks)." {% data variables.product.prodname_desktop %} will also instantly notify you when checks fail. For more information on notifications, see "[Configuring notifications](desktop/contributing-and-collaborating-using-github-desktop/working-with-your-remote-repository-on-github-or-github-enterprise/configuring-notifications)."

## Viewing and re-running checks

{% data reusables.desktop.current-branch-menu %}
{% data reusables.desktop.click-pull-requests %}
  ![Pull Requests tab in the Current Branch drop-down menu](/assets/images/help/desktop/branch-drop-down-pull-request-tab.png)
{% data reusables.desktop.choose-pr-from-list %}
  ![List of open pull requests in the repository](/assets/images/help/desktop/click-pull-request.png)
4. Click the check next to the pull request branch name
  ![Checks display next to branch name](/assets/images/help/desktop/checks-dialog.png)
5. To re-run failed checks, click **Re-run** and select **Re-run Failed Checks**.
  ![Re-run failed checks](/assets/images/help/desktop/re-run-failed-checks.png)
6. To re-run individual checks, highlight the individual check you want to re-run and select **Re-run this check**.
  ![Re-run individual checks](/assets/images/help/desktop/re-run-individual-checks.png)
7. You will see a confirmation dialog with the summary of the check(s) that will be re-run.
8. Click **Re-run Check(s)** to confirm that you want to perform the re-run.
  ![Re-run confirmation dialog](/assets/images/help/desktop/re-run-confirmation-dialog.png)