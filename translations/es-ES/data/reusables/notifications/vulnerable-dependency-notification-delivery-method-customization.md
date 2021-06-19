{% if currentVersion == "free-pro-team@latest" %}
Puedes elegir el método de entrega y la frecuencia de las notificaciones de
las {% data variables.product.prodname_dependabot_alerts %} en los repositorios que estás observando o donde te hayas suscrito a las notificaciones para las alertas de seguridad.
{% else %}
Puedes elegir el método de entrega de las notificaciones de
{% if currentVersion ver_gt "enterprise-server@2.21" %}las {% data variables.product.prodname_dependabot_alerts %}{% else %}alertas de seguridad{% endif %} en los repositorios que observas, así como la frecuencia en la que se te envían las notificaciones.
{% endif %}
