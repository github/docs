---
title: Recuperar tu contraseña de clave SSH
intro: 'Si perdiste tu contraseña de clave SSH, según el sistema operativo que utilices, puedes recuperarla o generar una nueva contraseña de clave SSH.'
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

Si [configuraste tu contraseña de clave SSH con OS X Keychain](/articles/working-with-ssh-key-passphrases#saving-your-passphrase-in-the-keychain), quizás puedas recuperarla.

1. En Finder (Buscador), busca la aplicación **Keychain Access** (Acceso keychain). ![Barra Spotlight Search (Búsqueda de Spotlight)](/assets/images/help/setup/keychain-access.png)
2. En Keychain Access (Acceso keychain), busca **SSH**.
3. Haz doble clic en la entrada de tu clave SSH para abrir un nuevo cuadro de diálogo.
4. En la esquina inferior izquierda, selecciona **Show password** (Mostrar contraseña). ![Diálogo Keychain access (Acceso keychain)](/assets/images/help/setup/keychain_show_password_dialog.png)
5. Se te solicitará tu contraseña administrativa. Escríbela en el cuadro de diálogo "Keychain Access" (Acceso keychain).
6. Se revelará tu contraseña.

{% endmac %}

{% windows %}

Si pierdes tu contraseña de clave SSH, no hay forma de recuperarla. Tendrás que [generar un nuevo par de claves SSH comercial](/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent) o [cambiar a la clonación de HTTPS](/articles/changing-a-remote-s-url/#switching-remote-urls-from-ssh-to-https) para poder utilizar tu contraseña de GitHub en su lugar.

{% endwindows %}

{% linux %}

Si pierdes tu contraseña de clave SSH, no hay forma de recuperarla. Tendrás que [generar un nuevo par de claves SSH comercial](/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent) o [cambiar a la clonación de HTTPS](/articles/which-remote-url-should-i-use/#cloning-with-https-urls) para poder utilizar tu contraseña de GitHub en su lugar.

{% endlinux %}
