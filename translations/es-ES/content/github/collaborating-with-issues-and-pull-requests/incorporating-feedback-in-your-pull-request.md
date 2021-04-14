---
title: Incorporar comentarios en tu solicitud de extracción
intro: 'Cuando los revisores sugieran cambios en una solicitud de extracción, puedes incorporar automáticamente los cambios a la solicitud de extracción o abrir una propuesta para hacer un seguimiento de las sugerencias que están fuera de alcance.'
redirect_from:
  - /articles/incorporating-feedback-in-your-pull-request
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - solicitudes de extracción
---

### Aplicar modificaciones sugeridas

Otras personas pueden sugerir modificaciones específicas a tu solicitud de extracción. Puedes aplicar estas modificaciones sugeridas directamente en una solicitud de extracción si tienes acceso de escritura al repositorio. Si la solicitud de extracción se creó desde una bifurcación, y el autor permitió que los mantenedores realicen ediciones, también puedes aplicar las modificaciones sugeridas si tienes acceso de escritura al repositorio ascendente. Para obtener más información, consulte las secciones"[Comentar en una solicitud de extracción](/github/collaborating-with-issues-and-pull-requests/commenting-on-a-pull-request)" y "[Permitir cambios en una rama de solicitud de extracción creada desde una bifurcación](/github/collaborating-with-issues-and-pull-requests/allowing-changes-to-a-pull-request-branch-created-from-a-fork)".

Para incorporar rápidamente más de una de las modificaciones sugeridas en una confirmación simple, también puedes aplicar las modificaciones sugeridas como lote. Aplicar una modificación sugerida o un lote de modificaciones sugeridas genera una confirmación simple en la rama comparada de la solicitud de extracción.

Cada una de las personas que sugirieron alguna de las modificaciones incluidas en la confirmación será coautora de la confirmación. La persona que aplica las modificaciones sugeridas será coautora y persona que confirma el cambio de la confirmación. Para obtener más información acerca del término "persona que confirma el cambio en Git", consulta "[Principios de Git - Ver el historial de confirmaciones](https://git-scm.com/book/en/v2/Git-Basics-Viewing-the-Commit-History)" desde el sitio del libro _Pro Git_.

{% data reusables.repositories.sidebar-pr %}
2. En la lista de solicitudes de extracción, haz clic en la solicitud de extracción a la que quieras aplicarle una modificación sugerida.
3. Navega hasta la primera modificación sugerida que quieras aplicar.
    - Para aplicar la modificación en su propia confirmación, haz clic en **Commit suggestion** (Confirmar sugerencia). ![Botón Commit suggestion (Confirmar sugerencia)](/assets/images/help/pull_requests/commit-suggestion-button.png)
    - Para agregar la sugerencia a un lote de modificaciones, haz clic en **Add suggestion to batch** (Agregar sugerencia a un lote). Continúa agregando las modificaciones sugeridas que quieras incluir en una única confirmación. Cuando hayas terminado de agregar las modificaciones sugeridas, haz clic en **Commit suggestions** (Confirmar sugerencias). ![Botón Add suggestion to batch (Agregar sugerencia al lote)](/assets/images/help/pull_requests/add-suggestion-to-batch.png)
4. En el campo de mensaje de confirmación, escribe un mensaje de confirmación corto y significativo que describa la modificación que le hiciste al archivo o los archivos. ![Campo para mensaje de confirmación](/assets/images/help/pull_requests/suggested-change-commit-message-field.png)
5. Haz clic en **Commit changes.** (Confirmar modificaciones) ![Botón Commit changes (Confirmar cambios)](/assets/images/help/pull_requests/commit-changes-button.png)

### Volver a solicitar una revisión

{% data reusables.pull_requests.re-request-review %}

### Abrir una propuesta para una sugerencia fuera de alcance

Si alguna persona sugiere cambios para tu solicitud de extracción, y los cambios están fuera del alcance de la solicitud de extracción, puedes abrir una propuesta nueva para hacer el seguimiento de los comentarios. Para obtener más información, consulte la sección "[Abrir un informe de problemas desde un comentario](/github/managing-your-work-on-github/opening-an-issue-from-a-comment)".

### Leer más

- "[Acerca de las revisiones de solicitudes de extracción](/github/collaborating-with-issues-and-pull-requests/about-pull-request-reviews)"
- "[Revisar los cambios propuestos en una solicitud de extracción](/github/collaborating-with-issues-and-pull-requests/reviewing-proposed-changes-in-a-pull-request)"
- "[Comentar en una solicitud de extracción](/github/collaborating-with-issues-and-pull-requests/commenting-on-a-pull-request)"
- "[Solicitar una revisión de solicitud de extracción](/github/collaborating-with-issues-and-pull-requests/requesting-a-pull-request-review)"
- "[Abrir un informe de problemas desde un comentario](/github/managing-your-work-on-github/opening-an-issue-from-a-comment)"
