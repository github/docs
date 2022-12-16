---
title: Affichage et mise à jour des alertes Dependabot
intro: 'Si {% data variables.product.product_name %} découvre des dépendances non sécurisées dans votre projet, vous pouvez afficher des détails sur l’onglet Alertes Dependabot de votre référentiel. Ensuite, vous pouvez mettre à jour votre projet pour résoudre ou ignorer l’alerte.'
redirect_from:
  - /articles/viewing-and-updating-vulnerable-dependencies-in-your-repository
  - /github/managing-security-vulnerabilities/viewing-and-updating-vulnerable-dependencies-in-your-repository
  - /code-security/supply-chain-security/viewing-and-updating-vulnerable-dependencies-in-your-repository
  - /code-security/supply-chain-security/managing-vulnerabilities-in-your-projects-dependencies/viewing-and-updating-vulnerable-dependencies-in-your-repository
permissions: 'Repository administrators and organization owners can view and update dependencies, as well as users and teams with explicit access.'
shortTitle: View Dependabot alerts
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: how_to
topics:
  - Dependabot
  - Security updates
  - Alerts
  - Dependencies
  - Pull requests
  - Repositories
ms.openlocfilehash: 8bf53452bd6518f5525d67994f3e6711ef33de0d
ms.sourcegitcommit: 7e2b5213fd15d91222725ecab5ee28cef378d3ad
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 11/29/2022
ms.locfileid: '148185550'
---
{% data reusables.dependabot.beta-security-and-version-updates %} {% data reusables.dependabot.enterprise-enable-dependabot %}

L’onglet {% data variables.product.prodname_dependabot_alerts %} de votre dépôt liste toutes les {% data variables.product.prodname_dependabot_alerts %} ouvertes et fermées{% ifversion fpt or ghec or ghes %} et les {% data variables.product.prodname_dependabot_security_updates %} correspondantes{% endif %}. Vous pouvez{% ifversion fpt or ghec or ghes > 3.4 or ghae > 3.4 %} filtrer les alertes par package, écosystème ou manifeste. Vous pouvez {% endif %} trier la liste des alertes. Cliquez dans des alertes spécifiques pour plus de détails. {% ifversion dependabot-bulk-alerts %}Vous pouvez également ignorer ou rouvrir des alertes, une par une ou en sélectionnant plusieurs alertes à la fois. {% else %}Vous pouvez également ignorer ou rouvrir des alertes. {% endif %} Pour plus d’informations, consultez « [À propos de {% data variables.product.prodname_dependabot_alerts %}](/code-security/supply-chain-security/about-alerts-for-vulnerable-dependencies) ». 

{% ifversion fpt or ghec or ghes %} Vous pouvez activer les mises à jour de sécurité automatiques pour n’importe quel dépôt qui utilise les {% data variables.product.prodname_dependabot_alerts %} et le graphe de dépendances. Pour plus d’informations, consultez « [À propos des {% data variables.product.prodname_dependabot_security_updates %}](/code-security/supply-chain-security/managing-vulnerabilities-in-your-projects-dependencies/about-dependabot-security-updates) ».
{% endif %}

{% ifversion fpt or ghec or ghes %}
## À propos des mises à jour des dépendances vulnérables dans votre dépôt

{% data variables.product.product_name %} génère {% data variables.product.prodname_dependabot_alerts %} quand nous détectons que votre codebase utilise des dépendances avec des risques de sécurité connus. Pour les dépôts où les {% data variables.product.prodname_dependabot_security_updates %} sont activées, quand {% data variables.product.product_name %} détecte une dépendance vulnérable dans la branche par défaut, {% data variables.product.prodname_dependabot %} crée une demande de tirage (pull request) pour la corriger. La demande de tirage met à niveau la dépendance vers la version sécurisée minimale nécessaire pour éviter la vulnérabilité.

Chaque alerte {% data variables.product.prodname_dependabot %} a un identificateur numérique unique et l’onglet the {% data variables.product.prodname_dependabot_alerts %} liste une alerte pour chaque vulnérabilité détectée. Les {% data variables.product.prodname_dependabot_alerts %} héritées ont regroupé les vulnérabilités par dépendance et ont généré une alerte unique par dépendance. Si vous accédez à une alerte {% data variables.product.prodname_dependabot %}, vous êtes redirigé vers un onglet {% data variables.product.prodname_dependabot_alerts %} filtré pour ce package. {% endif %}

{% ifversion fpt or ghec or ghes > 3.4 or ghae > 3.4 %} Vous pouvez filtrer et trier des {% data variables.product.prodname_dependabot_alerts %} en utilisant divers filtres et options de tri disponibles dans l’interface utilisateur. Pour plus d’informations, consultez « [Hiérarchisation des {% data variables.product.prodname_dependabot_alerts %}](#prioritizing-across--data-variablesproductprodname_dependabot_alerts-) » ci-dessous.

## Hiérarchisation des {% data variables.product.prodname_dependabot_alerts %}

{% data variables.product.company_short %} vous permet d’établir des priorités pour corriger les {% data variables.product.prodname_dependabot_alerts %}. {% ifversion dependabot-most-important-sort-option %} Par défaut, les {% data variables.product.prodname_dependabot_alerts %} sont triées par ordre d’importance. L’ordre de tri « Le plus important » vous permet d’établir des priorités dans les {% data variables.product.prodname_dependabot_alerts %} sur lesquelles vous concentrer en premier. Les alertes sont classées en fonction de leur impact potentiel, de leur actionnabilité et de leur pertinence. Notre calcul de priorisation est en constante amélioration et inclut des facteurs tels que le score CVSS, l’étendue des dépendances et si les appels de fonction vulnérables sont trouvés pour l’alerte.

![Capture d’écran du menu déroulant Trier avec le tri « Le plus important »](/assets/images/help/dependabot/dependabot-alerts-sort-dropdown.png) {% endif %}

{% data reusables.dependabot.dependabot-alerts-filters %}

En plus des filtres disponibles via la barre de recherche, vous pouvez trier et filtrer les {% data variables.product.prodname_dependabot_alerts %} à l’aide des menus déroulants situés en haut de la liste d’alertes. La barre de recherche permet également la recherche en texte intégral d’alertes et des avis de sécurité associés. Vous pouvez rechercher une partie d’un nom ou d’une description d’avis de sécurité pour retourner les alertes de votre dépôt qui se rapportent à cet avis de sécurité. Par exemple, la recherche de `yaml.load() API could execute arbitrary code` retourne les {% data variables.product.prodname_dependabot_alerts %} liées à « [PyYAML désérialise de manière non sécurisée les chaînes YAML entraînant une exécution arbitraire du code](https://github.com/advisories/GHSA-rprw-h62v-c2w7) », car la chaîne de recherche apparaît dans la description de l’avis.

{% endif %}

{% ifversion dependabot-bulk-alerts %} ![Capture d’écran du filtre et des menus de tri sous l’onglet des {% data variables.product.prodname_dependabot_alerts %}](/assets/images/help/graphs/dependabot-alerts-filters-checkbox.png){% elsif ghes = 3.5 %} Vous pouvez sélectionner un filtre dans un menu déroulant situé en haut de la liste, puis cliquer sur le filtre que vous souhaitez appliquer.
   ![Capture d’écran des menus de filtrage et de tri sous l’onglet des {% data variables.product.prodname_dependabot_alerts %}](/assets/images/enterprise/3.5/dependabot/dependabot-alerts-filters.png){% endif %}

{% ifversion dependabot-alerts-development-label %}
## Écosystèmes et manifestes pris en charge pour l’étendue des dépendances

{% data reusables.dependabot.dependabot-alerts-dependency-scope %}

Les alertes pour les packages répertoriés comme dépendances de développement sont marquées avec l’étiquette `Development` page {% data variables.product.prodname_dependabot_alerts %} et sont également disponibles pour le filtrage via le filtre `scope`.

![Capture d’écran montrant l’étiquette « Développement » dans la liste des alertes](/assets/images/help/repository/dependabot-alerts-development-label.png)

La page Détails de l’alerte des alertes sur les packages étendus au développement affiche une section « Balises » contenant une étiquette `Development`.

![Capture d’écran montrant la section « Balises » dans la page Détails de l’alerte](/assets/images/help/repository/dependabot-alerts-tags-section.png)

{% endif %}

{% ifversion dependabot-alerts-vulnerable-calls %}
## À propos de la détection des appels aux fonctions vulnérables

{% data reusables.dependabot.vulnerable-calls-beta %}

Quand {% data variables.product.prodname_dependabot %} vous indique que votre dépôt utilise une dépendance vulnérable, vous devez déterminer les fonctions vulnérables et vérifier si vous les utilisez. Une fois que vous disposez de ces informations, vous pouvez déterminer l’urgence dont vous avez besoin pour effectuer une mise à niveau vers une version sécurisée de la dépendance. 

Pour les langages prises en charge, {% data variables.product.prodname_dependabot %} détecte automatiquement si vous utilisez une fonction vulnérable et ajoute l’étiquette « Appel vulnérable » aux alertes affectées. Vous pouvez utiliser ces informations dans la vue {% data variables.product.prodname_dependabot_alerts %} pour trier et hiérarchiser plus efficacement le travail de correction.

{% note %}

**Remarque :** Avec la version bêta, cette fonctionnalité est disponible uniquement pour les nouveaux avis Python créés *après* le 14 avril 2022 et pour un sous-ensemble d’avis Python historiques. {% data variables.product.prodname_dotcom %} fonctionne pour renvoyer des données dans des avis Python historiques supplémentaires, qui sont ajoutés en continu. Les appels vulnérables sont mis en évidence uniquement dans les pages {% data variables.product.prodname_dependabot_alerts %}.

{% endnote %}

![Capture d’écran montrant une alerte avec l’étiquette « Appel vulnérable »](/assets/images/help/repository/dependabot-alerts-vulnerable-call-label.png)

Vous pouvez filtrer la vue pour afficher uniquement les alertes où {% data variables.product.prodname_dependabot %} a détecté au moins un appel à une fonction vulnérable à l’aide du filtre `has:vulnerable-calls` dans le champ de recherche.

Pour les alertes où des appels vulnérables sont détectés, la page des détails de l’alerte affiche des informations supplémentaires :

- Un ou plusieurs blocs de code montrant où la fonction est utilisée.
- Annotation répertoriant la fonction elle-même, avec un lien vers la ligne où la fonction est appelée.

![Capture d’écran montrant la page des détails de l’alerte pour une alerte avec une étiquette « Appel vulnérable »](/assets/images/help/repository/review-calls-to-vulnerable-functions.png)

Pour plus d’informations, consultez « [Révision et correction des alertes](#reviewing-and-fixing-alerts) » ci-dessous.

{% endif %}

## Affichage {% data variables.product.prodname_dependabot_alerts %}

{% ifversion fpt or ghec or ghes > 3.4 or ghae > 3.4 %} {% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-security %} {% data reusables.repositories.sidebar-dependabot-alerts %}
1. Pour filtrer les alertes, vous pouvez sélectionner un filtre dans un menu déroulant, puis cliquer sur le filtre que vous souhaitez appliquer. Vous pouvez également taper des filtres dans la barre de recherche. Pour plus d’informations sur le filtrage et le tri des alertes, consultez « [Hiérarchisation des {% data variables.product.prodname_dependabot_alerts %}](#prioritizing-across--data-variablesproductprodname_dependabot_alerts-) ».
{%- ifversion dependabot-bulk-alerts %} ![Capture d’écran des menus de filtre et de tri sous l’onglet des {% data variables.product.prodname_dependabot_alerts %}](/assets/images/help/graphs/dependabot-alerts-filters-checkbox.png){% else %} ![Capture d’écran des menus de filtre et de tri sous l’onglet {% data variables.product.prodname_dependabot_alerts %}](/assets/images/enterprise/3.5/dependabot/dependabot-alerts-filters.png){% endif %}
1. Cliquez sur l’alerte que vous souhaitez afficher. {% ifversion dependabot-bulk-alerts %} ![Alerte sélectionnée dans la liste des alertes](/assets/images/help/graphs/click-alert-in-alerts-list-checkbox.png){% else %} ![Alerte sélectionnée dans la liste des alertes](/assets/images/enterprise/3.5/dependabot/click-alert-in-alerts-list-ungrouped.png){% endif %}

{% else %} {% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-security %} {% data reusables.repositories.sidebar-dependabot-alerts %}
1. Cliquez sur l’alerte que vous voulez visualiser.
  ![Alerte sélectionnée dans la liste des alertes](/assets/images/help/graphs/click-alert-in-alerts-list.png) {% endif %}

## Examen et résolution des alertes

Il est important de s’assurer que toutes vos dépendances sont exemptes de toute faille de sécurité. Quand {% data variables.product.prodname_dependabot %} détecte des vulnérabilités {% ifversion GH-advisory-db-supports-malware %}ou programme malveillant{% endif %} dans vos dépendances, vous devez évaluer le niveau d’exposition de votre projet et déterminer les étapes de correction à suivre pour sécuriser votre application.

Si une version corrigée de la dépendance est disponible, vous pouvez générer une demande de tirage (pull request) {% data variables.product.prodname_dependabot %} pour mettre à jour cette dépendance directement à partir d’une alerte {% data variables.product.prodname_dependabot %}. Si vous avez activé {% data variables.product.prodname_dependabot_security_updates %}, la demande de tirage peut être liée dans l’alerte Dependabot. 

Dans les cas où une version corrigée n’est pas disponible ou si vous ne pouvez pas effectuer de mise à jour vers la version sécurisée, {% data variables.product.prodname_dependabot %} partage des informations supplémentaires pour vous aider à déterminer les étapes suivantes. Quand vous cliquez pour afficher une alerte {% data variables.product.prodname_dependabot %}, vous pouvez voir les détails complets de l’avis de sécurité pour la dépendance, y compris les fonctions affectées. Vous pouvez ensuite vérifier si votre code appelle les fonctions impactées. Ces informations peuvent vous aider à mieux évaluer votre niveau de risque et à déterminer les solutions de contournement ou si vous êtes en mesure d’accepter le risque représenté par le conseil de sécurité.

{% ifversion dependabot-alerts-vulnerable-calls %}

Pour les langages pris en charge, {% data variables.product.prodname_dependabot %} détecte les appels aux fonctions vulnérables pour vous. Quand vous affichez une alerte étiquetée « Appel vulnérable », les détails incluent le nom de la fonction et un lien vers le code qui l’appelle. Souvent, vous serez en mesure de prendre des décisions basées sur ces informations, sans explorer plus loin.

{% endif %}

### Correction des dépendances vulnérables

1. Affichez les détails d’une alerte. Pour plus d’informations, consultez « [Affichage {% data variables.product.prodname_dependabot_alerts %}](#viewing-dependabot-alerts) » (ci-dessus).
{% ifversion fpt or ghec or ghes %}
1. Si les {% data variables.product.prodname_dependabot_security_updates %} sont activées, il peut y avoir un lien vers une demande de tirage qui corrigera la dépendance. Vous pouvez également cliquer sur **Créer la mise à jour de sécurité {% data variables.product.prodname_dependabot %}** en haut de la page des détails de l’alerte pour créer une demande de tirage.
  ![Bouton Créer une mises à jour de sécurité {% data variables.product.prodname_dependabot %}](/assets/images/help/repository/create-dependabot-security-update-button-ungrouped.png)
1. Éventuellement, si vous n’utilisez pas les {% data variables.product.prodname_dependabot_security_updates %}, vous pouvez utiliser les informations de la page pour décider vers quelle version de la dépendance mettre à niveau et créer une demande de tirage pour mettre à jour la dépendance vers une version sécurisée.
{% elsif ghae %}
1. Vous pouvez utiliser les informations de la page pour décider vers quelle version de la dépendance mettre à niveau et créer une demande de tirage vers le manifeste ou verrouiller le fichier sur une version sécurisée.
{% endif %}
1. Quand vous êtes prêt à mettre à jour votre dépendance et à résoudre la vulnérabilité, fusionnez la demande de tirage. 

{% ifversion fpt or ghec or ghes %} Chaque demande de tirage émise par {% data variables.product.prodname_dependabot %} comprend des informations sur les commandes que vous pouvez utiliser pour contrôler {% data variables.product.prodname_dependabot %}. Pour plus d’informations, consultez « [Gestion des demandes de tirage pour les mises à jour des dépendances](/code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/managing-pull-requests-for-dependency-updates#managing-dependabot-pull-requests-with-comment-commands) ».
{% endif %}

## Ignorer les {% data variables.product.prodname_dependabot_alerts %}

{% tip %}

**Conseil :** Vous ne pouvez ignorer que les alertes ouvertes.
{% endtip %}

Si vous planifiez un travail de grande ampleur pour mettre à niveau une dépendance ou si vous décidez qu’une alerte n’a pas besoin d’être corrigée, vous pouvez ignorer l’alerte. Ignorer les alertes que vous avez déjà évaluées facilite le tri des nouvelles alertes à mesure qu’elles apparaissent.

1. Affichez les détails d’une alerte. Pour plus d’informations, consultez « [Affichage des dépendances vulnérables](#viewing-dependabot-alerts) » (ci-dessus).
1. Sélectionnez la liste déroulante « Ignorer », puis cliquez sur une raison pour ignorer l’alerte.{% ifversion reopen-dependabot-alerts %} Les alertes ignorées non corrigées peuvent être rouvertes ultérieurement.{% endif %} {% ifversion dependabot-alerts-dismissal-comment %}1. Si vous le souhaitez, ajoutez un commentaire de l’action Ignorer. Le commentaire de l’action Ignorer est ajouté à la chronologie des alertes et peut être utilisé comme justification lors de l’audit et de la création de rapports. Vous pouvez récupérer ou définir un commentaire à l’aide de l’API GraphQL. Le commentaire est contenu dans le champ `dismissComment`. Pour plus d’informations, consultez « [{% data variables.product.prodname_dependabot_alerts %}](/graphql/reference/objects#repositoryvulnerabilityalert) » dans la documentation de l’API GraphQL.
![Capture d’écran montrant comment ignorer une alerte via la liste déroulante « Ignorer », avec l’option permettant d’ajouter un commentaire pour l’action Ignorer](/assets/images/help/repository/dependabot-alerts-dismissal-comment.png)
1. Cliquez sur **Ignorer l’alerte**.
{% else %} ![Choix de la raison de l’abandon de l’alerte via la liste déroulante « Ignorer »](/assets/images/help/repository/dependabot-alert-dismiss-drop-down-ungrouped.png){% endif %} {% ifversion dependabot-bulk-alerts %}

### Ignorer plusieurs alertes à la fois

1. Afficher le {% data variables.product.prodname_dependabot_alerts %} ouvert. Pour plus d’informations, consultez « [Affichage {% data variables.product.prodname_dependabot_alerts %}](/en/code-security/dependabot/dependabot-alerts/viewing-and-updating-dependabot-alerts#viewing-dependabot-alerts) ».
2. Si vous le souhaitez, filtrez la liste des alertes en sélectionnant un menu déroulant, puis cliquez sur le filtre que vous souhaitez appliquer. Vous pouvez également taper des filtres dans la barre de recherche.
3. À gauche de chaque titre d’alerte, sélectionnez les alertes que vous souhaitez ignorer.
   ![Capture d’écran des alertes ouvertes avec des cases à cocher mises en évidence](/assets/images/help/graphs/select-multiple-alerts.png)
4. Si vous le souhaitez, en haut de la liste des alertes, sélectionnez toutes les alertes de la page.
   ![Capture d’écran de toutes les alertes ouvertes sélectionnées](/assets/images/help/graphs/select-all-alerts.png)
5. Sélectionnez la liste déroulante « Ignorer les alertes », puis cliquez sur une raison pour ignorer les alertes.
   ![Capture d’écran de la page d’ouverture des alertes avec la liste déroulante « Ignorer les alertes » mise en évidence](/assets/images/help/graphs/dismiss-multiple-alerts.png)

{% endif %}

{% ifversion reopen-dependabot-alerts %}

## Affichage et mise à jour des alertes fermées

Vous pouvez afficher toutes les alertes ouvertes et rouvrir les alertes qui ont été précédemment ignorées. Les alertes fermées qui ont déjà été corrigées ne peuvent pas être rouvertes.

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-security %} {% data reusables.repositories.sidebar-dependabot-alerts %}
1. Pour afficher simplement les alertes fermées, cliquez sur **Fermé**.

   {%- ifversion dependabot-bulk-alerts %} ![Capture d’écran montrant l’option « Fermé »](/assets/images/help/repository/dependabot-alerts-closed-checkbox.png) {%- else %} ![Capture d’écran montrant l’option « Fermé »](/assets/images/help/repository/dependabot-alerts-closed.png) {%- endif %}
1. Cliquez sur l’alerte que vous voulez visualiser ou mettre à jour.

   {%- ifversion dependabot-bulk-alerts %} ![ Capture d’écran montrant une alerte dependabot mise en surbrillance](/assets/images/help/repository/dependabot-alerts-select-closed-alert-checkbox.png) {%- else %} ![Capture d’écran montrant une alerte dependabot mise en surbrillance](/assets/images/help/repository/dependabot-alerts-select-closed-alert.png)   {%- endif %}
2. Éventuellement, si l’alerte a été ignorée et que vous souhaitez la rouvrir, cliquez sur **Rouvrir**. Les alertes qui ont déjà été corrigées ne peuvent pas être rouvertes.

   {% indented_data_reference reusables.enterprise.3-5-missing-feature spaces=3 %} ![Capture d’écran montrant le bouton « Rouvrir »](/assets/images/help/repository/reopen-dismissed-alert.png)

{% endif %}

{% ifversion dependabot-bulk-alerts %}

### Rouvrir plusieurs alertes à la fois

1. Afficher le {% data variables.product.prodname_dependabot_alerts %} fermé. Pour plus d’informations, consultez « [Affichage et mise à jour des alertes fermées](/en/code-security/dependabot/dependabot-alerts/viewing-and-updating-dependabot-alerts#viewing-and-updating-closed-alerts) » (ci-dessus).
2. À gauche de chaque titre d’alerte, sélectionnez les alertes que vous souhaitez rouvrir.
   ![Capture d’écran des alertes fermées avec des cases à cocher mises en évidence](/assets/images/help/repository/dependabot-alerts-open-checkbox.png)
3. Si vous le souhaitez, en haut de la liste des alertes, sélectionnez toutes les alertes fermées de la page.
   ![Capture d’écran des alertes fermées avec toutes les alertes sélectionnées](/assets/images/help/graphs/select-all-closed-alerts.png)
4. Cliquez sur **Rouvrir** pour rouvrir les alertes. Les alertes qui ont déjà été corrigées ne peuvent pas être rouvertes.
   ![Capture d’écran des alertes fermées avec le bouton « Rouvrir » mis en évidence](/assets/images/help/graphs/reopen-multiple-alerts.png)

{% endif %}

 
## Examen des journaux d’audit pour {% data variables.product.prodname_dependabot_alerts %}

Lorsqu’un membre de votre organisation {% ifversion not fpt %}ou d’entreprise {% endif %}effectue une action liée à {% data variables.product.prodname_dependabot_alerts %}, vous pouvez examiner les actions dans le journal d’audit. Pour plus d’informations sur l’accès au journal, consultez « [Examen du journal d’audit pour votre organisation](/organizations/keeping-your-organization-secure/reviewing-the-audit-log-for-your-organization#accessing-the-audit-log){% ifversion not fpt %} » et « [Accès au journal d’audit pour votre entreprise](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/accessing-the-audit-log-for-your-enterprise). » {% else %}. » {% endif %} {% ifversion dependabot-alerts-audit-log %}

![Capture d’écran du journal d’audit montrant les alertes Dependabot](/assets/images/help/dependabot/audit-log-UI-dependabot-alert.png){% endif %}

Les événements de votre journal d’audit pour {% data variables.product.prodname_dependabot_alerts %} incluent des détails tels que qui a effectué l’action, ce qu’était l’action et quand l’action a été effectuée. {% ifversion dependabot-alerts-audit-log %}L’événement inclut également un lien vers l’alerte elle-même. Lorsqu’un membre de votre organisation ignore une alerte, l’événement affiche le motif du masquage et le commentaire. {% endif %} Pour plus d’informations sur les actions {% data variables.product.prodname_dependabot_alerts %}, consultez les `repository_vulnerability_alert` catégories « [Examen du journal d’audit pour votre organisation](/organizations/keeping-your-organization-secure/managing-security-settings-for-your-organization/reviewing-the-audit-log-for-your-organization#repository_vulnerability_alert-category-actions){% ifversion not fpt %} » et « [Événements de journal d’audit pour votre entreprise](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/audit-log-events-for-your-enterprise#repository_vulnerability_alert-category-actions) ». {% else %}. » {% endif %}
