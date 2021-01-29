---
title: Acerca del soporte de GitHub Enterprise
intro: '{% data variables.contact.github_support %} puede ayudarte a solucionar los problemas que se presenten en {% data variables.product.product_name %}.'
redirect_from:
  - /enterprise/admin/enterprise-support/about-github-enterprise-support
versions:
  enterprise-server: '*'
  github-ae: '*'
---

{% note %}

**Nota**: {% data reusables.support.data-protection-and-privacy %}

{% endnote %}

### Acerca de {% data variables.contact.enterprise_support %}

{% data variables.product.product_name %} incluye el {% data variables.contact.enterprise_support %} en inglés{% if enterpriseServerVersions contains currentVersion %} y japonés{% endif %}.

{% if enterpriseServerVersions contains currentVersion %}
Puedes contactar a
{% data variables.contact.enterprise_support %} a través de {% data variables.contact.contact_enterprise_portal %} para obtener ayuda sobre:
 - Instalar y usar {% data variables.product.product_name %}
 - Inspeccionar y verificar las causas de errores sospechados
{% endif %}

Adicionalmente a todos los beneficios de {% data variables.contact.enterprise_support %}, {% if enterpriseServerVersions contains currentVersion %}el {% data variables.contact.premium_support %}{% else %} el soporte para {% data variables.product.product_name %}{% endif %} ofrece:
  - Soporte técnico por escrito a través del portal de soporte de 24 horas por día, los 7 días de la semana
  - Soporte técnico telefónico las 24 horas del día, los 7 días de la semana
  - Un{% if currentVersion == "github-ae@latest" %}n enhanced{% endif %} Acuerdo de Nivel de Servicio (SLA) {% if enterpriseServerVersions contains currentVersion %}con tiempos de respuesta inicial garantizados{% endif %}
{% if currentVersion == "github-ae@latest" %}
  - Un Administrador Técnico de la Cuenta de Servicio
  - Revisiones trimestrales de soporte
  - Servicios administrativos administrados
{% else if enterpriseServerVersions contains currentVersion %}
  - Administradores técnicos de cuenta
  - Acceso a contenido prémium.
  - Revisiones de estado programadas.
  - Horas administrativas administradas
{% endif %}

{% data reusables.support.government-response-times-may-vary %}

{% if enterpriseServerVersions contains currentVersion %}
Para obtener más información, consulta "[Acerca de{% data variables.contact.premium_support %} para {% data variables.product.prodname_ghe_server %}](/enterprise/admin/guides/enterprise-support/about-github-premium-support-for-github-enterprise-server)".
{% endif %}

{% data reusables.support.scope-of-support %}

### Ponerte en contacto con {% data variables.contact.enterprise_support %}

Puedes contactar a {% data variables.contact.enterprise_support %} a través del {% if enterpriseServerVersions contains currentVersion %}{% data variables.contact.contact_enterprise_portal %}{% elsif currentVersion == "github-ae@latest" %} del {% data variables.contact.ae_azure_portal %}{% endif %} para reportar los problemas por escrito. Para obtener más información, consulta la sección "[Recibir ayuda de {% data variables.contact.github_support %}](/admin/enterprise-support/receiving-help-from-github-support)".

### Horas de operación

{% if enterpriseServerVersions contains currentVersion %}
#### Soporte en inglés
{% endif %}

{% if enterpriseServerVersions contains currentVersion %}
Para cuestiones estándar no urgentes, ofrecemos soporte en inglés las 24 horas del día, 5 días a la semana, excepto fines de semana y feriados nacionales en EE.UU. El tiempo de respuesta estándar es 24 horas.

Para los asuntos urgentes, estamos {% else %}Estamos{% endif %} disponibles las 24 horas del día, los 7 días de la semana, incluso durante los días festivos de EE.UU.

{% data reusables.support.government-response-times-may-vary %}

{% if enterpriseServerVersions contains currentVersion  %}
#### Soporte en japonés

Para cuestiones no urgentes, el soporte en japonés se encuentra disponible de lunes a viernes, de 9:00 a.m. a 5:00 p.m. (hora estándar en Japón), excepto los feriados nacionales en Japón. Para cuestiones urgentes, ofrecemos apoyo en inglés 24 horas al día, 7 días por semana, incluso durante las vacaciones nacionales de los Estados Unidos.

Para encontrar una lista completa de días festivos de EE.UU. y japoneses que se celebran en {% data variables.contact.enterprise_support %}, consulta la "[Programación de días festivos](#holiday-schedules)".{% endif %}

{% if enterpriseServerVersions contains currentVersion %}
### Cronograma de feriados

Para asuntos urgentes, podemos ofrecerte ayudaeninglés 24 horas al día, 7 días por semana, incluyendo los días feriados de EE.UU. {% if enterpriseServerVersions contains currentVersion  %}y Japón{% endif %}.

#### Feriados en los Estados Unidos

{% data variables.contact.enterprise_support %} observa estos días festivos en Estados Unidos. {% if enterpriseServerVersions contains currentVersion  %}, aunque nuestro equipo de soporte global se encuentra disponible para responder a los tickets urgentes{% endif %}.

| Feriados en EE.UU.                | Fecha en la que se celebra  |
| --------------------------------- | --------------------------- |
| Año Nuevo                         | 1 de enero                  |
| Día de Martin Luther King, Jr.    | Tercer lunes de enero       |
| Día de los Presidentes            | Tercer lunes de febrero     |
| Día de los Caídos                 | Último lunes de mayo        |
| Día de la Independencia           | 4 de julio                  |
| Día del Trabajo                   | Primer lunes de septiembre  |
| Día de los Veteranos              | 12 de noviembre             |
| Día de Acción de Gracias          | Cuarto jueves de noviembre  |
| Día posterior a Acción de Gracias | Cuarto viernes de noviembre |
| Nochebuena                        | 24 de diciembre             |
| Día de Navidad                    | 25 de diciembre             |
| Día posterior a Navidad           | 28 de diciembre             |
| Víspera de Año Nuevo              | 31 de diciembre             |

#### Feriados en Japón

{% data variables.contact.enterprise_support %} no proporciona soporte en idioma japonés desde el 28 de diciembre hasta el 3 de enero, así como en los días feriados listados en [国民の祝日について - 内閣府](https://www8.cao.go.jp/chosei/shukujitsu/gaiyou.html).

{% data reusables.enterprise_enterprise_support.installing-releases %}
{% endif %}

### Asignar una prioridad a un ticket de soporte

Cuando contactas a {% data variables.contact.enterprise_support %}, puedes escoger una de cuatro prioridades para el ticket: {% data variables.product.support_ticket_priority_urgent %}, {% data variables.product.support_ticket_priority_high %}, {% data variables.product.support_ticket_priority_normal %}, o{% data variables.product.support_ticket_priority_low %}.

{% data reusables.support.github-can-modify-ticket-priority %}

{% if enterpriseServerVersions contains currentVersion  %}
{% data reusables.support.ghes-priorities %}
{% elsif currentVersion == "github-ae@latest" %}
{% data reusables.support.ghae-priorities %}
{% endif %}

### Resolver y cerrar tickets de soporte

{% data reusables.support.enterprise-resolving-and-closing-tickets %}

### Leer más

{% if enterpriseServerVersions contains currentVersion %}
- [Preguntas frecuentes sobre {% data variables.product.prodname_ghe_server %}](https://enterprise.github.com/faq)
- Sección 10 sobre soporte en el "[Acuerdo de licencia de {% data variables.product.prodname_ghe_server %}](https://enterprise.github.com/license)"{% endif %}
- "[recibir ayuda de {% data variables.contact.github_support %}](/admin/enterprise-support/receiving-help-from-github-support)"{% if enterpriseServerVersions contains currentVersion %}
- "[Prepararse para emitir un ticket](/enterprise/admin/guides/enterprise-support/preparing-to-submit-a-ticket)"{% endif %}
- [Enviar un ticket](/enterprise/admin/guides/enterprise-support/submitting-a-ticket)"
