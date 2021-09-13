{% warning %}

**Advertencia:** Si agregas un adjunto de imagen a una solicitud de cambios o a un comentario de una propuesta, cualquiera podrá ver la URL anonimizada de la imagen sin autenticarse{% if enterpriseServerVersions contains currentVersion %}, aún si la solicitud de cambios se encuentra en un repositorio privado o si se habilita el modo privado. Para prevenir el acceso no autorizado a las imágenes, asegúrate de restringir el acceso de red a los sistemas que sirven las imágenes, incluyendo {% data variables.product.product_location %}{% endif %}.{% if currentVersion == "github-ae@latest" %} Para prevenir el acceso no autorizado a las URL de imagen en {% data variables.product.product_name %}, considera restringir el tráfico de red a tu empresa. Para obtener más información, consulta la sección "[Restringir el tráfico de red para tu empresa](/admin/configuration/restricting-network-traffic-to-your-enterprise)".{% endif %}

{% endwarning %}
