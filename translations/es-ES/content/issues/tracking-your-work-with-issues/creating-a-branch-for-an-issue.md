---
title: Crear una rama para trabajar en una propuesta
intro: Puedes crear una rama para trabajar en una propuesta directamente desde la página de propuestas e iniciar de inmediato.
versions:
  fpt: '*'
  ghes: '>=3.5'
  ghae: issue-6234
  ghec: '*'
allowTitleToDifferFromFilename: true
topics:
  - Issues
shortTitle: Crear una rama para una propuesta
---

{% note %}

**Nota:** La capacidad de crear una rama para una propuesta se encuentra actualmente en beta y está sujeta a cambios.

{% endnote %}

## Acerca de las ramas conectadas a una propuesta
Las ramas conectadas a una propuesta se muestran bajo la sección de "Desarrollo" en la barra lateral de una propuesta. Cuando creas una solicitud de cambios para alguna de estas ramas, esta se enlaza automáticamente a la propuesta. La conexión con esa rama se elimina y solo se muestra la solicitud de cambios en la sección de "Desarrollo". Para obtener más información, consulta la sección "[Vincular una solicitud de extracción a un informe de problemas](/issues/tracking-your-work-with-issues/linking-a-pull-request-to-an-issue)".

## Crear una rama para una propuesta

Cualquiera con permisos de escritura en un repositorio puede crear una rama para una propuesta. Puedes enlazar ramas múltiples para una propuesta.

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-issues %}
3. En la lista de propuestas, haz clic en aquella para la cuál t gustaría crear una rama.
4. En la barra lateral derecha, debajo de "Desarrollo", haz clic en **Crear una rama**. Si la propuesta ya tiene una rama o solicitud de cambios enlazada, haz cli en {% octicon "gear" aria-label="The Gear icon" %} y, en la parte inferior del menú desplegable, haz clic en **Crear una rama**. ![Captura de pantalla que muestra la opción de crear rama en la barra lateral](/assets/images/help/issues/create-a-branch.png)
5. Predeterminadamente, se creará la rama nueva en el repositorio actual de la rama predeterminada. Edita el nombre de rama y los detalles como se requiera en el diálogo "Crear una rama para esta propuesta". ![Captura de pantalla que muestra las opciones de diálogo de crear una rama](/assets/images/help/issues/create-a-branch-options.png)
6. Elige si quieres trabajar en la rama localmente o abrirla en GitHub Desktop.
7. Cuando estés listo para crear la rama, haz clic en **Crear rama**.
