---
title: Viewing and updating support tickets
intro: 'You can view your support tickets{% ifversion ghes or ghec %}, collaborate with colleagues on tickets,{% endif %} and respond to {% data variables.contact.github_support %} using the {% data variables.contact.support_portal %}.'
shortTitle: Managing your tickets
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
topics:
  - Support
---

## About ticket management

{% data reusables.support.zendesk-old-tickets %}

You can use the [GitHub Support Portal](https://support.github.com/) to view current and past support tickets and respond to {% data variables.contact.github_support %}.

{% ifversion ghes or ghec %}
{% data reusables.enterprise-accounts.support-entitlements %}
{% endif %}

## Viewing your support tickets

{% data reusables.support.view-open-tickets %}
1. Under the text box, you can read the comment history. The most recent response is at the top. ![Screenshot of support ticket comment history, with the most recent response at the top.](/assets/images/help/support/support-recent-response.png)

## Updating support tickets

{% data reusables.support.view-open-tickets %}
1. Optionally, if the issue is resolved, under the text box, click **Close ticket**. ![Screenshot showing location of the "Close ticket" button.](/assets/images/help/support/close-ticket.png)
1. To respond to GitHub Support and add a new comment to the ticket, type your response in the text box. ![Screenshot of the "Add a comment" text field.](/assets/images/help/support/new-comment-field.png)
1. To add your comment to the ticket, click **Comment**. ![Screenshot of the "Comment" button.](/assets/images/help/support/add-comment.png)

{% ifversion ghec or ghes %}
## Collaborating on support tickets

You can collaborate with your colleagues on support tickets using the support portal. Owners, billing managers, and other enterprise members with support entitlements can view tickets associated with an enterprise account or an organization managed by an enterprise account. Para obtener más información, consulta la sección "[Administrar la titularidad de soporte para tu empresa](/enterprise-cloud@latest/admin/user-management/managing-users-in-your-enterprise/managing-support-entitlements-for-your-enterprise)".

Adicionalmente a poder ver los tickets, también puedes agregar comentarios para apoyarlos si tu dirección de correo electrónico se copia en el ticket o si la persona que lo abrió utilizó una dirección de correo electrónico con un dominio que esté verificado en la cuenta u organización empresarial que administra una cuenta empresarial. Para obtener más información sobre cómo verificar un dominio, consulta las secciones "[Verificar o aprobar un dominio para tu empresa](/enterprise-cloud@latest/admin/configuration/configuring-your-enterprise/verifying-or-approving-a-domain-for-your-enterprise)" y "[Verificar o aprobar un dominio para tu organización](/enterprise-cloud@latest/organizations/managing-organization-settings/verifying-or-approving-a-domain-for-your-organization)".

{% endif %}

## Leer más

- "[Acerca del Soporte de GitHub](/support/learning-about-github-support/about-github-support)"
