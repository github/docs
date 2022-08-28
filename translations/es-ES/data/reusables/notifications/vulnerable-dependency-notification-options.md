{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.1" %}
{% if currentVersion == "free-pro-team@latest"%}Predeterminadamente, recibirás notificaciones::{% endif %}{% if enterpriseServerVersions contains currentVersion and currentVersion gt "enterprise-server@3.1" %}Predeterminadamente, si tu administrador de sitio configuró el correo electrónico para las notificaciones de tu instancia, recibirás {% data variables.product.prodname_dependabot_alerts %}:{% endif %}

- por correo electrónico, se enviará un mensaje de correo electrónico cuando se habilite el {% data variables.product.prodname_dependabot %} para un repositorio cuando se confirme un archivo de manifiesto nuevo en dicho repositorio y cuando se encuentre una vulnerabilidad nueva de severidad crítica o alta (opción **Enviar un correo electrónico cada vez que se encuentra una vulnerabilidad**).
- en la interface de usuario, se muestra una advertencia en tu archivo de repositorio y vistas de código si hay dependencias vulnerables (opción de **Alertas de la IU**).
- en la línea de comandos, las advertencias se muestran como rellamados cuando subes información a los repositorios con dependencias vulnerables (opción de **Línea de comandos**).
- en tu bandeja de entrada, como notificaciones web. Se enviará una notificación web cuando se habilite el {% data variables.product.prodname_dependabot %} en un repositorio cada que se confirme un archivo de manifiesto nuevo en dicho repositorio y cuando se enecuentre una vulnerabilidad nueva con severidad crítica o alta (opción **Web**).
- en {% data variables.product.prodname_mobile %}, como notificaciones web. Para obtener más información, consulta la sección "[Habilitar notificaciones de subida con GitHub para móviles](/github/managing-subscriptions-and-notifications-on-github/configuring-notifications#enabling-push-notifications-with-github-for-mobile)".

{% note %}

**Nota:** Las notificaciones de correo electrónico y web/de {% data variables.product.prodname_mobile %} son:

- _por repositorio_ cuando el {% data variables.product.prodname_dependabot %} se habilita en el repositorio o cuando se confirma un archivo de manifiesto nuevo en dicho repositorio.

- _por organización_ cuando se descubre una vulnerabilidad nueva.

{% endnote %}
Puede spersonalizar la forma en que se te notifica sobre

{% data variables.product.prodname_dependabot_alerts %}. Por ejemplo, puedes recibir un correo electrónico semanal con el resúmen de las alertas de hasta 10 de tus repositorios si utilizas las opciones "**Enviar un resumen de vulnerabilidades por correo electrónico** y **Resumen semanal de seguridad por correo electrónico**.
{% endif %}

{% if currentVersion == "enterprise-server@2.22" or currentVersion == "enterprise-server@3.0" or currentVersion == "enterprise-server@3.1" %}
Predeterminadamente, si tu administrador de sitio configuró el correo electrónico para recibir notificaciones en tu instancia, recibirás
las {% data variables.product.prodname_dependabot_alerts %} nuevas:
- por correo electrónico, se envia un correo electrónico cada vez que se enecuentre una vulnerabilidad {% if currentVersion ver_gt "enterprise-server@2.23" %}con severidad alta o crítica{% endif %} (opción **Enviar un correo electrónico cada que se encuentre una vulnerabilidad**)
- en la interface de usuario, se muestra una advertencia en tu archivo de repositorio y vistas de código si hay dependencias vulnerables (opción de **Alertas de la IU**)
- en la línea de comandos, las advertencias se muestran como rellamados cuando subes información a los repositorios con dependencias vulnerables (opción de **Línea de comandos**)
- en tu bandeja de entrada, como notificaciones web {% if currentVersion ver_gt "enterprise-server@2.23" %}para vulnerabilidades nuevas con severidad alta o crítica {% endif %}(opción **Web**)
Puede spersonalizar la forma en que se te notifica sobre

{% data variables.product.prodname_dependabot_alerts %}. Por ejemplo, puedes recibir un correo electrónico semanal con el resúmen de las alertas de hasta 10 de tus repositorios si utilizas las opciones "**Enviar un resumen de vulnerabilidades por correo electrónico** y **Resumen semanal de seguridad por correo electrónico**.
{% endif %}

{% if enterpriseServerVersions contains currentVersion and currentVersion ver_lt "enterprise-server@2.22" %}
Predeterminadamente, si tu administrador de sitio configuró las notificaciones por correo electrónico en tu instancia, recibirás alertas de seguridad:
- por correo electrónico, se envía un conrreo electrónico cada que se encuentra una vulnerabilidad (opción de **Enviar un correo electrónico cada que se encuentre una vulnerabilidad**)
- en la interface de usuario, como advertencias en tu archivo de repositorio y vistas de código (opción de **alertas de IU**)
- en la línea de comandos, como advertencias que se muestran como rellamados cuando subes información a los repositorios, la cual tiene vulnerabilidades (opción de **Línea de comandos**)
- en tu bandeja de entrada, como notificaciones web (opción de **Web**)

Puedes personalizar la forma en la que se te notifica sobre las alertas de seguridad. Por ejemplo, puedes recibir un correo electrónico semanal con el resúmen de las alertas de hasta 10 de tus repositorios si utilizas las opciones "**Enviar un resumen de vulnerabilidades por correo electrónico** y **Resumen semanal de seguridad por correo electrónico**.
{% endif %}
