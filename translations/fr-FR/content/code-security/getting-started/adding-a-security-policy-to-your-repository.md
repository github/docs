---
title: Ajout d’une stratégie de sécurité à votre dépôt
intro: Vous pouvez fournir des instructions pour la façon de signaler une vulnérabilité de sécurité dans votre projet en ajoutant une stratégie de sécurité à votre dépôt.
redirect_from:
  - /articles/adding-a-security-policy-to-your-repository
  - /github/managing-security-vulnerabilities/adding-a-security-policy-to-your-repository
  - /github/code-security/security-advisories/adding-a-security-policy-to-your-repository
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: how_to
topics:
  - Security policies
  - Vulnerabilities
  - Repositories
  - Health
shortTitle: Add a security policy
ms.openlocfilehash: ef4a256c06b9149bd9db8d7afdce974dd1d29f0d
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 11/09/2022
ms.locfileid: '148159268'
---
## À propos des stratégies de sécurité

Pour indiquer aux utilisateurs comment signaler des vulnérabilités de sécurité dans votre projet,{% ifversion fpt or ghes or ghec %} vous pouvez ajouter un fichier _SECURITY.md_ à la racine de votre dépôt, au dossier `docs` ou au dossier `.github`.{% else %} vous pouvez ajouter un fichier _SECURITY.md_ à la racine de votre dépôt ou au dossier `docs`.{% endif %} Quand un utilisateur crée un problème dans votre dépôt, il voit un lien vers la stratégie de sécurité de votre projet.

{% ifversion not ghae %}
<!-- no public repos in GHAE -->
Vous pouvez créer une stratégie de sécurité par défaut pour votre organisation ou votre compte personnel. Pour plus d’informations, consultez « [Création d’un fichier d’intégrité de la communauté par défaut](/communities/setting-up-your-project-for-healthy-contributions/creating-a-default-community-health-file) ».
{% endif %}

{% tip %}

**Conseil** : Pour aider les utilisateurs à trouver votre stratégie de sécurité, vous pouvez créer un lien vers votre fichier _SECURITY.md_ à partir d’autres emplacements dans le dépôt, par exemple le fichier README. Pour plus d’informations, consultez « [À propos des fichiers README](/articles/about-readmes) ».

{% endtip %}

{% ifversion fpt or ghec %} Une fois qu’un utilisateur a signalé une vulnérabilité de sécurité dans votre projet, vous pouvez utiliser {% data variables.product.prodname_security_advisories %} pour divulguer, corriger et publier les informations sur la vulnérabilité. Pour plus d’informations sur le processus de signalement et de divulgation de vulnérabilités dans {% data variables.product.prodname_dotcom %}, consultez « [À propos de la divulgation coordonnée des vulnérabilités de sécurité](/code-security/security-advisories/guidance-on-reporting-and-writing/about-coordinated-disclosure-of-security-vulnerabilities#about-reporting-and-disclosing-vulnerabilities-in-projects-on-github) ». Pour plus d’informations sur les avis de sécurité des référentiels, consultez « [À propos des avis de sécurité des référentiels](/github/managing-security-vulnerabilities/about-github-security-advisories). »

{% data reusables.repositories.github-security-lab %} {% endif %} {% ifversion ghes or ghae %}
<!-- alternative to the content about GitHub Security Advisories in the dotcom article -->
En rendant les instructions de signalement des vulnérabilités de sécurité clairement disponibles, vous permettez à vos utilisateurs de signaler facilement les vulnérabilités de sécurité qu’ils trouvent dans votre dépôt en utilisant votre canal de communication préféré.
{% endif %}

## Ajout d’une stratégie de sécurité à votre dépôt

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-security %}
3. Dans le volet gauche, cliquez sur **Stratégie de sécurité**.
  ![Onglet Stratégie de sécurité](/assets/images/help/security/security-policy-tab.png)
4. Cliquez sur **Démarrer la configuration**.
  ![Bouton Démarrer la configuration](/assets/images/help/security/start-setup-security-policy-button.png)
5. Dans le nouveau fichier _SECURITY.md_, ajoutez des informations sur les versions prises en charge de votre projet et sur la façon de signaler une vulnérabilité.
{% data reusables.files.write_commit_message %} {% data reusables.files.choose-commit-email %} {% data reusables.files.choose_commit_branch %} {% data reusables.files.propose_file_change %}

## Pour aller plus loin

- « [Sécurisation de votre dépôt](/code-security/getting-started/securing-your-repository) »{% ifversion not ghae %}
- « [Configuration de votre projet pour des contributions saines](/communities/setting-up-your-project-for-healthy-contributions) »{% endif %}{% ifversion fpt or ghec %}
- [{% data variables.product.prodname_security %}]({% data variables.product.prodname_security_link %}){% endif %}
