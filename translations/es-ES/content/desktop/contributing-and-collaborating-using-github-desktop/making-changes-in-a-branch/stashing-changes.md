---
title: Acumular cambios
intro: Puedes guardar tus cambios temporalmente sin confirmarlos en una rama si los acumulas.
versions:
  free-pro-team: '*'
redirect_from:
  - /desktop/contributing-and-collaborating-using-github-desktop/stashing-changes
---

### Acerca de los cambios acumulados

Para aplicar tus cambios a tu repositorio, debes guardar los archivos y luego confirmar los cambios en una rama. Si guardaste los cambios que aún no estás listo para confirmar, puedes acumularlos para después. Cuando acumulas cambios, estos se eliminan temporalmente de los archivos y puedes elegir restablecerlos o descartarlos posteriormente. Con {% data variables.product.prodname_desktop %}, solo puedes acumular un conjunto de cambios a la vez. Si utilizas {% data variables.product.prodname_desktop %} para acumular cambios, todos los cambios sin guardar se acumularán. Después de que acumulas cambios en una rama, puedes cambiar de rama con seguridad o hacer otros cambios a tu rama actual.

Si utilizas {% data variables.product.prodname_desktop %} para cambiar de rama mientras guardaste tus cambios, pero no los confirmaste, {% data variables.product.prodname_desktop %} te pedirá que acumules los cambios o que los lleves a otra rama. Para obtener más información, consulta la sección "[Administrar ramas](/desktop/contributing-to-projects/managing-branches#switching-between-branches)".

### Acumular cambios

{% data reusables.desktop.click-changed-files-header %}
{% data reusables.desktop.click-stash-all-changes %}

### Restablecer los cambios acumulados

{% data reusables.desktop.navigate-to-stashed-changes %}
{% data reusables.desktop.click-stashed-changes %}
{% data reusables.desktop.click-restore %}

### Descartar los cambios acumulados

{% data reusables.desktop.navigate-to-stashed-changes %}
{% data reusables.desktop.click-stashed-changes %}
{% data reusables.desktop.click-discard %}
