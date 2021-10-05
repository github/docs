{% ifversion ghae %}Si las políticas de tu empresa permiten bifurcar los repositorios internos y privados, puedes{% else %}Puedes{% endif %} bifurcar un repositorio hacia tu cuenta de usuario o hacia cualquier organización en donde tengas permisos de creación de repositorios. Para obtener más información, consulta "[Niveles de permisos para una organización](/articles/permission-levels-for-an-organization)".

{% ifversion fpt or ghes %}

Si tienes acceso a un repositorio privado y el propietario permite las bifurcaciones, puedes bifurcar el repositorio hacia tu cuenta de usuario o hacia cualquier organización en {% ifversion fpt %}{% data variables.product.prodname_team %}{% else %}{% data variables.product.product_location %}{% endif %} en donde tengas permisos de creación de repositorios. {% ifversion fpt %}No puedes bifurcar un repositorio privado hacia una organización que utilice {% data variables.product.prodname_free_team %}. Para obtener más información, consulta la sección "[Productos de GitHub](/articles/githubs-products)".{% endif %}

{% endif %}
