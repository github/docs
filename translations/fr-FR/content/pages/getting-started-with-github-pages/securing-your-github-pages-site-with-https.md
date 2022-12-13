---
title: Sécurisation de votre site GitHub Pages avec HTTPS
intro: 'HTTPS ajoute une couche de chiffrement qui empêche d’autres utilisateurs d’espionner ou de falsifier le trafic vers votre site. Vous pouvez appliquer le protocole HTTPS à votre site {% data variables.product.prodname_pages %} pour rediriger en toute transparence toutes les requêtes HTTP vers HTTPS.'
product: '{% data reusables.gated-features.pages %}'
redirect_from:
  - /articles/securing-your-github-pages-site-with-https
  - /github/working-with-github-pages/securing-your-github-pages-site-with-https
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Pages
shortTitle: Secure site with HTTPS
ms.openlocfilehash: fb1ce5b0a0f5c19ac58ef0b93cb379f807a89fe4
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: '146273065'
---
Les personnes disposant d’autorisations d’administrateur sur un dépôt peuvent appliquer HTTPS pour un site {% data variables.product.prodname_pages %}.

## À propos de HTTPS et de {% data variables.product.prodname_pages %}

Tous les sites {% data variables.product.prodname_pages %}, y compris les sites correctement configurés avec un domaine personnalisé, prennent en charge HTTPS et l’application de HTTPS. Pour plus d’informations sur les domaines personnalisés, consultez « [À propos des domaines personnalisés et de {% data variables.product.prodname_pages %} » et ](/articles/about-custom-domains-and-github-pages) « [Résolution des problèmes liés aux domaines personnalisés et à {% data variables.product.prodname_pages %}](/articles/troubleshooting-custom-domains-and-github-pages#https-errors) ».

{% data reusables.pages.no_sensitive_data_pages %}

{% data reusables.pages.private_pages_are_public_warning %}

{% note %}

**Remarque :** RFC3280 indique que la longueur maximale du nom commun doit être de 64 caractères. Par conséquent, le nom de domaine entier de votre site {% data variables.product.prodname_pages %} doit être inférieur à 64 caractères pour qu’un certificat soit correctement créé.

{% endnote %}

## Application du protocole HTTPS pour votre site {% data variables.product.prodname_pages %}

{% data reusables.pages.navigate-site-repo %} {% data reusables.repositories.sidebar-settings %} {% data reusables.pages.sidebar-pages %}
3. Sous « {% data variables.product.prodname_pages %} », sélectionnez **Appliquer HTTPS**.
  ![Case à cocher Appliquer HTTPS](/assets/images/help/pages/enforce-https-checkbox.png)

## Résolution des problèmes de provisionnement de certificats (erreur de type « Certificat pas encore créé »)

Lorsque vous définissez ou modifiez votre domaine personnalisé dans les paramètres Pages, une vérification DNS automatique commence. Cette vérification détermine si vos paramètres DNS sont configurés pour autoriser {% data variables.product.prodname_dotcom %} à obtenir automatiquement un certificat. Si la vérification réussit, {% data variables.product.prodname_dotcom %} met en file d’attente un travail pour demander un certificat TLS à partir de [Let's Encrypt](https://letsencrypt.org/). Lors de la réception d’un certificat valide, {% data variables.product.prodname_dotcom %} le charge automatiquement sur les serveurs qui gèrent l’arrêt TLS pour Pages. Une fois ce processus terminé, une coche s’affiche à côté de votre nom de domaine personnalisé.

Le processus peut prendre du temps. Si le processus n’est pas terminé plusieurs minutes après avoir cliqué sur **Enregistrer**, essayez de cliquer sur **Supprimer** en regard de votre nom de domaine personnalisé. Retapez le nom de domaine, puis cliquez à nouveau sur **Enregistrer**. Cela annule et redémarre le processus de provisionnement.

## Résolution des problèmes liés aux contenus mixtes

Si vous activez HTTPS pour votre site {% data variables.product.prodname_pages %}, mais que le code HTML de votre site référence toujours des images, CSS ou JavaScript sur HTTP, votre site gère des *contenus mixtes*. La prise en charge de contenus mixtes peut rendre votre site moins sécurisé et causer des problèmes de chargement des ressources.

Pour supprimer les contenus mixtes de votre site, vérifiez que toutes vos ressources sont gérées sur HTTPS en remplaçant `http://` par `https://` dans le code HTML de votre site.

Les ressources se trouvent généralement aux emplacements suivants :
- Si votre site utilise Jekyll, vos fichiers HTML se trouvent probablement dans le dossier *_layouts*.
- CSS se trouve généralement dans la section `<head>` de votre fichier HTML.
- JavaScript se trouve généralement dans la section `<head>` ou juste avant la balise de fermeture `</body>`.
- Les images se trouvent souvent dans la section `<body>`.

{% tip %}

**Conseil :** Si vous ne trouvez pas vos ressources dans les fichiers sources de votre site, essayez de rechercher dans les fichiers sources de votre site `http` dans votre éditeur de texte ou sur {% data variables.product.product_name %}.

{% endtip %}

### Exemples de ressources référencées dans un fichier HTML

| Type de ressource | HTTP                                      | HTTPS                             |
|:----------:|:-----------------------------------------:|:---------------------------------:|
| CSS        | `<link rel="stylesheet" href="http://example.com/css/main.css">` | `<link rel="stylesheet" href="https://example.com/css/main.css">`
| JavaScript   |  `<script type="text/javascript" src="http://example.com/js/main.js"></script>`  |   `<script type="text/javascript" src="https://example.com/js/main.js"></script>`
| Image        |  `<a href="http://www.somesite.com"><img src="http://www.example.com/logo.jpg" alt="Logo"></a>`  | `<a href="https://www.somesite.com"><img src="https://www.example.com/logo.jpg" alt="Logo"></a>`  
