---
title: Compartilhando ações e fluxos de trabalho com sua empresa
intro: É possível compartilhar uma ação ou fluxo de trabalho com a empresa sem publicar a ação ou fluxo de trabalho publicamente.
versions:
  feature: internal-actions
type: tutorial
topics:
  - Actions
  - Action development
shortTitle: Share with your enterprise
ms.openlocfilehash: 90541af9dfbb3c5f8ea2384de4a291336951434f
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/10/2022
ms.locfileid: '145065613'
---
## Sobre o acesso de {% data variables.product.prodname_actions %} a repositórios internos

Se sua organização pertence a uma conta corporativa, você pode compartilhar ações e fluxos de trabalho dentro de sua empresa, sem publicar a ação ou fluxo de trabalho publicamente, permitindo que os fluxos de trabalho de {% data variables.product.prodname_actions %} acessem um repositório interno que contém a ação ou o fluxo de trabalho. 

Todas as ações ou fluxos de trabalho armazenados no repositório interno podem ser usados em fluxos de trabalho definidos em outros repositórios privados e internos pertencentes à mesma organização ou por qualquer organização pertencente à empresa. As ações e fluxos de trabalho armazenados em repositórios internos não podem ser usados em repositórios públicos.

{% warning %}

**Aviso**: {% data reusables.actions.outside-collaborators-internal-actions %}

{% endwarning %}

## Compartilhando ações e fluxos de trabalho com sua empresa

1. Armazenar a ação ou fluxo de trabalho em um repositório interno. Para obter mais informações, confira "[Sobre os repositórios](/repositories/creating-and-managing-repositories/about-repositories#about-internal-repositories)".
1. Configure o repositório para permitir acesso a fluxos de trabalho em outros repositórios privados ou internos. Para obter mais informações, confira "[Como gerenciar as configurações do {% data variables.product.prodname_actions %} de um repositório](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-github-actions-settings-for-a-repository#allowing-access-to-components-in-an-internal-repository)".

## Leitura adicional

- "[Sobre as contas corporativas](/admin/overview/about-enterprise-accounts)"
- "[Reutilizando fluxos de trabalho](/actions/using-workflows/reusing-workflows)"
