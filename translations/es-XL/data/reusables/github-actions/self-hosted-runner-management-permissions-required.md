Un ejecutor auto-hospedado puede ubicarse ya sea en tu organización o en tus ajustes de repositorio en {% data variables.product.prodname_dotcom %}. Para administrar un ejecutor auto-hospedado, debes tener los siguientes permisos, dependiendo de donde se agregó éste:
- **Repositorio de usuario**: debes ser el propietario del repositorio.
- **Organización**: Debes ser un propietario de la organización.
- **Repositorio de la organización**: Debes ser un propietario de la organización, o tener acceso administrativo al repositorio.
{% if currentVersion == "free-pro-team@latest" %}
- **Cuenta empresarial**: Debes ser un propietario de la empresa.
{% else if currentVersion != "free-pro-team@latest" and currentVersion ver_gt "enterprise-server@2.21" %}
- **Enterprise**: You must be a {% data variables.product.prodname_enterprise %} site administrator.
{% endif %}
