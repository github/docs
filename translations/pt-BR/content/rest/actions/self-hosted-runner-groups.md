---
title: Grupos de runner auto-hospedados
intro: A API dos Grupos de Runners auto-hospedados permite que você gerencie grupos de runners auto-hospedados.
topics:
  - API
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
ms.openlocfilehash: ca08d05414764250a11dc94bac763f5aa56060be
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147064367'
---
## Sobre a API dos Grupos de Executores Auto-hospedados

A API dos Grupos de Executores Auto-hospedados permite gerenciar grupos de executores auto-hospedados. Para obter mais informações, confira "[Como gerenciar o acesso a executores auto-hospedados usando grupos](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups)".

{% data reusables.actions.actions-authentication %} Os {% data variables.product.prodname_github_apps %} precisam ter a permissão `administration` em repositórios ou a permissão `organization_self_hosted_runners` em organizações. Os usuários autenticados precisam ter acesso de administrador em repositórios ou em organizações ou o escopo `manage_runners:enterprise` para que as empresas usem essa API.
