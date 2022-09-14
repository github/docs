---
title: Membros da equipe
allowTitleToDifferFromFilename: true
shortTitle: Members
intro: ''
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: 9f2e4a1bee298bddf1d1712c78b2bac41f15c27e
ms.sourcegitcommit: 5b1461b419dbef60ae9dbdf8e905a4df30fc91b7
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/10/2022
ms.locfileid: '147875656'
---
## Sobre a API de Membros da Equipe

{% data reusables.organizations.team-api %}

{% ifversion fpt or ghes or ghec %} {% note %}

**Observação:** quando você tiver configurado a sincronização da equipe para uma equipe com o IdP (provedor de identidade) da sua organização, receberá uma mensagem de erro se tentar usar a API para fazer alterações na associação da equipe. Se você tiver acesso para administrar a associação do grupo em seu IdP, você pode administrar a associação da equipe do GitHub através do seu provedor de identidade, que adiciona e remove automaticamente os integrantes da equipe em uma organização. Para obter mais informações, confira "[Como sincronizar equipes entre o seu provedor de identidade e o GitHub](/enterprise-cloud@latest/organizations/managing-saml-single-sign-on-for-your-organization/managing-team-synchronization-for-your-organization)".

{% endnote %}

{% endif %}
