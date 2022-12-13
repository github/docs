---
title: Trabalhando com suporte para codespaces
intro: Dicas para obter a melhor ajuda do suporte para {% data variables.product.prodname_codespaces %}.
product: '{% data reusables.gated-features.codespaces %}'
versions:
  fpt: '*'
  ghec: '*'
type: reference
topics:
- Codespaces
shortTitle: Working with support
ms.openlocfilehash: f072b48eebd5bdc613da725a0ac7a1b5bb0fbb8d
ms.sourcegitcommit: 22d665055b1bee7a5df630385e734e3a149fc720
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 07/13/2022
ms.locfileid: "145084144"
---
Antes de o suporte poder ajudar você com problemas com codespaces, você precisa saber o nome e o ID (identificador) do seu codespace. Além disso, o suporte pode pedir que você compartilhe alguns registros. Para obter mais informações, confira "[Logs de codespaces](/codespaces/troubleshooting/codespaces-logs)" e "[Sobre o Suporte do GitHub](/github/working-with-github-support/about-github-support)".

### <a name="codespace-names"></a>Nomes do codespace

Cada codespace tem um nome único que é uma combinação da manipulação de {% data variables.product.company_short %}, do nome do repositório e alguns caracteres aleatórios. Os caracteres adicionais permitem que você tenha codespaces para diferentes branches no mesmo repositório. Por exemplo: `octocat-myrepo-gmc7`.

Para encontrar o nome de um codespace:

- Abra o codespace no navegador. O subdomínio da URL é o nome do codespace. Por exemplo: `https://octocat-myrepo-gmc7.github.dev` é a URL do codespace `octocat-myrepo-gmc7`.
- Se você não puder abrir um codespace, acesse o nome no {% data variables.product.product_name %} em https://github.com/codespaces. O nome é mostrado em um pop-up quando você posiciona o cursor sobre a opção **Abrir no navegador** em https://github.com/codespaces. 
  ![Nome do codespace mostrado quando o cursor é posicionado sobre a opção](/assets/images/help/codespaces/find-codespace-name-github.png)

O nome do código também está incluído em muitos dos arquivos de registro. Por exemplo, nos logs do codespace como o valor de `friendlyName`, no log de extensão do {% data variables.product.prodname_github_codespaces %} após `making GET request for` e no log do console do navegador após `clientUrl`. Para obter mais informações, confira "[Logs de codespaces](/codespaces/troubleshooting/codespaces-logs)".

### <a name="codespaces-ids"></a>IDs de codespaces

Todos os codespaces também possuem um ID (identificador). Ele não é exibido por padrão em {% data variables.product.prodname_vscode %}. Portanto, é possível que você precise atualizar as configurações para a extensão {% data variables.product.prodname_github_codespaces %} antes de acessar o ID.

1. No {% data variables.product.prodname_vscode %}, no navegador ou na área de trabalho, na barra de atividades à esquerda, clique em **Gerenciador Remoto** para mostrar detalhes do codespace.
2. Se a barra lateral incluir uma seção "Desempenho do codespace", passe o mouse sobre o "ID do codespace" e clique no ícone da área de transferência para copiar o ID.
3. Se a informação não for exibida, clique em {% octicon "gear" aria-label="The gear icon" %} no canto inferior esquerdo da barra de atividade, para exibir a aba "Configurações".
4. Expanda **Extensões** e clique em **{% data variables.product.prodname_github_codespaces %}** para ver as configurações da extensão. Em seguida, habilite **Mostrar Gerenciador de Desempenho** para ver a seção "Desempenho do Codespace" na barra lateral.
  ![ID do codespace e configurações necessárias para ver as informações de desempenho](/assets/images/help/codespaces/find-codespace-id.png)
