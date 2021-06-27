---
title: Fusionar una solicitud de cambios automáticamente
intro: Puedes incrementar la velocidad de desarrollo si habilitas la fusión automática para una solicitud de cambios para que ésta se fusione automáticamente cuando todos los requisitos de fusión se cumplan.
product: '{% data reusables.gated-features.auto-merge %}'
versions:
  free-pro-team: '*'
  enterprise-server: '>=3.1'
  github-ae: '*'
topics:
  - Pull requests
redirect_from:
  - /github/collaborating-with-issues-and-pull-requests/incorporating-changes-from-a-pull-request/automatically-merging-a-pull-request
  - /github/collaborating-with-issues-and-pull-requests/automatically-merging-a-pull-request
---

### Acerca de la fusión automática

Si habilitas la fusión automática para una solicitud de cambios, ésta se fusionará automáticamente cuando se cumplan todas las revisiones requeridas y cuando todas las verificaciones de estado hayan pasado. La fusión automática te evita el esperar a que los requisitos se cumplan para que puedas continuar con otras tareas.

Antes de que utilices la fusión automática con una solicitud de cambios, esta característica se debe habilitar en el repositorio. Para obtener más información, consulta la sección "[Administrar la fusión automática para las solicitudes de cambios en tu repositorio](/github/administering-a-repository/managing-auto-merge-for-pull-requests-in-your-repository)".{% if currentVersion == "free-pro-team@latest" or currentVersion == "github-ae@next" or currentVersion ver_gt "enterprise-server@3.1" %}

Después de que habilitas la fusión automática para una solicitud de cambios, si alguien que no tiene permisos de escritura en el repositorio sube cambios nuevos a la rama principal o cambia la rama base de la solicitud de cambios, esta se inhabilitará. Por ejemplo, si un mantenedor habilita la fusión automática para una solicitud de cambios desde una bifurcación, esta se inhabilitará después de que el contribuyente suba cambios nuevos a la solicitud de cambios.{% endif %}

Puedes proporcionar retroalimentación sobre la fusión automática si [nos contactas](https://support.github.com/contact/feedback?category=prs-and-code-review&subject=Pull%20request%20auto-merge%20feedback).

### Habilitar la fusión automática

{% data reusables.pull_requests.auto-merge-requires-branch-protection %}

Las personas con permisos de escritura en un repositorio pueden habilitar la fusión automática para una solicitud de cambios.

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-pr %}
1. En la lista de "Solicitudes de cambios", da clic en aquella que quieras fusionar automáticamente.
1. Opcionalmente, para elegir un método de fusión, selecciona el menú desplegable de **Habilitar fusión automática** y da clic en el método de fusión. Para obtener más información, consulta "[Acerca de las fusiones de las solicitudes de extracción](/github/collaborating-with-issues-and-pull-requests/about-pull-request-merges)". ![Menú desplegable de "Habilitar fusión automática"](/assets/images/help/pull_requests/enable-auto-merge-drop-down.png)
1. Da clic en **Habilitar fusión automática**. ![Botón para habilitar la fusión automática](/assets/images/help/pull_requests/enable-auto-merge-button.png)
1. Si eliges los métodos de fusión o de fusión y combinación, teclea un mensaje de confirmación y descripción, y elige la dirección de correo electrónico con la que quieres hacer la confirmación de fusión. ![Campos para ingresar el mensaje de confirmación y descripción y elegir el correo electrónico para hacer la confirmación](/assets/images/help/pull_requests/pull-request-information-fields.png)
1. Da clic en **Confirmar fusión automática**. ![Botón para confirmar la fusión automática](/assets/images/help/pull_requests/confirm-auto-merge-button.png)

### Inhabilitar la fusión automática

Las personas con permisos de escritura en un repositorio y los autores de la solicitud de cambios pueden inhabilitar la fusión automática en estas solicitudes.

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-pr %}
1. En la lista de "Solicitudes de cambios", da clic en aquella en la que quieras inhabilitar la fusión automática.
1. En la caja de fusión, da clic en **Inhabilitar la fusión automática**. ![Botón para inhabilitar la fusión automática](/assets/images/help/pull_requests/disable-auto-merge-button.png)
