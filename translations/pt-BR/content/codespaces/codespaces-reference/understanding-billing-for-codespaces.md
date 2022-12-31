---
title: Entendendo a cobrança para Codespaces
intro: Saiba como seu uso de {% data variables.product.prodname_codespaces %} é cobrado.
versions:
  fpt: '*'
  ghec: '*'
redirect_from:
- /github/developing-online-with-codespaces/about-billing-for-codespaces
- /codespaces/getting-started-with-codespaces/about-billing-for-codespaces
- /codespaces/codespaces-reference/about-billing-for-codespaces
type: reference
topics:
- Codespaces
- Billing
product: '{% data reusables.gated-features.codespaces %}'
shortTitle: Understanding billing
ms.openlocfilehash: e8a5b24808e4d1c8dbf216933c1a519c26a46ad4
ms.sourcegitcommit: 22d665055b1bee7a5df630385e734e3a149fc720
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 07/13/2022
ms.locfileid: "145097176"
---
Este artigo explica como a cobrança funciona para seus codespaces e explica como o gerente de cobrança da sua organização pode ajudar.

## <a name="getting-access-to--data-variablesproductprodname_codespaces-"></a>Obtendo acesso a {% data variables.product.prodname_codespaces %}

O administrador da sua organização pode limitar o uso de {% data variables.product.prodname_codespaces %} para apenas contas pessoais específicas. Para obter acesso, você deverá entrar em contato com o gerente de faturamento. Para obter mais informações, confira "[Como gerenciar o acesso e a segurança para seus codespaces](/codespaces/managing-your-codespaces/managing-access-and-security-for-your-codespaces)".

## <a name="how-much-it-costs-to-use--data-variablesproductprodname_codespaces-"></a>Quanto custa usar {% data variables.product.prodname_codespaces %}

Para ver os preços do uso do {% data variables.product.prodname_codespaces %}, confira "[Preços do {% data variables.product.prodname_codespaces %}](/billing/managing-billing-for-github-codespaces/about-billing-for-codespaces#codespaces-pricing)".

## <a name="how-your-codespace-usage-is-billed"></a>Como é feita a cobrança do seu codespace

A cobrança do seu codespace é feita por minutos de computação e para a quantidade de armazenamento que usa no disco.

Se você habilitar a pré-criação de códigos, isso acarretará custos adicionais. Para obter mais informações, confira "[Sobre os pré-builds do Codespaces](/codespaces/prebuilding-your-codespaces/about-codespaces-prebuilds#about-billing-for-codespaces-prebuilds)".

### <a name="understanding-what-compute-minutes-are"></a>Ententendo quais minutos de computação são
A cobrança do seu codespace é feita pelo número de minutos ativos. Se sua janela de codespace estiver inativa por 30 minutos, ela será desligada automaticamente, e o cálculo da cobrança para o codespace terminará até que você inicie o codespace novamente.

### <a name="understanding-how-codespace-storage-is-billed"></a>Entender como o armazenamento de código é cobrado
Para o {% data variables.product.prodname_codespaces %}, o armazenamento é definido para incluir todos os arquivos relacionados ao seu codespace, como o repositório clonado, arquivos de configuração e extensões, entre outros. Este armazenamento é cobrado enquanto seu codespace é fechado. A cobrança de armazenamento de um codespace termina quando você o exclui manualmente de https://github.com/codespaces.

## <a name="how-spending-limits-work"></a>Como os limites de gastos funcionam

Antes de sua organização poder usar {% data variables.product.prodname_codespaces %}, seu gerente de cobrança deverá definir um limite de gastos. Para obter mais informações, confira "[Como gerenciar limites de gastos do {% data variables.product.prodname_codespaces %}](/billing/managing-billing-for-github-codespaces/managing-spending-limits-for-codespaces)". 

## <a name="exporting-changes-when-you-have-reached-your-spending-limit"></a>Exportar alterações quando você atingir seu limite de gastos

{% data reusables.codespaces.exporting-changes %}

## <a name="checking-your-current-usage-and-limits"></a>Verificando o uso e limites atuais
Se você precisar verificar seu limite de uso atual ou de gastos, entre em contato com o gerente de cobrança da sua organização. Para obter mais informações, confira "[Como ver o uso dos seus codespaces](/billing/managing-billing-for-github-codespaces/viewing-your-codespaces-usage)".

## <a name="codespaces-can-be-automatically-deleted"></a>Os codespaces podem ser excluídos automaticamente

Seu código será automaticamente excluído quando você for removido de uma organização ou repositório.

## <a name="deleting-your-unused-codespaces"></a>Excluindo seus codespaces não utilizados

Você pode excluir manualmente seus codespaces em https://github.com/codespaces do {% data variables.product.prodname_vscode %}. Para reduzir o tamanho de um codespace, você pode excluir arquivos manualmente usando o terminal ou de dentro de {% data variables.product.prodname_vscode %}.

## <a name="further-reading"></a>Leitura adicional

- "[Como gerenciar a cobrança do Codespaces na sua organização](/codespaces/managing-codespaces-for-your-organization/managing-billing-for-codespaces-in-your-organization)"
