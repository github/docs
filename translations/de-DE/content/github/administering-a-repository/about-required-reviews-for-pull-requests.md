---
title: Informationen zu erforderlichen Reviews für Pull-Requests
intro: 'Erforderlichen Reviews stellen sicher, dass Pull Requests eine bestimmte Anzahl von genehmigenden Reviews erhalten, bevor Mitarbeiter Änderungen an einem geschützten Branch vornehmen können.'
product: '{% data reusables.gated-features.protected-branches %}'
redirect_from:
  - /articles/about-required-reviews-for-pull-requests
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

Wenn Du in Deinem Repository Schutzmaßnahmen für Branches erzwungen hast, kannst Du die erforderlichen Reviews einrichten. Weitere Informationen zum Erzwingen von Schutzmaßnahmen für Branches findest Du unter „[Geschützte Branches konfigurieren ](/articles/configuring-protected-branches/).“ For more information about setting up required reviews, see "[Enabling required reviews for pull requests](/articles/enabling-required-reviews-for-pull-requests)."

{% data reusables.pull_requests.required-reviews-for-prs-summary %}

Wenn eine Person mit *Administratorberechtigungen* die Option **Request changes** (Änderungen anfordern) in einem Review wählt, muss diese Person den Pull Request genehmigen, bevor er zusammengeführt werden kann. Wenn ein Reviewer, der Änderungen an einem Pull Request anfordert, nicht verfügbar ist, kann jeder Benutzer mit *Administratorberechtigungen* oder *Schreibberechtigung* für das Repository den blockierenden Review verwerfen. Weitere Informationen finden Sie unter „[Einen Pull-Request-Review ablehnen](/articles/dismissing-a-pull-request-review)“.

{% note %}

**Hinweis:** Repository-Administratoren können die Möglichkeit, Pull-Request-Reviews zu verwerfen, auf bestimmte Personen oder Teams beschränken. Weitere Informationen findest Du unter „[Erforderliche Reviews für Pull Requests aktivieren](/articles/enabling-required-reviews-for-pull-requests).“

{% endnote %}

Wenn Du einen Code-verändernden Commit zum Branch eines genehmigten Pull Request überträgst, kann die Genehmigung verworfen werden, wenn Repository-Administratoren das Verwerfen veralteter Reviews eingerichtet haben. Weitere Informationen findest Du unter „[Erforderliche Reviews für Pull Requests aktivieren](/articles/enabling-required-reviews-for-pull-requests).“ Dies gilt nicht, wenn Du nicht Code-verändernde Commits überträgst, beispielsweise das Zusammenführen des Basisbranch in den Branch Deines Pull Request. Weitere Informationen über den Basisbranch findest Du unter „[Über Pull Requests](/articles/about-pull-requests)."

Sofern erforderliche Reviews nicht so aufgesetzt sind, dass sie auch Repository-Administratoren einschließen, können Personen mit *admin* Berechtigung einen Pull Request unabhängig von Reviews anderer Administratoren zusammenführen.

{% data reusables.repositories.review-policy-overlapping-commits %}

Du kannst einen Pull Request erst dann in einen geschützten Branch zusammenführen, wenn ihn jemand mit *write*- oder *admin*-Berechtigung genehmigt hat. Bei ausstehenden oder abgelehnten Reviews erhältst Du eine Fehlermeldung:

```shell
remote: error: GH006: Protected branch update failed for refs/heads/main.
remote: error: Changes have been requested.
```
