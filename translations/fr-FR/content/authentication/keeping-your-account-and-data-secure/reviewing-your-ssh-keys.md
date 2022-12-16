---
title: Examen de vos clés SSH
intro: 'Pour préserver la sécurité de vos informations d’identification, vous devez régulièrement auditer vos clés SSH, déployer des clés et examiner les applications autorisées qui accèdent à votre compte sur {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %}.'
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
ms.contentlocale: fr-FR
ms.lasthandoff: 09/09/2022
ms.locfileid: '147876796'
---
Vous pouvez supprimer les clés SSH non autorisées (ou éventuellement compromises) pour vous assurer que vos dépôts ne sont plus accessibles aux attaquants. Vous pouvez également approuver des clés SSH valides existantes.

{% mac %}

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.ssh %}
3. Dans la page Paramètres SSH, notez les clés SSH associées à votre compte. Pour celles que vous ne reconnaissez pas ou qui sont obsolètes, cliquez sur **Supprimer**. Si vous souhaitez conserver certaines clés SSH valides, cliquez sur **Approuver**.
    ![Liste des clés SSH](/assets/images/help/settings/settings-ssh-key-review.png)

  {% tip %}

     **Remarque :** Si vous auditez vos clés SSH parce qu’une opération Git a échoué, la clé non vérifiée qui a provoqué l’[erreur d’audit de clé SSH](/articles/error-we-re-doing-an-ssh-key-audit) sera mise en surbrillance dans la liste des clés SSH.

  {% endtip %}

4. Ouvrez Terminal.

{% data reusables.command_line.start_ssh_agent %}

6. Recherchez et notez l’empreinte digitale de votre clé publique. 
  ```shell
  $ ssh-add -l -E sha256
  > 2048 <em>SHA256:274ffWxgaxq/tSINAykStUL7XWyRNcRTlcST1Ei7gBQ</em> /Users/<em>USERNAME</em>/.ssh/id_rsa (RSA)
  ```

7. Les clés SSH sur {% data variables.product.product_name %} *doivent* correspondre à celles qui sont sur votre ordinateur.

{% endmac %}

{% windows %}

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.ssh %}
3. Dans la page Paramètres SSH, notez les clés SSH associées à votre compte. Pour celles que vous ne reconnaissez pas ou qui sont obsolètes, cliquez sur **Supprimer**. Si vous souhaitez conserver certaines clés SSH valides, cliquez sur **Approuver**.
    ![Liste des clés SSH](/assets/images/help/settings/settings-ssh-key-review.png)

  {% tip %}

     **Remarque :** Si vous auditez vos clés SSH parce qu’une opération Git a échoué, la clé non vérifiée qui a provoqué l’[erreur d’audit de clé SSH](/articles/error-we-re-doing-an-ssh-key-audit) sera mise en surbrillance dans la liste des clés SSH.

  {% endtip %}

4. Ouvrez l’interpréteur de commandes Git. 

5. {% data reusables.desktop.windows_git_bash_turn_on_ssh_agent %}

  {% data reusables.desktop.windows_git_for_windows_turn_on_ssh_agent %}

6. Recherchez et notez l’empreinte digitale de votre clé publique. 
  ```shell
  $ ssh-add -l -E sha256
  > 2048 <em>SHA256:274ffWxgaxq/tSINAykStUL7XWyRNcRTlcST1Ei7gBQ</em> /Users/<em>USERNAME</em>/.ssh/id_rsa (RSA)
  ```

7. Les clés SSH sur {% data variables.product.product_name %} *doivent* correspondre à celles qui sont sur votre ordinateur.

{% endwindows %}

{% linux %}

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.ssh %}
3. Dans la page Paramètres SSH, notez les clés SSH associées à votre compte. Pour celles que vous ne reconnaissez pas ou qui sont obsolètes, cliquez sur **Supprimer**. Si vous souhaitez conserver certaines clés SSH valides, cliquez sur **Approuver**.
    ![Liste des clés SSH](/assets/images/help/settings/settings-ssh-key-review.png)

  {% tip %}

     **Remarque :** Si vous auditez vos clés SSH parce qu’une opération Git a échoué, la clé non vérifiée qui a provoqué l’[erreur d’audit de clé SSH](/articles/error-we-re-doing-an-ssh-key-audit) sera mise en surbrillance dans la liste des clés SSH.

  {% endtip %}

4. Ouvrez Terminal.

{% data reusables.command_line.start_ssh_agent %}

6. Recherchez et notez l’empreinte digitale de votre clé publique. 
  ```shell
  $ ssh-add -l -E sha256
  > 2048 <em>SHA256:274ffWxgaxq/tSINAykStUL7XWyRNcRTlcST1Ei7gBQ</em> /Users/<em>USERNAME</em>/.ssh/id_rsa (RSA)
  ```

7. Les clés SSH sur {% data variables.product.product_name %} *doivent* correspondre à celles qui sont sur votre ordinateur.

{% endlinux %}

{% warning %}

**Avertissement** : Si vous voyez une clé SSH que vous ne connaissez pas sur {% data variables.product.product_name %}, supprimez-la immédiatement et contactez le {% data variables.contact.contact_support %} pour obtenir de l’aide. Une clé publique non identifiée peut indiquer un problème de sécurité.

{% endwarning %}
