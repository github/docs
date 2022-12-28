---
title: Informationen zu Apps
intro: 'Du kannst Integrationen mithilfe der {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %}{% else %}{% data variables.product.product_name %}{% endif %}-APIs erstellen, um deinem eigenen Workflow Flexibilität hinzuzufügen und einen reibungslosen Ablauf zu gewährleisten.{% ifversion fpt or ghec %} Du kannst Integrationen auch mit anderen Benutzer*innen auf [{% data variables.product.prodname_marketplace %}](https://github.com/marketplace) teilen.{% endif %}'
redirect_from:
  - /apps/building-integrationssetting-up-a-new-integration
  - /apps/building-integrations
  - /apps/getting-started-with-building-apps
  - /apps/about-apps
  - /developers/apps/about-apps
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - GitHub Apps
ms.openlocfilehash: a66af14f6047b2aff435ac4ac8dc83d7a1181e92
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 10/25/2022
ms.locfileid: '148107357'
---
Apps auf {% data variables.product.prodname_dotcom %} ermöglichen dir die Automatisierung und Verbesserung deines Workflows. Du kannst Apps erstellen, um deinen Workflow zu verbessern.{% ifversion fpt or ghec %} Darüber hinaus kannst du Apps über den [{% data variables.product.prodname_marketplace %}](https://github.com/marketplace) freigeben oder verkaufen. Weitere Informationen zum Anbieten von Apps im {% data variables.product.prodname_marketplace %} findest du unter [Erste Schritte mit dem GitHub Marketplace](/marketplace/getting-started/).{% endif %}

{% data reusables.marketplace.github_apps_preferred %}, GitHub unterstützt jedoch sowohl {% data variables.product.prodname_oauth_apps %} als auch {% data variables.product.prodname_github_apps %}. Informationen zum Auswählen einer Art von App findest du unter [Unterschiede zwischen GitHub-Apps und OAuth-Apps](/developers/apps/differences-between-github-apps-and-oauth-apps).

{% data reusables.apps.general-apps-restrictions %}

Eine exemplarische Vorgehensweise für die Erstellung einer {% data variables.product.prodname_github_app %} findest du unter [Erstellen deiner ersten {% data variables.product.prodname_github_app %}](/apps/building-your-first-github-app).

## Informationen zu {% data variables.product.prodname_github_apps %}

{% data variables.product.prodname_github_apps %} sind erstklassige Akteure auf GitHub. Eine {% data variables.product.prodname_github_app %} agiert selbstständig, indem sie direkt mit ihrer eigenen Identität Aktionen über die API ausführt. Dies bedeutet, dass du kein Bot- oder Dienstkonto als separaten Benutzer benötigst.

Du kannst {% data variables.product.prodname_github_apps %} direkt in Organisationen und persönlichen Konten installieren und ihnen Zugriff auf bestimmte Repositorys gewähren. Diese Apps verfügen über integrierte Webhooks und restriktive, spezifische Berechtigungen. Beim Einrichten deiner {% data variables.product.prodname_github_app %} kannst du die Repositorys auswählen, auf die die App zugreifen soll. Du kannst beispielsweise eine App `MyGitHub` einrichten, die Probleme im Repository und `octocat`nur _das_`octocat` Repository schreibt. Zum Installieren einer {% data variables.product.prodname_github_app %} musst du ein Organisationsbesitzer sein oder über Administratorberechtigungen in einem Repository verfügen.

{% data reusables.apps.app_manager_role %}

{% data variables.product.prodname_github_apps %} sind Anwendungen, die irgendwo gehostet werden müssen. Schritt-für-Schritt-Anleitungen zu den Themen Server und Hosting findest du unter [Erstellen deiner ersten {% data variables.product.prodname_github_app %}](/apps/building-your-first-github-app).

Zum Verbessern deines Workflows kannst du eine {% data variables.product.prodname_github_app %} erstellen, die mehrere Skripts oder eine gesamte Anwendung enthält, und dann diese App mit vielen anderen Tools verbinden. So kannst du beispielsweise {% data variables.product.prodname_github_apps %} mit GitHub, Slack, anderen ggf. vorhandenen internen Apps, E-Mail-Programmen oder anderen APIs verbinden.

Beachte beim Erstellen von {% data variables.product.prodname_github_apps %} die folgenden Punkte:

{% ifversion fpt or ghec %}
* {% data reusables.apps.maximum-github-apps-allowed %} {% endif %}
* Eine {% data variables.product.prodname_github_app %} sollte Aktionen unabhängig von Benutzer*innen ausführen (es sei denn, die App verwendet ein [Benutzer-zu-Server-Token](/apps/building-github-apps/identifying-and-authorizing-users-for-github-apps#user-to-server-requests)). {% data reusables.apps.expiring_user_authorization_tokens %}

* Stelle sicher, dass die {% data variables.product.prodname_github_app %} mit bestimmten Repositorys integriert werden kann.
* Die {% data variables.product.prodname_github_app %} sollte eine Verbindung mit einem persönlichen Konto oder einer Organisation herstellen.
* Erwarte nicht, dass die {% data variables.product.prodname_github_app %} alles weiß und kann, was Benutzer*innen wissen und können.
* Verwende keine {% data variables.product.prodname_github_app %}, wenn du nur einen Dienst zum Anmelden mit GitHub benötigst. Eine {% data variables.product.prodname_github_app %} kann jedoch einen [Benutzeridentifikationsflow](/apps/building-github-apps/identifying-and-authorizing-users-for-github-apps/) verwenden, um Benutzer*innen anzumelden _und_ andere Aktionen auszuführen.
* Erstelle keine {% data variables.product.prodname_github_app %}, wenn du _nur_ als GitHub-Benutzer*in agieren und alle möglichen Benutzeraktionen ausführen möchtest.{% ifversion fpt or ghec %}
* {% data reusables.apps.general-apps-restrictions %}{% endif %}

Sieh dir zunächst den Artikel [Erstellen einer {% data variables.product.prodname_github_app %}](/apps/building-github-apps/creating-a-github-app/) an, um mit dem Entwickeln von {% data variables.product.prodname_github_apps %} zu beginnen.{% ifversion fpt or ghec %} Wenn du mehr über die Verwendung von {% data variables.product.prodname_github_app %}-Manifesten erfahren möchtest, mit denen vorkonfigurierte {% data variables.product.prodname_github_apps %} erstellt werden können, lies den Artikel [Erstellen von {% data variables.product.prodname_github_apps %} basierend auf einem Manifest](/apps/building-github-apps/creating-github-apps-from-a-manifest/).{% endif %}

## Informationen zu {% data variables.product.prodname_oauth_apps %}

OAuth2 ist ein Protokoll, mit dem externe Anwendungen Zugriff auf private Details im {% data variables.product.prodname_dotcom %}-Konto eines Benutzers oder einer Benutzerin beantragen können, ohne dass auf das Kennwort zugegriffen werden muss. Dies ist der Standardauthentifizierung vorzuziehen, da Token auf bestimmte Arten von Daten beschränkt und jederzeit von den Benutzer*innen widerrufen werden können.

{% data reusables.apps.deletes_ssh_keys %}

Eine {% data variables.product.prodname_oauth_app %} verwendet {% data variables.product.prodname_dotcom %} als Identitätsanbieter, um sich als der Benutzer bzw. die Benutzerin zu authentifizieren, der bzw. die Zugriff auf die App gewährt. Dies bedeutet, dass Benutzer*innen, die einer {% data variables.product.prodname_oauth_app %} Zugriff gewähren, dieser App Berechtigungen für _alle_ Repositorys erteilen, auf die sie mit ihrem Konto Zugriff haben, sowie für alle Organisationen, zu denen sie gehören und bei denen der Zugriff durch Dritte nicht blockiert ist.

Das Erstellen einer {% data variables.product.prodname_oauth_app %} ist eine gute Option, wenn du Prozesse erstellst, die zu komplex für ein einfaches Skript sind. Beachte, dass es sich bei {% data variables.product.prodname_oauth_apps %} um Anwendungen handelt, die irgendwo gehostet werden müssen.

Beachte beim Erstellen von {% data variables.product.prodname_oauth_apps %} die folgenden Punkte:

{% ifversion fpt or ghec %}
* {% data reusables.apps.maximum-oauth-apps-allowed %} {% endif %}
* Eine {% data variables.product.prodname_oauth_app %} sollte immer und überall auf {% data variables.product.prodname_dotcom %} als der bzw. die authentifizierte {% data variables.product.prodname_dotcom %}-Benutzer*in agieren (z. B. beim Bereitstellen von Benutzerbenachrichtigungen).
* Eine {% data variables.product.prodname_oauth_app %} kann als Identitätsanbieter verwendet werden, indem das Anmelden mit {% data variables.product.prodname_dotcom %} für den bzw. die authentifizierte Benutzer*in aktiviert wird.
* Erstelle keine {% data variables.product.prodname_oauth_app %}, wenn deine Anwendung nur für ein Repository Aktionen ausführen soll. Mit dem OAuth-Bereich `repo` können {% data variables.product.prodname_oauth_apps %} in _allen_ Repositorys des authentifizierten Benutzers bzw. der authentifizierten Benutzerin Aktionen ausführen.
* Erstelle keine {% data variables.product.prodname_oauth_app %} als Anwendung für dein Team oder Unternehmen. {% data variables.product.prodname_oauth_apps %} authentifizieren sich als einzelner Benutzer bzw. einzelne Benutzerin. Wenn eine Person eine {% data variables.product.prodname_oauth_app %} zur Nutzung durch ein Unternehmen erstellt und dann das Unternehmen verlässt, hat folglich niemand mehr Zugriff darauf.{% ifversion fpt or ghec %}
* {% data reusables.apps.oauth-apps-restrictions %}{% endif %}

Weitere Informationen zu {% data variables.product.prodname_oauth_apps %} findest du unter [Erstellen einer {% data variables.product.prodname_oauth_app %}](/apps/building-oauth-apps/creating-an-oauth-app/) und [Registrieren deiner App](/rest/guides/basics-of-authentication#registering-your-app).

## {% data variables.product.pat_generic_caps %}s

Ein [{% data variables.product.pat_generic %}](/articles/creating-a-personal-access-token-for-the-command-line/) ist eine Zeichenfolge, die ähnlich wie ein [OAuth-Token](/apps/building-oauth-apps/authorizing-oauth-apps/) funktioniert, da du die mit ihm verknüpften Berechtigungen über [Bereiche](/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/) festlegen kannst. Ein {% data variables.product.pat_generic %} ähnelt auch einem Kennwort. Du kannst jedoch über viele persönliche Zugriffstoken verfügen und den Zugriff für die einzelnen Token jederzeit widerrufen.

Du kannst zum Beispiel einem {% data variables.product.pat_generic %} Schreibberechtigungen für deine Repositorys erteilen. Wenn du dann einen cURL-Befehl ausführst oder ein Skript schreibst, das [ein Issue](/rest/reference/issues#create-an-issue) in deinem Repository erstellt, wird zur Authentifizierung das {% data variables.product.pat_generic %} übergeben. Du kannst das {% data variables.product.pat_generic %} als Umgebungsvariable speichern, damit du es nicht bei jeder Verwendung neu eintippen musst.

Beachte bei der Verwendung von {% data variables.product.pat_generic %} die folgenden Punkte:

* Denke daran, dieses Token nur für dich selbst zu verwenden.
* Du kannst einmalige cURL-Anforderungen ausführen.
* Du kannst persönliche Skripts ausführen.
* Richte kein Skript ein, das von deinem gesamten Team oder Unternehmen verwendet werden soll.
* Richte kein gemeinsam genutztes persönliches Konto ein, das als Botbenutzer fungieren soll.
* Erteile deinem Token nur die minimal benötigten Berechtigungen.
* Lege ein Ablaufdatum für deine {% data variables.product.pat_generic %} fest, um deine Daten zu schützen.

## Entscheidung über die zu erstellende Integration

Bevor du mit dem Erstellen von Integrationen beginnst, musst du die beste Möglichkeit für den Zugriff, die Authentifizierung und die Interaktion mit den {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %}{% else %}{% data variables.product.product_name %}{% endif %}-APIs ermitteln. Die folgende Abbildung enthält einige Fragen, die du dir bei der Entscheidung stellen solltest, ob du {% data variables.product.pat_generic %}, {% data variables.product.prodname_github_apps %} oder {% data variables.product.prodname_oauth_apps %} für deine Integration verwenden möchtest.

![Flussdiagramm zur Einführung in Apps mit Fragen](/assets/images/intro-to-apps-flow.png)

Denke über die folgenden Fragen dazu nach, wie deine Integration sich verhalten muss und worauf sie zugreifen können muss:

* Agiert meine Integration nur als ich, oder verhält sie sich eher wie eine Anwendung?
* Möchte ich, dass sie unabhängig von mir als eigene Entität agiert?
* Greift sie auf alles zu, worauf ich zugreifen kann, oder möchte ich ihren Zugriff beschränken?
* Ist sie einfach oder komplex? Beispielsweise ist ein {% data variables.product.pat_generic %} gut für einfache Skripts und cURLs geeignet, während eine {% data variables.product.prodname_oauth_app %} komplexere Skripts verarbeiten kann.

## Anfordern von Unterstützung

{% data reusables.support.help_resources %}
