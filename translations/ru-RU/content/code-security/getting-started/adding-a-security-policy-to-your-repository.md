---
title: Добавление политики безопасности в репозиторий
intro: 'Вы можете предоставить инструкции по информированию об уязвимостях безопасности в проекте, добавив политику безопасности в репозиторий.'
redirect_from:
  - /articles/adding-a-security-policy-to-your-repository
  - /github/managing-security-vulnerabilities/adding-a-security-policy-to-your-repository
  - /github/code-security/security-advisories/adding-a-security-policy-to-your-repository
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: how_to
topics:
  - Security policies
  - Vulnerabilities
  - Repositories
  - Health
shortTitle: Add a security policy
ms.openlocfilehash: ef4a256c06b9149bd9db8d7afdce974dd1d29f0d
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 11/09/2022
ms.locfileid: '148159272'
---
## Сведения о политиках безопасности

Чтобы предоставить пользователям инструкции по отправке отчетов об уязвимостях в проекте,{% ifversion fpt or ghes or ghec %} можно добавить файл _SECURITY.md_ в корневой каталог репозитория, папку `docs` или `.github`.{% else %} можно добавить файл _SECURITY.md_ в корневой каталог репозитория или папку `docs`.{% endif %} Когда кто-то создает проблему в репозитории, он увидит ссылку на политику безопасности вашего проекта.

{% ifversion not ghae %}
<!-- no public repos in GHAE -->
Можно создать политику безопасности по умолчанию для организации или личной учетной записи. Дополнительные сведения см. в статье "[Создание файла работоспособности сообщества по умолчанию](/communities/setting-up-your-project-for-healthy-contributions/creating-a-default-community-health-file)".
{% endif %}

{% tip %}

**Совет**. Чтобы пользователи могли легко найти политику безопасности, можно указать ссылку на файл _SECURITY.md_ из других мест в репозитории, например в файле README. Дополнительные сведения см. в статье [О файлах README](/articles/about-readmes).

{% endtip %}

{% ifversion fpt or ghec %} Когда кто-то сообщает об уязвимости в проекте, вы можете использовать {% data variables.product.prodname_security_advisories %}, чтобы раскрыть и публиковать сведения об уязвимости, а также устранить ее саму. Дополнительные сведения о процессе раскрытия информации об уязвимостях и создания отчетов о них в {% data variables.product.prodname_dotcom %} см. в разделе [Сведения о скоординированном раскрытии информации об уязвимостях](/code-security/security-advisories/guidance-on-reporting-and-writing/about-coordinated-disclosure-of-security-vulnerabilities#about-reporting-and-disclosing-vulnerabilities-in-projects-on-github). Дополнительные сведения о рекомендациях по безопасности репозитория см. в разделе [Сведения о рекомендациях по безопасности репозитория](/github/managing-security-vulnerabilities/about-github-security-advisories).

{% data reusables.repositories.github-security-lab %} {% endif %} {% ifversion ghes or ghae %}
<!-- alternative to the content about GitHub Security Advisories in the dotcom article -->
Если вы предоставляете четкие инструкции по созданию отчетов о безопасности, пользователям будет легче сообщать об уязвимостях, найденных ими в вашем репозитории, с помощью предпочитаемого вами канала связи.
{% endif %}

## Добавление политики безопасности в репозиторий

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-security %}
3. На левой боковой панели щелкните **Политика безопасности**.
  ![Вкладка "Политика безопасности"](/assets/images/help/security/security-policy-tab.png)
4. Нажмите кнопку **Запуск установки**.
  ![Кнопка "Запуск установки"](/assets/images/help/security/start-setup-security-policy-button.png)
5. В новом файле _SECURITY.md_ добавьте сведения о поддерживаемых версиях проекта и о том, как сообщить об уязвимости.
{% data reusables.files.write_commit_message %} {% data reusables.files.choose-commit-email %} {% data reusables.files.choose_commit_branch %} {% data reusables.files.propose_file_change %}

## Дополнительные материалы

- [Защита репозитория](/code-security/getting-started/securing-your-repository){% ifversion not ghae %}
- [Настройка проекта для внесения действенных вкладов](/communities/setting-up-your-project-for-healthy-contributions){% endif %}{% ifversion fpt or ghec %}
- [{% data variables.product.prodname_security %}]({% data variables.product.prodname_security_link %}){% endif %}
