---
title: Como controlar o acesso a executores maiores
shortTitle: 'Control access to {% data variables.actions.hosted_runner %}s'
intro: 'Você pode usar políticas para limitar o acesso a {% data variables.actions.hosted_runner %}s que foram adicionados a uma organização ou a uma empresa.'
product: '{% data reusables.gated-features.hosted-runners %}'
miniTocMaxHeadingLevel: 3
versions:
  feature: actions-hosted-runners
type: tutorial
ms.openlocfilehash: d19e875ae8ee4556e635540f47625fa5a9874918
ms.sourcegitcommit: a35d85531445980b5f04d3fc70180a29dad37f89
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 12/01/2022
ms.locfileid: '148189902'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## Sobre os grupos de executores

{% data reusables.actions.about-runner-groups %} {% ifversion fpt %}Para obter mais informações, confira a documentação [{% data variables.product.prodname_ghe_cloud %}](/enterprise-cloud@latest/actions/using-github-hosted-runners/controlling-access-to-larger-runners).{% endif %}

### Grupo padrão para {% data variables.actions.hosted_runner %}s

Organizações e empresas com acesso a {% data variables.actions.hosted_runner %}s receberão automaticamente um grupo de executores padrão chamado "Executores Maiores Padrão" que inclui 4 executores de tamanhos variados. Os executores desse grupo são pré-configurados e estão prontos para uso imediato. Para usar os executores nesse grupo, você precisará adicionar o rótulo correspondente ao executor de sua escolha ao arquivo do fluxo de trabalho. Veja os rótulos na tabela abaixo. Para obter mais informações sobre como usar rótulos, confira "[Como executar trabalhos em seu executor](/actions/using-github-hosted-runners/using-larger-runners#running-jobs-on-your-runner)".


#### Executores padrão

|Descrição | Rotular | Image |
| ------- | ------- | ------ |
| Executor Ubuntu de 4 núcleos | `ubuntu-latest-4-cores` | Ubuntu – Mais recente |
| Executor Ubuntu de 8 núcleos | `ubuntu-latest-8-cores` | Ubuntu – Mais recente |
| Executor Ubuntu de 16 núcleos | `ubuntu-latest-16-cores` | Ubuntu – Mais recente |
| Executor Windows de 8 núcleos | `windows-latest-8-cores` | Windows Server – Mais recente |

O grupo padrão de {% data variables.actions.hosted_runner %} é criado no nível da entidade de cobrança. Se sua organização fizer parte de uma conta corporativa, o grupo será gerenciado no nível empresarial. Se a organização não for enquadrada como uma empresa, o grupo será gerenciado no nível da organização. 

Você não será cobrado por esses executores enquanto não usá-los em seus fluxos de trabalho. Depois que os executores forem usados, a cobrança funcionará como de costume. Para obter mais informações sobre cobrança, confira "[Como usar {% data variables.actions.hosted_runner %}s](/actions/using-github-hosted-runners/using-larger-runners#understanding-billing)".

O acesso padrão para um grupo de {% data variables.actions.hosted_runner %} no nível empresarial é definido para compartilhar automaticamente com todas as organizações da empresa, mas não com todos os repositórios. Os administradores da organização precisarão compartilhar o grupo padrão de {% data variables.actions.hosted_runner %} com cada repositório separadamente. Para grupos de {% data variables.actions.hosted_runner %} no nível da organização, o acesso padrão é definido para compartilhar automaticamente o grupo com todos os repositórios. Para obter mais informações sobre como alterar as políticas de acesso e como exibir o grupo padrão de {% data variables.actions.hosted_runner %}, confira "[Como alterar a política de acesso de um grupo de executores](#changing-the-access-policy-of-a-runner-group)".

{% ifversion ghec or ghes or ghae %}

## Como criar um grupo de executores para uma organização

{% data reusables.actions.hosted-runner-security-admonition %} {% data reusables.actions.creating-a-runner-group-for-an-organization %}

## Como criar um grupo de executores para uma empresa

{% data reusables.actions.hosted-runner-security-admonition %} {% data reusables.actions.creating-a-runner-group-for-an-enterprise %}

{% endif %}

{% data reusables.actions.section-using-unique-names-for-runner-groups %}

## Como alterar a política de acesso de um grupo de executores

{% data reusables.actions.hosted-runner-security-admonition %} {% data reusables.actions.changing-the-access-policy-of-a-runner-group %}

## Alterando o nome de um grupo de executores

{% data reusables.actions.changing-the-name-of-a-runner-group %}

{% ifversion ghec or ghes or ghae %}
## Como mover um executor para um grupo

{% data reusables.actions.moving-a-runner-to-a-group %}

## Como remover um grupo de executores

{% data reusables.actions.removing-a-runner-group %}

{% endif %}
