{% ifversion fpt %}
{% note %}

**Note:** All organizations have a single default runner group. Only enterprise accounts and organizations owned by enterprise accounts can create and manage additional runner groups.

{% endnote %}

Runner groups are used to control access to runners. Los administradores de las organizaciones pueden configurar políticas de acceso que controlen qué repositorios en una organización tienen acceso al grupo de ejecutores.

If you use {% data variables.product.prodname_ghe_cloud %}, you can create additional runner groups; enterprise admins can configure access policies that control which organizations in an enterprise have access to the runner group; and organization admins can assign additional granular repository access policies to the enterprise runner group.
{% endif -%}
{% ifversion ghec or ghes or ghae %}

{% data reusables.actions.runner-group-enterprise-overview %}

Cuando se crean nuevos ejecutores, se asignan automáticamente al grupo predeterminado. Los ejecutores solo pueden estar en un grupo a la vez. Puedes mover los ejecutores del grupo predeterminado a otro grupo. For more information, see "[Moving a runner to a group](#moving-a-runner-to-a-group)."

{% endif %}