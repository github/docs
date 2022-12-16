---
title: Résolution des problèmes de détection des dépendances vulnérables
intro: 'Si les informations de dépendance signalées par {% data variables.product.product_name %} ne sont pas celles que vous attendiez, il y a un certain nombre de points à prendre en compte et plusieurs choses que vous pouvez vérifier.'
shortTitle: Troubleshoot vulnerability detection
redirect_from:
  - /github/managing-security-vulnerabilities/troubleshooting-the-detection-of-vulnerable-dependencies
  - /code-security/supply-chain-security/troubleshooting-the-detection-of-vulnerable-dependencies
  - /code-security/supply-chain-security/managing-vulnerabilities-in-your-projects-dependencies/troubleshooting-the-detection-of-vulnerable-dependencies
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: how_to
topics:
  - Dependabot
  - Alerts
  - Troubleshooting
  - Errors
  - Security updates
  - Dependencies
  - Vulnerabilities
  - CVEs
  - Repositories
ms.openlocfilehash: 78ab86bf3314717a1f79b858496c4eb9fa323819
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148106532'
---
{% data reusables.dependabot.beta-security-and-version-updates %} {% data reusables.dependabot.result-discrepancy %}

## Pourquoi certaines dépendances semblent-elles manquantes ?

{% data variables.product.prodname_dotcom %} génère et affiche les données de dépendance différemment des autres outils. Ainsi, si vous utilisez un autre outil pour identifier les dépendances, vous verrez très probablement des résultats différents. Tenez compte des éléments suivants :

*   {% data variables.product.prodname_advisory_database %} est l’une des sources de données que {% data variables.product.prodname_dotcom %} utilise pour identifier les dépendances vulnérables{% ifversion GH-advisory-db-supports-malware %} et programmes malveillants{% endif %}. Il s’agit d’une base de données gratuite et organisée d’avis de sécurité pour les écosystèmes de packages courants sur {% data variables.product.prodname_dotcom %}. Elle inclut les données signalées directement à {% data variables.product.prodname_dotcom %} à partir des {% data variables.product.prodname_security_advisories %} ainsi que les flux officiels et les sources communautaires. Ces données sont examinées et organisées {% data variables.product.prodname_dotcom %} pour s’assurer que les informations fausses ou non exploitables ne sont pas partagées avec la communauté de développement. {% data reusables.security-advisory.link-browsing-advisory-db %}
*   Le graphe de dépendances analyse tous les fichiers manifeste de package connus dans le dépôt d’un utilisateur. Par exemple, pour npm, il analyse le fichier _package-lock.json_. Il construit un graphe de la totalité des dépendances et des éléments dépendants publics du dépôt. Cela se produit quand vous activez le graphe de dépendances et que quelqu’un effectue vers la branche par défaut une poussée (push) comportant des commits qui changent un format de manifeste pris en charge. Pour plus d’informations, consultez « [À propos du graphe de dépendances](/github/visualizing-repository-data-with-graphs/about-the-dependency-graph) » et « [Résolution des problèmes liés au graphe de dépendances](/code-security/supply-chain-security/understanding-your-software-supply-chain/troubleshooting-the-dependency-graph) ».
*   {% data variables.product.prodname_dependabot %} analyse n’importe quelle poussée, vers la branche par défaut, qui contient un fichier manifeste. Lorsqu’un nouvel avis est ajouté, il analyse tous les référentiels existants et génère une alerte pour chaque référentiel concerné. Au lieu qu’une alerte soit créée par avis, les {% data variables.product.prodname_dependabot_alerts %} sont agrégées au niveau du dépôt. Pour plus d’informations, consultez « [À propos des {% data variables.product.prodname_dependabot_alerts %}](/code-security/supply-chain-security/about-alerts-for-vulnerable-dependencies) ».
*   {% ifversion fpt or ghec or ghes %}Les {% data variables.product.prodname_dependabot_security_updates %} sont déclenchées quand vous recevez une alerte concernant une dépendance vulnérable dans votre dépôt. Dans la mesure du possible, {% data variables.product.prodname_dependabot %} crée une demande de tirage (pull request) dans votre dépôt pour mettre à niveau la dépendance vulnérable vers la version sécurisée minimale nécessaire pour éviter la vulnérabilité. Pour plus d’informations, consultez « [À propos des {% data variables.product.prodname_dependabot_security_updates %}](/github/managing-security-vulnerabilities/about-dependabot-security-updates) » et « [Résolution des erreurs {% data variables.product.prodname_dependabot %}](/github/managing-security-vulnerabilities/troubleshooting-dependabot-errors) ».
  
    {% endif %}{% data variables.product.prodname_dependabot %} n’analyse pas les dépôts selon une planification, mais plutôt quand quelque chose change. Par exemple, une analyse est déclenchée quand une nouvelle dépendance est ajoutée ({% data variables.product.prodname_dotcom %} effectue cette vérification à chaque poussée) ou quand un nouvel avis est ajouté à la base de données{% ifversion ghes or ghae %} et synchronisé sur {% data variables.location.product_location %}{% endif %}. Pour plus d’informations, consultez « [À propos des {% data variables.product.prodname_dependabot_alerts %}](/code-security/supply-chain-security/about-alerts-for-vulnerable-dependencies#detection-of-insecure-dependencies) ».

## Les{% data variables.product.prodname_dependabot_alerts %} concernent-elles uniquement les dépendances non sécurisées dans les manifestes et les fichiers de verrouillage ?

Les {% data variables.product.prodname_dependabot_alerts %} vous fournissent des conseils sur les dépendances à mettre à jour, y compris les dépendances transitives, où la version peut être déterminée à partir d’un manifeste ou d’un fichier de verrouillage. {% ifversion fpt or ghec or ghes %}Les {% data variables.product.prodname_dependabot_security_updates %} suggèrent uniquement un changement pour lequel {% data variables.product.prodname_dependabot %} peut directement « corriger » la dépendance, c’est-à-dire quand il s’agit de :
* Dépendances directes déclarées explicitement dans un manifeste ou un fichier de verrouillage
* Dépendances transitives déclarées dans un fichier de verrouillage{% endif %}

**Point à vérifier** : La vulnérabilité non interceptée pour un composant qui n’est pas spécifié se trouve-t-elle dans le manifeste ou dans le fichier de verrouillage du dépôt ?

## Pourquoi est-ce que je n’obtiens pas d’{% data variables.product.prodname_dependabot_alerts %} pour certains écosystèmes ?

Les {% data variables.product.prodname_dependabot_alerts %} sont prises en charge pour un ensemble d’écosystèmes où nous pouvons fournir des données de haute qualité et exploitables. Les avis organisés dans la {% data variables.product.prodname_advisory_database %}, le graphe de dépendances, {% ifversion fpt or ghec %}les mises à jour de sécurité {% data variables.product.prodname_dependabot %}, {% endif %}et les {% data variables.product.prodname_dependabot_alerts %} sont fournis pour plusieurs écosystèmes, notamment Maven (Java), npm et Yarn (JavaScript), NuGet (.NET), pip (Python), RubyGems (Ruby) et Composer (PHP). Nous continuerons à ajouter la prise en charge d’autres écosystèmes au fil du temps. Pour obtenir une vue d’ensemble des écosystèmes de packages que nous prenons en charge, consultez « [À propos du graphe de dépendances](/github/visualizing-repository-data-with-graphs/about-the-dependency-graph#supported-package-ecosystems) ».

Il est important de noter que des avis de sécurité peuvent exister pour d’autres écosystèmes. Les informations contenues dans un avis de sécurité non révisé sont fournies par les chargés de maintenance d’un dépôt particulier. Ces données ne sont pas organisées par {% data variables.product.prodname_dotcom %}. {% data reusables.security-advisory.link-browsing-advisory-db %}

**Point à vérifier** : La vulnérabilité non interceptée s’applique-t-elle à un écosystème non pris en charge ?

## {% data variables.product.prodname_dependabot %} génère-t-il des alertes pour les vulnérabilités connues depuis de nombreuses années ?

La {% data variables.product.prodname_advisory_database %} a été lancée en novembre 2019 et dès le départ alimentée pour inclure des avis sur les risques de sécurité pour les écosystèmes pris en charge à partir de 2017. Lors de l’ajout de CVE à la base de données, nous organisons en priorité les nouveaux CVE et les CVE qui affectent les versions plus récentes des logiciels.

Certaines informations sur les vulnérabilités plus anciennes sont disponibles, en particulier quand ces CVE sont très répandus, mais certaines anciennes vulnérabilités ne sont pas incluses dans la {% data variables.product.prodname_advisory_database %}. S’il existe une ancienne vulnérabilité spécifique que vous devez inclure dans la base de données, contactez {% data variables.contact.contact_support %}. 

**Point à vérifier** : La vulnérabilité non interceptée a-t-elle une date de publication antérieure à 2017 dans la base de données nationale des vulnérabilités ?

## Pourquoi la {% data variables.product.prodname_advisory_database %} utilise-t-elle un sous-ensemble de données de vulnérabilité publiées ?

Certains outils tiers utilisent des données CVE non organisées qui ne sont pas vérifiées ou filtrées par un être humain. Cela signifie que les CVE avec des erreurs d’étiquetage ou de gravité, ou d’autres problèmes de qualité, entraînent des alertes plus fréquentes, plus bruyantes et moins utiles.

Étant donné que {% data variables.product.prodname_dependabot %} utilise des données organisées dans la {% data variables.product.prodname_advisory_database %}, le volume d’alertes peut être inférieur, mais les alertes que vous recevez sont exactes et pertinentes.

{% ifversion fpt or ghec %}
## Chaque dépendance non sécurisée génère-t-elle une alerte distincte ?

Quand une dépendance a plusieurs vulnérabilités, une alerte est générée pour chaque vulnérabilité au niveau de l’avis et du manifeste.

![Capture d’écran de l’onglet {% data variables.product.prodname_dependabot_alerts %} montrant deux alertes du même package avec des manifestes différents.](/assets/images/help/repository/dependabot-alerts-view.png)

Les {% data variables.product.prodname_dependabot_alerts %} héritées ont été regroupées en une seule alerte agrégée avec toutes les vulnérabilités pour la même dépendance. Si vous accédez à un lien vers une alerte {% data variables.product.prodname_dependabot %} héritée, vous êtes redirigé vers l’onglet {% data variables.product.prodname_dependabot_alerts %}, qui est filtré pour afficher les vulnérabilités liées à ces package et manifeste dépendants.

![Capture d’écran de l’onglet {% data variables.product.prodname_dependabot_alerts %} montrant les alertes qui sont filtrées quand l’utilisateur accède à une alerte {% data variables.product.prodname_dependabot %} héritée.](/assets/images/help/repository/legacy-dependabot-alerts-view.png)

Le nombre d’{% data variables.product.prodname_dependabot_alerts %} dans {% data variables.product.prodname_dotcom %} indique le nombre total d’alertes, qui est le nombre de vulnérabilités, et non le nombre de dépendances.

**Point à vérifier** : s’il existe une différence dans les totaux que vous voyez, vérifiez que vous ne comparez pas les nombres d’alertes aux nombres de dépendances. Vérifiez également que vous voyez toutes les alertes et non un sous-ensemble d’alertes filtrées.
{% endif %}

{% ifversion fpt or ghec or ghes %}
## Dependabot peut-il ignorer des dépendances spécifiques ?

Vous pouvez configurer {% data variables.product.prodname_dependabot %} pour ignorer des dépendances spécifiques dans le fichier de configuration, ce qui empêchera les mises à jour de sécurité et de version pour ces dépendances. Si vous souhaitez utiliser uniquement des mises à jour de sécurité, vous devez remplacer le comportement par défaut avec un fichier de configuration. Pour plus d’informations, consultez « [Substitution du comportement par défaut avec un fichier de configuration](/code-security/dependabot/dependabot-security-updates/configuring-dependabot-security-updates#overriding-the-default-behavior-with-a-configuration-file) » pour empêcher l’activation des mises à jour de version. Pour plus d’informations sur l’ignorance des dépendances, consultez « [`ignore`](/code-security/dependabot/dependabot-version-updates/configuration-options-for-the-dependabot.yml-file#ignore) ». {% endif %}

## Pour aller plus loin

- « [À propos de {% data variables.product.prodname_dependabot_alerts %}](/code-security/supply-chain-security/about-alerts-for-vulnerable-dependencies) »
- « [Affichage et mise à jour des {% data variables.product.prodname_dependabot_alerts %}](/code-security/dependabot/dependabot-alerts/viewing-and-updating-dependabot-alerts) »
- « [Gestion des paramètres de sécurité et d’analyse pour votre dépôt](/github/administering-a-repository/managing-security-and-analysis-settings-for-your-repository) »
- « [Résolution des problèmes liés au graphe de dépendances](/code-security/supply-chain-security/understanding-your-software-supply-chain/troubleshooting-the-dependency-graph) »{% ifversion fpt or ghec or ghes %}
- « [Résolution des erreurs {% data variables.product.prodname_dependabot %}](/github/managing-security-vulnerabilities/troubleshooting-dependabot-errors) »{% endif %}
