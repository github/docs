---
title: Предоставление GIT информации о ключе для подписывания
intro: 'Чтобы подписать фиксации локально, необходимо сообщить Git о наличии ключа GPG{% ifversion ssh-commit-verification %}, SSH{% endif %} или X.509, который требуется использовать.'
redirect_from:
  - /articles/telling-git-about-your-gpg-key
  - /articles/telling-git-about-your-signing-key
  - /github/authenticating-to-github/telling-git-about-your-signing-key
  - /github/authenticating-to-github/managing-commit-signature-verification/telling-git-about-your-signing-key
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Identity
  - Access management
shortTitle: Tell Git your signing key
ms.openlocfilehash: e78306bb1519f2b7f51ab6bc039bff0b982e48cf
ms.sourcegitcommit: a0ad3bfe2a99c3092e76ca9b3d476cf30988ca55
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/28/2022
ms.locfileid: '148118998'
---
{% mac %}

## Предоставление GIT информации о ключе GPG

Если вы используете ключ GPG, соответствующий вашему удостоверению фиксации и проверенной электронной почте, связанному с вашей учетной записью в {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.location.product_location %}{% endif %}, можно начать подписывание фиксаций и подписи тегов.

{% note %}

Если у вас нет ключа GPG, соответствующего вашему удостоверению автора фиксаций, необходимо связать адрес электронной почты с существующим ключом. Дополнительные сведения см. в разделе [Связывание адреса электронной почты с ключом GPG](/articles/associating-an-email-with-your-gpg-key).

{% endnote %}

Если у вас несколько ключей GPG, необходимо указать GIT, какой из них следует использовать.

{% data reusables.command_line.open_the_multi_os_terminal %} {% data reusables.gpg.configure-gpg-signing %} {% data reusables.gpg.list-keys-with-note %} {% data reusables.gpg.copy-gpg-key-id %} {% data reusables.gpg.paste-gpg-key-id %} {% data reusables.gpg.set-auto-sign %}
1. Если вы не используете набор GPG, выполните следующую команду в оболочке `zsh`, чтобы добавить ключ GPG в файл `.zshrc`, если он существует, или в файл `.zprofile`:
  ```shell
  $ if [ -r ~/.zshrc ]; then echo 'export GPG_TTY=$(tty)' >> ~/.zshrc; \
    else echo 'export GPG_TTY=$(tty)' >> ~/.zprofile; fi
  ```
  Если вы используете оболочку `bash`, выполните следующую команду:
  ```shell
  $ if [ -r ~/.bash_profile ]; then echo 'export GPG_TTY=$(tty)' >> ~/.bash_profile; \
    else echo 'export GPG_TTY=$(tty)' >> ~/.profile; fi
  ```
1. Если необходимо запрашивать ПИН-код или парольную фразу, установите `pinentry-mac`. Например, при использовании [Homebrew](https://brew.sh/):
  ```shell
  $ brew install pinentry-mac
  $ echo "pinentry-program $(which pinentry-mac)" >> ~/.gnupg/gpg-agent.conf
  $ killall gpg-agent
  ```

{% endmac %}

{% windows %}

## Предоставление GIT информации о ключе GPG

Если вы используете ключ GPG, соответствующий вашему удостоверению фиксации и проверенной электронной почте, связанному с вашей учетной записью в {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.location.product_location %}{% endif %}, можно начать подписывание фиксаций и подписи тегов.

{% note %}

Если у вас нет ключа GPG, соответствующего вашему удостоверению автора фиксаций, необходимо связать адрес электронной почты с существующим ключом. Дополнительные сведения см. в разделе [Связывание адреса электронной почты с ключом GPG](/articles/associating-an-email-with-your-gpg-key).

{% endnote %}

Если у вас несколько ключей GPG, необходимо указать GIT, какой из них следует использовать.

{% data reusables.command_line.open_the_multi_os_terminal %} {% data reusables.gpg.configure-gpg-signing %} {% data reusables.gpg.list-keys-with-note %} {% data reusables.gpg.copy-gpg-key-id %} {% data reusables.gpg.paste-gpg-key-id %} {% data reusables.gpg.set-auto-sign %}

{% endwindows %}

{% linux %}

## Предоставление GIT информации о ключе GPG

Если вы используете ключ GPG, соответствующий вашему удостоверению фиксации и проверенной электронной почте, связанному с вашей учетной записью в {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.location.product_location %}{% endif %}, можно начать подписывание фиксаций и подписи тегов.

{% note %}

Если у вас нет ключа GPG, соответствующего вашему удостоверению автора фиксаций, необходимо связать адрес электронной почты с существующим ключом. Дополнительные сведения см. в разделе [Связывание адреса электронной почты с ключом GPG](/articles/associating-an-email-with-your-gpg-key).

{% endnote %}

Если у вас несколько ключей GPG, необходимо указать GIT, какой из них следует использовать.

{% data reusables.command_line.open_the_multi_os_terminal %} {% data reusables.gpg.configure-gpg-signing %} {% data reusables.gpg.list-keys-with-note %} {% data reusables.gpg.copy-gpg-key-id %} {% data reusables.gpg.paste-gpg-key-id %} {% data reusables.gpg.set-auto-sign %}
1. Чтобы добавить ключ GPG в файл запуска `.bashrc`, выполните следующую команду:
  ```bash
  $ [ -f ~/.bashrc ] && echo 'export GPG_TTY=$(tty)' >> ~/.bashrc
  ```
{% endlinux %} {% ifversion ssh-commit-verification %}

## Предоставление Git информации о ключе SSH

Существующий ключ SSH можно использовать для подписывания фиксаций и тегов или создания нового ключа специально для подписывания. Дополнительные сведения см. в разделе [Создание нового ключа SSH и его добавление в агент SSH](/github/authenticating-to-github/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent).

{% data reusables.gpg.ssh-git-version %}

{% data reusables.command_line.open_the_multi_os_terminal %} {% data reusables.gpg.configure-ssh-signing %} {% data reusables.gpg.copy-ssh-public-key %} {% data reusables.gpg.paste-ssh-public-key %}

{% endif %}

{% data reusables.gpg.x-509-key %}
## Дополнительные материалы

- [Добавление нового ключа SSH в учетную запись GitHub](/authentication/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account).
- [Подписывание фиксаций](/articles/signing-commits)
- [Подписывание тегов](/articles/signing-tags)
