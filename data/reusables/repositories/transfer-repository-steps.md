{% ifversion rename-and-transfer-repository %}
1. At the bottom of the page, in the "Danger Zone" section, click **Transfer**.

   ![Screenshot of the transfer button](/assets/images/help/repository/repo-transfer.png)

1. Read the information about transferring a repository, then, following "New owner", select one of the options.
   - To choose one of your organizations, select **Select one of my organizations**, then use the dropdown menu to specify an organization.
     - Optionally, to rename the repository, enter a new name in the **Repository name** field.

       {% note %}

       **Note:** You must be an admin on the target organization to rename the repository.

       {% endnote %}

       ![Screenshot of the information about repository transfer and options to select the new owner](/assets/images/help/repository/rename-repo-during-transfer.png)

   - To specify an organization or username, select **Specify an organization or username**, then enter the organization name or the new owner's username.

     ![Screenshot of the information about repository transfer and options to select the new owner](/assets/images/help/repository/transfer-repo-new-owner-name.png)

1. Read the warnings about potential loss of features depending on the new owner's {% data variables.product.prodname_dotcom %} subscription.

   ![Screenshot of the warnings about transferring a repository to a person using a free product](/assets/images/help/repository/repo-transfer-free-plan-warnings.png)

1. Following **Type REPOSITORY NAME to confirm.**, type the name of the repository you'd like to transfer, then click **I understand, transfer this repository**.

   ![Screenshot of the transfer screen](/assets/images/help/repository/repo-transfer-overview.png)

{% else %}
1. At the bottom of the page, under "Danger Zone", click **Transfer**.

   ![Screenshot of the transfer button in the danger zone section](/assets/images/help/repository/repo-transfer.png)

1. Read the warnings and enter the repository name to confirm that you've done so.
1. Type the name of the new owner and click **I understand, transfer this repo**.

   ![Screenshot of the transfer screen](/assets/images/help/repository/repo-transfer-complete.png)
{% endif %}
