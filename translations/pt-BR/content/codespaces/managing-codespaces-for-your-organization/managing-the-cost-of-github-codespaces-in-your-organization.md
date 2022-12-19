---
title: Como gerenciar o custo dos GitHub Codespaces na organização
shortTitle: Manage Codespaces costs
intro: 'Você pode verificar o uso do {% data variables.product.prodname_github_codespaces %} e definir os limites de uso.'
permissions: 'To manage billing for {% data variables.product.prodname_github_codespaces %} for an organization, you must be an organization owner or a billing manager.'
versions:
  fpt: '*'
  ghec: '*'
type: reference
topics:
  - Codespaces
  - Billing
redirect_from:
  - /codespaces/managing-codespaces-for-your-organization/managing-billing-for-codespaces-in-your-organization
  - /codespaces/managing-codespaces-for-your-organization/managing-billing-for-github-codespaces-in-your-organization
ms.openlocfilehash: f11c6e22fa8a233fd4429b91390d25471ad17e6d
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 11/09/2022
ms.locfileid: '148158706'
---
## Visão geral

A organização é cobrada de acordo com o uso de computação e de armazenamento dos {% data variables.product.prodname_github_codespaces %}. Este artigo explica como você, o proprietário de uma organização, pode gerenciar esses custos.

Para saber mais sobre preços dos {% data variables.product.prodname_github_codespaces %}, confira "[Sobre a cobrança dos {% data variables.product.prodname_github_codespaces %}](/billing/managing-billing-for-github-codespaces/about-billing-for-github-codespaces#codespaces-pricing)."

## Limites de gastos

É possível definir um limite de gastos para os {% data variables.product.prodname_github_codespaces %} na organização. Esse limite é aplicado ao custo total de computação e armazenamento dos {% data variables.product.prodname_github_codespaces %}. Para obter mais informações, confira "[Como gerenciar limites de gastos do {% data variables.product.prodname_github_codespaces %}](/billing/managing-billing-for-github-codespaces/managing-the-spending-limit-for-github-codespaces)".
 
- **Uso de computação:** esse é o tempo total durante o qual todas as instâncias dos {% data variables.product.prodname_github_codespaces %} ("codespaces") ficam ativas em um mês de cobrança. 

- **Uso do armazenamento:** para fins de cobrança do {% data variables.product.prodname_github_codespaces %}, inclui todo o armazenamento usado por todos os codespaces e as predefinições na conta. Isso inclui recursos como repositórios clonados, arquivos de configuração, extensões, entre outros. 

Você pode verificar o uso de computação e de armazenamento dos {% data variables.product.prodname_github_codespaces %} no mês de cobrança atual. Para obter mais informações, confira "[Como ver o uso dos {% data variables.product.prodname_github_codespaces %}](/billing/managing-billing-for-github-codespaces/viewing-your-github-codespaces-usage)".

{% note %}

**Observação**: as predefinições dos {% data variables.product.prodname_github_codespaces %} são criadas e atualizadas usando o {% data variables.product.prodname_actions %}. Isso pode gerar custos faturáveis para o {% data variables.product.prodname_actions %}. Você pode definir um limite de gastos para o uso do {% data variables.product.prodname_actions %}. Para obter mais informações, confira "[Sobre a cobrança dos {% data variables.product.prodname_github_codespaces %}](/billing/managing-billing-for-github-codespaces/about-billing-for-github-codespaces#billing-for-codespaces-prebuilds)" e "[Como gerenciar o limite de gastos do {% data variables.product.prodname_actions %}](/billing/managing-billing-for-github-actions/managing-your-spending-limit-for-github-actions)". O armazenamento das predefinições geradas é cobrado na mesma taxa que os codespaces e está incluído no limite de gastos dos {% data variables.product.prodname_github_codespaces %}.

{% endnote %}

## Desabilitando ou limitando {% data variables.product.prodname_codespaces %}

Você pode desabilitar todo o uso de {% data variables.product.prodname_github_codespaces %} que seriam cobrados da sua organização. Como alternativa, você pode especificar quais membros da organização ou colaboradores podem usar {% data variables.product.prodname_codespaces %} às custas da sua organização. Para obter mais informações, confira "[Como habilitar {% data variables.product.prodname_github_codespaces %} para sua organização](/codespaces/managing-codespaces-for-your-organization/enabling-github-codespaces-for-your-organization)".

{% data reusables.codespaces.codespaces-disabling-org-billing %}

Você pode configurar quais repositórios podem ser acessados por meio de codespaces criados para um repositório específico. Para obter mais informações, veja "[Gerenciando o acesso a outros repositórios em seu codespace](/codespaces/managing-your-codespaces/managing-repository-access-for-your-codespaces)".

É possível limitar a escolha dos tipos de computadores que estão disponíveis para os codespaces criados em repositórios pertencentes à sua organização. Isso permite evitar que as pessoas usem máquinas com recursos excessivos para seus codespaces e incorram em cobranças desnecessárias. Para obter mais informações, confira "[Como restringir o acesso aos tipos de computadores](/codespaces/managing-codespaces-for-your-organization/restricting-access-to-machine-types)".

Você pode definir uma restrição máxima de tempo limite ocioso para limitar o tempo limite máximo que as pessoas podem definir nos codespaces faturáveis para a organização. Isso pode reduzir os encargos de uso de computação gerados por codespaces que são deixados em execução em um estado ocioso interrompendo o codespace ativo após um período de tempo limite menor. Para obter mais informações, veja "[Restringindo o tempo limite ocioso](/codespaces/managing-codespaces-for-your-organization/restricting-the-idle-timeout-period)".

Você também pode restringir quanto tempo um codespace pode permanecer sem uso até que seja excluído automaticamente. Isso pode ajudar a reduzir os custos de armazenamento para {% data variables.product.prodname_codespaces %}. Para obter mais informações, confira "[Como restringir o período de retenção para codespaces](/codespaces/managing-codespaces-for-your-organization/restricting-the-retention-period-for-codespaces)".

Os proprietários do repositório que configuram predefinições para o repositório podem reduzir os custos de armazenamento de predefinições configurando-as para serem criados somente em regiões selecionadas. Para obter mais informações, confira "[Como configurar pré-compilações](/codespaces/prebuilding-your-codespaces/configuring-prebuilds#configuring-prebuilds)".

## Excluindo codespaces não utilizados

Seus usuários podem excluir seus próprios codespaces no https://github.com/codespaces e de dentro de {% data variables.product.prodname_vscode %}. Para reduzir o tamanho de um codespace, os usuários podem excluir arquivos manualmente usando o termo ou de dentro de {% data variables.product.prodname_vscode_shortname %}. 

Como proprietário da organização, você pode excluir qualquer codespace em sua organização. Para obter mais informações, confira "[Como excluir um codespace](/codespaces/developing-in-codespaces/deleting-a-codespace#deleting-codespaces-in-your-organization)".

{% note %}

**Observação:** os codespaces são excluídos automaticamente depois que são parados e ficam inativos por um número definido de dias. Para obter mais informações, confira "[Como configurar a exclusão automática de codespaces](/codespaces/customizing-your-codespace/configuring-automatic-deletion-of-your-codespaces)". Como proprietário da organização, você pode definir um período máximo de retenção de cada codespace pertencente à organização. Isso substituirá a configuração de retenção pessoal de um usuário. Para obter mais informações, confira "[Como restringir o período de retenção para codespaces](/codespaces/managing-codespaces-for-your-organization/restricting-the-retention-period-for-codespaces)".

{% endnote %}

## Leitura adicional

- "[Como listar os codespaces na sua organização](/codespaces/managing-codespaces-for-your-organization/listing-the-codespaces-in-your-organization)"
