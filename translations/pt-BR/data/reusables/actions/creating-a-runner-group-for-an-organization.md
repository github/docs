{% comment %}

Always include a security admonition above this procedure. This is either one of the following, depending on whether the context is self-hosted runners or larger runners.

{% data reusables.actions.self-hosted-runner-security-admonition %}
{% data reusables.actions.hosted-runner-security-admonition %}

{% endcomment %}

All organizations have a single default runner group. Organizations within an enterprise account can create additional groups. Os administradores da organização podem permitir o acesso de repositórios individuais a um grupo de executor. For information about how to create a runner group with the REST API, see "[Self-hosted runner groups](/rest/reference/actions#self-hosted-runner-groups)."

Runners are automatically assigned to the default group when created, and can only be members of one group at a time. Você pode mover um executor do grupo- padrão para qualquer grupo que você criar.

Ao criar um grupo, você deve escolher uma política que defina quais repositórios{% ifversion restrict-groups-to-workflows %} e fluxos de trabalho{% endif %} têm acesso ao grupo do executor.

{% ifversion ghec or ghes > 3.3 or ghae-issue-5091 %}
{% data reusables.organizations.navigate-to-org %}
{% data reusables.organizations.org_settings %}
{% data reusables.organizations.settings-sidebar-actions-runner-groups %}
1. Na seção "Grupos de executores", clique em **Novo grupo de executor**.
1. Digite um nome para o grupo do seu executor.
 {% data reusables.actions.runner-group-assign-policy-repo %}
Os grupos de executores de {% data reusables.actions.runner-group-assign-policy-workflow %}{%- ifversion restrict-groups-to-workflows %} não podem acessar os fluxos de trabalho de uma organização diferente na empresa. Em vez disso, você deve criar um grupo de executores de propriedade corporativa.{% endif %}
{% data reusables.actions.create-runner-group %}
{% elsif ghae or ghes < 3.4 %}
{% data reusables.organizations.navigate-to-org %}
{% data reusables.organizations.org_settings %}
{% data reusables.organizations.settings-sidebar-actions-runner-groups %}
1. Em {% ifversion ghes or ghae %}"Executores"{% endif %}, clique em **Adicionar novo** e, em seguida, em **Novo grupo**.

    ![Adicionar grupo de executor](/assets/images/help/settings/actions-org-add-runner-group.png)
1. Insira um nome para o seu grupo de executor e atribua uma política para acesso ao repositório.

   É possível configurar o grupo de um executor para ser acessível a uma lista específica de repositórios ou a todos os repositórios na organização.{% ifversion ghec or ghes %} Por padrão, apenas repositórios privados podem acessar executores no grupo do executor, mas você pode substituir isso. Esta configuração não pode ser substituída se configurar o grupo de executores da organização que foi compartilhado por uma empresa.{% endif %}

   ![Adicionar opções de grupo de executores](/assets/images/help/settings/actions-org-add-runner-group-options.png)
1. Clique em **Salvar grupo** para criar o grupo e aplicar a política.
{% endif %}