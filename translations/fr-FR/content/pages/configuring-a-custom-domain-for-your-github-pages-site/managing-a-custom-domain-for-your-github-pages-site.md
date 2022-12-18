---
title: Gestion d’un domaine personnalisé pour votre site GitHub Pages
intro: 'Vous pouvez configurer ou mettre à jour certains enregistrements DNS et vos paramètres de dépôt pour pointer le domaine par défaut de votre site {% data variables.product.prodname_pages %} vers un domaine personnalisé.'
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
ms.contentlocale: fr-FR
ms.lasthandoff: 11/24/2022
ms.locfileid: '148181254'
---
Les personnes disposant d’autorisations d’administrateur sur un dépôt peuvent configurer un domaine personnalisé pour un site {% data variables.product.prodname_pages %}.

## À propos de la configuration de domaines personnalisés

Veillez à ajouter votre domaine personnalisé à votre site {% data variables.product.prodname_pages %} avant de configurer votre domaine personnalisé auprès de votre fournisseur DNS. La configuration de votre domaine personnalisé auprès de votre fournisseur DNS sans ajouter votre domaine personnalisé à {% data variables.product.product_name %} peut entraîner la possibilité pour une autre personne d’héberger un site sur un de vos sous-domaines.

{% windows %}

La commande `dig`, qui peut être utilisée pour vérifier la configuration correcte des enregistrements DNS, n’est pas incluse dans Windows. Avant de pouvoir vérifier que vos enregistrements DNS sont correctement configurés, vous devez installer [BIND](https://www.isc.org/bind/).

{% endwindows %}

{% note %}

**Remarque :** La propagation des modifications DNS peut prendre jusqu’à 24 heures.

{% endnote %}

## Configuration d’un sous-domaine

Pour configurer un sous-domaine `www` ou personnalisé, comme `www.example.com` ou `blog.example.com`, vous devez ajouter votre domaine dans les paramètres du dépôt. Ensuite, configurez un enregistrement CNAME auprès de votre fournisseur DNS.

{% data reusables.pages.navigate-site-repo %} {% data reusables.repositories.sidebar-settings %} {% data reusables.pages.sidebar-pages %}
4. Sous « Domaine personnalisé », entrez votre domaine personnalisé, puis cliquez sur **Enregistrer**. Si vous publiez votre site à partir d’une branche, cela crée un commit qui ajoute un fichier `CNAME` à la racine de votre branche source. Si vous publiez votre site avec un workflow {% data variables.product.prodname_actions %} personnalisé, aucun fichier `CNAME` n’est créé. Pour plus d’informations sur votre source de publication, consultez « [Configuration d’une source de publication pour votre site GitHub Pages](/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site) ».
  ![Bouton Enregistrer un domaine personnalisé](/assets/images/help/pages/save-custom-subdomain.png)

  {% note %}
  
  **Remarque :** si votre domaine personnalisé est un nom de domaine internationalisé, vous devez entrer la version Punycode encodée.
  
  Pour plus d’informations sur Punycode, consultez [Nom de domaine internationalisé](https://en.wikipedia.org/wiki/Internationalized_domain_name).
  
  {% endnote %}

5. Accédez à votre fournisseur DNS et créez un enregistrement `CNAME` qui fait pointer votre sous-domaine vers le domaine par défaut de votre site. Par exemple, si vous voulez utiliser le sous-domaine `www.example.com` pour votre site utilisateur, créez un enregistrement `CNAME` qui fait pointer `www.example.com` vers `<user>.github.io`. Si vous voulez utiliser le sous-domaine `another.example.com` pour votre site d’organisation, créez un enregistrement `CNAME` qui fait pointer `another.example.com` vers `<organization>.github.io`. L’enregistrement `CNAME` doit toujours pointer vers `<user>.github.io` ou vers `<organization>.github.io`, à l’exclusion du nom du dépôt. {% data reusables.pages.contact-dns-provider %} {% data reusables.pages.default-domain-information %}

{% indented_data_reference reusables.pages.wildcard-dns-warning spaces=3 %} {% data reusables.command_line.open_the_multi_os_terminal %}
6. Pour vérifier que votre enregistrement DNS est correctement configuré, utilisez la commande `dig`, en remplaçant _WWW.EXAMPLE.COM_ par votre sous-domaine.
```shell
    $ dig WWW.EXAMPLE.COM +nostats +nocomments +nocmd
    > ;WWW.EXAMPLE.COM.                    IN      A
    > WWW.EXAMPLE.COM.             3592    IN      CNAME   YOUR-USERNAME.github.io.
    > YOUR-USERNAME.github.io.      43192   IN      CNAME   GITHUB-PAGES-SERVER .
    > GITHUB-PAGES-SERVER .         22      IN      A       192.0.2.1
```
{% data reusables.pages.build-locally-download-cname %} {% data reusables.pages.enforce-https-custom-domain %}

## Configuration d’un domaine apex

Pour configurer un domaine apex, comme `example.com`, vous devez configurer un domaine personnalisé dans vos paramètres de dépôt et au moins un enregistrement `ALIAS`, `ANAME` ou `A` avec votre fournisseur DNS.

{% data reusables.pages.www-and-apex-domain-recommendation %} Pour plus d’informations, consultez « [Configuration d’un sous-domaine](#configuring-a-subdomain) ».

{% data reusables.pages.navigate-site-repo %} {% data reusables.repositories.sidebar-settings %} {% data reusables.pages.sidebar-pages %}
4. Sous « Domaine personnalisé », entrez votre domaine personnalisé, puis cliquez sur **Enregistrer**. Si vous publiez votre site à partir d’une branche, cela crée un commit qui ajoute un fichier `CNAME` à la racine de votre branche source. Si vous publiez votre site avec un workflow {% data variables.product.prodname_actions %} personnalisé, aucun fichier `CNAME` n’est créé. Pour plus d’informations sur votre source de publication, consultez « [Configuration d’une source de publication pour votre site GitHub Pages](/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site) ».
  ![Bouton Enregistrer un domaine personnalisé](/assets/images/help/pages/save-custom-apex-domain.png)
5. Accédez à votre fournisseur DNS et créez un enregistrement `ALIAS`, `ANAME` ou `A`. Vous pouvez aussi créer des enregistrements `AAAA` pour la prise en charge d’IPv6. {% data reusables.pages.contact-dns-provider %}
    - Pour créer un enregistrement `ALIAS` ou `ANAME`, faites pointer votre domaine apex vers le domaine par défaut pour votre site. {% data reusables.pages.default-domain-information %}
    - Pour créer des enregistrements `A`, faites pointer votre domaine apex vers les adresses IP pour {% data variables.product.prodname_pages %}.
      ```shell
      185.199.108.153
      185.199.109.153
      185.199.110.153
      185.199.111.153
      ```
    - Pour créer des enregistrements `AAAA`, faites pointer votre domaine apex vers les adresses IP pour {% data variables.product.prodname_pages %}.
      ```shell
      2606:50c0:8000::153
      2606:50c0:8001::153
      2606:50c0:8002::153
      2606:50c0:8003::153
      ```

{% indented_data_reference reusables.pages.wildcard-dns-warning spaces=3 %} {% data reusables.command_line.open_the_multi_os_terminal %}
6. Pour vérifier que votre enregistrement DNS est correctement configuré, utilisez la commande `dig`, en remplaçant _EXAMPLE.COM_ par votre domaine apex. Vérifiez que les résultats correspondent aux adresses IP pour {% data variables.product.prodname_pages %} ci-dessus.
   - Pour les enregistrements `A`.
    ```shell
    $ dig EXAMPLE.COM +noall +answer -t A
    > EXAMPLE.COM    3600    IN A     185.199.108.153
    > EXAMPLE.COM    3600    IN A     185.199.109.153
    > EXAMPLE.COM    3600    IN A     185.199.110.153
    > EXAMPLE.COM    3600    IN A     185.199.111.153
    ```
   - Pour les enregistrements `AAAA`.
    ```shell
    $ dig EXAMPLE.COM +noall +answer -t AAAA
    > EXAMPLE.COM     3600    IN AAAA     2606:50c0:8000::153
    > EXAMPLE.COM     3600    IN AAAA     2606:50c0:8001::153
    > EXAMPLE.COM     3600    IN AAAA     2606:50c0:8002::153
    > EXAMPLE.COM     3600    IN AAAA     2606:50c0:8003::153
    ```
{% data reusables.pages.build-locally-download-cname %} {% data reusables.pages.enforce-https-custom-domain %}

## Configuration d’un domaine apex et de la variante de sous-domaine `www`

Lors de l’utilisation d’un domaine apex, nous vous recommandons de configurer votre site {% data variables.product.prodname_pages %} pour héberger du contenu à la fois au niveau du domaine apex et de la variante de sous-domaine `www` de ce domaine.

Pour configurer un sous-domaine `www` à côté du domaine apex, vous devez d’abord configurer un domaine apex en créant un enregistrement `ALIAS`, `ANAME` ou `A` auprès de votre fournisseur DNS. Pour plus d’informations, consultez [Configuration d’un domaine apex](#configuring-an-apex-domain).

Après avoir configuré le domaine apex, vous devez configurer un enregistrement CNAME auprès de votre fournisseur DNS.

1. Accédez à votre fournisseur DNS et créez un enregistrement `CNAME` qui fait pointer `www.example.com` vers le domaine par défaut pour votre site : `<user>.github.io` ou `<organization>.github.io`. N’incluez pas le nom du dépôt. {% data reusables.pages.contact-dns-provider %} {% data reusables.pages.default-domain-information %}
2. Pour vérifier que votre enregistrement DNS est correctement configuré, utilisez la commande `dig`, en remplaçant _WWW.EXAMPLE.COM_ par votre variante de sous-domaine `www`.
```shell
    $ dig WWW.EXAMPLE.COM +nostats +nocomments +nocmd
    > ;WWW.EXAMPLE.COM                     IN      A
    > WWW.EXAMPLE.COM.              3592    IN      CNAME   YOUR-USERNAME.github.io.
    > YOUR-USERNAME.github.io.      43192   IN      CNAME   GITHUB-PAGES-SERVER.
    > GITHUB-PAGES-SERVER.         22      IN      A       192.0.2.1
```
## Suppression d’un domaine personnalisé

{% data reusables.pages.navigate-site-repo %} {% data reusables.repositories.sidebar-settings %} {% data reusables.pages.sidebar-pages %}
4. Sous « Domaine personnalisé », cliquez sur **Supprimer**.
  ![Bouton Enregistrer un domaine personnalisé](/assets/images/help/pages/remove-custom-domain.png)

## Sécurisation de votre domaine personnalisé

{% data reusables.pages.secure-your-domain %} Pour plus d’informations, consultez « [Vérification de votre domaine personnalisé pour {% data variables.product.prodname_pages %}](/pages/configuring-a-custom-domain-for-your-github-pages-site/verifying-your-custom-domain-for-github-pages) ».

## Pour aller plus loin

- « [Résolution des problèmes liés aux domaines personnalisés et à {% data variables.product.prodname_pages %}](/articles/troubleshooting-custom-domains-and-github-pages) »
