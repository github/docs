---
title: Visualizando e atualizando tíquetes de suporte
intro: 'Você pode visualizar os seus tíquetes de suporte{% ifversion ghes or ghec %}, colaborar com colegas em tíquetes,{% endif %} e responder a {% data variables.contact.github_support %} usando o {% data variables.contact.support_portal %}.'
shortTitle: Gerenciando seus tíquetes
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
topics:
  - Support
---

## Sobre gestão de tíquetes

{% data reusables.support.zendesk-old-tickets %}

Você pode usar o [Portal de Suporte do GitHub](https://support.github.com/) para visualizar os tíquetes atuais e anteriores e responder a {% data variables.contact.github_support %}.

{% ifversion ghes or ghec %}
{% data reusables.enterprise-accounts.support-entitlements %}
{% endif %}

## Visualizando seus tíquetes de suporte

{% data reusables.support.view-open-tickets %}
1. Under the text box, you can read the comment history. The most recent response is at the top. ![Screenshot of support ticket comment history, with the most recent response at the top.](/assets/images/help/support/support-recent-response.png)

## Updating support tickets

{% data reusables.support.view-open-tickets %}
1. Optionally, if the issue is resolved, under the text box, click **Close ticket**. ![Screenshot showing location of the "Close ticket" button.](/assets/images/help/support/close-ticket.png)
1. To respond to GitHub Support and add a new comment to the ticket, type your response in the text box. ![Screenshot of the "Add a comment" text field.](/assets/images/help/support/new-comment-field.png)
1. To add your comment to the ticket, click **Comment**. ![Screenshot of the "Comment" button.](/assets/images/help/support/add-comment.png)

{% ifversion ghec or ghes %}
## Collaborating on support tickets

You can collaborate with your colleagues on support tickets using the support portal. Owners, billing managers, and other enterprise members with support entitlements can view tickets associated with an enterprise account or an organization managed by an enterprise account. Para obter mais informações, consulte "[Gerenciar direitos de suporte para a sua empresa](/enterprise-cloud@latest/admin/user-management/managing-users-in-your-enterprise/managing-support-entitlements-for-your-enterprise)".

In addition to viewing tickets, you can also add comments to support tickets if your email address is copied on the ticket or if the person who opened the ticket used an email address with a domain that is verified for the enterprise account or organization managed by an enterprise account. For more information about verifying a domain, see "[Verifying or approving a domain for your enterprise](/enterprise-cloud@latest/admin/configuration/configuring-your-enterprise/verifying-or-approving-a-domain-for-your-enterprise)" and "[Verifying or approving a domain for your organization](/enterprise-cloud@latest/organizations/managing-organization-settings/verifying-or-approving-a-domain-for-your-organization)."

{% endif %}

## Leia mais

- "[Sobre o suporte do GitHub](/support/learning-about-github-support/about-github-support)"
