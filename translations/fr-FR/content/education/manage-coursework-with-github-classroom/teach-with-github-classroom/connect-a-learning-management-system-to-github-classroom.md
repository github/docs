---
title: Connecter un système de gestion des formations à GitHub Classroom
intro: Vous pouvez configurer un système de gestion des formations conforme LTI à connecter à {% data variables.product.prodname_classroom %} afin de pouvoir importer une liste pour votre classe.
versions:
  fpt: '*'
permissions: Organization owners who are admins for a classroom can connect learning management systems to {% data variables.product.prodname_classroom %}. {% data reusables.classroom.classroom-admins-link %}
redirect_from:
- /education/manage-coursework-with-github-classroom/configuring-a-learning-management-system-for-github-classroom
- /education/manage-coursework-with-github-classroom/connect-to-lms
- /education/manage-coursework-with-github-classroom/generate-lms-credentials
- /education/manage-coursework-with-github-classroom/setup-canvas
- /education/manage-coursework-with-github-classroom/setup-generic-lms
- /education/manage-coursework-with-github-classroom/setup-moodle
- /education/manage-coursework-with-github-classroom/connect-a-learning-management-system-to-github-classroom
shortTitle: Connect an LMS
ms.openlocfilehash: e97a90ee822e779ecdf6ca94b7d35c29ddab5e5e
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: "147717828"
---
## À propos de la configuration de votre système de gestion des formations

Vous pouvez connecter un système de gestion des formations à {% data variables.product.prodname_classroom %}, et {% data variables.product.prodname_classroom %} peut importer une liste d’identificateurs d’étudiant à partir de ce système. Pour connecter votre système de gestion des formations à {% data variables.product.prodname_classroom %}, vous devez y entrer les informations d’identification de configuration de {% data variables.product.prodname_classroom %}.

## Prérequis

Pour configurer un système de gestion des formations afin qu’il se connecte à {% data variables.product.prodname_classroom %}, vous devez d’abord créer une classe. Pour plus d’informations, consultez « [Gérer les classes](/education/manage-coursework-with-github-classroom/manage-classrooms#creating-a-classroom) ».

## Systèmes de gestion des formations pris en charge

{% note %}

**Remarque :** {% data variables.product.prodname_classroom %} prenait auparavant en charge l’importation des données de liste de classe issues de systèmes de gestion des formations qui implémentent Learning Tools Interoperability (LTI) versions 1.0 et 1.1. Le 30 juin 2022, le Global Learning Consortium IMS (Instructional Management System) [a mis fin à la prise en charge des versions de LTI 1.0 et 1.1](https://www.imsglobal.org/lti-security-announcement-and-deprecation-schedule). Afin de garantir la sécurité des informations sensibles des étudiants, {% data variables.product.company_short %} a temporairement désactivé l’importation des données de liste de classe issues de systèmes de gestion des formations compatibles avec LTI.<br><br>

La prise en charge de la dernière version de Learning Tools Interoperability, [LTI 1.3](https://www.imsglobal.org/activity/learning-tools-interoperability), est actuellement en cours d’étude et sera bientôt disponible dans {% data variables.product.prodname_classroom %}.

{% endnote %}

LTI est un protocole standard et l’utilisation qu’en fait GitHub Classroom est certifiée par le consortium Instructional Management System (IMS) Global Learning Consortium. Pour plus d’informations, consultez [Learning Tools Interoperability](https://www.imsglobal.org/activity/learning-tools-interoperability) et [About IMS Global Learning Consortium](http://www.imsglobal.org/aboutims.html) sur le site web IMS Global Learning Consortium.

{% data variables.product.company_short %} a testé l’importation des données de liste de classe des systèmes de gestion des formations suivants dans {% data variables.product.prodname_classroom %}.

- Google Classroom


## Connexion à Google Classroom

{% data reusables.classroom.sign-into-github-classroom %} {% data reusables.classroom.click-classroom-in-list %} {% data reusables.classroom.click-students %}
1. Si votre classe a déjà une liste de classe, vous pouvez la mettre à jour, ou la supprimer et en créer une.
    - Pour plus d’informations sur la suppression et la création d’une liste de classe, consultez « [Suppression d’une liste de classe](/education/manage-coursework-with-github-classroom/manage-classrooms#deleting-a-roster-for-a-classroom) » et « [Création d’une liste de classe](/education/manage-coursework-with-github-classroom/manage-classrooms#creating-a-roster-for-your-classroom) ».
    - Pour plus d’informations sur la mise à jour d’une liste de classe, consultez « [Ajout d’étudiants à votre liste de classe](/education/manage-coursework-with-github-classroom/manage-classrooms#adding-students-to-the-roster-for-your-classroom) ».
1. Dans la liste des systèmes de gestion des formations, cliquez sur Google Classroom.
  ![Google Classroom](/assets/images/help/classroom/classroom-settings-click-google-classroom.png)
1. Connectez-vous à Google, puis sélectionnez la classe à laquelle établir un lien.


## Connexion à Canvas, Moodle, Sakai et d’autres systèmes de gestion des formations

La connexion à d’autres systèmes de gestion des formations est temporairement indisponible pendant que {% data variables.product.company_short %} effectue sa mise à jour vers Learning Tools Interoperability (LTI) version 1.3. Pour plus d’informations, consultez « [Systèmes de gestion des formations pris en charge](#supported-lmses) ».

Dans l’intervalle, vous pouvez entrer manuellement votre liste de classe. Pour plus d’informations sur l’importation manuelle de la liste de classe à partir de votre système de gestion des formations dans {% data variables.product.prodname_classroom %}, consultez « [Gérer les classes](/education/manage-coursework-with-github-classroom/manage-classrooms#creating-a-roster-for-your-classroom) ».

## Déconnexion de votre système de gestion des formations

{% data reusables.classroom.sign-into-github-classroom %} {% data reusables.classroom.click-classroom-in-list %} {% data reusables.classroom.click-settings %}
1. Sous « Se connecter à un système de gestion des formations », cliquez sur **Paramètres de connexion**.
  ![Lien « Paramètres de connexion » dans les paramètres de classe](/assets/images/help/classroom/classroom-settings-click-connection-settings.png)
1. Sous « Supprimer la connexion à votre système de gestion des formations », cliquez sur **Se déconnecter de votre système de gestion des formations**.
  ![Bouton « Se déconnecter de votre système de gestion des formations » dans les paramètres de connexion de la classe](/assets/images/help/classroom/classroom-settings-click-disconnect-from-your-lms-button.png)
