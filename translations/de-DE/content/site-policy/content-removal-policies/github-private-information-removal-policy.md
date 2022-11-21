---
title: GitHub Richtlinie zum Entfernen privater Informationen
redirect_from:
  - /articles/github-sensitive-data-removal-policy
  - /github/site-policy/github-sensitive-data-removal-policy
  - /github/site-policy/github-private-information-removal-policy
versions:
  fpt: '*'
topics:
  - Policy
  - Legal
ms.openlocfilehash: 42dbae3bcd7a1ee09a209c7bb5d81506e2d473bf
ms.sourcegitcommit: 93b306112b5cd5ce482d468a25c9961ad02f87ac
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 08/29/2022
ms.locfileid: '147099172'
---
Wir bieten diesen Prozess zum Entfernen privater Informationen als außergewöhnlichen Service nur für Inhalte mit hohem Risiko an, die eine Verletzung der [Nutzungsbedingungen von GitHub](/github/site-policy/github-acceptable-use-policies#3-conduct-restrictions) darstellen an, z. B. wenn Ihre Sicherheit durch offengelegte Zugangsdaten gefährdet ist. Dieser Leitfaden beschreibt die Informationen, die GitHub von Ihnen benötigt, um einen Antrag zum Entfernen privater Informationen aus einem Repository zu bearbeiten.

## Was sind private Informationen?

Für die Zwecke dieses Dokuments bezieht sich „private Informationen“ auf Inhalte, die (i) vertraulich behandelt werden sollten, *und* (ii) deren öffentliche Verfügbarkeit ein spezifisches oder gezieltes Sicherheitsrisiko für Sie oder Ihre Organisation darstellt. 

„Sicherheitsrisiko“ bezieht sich auf eine Situation, die physische Gefahren, Identitätsdiebstahl oder eine erhöhte Wahrscheinlichkeit eines unbefugten Zugriffs auf physische oder Netzwerkeinrichtungen enthält.

### Anträge auf Entfernung privater Informationen sind geeignet für:
- Anmeldeinformationen, z. B. Nutzernamen in Kombination mit Kennwörtern, Zugriffstoken oder andere vertrauliche Geheimnissen, die Zugriff auf den Server, das Netzwerk oder die Domäne Ihrer Organisation gewähren können.
- AWS-Token und andere ähnliche Zugangsdaten, die Dritten in Ihrem Namen Zugang gewähren. Sie müssen nachweisen können, dass das Token Ihnen gehört.
- Dokumentation (z. B. Netzwerkdiagramme oder -architektur), die ein bestimmtes Sicherheitsrisiko für eine Organisation darstellt. 
- [Informationen](/site-policy/acceptable-use-policies/github-doxxing-and-invasion-of-privacy), die sich auf Sie als Einzelperson beziehen und ein Sicherheitsrisiko für Sie darstellen (z. B. Sozialversicherungsnummern oder andere amtliche Identifikationsnummern).

### Anträge auf Entfernung privater Informationen sind _nicht_ geeignet für:
- Alleinige Erwähnung von internen Servernamen, IP-Adressen und URLs. Sie müssen nachweisen können, dass ihre Verwendung in einer bestimmten Datei oder einem bestimmten Codeabschnitt eine Sicherheitsbedrohung darstellt.
- Bloße Erwähnungen der Identität, des Namens, der Marke, des Domänennamens Ihres Unternehmens oder anderer Verweise auf Ihr Unternehmen in Dateien auf GitHub. Sie müssen in der Lage sein zu artikulieren, warum die Verwendung der Identität Ihres Unternehmens eine Bedrohung für die Sicherheitslage Ihres Unternehmens darstellt.
- Ganze Dateien oder Repositories, die kein besonderes Sicherheitsrisiko darstellen, aber Ihrer Meinung nach anderweitig anstößig sind.
- Aufforderungen zur Entfernung von Inhalten, die Ihre Urheberrechte oder die Ihrer Organisation verletzen könnten. Wenn Sie Fragen dazu haben, wie GitHub mit urheberrechtlichen Angelegenheiten umgeht, oder potenziell verletzende Inhalte melden möchten, lesen Sie bitte unsere [Richtlinie zu DMCA Takedown Notices](/articles/dmca-takedown-policy/). Der Prozess zum Entfernen privater Informationen ist im Allgemeinen nicht für das Entfernen vollständiger Dateien oder Repositories gedacht – nur für die spezifischen Teile privater Informationen in diesen Dateien. Obwohl es Fälle geben kann, in denen Dateien vollständig mit privaten Informationen gefüllt sind, müssen Sie das Sicherheitsrisiko für das Entfernen solcher Dateien begründen, und dies kann die für die Bearbeitung Ihres Antrags erforderliche Zeit verlängern.
- Markenstreitigkeiten. Wenn Sie Fragen dazu haben, wie GitHub markenbezogene Angelegenheiten handhabt, oder Inhalte melden möchten, die die Handels- oder Dienstleistungsmarken Ihrer Organisation enthalten, lesen Sie bitte unsere [Markenrichtlinie](/articles/github-trademark-policy/).
- Datenschutzbeschwerden. Wenn Sie auf Ihre personenbezogenen Daten auf GitHub zugreifen, sie übermitteln, ändern oder löschen möchten, kontaktieren Sie uns bitte über [unser Kontaktformular Datenschutz](https://github.com/contact/privacy). 
- Inhalte, die unseren [Community-Richtlinien](/articles/github-community-guidelines/) unterliegen, wie Malware oder Allzweck-Tools. Wenn Sie Fragen zu unseren Community-Richtlinien haben oder glauben, dass Inhalte auf GitHub gegen unsere Richtlinien verstoßen könnten, können Sie {% data variables.contact.report_content %} verwenden, um uns zu kontaktieren.

## Wichtige Hinweise

**Fragen Sie zuerst höflich nach.** Bevor Sie uns einen Antrag zum Entfernen von Daten senden, können Sie als ersten Schritt den Nutzer direkt kontaktieren. Sie haben möglicherweise Kontaktinformationen auf ihrer öffentlichen Profilseite oder in der README- oder Support-Datei des Repositories aufgeführt, oder Sie können sich mit ihnen in Verbindung setzen, indem Sie ein Issue oder Pull Request im Repository erstellen. Dies ist nicht unbedingt erforderlich, wird aber geschätzt.

**Keine Bots.** Sie sollten die Fakten jedes von Ihnen gesendeten Antrags von einem geschulten Fachmann bewerten lassen. Wenn Sie Ihre Bemühungen an Dritte auslagern, stellen Sie sicher, dass Sie wissen, wie diese arbeiten, und stellen Sie sicher, dass sie keine automatisierten Bots verwenden, um Beschwerden in großen Mengen einzureichen. Diese Beschwerden enthalten oft Daten, die kein Sicherheitsrisiko darstellen, und sie enthalten keine ausreichenden Erklärungen, was zusätzliches Hin und Her erfordert und zu Verzögerungen führt, selbst wenn die Beschwerde berechtigt ist.

**Reichen Sie den richtigen Antrag ein.** Wie oben erwähnt, bieten wir diesen Prozess zum Entfernen privater Informationen als außergewöhnlichen Service nur für Inhalte mit hohem Risiko an. Wir sind nicht in der Lage, diesen Prozess zu verwenden, um andere Arten von Inhalten zu entfernen, z. B. potenziell rechtsverletzende Inhalte, und wir können keine anderen Arten von Entfernungsersuchen gleichzeitig bearbeiten, während wir Anträge auf Entfernung privater Informationen bearbeiten. Wir können Ihnen schneller helfen, wenn Sie Ihre Anträge auf Entfernung privater Informationen getrennt von allen Anträgen auf Entfernung potenziell rechtsverletzender Inhalte einreichen. Wenn Sie sich nicht sicher sind, ob Ihr Antrag nur private Informationen oder auch andere rechtliche Angelegenheiten betrifft, wenden Sie sich bitte an einen Rechtsbeistand. 

**Bearbeitungszeit.** Obwohl wir Anträge auf Entfernung privater Informationen so schnell wie möglich bearbeiten, kann es aufgrund der Menge der von uns bearbeiteten Anträge einige Zeit dauern, bis Ihr Antrag überprüft wird. Zusätzliche Anträge oder Mehrfachanträge von zusätzlichen Ansprechpartnern können zu Verzögerungen führen.

## Wie funktioniert das eigentlich?

1. **Beschwerdeführer ermittelt.** Es ist Sache der antragstellenden Partei, ihre eigene Untersuchung durchzuführen und uns die Informationen zur Verfügung zu stellen, [die wir benötigen](#your-request-must-include) – insbesondere eine Erklärung, inwiefern die Daten ein Sicherheitsrisiko darstellen. GitHub ist nicht in der Lage, im Namen von Einzelpersonen oder Organisationen nach privaten Informationen zu suchen oder erste Feststellungen zu treffen.

2. **Der Beschwerdeführer sendet einen Antrag auf Entfernung privater Informationen.** Nach Durchführung einer Untersuchung bereitet der Beschwerdeführer [einen Antrag zum Entfernen privater Informationen](#sending-a-private-information-removal-request) vor und sendet ihn an GitHub. Wenn der Antrag nicht detailliert genug ist, um das Sicherheitsrisiko aufzuzeigen und GitHub zu erlauben, die Daten zu lokalisieren, werden wir antworten und um weitere Informationen bitten.

3. **GitHub fordert den Nutzer auf, Änderungen vorzunehmen.** In den meisten Fällen kontaktieren wir den Nutzer, der das Repository erstellt hat, und geben ihm die Möglichkeit, die im Antrag angegebenen privaten Informationen zu löschen oder zu ändern oder den Anspruch anzufechten.

4. **Nutzer benachrichtigt GitHub über Änderungen.** Wenn der Nutzer die angegebenen Änderungen vornimmt, ist dieser verpflichtet, uns dies innerhalb eines festgelegten Zeitfensters. Wenn dies nicht der Fall ist, deaktivieren wir das Repository. Wenn der Nutzer uns mitteilt, dass er Änderungen vorgenommen hat, werden wir überprüfen, ob die Änderungen vorgenommen wurden, und dann den Beschwerdeführer benachrichtigen.

  ODER

5. **Der Nutzer kann den Antrag anfechten.** Wenn ein Nutzer der Ansicht ist, dass es sich bei dem betreffenden Inhalt nicht um private Informationen handelt, die dieser Richtlinie unterliegen, kann er dies anfechten. Wenn dies der Fall ist, überlassen wir es im Allgemeinen dem Beschwerdeführer, den Nutzer zu kontaktieren und die Dinge im Rahmen des Zumutbaren direkt mit ihm zu klären.

6. **Beschwerdeführer überprüft Änderungen.** Nimmt der Nutzer Änderungen vor, muss der Beschwerdeführer diese überprüfen. Wenn die Änderungen unzureichend sind, muss der Beschwerdeführer GitHub Einzelheiten zur Erläuterung zur Verfügung stellen. GitHub kann das Repository deaktivieren oder dem Nutzer eine zusätzliche Möglichkeit geben, die Änderungen vorzunehmen.

7. **Der Nutzer kann ein zusätzliches Zeitfenster anfordern, um Änderungen vorzunehmen.** Wenn der Nutzer seine Gelegenheit verpasst hat, die in der Mitteilung angegebenen privaten Informationen zu entfernen, können wir ihm auf Anfrage ein zusätzliches Zeitfenster von etwa einem Werktag gewähren, um diese Änderungen vorzunehmen. In diesem Fall benachrichtigt GitHub den Beschwerdeführer.

### Was ist mit Abspaltungen (Forks)? (oder Was ist eine Abspaltung?)
Eines der besten Features von GitHub ist, dass Nutzer die Möglichkeit haben, Repositories anderer abzuspalten bzw. zu „forken“. Was bedeutet das? Im Wesentlichen bedeutet dies, dass Nutzer in ihrem eigenen Repository eine Kopie eines Projekts auf GitHub erstellen können. Wenn die Lizenz oder das Gesetz es zulässt, können Nutzer dann Änderungen an dieser Abspaltung vornehmen, um entweder zum Hauptprojekt zurückzukehren oder einfach ihre eigene Variante eines Projekts zu behalten. Jede dieser Kopien ist ein „[Fork](/articles/github-glossary/#fork)“ des ursprünglichen Repositories, das wiederum auch als „übergeordnetes Element“ des Forks bezeichnet werden kann.

GitHub wird Abspaltungen nicht automatisch deaktivieren, wenn ein übergeordnetes Repository deaktiviert wird. Dies liegt daran, dass Forks verschiedenen Nutzern gehören und möglicherweise erheblich verändert wurden. GitHub führt keine unabhängigen Untersuchungen zu Abspaltungen durch. Wir erwarten, dass diejenigen, die Anträge auf Entfernung privater Informationen stellen, diese Untersuchung durchführen und, wenn sie glauben, dass die Forks auch private Informationen enthalten, Forks ausdrücklich in ihren Antrag aufnehmen.

Wenn Sie zu dem Zeitpunkt, an dem Sie Ihre Mitteilung eingereicht haben, alle bestehenden Abspaltungen dieses Repositories identifiziert haben, würden wir bei Bearbeitung der Mitteilung einen gültigen Anspruch gegen alle Abspaltungen in diesem Netzwerk bearbeiten. Wir würden dies aufgrund der Wahrscheinlichkeit tun, dass alle neu erstellten Abspaltungen denselben Inhalt enthalten würden. Wenn das gemeldete Netzwerk, das die gemeldeten Inhalte enthält, größer als einhundert (100) Repositories ist und es daher schwierig wäre, es in seiner Gesamtheit zu überprüfen, können wir außerdem in Betracht ziehen, das gesamte Netzwerk zu deaktivieren, wenn Sie in Ihre Mitteilung aufnehmen, dass Sie auf der Grundlage der von Ihnen überprüften repräsentativen Anzahl von Abspaltungen der Ansicht sind, dass alle oder die meisten Abspaltungen im gleichen Maße wie das übergeordnete Repository die gemeldeten Inhalte enthalten.

## Senden eines Antrags zum Entfernen privater Informationen

Aufgrund der Art der Inhalte, die GitHub hostet (hauptsächlich Softwarecode) und der Art und Weise, wie die Inhalte verwaltet werden (mit Git), müssen Beschwerden so spezifisch wie möglich sein. Damit wir überprüfen können, ob ein Nutzer gemeldete private Informationen vollständig entfernt hat, müssen wir genau wissen, wo wir suchen müssen.

Diese Richtlinien sollen die Bearbeitung von Anträgen auf Entfernung privater Informationen so einfach wie möglich gestalten.

### Ihr Antrag muss Folgendes enthalten:

1. Einen funktionierenden, anklickbaren Link zu jeder Datei, die private Informationen enthält. (Beachten Sie, dass wir nicht mit Suchergebnissen, Beispielen oder Screenshots arbeiten können.)
2. Spezifische Zeilennummern in jeder Datei, die die privaten Informationen enthalten.
3. Eine kurze Beschreibung, inwiefern jedes von Ihnen identifizierte Element ein Sicherheitsrisiko für Sie oder Ihre Organisation darstellt. ***Es ist wichtig, dass Sie erklären, inwiefern die Daten ein Sicherheitsrisiko darstellen, über die bloße Feststellung hinaus, dass dies der Fall ist.***
4. Wenn Sie ein Dritter sind, der als Vertreter für eine Organisation handelt, die einem Sicherheitsrisiko ausgesetzt ist, fügen Sie eine Erklärung bei, dass Sie ein gesetzliches Recht haben, im Namen dieser Organisation zu handeln.
5. OPTIONAL: Teilen Sie uns mit, wenn Ihr Antrag besonders dringend ist und warum. Wir reagieren so schnell wie möglich auf alle Anträge zur Entfernung privater Informationen. Wenn dieser Antrag jedoch besonders zeitkritisch ist, wie z. B. eine sehr aktuelle Offenlegung von Anmeldeinformationen, erläutern Sie bitte den Grund.

## So übermitteln Sie Ihren Antrag

Sie können Ihren Antrag zum Entfernen privater Informationen über unser [Kontaktformular](https://support.github.com/contact?tags=docs-private-information) senden. Bitte fügen Sie eine Klartextversion Ihres Antrags in den Text Ihrer Nachricht ein. Das Senden Ihres Antrags in einem Anhang kann zu Verzögerungen bei der Bearbeitung führen.

## Streitigkeiten

Wenn Sie von uns eine Aufforderung zur Entfernung privater Informationen erhalten haben, können Sie diese anfechten, indem Sie auf unsere E-Mail antworten und uns – so detailliert wie möglich – mitteilen, warum Sie der Meinung sind, dass es sich bei den betreffenden Inhalten nicht um private Informationen handelt, die dieser Richtlinie unterliegen.
