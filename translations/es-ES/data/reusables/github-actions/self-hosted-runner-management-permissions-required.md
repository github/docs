Un ejecutor auto-hospedado puede ubicarse ya sea en la configuración de tu repositorio, cuenta de organización, o {% ifversion fpt %}cuenta de empresa en {% data variables.product.prodname_dotcom %}{% elsif ghes or ghae %} configuración de tu cuenta de empresa en {% data variables.product.product_location %}{% endif %}. Para administrar un ejecutor auto-hospedado, debes tener los siguientes permisos, dependiendo de donde se agregó éste:
- **Repositorio de usuario**: debes ser el propietario del repositorio.
- **Organización**: Debes ser un propietario de la organización.
- **Repositorio de la organización**: Debes ser un propietario de la organización, o tener acceso administrativo al repositorio.
{% ifversion fpt %}
- **Cuenta empresarial**: Debes ser un propietario de la empresa.
{% elsif ghes or ghae %}
- **Empresa**: debes ser un administrador de sitio de {% data variables.product.prodname_enterprise %}.
{% endif %}
