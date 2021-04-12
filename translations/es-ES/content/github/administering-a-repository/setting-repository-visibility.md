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
  - repositories
---

### Acerca de los cambios a la visibilidad de un repositorio

Los propietarios de las organizaciones pueden restringir la capacidad de cambiar la visibilidad de un repositorio únicamente para otros propietarios de organizaciones. Para obtener más información, consulta "[Restringir los cambios a la visibilidad del repositorio en tu organización](/github/setting-up-and-managing-organizations-and-teams/restricting-repository-visibility-changes-in-your-organization)."

Te recomendamos revisar las siguientes consideraciones antes de que cambies la visibilidad de un repositorio.

#### Convertir un repositorio en privado
{% if currentVersion == "free-pro-team@latest" or enterpriseServerVersions contains currentVersion %}
* {% data variables.product.product_name %} separará las bifurcaciones públicas del repositorio público y las pondrá en una red nueva. Las bifurcaciones públicas no se hacen privadas.{% endif %}
* Si cambias la visibilidad de un repositorio de interna a privada, {% data variables.product.prodname_dotcom %} eliminará las bifurcaciones que pertenezcan a cualquiera de los usuarios sin acceso al repositorio que recientemente se hizo privado. {% if currentVersion == "free-pro-team@latest" or enterpriseServerVersions contains currentVersion %}La visibilidad de cualquier bifurcación también cambiará a privada.{% elsif currentVersion == "github-ae@latest" %}Si el repositorio interno tiene cualquier bifurcación, la visibilidad de éstas ya será privada.{% endif %} Para obtener más información, consulta la sección "[¿Qué pasa con las bifurcaciones cuando un repositorio se borra o cambia su visibilidad?](/articles/what-happens-to-forks-when-a-repository-is-deleted-or-changes-visibility)"{% if currentVersion == "free-pro-team@latest" %}
* Si utilizas {% data variables.product.prodname_free_user %} para cuentas de usuario o de organización, algunas características no estarán disponibles en el repositorio después de que cambies la visibilidad a privada. {% data reusables.gated-features.more-info %}{% endif %}
* Cualquier sitio de {% data variables.product.prodname_pages %} publicado se dejará de publicar automáticamente.{% if currentVersion == "free-pro-team@latest" %} Si agregaste un dominio personalizado al sitio de {% data variables.product.prodname_pages %}, deberás eliminar o actualizar tus registros de DNS antes de que hagas al repositorio privado para evitar el riesgo de que alguien más tome el dominio. Para obtener más información, consulta la sección "[Administrar un dominio personalizado para tu sitio de {% data variables.product.prodname_pages %}](/articles/managing-a-custom-domain-for-your-github-pages-site)".{% endif %}{% if currentVersion == "free-pro-team@latest" %}
* {% data variables.product.prodname_dotcom %} ya no incluirá el repositorio en el {% data variables.product.prodname_archive %}. Para obtener más información, consulta la sección "[Acerca de archivar el contenido y datos en {% data variables.product.prodname_dotcom %}](/github/creating-cloning-and-archiving-repositories/about-archiving-content-and-data-on-github#about-the-github-archive-program)".{% endif %}{% if currentVersion == "free-pro-team@latest" %}
* Las características de la {% data variables.product.prodname_GH_advanced_security %}, tales como el {% data variables.product.prodname_code_scanning %}, dejarán de funcionar a menos de que el repositorio pertenezca a una organización que sea parte de una empresa con una licencia para {% data variables.product.prodname_advanced_security %} y suficientes plazas disponibles. {% data reusables.advanced-security.more-info-ghas %}{% endif %}{% if enterpriseServerVersions contains currentVersion %}
* El acceso anónimo de Git ya no está disponible. Para obtener más información, consulta la sección "[Habilitar el acceso de lectura anónima en Git para un repositorio](/enterprise/{{ currentVersion }}/user/articles/enabling-anonymous-git-read-access-for-a-repository)".{% endif %}

{% if currentVersion == "free-pro-team@latest" or currentVersion == "github-ae@latest" or currentVersion ver_gt "enterprise-server@2.19" %}

#### Convertir un repositorio en interno

{% note %}

**Nota:** {% data reusables.gated-features.internal-repos %}

{% endnote %}

* Cualquier bifurcación del repositorio se mantendrá en la red del mismo y {% data variables.product.product_name %} mantendrá la relación entre el repositorio raíz y la bifurcación. Para obtener más información, consulta la sección "[¿Qué le sucede a las bifurcaciones cuando se elimina un repositorio o cuando cambia la visibilidad?](/articles/what-happens-to-forks-when-a-repository-is-deleted-or-changes-visibility)"

{% endif %}

{% if currentVersion == "free-pro-team@latest" or enterpriseServerVersions contains currentVersion %}

#### Convertir un repositorio en público

* {% data variables.product.product_name %} se deslindará de las bifurcaciones privadas y lasconvertirá en repositorios privados independientes. Para obtener más información, consulta la sección "[¿Qué sucede con las bifurcaciones cuando se borra un repositorio o cuando cambia su visibilidad?](/articles/what-happens-to-forks-when-a-repository-is-deleted-or-changes-visibility#changing-a-private-repository-to-a-public-repository)"{% if currentVersion == "free-pro-team@latest" %}
* Si vas a convertir tu repositorio privado en uno público como parte de un movimiento hacia la creación de un proyecto de código abierto, consulta las [Guías de Código Abierto](http://opensource.guide) para encontrar tips ylineamientos útiles. También puedes tomar un curso gratuito sobre cómo administrar un proyecto de código abierto con [{% data variables.product.prodname_learning %}]({% data variables.product.prodname_learning_link %}). Una vez que tu repositorio es público, también puedes ver el perfil de la comunidad de tu repositorio para ver si tu proyecto cumple con las mejoras prácticas para los colaboradores de apoyo. Para obtener más información, consulta "[Ver el perfil de tu comunidad](/articles/viewing-your-community-profile)"
* El repositorio obtendrá acceso automático a las características de la {% data variables.product.prodname_GH_advanced_security %}.

Para obtener más información sobre cómo mejorar la seguridad del repositorio, consulta la sección "[Acerca de cómo asegurar tu repositorio](/github/administering-a-repository/about-securing-your-repository)".{% endif %}

{% endif %}

{% if currentVersion == "free-pro-team@latest" or currentVersion == "github-ae@latest" or currentVersion ver_gt "enterprise-server@2.21" %}

### Cambiar la visibilidad de un repositorio

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
3. Debajo de "Zona de Peligro", a la derecha de "Cambiar la visibilidad del repositorio", da clic en **Cambiar la visibilidad**. ![Botón de cambiar la visibilidad](/assets/images/help/repository/repo-change-vis.png)
4. Selecciona una visibilidad.
{% if currentVersion == "free-pro-team@latest" %}
   ![Diálogo de opciones para la visbilidad del repositorio](/assets/images/help/repository/repo-change-select.png){% else %}
![Dialog of options for repository visibility](/assets/images/enterprise/repos/repo-change-select.png){% endif %}
5. Para verificar que estás cambiando la visibilidad del repositorio correcto, teclea el nombre del repositorio para el cual quieres cambiar la visibilidad.
6. Da clic en **Entiendo, cambiar la visibilidad del repositorio**.
{% if currentVersion == "free-pro-team@latest" %}
   ![Botón de confirmar cambio para la visibilidad de un repositorio](/assets/images/help/repository/repo-change-confirm.png){% else %}
![Confirm change of repository visibility button](/assets/images/enterprise/repos/repo-change-confirm.png){% endif %}
{% endif %}

{% if currentVersion ver_lt "enterprise-server@2.22" %}

### Convertir un repositorio en privado

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
3. Debajo de "Zona de Peligro", junto a "Convertir este repositorio en privado", da clic en **Convertir en privado**. ![Botón para convertir en privado](/assets/images/help/repository/repo-makeprivate.png)
4. Lee las advertencias acerca de convertir un repositorio en privado. ![Ventana emergente de advertencias](/assets/images/help/repository/repo-privateconfirm.png)
5. Escribe el nombre del repositorio que deseas convertir en privado, por ejemplo `accountname/reponame`.
6. Da clic en **Entiendo, convertir este repositorio en privado**.

### Convertir un repositorio en público

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
3. Debajo de "Zona de Peligro", junto a "Convertir este repositorio en público", da clic en **Convertir en público**. ![Botón para convertir en público](/assets/images/help/repository/repo-makepublic.png)
4. Lee las advertencias acerca de convertir un repositorio en público. ![Ventana emergente con información sobre convertir un repositorio privado en público](/assets/images/help/repository/repo-publicconfirm.png)
5. Escribe el nombre del repositorio que deseas convertir en público, por ejemplo `accountname/reponame`.
6. Da clic en **Entiendo, convertir este repositorio en público**.

{% if currentVersion ver_gt "enterprise-server@2.19" %}
### Convertir un repositorio en interno

{% data reusables.organizations.internal-repos-enterprise %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
3. Debajo de "Zona de Peligro", junto a "Convertir este repositorio en interno", da clic en **Convertir en interno**. ![Botón para convertir en interno](/assets/images/help/repository/repo-makeinternal.png)
4. Lee las advertencias acerca de convertir un repositorio en interno. ![Ventana emergente de advertencias](/assets/images/help/repository/repo-internalconfirm.png)
5. Escribe el nombre del repositorio que deseas convertir en interno, por ejemplo `accountname/reponame`.
6. Da clic en **Entiendo, convertir este repositorio en interno**.
{% endif %}

{% endif %}

### Leer más
- "[Acerca de la visibilidad de los repositorios](/github/creating-cloning-and-archiving-repositories/about-repository-visibility)"
