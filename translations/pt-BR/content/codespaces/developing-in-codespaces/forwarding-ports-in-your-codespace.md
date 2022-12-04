---
title: Encaminhar portas no seu código
intro: '{% data reusables.codespaces.about-port-forwarding %}'
versions:
  fpt: '*'
  ghec: '*'
redirect_from:
  - /github/developing-online-with-codespaces/forwarding-ports-in-your-codespace
type: how_to
topics:
  - Codespaces
  - Fundamentals
  - Developer
shortTitle: Forward ports
ms.openlocfilehash: 320a2e42d647452056961d4f0f987c3c5db49476
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 11/09/2022
ms.locfileid: '148158906'
---
{% jetbrains %}

{% data reusables.codespaces.codespaces-jetbrains-beta-note %}

{% endjetbrains %}

## Sobre as portas encaminhadas

O redirecionamento de porta dá acesso a portas TCP que estão em execução no seu codespace. Por exemplo, se você estiver executando um aplicativo web em uma determinada porta no seu codespace, você pode encaminhar essa porta. Isso permite que você acesse o aplicativo do navegador na sua máquina local para testes e depuração.

{% webui %}

{% data reusables.codespaces.port-forwarding-intro-non-jetbrains %} {% data reusables.codespaces.navigate-to-ports-tab %}
1. Na lista de portas, clique em **Adicionar porta**.

   ![Botão adicionar porta](/assets/images/help/codespaces/add-port-button.png)

1. Digite o número da porta ou endereço e, em seguida, pressione enter.

   ![Caixa de texto para o botão digitar porta](/assets/images/help/codespaces/port-number-text-box.png)

## Usando encaminhamento de HTTPS

Por padrão, {% data variables.product.prodname_github_codespaces %} encaminha portas usando HTTP, mas é possível atualizar qualquer porta para usar HTTPS, conforme necessário. Se uma porta com visibilidade pública for atualizada para usar HTTPS, a visibilidade dela mudará automaticamente para privada.

{% data reusables.codespaces.navigate-to-ports-tab %}
1. Clique com o botão direito do mouse na porta que deseja atualizar e posicione o cursor sobre **Alterar Protocolo de Porta**.
  ![Opção para alterar o protocolo de porta](/assets/images/help/codespaces/update-port-protocol.png)
1. Selecione o protocolo necessário para esta porta. O protocolo que você selecionar será lembrado por esta porta durante o ciclo de vida do codespace.

{% data reusables.codespaces.port-forwarding-sharing-non-jetbrains %}

{% data reusables.codespaces.navigate-to-ports-tab %}
1. Clique com o botão direito do mouse na porta que deseja compartilhar, selecione o menu "Visibilidade da Porta" e clique em **Privado para Organização** ou **Público**.
  ![Opção para selecionar a visibilidade da porta no menu de atalho](/assets/images/help/codespaces/make-public-option.png)
1. À direita do endereço local para a porta, clique no ícone copiar.
  ![Ícone de Copiar para a URL da porta](/assets/images/help/codespaces/copy-icon-port-url.png)
1. Envie a URL copiada para a pessoa com quem você deseja compartilhar a porta.

{% data reusables.codespaces.port-forwarding-labeling-non-jetbrains %} {% data reusables.codespaces.port-forwarding-adding-non-jetbrains %}

{% endwebui %}

{% vscode %}

{% data reusables.codespaces.port-forwarding-intro-non-jetbrains %} {% data reusables.codespaces.navigate-to-ports-tab %}
1. Na lista de portas, clique em **Adicionar porta**.

   ![Botão adicionar porta](/assets/images/help/codespaces/add-port-button.png)

1. Digite o número da porta ou endereço e, em seguida, pressione enter.

   ![Caixa de texto para o botão digitar porta](/assets/images/help/codespaces/port-number-text-box.png)

{% data reusables.codespaces.port-forwarding-sharing-non-jetbrains %}

{% data reusables.codespaces.navigate-to-ports-tab %}
1. Clique com o botão direito do mouse na porta que deseja compartilhar, selecione o menu "Visibilidade da Porta" e clique em **Privado para Organização** ou **Público**.
  ![Opção para tornar a porta pública no menu de atalho](/assets/images/help/codespaces/make-public-option.png)
1. À direita do endereço local para a porta, clique no ícone copiar.
  ![Ícone de Copiar para a URL da porta](/assets/images/help/codespaces/copy-icon-port-url.png)
1. Envie a URL copiada para a pessoa com quem você deseja compartilhar a porta.

{% data reusables.codespaces.port-forwarding-labeling-non-jetbrains %} {% data reusables.codespaces.port-forwarding-adding-non-jetbrains %}

{% endvscode %}


{% cli %}

{% data reusables.cli.cli-learn-more %}

Para encaminhar uma porta, use o subcomando `gh codespace ports forward`. Substitua `codespace-port:local-port` pelas portas remotas e locais que deseja conectar. Depois de entrar no comando, escolha entre a lista de codespaces exibidos.

```shell
gh codespace ports forward CODESPACE-PORT:LOCAL-PORT
```

Para obter mais informações sobre esse comando, confira [o manual da {% data variables.product.prodname_cli %}](https://cli.github.com/manual/gh_codespace_ports_forward).

Para ver os detalhes das portas encaminhadas, insira `gh codespace ports` e escolha um codespace.

{% data reusables.codespaces.port-forwarding-sharing-non-jetbrains %}

Para alterar a visibilidade de uma porta encaminhada, use o subcomando `gh codespace ports visibility`. {% data reusables.codespaces.port-visibility-settings %}

Substitua `codespace-port` pelo número da porta encaminhada. Substitua `setting` por `private`, `org` ou `public`. Depois de entrar no comando, escolha entre a lista de codespaces exibidos.

```shell
gh codespace ports visibility CODESPACE-PORT:SETTINGS
```

Você pode definir a visibilidade de várias portas com um comando. Por exemplo:

```shell
gh codespace ports visibility 80:private 3000:public 3306:org
```

Para obter mais informações sobre esse comando, confira [o manual da {% data variables.product.prodname_cli %}](https://cli.github.com/manual/gh_codespace_ports_visibility).

{% data reusables.codespaces.port-forwarding-labeling-non-jetbrains %}

Você pode ver os rótulos de porta ao listar as portas encaminhadas para um codespace. Para fazer isso, use o comando `gh codespace ports` e selecione um codespace.

{% data reusables.codespaces.port-forwarding-adding-non-jetbrains %}

{% endcli %}

{% jetbrains %}

## Encaminhar uma porta

Para obter informações sobre como encaminhar uma porta em um codespace para uma porta em seu computador local, consulte a seção "Encaminhamento de porta" do artigo "[Modelo de segurança](https://www.jetbrains.com/help/idea/security-model.html#port_forwarding)" na documentação do JetBrains.

Como alternativa, você pode usar {% data variables.product.prodname_cli %} para encaminhar uma porta. Para obter mais informações, clique na guia "{% data variables.product.prodname_cli %}" na parte superior desta página.

{% endjetbrains %}
