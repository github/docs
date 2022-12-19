---
title: Manter as suas ações atualizadas com o Dependabot
intro: 'Você pode usar o {% data variables.product.prodname_dependabot %} para manter as ações que você utiliza atualizadas para as versões mais recentes.'
redirect_from:
  - /github/administering-a-repository/keeping-your-actions-up-to-date-with-github-dependabot
  - /github/administering-a-repository/keeping-your-actions-up-to-date-with-dependabot
  - /code-security/supply-chain-security/keeping-your-actions-up-to-date-with-dependabot
  - /code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/keeping-your-actions-up-to-date-with-dependabot
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
type: how_to
topics:
  - Repositories
  - Dependabot
  - Version updates
  - Actions
shortTitle: Auto-update actions
ms.openlocfilehash: 804660684230d8a0fb716b69644aab851a4c247b
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148107722'
---
{% data reusables.dependabot.beta-security-and-version-updates %}

{% data reusables.dependabot.enterprise-enable-dependabot %}

## Sobre {% data variables.product.prodname_dependabot_version_updates %} para ações

Ações são frequentemente atualizadas com correções de bugs e novos recursos para tornar os processos automatizados mais confiáveis, mais rápidos e mais seguros. Quando você habilitar as {% data variables.product.prodname_dependabot_version_updates %} para o {% data variables.product.prodname_actions %}, o {% data variables.product.prodname_dependabot %} ajudará a garantir que as referências às ações no arquivo *workflow.yml* de um repositório sejam mantidas atualizadas. Para cada ação no arquivo, o {% data variables.product.prodname_dependabot %} verifica a referência da ação (tipicamente, um número de versão ou um identificador de commit associado à ação) em relação à última versão. Se uma última versão da ação estiver disponível, o {% data variables.product.prodname_dependabot %} enviará para você uma solicitação de pull que atualizará a referência no arquivo de fluxo de trabalho para a última versão. Para obter mais informações sobre as {% data variables.product.prodname_dependabot_version_updates %}, confira "[Sobre as {% data variables.product.prodname_dependabot_version_updates %}](/github/administering-a-repository/about-dependabot-version-updates)". Para obter mais informações sobre como configurar fluxos de trabalho do {% data variables.product.prodname_actions %}, confira "[Saiba como usar o {% data variables.product.prodname_actions %}](/actions/learn-github-actions)".
  
{% data reusables.actions.workflow-runs-dependabot-note %}

## Habilitando {% data variables.product.prodname_dependabot_version_updates %} para ações

Você pode configurar {% data variables.product.prodname_dependabot_version_updates %} para manter suas ações, bem como as bibliotecas e os pacotes de dependência. 

1. Se você já habilitou as {% data variables.product.prodname_dependabot_version_updates %} para outros ecossistemas ou gerenciadores de pacotes, basta abrir o arquivo *dependabot.yml* existente. Caso contrário, crie um arquivo de configuração *dependabot.yml* no diretório `.github` do repositório. Para obter mais informações, confira "[Como configurar as atualizações de versão do Dependabot](/code-security/dependabot/dependabot-version-updates/configuring-dependabot-version-updates#enabling-dependabot-version-updates)".
1. Especifique `"github-actions"` como um `package-ecosystem` para monitorá-lo.
1. Defina o `directory` como `"/"` para verificar se há arquivos de fluxo de trabalho em `.github/workflows`.
1. Defina um `schedule.interval` para especificar a frequência com que será feita a verificação em busca de novas versões.
{% data reusables.dependabot.check-in-dependabot-yml %} Se você tiver editado um arquivo existente, salve suas alterações.

Você também pode habilitar o {% data variables.product.prodname_dependabot_version_updates %} em bifurcações. Para obter mais informações, confira "[Como configurar as atualizações de versão do {% data variables.product.prodname_dependabot %}](/code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/enabling-and-disabling-dependabot-version-updates#enabling-version-updates-on-forks)".

### Exemplo de arquivo *dependabot.yml* do {% data variables.product.prodname_actions %}

O exemplo de arquivo *dependabot.yml* abaixo configura as atualizações de versão do {% data variables.product.prodname_actions %}. O `directory` precisa ser definido como `"/"` para verificar se há arquivos de fluxo de trabalho em `.github/workflows`. O `schedule.interval` é definido como `"weekly"`. Após este arquivo ter sido verificado ou atualizado, {% data variables.product.prodname_dependabot %} verifica novas versões de suas ações. O {% data variables.product.prodname_dependabot %} acionará as solicitação de pull para as atualizações da versão de todas as ações desatualizadas encontradas. Após as atualizações iniciais da versão, o {% data variables.product.prodname_dependabot %} continuará verificando se há versões desatualizadas das ações uma vez por dia.

```yaml
# Set update schedule for GitHub Actions

version: 2
updates:

  - package-ecosystem: "github-actions"
    directory: "/"
    schedule:
      # Check for updates to GitHub Actions every week
      interval: "weekly"
```

## Configurando o {% data variables.product.prodname_dependabot_version_updates %} para ações

Ao habilitar as {% data variables.product.prodname_dependabot_version_updates %} para as ações, você precisa especificar valores para `package-ecosystem`, `directory` e `schedule.interval`. Há muitas propriedades opcionais adicionais que você pode definir para personalizar ainda mais suas atualizações de versão. Para obter mais informações, confira "[Opções de configuração para o arquivo dependabot.yml](/github/administering-a-repository/configuration-options-for-dependency-updates)".

## Leitura adicional

- "[Sobre o GitHub Actions](/actions/getting-started-with-github-actions/about-github-actions)"
