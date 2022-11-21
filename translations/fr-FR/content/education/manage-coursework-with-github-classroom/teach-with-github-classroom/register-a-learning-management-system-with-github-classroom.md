---
title: Inscrire un système de gestion des formations auprès de GitHub Classroom
intro: 'Vous pouvez configurer un système de gestion des formations (LMS, Learning Management System) conforme à LTI avec {% data variables.product.prodname_classroom %}.'
versions:
  fpt: '*'
permissions: 'Organization owners who are admins for a classroom can connect learning management systems to {% data variables.product.prodname_classroom %}.'
shortTitle: Register an LMS
ms.openlocfilehash: e1c1abed5ce4ebf82c19b29fef9a005fbe4c7a02
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148106852'
---
## À propos de l’inscription d’un système de gestion des formations pour votre salle de classe

Avant de pouvoir connecter votre système de gestion des formations à une salle de classe, un administrateur de votre instance LMS doit configurer votre LMS pour autoriser {% data variables.product.prodname_classroom %}, puis inscrire votre LMS auprès de {% data variables.product.prodname_classroom %} pour lancer la négociation OAuth. Un administrateur ne doit effectuer ce processus d’inscription qu’une seule fois ; ensuite, tout enseignant qui utilise son instance LMS peut synchroniser ses cours LMS avec des salles de classe. Pour plus d’informations sur la connexion d’un cours LMS à une salle de classe, consultez « [Connecter le cours d’une système de gestion des formations à une salle de classe](/education/manage-coursework-with-github-classroom/teach-with-github-classroom/connect-a-learning-management-system-course-to-a-classroom) ».

{% note %}

**Remarque :** {% data reusables.classroom.google-classroom-note %}

{% endnote %}

## Systèmes de gestion des formations pris en charge

{% data reusables.classroom.supported-lmses %}

## Configuration de Canvas pour {% data variables.product.prodname_classroom %}

Vous pouvez inscrire votre installation Canvas auprès de {% data variables.product.prodname_classroom %} pour permettre aux enseignants d’importer les données des participants dans leurs salles de classe. Pour plus d’informations sur Canvas, consultez le [site web de Canvas](https://www.instructure.com/canvas/).

### 1. Inscrire les clés de développeur {% data variables.product.prodname_classroom %} dans Canvas

1. Connectez-vous à [Canvas](https://www.instructure.com/canvas/#login).
2. Dans la barre latérale gauche de la page d’accueil, cliquez sur **Administration**, puis sur **Administration du site**.
3. Cliquez sur **Clés de développeur**.
4. Sous « Clés de développeur », cliquez sur le bouton **+ Clé de développeur**, puis sélectionnez **+ Clé LTI** dans le menu déroulant.
5. Dans l’écran de configuration « Paramètres de clé », définissez les champs sur les valeurs suivantes : 

    | Champ dans la configuration de l’application Canvas | Valeur ou paramètre |
    | :- | :- |
    | **Méthode** | `Manual Entry` |
    | **Titre** | `GitHub Classroom` <br/><br/>**Remarque** : vous pouvez utiliser n’importe quel nom, mais si vous définissez cette valeur sur autre chose, veillez à ce que ce soit communiqué aux enseignants.  |
    | **Description** | `Sync Canvas course rosters to GitHub Classroom` (ou quelque chose de similaire) |
    | **URI du lien cible** | `https://classroom.github.com/context-link` |
    | **URL de lancement d’OpenID Connect** | `https://classroom.github.com/lti1p3/openid-connect/auth` |
    | **Méthode JWK** | `Public JWK URL` |
    | **URL JWK publique** | `https://classroom.github.com/.well-known/jwks.json` |
    | **URI de redirection** | `https://classroom.github.com/lti1p3/openid-connect/redirect` |
    | Liste déroulante **Services des avantages LTI** | Cochez la case « Peut récupérer les données utilisateur associées au contexte où l’outil est installé ». |
    | Liste déroulante **Paramètres supplémentaires** | Sous « Niveau de confidentialité », sélectionnez `Public` |
    | **Dispositions** | Sélectionnez `Course Settings Sub Navigation`. <br/><br/>**Remarque** : Si vous définissez le placement sur autre chose, ceci doit être communiqué aux enseignants. Notre documentation fait l’hypothèse qu’il s’agit de la disposition du bouton. |
6. Cliquez sur **Enregistrer**.
7. Dans le tableau de la page « Clés de développeur », dans la ligne pour la clé de développeur GitHub Classroom, prenez note de la valeur de l’ID client dans la colonne « Détails » : ceci doit être communiqué aux enseignants pour qu’ils terminent la configuration. 
8. Dans le tableau de la page « Clés de développeur », sous la colonne « État », changez l’état de la clé sur « Activé ».

### 2. Inscrivez vos clés de développeur auprès de {% data variables.product.prodname_classroom %}

1. Atteindre https://classroom.github.com/register-lms. 
2. Renseignez les informations suivantes :
   - Sous « Type de LMS », choisissez « Canvas » dans le menu déroulant. 
   - « Identificateur de l’émetteur » : `https://canvas.instructure.com`
   - « Domaine » : URL de base de votre instance Canvas
   - « ID de client » : L’« ID de client » sous « Détails » de la clé de développeur que vous avez créée
   - « Point de terminaison d’autorisation OIDC » : URL de base de votre instance Canvas avec `/login/oauth2/token` ajouté à la fin.
   - « URL de récupération du jeton OAuth 2.0 » : URL de base de votre instance Canvas avec `/api/lti/authorize_redirect` ajouté à la fin.
   - « URL du jeu de clés » : URL de base de votre instance Canvas avec `/api/lti/security/jwks` ajouté à la fin.

  ![Inscrire une instance Canvas auprès de GitHub Classroom](/assets/images/help/classroom/register-canvas-with-github-classroom.png)

3. Cliquez sur **S'inscrire**. 
4. Vous devez voir la bannière « LMS correctement inscrit » en haut de l’écran, ce qui signifie que vous avez inscrit votre instance LMS et que les enseignants peuvent désormais lier leurs salles de classe.

## Configuration de Moodle pour {% data variables.product.prodname_classroom %}

Vous pouvez inscrire votre installation Moodle auprès de {% data variables.product.prodname_classroom %} pour permettre aux enseignants d’importer les données des participants dans leurs salles de classe. Pour plus d’informations sur Moodle, consultez le [site web de Moodle](https://moodle.org).

Vous devez utiliser Moodle version 3.0 ou ultérieure.

### 1. Activez la publication en tant qu’outil LTI dans Moodle

1. Connectez-vous à [Moodle](https://moodle.org/login/).
2. Cliquez sur l’onglet « Administration du site » dans le menu de plus haut niveau.
3. Dans la page « Administration du site », cliquez sur l’onglet « Plug-ins », faites défiler jusqu’à la section « Authentification », puis cliquez sur **Gérer l’authentification**.
4. En regard du champ « LTI », cliquez sur le bouton bascule pour activer LTI.
5. Cliquez à nouveau sur l’onglet « Plug-ins », faites défiler jusqu’à « Inscriptions », puis cliquez sur **Gérer les plug-ins d’inscription**.
6. En regard du champ « Publier en tant qu’outil LTI », cliquez sur le bouton bascule pour activer la publication en tant qu’outil LTI.
7. Revenez à la page « Administration du site » en cliquant sur l’onglet « Administration du site » dans le menu de plus haut niveau, puis faites défiler jusqu’à la section « Sécurité » et cliquez sur **Sécurité HTTP**.
8. En regard de « Autoriser l’incorporation de trames », cochez la case pour activer l’incorporation de trames, puis cliquez sur **Enregistrer les modifications**.

### 2. Inscrivez {% data variables.product.prodname_classroom %} en tant qu’outil externe

1. Revenez à la page « Administration du site » de Moodle en cliquant sur l’onglet « Administration du site » dans le menu de plus haut niveau. 
2. Cliquez sur l’onglet « Plug-ins » puis, en regard de la section « Modules d’activité », sous «Outil externe », cliquez sur **Gérer les outils**.
3. Cliquez sur **Configurer un outil manuellement**. 
4. Entrez les valeurs suivantes dans les champs :

    | Champ dans la configuration de l’application Moodle | Valeur ou paramètre |
    | :- | :- |
    | **Nom de l’outil** | `GitHub Classroom` <br/><br/>**Remarque** : vous pouvez utiliser n’importe quel nom, mais si vous définissez cette valeur sur autre chose, veillez à ce que ce soit communiqué aux enseignants. |
    | **Tool URL** | `https://classroom.github.com` |
    | **LTI version** | `LTI 1.3` |
    | **Type de clé publique** | `Keyset URL` |
    | **Jeu de clés publiques** | `https://classroom.github.com/.well-known/jwks.json` |
    | **Lancer l’URL de connexion** | `https://classroom.github.com/lti1p3/openid-connect/auth` |
    | **URI de redirection** | `https://classroom.github.com/lti1p3/openid-connect/redirect` |
    | **Default launch container** | `New window` |

5. Cochez la case **Prend en charge la liaison profonde (message d’élément de contenu).** .
6. Sous la liste déroulante « Services », en regard de « Noms et provisionnement des rôles IMS LTI », sélectionnez « Utiliser ce service pour récupérer les informations des membres conformément aux paramètres de confidentialité » dans le menu déroulant. 
7. Cliquez sur **Save changes**. 
8. GitHub Classroom a maintenant été inscrit en tant qu’outil externe. Sous « Outils », dans la zone « GitHub Classroom », cliquez sur l’icône de menu pour afficher l’écran « Détails de la configuration de l’outil ». Cet écran contient des informations importantes que vous devez entrer à la dernière étape de l’inscription de votre instance dans {% data variables.product.prodname_classroom %} ci-dessous. 

### 3. Inscription de votre instance Moodle auprès de {% data variables.product.prodname_classroom %}

1. Atteindre https://classroom.github.com/register-lms. 
2. Renseignez les informations suivantes :
   - Sous « Type de LMS », choisissez « Moodle » dans le menu déroulant. 
   - « Identificateur de l’émetteur » : « ID de plateforme » provenant des « Détails de configuration de l’outil » de l’outil externe que vous avez créé dans Moodle
   - « Domaine » : URL de base de votre instance Moodle
   - « ID de client » : « ID de client » provenant des « Détails de configuration de l’outil » de l’outil externe que vous avez créé dans Moodle
   - « URL de demande d’authentification » : « URL de demande d’authentification » provenant des « Détails de configuration de l’outil » de l’outil externe que vous avez créé dans Moodle
   - « URL de jeton d’accès » : « URL de jeton d’accès » provenant des « Détails de configuration de l’outil » de l’outil externe que vous avez créé dans Moodle
   - « URL de jeu de clés » : « URL de jeu de clés » provenant des « Détails de configuration de l’outil » de l’outil externe que vous avez créé dans Moodle
  
  ![Inscrire une instance Moodle auprès de GitHub Classroom](/assets/images/help/classroom/register-moodle-with-github-classroom.png)

3. Cliquez sur **S'inscrire**.
4. Vous devez voir la bannière « LMS correctement inscrit » en haut de l’écran, ce qui signifie que vous avez inscrit votre instance LMS et que les enseignants peuvent désormais lier leurs salles de classe.

## Configuration de Sakai pour {% data variables.product.prodname_classroom %}

### 1. Inscrivez {% data variables.product.prodname_classroom %} en tant qu’outil externe

1. Accédez à Sakai et connectez-vous.
2. Accédez à « Espace de travail d’administration », puis sélectionnez **Outils externes** dans la barre latérale gauche. 
3. Cliquez sur **Installer l’outil LTI 1.x**.
4. Entrez les valeurs suivantes dans les champs :

    | Champ dans la configuration de l’application Sakai | Valeur ou paramètre |
    | :- | :- |
    | **Nom de l’outil** | GitHub Classroom - [Nom de votre cours] <br/><br/>**Remarque** : vous pouvez utiliser n’importe quel nom, mais si vous définissez cette valeur sur autre chose, veillez à ce que ce soit communiqué aux enseignants. |
    | **Texte du bouton** (Texte dans le menu de l’outil) | Ce que l’enseignant verra sur le bouton pour lancer sur {% data variables.product.prodname_classroom %}. Par exemple, la valeur peut être `sync`. |
    | **URL de lancement** | `https://classroom.github.com/context-link` |
    | **Envoyer les noms d’utilisateur à un outil externe** | Activez cette case à cocher. |
    | **Fournir la liste des participants à un outil externe** | Activez cette case à cocher. |
    | **L’outil prend en charge LTI 1.3** | Activez cette case à cocher. |
    | **URL du jeu de clés de l’outil LTI 1.3** | `https://classroom.github.com/.well-known/jwks.json` |
    | **OpenID Connect/Point de terminaison d’initialisation de l’outil LTI 1.3** | `https://classroom.github.com/lti1p3/openid-connect/auth` |
    | **Point de terminaison de redirection de l’outil LTI 1.3** | `https://classroom.github.com/lti1p3/openid-connect/redirect` |
5. Après la soumission, Sakai vous montre les informations dont vous avez besoin pour inscrire votre instance Sakai auprès de {% data variables.product.prodname_classroom %}.

### 2. Inscription de votre instance Sakai auprès de {% data variables.product.prodname_classroom %}

1. Atteindre https://classroom.github.com/register-lms.
2. Renseignez les informations suivantes :
   - Sous « Type de LMS », choisissez « Sakai » dans le menu déroulant. 
   - « Émetteur de la plateforme LTI 1.3 » : Le champ « Émetteur de la plateforme LTI 1.3 » tel que fourni par Sakai
   - « Domaine » : URL de base de votre instance Sakai
   - « ID de client LTI 1.3 » : Le champ « ID de client LTI 1.3 » tel que fourni par Sakai
   - « URL d’authentification OIDC de la plateforme LTI 1.3 » : le champ « URL d’authentification OIDC de la plateforme LTI 1.3 » tel que fourni par Sakai
   - « URL de récupération du jeton du porteur OAuth2 de la plateforme LTI 1.3 » : le champ « URL de récupération du jeton du porteur OAuth2 de la plateforme LTI 1.3 » tel que fourni par Sakai
   - « URL connue/de jeu de clés OAuth2 de la plateforme LTI 1.3 » : le champ « URL connue/de jeu de clés OAuth2 de la plateforme LTI 1.3 » tel que fourni par Sakai
  
  ![Inscrire une instance Sakai auprès de GitHub Classroom](/assets/images/help/classroom/register-sakai-with-github-classroom.png)

3. Cliquez sur **S'inscrire**. 
4. Vous devez voir la bannière « LMS correctement inscrit » en haut de l’écran, ce qui signifie que vous avez inscrit votre instance LMS et que les enseignants peuvent désormais lier leurs salles de classe.
