---
title: Definindo seu período de tempo limite para os codespaces.
shortTitle: Set the timeout
intro: Você pode definir seu tempo limite padrão para {% data variables.product.prodname_codespaces %} na sua página de configurações pessoais.
product: '{% data reusables.gated-features.codespaces %}'
versions:
  fpt: '*'
  ghec: '*'
topics:
- Codespaces
type: how_to
ms.openlocfilehash: 3a4e009b5494b96e6daa6736a441a5fba9594857
ms.sourcegitcommit: dc42bb4a4826b414751ffa9eed38962c3e3fea8e
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 07/13/2022
ms.locfileid: "147064415"
---
Um codespace irá parar de funcionar após um período de inatividade. Você pode especificar a duração deste período de tempo limite. A configuração atualizada será aplicada a qualquer código recém-criado.

Algumas organizações podem ter uma política de tempo limite ocioso máximo. Se uma política da organização definir um tempo limite máximo menor do que o tempo limite padrão que você definiu, o tempo limite da organização será usado em vez de sua configuração e você será notificado disso depois que o codespace for criado. Para obter mais informações, veja "[Restringindo o tempo limite ocioso](/codespaces/managing-codespaces-for-your-organization/restricting-the-idle-timeout-period)".

{% warning %}

**Aviso**: os codespaces são cobrados por minuto. Se você não está usando ativamente um codepsace, mas o este ainda não expirou, você ainda será cobrado pelo tempo em que o codespace estiver em execução. Para obter mais informações, confira "[Sobre a cobrança do Codespaces](/billing/managing-billing-for-github-codespaces/about-billing-for-codespaces#codespaces-pricing)".

{% endwarning %}

{% webui %}

## <a name="setting-your-default-timeout-period"></a>Como definir o período de tempo limite padrão

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.codespaces-tab %}
1. Em "Tempo limite ocioso padrão", insira a hora desejada e clique em **Salvar**. O tempo deve ser entre 5 minutos e 240 minutos (4 horas).
   ![Seleção do tempo limite](/assets/images/help/codespaces/setting-default-timeout.png)

{% endwebui %}

{% cli %}

## <a name="setting-the-timeout-period-for-a-codespace"></a>Como definir o período de tempo limite de um codespace

{% data reusables.cli.cli-learn-more %}

Para definir o período de tempo limite ao criar um codespace, use o argumento `idle-timeout` com o subcomando `codespace create`. Especifique a hora em minutos, seguido de `m`. O tempo deve ser entre 5 minutos e 240 minutos (4 horas).

```shell
gh codespace create --idle-timeout 90m
```

Se você não especificar um período de tempo limite ao criar um codespace, será usado o período de tempo limite padrão. Para informações sobre como definir um período de tempo limite padrão, clique na aba "Navegador da Web" nesta página. Você não pode especificar um período de tempo padrão para {% data variables.product.prodname_cli %}.

{% endcli %}

{% vscode %}

## <a name="setting-a-timeout-period"></a>Como configurar um período de tempo limite

Você pode definir o período de tempo limite padrão no navegador da Web, no {% data variables.product.prodname_dotcom_the_website %}. Como alternativa, usando a {% data variables.product.prodname_cli %} para criar um codespace, você pode definir um período de tempo limite para esse codespace específico. Para obter mais informações, clique na guia apropriada acima.

{% endvscode %}
