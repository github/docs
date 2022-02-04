#### Flujos de trabajo en repositorios bifurcados

Los flujos de trabajo no se ejecutan predeterminadamente en los repositorios bifurcados. Debes habilitar las Acciones de GitHub en la pestaña **Actions (Acciones)** del repositorio bifurcado.

{% data reusables.actions.forked-secrets %} El `GITHUB_TOKEN` tiene permisos de solo lectura en los repositorios bifurcados. Para obtener más información, consulta "[Autenticar con el GITHUB_TOKEN](/actions/configuring-and-managing-workflows/authenticating-with-the-github_token)".

#### Eventos de solicitud de extracción para repositorios bifurcados

En el caso de las solicitudes de cambios desde un repositorio bifurcado hacia un repositorio base, {% data variables.product.product_name %} enviará los eventos `pull_request`, `issue_comment`, `pull_request_review_comment`, `pull_request_review` y `pull_request_target` al repositorio base. No existirán eventos de solicitudes de cambio en el repositorio bifurcado.

{% ifversion fpt or ghec %}
Cuando un contribuyente primerizo emite una solicitud de cambios a un repositorio público, podría necesitarse que un mantenedor con acceso de escritura apruebe los flujos de trabajo que se están ejecutando en la solicitud de cambios. Para obtener más información, consulta la sección "[Aprobar flujos de trabajo desde bifurcaciones públicas](/actions/managing-workflow-runs/approving-workflow-runs-from-public-forks)".
{% endif %}

{% note %}

**Nota:** los flujos de trabajo no se ejecutan en repositorios base privados cuando abres una solicitud de extracción desde un repositorio bifurcado.

{% endnote %}

{% note %}

**Nota:** Los flujos de trabajo que se activan mediante las solicitudes de cambios del {% data variables.product.prodname_dependabot %} se tratan como si fueran de un repositorio bifurcado y también están sujetas a estas restricciones.

{% endnote %}
