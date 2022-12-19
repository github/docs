---
title: SSH-Schlüssel überprüfen
intro: 'Damit deine Anmeldeinformationen geschützt bleiben, solltest du deine SSH-Schlüssel und Bereitstellungsschlüssel regelmäßig prüfen und autorisierte Anwendungen überprüfen, die auf dein Konto auf {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %} zugreifen.'
redirect_from:
  - /articles/keeping-your-application-access-tokens-safe
  - /articles/keeping-your-ssh-keys-and-application-access-tokens-safe
  - /articles/reviewing-your-ssh-keys
  - /github/authenticating-to-github/reviewing-your-ssh-keys
  - /github/authenticating-to-github/keeping-your-account-and-data-secure/reviewing-your-ssh-keys
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Identity
  - Access management
ms.openlocfilehash: 4f15ea8fd56994de4d9b30c21e6afb081e20a327
ms.sourcegitcommit: 9a7b3a9ccb983af5df2cd94da7fecf7a8237529b
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/09/2022
ms.locfileid: '147876797'
---
Nicht autorisierte (oder möglicherweise kompromittierte) SSH-Schlüssel solltest du löschen, um möglichen Angreifern den Zugriff auf deine Repositorys zu verwehren. Vorhandene SSH-Schlüssel, die gültig sind, kannst du genehmigen.

{% mac %}

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.ssh %}
3. Überprüfe auf der Seite mit den SSH-Einstellungen die deinem Konto zugeordneten SSH-Schlüssel. Bei denjenigen, die du nicht kennst oder die nicht mehr aktuell sind, klicke auf **Löschen**. Bei gültigen SSH-Schlüsseln, die du behalten möchtest, klicke auf **Genehmigen**.
    ![SSH-Schlüsselliste](/assets/images/help/settings/settings-ssh-key-review.png)

  {% tip %}

     **Hinweis:** Wenn du deine SSH-Schlüssel aufgrund eines fehlgeschlagenen Git-Vorgangs überprüfst, wird der nicht verifizierte Schlüssel, der den [SSH-Schlüssel-Überprüfungsfehler](/articles/error-we-re-doing-an-ssh-key-audit) verursacht hat, in der Liste der SSH-Schlüssel hervorgehoben.

  {% endtip %}

4. Öffne das Terminal.

{% data reusables.command_line.start_ssh_agent %}

6. Suche und notiere deinen öffentlichen Schlüssel-Fingerprint. 
  ```shell
  $ ssh-add -l -E sha256
  > 2048 <em>SHA256:274ffWxgaxq/tSINAykStUL7XWyRNcRTlcST1Ei7gBQ</em> /Users/<em>USERNAME</em>/.ssh/id_rsa (RSA)
  ```

7. Die SSH-Schlüssel auf {% data variables.product.product_name %} *sollten* mit den gleichen Schlüsseln auf deinem Computer übereinstimmen.

{% endmac %}

{% windows %}

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.ssh %}
3. Überprüfe auf der Seite mit den SSH-Einstellungen die deinem Konto zugeordneten SSH-Schlüssel. Bei denjenigen, die du nicht kennst oder die nicht mehr aktuell sind, klicke auf **Löschen**. Bei gültigen SSH-Schlüsseln, die du behalten möchtest, klicke auf **Genehmigen**.
    ![SSH-Schlüsselliste](/assets/images/help/settings/settings-ssh-key-review.png)

  {% tip %}

     **Hinweis:** Wenn du deine SSH-Schlüssel aufgrund eines fehlgeschlagenen Git-Vorgangs überprüfst, wird der nicht verifizierte Schlüssel, der den [SSH-Schlüssel-Überprüfungsfehler](/articles/error-we-re-doing-an-ssh-key-audit) verursacht hat, in der Liste der SSH-Schlüssel hervorgehoben.

  {% endtip %}

4. Öffne Git Bash. 

5. {% data reusables.desktop.windows_git_bash_turn_on_ssh_agent %}

  {% data reusables.desktop.windows_git_for_windows_turn_on_ssh_agent %}

6. Suche und notiere deinen öffentlichen Schlüssel-Fingerprint. 
  ```shell
  $ ssh-add -l -E sha256
  > 2048 <em>SHA256:274ffWxgaxq/tSINAykStUL7XWyRNcRTlcST1Ei7gBQ</em> /Users/<em>USERNAME</em>/.ssh/id_rsa (RSA)
  ```

7. Die SSH-Schlüssel auf {% data variables.product.product_name %} *sollten* mit den gleichen Schlüsseln auf deinem Computer übereinstimmen.

{% endwindows %}

{% linux %}

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.ssh %}
3. Überprüfe auf der Seite mit den SSH-Einstellungen die deinem Konto zugeordneten SSH-Schlüssel. Bei denjenigen, die du nicht kennst oder die nicht mehr aktuell sind, klicke auf **Löschen**. Bei gültigen SSH-Schlüsseln, die du behalten möchtest, klicke auf **Genehmigen**.
    ![SSH-Schlüsselliste](/assets/images/help/settings/settings-ssh-key-review.png)

  {% tip %}

     **Hinweis:** Wenn du deine SSH-Schlüssel aufgrund eines fehlgeschlagenen Git-Vorgangs überprüfst, wird der nicht verifizierte Schlüssel, der den [SSH-Schlüssel-Überprüfungsfehler](/articles/error-we-re-doing-an-ssh-key-audit) verursacht hat, in der Liste der SSH-Schlüssel hervorgehoben.

  {% endtip %}

4. Öffne das Terminal.

{% data reusables.command_line.start_ssh_agent %}

6. Suche und notiere deinen öffentlichen Schlüssel-Fingerprint. 
  ```shell
  $ ssh-add -l -E sha256
  > 2048 <em>SHA256:274ffWxgaxq/tSINAykStUL7XWyRNcRTlcST1Ei7gBQ</em> /Users/<em>USERNAME</em>/.ssh/id_rsa (RSA)
  ```

7. Die SSH-Schlüssel auf {% data variables.product.product_name %} *sollten* mit den gleichen Schlüsseln auf deinem Computer übereinstimmen.

{% endlinux %}

{% warning %}

**Warnung**: Wenn Dir auf {% data variables.product.product_name %} ein unbekannter SSH-Schlüssel angezeigt wird, solltest du ihn sofort löschen und Dich an den {% data variables.contact.contact_support %} wenden. Ein Dir unbekannter öffentlicher Schlüssel kann ein Hinweis auf ein Sicherheitsproblem sein.

{% endwarning %}
