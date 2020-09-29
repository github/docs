---
title: Suspender uma instalação do aplicativo GitHub
intro: '{% data reusables.shortdesc.suspending_a_github_app %}'
redirect_from:
  - /apps/managing-github-apps/suspending-a-github-app-installation
versions:
  free-pro-team: '*'
---

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.21" %}
{% note %}

**Observação:** {% data reusables.pre-release-program.suspend-installation-beta %}

{% endnote %}
{% endif %}

### Suspender um aplicativo GitHub

Para suspender um {% data variables.product.prodname_github_app %}, você deve ser proprietário de uma conta ou ter permissões de administrador no repositório ou organização em que o aplicativo que você deseja suspender está instalado.

Você também pode suspender e cancelar instalações do {% data variables.product.prodname_github_app %} usando a API REST. Para obter mais informações, consulte a [API REST do aplicativo GitHub](/v3/apps/).

{% data reusables.user-settings.access_settings %}
{% data reusables.user-settings.developer_settings %}
{% data reusables.user-settings.github_apps %}
4. Selecione o {% data variables.product.prodname_github_app %} que você deseja suspender. ![Seleção de aplicativo](/assets/images/github-apps/github_apps_select-app.png)
{% data reusables.user-settings.github_apps_advanced %}
6. Ao lado das configurações de suspensão para a instalação, clique em **Suspender** ou **Cancelar a suspensão**. ![Suspender um aplicativo GitHub](/assets/images/github-apps/suspend-a-github-app.png)
