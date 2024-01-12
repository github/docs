## Publishing a codespace created from a template

When you create a codespace from a template repository or a template on the "Your codespaces" page, the work you do won't be stored in a repository on {% data variables.product.prodname_dotcom %} until you publish your codespace. For more information, see "[AUTOTITLE](/codespaces/developing-in-codespaces/creating-a-codespace-from-a-template#publishing-to-a-repository-on-github)."

{% data reusables.codespaces.publishing-template-codespaces %}

## Creating or switching branches

{% data reusables.codespaces.create-or-switch-branch %}

{% tip %}

**Tip**: If someone has recently changed a file on the remote repository, in the branch you switched to, you may not see those changes until you pull the changes into your codespace.

{% endtip %}

## Committing your changes

{% data reusables.codespaces.source-control-activity-bar %}
1. To stage your changes, click  {% octicon "plus" aria-label="Stage changes" %} next to the file you've changed, or next to **Changes** if you've changed multiple files and you want to stage them all.

   ![Screenshot of the "Source control" side bar with the staging button (a plus sign), to the right of "Changes," highlighted with a dark orange outline.](/assets/images/help/codespaces/codespaces-commit-stage.png)

1. In the text box, type a commit message describing the change you've made.

   ![Screenshot of the "Source control" side bar with a commit message entered into the text box above the "Commit" button.](/assets/images/help/codespaces/codespaces-commit-commit-message.png)  

1. Click the down arrow at the right side of the **Commit** button, and select **Commit & Push** from the dropdown menu.

   ![Screenshot of the dropdown for the "Commit" button. The option "Commit & Push" is highlighted with a dark orange outline.](/assets/images/help/codespaces/commit-and-push-option.png)  

## Pulling changes from the remote repository

You can pull changes from the remote repository into your codespace at any time.

{% data reusables.codespaces.source-control-activity-bar %}
1. At the top of the side bar, click {% octicon "kebab-horizontal" aria-label="Views and More Actions..." %}.

   ![Screenshot of the "Source control" side bar. The ellipsis button (three dots) is highlighted with a dark orange outline.](/assets/images/help/codespaces/source-control-ellipsis-button.png)

1. In the dropdown menu, click **Pull**.

If the dev container configuration has been changed since you created the codespace, you can apply the changes by rebuilding the container for the codespace. For more information, see "[AUTOTITLE](/codespaces/setting-up-your-project-for-codespaces/adding-a-dev-container-configuration/introduction-to-dev-containers#applying-changes-to-your-configuration)."

## Setting your codespace to automatically fetch new changes

You can set your codespace to automatically fetch details of any new commits that have been made to the remote repository. This allows you to see whether your local copy of the repository is out of date, in which case you may choose to pull in the new changes.

If the fetch operation detects new changes on the remote repository, you'll see the number of new commits in the status bar. You can then pull the changes into your local copy.

1. Click the **Manage** button at the bottom of the Activity Bar.

   ![Screenshot of the bottom of the Activity Bar. The Manage button (labeled with a gear symbol) is highlighted with a dark orange outline.](/assets/images/help/codespaces/manage-button.png)

1. In the menu, click **Settings**.
1. On the Settings page, search for: `autofetch`.

   ![Screenshot of the "Settings" tab. The search text "autofetch" is highlighted with a dark orange outline.](/assets/images/help/codespaces/autofetch-search.png)

1. To fetch details of updates for all remotes registered for the current repository, set **Git: Autofetch** to `all`.

   ![Screenshot of the "Git: Autofetch" setting, set to "all."](/assets/images/help/codespaces/autofetch-all.png)

1. If you want to change the number of seconds between each automatic fetch, edit the value of **Git: Autofetch Period**.

## Raising a pull request

{% data reusables.codespaces.source-control-pull-request %}

## Pushing changes to your remote repository

You can push changes you've saved and committed. This applies those changes to the upstream branch on the remote repository. You might want to do this if you're not yet ready to create a pull request, or if you prefer to create a pull request on {% data variables.product.prodname_dotcom %}.

1. At the top of the side bar, click {% octicon "kebab-horizontal" aria-label="Views and More Actions..." %}.

   ![Screenshot of the "Source control" side bar. The ellipsis button (three dots) is highlighted with a dark orange outline.](/assets/images/help/codespaces/source-control-ellipsis-button-nochanges.png)

1. In the dropdown menu, click **Push**.
