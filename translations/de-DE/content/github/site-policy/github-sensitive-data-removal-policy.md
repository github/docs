---
title: GitHub-Richtlinie zum Entfernen sensibler Daten
redirect_from:
  - /articles/github-sensitive-data-removal-policy
versions:
  free-pro-team: '*'
---

Wenn Sie der Meinung sind, dass Inhalte auf GitHub ein gültiges Urheberrecht verletzen, das Sie besitzen, lesen Sie bitte unsere [DMCA Takedown-Richtlinie](/articles/dmca-takedown-policy/) und unseren [Leitfaden zum Absenden einer DMCA Takedown Notice](/articles/guide-to-submitting-a-dmca-takedown-notice/). Die meisten unserer Entfernungsmaßnahmen erfolgen auf der Grundlage der DMCA Notice und des Takedown-Prozesses.

Wir verstehen jedoch, dass sensible sicherheitsrelevante Inhalte von Zeit zu Zeit auf GitHub veröffentlicht werden können – ob versehentlich oder absichtlich. Wir stellen unser Verfahren zur Entfernung sensibler Daten zur Verfügung, um diese sensiblen Daten in bestimmten Ausnahmefällen zu entfernen, in denen das DMCA-Verfahren nicht anwendbar wäre, z.B.  wenn Ihre Sicherheit durch offengelegte Passwörter gefährdet ist und Sie nicht das Urheberrecht an dem spezifischen Inhalt besitzen, der entfernt werden muss, oder wenn der Inhalt nicht durch das Urheberrecht schützbar ist. Dieser Leitfaden beschreibt die Informationen, die GitHub von Ihnen benötigt, um eine Anfrage zu bearbeiten, um vertrauliche Daten aus einem Repository zu entfernen.

### Was sind sensible Daten?

Für die Zwecke dieses Dokuments bezieht sich „sensible Daten“ auf Inhalte, die (i) geheim gehalten werden sollten, *und* (ii) deren öffentliche Verfügbarkeit ein spezifisches oder gezieltes Sicherheitsrisiko für Sie oder Ihr Unternehmen darstellt.

#### Anfragen zum Entfernen sensibler Daten sind angemessen für:
- Zugangsdaten wie Benutzernamen in Kombination mit Passwörtern, Zugriffstoken oder andere geheime Schlüssel, die den Zugriff auf den Server, das Netzwerk oder die Domain Ihrer Organisation gewähren können.
- AWS-Token und ähnliche Zugangsdaten, die einem Dritten in Ihrem Namen Zugriff gewähren. Sie müssen nachweisen können, dass das Token tatsächlich Ihnen gehört.
- Dokumentation (z. B. Netzwerkdiagramme), die ein spezifisches Sicherheitsrisiko für eine Organisation darstellt. Interne Servernamen, IP-Adressen und URLs allein gelten noch nicht als sensibel; Sie müssen nachweisen können, dass die Verwendung des internen Servernamens in einer bestimmten Datei oder einem bestimmten Codeteil ein Sicherheitsrisiko darstellt.

#### Anfragen zum Entfernen sensibler Daten sind _nicht_ angemessen für:
-  Anfragen an das Entfernen von Inhalten, die die Ihre Urheberrechte bzw. die Ihrer Organisation verletzen können. Wenn Sie Fragen dazu haben, wie GitHub mit urheberrechtlichen Angelegenheiten umgeht oder potenziell verletzende Inhalte melden möchten, lesen Sie bitte unsere [DMCA Takedown-Richtlinie](/articles/dmca-takedown-policy/). Der Prozess zum Entfernen vertraulicher Daten ist in der Regel nicht für das Entfernen vollständiger Dateien oder Repositorys bestimmt – nur für die spezifischen vertraulichen Daten in diesen Dateien. Während es Fälle geben kann, in denen Dateien vollständig mit sensiblen Daten gefüllt sind, müssen Sie das Sicherheitsrisiko für das Löschen solcher Dateien rechtfertigen, was die Bearbeitungszeit Ihrer Anfrage erhöhen kann.
- Markenrechtsstreitigkeiten. Wenn Sie Fragen dazu haben, wie GitHub markenrechtliche Angelegenheiten behandelt oder wenn Sie Inhalte, die Handelsmarken oder Dienstleistungsmarken Ihrer Organisation enthalten, melden möchten, lesen Sie bitte unsere [ Markenrichtlinie](/articles/github-trademark-policy/).
- Ledigliche Erwähnung der Identität, des Namens, der Marke, des Domain-Namens oder anderer Verweise auf Ihr Unternehmen in Dateien auf GitHub. Sie müssen in der Lage sein zu erklären, warum die Verwendung Ihrer Firmenidentität eine Bedrohung für die Sicherheitshaltung Ihres Unternehmens darstellt, bevor wir Maßnahmen im Rahmen dieser Richtlinie ergreifen.
- Datenschutzbeschwerden. Wenn Sie Bedenken bezüglich Ihrer eigenen Datenschutzes haben oder uns wegen eines Bedenken bezüglich des Datenschutzes im Namen Ihrer Mitarbeiter kontaktieren – zum Beispiel bezüglich privater E-Mail-Adressen oder anderer persönlicher Informationen — kontaktieren Sie uns bitte über [unser Kontaktformular zum Datenschutz](https://github.com/contact/privacy).
- Ganze Dateien oder Repositorys, die kein spezifisches Sicherheitsrisiko darstellen, aber von denen Sie glauben, dass sie anderweitig zu beanstanden sind.
- Inhalte, die unseren [Community-Richtlinien](/articles/github-community-guidelines/) unterliegen, wie Malware oder allgemeine Tools. Wenn Sie Fragen zu unseren Community-Richtlinien haben oder der Meinung sind, dass Inhalte auf GitHub gegen unsere Richtlinien verstoßen könnten, können Sie uns über {% data variables.contact.report_content %} kontaktieren.

### Was es zu beachten gibt

**Fragen Sie zunächst höflich nach.** Ein guter erster Schritt, bevor Sie uns eine Anfrage zum Entfernen von Daten senden, besteht darin, den Benutzer direkt zu kontaktieren. Benutzer haben möglicherweise Kontaktinformationen auf ihrer öffentlichen Profilseite oder in der README- oder Support-Datei des Repositorys aufgelistet, oder Sie können Kontakt aufnehmen, indem Sie ein Issue oder ein Pull Request im Repository erstellen. Dies ist nicht unbedingt erforderlich, wird aber gern gesehen.

**Keine Bots.** Sie sollten die Fakten bezüglich jeder Anfrage, die Sie senden, von einem geschulten Fachmann bewerten lassen. Wenn Sie Dritte mit diesen Aufgaben betrauen, stellen Sie sicher, dass Sie deren Arbeitsweise kennen, und stellen Sie sicher, dass sie keine automatisierten Bots verwenden, um Massenbeschwerden einzureichen. Diese Beschwerden enthalten häufig Daten, die keine Sicherheitsbedrohungen darstellen, und sie enthalten keine ausreichenden Erklärungen, was zusätzliche Rückfragen erfordert und zu Verzögerungen führt, selbst wenn die Beschwerde berechtigt ist.

**Senden Sie die richtige Anfrage.** Wir bieten dieses Verfahren zur Entfernung sensibler Daten nur als außergewöhnlichen Service für Inhalte mit hohem Risiko an. Wir können dieses Verfahren nicht verwenden, um andere Arten von Inhalten zu entfernen, wie potenziell verletzende Inhalte, und können während der Bearbeitung von Anfragen zum Entfernen von vertraulichen Inhalten nicht gleichzeitig andere Entfernungsanfragen bearbeiten. Wir können Ihnen schneller helfen, wenn Sie Ihre Anfragen zum Entfernen vertraulicher Daten getrennt von allen anderen Anfragen zur Entfernung potenziell verletzender Inhalte senden. Wenn Sie sich nicht sicher sind, ob es sich bei Ihrer Anfrage nur um sensible Daten oder auch um andere rechtliche Angelegenheiten handelt, wenden Sie sich bitte an einen Rechtsberater.

**Bearbeitungszeit.** Während wir uns bemühen, Anfragen zum Löschen von vertraulichen Daten so schnell wie möglich zu bearbeiten, kann es aufgrund der Anzahl der von uns zu bearbeitenden Anfragen einige Zeit dauern, bis Ihre Anfrage überprüft wird. Zusätzliche Anfragen oder mehrere Anfragen von zusätzlichen Kontaktpunkten können zu Verzögerungen führen.

### Wie funktioniert das eigentlich?

1. **Untersuchung durch den Beschwerdeführer.** Es ist Aufgabe des Antragstellers, eine eigene Untersuchung durchzuführen und uns die [Details mitzuteilen, die wir benötigen](#your-request-must-include) — das Wichtigste: eine Erklärung dafür, wie die Daten ein Sicherheitsrisiko darstellen. GitHub ist nicht in der Lage, im Namen einer Person oder Organisation nach sensiblen Daten zu suchen oder erste Ermittlungen durchzuführen.

2. **Der Beschwerdeführer sendet eine Anfrage zum Entfernen sensibler Daten.** Nach Durchführung einer Untersuchung verfasst und sendet der Beschwerdeführer [eine Anfrage zum Entfernen sensibler Daten](#sending-a-sensitive-data-removal-request) an GitHub. Wenn die Anfrage nicht ausreichend detailliert ist, um das Sicherheitsrisiko nachzuweisen und dass GitHub die Daten lokalisieren kann, antworten wir und bitten um weitere Informationen.

3. **GitHub fordert den Benutzer auf, Änderungen vorzunehmen.** In den meisten Fällen werden wir den Benutzer kontaktieren, der das Repository erstellt hat, und ihm die Möglichkeit geben, die in der Anfrage angegebenen sensiblen Daten zu löschen oder zu ändern oder die Forderung anzufechten.

4. **Der Benutzer benachrichtigt GitHub bezüglich der Änderungen** Wenn der Benutzer sich entscheidet, die angegebenen Änderungen vorzunehmen muss er uns dies innerhalb des ihm gewährten Zeitraums mitteilen. Ist dies nicht der Fall, werden wir das Repository deaktivieren. Wenn der Benutzer uns benachrichtigt, dass er Änderungen vorgenommen hat, werden wir überprüfen, ob die Änderungen vorgenommen wurden, und dann den Beschwerdeführer benachrichtigen.

  ODER

5. **Der Benutzer kann die Anfrage anfechten.** Wenn ein Benutzer der Meinung ist, dass es sich bei dem betreffenden Inhalt nicht um sensible Daten handelt, die dieser Richtlinie unterliegen, kann er dies anfechten. Wenn dies der Fall ist, überlassen wir es in der Regel dem Beschwerdeführer, den Benutzer zu kontaktieren und die Dinge direkt und im Rahmen der Vernunft mit ihm zu regeln.

6. **Der Beschwerdeführer überprüft die Änderungen.** Wenn der Benutzer Änderungen vornimmt, muss der Beschwerdeführer diese überprüfen. Sind die Änderungen nicht ausreichend, muss der Beschwerdeführer GitHub mit Einzelheiten darüber informieren, warum dies der Fall ist. GitHub kann das Repository deaktivieren oder dem Benutzer eine zusätzliche Möglichkeit gewähren, die Änderungen vorzunehmen.

7. **Der Benutzer kann um eine Verlängerung der Frist bitten, um Änderungen vorzunehmen.** Wenn der Benutzer seine Gelegenheit verpasst hat, die in der Anfrage angegebenen sensiblen Daten zu entfernen, können wir ihm auf Anfrage eine zusätzliche Frist von ca. 1 Werktag gewähren, um diese Änderungen vorzunehmen. In diesem Fall wird GitHub den Beschwerdeführer benachrichtigen.

#### Wie verhält es sich mit Forks? (oder was ist eine Fork?)
Eines der besten Features von GitHub ist die Möglichkeit für Benutzer, die Repositorys des anderen zu "forken". Was bedeutet das? Im Wesentlichen bedeutet dies, dass Benutzer eine Kopie eines Projekts auf GitHub in ihre eigenen Repositorys erstellen können. Wie es die Lizenz oder das Gesetz erlaubt, können die Benutzer dann Änderungen an diesem Fork vornehmen, um ihn entweder auf das Hauptprojekt zurückzuführen oder einfach als ihre eigene Variante eines Projekts beizubehalten. Jede dieser Kopien ist ein "[Fork](/articles/github-glossary/#fork)" des ursprünglichen Repositorys, das wiederum auch als "Übergeordnetes Element" des Fork bezeichnet wird.

GitHub will not automatically disable forks when disabling a parent repository. Dies liegt daran, dass Forks verschiedenen Benutzern gehören und möglicherweise in signifikanter Weise geändert wurden. GitHub führt keine unabhängigen Untersuchungen von Forks durch. Wir erwarten von den Antragstellern zur Entfernung von sensiblen Daten, diese Untersuchung selbst durchzuführen und, wenn sie der Meinung sind, dass die Forks ebenfalls sensible Daten enthalten, ausdrücklich Forks in ihren Antrag aufzunehmen.

### Senden einer Anfrage zum Entfernen sensibler Daten

Aufgrund der Art von Github gehosteten Inhalte (meist Softwarecode) und der Art und Weise, wie Inhalte verwaltet werden (mit Git), müssen Beschwerden so spezifisch wie möglich sein. Damit wir überprüfen können, ob ein Benutzer gemeldete sensible Daten vollständig entfernt hat, müssen wir genau wissen, wo wir suchen müssen.

Diese Richtlinien sollen die Bearbeitung von Anfragen zum Entfernen sensibler Daten so einfach wie möglich gestalten.

#### Ihre Anfrage muss Folgendes beinhalten:

1. Einen funktionierenden, anklickbaren Link zu jeder Datei, die sensible Daten enthält. (Beachten Sie, dass wir nicht mit Suchergebnissen, Beispielen oder Screenshots arbeiten können.)
2. Spezifische Zeilennummern in jeder Datei, die die sensiblen Daten enthält.
3. Eine kurze Beschreibung, wie jedes von Ihnen identifizierte Element ein Sicherheitsrisiko für Sie oder Ihre Organisation darstellt. ***Es ist wichtig, dass Sie erklären, wie die Daten konkret ein Sicherheitsrisiko darstellen, über die bloße Angabe, dass dies der Fall ist.***
4. Wenn Sie eine dritte Partei sind, die als Vertreter für eine Organisation handelt, die einem Sicherheitsrisiko ausgesetzt ist, fügen Sie eine Erklärung bei, dass Sie das Recht haben, im Namen dieser Organisation zu handeln.
5. OPTIONAL: Teilen Sie uns mit, ob Ihre Anfrage besonders dringlich ist und warum. Wir reagieren so schnell wie möglich auf alle Anfragen zum Entfernen sensibler Daten. Wenn diese Anforderung jedoch besonders zeitrelevant ist, z. B. eine sehr aktuelle Offenlegung von Anmeldeinformationen, erläutern Sie bitte, warum.

### So senden Sie Ihre Anfrage

Sie können Ihre Anfrage zur Entfernung sensibler Daten über unser [-Kontaktformular](https://support.github.com/contact) senden. Bitte fügen Sie eine Textversion Ihrer Anfrage in den Text Ihrer Nachricht ein. Das Senden Ihrer Anfrage in einem Anhang kann zu Verzögerungen bei der Bearbeitung führen.

### Streitfall

Wenn Sie eine Anfrage zum Entfernen sensibler Daten von uns erhalten haben, können Sie diese anfechten, indem Sie auf unsere E-Mail antworten und uns – so detailliert wie möglich – mitteilen, warum Sie der Meinung sind, dass es sich bei dem betreffenden Inhalt nicht um sensible Daten handelt, die dieser Richtlinie unterliegen.
