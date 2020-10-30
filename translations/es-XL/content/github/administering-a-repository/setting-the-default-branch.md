---
title: Configurar la rama por defecto
intro: 'Si tienes más de una rama en tu repositorio, puedes elegir otra rama para que sea la predeterminada.'
redirect_from:
  - /articles/setting-the-default-branch
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

### Acerca de la rama predeterminada

{% data reusables.branches.new-repo-default-branch %}{% data reusables.branches.default-branch-automatically-base-branch %} Si tienes más de una rama en tu repositorio, cualquiera con permisos administrativos en los repositorios pueden seleccionar alguna de estas ramas como la rama predeterminada de los mismos.

### Configurar la rama por defecto

{% note %}

**Nota:** Para configurar la rama predeterminada debes tener más de una de ellas en tu repositorio.

{% endnote %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.repository-branches %}
4. En el menú desplegable de la rama predeterminada, elige la rama predeterminada nueva. ![Selector desplegable de la rama por defecto](/assets/images/help/repository/repository-options-defaultbranch.png)
5. Da clic en **Actualizar**.

Puedes únicamente cambiar entre ramas que ya existan en {% data variables.product.product_location %}. Para crear una nueva rama a través de UI, consulta "[Crear y eliminar ramas dentro de tu repositorio](/articles/creating-and-deleting-branches-within-your-repository)".

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" %}

También puedes configurar el nombre de la rama predeterminada para cualquier repositorio creado recientemente que pertenezca a tu cuenta de usuario, organización o cuenta empresarial. Para obtener más información, consulta las secciones "[Administrar la rama predeterminada para tus repositorios](/github/setting-up-and-managing-your-github-user-account/managing-the-default-branch-name-for-your-repositories)", "[Administrar el nombre de la rama predeterminada para los repositorios en tu organización](/github/setting-up-and-managing-organizations-and-teams/managing-the-default-branch-name-for-repositories-in-your-organization)", o "[Requerir unapolítica en sobre el nombre de la rama predeterminada](/github/setting-up-and-managing-your-enterprise-account/enforcing-repository-management-policies-in-your-enterprise-account#enforcing-a-policy-on-the-default-branch-name)".

{% endif %}

{% warning %}

**Advertencia**: El configurar una rama predeterminada diferente afecta el contenido de `trunk` en tu rama en el [puente de Git-Subversion](https://github.com/blog/1178-collaborating-on-github-with-subversion) y en el `HEAD` que verías cuando haces `git ls-remote` en la [URL ascendente del repositorio](https://git-scm.com/docs/git-ls-remote.html).

{% endwarning %}
