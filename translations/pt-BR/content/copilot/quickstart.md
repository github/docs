---
title: Início Rápido para o GitHub Copilot
intro: 'O {% data variables.product.prodname_copilot %} pode ajudar com o seu trabalho, oferecendo sugestões embutidas à medida que você codifica.'
product: '{% data reusables.gated-features.copilot %}'
allowTitleToDifferFromFilename: true
versions:
  feature: copilot
shortTitle: Quickstart
topics:
  - Copilot
ms.openlocfilehash: d2131a506990a959f803b13353b794a9dd347174
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 12/09/2022
ms.locfileid: '148193163'
---
## Introdução

O {% data variables.product.prodname_copilot %} é um programador de par de IA. Você pode usar o {% data variables.product.prodname_copilot %} para obter sugestões para linhas inteiras ou funções inteiras diretamente dentro do editor.

Este guia irá mostrar a você como se inscrever para o {% data variables.product.prodname_copilot %} por meio de sua conta pessoal, instalar a extensão {% data variables.product.prodname_copilot %} no {% data variables.product.prodname_vscode %} e obter sua primeira sugestão. Para obter informações sobre o {% data variables.product.prodname_copilot %}, confira "[Sobre o {% data variables.product.prodname_copilot %}](/copilot/overview-of-github-copilot/about-github-copilot)". Para obter informações mais detalhadas sobre como usar o {% data variables.product.prodname_copilot %} em vários ambientes, confira "[Introdução](/copilot/getting-started-with-github-copilot)".

## Pré-requisitos

{% data reusables.copilot.copilot-prerequisites %}
- Para usar o {% data variables.product.prodname_copilot %} no {% data variables.product.prodname_vscode %}, o {% data variables.product.prodname_vscode %} precisa estar instalado. Para obter mais informações, confira a [documentação do {% data variables.product.prodname_vscode %}](https://code.visualstudio.com/).

## Inscrever-se no {% data variables.product.prodname_copilot %}

Antes de começar a usar o {% data variables.product.prodname_copilot %}, você precisará configurar uma avaliação gratuita ou assinatura para sua conta pessoal. 

{% note %}

**Nota:** se você for membro de uma organização pertencente a uma conta {% data variables.product.prodname_ghe_cloud %} com uma assinatura {% data variables.product.prodname_copilot %} e tiver sido atribuído a você uma estação {% data variables.product.prodname_copilot %} por sua organização, você poderá prosseguir para "[Como instalar a extensão {% data variables.product.prodname_copilot %} para {% data variables.product.prodname_vscode %}](/copilot/quickstart#installing-the-github-copilot-extension-for-visual-studio-code)".

{% endnote %}

{% data reusables.copilot.signup-procedure %}

## Instalação da extensão {% data variables.product.prodname_copilot %} do {% data variables.product.prodname_vscode %}

Para usar o {% data variables.product.prodname_copilot %}, você primeiro deve instalar a extensão {% data variables.product.prodname_vscode %}.

1. No {% data variables.product.prodname_vscode %} Marketplace, acesse a página da [extensão {% data variables.product.prodname_copilot %}](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot) e clique em **Instalar**.
   ![Instalar a extensão {% data variables.product.prodname_vscode %} do {% data variables.product.prodname_copilot %}](/assets/images/help/copilot/install-copilot-extension-visual-studio-code.png)
1. Um pop-up será exibido, solicitando que você abra o {% data variables.product.prodname_vscode %}. Clique em **Abrir o {% data variables.product.prodname_vscode %}** .
1. Na guia "Extensão: {% data variables.product.prodname_copilot %}" no {% data variables.product.prodname_vscode %}, clique em **Instalar**.
   ![Botão de instalação no {% data variables.product.prodname_vscode %}](/assets/images/help/copilot/in-visual-studio-code-install-button.png)
1. Se você ainda não tiver autorizado o {% data variables.product.prodname_vscode %} na conta do {% data variables.product.prodname_dotcom %}, será solicitado que você entre no {% data variables.product.prodname_dotcom %} no {% data variables.product.prodname_vscode %}.
   - Se você já tiver autorizado o {% data variables.product.prodname_vscode %} em sua conta do {% data variables.product.prodname_dotcom %}, o {% data variables.product.prodname_copilot %} será autorizado automaticamente.
   ![Captura da tela de autorização do {% data variables.product.prodname_vscode %}](/assets/images/help/copilot/vsc-copilot-authorize.png)
1. No navegador, o {% data variables.product.prodname_dotcom %} solicitará as permissões necessárias para o {% data variables.product.prodname_copilot %}. Para aprovar essas permissões, clique em **Autorizar o {% data variables.product.prodname_vscode %}** . 
1. No {% data variables.product.prodname_vscode %}, na caixa de diálogo "{% data variables.product.prodname_vscode %}", para confirmar a autenticação, clique em **Abrir**. 

## Obter sua primeira sugestão

{% data reusables.copilot.code-examples-limitations %}

{% data reusables.copilot.supported-languages %} Os exemplos a seguir estão em JavaScript, mas as outras linguagens funcionarão da mesma forma.

1. Abra o {% data variables.product.prodname_vscode %}.
O {% data reusables.copilot.create-js-file %} {% data reusables.copilot.type-function-header %} {% data variables.product.prodname_copilot %} sugerirá automaticamente todo um corpo da função em texto esmaecido, como mostrado abaixo. A sugestão exata pode variar.
![Primeira sugestão {% data variables.product.prodname_vscode %}](/assets/images/help/copilot/first-suggestion-visual-studio-code.png) {% data reusables.copilot.accept-suggestion %}

## Próximas etapas

Você instalou com êxito o {% data variables.product.prodname_copilot %} e recebeu sua primeira sugestão, mas isso é apenas o começo! Confira alguns recursos úteis para dar seus próximos passos com o {% data variables.product.prodname_copilot %}.

- [Introdução](/copilot/getting-started-with-github-copilot): você aprendeu a obter sua primeira sugestão no {% data variables.product.prodname_vscode %}. Esses guias mostram como configurar e navegar pelas várias funções do {% data variables.product.prodname_copilot %} em todos os ambientes com suporte.
- [{% data variables.product.prodname_copilot %}](https://copilot.github.com/): confira exemplos práticos de como o {% data variables.product.prodname_copilot %} pode ajudar você a trabalhar.
- [Configurar o {% data variables.product.prodname_copilot %}](/copilot/configuring-github-copilot): esses guias fornecem detalhes sobre como configurar o {% data variables.product.prodname_copilot %} para suas preferências pessoais.


## Leitura adicional

- [Sobre o {% data variables.product.prodname_copilot %}](/copilot/overview-of-github-copilot/about-github-copilot)
