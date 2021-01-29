{% if currentVersion == "free-pro-team@latest" %}
By default, you will receive notification of new
{% data variables.product.prodname_dependabot_alerts %}:
- by email, an email is sent every time a vulnerability with a critical or high severity is found (**Email each time a vulnerability is found** option)
- in the user interface, a warning is shown in your repository's file and code views if there are any vulnerable dependencies (**UI alerts** option)
- on the command line, warnings are displayed as callbacks when you push to repositories with any vulnerable dependencies (**Command Line** option)
- in your inbox, as web notifications for new vulnerabilities with a critical or high severity (**Web** option)
Puede spersonalizar la forma en que se te notifica sobre

{% data variables.product.prodname_dependabot_alerts %}. Por ejemplo, puedes recibir un correo electrónico semanal con el resúmen de las alertas de hasta 10 de tus repositorios si utilizas las opciones "**Enviar un resumen de vulnerabilidades por correo electrónico** y **Resumen semanal de seguridad por correo electrónico**.
{% endif %}

{% if enterpriseServerVersions contains currentVersion and currentVersion ver_gt "enterprise-server@2.21" %}
Predeterminadamente, si tu administrador de sitio configuró el correo electrónico para recibir notificaciones en tu instancia, recibirás
{% data variables.product.prodname_dependabot_alerts %}:
- por correo electrónico, se envia un correo electrónico cada vez que se enecuentre una vulnerabilidad {% if currentVersion ver_gt "enterprise-server@2.23" %}con severidad alta o crítica{% endif %} (opción **Enviar un correo electrónico cada que se encuentre una vulnerabilidad**)
- in the user interface, a warning is shown in your repository's file and code views if there are any vulnerable dependencies (**UI alerts** option)
- on the command line, warnings are displayed as callbacks when you push to repositories with any vulnerable dependencies (**Command Line** option)
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
