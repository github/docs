{%- ifversion rename-and-transfer-repository %}
1. At the bottom of the page, in the "Danger Zone" section, click **Transfer**.
1. Read the information about transferring a repository, then, under "New owner", choose how to specify the new owner.
   * To choose one of your organizations, select **Select one of my organizations**.

     * Select the dropdown menu and click an organization.
     * Optionally, in the "Repository name" field, type a new name for the repository.

       {% note %}

       **Note:** You must be an owner of the target organization to rename the repository.

       {% endnote %}
   * To specify an organization or username, select **Specify an organization or username**, then type the organization name or the new owner's username.
1. Read the warnings about potential loss of features depending on the new owner's {% data variables.product.prodname_dotcom %} subscription.
1. Following **Type REPOSITORY NAME to confirm**, type the name of the repository you'd like to transfer, then click **I understand, transfer this repository**.
{%- else %}
1. At the bottom of the page, under "Danger Zone", click **Transfer**.
1. Read the warnings and enter the repository name to confirm that you've done so.
1. In the text box, type the name of the new owner and click **I understand, transfer this repo**.
{%- endif %}
