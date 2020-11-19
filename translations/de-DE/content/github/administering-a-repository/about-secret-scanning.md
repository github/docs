---
title: Über „secret scanning" (Durchsuchen nach Geheimnissen)
intro: '{% data variables.product.product_name %} durchsucht Repositorys nach bekannten Geheimnis-Typen, um die betrügerische Verwendung von Geheimnissen zu verhindern, die versehentlich freigegeben wurden.'
product: '{% data reusables.gated-features.secret-scanning %}'
redirect_from:
  - /github/administering-a-repository/about-token-scanning
  - /articles/about-token-scanning
  - /articles/about-token-scanning-for-private-repositories
versions:
  free-pro-team: '*'
---

Wenn Dein Projekt mit einem externen Dienst kommuniziert, verwende allenfalls ein Token oder einen privaten Schlüssel für die Authentifizierung. Token und private Schlüssel sind Beispiele für Geheimnisse, die ein Dienstanbieter ausstellen kann. Wenn Du ein Geheimnis in ein Repository einfügst, kann jedermann mit Lesezugriff auf das Repository das Geheimnis verwenden, um mit Deinen Privilegien auf den externen Dienst zuzugreifen. Wir empfehlen, dass Du Geheimnisse an einem dedizierten, sicheren Ort außerhalb Deines Projekt-Repositorys speicherst.

Wenn jemand ein Geheimnis von einem {% data variables.product.company_short %}-Partner in ein öffentliches oder privates Repository einfügt, dann kann {% data variables.product.prodname_secret_scanning %} das Geheimnis entdecken und Dir helfen, die Auswirkungen des Lecks zu mildern.

Dienstleister können mit {% data variables.product.company_short %} zusammenarbeiten, um ihre geheimen Formate zum Durchsuchen bereitzustellen. For more information, see "[Secret scanning](/partnerships/secret-scanning)."

### Informationen über {% data variables.product.prodname_secret_scanning %} für öffentliche Repositorys

Wenn Du in ein öffentliches Repository überträgst, wird {% data variables.product.product_name %} den Inhalt des Commit auf Geheimnisse durchsuchen. Wenn Du ein privates Repository auf öffentlich umstellst, wird {% data variables.product.product_name %} das gesamte Repository nach Geheimnissen durchsuchen.

Wenn {% data variables.product.prodname_secret_scanning %} einen Satz von Anmeldeinformationen erkennt, benachrichtigen wir den Dienstanbieter, der das Geheimnis ausgegeben hat. Der Dienstanbieter prüft die Anmeldeinformationen und entscheidet dann, ob er das Geheimnis widerrufen, ein neues Geheimnis ausstellen oder sich direkt an Dich wenden soll, was von den damit verbundenen Risiken für Dich oder den Dienstleister abhängt.

{% data variables.product.product_name %} durchsucht derzeit öffentliche Repositorys nach Geheimnissen, die von den folgenden Dienstanbietern veröffentlicht wurden.

- Adafruit
- Alibaba Cloud
- Amazon Web Services (AWS)
- Atlassian
- Azure
- Clojars
- CloudBees CodeShip
- Databricks
- Datadog
- Discord
- Dropbox
- Dynatrace
- Finicity
- Frame.io
- GitHub
- GoCardless
- Google Cloud
- Hashicorp Terraform
- Hubspot
- Mailchimp
- Mailgun
- MessageBird
- npm
- NuGet
- Palantir
- Plivo
- Postman
- Proctorio
- Pulumi
- Samsara
- Shopify
- Slack
- SSLMate
- Stripe
- Tencent Cloud
- Twilio

### Informationen zu {% data variables.product.prodname_secret_scanning %} für private Repositorys

{% data reusables.secret-scanning.beta %}

Wenn Du Commits in ein privates Repository überträgst, das {% data variables.product.prodname_secret_scanning %} aktiviert hat, wird {% data variables.product.product_name %} den Inhalt des Commits nach Geheimnissen durchsuchen.

Wenn {% data variables.product.prodname_secret_scanning %} ein Geheimnis in einem privaten Repository entdeckt, wird {% data variables.product.prodname_dotcom %} Warnungen senden.

- {% data variables.product.prodname_dotcom %} sendet E-Mail-Warnungen zu den Repository-Administratoren und den Organisations-Inhabern.

- {% data variables.product.prodname_dotcom %} zeigt eine Warnung im Repository an. Weitere Informationen findest Du unter „[Warnungen von {% data variables.product.prodname_secret_scanning %} verwalten](/github/administering-a-repository/managing-alerts-from-secret-scanning)."

{% data variables.product.product_name %} durchsucht derzeit private Repositorys nach Geheimnissen, die von den folgenden Dienstanbietern veröffentlicht wurden.

- Adafruit
- Alibaba Cloud
- Amazon Web Services (AWS)
- Atlassian
- Azure
- Clojars
- CloudBees CodeShip
- Databricks
- Discord
- Dropbox
- Dynatrace
- Finicity
- Frame.io
- GitHub
- GoCardless
- Google Cloud
- Hashicorp Terraform
- Hubspot
- Mailchimp
- Mailgun
- npm
- NuGet
- Palantir
- Postman
- Proctorio
- Pulumi
- Samsara
- Shopify
- Slack
- SSLMate
- Stripe
- Tencent Cloud
- Twilio

{% note %}

**Hinweis:** {% data variables.product.prodname_secret_scanning_caps %} erlaubt es Dir derzeit nicht, Deine eigenen Muster zur Erkennung von Geheimnissen zu definieren.

{% endnote %}

### Weiterführende Informationen

- "[About securing your repository](/github/administering-a-repository/about-securing-your-repository)"
- „[Ihr Konto und Ihre Daten schützen](/github/authenticating-to-github/keeping-your-account-and-data-secure)“
