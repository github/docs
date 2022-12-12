---
title: Eine benutzerdefinierte Domain für deine GitHub Pages-Website verwalten
intro: 'Du kannst bestimmte DNS-Datensätze und die Repository-Einstellungen so einrichten oder aktualisieren, dass die Standarddomäne für deine {% data variables.product.prodname_pages %}-Website auf eine benutzerdefinierte Domäne verweist.'
redirect_from:
  - /articles/quick-start-setting-up-a-custom-domain
  - /articles/setting-up-an-apex-domain
  - /articles/setting-up-a-www-subdomain
  - /articles/setting-up-a-custom-domain
  - /articles/setting-up-an-apex-domain-and-www-subdomain
  - /articles/adding-a-cname-file-to-your-repository
  - /articles/setting-up-your-pages-site-repository
  - /articles/managing-a-custom-domain-for-your-github-pages-site
  - /github/working-with-github-pages/managing-a-custom-domain-for-your-github-pages-site
product: '{% data reusables.gated-features.pages %}'
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Pages
shortTitle: Manage a custom domain
ms.openlocfilehash: d8c11f50369d27a1bf99b10ba843e1525b3d4014
ms.sourcegitcommit: cfe91073c844cb762131b2de9fb41f7f9db792fc
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 11/24/2022
ms.locfileid: '148181256'
---
Personen mit Administratorberechtigungen für ein Repository können eine benutzerdefinierte Domäne für eine {% data variables.product.prodname_pages %}-Website konfigurieren.

## Informationen zur Konfiguration einer benutzerdefinierten Domäne

Nimm die benutzerdefinierte Domäne zunächst in die {% data variables.product.prodname_pages %} Website auf, bevor du die benutzerdefinierte Domäne bei deinem DNS-Provider konfigurierst. Wenn du deine benutzerdefinierte Domain bei deinem DNS-Provider konfigurierst, ohne deine benutzerdefinierte Domain zu {% data variables.product.product_name %} hinzuzufügen, könnte ein Dritter eine Website auf einer deiner Subdomains hosten.

{% windows %}

Der Befehl `dig`, mit dem die korrekte Konfiguration der DNS-Einträge überprüft wird, ist nicht in Windows enthalten. Bevor du überprüfen kannst, ob deine DNS-Einträge korrekt konfiguriert sind, musst du [BIND](https://www.isc.org/bind/) installieren.

{% endwindows %}

{% note %}

**Hinweis:** Es kann bis zu 24 Stunden dauern, bis DNS-Änderungen übertragen werden.

{% endnote %}

## Eine Subdomäne konfigurieren

Zum Einrichten einer `www` oder benutzerdefinierten Unterdomäne wie `www.example.com` oder `blog.example.com` musst du deine Domäne in den Repositoryeinstellungen hinzufügen. Konfiguriere danach einen CNAME-Eintrag mit deinem DNS-Anbieter.

{% data reusables.pages.navigate-site-repo %} {% data reusables.repositories.sidebar-settings %} {% data reusables.pages.sidebar-pages %}
4. Gib unter „Benutzerdefinierte Domäne“ den Namen deiner benutzerdefinierten Domäne ein, und klicke auf **Speichern**. Wenn du deine Website über einen Branch veröffentlichst, wird dadurch ein Commit erstellt, der dem Stamm deines Quellbranch eine `CNAME`-Datei hinzufügt. Wenn du deine Website mit einem benutzerdefinierten {% data variables.product.prodname_actions %}-Workflow veröffentlichst, wird keine `CNAME`-Datei erstellt. Weitere Informationen findest du unter [Konfigurieren einer Veröffentlichungsquelle für deine GitHub Pages-Website](/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site).
  ![Schaltfläche „Speichere benutzerdefinierte Domäne“](/assets/images/help/pages/save-custom-subdomain.png)

  {% note %}
  
  **Hinweis:** Wenn deine benutzerdefinierte Domäne ein internationalisierter Domänenname ist, musst du die Punycode-codierte Version eingeben.
  
  Weitere Informationen zu Punycodes findest du unter [Internationalisierter Domänenname](https://en.wikipedia.org/wiki/Internationalized_domain_name).
  
  {% endnote %}

5. Navigiere zu deinem DNS-Anbieter, und erstelle einen `CNAME`-Eintrag, der deine Unterdomäne auf die Standarddomäne für deine Website verweist. Wenn du beispielsweise die Unterdomäne `www.example.com` für deine Benutzerwebsite verwenden möchtest, erstelle einen `CNAME`-Eintrag, der `www.example.com` auf `<user>.github.io` verweist. Wenn du die Unterdomäne `another.example.com` für deine Unternehmenswebsite verwenden möchtest, erstelle einen `CNAME`-Eintrag, der `another.example.com` auf `<organization>.github.io` verweist. Der `CNAME`-Eintrag sollte immer auf `<user>.github.io` oder `<organization>.github.io` verweisen, ohne den Repositorynamen. {% data reusables.pages.contact-dns-provider %} {% data reusables.pages.default-domain-information %}

{% indented_data_reference reusables.pages.wildcard-dns-warning spaces=3 %} {% data reusables.command_line.open_the_multi_os_terminal %}
6. Um zu überprüfen, ob dein DNS-Eintrag korrekt konfiguriert ist, verwende den Befehl `dig`, wobei du _WWW.EXAMPLE.COM_ durch deine Unterdomäne ersetzt.
```shell
    $ dig WWW.EXAMPLE.COM +nostats +nocomments +nocmd
    > ;WWW.EXAMPLE.COM.                    IN      A
    > WWW.EXAMPLE.COM.             3592    IN      CNAME   YOUR-USERNAME.github.io.
    > YOUR-USERNAME.github.io.      43192   IN      CNAME   GITHUB-PAGES-SERVER .
    > GITHUB-PAGES-SERVER .         22      IN      A       192.0.2.1
```
{% data reusables.pages.build-locally-download-cname %} {% data reusables.pages.enforce-https-custom-domain %}

## Eine Apex-Domäne konfigurieren

Zum Einrichten einer Apex-Domäne, z. B. `example.com`, musst du eine benutzerdefinierte Domäne in deinen Repositoryeinstellungen und mindestens einen `ALIAS`-, `ANAME`- oder `A`-Datensatz mit deinem DNS-Anbieter konfigurieren.

{% data reusables.pages.www-and-apex-domain-recommendation %} Weitere Informationen findest du unter [Konfigurieren einer Unterdomäne](#configuring-a-subdomain).

{% data reusables.pages.navigate-site-repo %} {% data reusables.repositories.sidebar-settings %} {% data reusables.pages.sidebar-pages %}
4. Gib unter „Benutzerdefinierte Domäne“ den Namen deiner benutzerdefinierten Domäne ein, und klicke auf **Speichern**. Wenn du deine Website über einen Branch veröffentlichst, wird dadurch ein Commit erstellt, der dem Stamm deines Quellbranch eine `CNAME`-Datei hinzufügt. Wenn du deine Website mit einem benutzerdefinierten {% data variables.product.prodname_actions %}-Workflow veröffentlichst, wird keine `CNAME`-Datei erstellt. Weitere Informationen findest du unter [Konfigurieren einer Veröffentlichungsquelle für deine GitHub Pages-Website](/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site).
  ![Schaltfläche „Speichere benutzerdefinierte Domäne“](/assets/images/help/pages/save-custom-apex-domain.png)
5. Navigiere zu deinem DNS-Anbieter, und erstelle entweder einen `ALIAS`-, `ANAME`- oder `A`-Eintrag. Du kannst auch `AAAA`-Einträge für die IPv6-Unterstützung erstellen. {% data reusables.pages.contact-dns-provider %}
    - Um einen `ALIAS`- oder `ANAME`-Eintrag zu erstellen, verweise deine Apex-Domäne auf die Standarddomäne für deine Website. {% data reusables.pages.default-domain-information %}
    - Soll ein `A`-Eintrag erstellt werden, verweise deine Apex-Domäne auf die IP-Adressen für {% data variables.product.prodname_pages %}.
      ```shell
      185.199.108.153
      185.199.109.153
      185.199.110.153
      185.199.111.153
      ```
    - Soll ein `AAAA`-Eintrag erstellt werden, verweise deine Apex-Domäne auf die IP-Adressen für {% data variables.product.prodname_pages %}.
      ```shell
      2606:50c0:8000::153
      2606:50c0:8001::153
      2606:50c0:8002::153
      2606:50c0:8003::153
      ```

{% indented_data_reference reusables.pages.wildcard-dns-warning spaces=3 %} {% data reusables.command_line.open_the_multi_os_terminal %}
6. Um zu überprüfen, ob dein DNS-Eintrag korrekt konfiguriert ist, verwende den Befehl `dig`, wobei du _EXAMPLE.COM_ durch deine Apex-Domäne ersetzt. Prüfe, ob die Ergebnisse mit den obigen IP-Adressen für {% data variables.product.prodname_pages %} übereinstimmen.
   - Für `A`-Einträge.
    ```shell
    $ dig EXAMPLE.COM +noall +answer -t A
    > EXAMPLE.COM    3600    IN A     185.199.108.153
    > EXAMPLE.COM    3600    IN A     185.199.109.153
    > EXAMPLE.COM    3600    IN A     185.199.110.153
    > EXAMPLE.COM    3600    IN A     185.199.111.153
    ```
   - Für `AAAA`-Einträge.
    ```shell
    $ dig EXAMPLE.COM +noall +answer -t AAAA
    > EXAMPLE.COM     3600    IN AAAA     2606:50c0:8000::153
    > EXAMPLE.COM     3600    IN AAAA     2606:50c0:8001::153
    > EXAMPLE.COM     3600    IN AAAA     2606:50c0:8002::153
    > EXAMPLE.COM     3600    IN AAAA     2606:50c0:8003::153
    ```
{% data reusables.pages.build-locally-download-cname %} {% data reusables.pages.enforce-https-custom-domain %}

## Konfigurieren einer Apex-Domäne und der Unterdomänenvariante `www`

Bei Verwendung einer Apex-Domäne empfehlen wir, deine {% data variables.product.prodname_pages %}-Website so zu konfigurieren, dass Inhalte sowohl in der Apex-Domäne als auch in dieser Unterdomänenvariante `www` der Domäne gehostet werden.

Zum Einrichten einer `www`-Unterdomäne neben der Apex-Domäne musst du zuerst eine Apex-Domäne konfigurieren, indem du einen `ALIAS`-, `ANAME`- oder `A`-Eintrag mit deinem DNS-Anbieter erstellst. Weitere Informationen findest du unter [Konfigurieren einer Apex-Domäne](#configuring-an-apex-domain).

Nachdem du die Apex-Domäne konfiguriert hast, musst du einen CNAME-Eintrag mit deinem DNS-Anbieter konfigurieren.

1. Navigiere zu deinem DNS-Anbieter, und erstelle einen `CNAME`-Eintrag, der `www.example.com` auf die Standarddomäne für deine Website verweist: `<user>.github.io` oder `<organization>.github.io`. Gib den Namen des Repositorys nicht an. {% data reusables.pages.contact-dns-provider %} {% data reusables.pages.default-domain-information %}
2. Um zu überprüfen, ob dein DNS-Eintrag korrekt konfiguriert ist, verwende den Befehl `dig`, wobei du _WWW.EXAMPLE.COM_ durch deine `www`-Unterdomänenvariante ersetzt.
```shell
    $ dig WWW.EXAMPLE.COM +nostats +nocomments +nocmd
    > ;WWW.EXAMPLE.COM                     IN      A
    > WWW.EXAMPLE.COM.              3592    IN      CNAME   YOUR-USERNAME.github.io.
    > YOUR-USERNAME.github.io.      43192   IN      CNAME   GITHUB-PAGES-SERVER.
    > GITHUB-PAGES-SERVER.         22      IN      A       192.0.2.1
```
## Entfernen einer benutzerdefinierten Domäne

{% data reusables.pages.navigate-site-repo %} {% data reusables.repositories.sidebar-settings %} {% data reusables.pages.sidebar-pages %}
4. Klicke unter „Benutzerdefinierte Domäne“ auf **Entfernen**.
  ![Schaltfläche „Speichere benutzerdefinierte Domäne“](/assets/images/help/pages/remove-custom-domain.png)

## Sichern deiner benutzerdefinierten Domäne

{% data reusables.pages.secure-your-domain %} Weitere Informationen findest du unter [Überprüfen deiner benutzerdefinierten Domäne für {% data variables.product.prodname_pages %}](/pages/configuring-a-custom-domain-for-your-github-pages-site/verifying-your-custom-domain-for-github-pages).

## Weiterführende Themen

- [Problembehandlung für benutzerdefinierte Domänen und {% data variables.product.prodname_pages %}](/articles/troubleshooting-custom-domains-and-github-pages)
