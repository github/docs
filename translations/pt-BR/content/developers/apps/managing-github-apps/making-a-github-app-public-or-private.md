---
title: Tornar um aplicativo do GitHub público ou privado
intro: '{% data reusables.shortdesc.making-a-github-app-public-or-private %}'
redirect_from:
  - /apps/building-integrations/setting-up-and-registering-github-apps/about-installation-options-for-github-apps
  - /apps/building-github-apps/installation-options-for-github-apps
  - /apps/building-integrations/managing-github-apps/changing-a-github-app-s-installation-option
  - /apps/managing-github-apps/changing-a-github-app-s-installation-option
  - /apps/managing-github-apps/making-a-github-app-public-or-private
  - /developers/apps/making-a-github-app-public-or-private
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - GitHub Apps
shortTitle: Gerenciar visibilidade do aplicativo
---

Para obter informações de autenticação, consulte "[Efetuando autenticação com aplicativos GitHub](/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-an-installation)".

## Fluxo público de instalação

Os fluxos de instalação pública têm uma página inicial para permitir que outras pessoas, além do proprietário do aplicativo, instalem o aplicativo nos seus repositórios. Este link é fornecido no campo "Link público" ao configurar seu aplicativo GitHub. Para obter mais informações, consulte "[Instalando aplicativos GitHub](/apps/installing-github-apps/)".

## Fluxo privado de instalação

Os fluxos privados de instalação permitem que somente o proprietário de um aplicativo GitHub a instale. Informações limitadas sobre o GitHub App continuarão a existir em uma página pública, mas o botão **Instalar** só estará disponível para administradores da organização ou para a conta pessoal se o aplicativo GitHub for propriedade de uma conta individual. {% ifversion fpt or ghes > 3.1 or ghae or ghec %}Privado {% else %}Privado (também conhecido como interno){% endif %} Os aplicativos GitHub só podem ser instalados na conta de usuário ou de organização do proprietário.

## Alterar quem pode instalar seu aplicativo GitHub

Para alterar quem pode instalar o aplicativo GitHub:

{% data reusables.user-settings.access_settings %}
{% data reusables.user-settings.developer_settings %}
{% data reusables.user-settings.github_apps %}
3. Selecione o aplicativo GitHub cuja opção de instalação você deseja alterar. ![Seleção de aplicativo](/assets/images/github-apps/github_apps_select-app.png)
{% data reusables.user-settings.github_apps_advanced %}
5. Dependendo da opção de instalação do seu aplicativo GitHub, clique em **Tornar público** ou **Tornar {% ifversion fpt or ghes > 3.1 or ghae or ghec %}privado{% else %}interno{% endif %}**. ![Botão para alterar a opção de instalação do seu aplicativo GitHub](/assets/images/github-apps/github_apps_make_public.png)
6. Dependendo da opção de instalação do seu aplicativo GitHub, clique **Sim, torne público este aplicativo GitHub** ou **Sim, torne este aplicativo GitHub {% ifversion fpt or ghes < 3.2 or ghec %}interno{% else %}interno{% endif %}**. ![Botão para confirmar a mudança de sua opção de instalação](/assets/images/github-apps/github_apps_confirm_installation_option.png)
