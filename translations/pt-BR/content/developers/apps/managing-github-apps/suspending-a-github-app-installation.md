---
title: Suspender uma instalação do aplicativo GitHub
intro: '{% data reusables.shortdesc.suspending_a_github_app %}'
redirect_from:
  - /apps/managing-github-apps/suspending-a-github-app-installation
  - /developers/apps/suspending-a-github-app-installation
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
topics:
  - GitHub Apps
shortTitle: Suspender instalação do aplicativo
---

## Suspender um aplicativo GitHub

O integrador que possui e mantém um aplicativo GitHub, também chamado de proprietário do aplicativo GitHub, pode suspender ou cancelar a suspensão de uma instalação do aplicativo GitHub usando pontos de extremidade da API REST com JWT. Para obter mais informações, consulte a [API REST do aplicativo GitHub](/rest/reference/apps).

Pessoas que instalaram um aplicativo GitHub, também chamado de proprietários de instalação, só podem suspender ou cancelar a suspensão de um aplicativo GitHub através das configurações de instalação do aplicativo. Os proprietários de instalação não podem usar a API para suspender ou cancelar a suspensão da instalação do aplicativo.

Se uma instalação foi suspensa pelo proprietário de {% data variables.product.prodname_github_app %}, os proprietários da instalação não poderão cancelar a suspensão das suas instalações de {% data variables.product.prodname_github_app %}. No entanto, os proprietários de instalação podem alterar outras configurações, como a seleção de repositório, enquanto o aplicativo está suspenso.

{% data reusables.user-settings.access_settings %}
{% data reusables.user-settings.developer_settings %}
{% data reusables.user-settings.github_apps %}
1. Selecione o {% data variables.product.prodname_github_app %} que você deseja suspender. ![Seleção de aplicativo](/assets/images/github-apps/github_apps_select-app.png)
{% data reusables.user-settings.github_apps_advanced %}
6. Ao lado das configurações de suspensão para a instalação, clique em **Suspender** ou **Cancelar a suspensão**. ![Suspender um aplicativo GitHub](/assets/images/github-apps/suspend-a-github-app.png)
