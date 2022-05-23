{% ifversion ghae %}Si las políticas de tu empresa permiten bifurcar repositorios privados e internos, puedes{% else %}Puedes{% endif %} bifurcar un repositorio a tu cuenta personal o a cualquier organización en donde tengas permisos de creación de repositorios. Para obtener más información, consulta la sección "[Roles en una organización](/organizations/managing-peoples-access-to-your-organization-with-roles/roles-in-an-organization)".

{% ifversion fpt or ghes or ghec %}

Si tienes acceso a un repositorio privado y el propietario permite la bifurcación, puedes bifurcar el repositorio hacia tu cuenta personal o hacia cualquier organización en {% ifversion fpt or ghec %}{% data variables.product.prodname_team %}{% else %}{% data variables.product.product_location %}{% endif %} en donde tengas permisos de creación de repositorios. {% ifversion fpt or ghec %}No puedes bifurcar un repositorio privado hacia una organización que utilice {% data variables.product.prodname_free_team %}. Para obtener más información, consulta la sección "[Productos de GitHub](/articles/githubs-products)".{% endif %}

{% endif %}
