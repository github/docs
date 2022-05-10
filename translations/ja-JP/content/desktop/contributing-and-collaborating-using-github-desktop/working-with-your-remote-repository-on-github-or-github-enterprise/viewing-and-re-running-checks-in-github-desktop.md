---
title: Viewing and re-running checks in GitHub Desktop
shortTitle: Viewing and re-running checks
intro: 'You can view the status of checks and re-run them in {% data variables.product.prodname_desktop %}.'
versions:
  fpt: '*'
---

## About checks in {% data variables.product.prodname_desktop %}

{% data variables.product.prodname_desktop %} displays the status of checks that have run in your pull request branches. The checks badge next to the branch name will display the *pending, passing,* or *failing* state of the checks. You can also re-run all, failed, or individual checks when viewing the status of the checks in {% data variables.product.prodname_desktop %}. For more information on setting up checks in your repository, see "[About status checks](/github/collaborating-with-pull-requests/collaborating-on-repositories-with-code-quality-features/about-status-checks)."

{% data variables.product.prodname_desktop %} will also show a system notification when checks fail. For more information on enabling notifications, see "[Configuring notifications in GitHub Desktop](/desktop/contributing-and-collaborating-using-github-desktop/working-with-your-remote-repository-on-github-or-github-enterprise/configuring-notifications-in-github-desktop)."

## Viewing and re-running checks

{% data reusables.desktop.current-branch-menu %}
{% data reusables.desktop.click-pull-requests %}
  ![[Current Branch] のドロップダウンメニュー内にある [Pull Requests] タブ](/assets/images/help/desktop/branch-drop-down-pull-request-tab.png)
{% data reusables.desktop.choose-pr-from-list %}
  ![リポジトリ内のオープンプルリクエストのリスト](/assets/images/help/desktop/click-pull-request.png)
4. Click on the pull request number, to the right of the pull request branch name. ![Checks display next to branch name](/assets/images/help/desktop/checks-dialog.png)
5. To re-run failed checks, click **{% octicon "sync" aria-label="The sync icon" %} Re-run** and select **Re-run Failed Checks**. ![Re-run failed checks](/assets/images/help/desktop/re-run-failed-checks.png)
6. To re-run individual checks, hover over the individual check you want to re-run and select the {% octicon "sync" aria-label="The sync icon" %} icon to re-run the check. ![Re-run individual checks](/assets/images/help/desktop/re-run-individual-checks.png)
7. You will see a confirmation dialog with the summary of the checks that will be re-run. Click **Re-run Checks** to confirm that you want to perform the re-run. ![Re-run confirmation dialog](/assets/images/help/desktop/re-run-confirmation-dialog.png)
