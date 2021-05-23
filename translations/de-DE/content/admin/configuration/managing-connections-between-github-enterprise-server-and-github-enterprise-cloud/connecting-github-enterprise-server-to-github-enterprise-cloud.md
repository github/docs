---
title: GitHub Enterprise Server mit GitHub Enterprise Cloud verbinden
intro: 'Nach der Aktivierung von {% data variables.product.prodname_github_connect %} können Sie bestimmte Features und Workflows zwischen {% data variables.product.product_location_enterprise %} und {% data variables.product.prodname_ghe_cloud %} freigeben.'
redirect_from:
  - /enterprise/admin/guides/developer-workflow/connecting-github-enterprise-to-github-com/
  - /enterprise/admin/guides/developer-workflow/connecting-github-enterprise-server-to-github-com
  - /enterprise/admin/developer-workflow/connecting-github-enterprise-server-to-githubcom/
  - /enterprise/admin/installation/connecting-github-enterprise-server-to-github-enterprise-cloud
  - /enterprise/admin/configuration/connecting-github-enterprise-server-to-github-enterprise-cloud
  - /admin/configuration/connecting-github-enterprise-server-to-github-enterprise-cloud
permissions: 'Site administrators for {% data variables.product.prodname_ghe_server %} who are also owners of a {% data variables.product.prodname_ghe_cloud %} organization or enterprise account can enable {% data variables.product.prodname_github_connect %}.'
versions:
  enterprise-server: '*'
type: how_to
topics:
  - Enterprise
  - GitHub Connect
  - Infrastructure
  - Networking
---
### Informationen zu {% data variables.product.prodname_github_connect %}

Zum Aktivieren von {% data variables.product.prodname_github_connect %} musst Du die Verbindung sowohl in {% data variables.product.product_location_enterprise %} als auch in Deiner Organisation oder Deinem Unternehmenskonto in der {% data variables.product.prodname_ghe_cloud %} konfigurieren.

Zum Konfigurieren einer Verbindung muss Ihre Proxykonfiguration die Konnektivität mit `github.com` und `api.github.com` zulassen. Weitere Informationen finden Sie unter „[Ausgehenden Webproxyserver konfigurieren](/enterprise/{{ currentVersion }}/admin/guides/installation/configuring-an-outbound-web-proxy-server)“.

Nach der Aktivierung von {% data variables.product.prodname_github_connect %} können Sie Features, beispielsweise die gemeinsame Suche und einheitliche Beiträge, aktivieren. Weitere Informationen zu allen verfügbaren Features finden Sie unter „[Verbindungen zwischen {% data variables.product.prodname_ghe_server %} und {% data variables.product.prodname_ghe_cloud %} verwalten](/enterprise/{{ currentVersion }}/admin/installation/managing-connections-between-github-enterprise-server-and-github-enterprise-cloud)“.

Wenn Sie zwischen {% data variables.product.product_location_enterprise %} und {% data variables.product.prodname_ghe_cloud %} eine Verbindung herstellen, werden in einem Datensatz auf {% data variables.product.prodname_dotcom_the_website %} Informationen zur Verbindung gespeichert.
- Der Teil des öffentlichen Schlüssels Ihrer {% data variables.product.prodname_ghe_server %}-Lizenz
- Ein Hash Ihrer {% data variables.product.prodname_ghe_server %}-Lizenz
- Der Kundenname auf Ihrer {% data variables.product.prodname_ghe_server %}-Lizenz
- Der Hostname von {% data variables.product.product_location_enterprise %}
- Die Version von {% data variables.product.product_location_enterprise %}
- Die Organisation oder das Unternehmenskonto auf {% data variables.product.prodname_dotcom_the_website %}, die bzw. das mit {% data variables.product.product_location_enterprise %} verbunden ist
- Das Authentifizierungstoken, das von {% data variables.product.product_location_enterprise %} verwendet wird, um Anforderungen an {% data variables.product.prodname_dotcom_the_website %} zu senden.

Wenn Du {% data variables.product.prodname_github_connect %} aktivierst, wird zudem eine {% data variables.product.prodname_github_app %} erstellt, die Deiner Organisation oder Deinem Unternehmenskonto in der {% data variables.product.prodname_ghe_cloud %} gehört. {% data variables.product.prodname_ghe_server %} verwendet die Anmeldeinformationen der {% data variables.product.prodname_github_app %}, um Anforderungen an {% data variables.product.prodname_dotcom_the_website %} zu senden.

{% data variables.product.prodname_ghe_server %} speichert die Anmeldeinformationen der {% data variables.product.prodname_github_app %}. Diese Anmeldeinformationen werden mit Hochverfügbarkeits- oder Clustering-Umgebungen repliziert und in von {% data variables.product.prodname_enterprise_backup_utilities %} erstellten Backups, einschließlich Snapshots, gespeichert.
- Ein Authentifizierungstoken, das eine Stunde lang gültig ist
- Ein privater Schlüssel, der zum Generieren eines neuen Authentifizierungstokens verwendet wird

Wenn {% data variables.product.prodname_github_connect %} aktiviert wird, können {% data variables.product.prodname_dotcom_the_website %}-Benutzer keine Änderungen an {% data variables.product.prodname_ghe_server %} vornehmen.

For more information about managing enterprise accounts using the GraphQL API, see "[Enterprise accounts](/graphql/guides/managing-enterprise-accounts)."
### {% data variables.product.prodname_github_connect %} aktivieren

1. Sign in to

{% data variables.product.product_location_enterprise %} and {% data variables.product.prodname_dotcom_the_website %}.
{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.github-connect-tab %}
5. Klicken Sie unter „{% data variables.product.prodname_dotcom_the_website %} is not enabled yet“ ({% data variables.product.prodname_dotcom_the_website %} ist noch nicht aktiviert) auf **Enable {% data variables.product.prodname_github_connect %}** ({% data variables.product.prodname_github_connect %} aktivieren). Wenn Sie auf **Enable {% data variables.product.prodname_github_connect %}** ({% data variables.product.prodname_github_connect %} aktivieren) klicken, stimmen Sie dem <a href="/articles/github-connect-addendum-to-the-github-enterprise-license-agreement/" class="dotcom-only">{% data variables.product.prodname_github_connect %}-Nachtrag zur {% data variables.product.prodname_enterprise %}-Lizenzvereinbarung</a> zu. ![Schaltfläche „Enable GitHub Connect“ (GitHub Connect aktivieren)](/assets/images/enterprise/business-accounts/enable-github-connect-button.png)
6. Klicken Sie neben dem Enterprise-Konto oder der Organisation, das bzw. die Sie verbinden möchten, auf **Connect** (Verbinden). ![Schaltfläche „Connect“ (Verbinden) neben einem Enterprise-Konto oder Geschäft](/assets/images/enterprise/business-accounts/choose-enterprise-or-org-connect.png)

### {% data variables.product.prodname_ghe_cloud %}-Organisation oder -Enterprise-Konto von {% data variables.product.product_location_enterprise %} trennen

Wenn Sie die Verbindung zur {% data variables.product.prodname_ghe_cloud %} trennen, wird die {% data variables.product.prodname_github_connect %} {% data variables.product.prodname_github_app %} aus Ihrem Enterprise-Konto oder Ihrer Organisation gelöscht. Zudem werden die auf {% data variables.product.product_location_enterprise %} gespeicherten Anmeldeinformationen gelöscht.

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.github-connect-tab %}
5. Klicken Sie neben dem Enterprise-Konto oder der Organisation, das bzw. die Sie trennen möchten, auf **Disable {% data variables.product.prodname_github_connect %}** ({% data variables.product.prodname_github_connect %} deaktivieren). ![Schaltfläche „Disable GitHub Connect“ (GitHub Connect deaktivieren) neben dem Namen eines Enterprise-Kontos oder einer Organisation](/assets/images/enterprise/business-accounts/disable-github-connect-button.png)
6. Lesen Sie Informationen zur Trennung, und klicken Sie auf **Disable {% data variables.product.prodname_github_connect %}** ({% data variables.product.prodname_github_connect %} deaktivieren). ![Modalfenster mit Warnhinweisen zur Trennung und Schaltfläche zur Bestätigung](/assets/images/enterprise/business-accounts/confirm-disable-github-connect.png)
