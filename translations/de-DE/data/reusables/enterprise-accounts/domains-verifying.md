To verify your enterprise account's domain, you must have access to modify domain records with your domain hosting service.

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.verified-domains-tab %}
{% data reusables.enterprise-accounts.add-a-domain %}
{% data reusables.organizations.add-domain %}
{% data reusables.organizations.add-dns-txt-record %}
1. Wait for your DNS configuration to change, which may take up to 72 hours. You can confirm your DNS configuration has changed by running the `dig` command on the command line, replacing `ENTERPRISE-ACCOUNT` with the name of your enterprise account, and `example.com` with the domain you'd like to verify. In der Befehlsausgabe sollte Ihr neuer TXT-Eintrag aufgelistet werden.
   ```shell
   dig _github-challenge-<em>ENTERPRISE-ACCOUNT</em>.<em>example.com</em> +nostats +nocomments +nocmd TXT
   ```
1. After confirming your TXT record is added to your DNS, follow steps one through four above to navigate to your enterprise account's approved and verified domains.
{% data reusables.organizations.continue-verifying-domain %}
1. Optionally, after the "Verified" badge is visible on your organizations' profiles, delete the TXT entry from the DNS record at your domain hosting service. ![Badge „Verified“ (Verifiziert)](/assets/images/help/organizations/verified-badge.png)
