---
title: Résolution des erreurs de build Jekyll pour les sites GitHub Pages
intro: 'Vous pouvez utiliser les messages d’erreur de build Jekyll pour résoudre les problèmes liés à votre site {% data variables.product.prodname_pages %}.'
redirect_from:
  - /articles/page-build-failed-missing-docs-folder
  - /articles/page-build-failed-invalid-submodule
  - /articles/page-build-failed-missing-submodule
  - /articles/page-build-failed-markdown-errors
  - /articles/page-build-failed-config-file-error
  - /articles/page-build-failed-unknown-tag-error
  - /articles/page-build-failed-tag-not-properly-terminated
  - /articles/page-build-failed-tag-not-properly-closed
  - /articles/page-build-failed-file-does-not-exist-in-includes-directory
  - /articles/page-build-failed-file-is-a-symlink
  - /articles/page-build-failed-symlink-does-not-exist-within-your-sites-repository
  - /articles/page-build-failed-file-is-not-properly-utf-8-encoded
  - /articles/page-build-failed-invalid-post-date
  - /articles/page-build-failed-invalid-sass-or-scss
  - /articles/page-build-failed-invalid-highlighter-language
  - /articles/page-build-failed-relative-permalinks-configured
  - /articles/page-build-failed-syntax-error-in-for-loop
  - /articles/page-build-failed-invalid-yaml-in-data-file
  - /articles/page-build-failed-date-is-not-a-valid-datetime
  - /articles/troubleshooting-github-pages-builds
  - /articles/troubleshooting-jekyll-builds
  - /articles/troubleshooting-jekyll-build-errors-for-github-pages-sites
  - /github/working-with-github-pages/troubleshooting-jekyll-build-errors-for-github-pages-sites
product: '{% data reusables.gated-features.pages %}'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pages
shortTitle: Troubleshoot Jekyll errors
ms.openlocfilehash: 224f626df144ad249a799767984118778202e7b4
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/11/2022
ms.locfileid: '147883464'
---
## Résolution des erreurs de build

Si Jekyll rencontre une erreur lors de la génération de votre site {% data variables.product.prodname_pages %} en local ou sur {% data variables.product.product_name %}, vous pouvez utiliser des messages d’erreur pour la résoudre. Pour plus d’informations sur les messages d’erreur et savoir comment les voir, consultez « [À propos des erreurs de build Jekyll pour les sites {% data variables.product.prodname_pages %}](/articles/about-jekyll-build-errors-for-github-pages-sites) ».

Si vous avez reçu un message d’erreur générique, recherchez les problèmes courants.
- Vous utilisez des plug-ins non pris en charge. Pour plus d’informations, consultez « [À propos de {% data variables.product.prodname_pages %} et de Jekyll](/articles/about-github-pages-and-jekyll#plugins) ».{% ifversion fpt or ghec %}
- Votre dépôt a dépassé nos limites de taille de dépôt. Pour plus d’informations, consultez « [Qu’est-ce que mon quota de disques ?](/articles/what-is-my-disk-quota) » {% endif %}
- Vous avez changé le paramètre `source` dans votre fichier *_config.yml*. {% ifversion pages-custom-workflow %}Si vous publiez votre site à partir d’une branche, {% endif %}{% data variables.product.prodname_pages %} remplace ce paramètre pendant le processus de génération.
- Un nom de fichier dans vos fichiers publiés contient un signe deux-points (`:`) qui n’est pas pris en charge.

Si vous avez reçu un message d’erreur spécifique, consultez les informations de dépannage pour le message d’erreur ci-dessous.

{% ifversion pages-custom-workflow %}Une fois que vous avez corrigé les erreurs, déclenchez une autre build en poussant les changements vers la branche source de votre site (si vous publiez à partir d’une branche) ou en déclenchant votre workflow {% data variables.product.prodname_actions %} personnalisé (si vous publiez avec {% data variables.product.prodname_actions %}).{% else %}Une fois que vous avez corrigé les erreurs, poussez les changements vers la source de publication de votre site pour déclencher une autre build sur {% data variables.product.product_name %}.{% endif %}

## Erreur dans le fichier de configuration

Cette erreur signifie que votre site n’a pas pu être généré parce que le fichier *_config.yml* contient des erreurs de syntaxe.

Pour les résoudre, assurez-vous que votre fichier *_config.yml* suit les règles suivantes :

{% data reusables.pages.yaml-rules %}

{% data reusables.pages.yaml-linter %}

## La date n’est pas valide

Cette erreur signifie qu’une des pages de votre site contient une date non valide.

Pour la résoudre, recherchez dans le fichier du message d’erreur et les dispositions du fichier les appels à tous les filtres Liquid associés à la date. Assurez-vous que toutes les variables passées dans les filtres Liquid associés à la date ont des valeurs dans tous les cas et ne passent jamais `nil` ou `""`. Pour plus d’informations, consultez « [Filtres Liquid](https://help.shopify.com/en/themes/liquid/filters) » dans la documentation de Liquid.

## Le fichier n’existe pas dans le répertoire includes

Cette erreur signifie que votre code fait référence à un fichier qui n’existe pas dans votre répertoire *_includes*.

{% data reusables.pages.search-for-includes %} Si l’un des fichiers référencés n’est pas dans le répertoire *_includes*, copiez ou déplacez le fichier dans le répertoire *_includes*.

## Le fichier est un lien symbolique

Cette erreur signifie que votre code référence un fichier lien symbolique qui n’existe pas dans les fichiers publiés de votre site.

{% data reusables.pages.search-for-includes %} Si l’un des fichiers référencés est un lien symbolique, copiez ou déplacez le fichier dans le répertoire *_includes*.

## Le fichier n’est pas correctement codé UTF-8

Cette erreur signifie que vous avez utilisé des caractères non latins, comme `日本語`, sans indiquer à l’ordinateur de s’attendre à ces symboles.

Pour la résoudre, forcez l’encodage UTF-8 en ajoutant la ligne suivante à votre fichier *_config.yml* :
```yaml
encoding: UTF-8
```

## Langage de colorateur non valide

Cette erreur signifie que vous avez spécifié un colorateur de syntaxe autre que [Rouge](https://github.com/jneen/rouge) ou [Pygments](http://pygments.org/) dans votre fichier de configuration.

Pour la résoudre, mettez à jour votre fichier *_config.yml* pour spécifier [Rouge](https://github.com/jneen/rouge) ou [Pygments](http://pygments.org/). Pour plus d’informations, consultez « [À propos de {% data variables.product.product_name %} et de Jekyll](/articles/about-github-pages-and-jekyll#syntax-highlighting) ».

## Date de publication non valide

Cette erreur signifie qu’une publication sur votre site contient une date non valide dans le nom de fichier ou l’en-tête YAML.

Pour la résoudre, assurez-vous que toutes les dates sont au format AAAA-MM-JJ HH:MM:SS pour UTC et qu’elles sont issues d’un vrai calendrier. Pour spécifier un fuseau horaire avec un décalage par rapport à UTC, utilisez le format AAAA-MM-DD HH:MM:MM:SS +/-TTTT, comme `2014-04-18 11:30:00 +0800`.

Si vous spécifiez un format de date dans votre fichier *_config.yml*, vérifiez que le format est correct.

## Sass ou SCSS non valide

Cette erreur signifie que votre dépôt contient un fichier SAss ou SCSS avec du contenu non valide.

Pour la résoudre, vérifiez le numéro de ligne compris dans le message d’erreur pour trouver le fichier Sass ou SCSS non valide. Pour éviter de nouvelles erreurs, installez un linter Sass ou SCSS pour votre éditeur de texte favori.

## Sous-module non valide

Cette erreur signifie que votre dépôt comprend un sous-module qui n’a pas été correctement initialisé.

{% data reusables.pages.remove-submodule %}

Si vous souhaitez utiliser le sous-module, assurez-vous d’utiliser `https://` lors du référencement du sous-module (non `http://`) et que le sous-module est dans un dépôt public.

## YAML non valide dans le fichier de données

Cette erreur signifie qu’un ou plusieurs fichiers du dossier *_data* contient un fichier YAML non valide.

Pour la résoudre, vérifiez que les fichiers YAML de votre dossier *_data* suivent ces règles :

{% data reusables.pages.yaml-rules %}

{% data reusables.pages.yaml-linter %}

Pour plus d’informations sur les fichiers de données Jekyll, consultez « [Fichiers de données](https://jekyllrb.com/docs/datafiles/) » dans la documentation de Jekyll.

## Erreurs Markdown

Cette erreur signifie que votre dépôt contient des erreurs Markdown.

Pour la résoudre, veillez à utiliser un processeur Markdown pris en charge. Pour plus d’informations, consultez « [Définition d’un processeur Markdown pour votre site {% data variables.product.prodname_pages %} avec Jekyll](/articles/setting-a-markdown-processor-for-your-github-pages-site-using-jekyll) ».

Vérifiez ensuite que le fichier dans le message d’erreur utilise une syntaxe Markdown valide. Pour plus d’informations, consultez « [Markdown : Syntaxe](https://daringfireball.net/projects/markdown/syntax) » sur Daring Fireball.

## Dossier docs manquant

Cette erreur signifie que vous avez choisi le dossier `docs` d’une branche comme source de publication, alors qu’il n’existe aucun dossier `docs` à la racine de votre dépôt sur cette branche.

Pour la résoudre, si votre dossier `docs` a été déplacé par erreur, essayez de ramener le dossier `docs` à la racine de votre dépôt sur la branche que vous avez choisie pour votre source de publication. Si le dossier `docs` a été supprimé par erreur, vous pouvez :
- Utiliser Git pour rétablir ou annuler la suppression. Pour plus d’informations, consultez « [git-revert](https://git-scm.com/docs/git-revert.html) » dans la documentation Git.
- Créez un dossier `docs` à la racine de votre dépôt sur la branche que vous avez choisie pour votre source de publication et ajoutez les fichiers sources de votre site au dossier. Pour plus d’informations, consultez « [Création de fichiers](/articles/creating-new-files) ».
- Changez de source de publication. Pour plus d’informations, consultez « [Configuration d’une source de publication pour {% data variables.product.prodname_pages %}](/articles/configuring-a-publishing-source-for-github-pages) ».

## Sous-module manquant

Cette erreur signifie que votre dépôt comprend un sous-module qui n’existe pas ou qui n’a pas été correctement initialisé.

{% data reusables.pages.remove-submodule %}

Si vous souhaitez utiliser un sous-module, initialisez-le. Pour plus d’informations, consultez « [Outils Git - Sous-modules](https://git-scm.com/book/en/v2/Git-Tools-Submodules) » dans le manuel _Pro Git_.

## Liens permanents relatifs configurés

Cette erreur signifie que vous avez des liens permanents relatifs qui ne sont pas pris en charge par {% data variables.product.prodname_pages %} dans votre fichier *_config.yml*.

Les liens permanents sont des URL permanentes qui référencent une page particulière sur votre site. Les liens permanents absolus commencent à la racine du site, tandis que les liens permanents relatifs commencent au dossier contenant la page référencée. {% data variables.product.prodname_pages %} et Jekyll ne prennent plus en charge les liens permanents relatifs. Pour plus d’informations sur les liens permanents, consultez « [Liens permanents](https://jekyllrb.com/docs/permalinks/) » dans la documentation de Jekyll.

Pour résoudre cette erreur, supprimez la ligne `relative_permalinks` de votre fichier *_config.yml* et remplacez les liens permanents relatifs de votre site par des liens permanents absolus. Pour plus d’informations, consultez « [Modification des fichiers](/repositories/working-with-files/managing-files/editing-files) ».

## Un lien symbolique n’existe pas dans le dépôt de votre site

Cette erreur signifie que votre site contient un lien symbolique (symlink) qui n’existe pas dans les fichiers publiés de votre site. Pour plus d’informations sur les liens symboliques, consultez « [Lien symbolique](https://en.wikipedia.org/wiki/Symbolic_link) » sur Wikipédia.

Pour la résoudre, déterminez si le fichier dans le message d’erreur est utilisé pour générer votre site. Si ce n’est pas le cas, ou si vous ne souhaitez pas que le fichier soit un lien symbolique, supprimez le fichier. Si le fichier lien symbolique est nécessaire pour générer votre site, assurez-vous que le fichier ou le répertoire que le lien symbolique référence se trouve dans les fichiers publiés de votre site. Pour inclure des ressources externes, envisagez d’utiliser {% ifversion fpt or ghec %}`git submodule` ou {% endif %}un gestionnaire de package tiers tel que [Bower](https://bower.io/).{% ifversion fpt or ghec %} Pour plus d’informations, consultez « [Utilisation de sous-modules avec {% data variables.product.prodname_pages %}](/articles/using-submodules-with-github-pages) ».{% endif %}

## Erreur de syntaxe dans la boucle « for »

Cette erreur signifie que votre code comprend une syntaxe non valide dans une déclaration de boucle `for` Liquid.

Pour la résoudre, vérifiez que toutes les boucles `for` du fichier dans le message d’erreur ont une syntaxe appropriée. Pour plus d’informations sur la syntaxe appropriée pour les boucles `for`, consultez « [Balises d’itération](https://help.shopify.com/en/themes/liquid/tags/iteration-tags#for) » dans la documentation de Liquid.

## Balise mal fermée

Ce message d’erreur signifie que votre code inclut une balise logique qui n’est pas bien fermée. Par exemple, {% raw %}`{% capture example_variable %}` doit être fermé avec `{% endcapture %}`{% endraw %}.

Pour résoudre ce message d’erreur, vérifiez que toutes les balises logiques du fichier dans le message d’erreur sont bien fermées. Pour plus d’informations, consultez « [Balises Liquid](https://help.shopify.com/en/themes/liquid/tags) » dans la documentation de Liquid.

## Balise mal terminée

Cette erreur signifie que votre code inclut une balise de sortie qui n’est pas bien terminée. Par exemple, {% raw %}`{{ page.title }` au lieu de `{{ page.title }}`{% endraw %}.

Pour résoudre ce message d’erreur, vérifiez que toutes les balises de sortie du fichier dans le message d’erreur se terminent par `}}`. Pour plus d’informations, consultez « [Objets Liquid](https://help.shopify.com/en/themes/liquid/objects) » dans la documentation de Liquid.

## Erreur de balise inconnue

Cette erreur signifie que votre code contient une balise Liquid non reconnue.

Pour la résoudre, assurez-vous que toutes les balises Liquid dans le fichier du message d’erreur correspondent aux variables par défaut de Jekyll et qu’il n’y a pas de fautes de frappe dans les noms des balises. Pour obtenir la liste des variables par défaut, consultez « [Variables](https://jekyllrb.com/docs/variables/) » dans la documentation de Jekyll.

Les plug-ins non pris en charge sont une source courante de balises non reconnues. Si vous utilisez un plug-in non pris en charge dans votre site en générant votre site en local et en poussant vos fichiers statiques vers {% data variables.product.product_name %}, assurez-vous que le plug-in n’introduit pas de balises qui ne sont pas dans les variables par défaut de Jekyll. Pour obtenir la liste des plug-ins pris en charge, consultez « [À propos de {% data variables.product.prodname_pages %} et de Jekyll](/articles/about-github-pages-and-jekyll#plugins) ».
