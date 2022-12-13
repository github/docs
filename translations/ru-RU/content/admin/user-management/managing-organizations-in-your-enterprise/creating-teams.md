---
title: Создание групп
intro: 'Команды предоставляют организациям возможность создавать группы членов и управлять доступом к репозиториям. Членам команды можно предоставить разрешения на чтение, запись или разрешения администратора для определенных репозиториев.'
redirect_from:
  - /enterprise/admin/user-management/creating-teams
  - /admin/user-management/creating-teams
versions:
  ghes: '*'
  ghae: '*'
type: how_to
topics:
  - Access management
  - Enterprise
  - Teams
  - User account
ms.openlocfilehash: ea7eb694232970fc3027321aee7ba1ef64485fe1
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/20/2022
ms.locfileid: '148098820'
---
Команды занимают центральное место во многих функциях совместной работы {% data variables.product.prodname_dotcom %}, например @mentions команды для уведомления соответствующих сторон о том, что вам нужны их входные данные или требуется внимание. Дополнительные сведения см. в статье "[Роли в организации](/organizations/managing-peoples-access-to-your-organization-with-roles/roles-in-an-organization)".

Команда может представлять группу в вашей компании или состоять из людей с определенными интересами или опытом. Например, группа экспертов по специальным возможностям по {% данных variables.location.product_location %} может состоять из нескольких разных отделов. Команды могут представлять функциональные группы, которые дополняют существующую в компании иерархию подразделений.

Организации могут создавать несколько уровней вложенных команд, чтобы отразить структуру иерархии компании или группы. Дополнительные сведения см. в статье "[Сведения о командах](/enterprise/user/articles/about-teams/#nested-teams)".

## Создание команды

Разумное сочетание команд является эффективным способом контроля доступа к хранилищу. Например, если организация позволяет отправлять код в ветвь по умолчанию любого репозитория только команде разработчиков выпусков, вы можете предоставить разрешения **администратора** для репозиториев организации только команде разработчиков выпусков, а всем остальным командам предоставить разрешения на **чтение**.

{% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %} {% data reusables.organizations.new_team %} {% data reusables.organizations.team_name %} {% data reusables.organizations.team_description %} {% data reusables.organizations.team_visibility %} {% data reusables.organizations.create-team-choose-parent %} {% data reusables.organizations.create_team %}

{% ifversion ghes %}

## Создание команд с включенной синхронизацией LDAP

Экземпляры, использующие LDAP для проверки подлинности пользователей, могут использовать синхронизацию LDAP для управления участниками команды. При задании **различающегося имени** группе (DN) в поле **Группы LDAP** команда будет сопоставлена с группой LDAP на сервере LDAP. Если вы используете ldap Sync для управления участниками команды, вы не сможете управлять командой в {% данных variables.location.product_location %}. Сопоставленная команда будет синхронизировать своих членов в фоновом режиме и периодически с интервалом, настроенным при включении LDAP Sync. Дополнительные сведения см. в статье "[Включение синхронизации LDAP](/enterprise/admin/authentication/using-ldap#enabling-ldap-sync)".

Чтобы создать команду с включенной синхронизацией LDAP, необходимо быть администратором сайта и владельцем организации.

{% data reusables.enterprise_user_management.ldap-sync-nested-teams %}

{% warning %}

**Примечания.**
- LDAP Sync управляет только списком членов команды. Вы должны управлять репозиториями и разрешениями команды в {% data variables.product.prodname_ghe_server %}.
- Если сопоставление группы LDAP с DN удаляется, например при удалении группы LDAP, каждый член удаляется из синхронизированной команды {% data variables.product.prodname_ghe_server %}. Чтобы устранить эту проблему, сопоставьте команду с новым DN, добавьте членов команды обратно и [вручную синхронизируйте сопоставление](/enterprise/admin/authentication/using-ldap#manually-syncing-ldap-accounts).
- Если LDAP Sync включена, то при удалении из репозитория пользователь потеряет доступ, но его вилки будут сохранены. Если пользователь добавляется в команду с доступом к исходному репозиторию организации в течение трех месяцев, доступ к вилкам будет автоматически восстановлен при следующей синхронизации.

{% endwarning %}

1. Убедитесь, что [LDAP Sync включена](/enterprise/admin/authentication/using-ldap#enabling-ldap-sync).
{% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %} {% data reusables.organizations.new_team %} {% data reusables.organizations.team_name %}
6. Найдите DN группы LDAP, чтобы сопоставить с ним команду. Если вы не знаете имя DN, введите имя группы LDAP. {% data variables.product.prodname_ghe_server %} выполнит поиск и автоматически подставит любые совпадения.
![Сопоставление с DN группы LDAP](/assets/images/enterprise/orgs-and-teams/ldap-group-mapping.png) {% data reusables.organizations.team_description %} {% data reusables.organizations.team_visibility %} {% data reusables.organizations.create-team-choose-parent %} {% data reusables.organizations.create_team %}

{% endif %}
