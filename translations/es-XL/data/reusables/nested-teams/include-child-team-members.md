{% if currentVersion != "free-pro-team@latest" and currentVersion ver_lt "enterprise-server@2.20" %}
Si pasas el tipo de medios `hellcat-preview`, los miembros del equipo incluirán a los miembros de los equipos hijo.
{% else %}
Los miembros del equipo incluirán a los miembros de los equipos hijos.
{% endif %}
