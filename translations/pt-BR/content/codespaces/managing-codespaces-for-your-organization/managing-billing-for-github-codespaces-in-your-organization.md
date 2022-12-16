---
title: Como gerenciar a cobrança do GitHub Codespaces na sua organização
shortTitle: Manage billing
intro: Você pode verificar o uso do {% data variables.product.prodname_github_codespaces %} e definir os limites de uso.
product: '{% data reusables.gated-features.codespaces %}'
permissions: To manage billing for {% data variables.product.prodname_github_codespaces %} for an organization, you must be an organization owner or a billing manager.
versions:
  fpt: '*'
  ghec: '*'
type: reference
topics:
- Codespaces
- Billing
redirect_from:
- /codespaces/managing-codespaces-for-your-organization/managing-billing-for-codespaces-in-your-organization
ms.openlocfilehash: 6cd1396cd0933999a99c334f00416b43f31ae249
ms.sourcegitcommit: 478f2931167988096ae6478a257f492ecaa11794
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/09/2022
ms.locfileid: "147865182"
---
## Visão geral

Para saber mais sobre os preços do {% data variables.product.prodname_github_codespaces %}, confira "[Preços do {% data variables.product.prodname_codespaces %}](/billing/managing-billing-for-github-codespaces/about-billing-for-codespaces#codespaces-pricing)".

{% data reusables.codespaces.codespaces-billing %}

- Como proprietário ou gerente de faturamento de uma organização, você pode gerenciar a cobrança do {% data variables.product.prodname_codespaces %} de sua organização: ["Sobre a cobrança do Codespaces"](/billing/managing-billing-for-github-codespaces/about-billing-for-codespaces)
- Como proprietário de uma organização, você pode listar os codespaces atualmente ativos e interrompidos em sua organização. Além desses codespaces, os custos do mês atual podem incluir custos de codespaces anteriores ao mês atual, mas que já foram excluídos.
- Para os usuários, há um guia que explica como funciona a cobrança: ["Noções básicas sobre a cobrança do Codespaces"](/codespaces/codespaces-reference/understanding-billing-for-codespaces)

## Limites de uso

Você pode definir um limite de uso para os codespaces na sua organização ou repositório. Este limite é aplicado ao uso de computação e armazenamento para o {% data variables.product.prodname_github_codespaces %}:
 
- **Minutos de computação:** o uso de computação é calculado pelo número real de minutos usados por todas as instâncias do {% data variables.product.prodname_codespaces %} enquanto elas estão ativas. Estes montantes totais são comunicados diariamente ao serviço de cobrança e são cobrados mensalmente. Você pode definir um limite de gastos para uso de {% data variables.product.prodname_codespaces %} na sua organização. Para obter mais informações, confira "[Como gerenciar limites de gastos do {% data variables.product.prodname_github_codespaces %}](/billing/managing-billing-for-github-codespaces/managing-spending-limits-for-github-codespaces)".

- **Uso de armazenamento:** para fins de cobrança do {% data variables.product.prodname_codespaces %}, isso inclui todo o armazenamento usado por todos os codespaces na sua conta. Isso inclui recursos como repositórios clonados, arquivos de configuração, extensões, entre outros. Estes montantes totais são comunicados diariamente ao serviço de cobrança e são cobrados mensalmente. No final do mês, {% data variables.product.prodname_dotcom %} arredonda seu armazenamento para o MB mais próximo. Para verificar quantos minutos de computação e GB de armazenamento foram usados pelo {% data variables.product.prodname_codespaces %}, confira "[Como exibir o uso do {% data variables.product.prodname_github_codespaces %}](/billing/managing-billing-for-github-codespaces/viewing-your-github-codespaces-usage)".

## Desabilitando ou limitando {% data variables.product.prodname_codespaces %}

Você pode desabilitar todo o uso de {% data variables.product.prodname_github_codespaces %} que seriam cobrados da sua organização. Como alternativa, você pode especificar quais membros da organização ou colaboradores podem usar {% data variables.product.prodname_codespaces %} às custas da sua organização. Para obter mais informações, confira "[Como habilitar {% data variables.product.prodname_github_codespaces %} para sua organização](/codespaces/managing-codespaces-for-your-organization/enabling-github-codespaces-for-your-organization)".

{% data reusables.codespaces.codespaces-disabling-org-billing %}

Você pode configurar quais repositórios podem ser acessados por meio de codespaces criados para um repositório específico. Para obter mais informações, veja "[Gerenciando o acesso a outros repositórios em seu codespace](/codespaces/managing-your-codespaces/managing-repository-access-for-your-codespaces)".

É possível limitar a escolha dos tipos de computadores que estão disponíveis para os codespaces criados em repositórios pertencentes à sua organização. Isso permite evitar que as pessoas usem máquinas com recursos excessivos para seus codespaces e incorram em cobranças desnecessárias. Para obter mais informações, confira "[Como restringir o acesso aos tipos de computadores](/codespaces/managing-codespaces-for-your-organization/restricting-access-to-machine-types)".

Você também pode restringir quanto tempo um codespace pode permanecer não utilizado antes de ser excluído automaticamente. Isso pode ajudar a reduzir os custos de armazenamento para {% data variables.product.prodname_codespaces %}. Para obter mais informações, confira "[Como restringir o período de retenção para codespaces](/codespaces/managing-codespaces-for-your-organization/restricting-the-retention-period-for-codespaces)".

## Excluindo codespaces não utilizados

Seus usuários podem excluir seus próprios codespaces no https://github.com/codespaces e de dentro de {% data variables.product.prodname_vscode %}. Para reduzir o tamanho de um codespace, os usuários podem excluir arquivos manualmente usando o termo ou de dentro de {% data variables.product.prodname_vscode_shortname %}. 

Como proprietário da organização, você pode excluir qualquer codespace em sua organização. Para obter mais informações, confira "[Como excluir um codespace](/codespaces/developing-in-codespaces/deleting-a-codespace#deleting-codespaces-in-your-organization)".

{% note %}

**Observação:** os codespaces são excluídos automaticamente depois que são parados e ficam inativos por um número definido de dias. Para obter mais informações, confira "[Como restringir o período de retenção para codespaces](/codespaces/managing-codespaces-for-your-organization/restricting-the-retention-period-for-codespaces)". Um codespace só pode ser excluído manualmente pela pessoa que o criou.

{% endnote %}

## Leitura adicional

- "[Como listar os codespaces na sua organização](/codespaces/managing-codespaces-for-your-organization/listing-the-codespaces-in-your-organization)"
