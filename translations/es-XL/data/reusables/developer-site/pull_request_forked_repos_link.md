##### Eventos de solicitud de extracción para repositorios bifurcados

{% note %}

**Nota:** los flujos de trabajo no se ejecutan en repositorios base privados cuando abres una solicitud de extracción desde un repositorio bifurcado.

{% endnote %}

Cuando creas una solicitud de extracción desde un repositorio bifurcado al repositorio base, {% data variables.product.prodname_dotcom %} envía el evento `pull_request` al repositorio base y no se producen eventos de solicitud de extracción en el repositorio bifurcado.

Los flujos de trabajo no se ejecutan en repositorios bifurcados por defecto. Debes habilitar las Acciones de GitHub en la pestaña **Acciones** del repositorio bifurcado.

Los permisos para el `GITHUB_TOKEN` en los repositorios bifurcados son de solo lectura. Para más información, consulta la sección "[Autenticarse con el GITHUB_TOKEN](/actions/configuring-and-managing-workflows/authenticating-with-the-github_token)."
