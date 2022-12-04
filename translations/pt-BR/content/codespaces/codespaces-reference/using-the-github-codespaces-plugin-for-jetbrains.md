---
title: Como usar o plug-in dos GitHub Codespaces para JetBrains
shortTitle: Plugin for JetBrains
intro: 'Você pode usar o plug-in dos {% data variables.product.prodname_github_codespaces %} para o aplicativo cliente JetBrains para saber mais sobre o codespace ou interromper o codespace quando terminar de trabalhar.'
versions:
  fpt: '*'
  ghec: '*'
type: reference
topics:
  - Codespaces
ms.openlocfilehash: 3f4ef139386e616d14ef9a9cc5b474c96983de91
ms.sourcegitcommit: 1a77ceb9e20c002173dda983db9405bcd5be254a
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 11/29/2022
ms.locfileid: '148185174'
---
{% data reusables.codespaces.codespaces-jetbrains-beta-note %}

## Sobre os plug-ins dos {% data variables.product.prodname_github_codespaces %}

O aplicativo cliente JetBrains é iniciado quando você se conecta a um codespace por meio do aplicativo JetBrains Gateway. Ele permite que você use os {% data variables.product.prodname_github_codespaces %} com o IDE do JetBrains favorito. Para obter mais informações, confira "[Como usar {% data variables.product.prodname_github_codespaces %} no IDE do JetBrains](/codespaces/developing-in-codespaces/using-github-codespaces-in-your-jetbrains-ide)".

O plug-in dos {% data variables.product.prodname_github_codespaces %} já está instalado no cliente JetBrains quando você se conecta a um codespace do JetBrains Gateway. O plug-in adiciona a janela de ferramentas dos {% data variables.product.prodname_github_codespaces %} à interface do usuário.

Clique em **{% data variables.product.prodname_github_codespaces %}** na parte inferior esquerda da janela do aplicativo do cliente JetBrains para abrir a janela de ferramentas dos {% data variables.product.prodname_github_codespaces %}.

![Captura de tela da janela de ferramentas dos {% data variables.product.prodname_github_codespaces %}](/assets/images/help/codespaces/jetbrains-codespaces-tool-window.png)

## Como usar a janela de ferramentas dos {% data variables.product.prodname_github_codespaces %}

A janela de ferramentas dos {% data variables.product.prodname_github_codespaces %} mostra:
* O repositório por meio do qual você criou esse codespace.
* O nome de exibição do codespace.
* O branch atual.
* As especificações do computador.
* O tempo em que esse codespace pode permanecer ocioso antes de ser interrompido automaticamente.
* A idade do codespace.
* O período em que um codespace parado ficará retido antes de ser excluído automaticamente.

Os ícones na parte superior da janela de ferramentas dos {% data variables.product.prodname_github_codespaces %} fornecem as seguintes funções.

* **Atualizar o codespace ativo**

  ![Captura de tela do botão Atualizar](/assets/images/help/codespaces/jetbrains-plugin-icon-refresh.png)

  Atualize os detalhes da janela de ferramentas do {% data variables.product.prodname_github_codespaces %}. Por exemplo, se você usou a {% data variables.product.prodname_cli %} para alterar o nome de exibição, clique nesse botão para mostrar o novo nome.

* **Gerenciar os codespaces na Web**

  ![Captura de tela do botão de lista](/assets/images/help/codespaces/jetbrains-plugin-icon-index.png)

  Abra a lista de codespaces em https://github.com/codespaces.

* **Exibir o log de criação do codespace**

  ![Captura de tela do botão de log](/assets/images/help/codespaces/jetbrains-plugin-icon-log.png)

  Abra o log de criação do codespace na janela do editor. Para ver mais informações, confira "[Logs do {% data variables.product.prodname_github_codespaces %}](/codespaces/troubleshooting/github-codespaces-logs)."
