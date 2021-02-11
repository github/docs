---
title: Obtener soporte de GitHub
intro: 'Contacta a {% data variables.contact.enterprise_support %} utilizando la {% if enterpriseServerVersions contains currentVersion %}{% data variables.product.prodname_ghe_server %}{% data variables.enterprise.management_console %} o {% endif %} el portal de soporte.'
redirect_from:
  - /enterprise/admin/guides/enterprise-support/reaching-github-enterprise-support/
  - /enterprise/admin/enterprise-support/reaching-github-support
versions:
  enterprise-server: '*'
---

### Usar sistemas de tickets automatizado

Si bien haremos todo lo mejor por responder a solicitudes de soporte automatizado, habitualmente necesitamos más información que un sistema de tickets automatizado que nos permita resolver tu problema. Siempre que sea posible, inicia las solicitudes de soporte de una persona o una máquina con la que {% data variables.contact.enterprise_support %} pueda interactuar. Para obtener más información, consulta "[Prepararse para enviar un ticket](/enterprise/admin/guides/enterprise-support/preparing-to-submit-a-ticket)".

### Ponerte en contacto con {% data variables.contact.enterprise_support %}

Los clientes de {% data variables.contact.enterprise_support %} pueden abrir un ticket de soporte utilizando la {% if enterpriseServerVersions contains currentVersion %}{% data variables.product.prodname_ghe_server %}{% data variables.enterprise.management_console %} o el {% data variables.contact.contact_enterprise_portal %}{% elsif currentVersion == "github-ae@latest" %} el {% data variables.contact.contact_ae_portal %}{% endif %}. Marca la prioridad del ticket como {% data variables.product.support_ticket_priority_urgent %}, {% data variables.product.support_ticket_priority_high %}, {% data variables.product.support_ticket_priority_normal %}, o {% data variables.product.support_ticket_priority_low %}. Para obtener más información, consulta la sección "[Asignar una prioridad al ticket de soporte](/enterprise/admin/guides/enterprise-support/about-github-enterprise-support#assigning-a-priority-to-a-support-ticket)" y "[Emitir un ticket](/enterprise/admin/guides/enterprise-support/submitting-a-ticket)".

### Ponerte en contacto con {% data variables.contact.enterprise_support %}

{% if enterpriseServerVersions contains currentVersion %}
#### Ver tickets de soporte anteriores

Puedes usar el {% data variables.contact.enterprise_portal %} para ver tickets de soporte anteriores.

1. Navegar por el {% data variables.contact.contact_enterprise_portal %}.
2. Da clic en **Mist tickets**. ![Ver los tickets emitidos anteriormente](/assets/images/enterprise/support/view-past-tickets.png)

### Comunicarse con {% data variables.contact.premium_support %}

Los clientes de {% data variables.contact.enterprise_support %} pueden abrir un ticket de soporte mediante {% data variables.product.prodname_ghe_server %} {% data variables.enterprise.management_console %} o {% data variables.contact.contact_enterprise_portal %}. Marca su prioridad como {% data variables.product.support_ticket_priority_urgent %}, {% data variables.product.support_ticket_priority_high %}, {% data variables.product.support_ticket_priority_normal %}, o {% data variables.product.support_ticket_priority_low %}. Para obtener más información, consulta la sección "[Asignar una prioridad al ticket de soporte](/enterprise/admin/guides/enterprise-support/about-github-premium-support-for-github-enterprise-server#assigning-a-priority-to-a-support-ticket)" y "[Emitir un ticket](/enterprise/admin/guides/enterprise-support/submitting-a-ticket)".

{% endif %}
### Contacto de ventas

Para las preguntas relacionadas con precios, licenciamiento, renovaciones, cotizaciones, pagos y otras relacionadas, contacta a {% data variables.contact.contact_enterprise_sales %} o llama al [+1 (877) 448-4820](tel:+1-877-448-4820).

{% if enterpriseServerVersions contains currentVersion %}
### Contacto de capacitación

Para conocer más sobre las opciones de capacitación, incluida la capacitación personalizada, consulta el sitio de capacitación de [{% data variables.product.company_short %}](https://services.github.com/).

{% note %}

**Nota:** La capacitación está incluida en el {% data variables.product.premium_plus_support_plan %}. Para obtener más información, consulta "[Acerca de{% data variables.contact.premium_support %} para {% data variables.product.prodname_ghe_server %}](/enterprise/admin/guides/enterprise-support/about-github-premium-support-for-github-enterprise-server)".

{% endnote %}
{% endif %}

### Leer más

- "[Acerca de {% data variables.contact.enterprise_support %}](/enterprise/admin/guides/enterprise-support/about-github-enterprise-support)"
- "[Acerca de {% data variables.contact.premium_support %} para {% data variables.product.prodname_ghe_server %}](/enterprise/admin/guides/enterprise-support/about-github-premium-support-for-github-enterprise-server)".
