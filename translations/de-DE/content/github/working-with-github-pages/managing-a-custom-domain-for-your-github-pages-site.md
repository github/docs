---
title: Eine benutzerdefinierte Domäne für Deine GitHub Pages-Website verwalten
intro: 'Sie können bestimmte DNS-Datensätze und die Repository-Einstellungen so einrichten oder aktualisieren, dass die Standard-Domain für Ihre {% data variables.product.prodname_pages %}-Website auf eine benutzerdefinierte Domain verweist.'
redirect_from:
  - /articles/quick-start-setting-up-a-custom-domain/
  - /articles/setting-up-an-apex-domain/
  - /articles/setting-up-a-www-subdomain/
  - /articles/setting-up-a-custom-domain/
  - /articles/setting-up-an-apex-domain-and-www-subdomain/
  - /articles/adding-a-cname-file-to-your-repository/
  - /articles/setting-up-your-pages-site-repository/
  - /articles/managing-a-custom-domain-for-your-github-pages-site
product: '{% data reusables.gated-features.pages %}'
versions:
  free-pro-team: '*'
---

Personen mit Administratorberechtigungen für ein Repository können eine benutzerdefinierte Domäne für eine {% data variables.product.prodname_pages %}-Website konfigurieren.

### Informationen zur Konfiguration einer benutzerdefinierten Domäne

Nimm die benutzerdefinierte Domäne zunächst in die {% data variables.product.prodname_pages %} Website auf, bevor Du die benutzerdefinierte Domäne bei Deinem DNS-Provider konfigurierst. Wenn Sie Ihre benutzerdefinierte Domain bei Ihrem DNS-Provider konfigurieren, ohne Ihre benutzerdefinierte Domain zu {% data variables.product.product_name %} hinzuzufügen, könnte ein Dritter eine Website auf einer Ihrer Subdomains hosten.

{% windows %}

Der Befehl `dig`, mit dem die korrekte Konfiguration der DNS-Datensätze überprüft wird, ist nicht in Windows enthalten. Bevor Du die korrekte Konfiguration der DNS-Datensätze überprüfen kannst, musst Du [BIND](https://www.isc.org/bind/) installieren.

{% endwindows %}

{% note %}

**Hinweis:** Die Verbreitung von DNS-Änderungen kann bis zu 24 Stunden dauern.

{% endnote %}

### Eine Subdomäne konfigurieren

Zum Einrichten einer `www`- oder benutzerdefinierten Subdomäne wie `www.example.com` oder `blog.example.com` erstelle eine _CNAME_-Datei im Repository Deiner Website, und konfiguriere einen `CNAME`-Datensatz bei Deinem DNS-Provider.

{% data reusables.pages.navigate-site-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.pages.save-custom-domain %}
5. Navigiere zu Deinem DNS-Provider, und erstelle einen `CNAME` Datensatz, welcher Deine Subdomäne auf die Standarddomäne Deiner Website verweist. Soll beispielsweise die Subdomäne `www.example.com` für Deine Benutzer-Website verwendet werden, erstelle einen `CNAME`-Datensatz, mit dem `www.example.com` auf `<user>.github.io` verweist. If you want to use the subdomain `www.anotherexample.com` for your organization site, create a `CNAME` record that points `www.anotherexample.com` to `<organization>.github.io`. The `CNAME` file should always point to `<user>.github.io` or `<organization>.github.io`, excluding the repository name.
{% data reusables.pages.contact-dns-provider %}{% data reusables.pages.default-domain-information %}
{% data reusables.command_line.open_the_multi_os_terminal %}
6. Prüfe die korrekte Konfiguration des DNS-Datensatzes mit dem Befehl `dig`, und ersetze _WWW.EXAMPLE.COM_ dabei durch Deine Subdomäne.
```shell
    $ dig <em>WWW.EXAMPLE.COM</em> +nostats +nocomments +nocmd
    > ;<em>WWW.EXAMPLE.COM.</em>                     IN      A
    > <em>WWW.EXAMPLE.COM.</em>              3592    IN      CNAME   <em>YOUR-USERNAME</em>.github.io.
    > <em>YOUR-USERNAME</em>.github.io.      43192   IN      CNAME   <em> GITHUB-PAGES-SERVER </em>.
    > <em> GITHUB-PAGES-SERVER </em>.         22      IN      A       192.0.2.1
```
{% data reusables.pages.build-locally-download-cname %}
{% data reusables.pages.enforce-https-custom-domain %}

### Eine Apex-Domäne konfigurieren

Zum Einrichten einer Apex-Domäne, beispielsweise `example.com`, musst Du eine _CNAME_-Datei in Deinem {% data variables.product.prodname_pages %}-Repository sowie einen `ALIAS`-, `ANAME`- oder `A`-Eintrag bei Deinem DNS-Provider konfigurieren.

{% data reusables.pages.www-and-apex-domain-recommendation %}

{% data reusables.pages.navigate-site-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.pages.save-custom-domain %}
5. Navigiere zu Deinem DNS-Provider, und erstelle entweder einen `ALIAS`-, einen `ANAME`- oder einen `A`-Datensatz. {% data reusables.pages.contact-dns-provider %}
    - Soll ein `ALIAS`- oder `ANAME`-Datensatz erstellt werden, verweise Deine Apex-Domäne auf die Standarddomäne Deiner Website. {% data reusables.pages.default-domain-information %}
    - Soll ein `A`-Datensatz erstellt werden, verweisen Sie Ihre Apex-Domain auf die IP-Adressen für {% data variables.product.prodname_pages %}.
      ```shell
      185.199.108.153
      185.199.109.153
      185.199.110.153
      185.199.111.153
      ```
{% data reusables.command_line.open_the_multi_os_terminal %}
6. Prüfe die korrekte Konfiguration des DNS-Datensatzes mit dem Befehl `dig`, und ersetze _EXAMPLE.COM_ dabei durch Deine Apex-Domäne. Prüfe, ob die Ergebnisse mit den obigen IP-Adressen für {% data variables.product.prodname_pages %} übereinstimmen.
  ```shell
  $ dig <em>EXAMPLE.COM</em> +noall +answer
  > <em>EXAMPLE.COM</em>     3600    IN A     185.199.108.153
  > <em>EXAMPLE.COM</em>     3600    IN A     185.199.109.153
  > <em>EXAMPLE.COM</em>     3600    IN A     185.199.110.153
  > <em>EXAMPLE.COM</em>     3600    IN A     185.199.111.153
  ```
{% data reusables.pages.build-locally-download-cname %}
{% data reusables.pages.enforce-https-custom-domain %}

### Weiterführende Informationen

- „[Fehlerbehebung bei benutzerdefinierten Domänen und {% data variables.product.prodname_pages %}](/articles/troubleshooting-custom-domains-and-github-pages)“
