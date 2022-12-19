---
title: Recuperar frase secreta da chave SSH
intro: 'Se você perder a frase secreta da chave SSH, poderá recuperá-la ou gerar uma nova, dependendo do sistema operacional usado.'
redirect_from:
  - /articles/how-do-i-recover-my-passphrase
  - /articles/how-do-i-recover-my-ssh-key-passphrase
  - /articles/recovering-your-ssh-key-passphrase
  - /github/authenticating-to-github/recovering-your-ssh-key-passphrase
  - /github/authenticating-to-github/troubleshooting-ssh/recovering-your-ssh-key-passphrase
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - SSH
shortTitle: Recover SSH key passphrase
ms.openlocfilehash: 28d768e81f3076898c23b2b1668314ae5573ec5c
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/10/2022
ms.locfileid: '145083537'
---
{% mac %}

Se você [configurou a frase secreta do SSH com o conjunto de chaves do macOS](/articles/working-with-ssh-key-passphrases#saving-your-passphrase-in-the-keychain), talvez consiga recuperá-la.

1. No Localizador, procure o aplicativo **Acesso ao Conjunto de Chaves**.
   ![Barra de pesquisa do Spotlight](/assets/images/help/setup/keychain-access.png)
2. Em Acesso ao Conjunto de Chaves, procure **SSH**.
3. Clique duas vezes na entrada da chave SSH para abrir uma nova caixa de diálogo.
4. No canto inferior esquerdo, selecione **Mostrar senha**.
   ![Caixa de diálogo Acesso ao conjunto de chaves](/assets/images/help/setup/keychain_show_password_dialog.png)
5. A senha de administrador será solicitada. Insira a senha na caixa de diálogo "Acesso às Chaves".
6. A senha será exibida.

{% endmac %}

{% windows %}

Se você perder a frase secreta da chave SSH, não haverá como recuperá-la. Você precisará [gerar um novo par de chaves SSH](/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent) ou [alternar para a clonagem HTTPS](/github/getting-started-with-github/managing-remote-repositories) para usar sua senha do GitHub.

{% endwindows %}

{% linux %}

Se você perder a frase secreta da chave SSH, não haverá como recuperá-la. Você precisará [gerar um novo par de chaves SSH](/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent) ou [alternar para a clonagem HTTPS](/github/getting-started-with-github/about-remote-repositories/#cloning-with-https-urls) para usar sua senha do GitHub.

{% endlinux %}
