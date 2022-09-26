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
shortTitle: Manage app visibility
ms.openlocfilehash: f276be130be76f110d4c4ad3c0bfa3bff708aad6
ms.sourcegitcommit: 1309b46201604c190c63bfee47dce559003899bf
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/10/2022
ms.locfileid: '147065887'
---
Para obter informações de autenticação, confira "[Autenticação com Aplicativos do GitHub](/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-an-installation)".

## Fluxo público de instalação

Os fluxos de instalação pública têm uma página inicial para permitir que outras pessoas, além do proprietário do aplicativo, instalem o aplicativo nos seus repositórios. Este link é fornecido no campo "Link público" ao configurar seu aplicativo GitHub. Para obter mais informações, confira "[Como instalar Aplicativos do GitHub](/apps/installing-github-apps/)".

## Fluxo privado de instalação

Os fluxos privados de instalação permitem que somente o proprietário de um aplicativo GitHub a instale. Ainda haverá informações limitadas sobre o Aplicativo do GitHub em uma página pública, mas o botão **Instalar** só estará disponível para os administradores da organização ou para a conta pessoal se o Aplicativo do GitHub pertencer a uma conta individual. Aplicativos GitHub particulares só podem ser instalados na conta do usuário ou da organização do proprietário.

## Alterar quem pode instalar seu aplicativo GitHub

Para alterar quem pode instalar o aplicativo GitHub:

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.developer_settings %} {% data reusables.user-settings.github_apps %}
3. Selecione o aplicativo GitHub cuja opção de instalação você deseja alterar.
![Seleção do aplicativo](/assets/images/github-apps/github_apps_select-app.png) {% data reusables.user-settings.github_apps_advanced %}
5. Dependendo da opção de instalação do seu aplicativo GitHub, clique em **Tornar público** ou **Tornar particular**.
![Botão usado para alterar a opção de instalação do Aplicativo do GitHub](/assets/images/github-apps/github_apps_make_public.png)
6. Dependendo da opção de instalação do aplicativo GitHub, clique em **Sim, tornar este aplicativo GitHub público** ou **Sim, tornar este aplicativo GitHub {% ifversion fpt or ghec %}interno{% else %}particular{% endif %}** .
![Botão usado para confirmar a alteração da opção de instalação](/assets/images/github-apps/github_apps_confirm_installation_option.png)
