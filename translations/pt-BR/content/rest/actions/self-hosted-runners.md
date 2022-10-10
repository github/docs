---
title: Executores auto-hospedados
intro: 'A API de Executores Auto-hospedados permite registrar, visualizar e excluir executores auto-hospedados.'
topics:
  - API
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
ms.openlocfilehash: 5fb3b281aab7120adeef45728ea0e4a16ae389a7
ms.sourcegitcommit: 1309b46201604c190c63bfee47dce559003899bf
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/10/2022
ms.locfileid: '147064375'
---
## Sobre a API de Executores Auto-hospedados

A API de Executores Auto-hospedados permite registrar, visualizar e excluir executores auto-hospedados. {% data reusables.actions.about-self-hosted-runners %} Para obter mais informações, confira "[Como hospedar seus executores](/actions/hosting-your-own-runners)".

{% data reusables.actions.actions-authentication %} Os {% data variables.product.prodname_github_apps %} precisam ter a permissão `administration` em repositórios e a permissão `organization_self_hosted_runners` em organizações. Os usuários autenticados precisam ter acesso de administrador em repositórios ou em organizações ou o escopo `manage_runners:enterprise` para que as empresas usem essa API.
