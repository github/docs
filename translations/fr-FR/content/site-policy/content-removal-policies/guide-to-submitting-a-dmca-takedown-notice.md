---
title: Guide de soumission d’un avis de retrait DMCA
redirect_from:
  - /dmca-notice-how-to
  - /articles/dmca-notice-how-to
  - /articles/guide-to-submitting-a-dmca-takedown-notice
  - /github/site-policy/guide-to-submitting-a-dmca-takedown-notice
versions:
  fpt: '*'
topics:
  - Policy
  - Legal
ms.openlocfilehash: c664d164136504f695a3954b03b01e0d47191eab
ms.sourcegitcommit: 93b306112b5cd5ce482d468a25c9961ad02f87ac
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 08/29/2022
ms.locfileid: '144556572'
---
Ce guide décrit les informations dont GitHub a besoin pour traiter une demande de retrait DMCA. Si vous avez des questions plus générales sur ce qu’est le DMCA ou sur la manière dont GitHub traite les demandes de retrait DMCA, veuillez consulter notre [Politique de retrait DMCA](/articles/dmca-takedown-policy).

En raison du type de contenu hébergé par GitHub (principalement du code logiciel) et de la manière dont ce contenu est géré (avec Git), nous avons besoin que les plaintes soient aussi spécifiques que possible. Ces recommandations sont conçues pour rendre le traitement des avis d’infraction présumée aussi simple que possible. Le formulaire de notification que nous présentons ci-dessous est conforme au formulaire suggéré par la loi DMCA, que l’on peut trouver sur le site officiel de l’U.S. Copyright Office : <https://www.copyright.gov>.

Comme pour toutes les questions juridiques, il est toujours préférable de consulter un professionnel au sujet de vos questions ou de votre situation spécifique. Nous vous encourageons fortement à le faire avant d’entreprendre toute action qui pourrait avoir un impact sur vos droits. Ce guide n’est pas un avis juridique et ne doit pas être considéré comme tel.

## Avant de commencer

***Dites la vérité.** _ Le DMCA exige que vous prêtiez serment sur les faits de votre plainte d’atteinte au droit d’auteur, _sous peine de parjure *. Le fait de mentir intentionnellement dans une déclaration sous serment constitue un crime fédéral. (* Voir* [U.S. Code, Title 18, Section 1621](https://www.gpo.gov/fdsys/pkg/USCODE-2011-title18/html/USCODE-2011-title18-partI-chap79-sec1621.htm).) La présentation de fausses informations peut également entraîner une responsabilité civile, c’est-à-dire que vous pouvez être poursuivi en justice pour des dommages-intérêts. Le DMCA [prévoit des dommages-intérêts](https://en.wikipedia.org/wiki/Online_Copyright_Infringement_Liability_Limitation_Act#%C2%A7_512(f)_Misrepresentations) contre toute personne qui fait sciemment une fausse déclaration sur le caractère illicite d’un élément ou d’une activité.

***Mener une enquête.*** Des millions d’utilisateurs et d’organisations mettent tout leur cœur et leur âme dans les projets qu’ils créent et auxquels ils contribuent sur GitHub. Le dépôt d’une plainte DMCA contre un tel projet est une allégation juridique sérieuse qui a des conséquences réelles pour les personnes. C’est pourquoi nous vous demandons de mener une enquête approfondie et de consulter un avocat avant de soumettre une demande de retrait afin de vous assurer que l’utilisation n’est pas réellement autorisée.

***Demandez d’abord gentiment.*** Une excellente première étape avant de nous envoyer un avis de retrait est d’essayer de contacter l’utilisateur directement. Celui-ci a peut-être ajouté des coordonnées de contact sur la page publique de son profil ou dans le fichier README du dépôt, ou vous pouvez le contacter en ouvrant une « issue » ou une « pull request » dans le dépôt. Ceci est une recommandation, non une obligation.

***Envoyez une demande appropriée.*** Nous ne pouvons accepter les avis de retrait DMCA que pour les œuvres qui sont protégées par le droit d’auteur et qui identifient une œuvre spécifique pouvant faire l’objet d’un droit d’auteur. Si vous avez une plainte à formuler concernant un abus de marque, veuillez consulter notre [Politique relative aux marques](/articles/github-trademark-policy/). Si vous souhaitez supprimer des données sensibles comme des mots de passe, veuillez consulter notre [politique relative aux données sensibles](/articles/github-sensitive-data-removal-policy/). Si vous avez affaire à de la diffamation ou à d’autres comportements abusifs, veuillez consulter notre [Charte de la Communauté](/articles/github-community-guidelines/).

***Le code est différent des autres contenus créatifs.*** GitHub est conçu pour la collaboration sur le code des logiciels. Cela complique l’identification d’une violation de droit d’auteur valable, par exemple pour des photos, de la musique ou des vidéos.

Il existe plusieurs raisons pour lesquelles le code est différent des autres contenus créatifs. Quelques exemples :

- Un dépôt peut inclure des morceaux de code provenant de nombreuses personnes différentes, mais un seul fichier ou une seule sous-routine dans un fichier porte atteinte à vos droits d’auteur.
- Le code mélange fonctionnalité et expression créative, mais le droit d’auteur ne protège que les éléments expressifs, pas les parties fonctionnelles.
- Il existe aussi des licences à prendre en compte. Le simple fait qu’un morceau de code comporte une mention de réserve du droit d’auteur ne signifie pas nécessairement qu’il est en infraction. Il est possible que le code soit utilisé conformément à une licence open source.
- Une utilisation particulière peut être [équitable](https://www.lumendatabase.org/topics/22) si elle n’utilise qu’une petite quantité de contenu protégé par le droit d’auteur, si elle utilise ce contenu de manière transformatrice, si elle l’utilise à des fins éducatives ou si elle combine ces différents éléments. Le code se prêtant naturellement à de telles utilisations, chaque cas d’utilisation est différent et doit être examiné séparément.
- La violation d’un code peut être alléguée de nombreuses manières différentes, ce qui nécessite des explications et des identifications détaillées des œuvres.

Cette liste n’est pas exhaustive, c’est pourquoi il est d’autant plus important de parler à un avocat de la plainte que vous envisagez de déposer lorsqu’il s’agit d’un code.

***Absence de bots.*** Vous devez faire appel à un professionnel qualifié pour évaluer les faits de chaque avis de retrait que vous envoyez. Si vous confiez vos efforts à un tiers, assurez-vous que vous connaissez son mode de fonctionnement et qu’il n’utilise pas de bots automatisés pour soumettre des plaintes en masse. Ces plaintes sont souvent invalides et leur traitement entraîne l’arrêt inutile de projets !

***Les questions concernant le droit d’auteur sont difficiles.*** Il peut être très difficile de déterminer si une œuvre particulière est protégée ou non par le droit d’auteur. Par exemple, les faits (y compris les données) ne font généralement pas l’objet d’une protection par le droit d’auteur. Les mots et les phrases courtes ne sont généralement pas protégés par le droit d’auteur. Les URL et les noms de domaine ne sont généralement pas soumis au droit d’auteur. Étant donné que vous ne pouvez utiliser la procédure DMCA que pour cibler un contenu protégé par le droit d’auteur, nous vous conseillons de consulter un avocat si vous avez des questions sur la protection de votre contenu.

***Vous pouvez recevoir un avis de contestation.*** Tout utilisateur concerné par votre avis de retrait peut décider de soumettre un [avis de contestation](/articles/guide-to-submitting-a-dmca-counter-notice). Dans ce cas, nous réactiverons son contenu dans un délai de 10 à 14 jours, sauf si vous nous informez que vous avez engagé une action en justice visant à empêcher l’utilisateur de se livrer à une activité illicite en rapport avec le contenu sur GitHub.

***Votre plainte sera publiée.*** Comme indiqué dans notre [Politique de retrait DMCA](/articles/dmca-takedown-policy#d-transparency), après avoir biffé les informations personnelles, nous publions tous les avis de retrait complets et exploitables à l’adresse <https://github.com/github/dmca>.

***GitHub n’est pas le juge.***
GitHub exerce peu de pouvoir discrétionnaire dans ce processus, si ce n’est de déterminer si les avis répondent aux exigences minimales du DMCA. Il appartient aux parties (et à leurs avocats) d’évaluer le bien-fondé de leurs demandes, en gardant à l’esprit que les avis doivent être émis sous peine de parjure.

## Votre plainte doit ...

1. **Ajoutez la déclaration suivante : « J’ai lu et compris le Guide de GitHub pour déposer un avis DMCA ».** Nous ne refuserons pas de traiter une plainte par ailleurs complète si vous n’incluez pas cette déclaration. Mais nous saurons que vous n’avez pas lu ces directives et nous pourrons vous demander d’y revenir.

2. **Identifiez l’œuvre protégée par le droit d’auteur qui, selon vous, a été violée.** Ces informations sont importantes, car elles aident l’utilisateur concerné à évaluer votre demande et lui donnent la possibilité de comparer votre travail au sien. La spécificité de votre identification dépendra de la nature de l’œuvre que vous estimez avoir été violée. Si vous avez publié votre travail, vous pouvez peut-être créer un lien vers la page Web où il se trouve. S’il s’agit d’une information exclusive et non publiée, vous pouvez la décrire et expliquer qu’elle est exclusive. Si vous l’avez enregistré auprès du Copyright Office, vous devez inclure le numéro d’enregistrement. Si vous prétendez que le contenu hébergé est une copie directe et littérale de votre travail, vous pouvez aussi simplement expliquer ce fait.

3. **Identifiez l’élément qui, selon vous, enfreint le droit d’auteur énuméré au 2e point ci-dessus.** Il est important d’être aussi précis que possible dans votre identification. Cette identification doit être dans une limite raisonnable suffisante pour permettre à GitHub de localiser le matériel. Au minimum, cela signifie que vous devez inclure l’URL de l’élément qui viole prétendument vos droits d’auteur. Si vous prétendez que moins d’un dépôt entier porte atteinte, identifiez le ou les fichiers spécifiques ou les numéros de ligne dans un fichier qui selon vous est en infraction. Si vous prétendez que l’ensemble du contenu d’une URL est en infraction, soyez également explicite sur ce point. 
   - Veuillez noter que GitHub ne désactive *pas* automatiquement les [forks](/articles/dmca-takedown-policy#b-what-about-forks-or-whats-a-fork) lors de la désactivation d’un dépôt parent. Si vous avez enquêté et analysé les forks d’un dépôt et que vous pensez qu’ils sont également en infraction, veuillez identifier explicitement chaque fork prétendument en infraction. Veuillez également confirmer que vous avez enquêté sur chaque cas individuel et que vos déclarations sous serment s’appliquent à chaque fork identifié. Dans de rares cas, vous pouvez alléguer une atteinte au droit d’auteur dans un dépôt complet faisant l’objet d’un fork en cours d’utilisation. Si, au moment où vous avez soumis votre avis, vous avez identifié tous les forks existants de ce dépôt comme étant en infraction, nous traiterons une réclamation valable contre tous les forks de ce réseau au moment où nous traiterons l’avis. Nous ferions cela étant donné la probabilité que tous les forks nouvellement créés contiennent le même contenu. En outre, si le réseau signalé qui contient le contenu prétendument en infraction intègre plus de cent (100) dépôts et qu’il serait donc difficile de l’examiner dans son intégralité, nous pouvons envisager de désactiver l’ensemble du réseau si vous déclarez dans votre avis contient la mention suivante : « Sur la base du nombre représentatif de forks que vous avez examinés, je pense que la totalité ou la plupart des forks sont en infraction dans la même mesure que le dépôt parent. » Votre déclaration sous serment s’applique à cette déclaration.

4. **Expliquez ce que l’utilisateur concerné doit faire pour remédier à l’infraction.** Là encore, fournir des informations spécifiques est important. Lorsque nous transmettons votre plainte à l’utilisateur, nous lui indiquons ce qu’il doit faire pour éviter que le reste de son contenu soit désactivé. L’utilisateur a-t-il juste besoin d’ajouter une déclaration d’attribution ? Doit-il supprimer certaines lignes de son code ou des fichiers entiers ? Bien sûr, nous comprenons que, dans certains cas, tout le contenu d’un utilisateur peut être considéré comme une infraction et qu’il n’y a rien à faire, à part tout supprimer. Si c’est le cas, veuillez le préciser également.

5. **Fournissez vos informations de contact.** Indiquez votre adresse électronique, nom, numéro de téléphone ainsi que votre adresse postale.

6. **Fournissez les coordonnées de l’auteur présumé de l’infraction, le cas échéant.** Il suffit généralement de fournir le nom d’utilisateur GitHub associé au contenu présumé illicite. Mais dans certains cas, vous pouvez avoir des connaissances supplémentaires sur le contrevenant présumé. Dans ce cas, veuillez nous communiquer ces informations.

7. **Ajoutez la déclaration suivante : « J’ai la conviction de bonne foi que l’utilisation des éléments protégés par le droit d’auteur décrits ci-dessus sur les pages Web en infraction n’est pas autorisée par le titulaire du droit d’auteur, ou son agent, ou par la loi. J’ai pris en compte l’usage équitable ».**

8. **Ajoutez également la déclaration suivante : « Je jure, sous peine de parjure, que les informations contenues dans cette notification sont exactes et que je suis le propriétaire du droit auteur, ou que je suis autorisé à agir au nom du propriétaire, d’un droit exclusif qui aurait été violé ».**

9. **Ajoutez votre signature physique ou électronique.**

## Plaintes concernant la technologie anti-contournement

Le Copyright Act interdit également le contournement des mesures technologiques qui contrôlent efficacement l’accès aux œuvres protégées par le droit d’auteur. Si vous pensez qu’un contenu hébergé sur GitHub viole cette interdiction, veuillez nous envoyer un rapport via notre {% data variables.contact.contact_dmca %}. Une réclamation pour contournement doit inclure les informations suivantes sur les mesures techniques en place et la manière dont le projet mis en cause les contourne. Plus précisément, l’avis envoyé à GitHub doit inclure des déclarations précises décrivant :
1. quelles sont les mesures techniques ;
2. comment elles contrôlent efficacement l’accès aux éléments protégés par le droit d’auteur ; et 
3. comment le projet mis en cause est conçu pour contourner les mesures de protection technologiques précédemment décrites.

## Comment soumettre votre plainte

Le moyen le plus rapide d’obtenir une réponse est de saisir vos informations et de répondre à toutes les questions de notre {% data variables.contact.contact_dmca %}.

Vous pouvez également envoyer une notification par e-mail à <copyright@github.com>. Vous pouvez inclure une pièce jointe si vous le souhaitez, mais veuillez également inclure une version en texte clair de votre lettre dans le corps de votre message.

Si vous devez envoyer votre avis par courrier postal, vous pouvez également le faire, mais il nous faudra *substantiellement* plus de temps pour le recevoir et y répondre. Les avis que nous recevons par courrier électronique en texte clair sont traités beaucoup plus rapidement que les pièces jointes en PDF ou le courrier postal. Si vous souhaitez toujours nous envoyer votre avis par courrier postal, veuillez utiliser l’adresse suivante :

```
GitHub, Inc
Attn: DMCA Agent
88 Colin P Kelly Jr St
San Francisco, CA. 94107
```
