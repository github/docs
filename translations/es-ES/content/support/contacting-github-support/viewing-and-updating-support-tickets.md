---
title: Ver y actualizar los tickets de soporte
intro: 'Puedes ver los tickets de soporte{% ifversion ghes or ghec %}, colaborar con colegas en ellos,{% endif %} y responder a {% data variables.contact.github_support %} utilizando el {% data variables.contact.support_portal %}.'
shortTitle: Administrar tus tickets
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
topics:
  - Support
---

## Acerca de la administración de tickets

{% data reusables.support.zendesk-old-tickets %}

Puedes usar el [Portal de soporte de GitHub](https://support.github.com/) para ver los tickets de soporte actuales y anteriores y responder a {% data variables.contact.github_support %}.

{% ifversion ghes or ghec %}
{% data reusables.enterprise-accounts.support-entitlements %}
{% endif %}

## Ver tus tickets de soporte

{% data reusables.support.view-open-tickets %}
1. Debajo de la caja de texto, puedes leer el historial de los comentarios. La respuesta más reciente está hasta arriba. ![Captura de pantalla del historial de comentarios del ticket de soporte con la respuesta más reciente hasta arriba.](/assets/images/help/support/support-recent-response.png)

## Actualizar los tickets de soporte

{% data reusables.support.view-open-tickets %}
1. Opcionalmente, si el problema se resuelve, debajo de la caja de texto, haz clic en **Cerrar ticket**. ![Captura de pantalla que muestra la ubicación del botón "Cerrar ticket".](/assets/images/help/support/close-ticket.png)
1. Para responder al Soporte de GitHub y agregar un comentario nuevo al ticket, escribe tu respuesta en la caja de texto. ![Captura de pantalla del campo de texto "Agregar un comentario".](/assets/images/help/support/new-comment-field.png)
1. Para agregar tu comentario al ticket, haz clic en **Comentar**. ![Captura de pantalla del botón "Comentar".](/assets/images/help/support/add-comment.png)

{% ifversion ghec or ghes %}
## Colaborar en los tickets de soporte

Puedes colaborar con tus colegas en los tickets de soporte utilizando el portal de soporte. Los propietarios, gerentes de facturación y otros miembros empresariales con derechos de soporte pueden ver los tickets asociados con una cuenta empresarial o una organización que administre una cuenta empresarial. Para obtener más información, consulta la sección "[Administrar la titularidad de soporte para tu empresa](/enterprise-cloud@latest/admin/user-management/managing-users-in-your-enterprise/managing-support-entitlements-for-your-enterprise)".

Adicionalmente a poder ver los tickets, también puedes agregar comentarios para apoyarlos si tu dirección de correo electrónico se copia en el ticket o si la persona que lo abrió utilizó una dirección de correo electrónico con un dominio que esté verificado en la cuenta u organización empresarial que administra una cuenta empresarial. Para obtener más información sobre cómo verificar un dominio, consulta las secciones "[Verificar o aprobar un dominio para tu empresa](/enterprise-cloud@latest/admin/configuration/configuring-your-enterprise/verifying-or-approving-a-domain-for-your-enterprise)" y "[Verificar o aprobar un dominio para tu organización](/enterprise-cloud@latest/organizations/managing-organization-settings/verifying-or-approving-a-domain-for-your-organization)".

{% endif %}

## Leer más

- "[Acerca del Soporte de GitHub](/support/learning-about-github-support/about-github-support)"
