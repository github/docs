---
title: Introdução ao GitHub Actions para GitHub AE
shortTitle: Get started
intro: 'Saiba mais sobre como configurar {% data variables.product.prodname_actions %} em {% data variables.product.prodname_ghe_managed %}.'
permissions: 'Enterprise owners can enable {% data variables.product.prodname_actions %} and configure enterprise settings.'
versions:
  ghae: '*'
type: how_to
topics:
  - Actions
  - Enterprise
redirect_from:
  - /admin/github-actions/getting-started-with-github-actions-for-github-ae
  - /admin/github-actions/using-github-actions-in-github-ae/getting-started-with-github-actions-for-github-ae
ms.openlocfilehash: c6d6767e95e6f5d27c311e46f5042c79717ab97e
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/10/2022
ms.locfileid: '145094974'
---
## Sobre o {% data variables.product.prodname_actions %} no {% data variables.product.prodname_ghe_managed %}

Por padrão, o {% data variables.product.prodname_actions %} está habilitado para o {% data variables.product.product_name %}. Para começar a usar {% data variables.product.prodname_actions %} na sua empresa, você deverá gerenciar as permissões de acesso para {% data variables.product.prodname_actions %} e adicionar executores para executar fluxos de trabalho.

{% data reusables.actions.introducing-enterprise %}

{% data reusables.actions.migrating-enterprise %}

## Gerenciar as permissões de acesso para {% data variables.product.prodname_actions %} na sua empres

Você pode usar políticas para gerenciar o acesso a {% data variables.product.prodname_actions %}. Para obter mais informações, confira "[Como impor políticas do GitHub Actions na sua empresa](/admin/github-actions/enforcing-github-actions-policies-for-your-enterprise)".

## Adicionar executores

Você deve configurar e hospedar suas próprias máquinas para executar trabalhos para sua empresa em {% data variables.product.product_name %}. {% data reusables.actions.about-self-hosted-runners %} Para obter mais informações, confira "[Introdução aos executores auto-hospedados para sua empresa](/admin/github-actions/getting-started-with-github-actions-for-your-enterprise/getting-started-with-self-hosted-runners-for-your-enterprise)" e "[Como hospedar seus executores](/actions/hosting-your-own-runners)".

{% data reusables.actions.general-security-hardening %}
