---
title: Archivar repositorios
intro: Puedes archivar un repositorio para que sea de solo lectura para todos los usuarios e indicar que ya no necesita mantenerse activamente. También puedes desarchivar los repositorios que han sido archivados.
redirect_from:
  - /articles/archiving-repositories
  - /github/creating-cloning-and-archiving-repositories/archiving-repositories
  - /articles/about-archiving-repositories
  - /github/creating-cloning-and-archiving-repositories/about-archiving-repositories
  - /github/creating-cloning-and-archiving-repositories/archiving-a-github-repository/about-archiving-repositories
  - /github/creating-cloning-and-archiving-repositories/archiving-a-github-repository/archiving-repositories
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
topics:
  - Repositories
---

## Acerca del archivamiento de repositorios

{% ifversion fpt %}
{% note %}

**Nota:** Si tienes un plan de facturación por repositorio heredado, aún así se te cobrará por tu repositorio archivado. Si no quieres que se te cobre por un repositorio archivado, debes actualizar a un producto nuevo. Para obtener más información, consulta "Productos de [{% data variables.product.prodname_dotcom %}](/articles/github-s-products)".

{% endnote %}
{% endif %}

{% data reusables.repositories.archiving-repositories-recommendation %}

Una vez que se archiva un repositorio, no puedes agregar ni eliminar colaboradores ni equipos. Solo los colaboradores con acceso al repositorio pueden bifurcar o iniciar tu proyecto.

Cuando se archiva un repositorio, sus propuestas, solicitudes de cambios, còdigo, etiquetas, hitos, proyectos, wiki, lanzamientos, confirmaciones, etiquetas, ramas, reacciones, alertas de escaneo de còdigo y comentarios se hacen de solo lectura. Para realizar cambios en un repositorio archivado, primero debes desarchivar el repositorio.

Puedes buscar repositorios archivados. Para obtener más información, consulta "[Buscar repositorios](/search-github/searching-on-github/searching-for-repositories/#search-based-on-whether-a-repository-is-archived)." Para obtener más información, consulta "[Buscar repositorios](/articles/searching-for-repositories/#search-based-on-whether-a-repository-is-archived)". Para obtener más información, consulta "[Buscar propuestas y solicitudes de extracción](/search-github/searching-on-github/searching-issues-and-pull-requests/#search-based-on-whether-a-repository-is-archived)".

## Archivar un repositorio

{% data reusables.repositories.archiving-repositories-recommendation %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
3. En "Danger Zone" (Zona de peligro), haz clic en **Archive this repository** (Archivar este repositorio) o **Unarchive this repository** (Desarchivar este repositorio. este repositorio). ![Botón Archive this repository (Archivar este repositorio)](/assets/images/help/repository/archive-repository.png)
4. Lee las advertencias.
5. Escribe el nombre del repositorio que deseas archivar o desarchivar. ![Advertencias para archivar el repositorio](/assets/images/help/repository/archive-repository-warnings.png)
6. Haz clic en **I understand the consequences, archive this repository** (Comprendo las consecuencias, archivar este repositorio).
