---
title: Administrar las sugerencias para actualizar las ramas de las solicitudes de cambios
intro: Puedes darles a los usuarios la capacidad de que siempre puedan actualizar una rama de una solicitud de cambios cuando no esté actualizada con la rama base.
versions:
  fpt: '*'
  ghes: '> 3.4'
  ghae: issue-6069
  ghec: '*'
topics:
  - Repositories
shortTitle: Administrar las actualizaciones de ramas
permissions: People with maintainer permissions can enable or disable the setting to suggest updating pull request branches.
---

## Acerca de las sugerencias para actualizar una rama de solicitud de cambios

Si habilitas el ajuste para que siempre sugiera actualizar ramas de solicitudes de cambios en tu repositorio, las personas con permisos de escritura siempre podrán actualizar la rama de encabezado de una solicitud de cambios, en la página de dicha solicitud, cuando no esté actualizada con la rama base. Cuando no se habilita, esta capacidad de actualización solo estará disponible cuando la rama base requiera que las ramas estén actualizadas antes de la fusión y la rama no esté actualizada. Para obtener más información, consulta la sección "[Mantener tu solicitud de cambios sincronizada con la rama base](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/keeping-your-pull-request-in-sync-with-the-base-branch)".

## Administrar las sugerencias para actualizar una rama de una solicitud de cambios

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
3. Debajo de "Solicitudes de cambio", selecciona o deselecciona **Siempre sugerir actualizar las ramas de las solicitudes de cambio**. ![Casilla de verificación para habilitar o inhabilitar la opción de siempre sugerir actualizar la rama](/assets/images/help/repository/always-suggest-updating-branches.png)
