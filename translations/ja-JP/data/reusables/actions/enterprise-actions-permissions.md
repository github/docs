1. Under "Policies", select your options.

  You can choose which organizations in your enterprise can use {% data variables.product.prodname_actions %}, and you can restrict access to public actions.

  {% if currentVersion ver_gt "enterprise-server@2.21" %}
  {% note %}

  **Note:** To enable access to public actions, you must first configure {% data variables.product.product_location %} to connect to {% data variables.product.prodname_marketplace %}. For more information, see "[Enabling automatic access to GitHub.com actions using GitHub Connect](/admin/github-actions/enabling-automatic-access-to-githubcom-actions-using-github-connect)."

  {% endnote %}
  {% endif %}
  ![この Enterprise アカウントについてアクションを無効化、無効化、または制限](/assets/images/help/organizations/enterprise-actions-policy.png)
