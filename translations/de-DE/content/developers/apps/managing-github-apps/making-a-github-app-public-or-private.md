---
title: Öffentlich- oder Privatmachen einer GitHub-App
intro: '{% data reusables.shortdesc.making-a-github-app-public-or-private %}'
redirect_from:
  - /apps/building-integrations/setting-up-and-registering-github-apps/about-installation-options-for-github-apps
  - /apps/building-github-apps/installation-options-for-github-apps
  - /apps/building-integrations/managing-github-apps/changing-a-github-app-s-installation-option
  - /apps/managing-github-apps/changing-a-github-app-s-installation-option
  - /apps/managing-github-apps/making-a-github-app-public-or-private
  - /developers/apps/making-a-github-app-public-or-private
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - GitHub Apps
shortTitle: Manage app visibility
ms.openlocfilehash: f276be130be76f110d4c4ad3c0bfa3bff708aad6
ms.sourcegitcommit: 1309b46201604c190c63bfee47dce559003899bf
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/10/2022
ms.locfileid: '147065890'
---
Informationen zur Authentifizierung findest du unter [Authentifizieren mit GitHub-Apps](/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-an-installation).

## Öffentlicher Installationsflow

Öffentliche Installationsflows verfügen über eine Startseite, um anderen Personen neben dem App-Besitzer die Installation der App in ihren Repositorys zu ermöglichen. Dieser Link wird beim Einrichten deiner GitHub-App im Feld „Öffentlicher Link“ bereitgestellt. Weitere Informationen findest du unter [Installieren von GitHub-Apps](/apps/installing-github-apps/).

## Privater Installationsflow

Private Installationsflows ermöglichen nur dem Besitzer einer GitHub-App, sie zu installieren. Eingeschränkte Informationen über die GitHub-App sind weiterhin auf einer öffentlichen Seite verfügbar, aber die Schaltfläche **Installieren** ist nur für Organisationsadministratoren oder das persönliche Konto verfügbar, wenn die GitHub-App einem individuellen Konto gehört. Private GitHub-Apps können nur im Benutzer- oder Organisationskonto des Besitzers installiert werden.

## Ändern, wer deine GitHub App-installieren kann

So änderst du, wer die GitHub-App installieren kann:

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.developer_settings %} {% data reusables.user-settings.github_apps %}
3. Wähle die GitHub-App aus, deren Installationsoption du ändern möchtest.
![App-Auswahl](/assets/images/github-apps/github_apps_select-app.png) {% data reusables.user-settings.github_apps_advanced %}
5. Klicke je nach Installationsoption deiner GitHub-App entweder auf **Öffentlich machen** oder **Privat machen**.
![Schaltfläche zum Ändern der Installationsoption deiner GitHub-App](/assets/images/github-apps/github_apps_make_public.png)
6. Klicke je nach Installationsoption deiner GitHub-App entweder auf **Ja, diese GitHub-App öffentlich machen** oder **Ja, diese GitHub-App {% ifversion fpt or ghec %}intern{% else %}privat{% endif %} machen**.
![Schaltfläche zum Bestätigen der Änderung deiner Installationsoption](/assets/images/github-apps/github_apps_confirm_installation_option.png)
