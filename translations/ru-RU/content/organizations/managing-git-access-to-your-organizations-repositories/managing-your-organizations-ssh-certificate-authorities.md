---
title: Управление центрами сертификации SSH в вашей организации
intro: Вы можете добавить или удалить центры сертификации SSH из своей организации.
redirect_from:
  - /articles/managing-your-organizations-ssh-certificate-authorities
  - /github/setting-up-and-managing-organizations-and-teams/managing-your-organizations-ssh-certificate-authorities
versions:
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Manage SSH authorities
permissions: Organization owners can manage an organization's SSH certificate authorities (CA).
ms.openlocfilehash: d2f5b946e854accd68a3e6293f8e384996a261d7
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/11/2022
ms.locfileid: '145134942'
---
Вы можете разрешить участникам доступ к репозиториям вашей организации с помощью сертификатов SSH, предоставляемых путем добавления ЦС SSH в организацию. {% data reusables.organizations.can-require-ssh-cert %} Дополнительные сведения см. в разделе [Сведения о центрах сертификации SSH](/articles/about-ssh-certificate-authorities).

{% data reusables.organizations.ssh-ca-ghec-only %}

{% data reusables.organizations.add-extension-to-cert %}

## Добавление центра сертификации SSH

Если вы требуете сертификаты SSH, для вашего предприятия, члены предприятия должны использовать специальный URL-адрес для операций Git по протоколу SSH. Дополнительные сведения см. в разделе [Сведения о центрах сертификации SSH](/organizations/managing-git-access-to-your-organizations-repositories/about-ssh-certificate-authorities#about-ssh-urls-with-ssh-certificates).

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.security %} {% data reusables.organizations.new-ssh-ca %} {% data reusables.organizations.require-ssh-cert %}

## Удаление центра сертификации SSH

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.security %} {% data reusables.organizations.delete-ssh-ca %}
