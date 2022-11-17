---
title: Résolution des problèmes liés aux domaines personnalisés et aux pages GitHub Pages
intro: 'Vous pouvez rechercher des erreurs courantes pour résoudre les problèmes liés aux domaines personnalisés ou HTTPS pour votre site {% data variables.product.prodname_pages %}.'
redirect_from:
  - /articles/my-custom-domain-isn-t-working
  - /articles/custom-domain-isn-t-working
  - /articles/troubleshooting-custom-domains
  - /articles/troubleshooting-custom-domains-and-github-pages
  - /github/working-with-github-pages/troubleshooting-custom-domains-and-github-pages
product: '{% data reusables.gated-features.pages %}'
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Pages
shortTitle: Troubleshoot a custom domain
ms.openlocfilehash: ce6251dbe96d531462c5c664dc9000f138059889
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147428387'
---
## Erreurs de _CNAME_

{% ifversion pages-custom-workflow %}Si vous publiez à partir d’un workflow {% data variables.product.prodname_actions %} personnalisé, tout fichier _CNAME_ est ignoré et n’est pas requis.{% endif %}

Si vous publiez à partir d’une branche, les domaines personnalisés sont stockés dans un fichier _CNAME_ à la racine de votre source de publication. Vous pouvez ajouter ou mettre à jour ce fichier via vos paramètres de dépôt, ou bien manuellement. Pour plus d’informations, consultez « [Gestion d’un domaine personnalisé pour votre site {% data variables.product.prodname_pages %}](/articles/managing-a-custom-domain-for-your-github-pages-site) ».

Pour que votre site soit rendu sur le domaine approprié, vérifiez que votre fichier _CNAME_ existe toujours dans le dépôt. Par exemple, de nombreux générateurs de sites statiques forcent l’envoi (push) vers votre dépôt, ce qui peut remplacer le fichier _CNAME_ qui a été ajouté à votre dépôt quand vous avez configuré votre domaine personnalisé. Si vous générez votre site localement et que vous poussez les fichiers générés vers {% data variables.product.product_name %}, veillez à d’abord tirer (pull) le commit qui a ajouté le fichier _CNAME_ à votre dépôt local, de sorte que le fichier soit inclus dans la build.

Vérifiez ensuite que le fichier _CNAME_ est correctement mis en forme.

- Le nom du fichier _CNAME_ doit être en majuscules.
- Le fichier _CNAME_ ne peut contenir qu’un seul domaine. Pour faire pointer plusieurs domaines vers votre site, vous devez configurer une redirection via votre fournisseur DNS.
- Le fichier _CNAME_ doit contenir seulement le nom de domaine. Par exemple, `www.example.com`, `blog.example.com` ou `example.com`.
- Le nom de domaine doit être unique parmi tous les sites {% data variables.product.prodname_pages %}. Par exemple, si le fichier _CNAME_ d’un autre dépôt contient `example.com`, vous ne pouvez pas utiliser `example.com` dans le fichier _CNAME_ pour votre dépôt.

## Configuration DNS incorrecte

Si vous rencontrez des problèmes pour faire pointer le domaine par défaut pour votre site vers votre domaine personnalisé, contactez votre fournisseur DNS.

Vous pouvez aussi utiliser une des méthodes suivantes pour tester si les enregistrements DNS de votre domaine personnalisé sont correctement configurés :

- Un outil CLI comme `dig`. Pour plus d’informations, consultez « [Gestion d’un domaine personnalisé pour votre site {% data variables.product.prodname_pages %}](/articles/managing-a-custom-domain-for-your-github-pages-site) ».
- Un outil de recherche DNS en ligne.

## Noms de domaine personnalisés qui ne sont pas pris en charge

Si votre domaine personnalisé n’est pas pris en charge, il peut être nécessaire de changer votre domaine pour un domaine pris en charge. Vous pouvez aussi contacter votre fournisseur DNS pour voir s’il offre des services de transfert pour les noms de domaine.

Vérifiez que votre site :
- N’utilise pas plusieurs domaines apex. Par exemple, `example.com` et `anotherexample.com`.
- N’utilise pas plusieurs sous-domaines `www`. Par exemple, `www.example.com` et `www.anotherexample.com`.
- N’utilise pas à la fois un domaine apex et un sous-domaine personnalisé. Par exemple, `example.com` et `docs.example.com`.

  La seule exception est le sous-domaine `www`. S’il est configuré correctement, le sous-domaine `www` est redirigé automatiquement vers le domaine apex. Pour plus d’informations, consultez « [Gestion d’un domaine personnalisé pour votre site {% data variables.product.prodname_pages %}](/github/working-with-github-pages/managing-a-custom-domain-for-your-github-pages-site#configuring-an-apex-domain) ».

{% data reusables.pages.wildcard-dns-warning %}

Pour obtenir la liste des domaines personnalisés pris en charge, consultez « [À propos des domaines personnalisés et de {% data variables.product.prodname_pages %}](/articles/about-custom-domains-and-github-pages/#supported-custom-domains) ».

## Erreurs HTTPS

Les sites {% data variables.product.prodname_pages %} en utilisant des domaines personnalisés correctement configurés avec des enregistrements DNS `CNAME`, `ALIAS`, `ANAME` ou `A` sont accessibles via HTTPS. Pour plus d’informations, consultez « [Sécurisation de votre site {% data variables.product.prodname_pages %} avec HTTPS](/articles/securing-your-github-pages-site-with-https) ».

Cela peut prendre jusqu’à une heure pour que votre site devienne disponible via HTTPS après avoir configuré votre domaine personnalisé. Après avoir mis à jour les paramètres DNS existants, il peut être nécessaire de supprimer et de réajouter votre domaine personnalisé au dépôt de votre site pour déclencher le processus d’activation du protocole HTTPS. Pour plus d’informations, consultez « [Gestion d’un domaine personnalisé pour votre site {% data variables.product.prodname_pages %}](/articles/managing-a-custom-domain-for-your-github-pages-site) ».

Si vous utilisez des enregistrements d’autorisation d’autorité de certification (CAA), au moins un enregistrement CAA doit exister avec la valeur `letsencrypt.org` pour que votre site soit accessible via HTTPS. Pour plus d’informations, consultez « [Autorisation d’autorité de certification (CAA)](https://letsencrypt.org/docs/caa/) » dans la documentation Let’s Encrypt.

## Mise en forme d’URL sur Linux

Si l’URL de votre site contient un nom d’utilisateur ou un nom d’organisation qui commence ou se termine par un tiret, ou contient des tirets consécutifs, les personnes qui naviguent avec Linux vont recevoir une erreur du serveur quand elles tentent de visiter votre site. Pour résoudre ce problème, modifiez votre nom d’utilisateur {% data variables.product.product_name %} en y supprimant les caractères non alphanumériques. Pour plus d’informations, consultez « [Modification de votre nom d’utilisateur {% data variables.product.prodname_dotcom %}](/articles/changing-your-github-username/) ».

## Cache du navigateur

Si vous avez récemment modifié ou supprimé votre domaine personnalisé et que vous ne pouvez pas accéder à la nouvelle URL dans votre navigateur, il peut être nécessaire d’effacer le cache de votre navigateur pour atteindre la nouvelle URL. Pour plus d’informations sur l’effacement de votre cache, consultez la documentation de votre navigateur.
