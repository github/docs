---
title: Como usar o GitHub Codespaces em solicitações de pull
shortTitle: Pull requests
intro: 'Você pode usar {% data variables.product.prodname_github_codespaces %} no navegador da Web ou no {% data variables.product.prodname_vscode %} para criar e examinar solicitações de pull, além de analisar comentários de revisão.'
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Codespaces
  - Visual Studio Code
  - Developer
redirect_from:
  - /codespaces/developing-in-codespaces/using-codespaces-for-pull-requests
ms.openlocfilehash: 6932f8eb9095987bfe808080983970c8807b6d93
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 11/09/2022
ms.locfileid: '148159336'
---
## Sobre as solicitações de pull do {% data variables.product.prodname_github_codespaces %}

{% data variables.product.prodname_github_codespaces %} fornece a você muitas das funcionalidades que você pode precisar para trabalhar com solicitações de pull:

- [Criar uma solicitação de pull](/codespaces/developing-in-codespaces/using-source-control-in-your-codespace#raising-a-pull-request) – Usando os comandos do terminal e do Git ou a exibição de Controle do Código-Fonte, você pode criar solicitações de pull da mesma forma que faria no {% data variables.product.prodname_dotcom_the_website %}. Se o repositório usar um modelo de pull request, você poderá usá-lo na visualização de controle de origem.
- [Abrir uma solicitação de pull](#opening-a-pull-request-in-codespaces) – Você pode abrir uma solicitação de pull existente em um codespace, desde que tenha acesso de codespace no branch que está sendo mesclado.
- [Revisar uma solicitação de pull](#reviewing-a-pull-request-in-codespaces) – Depois de abrir uma solicitação de pull em um codespace, use a exibição "Solicitação de Pull do GitHub" para adicionar comentários de revisão e aprovar solicitações de pull. Use também os {% data variables.product.prodname_github_codespaces %} para [ver comentários de revisão](#view-comments-from-a-review-in-codespaces).

## Abrir um pull request em {% data variables.product.prodname_codespaces %}

{% data reusables.repositories.sidebar-pr %}

1. Na lista de pull requests, clique no pull request que deseja abrir em {% data variables.product.prodname_codespaces %}.
1. No lado direito da tela, clique em **{% octicon "code" aria-label="The code icon" %} Código**. 
1. Na guia {% data variables.product.prodname_codespaces %}, clique no sinal de adição ({% octicon "plus" aria-label="The plus icon" %})

   ![Opção para abrir RP em um codespace](/assets/images/help/codespaces/open-with-codespaces-pr.png)

   Um codespace é criado para o branch de solicitação de pull e é aberto no editor padrão dos {% data variables.product.prodname_github_codespaces %}.

## Revendo um pull request em {% data variables.product.prodname_codespaces %}

1. Com o editor padrão definido como {% data variables.product.prodname_vscode %} ou {% data variables.product.prodname_vscode %} para Web, abra a solicitação de pull em um codespace, conforme a descrição em "[Como abrir uma solicitação de pull](/codespaces/developing-in-codespaces/using-codespaces-for-pull-requests#opening-a-pull-request-in-codespaces)" acima.
2. Na barra de atividades, clique na exibição **Solicitação de Pull do GitHub**. Essa exibição só aparece quando você abre uma solicitação de pull em um codespace.
  ![Opção usada para abrir uma PR em um codespace](/assets/images/help/codespaces/github-pr-view.png)
3. Para examinar um arquivo específico, clique no ícone **Abrir Arquivo** na barra lateral.
  ![Opção usada para abrir uma PR em um codespace](/assets/images/help/codespaces/changes-in-files.png)
4. Para adicionar comentários de revisão, clique no ícone **+** ao lado do número da linha. Digite seu comentário de revisão e clique em **Iniciar Revisão**.
  ![Opção usada para abrir uma PR em um codespace](/assets/images/help/codespaces/start-review.png)
5. Quando terminar de adicionar comentários de revisão, na barra lateral, você poderá optar por enviar os comentários, aprovar as alterações ou solicitar alterações.
  ![Opção usada para abrir uma PR em um codespace](/assets/images/help/codespaces/submit-review.png)

Para obter mais informações sobre como revisar uma solicitação de pull, confira "[Como revisar as alterações propostas em uma solicitação de pull](/github/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/reviewing-proposed-changes-in-a-pull-request)".

## Visualizar de uma revisão em {% data variables.product.prodname_codespaces %}

Depois de receber comentários sobre uma solicitação de pull, você pode [abri-los em um codespace](#opening-a-pull-request-in-codespaces) no navegador da Web ou no {% data variables.product.prodname_vscode_shortname %}, para ver os [comentários de revisão](#reviewing-a-pull-request-in-codespaces). A partir de lá você pode responder a comentários, adicionar reações ou ignorar a revisão. 

  ![Opção para abrir RP em um codespace](/assets/images/help/codespaces/incorporating-codespaces.png)



