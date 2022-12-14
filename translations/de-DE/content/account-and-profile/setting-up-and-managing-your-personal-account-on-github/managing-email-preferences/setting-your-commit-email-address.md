---
title: E-Mail-Adresse für Commits festlegen
intro: 'Du kannst die E-Mail-Adresse festlegen, die zum Erstellen von Commits auf {% data variables.product.product_location %} und deinem Computer verwendet wird.'
redirect_from:
  - /articles/keeping-your-email-address-private
  - /articles/setting-your-commit-email-address-on-github
  - /articles/about-commit-email-addresses
  - /articles/git-email-settings
  - /articles/setting-your-email-in-git
  - /articles/set-your-user-name-email-and-github-token
  - /articles/setting-your-commit-email-address-in-git
  - /articles/setting-your-commit-email-address
  - /github/setting-up-and-managing-your-github-user-account/setting-your-commit-email-address
  - /github/setting-up-and-managing-your-github-user-account/managing-email-preferences/setting-your-commit-email-address
  - /account-and-profile/setting-up-and-managing-your-github-user-account/managing-email-preferences/setting-your-commit-email-address
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Accounts
  - Notifications
shortTitle: Set commit email address
ms.openlocfilehash: 76b0af2a1afa776281434c36cf33fa0e082c2c56
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/10/2022
ms.locfileid: '146338949'
---
## Informationen zu E-Mail-Adressen für Commits

{% data variables.product.prodname_dotcom %} verwendet deine Commit-E-Mail-Adresse, um Commits mit deinem Konto in {% data variables.product.product_location %} zu verknüpfen. Du kannst den Commits, die du über die Befehlszeile überträgst, wie auch deinen webbasierten Git-Operationen jeweils eine eigene E-Mail-Adresse zuordnen.

Bei webbasierten Git-Vorgängen kannst du deine Commit-E-Mail-Adresse in {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %} festlegen. Für Commits, die du per Push über die Befehlszeile überträgst, legst du die E-Mail-Adresse für Commits in Git fest.

{% ifversion fpt or ghec %}Alle Commits, die du vor der Änderung deiner Commit-E-Mail-Adresse ausgeführt hast, bleiben mit deiner früheren E-Mail-Adresse verbunden.{% else %}Nach der Änderung deiner Commit-E-Mail-Adresse in {% data variables.product.product_name %} ist die neue E-Mail-Adresse standardmäßig in all deinen zukünftigen webbasierten Git-Vorgängen sichtbar. Alle Commits, die du vor der Änderung deiner Commit-E-Mail-Adresse durchgeführt hast, bleiben mit deiner früheren E-Mail-Adresse verbunden.{% endif %}

{% ifversion fpt or ghec %}

{% note %}

**Hinweis**: {% data reusables.user-settings.no-verification-disposable-emails %}

{% endnote %}

{% endif %}

{% ifversion fpt or ghec %}Wenn deine persönliche E-Mail-Adresse privat bleiben soll, kannst du eine `noreply`-E-Mail-Adresse aus {% data variables.product.product_name %} als deine Commit-E-Mail-Adresse verwenden. Wenn du eine `noreply`-E-Mail-Adresse für Commits verwenden möchtest, die du über die Befehlszeile pushst, gib diese E-Mail-Adresse bei der Festlegung deiner Commit-E-Mail-Adresse in Git an. Wenn du eine `noreply`-E-Mail-Adresse für webbasierte Git-Vorgänge verwenden möchtest, lege deine Commit-E-Mail-Adresse auf GitHub fest und wähle **Meine E-Mail-Adresse privat halten** aus.

Du kannst auch festlegen, dass Commits, die du über die Befehlszeile überträgst, blockiert werden, wenn diese deine persönliche E-Mail-Adresse offenlegen. Weitere Informationen findest du unter [Blockieren von Befehlszeilenpushes, die deine persönliche E-Mail-Adresse offenlegen](/articles/blocking-command-line-pushes-that-expose-your-personal-email-address).{% endif %}

Um sicherzustellen, dass Commits dir zugeordnet und in deinem Beitragsdiagramm angezeigt werden, verwende eine E-Mail-Adresse, die deinem Konto in {% data variables.product.product_location %} zugeordnet ist{% ifversion fpt or ghec %}, oder die `noreply`-E-Mail-Adresse, die dir in deinen E-Mail-Einstellungen bereitgestellt wurde{% endif %}. {% ifversion not ghae %}Weitere Informationen findest du unter [Hinzufügen einer E-Mail-Adresse zu deinem {% data variables.product.prodname_dotcom %}-Konto](/github/setting-up-and-managing-your-github-user-account/adding-an-email-address-to-your-github-account).{% endif %}

{% ifversion fpt or ghec %}

{% note %}

**Hinweis**: Wenn du dein Konto in {% data variables.product.product_location %} _nach_ dem 18. Juli 2017 erstellt hast, ist deine `noreply`-E-Mail-Adresse für {% data variables.product.product_name %} eine siebenstellige ID und dein Benutzername in der Form <code><em>ID+username</em>@users.noreply.github.com</code>. Wenn du dein Konto in {% data variables.product.product_location %} _vor_ dem 18. Juli 2017 erstellt hast, hat deine `noreply`-E-Mail-Adresse für {% data variables.product.product_name %} die Form <code><em>username</em>@users.noreply.github.com</code>. Du kannst eine ID-basierte `noreply`-E-Mail-Adresse für {% data variables.product.product_name %} abrufen, indem du in deinen E-Mail-Einstellungen **Meine E-Mail-Adresse privat halten** auswählst (oder abwählst und erneut auswählst).

{% endnote %}

Wenn du deine `noreply`-E-Mail-Adresse für {% data variables.product.product_name %} für Commits verwendest und dann [deinen Benutzernamen änderst](/articles/changing-your-github-username), werden diese Commits nicht deinem Konto in {% data variables.product.product_location %} zugeordnet. Dies gilt nicht, wenn du die ID-basierte `noreply`-Adresse von {% data variables.product.product_name %} verwendest. Weitere Informationen findest du unter [Ändern deines {% data variables.product.prodname_dotcom %}-Benutzernamens](/articles/changing-your-github-username).{% endif %}

## Deine Commit-E-Mail-Adresse auf {% data variables.product.prodname_dotcom %} festlegen

{% data reusables.files.commit-author-email-options %}

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.emails %} {% data reusables.user-settings.add_and_verify_email %} {% data reusables.user-settings.select_primary_email %}{% ifversion fpt or ghec %} {% data reusables.user-settings.keeping_your_email_address_private %}{% endif %}

## Deine Commit-E-Mail-Adresse in Git festlegen

Mit dem Befehl `git config` kannst du die deinen Git-Commits zugeordnete E-Mail-Adresse ändern. Die neue E-Mail-Adresse wird in allen zukünftigen Commits angezeigt, die du über die Befehlszeile an {% data variables.product.product_location %} pushst. Alle Commits, die du vor der Änderung deiner Commit-E-Mail-Adresse durchgeführt hast, bleiben mit deiner früheren E-Mail-Adresse verbunden.

### E-Mail-Adresse für alle Repositorys auf deinem Computer festlegen

{% data reusables.command_line.open_the_multi_os_terminal %}
2. {% data reusables.user-settings.set_your_email_address_in_git %}
   ```shell
   $ git config --global user.email "<em>email@example.com</em>"
   ```
3. {% data reusables.user-settings.confirm_git_email_address_correct %}
   ```shell
   $ git config --global user.email
   <span class="output">email@example.com</span>
   ```
4. {% data reusables.user-settings.link_email_with_your_account %}

### E-Mail-Adresse für ein einzelnes Repository festlegen

{% data variables.product.product_name %} verwendet die in deiner lokalen Git-Konfiguration festgelegte E-Mail-Adresse, um Commits, die du über die Befehlszeile pushst, deinem {% data variables.product.product_location %}-Konto zuzuordnen.

Du kannst die E-Mail-Adresse für deine Commits in einem bestimmten Repository ändern. Dadurch werden deine globalen Git-Konfigurationseinstellungen ausschließlich für dieses eine Repository überschrieben, die anderen Repositorys sind von dieser Änderung nicht betroffen.

{% data reusables.command_line.open_the_multi_os_terminal %}
2. Ändere das aktuelle Arbeitsverzeichnis in das lokale Repository, für das du die E-Mail-Adresse für deine Git-Commits festlegen möchten.
3. {% data reusables.user-settings.set_your_email_address_in_git %}
   ```shell
   $ git config user.email "<em>email@example.com</em>"
   ```
4. {% data reusables.user-settings.confirm_git_email_address_correct %}
   ```shell
   $ git config user.email
   <span class="output">email@example.com</span>
   ```
5. {% data reusables.user-settings.link_email_with_your_account %}
