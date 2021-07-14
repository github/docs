1. In the {% ifversion fpt %}"Runners"{% else %}"Self-hosted runners"{% endif %} section of the settings page, click {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %} next to the runner group you'd like to configure, then click **Edit name and [organization|repository] access**.
    ![Manage repository permissions](/assets/images/help/settings/actions-runner-manage-permissions.png)
1. Modify your policy options, or change the runner group name.

   {% warning %}

   **Warning**

   {% indented_data_reference reusables.github-actions.self-hosted-runner-security spaces=3 %}

   For more information, see "[About self-hosted runners](/actions/hosting-your-own-runners/about-self-hosted-runners#self-hosted-runner-security-with-public-repositories)."

   {% endwarning %}
