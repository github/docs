---
title: Aprobar ejecuciones de flujo de trabajo desde bifurcaciones públicas
intro: 'Cuando un contribuyente primerizo emite una solicitud de cambios a un repositorio público, un mantenedor con acceso de escritura debe aprobar cualquier ejecución de flujo de trabajo.'
product: '{% data reusables.gated-features.actions %}'
versions:
  free-pro-team: '*'
---

Las bifurcaciones de los repositorios públicos pueden emitir solicitudes de cambio que propongan cambios a los flujos de trabajo de las {% data variables.product.prodname_actions %} de un repositorio. Aunque los flujos de trabajo de las bifurcaciones no tienen acceso a datos sensibles tales como los secretos, pueden ser molestos para los mantenedores si se modifican para fines de abuso. Para ayudar a prevenir esto, los flujos de trabajo de las solicitudes de cambio no se ejecutan automáticamente si se reciben de contribuyentes primerizos y debe aprobarse primero.

Los mantenedores con acceso de escritura al repositorio pueden utilizar el siguiente procedimiento para revisar y ejecutar flujos de trabajo en solicitudes de cambio de contribuyentes primerizos. Después de que un contribuyente fusione por lo menos una solicitud de cambios en el repositorio de un proyecto, cualquier solicitud de cambios subsecuente de la bifurcación de dicho contribuyente ejecutará flujos de trabajo automáticamente.

{% data reusables.repositories.sidebar-pr %}
{% data reusables.repositories.choose-pr-review %}
{% data reusables.repositories.changed-files %}
1. Inspecciona los cambios propuestos en la solicitud de cambios y asegúrate de que estés de acuerdo para ejecutar tus flujos de trabajo en la rama de la solicitud de cambios. Debes estar especialmente alerta para notar cualquier cambio propuesto en el directorio `.github/workflows/` que afecte a los archivos de flujo de trabajo.
1. Si no estás de acuerdo en ejecutar los flujos de trabajo en la rama de la solicitud de cambios, regresa a la {% octicon "comment-discussion" aria-label="The discussion icon" %} pestaña de **Conversación** y, debajo de "Flujo(s) de trabajo esperando aprobación", haz clic en **Aprobar y ejecutar**.

   ![Aprueba y ejecuta flujos de trabajo](/assets/images/help/pull_requests/actions-approve-and-run-workflows-from-fork.png)
