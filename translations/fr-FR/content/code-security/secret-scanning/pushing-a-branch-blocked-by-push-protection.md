---
title: Envoi d’une branche bloquée par la protection par émission de données
intro: 'La fonctionnalité de protection par émission de données de {% data variables.product.prodname_secret_scanning %} vous protège de manière proactive contre les secrets divulguées dans vos référentiels. Vous pouvez résoudre les envois bloqués et, une fois le secret détecté supprimé, vous pouvez envoyer (push) les modifications à votre branche de travail à partir de la ligne de commande ou de l’interface utilisateur web.'
product: '{% data reusables.gated-features.secret-scanning %}'
miniTocMaxHeadingLevel: 3
versions:
  feature: secret-scanning-push-protection
type: how_to
topics:
  - Secret scanning
  - Advanced Security
  - Alerts
  - Repositories
shortTitle: Push a blocked branch
ms.openlocfilehash: 743cdc094acfd2465d4bb97f1ae7ec0a7f8b86f0
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147683785'
---
## À propos de la protection par émission de données pour {% data variables.product.prodname_secret_scanning %}

La fonctionnalité de protection par émission de données de {% data variables.product.prodname_secret_scanning %} permet d’éviter les fuites de sécurité en analysant les secrets avant d’envoyer des modifications à votre référentiel. {% data reusables.secret-scanning.push-protection-overview %} Pour plus d’informations sur les secrets et fournisseurs de services pris en charge pour la protection par émission de données, consultez « [{% data variables.product.prodname_secret_scanning_caps %} patterns](/code-security/secret-scanning/secret-scanning-patterns#supported-secrets-for-push-protection) ».

{% data reusables.secret-scanning.push-protection-remove-secret %}

{% tip %}

**Conseil** Si {% data variables.product.prodname_dotcom %} bloque un secret alors que selon vous son envoi (push) ne pose pas de problème, vous pouvez autoriser le secret et spécifier la raison pour laquelle il doit être autorisé. Pour plus d’informations sur le contournement de la protection par émission de données d’un secret, consultez « [Autoriser un secret bloqué à être envoyé](/code-security/secret-scanning/protecting-pushes-with-secret-scanning#allowing-a-blocked-secret-to-be-pushed) » et « [Contournement de la protection par émission de données d’un secret](/code-security/secret-scanning/protecting-pushes-with-secret-scanning#bypassing-push-protection-for-a-secret) » pour la ligne de commande et l’interface utilisateur web, respectivement. 

{% endtip %}

{% ifversion push-protection-custom-link-orgs %} 

Les administrateurs de l’organisation peuvent fournir un lien personnalisé qui sera inclus dans le message de {% data variables.product.product_name %} lorsque votre envoi (push) est bloqué. Ce lien personnalisé peut contenir des ressources et des conseils spécifiques à votre organisation et à ses stratégies.

{% ifversion push-protection-custom-link-orgs-beta %}{% data reusables.advanced-security.custom-link-beta %}{% endif %}

{% endif %}

## Résolution d’un envoi (push) bloqué sur la ligne de commande

{% data reusables.secret-scanning.push-protection-command-line-choice %}

{% data reusables.secret-scanning.push-protection-multiple-branch-note %}

Si le secret bloqué a été introduit par la dernière validation sur votre branche, vous pouvez suivre l’aide apportée ci-dessous.

1. Supprimez le secret de votre code.
1. Validez les modifications à l’aide de `git commit --amend`.
1. Envoyer vos modifications avec `git push`.

Vous pouvez également supprimer le secret s’il apparaît dans une validation antérieure dans l’historique Git.

1. Utilisez `git log` pour déterminer la validation exposée dans l’erreur d’envoi (push) arrivant en premier dans l’historique.
1. Démarrez une relocalisation interactive avec `git rebase -i <commit-id>~1`. <commit-id> correspond à l’ID de la validation de l’étape 1.
1. Identifiez votre validation à modifier en passant `pick` à `edit` sur la première ligne du texte qui apparaît dans l’éditeur.
1. Supprimez le secret de votre code.
1. Validez la modification avec `git commit --amend`.
1. Exécutez `git rebase --continue` pour terminer la relocalisation.

## Résolution d’une validation bloquée dans l’interface utilisateur web

{% data reusables.secret-scanning.push-protection-web-ui-choice %}

Pour résoudre une validation bloquée dans l’interface utilisateur web, vous devez supprimer le secret du fichier ou utiliser la liste déroulante **Contourner la protection** pour autoriser le secret. Pour plus d’informations sur le contournement de la protection par émission de données à partir de l’interface utilisateur web, consultez « [Protection par émissions de données avec l’analyse des secrets](/code-security/secret-scanning/protecting-pushes-with-secret-scanning#bypassing-push-protection-for-a-secret) ».

Si vous confirmez qu’un secret est réel, vous devez supprimer le secret du fichier. Une fois que vous avez supprimé le secret, la bannière en haut de la page change et vous indique que vous pouvez maintenant commiter vos modifications.
