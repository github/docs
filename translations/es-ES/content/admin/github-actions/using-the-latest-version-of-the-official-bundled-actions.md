---
title: Utilizar la última versión de las acciones empaquetadas oficiales
intro: 'Puedes actualizar las acciones que vienen en paquete para tu empresa o utilizarlas directamente desde {% data variables.product.prodname_dotcom_the_website %}.'
versions:
  enterprise-server: '>=2.22'
  github-ae: next
topics:
  - Enterprise
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}
{% data reusables.actions.ae-beta %}

Tu instancia empresarial incluye varias acciones integradas que puedes utilizar en tus flujos de trabajo. Para obtener más información sobre las acciones en paquete, consulta la sección "[Acciones oficiales que vienen en paquete con tu instancia empresarial](/admin/github-actions/about-using-actions-in-your-enterprise#official-actions-bundled-with-your-enterprise-instance)".

Estas acciones que vienen en paquete son una captura de un punto en el tiempo de las acciones oficiales que se encuentran en https://github.com/actions, así que podría haber versiones nuevas disponibles de estas. Puedes utilizar la herramienta de `actions-sync` para actualizar estas acciones o puedes configurar {% data variables.product.prodname_github_connect %} para permitir el acceso a las últimas acciones en {% data variables.product.prodname_dotcom_the_website %}. Estas opciones se describen en las siguietnes secciones.

### Utilizar `actions-sync` para actualizar las acciones que vienen en paquete

Para actualizar las acciones que vienen en paquete, puedes utilizar la herramienta `actions-sync` para actualizar esta captura. Para obtener más información sobre cómo utilizar `actions-sync`, consulta la sección "[Sincronizar manualmente las acciones desde {% data variables.product.prodname_dotcom_the_website %}](/admin/github-actions/manually-syncing-actions-from-githubcom)".

### Utilizar {% data variables.product.prodname_github_connect %} para acceder a las últimas acciones

Puedes utilizar {% data variables.product.prodname_github_connect %} para permitir que {% data variables.product.product_name %} utilice acciones desde {% data variables.product.prodname_dotcom_the_website %}. Para obtener más información, consulta la sección "[Habilitar el acceso automático a las acciones de {% data variables.product.prodname_dotcom_the_website %} utilizando{% data variables.product.prodname_github_connect %}](/admin/github-actions/enabling-automatic-access-to-githubcom-actions-using-github-connect)".

Una vez que se configura {% data variables.product.prodname_github_connect %}, puedes utilizar la versión más reciente de una acción si borras su repositorio local en la organización `actions` en tu instancia. Por ejemplo, si tu instancia empresarial está utilizando la acción `actions/checkout@v1` y necesitas utilizar `actions/checkout@v2`, el cual no está disponible en esta, lleva a cabo los siguietnes pasos para que puedas utilizar la acción más reciente de `checkout` desde {% data variables.product.prodname_dotcom_the_website %}:

1. Predeterminadamente, los administradores de sitio no son los propietarios de la organización de acciones incluidas. Para obtener el acceso requerido para borrar el repositorio `checkout`, utiliza el comando `ghe-org-admin-promote` para promover a un usuario como propietario de la organización empaquetada `actions`. Para obtener más información, consulta la sección "[Acceder al shell administrativo (SSH)](/admin/configuration/accessing-the-administrative-shell-ssh)" y "[`ghe-org-admin-promote`](/admin/configuration/command-line-utilities#ghe-org-admin-promote)". Por ejemplo:

   ```shell
   $ ghe-org-admin-promote -u octocat -o actions
    Do you want to give organization admin privileges for actions to octocat? (y/N) y
    Making octocat an admin of actions
     --> Adding octocat as an admin of actions
     --> octocat is now an admin of the actions organization
     --> Done.
   ```
1. En tu instancia de {% data variables.product.product_name %}, borra el repositorio `checkout` dentro de la organización `actions`. Para obtener más información sobre cómo borrar un repositorio, consulta la sección "[Borrar un repositorio](/github/administering-a-repository/deleting-a-repository)".
1. Se recomienda que salgas de la organización `actions` una vez que ya no requieras acceso administrativo. Para obtener más información, consulta "[Cómo eliminarte de una organización](/github/setting-up-and-managing-your-github-user-account/removing-yourself-from-an-organization)".
1. Configura el YAML de tu flujo de trabajo para que utilice `actions/checkout@v2`.
1. Cada vez que se ejecute tu flujo de trabajo, el ejecutor utilizará la versión `v2` de `actions/checkout` desde {% data variables.product.prodname_dotcom_the_website %}.
