---
title: Сведения о протоколе SSH
intro: 'С помощью протокола SSH можно подключаться и проходить проверку подлинности на удаленных серверах и службах. С помощью ключей SSH вы можете подключаться к {% data variables.product.product_name %} без указания имени пользователя и {% data variables.product.pat_generic %} при каждом посещении. {% ifversion ssh-commit-verification %} Вы также можете использовать ключ SSH для подписывания фиксаций. {% endif %}'
redirect_from:
  - /articles/about-ssh
  - /github/authenticating-to-github/about-ssh
  - /github/authenticating-to-github/connecting-to-github-with-ssh/about-ssh
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - SSH
ms.openlocfilehash: 51a72821217e5d47092ed77e923b38f4cf248010
ms.sourcegitcommit: a0ad3bfe2a99c3092e76ca9b3d476cf30988ca55
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/28/2022
ms.locfileid: '148118982'
---
{% data reusables.ssh.about-ssh %} Дополнительные сведения о SSH см. в статье [Secure Shell](https://en.wikipedia.org/wiki/Secure_Shell) Википедии.

При настройке протокола SSH необходимо создать новый закрытый ключ SSH и добавить его в агент SSH. Необходимо также добавить открытый ключ SSH к учетной записи в {% data variables.product.product_name %}, прежде чем использовать ключ для проверки подлинности{% ifversion ssh-commit-verification %} или подписывания фиксаций{% endif %}. Дополнительные сведения см. в статьях "[Создание нового ключа SSH и его добавление в ssh-agent](/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)"{% ifversion ssh-commit-verification %}, {% else %} и{% endif %} "[Добавление нового ключа SSH в учетную запись {% data variables.product.prodname_dotcom %} account](/authentication/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account){% ifversion ssh-commit-verification %}" и "[О проверки фиксации сигнатуры](/articles/about-commit-signature-verification){% endif %}."

Вы можете дополнительно защитить ключ SSH с помощью аппаратного ключа безопасности, для которого требуется, чтобы физический аппаратный ключ безопасности был подключен к компьютеру, если пара ключей используется для проверки подлинности с помощью SSH. Вы также можете защитить ключ SSH, добавив ключ в ssh-agent и используя парольную фразу. Дополнительные сведения см. в разделе [Работа с парольными фразами ключей SSH](/authentication/connecting-to-github-with-ssh/working-with-ssh-key-passphrases).

{% ifversion fpt or ghec %} Чтобы использовать ключ SSH с репозиторием, который принадлежит организации, использующей единый вход SAML, необходимо авторизовать ключ. Дополнительные сведения см. в разделе [Авторизация ключа SSH для использования с единым входом SAML](/enterprise-cloud@latest/authentication/authenticating-with-saml-single-sign-on/authorizing-an-ssh-key-for-use-with-saml-single-sign-on){% ifversion fpt %} в документации по {% data variables.product.prodname_ghe_cloud %}.{% else %}.{% endif %}{% endif %}

Чтобы обеспечить безопасность учетной записи, вы можете регулярно просматривать список ключей SSH и отзывать все недействительные или скомпрометированные ключи. Дополнительные сведения см. в статье [Просмотр ключей SSH](/github/authenticating-to-github/reviewing-your-ssh-keys).

{% ifversion fpt or ghec %} Если вы не использовали ключ SSH в течение года, {% data variables.product.prodname_dotcom %} автоматически удалит неактивный ключ SSH в качестве меры предосторожности. Дополнительные сведения см. в разделе [Удаленные или отсутствующие ключи SSH](/articles/deleted-or-missing-ssh-keys).
{% endif %}

{% ifversion fpt %} Организации, использующие {% data variables.product.prodname_ghe_cloud %}, могут предоставлять сертификаты SSH, которые члены могут использовать для доступа к репозиториям этой организации без добавления сертификата в учетную запись {% data variables.product.product_name %}. Если вы используете сертификат SSH, вы не можете использовать сертификат для доступа к вилкам репозиториев организации, если вилка принадлежит личной учетной записи. Дополнительную информацию см. в разделе [Сведения о центрах сертификации SSH](/enterprise-cloud@latest/organizations/managing-git-access-to-your-organizations-repositories/about-ssh-certificate-authorities) документации по {% data variables.product.prodname_ghe_cloud %}.
{% else ghec or ghes or ghae %} Если вы являетесь членом организации, предоставляющей сертификаты SSH, можно использовать свой сертификат для доступа к репозиториям организации, не добавляя его в учетную запись в {% data variables.product.product_name %}. Сертификат нельзя использовать для доступа к вилкам репозиториев организации, принадлежащих личной учетной записи. Дополнительные сведения см. в разделе [Сведения о центрах сертификации SSH](/organizations/managing-git-access-to-your-organizations-repositories/about-ssh-certificate-authorities).
{% endif %}
## Дополнительные материалы

- [Устранение неполадок с SSH](/articles/troubleshooting-ssh)
