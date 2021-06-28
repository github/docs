1. In the {% if currentVersion == "free-pro-team@latest" %}"Runners"{% else %}"Self-hosted runners"{% endif %} section of the settings page, click {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %} next to the runner group you'd like to configure, then click **Edit name and [organization|repository] access**. ![Gerenciar permissões do repositório](/assets/images/help/settings/actions-runner-manage-permissions.png)
1. Modifique as suas opções de políticas, ou altere o nome do grupo do executor.

   {% warning %}

   **Aviso**

   {% indented_data_reference reusables.github-actions.self-hosted-runner-security spaces=3 %}

   Para obter mais informações, consulte "[Sobre os executores auto-hospedados](/actions/hosting-your-own-runners/about-self-hosted-runners#self-hosted-runner-security-with-public-repositories)."

   {% endwarning %}
