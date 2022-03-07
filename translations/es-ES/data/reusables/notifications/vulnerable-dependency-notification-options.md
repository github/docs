{% ifversion fpt or ghes > 3.1 or ghae-issue-4864 or ghec %}
{% ifversion fpt or ghec %}Predeterminadamente, recibirás notificaciones:{% endif %}{% ifversion ghes > 3.1 or ghae-issue-4864 %}Predeterminadamente, si tu propietario de empresa configuró las notificaciones por correo electrónico en tu instancia, recibiras {% data variables.product.prodname_dependabot_alerts %}:{% endif %}

- por correo electrónico, se enviará un mensaje de correo electrónico cuando se habilite el {% data variables.product.prodname_dependabot %} para un repositorio cuando se confirme un archivo de manifiesto nuevo en dicho repositorio y cuando se encuentre una vulnerabilidad nueva de severidad crítica o alta (opción **Enviar un correo electrónico cada vez que se encuentra una vulnerabilidad**).
- en la interface de usuario, se muestra una advertencia en tu archivo de repositorio y vistas de código si hay dependencias vulnerables (opción de **Alertas de la IU**).
- en la línea de comandos, las advertencias se muestran como rellamados cuando subes información a los repositorios con dependencias vulnerables (opción de **Línea de comandos**).
- en tu bandeja de entrada, como notificaciones web. Se enviará una notificación web cuando se habilite el {% data variables.product.prodname_dependabot %} en un repositorio cada que se confirme un archivo de manifiesto nuevo en dicho repositorio y cuando se encuentre una vulnerabilidad nueva con severidad crítica o alta (opción **Web**).{% ifversion not ghae %}
- en {% data variables.product.prodname_mobile %}, como notificaciones web. Para obtener más información, consulta la sección [Habilitar las notificaciones de subida con GitHub Móvil](/github/managing-subscriptions-and-notifications-on-github/configuring-notifications#enabling-push-notifications-with-github-mobile)".{% endif %}

{% note %}

**Nota:** Las notificaciones por correo electrónico y web{% ifversion not ghae %}/{% data variables.product.prodname_mobile %}{% endif %} son:

- _por repositorio_ cuando el {% data variables.product.prodname_dependabot %} se habilita en el repositorio o cuando se confirma un archivo de manifiesto nuevo en dicho repositorio.

- _por organización_ cuando se descubre una vulnerabilidad nueva.

{% endnote %}
Puede spersonalizar la forma en que se te notifica sobre

{% data variables.product.prodname_dependabot_alerts %}. Por ejemplo, puedes recibir un correo electrónico semanal con el resúmen de las alertas de hasta 10 de tus repositorios si utilizas las opciones "**Enviar un resumen de vulnerabilidades por correo electrónico** y **Resumen semanal de seguridad por correo electrónico**.
{% endif %}

{% ifversion ghes = 3.1 %}
Predeterminadamente, si tu administrador de sitio configuró el correo electrónico para recibir notificaciones en tu instancia, recibirás
las {% data variables.product.prodname_dependabot_alerts %} nuevas:
- por correo electrónico, se envía un correo electrónico cada vez que se encuentra una vulnerabilidad con una severidad crítica o alta (Opción de **Enviar un correo electrónico cada vez que se encuentra una vulnerabilidad**)
- en la interface de usuario, se muestra una advertencia en tu archivo de repositorio y vistas de código si hay dependencias vulnerables (opción de **Alertas de la IU**)
- en la línea de comandos, las advertencias se muestran como rellamados cuando subes información a los repositorios con dependencias vulnerables (opción de **Línea de comandos**)
- en tu bandeja de entrada como notificaciones web para vulnerabilidades nuevas con una severidad alta o crítica (opción **Web**)
Puede spersonalizar la forma en que se te notifica sobre

{% data variables.product.prodname_dependabot_alerts %}. Por ejemplo, puedes recibir un correo electrónico semanal con el resúmen de las alertas de hasta 10 de tus repositorios si utilizas las opciones "**Enviar un resumen de vulnerabilidades por correo electrónico** y **Resumen semanal de seguridad por correo electrónico**.
{% endif %}
