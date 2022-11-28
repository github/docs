---
title: Joindre des fichiers
intro: Vous pouvez transmettre des informations en attachant divers types de fichiers à vos problèmes et demandes de tirage.
redirect_from:
  - /github/managing-your-work-on-github/managing-your-work-with-issues-and-pull-requests/file-attachments-on-issues-and-pull-requests
  - /articles/issue-attachments
  - /articles/file-attachments-on-issues-and-pull-requests
  - /github/managing-your-work-on-github/file-attachments-on-issues-and-pull-requests
  - /github/writing-on-github/working-with-advanced-formatting/attaching-files
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
ms.openlocfilehash: 28ce895a23c83f410d4755ad4036673e5c816155
ms.sourcegitcommit: d82f268a6f0236d1f4d2bf3d049974ada0170402
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 11/10/2022
ms.locfileid: '148160755'
---
{% data reusables.repositories.anyone-can-view-anonymized-url %}

Pour joindre un fichier à une conversation portant sur un problème ou sur une demande de tirage, faites-le glisser et déposez-le dans la zone des commentaires. Vous pouvez également cliquer sur la barre située en bas de la zone des commentaires pour parcourir, sélectionner et ajouter un fichier à partir de votre ordinateur.

![Sélectionner des pièces jointes à partir de l’ordinateur](/assets/images/help/pull_requests/select-bar.png)

Lorsque vous attachez un fichier, il est immédiatement chargé dans {% data variables.product.product_name %} et le champ de texte est mis à jour pour montrer l’URL anonymisée du fichier. {% ifversion fpt or ghec %}Pour plus d’informations sur les URL anonymisées, consultez « [À propos des URL anonymisées](/github/authenticating-to-github/about-anonymized-urls) ».{% endif %}

{% tip %}

**Conseil :** dans de nombreux navigateurs, vous pouvez copier et coller des images directement dans la zone.

{% endtip %}

La taille maximale des fichiers est de :
- 10 Mo pour les images et les fichiers GIF{% ifversion fpt or ghec %}
- 10 Mo pour les vidéos chargées dans un référentiel appartenant à un utilisateur ou à une organisation sur un plan GitHub gratuit
- 100 Mo pour les vidéos chargées dans un dépôt appartenant à un utilisateur ou à une organisation sur un plan GitHub payant{% elsif ghes %}
- 100 Mo pour les vidéos{% endif %}
- 25 Mo pour tous les autres fichiers

Nous prenons en charge les fichiers suivants :

* PNG ( *.png*)
* GIF ( *.gif*)
* JPEG ( *.jpg*) {%- ifversion svg-support %}
* SVG ( *.svg*) {%- endif %}
* Fichiers journaux ( *.log*)
* Documents Microsoft Word ( *.docx*), Powerpoint ( *.pptx*) et Excel ( *.xlsx*)
* Fichiers texte ( *.txt*)
* PDF ( *.pdf*)
* ZIP ( *.zip*, *.gz*, *.tgz*){% ifversion fpt or ghec or ghes %}
* Vidéo ( *.mp4*, *.mov*, *.webm*){% endif %}

{% ifversion fpt or ghec or ghes %}{% note %}

**Remarque :** la compatibilité des codecs vidéo est spécifique à chaque navigateur. Il est donc possible qu’une vidéo que vous chargez dans un navigateur ne soit pas consultable dans un autre navigateur. Pour le moment, nous vous recommandons d’utiliser le format H.264 pour une meilleure compatibilité.

{% endnote %}{% endif %}

![Pièces jointes GIF animées](/assets/images/help/pull_requests/dragging_images.gif)
