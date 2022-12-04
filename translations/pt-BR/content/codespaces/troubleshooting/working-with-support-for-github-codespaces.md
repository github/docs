---
title: Como trabalhar com o suporte para o GitHub Codespaces
intro: 'Dicas para obter a melhor ajuda do suporte para {% data variables.product.prodname_github_codespaces %}.'
versions:
  fpt: '*'
  ghec: '*'
type: reference
topics:
  - Codespaces
shortTitle: Working with support
redirect_from:
  - /codespaces/troubleshooting/working-with-support-for-codespaces
ms.openlocfilehash: a4db589cb5d8de71e6e8c7d109e0156885c33848
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 11/09/2022
ms.locfileid: '148159308'
---
Para que o suporte possa ajudar nos problemas com codespaces, você precisa saber o nome e a ID (identificador) do codespace. Além disso, o suporte pode pedir que você compartilhe alguns registros. Para ver mais informações, confira "[Logs do {% data variables.product.prodname_github_codespaces %}](/codespaces/troubleshooting/github-codespaces-logs) e "[Sobre o suporte do GitHub](/github/working-with-github-support/about-github-support)".

## Nomes do codespace

Cada codespace tem um nome exclusivo que é uma combinação do identificador do {% data variables.product.company_short %}, duas ou três palavras geradas automaticamente e alguns caracteres aleatórios. Por exemplo: `octocat-literate-space-parakeet-mld5`. As duas ou três palavras geradas automaticamente também formam o nome de exibição inicial do codespace, nesse caso, `literate-space-parakeet`. Você pode alterar o nome de exibição de um codespace, mas isso não afetará o nome permanente. Para saber mais, confira "[Como renomear um codespace](/codespaces/customizing-your-codespace/renaming-a-codespace)".

Para encontrar o nome de um codespace:

- Abra o codespace no navegador. O subdomínio da URL é o nome do codespace. Por exemplo: `https://octocat-literate-space-parakeet-mld5.github.dev` é a URL do codespace `octocat-literate-space-parakeet-mld5`.
- Se você não puder abrir um codespace, acesse o nome no {% data variables.product.product_name %} em https://github.com/codespaces. O nome é mostrado em um pop-up quando você focaliza o nome de exibição de um codespace em https://github.com/codespaces. 
  ![Nome do codespace mostrado quando o cursor é posicionado sobre a opção](/assets/images/help/codespaces/find-codespace-name-github.png)

O nome do código também está incluído em muitos dos arquivos de registro. Por exemplo, nos logs do codespace como o valor de `friendlyName`, no log de extensão do {% data variables.product.prodname_github_codespaces %} após `making GET request for` e no log do console do navegador após `clientUrl`. Para ver mais informações, confira "[Logs do {% data variables.product.prodname_github_codespaces %}](/codespaces/troubleshooting/github-codespaces-logs)."

## IDs de codespaces

Todos os codespaces também possuem um ID (identificador). Ele não é exibido por padrão em {% data variables.product.prodname_vscode %}. Portanto, é possível que você precise atualizar as configurações para a extensão {% data variables.product.prodname_github_codespaces %} antes de acessar o ID.

1. No {% data variables.product.prodname_vscode %}, no navegador ou na área de trabalho, na barra de atividades à esquerda, clique em **Gerenciador Remoto** para mostrar detalhes do codespace.
{% indented_data_reference reusables.codespaces.remote-explorer spaces=3 %}
1. Se a barra lateral incluir uma seção "Desempenho do codespace", passe o mouse sobre o "ID do codespace" e clique no ícone da área de transferência para copiar o ID.
1. Se a informação não for exibida, clique em {% octicon "gear" aria-label="The gear icon" %} no canto inferior esquerdo da barra de atividade, para exibir a aba "Configurações".
1. Expanda **Extensões** e clique em **{% data variables.product.prodname_github_codespaces %}** para ver as configurações da extensão. Em seguida, habilite **Mostrar Gerenciador de Desempenho** para ver a seção "Desempenho do Codespace" na barra lateral.
  ![ID do codespace e configurações necessárias para ver as informações de desempenho](/assets/images/help/codespaces/find-codespace-id.png)
