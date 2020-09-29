---
title: Ihre deaktivierte GitHub Pages-Website verwalten
intro: 'Private Repositorys auf {% data variables.product.prodname_free_user %} unterstützen {% data variables.product.prodname_pages %} nicht. Eine begrenzte Anzahl an {% data variables.product.prodname_pages %}-Websites, die mit kostenlosen privaten Repositorys verbunden sind, wurden fälschlicherweise aktiv belassen. Diese Websites werden nicht mehr aktualisiert, und ihre Veröffentlichung wird am 10. Mai 2019 von {% data variables.product.prodname_dotcom %} zurückgezogen.'
hidden: true
redirect_from:
  - /articles/managing-your-disabled-github-pages-site
versions:
  free-pro-team: '*'
---

{% note %}

{% data variables.product.prodname_pages %} ist nur in öffentlichen Repositorys mit {% data variables.product.prodname_free_user %} und in öffentlichen und privaten Repositorys mit {% data variables.product.prodname_pro %}, {% data variables.product.prodname_team %}, {% data variables.product.prodname_ghe_cloud %} und {% data variables.product.prodname_ghe_server %} verfügbar. {% data reusables.gated-features.more-info %}

{% endnote %}

Wenn Sie eine veröffentlichte {% data variables.product.prodname_pages %}-Website in einem kostenlosen privaten Repository besitzen, gibt es mehrere Möglichkeiten, Ihre Website weiterhin zu veröffentlichen und zu aktualisieren oder ihre Veröffentlichung manuell zurückzuziehen. Wenn Sie nichts tun, zieht {% data variables.product.prodname_dotcom %} die Veröffentlichung Ihrer Website am 10. Mai 2019 zurück.

- **Um Ihre {% data variables.product.prodname_pages %}-Website weiterhin zu veröffentlichen und zu aktualisieren**, können Sie das Repository in ein öffentliches Repository umwandeln oder Ihr Konto auf {% data variables.product.prodname_pro %} upgraden. Weitere Informationen dazu, wie Sie Ihr privates Repository in ein öffentliches umwandeln, finden Sie unter „[Sichtbarkeit eines Repositorys festlegen](/articles/setting-repository-visibility#making-a-private-repository-public)“. Weitere Informationen zum Upgraden Ihres Kontos finden Sie unter „[Ihr GitHub-Abonnement upgraden](/articles/upgrading-your-github-subscription)“.

- **Um Ihre {% data variables.product.prodname_pages %}-Website nicht länger zu veröffentlichen**, können Sie die [Veröffentlichung manuell zurückziehen](#manually-unpublishing-your-github-pages-site) oder nichts tun, woraufhin {% data variables.product.prodname_dotcom %} die Veröffentlichung Ihrer Website am 10. Mai 2019 zurücknimmt. Wenn für Ihre {% data variables.product.prodname_pages %}-Website eine benutzerdefinierte Domain eingerichtet wurde, sollten sie den DNS-Eintrag bei Ihrem DNS-Provider so bald wie möglich aktualisieren oder entfernen, um das Risiko einer Domain-Übernahme zu verhindern. Wenn Sie Ihre benutzerdefinierte Domain bei Ihrem DNS-Provider konfigurieren, während Ihre {% data variables.product.prodname_pages %}-Website deaktiviert ist, könnte ein Dritter eine Website auf einer Ihrer Subdomains hosten. Weitere Informationen finden Sie unter „[Eine benutzerdefinierte Domain mit {% data variables.product.prodname_pages %} verwenden](/articles/using-a-custom-domain-with-github-pages)“.

### Die Veröffentlichung Ihrer {% data variables.product.prodname_pages %}-Website manuell zurückziehen

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
3. Klicken Sie auf der linken Seitenleiste auf **Unpublish {% data variables.product.prodname_pages %}** (Veröffentlichung von {% data variables.product.prodname_pages %} zurückziehen). ![Repository-Einstellung, um Veröffentlichung der {% data variables.product.prodname_pages %}-Website zurückzuziehen](/assets/images/help/pages/unpublish-pages-button-sidebar.png)
4. Klicken Sie auf **Unpublish this site** (Veröffentlichung dieser Website zurückziehen). ![Schaltfläche, um Veröffentlichung der {% data variables.product.prodname_pages %}-Website zurückzuziehen](/assets/images/help/pages/unpublish-pages-button.png)

### Weiterführende Informationen

- „[Veröffentlichung einer Benutzerseiten-Website zurückziehen](articles/unpublishing-a-user-pages-site)“
- „[Veröffentlichung einer Projektseiten-Website zurückziehen](/articles/unpublishing-a-project-pages-site)“
- „[Repository übertragen](/articles/transferring-a-repository)“
- „[Informationen zur Archivierung von Repositorys](/articles/about-archiving-repositories)“
- „[Repository löschen](/articles/deleting-a-repository)“
