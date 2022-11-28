---
title: Eine Organisation in einen Benutzer umwandeln
intro: 'Es ist nicht möglich, eine Organisation in eine persönliches Benutzerkonto umzuwandeln. Du kannst jedoch ein neues persönliches Benutzerkonto erstellen und die Repositorys der Organisation in das Konto übertragen.'
redirect_from:
  - /articles/converting-an-organization-into-a-user
  - /github/setting-up-and-managing-organizations-and-teams/converting-an-organization-into-a-user
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Convert organization to user
ms.openlocfilehash: ef6baa2db188570476ee36d5f6932a87d615d2ec
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: '145149800'
---
{% ifversion fpt or ghec %}

{% note %}

**Hinweis**: Nachdem ein Konto gelöscht wurde, ist der zum Zeitpunkt des Löschens gültige Benutzername 90 Tage lang nicht mehr zur Wiederverwendung verfügbar. Um den Benutzernamen einer Organisation sofort wiederzuverwenden, musst du den Benutzernamen ändern, bevor du die Organisation löschst.

 {% endnote %}

1. [Registriere dich](/articles/signing-up-for-a-new-github-account) für ein neues Konto auf GitHub.
2. [Ändere die Rolle des Benutzers in „Besitzer“](/articles/changing-a-person-s-role-to-owner).
3. {% data variables.product.signin_link %} mit dem neuen persönlichen Konto.
4. [Übertrage jedes Organisationsrepository](/articles/how-to-transfer-a-repository) auf das neue persönliche Konto.
5. [Benenne die Organisation um](/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-personal-account-settings/changing-your-github-username), um den aktuellen Benutzernamen verfügbar zu machen.
6. [Benenne den Benutzer](/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-personal-account-settings/changing-your-github-username) in den Namen der Organisation um.
7. [Lösche die Organisation](/organizations/managing-organization-settings/deleting-an-organization-account).


{% else %}

1. Registriere Dich für ein neues persönliches GitHub Enterprise-Konto.
2. [Ändere die Rolle des Benutzers in „Besitzer“](/articles/changing-a-person-s-role-to-owner).
3. {% data variables.product.signin_link %} mit dem neuen persönlichen Konto.
4. [Übertrage jedes Organisationsrepository](/articles/how-to-transfer-a-repository) auf das neue persönliche Konto.
5. [Lösche die Organisation](/articles/deleting-an-organization-account).
6. [Benenne den Benutzer](/articles/changing-your-github-username) in den Namen der Organisation um.

{% endif %}
