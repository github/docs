---
title: GitHub Copilot
intro: '{% data variables.product.prodname_copilot %} peut vous aider à coder en proposant des suggestions de type autocomplétion. Vous pouvez découvrir comment fonctionne {% data variables.product.prodname_copilot %} et ce que vous devez prendre en considération lors de l’utilisation de {% data variables.product.prodname_copilot %}.'
versions:
  feature: copilot
topics:
  - Copilot
shortTitle: About GitHub Copilot
ms.openlocfilehash: 4ff4c73e61c10c2c3f75d9581bf426266122550b
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 12/09/2022
ms.locfileid: '148192777'
---
## À propos de {% data variables.product.prodname_copilot %}

{% data variables.product.prodname_copilot %} est un programmeur en binôme d’IA qui offre des suggestions de type autocomplétion pendant que vous codez. Vous pouvez recevoir des suggestions de {% data variables.product.prodname_copilot %} soit en commençant à écrire le code que vous voulez utiliser, soit en écrivant un commentaire en langage naturel décrivant ce que vous voulez que le code fasse. {% data variables.product.prodname_copilot %} analyse le contexte du fichier que vous modifiez, ainsi que les fichiers connexes, et vous propose des suggestions depuis votre éditeur de texte. {% data variables.product.prodname_copilot %} repose sur OpenAI Codex, un nouveau système d’IA créé par OpenAI.

{% data variables.product.prodname_copilot %} est entraîné sur tous les langages qui apparaissent dans les dépôts publics. Pour chaque langage, la qualité des suggestions que vous recevez peut dépendre du volume et de la diversité des données d’entraînement pour ce langage. Par exemple, JavaScript est bien représenté dans les dépôts publics et est l’un des langages les mieux pris en charge par {% data variables.product.prodname_copilot %}. Les langages avec moins de représentation dans les dépôts publics peuvent produire moins de suggestions fiables.

{% data variables.product.prodname_copilot %} est disponible comme extension dans Visual Studio Code, Visual Studio, Neovim et la suite d’IDE JetBrains. Pour plus d’informations, consultez « [Bien démarrer avec {% data variables.product.prodname_copilot %}.](/copilot/getting-started-with-github-copilot) ».

## Utilisation de {% data variables.product.prodname_copilot %}

Vous pouvez voir des exemples concrets de {% data variables.product.prodname_copilot %} en action. Pour plus d’informations, consultez le site web [{% data variables.product.prodname_copilot %}](https://copilot.github.com/). 

{% data variables.product.prodname_copilot %} propose des suggestions à partir d’un modèle qu’OpenAI a créé à partir de milliards de lignes de code open source. Par conséquent, l’ensemble de formation pour {% data variables.product.prodname_copilot %} peut contenir des modèles de codage non sécurisés, des bogues ou des références à des API ou des idiomes obsolètes. Lorsque {% data variables.product.prodname_copilot %} produit des suggestions basées sur ces données de formation, ces suggestions peuvent également contenir des modèles indésirables. 

Vous êtes responsable de la sécurité et de la qualité de votre code. Nous vous recommandons de prendre les mêmes précautions lorsque vous utilisez le code généré par {% data variables.product.prodname_copilot %} que lorsque vous utilisez tout code que vous n’avez pas écrit vous-même. Ces précautions incluent des tests rigoureux, l’analyse des IP et le suivi des vulnérabilités de sécurité. {% data variables.product.company_short %} fournit un certain nombre de fonctionnalités pour vous aider à surveiller et à améliorer la qualité du code, comme {% data variables.product.prodname_actions %}, {% data variables.product.prodname_dependabot %}, {% data variables.product.prodname_codeql %} et {% data variables.product.prodname_code_scanning %}. Toutes ces fonctionnalités sont gratuites dans les référentiels publics. Pour plus d’informations, consultez « [Comprendre {% data variables.product.prodname_actions %}](/actions/learn-github-actions/understanding-github-actions) » et « [Fonctionnalités de sécurité de {% data variables.product.company_short %}](/code-security/getting-started/github-security-features) ».

{% data variables.product.prodname_copilot %} utilise des filtres pour bloquer les mots offensants dans les invites et éviter de produire des suggestions dans des contextes sensibles. Nous nous engageons à améliorer constamment le système de filtrage afin de détecter et de supprimer plus intelligemment les suggestions offensantes générées par {% data variables.product.prodname_copilot %}, notamment les résultats biaisés, discriminatoires ou abusifs. Si vous constatez une suggestion offensante générée par {% data variables.product.prodname_copilot %}, veuillez signaler cette suggestion directement à copilot-safety@github.com afin que nous puissions améliorer nos sécurités. 

## À propos de la facturation pour {% data variables.product.prodname_copilot %}

{% data variables.product.prodname_copilot %} est une fonctionnalité payante, nécessitant un abonnement mensuel ou annuel. Les abonnements {% data variables.product.prodname_copilot %} peuvent être payés et gérés via un compte personnel sur {% data variables.product.prodname_dotcom_the_website %} avec {% data variables.product.prodname_copilot_for_individuals %}, ou payés et gérés de façon centralisée via un compte d’entreprise sur {% data variables.product.prodname_ghe_cloud %} avec {% data variables.product.prodname_copilot_for_business %}.

Les étudiants vérifiés, enseignants et responsables de projets open source connus sur {% data variables.product.prodname_dotcom %} peuvent utiliser gratuitement {% data variables.product.prodname_copilot_individuals_short %}. Si vous répondez aux critères d’un abonnement {% data variables.product.prodname_copilot_individuals_short %} gratuit, vous en êtes automatiquement informé lorsque vous visitez la page des abonnements {% data variables.product.prodname_copilot %}. Si vous ne répondez pas aux critères d’un abonnement {% data variables.product.prodname_copilot_individuals_short %} gratuit, il vous est proposé un essai gratuit de 60 jours, après quoi un abonnement payant sera nécessaire pour poursuivre l’utilisation. {% data variables.product.prodname_copilot_for_business %} ne propose pas d’essai gratuit. Pour plus d’informations, consultez « [À propos de la facturation pour {% data variables.product.prodname_copilot %}](/billing/managing-billing-for-github-copilot/about-billing-for-github-copilot) ».

## À propos de la licence pour le plug-in {% data variables.product.prodname_copilot %} dans les IDE JetBrains

{% data variables.product.prodname_dotcom %}, Inc. est le concédant de licence du plug-in JetBrains. Le contrat de licence utilisateur final pour ce plug-in est [Conditions pour les produits et fonctionnalités supplémentaires de {% data variables.product.prodname_dotcom %}](/free-pro-team@latest/site-policy/github-terms/github-terms-for-additional-products-and-features#github-copilot), et l’utilisation de ce plug-in est soumise à ces conditions. JetBrains n’a aucune responsabilité en lien avec le plug-in ou ce contrat. En utilisant le plug-in, vous acceptez les conditions ci-dessus.

## Pour aller plus loin

- « [Conditions générales des produits et fonctionnalités supplémentaires de {% data variables.product.company_short %}](/free-pro-team@latest/site-policy/github-terms/github-terms-for-additional-products-and-features#github-copilot) »{% ifversion ghec %}
- « [Déclaration de confidentialité de {% data variables.product.prodname_copilot_for_business %}](/free-pro-team@latest/site-policy/privacy-policies/github-copilot-for-business-privacy-statement) »{% endif %}
