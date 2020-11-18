---
title: Entrar em contato com o suporte do GitHub
intro: 'Contact {% data variables.contact.enterprise_support %} using the {% if enterpriseServerVersions contains currentVersion %}{% data variables.product.prodname_ghe_server %} {% data variables.enterprise.management_console %} or{% endif %} the support portal.'
redirect_from:
  - /enterprise/admin/guides/enterprise-support/reaching-github-enterprise-support/
  - /enterprise/admin/enterprise-support/reaching-github-support
versions:
  enterprise-server: '*'
---

### Usar sistemas automatizados de geração de tíquetes

Embora a nossa equipe de suporte faça o melhor para responder às solicitações automatizadas, resolver o problema costuma exigir mais informações do que o sistema automatizado de geração de tíquetes pode nos dar. Sempre que possível, inicie as solicitações de suporte com uma pessoa ou máquina com quem o {% data variables.contact.enterprise_support %} consiga interagir. Para obter mais informações, consulte "[Preparar para enviar um tíquete](/enterprise/admin/guides/enterprise-support/preparing-to-submit-a-ticket)".

### Entrar em contato com o {% data variables.contact.enterprise_support %}

{% data variables.contact.enterprise_support %} customers can open a support ticket using the {% if enterpriseServerVersions contains currentVersion %}{% data variables.product.prodname_ghe_server %} {% data variables.enterprise.management_console %} or the {% data variables.contact.contact_enterprise_portal %}{% elsif currentVersion == "github-ae@latest" %} the {% data variables.contact.contact_ae_portal %}{% endif %}. Marque a prioridade do tíquete como {% data variables.product.support_ticket_priority_urgent %}, {% data variables.product.support_ticket_priority_high %}, {% data variables.product.support_ticket_priority_normal %} ou {% data variables.product.support_ticket_priority_low %}. Para obter mais informações, consulte "[Atribuir uma prioridade a um tíquete de suporte](/enterprise/admin/guides/enterprise-support/about-github-enterprise-support#assigning-a-priority-to-a-support-ticket)" e "[Enviar um tíquete](/enterprise/admin/guides/enterprise-support/submitting-a-ticket)".

### Entrar em contato com o {% data variables.contact.enterprise_support %}

{% if enterpriseServerVersions contains currentVersion %}
#### Exibir tíquetes de suporte antigos

É possível usar o {% data variables.contact.enterprise_portal %} para exibir tíquetes de suporte antigos.

1. Navegue até o {% data variables.contact.contact_enterprise_portal %}.
2. Clique em **Meus tíquetes**. ![Ver tíquetes enviados anteriormente](/assets/images/enterprise/support/view-past-tickets.png)

### Entrar em contato com o {% data variables.contact.premium_support %}

Os clientes do {% data variables.contact.enterprise_support %} podem abrir um tíquete de suporte usando o {% data variables.product.prodname_ghe_server %} {% data variables.enterprise.management_console %} ou o {% data variables.contact.contact_enterprise_portal %}. Marque sua prioridade como {% data variables.product.support_ticket_priority_urgent %}, {% data variables.product.support_ticket_priority_high %}, {% data variables.product.support_ticket_priority_normal %} ou {% data variables.product.support_ticket_priority_low %}. Para obter mais informações, consulte "[Atribuir uma prioridade a um tíquete de suporte](/enterprise/admin/guides/enterprise-support/about-github-premium-support-for-github-enterprise-server#assigning-a-priority-to-a-support-ticket)" e "[Enviar um tíquete](/enterprise/admin/guides/enterprise-support/submitting-a-ticket)".

{% endif %}
### Entrar em contato com o departamento de vendas

Para preços , licenças, renovações, cotações, pagamentos e outras questões relacionadas, entre em contato com {% data variables.contact.contact_enterprise_sales %} ou ligue para [+1 (877) 448-4820](tel:+1-877-448-4820).

{% if enterpriseServerVersions contains currentVersion %}
### Entrar em contato com o departamento de treinamento

Para saber mais sobre as opções de treinamento, inclusive treinamentos personalizados, consulte o site de treinamento do [{% data variables.product.company_short %}](https://services.github.com/).

{% note %}

**Observação:** o {% data variables.product.premium_plus_support_plan %} inclui treinamento. Para obter mais informações, consulte a seção "[Sobre o {% data variables.contact.premium_support %} para {% data variables.product.prodname_ghe_server %}](/enterprise/admin/guides/enterprise-support/about-github-premium-support-for-github-enterprise-server)".

{% endnote %}
{% endif %}

### Leia mais

- [Sobre o {% data variables.contact.enterprise_support %}](/enterprise/admin/guides/enterprise-support/about-github-enterprise-support)
- [Sobre o {% data variables.contact.premium_support %} para {% data variables.product.prodname_ghe_server %}](/enterprise/admin/guides/enterprise-support/about-github-premium-support-for-github-enterprise-server).
