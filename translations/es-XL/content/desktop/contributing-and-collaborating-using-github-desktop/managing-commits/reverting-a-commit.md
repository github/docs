---
title: Revertir una confirmación
intro: Puedes revertir una confirmación específica para eliminar los cambios de tu rama.
redirect_from:
  - /desktop/contributing-to-projects/reverting-a-commit
  - /desktop/contributing-and-collaborating-using-github-desktop/reverting-a-commit
versions:
  free-pro-team: '*'
---
Cuando reviertes la confirmación anterior, la reversión también es una confirmación. La confirmación original también permanece en el historial del repositorio.

{% tip %}

**Sugerencia:** Cuando reviertes múltiples confirmaciones, es mejor revertirlas desde la más nueva hasta la más antigua. Si reviertes confirmaciones en un orden diferente, es posible que se produzcan conflictos de fusión.

{% endtip %}

{% mac %}

{% data reusables.desktop.history-tab %}
{% data reusables.desktop.revert-commit %}
  ![La opción Revert (Revertir) sobre la vista diferente](/assets/images/help/desktop/commit-revert-mac.png)

{% endmac %}

{% windows %}

{% data reusables.desktop.history-tab %}
{% data reusables.desktop.revert-commit %}
  ![La opción Revert (Revertir) sobre la vista diferente](/assets/images/help/desktop/commit-revert-win.png)

{% endwindows %}
