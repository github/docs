---
title: Affichage d’un bouton Sponsor dans votre dépôt
intro: Vous pouvez ajouter un bouton Sponsor dans votre dépôt pour accroître la visibilité des options de financement de votre projet open source.
redirect_from:
  - /github/building-a-strong-community/displaying-a-sponsor-button-in-your-repository
  - /articles/displaying-a-sponsor-button-in-your-repository
  - /github/administering-a-repository/displaying-a-sponsor-button-in-your-repository
  - /github/administering-a-repository/managing-repository-settings/displaying-a-sponsor-button-in-your-repository
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Repositories
shortTitle: Display a sponsor button
ms.openlocfilehash: 8fce9d4fe2b4aa697fa5d5a0ef0dfafb1caa4844
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147558341'
---
## À propos des fichiers FUNDING

Vous pouvez configurer votre bouton Sponsor en modifiant un fichier _FUNDING.yml_ dans le dossier `.github` votre dépôt, sur la branche par défaut. Vous pouvez configurer le bouton pour inclure des développeurs sponsorisés dans {% data variables.product.prodname_sponsors %}, des plateformes de financement externes ou une URL de financement personnalisée. Pour plus d’informations sur {% data variables.product.prodname_sponsors %}, consultez « [À propos de GitHub Sponsors](/sponsors/getting-started-with-github-sponsors/about-github-sponsors). »

Vous pouvez ajouter un nom d’utilisateur, un nom de package ou un nom de projet par plateforme de financement externe et jusqu’à quatre URL personnalisées. Vous pouvez ajouter une organisation et jusqu’à quatre développeurs sponsorisés dans {% data variables.product.prodname_sponsors %}. Ajoutez chaque plateforme sur une nouvelle ligne à l’aide de la syntaxe suivante :

Plateforme | Syntaxe
-------- | -----
[LFX Mentorship (anciennement CommunityBridge)](https://lfx.linuxfoundation.org/tools/mentorship) | `community_bridge: PROJECT-NAME`
[{% data variables.product.prodname_sponsors %}](https://github.com/sponsors) | `github: USERNAME` ou `github: [USERNAME, USERNAME, USERNAME, USERNAME]`
[IssueHunt](https://issuehunt.io/) | `issuehunt: USERNAME`
[Ko-fi](https://ko-fi.com/) | `ko_fi: USERNAME`
[Liberapay](https://en.liberapay.com/) | `liberapay: USERNAME`
[Open Collective](https://opencollective.com/) | `open_collective: USERNAME`
[Otechie](https://otechie.com/)| `otechie: USERNAME`
[Patreon](https://www.patreon.com/) | `patreon: USERNAME`
[Tidelift](https://tidelift.com/) | `tidelift: PLATFORM-NAME/PACKAGE-NAME`
URL personnalisée | `custom: LINK1` ou `custom: [LINK1, LINK2, LINK3, LINK4]`

Pour Tidelift, utilisez la syntaxe `platform-name/package-name` avec les noms de plateforme suivants :

Langage | Nom de la plateforme
-------- | -------------
JavaScript | `npm`
Python | `pypi`
Ruby | `rubygems`
Java | `maven`
PHP | `packagist`
C# | `nuget`

Voici un exemple de fichier _FUNDING.yml_ :
```
github: [octocat, surftocat]
patreon: octocat
tidelift: npm/octo-package
custom: ["https://www.paypal.me/octocat", octocat.com]
```

{% note %}

**Remarque :** si une URL personnalisée dans un tableau inclut `:`, vous devez l’encapsuler entre guillemets. Par exemple : `"https://www.paypal.me/octocat"`.

{% endnote %}

Vous pouvez créer un sponsor par défaut pour votre organisation ou votre compte personnel. Pour plus d’informations, consultez « [Création d’un fichier d’intégrité de la communauté par défaut](/communities/setting-up-your-project-for-healthy-contributions/creating-a-default-community-health-file) ».

{% note %}

Les liens de financement permettent à des projets open source de recevoir un soutien financier direct de leur communauté. Nous ne prenons pas en charge l’utilisation de liens de financement à d’autres fins, comme pour faire de la publicité, ou soutenir des groupes politiques, communautaires ou de bienfaisance. Si vous avez des questions sur la prise en charge de votre utilisation prévue, contactez {% data variables.contact.contact_support %}.

{% endnote %}

## Affichage d’un bouton Sponsor dans votre dépôt

Toute personne disposant d’autorisations d’administration peut activer un bouton Sponsor dans un dépôt.

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %}
3. Sous Fonctionnalités, sélectionnez **Sponsorisations**.
  ![Case à cocher pour activer Sponsorisations](/assets/images/help/sponsors/sponsorships-checkbox.png)
4. Sous « Sponsorisations », cliquez sur le **bouton Configurer un sponsor** ou **Remplacer des liens de financement**.
  ![Bouton pour configurer un sponsor](/assets/images/help/sponsors/sponsor-set-up-button.png)
5. Dans l’éditeur de fichier, suivez les instructions du fichier _FUNDING.yml_ pour ajouter des liens à vos emplacements de financement.
  ![Modifiez le fichier FUNDING pour ajouter des liens vers des emplacements de financement](/assets/images/help/sponsors/funding-yml-file.png) {% data reusables.files.write_commit_message %} {% data reusables.files.choose_commit_branch %} {% data reusables.files.propose_new_file %}

## Pour aller plus loin
- « [À propos de {% data variables.product.prodname_sponsors %} pour les contributeurs open source](/sponsors/receiving-sponsorships-through-github-sponsors/about-github-sponsors-for-open-source-contributors) »
- « [FAQ avec l’équipe {% data variables.product.prodname_sponsors %} team](https://github.blog/2019-06-12-faq-with-the-github-sponsors-team/) » sur {% data variables.product.prodname_blog %}
