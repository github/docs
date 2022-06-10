---
title: Modificar una GitHub App
intro: '{% data reusables.shortdesc.modifying_github_apps %}'
redirect_from:
  - /apps/building-integrations/managing-github-apps/modifying-a-github-app
  - /apps/managing-github-apps/modifying-a-github-app
  - /developers/apps/modifying-a-github-app
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - GitHub Apps
---

{% data reusables.user-settings.access_settings %}
{% data reusables.user-settings.developer_settings %}
{% data reusables.user-settings.github_apps %}
{% data reusables.user-settings.modify_github_app %}
5. En "Información básica", modifica la información que quieras cambiar para la GitHub App. ![Basic information section for your GitHub App](/assets/images/github-apps/github_apps_basic_information.png){% ifversion device-flow-is-opt-in %}
1. Si tu GitHub App utilizará el flujo de dispositivos para identificar y autorizar usuarios, haz clic en **Habilitar flujo de dispositivos**. Para obtener más información sobre el flujo de dispositivos, consulta la sección "[Autorizar las Apps de OAuth](/developers/apps/building-oauth-apps/authorizing-oauth-apps#device-flow)". ![Screenshot showing field for enabling device flow](/assets/images/oauth-apps/enable-device-flow.png){% endif %}
6. Haz clic en **Guardar cambios**. ![Botón para guardar los cambios en tu GitHub App](/assets/images/github-apps/github_apps_save_changes.png)
