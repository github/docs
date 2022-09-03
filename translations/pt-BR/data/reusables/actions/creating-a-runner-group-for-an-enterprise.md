{% comment %}

Always include a security admonition above this procedure. This is either one of the following, depending on whether the context is self-hosted runners or larger runners.

{% data reusables.actions.self-hosted-runner-security-admonition %}
{% data reusables.actions.hosted-runner-security-admonition %}

{% endcomment %}

Enterprises can add their runners to groups for access management. Enterprises can create groups of runners that are accessible to specific organizations in the enterprise account{% ifversion restrict-groups-to-workflows %} or to specific workflows{% endif %}. Os proprietários da organização podem atribuir políticas adicionais de acesso do repositório granular{% ifversion restrict-groups-to-workflows %} ou políticas de acesso do fluxo de trabalho {% endif %} para os grupos de executores corporativos. For information about how to create a runner group with the REST API, see the enterprise endpoints in the [{% data variables.product.prodname_actions %} REST API](/rest/reference/actions#self-hosted-runner-groups).

Runners are automatically assigned to the default group when created, and can only be members of one group at a time. Você pode atribuir o executor a um grupo específico durante o processo de registro, ou você pode mover o executor do grupo-padrão para um grupo personalizado.

Ao criar um grupo, você deve escolher uma política que defina quais organizações têm acesso ao grupo de executores.

{% data reusables.actions.runner-groups-add-to-enterprise-first-steps %}
1. Para escolher uma política para o acesso da organização, selecione a lista suspensa **Organização** e clique em uma política. Você pode configurar um grupo de executor para que possa ser acessado por uma lista específica de organizações ou a todas as organizações da empresa.{% ifversion ghes %} Por padrão, apenas repositórios privados podem acessar executores no grupo de um executor, mas você pode substituir isso.{% endif %}

   {%- ifversion ghec or ghes %}

   ![Adicionar opções de grupo de executores](/assets/images/help/settings/actions-enterprise-account-add-runner-group-options.png)
   {%- elsif ghae %}

   ![Adicionar opções de grupo de executores](/assets/images/help/settings/actions-enterprise-account-add-runner-group-options-ae.png)
   {%- endif %}
{% data reusables.actions.runner-group-assign-policy-workflow %}
1. Clique em **Salvar grupo** para criar o grupo e aplicar a política.

