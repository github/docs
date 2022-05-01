---
title: Configurar los pies de página personalizados
intro: 'Puedes otorgar un acceso fácil a los usuarios para los enlaces específicos de la empresa si agregas pies de página personalizados a {% data variables.product.product_name %}.'
versions:
  ghec: '*'
  ghes: '>=3.4'
  ghae: issue-5487
type: how_to
topics:
  - Enterprise
  - Fundamentals
shortTitle: Configurar los pies de página personalizados
---

Los propietarios de empresas pueden configurar a {% data variables.product.product_name %} para que muestre pies de página personalizados con hasta cinco enlaces adicionales.

![Pie de página personalizado](/assets/images/enterprise/custom-footer/octodemo-footer.png)

El pie de página personalizado se muestra sobre el pie de página de {% data variables.product.prodname_dotcom %} {% ifversion ghes or ghae %}para todos los usuarios, en todas las páginas de {% data variables.product.product_name %}{% elsif ghec %}para todos los miembros y colaboradores de la empresa, en todas las páginas de organización y repositorios y en aquellas organizaciones que pertenezcan a la empresa{% endif %}.

## Configurar los pies de página personalizados para tu empresa

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}

1. Debajo de "Ajustes", haz clic en **Perfil**.
{%- ifversion ghec %}
![Ajustes de perfil empresarial](/assets/images/enterprise/custom-footer/enterprise-profile-ghec.png)
{%- else %}
![Ajustes de perfil empresarial](/assets/images/enterprise/custom-footer/enterprise-profile-ghes.png)
{%- endif %}

1. En la parte superior de la sección de Perfil, haz clic en **Pie de página personalizado**. ![Sección de pie de página personalizado](/assets/images/enterprise/custom-footer/custom-footer-section.png)

1. Agrega hasta cinco enlaces en los campos que se muestran. ![Agregar enlaces de pie de página](/assets/images/enterprise/custom-footer/add-footer-links.png)

1. Haz clic en **Actualizar pie de página personalizado** para guardar el contenido y mostrar el pie de página personalizado. ![Actualiza el pie de página personalizado](/assets/images/enterprise/custom-footer/update-custom-footer.png)
