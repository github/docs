{% ifversion fpt %}
{% note %}

**Observação:** Todas as organizações têm um único grupo de executores padrão. Somente contas corporativas e organizações pertencentes a contas corporativas podem criar e gerenciar grupos de executores adicionais.

{% endnote %}

Os grupos de executores são usados para controlar o acesso a executores. Os administradores da organização podem configurar políticas de acesso que controlam quais repositórios em uma organização têm acesso ao grupo de runner.

Se você usar {% data variables.product.prodname_ghe_cloud %}, você poderá criar grupos de executores adicionais. Os administradores das empresas podem configurar políticas de acesso que controlam quais organizações em uma empresa têm acesso ao grupo de executores; e os administradores da organização podem atribuir políticas adicionais de acesso ao repositório granular para o grupo de executores corporativos.
{% endif -%}
{% ifversion ghec or ghes or ghae %}

{% data reusables.actions.runner-group-enterprise-overview %}

Quando novos executores são criados, eles são atribuídos automaticamente ao grupo-padrão. Os executores só podem estar em um grupo por vez. Você pode mover os executores do grupo-padrão para outro grupo. Para obter mais informações, consulte "[Transferindo um executor para um grupo](#moving-a-runner-to-a-group)".

{% endif %}