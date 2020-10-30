---
title: Domänen Deiner Organisation überprüfen
intro: 'Du kannst die von Deiner Organisation kontrollierten Domänen verifizieren, um die Identität Deiner Organisation auf {% data variables.product.product_name %} zu bestätigen.'
redirect_from:
  - /articles/verifying-your-organization-s-domain
  - /articles/verifying-your-organizations-domain
versions:
  free-pro-team: '*'
---

Um Domänen auf {% data variables.product.product_name %} zu verifizieren, musst Du in der Organisation über Inhaberberechtigungen verfügen. Weitere Informationen finden Sie unter „[Berechtigungsebenen für eine Organisation](/articles/permission-levels-for-an-organization)". Darüber hinaus benötigst Du Zugriff, um die Domänen-Einträge mit Deinem Domänen-Hosting-Dienst zu ändern.

Nachdem Du die Inhaberschaft der Domains Deiner Organisation verifiziert hast, wird im Profil der Organisation der Badge „Verified“ (Verifiziert) angezeigt. Wenn Deine Organisation in {% data variables.product.prodname_ghe_cloud %} vorhanden ist und den Unternehmensnutzungsbedingungen zugestimmt hat, können Organisationsinhaber die Identität der Organisationsmitglieder verifizieren, indem sie die E-Mail-Adresse der jeweiligen Mitglieder innerhalb der verifizierten Domäne anzeigen. Weitere Informationen findest Du unter „[Informationen zum Profil Deiner Organisation](/articles/about-your-organization-s-profile/)“ und „[Auf Unternehmensnutzungsbedingungen umsteigen](/articles/upgrading-to-the-corporate-terms-of-service).“

Damit der Badge „Verified“ (Verifiziert) angezeigt wird, müssen die in Deinem Profil angezeigten Website- und E-Mail-Informationen mit denen der verifizierten Domäne oder Domänen übereinstimmen. Wenn die im Profil Deiner Organisation angezeigten Website- und E-Mail-Adressen auf unterschiedlichen Domänen gehostet werden, musst Du alle Domänen verifizieren.

{% note %}

**Hinweis:** Wenn die im Profil Deiner Organisation angezeigte E-Mail- und Websiteadresse Varianten derselben Domäne verwendet, musst Du beide Varianten verifizieren. Wenn das Profil Deiner Organisation beispielsweise die Website `www.example.com` und die E-Mail-Adresse `info@example.com` zeigt, musst Du sowohl `www.example.com` wie auch `example.com` verifizieren.

{% endnote %}

Auf {% data variables.product.prodname_ghe_cloud %} kannst Du nach dem Verifizieren der Inhaberschaft der Domäne Deiner Organisation die E-Mail-Benachrichtigungen für die Organisation auf diese Domäne beschränken. Weitere Informationen findest Du unter „[E-Mail-Benachrichtigungen auf eine genehmigte Domäne beschränken](/articles/restricting-email-notifications-to-an-approved-domain).“

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
{% data reusables.organizations.verified-domains %}
5. Klicke auf **Add a domain** (Domäne hinzufügen). ![Schaltfläche „Add a domain“ (Domäne hinzufügen)](/assets/images/help/organizations/add-a-domain-button.png)
6. Gib im Domänen-Feld die Domäne ein, die verifiziert werden soll. Klicke anschließend auf **Add domain** (Domäne hinzufügen). ![Feld zum Hinzufügen einer Domäne](/assets/images/help/organizations/add-domain-field.png)
7. Befolge die unter **Add a DNS TXT record** (TXT-Eintrag für DNS hinzufügen) angegebenen Anweisungen, um mit Deinem Domänen-Hosting-Dienst einen TXT-Eintrag für DNS zu erstellen. Es kann bis zu 72 Stunden dauern, bis sich Deine DNS-Konfiguration ändert. Wechsle zum nächsten Schritt, sobald sich Deine DNS-Konfiguration geändert hat. ![Anweisungen zum Erstellen eines TXT-Eintrags für DNS](/assets/images/help/organizations/create-dns-txt-record-instructions.png)

   {% tip %}

   **Tipp:** Du kannst bestätigen, dass sich Deine DNS-Konfiguration geändert hat. Führe dazu den Befehl `dig` auf der Befehlszeile aus. Ersetze im Beispiel den Wert `ORGANIZATION` durch den Namen Deiner Organisation und den Wert `example.com` durch die Domäne, die verifiziert werden soll. In der Befehlsausgabe sollte Dein neuer TXT-Eintrag aufgelistet werden.

   ```shell
   $ dig _github-challenge-<em>ORGANIZATION</em>.<em>example.com</em> +nostats +nocomments +nocmd TXT
   ```

   {% endtip %}

8. Nachdem Du bestätigt hast, dass Deinem DNS-Eintrag der TXT-Eintrag hinzugefügt wurde, solltest Du in den Einstellungen Deiner Organisation zur Registerkarte „Verified domains“ (Verifizierte Domänen) navigieren. Du kannst die obigen Schritte eins bis vier durchführen, um nach der Registerkarte für verifizierte Domänen zu suchen. ![Seite mit Einstellungen zu verifizierten Domänen mit ausstehender Domäne](/assets/images/help/organizations/pending-domain-verification.png)
9. Klicke neben der Domäne, deren Verifizierung aussteht, auf {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %} und anschließend auf **Continue verifying** (Verifizierung fortsetzen). ![Schaltfläche „Continue verifying“ (Verifizierung fortsetzen) für Domäne](/assets/images/help/organizations/continue-verifying-domain.png)
10. Klicke auf **Verify domain** (Domäne verifizieren). ![Schaltfläche „Verify domain“ (Domäne verifizieren)](/assets/images/help/organizations/verify-domain-final-button.png)
11. Sobald der Badge „Verified“ (Verifiziert) auf der Profilseite Deiner Organisation sichtbar ist, kannst Du den TXT-Eintrag im Domänen-Hosting-Dienst optional aus dem DNS-Eintrag löschen. ![Badge „Verified“ (Verifiziert)](/assets/images/help/organizations/verified-badge.png)
