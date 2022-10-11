---
title: Utilizar la última versión de las acciones empaquetadas oficiales
intro: 'Puedes actualizar las acciones que vienen en paquete para tu empresa o utilizarlas directamente desde {% data variables.product.prodname_dotcom_the_website %}.'
versions:
  ghes: '*'
  ghae: next
topics:
  - Enterprise
redirect_from:
  - /admin/github-actions/using-the-latest-version-of-the-official-bundled-actions
shortTitle: Utilizar las acciones empaquetadas más recientes
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

Tu instancia empresarial incluye varias acciones integradas que puedes utilizar en tus flujos de trabajo. Para obtener más información sobre las acciones en paquete, consulta la sección "[Acciones oficiales que vienen en paquete con tu instancia empresarial](/admin/github-actions/about-using-actions-in-your-enterprise#official-actions-bundled-with-your-enterprise-instance)".

Estas acciones que vienen en paquete son una captura de un punto en el tiempo de las acciones oficiales que se encuentran en https://github.com/actions, así que podría haber versiones nuevas disponibles de estas. Puedes utilizar la herramienta de `actions-sync` para actualizar estas acciones o puedes configurar {% data variables.product.prodname_github_connect %} para permitir el acceso a las últimas acciones en {% data variables.product.prodname_dotcom_the_website %}. Estas opciones se describen en las siguietnes secciones.

## Utilizar `actions-sync` para actualizar las acciones que vienen en paquete

Para actualizar las acciones que vienen en paquete, puedes utilizar la herramienta `actions-sync` para actualizar esta captura. Para obtener más información sobre cómo utilizar `actions-sync`, consulta la sección "[Sincronizar manualmente las acciones desde {% data variables.product.prodname_dotcom_the_website %}](/admin/github-actions/manually-syncing-actions-from-githubcom)".

## Utilizar {% data variables.product.prodname_github_connect %} para acceder a las últimas acciones

Puedes utilizar {% data variables.product.prodname_github_connect %} para permitir que {% data variables.product.product_name %} utilice acciones desde {% data variables.product.prodname_dotcom_the_website %}. Para obtener más información, consulta la sección "[Habilitar el acceso automático a las acciones de {% data variables.product.prodname_dotcom_the_website %} utilizando{% data variables.product.prodname_github_connect %}](/admin/github-actions/enabling-automatic-access-to-githubcom-actions-using-github-connect)".

Una vez que se configura {% data variables.product.prodname_github_connect %}, puedes utilizar la versión más reciente de una acción si borras su repositorio local en la organización `actions` en tu instancia. Por ejemplo, si tu instancia empresarial está utilizando la acción `actions/checkout@v1` y necesitas utilizar `actions/checkout@v2`, el cual no está disponible en esta, lleva a cabo los siguietnes pasos para que puedas utilizar la acción más reciente de `checkout` desde {% data variables.product.prodname_dotcom_the_website %}:

1. Desde una cuenta de propietario de empresa en {% data variables.product.product_name %}, navega al repositorio que quieras borrar desde la organización *actions* (en este `checkout` de ejemplo).
1. Predeterminadamente, los administradores de sitio no son propietarios de la organización integrada de *actions*. Para obtener el acceso requerido para borrar el repositorio `checkout`, debes utilizar las herramientas de administrador de sitio. Haz clic en {% octicon "rocket" aria-label="The rocket ship" %} en la esquina superior derecha de cualquier página de este repositorio. ![Ícono de cohete para acceder a las configuraciones de administrador del sitio](/assets/images/enterprise/site-admin-settings/access-new-settings.png)
1. Haz clic en {% octicon "shield-lock" %} **Seguridad** para ver el resumen de seguridad del repositorio. ![Asegurar el repositorio del repositorio](/assets/images/enterprise/site-admin-settings/access-repo-security-info.png)
1. Debajo de "Acceso privilegiado", haz clic en **Desbloquear**. ![Botón de desbloquear](/assets/images/enterprise/site-admin-settings/unlock-priviledged-repo-access.png)
1. Debajo de **Razón**, teclea una razón para desbloquear el repositorio y luego haz clic en **Desbloquear**. ![Diálogo de confirmación](/assets/images/enterprise/site-admin-settings/confirm-unlock-repo-access.png)
1. Ahora que el repositorio se desbloqueó, puedes salir de las páginas de administrador de sitio y borrar el repositorio dentro de la organización `actions`. En la parte superior de la página, haz clic en el nombre de repositorio, que en este ejemplo es **checkout**, para regresar a la página de resumen. ![Enlace de nombre de repositorio](/assets/images/enterprise/site-admin-settings/display-repository-admin-summary.png)
1. Debajo de "Información de repositorio", haz clic en **Ver código** para salir de las páginas de administrador del sitio y que se muestre el repositorio `checkout`.
1. Borra el repositorio `checkout` dentro de la organización `actions`. Para obtener más información sobre cómo borrar un repositorio, consulta la sección "[Borrar un repositorio](/github/administering-a-repository/deleting-a-repository)". ![Enlace de ver código](/assets/images/enterprise/site-admin-settings/exit-admin-page-for-repository.png)
1. Configura el YAML de tu flujo de trabajo para que utilice `actions/checkout@v2`.
1. Cada vez que se ejecute tu flujo de trabajo, el ejecutor utilizará la versión `v2` de `actions/checkout` desde {% data variables.product.prodname_dotcom_the_website %}.
