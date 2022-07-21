---
title: Eliminar a un miembro de tu empresa
intro: Puedes eliminar a un miembro de todas las organizaciones que le pertenecen a tu empresa.
permissions: Enterprise owners can remove an enterprise member from the enterprise.
versions:
  feature: remove-enterprise-members
type: how_to
topics:
  - Enterprise
shortTitle: Eliminar miembro
---

## Acerca de la eliminación de miembros de las empresas

Cuando eliminas a un miembro de tu empresa, este se eliminará de todas las organizaciones que le pertenezcan a ella.

Si el miembro empresarial que estás eliminando es el último propietario de una organización que le pertenece a esta, te convertirás en el dueño de dicha organización.

Si tu empresa o cualquiera de las organizaciones que le pertenecen a esta utilizan un proveedor de identidad (IdP) para administrar la membrecía de la organización, el miembro podría volverse a agregar a dicha organización mediante el IdP. Asegúrate de también hacer cualquier cambio necesario a tu IdP.

## Eliminar a un miembro de tu empresa

{% note %}

**Nota:** Si un miembro de la empresa solo utiliza {% data variables.product.prodname_ghe_server %} y no {% data variables.product.prodname_ghe_cloud %}, no podrás eliminarlo de la empresa de esta forma.

{% endnote %}

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.people-tab %}
1. A la derecha de la persona que quieras eliminar, selecciona el menú desplegable de {% octicon "gear" aria-label="The gear icon" %} y haz clic en **Eliminar de la empresa**.

   ![Captura de pantalla de la opción "Eliminar de la empresa" para un miembro empresarial](/assets/images/help/business-accounts/remove-member.png)
