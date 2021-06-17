---
title: Cerrar una solicitud de extracción
intro: 'Puedes *cerrar* una solicitud de extracción sin [fusionarla en una rama ascendente] (/articles/merging-a-pull-request). Esto puede resultar útil si los cambios propuestos en la rama ya no son necesarios, o si se ha propuesto otra solución en otra rama.'
redirect_from:
  - /articles/closing-a-pull-request
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Pull requests
---

{% tip %}

**Sugerencia**: Si abriste una solicitud de extracción con la rama base equivocada, en lugar de cerrarla y abrir una nueva, puedes cambiar la rama base. Para obtener más información, consulta "[Cambiar la rama base de una solicuitud de extracción](/articles/changing-the-base-branch-of-a-pull-request)".

{% endtip %}

{% data reusables.repositories.sidebar-pr %}
2. En la lista "Pull Requests" (Solicitudes de extracción), haz clic en la solicitud de extracción que deseas cerrar.
3. En la parte inferior de la solicitud de extracción, debajo del cuadro de comentarios, haz clic en **Close pull request** (Cerrar solicitud de extracción). ![El botón para cerrar las solicitudes de extracción](/assets/images/help/pull_requests/pullrequest-closebutton.png)
4. De forma opcional, [elimina la rama](/articles/deleting-unused-branches). Esto mantiene ordenado el listado de ramas en tu repositorio.
