---
title: Eliminar un paquete
intro: 'Puedes borrar una versión de un paquete {% if currentVersion != "github-ae@latest" %}privado{% endif %} público que utilice GraphQL o en {% data variables.product.product_name %}.'
product: '{% data reusables.gated-features.packages %}'
versions:
  enterprise-server: '>=2.22 <3.1'
  github-ae: '*'
---

{% data reusables.package_registry.packages-ghes-release-stage %}
{% data reusables.package_registry.packages-ghae-release-stage %}

{% if currentVersion != "github-ae@latest" %}En este momento, el {% data variables.product.prodname_registry %} en {% data variables.product.product_location %} no es compatible con el borrado de paquetes públicos.{% endif %}

Solo puedes borrar una versión específica de un paquete {% if currentVersion != "github-ae@latest" %}privado {% endif %} en {% data variables.product.product_name %} o con la API de GraphQL. Para eliminar un paquete {% if currentVersion != "github-ae@latest" %}privado {% endif %}completo para que no aparezca en {% data variables.product.product_name %}, primero debes borrar todas las versiones de este.

### Borrar una versión de un paquete {% if currentVersion != "github-ae@latest" %}privado {% endif %} en {% data variables.product.product_name %}

Para borrar una versión de un paquete {% if currentVersion != "github-ae@latest" %}privado {% endif %}, debes tener permisos administrativos en el repositorio.

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.package_registry.packages-from-code-tab %}
3. Haz clic en el nombre del paquete que deseas eliminar. ![Nombre del paquete](/assets/images/help/package-registry/select-pkg-cloud.png)
4. A la derecha, usa el menú desplegable **Edit package (Editar paquete)** y selecciona "Manage versions" (Administrar versiones). ![Nombre del paquete](/assets/images/help/package-registry/manage-versions.png)
5. A la derecha de la versión que deseas eliminar, haz clic en **Delete (Eliminar)**. ![Botón para eliminar paquete](/assets/images/help/package-registry/delete-package-button.png)
6. Para confirmar la eliminación, escribe el nombre del paquete y haz clic en **I understand the consequences, delete this version (Comprendo las consecuencias, eliminar esta versión)**. ![Botón para confirmar la eliminación del paquete](/assets/images/help/package-registry/confirm-package-deletion.png)

### Borrar una versión de un paquete {% if currentVersion != "github-ae@latest" %}privado {% endif %}con GraphQL

Usa la mutación `deletePackageVersion` en la API de GraphQL. Debes usar un token con ámbitos `read:packages`, `delete:packages` y `repo`. Para obtener más información acerca de los tokens, consulta "[Acerca de {% data variables.product.prodname_registry %}](/packages/publishing-and-managing-packages/about-github-packages#authenticating-to-github-packages)".

Aquí hay un comando cURL de ejemplo para eliminar una versión de paquete con el ID de versión del paquete de `MDIyOlJlZ2lzdHJ5UGFja2FnZVZlcnNpb243MTExNg`, mediante un token de acceso personal.

```shell
curl -X POST \
-H "Accept: application/vnd.github.package-deletes-preview+json" \
-H "Authorization: bearer TOKEN" \
-d '{"query":"mutation { deletePackageVersion(input:{packageVersionId:\"MDIyOlJlZ2lzdHJ5UGFja2FnZVZlcnNpb243MTExNg==\"}) { success }}"}' \
HOSTNAME/graphql
```

Para encontrar todos los paquetes {% if currentVersion != "github-ae@latest" %}privados {% endif %} que publicaste en el {% data variables.product.prodname_registry %} junto con las ID de versión de estos, puedes utilizar la conexión de `packages` a través del objeto `repository`. Necesitarás un token con los ámbitos `read:packages` y `repo`. Necesitarás un token con los ámbitos `read:packages` y `repo`.

Para obtener más información acerca de la mutación `deletePackageVersion`, consulta "[`deletePackageVersion`](/graphql/reference/mutations#deletepackageversion)".

No puedes eliminar un paquete completo, pero si eliminas todas las versiones de un paquete, dejará de aparecer en {% data variables.product.product_name %}.
