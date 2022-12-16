---
title: Schnellstart für GitHub-Lehrkräfte
intro: 'Innerhalb von 15 minutes, können Lehrkräfte mit Rabatten, Schulungen und Tools für {% data variables.product.company_short %} beginnen und dann für die Teilnehmer*innen eines Softwareentwicklungskurses mit {% data variables.product.prodname_classroom %} ein Klassenzimmer erstellen.'
allowTitleToDifferFromFilename: true
versions:
  fpt: '*'
shortTitle: Quickstart
ms.openlocfilehash: 8ab34de6a7e2583fc2447fc01729ced7044b3fa7
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: '147573884'
---
## Einführung

Lehrkräfte, die einen Kurs zur Softwareentwicklung unterrichten, können Rabatte, Partnerschaften, Training und Tools von {% data variables.product.prodname_education %} nutzen, um relevante Fähigkeiten für Kursteilnehmer effektiv zu unterrichten.

In diesem Leitfaden beginnst du mit {% data variables.product.product_name %}, registrierst dich über {% data variables.product.prodname_education %} für Konten und rabattierte Dienste und erstellst mit {% data variables.product.prodname_classroom %} einen Raum für deinen Kurs und deinen Arbeitsauftrag.

{% tip %}

**Tipp**: Informationen zu einem akademischen Rabatt für Studierende findest du unter [Antrag bei {% data variables.product.prodname_global_campus %} als Studierende*r](/education/explore-the-benefits-of-teaching-and-learning-with-github-education/github-global-campus-for-students/apply-to-github-global-campus-as-a-student)."

{% endtip %}

## Erstellen von Konten für {% data variables.product.product_name %}

Zunächst musst du ein kostenloses persönliches Konto für {% data variables.product.product_name %} erstellen.

{% data reusables.accounts.create-account %}
1. Folge den Eingabeaufforderungen, um dein kostenloses persönliches Konto zu erstellen.

Nachdem du dein persönliches Konto erstellt hast, erstelle ein kostenloses Organisationskonto. Du verwendest dieses Organisationskonto, um Kursräume {% data variables.product.prodname_classroom %} zu erstellen und zu verwalten.

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.organizations %} {% data reusables.organizations.new-organization %}
4. Folge den Anweisungen, um eine kostenlose Organisation zu erstellen.

Weitere Informationen findest du unter „[Typen von {% data variables.product.prodname_dotcom %}-Konten](/github/getting-started-with-github/types-of-github-accounts)“.

## Beantragen von Leistungen für Lehrkräfte

Als Nächstes registrierst du dich für Leistungen und Ressourcen von {% data variables.product.company_short %} für Lehrkräfte. Stelle dazu einen Antrag bei {% data variables.product.prodname_global_campus %}, einem Portal, das dir den zentralen Zugriff auf alle deine bildungsbezogenen Leistungen ermöglicht.  {% data reusables.education.educator-requirements %}

{% tip %}

**Tipp** Zusätzlich zu individuellen Rabatten bietet {% data variables.product.company_short %} Partnerschaften mit Bildungseinrichtungen über das {% data variables.product.prodname_campus_program %}. Weitere Informationen findest du auf der [{% data variables.product.prodname_campus_program %}](https://education.github.com/schools)-Website.

{% endtip %}

{% data reusables.education.benefits-page %} {% data reusables.education.click-get-teacher-benefits %} {% data reusables.education.select-email-address %} {% data reusables.education.upload-proof-status %} {% data reusables.education.school-name %} {% data reusables.education.plan-to-use-github %} {% data reusables.education.submit-application %}

Sobald du eine verifizierte {% data variables.product.prodname_global_campus %}-Lehrkraft bist, kannst du jederzeit auf {% data variables.product.prodname_global_campus %} zugreifen, indem du zur [{% data variables.product.prodname_education %}-Website](https://education.github.com) wechselst.

## Einrichten des {% data variables.product.prodname_classroom %} 

Mit deinem persönlichen Konto und deinem Organisationskonto kannst du mit {% data variables.product.prodname_classroom %} beginnen. {% data variables.product.prodname_classroom %} kann kostenlos verwendet werden. Du kannst Aufgaben, Notenarbeit automatisch nachverfolgen und verwalten und deinen Kursteilnehmern Feedback geben.

{% data reusables.classroom.sign-into-github-classroom %}
1. Wenn du {% data variables.product.prodname_classroom %} autorisieren möchtest, um auf dein persönliches Konto auf {% data variables.product.prodname_dotcom %} zuzugreifen, überprüfe die Informationen, und klicke dann auf **{% data variables.product.prodname_classroom %} autorisieren**.
  ![Schaltfläche „{% data variables.product.prodname_classroom %} autorisieren“ für das persönliche Konto](/assets/images/help/classroom/setup-click-authorize-github-classroom.png)
1. Überprüfe die Informationen. Wenn du {% data variables.product.prodname_classroom %} autorisieren möchtest, um auf dein Organisationskonto auf {% data variables.product.prodname_dotcom %} zuzugreifen, klicke auf **Zuweisung**.
  ![Schaltfläche „Zuweisung“ für die Organisation](/assets/images/help/classroom/setup-click-grant.png)
  
  {% tip %}
  
  **Tipp**: Wenn eine Schaltfläche **Anforderung** anstelle einer Schaltfläche **Zuweisung** angezeigt wird, bist du Mitglied der Organisation, nicht der Besitzer. Ein Besitzer muss deine Anforderung für {% data variables.product.prodname_classroom %} genehmigen. Du musst ein Organisationsbesitzer sein, um Kursräume und Aufgaben in {% data variables.product.prodname_classroom %} zu erstellen und zu verwalten. Weitere Informationen findest du unter [Autorisieren von OAuth-Apps](/github/authenticating-to-github/authorizing-oauth-apps#oauth-apps-and-organizations).
  
  {% endtip %}
  
1. Klicke auf **Github autorisieren**.
  ![Klicke die Schaltfläche „Autorisieren“ für die Organisation](/assets/images/help/classroom/setup-click-authorize-github.png)

## Erstellen deines Klassenzimmers

{% data reusables.classroom.about-classrooms %}

{% data reusables.classroom.sign-into-github-classroom %}
1. Klicke auf **Create your first classroom** (Dein erstes Klassenzimmer erstellen) oder **New classroom** (Neues Klassenzimmer).
{% data reusables.classroom.guide-create-new-classroom %}

## Nächste Schritte

Du hast ein Klassenzimmer erstellt und bis bereit, deinen Kurs mit {% data variables.product.product_name %} und {% data variables.product.prodname_classroom %} zu erweitern!  🎉

- Sieh dir einige Videos zu {% data variables.product.prodname_classroom %} an. Weitere Informationen findest du unter „[Grundlagen zum Einrichten von {% data variables.product.prodname_classroom %}](/education/manage-coursework-with-github-classroom/basics-of-setting-up-github-classroom)“.
- Verwalte deine Klassenzimmer und Klassenzimmeradministratoren und erstelle eine Liste von Kursteilnehmern für dein Klassenzimmer. Weitere Informationen findest du unter [Verwalten von Klassenzimmern](/education/manage-coursework-with-github-classroom/manage-classrooms).
- Verwende die Git- und {% data variables.product.company_short %}-Startzuweisung, um Kursteilnehmern eine Übersicht über Git- und {% data variables.product.product_name %}-Grundlagen zu geben. Weitere Informationen findest du unter „[Verwenden der Git- und {% data variables.product.company_short %}-Startzuweisung](/education/manage-coursework-with-github-classroom/use-the-git-and-github-starter-assignment)“.
- Erstelle eine Zuweisung für einzelne Kursteilnehmer oder Teams. {% data reusables.classroom.for-more-information-about-assignment-creation %}
- Schreibe und Implementiere automatisierte Tests, um den Kursteilnehmern in Aufgabenrepositorys direkt sofortiges Feedback zu geben. Weitere Informationen findest du unter„ [Verwenden der automatischen Bewertung](/education/manage-coursework-with-github-classroom/use-autograding)“.
- Nimm teil an {% data variables.product.prodname_education_community_with_url %}.
