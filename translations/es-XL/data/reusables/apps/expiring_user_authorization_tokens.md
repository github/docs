{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.21" %}
Para mantener más seguros los tokens de acceso de usuario a servidor, puedes utilizar tokens de acceso que caducarán después de 8 horas, y un token de actualización que se puede intercambiar por un token de acceso nuevo. Para obtener más información, consulta la sección "[Actualizar los tokens de acceso de usuario a servidor](/apps/building-github-apps/refreshing-user-to-server-access-tokens/)".
{% endif %}
