---
title: Administrar la visibilidad de tus proyectos (beta)
intro: Puedes controlar quién puede ver tus proyectos.
allowTitleToDifferFromFilename: true
miniTocMaxHeadingLevel: 3
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Projects
  - Organizations
---

{% data reusables.projects.projects-beta %}

## Acerca de la visibilidad de los proyectos

Los proyectos (beta) pueden ser públicos o privados. En el caso de los proyectos públicos, toda persona con acceso a internet puede verlos. Para el caso de los proyectos privados, solo podrán verlos los usuarios a los que se les otorgó por lo menos acceso de lectura.

Solo se afecta la visibilidad del proyecto; para ver un elemento en el proyecto, alguien debe tener los permisos requeridos para el repositorio al cual pertenece este. Si tu proyecto incluye elementos de un repositorio privado, las personas que no sean colaboradores en el repositorio no podrán ver elementos de este.

![Proyecto con un elemento oculto](/assets/images/help/projects/hidden-items.png)

Solo los administradores de proyecto pueden controlar la visibilidad del mismo.

En los proyectos privados que pertenecen a las organizaciones, los avatares de los usuarios que actualmente hacen actualizaciones al mismo se muestran en su IU.

Los administradores de proyecto también pueden administrar el acceso administrativo y de escritura al mismo, así como controlar el acceso para los usuarios individuales. Para obtener más información, consulta la sección "[Administrar el acceso a los proyectos](/issues/trying-out-the-new-projects-experience/managing-access-to-projects)".

## Cambiar la visibilidad de proyecto

{% data reusables.projects.project-settings %}
1. Debajo de **Visibilidad**, selecciona **Privada** o **Pública**.
