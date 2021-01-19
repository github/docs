---
title: Crear un repositorio desde una plantilla
intro: 'Puedes hacer una plantilla a partir de un repositorio existente para que tú y otras personas puedan generar repositorios nuevos con la misma estructura de directorios{% if currentVersion == "free-pro-team@latest" or currentVersion == "github-ae@latest" or currentVersion ver_gt "enterprise-server@2.20" %}, ramas,{% endif %} y archivos.'
permissions: Cualquier usuario con permisos de administrador para un repositorio puede convertir el repositorio en una plantilla.
redirect_from:
  - /articles/creating-a-template-repository
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

{% note %}

**Nota**: Ty repositorio de plantilla no puede incluir archivos que se almacenen utilizando {% data variables.large_files.product_name_short %}.

{% endnote %}

Para crear un repositorio de plantilla, debes crear un repositorio y luego convertirlo en una plantilla. Para obtener más información sobre la creación de repositorios, consulta "[Crear un repositorio nuevo](/articles/creating-a-new-repository)."

Después de que conviertas tu repositorio en una plantilla, cualquiera con acceso a éste podrá generar un repositorio nuevo con la misma estructura de directorios y archivos que tu rama predeterminada.{% if currentVersion == "free-pro-team@latest" or currentVersion == "github-ae@latest" or currentVersion ver_gt "enterprise-server@2.20" %} También podrán elegir incluir el resto de las ramas en tu repositorio.{% endif %} Para obtener más información, consulta la sección "[Crear un repositorio a partir de una plantilla](/articles/creating-a-repository-from-a-template)".

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
1. Selecciona **Repositorio de plantilla**. ![Casilla de verificación para convertir un repositorio en una plantilla](/assets/images/help/repository/template-repository-checkbox.png)
