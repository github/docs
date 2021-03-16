---
title: Richtlinien für rechtliche Anfragen zu Benutzerdaten
redirect_from:
  - /law-enforcement-guidelines/
  - /articles/guidelines-for-legal-requests-of-user-data
versions:
  free-pro-team: '*'
---

Sind Sie ein Strafverfolgungsbeamter, der eine Untersuchung durchführt, die möglicherweise auf GitHub gehostete Benutzerinhalte betrifft? Oder sind Sie eine datenschutzbewusste Person, die wissen möchte, welche Informationen wir mit Strafverfolgungsbehörden teilen und unter welchen Umständen. In jedem Fall sind Sie hier auf der richtigen Seite.

In diesen Richtlinien geben wir einen kleinen Hintergrund darüber, was GitHub ist, welche Arten von Daten wir besitzen und unter welchen Bedingungen wir private Benutzerinformationen offenlegen. Bevor wir jedoch ins Detail gehen, sind hier ein paar wichtige Details, die Sie möglicherweise interessieren könnten:

- Wir werden [**betroffene Benutzer**](#we-will-notify-any-affected-account-owners) über jegliche Anfragen nach ihren Kontoinformationen [**benachrichtigen**](#we-will-notify-any-affected-account-owners), es sei denn, dies ist per Gesetz oder Gerichtsbeschluss untersagt.
- Wir werden **Standortverfolgungsdaten** nicht ohne einen [gültigen Gerichtsbeschluss oder einen Druchsuchungsbefehl](#with-a-court-order-or-a-search-warrant) weitergeben.
- Wir werden keine **privaten Benutzerinhalte**, einschließlich des Inhalts privater Repositorys ,ohne einen gültigen [Durchsuchungsbefehl](#only-with-a-search-warrant) offen legen.

### Über diese Richtlinien

Unsere Benutzer vertrauen uns ihre Softwareprojekte und ihren Code an - oft einige ihrer wertvollsten geschäftlichen oder persönlichen Ressourcen. Die Aufrechterhaltung dieses Vertrauens ist für uns von wesentlicher Bedeutung, was bedeutet, dass Benutzerdaten sicher, geschützt und privat bleiben müssen.

Während die überwältigende Mehrheit unserer Benutzer die Dienste von GitHub nutzt, um neue Unternehmen zu gründen, neue Technologien zu entwickeln und die Menschheit allgemein zu verbessern, erkennen wir, dass es mit Millionen von Benutzer, die auf der ganzen Welt verteilt sind, sicherlich ein paar schlechte Äpfel im Korb gibt. In diesen Fällen wollen wir den Strafverfolgungsbehörden helfen, ihrem legitimen Interesse am Schutz der Öffentlichkeit zu dienen.

Durch die Bereitstellung von Richtlinien für das Personal von Strafverfolgungsbehörden hoffen wir, einen Ausgleich zwischen den oftmals entgegengesetzten Interessen der Privatsphäre der Benutzer und der Rechtsprechung zu schaffen. Wir hoffen, dass diese Richtlinien dazu beitragen werden, Erwartungen auf beiden Seiten zu setzen und die internen Prozesse von GitHub transparenter zu gestalten. Unsere Benutzer sollten wissen, dass wir ihre privaten Informationen schätzen und dass wir alles in unserer Macht Stehende tun, um sie zu schützen. Dies bedeutet zumindest, dass Daten nur dann an Dritte weitergegeben werden, wenn die entsprechenden gesetzlichen Anforderungen erfüllt sind. Aus dem gleichen Grund hoffen wir auch, die Mitarbeiter der Strafverfolgungsbehörden über die Systeme von GitHub aufzuklären, damit sie ihre Datenanfragen effizienter formulieren und genau auf die Informationen abzielen können, die sie für ihre Ermittlungen benötigen.

### GitHub-Terminologie

Bevor Sie uns auffordern, Daten offenzulegen, kann es nützlich sein, zu verstehen, wie unser System implementiert wird. GitHub hostet Millionen von Datenrepositorys mit dem [Git-Versionskontollsystem](https://git-scm.com/video/what-is-version-control). Repositorys auf GitHub - die öffentlich oder privat sein können - werden am häufigsten für Softwareentwicklungsprojekte verwendet, aber auch zur Bearbeitung unterschiedlichster Inhalte.

- [**Benutzer**](/articles/github-glossary#user) — Benutzer werden in unserem System als persönliche GitHub-Konten dargestellt. Jeder Benutzer hat ein persönliches Profil und kann mehrere Repositorys besitzen. Benutzer können Organisationen erstellen oder zu Organisationen eingeladen werden oder am Repository eines anderen Benutzers mitarbeiten.

- [**Mitarbeiter**](/articles/github-glossary#collaborator) — Ein Mitarbeiter ist ein Benutzer mit Lese- und Schreibzugriff auf ein Repository, der vom Repository-Inhaber eingeladen wurde, dazu beizutragen.

- [**Organisationen**](/articles/github-glossary#organization) — Organisationen sind eine Gruppe von zwei oder mehr Benutzern, die in der Regel reale Organisationen wie Unternehmen oder Projekte spiegeln. Sie werden von Benutzern verwaltet und können sowohl Repositorys als auch Benutzerteams enthalten.

- [**Repositorys**](/articles/github-glossary#repository) — Ein Repository ist eines der grundlegendsten GitHub-Elemente. Am einfachsten können Sie sich ein Repository als Projektordner vorstellen. Ein Repository enthält alle Projektdateien (einschließlich der Dokumentation) und speichert den Revisionsverlauf jeder Datei. Repositorys können mehrere Mitarbeiter haben und nach Ermessen der Administratoren öffentlich einsehbar sein oder nicht.

- [**Seiten**](/articles/what-is-github-pages) — GitHub-Seiten sind öffentliche Webseiten, die kostenlos von GitHub gehostet werden und die Benutzer einfach über Code veröffentlichen können, der in ihren Repositorys gespeichert ist. Wenn ein Benutzer oder eine Organisation über eine GitHub-Seite verfügt, ist diese in der Regel unter einer URL wie `https://username.github.io` abrufbar, oder Benutzer oder die Organisation kann die Webseite dem eigenen benutzerdefinierten Domänennamen zuweisen.

- [**Gists**](/articles/creating-gists) — Gists sind Ausschnitte von Quellcode oder anderem Text, mit dem Benutzer Ideen speichern oder mit Freunden teilen können. Wie normale GitHub-Repositorys werden Gists mit Git erstellt, so dass sie automatisch versioniert, forkbar und herunterladbar sind. Gists können entweder öffentlich oder geheim (nur über eine bekannte URL zugänglich) sein. Öffentliche Gists können nicht in geheime Gists umgewandelt werden.

### Benutzerdaten auf GitHub.com

Im Folgenden finden Sie eine nicht allumfassende Liste der verschiedenen Typen von Daten, die wir über Benutzer und Projekte auf GitHub führen.

- <a name="public-account-data"></a>
**Öffentliche Kontodaten** — Auf GitHub gibt es eine Vielzahl von Informationen über Benutzer und ihre Repositorys. Benutzerprofile finden Sie unter einer URL wie `https://github.com/username`. Benutzerprofile zeigen Informationen darüber an, wann der Benutzer sein Konto erstellt hat, sowie seine öffentliche Aktivität auf GitHub.com und soziale Interaktionen. Öffentliche Benutzerprofile können auch zusätzliche Informationen enthalten, die ein Benutzer möglicherweise öffentlich freigeben möchte. Alle öffentlichen Benutzerprofile umfassen:
  - Benutzername
  - Die Repositorys die der Benutzer markiert hat
  - Die anderen GitHub-Benutzer, denen der Benutzer folgt
  - Die Benutzer, die ihnen folgen

  Optional kann ein Benutzer auch die folgenden Informationen öffentlich freigeben:
  - Ihr richtiger Name
  - Ein Avatar
  - Ein verbundenes Unternehmen
  - Ihr Standort
  - Eine öffentliche E-Mail-Adresse
  - Ihre persönliche Webseite
  - Organisationen, denen der Benutzer angehört (*je nach den Voreinstellung der Organisationen oder der Benutzer*)

- <a name="private-account-data"></a>
**Private Kontodaten** — GitHub erfasst und verwaltet auch bestimmte private Informationen über Benutzer, wie in unserer [Datenschutzrichtlinie](/articles/github-privacy-statement) beschrieben. Sie können beispielsweise Folgendes enthalten:
  - Private E-Mail-Adressen
  - Zahlungsdetails
  - Sicherheitszugriffsprotokolle
  - Daten über Interaktionen mit privaten Repositorys

  Um ein Gefühl für die Art der privaten Kontoinformationen zu erhalten, die GitHub erfasst, können Sie Ihr {% data reusables.user_settings.personal_dashboard %} aufrufen und die Abschnitte in der linken Menüleiste durchsuchen.

- <a name="organization-account-data"></a>
**Organisationskontodaten** — Informationen über Organisationen, deren administrative Benutzer und Repositorys sind auf GitHub öffentlich verfügbar. Organisationsprofile finden Sie unter einer URL wie `https://github.com/organization`. Öffentliche Organisationsprofile können auch zusätzliche Informationen enthalten, die die Inhaber möglicherweise öffentlich freigeben möchten. Alle öffentlichen Organisationsprofile umfassen:
  - Den Organisationsnamen
  - Die Repositorys die die Benutzer markiert haben
  - Alle GitHub-Benutzer, die Eigentümer der Organisation sind

  Optional können administrative Benutzer auch die folgenden Informationen öffentlich freigeben:
  - Ein Avatar
  - Ein verbundenes Unternehmen
  - Ihr Standort
  - Direkte Mitglieder und Teams
  - Mitarbeiter

- <a name="public-repository-data"></a>
**Öffentliche Repository-Daten** — GitHub umfasst Millionen von öffentlichen Open-Source-Software-Projekten. Sie können fast jedes öffentliche Repository durchsuchen (z. B. das [Atomprojekt](https://github.com/atom/atom)), um eine Vorstellung davon zu erhalten, welche Informationen GitHub über Repositorys sammelt und verwaltet. Zu diesen gehören:

  - Der Code selbst
  - Frühere Versionen des Codes
  - Stabile Release-Versionen des Projekts
  - Informationen über Mitarbeiter, Mitwirkende und Repository-Mitglieder
  - Protokolle von Git-Operationen wie Commits, Branching, Pushing, Pulling, Forking und Cloning
  - Unterhaltungen im Zusammenhang mit Git-Vorgängen, z. B. Kommentare zu Pull Requests oder Commits
  - Projektdokumentation wie Probleme und Wiki-Seiten
  - Statistiken und Grafiken mit Beiträgen zum Projekt und dem Netzwerk der Mitwirkenden

- <a name="private-repository-data"></a>
**Private Repository-Daten** — GitHub sammelt und verwaltet die gleiche Art von Daten für private Repositorys wie für öffentliche Repositorys, es sei denn, nur speziell eingeladene Benutzer können auf private Repository-Daten zugreifen.

- <a name="other-data"></a>
**Sonstige Daten** — Darüber hinaus sammelt GitHub Analysedaten wie Seitenbesuche und Informationen, die gelegentlich von unseren Nutzern freiwillig zur Verfügung gestellt werden (z. B. Kommunikation mit unserem Support-Team, Umfrageinformationen und/oder Website-Registrierungen).

### Wir werden alle betroffenen Kontoinhaber benachrichtigen

Es ist unsere Richtlinie, Benutzer über ausstehende Anfragen in Bezug auf ihre Konten oder Repositorys zu informieren, es sei denn, uns ist dies per Gesetz oder Gerichtsbeschluss untersagt. Vor der Offenlegung von Benutzerinformationen werden wir uns bemühen, betroffene Kontoinhaber zu benachrichtigen, indem wir eine Nachricht an ihre verifizierte E-Mail-Adresse senden, die eine Kopie der Vorladung, eines Gerichtsbeschlusses oder eines Haftbefehls enthält, damit sie die Möglichkeit haben, das Gerichtsverfahren anzufechten, wenn sie dies wünschen. Unter (seltenen) Umständen können wir die Benachrichtigung verzögern, wenn wir feststellen, dass eine Verzögerung notwendig ist, um Tod oder schweren Schaden zu verhindern.

### Offenlegung nicht öffentlicher Informationen

Es ist unsere Richtlinie, nicht öffentliche Benutzerinformationen im Zusammenhang mit einer zivil- oder strafrechtlichen Untersuchung mit der Zustimmung des Benutzers oder nach Erhalt einer gültigen Vorladung, eines zivilen Ermittlungsantrags, eines Gerichtsbeschlusses, eines Durchsuchungsbefehls oder eines anderen ähnlich gültigen rechtlichen Verfahrens offenzulegen. Unter bestimmten dringenden Umständen (siehe unten) können wir auch begrenzte Informationen weitergeben, allerdings nur entsprechend der Art der Umstände, wobei für alle weiteren Informationen ein Gerichtsverfahren erforderlich wäre. GitHub behält sich das Recht vor, Anfragen nach nicht öffentlichen Informationen abzulehnen. Sofern GitHub zustimmt, nicht öffentliche Informationen als Antwort auf eine rechtmäßige Anfrage bereitzustellen, werden wir eine angemessene Suche nach den angeforderten Informationen durchführen. Nachstehend finden Sie die verschiedenen Arten von Informationen, die wir je nach Art des Gerichtsverfahrens, das uns vorgelegt wird, zur Verfügung stellen werden:

- <a name="with-user-consent"></a>
**Mit Zustimmung des Benutzers** — GitHub stellt dem Benutzer (oder einem Eigentümer im Falle eines Organisationskontos) oder einem designierten Dritten mit schriftlicher Zustimmung des Benutzers auf Anfrage private Kontoinformationen direkt zur Verfügung, sobald GitHub davon überzeugt ist, dass der Benutzer seine Identität überprüft hat.

- <a name="with-a-subpoena"></a>
**Mit einer Vorladung** — Wenn uns eine gültige Vorladung, ein ziviler Ermittlungsantrag oder ein ähnliches rechtliches Verfahren im Zusammenhang mit einer offiziellen straf- oder zivilrechtlichen Untersuchung vorgelegt wird, können wir bestimmte nicht öffentliche Kontoinformationen zur Verfügung stellen:

  - Mit dem Konto assoziierte(r) Name(n)
  - Mit dem Konto assoziierte E-Mail-Adresse(n)
  - Rechnungsinformationen
  - Registrierungsdatum und Kündigungsdatum
  - IP-Adresse, Datum und Uhrzeit zum Zeitpunkt der Kontoregistrierung
  - IP-Adresse(en), die für den Zugriff auf das Konto zu einem bestimmten Zeitpunkt oder Ereignis verwendet wurde, das für die Untersuchung relevant ist

Bei Organisationskonten können wir den/die Namen(n) und E-Mail-Adresse(en) des/der Kontoinhaber(s) sowie das Datum und die IP-Adresse zum Zeitpunkt der Erstellung des Organisationskontos angeben. Wir werden keine Informationen über andere Mitglieder oder, falls vorhanden, Mitwirkende des Organisationskontos oder zusätzliche Informationen über den/die identifizierten Kontoinhaber ohne eine entsprechende Folgeanfrage für diese spezifischen Benutzer veröffentlichen.

Bitte beachten Sie, dass die verfügbaren Informationen von Fall zu Fall variieren. Einige der Informationen sind für die Benutzer optional. In anderen Fällen haben wir die Informationen möglicherweise nicht erfasst oder gespeichert.

- <a name="with-a-court-order-or-a-search-warrant"></a>
**With a court order *or* a search warrant** — We will not disclose account access logs unless compelled to do so by either (i) a court order issued under 18 U.S.C. Section 2703(d), upon a showing of specific and articulable facts showing that there are reasonable grounds to believe that the information sought is relevant and material to an ongoing criminal investigation; or (ii) a search warrant issued under the procedures described in the Federal Rules of Criminal Procedure or equivalent state warrant procedures, upon a showing of probable cause. Zusätzlich zu den oben aufgeführten nicht öffentlichen Benutzerkontoinformationen können wir als Antwort auf eine Gerichtsverfügung oder einen Durchsuchungsbefehl Kontozugriffsprotokolle bereitstellen, die Folgendes umfassen können:

  - Protokolle, die die Bewegungen eines Benutzers über einen bestimmten Zeitraum anzeigen
  - Konto- oder private Repository-Einstellungen (z. B. welche Benutzer über bestimmte Berechtigungen verfügen usw.)
  - Benutzer- oder IP-spezifische Analysedaten wie Browserverlauf
  - Sicherheitszugriffsprotokolle außer der Kontoerstellung oder für eine bestimmte Zeit und ein bestimmtes Datum

- <a name="only-with-a-search-warrant"></a>
**Nur mit einem Durchsuchungsbefehl** — Wir werden den privaten Inhalt eines Benutzerkontos nicht offenlegen, es sei denn, wir sind aufgrund eines Durchsuchungsbefehls, der gemäß den in den Bundesstrafprozessregeln beschriebenen Verfahren ausgestellt wurde, oder aufgrund gleichwertiger staatlicher Haftbefehlsverfahren bei Vorliegen eines hinreichenden Grundes dazu gezwungen. Zusätzlich zu den oben erwähnten nicht öffentlichen Benutzerkontoinformationen und Kontozugriffsprotokollen werden wir auf einen Durchsuchungsbefehl hin auch Inhalte privater Benutzerkonten zur Verfügung stellen:

  - Inhalt geheimer Gists
  - Quellcode oder andere Inhalte in privaten Repositorys
  - Beitrags- und Kollaborationsdatensätze für private Repositorys
  - Kommunikation oder Dokumentation (wie Probleme oder Wikis) in privaten Repositorys
  - Alle Sicherheitsschlüssel, die für die Authentifizierung oder Verschlüsselung verwendet werden

- <a name="in-exigent-circumstances"></a>
**Unter dringenden Umständen** - Wenn wir unter bestimmten dringenden Umständen (wenn wir glauben, dass die Offenlegung notwendig ist, um einen Notfall mit Todesfolge oder schwerer Körperverletzung einer Person zu verhindern) um Informationen gebeten werden, können wir begrenzte Informationen offenlegen, die wir für notwendig erachten, damit die Strafverfolgungsbehörden den Notfall behandeln können. Für alle darüber hinausgehenden Informationen benötigen wir eine Vorladung, einen Durchsuchungsbefehl oder einen Gerichtsbeschluss, wie oben beschrieben. Beispielsweise werden wir Inhalte von privaten Repositorys nicht ohne einen Durchsuchungsbefehl offenlegen. Bevor wir Informationen weitergeben, bestätigen wir, dass die Anfrage von einer Strafverfolgungsbehörde stammt, eine Behörde eine offizielle Mitteilung über den Notfall übermittelte und wie die angeforderten Informationen bei der Bewältigung des Notfalls hilfreich sein werden.

### Kostenerstattung

Under state and federal law, GitHub can seek reimbursement for costs associated with compliance with a valid legal demand, such as a subpoena, court order or search warrant. We only charge to recover some costs, and these reimbursements cover only a portion of the costs we actually incur to comply with legal orders.

While we do not charge in emergency situations or in other exigent circumstances, we seek reimbursement for all other legal requests in accordance with the following schedule, unless otherwise required by law:

- Initial search of up to 25 identifiers: Free
- Production of subscriber information/data for up to 5 accounts: Free
- Production of subscriber information/data for more than 5 accounts: $20 per account
- Secondary searches: $10 per search

### Datenaufbewahrung

We will take steps to preserve account records for up to 90 days upon formal request from U.S. law enforcement in connection with official criminal investigations, and pending the issuance of a court order or other process.

### Einreichen von Anfragen

Bitte stellen Sie Anfragen an:

```
GitHub, Inc.
c/o Corporation Service Company
2710 Gateway Oaks Drive, Suite 150N
Sacramento, CA 95833-3505, USA.
```

Bitte formulieren Sie Ihre Wünsche so spezifisch und begrenzt wie möglich, einschließlich der folgenden Informationen:

- Vollständige Informationen über die Behörde, die die Anfrage ausstellt
- Der Name und der Badge/ID des zuständigen Agenten
- Eine offizielle E-Mail-Adresse und Telefonnummer
- Der Benutzer, die Organisation, der/ die Repository-Name(n) von Interesse
- Die URLs aller Seiten, Gists oder Dateien von Interesse
- Die Beschreibung der benötigten Arten von Datensätzen

Bitte geben Sie uns mindestens zwei Wochen Zeit, um wir Ihre Anfrage zu überprüfen.

### Anfragen von ausländischen Strafverfolgungsbehörden

Als US-amerikanisches Unternehmen mit Sitz in Kalifornien ist GitHub nicht verpflichtet, aufgrund von Rechtsverfahren, die von ausländischen Behörden eingeleitet wurden, Daten an ausländische Regierungen zu übermitteln. Ausländische Strafverfolgungsbeamte, die Informationen von GitHub anfordern möchten, sollten sich an das Office of International Affairs des United States Department of Justice Criminal Division wenden. GitHub wird umgehend auf Anfragen reagieren, die über ein US-Gericht mittels eines Rechtshilfeabkommens ("MLAT") bzw. eines Rechtshilfeersuchens gestellt werden. court by way of a mutual legal assistance treaty (“MLAT”) or letter rogatory.

### Fragen

Haben Sie weitere Fragen, Kommentare oder Anregungen? Bitte kontaktieren Sie uns über {% data variables.contact.contact_support %}.
