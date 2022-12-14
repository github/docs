---
title: Gerenciar a cobrança de codespaces na sua organização
shortTitle: Manage billing
intro: Você pode verificar seu uso de {% data variables.product.prodname_codespaces %} e definir os limites de uso.
product: '{% data reusables.gated-features.codespaces %}'
permissions: To manage billing for Codespaces for an organization, you must be an organization owner or a billing manager.
versions:
  fpt: '*'
  ghec: '*'
type: reference
topics:
- Codespaces
- Billing
ms.openlocfilehash: a5cc1d61c560c534dc2bdf5a543097e49b336478
ms.sourcegitcommit: dc42bb4a4826b414751ffa9eed38962c3e3fea8e
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 07/13/2022
ms.locfileid: "145149721"
---
## <a name="overview"></a>Visão geral

Para saber mais sobre os preços do {% data variables.product.prodname_codespaces %}, confira "[Preços do {% data variables.product.prodname_codespaces %}](/billing/managing-billing-for-github-codespaces/about-billing-for-codespaces#codespaces-pricing)".

{% data reusables.codespaces.codespaces-billing %}

- Como proprietário ou gerente de cobrança de uma organização, você pode gerenciar a cobrança do {% data variables.product.prodname_codespaces %} para sua organização: ["Sobre a cobrança do Codespaces"](/billing/managing-billing-for-github-codespaces/about-billing-for-codespaces)

- Para os usuários, há um guia que explica como funciona a cobrança: ["Noções básicas sobre a cobrança do Codespaces"](/codespaces/codespaces-reference/understanding-billing-for-codespaces)

## <a name="usage-limits"></a>Limites de uso

Você pode definir um limite de uso para os codespaces na sua organização ou repositório. Este limite é aplicado ao uso de computação e armazenamento para {% data variables.product.prodname_codespaces %}:
 
- **Minutos de computação:** o uso de computação é calculado pelo número real de minutos usados por todas as instâncias do {% data variables.product.prodname_codespaces %} enquanto elas estão ativas. Estes montantes totais são comunicados diariamente ao serviço de cobrança e são cobrados mensalmente. Você pode definir um limite de gastos para uso de {% data variables.product.prodname_codespaces %} na sua organização. Para obter mais informações, confira "[Como gerenciar limites de gastos do Codespaces](/billing/managing-billing-for-github-codespaces/managing-spending-limits-for-codespaces)".

- **Uso de armazenamento:** para fins de cobrança do {% data variables.product.prodname_codespaces %}, isso inclui todo o armazenamento usado por todos os codespaces na sua conta. Isto inclui todos os codespacess usados pelos repositórios clonados, arquivos de configuração e extensões, entre outros. Estes montantes totais são comunicados diariamente ao serviço de cobrança e são cobrados mensalmente. No final do mês, {% data variables.product.prodname_dotcom %} arredonda seu armazenamento para o MB mais próximo. Para verificar quantos minutos de computação e GB de armazenamento foram usados pelo {% data variables.product.prodname_codespaces %}, confira "[Como ver o seu uso do Codespaces](/billing/managing-billing-for-github-codespaces/viewing-your-codespaces-usage)".

## <a name="disabling-or-limiting--data-variablesproductprodname_codespaces-"></a>Desabilitando ou limitando {% data variables.product.prodname_codespaces %}

É possível desabilitar o uso de {% data variables.product.prodname_codespaces %} na sua organização ou repositório. Para obter mais informações, confira "[Como gerenciar o acesso ao repositório para os codespaces da sua organização](/codespaces/managing-codespaces-for-your-organization/managing-access-and-security-for-your-organizations-codespaces)".

Você também pode limitar os usuários individuais que podem usar {% data variables.product.prodname_codespaces %}. Para obter mais informações, confira "[Como gerenciar permissões de usuário para sua organização](/codespaces/managing-codespaces-for-your-organization/managing-user-permissions-for-your-organization)".

É possível limitar a escolha dos tipos de máquina que estão disponíveis para repositórios pertencentes à sua organização. Isso permite evitar que as pessoas usem máquinas com recursos excessivos para seus codespaces. Para obter mais informações, confira "[Como restringir o acesso aos tipos de computadores](/codespaces/managing-codespaces-for-your-organization/restricting-access-to-machine-types)".

## <a name="deleting-unused-codespaces"></a>Excluindo codespaces não utilizados

Seus usuários podem excluir seus codespaces no https://github.com/codespaces e de dentro de {% data variables.product.prodname_vscode %}. Para reduzir o tamanho de um codespace, os usuários podem excluir arquivos manualmente usando o termo ou de dentro de {% data variables.product.prodname_vscode_shortname %}. 

{% note %}

**Observação:** somente a pessoa que criou um codespace pode excluí-lo. Atualmente, não há forma de os proprietários da organização excluírem os codespaces criados dentro de sua organização.

{% endnote %}
