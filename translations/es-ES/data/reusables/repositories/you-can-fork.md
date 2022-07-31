{% ifversion ghae %}
Si las políticas para tu empresa permiten bifurcar repositorios privados e internos, puedes bifurcar un repositorio hacia tu cuenta personal o hacia una organización en donde tengas permisos de creación de repositorio. Para obtener más información, consulta la sección "[Roles en una organización](/organizations/managing-peoples-access-to-your-organization-with-roles/roles-in-an-organization)".

{% elsif ghes or ghec %}
Puedes bifurcar un repositorio interno o privado hacia tu cuenta personal o hacia una organización en
{% data variables.product.product_location %} en donde tengas permisos de creación de repositorio, si los ajustes para el repositorio y tus políticas empresariales permiten la bifurcación.

{% elsif fpt %}
Si tienes acceso a un repositorio privado y el propietario permite la bifurcación, puedes bifurcarlo hacia tu cuenta personal o hacia una organización en
{% data variables.product.prodname_team %} donde tengas permisos de creación de repositorios. No puedes bifurcar un repositorio privado hacia una organización utilizando {% data variables.product.prodname_free_team %}. Para obtener más información, consulta la sección "[Productos de GitHub](/articles/githubs-products)".
{% endif %}
