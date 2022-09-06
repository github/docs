{% comment %}

Sempre inclua uma advertência de segurança acima deste procedimento. Pode ser uma das definidas a seguir, dependendo se o contexto são executores auto-hospedados ou executores maiores.

{% data reusables.actions.self-hosted-runner-security-admonition %}
{% data reusables.actions.hosted-runner-security-admonition %}

{% endcomment %}

As empresas podem adicionar seus executores a grupos para gerenciamento de acesso. As empresas podem criar grupos de executores que podem ser acessados por organizações específicas na conta corporativa{% ifversion restrict-groups-to-workflows %} ou por fluxos de trabalho específicos{% endif %}. Os proprietários da organização podem atribuir políticas adicionais de acesso do repositório granular{% ifversion restrict-groups-to-workflows %} ou políticas de acesso do fluxo de trabalho {% endif %} para os grupos de executores corporativos. Para obter informações sobre como criar um grupo de executores com a API REST, consulte os pontos de extremidade corporativos na [API REST de {% data variables.product.prodname_actions %}](/rest/reference/actions#self-hosted-runner-groups).

Os executores são automaticamente atribuídos ao grupo padrão quando criados e só podem ser integrantes de um grupo por vez. Você pode atribuir o executor a um grupo específico durante o processo de registro, ou você pode mover o executor do grupo-padrão para um grupo personalizado.

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

