---
title: Instalar o GitHub Desktop
shortTitle: Installation
intro: É possível instalar o GitHub para Desktop nos sistemas operacionais Windows ou macOS suportados.
redirect_from:
  - /desktop/getting-started-with-github-desktop/installing-github-desktop
  - /desktop/installing-and-configuring-github-desktop/installing-github-desktop
versions:
  fpt: '*'
ms.openlocfilehash: 4947bff541682887817198c714e7e78bff2cfc9f
ms.sourcegitcommit: 5f9527483381cfb1e41f2322f67c80554750a47d
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/11/2022
ms.locfileid: '147882776'
---
## Sobre a instalação do {% data variables.product.prodname_desktop %}

Você pode instalar {% data variables.product.prodname_desktop %} em sistemas operacionais compatíveis, que incluem atualmente {% data variables.desktop.mac-osx-versions %} e {% data variables.desktop.windows-versions %}. Se você tiver uma conta em {% data variables.product.prodname_dotcom %} ou {% data variables.product.prodname_enterprise %}, você pode conectar sua conta ao {% data variables.product.prodname_desktop %}. Para obter mais informações sobre como criar uma conta, confira "[Como se inscrever para uma nova conta do {% data variables.product.prodname_dotcom %}](/articles/signing-up-for-a-new-github-account/)" ou entre em contato com o administrador do site do {% data variables.product.prodname_enterprise %}.

{% windows %}

Se você é um administrador de rede, implante o {% data variables.product.prodname_desktop %} para os computadores que executam o Windows em uma rede gerenciada pelo Active Directory usando o arquivo de pacote do Windows Installer (`.msi`) com a Política de Grupo ou outro sistema de instalação remota.

O pacote do Windows Installer extrai o instalador autônomo (`.exe`) e configura o Windows para instalar o {% data variables.product.prodname_desktop %} na próxima vez que um usuário se conectar à estação de trabalho. Os usuários devem ter permissão para instalar o {% data variables.product.prodname_desktop %} em seus respectivos diretórios.

Se um usuário executa o pacote do Windows Installer para {% data variables.product.prodname_desktop %} diretamente, para completar a instalação, o usuário deve sair da sua estação de trabalho e depois iniciar a sessão novamente.

{% endwindows %}

## Baixar e instalar o {% data variables.product.prodname_desktop %}

{% mac %}

Você pode instalar o {% data variables.product.prodname_desktop %} nas versões {% data variables.desktop.mac-osx-versions %}.

{% data reusables.desktop.download-desktop-page %}
2. Clique em **Baixar para macOS**.
  ![Botão Baixar para macOS](/assets/images/help/desktop/download-for-mac.png)
3. Na pasta `Downloads` do computador, clique duas vezes no arquivo zip do **{% data variables.product.prodname_desktop %}** .
  ![O arquivo GitHubDesktop.zip](/assets/images/help/desktop/mac-zipfile.png)
4. Depois de descompactar o arquivo, clique duas vezes em **{% data variables.product.prodname_desktop %}** .
5. {% data variables.product.prodname_desktop %} será lançado após a instalação ser concluída.

{% endmac %}

{% windows %}

Você pode instalar o {% data variables.product.prodname_desktop %} nas versões {% data variables.desktop.windows-versions %}.

{% warning %}

**Aviso**: você precisa ter um sistema operacional de 64 bits para executar o {% data variables.product.prodname_desktop %}.

{% endwarning %}

{% data reusables.desktop.download-desktop-page %}
2. Clique em **Baixar para Windows**.
  ![Botão Baixar para Windows](/assets/images/help/desktop/download-for-windows.png)
3. Na pasta `Downloads` do computador, clique duas vezes no arquivo de instalação do **{% data variables.product.prodname_desktop %}** .
  ![Arquivo GitHubDesktopSetup](/assets/images/help/desktop/windows-githubdesktopsetup.png)
4. {% data variables.product.prodname_desktop %} será lançado após a instalação ser concluída.

{% endwindows %}
