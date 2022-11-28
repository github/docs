---
title: Informationen zur Abrechnung für GitHub Codespaces
shortTitle: About billing
intro: 'Hier findest du Informationen zu den Kosten für die Verwendung von {% data variables.product.prodname_github_codespaces %} sowie zu den monatlichen Nutzungskontingenten, die in persönlichen Konten von {% data variables.product.prodname_dotcom %} enthalten sind.'
miniTocMaxHeadingLevel: 3
versions:
  fpt: '*'
  ghec: '*'
type: overview
topics:
  - Codespaces
  - Billing
redirect_from:
  - /billing/managing-billing-for-github-codespaces/about-billing-for-codespaces
  - /github/developing-online-with-codespaces/about-billing-for-codespaces
  - /codespaces/getting-started-with-codespaces/about-billing-for-codespaces
  - /codespaces/codespaces-reference/about-billing-for-codespaces
  - /codespaces/codespaces-reference/understanding-billing-for-codespaces
  - /codespaces/codespaces-reference/understanding-billing-for-github-codespaces.md
ms.openlocfilehash: 24410721878cd77d2528a4d9e8c91633725ce661
ms.sourcegitcommit: 99eb4456062aea31ca381977396417cf92e5798d
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 11/21/2022
ms.locfileid: '148179548'
---
## {% data variables.product.prodname_github_codespaces %}-Preise

{% data reusables.codespaces.codespaces-free-for-personal-intro %}

Gebühren werden einer Organisation oder einem Unternehmen in Rechnung gestellt, wenn alle der folgenden Kriterien erfüllt sind:

- Das Repository, von dem aus ein Codespace gestartet wird (oder im Falle eines geforkten Repositorys: das übergeordnete Repository), befindet sich im Besitz einer Organisation.
- Die Organisation ist so konfiguriert, dass ihr Codespaces in Rechnung gestellt werden, die auf der Grundlage des Repositorys oder auf der Grundlage von Forks des Repositorys erstellt wurden.
- Der Benutzer, der den Codespace erstellt, gehört der Organisation an oder ist ein externer Projektmitarbeiter, der mit der Organisation verbunden ist, und die Organisation hat sich dafür entschieden, für die Nutzung organisationseigener Codespaces durch diesen Benutzer zu bezahlen.

Andernfalls gilt die Nutzung von {% data variables.product.prodname_github_codespaces %} für das persönliche Konto der Person, die den Codespace erstellt hat, und verbraucht entweder einen Teil des monatlich enthaltenen Nutzungskontingents für das persönliche Konto der Person, oder die über die enthaltenen Kontingente hinausgehende Nutzung wird entsprechend für das Konto abgerechnet. 

Wie du eine Organisation konfigurierst, der die Codespacenutzung in Rechnung gestellt wird, erfährst du unter [Aktivieren von {% data variables.product.prodname_github_codespaces %} für deine Organisation](/codespaces/managing-codespaces-for-your-organization/enabling-github-codespaces-for-your-organization). Die Free-, Team- und Enterprise-Pläne für Organisations- und Unternehmenskonten beinhalten keine kostenlose Nutzung von {% data variables.product.prodname_github_codespaces %}. 

### Monatlich enthaltene Speicherkapazität und Kernstunden für persönliche Konten

Folgende Speicherkapazität und Kernstunden sind bei persönlichen Konten kostenlos enthalten:

| Kontoplan | Speicher pro Monat | Kernstunden pro Monat |
| ------------ | ----------------- | -------------------- |
| {% data variables.product.prodname_dotcom %} Free für persönliche Konten | 15 GB-Monat | 120 |
| {% data variables.product.prodname_dotcom %} Pro                        | 20 GB-Monat | 180 |

{% note %}

**Hinweise**:
- Bei der Speichereinheit „GB-Monat“ handelt es sich um eine zeitbasierte Messung, wobei „1 GB-Monat“ einer Speichernutzung von 1 GB für einen ganzen Monat entspricht. Der von allen Codespaces und Prebuilds belegte Speicherplatz wird einmal pro Stunde bewertet, und die aktuelle Nutzung für „GB-Monat“ wird neu berechnet. Wenn du also über Codespaces und Prebuilds verfügst, erhöht sich deine Nutzung für „GB-Monat“ im Laufe des Monats. Wenn der Speicher beispielsweise insgesamt 15 GB umfasst und während deines monatlichen Abrechnungszeitraums unverändert bleibt, hast du nach der Hälfte des Monats 7,5 GB und am Ende des Monats 15 GB verbraucht. Weitere Informationen findest du weiter unten unter [Abrechnung für die Speichernutzung](/billing/managing-billing-for-github-codespaces/about-billing-for-github-codespaces#billing-for-storage-usage).
- Eine „Kernstunde“ ist ein Measure für die enthaltene Computenutzung. Zur Berechnung der Kernstunden wird die Anzahl von Stunden, für die ein Codespace aktiv war, mit dem Multiplikator in der weiter unten bereitgestellten Preistabelle multipliziert. Bei den einfachen Computertypen ist der Multiplikator die Anzahl von Prozessorkernen des Computers, der den Codespace hostet. Wenn du für deinen Codespace also beispielsweise einen Computer mit zwei Kernen verwendest und dieser eine Stunde lang aktiv ist, hast du zwei Kernstunden genutzt. Wenn du einen Computer mit acht Kernen eine Stunde lang verwendest, hast du acht Kernstunden genutzt. Wenn du einen Computer mit acht Kernen zwei Stunden lang verwendest, hast du 16 Kernstunden genutzt.

{% endnote %}

Du erhältst jeweils eine E-Mail-Benachrichtigung, wenn du 75 Prozent, 90 Prozent und 100 Prozent deiner enthaltenen Kontingente genutzt hast. Benachrichtigungen werden auch als Popupnachricht in {% data variables.product.prodname_vscode_shortname %} und im {% data variables.product.prodname_vscode_shortname %}-Webclient angezeigt. E-Mail-Benachrichtigungen können bei Bedarf deaktiviert werden. Weitere Informationen findest du unter [Verwalten des Ausgabenlimits für GitHub Codespaces](/billing/managing-billing-for-github-codespaces/managing-the-spending-limit-for-github-codespaces#managing-usage-and-spending-limit-email-notifications).

Wenn bei einem persönlichen Konto die gesamte enthaltene Speicher- oder Computenutzung aufgebraucht ist (je nachdem, was zuerst erreicht wird) und kein Ausgabenlimit konfiguriert ist, wird die Nutzung von {% data variables.product.prodname_github_codespaces %} blockiert. Du musst eine Zahlungsmethode und ein Ausgabenlimit einrichten, um {% data variables.product.prodname_github_codespaces %} während des aktuellen Abrechnungsmonats weiterverwenden zu können. Mit Beginn des nächsten monatlichen Abrechnungszeitraums wird die enthaltene Nutzung zurückgesetzt. Speicher wird nicht in Rechnung gestellt, solange die Nutzung von {% data variables.product.prodname_github_codespaces %} blockiert ist. 

Du kannst jederzeit deine Nutzungsdetails für den aktuellen Monat anzeigen. Weitere Informationen findest du unter „[Anzeigen der {% data variables.product.prodname_github_codespaces %}-Nutzung](/billing/managing-billing-for-github-codespaces/viewing-your-github-codespaces-usage)“.

Wenn du einen Codespace nicht fortsetzen kannst und weiter an Änderungen arbeiten möchtest, die du in deinem Codespace vorgenommen hast, hast du folgende Möglichkeiten:

- Du kannst eine Zahlungsmethode und ein Ausgabenlimit von mehr als 0 USD hinzufügen.
- Du kannst die Änderungen aus dem Codespace in einen Branch exportieren. Weitere Informationen findest du unter [Exportieren von Änderungen in einen Branch](/codespaces/troubleshooting/exporting-changes-to-a-branch).
- Warte, bis die monatlich enthaltene Nutzung zu Beginn des nächsten monatlichen Abrechnungszeitraums zurückgesetzt wird. 

Wenn du entweder deine gesamte enthaltene Speichernutzung oder deine gesamte enthaltene Computenutzung aufgebraucht und eine Zahlungsmethode und ein Ausgabenlimit eingerichtet hast, fallen für die darüberhinausgehende Nutzung von Codespaces, die zu deinem persönlichen Konto gehören, Gebühren für die Art der Nutzung an, für die kein enthaltenes Kontingent mehr übrig ist. Die andere Nutzungsart wird dir erst in Rechnung gestellt, wenn du auch das andere enthaltene Kontingent vollständig aufgebraucht hast.

### Preise für kostenpflichtige Nutzung

Für eine {% data variables.product.prodname_github_codespaces %}-Instanz (ein Codespace) fallen Gebühren für Computezeit, für die aktive Zeit der Instanz und für den Speicherplatz an, der von dem Codespace beansprucht wird, solange er vorhanden ist. Die Computekosten sind proportional zur Anzahl von Prozessorkernen des Computertyps, den du für deinen Codespace auswählst, wie in der folgenden Tabelle zu sehen. So sind beispielsweise die Computekosten für die einstündige Verwendung eines Codespace auf einem Computer mit 16 Kernen achtmal höher als bei einem Computer mit zwei Kernen.

| Komponente           | Computertyp | Unit of measure | Multiplikator für die enthaltene Nutzung | Preis |
| ------------------- | ------------ | --------------- | ------------------------- | ----- |
| Codespaces: Compute  |  Zwei Kerne      | 1 Stunde          | 2                         | 0,18 USD |
|                     |  Vier Kerne      | 1 Stunde          | 4                         | 0,36 USD |
|                     |  Acht Kerne      | 1 Stunde          | 8                         | 0,72 USD |
|                     |  16 Kerne     | 1 Stunde          | 16                        | 1,44 USD |
|                     |  32 Kerne     | 1 Stunde          | 32                        | 2,88 USD |
| Codespaces: Speicher  |  Storage     | 1 GB-Monat<sup>*</sup> | –                | 0,07 USD |

<sup>*</sup>Weitere Informationen zur Maßeinheit „GB-Monat“ findest du unter [Abrechnung für die Speichernutzung](#billing-for-storage-usage).

Wenn du das Erstellen von Prebuilds für Codespaces aktivierst, entstehen zusätzliche Gebühren. Weitere Informationen findest du unter [Abrechnung für {% data variables.product.prodname_codespaces %}-Prebuilds](#billing-for-codespaces-prebuilds).

## Informationen zur Abrechnung für {% data variables.product.prodname_github_codespaces %}

{% data variables.product.prodname_github_codespaces %} wird in US-Dollar (USD) auf der Grundlage der genutzten Computezeit und des genutzten Speicherplatzes deiner Codespaces abgerechnet. {% data reusables.codespaces.codespaces-monthly-billing %}

Bei der Abrechnung für {% data variables.product.prodname_github_codespaces %} werden die bereits vorhandene Zahlungsmethode und der bereits vorhandene Beleg deines Kontos verwendet. Weitere Informationen findest du unter [Anzeigen deiner Abonnements und deines Abrechnungsdatums](/articles/viewing-your-subscriptions-and-billing-date).

{% ifversion ghec %} Wenn du {% data variables.product.prodname_enterprise %} über ein Microsoft Enterprise Agreement erworben hast, kannst du deine Azure-Abonnement-ID mit deinem Unternehmenskonto verbinden, um die Nutzung von {% data variables.product.prodname_github_codespaces %} zu ermöglichen und zu bezahlen. Weitere Informationen findest du unter [Verbinden eines Azure-Abonnements mit deinem Unternehmen](/billing/managing-billing-for-your-github-account/connecting-an-azure-subscription-to-your-enterprise).
{% endif %}

### Abrechnung für die Computenutzung
Die Computenutzung eines Codespace ist die Dauer, für die dieser Codespace aktiv ist, multipliziert mit dem Multiplikator, der in der Preistabelle für den Computertyp des Codespace angegeben ist. Zur Berechnung der Gesamtcomputenutzung wird die von allen Codespaces genutzte Zeit, die über ein bestimmtes Konto abgerechnet werden kann, zusammengezählt. Diese Summen werden dem Abrechnungsdienst stündlich gemeldet und monatlich abgerechnet.

Wenn ein Codespace also beispielsweise für eine Stunde und 15 Minuten aktiv ist, sind die Computekosten die stündlichen Kosten des Codespace (gemäß Computertyp), multipliziert mit 1,25.

Du kannst die Computenutzung steuern, indem du deine Codespaces beendest. Weitere Informationen findest du unter [Beenden und Starten eines Codespace](/codespaces/developing-in-codespaces/stopping-and-starting-a-codespace). Codespaces werden nach einem konfigurierbaren Inaktivitätszeitraum automatisch beendet. Der Timeoutzeitraum kann vom Benutzer oder auf Organisationsebene konfiguriert werden. Weitere Informationen findest du unter [Festlegen deines Timeoutzeitraums für {% data variables.product.prodname_github_codespaces %}](/codespaces/customizing-your-codespace/setting-your-timeout-period-for-github-codespaces) sowie unter [Einschränken des Zeitraums für Leerlauftimeouts](/codespaces/managing-codespaces-for-your-organization/restricting-the-idle-timeout-period).

### Abrechnung für die Speichernutzung
Für die Abrechnung von {% data variables.product.prodname_github_codespaces %} beinhaltet „Speicher“ den Speicherplatz, der von allen Codespaces und Prebuilds in deinem Konto genutzt wird. Dazu zählen alle Dateien, die du in einem Codespace verwendest, wie etwa geklonte Repositorys, Konfigurationsdateien, in den Codespace geladene Daten (z. B. als Ein- oder Ausgabe der im Repository ausgeführten Software) oder Erweiterungen. Der Speicher wird für alle vorhandenen Codespaces in Rechnung gestellt, unabhängig davon, ob sie aktiv oder inaktiv sind – es sei denn, die Nutzung ist blockiert, weil ein Nutzungskontingent erschöpft ist oder du dein Ausgabenlimit erreicht hast. Die Speicherabrechnung für einen Codespace endet, wenn er gelöscht wird.

{% note %}

**Hinweise**: 

- Bei Verwendung der Standardkonfiguration für Entwicklungscontainer (siehe [Einführung in Entwicklungscontainer](/codespaces/setting-up-your-project-for-codespaces/introduction-to-dev-containers#using-the-default-dev-container-configuration)) wird der Standardcontainer nicht als genutzter Speicher gezählt. Wenn du einen benutzerdefinierten Container unter Verwendung einer Entwicklungscontainerkonfiguration mit einem anderen Basisimage erstellst, wird der Container als genutzter Speicher gezählt.
- Wenn du deinen Container auf der Grundlage des Standardimage neu erstellst, wird der Basiscontainer nicht als genutzter Speicher gezählt. Bei anderen Basisimages wird der gesamte vom Codespace beanspruchte Speicher (einschließlich des Basiscontainers) als genutzter Speicher gezählt.

{% endnote %}

Codespace-Speicher wird in GB-Monaten gemeldet. Dein Abrechnungsmonat läuft von einem festen Tag eines Monats bis zum gleichen Tag des Folgemonats. In den meisten Fällen wird der Tag des Monats durch den Tag bestimmt, an dem dein aktueller {% data variables.product.prodname_dotcom %}-Plan begonnen hat. Dein GB-Monatsspeicher wird wie folgt berechnet: Einmal pro Stunde wird der Speicher ausgewertet, der von allen aktuell aktiven und beendeten Codespaces genutzt wird. Dieser Wert wird dann durch die Anzahl von Stunden im aktuellen Abrechnungsmonat geteilt: `total storage size / hours this month`. Das Ergebnis wird zur laufenden Summe für Codespacespeicher dieses Monats addiert.

Wenn du also beispielsweise über einen einzelnen Codespace verfügst, der 100 GB Speicher nutzt und eine Stunde lang vorhanden war, hast du in einem Monat mit 30 Tagen `100 / (24 * 30) = 0.1388` GB-Monate an Speicher genutzt. Wenn deine Nutzung von {% data variables.product.prodname_github_codespaces %} während eines Monats mit 30 Tagen zwei Codespaces mit jeweils 100 GB umfasst, die beide für drei volle Tage vorhanden waren, liegen `24 * 3` stündliche Berichte für den Speicher dieser Codespaces vor, die insgesamt `(24 * 3) * 200 / (24 * 30) = 20` GB-Monate ergeben.

Bei jedem der stündlichen Berichte wird die Speichernutzung für die vorherige Stunde in Sekunden berechnet. Daher wird dir keine ganze Stunde Speichernutzung in Rechnung gestellt, wenn ein Codespace nicht für die gesamten 60 Minuten vorhanden war. Am Ende jedes Monates rundet {% data variables.product.prodname_dotcom %} deine Speichernutzung zum nächsten MB.

Als Organisationsbesitzer hast du folgende Möglichkeiten:
- Auflisten aller aktuell aktiven oder beendeten Codespaces für deine Organisation. Weitere Informationen findest du unter [Auflisten der Codespaces in deiner Organisation](/codespaces/managing-codespaces-for-your-organization/listing-the-codespaces-in-your-organization). Neben den Kosten dieser Codespaces können die Kosten von {% data variables.product.prodname_github_codespaces %} für den aktuellen Monat auch Kosten für Codespaces enthalten, die früher im aktuellen Monat vorhanden waren, inzwischen aber gelöscht wurden. 
- Ermitteln der gesamten Compute- und Speichernutzung von {% data variables.product.prodname_github_codespaces %} für deine Organisation seit Monatsbeginn. Weitere Informationen findest du unter „[Anzeigen der {% data variables.product.prodname_github_codespaces %}-Nutzung](/billing/managing-billing-for-github-codespaces/viewing-your-github-codespaces-usage)“.
- Konfigurieren deiner Organisationseinstellungen, um die Kosten von {% data variables.product.prodname_github_codespaces %} zu verwalten. Weitere Informationen findest du unter [Verwalten der Kosten von {% data variables.product.prodname_github_codespaces %} in deiner Organisation](/codespaces/managing-codespaces-for-your-organization/managing-the-cost-of-github-codespaces-in-your-organization).

Um die Kosten für nutzungsbasierte Dienste zu schätzen, kannst du den {% data variables.product.prodname_dotcom %}-[Preisrechner](https://github.com/pricing/calculator?feature=codespaces) verwenden.

### Abrechnung für {% data variables.product.prodname_codespaces %}-Prebuilds

{% data reusables.codespaces.prebuilds-definition %} Weitere Informationen findest du unter [Weitere Informationen zu {% data variables.product.prodname_github_codespaces %}-Prebuilds](/codespaces/prebuilding-your-codespaces/about-github-codespaces-prebuilds).

#### {% data variables.product.prodname_actions %}-Kosten für Prebuilds

Prebuilds werden durch Ausführen eines {% data variables.product.prodname_actions %}-Workflows in einem von {% data variables.product.prodname_dotcom %} gehosteten Runner erstellt und aktualisiert. Du kannst konfigurieren, wie Prebuildupdates automatisch ausgelöst werden sollen. Entsprechende Informationen findest du unter [Konfigurieren von Prebuilds](/codespaces/prebuilding-your-codespaces/configuring-prebuilds#configuring-a-prebuild).

Genau wie andere Workflows verbrauchen auch ausgeführte Prebuildworkflows in deinem Konto enthaltene {% data variables.product.prodname_actions %}-Minuten (sofern vorhanden), oder sie verursachen Gebühren für {% data variables.product.prodname_actions %}-Minuten. Weitere Informationen zu den Preisen für {% data variables.product.prodname_actions %}-Minuten findest du unter [Informationen zur Abrechnung für {% data variables.product.prodname_actions %}](/billing/managing-billing-for-github-actions/about-billing-for-github-actions). Für die Erstellung oder Aktualisierung von Prebuilds fallen keine {% data variables.product.prodname_codespaces %}-Computekosten an.

Du kannst die Nutzung von Prebuildworkflows und die Speichernutzung nachverfolgen, indem du einen Nutzungsbericht für dein Konto herunterlädst. Weitere Informationen findest du unter „[Anzeigen der {% data variables.product.prodname_github_codespaces %}-Nutzung](/billing/managing-billing-for-github-codespaces/viewing-your-github-codespaces-usage)“.

#### Speicherkosten für Prebuilds

Neben den {% data variables.product.prodname_actions %}-Minuten wird dir auch die Speicherung von Prebuilds in Rechnung gestellt, die mit den einzelnen Prebuildkonfigurationen für ein bestimmtes Repository und eine bestimmte Region zusammenhängt. Die Speicherung von Prebuilds wird mit der gleichen Rate wie die Speicherung von Codespaces berechnet.

Die Speicherkosten für einen Prebuild in einer einzelnen Region sind vergleichbar mit den Speicherkosten, die für die Speicherung eines einzelnen Codespace anfallen, der auf der Grundlage dieses Prebuilds erstellt wurde. Die Speicherkosten für den generierten Codespace können höher sein als die Kosten für den Prebuild – beispielsweise, wenn bei der Codespaceerstellung die Befehle `updateContentCommand` und `postCreateCommand` verwendet werden, um weitere Dateien in den Entwicklungscontainer herunterzuladen.

Die Gesamtspeicherkosten im Zusammenhang mit einer Prebuildkonfiguration hängen von folgenden Faktoren ab:

- Dem Speicherpreis pro GB. (Siehe obige Tabelle.)
- Der Größe des generierten Prebuilds (in GB).
- Der Anzahl von Regionen, in denen der Prebuild verfügbar ist (da in jeder Region eine Kopie des Prebuilds gespeichert wird).
- Der Anzahl älterer Versionen des Prebuilds, die aufbewahrt werden.

Die Speicherkosten für die Prebuilds, die durch eine Prebuildkonfiguration generiert werden, berechnen sich daher wie folgt: `price per GB * size (GB) * regions * versions`.

#### Steuern der Kosten für Prebuilds

Um den Verbrauch von Github Actions-Minuten zu reduzieren, kannst du einen Prebuild so festlegen, dass er nur bei Änderungen an den Konfigurationsdateien des Entwicklungscontainers oder nur nach einem benutzerdefinierten Zeitplan aktualisiert wird. Zur Verwaltung deiner Speichernutzung kannst du auch die Anzahl gespeicherter Vorgängerversionen der einzelnen Builds anpassen. Weitere Informationen findest du unter [Konfigurieren von Prebuilds](/codespaces/prebuilding-your-codespaces/configuring-prebuilds#configuring-prebuilds).

Zur Begrenzung der Speicherkosten im Zusammenhang mit Prebuilds kannst du festlegen, dass Prebuilds nur in ausgewählten Regionen erstellt werden sollen, und du kannst angeben, wie viele ältere Versionen von Prebuilds aufbewahrt werden sollen. Weitere Informationen findest du unter [Konfigurieren von Prebuilds](/codespaces/prebuilding-your-codespaces/configuring-prebuilds#configuring-prebuilds).

{% note %}

**Hinweis:** Prebuilds können während eines Abrechnungsmonats mehrmals aktualisiert werden. Neuere Versionen eines Prebuilds können größer oder kleiner als die Vorgängerversionen sein. Dies wirkt sich auf die Speichergebühren aus. Ausführliche Informationen zur Berechnung des Speichers während eines Abrechnungsmonats findest du weiter oben unter [Abrechnung für die Speichernutzung](#billing-for-storage-usage).

{% endnote %}

#### Kosten von Codespaces, die auf der Grundlage von Prebuilds erstellt werden

Die Verwendung mithilfe von Prebuilds erstellter Codespaces wird zum gleichen Satz wie reguläre Codespaces berechnet.

## Festlegen eines Ausgabenlimits

{% data reusables.codespaces.codespaces-spending-limit-requirement %}

Informationen zum Verwalten und Ändern des Ausgabenlimits deines Kontos findest du unter [Verwalten deines Ausgabenlimits für {% data variables.product.prodname_github_codespaces %}](/billing/managing-billing-for-github-codespaces/managing-the-spending-limit-for-github-codespaces).

{% data reusables.codespaces.exporting-changes %}

## Einschränken der Computertypen für organisationseigene Codespaces

Beim Erstellen eines Codespaces wird standardmäßig der Computertyp mit den geringsten gültigen Ressourcen verwendet. Benutzer können jedoch möglicherweise einen Computertyp mit mehr Ressourcen auswählen. Du kannst dies beim Erstellen eines Codespaces tun, oder sie können den Computertyp eines vorhandenen Codespaces ändern. Weitere Informationen findest du unter [Erstellen eines Codespace für ein Repository](/codespaces/developing-in-codespaces/creating-a-codespace-for-a-repository#creating-a-codespace-for-a-repository) sowie unter [Ändern des Computertyps für deinen Codespace](/codespaces/customizing-your-codespace/changing-the-machine-type-for-your-codespace).

Wenn ein Computertyp mit mehr Ressourcen ausgewählt wird, wirkt sich dies wie oben gezeigt auf die Gebühr pro Stunde für diesen Codespace aus. 

Organisationsbesitzer können eine Richtlinie zur Einschränkung der Computertypoptionen erstellen, die Benutzern für Codespaces zur Verfügung stehen, die einem Organisations- oder Unternehmenskonto in Rechnung gestellt werden. Weitere Informationen findest du unter [Einschränken des Zugriffs auf Computertypen](/codespaces/managing-codespaces-for-your-organization/restricting-access-to-machine-types).

## Behandlung der Abrechnung für geforkte Repositorys

Die Nutzung von Codespaces, die auf der Grundlage eines geforkten Repositorys erstellt werden, wird über dein persönliches Konto abgerechnet, es sei denn, das Upstreamrepository (oder übergeordnete Repository) befindet sich in einer Organisation, die dir als Mitglied oder externer Mitarbeiter der Organisation die Nutzung von Codespaces auf Kosten der Organisation gestattet hat.

Angenommen, es gibt ein Mitglied oder einen externen Mitarbeiter einer Organisation, die die Abrechnung für Codespaces für diesen Benutzer zugelassen hat. Wenn der Benutzer über die Berechtigung zum Forken eines organisationseigenen privaten Repositorys verfügt, kann er anschließend auf Kosten der Organisation einen Codespace für das neue Repository erstellen und verwenden. Das liegt daran, dass die Organisation der Besitzer des übergeordneten Repositorys ist. Hinweis: Der Organisationsbesitzer kann dem Benutzer den Zugriff auf das private Repository, auf das geforkte Repository und somit auch auf den Codespace entziehen. Der Organisationsbesitzer kann außerdem das übergeordnete Repository löschen, was die Löschung des geforkten Repositorys zur Folge hat. Weitere Informationen findest du unter [Verwalten der Forkingrichtlinie für dein Repository](/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/managing-the-forking-policy-for-your-repository).

{% data reusables.codespaces.codespaces-disabling-org-billing %}

## Behandlung der Abrechnung bei Übertragung eines Repositorys auf eine andere Organisation

Die Nutzung wird stündlich berechnet. Eine Organisation zahlt für die Nutzung von Codespaces, die auf der Grundlage eines Repositorys erstellt wurden, das sich im Besitz der Organisation befindet, sofern die Organisationseinstellungen die Abrechnung über die Organisation zulassen. Weitere Informationen findest du unter [Aktivieren von {% data variables.product.prodname_github_codespaces %} für deine Organisation](/codespaces/managing-codespaces-for-your-organization/enabling-github-codespaces-for-your-organization#choose-who-can-create-codespaces-that-are-billed-to-your-organization). Wenn ein Repository an eine andere Organisation übertragen wird, ändern sich entsprechend die Besitzverhältnisse und die Abrechnungsverantwortung für alle Codespaces, die diesem Repository zugeordnet sind.

## Was geschieht, wenn Benutzer entfernt werden?

Wenn ein Benutzer aus einer Organisation oder einem Repository entfernt wird, werden seine Codespaces automatisch gelöscht. 
