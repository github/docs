1. Na seção {% ifversion fpt or ghes > 3.1 or ghae-next %}"Executores"{% else %}"Executores auto-hospedados"{% endif %} da página de configurações, clique em {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %} ao lado do grupo executor que você gostaria de configurar e, em seguida, clique em **Editar nome e acesso [organization|repository]**. ![Gerenciar permissões do repositório](/assets/images/help/settings/actions-runner-manage-permissions.png)
1. Modifique as suas opções de políticas, ou altere o nome do grupo do executor.

   {% ifversion not ghae %}
   {% warning %}

   **Aviso**

   {% indented_data_reference reusables.github-actions.self-hosted-runner-security spaces=3 %}

   Para obter mais informações, consulte "[Sobre os executores auto-hospedados](/actions/hosting-your-own-runners/about-self-hosted-runners#self-hosted-runner-security-with-public-repositories)."

   {% endwarning %}
   {% endif %}
