---
title: Crear un repositorio desde una plantilla
intro: 'Puedes crear una plantilla a partir de un repositorio existente para que tanto tú como otras personas puedan generar nuevos repositorios con la misma estructura de {% ifversion fpt or ghae or ghes or ghec %}ramas y{% endif %}archivos en el directorio.'
permissions: Anyone with admin permissions to a repository can make the repository a template.
redirect_from:
  - /articles/creating-a-template-repository
  - /github/creating-cloning-and-archiving-repositories/creating-a-template-repository
  - /github/creating-cloning-and-archiving-repositories/creating-a-repository-on-github/creating-a-template-repository
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
shortTitle: Crear un repositorio de plantilla
---

{% note %}

**Nota**: Ty repositorio de plantilla no puede incluir archivos que se almacenen utilizando {% data variables.large_files.product_name_short %}.

{% endnote %}

Para crear un repositorio de plantilla, debes crear un repositorio y luego convertirlo en una plantilla. Para obtener más información sobre la creación de repositorios, consulta "[Crear un repositorio nuevo](/articles/creating-a-new-repository)."

Después de que conviertes tu repositorio en una plantilla, cualquiera que tenga acceso a este podrá generar un repositorio nuevo con la misma estructura de directorios y archivos que tu rama predeterminada.{% ifversion fpt or ghae or ghes or ghec %} También pueden elegir incluir el resto de las ramas de tu repositorio. Las ramas que se crean a partir de una plantilla tienen historiales sin relación, así que no puedes crear solicitudes de cambios ni hacer fusiones entre ramas.{% endif %} Para obtener más información, consulta la sección "[Crear un repositorio a partir de una plantilla](/articles/creating-a-repository-from-a-template)".

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
1. Selecciona **Repositorio de plantilla**. ![Casilla de verificación para convertir un repositorio en una plantilla](/assets/images/help/repository/template-repository-checkbox.png)
