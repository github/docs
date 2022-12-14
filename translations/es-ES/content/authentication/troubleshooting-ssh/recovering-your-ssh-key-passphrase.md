---
title: Recuperar tu contraseña de clave SSH
intro: 'Si perdiste tu contraseña de clave SSH, según el sistema operativo que utilices, puedes recuperarla o generar una nueva contraseña de clave SSH.'
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
ms.contentlocale: es-ES
ms.lasthandoff: 09/10/2022
ms.locfileid: '145091727'
---
{% mac %}

Si [ha configurado la frase de contraseña SSH con la cadena de claves de macOS](/articles/working-with-ssh-key-passphrases#saving-your-passphrase-in-the-keychain), es posible que pueda recuperarla.

1. En Finder (Buscador), busque la aplicación **Keychain Access**.
   ![Barra de búsqueda de Spotlight](/assets/images/help/setup/keychain-access.png)
2. En Keychain Access, busque **SSH**.
3. Haz doble clic en la entrada de tu clave SSH para abrir un nuevo cuadro de diálogo.
4. En la esquina inferior izquierda, seleccione **Show password** (Mostrar contraseña).
   ![Cuadro de diálogo de Keychain Access](/assets/images/help/setup/keychain_show_password_dialog.png)
5. Se te solicitará tu contraseña administrativa. Escríbela en el cuadro de diálogo "Keychain Access" (Acceso keychain).
6. Se revelará tu contraseña.

{% endmac %}

{% windows %}

Si pierdes tu contraseña de clave SSH, no hay forma de recuperarla. Deberá [generar un nuevo par de claves SSH](/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent) o [cambiar a clonación HTTPS](/github/getting-started-with-github/managing-remote-repositories) para poder usar la contraseña de GitHub en su lugar.

{% endwindows %}

{% linux %}

Si pierdes tu contraseña de clave SSH, no hay forma de recuperarla. Deberá [generar un nuevo par de claves SSH](/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent) o [cambiar a clonación HTTPS](/github/getting-started-with-github/about-remote-repositories/#cloning-with-https-urls) para poder usar la contraseña de GitHub en su lugar.

{% endlinux %}
