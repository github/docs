---
title: Recuperar frase secreta da chave SSH
intro: 'Se você perder a frase secreta da chave SSH, poderá recuperá-la ou gerar uma nova, dependendo do sistema operacional usado.'
redirect_from:
  - /articles/how-do-i-recover-my-passphrase/
  - /articles/how-do-i-recover-my-ssh-key-passphrase/
  - /articles/recovering-your-ssh-key-passphrase
  - /github/authenticating-to-github/recovering-your-ssh-key-passphrase
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - SSH
---

{% mac %}

Se você [configurou sua frase secreta de SSH com a keychain do macOS](/articles/working-with-ssh-key-passphrases#saving-your-passphrase-in-the-keychain), você poderá recuperá-la.

1. Procure o app **Keychain Access** (Acesso a keychain) no Finder (Localizador). ![Barra de pesquisa do Spotlight](/assets/images/help/setup/keychain-access.png)
2. No Acesso às Chaves, pesquise **SSH**.
3. Clique duas vezes na entrada da chave SSH para abrir uma nova caixa de diálogo.
4. No canto inferior esquerdo, selecione **Mostrar senha**. ![Caixa de diálogo Acesso às Chaves](/assets/images/help/setup/keychain_show_password_dialog.png)
5. A senha de administrador será solicitada. Insira a senha na caixa de diálogo "Acesso às Chaves".
6. A senha será exibida.

{% endmac %}

{% windows %}

Se você perder a frase secreta da chave SSH, não haverá como recuperá-la. Você precisará [gerar uma nova chave SSH](/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent) ou [mudar para o clone HTTPS](/github/getting-started-with-github/managing-remote-repositories) para poder usar a senha do GitHub.

{% endwindows %}

{% linux %}

Se você perder a frase secreta da chave SSH, não haverá como recuperá-la. Você precisará [gerar uma nova chave SSH](/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent) ou [mudar para o clone HTTPS](/github/getting-started-with-github/about-remote-repositories/#cloning-with-https-urls) para poder usar a senha do GitHub.

{% endlinux %}
