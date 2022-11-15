## Publishing a codespace created from a template

When you create a codespace from a template repository or a template on the "Your codespaces" page, the work you do won't be stored in a repository on {% data variables.product.prodname_dotcom %} until you publish your codespace. For more information, see "[Creating a codespace from a template](/codespaces/developing-in-codespaces/creating-a-codespace-from-a-template#publishing-to-a-repository-on-github)."

{% data reusables.codespaces.publishing-template-codespaces %}

## Creating or switching branches

{% data reusables.codespaces.create-or-switch-branch %}

{% tip %}

**Tip**: If someone has recently changed a file on the remote repository, in the branch you switched to, you may not see those changes until you pull the changes into your codespace. 

{% endtip %}

## Committing your changes 

{% data reusables.codespaces.source-control-commit-changes %} 

## Pulling changes from the remote repository

You can pull changes from the remote repository into your codespace at any time. 

{% data reusables.codespaces.source-control-display-dark %}
1. At the top of the sidebar, click the ellipsis (**...**).
![Ellipsis button for View and More Actions](/assets/images/help/codespaces/source-control-ellipsis-button.png)
1. In the dropdown menu, click **Pull**.

If the dev container configuration has been changed since you created the codespace, you can apply the changes by rebuilding the container for the codespace. For more information, see "[Introduction to dev containers](/codespaces/setting-up-your-codespace/configuring-codespaces-for-your-project#applying-changes-to-your-configuration)."

## Setting your codespace to automatically fetch new changes 

You can set your codespace to automatically fetch details of any new commits that have been made to the remote repository. This allows you to see whether your local copy of the repository is out of date, in which case you may choose to pull in the new changes. 

If the fetch operation detects new changes on the remote repository, you'll see the number of new commits in the status bar. You can then pull the changes into your local copy.

1. Click the **Manage** button at the bottom of the Activity Bar.
![Manage button](/assets/images/help/codespaces/manage-button.png)
1. In the menu, click **Settings**.
1. On the Settings page, search for: `autofetch`.
![Search for autofetch](/assets/images/help/codespaces/autofetch-search.png)
1. To fetch details of updates for all remotes registered for the current repository, set **Git: Autofetch** to `all`.
![Enable Git autofetch](/assets/images/help/codespaces/autofetch-all.png)
1. If you want to change the number of seconds between each automatic fetch, edit the value of **Git: Autofetch Period**.

## Raising a pull request

{% data reusables.codespaces.source-control-pull-request %} 

## Pushing changes to your remote repository

You can push changes you've saved and committed. This applies those changes to the upstream branch on the remote repository. You might want to do this if you're not yet ready to create a pull request, or if you prefer to create a pull request on {% data variables.product.prodname_dotcom %}.

1. At the top of the sidebar, click the ellipsis (**...**).
![Ellipsis button for View and More Actions](/assets/images/help/codespaces/source-control-ellipsis-button-nochanges.png)
1. In the dropdown menu, click **Push**.
