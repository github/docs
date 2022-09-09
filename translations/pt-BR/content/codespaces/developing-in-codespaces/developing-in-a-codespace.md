---
title: Desenvolver em um codespace
intro: 'Você pode abrir um codespace em {% data variables.product.product_name %} e, em seguida, desenvolver usando os recursos do {% data variables.product.prodname_vscode %}.'
product: '{% data reusables.gated-features.codespaces %}'
redirect_from:
  - /github/developing-online-with-github-codespaces/developing-in-a-codespace
  - /github/developing-online-with-codespaces/developing-in-a-codespace
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Codespaces
  - Fundamentals
  - Developer
shortTitle: Develop in a codespace
ms.openlocfilehash: 70b7b5b91e68b80033edd59ae3a7826e0e2ee25f
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147614348'
---
## Sobre o desenvolvimento com os {% data variables.product.prodname_github_codespaces %}

Os {% data variables.product.prodname_github_codespaces %} oferecem a experiência completa de desenvolvimento do {% data variables.product.prodname_vscode %}. {% data reusables.codespaces.use-visual-studio-features %}

{% data reusables.codespaces.links-to-get-started %}

![Visão geral do codespace com anotações](/assets/images/help/codespaces/codespace-overview-annotated.png)

1. Barra lateral - Por padrão, esta área mostra os arquivos do seu projeto no Explorador.
2. Barra de Atividades - Exibe a visualização e fornece uma maneira de alternar entre elas. Você pode reordenar as Visualizações arrastando e soltando-as.
3. Editor - É aqui que você edita seus arquivos. Você pode usar a aba para cada editor para posicioná-lo exatamente onde você precisa.
4. Painéis - É aqui que você pode visualizar as informações de saída e depuração, bem como o local padrão para o Terminal integrado.
5. Barra de Status - Esta área fornece informações úteis sobre seu codespace e projeto. Por exemplo, o nome da agência, portas configuradas e muito mais.

Para obter mais informações sobre como usar o {% data variables.product.prodname_vscode_shortname %}, consulte o [guia da Interface do Usuário](https://code.visualstudio.com/docs/getstarted/userinterface) na documentação do {% data variables.product.prodname_vscode_shortname %}.

{% data reusables.codespaces.connect-to-codespace-from-vscode %}

{% data reusables.codespaces.use-chrome %} Para obter mais informações, consulte "[Solução de problemas de clientes de Codespaces](/codespaces/troubleshooting/troubleshooting-codespaces-clients)".

### Personalizando seu codespace

{% data reusables.codespaces.about-personalization %} Para obter mais informações, confira "[Como personalizar os {% data variables.product.prodname_github_codespaces %} da sua conta](/codespaces/customizing-your-codespace/personalizing-github-codespaces-for-your-account)".

{% data reusables.codespaces.apply-devcontainer-changes %} Para obter mais informações, consulte "[Configuração de {% data variables.product.prodname_codespaces %} para seu projeto](/github/developing-online-with-codespaces/configuring-codespaces-for-your-project#apply-changes-to-your-configuration)".

### Executando seu aplicativo a partir de um codespace
{% data reusables.codespaces.about-port-forwarding %} Para obter mais informações, consulte "[Encaminhamento de portas em seu codespace](/github/developing-online-with-codespaces/forwarding-ports-in-your-codespace)".

### Fazendo commit das suas alterações

{% data reusables.codespaces.committing-link-to-procedure %} 

### Usando o {% data variables.product.prodname_vscode_command_palette %}

O {% data variables.product.prodname_vscode_command_palette %} permite que você acesse e gerencie muitas funcionalidades para {% data variables.product.prodname_codespaces %} e {% data variables.product.prodname_vscode_shortname %}. Para obter mais informações, consulte "[Uso do {% data variables.product.prodname_vscode_command_palette_shortname %} em {% data variables.product.prodname_codespaces %}](/codespaces/codespaces-reference/using-the-vs-code-command-palette-in-codespaces)".

## Acessar um codespace existente

1. {% data reusables.codespaces.you-can-see-all-your-codespaces %}
2. Clique no nome do codespace em que você deseja desenvolver.
  ![Nome do codespace](/assets/images/help/codespaces/click-name-codespace.png)

Como alternativa, você pode ver qualquer codespace ativo para um repositório ao navegar até o repositório e selecionar **Código do {% octicon "code" aria-label="The code icon" %}** . O menu suspenso exibirá todos os codespaces ativos de um repositório.
