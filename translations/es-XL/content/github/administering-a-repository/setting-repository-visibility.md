---
title: Configurar la visibilidad de un repositorio
intro: Puedes elegir quién puede ver tu repositorio.
redirect_from:
  - /articles/making-a-private-repository-public/
  - /articles/making-a-public-repository-private/
  - /articles/converting-a-public-repo-to-a-private-repo/
  - /articles/setting-repository-visibility
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Repositories
---

### Acerca de los cambios a la visibilidad de un repositorio

Los propietarios de las organizaciones pueden restringir la capacidad de cambiar la visibilidad de un repositorio únicamente para otros propietarios de organizaciones. Para obtener más información, consulta "[Restringir los cambios a la visibilidad del repositorio en tu organización](/github/setting-up-and-managing-organizations-and-teams/restricting-repository-visibility-changes-in-your-organization)."

Te recomendamos revisar las siguientes consideraciones antes de que cambies la visibilidad de un repositorio.

#### Convertir un repositorio en privado

   * {% data variables.product.prodname_dotcom %} separará las bifurcaciones públicas del repositorio público y las pondrá en una red nueva. Las bifurcaciones públicas no se hacen privadas. {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.19" %}Si cambias la visibilidad de un repositorio de interno a privado, {% data variables.product.prodname_dotcom %} eliminará las bifurcaciones que pertenezcan a cualquier usuario que no tenga acceso al repositorio privado nuevo.{% endif %} Para obtener más información, consulta la sección "[¿Qué pasa con las bifurcaciones cuando se borra un repositorio o cuando se cambia su visibilidad?](/articles/what-happens-to-forks-when-a-repository-is-deleted-or-changes-visibility#changing-a-public-repository-to-a-private-repository)".
   {% if currentVersion == "free-pro-team@latest" %}* Si estás utilizando un {% data variables.product.prodname_free_user %} para las cuentas de usuario u organizaciones, algunas características no estarán disponibles en el repositorio después de que cambias la visibilidad a privado. {% data reusables.gated-features.more-info %}
   * Cualquier sitio {% data variables.product.prodname_pages %} publicado se despublicará de forma automática. Si agregaste un dominio personalizado al sitio {% data variables.product.prodname_pages %}, deberías eliminar o actualizar tus registros de DNS antes de convertir el repositorio en privado, para evitar el riesgo de una adquisición de dominio. Para obtener más información, consulta "[Administrar un dominio personalizado para tu sitio de {% data variables.product.prodname_pages %}](/articles/managing-a-custom-domain-for-your-github-pages-site)".
   * {% data variables.product.prodname_dotcom %} ya no inlcuirá el repositorio en el {% data variables.product.prodname_archive %}. Para obtener más información, consulta la sección "[Acerca de archivar contenido y datos en {% data variables.product.prodname_dotcom %}](/github/creating-cloning-and-archiving-repositories/about-archiving-content-and-data-on-github#about-the-github-archive-program)".{% endif %}
   {% if currentVersion != "free-pro-team@latest" %}* Ya no está disponible el acceso de lectura anónimo de Git. Para obtener más información, consulta la sección "[Habilitar el acceso de lectura anónimo de Git para un repositorio](/enterprise/{{ currentVersion }}/user/articles/enabling-anonymous-git-read-access-for-a-repository)".{% endif %}

#### Convertir un repositorio en público

   * {% data variables.product.prodname_dotcom %} separará a las bifurcaciones privadas y las convertirá en un repositorio privado independiente. Para obtener más información, consulta "[¿Qué le sucede a las bifurcaciones cuando se elimina un repositorio o cambia la visibilidad?](/articles/what-happens-to-forks-when-a-repository-is-deleted-or-changes-visibility#changing-a-private-repository-to-a-public-repository)"
   * Si estás convirtiendo tu repositorio privado en un repositorio público como parte de una mudanza para crear un proyecto de código abierto, consulta las [Guías de código abierto](http://opensource.guide) para obtener consejos y pautas útiles.{% if currentVersion == "free-pro-team@latest" %} También puedes hacer un curso gratuito sobre administrar un proyecto de código abierto con [{% data variables.product.prodname_learning %}]({% data variables.product.prodname_learning_link %}). Una vez que tu repositorio es público, también puedes ver el perfil de la comunidad de tu repositorio para ver si tu proyecto cumple con las mejoras prácticas para los colaboradores de apoyo. Para obtener más información, consulta "[Ver el perfil de tu comunidad](/articles/viewing-your-community-profile)"{% endif %}

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.21" %}

### Cambiar la visibilidad de un repositorio

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
3. Debajo de "Zona de Peligro", a la derecha de "Cambiar la visibilidad del repositorio", da clic en **Cambiar la visibilidad**. ![Botón de cambiar la visibilidad](/assets/images/help/repository/repo-change-vis.png)
4. Selecciona una visibilidad. ![Diálogo de opciones para la visbilidad del repositorio](/assets/images/help/repository/repo-change-select.png)
5. Para verificar que estás cambiando la visibilidad del repositorio correcto, teclea el nombre del repositorio para el cual quieres cambiar la visibilidad.
6. Da clic en **Entiendo, cambiar la visibilidad del repositorio**. ![Botón de confirmar cambio para la visibilidad de un repositorio](/assets/images/help/repository/repo-change-confirm.png)

{% endif %}

{% if currentVersion ver_lt "enterprise-server@2.22" %}

### Convertir un repositorio en privado

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
3. Under "Danger Zone", next to "Make this repository private", click **Make private**. ![Botón para convertir en privado](/assets/images/help/repository/repo-makeprivate.png)
4. Lee las advertencias acerca de convertir un repositorio en privado. ![Ventana emergente de advertencias](/assets/images/help/repository/repo-privateconfirm.png)
5. Escribe el nombre del repositorio que deseas convertir en privado, por ejemplo `accountname/reponame`.
6. Click **I understand, make this repository private**.

### Convertir un repositorio en público

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
3. Under "Danger Zone", next to "Make this repository public", click **Make public**. ![Botón para convertir en público](/assets/images/help/repository/repo-makepublic.png)
4. Lee las advertencias acerca de convertir un repositorio en público. ![Ventana emergente con información sobre convertir un repositorio privado en público](/assets/images/help/repository/repo-publicconfirm.png)
5. Escribe el nombre del repositorio que deseas convertir en público, por ejemplo `accountname/reponame`.
6. Click **I understand, make this repository public**.

{% if currentVersion ver_gt "enterprise-server@2.19" %}
### Convertir un repositorio en interno

{% data reusables.organizations.internal-repos-enterprise %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
3. Under "Danger Zone", next to "Make this repository internal", click **Make internal**. ![Botón para convertir en interno](/assets/images/help/repository/repo-makeinternal.png)
4. Lee las advertencias acerca de convertir un repositorio en interno. ![Ventana emergente de advertencias](/assets/images/help/repository/repo-internalconfirm.png)
5. Escribe el nombre del repositorio que deseas convertir en interno, por ejemplo `accountname/reponame`.
6. Click **I understand, make this repository internal**.
{% endif %}

{% endif %}

### Leer más
- "[Acerca de la visibilidad de los repositorios](/github/creating-cloning-and-archiving-repositories/about-repository-visibility)"
