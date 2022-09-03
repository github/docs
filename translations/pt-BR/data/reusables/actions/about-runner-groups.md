{% ifversion fpt %}
{% note %}

**Note:** All organizations have a single default runner group. Only enterprise accounts and organizations owned by enterprise accounts can create and manage additional runner groups.

{% endnote %}

Runner groups are used to control access to runners. Os administradores da organização podem configurar políticas de acesso que controlam quais repositórios em uma organização têm acesso ao grupo de runner.

If you use {% data variables.product.prodname_ghe_cloud %}, you can create additional runner groups; enterprise admins can configure access policies that control which organizations in an enterprise have access to the runner group; and organization admins can assign additional granular repository access policies to the enterprise runner group.
{% endif -%}
{% ifversion ghec or ghes or ghae %}

{% data reusables.actions.runner-group-enterprise-overview %}

Quando novos executores são criados, eles são atribuídos automaticamente ao grupo-padrão. Os executores só podem estar em um grupo por vez. Você pode mover os executores do grupo-padrão para outro grupo. For more information, see "[Moving a runner to a group](#moving-a-runner-to-a-group)."

{% endif %}