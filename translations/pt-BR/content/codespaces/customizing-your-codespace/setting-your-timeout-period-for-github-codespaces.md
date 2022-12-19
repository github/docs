---
title: Como definir seu período de tempo limite para o GitHub Codespaces
shortTitle: Set the timeout
intro: 'Você pode definir o tempo limite padrão dos {% data variables.product.prodname_github_codespaces %} na página de configurações pessoais.'
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Codespaces
type: how_to
redirect_from:
  - /codespaces/customizing-your-codespace/setting-your-timeout-period-for-codespaces
ms.openlocfilehash: 6ca559fefddc34eb6de0441d17344ff8054db509
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 11/09/2022
ms.locfileid: '148159316'
---
## Sobre o tempo limite ocioso

Um codespace irá parar de funcionar após um período de inatividade. Por padrão, esse período é de 30 minutos, mas você pode especificar um período de tempo limite padrão maior ou menor nas configurações pessoais no {% data variables.product.prodname_dotcom %}. A configuração atualizada será aplicada a todos os novos codespaces que você criar ou aos codespaces existentes na próxima inicialização. Você também pode especificar um tempo limite ao usar a {% data variables.product.prodname_cli %} para criar um codespace.

{% warning %}

**Aviso**: o uso de computação de codespaces é cobrado durante o período em que o codespace está ativo. Se você não estiver usando um codespace, mas ele permanecer em execução e ainda não tiver atingindo o tempo limite, você será cobrado pelo tempo total em que o codespace ficou ativo, independentemente do uso. Para obter mais informações, confira "[Sobre a cobrança do {% data variables.product.prodname_github_codespaces %}](/billing/managing-billing-for-github-codespaces/about-billing-for-github-codespaces#codespaces-pricing)".

{% endwarning %}

### Períodos de tempo limite para repositórios de propriedade da organização

As organizações podem definir uma política máxima de tempo limite ocioso para codespaces criados com base em alguns repositórios ou em todos eles. Se uma política da organização definir um tempo limite máximo menor do que o tempo limite padrão que você definiu, o tempo limite da organização será usado em vez da sua configuração. Você será notificado sobre isso depois que o codespace for criado. Para obter mais informações, veja "[Restringindo o tempo limite ocioso](/codespaces/managing-codespaces-for-your-organization/restricting-the-idle-timeout-period)".

{% webui %}

## Como definir o período de tempo limite padrão

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.codespaces-tab %}
1. Em "Tempo limite ocioso padrão", insira a hora desejada e clique em **Salvar**. O tempo deve ser entre 5 minutos e 240 minutos (4 horas).
   ![Seleção do tempo limite](/assets/images/help/codespaces/setting-default-timeout.png)

{% endwebui %}

{% cli %}

## Como definir o período de tempo limite de um codespace

{% data reusables.cli.cli-learn-more %}

Para definir o período de tempo limite ao criar um codespace, use o argumento `idle-timeout` com o subcomando `codespace create`. Especifique a hora em minutos, seguido de `m`. O tempo deve ser entre 5 minutos e 240 minutos (4 horas).

```shell
gh codespace create --idle-timeout 90m
```

Se você não especificar um período de tempo limite ao criar um codespace, será usado o período de tempo limite padrão. Para informações sobre como definir um período de tempo limite padrão, clique na aba "Navegador da Web" nesta página. Você não pode especificar um período de tempo padrão para {% data variables.product.prodname_cli %}.

{% endcli %}

{% vscode %}

## Como configurar um período de tempo limite

Você pode definir o período de tempo limite padrão no navegador da Web, no {% data variables.product.prodname_dotcom_the_website %}. Como alternativa, usando a {% data variables.product.prodname_cli %} para criar um codespace, você pode definir um período de tempo limite para esse codespace específico. Para obter mais informações, clique na guia apropriada acima.

{% endvscode %}
