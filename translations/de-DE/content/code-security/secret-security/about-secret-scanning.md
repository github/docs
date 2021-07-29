---
title: Über „secret scanning" (Durchsuchen nach Geheimnissen)
intro: '{% data variables.product.product_name %} durchsucht Repositorys nach bekannten Geheimnis-Typen, um die betrügerische Verwendung von Geheimnissen zu verhindern, die versehentlich freigegeben wurden.'
product: '{% data reusables.gated-features.secret-scanning %}'
redirect_from:
  - /github/administering-a-repository/about-token-scanning
  - /articles/about-token-scanning
  - /articles/about-token-scanning-for-private-repositories
  - /github/administering-a-repository/about-secret-scanning
versions:
  free-pro-team: '*'
  enterprise-server: '>=3.0'
  github-ae: '*'
type: overview
topics:
  - Secret scanning
  - Advanced Security
---

{% data reusables.secret-scanning.beta %}
{% data reusables.secret-scanning.enterprise-enable-secret-scanning %}

Wenn Dein Projekt mit einem externen Dienst kommuniziert, verwende allenfalls ein Token oder einen privaten Schlüssel für die Authentifizierung. Token und private Schlüssel sind Beispiele für Geheimnisse, die ein Dienstanbieter ausstellen kann. Wenn Du ein Geheimnis in ein Repository einfügst, kann jedermann mit Lesezugriff auf das Repository das Geheimnis verwenden, um mit Deinen Privilegien auf den externen Dienst zuzugreifen. Wir empfehlen, dass Du Geheimnisse an einem dedizierten, sicheren Ort außerhalb Deines Projekt-Repositorys speicherst.

{% data variables.product.prodname_secret_scanning_caps %} will scan your entire Git history on all branches present in your {% data variables.product.prodname_dotcom %} repository for any secrets. Service providers can partner with {% data variables.product.company_short %} to provide their secret formats for scanning.{% if currentVersion == "free-pro-team@latest" %} For more information, see "[Secret scanning partner program](/developers/overview/secret-scanning-partner-program)."
{% endif %}

{% data reusables.secret-scanning.about-secret-scanning %}

{% if currentVersion == "free-pro-team@latest" %}
### Informationen über {% data variables.product.prodname_secret_scanning %} für öffentliche Repositorys

{% data variables.product.prodname_secret_scanning_caps %} is automatically enabled on public repositories. Wenn Du in ein öffentliches Repository überträgst, wird {% data variables.product.product_name %} den Inhalt des Commit auf Geheimnisse durchsuchen. Wenn Du ein privates Repository auf öffentlich umstellst, wird {% data variables.product.product_name %} das gesamte Repository nach Geheimnissen durchsuchen.

Wenn {% data variables.product.prodname_secret_scanning %} einen Satz von Anmeldeinformationen erkennt, benachrichtigen wir den Dienstanbieter, der das Geheimnis ausgegeben hat. Der Dienstanbieter prüft die Anmeldeinformationen und entscheidet dann, ob er das Geheimnis widerrufen, ein neues Geheimnis ausstellen oder sich direkt an Dich wenden soll, was von den damit verbundenen Risiken für Dich oder den Dienstleister abhängt. For an overview of how we work with token-issuing partners, see "[Secret scanning partner program](/developers/overview/secret-scanning-partner-program)."

{% data variables.product.product_name %} durchsucht derzeit öffentliche Repositorys nach Geheimnissen, die von den folgenden Dienstanbietern veröffentlicht wurden.

{% data reusables.secret-scanning.partner-secret-list-public-repo %}

### Informationen zu {% data variables.product.prodname_secret_scanning %} für private Repositorys
{% endif %}

{% if currentVersion ver_gt "enterprise-server@2.22" or currentVersion == "github-ae@latest" %}
### About {% data variables.product.prodname_secret_scanning %} on {% data variables.product.product_name %}

{% data variables.product.prodname_secret_scanning_caps %} is available on all organization-owned repositories as part of {% data variables.product.prodname_GH_advanced_security %}. It is not available on user-owned repositories.
{% endif %}

If you're a repository administrator or an organization owner, you can enable {% data variables.product.prodname_secret_scanning %} for {% if currentVersion == "free-pro-team@latest" %} private{% endif %} repositories that are owned by organizations. You can enable  {% data variables.product.prodname_secret_scanning %} for all your repositories, or for all new repositories within your organization.{% if currentVersion == "free-pro-team@latest" %} {% data variables.product.prodname_secret_scanning_caps %} is not available for user-owned private repositories.{% endif %} For more information, see "[Managing security and analysis settings for your repository](/github/administering-a-repository/managing-security-and-analysis-settings-for-your-repository)" and "[Managing security and analysis settings for your organization](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization)."

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.1" or currentVersion == "github-ae@next" %}You can also define custom {% data variables.product.prodname_secret_scanning %} patterns that only apply to your repository or organization. For more information, see "[Defining custom patterns for {% data variables.product.prodname_secret_scanning %}](/code-security/secret-security/defining-custom-patterns-for-secret-scanning)."{% endif %}

When you push commits to a{% if currentVersion == "free-pro-team@latest" %} private{% endif %} repository with {% data variables.product.prodname_secret_scanning %} enabled, {% data variables.product.prodname_dotcom %} scans the contents of the commits for secrets.

When {% data variables.product.prodname_secret_scanning %} detects a secret in a{% if currentVersion == "free-pro-team@latest" %} private{% endif %} repository, {% data variables.product.prodname_dotcom %} generates an alert.

- {% data variables.product.prodname_dotcom %} sendet E-Mail-Warnungen zu den Repository-Administratoren und den Organisations-Inhabern.
{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.0" or currentVersion == 'github-ae@next' %}
- {% data variables.product.prodname_dotcom %} sends an email alert to the contributor who committed the secret to the repository, with a link to the related {% data variables.product.prodname_secret_scanning %} alert. The commit author can then view the alert in the repository, and resolve the alert.
{% endif %}
- {% data variables.product.prodname_dotcom %} displays an alert in the repository.{% if currentVersion == "enterprise-server@3.0" %} For more information, see "[Managing alerts from {% data variables.product.prodname_secret_scanning %}](/github/administering-a-repository/managing-alerts-from-secret-scanning)."{% endif %}

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.0" or currentVersion == 'github-ae@next' %}
For more information about viewing and resolving {% data variables.product.prodname_secret_scanning %} alerts, see "[Managing alerts from {% data variables.product.prodname_secret_scanning %}](/github/administering-a-repository/managing-alerts-from-secret-scanning)."{% endif %}

Repository administrators and organization owners can grant users and teams access to {% data variables.product.prodname_secret_scanning %} alerts. For more information, see "[Managing security and analysis settings for your repository](/github/administering-a-repository/managing-security-and-analysis-settings-for-your-repository#granting-access-to-security-alerts)."

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.0" %}
To monitor results from {% data variables.product.prodname_secret_scanning %} across your private repositories or your organization, you can use the {% data variables.product.prodname_secret_scanning %} API. For more information about API endpoints, see "[{% data variables.product.prodname_secret_scanning_caps %}](/rest/reference/secret-scanning)."{% endif %}

{% data variables.product.prodname_dotcom %}  currently scans{% if currentVersion == "free-pro-team@latest" %} private{% endif %} repositories for secrets issued by the following service providers.

{% data reusables.secret-scanning.partner-secret-list-private-repo %}

{% if currentVersion ver_lt "enterprise-server@3.2" or currentVersion == "github-ae@latest" %}
{% note %}

**Hinweis:** {% data variables.product.prodname_secret_scanning_caps %} erlaubt es Dir derzeit nicht, Deine eigenen Muster zur Erkennung von Geheimnissen zu definieren.

{% endnote %}
{% endif %}

### Weiterführende Informationen

- "[Securing your repository](/code-security/getting-started/securing-your-repository)"
- "[Keeping your account and data secure](/github/authenticating-to-github/keeping-your-account-and-data-secure)"
