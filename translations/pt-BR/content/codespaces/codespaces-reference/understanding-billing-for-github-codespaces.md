---
title: Noções básicas sobre cobrança do GitHub Codespaces
intro: Saiba como seu uso do {% data variables.product.prodname_github_codespaces %} é cobrado.
versions:
  fpt: '*'
  ghec: '*'
redirect_from:
- /github/developing-online-with-codespaces/about-billing-for-codespaces
- /codespaces/getting-started-with-codespaces/about-billing-for-codespaces
- /codespaces/codespaces-reference/about-billing-for-codespaces
- /codespaces/codespaces-reference/understanding-billing-for-codespaces
type: reference
topics:
- Codespaces
- Billing
product: '{% data reusables.gated-features.codespaces %}'
shortTitle: Understanding billing
ms.openlocfilehash: 2dfec9e452360db117bdee7954fbe4fad2ad1c56
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: "147111395"
---
Este artigo explica como a cobrança funciona para seus codespaces e explica como o gerente de cobrança da sua organização pode ajudar.

## Como obter acesso ao {% data variables.product.prodname_github_codespaces %}

O administrador da sua organização pode limitar o uso de {% data variables.product.prodname_github_codespaces %} somente às contas pessoais específicas. Para obter acesso, você deverá entrar em contato com o gerente de faturamento. Para obter mais informações, confira "[Como gerenciar o acesso e a segurança para seus codespaces](/codespaces/managing-your-codespaces/managing-access-and-security-for-your-codespaces)".

## Quanto custa usar {% data variables.product.prodname_codespaces %}

Para ver os preços do uso do {% data variables.product.prodname_codespaces %}, confira "[Preços do {% data variables.product.prodname_codespaces %}](/billing/managing-billing-for-github-codespaces/about-billing-for-codespaces#codespaces-pricing)".

## Como é feita a cobrança do seu codespace

A cobrança do seu codespace é feita por minutos de computação e para a quantidade de armazenamento que usa no disco.

Se você habilitar a pré-criação de códigos, isso acarretará custos adicionais. Para obter mais informações, confira "[Sobre as pré-compilações do {% data variables.product.prodname_github_codespaces %}](/codespaces/prebuilding-your-codespaces/about-github-codespaces-prebuilds#about-billing-for-codespaces-prebuilds)".

### Ententendo quais minutos de computação são
A cobrança do seu codespace é feita pelo número de minutos ativos. Se sua janela de codespace estiver inativa por 30 minutos, ela será desligada automaticamente, e o cálculo da cobrança para o codespace terminará até que você inicie o codespace novamente.

### Entender como o armazenamento de código é cobrado
Para o {% data variables.product.prodname_github_codespaces %}, o armazenamento é definido para incluir todos os arquivos relacionados ao seu codespace, como o repositório clonado, arquivos de configuração e extensões, entre outros. Este armazenamento é cobrado enquanto seu codespace é fechado. A cobrança de armazenamento de um codespace termina quando você o exclui manualmente de https://github.com/codespaces.

## Como os limites de gastos funcionam

Antes de sua organização poder usar {% data variables.product.prodname_codespaces %}, seu gerente de cobrança deverá definir um limite de gastos. Para obter mais informações, confira "[Como gerenciar limites de gastos do {% data variables.product.prodname_github_codespaces %}](/billing/managing-billing-for-github-codespaces/managing-spending-limits-for-github-codespaces)". 

## Exportar alterações quando você atingir seu limite de gastos

{% data reusables.codespaces.exporting-changes %}

## Verificando o uso e limites atuais
Se você precisar verificar seu limite de uso atual ou de gastos, entre em contato com o gerente de cobrança da sua organização. Para obter mais informações, confira "[Como exibir o uso do {% data variables.product.prodname_github_codespaces %}](/billing/managing-billing-for-github-codespaces/viewing-your-github-codespaces-usage)".

## Os codespaces podem ser excluídos automaticamente

Seu código será automaticamente excluído quando você for removido de uma organização ou repositório.

## Excluindo seus codespaces não utilizados

Você pode excluir manualmente seus codespaces em https://github.com/codespaces do {% data variables.product.prodname_vscode %}. Para reduzir o tamanho de um codespace, você pode excluir arquivos manualmente usando o terminal ou de dentro de {% data variables.product.prodname_vscode %}.

## Leitura adicional

- "[Como gerenciar a cobrança do {% data variables.product.prodname_github_codespaces %} em sua organização](/codespaces/managing-codespaces-for-your-organization/managing-billing-for-github-codespaces-in-your-organization)"
