---
title: Erste Schritte mit deinem GitHub-Konto
intro: 'Mit einem persönlichen Konto auf {% data variables.product.prodname_dotcom %} kannst du Repositorys importieren oder erstellen, mit anderen zusammenarbeiten und mit der {% data variables.product.prodname_dotcom %}-Community in Kontakt treten.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
ms.openlocfilehash: 38d23c1a1b5021a681aedff8813daad751905d8a
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: '147408922'
---
Dieser Leitfaden führt dich durch das Einrichten deines {% data variables.product.company_short %}-Kontos. Darüber hinaus erhältst du Informationen zu den ersten Schritten mit den {% data variables.product.product_name %}-Features für Zusammenarbeit und die Community.

## Teil 1: Konfigurieren deines {% data variables.product.prodname_dotcom %}-Kontos

{% ifversion fpt or ghec %} Um die Arbeit mit {% data variables.product.product_name %} zu beginnen, musst du zunächst ein Konto erstellen, ein Produkt auswählen, das deinen Anforderungen am besten entspricht, deine E-Mail-Adresse verifizieren, eine zweistufige Authentifizierung einrichten und dein Profil anzeigen.
{% elsif ghes %} Die ersten Schritte bei der Nutzung von {% data variables.product.product_name %} bestehen darin, auf dein Konto zuzugreifen, eine zweistufige Authentifizierung einzurichten und dein Profil anzuzeigen.
{% elsif ghae %} Die ersten Schritte bei der Nutzung von {% data variables.product.product_name %} bestehen darin, auf dein Konto zuzugreifen und dein Profil anzuzeigen.
{% endif %}

{% ifversion fpt or ghec %}Es gibt viele verschiedene Arten von Konten auf {% data variables.product.prodname_dotcom %}. {% endif %} Jede Person, die {% data variables.product.product_name %} verwendet, verfügt über ihr eigenes persönliches Konto, das Teil mehrerer Organisationen und Teams sein kann. Dein persönliches Konto ist deine Identität in {% data variables.product.product_location %} und repräsentiert dich als Individuum.

{% ifversion fpt or ghec %}
### 1. Erstellen eines Kontos
Um dich für ein Konto für auf {% data variables.product.product_location %} zu registrieren, navigiere zu https://github.com/, und folge den Eingabeaufforderungen.

Um dein {% data variables.product.prodname_dotcom %}-Konto zu schützen, solltest du ein sicheres und eindeutiges Kennwort verwenden. Weitere Informationen findest du unter [Erstellen eines sicheren Kennworts](/github/authenticating-to-github/keeping-your-account-and-data-secure/creating-a-strong-password).

### 2. Auswählen deines {% data variables.product.prodname_dotcom %}-Produkts
Du kannst {% data variables.product.prodname_free_user %} oder {% data variables.product.prodname_pro %} auswählen, um Zugriff auf verschiedene Features für dein persönliches Konto zu erhalten. Du kannst jederzeit ein Upgrade durchführen, wenn du dir zunächst nicht sicher bist, welches Produkt du verwenden möchtest.

Weitere Informationen zu allen {% data variables.product.prodname_dotcom %}-Plänen findest du unter [{% data variables.product.prodname_dotcom %}-Produkte](/get-started/learning-about-github/githubs-products).

### 3. Verifizieren deiner E-Mail-Adresse
Verifiziere deine E-Mail-Adresse nach der Anmeldung für ein neues Konto, um sicherzustellen, dass du alle Features in deinem {% data variables.product.product_name %}-Plan verwenden kannst. Weitere Informationen findest du unter [Verifizieren deiner E-Mail-Adresse](/github/getting-started-with-github/signing-up-for-github/verifying-your-email-address).
{% endif %}

{% ifversion ghes %}
### 1. Zugreifen auf dein Konto
Die Administrator*innen deiner {% data variables.product.product_name %}-Instanz informieren dich darüber, wie du dich authentifizieren und auf dein Konto zugreifen kannst. Der Prozess variiert in Abhängigkeit von dem für die Instanz konfigurierten Authentifizierungsmodus.
{% endif %}

{% ifversion ghae %}
### 1. Zugreifen auf dein Konto
Wenn dein Konto von deinen Unternehmensbesitzer*innen für {% data variables.product.product_name %} eingerichtet wurde, erhältst du eine E-Mail-Benachrichtigung, sodass du dich mit der einmaligen SAML-Anmeldung (SSO) authentifizieren und auf dein Konto zugreifen kannst.
{% endif %}

{% ifversion fpt or ghes or ghec %}
### {% ifversion fpt or ghec %}4.{% else %}2.{% endif %} Konfigurieren der zweistufigen Authentifizierung
Die zweistufige Authentifizierung, oder 2FA, stellt eine zusätzliche Sicherheitsebene dar, die bei der Anmeldung auf Websites oder in Apps verwendet wird. Wir bitten dich dringend, die zweistufige Authentifizierung für die Sicherheit deines Kontos zu konfigurieren. Weitere Informationen findest du unter [Informationen zur zweistufigen Authentifizierung](/github/authenticating-to-github/securing-your-account-with-two-factor-authentication-2fa/about-two-factor-authentication).
{% endif %}
### {% ifversion fpt or ghec %}5.{% elsif ghes %}3.{% else %}2.{% endif %} Anzeigen deines {% data variables.product.prodname_dotcom %}-Profils und des Beitragsdiagramms
Andere Benutzer*innen erfahren durch die in deinem {% data variables.product.prodname_dotcom %}-Profil angepinnten Repositorys und Gists, die von dir veröffentlichten Organisationsmitgliedschaften, deine Beiträge und die von dir erstellten Projekte mehr über deine Arbeit. Weitere Informationen findest du unter [Informationen zu deinem Profil](/github/setting-up-and-managing-your-github-profile/customizing-your-profile/about-your-profile) und [Anzeigen von Beiträgen in deinem Profil](/github/setting-up-and-managing-your-github-profile/managing-contribution-graphs-on-your-profile/viewing-contributions-on-your-profile).

## Teil 2: Verwenden von {% data variables.product.product_name %}-Tools und -Prozessen
Um {% data variables.product.product_name %} optimal verwenden zu können, musst du Git einrichten. Git ist für alle {% data variables.product.prodname_dotcom %}-Ereignisse zuständig, die lokal auf deinem Computer stattfinden. Um effektiv auf {% data variables.product.product_name %} zusammenarbeiten zu können, schreibe Issues und Pull Requests mithilfe von {% data variables.product.prodname_dotcom %} Flavored Markdown.

### 1. Informationen zu Git
Der kooperative Entwicklungsansatz von {% data variables.product.prodname_dotcom %} beruht auf der Veröffentlichung von Commits aus deinem lokalen Repository auf {% data variables.product.product_name %}, damit andere Personen sie anzeigen, abrufen und aktualisieren können. Weitere Informationen zu Git findest du in der Anleitung [Git-Leitfaden](https://guides.github.com/introduction/git-handbook/). Weitere Informationen zur Verwendung von Git auf {% data variables.product.product_name %} findest du unter [{% data variables.product.prodname_dotcom %}-Flow](/get-started/quickstart/github-flow).
### 2. Einrichten von Git
Wenn du Git lokal auf deinem Computer verwenden möchtest, egal ob über die Befehlszeile, eine integrierte Entwicklungsumgebung oder einen Text-Editor, musst du Git installieren und einrichten. Weitere Informationen findest du unter [Einrichten von Git](/get-started/quickstart/set-up-git).

Wenn du die Verwendung einer grafischen Benutzeroberfläche bevorzugst, kannst du {% data variables.product.prodname_desktop %} herunterladen und verwenden. {% data variables.product.prodname_desktop %} umfasst Git, sodass du Git nicht separat installieren musst. Weitere Informationen findest du unter [Erste Schritte mit {% data variables.product.prodname_desktop %}](/desktop/installing-and-configuring-github-desktop/overview/getting-started-with-github-desktop).

Nachdem du Git installiert hast, kannst du von deinem lokalen Computer aus eine Verbindung mit {% data variables.product.product_name %}-Repositorys herstellen, unabhängig davon, ob es sich um dein eigenes Repository oder einen Fork anderer Benutzer*innen handelt. Wenn du über Git eine Verbindung mit einem Repository auf {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %} herstellst, musst du dich entweder mithilfe von HTTPS oder SSH bei {% data variables.product.product_name %} authentifizieren. Weitere Informationen findest du unter [Informationen zu Remoterepositorys](/get-started/getting-started-with-git/about-remote-repositories).

### 3. Auswählen der Interaktion mit {% data variables.product.product_name %}
Jede*r verfügt über einen eigenen eindeutigen Workflow für die Interaktion mit {% data variables.product.prodname_dotcom %}. Die von dir verwendeten Schnittstellen und Methoden hängen von deinen Präferenzen und davon ab, was für deine Anforderungen am besten geeignet ist.

Weitere Informationen zur Authentifizierung bei {% data variables.product.product_name %} mit diesen einzelnen Methoden findest du unter [Informationen zur Authentifizierung bei {% data variables.product.prodname_dotcom %}](/github/authenticating-to-github/keeping-your-account-and-data-secure/about-authentication-to-github).

| **Methode**  | **Beschreibung** | **Anwendungsfälle** |
| ------------- | ------------- | ------------- |
| Navigieren zu {% data variables.product.prodname_dotcom_the_website %} | Wenn du nicht lokal mit Dateien arbeiten musst, ermöglicht dir {% data variables.product.product_name %} das Durchführen der meisten Git-bezogenen Aktionen direkt in deinem Browser. Dies reicht vom Erstellen und Forken von Repositorys bis hin zum Bearbeiten von Dateien und Öffnen von Pull Requests.| Diese Methode ist nützlich, wenn du eine grafische Benutzeroberfläche verwenden möchtest und schnell einfache Änderungen vornehmen müssen, die keine lokale Arbeit erfordern. |
| über {% data variables.product.prodname_desktop %} | {% data variables.product.prodname_desktop %} erweitert und vereinfacht deinen {% data variables.product.prodname_dotcom_the_website %}-Workflow, wobei anstelle von Textbefehlen an der Befehlszeile eine grafische Benutzeroberfläche verwendet wird. Weitere Informationen zu den ersten Schritten mit {% data variables.product.prodname_desktop %} findest du unter [Erste Schritte mit {% data variables.product.prodname_desktop %}](/desktop/installing-and-configuring-github-desktop/overview/getting-started-with-github-desktop). | Diese Methode ist am besten geeignet, wenn du lokal mit Dateien arbeiten musst oder möchtest, aber die Verwendung einer grafischen Benutzeroberfläche für die Nutzung von Git und die Interaktion mit {% data variables.product.product_name %} bevorzugen. |
| IDE oder Text-Editor  | Du kannst einen standardmäßigen Text-Editor wie [Atom](https://atom.io/) oder [{% data variables.product.prodname_vscode %}](https://code.visualstudio.com/) festlegen, um deine Dateien mit Git zu öffnen und zu bearbeiten, Erweiterungen zu verwenden und die Projektstruktur einzusehen. Weitere Informationen findest du unter [Zuordnen von Text-Editoren mit Git](/github/using-git/associating-text-editors-with-git). | Dies ist praktisch, wenn du mit komplexeren Dateien und Projekten arbeiten und alles an einem Ort verwalten möchtest, da Text-Editoren oder IDEs häufig den direkten Zugriff auf die Befehlszeile im Editor ermöglichen. |
| Befehlszeile mit oder ohne {% data variables.product.prodname_cli %} | Für die detaillierteste Steuerung und Anpassung der Verwendung von Git und Interaktion mit {% data variables.product.product_name %} kannst du die Befehlszeile verwenden. Weitere Informationen zur Verwendung von Git-Befehlen findest du unter [Git-Cheatsheet](/github/getting-started-with-github/quickstart/git-cheatsheet).<br/><br/> {% data variables.product.prodname_cli %} ist ein separates, installierbares Befehlszeilentool, das die Verwendung von Pull Requests, Issues, {% data variables.product.prodname_actions %}-Vorgängen und anderen {% data variables.product.prodname_dotcom %}-Features in deinem Terminal ermöglicht, sodass du deine Arbeit an einem Ort bewältigen kannst. Weitere Informationen findest du unter [{% data variables.product.prodname_cli %}](/github/getting-started-with-github/using-github/github-cli). | Diese Methode eignet sich besonders, wenn du bereits über die Befehlszeile arbeitest (Kontextwechsel kann vermieden werden) oder die Verwendung der Befehlszeile bevorzugen. |
| {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %}{% else %}{% data variables.product.product_name %}{% endif %}-API | {% data variables.product.prodname_dotcom %} verfügt über eine REST-API und eine Graph-API, die du für die Interaktion mit {% data variables.product.product_name %} verwenden kannst. Weitere Informationen findest du unter [Erste Schritte mit der API](/github/extending-github/getting-started-with-the-api). | Die {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %}{% else %}{% data variables.product.product_name %}{% endif %}-API ist am hilfreichsten, wenn du gängige Aufgaben automatisieren, deine Daten sichern oder Integrationen erstellen möchtest, die {% data variables.product.prodname_dotcom %} erweitern. |
### 4. Schreiben in {% data variables.product.product_name %}
Um sicherzustellen, dass die Kommunikation bei Issues und Pull Requests klar und strukturiert abläuft, kannst du {% data variables.product.prodname_dotcom %} Flavored Markdown für die Formatierung verwenden. Hier wird eine einfach zu lesende und zu schreibende Syntax mit einigen benutzerdefinierten Funktionen kombiniert. Weitere Informationen findest du unter [Informationen zum Schreiben und Formatieren in {% data variables.product.prodname_dotcom %}](/github/writing-on-github/about-writing-and-formatting-on-github).

Du kannst die Verwendung von {% data variables.product.prodname_dotcom %} Flavored Markdown mithilfe des Kurses [Kommunizieren mit Markdown](https://github.com/skills/communicate-using-markdown) auf {% data variables.product.prodname_learning %} erlernen.

### 5. Suchen in {% data variables.product.product_name %}
Mithilfe der integrierten Suchfunktion findest du unter all den Repositorys, Benutzer*innen und Codezeilen in {% data variables.product.product_name %} genau das, wonach du suchst. Du kannst global in {% data variables.product.product_name %} suchen oder deine Suche auf ein bestimmtes Repository oder eine bestimmte Organisation beschränken. Weitere Informationen zu den Suchtypen, die du in {% data variables.product.product_name %} verwenden kannst, findest du unter [Informationen zum Suchen auf {% data variables.product.prodname_dotcom %}](/github/searching-for-information-on-github/getting-started-with-searching-on-github/about-searching-on-github).

Mit der Suchsyntax kannst du Abfragen mithilfe von Qualifizierern erstellen, um anzugeben, wonach du suchen möchtest. Weitere Informationen zu der bei der Suche verwendeten Suchsyntax findest du unter [Suchen auf {% data variables.product.prodname_dotcom %}](/github/searching-for-information-on-github/searching-on-github).

### 6. Verwalten von Dateien in {% data variables.product.product_name %}
{% data variables.product.product_name %} ermöglicht dir das Erstellen, Bearbeiten, Verschieben und Löschen von Dateien in deinem Repository oder einem beliebigen Repository, auf das du Schreibzugriff hast. Zudem kannst du den Verlauf der Änderungen in einer Dateizeile nach Zeile nachverfolgen. Weitere Informationen findest du unter [Verwalten von Dateien auf {% data variables.product.prodname_dotcom %}](/github/managing-files-in-a-repository/managing-files-on-github).

## Teil 3: Zusammenarbeiten in {% data variables.product.product_name %}
In {% data variables.product.product_name %} kann eine beliebige Anzahl von Personen in Repositorys zusammenarbeiten. Du kannst Einstellungen konfigurieren, Projektboards erstellen und deine Benachrichtigungen verwalten, um die effektive Zusammenarbeit zu fördern.

### 1. Arbeiten mit Repositorys

#### Repository erstellen
Ein Repository ist wie ein Ordner für dein Projekt. Dein persönliches Konto kann eine beliebige Anzahl öffentlicher und privater Repositorys enthalten. Repositorys können Ordner und Dateien, Bilder, Videos, Tabellen und Datasets sowie den Überarbeitungsverlauf für alle Dateien im Repository enthalten. Weitere Informationen findest du unter [Informationen zu Repositorys](/github/creating-cloning-and-archiving-repositories/about-repositories).

Wenn du ein neues Repository erstellst, solltest du das Repository mit einer README-Datei initialisieren, um andere über dein Projekt zu informieren. Weitere Informationen findest du unter [Erstellen eines neuen Repositorys](/github/creating-cloning-and-archiving-repositories/creating-a-repository-on-github/creating-a-new-repository).

#### Ein Repository klonen
Du kannst ein vorhandenes Repository aus {% data variables.product.product_name %} auf deinen lokalen Computer klonen, wodurch das Hinzuzufügen oder Entfernen von Dateien, Beheben von Zusammenführungskonflikten oder Übermitteln komplexer Commits einfacher wird. Beim Klonen eines Repositorys wird eine vollständige Kopie aller Repositorydaten abgerufen, die zu diesem Zeitpunkt auf {% data variables.product.prodname_dotcom %} verfügbar sind, einschließlich aller Versionen jeder Datei und jedes Ordners für das Projekt. Weitere Informationen findest du unter [Klonen eines Repositorys](/github/creating-cloning-and-archiving-repositories/cloning-a-repository-from-github/cloning-a-repository).

#### Repository forken
Ein Fork ist eine Kopie eines Repositorys, das du verwaltest, wobei sich alle Änderungen, die du vornimmst, nicht auf das ursprüngliche Repository auswirken, es sei denn, du übermittelst einen Pull Request an die Projektbesitzer*innen. Üblicherweise werden Forks genutzt, um Änderungen für ein Projekt eines anderes Benutzers vorzuschlagen oder ein Projekt eines anderen Benutzers als Ausgangspunkt für eigene Ideen zu verwenden. Weitere Informationen findest du unter [Arbeiten mit Forks](/github/collaborating-with-pull-requests/working-with-forks).
### 2. Importieren deiner Projekte
Wenn du über vorhandene Projekte verfügst, die du in {% data variables.product.product_name %} verschieben möchtest, kannst du Projekte mithilfe des {% data variables.product.prodname_dotcom %}-Importprogramms, der Befehlszeile oder eines externen Migrationstools importieren. Weitere Informationen findest du unter [Importieren von Quellcode in {% data variables.product.prodname_dotcom %}](/github/importing-your-projects-to-github/importing-source-code-to-github).

### 3. Verwalten von Projektmitarbeiter*innen und Berechtigungen
Mithilfe der Issues, Pull Requests und Projektboards deines Repositorys kannst du mit anderen an deinem Projekt zusammenarbeiten. Über die Registerkarte **Projektmitarbeiter** in den Repositoryeinstellungen kannst du andere Personen als Projektmitarbeiter*innen zu deinem Repository einladen. Weitere Informationen findest du unter [Einladen von Projektmitarbeiter*innen zu einem persönlichen Repository](/github/setting-up-and-managing-your-github-user-account/managing-access-to-your-personal-repositories/inviting-collaborators-to-a-personal-repository).

Du bist Besitzer sämtlicher Repositorys, die du in deinem persönlichen Konto erstellst, und hast die vollständige Kontrolle über die Repositorys. Projektmitarbeiter*innen haben Schreibzugriff auf dein Repository. Auf diese Weise wird eingeschränkt, über welche Berechtigungen sie verfügen. Weitere Informationen findest du unter [Berechtigungsebenen für ein Repository in einem persönlichen Konto](/github/setting-up-and-managing-your-github-user-account/managing-user-account-settings/permission-levels-for-a-user-account-repository).

### 4. Verwalten von Repositoryeinstellungen
Als Besitzer*in eines Repositorys kannst du mehrere Einstellungen konfigurieren, einschließlich der Sichtbarkeit, Themen und Social-Media-Vorschau des Repositorys. Weitere Informationen findest du unter [Verwalten von Repositoryeinstellungen](/github/administering-a-repository/managing-repository-settings).

### 5. Einrichten deines Projekts für hilfreiche Beiträge
{% ifversion fpt or ghec %} Um Projektmitarbeiter*innen zur Zusammenarbeit an deinem Repository zu motivieren, benötigst du eine Community, die andere dabei unterstützt, das Projekt zu verwenden, dazu beizutragen und zu verbreiten. Weitere Informationen findest du unter [Schaffen einladender Communitys](https://opensource.guide/building-community/) in den Open-Source-Anleitungen.

Durch das Hinzufügen von Dateien wie Anleitungen für Beiträge, Verhaltensregeln und einer Lizenz zu deinem Repository kannst du eine Umgebung schaffen, in der es für Projektmitarbeiter*innen einfacher ist, bedeutungsvolle und hilfreiche Beiträge zu leisten. Weitere Informationen findest du unter [Einrichten deines Projekts für hilfreiche Beiträge](/communities/setting-up-your-project-for-healthy-contributions).
{% endif %} {% ifversion ghes or ghae %} Durch das Hinzufügen von Dateien wie Anleitungen für Beiträge, Verhaltensregeln und Supportressourcen zu deinem Repository kannst du eine Umgebung schaffen, in der es für Projektmitarbeiter*innen einfacher ist, bedeutungsvolle und hilfreiche Beiträge zu leisten. Weitere Informationen findest du unter [Einrichten deines Projekts für hilfreiche Beiträge](/communities/setting-up-your-project-for-healthy-contributions).
{% endif %}

### 6. Verwenden von GitHub-Issues und Projektboards
Du kannst GitHub-Issues verwenden, um deine Arbeit mit Issues und Pull Requests zu organisieren und deinen Workflow mit Projektboards zu verwalten. Weitere Informationen findest du unter [Informationen zu Issues](/issues/tracking-your-work-with-issues/about-issues) und [Informationen zu Projektboards](/issues/organizing-your-work-with-project-boards/managing-project-boards/about-project-boards).

### 7. Verwalten von Benachrichtigungen
Benachrichtigungen bieten Updates zu den Aktivitäten auf {% data variables.product.prodname_dotcom %}, die du abonniert hast oder an denen du beteiligt bist. Wenn du kein Interesse mehr an einer Unterhaltung hast, kannst du das Abonnement abmelden oder die Art der Benachrichtigungen anpassen, die du in der Zukunft erhalten willst. Weitere Informationen findest du unter [Informationen zu Benachrichtigungen](/github/managing-subscriptions-and-notifications-on-github/setting-up-notifications/about-notifications).

### 8. Arbeiten mit {% data variables.product.prodname_pages %}
Du kannst {% data variables.product.prodname_pages %} verwenden, um eine Website direkt über ein Repository auf {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %} zu erstellen oder zu hosten. Weitere Informationen findest du unter [Informationen zu {% data variables.product.prodname_pages %}](/pages/getting-started-with-github-pages/about-github-pages).

{% ifversion discussions %}
### 9. Verwenden von {% data variables.product.prodname_discussions %}
Du kannst {% data variables.product.prodname_discussions %} für dein Repository aktivieren, um eine Community für dein Projekt zu entwickeln. Verwalter*innen, Mitwirkende und Besucher*innen können in Diskussionen Ankündigungen machen, Fragen stellen und beantworten und Ziele besprechen. Weitere Informationen findest du unter [Informationen zu Diskussionen](/discussions/collaborating-with-your-community-using-discussions/about-discussions).
{% endif %}
## Teil 4: Anpassen und Automatisieren deiner Arbeit auf {% data variables.product.product_name %}

{% data reusables.getting-started.customizing-and-automating %}

{% ifversion fpt or ghec %}
### 1. Verwenden von {% data variables.product.prodname_marketplace %}
{% data reusables.getting-started.marketplace %} {% endif %}
### {% ifversion fpt or ghec %}2.{% else %}1.{% endif %} Verwenden der {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %}{% else %}{% data variables.product.product_name %}{% endif %}-API
{% data reusables.getting-started.api %}

### {% ifversion fpt or ghec %}3.{% else %}2.{% endif %} Erstellen von {% data variables.product.prodname_actions %}-Elementen
{% data reusables.getting-started.actions %}

### {% ifversion fpt or ghec %}4.{% else %}3.{% endif %} Veröffentlichen und Verwalten von {% data variables.product.prodname_registry %} 
{% data reusables.getting-started.packages %}

## Teil 5: Sicheres Kompilieren auf {% data variables.product.product_name %}
{% data variables.product.product_name %} verfügt über eine Vielzahl von Sicherheitsfeatures, die dabei helfen, den Code und Geheimnisse in Repositorys zu schützen. Einige Features sind für alle Repositorys verfügbar, während andere nur für öffentliche Repositorys und Repositorys mit einer {% data variables.product.prodname_GH_advanced_security %}-Lizenz verfügbar sind. Eine Übersicht über die {% data variables.product.product_name %}-Sicherheitsfeatures findest du unter [{% data variables.product.prodname_dotcom %}-Sicherheitsfeatures](/code-security/getting-started/github-security-features).

### 1. Schützen deines Repositorys
Als Repositoryadministrator*in kannst du deine Repositorys schützen, indem du Repositorysicherheitseinstellungen konfigurierst. Dazu gehören das Verwalten des Zugriffs auf dein Repository, das Festlegen einer Sicherheitsrichtlinie und das Verwalten von Abhängigkeiten. Bei öffentlichen Repositorys und privaten Repositorys von Organisationen, für die {% data variables.product.prodname_GH_advanced_security %} aktiviert ist, kannst du auch Code- und Geheimnisprüfungen konfigurieren, um Sicherheitsrisiken automatisch zu identifizieren und sicherzustellen, dass Token und Schlüssel nicht verfügbar gemacht werden. 

Weitere Informationen zu den Schritten zum Schützen deiner Repositorys findest du unter [Schützen deines Repositorys](/code-security/getting-started/securing-your-repository).

{% ifversion fpt or ghec %}
### 2. Verwalten deiner Abhängigkeiten
Ein wichtiger Punkt beim sicheren Kompilieren ist die Verwaltung der Abhängigkeiten deines Projekts, um sicherzustellen, dass alle Pakete und Anwendungen, auf die du angewiesen bist, aktuell und sicher bist. Du kannst deine Projektabhängigkeiten auf {% data variables.product.product_name %} verwalten, indem du das Abhängigkeitsdiagramm für dein Repository mithilfe von Dependabot untersuchst, um automatisch Pull Requests auszulösen und somit deine Abhängigkeiten auf dem neuesten Stand zu halten. Zudem erhältst du Dependabot-Benachrichtigungen und Sicherheitsupdates für anfällige Abhängigkeiten. 

Weitere Informationen findest du unter [Schützen deiner Softwarelieferkette](/code-security/supply-chain-security).
{% endif %}

## Teil 6: Mitwirken in der {% data variables.product.prodname_dotcom %}-Community

{% data reusables.getting-started.participating-in-community %}

### 1. Beitragen zu Open-Source-Projekten
{% data reusables.getting-started.open-source-projects %}

### 2. Interagieren mit dem {% data variables.product.prodname_gcf %}
{% data reusables.support.ask-and-answer-forum %}

### 3. Informationen zu {% data variables.product.product_name %} in {% data variables.product.prodname_docs %}

{% data reusables.docs.you-can-read-docs-for-your-product %}

### 4. Lernen mit {% data variables.product.prodname_learning %}
{% data reusables.getting-started.learning %}

{% ifversion fpt or ghec %}
### 5. Unterstützen der Open-Source-Community
{% data reusables.getting-started.sponsors %}

### 6. Kontaktieren von {% data variables.contact.github_support %}
{% data reusables.getting-started.contact-support %}

{% ifversion fpt %}
## Weiterführende Themen
- [Erste Schritte mit {% data variables.product.prodname_team %}](/get-started/onboarding/getting-started-with-github-team) {% endif %} {% endif %}
