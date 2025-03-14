{% ifversion enterprise-apps-public-beta %}
1. Navigate to the {% data variables.product.prodname_github_app %} settings.
   * For an app owned by a personal account or organization:
     1. In the left sidebar, click **{% octicon "code" aria-hidden="true" %} Developer settings**, then click **{% data variables.product.prodname_github_apps %}**.
   * For an app owned by an enterprise:
     1. In the left sidebar, {% ifversion ghec %}under "Settings",{% elsif ghes %} click **Settings**, then{% endif %} click **{% data variables.product.prodname_github_apps %}**.{% else %}
{% data reusables.user-settings.developer_settings %}
{% data reusables.user-settings.github_apps %}{% endif %}
