---
title: GitHub Private Information Removal Policy
redirect_from:
  - /articles/github-sensitive-data-removal-policy
  - /github/site-policy/github-sensitive-data-removal-policy
versions:
  free-pro-team: '*'
topics:
  - policy
  - legal
---

We offer this private information removal process as an exceptional service only for high-risk content that violates [GitHub's Terms of Service](/github/site-policy/github-acceptable-use-policies#3-conduct-restrictions), such as when your security is at risk from exposed access credentials. This guide describes the information GitHub needs from you in order to process a request to remove private information from a repository.

### What is Private Information?

For the purposes of this document, “private information” refers to content that (i) should have been kept confidential, *and* (ii) whose public availability poses a specific or targeted security risk to you or your organization.

"Security risk" refers to a situation involving exposure to physical danger, identity theft, or increased likelihood of unauthorized access to physical or network facilities.

#### Private information removal requests are appropriate for:
- Zugangsdaten wie Benutzernamen in Kombination mit Passwörtern, Zugriffstoken oder andere geheime Schlüssel, die den Zugriff auf den Server, das Netzwerk oder die Domain Ihrer Organisation gewähren können.
- AWS-Token und ähnliche Zugangsdaten, die einem Dritten in Ihrem Namen Zugriff gewähren. Sie müssen nachweisen können, dass das Token tatsächlich Ihnen gehört.
- Documentation (such as network diagrams or architecture) that poses a specific security risk for an organization.
- [Information](/github/site-policy/github-community-guidelines#doxxing-and-invasion-of-privacy) related to, and posing a security risk to, you as an individual (such as social security numbers or other government identification numbers).

#### Private information removal requests are _not_ appropriate for:
- Internal server names, IP addresses, and URLs, on their own. You must be able to show that their use in a particular file or piece of code poses a security threat.
- Ledigliche Erwähnung der Identität, des Namens, der Marke, des Domain-Namens oder anderer Verweise auf Ihr Unternehmen in Dateien auf GitHub. You must be able to articulate why a use of your company's identity is a threat to your company's security posture.
- Ganze Dateien oder Repositorys, die kein spezifisches Sicherheitsrisiko darstellen, aber von denen Sie glauben, dass sie anderweitig zu beanstanden sind.
- Anfragen an das Entfernen von Inhalten, die die Ihre Urheberrechte bzw. die Ihrer Organisation verletzen können. Wenn Sie Fragen dazu haben, wie GitHub mit urheberrechtlichen Angelegenheiten umgeht oder potenziell verletzende Inhalte melden möchten, lesen Sie bitte unsere [DMCA Takedown-Richtlinie](/articles/dmca-takedown-policy/). The private information removal process is generally not intended for the removal of full files or repositories — only for the specific pieces of private information in those files. While there may be cases where files are filled entirely with private information, you must justify the security risk for the removal of such files, and this may increase the time required to process your request.
- Markenrechtsstreitigkeiten. Wenn Sie Fragen dazu haben, wie GitHub markenrechtliche Angelegenheiten behandelt oder wenn Sie Inhalte, die Handelsmarken oder Dienstleistungsmarken Ihrer Organisation enthalten, melden möchten, lesen Sie bitte unsere [ Markenrichtlinie](/articles/github-trademark-policy/).
- Datenschutzbeschwerden. If you wish to access, transfer, change, or delete your personal information on GitHub, please contact us via [our Privacy contact form](https://github.com/contact/privacy).
- Inhalte, die unseren [Community-Richtlinien](/articles/github-community-guidelines/) unterliegen, wie Malware oder allgemeine Tools. Wenn Sie Fragen zu unseren Community-Richtlinien haben oder der Meinung sind, dass Inhalte auf GitHub gegen unsere Richtlinien verstoßen könnten, können Sie uns über {% data variables.contact.report_content %} kontaktieren.

### Was es zu beachten gibt

**Fragen Sie zunächst höflich nach.** Ein guter erster Schritt, bevor Sie uns eine Anfrage zum Entfernen von Daten senden, besteht darin, den Benutzer direkt zu kontaktieren. Benutzer haben möglicherweise Kontaktinformationen auf ihrer öffentlichen Profilseite oder in der README- oder Support-Datei des Repositorys aufgelistet, oder Sie können Kontakt aufnehmen, indem Sie ein Issue oder ein Pull Request im Repository erstellen. Dies ist nicht unbedingt erforderlich, wird aber gern gesehen.

**Keine Bots.** Sie sollten die Fakten bezüglich jeder Anfrage, die Sie senden, von einem geschulten Fachmann bewerten lassen. Wenn Sie Dritte mit diesen Aufgaben betrauen, stellen Sie sicher, dass Sie deren Arbeitsweise kennen, und stellen Sie sicher, dass sie keine automatisierten Bots verwenden, um Massenbeschwerden einzureichen. Diese Beschwerden enthalten häufig Daten, die keine Sicherheitsbedrohungen darstellen, und sie enthalten keine ausreichenden Erklärungen, was zusätzliche Rückfragen erfordert und zu Verzögerungen führt, selbst wenn die Beschwerde berechtigt ist.

**Send In The Correct Request.** As noted above, we offer this private information removal process as an exceptional service only for high-risk content. We are not able to use this process to remove other kinds of content, such as potentially infringing content, and we are not able to process any other kinds of removal requests simultaneously while processing private information removal requests. We will be able to help you more quickly if you send in your private information removal requests separately from any requests to remove potentially infringing content. If you are unsure whether your request involves only private information or also involves other legal matters, please consult legal counsel.

**Processing Time.** While we do process private information removal requests as quickly as possible, due to the volume of requests we process, it may take some time for your request to be reviewed. Zusätzliche Anfragen oder mehrere Anfragen von zusätzlichen Kontaktpunkten können zu Verzögerungen führen.

### Wie funktioniert das eigentlich?

1. **Untersuchung durch den Beschwerdeführer.** Es ist Aufgabe des Antragstellers, eine eigene Untersuchung durchzuführen und uns die [Details mitzuteilen, die wir benötigen](#your-request-must-include) — das Wichtigste: eine Erklärung dafür, wie die Daten ein Sicherheitsrisiko darstellen. GitHub is not in a position to search for or make initial determinations about private information on any individual's or organization's behalf.

2. **Complainant Sends a Private Information Removal Request.** After conducting an investigation, the complainant prepares and [sends a private information removal request](#sending-a-private-information-removal-request) to GitHub. Wenn die Anfrage nicht ausreichend detailliert ist, um das Sicherheitsrisiko nachzuweisen und dass GitHub die Daten lokalisieren kann, antworten wir und bitten um weitere Informationen.

3. **GitHub Asks User to Make Changes.** In most cases, we will contact the user who created the repository and give them an opportunity to delete or modify the private information specified in the request or to dispute the claim.

4. **Der Benutzer benachrichtigt GitHub bezüglich der Änderungen** Wenn der Benutzer sich entscheidet, die angegebenen Änderungen vorzunehmen muss er uns dies innerhalb des ihm gewährten Zeitraums mitteilen. Ist dies nicht der Fall, werden wir das Repository deaktivieren. Wenn der Benutzer uns benachrichtigt, dass er Änderungen vorgenommen hat, werden wir überprüfen, ob die Änderungen vorgenommen wurden, und dann den Beschwerdeführer benachrichtigen.

  ODER

5. **User May Dispute the Request.** If a user believes the content in question is not private information subject to this Policy, they may dispute it. Wenn dies der Fall ist, überlassen wir es in der Regel dem Beschwerdeführer, den Benutzer zu kontaktieren und die Dinge direkt und im Rahmen der Vernunft mit ihm zu regeln.

6. **Der Beschwerdeführer überprüft die Änderungen.** Wenn der Benutzer Änderungen vornimmt, muss der Beschwerdeführer diese überprüfen. Sind die Änderungen nicht ausreichend, muss der Beschwerdeführer GitHub mit Einzelheiten darüber informieren, warum dies der Fall ist. GitHub kann das Repository deaktivieren oder dem Benutzer eine zusätzliche Möglichkeit gewähren, die Änderungen vorzunehmen.

7. **User May Request an Additional Window to Make Changes.** If the user missed their opportunity to remove the private information specified in the notice, we may allow them an additional window of approximately 1 business day, upon request, to make those changes. In diesem Fall wird GitHub den Beschwerdeführer benachrichtigen.

#### Wie verhält es sich mit Forks? (oder was ist eine Fork?)
Eines der besten Features von GitHub ist die Möglichkeit für Benutzer, die Repositorys des anderen zu "forken". Was bedeutet das? Im Wesentlichen bedeutet dies, dass Benutzer eine Kopie eines Projekts auf GitHub in ihre eigenen Repositorys erstellen können. Wie es die Lizenz oder das Gesetz erlaubt, können die Benutzer dann Änderungen an diesem Fork vornehmen, um ihn entweder auf das Hauptprojekt zurückzuführen oder einfach als ihre eigene Variante eines Projekts beizubehalten. Jede dieser Kopien ist ein "[Fork](/articles/github-glossary/#fork)" des ursprünglichen Repositorys, das wiederum auch als "Übergeordnetes Element" des Fork bezeichnet wird.

GitHub will not automatically disable forks when disabling a parent repository. Dies liegt daran, dass Forks verschiedenen Benutzern gehören und möglicherweise in signifikanter Weise geändert wurden. GitHub führt keine unabhängigen Untersuchungen von Forks durch. We expect those sending private information removal requests to conduct that investigation and, if they believe that the forks also contain private information, expressly include forks in their request.

If at the time that you submitted your notice, you identified all existing forks of that repository, we would process a valid claim against all forks in that network at the time we process the notice. We would do this given the likelihood that all newly created forks would contain the same content. In addition, if the reported network that contains the reported content is larger than one hundred (100) repositories and thus would be difficult to review in its entirety, we may consider disabling the entire network if you state in your notice that, based on the representative number of forks you have reviewed, you believe that all or most of the forks contain the content reported in the parent repository.

### Sending A Private Information Removal Request

Aufgrund der Art von Github gehosteten Inhalte (meist Softwarecode) und der Art und Weise, wie Inhalte verwaltet werden (mit Git), müssen Beschwerden so spezifisch wie möglich sein. In order for us to verify that a user has removed reported private information completely, we need to know exactly where to look.

These guidelines are designed to make the processing of requests to remove private information as straightforward as possible.

#### Ihre Anfrage muss Folgendes beinhalten:

1. A working, clickable link to each file containing private information. (Beachten Sie, dass wir nicht mit Suchergebnissen, Beispielen oder Screenshots arbeiten können.)
2. Specific line numbers within each file containing the private information.
3. Eine kurze Beschreibung, wie jedes von Ihnen identifizierte Element ein Sicherheitsrisiko für Sie oder Ihre Organisation darstellt. ***Es ist wichtig, dass Sie erklären, wie die Daten konkret ein Sicherheitsrisiko darstellen, über die bloße Angabe, dass dies der Fall ist.***
4. Wenn Sie eine dritte Partei sind, die als Vertreter für eine Organisation handelt, die einem Sicherheitsrisiko ausgesetzt ist, fügen Sie eine Erklärung bei, dass Sie das Recht haben, im Namen dieser Organisation zu handeln.
5. OPTIONAL: Teilen Sie uns mit, ob Ihre Anfrage besonders dringlich ist und warum. We respond to all private information removal requests as quickly as possible. Wenn diese Anforderung jedoch besonders zeitrelevant ist, z. B. eine sehr aktuelle Offenlegung von Anmeldeinformationen, erläutern Sie bitte, warum.

### So senden Sie Ihre Anfrage

You can submit your request to remove private information via our [contact form](https://support.github.com/contact?tags=docs-private-information). Bitte fügen Sie eine Textversion Ihrer Anfrage in den Text Ihrer Nachricht ein. Das Senden Ihrer Anfrage in einem Anhang kann zu Verzögerungen bei der Bearbeitung führen.

### Streitfall

If you received a private information removal request from us, you can dispute it by replying to our email and letting us know — in as much detail as possible — why you think the content in question is not private information subject to this Policy.
