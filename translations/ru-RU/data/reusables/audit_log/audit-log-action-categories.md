---
ms.openlocfilehash: e0bf1f4b7bbd5fcb145a6e869dd442fd8e53108a
ms.sourcegitcommit: b4996daba2e75b3368f39316e6929602f13b961b
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/31/2022
ms.locfileid: "148120537"
---
| Имя категории | Описание
|------------------|-------------------
{%- ifversion fpt or ghec %} | `account` | Содержит действия, связанные с учетной записью организации.
| `advisory_credit` | Содержит действия, связанные с кредитованием участника за советы по безопасности в {% data variables.product.prodname_advisory_database %}. Дополнительные сведения см. в разделе [Сведения о советах по безопасности {% data variables.product.prodname_dotcom %}](/github/managing-security-vulnerabilities/about-github-security-advisories).
{%- endif %} | `artifact` | Содержит действия, связанные с артефактами запуска рабочего процесса {% data variables.product.prodname_actions %}.
{%- ifversion audit-log-streaming %} | `audit_log_streaming` | Содержит действия, связанные с потоковой передачей журналов аудита для организаций в корпоративной учетной записи.
{%- endif %} {%- ifversion fpt or ghec %} | `billing` | Содержит действия, связанные с выставлением счетов организации.
{%- endif %} {%- ifversion ghec or ghes or ghae %} | `business` | Содержит действия, связанные с бизнес-параметрами для предприятия.
{%- endif %} {%- ifversion code-security-audit-log-events %} | `business_advanced_security` | Содержит действия, связанные с {% data variables.product.prodname_GH_advanced_security %} на предприятии. Дополнительные сведения см. в разделе [Управление функциями {% data variables.product.prodname_GH_advanced_security %} для вашего предприятия](/admin/code-security/managing-github-advanced-security-for-your-enterprise/managing-github-advanced-security-features-for-your-enterprise).
| `business_secret_scanning` | Содержит действия, связанные с {% data variables.product.prodname_secret_scanning %} на предприятии. Дополнительные сведения см. в разделе [Управление функциями {% data variables.product.prodname_GH_advanced_security %} для вашего предприятия](/admin/code-security/managing-github-advanced-security-for-your-enterprise/managing-github-advanced-security-features-for-your-enterprise).
{%- endif %} {%- ifversion secret-scanning-audit-log-custom-patterns %} | `business_secret_scanning_custom_pattern` | Содержит действия, связанные с пользовательскими шаблонами для {% data variables.product.prodname_secret_scanning %} на предприятии.
{%- endif %} {%- ifversion code-security-audit-log-events %} | `business_secret_scanning_push_protection` | Содержит действия, связанные с функцией принудительной защиты {% data variables.product.prodname_secret_scanning %} на предприятии. Дополнительные сведения см. в разделе [Управление функциями {% data variables.product.prodname_GH_advanced_security %} для вашего предприятия](/admin/code-security/managing-github-advanced-security-for-your-enterprise/managing-github-advanced-security-features-for-your-enterprise).
| `business_secret_scanning_push_protection_custom_message` | Содержит действия, связанные с пользовательским сообщением, отображаемым при активации принудительной защиты на предприятии. Дополнительные сведения см. в разделе [Управление функциями {% data variables.product.prodname_GH_advanced_security %} для вашего предприятия](/admin/code-security/managing-github-advanced-security-for-your-enterprise/managing-github-advanced-security-features-for-your-enterprise).
{%- endif %} | `checks` | Содержит действия, связанные с наборами проверок и запусками.
{%- ifversion fpt or ghec %} | `codespaces` | Содержит действия, связанные с codespace организации.
{%- endif %} | `commit_comment` | Содержит действия, связанные с обновлением или удалением комментариев фиксации.
{%- ifversion ghes %} | `config_entry` | Содержит действия, связанные с параметрами конфигурации. Эти события видимы только в журнале аудита администратора сайта.
{%- endif %} | `dependabot_alerts`  | Содержит действия конфигурации на уровне организации для {% data variables.product.prodname_dependabot_alerts %} в существующих репозиториях. Дополнительные сведения см. в статье "[Сведения о {% data variables.product.prodname_dependabot_alerts %}](/code-security/dependabot/dependabot-alerts/about-dependabot-alerts)".
| `dependabot_alerts_new_repos` | Содержит действия, связанные с конфигурацией на уровне организации, для {% data variables.product.prodname_dependabot_alerts %} в новых репозиториях, созданных в организации.
| `dependabot_repository_access` Содержит действия, связанные с частными репозиториями в {% data variables.product.prodname_dependabot %}, к которым разрешен доступ.
{%- ifversion fpt or ghec or ghes %} | `dependabot_security_updates`   | Содержит действия конфигурации на уровне организации для {% data variables.product.prodname_dependabot_security_updates %} в существующих репозиториях. Дополнительные сведения см. в разделе [Настройка обновлений версий {% data variables.product.prodname_dependabot_security_updates %}](/github/managing-security-vulnerabilities/configuring-dependabot-security-updates).
| `dependabot_security_updates_new_repos`| Содержит действия, связанные с конфигурацией на уровне организации, для {% data variables.product.prodname_dependabot_security_updates %} для новых репозиториев, созданных в организации.
{%- endif %} | `dependency_graph` | Содержит действия, связанные с конфигурацией на уровне организации, для графов зависимостей для репозиториев. Дополнительные сведения см. в разделе [Сведения о графе зависимостей](/github/visualizing-repository-data-with-graphs/about-the-dependency-graph).
| `dependency_graph_new_repos` | Содержит действия, связанные с конфигурацией на уровне организации, для новых репозиториев, созданных в организации.
{%- ifversion fpt or ghec %} | `discussion` | Содержит действия, связанные с обсуждениями команд.
| `discussion_comment` | Содержит действия, связанные с комментариями, опубликованными в обсуждениях на странице команды.
| `discussion_post` | Содержит действия, связанные с обсуждениями, опубликованными на странице команды.
| `discussion_post_reply` | Содержит действия, связанные с ответами на обсуждения, опубликованными на странице команды.
{%- endif %} {%- ifversion ghec or ghes %} | `dotcom_connection` | Содержит действия, связанные с {% data variables.product.prodname_github_connect %}.
| `enterprise` | Содержит действия, связанные с параметрами предприятия.
{%- endif %} {%- ifversion ghec %} | `enterprise_domain` | Содержит действия, связанные с проверенными корпоративными доменами.
| `enterprise_installation` | Содержит действия в отношении {% data variables.product.prodname_github_app %}, связанных с корпоративным подключением {% data variables.product.prodname_github_connect %}.
{%- endif %} {%- ifversion fpt or ghec %} | `environment` | Содержит действия, связанные со средами {% data variables.product.prodname_actions %}.
{%- endif %} {%- ifversion ghae %} | `external_group` | Содержит действия, связанные с группами Okta.
| `external_identity` | Содержит действия, связанные с пользователем в группе Okta.
{%- endif %} | `gist` | Содержит действия, связанные с gist.
| `hook` | Содержит действия, связанные с веб-перехватчиками.
| `integration` | Содержит действия, связанные с интеграциями в учетной записи.
| `integration_installation` | Содержит действия, связанные с интеграциями, установленными в учетной записи.
| `integration_installation_request` | Содержит действия, связанные с запросами участников организации на утверждение интеграций владельцами для использования в организации.
{%- ifversion ghec or ghae %} | `ip_allow_list` | Содержит действия, связанные с включением или отключением списка разрешенных IP-адресов для организации.
| `ip_allow_list_entry` | Содержит действия, связанные с созданием, удалением и изменением записи списка разрешенных IP-адресов для организации.
{%- endif %} | `issue` | Содержит действия, связанные с закреплением, переносом или удалением проблемы в репозитории.
| `issue_comment` | Содержит действия, связанные с закреплением, переносом или удалением комментариев к проблеме.
| `issues` | Содержит действия, связанные с включением или отключением создания проблем для организации.
{%- ifversion fpt or ghec %} | `marketplace_agreement_signature` | Содержит действия, связанные с подписанием соглашения с разработчиком {% data variables.product.prodname_marketplace %}.
| `marketplace_listing` | Содержит действия, связанные с добавлением приложений в {% data variables.product.prodname_marketplace %}.
{%- endif %} | `members_can_create_pages` | Содержит действия, связанные с управлением публикацией сайтов {% data variables.product.prodname_pages %} для репозиториев в организации. Дополнительные сведения см. в разделе [Управление публикацией сайтов {% data variables.product.prodname_pages %} для организации](/organizations/managing-organization-settings/managing-the-publication-of-github-pages-sites-for-your-organization).
| `members_can_create_private_pages` | Содержит действия, связанные с управлением публикацией частных сайтов {% data variables.product.prodname_pages %} для репозиториев в организации.
| `members_can_create_public_pages` | Содержит действия, связанные с управлением публикацией общедоступных сайтов {% data variables.product.prodname_pages %} для репозиториев в организации.
{%- ifversion ghec or ghes or ghae %} | `members_can_delete_repos` | Содержит действия, связанные с включением или отключением создания репозитория для организации.
{%- endif %} {%- ifversion fpt or ghec %} | `members_can_view_dependency_insights` | Содержит действия, связанные с конфигурацией на уровне организации, позволяющей участникам организации просматривать аналитические сведения о зависимостях.
| `migration` | Содержит действия, связанные с передачей данных из *исходного* расположения (например, организации {% data variables.product.prodname_dotcom_the_website %} или экземпляра {% data variables.product.prodname_ghe_server %}) в *целевой* экземпляр {% data variables.product.prodname_ghe_server %}.
{%- endif %} | `oauth_access` | Содержит действия, связанные с маркерами доступа OAuth.
| `oauth_application` | Содержит действия, связанные с приложениями OAuth.
{%- ifversion fpt or ghec %} | `oauth_authorization` | Содержит действия, связанные с авторизацией приложений OAuth.
{%- endif %} | `org` | Содержит действия, связанные с членством в организации.
{%- ifversion ghec or ghes or ghae %} | `org_credential_authorization` | Содержит действия, связанные с авторизацией учетных данных для использования с единым входом SAML.
{%- endif %} {%- ifversion secret-scanning-audit-log-custom-patterns %} | `org_secret_scanning_custom_pattern` | Содержит действия, связанные с пользовательскими шаблонами для сканирования секретов в организации. Дополнительные сведения см. в разделе [Определение пользовательских шаблонов для сканирования секретов](/code-security/secret-scanning/defining-custom-patterns-for-secret-scanning).
| `org.secret_scanning_push_protection` | Содержит действия, связанные с пользовательскими шаблонами сканирования секретов в организации. Дополнительные сведения см. в разделе [Защита push-уведомлений с помощью сканирования секретов](/code-security/secret-scanning/protecting-pushes-with-secret-scanning).
{%- endif %} | `organization_default_label` | Содержит действия, связанные с метками по умолчанию для репозиториев в организации.
{%- ifversion fpt or ghec or ghes %} | `organization_domain` | Содержит действия, связанные с проверенными доменами организации.
| `organization_projects_change` | Содержит действия, связанные с досками проектов на уровне организации в предприятии.
{%- endif %} {%- ifversion fpt or ghec %} | `pages_protected_domain` | Содержит действия, связанные с проверенными личными доменами для {% data variables.product.prodname_pages %}.
| `payment_method` | Содержит действия, связанные с методом оплаты {% data variables.product.prodname_dotcom %} организации.
| `prebuild_configuration` | Содержит действия, связанные с конфигурациями предварительной сборки для {% data variables.product.prodname_github_codespaces %}.
{%- endif %} {%- ifversion ghes %} | `pre_receive_environment` | Содержит действия, связанные со средами перехватчиков предварительного получения.
| `pre_receive_hook` | Содержит действия, связанные с перехватчиками предварительного получения.
{%- endif %} {%- ifversion ghes %} | `private_instance_encryption` | Содержит действия, связанные с включением частного режима для предприятия.
{%- endif %} | `private_repository_forking` | Содержит действия, связанные с разрешением вилок частных и внутренних репозиториев для репозитория, организации или предприятия.
{%- ifversion fpt or ghec %} | `profile_picture` | Содержит действия, связанные с изображением профиля организации.
{%- endif %} | `project` | Содержит действия, связанные с досками проектов.
| `project_field` | Содержит действия, связанные с созданием и удалением полей на доске проектов.
| `project_view` | Содержит действия, связанные с созданием и удалением представлений на доске проектов.
| `protected_branch` | Содержит действия, связанные с защищенными ветвями.
| `public_key` | Содержит действия, связанные с ключами SSH и ключами развертывания.
| `pull_request` | Содержит действия, связанные с запросами на вытягивание.
| `pull_request_review` | Содержит действия, связанные с проверками запросов на вытягивание.
| `pull_request_review_comment` | Содержит действия, связанные с комментариями проверки запросов на вытягивание.
| `repo` | Содержит действия, связанные с принадлежащими организации репозиториями.
{%- ifversion fpt or ghec %} | `repository_advisory` | Содержит действия на уровне репозитория, связанные с советами по безопасности в {% data variables.product.prodname_advisory_database %}.  Дополнительные сведения см. в разделе [Сведения о советах по безопасности {% data variables.product.prodname_dotcom %}](/github/managing-security-vulnerabilities/about-github-security-advisories).
| `repository_content_analysis` | Содержит действия, связанные с [включением или отключением использования данных для частного репозитория](/articles/about-github-s-use-of-your-data).
| `repository_dependency_graph` | Содержит действия на уровне репозитория, связанные с включением или отключением графа зависимостей для {% ifversion fpt or ghec %}частного {% endif %}репозитория. Дополнительные сведения см. в разделе [Сведения о графе зависимостей](/github/visualizing-repository-data-with-graphs/about-the-dependency-graph).
{%- endif %} | `repository_image` | Содержит действия, связанные с образами для репозитория.
| `repository_invitation` | Содержит действия, связанные с приглашениями на присоединение к репозиторию.
| `repository_projects_change` | Содержит действия, связанные с включением проектов для репозитория или для всех репозиториев в организации.
{%- ifversion ghec or ghes or ghae %} | `repository_secret_scanning` | Содержит действия на уровне репозитория, связанные со сканированием секретов. Дополнительные сведения см. в статье [Сведения о сканировании секретов](/github/administering-a-repository/about-secret-scanning).
{%- endif %} {%- ifversion secret-scanning-audit-log-custom-patterns %} | `repository_secret_scanning_custom_pattern` | Содержит действия, связанные с пользовательскими шаблонами сканирования шаблонов в репозитории. Дополнительные сведения см. в разделе [Определение пользовательских шаблонов для сканирования секретов](/code-security/secret-scanning/defining-custom-patterns-for-secret-scanning). {% endif %}{% ifversion secret-scanning-audit-log-custom-patterns %} | `repository_secret_scanning_push_protection` | Содержит действия, связанные с пользовательскими шаблонами сканирования шаблонов в репозитории. Дополнительные сведения см. в разделе [Защита push-уведомлений с помощью сканирования секретов](/code-security/secret-scanning/protecting-pushes-with-secret-scanning).
{%- endif %} {%- ifversion fpt or ghec %} | `repository_visibility_change` | Содержит действия, связанные с разрешением участникам организации изменять видимость репозитория для организации.
{%- endif %} | `repository_vulnerability_alert`   | Содержит действия, связанные с [{% data variables.product.prodname_dependabot_alerts %}](/code-security/dependabot/dependabot-alerts/about-dependabot-alerts).
{%- ifversion fpt or ghec %} | `repository_vulnerability_alerts` | Содержит действия, связанные с конфигурацией на уровне репозитория, для {% data variables.product.prodname_dependabot_alerts %}.
| `required_status_check` | Содержит действия, связанные с обязательными проверками состояния для защищенных ветвей.
{%- endif %} {%- ifversion ghec or ghes %} | `restrict_notification_delivery` | Содержит действия, связанные с ограничением уведомлений по электронной почте для утвержденных или проверенных доменов для предприятия.
{%- endif %} {%- ifversion custom-repository-roles %} | `role` | Содержит действия, связанные с [ролями пользовательского репозитория](/organizations/managing-peoples-access-to-your-organization-with-roles/managing-custom-repository-roles-for-an-organization).
{%- endif %} {%- ifversion ghec or ghes or ghae %} | `secret_scanning` | Содержит действия, связанные с конфигурацией на уровне организации, для сканирования секретов в существующих репозиториях. Дополнительные сведения см. в статье [Сведения о сканировании секретов](/github/administering-a-repository/about-secret-scanning).
| `secret_scanning_new_repos` | Содержит действия, связанные с конфигурацией на уровне организации, для сканирования секретов для новых репозиториев, созданных в организации.
{%- endif %} {%- ifversion ghec or ghes or ghae %} | `security_key` | Содержит действия, связанные с регистрацией и удалением ключей безопасности.
{%- endif %} {%- ifversion fpt or ghec %} | `sponsors` | Содержит события, связанные с кнопками спонсора (см. статью [Отображение кнопки спонсора в репозитории](/articles/displaying-a-sponsor-button-in-your-repository)).
{%- endif %} {%- ifversion ghec or ghes or ghae %} | `ssh_certificate_authority` | Содержит действия, связанные с центром сертификации SSH в организации или на предприятии.
| `ssh_certificate_requirement` | Содержит действия, связанные с требованием к участникам использовать сертификаты SSH для доступа к ресурсам организации.
{%- endif %} | `staff` | Содержит действия, связанные с выполнением действия администратором сайта.
| `team` | Содержит действия, связанные с командами в организации.
| `team_discussions` | Содержит действия, связанные с управлением обсуждениями команд для организации.
{%- ifversion ghec %} | `team_sync_tenant` | Содержит действия, связанные с синхронизацией команды с поставщиком удостоверений для предприятия или организации.
{%- endif %} {%- ifversion fpt or ghes %} | `two_factor_authentication` | Содержит действия, связанные с двухфакторной проверкой подлинности.
{%- endif %} | `user` | Содержит действия, связанные с пользователями организации или предприятия.
{%- ifversion ghec or ghes %} | `user_license` | Содержит действия, связанные с пользователем, который занимает лицензионное рабочее место и является участником предприятия.
{%- endif %} | `workflows`   | Содержит действия, связанные с рабочими процессами {% data variables.product.prodname_actions %}.
