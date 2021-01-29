---
title: Eliminar un paquete
intro: 'Puedes eliminar una versión de un paquete privado utilizando GraphQL o en {% data variables.product.product_name %}.'
product: '{% data reusables.gated-features.packages %}'
redirect_from:
  - /github/managing-packages-with-github-packages/deleting-a-package
  - /packages/publishing-and-managing-packages/deleting-a-package
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
---

{% data reusables.package_registry.packages-ghes-release-stage %}

{% if currentVersion == "free-pro-team@latest" %}
### Acerca de la eliminación de paquetes privados

Para borrar un paquete de imágenes de contenedor en {% data variables.product.product_name %}, consulta la sección "[Borrar una imagen de contenedor](/packages/guides/deleting-a-container-image)".

{% endif %}

### Acerca de la eliminación de paquetes privados

Solo puedes eliminar una versión especificada de un paquete privado en {% data variables.product.product_name %} o con la API de GraphQL. Para hacer que un paquete privado completo deje de aparecer en {% data variables.product.product_name %}, primero debes eliminar todas las versiones del paquete.

{% if currentVersion == "free-pro-team@latest" %}
### Acerca de la eliminación paquetes públicos

Para evitar que se rompan proyectos que puedan depender de tus paquetes, no puedes eliminar un paquete público completo o versiones específicas de un paquete público.

En circunstancias especiales, por ejemplo, por razones legales o para cumplir con los estándares del RGPD, puedes solicitarle a {% data variables.contact.github_support %} que elimine un paquete público por ti, usando [nuestro formulario de contacto](https://github.com/contact?form%5Bsubject%5D=Re:%20GitHub%20Package%20Registry).

{% else %}

En este momento, el {% data variables.product.prodname_registry %} en {% data variables.product.product_location %} no es compatible con el borrado de paquetes públicos.

{% endif %}

### Eliminar una versión de un paquete privado en {% data variables.product.product_name %}

Para eliminar una versión de un paquete privado, debes tener permisos de administrador en el repositorio.

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.package_registry.packages-from-code-tab %}
3. Haz clic en el nombre del paquete que deseas eliminar. ![Nombre del paquete](/assets/images/help/package-registry/select-pkg-cloud.png)
4. A la derecha, usa el menú desplegable **Edit package (Editar paquete)** y selecciona "Manage versions" (Administrar versiones). ![Nombre del paquete](/assets/images/help/package-registry/manage-versions.png)
5. A la derecha de la versión que deseas eliminar, haz clic en **Delete (Eliminar)**. ![Botón para eliminar paquete](/assets/images/help/package-registry/delete-package-button.png)
6. Para confirmar la eliminación, escribe el nombre del paquete y haz clic en **I understand the consequences, delete this version (Comprendo las consecuencias, eliminar esta versión)**. ![Botón para confirmar la eliminación del paquete](/assets/images/help/package-registry/confirm-package-deletion.png)

### Eliminar una versión de un paquete privado con GraphQL

Usa la mutación `deletePackageVersion` en la API de GraphQL. Debes usar un token con ámbitos `read:packages`, `delete:packages` y `repo`. Para obtener más información acerca de los tokens, consulta "[Acerca de {% data variables.product.prodname_registry %}](/packages/publishing-and-managing-packages/about-github-packages#authenticating-to-github-packages)".

Aquí hay un comando cURL de ejemplo para eliminar una versión de paquete con el ID de versión del paquete de `MDIyOlJlZ2lzdHJ5UGFja2FnZVZlcnNpb243MTExNg`, mediante un token de acceso personal.

{% if currentVersion == "free-pro-team@latest" %}
```
curl -X POST \
-H "Accept: application/vnd.github.package-deletes-preview+json" \
-H "Authorization: bearer TOKEN" \
-d '{"query":"mutation { deletePackageVersion(input:{packageVersionId:\"MDIyOlJlZ2lzdHJ5UGFja2FnZVZlcnNpb243MTExNg==\"}) { success }}"}' \
https://api.github.com/graphql
```

{% else %}

```
curl -X POST \
-H "Accept: application/vnd.github.package-deletes-preview+json" \
-H "Authorization: bearer TOKEN" \
-d '{"query":"mutation { deletePackageVersion(input:{packageVersionId:\"MDIyOlJlZ2lzdHJ5UGFja2FnZVZlcnNpb243MTExNg==\"}) { success }}"}' \
HOSTNAME/graphql
```

{% endif %}

Para encontrar todos los paquetes privados que publicaste en {% data variables.product.prodname_registry %}, junto con los ID de versión de los paquetes, puedes usar la conexión `registryPackagesForQuery`. Necesitarás un token con los ámbitos `read:packages` y `repo`. Necesitarás un token con los ámbitos `read:packages` y `repo`.

Para obtener más información acerca de la mutación `deletePackageVersion`, consulta "[`deletePackageVersion`](/graphql/reference/mutations#deletepackageversion)".

No puedes eliminar un paquete completo, pero si eliminas todas las versiones de un paquete, dejará de aparecer en {% data variables.product.product_name %}
