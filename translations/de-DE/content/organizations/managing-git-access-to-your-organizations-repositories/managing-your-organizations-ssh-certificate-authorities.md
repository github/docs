---
title: SSH-Zertifizierungsstellen Deiner Organisation verwalten
intro: Du kannst SSH-Zertifizierungsstellen zu Deiner Organisation hinzufügen oder aus dieser entfernen.
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
ms.contentlocale: de-DE
ms.lasthandoff: 09/11/2022
ms.locfileid: '145130689'
---
Du kannst festlegen, dass Mitglieder mithilfe der von Dir bereitgestellten SSH-Zertifikate auf die Repositorys Deiner Organisation zugreifen können, indem Du Deiner Organisation eine SSH-Zertifizierungsstelle hinzufügst. {% data reusables.organizations.can-require-ssh-cert %} Weitere Informationen findest Du unter "[Informationen zu SSH-Zertifizierungsstellen](/articles/about-ssh-certificate-authorities)."

{% data reusables.organizations.ssh-ca-ghec-only %}

{% data reusables.organizations.add-extension-to-cert %}

## Eine SSH-Zertifizierungsstelle hinzufügen

Wenn du für dein Unternehmen SSH-Zertifikate benötigst, sollten Unternehmensmitglieder eine spezielle URL für Git-Vorgänge über SSH verwenden. Weitere Informationen findest du unter [Informationen zu SSH-Zertifizierungsstellen](/organizations/managing-git-access-to-your-organizations-repositories/about-ssh-certificate-authorities#about-ssh-urls-with-ssh-certificates).

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.security %} {% data reusables.organizations.new-ssh-ca %} {% data reusables.organizations.require-ssh-cert %}

## Eine SSH-Zertifizierungsstelle löschen

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.security %} {% data reusables.organizations.delete-ssh-ca %}
