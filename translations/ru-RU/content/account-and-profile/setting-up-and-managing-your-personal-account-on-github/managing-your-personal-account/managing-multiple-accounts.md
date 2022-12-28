---
title: Управление несколькими учетными записями
intro: 'Если вы используете одну рабочую станцию для участия в проектах для нескольких учетных записей на {% данных variables.location.product_location %}, можно изменить конфигурацию Git, чтобы упростить процесс внесения изменений.'
versions:
  feature: multiple-accounts-one-workstation
topics:
  - Accounts
  - Git
  - GitHub
shortTitle: Manage multiple accounts
ms.openlocfilehash: bbf77f262cc6bfb32e53b254ad45d42ec9328d61
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/20/2022
ms.locfileid: '148098236'
---
## Сведения об управлении несколькими учетными записями

В некоторых случаях может потребоваться использовать несколько учетных записей для {% данных variables.location.product_location %}. Например, у вас может быть личная учетная запись для участия в разработке программного обеспечения с открытым кодом, а также учетная запись, созданная работодателем, для основной работы. 

Вы не можете использовать {% данных variables.enterprise.prodname_managed_user %} для участия в общедоступных проектах на {% данных variables.location.product_location %}, поэтому необходимо внести свой вклад в эти ресурсы с помощью личной учетной записи. Дополнительные сведения см. в разделе [Сведения о {% data variables.product.prodname_emus %}]({% ifversion fpt %}/enterprise-cloud@latest{% endif %}/admin/identity-and-access-management/using-enterprise-managed-users-for-iam/about-enterprise-managed-users#abilities-and-restrictions-of-managed-user-accounts){% ifversion fpt %} в документации по {% data variables.product.prodname_ghe_cloud %}.{% elsif ghec %}."{% endif %}

Если вы хотите использовать одну рабочую станцию для обеих учетных записей, вы можете упростить себе работу с помощью Git, используя сочетание протоколов для доступа к данным репозитория или учетные данные для каждого репозитория.

{% warning %}

**Предупреждение.** Будьте осторожны при использовании одной рабочей станции для работы в разных учетных записях. Управление двумя или более учетными записями повышает вероятность случайной утечки внутреннего кода.

{% endwarning %}

Если вам не требуется использовать {% данных variables.enterprise.prodname_managed_user %}, {% данных variables.product.company_short %} рекомендует использовать одну личную учетную запись для всей работы над {% данных variables.location.product_location %}. Вы можете использовать одну личную учетную запись, чтобы работать над личными и рабочими проектами или проектами с открытым кодом с помощью одного удостоверения. Другие пользователи могут пригласить учетную запись для работы как в личных, так и в корпоративных репозиториях, и учетная запись может быть участником нескольких организаций или предприятий.

## Работа в двух учетных записях с помощью HTTPS и SSH

Если вы работаете с двумя учетными записями на одной рабочей станции, вы можете получать доступ к репозиториям с помощью разных протоколов и учетных данных для каждой учетной записи. 

Git может использовать протокол HTTPS или SSH для доступа и обновления данных в репозиториях на {% данных variables.location.product_location %}. Протокол, используемый для клонирования репозитория, определяет, какие учетные данные рабочей станции будут использоваться для проверки подлинности при доступе к репозиторию. При таком подходе к управлению учетными записями вы сохраняете учетные данные для одной учетной записи, используемой для подключений по HTTPS, и передаете ключ SSH в другую учетную запись, используемую для подключений по SSH.

URL-адреса HTTPS или SSH для клонирования репозитория можно найти на {% data variables.product.product_name %}. Дополнительные сведения см. в разделе [Клонирование репозитория](/repositories/creating-and-managing-repositories/cloning-a-repository).

Дополнительные сведения об использовании SSH для доступа к репозиториям на {% data variables.product.product_name %}см. в разделе [Подключение к {% data variables.product.prodname_dotcom %} с помощью SSH](/authentication/connecting-to-github-with-ssh).

## Участие в нескольких учетных записях с помощью HTTPS и {% данных variables.product.pat_generic %}s

Кроме того, если вы хотите использовать протокол HTTPS для обеих учетных записей, можно использовать разные данные {% variables.product.pat_generic %}s для каждой учетной записи, настроив Git для хранения разных учетных данных для каждого репозитория.

{% mac %}

{% data reusables.git.open-terminal %} {% data reusables.git.confirm-credential-manager %} {% data reusables.git.clear-the-stored-credentials %} {% data reusables.git.no-credential-manager %}
   - Если вы получили выходные данные `osxkeychain`, вы используете цепочку ключей macOS. Чтобы очистить учетные данные, введите следующую команду.

     ```shell{:copy}
     git credential-osxkeychain erase https://github.com
     ```
   {% data reusables.git.clear-stored-gcm-credentials %} {% data reusables.git.cache-on-repository-path %} {% data reusables.accounts.create-personal-access-tokens %} {% data reusables.git.provide-credentials %}

{% endmac %}

{% windows %}

1. Откройте Git Bash.
{% data reusables.git.confirm-credential-manager %} {% data reusables.git.clear-the-stored-credentials %} {% data reusables.git.no-credential-manager %} {% data reusables.git.clear-stored-gcm-credentials %}
   - Если вы получили выходные данные `wincred`, используется диспетчер учетных данных Windows. Чтобы очистить учетные данные, введите следующую команду.

     ```shell{:copy}
     cmdkey /delete:LegacyGeneric:target=git:https://github.com
     ```
{% data reusables.git.cache-on-repository-path %} {% data reusables.accounts.create-personal-access-tokens %} {% data reusables.git.provide-credentials %}

{% endwindows %}

{% linux %}

{% data reusables.git.open-terminal %} {% data reusables.git.confirm-credential-manager %} {% data reusables.git.clear-the-stored-credentials %} {% data reusables.git.no-credential-manager %} {% data reusables.git.clear-stored-gcm-credentials %} {% data reusables.git.cache-on-repository-path %} {% data reusables.accounts.create-personal-access-tokens %} {% data reusables.git.provide-credentials %}

{% endlinux %}

## Работа в нескольких учетных записях с использованием SSH и `GIT_SSH_COMMAND`

Если вы хотите использовать протокол SSH для обеих учетных записей, для каждой учетной записи можно использовать разные ключи SSH. Дополнительные сведения см. в разделе [Подключение к {% data variables.product.prodname_dotcom %} с помощью SSH](/authentication/connecting-to-github-with-ssh).

Чтобы использовать другой ключ SSH для других репозиториев, клонированных на рабочую станцию, необходимо написать функцию оболочки для операций Git. Функция должна выполнять следующие действия.
1. Определите полное имя репозитория с владельцем, используя команду, например `git config --get remote.origin.url`.
2. Выберите правильный ключ SSH для проверки подлинности.
3. Измените `GIT_SSH_COMMAND` соответствующим образом. Дополнительные сведения о `GIT_SSH_COMMAND` см. в разделе [Переменные среды](https://git-scm.com/docs/git#Documentation/git.txt-codeGITSSHCOMMANDcode) в документации по Git.

Например, следующая команда задает `GIT_SSH_COMMAND` переменную среды, чтобы указать команду SSH, которая использует файл закрытого ключа в **_PATH/TO/KEY/FILE_** для проверки подлинности, чтобы клонировать репозиторий с именем **_OWNER_**/**_REPOSITORY_** на {% данных variables.location.product_location %}.

<pre>
GIT_SSH_COMMAND='ssh -i <em>PATH/TO/KEY/FILE</em> -o IdentitiesOnly=yes' git clone git@github.com:<em>OWNER</em>/<em>REPOSITORY</em>
</pre>
