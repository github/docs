Un ejecutor auto-hospedado puede ubicarse ya sea en la configuración de ya sea tu cuenta de repositorio, organización, o{% if currentVersion == "free-pro-team@latest" %}empresa en {% data variables.product.prodname_dotcom %}{% elsif enterpriseServerVersions contains currentVersion and currentVersion ver_gt "enterprise-server@2.21" or currentVersion == "github-ae@latest" %} ajustes de empresa en {% data variables.product.product_location %}{% endif %}. Para administrar un ejecutor auto-hospedado, debes tener los siguientes permisos, dependiendo de donde se agregó éste:
- **Repositorio de usuario**: debes ser el propietario del repositorio.
- **Organización**: Debes ser un propietario de la organización.
- **Repositorio de la organización**: Debes ser un propietario de la organización, o tener acceso administrativo al repositorio.
{% if currentVersion == "free-pro-team@latest" %}
- **Cuenta empresarial**: Debes ser un propietario de la empresa.
{% elsif enterpriseServerVersions contains currentVersion and currentVersion ver_gt "enterprise-server@2.21" or currentVersion == "github-ae@latest" %}
- **Empresa**: debes ser un administrador de sitio de {% data variables.product.prodname_enterprise %}.
{% endif %}
