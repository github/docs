---
title: Crear un repositorio desde una plantilla
intro: 'Puedes crear una plantilla a partir de un repositorio existente para que tanto tú como otras personas puedan generar nuevos repositorios con la misma estructura de {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.20" %}ramas y{% endif %}archivos en el directorio.'
redirect_from:
  - /articles/creating-a-template-repository
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.18'
---

Cualquier usuario con permisos de administrador para un repositorio puede convertir el repositorio en una plantilla.

Para crear un repositorio de plantilla, debes crear un repositorio y luego convertirlo en una plantilla. Para obtener más información sobre la creación de repositorios, consulta "[Crear un repositorio nuevo](/articles/creating-a-new-repository)."

Después de convertir tu repositorio en una plantilla, cualquiera con acceso a él puede generar un nuevo repositorio con la misma estructura de directorio y archivos que tu rama predeterminada. {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.20" %} También pueden elegir incluir todas las otras ramas de tu repositorio.{% endif %} Para obtener más información, consulta la sección "[Crear un repositorio desde una plantilla](/articles/creating-a-repository-from-a-template)".

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
3. Selecciona **Repositorio de plantilla**. ![Casilla de verificación para convertir un repositorio en una plantilla](/assets/images/help/repository/template-repository-checkbox.png)
