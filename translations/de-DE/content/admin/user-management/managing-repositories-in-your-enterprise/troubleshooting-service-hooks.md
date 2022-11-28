---
title: Fehlerbehebung bei Dienst-Hooks
intro: 'Wenn keine Nutzdaten bereitgestellt werden, solltest du nach diesen allgemeinen Problemen suchen.'
redirect_from:
  - /enterprise/admin/articles/troubleshooting-service-hooks
  - /enterprise/admin/developer-workflow/troubleshooting-service-hooks
  - /enterprise/admin/user-management/troubleshooting-service-hooks
  - /admin/user-management/troubleshooting-service-hooks
versions:
  ghes: '*'
  ghae: '*'
topics:
  - Enterprise
shortTitle: Troubleshoot service hooks
ms.openlocfilehash: 224a0071d87407f9f6bb15ababbdb0c7171f8799
ms.sourcegitcommit: 76b840f45ba85fb79a7f0c1eb43bc663b3eadf2b
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/12/2022
ms.locfileid: '145104735'
---
## Informationen zu Auslieferungen abrufen

Du kannst nach Informationen für die letzte Antwort sämtlicher Dienst-Hook-Auslieferungen auf einem beliebigen Repository suchen.

{% data reusables.enterprise_site_admin_settings.access-settings %}
2. Navigiere zu dem Repository, das du untersuchst.
3. Klicke in der Navigationsseitenleiste auf den Link **Hooks**.
  ![Seitenleiste „Hooks“](/assets/images/enterprise/settings/Enterprise-Hooks-Sidebar.png)
4. Klicke unter dem Diensthook mit Problemen auf den Link **Neueste Übermittlung**.
  ![Hook-Details](/assets/images/enterprise/settings/Enterprise-Hooks-Details.png)
5. Unter **Remoteaufrufe** werden die beim Senden der POST-Methode an den Remoteserver verwendeten Header zusammen mit der Antwort angezeigt, die der Remoteserver an deine Installation zurückgesendet hat.

## Nutzlast anzeigen

{% data reusables.enterprise_site_admin_settings.access-settings %}
2. Navigiere zu dem Repository, das du untersuchst.
3. Klicke in der Navigationsseitenleiste auf den Link **Hooks**.
  ![Seitenleiste „Hooks“](/assets/images/enterprise/settings/Enterprise-Hooks-Sidebar.png)
4. Klicke unter dem Diensthook mit Problemen auf den Link **Neueste Übermittlung**.
5. Klicke auf **Übermittlung**.
  ![Anzeigen der Nutzlast](/assets/images/enterprise/settings/Enterprise-Hooks-Payload.png)

## Vergangene Auslieferungen anzeigen

Auslieferungen werden 15 Tage lang gespeichert.

{% data reusables.enterprise_site_admin_settings.access-settings %}
2. Navigiere zu dem Repository, das du untersuchst.
3. Klicke in der Navigationsseitenleiste auf den Link **Hooks**.
  ![Seitenleiste „Hooks“](/assets/images/enterprise/settings/Enterprise-Hooks-Sidebar.png)
4. Klicke unter dem Diensthook mit Problemen auf den Link **Neueste Übermittlung**.
5. Wenn du weitere Übermittlungen an diesen spezifischen Hook anzeigen möchtest, klicke auf **More for this Hook ID:**![Viewing more deliveries](/assets/images/enterprise/settings/Enterprise-Hooks-More-Deliveries.png) (Mehr für diese Hook-ID: Weitere Übermittlungen anzeigen).
