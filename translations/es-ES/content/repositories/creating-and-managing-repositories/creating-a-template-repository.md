---
title: Crear un repositorio desde una plantilla
intro: 'Puedes convertir un repositorio existente en una plantilla para que tanto tú como otras personas puedan generar repositorios nuevos con la misma estructura de directorios, ramas y archivos.'
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

Después de convertir a tu repositorio en plantilla, cualquiera con acceso a dicho repositorio podrá generar uno nuevo con la misma estructura de directorios y archivos que tu rama predeterminada. También pueden elegir incluir el resto de las ramas en tu repositorio. Las ramas que se crean desde una plantilla tienen historias sin relación entre ellas, así que no puedes crear solicitudes de cambio ni hacer fusiones entre las ramas. Para obtener más información, consulta "[Crear un repositorio a partir de una plantilla](/articles/creating-a-repository-from-a-template)".

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
1. Selecciona **Repositorio de plantilla**. ![Casilla de verificación para convertir un repositorio en una plantilla](/assets/images/help/repository/template-repository-checkbox.png)
