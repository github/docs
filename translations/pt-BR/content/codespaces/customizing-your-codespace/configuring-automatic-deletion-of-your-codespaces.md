---
title: Como configurar a exclusão automática de seus codespaces
shortTitle: Configure automatic deletion
intro: 'Os codespaces inativos são excluídos automaticamente. Você pode escolher por quanto tempo seus codespaces parados são retidos, até, no máximo, 30 dias.'
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Codespaces
type: how_to
ms.openlocfilehash: 5414d2223f490638f27475840a25883e9c353e77
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 11/09/2022
ms.locfileid: '148159362'
---
Por padrão, os {% data variables.product.prodname_github_codespaces %} são excluídos automaticamente depois que são parados e continuam inativos por 30 dias.

Mas como os {% data variables.product.prodname_github_codespaces %} geram encargos de armazenamento, talvez você prefira reduzir o período de retenção alterando o período padrão nas suas configurações pessoais dos {% data variables.product.prodname_github_codespaces %}. Para obter mais informações sobre cobranças de armazenamento, confira "[Sobre a cobrança do {% data variables.product.prodname_github_codespaces %}](/billing/managing-billing-for-github-codespaces/about-billing-for-github-codespaces#codespaces-pricing)".

{% note %}

**Observação**: tendo definido ou não um período de retenção de codespace pessoal, é uma boa ideia se acostumar a excluir codespaces de que você não precisa mais. Para obter mais informações, confira "[Como excluir um codespace](/codespaces/developing-in-codespaces/deleting-a-codespace)".

{% endnote %}

A exclusão automática ocorre independentemente de um codespace conter alterações não enviadas por push. Para evitar a exclusão automática de um codespace, bastará abrir o codespace novamente. O período de retenção será redefinido sempre que você se conectar a um codespace, e a contagem regressiva de retenção será reiniciada quando o codespace for parado.

Se um repositório pertencer a uma organização, o administrador da organização poderá ter definido um período de retenção para toda a organização. Se esse período for menor do que o período de retenção padrão em suas configurações pessoais, o período de retenção da organização se aplicará aos codespaces criados para esse repositório. Para obter mais informações, confira "[Como restringir o período de retenção para codespaces](/codespaces/managing-codespaces-for-your-organization/restricting-the-retention-period-for-codespaces)".

Cada codespace tem seu próprio período de retenção. Você pode, portanto, ter codespaces com diferentes períodos de retenção. Por exemplo, se:
* Você criou um codespace, alterou o período de retenção padrão e criou outro codespace.
* Você criou um codespace usando a {% data variables.product.prodname_cli %} e especificou um período de retenção diferente.
* Você criou um codespace de um repositório de propriedade da organização com que tem um período de retenção configurado para a organização.

{% note %}

**Observação**: o período de retenção é especificado em dias. Um dia representa um período de 24 horas, começando na hora do dia em que você para um codespace.

{% endnote %}

{% webui %}

## Como definir um período de retenção padrão para seus codespaces

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.codespaces-tab %}
1. Em "Período de retenção padrão", insira o número de dias pelos quais você deseja que seus codespaces sejam retidos por padrão depois de terem sido parados. 

   ![Como selecionar seu período de retenção](/assets/images/help/codespaces/setting-default-retention.png)

   Você pode definir o período de retenção padrão entre `0` e `30` dias. 

   {% warning %}

   **Aviso**: a configuração do período como `0` resultará na exclusão imediata dos codespaces quando eles forem parados ou quando o tempo limite deles for atingido devido à inatividade. Para obter mais informações, confira "[Como configurar o período de tempo limite do {% data variables.product.prodname_github_codespaces %}](/codespaces/customizing-your-codespace/setting-your-timeout-period-for-github-codespaces)".

   {% endwarning %}
 
1. Clique em **Salvar**.

Ao criar um codespace usando a {% data variables.product.prodname_cli %}, você poderá substituir esse padrão. Se você criar um codespace em uma organização que especifica um período de retenção mais curto, o valor no nível da organização substituirá sua configuração pessoal.

Se você definir um período de retenção de mais de um dia, será enviada uma notificação por email um dia antes da exclusão. 

## Como verificar o tempo restante até a exclusão automática

Você pode verificar se um codespace deve ser excluído automaticamente em breve. 

Quando um codespace inativo estiver se aproximando do final de seu período de retenção, isso será indicado na sua lista de codespaces no {% data variables.product.prodname_dotcom %} em [https://github.com/codespaces](https://github.com/codespaces).

![A mensagem anterior à exclusão na lista de codespaces no {% data variables.product.prodname_dotcom %}](/assets/images/help/codespaces/retention-deletion-message.png)

{% endwebui %}

{% cli %}

## Como definir um período de retenção para um codespace

Para definir o período de retenção do codespace ao criar um codespace, use o sinalizador `--retention-period` com o subcomando `codespace create`. Especifique o período em dias. O período deve ter entre 0 e 30 dias.

```shell
gh codespace create --retention-period DAYS
```

Se você não especificar um período de retenção ao criar um codespace, o período de retenção padrão ou um período de retenção da organização será usado, dependendo do que for menor. Para obter informações sobre como definir um período de retenção padrão, clique na aba "Navegador da Web" nesta página. 

{% data reusables.cli.cli-learn-more %}

{% endcli %}

{% vscode %}

## Como definir o período de retenção

Você pode definir o período de retenção padrão no navegador da Web, no {% data variables.product.prodname_dotcom_the_website %}. Como alternativa, se usar a {% data variables.product.prodname_cli %} para criar um codespace, você poderá definir um período de retenção para esse codespace específico. Para obter mais informações, clique na guia apropriada acima.

## Como verificar se os codespaces serão automaticamente excluídos em breve

Você pode verificar, no aplicativo da área de trabalho do {% data variables.product.prodname_vscode %}, se um codespace deve ser excluído automaticamente em breve.

{% data reusables.codespaces.click-remote-explorer-icon-vscode %}
1. Escolha **{% data variables.product.prodname_github_codespaces %}** no menu suspenso no canto superior direito do Gerenciador Remoto se ele ainda não estiver selecionado.
1. Em "GITHUB CODESPACES", posicione o ponteiro do mouse sobre o codespace no qual você está interessado. Uma caixa pop-up é exibida com informações sobre o codespace.

   Se o codespace estiver se aproximando do fim de seu período de retenção, será incluída uma linha informando quando o codespace será excluído.

   ![Informações do codespace mostrando o tempo até a exclusão](/assets/images/help/codespaces/vscode-deleting-in-5-days.png)

{% endvscode %}
