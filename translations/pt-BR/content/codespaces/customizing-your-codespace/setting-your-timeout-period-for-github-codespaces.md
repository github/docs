---
title: Como definir seu período de tempo limite para o GitHub Codespaces
shortTitle: Set the timeout
intro: 'Você pode definir seu tempo limite padrão como {% data variables.product.prodname_codespaces %} na sua página de configurações pessoais.'
product: '{% data reusables.gated-features.codespaces %}'
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Codespaces
type: how_to
redirect_from:
  - /codespaces/customizing-your-codespace/setting-your-timeout-period-for-codespaces
ms.openlocfilehash: 5b904e8b2f5cecbecbc93da096ab31126ed82727
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147111386'
---
Um codespace irá parar de funcionar após um período de inatividade. Você pode especificar a duração deste período de tempo limite. A configuração atualizada será aplicada a qualquer código recém-criado.

Algumas organizações podem ter uma política de tempo limite ocioso máximo. Se uma política da organização definir um tempo limite máximo menor do que o tempo limite padrão que você definiu, o tempo limite da organização será usado em vez de sua configuração e você será notificado disso depois que o codespace for criado. Para obter mais informações, veja "[Restringindo o tempo limite ocioso](/codespaces/managing-codespaces-for-your-organization/restricting-the-idle-timeout-period)".

{% warning %}

**Aviso**: os codespaces são cobrados por minuto. Se você não está usando ativamente um codepsace, mas o este ainda não expirou, você ainda será cobrado pelo tempo em que o codespace estiver em execução. Para obter mais informações, confira "[Sobre a cobrança do {% data variables.product.prodname_github_codespaces %}](/billing/managing-billing-for-github-codespaces/about-billing-for-github-codespaces#codespaces-pricing)".

{% endwarning %}

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
