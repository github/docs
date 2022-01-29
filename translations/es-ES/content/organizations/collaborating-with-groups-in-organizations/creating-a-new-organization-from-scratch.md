---
title: Crear una organización nueva desde cero
intro: Crea una organización para aplicar permisos de acceso refinados a los repositorios.
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
redirect_from:
  - /articles/creating-a-new-organization-from-scratch
  - /admin/user-management/creating-organizations
  - /github/setting-up-and-managing-organizations-and-teams/creating-a-new-organization-from-scratch
topics:
  - Organizations
  - Teams
shortTitle: Crear una organización nueva
---

Cuando creas una organización nueva desde cero, esta no tiene ningún repositorio asociado. Para obtener más información acerca de cómo agregar repositorios a tu organización, consulta "[Crear un repositorio nuevo](/articles/creating-a-new-repository)" y "[Transferir un repositorio](/articles/transferring-a-repository)".

{% data reusables.user_settings.access_settings %}
{% data reusables.user_settings.organizations %}
{% data reusables.organizations.new-organization %}
4. Sigue las propuestas para crear tu organización. {% ifversion fpt or ghec %}Para obtener más información sobre los planes disponibles para tu equipo, consulta los productos de "[{% data variables.product.prodname_dotcom %}](/articles/githubs-products)."{% endif %}

## Leer más

{% ifversion fpt or ghec %}
- "[Establecer tu correo electrónico de facturación](/articles/setting-your-billing-email)"{% endif %}
- "[Acerca de las organizaciones](/articles/about-organizations)"
