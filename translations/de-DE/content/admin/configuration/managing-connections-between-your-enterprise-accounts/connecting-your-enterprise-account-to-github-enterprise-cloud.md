---
title: Connecting your enterprise account to GitHub Enterprise Cloud
shortTitle: Connect enterprise accounts
intro: 'Nach der Aktivierung von {% data variables.product.prodname_github_connect %} können Sie bestimmte Features und Workflows zwischen {% data variables.product.product_location %} und {% data variables.product.prodname_ghe_cloud %} freigeben.'
redirect_from:
  - /enterprise/admin/guides/developer-workflow/connecting-github-enterprise-to-github-com/
  - /enterprise/admin/guides/developer-workflow/connecting-github-enterprise-server-to-github-com
  - /enterprise/admin/developer-workflow/connecting-github-enterprise-server-to-githubcom/
  - /enterprise/admin/installation/connecting-github-enterprise-server-to-github-enterprise-cloud
  - /enterprise/admin/configuration/connecting-github-enterprise-server-to-github-enterprise-cloud
  - /admin/configuration/connecting-github-enterprise-server-to-github-enterprise-cloud
  - /admin/configuration/managing-connections-between-github-enterprise-server-and-github-enterprise-cloud/connecting-github-enterprise-server-to-github-enterprise-cloud
permissions: 'Enterprise owners who are also owners of a {% data variables.product.prodname_ghe_cloud %} organization or enterprise account can enable {% data variables.product.prodname_github_connect %}.'
versions:
  ghes: '*'
  ghae: next
type: how_to
topics:
  - Enterprise
  - GitHub Connect
  - Infrastructure
  - Networking
---

{% data reusables.github-connect.beta %}

## Informationen zu {% data variables.product.prodname_github_connect %}

Zum Aktivieren von {% data variables.product.prodname_github_connect %} musst Du die Verbindung sowohl in {% data variables.product.product_location %} als auch in Deiner Organisation oder Deinem Unternehmenskonto in der {% data variables.product.prodname_ghe_cloud %} konfigurieren.

{% ifversion ghes %}
Zum Konfigurieren einer Verbindung muss Ihre Proxykonfiguration die Konnektivität mit `github.com` und `api.github.com` zulassen. Weitere Informationen finden Sie unter „[Ausgehenden Webproxyserver konfigurieren](/enterprise/{{ currentVersion }}/admin/guides/installation/configuring-an-outbound-web-proxy-server)“.
{% endif %}

Nach der Aktivierung von {% data variables.product.prodname_github_connect %} können Sie Features, beispielsweise die gemeinsame Suche und einheitliche Beiträge, aktivieren. For more information about all of the features available, see "[Managing connections between your enterprise accounts](/admin/configuration/managing-connections-between-your-enterprise-accounts)."

Wenn Sie zwischen {% data variables.product.product_location %} und {% data variables.product.prodname_ghe_cloud %} eine Verbindung herstellen, werden in einem Datensatz auf {% data variables.product.prodname_dotcom_the_website %} Informationen zur Verbindung gespeichert.
{% ifversion ghes %}
- Der Teil des öffentlichen Schlüssels Ihrer {% data variables.product.prodname_ghe_server %}-Lizenz
- Ein Hash Ihrer {% data variables.product.prodname_ghe_server %}-Lizenz
- Der Kundenname auf Ihrer {% data variables.product.prodname_ghe_server %}-Lizenz
- The version of {% data variables.product.product_location_enterprise %}{% endif %}
- The hostname of your {% data variables.product.product_name %} instance
- Die Organisation oder das Unternehmenskonto auf {% data variables.product.prodname_dotcom_the_website %}, die bzw. das mit {% data variables.product.product_location %} verbunden ist
- Das Authentifizierungstoken, das von {% data variables.product.product_location %} verwendet wird, um Anforderungen an {% data variables.product.prodname_dotcom_the_website %} zu senden.

Wenn Du {% data variables.product.prodname_github_connect %} aktivierst, wird zudem eine {% data variables.product.prodname_github_app %} erstellt, die Deiner Organisation oder Deinem Unternehmenskonto in der {% data variables.product.prodname_ghe_cloud %} gehört. {% data variables.product.product_name %} verwendet die Anmeldeinformationen der {% data variables.product.prodname_github_app %}, um Anforderungen an {% data variables.product.prodname_dotcom_the_website %} zu senden.
{% ifversion ghes %}
{% data variables.product.prodname_ghe_server %} speichert die Anmeldeinformationen der {% data variables.product.prodname_github_app %}. Diese Anmeldeinformationen werden mit Hochverfügbarkeits- oder Clustering-Umgebungen repliziert und in von {% data variables.product.prodname_enterprise_backup_utilities %} erstellten Backups, einschließlich Snapshots, gespeichert.
- Ein Authentifizierungstoken, das eine Stunde lang gültig ist
- Ein privater Schlüssel, der zum Generieren eines neuen Authentifizierungstokens verwendet wird
{% endif %}

Wenn {% data variables.product.prodname_github_connect %} aktiviert wird, können {% data variables.product.prodname_dotcom_the_website %}-Benutzer keine Änderungen an {% data variables.product.product_name %} vornehmen.

For more information about managing enterprise accounts using the GraphQL API, see "[Enterprise accounts](/graphql/guides/managing-enterprise-accounts)."
## {% data variables.product.prodname_github_connect %} aktivieren

{% ifversion ghes %}
1. Melden Sie sich bei {% data variables.product.product_location %} und {% data variables.product.prodname_dotcom_the_website %} an.
{% data reusables.enterprise-accounts.access-enterprise %}{% ifversion ghes < 3.1 %}{% data reusables.enterprise-accounts.settings-tab %}{% endif %}{% data reusables.enterprise-accounts.github-connect-tab %}{% else %}
1. Melden Sie sich bei {% data variables.product.product_location %} und {% data variables.product.prodname_dotcom_the_website %} an.
{% data reusables.enterprise-accounts.access-enterprise %}{% data reusables.enterprise-accounts.github-connect-tab %}{% endif %}
1. Under "{% data variables.product.prodname_github_connect %} is not enabled yet", click **Enable {% data variables.product.prodname_github_connect %}**. By clicking **Enable {% data variables.product.prodname_github_connect %}**, you agree to the "<a href="/github/site-policy/github-terms-for-additional-products-and-features#connect" class="dotcom-only">{% data variables.product.prodname_dotcom %} Terms for Additional Products and Features</a>."
{% ifversion ghes %}
![Enable GitHub Connect button](/assets/images/enterprise/business-accounts/enable-github-connect-button.png){% else %}
![Enable GitHub Connect button](/assets/images/enterprise/github-ae/enable-github-connect-button.png)
{% endif %}
1. Klicken Sie neben dem Enterprise-Konto oder der Organisation, das bzw. die Sie verbinden möchten, auf **Connect** (Verbinden). ![Schaltfläche „Connect“ (Verbinden) neben einem Enterprise-Konto oder Geschäft](/assets/images/enterprise/business-accounts/choose-enterprise-or-org-connect.png)

## Disconnecting a {% data variables.product.prodname_ghe_cloud %} organization or enterprise account from your enterprise account

Wenn Sie die Verbindung zur {% data variables.product.prodname_ghe_cloud %} trennen, wird die {% data variables.product.prodname_github_connect %} {% data variables.product.prodname_github_app %} aus Ihrem Enterprise-Konto oder Ihrer Organisation gelöscht. Zudem werden die auf {% data variables.product.product_location %} gespeicherten Anmeldeinformationen gelöscht.

{% data reusables.enterprise-accounts.access-enterprise %}{% ifversion ghes < 3.1 %}{% data reusables.enterprise-accounts.settings-tab %}{% endif %}{% data reusables.enterprise-accounts.github-connect-tab %}
1. Klicken Sie neben dem Enterprise-Konto oder der Organisation, das bzw. die Sie trennen möchten, auf **Disable {% data variables.product.prodname_github_connect %}** ({% data variables.product.prodname_github_connect %} deaktivieren).
{% ifversion ghes %}
  ![Schaltfläche „Disable GitHub Connect“ (GitHub Connect deaktivieren) neben dem Namen eines Enterprise-Kontos oder einer Organisation](/assets/images/enterprise/business-accounts/disable-github-connect-button.png)
1. Lesen Sie Informationen zur Trennung, und klicken Sie auf **Disable {% data variables.product.prodname_github_connect %}** ({% data variables.product.prodname_github_connect %} deaktivieren). ![Modalfenster mit Warnhinweisen zur Trennung und Schaltfläche zur Bestätigung](/assets/images/enterprise/business-accounts/confirm-disable-github-connect.png)
{% else %}
  ![Schaltfläche „Disable GitHub Connect“ (GitHub Connect deaktivieren) neben dem Namen eines Enterprise-Kontos oder einer Organisation](/assets/images/enterprise/github-ae/disable-github-connect-button.png)
1. Lesen Sie Informationen zur Trennung, und klicken Sie auf **Disable {% data variables.product.prodname_github_connect %}** ({% data variables.product.prodname_github_connect %} deaktivieren). ![Modalfenster mit Warnhinweisen zur Trennung und Schaltfläche zur Bestätigung](/assets/images/enterprise/github-ae/confirm-disable-github-connect.png)
{% endif %} 
