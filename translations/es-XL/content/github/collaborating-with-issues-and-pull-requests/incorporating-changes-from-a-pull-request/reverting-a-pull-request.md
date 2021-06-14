---
title: Revertir una solicitud de extracción
intro: Puedes revertir una solicitud de extracción después de que se haya fusionado con la rama ascendente.
redirect_from:
  - /articles/reverting-a-pull-request
  - /github/collaborating-with-issues-and-pull-requests/reverting-a-pull-request
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Pull requests
---
### Acerca de revertir una solicitud de extraccción

Revertir una solicitud de extracción en {% data variables.product.product_name %} genera una nueva solicitud de extracción que contiene una reversión de la confirmación de fusión de la solicitud de extracción fusionada original.

### Revertir una solicitud de extracción

{% note %}

**Nota:** Podrías tener que revertir las confirmaciones individuales en tu solicitud de extracción si cualquiera de los siguientes casos aplica.

- Revertir la solicitud de extracción provoca conflictos de fusión
- La solicitud de extracción original no se fusionó originalmente en {% data variables.product.product_name %}. Por ejemplo, alguien pudo haber fusionado la solicitud de extracción utilizando una fusión adelantada en la línea de comandos.

Para obtener más información acerca de utilizar Git para revertir las confirmaciones individuales manualmente, consulta la sección [Revertir con Git](https://git-scm.com/docs/git-revert.html) en la documentación de Git.

{% endnote %}

{% data reusables.repositories.sidebar-pr %}
2. En la lista de "Pull Requests" (Solicitudes de extracción), haz clic en la solicitud de extracción que quieras revertir.
3. Cerca de la parte de abajo de la solicitud de extracción, haz clic en **Revert** (Revertir). ![Enlace Revert pull request (Revertir solicitud de extracción)](/assets/images/help/pull_requests/revert-pull-request-link.png)
4. Fusionar la solicitud de extracción resultante. Para obtener más información, consulta "[Fusionar una solicitud de extracción](/github/collaborating-with-issues-and-pull-requests/merging-a-pull-request)".
