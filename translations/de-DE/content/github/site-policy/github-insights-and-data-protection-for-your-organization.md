---
title: GitHub Insights und Datenschutz für Ihre Organisation
intro: '{% data variables.product.prodname_insights %} analysiert Ihre {% data variables.product.prodname_ghe_server %}-Daten. Diese Daten können personenbezogene Daten von Personen in Ihrer Organisation umfassen, die möglicherweise das Recht haben zu verstehen, wie diese personenbezogenen Daten verwendet werden.'
product: '{% data reusables.gated-features.github-insights %}'
redirect_from:
  - /github/installing-and-configuring-github-insights/github-insights-and-data-protection-for-your-organization
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

Weitere Informationen zu den Bedingungen für {% data variables.product.prodname_insights %} finden Sie in Ihrer {% data variables.product.prodname_ghe_one %} Abonnementvereinbarung.

Zur Klarstellung: Keine der vorstehenden Informationen sollte als Rechtsberatung durch {% data variables.product.prodname_dotcom %} angesehen werden. Sie sind für die Sicherstellung Ihrer eigenen rechtlichen Analyse der hier bereitgestellten Informationen sowie für die Einhaltung der Datenschutzgesetze verantwortlich. Es liegt in Ihrem alleinigen Ermessen, ob Sie {% data variables.product.prodname_insights %} zur Verarbeitung der Daten Ihrer Mitarbeiter bzw. Benutzer verwenden, und wenn Sie dies tun, sind Sie allein dafür verantwortlich, diese Verarbeitung in Übereinstimmung mit dem geltenden Recht durchzuführen.

### Die Rollen und Verantwortlichkeiten der Organisation

Bei der Verwendung {% data variables.product.prodname_insights %} ist Ihre Organisation der Datenverantwortliche, da Ihre Organisation bestimmt, ob, wie und warum {% data variables.product.prodname_insights %} personenbezogene Daten einer Person verarbeitet. Ihre Organisation ist allein dafür verantwortlich, dass Sie alle anwendbaren Gesetze bei der Datenverarbeitung mit {% data variables.product.prodname_insights %} einhalten.

### Datenschutzempfehlungen

Sie haben die volle Kontrolle darüber vor Beginn der Verwendung von {% data variables.product.prodname_insights %} zu bestimmen, welche Metriken, Berichte, Repositorys und Mitwirkenden enthalten sein sollen. Die Daten, die Sie mit {% data variables.product.prodname_insights %} verarbeiten, können nur von Ihrer Installation von {% data variables.product.prodname_ghe_server %} abgerufen werden. Berücksichtigen Sie die Ausgewogenheit zwischen den Risiken und den Vorteilen der Analyse personenbezogener Daten.

- **Entwickeln Sie einen klaren Analyseplan**: Sie müssen genau verstehen, was Sie analysieren möchten und warum und überlegen Sie dann, wie {% data variables.product.prodname_insights %} Ihnen helfen kann, diese Antworten zu finden.

- **Erwägen Sie eine Folgenabschätzung zum Datenschutz**: Wenn Ihre vorgeschlagene Verwendung von {% data variables.product.prodname_insights %} die Verarbeitung personenbezogener Daten beinhaltet, erwägen Sie, eine Bewertung der Auswirkungen auf den Datenschutz oder eine formelle rechtliche Analyse Ihrer geplanten Nutzung durchzuführen.

### Bestimmen Sie, welche Daten verwendet werden sollen

- **Bestimmen Sie, welche Repositorys enthalten werden sollen**: Bevor Sie mit einer Analyse in {% data variables.product.prodname_insights %} beginnen, überlegen Sie, welche Repositorys enthalten sein sollen. Administratoren können Beim Hinzufügen von Organisationen Repositorys einschließen und Repositorys jederzeit aktivieren und deaktivieren. Weitere Informationen zum Hinzufügen von Organisationen zu {% data variables.product.prodname_insights %} finden Sie unter "[Organisationen verwalten](/insights/installing-and-configuring-github-insights/managing-organizations). Weitere Informationen zum Aktivieren und Deaktivieren von Repositorys finden Sie unter "[Repositorys verwalten](/insights/installing-and-configuring-github-insights/managing-repositories)."

- **Legen Sie fest, welche Metriken und Berichte eingeschlossen werden sollen**: Administratoren können Metriken und Berichte, die für alle Benutzer verfügbar sind, jederzeit aktivieren und deaktivieren. Administratoren bestimmen die {% data variables.product.prodname_insights %}-Daten, auf die Benutzer in Ihrer Installation von {% data variables.product.prodname_ghe_server %} Zugriff haben. Weitere Informationen finden Sie unter „[Verwalten verfügbarer Metriken und Berichte](/insights/installing-and-configuring-github-insights/managing-available-metrics-and-reports)."

- **Legen Sie fest, welche Mitwirkenden ** aufgenommen werden sollen: Administratoren können die Verarbeitung der Daten eines bestimmten Mitwirkenden in den Metriken und Berichten deaktivieren. Weitere Informationen zur Datenverwaltung von Mitwirkenden finden Sie unter "[Verwalten von Mitwirkenden und Teams](/insights/installing-and-configuring-github-insights/managing-contributors-and-teams)."

### Benutzerrechte

Nach verschiedenen Datenschutzbestimmungen, wie der Datenschutz-Grundverordnung (DSGVO), haben Benutzer möglicherweise das Recht, den Ausschluss von der Verarbeitung, dem Zugriff und der Berichtigung ihrer personenbezogenen Daten oder deren Löschung zu verlangen. Als Datenverantwortlicher sollte Ihre Organisation bewerten, ob eine bestimmte Benutzeranfrage gerechtfertigt ist, und gegebenenfalls Maßnahmen ergreifen, um die Anfrage zu erfüllen.

- **Ausschluss der Datenverarbeitung**: Benutzer haben möglicherweise das Recht, dass ihre personenbezogenen Daten von der Verarbeitung ausgeschlossen werden. Administratoren haben die Möglichkeit, die Daten eines Mitwirkenden von der Verarbeitung in {% data variables.product.prodname_insights %} zu entfernen, sodass die resultierenden Berichte und Metriken die Daten des Mitwirkenden entsprechend ausschließen. Weitere Informationen finden Sie unter „[Verwalten von Mitwirkenden und Teams](/insights/installing-and-configuring-github-insights/managing-contributors-and-teams)“.

- **Zugang**: Benutzer haben möglicherweise das Recht, Einsicht in die personenbezogenen Daten zu verlangen, die aktuell verarbeitet werden. Jede Metrik und jeder Bericht enthält eine detaillierte Beschreibung der Verarbeitung personenbezogener Daten. Weitere Informationen finden Sie unter „[Verfügbare Metriken mit {% data variables.product.prodname_insights %}](/insights/exploring-your-usage-of-github-enterprise/metrics-available-with-github-insights)“. Rohdaten sind über das {% data variables.product.prodname_enterprise %} API verfügbar. Ihre Organisation ist für alle Entscheidungen zur Verarbeitung personenbezogener Daten und für die Erfüllung solcher Anfragen verantwortlich.

- **Korrektur und Löschung**: Benutzer haben ggf. das Recht, ihre personenbezogenen Daten zu berichtigen oder zu löschen. Die in {% data variables.product.prodname_insights %} verwendeten Daten werden von den vorhandenen Daten abgeleitet, die Sie in Ihrer {% data variables.product.prodname_ghe_server %} Installation hinzufügen oder generieren. Die Korrektur und Löschung sollten dem bestehenden Prozess Ihrer Organisation zum Korrigieren und Löschen von Daten in {% data variables.product.prodname_ghe_server %}.

- **Transparenz in Bezug auf die Verarbeitung**: Jede Metrik und jeder Bericht enthält eine detaillierte Beschreibung, welche persönlichen Daten verarbeitet werden. Weitere Informationen finden Sie unter „[Verfügbare Metriken mit {% data variables.product.prodname_insights %}](/insights/exploring-your-usage-of-github-enterprise/metrics-available-with-github-insights)“.
