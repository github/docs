---
title: Acerca de las bifurcaciones
intro: Una bifurcación es una copia de un repositorio que administras. Las bifurcaciones te permiten realizar cambios a un proyecto sin afectar el repositorio original. Puedes recuperar actualizaciones o enviar cambios al repositorio original con solicitudes de extracción.
redirect_from:
  - /articles/about-forks
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

Bifurcar un repositorio es similar a copiar un repositorio, con dos diferencias principales:

* Puedes utilizar una solicitud de extracción para sugerir cambios desde las bifurcaciones de las cuales sea dueño tu usuario hacia el repositorio original, también conocido como el repositorio *ascendente*.
* Puedes llevar cambios desde tu repositorio ascendente a tu bifurcación local sincronizando tu bifurcación con el repositorio ascendente.

{% data reusables.repositories.you-can-fork %}

{% data reusables.repositories.desktop-fork %}

Eliminar una bifurcación no eliminará el repositorio ascendente original. Puedes hacer tantos cambios como quieras a tu bifurcación—añadir colaboradores, renombrar archivos, generar {% data variables.product.prodname_pages %}—sin que esto afecte el repositorio original.{% if currentVersion == "free-pro-team@latest" %} no puedes restablecer un repositorio bifurcado previamente eliminado. Para obtener más información, consulta "[Restaurar un repositorio eliminado](/articles/restoring-a-deleted-repository)".{% endif %}

En proyectos de código abierto, las bifurcaciones suelen iterar en ideas o cambios antes de que se presenten al repositorio ascendente. Cuando realizas cambios en la bifurcación que es propiedad de tu usuario y abres una solicitud de extracción que compara tu trabajo con el repositorio ascendente, puedes dar permiso a cualquiera con permiso de escritura en el repositorio ascendente para subir cambios a tu rama de solicitudes de extracción. Esto agiliza la colaboración permitiendo que los mantenedores del repositorio puedan hacer confirmaciones de cambios o ejecutar pruebas locales a tu rama de solicitud de extracción desde una bifurcación propiedad de un usuario antes de fusionarlas. No puedes otorgar permisos de escritura a una bifurcación que sea propiedad de una organización.

{% data reusables.repositories.private_forks_inherit_permissions %}

Si quieres crear un repositorio nuevo desde los contenidos de un repositorio existente, pero no quieres fusionar tus cambios de manera ascendente en el futuro, puedes duplicar el repositorio {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.17" %}o, si el repositorio es una plantilla, usar el repositorio como una plantilla{% endif %}. Para obtener más información, consulta "[Duplicar un repositorio](/articles/duplicating-a-repository)"{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.17" %} y [Crear un repositorio a partir de una plantilla](/articles/creating-a-repository-from-a-template)"{% endif %}.

### Leer más

- "[Acerca de los modelos de desarrollo colaborativo](/articles/about-collaborative-development-models)"
- "[Crear una solicitud de extracción desde una bifurcación](/articles/creating-a-pull-request-from-a-fork)"
- [Guías de código abierto](https://opensource.guide/){% if currentVersion == "free-pro-team@latest" %}
- [{% data variables.product.prodname_learning %}]({% data variables.product.prodname_learning_link %}){% endif %}
