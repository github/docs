---
title: Использование последней версии официальных пакетных действий
intro: 'Вы можете обновить действия, объединенные с вашим предприятием, или использовать действия непосредственно из {% data variables.product.prodname_dotcom_the_website %}.'
versions:
  ghes: '*'
  ghae: '*'
type: how_to
topics:
  - Actions
  - Enterprise
  - GitHub Connect
redirect_from:
  - /admin/github-actions/using-the-latest-version-of-the-official-bundled-actions
shortTitle: Use the latest bundled actions
ms.openlocfilehash: a86c731602bc39cc35fbff823ebdbfbdf2dec2c9
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/25/2022
ms.locfileid: '148107032'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

Корпоративный экземпляр включает ряд встроенных действий, которые можно использовать в рабочих процессах. Дополнительные сведения о пакетных действиях см. в разделе [Официальные действия в комплекте с корпоративным экземпляром](/admin/github-actions/about-using-actions-in-your-enterprise#official-actions-bundled-with-your-enterprise-instance).

Эти пакетные действия представляют собой моментальный снимок официальных действий, находящихся в https://github.com/actions, так что могут быть доступны новые версии этих действий. Вы можете обновлять эти действия с помощью инструмента `actions-sync` или настроить {% data variables.product.prodname_github_connect %}, чтобы разрешить доступ к последним действиям в {% data variables.product.prodname_dotcom_the_website %}. Описание этих параметров приводится в следующих разделах.

## Использование `actions-sync` для обновления пакетных действий

Для обновления пакетных действий вы можете с помощью инструмента `actions-sync` обновить моментальный снимок. Дополнительные сведения об использовании `actions-sync` см. в разделе [Синхронизация действий вручную с {% data variables.product.prodname_dotcom_the_website %}](/admin/github-actions/manually-syncing-actions-from-githubcom).

## Использование {% data variables.product.prodname_github_connect %} для доступа к последним действиям

Вы можете с помощью {% data variables.product.prodname_github_connect %} разрешить {% data variables.product.product_name %} использовать действия с {% data variables.product.prodname_dotcom_the_website %}. Дополнительные сведения см. в статье "[Включение автоматического доступа к действиям {% data variables.product.prodname_dotcom_the_website %} с помощью {% data variables.product.prodname_github_connect %}](/admin/github-actions/enabling-automatic-access-to-githubcom-actions-using-github-connect)".

После настройки {% data variables.product.prodname_github_connect %} вы можете использовать последнюю версию действия, удалив локальный репозиторий в организации `actions` в вашем экземпляре. Например, если ваш корпоративный экземпляр использует `v1` действия `actions/checkout`, а вам нужно использовать `{% data reusables.actions.action-checkout %}`, которое недоступно в вашем корпоративном экземпляре, выполните следующие шаги, чтобы получить возможность использовать последнюю версию действия `checkout` с {% data variables.product.prodname_dotcom_the_website %}.

1. В учетной записи владельца предприятия на {% data variables.product.product_name %} перейдите в репозиторий, который вы хотите удалить из организации *действия* (в данном примере `checkout`).
1. По умолчанию администраторы сайта не являются владельцами организации пакетных *действий*. Чтобы получить доступ, необходимый для удаления репозитория `checkout`, необходимо использовать средства администрирования сайта. Щелкните {% octicon "rocket" aria-label="The rocket ship" %} в правом верхнем углу любой страницы этого репозитория.
  ![Значок ракеты для доступа к параметрам администратора сайта](/assets/images/enterprise/site-admin-settings/access-new-settings.png)
1. Щелкните {% octicon "shield-lock" %} **Безопасность**, чтобы просмотреть обзор безопасности для репозитория.
  ![Заголовок "Безопасность" репозитория](/assets/images/enterprise/site-admin-settings/access-repo-security-info.png)
1. В разделе "Привилегированный доступ" щелкните **Разблокировать**.
  ![Кнопка разблокировки](/assets/images/enterprise/site-admin-settings/unlock-priviledged-repo-access.png)
1. В разделе **Причина** введите причину разблокировки репозитория и нажмите кнопку **Разблокировать**.
  ![Диалоговое окно подтверждения](/assets/images/enterprise/site-admin-settings/confirm-unlock-repo-access.png)
1. Теперь, когда репозиторий разблокирован, вы можете уйти со страницы администрирования сайта и удалить репозиторий в организации `actions`. Вверху страницы щелкните имя репозитория (в этом примере **checkout**), чтобы вернуться на страницу сводки.
  ![Ссылка с именем репозитория](/assets/images/enterprise/site-admin-settings/display-repository-admin-summary.png)
1. В разделе "Сведения о репозитории" щелкните **Просмотреть код**, чтобы закрыть страницы администрирования сайта и отобразить репозиторий `checkout`.
1. Удалите репозиторий `checkout` в организации `actions`. Сведения о том, как удалить репозиторий, см. в разделе [Удаление репозитория](/github/administering-a-repository/deleting-a-repository).
  ![Ссылка "Просмотреть код"](/assets/images/enterprise/site-admin-settings/exit-admin-page-for-repository.png)
1. Настройте YAML рабочего процесса для использования `{% data reusables.actions.action-checkout %}`.
1. При каждом запуске рабочего процесса средство выполнения будет использовать указанную версию `actions/checkout` из {% data variables.product.prodname_dotcom_the_website %}.

   {% note %}

   **Примечание:** При первом `checkout` использовании действия из {% данных variables.product.prodname_dotcom_the_website %} `actions/checkout` пространство имен автоматически прекращается на {% данных variables.location.product_location %}. Если вы когда-либо захотите вернуться к использованию локальной копии действия, сначала вам нужно будет удалить это пространство имен из выбывших. Дополнительные сведения см. в статье "[Автоматическое прекращение использования пространств имен для действий, доступных на сайте {% data variables.product.prodname_dotcom_the_website%}](/admin/github-actions/managing-access-to-actions-from-githubcom/enabling-automatic-access-to-githubcom-actions-using-github-connect#automatic-retirement-of-namespaces-for-actions-accessed-on-githubcom)".

   {% endnote %}
