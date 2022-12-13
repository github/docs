---
title: Добавление нового ключа SSH в учетную запись GitHub
intro: 'Чтобы настроить учетную запись на {% ifversion ghae %}{% данных variables.product.product_name %}{% else %}{% данных variables.location.product_location %}{% endif %} для использования нового (или существующего) ключа SSH, вам также потребуется добавить ключ в свою учетную запись.'
redirect_from:
  - /articles/adding-a-new-ssh-key-to-your-github-account
  - /github/authenticating-to-github/adding-a-new-ssh-key-to-your-github-account
  - /github/authenticating-to-github/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - SSH
shortTitle: Add a new SSH key
ms.openlocfilehash: 184abcd90c659f2154291f79d212dbafe11d0ed9
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/20/2022
ms.locfileid: '148093756'
---
## Сведения о добавлении ключей SSH в учетную запись

{% data reusables.ssh.about-ssh %} Дополнительные сведения см. в разделе "[Сведения об SSH](/authentication/connecting-to-github-with-ssh/about-ssh)."

{% ifversion ssh-commit-verification %}Вы также можете использовать SSH для подписывания фиксаций и тегов. Дополнительные сведения о подписи фиксаций см. в статье [Сведения о проверке подписи фиксации](/articles/about-commit-signature-verification).{% endif %}

После создания пары ключей SSH необходимо добавить открытый ключ в {% ifversion fpt или ghec или ghes %}{% данных variables.location.product_location %}{% elsif ghae %}{% данных variables.product.product_name %}{% endif %} для включения доступа по протоколу SSH для вашей учетной записи.

## Предварительные требования

Перед добавлением нового ключа SSH в учетную запись на {% ifversion ghae %}{% данных variables.product.product_name %}{% else %}{% данных variables.location.product_location %}{% endif %}, выполните следующие действия.

1. Проверьте существующие ключи SSH. Дополнительные сведения см. в разделе [Проверка наличия ключей SSH](/authentication/connecting-to-github-with-ssh/checking-for-existing-ssh-keys).
1. Создайте новый ключ SSH и добавьте его в агент SSH вашего компьютера. Дополнительные сведения см. в разделе [Создание нового ключа SSH и его добавление в агент SSH](/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent).

## Добавление нового ключа SSH в вашу учетную запись

После добавления нового ключа проверки подлинности SSH в учетную запись на {% ifversion ghae %}{% данных variables.product.product_name %}{% else %}{% данных variables.location.product_location %}{% endif %}, можно перенастроить любые локальные репозитории для использования SSH. Дополнительные сведения см. в разделе [Переключение удаленных URL-адресов с HTTPS на SSH](/github/getting-started-with-github/managing-remote-repositories/#switching-remote-urls-from-https-to-ssh).

{% data reusables.ssh.key-type-support %}

{% webui %}

{% data reusables.gpg.copy-ssh-public-key %} {% data reusables.user-settings.access_settings %} {% data reusables.user-settings.ssh %}
4. Щелкните **Создать ключ SSH** или **Добавить ключ SSH**.
{% ifversion ssh-commit-verification %} ![Кнопка ключа SSH](/assets/images/help/settings/ssh-add-ssh-key-with-auth.png) {% else %} ![Кнопка ключа SSH](/assets/images/help/settings/ssh-add-ssh-key.png) {% endif %}
5. В поле "Название" добавьте описательную метку для нового ключа. Например, если вы используете личный ноутбук, можно назвать этот ключ "Личный ноутбук".
{% ifversion ssh-commit-verification %}
6. Выберите тип ключа: ключ проверки подлинности или ключ подписывания. Дополнительные сведения о подписи фиксаций см. в статье [Сведения о проверке подписи фиксации](/articles/about-commit-signature-verification).
{% endif %}
7. Вставьте ключ в поле "Ключ".
{% ifversion ssh-commit-verification %} ![Поле ключа](/assets/images/help/settings/ssh-key-paste-with-type.png) {% else %} ![Поле ключа](/assets/images/help/settings/ssh-key-paste.png) {% endif %}
8. Нажмите кнопку **Добавить ключ SSH**.
  ![Кнопка "Добавить ключ"](/assets/images/help/settings/ssh-add-key.png) {% data reusables.user-settings.sudo-mode-popup %}

{% endwebui %}

{% cli %}

{% data reusables.cli.cli-learn-more %}

Прежде чем использовать {% data variables.product.prodname_cli %} для добавления ключа SSH в учетную запись, необходимо пройти проверку подлинности в {% data variables.product.prodname_cli %}. Дополнительные сведения см. в разделе [`gh auth login`](https://cli.github.com/manual/gh_auth_login) в документации по {% data variables.product.prodname_cli %}.

{% ifversion ssh-commit-verification %}В настоящее время для добавления ключей проверки подлинности SSH можно использовать только {% data variables.product.prodname_cli %}, добавлять ключи подписывания SSH нельзя.{% endif %}

Чтобы добавить ключ проверки подлинности SSH в учетную запись GitHub, используйте подкоманду `ssh-key add`, указав открытый ключ.

```shell
gh ssh-key add KEY-FILE
```

Чтобы указать заголовок для нового ключа, используйте флаг `-t` или `--title`.

```shell
gh ssh-key add KEY-FILE --title "personal laptop"
```

Если вы создали ключ SSH, следуя инструкциям в разделе [Создание нового ключа SSH](/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent), вы можете добавить ключ в свою учетную запись с помощью этой команды.

```shell
gh ssh-key add ~/.ssh/id_ed25519.pub
```

{% endcli %}

{% ifversion fpt or ghec %}
## Дополнительные материалы

- [Авторизация ключа SSH для использования с единым входом SAML](/articles/authorizing-an-ssh-key-for-use-with-saml-single-sign-on) {% endif %}
