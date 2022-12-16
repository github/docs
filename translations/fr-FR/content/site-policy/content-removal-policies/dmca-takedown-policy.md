---
title: Politique de retrait DMCA
redirect_from:
  - /dmca
  - /dmca-takedown
  - /dmca-takedown-policy
  - /articles/dmca-takedown
  - /articles/dmca-takedown-policy
  - /github/site-policy/dmca-takedown-policy
versions:
  fpt: '*'
topics:
  - Policy
  - Legal
ms.openlocfilehash: 6a4f45a0f04db6076826441ad71aecdf30d22730
ms.sourcegitcommit: 93b306112b5cd5ce482d468a25c9961ad02f87ac
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 08/29/2022
ms.locfileid: '144556595'
---
Bienvenue dans le guide GitHub sur le Digital Millennium Copyright Act, communément appelé « DMCA ». Cette page n’est pas conçue comme une introduction complète à la loi. Toutefois, si vous avez reçu un avis de retrait DMCA visant du contenu que vous avez publié sur GitHub ou si vous êtes un titulaire de droits et souhaitez émettre un tel avis, cette page vous aidera, nous l’espérons, à démystifier un peu la loi ainsi que nos politiques pour s’y conformer.

(Si vous souhaitez simplement envoyer un avis, vous pouvez passer à la section « [G. Envoi d’avis](#g-submitting-notices) ».)

Comme pour toutes les questions juridiques, il est toujours préférable de consulter un professionnel pour votre situation spécifique. Nous vous encourageons fortement à le faire avant d’entreprendre toute action qui pourrait avoir un impact sur vos droits. Ce guide n’est pas un avis juridique et ne doit pas être considéré comme tel.

## Qu’est ce que le DMCA ?

Pour comprendre le DMCA et certaines des lignes politiques qu’il dessine, il peut être utile d’examiner la vie avant sa promulgation.

Le DMCA prévoit une sphère de sécurité pour les fournisseurs de services qui hébergent des contenus générés par les utilisateurs. Étant donné qu’une seule plainte pour violation du droit d’auteur peut entraîner des dommages-intérêts légaux pouvant aller jusqu’à 150 000 dollars, la possibilité d’être tenu responsable du contenu généré par les utilisateurs peut être très préjudiciable pour les fournisseurs de services. Avec des dommages potentiels multipliés par des millions d’utilisateurs, les sites hébergés dans le cloud et de contenu généré par les utilisateurs comme YouTube, Facebook ou GitHub n’auraient probablement [jamais vu le jour](https://arstechnica.com/tech-policy/2015/04/how-the-dmca-made-youtube/) sans le DMCA (ou du moins pas sans répercuter une partie de ce coût en aval sur leurs utilisateurs).

Le DMCA aborde cette question en créant une [sphère de sécurité pour la responsabilité en matière de droits d’auteur](https://www.copyright.gov/title17/92chap5.html#512) pour les fournisseurs d’accès Internet qui hébergent des contenus générés par les utilisateurs présumés en infraction. En substance, tant qu’un fournisseur de services respecte les règles de notification et de retrait du DMCA, il n’est pas responsable de l’atteinte au droit d’auteur liée au contenu généré par les utilisateurs. Pour cette raison, il est important que GitHub conserve son statut de sphère de sécurité DMCA.

Le DMCA interdit également le [contournement des mesures techniques](https://www.copyright.gov/title17/92chap12.html) qui contrôlent efficacement l’accès aux œuvres protégées par le droit d’auteur. 

## Coup d’œil sur les Avis DMCA

Le DMCA fournit deux procédures simples que tous les utilisateurs de GitHub doivent connaître : (i) une procédure d’[avis de retrait](/articles/guide-to-submitting-a-dmca-takedown-notice) permettant aux détenteurs de droits d’auteur de demander le retrait d’un contenu ; et (ii) une procédure d’[avis de contestation](/articles/guide-to-submitting-a-dmca-counter-notice) permettant aux utilisateurs de faire réactiver un contenu retiré par erreur ou après une mauvaise identification.

Les [avis de retrait](/articles/guide-to-submitting-a-dmca-takedown-notice) DMCA sont utilisés par les titulaires de droits d’auteur pour demander à GitHub de retirer le contenu qu’ils estiment être en infraction. Si vous êtes un concepteur ou un développeur de logiciels, vous créez chaque jour du contenu protégé par le droit d’auteur. Si quelqu’un d’autre utilise votre contenu protégé par le droit d’auteur de manière non autorisée sur GitHub, vous pouvez nous envoyer un avis de retrait DMCA pour demander que le contenu en infraction soit modifié ou supprimé.

D’autre part, des [avis de contestation](/articles/guide-to-submitting-a-dmca-counter-notice) peuvent être utilisés pour corriger des erreurs. Il se peut que la personne qui envoie l’avis de retrait ne soit pas titulaire du droit d’auteur, qu’elle n’ait pas réalisé que vous disposiez d’une licence ou qu’elle ait commis une autre erreur dans son avis de retrait. Comme GitHub ne peut généralement pas vérifier qu’une erreur a véritablement été commise, l’avis de contestation DMCA vous permet de nous le faire savoir et de demander que nous remettions le contenu en ligne.

La procédure d’avis et de retrait DMCA ne doit être utilisée que pour les plaintes relatives à l’atteinte au droit d’auteur. Les notifications envoyées au moyen de notre procédure DMCA doivent identifier la ou les œuvres protégées par des droits d’auteur prétendument violés. Cette procédure ne peut pas être utilisée pour d’autres plaintes, comme les plaintes relatives à une prétendue [violation de marque commerciale](/articles/github-trademark-policy/) ou à des [données sensibles](/articles/github-sensitive-data-removal-policy/). Nous proposons des procédures distinctes pour ces problèmes.

## A. Comment cela fonctionne-t-il réellement ?

Le cadre du DMCA, c’est un peu comme passer des notes en classe. Le titulaire du droit d’auteur transmet à GitHub une plainte concernant un utilisateur. Si elle est écrite correctement, nous transmettons la plainte à l’utilisateur. Si l’utilisateur conteste la plainte, il peut renvoyer une note indiquant son désaccord. GitHub exerce peu de pouvoir discrétionnaire dans ce processus, si ce n’est de déterminer si les avis répondent aux exigences minimales du DMCA. Il appartient aux parties (et à leurs avocats) d’évaluer le bien-fondé de leurs demandes, en gardant à l’esprit que les avis doivent être émis sous peine de parjure.

Vous trouverez ci-dessous les étapes de base du processus.

1. **Le titulaire du droit d’auteur enquête.** Le titulaire du droit d’auteur doit toujours mener une enquête initiale pour confirmer à la fois (a) qu’il possède le droit d’auteur d’une œuvre originale et (b) que le contenu sur GitHub est non autorisé et en infraction. Il s’agit notamment de confirmer que l’utilisation n’est pas protégée en tant qu’[usage raisonnable](https://www.lumendatabase.org/topics/22). Une utilisation particulière peut être équitable si elle n’utilise qu’une petite quantité du contenu protégé par le droit d’auteur, si elle utilise ce contenu de manière transformatrice, si elle l’utilise à des fins éducatives ou si elle combine ces différents éléments. Le code se prêtant naturellement à de telles utilisations, chaque cas d’utilisation est différent et doit être examiné séparément.
> **Exemple :** Un employé d’Acme Web Company trouve une partie du code de l’entreprise dans un dépôt GitHub. Acme Web Company accorde des licences pour son code source à plusieurs partenaires de confiance. Avant d’envoyer un avis de retrait, Acme doit examiner ces licences et ses accords pour confirmer que le code sur GitHub n’est autorisé par aucun de ces documents.

2. **Le titulaire du droit d’auteur envoie un avis.** Après avoir mené son enquête, le titulaire du droit d’auteur prépare et envoie un [avis de retrait](/articles/guide-to-submitting-a-dmca-takedown-notice) à GitHub. Si l’avis de retrait est suffisamment détaillé conformément aux exigences légales (comme expliqué dans le [guide pratique](/articles/guide-to-submitting-a-dmca-takedown-notice)), nous [publierons l’avis](#d-transparency) sur notre [dépôt public](https://github.com/github/dmca) et transmettrons le lien à l’utilisateur concerné.

3. **GitHub demande à l’utilisateur d’apporter des modifications.** Si l’avis allègue que l’ensemble du contenu d’un dépôt ou d’un package est en infraction, nous passerons à l’étape 6 et désactiverons l’ensemble du dépôt du package dans les meilleurs délais. Sinon, puisque GitHub ne peut pas désactiver l’accès à des fichiers spécifiques dans un dépôt, nous contacterons l’utilisateur qui a créé le dépôt et lui donnerons environ un jour ouvrable pour supprimer ou modifier le contenu spécifié dans l’avis. Nous informerons le titulaire du droit d’auteur si et quand nous donnerons à l’utilisateur la possibilité d’apporter des modifications. Les packages étant immuables, si une partie seulement d’un package est en infraction, GitHub doit désactiver l’ensemble du package, mais nous autorisons la réintégration une fois que la partie en infraction est supprimée. 

4. **L’utilisateur notifie GitHub des modifications.** Si l’utilisateur choisit d’apporter les modifications spécifiées, il *doit* nous en informer dans un délai d’environ un jour ouvrable. Dans le cas contraire, nous désactiverons le dépôt (comme décrit à l’étape 6). Si l’utilisateur nous informe qu’il a effectué des modifications, nous vérifierons que les modifications ont été apportées et en informerons le titulaire du droit d’auteur.

5. **Le titulaire du droit d’auteur révise ou retire l’avis.** Si l’utilisateur apporte des modifications, le titulaire du droit d’auteur doit les examiner et renouveler ou réviser son avis de retrait si les modifications sont insuffisantes. GitHub ne prendra aucune mesure supplémentaire à moins que le titulaire du droit d’auteur ne nous contacte pour renouveler l’avis de retrait initial ou en soumettre un nouveau. Si le titulaire du droit d’auteur est satisfait des modifications, il peut soit soumettre une rétractation formelle, soit ne rien faire. GitHub interprétera un silence de plus de deux semaines comme une rétractation implicite de l’avis de retrait.

6. **GitHub peut désactiver l’accès au contenu.** GitHub désactivera le contenu d’un utilisateur si : (i) le titulaire du droit d’auteur a allégué un droit d’auteur sur l’ensemble du dépôt ou du package de l’utilisateur (comme indiqué à l’étape 3) ; (ii) l’utilisateur n’a apporté aucune modification après avoir eu la possibilité de le faire (comme indiqué à l’étape 4) ; ou (iii) le titulaire du droit d’auteur a renouvelé son avis de retrait après que l’utilisateur a eu la possibilité d’apporter des modifications. Si le titulaire du droit d’auteur choisit plutôt de *réviser* l’avis, nous retournerons à l’étape 2 et répéterons le processus comme si l’avis révisé était un nouvel avis.

7. **L’utilisateur peut envoyer un avis de contestation.** Nous encourageons les utilisateurs dont le contenu a été désactivé à consulter un avocat pour connaître leurs options. Si un utilisateur estime que son contenu a été désactivé à la suite d’une erreur ou d’une mauvaise identification, il peut nous envoyer un [avis de contestation](/articles/guide-to-submitting-a-dmca-counter-notice). Comme pour l’avis initial, nous veillerons à ce que l’avis de contestation soit suffisamment détaillé (comme expliqué dans le [guide pratique](/articles/guide-to-submitting-a-dmca-counter-notice)). Si c’est le cas, nous le [publierons](#d-transparency) dans notre [dépôt public](https://github.com/github/dmca) et transmettrons l’avis au titulaire du droit d’auteur en lui envoyant le lien.

8. **Le titulaire du droit d’auteur peut intenter une action en justice.** Si un titulaire de droits d’auteur souhaite maintenir le contenu désactivé après avoir reçu un avis de contestation, il devra engager une action en justice pour obtenir une ordonnance du tribunal afin d’empêcher l’utilisateur de se livrer à une activité illicite liée au contenu sur GitHub. En d’autres termes, vous pourriez être poursuivi en justice. Si le titulaire des droits d’auteur ne donne pas de préavis à GitHub dans les 10 à 14 jours, en envoyant une copie d’une plainte légale valable déposée auprès d’un tribunal compétent, GitHub réactivera le contenu désactivé.

## B. Qu’en est-il des forks ? (ou qu’est-ce qu’un fork ?)

L’une des meilleures fonctionnalités de GitHub est la possibilité pour les utilisateurs de « forker » les dépôts des autres. Qu’est‑ce que cela signifie ? En substance, cela signifie que les utilisateurs peuvent faire une copie d’un projet sur GitHub dans leurs propres dépôts. Si la licence ou la loi l’autorise, les utilisateurs peuvent alors apporter des modifications à ce fork, soit pour le réintégrer dans le projet principal, soit pour le conserver comme leur propre variante du projet. Chacune de ces copies constitue un « [fork](/articles/github-glossary#fork) » du dépôt d’origine, qui peut à son tour être appelé le « parent » du fork.

GitHub *ne désactive pas* automatiquement les forks lors de la désactivation d’un dépôt parent. En effet, les forks appartiennent à des utilisateurs différents, peuvent avoir été modifiés de manière significative et peuvent faire l’objet d’une licence ou d’une utilisation différente qui est protégée par la doctrine de l’usage raisonnable. GitHub ne mène pas d’enquête indépendante sur les forks. Nous attendons des titulaires de droits d’auteur qu’ils mènent cette enquête et, s’ils pensent que les forks sont également en infraction, qu’ils incluent expressément les forks dans leur avis de retrait.

Dans de rares cas, vous pouvez alléguer une atteinte au droit d’auteur dans un dépôt complet faisant l’objet d’un fork en cours d’utilisation. Si, au moment où vous avez soumis votre avis, vous avez identifié tous les forks existants de ce dépôt comme étant en infraction, nous traiterons une réclamation valable contre tous les forks de ce réseau au moment où nous traiterons l’avis. Nous ferions cela étant donné la probabilité que tous les forks nouvellement créés contiennent le même contenu. En outre, si le réseau signalé qui contient le contenu prétendument en infraction intègre plus de cent (100) dépôts et qu’il serait donc difficile de l’examiner dans son intégralité, nous pouvons envisager de désactiver l’ensemble du réseau si vous déclarez dans votre avis que : « Sur la base du nombre représentatif de forks que j’ai examinés, je pense que la totalité ou la plupart des forks sont en infraction dans la même mesure que le dépôt parent. » Votre déclaration sous serment s’applique à cette déclaration.

## C Qu’en est-il des réclamations pour contournement ?

Le DMCA interdit le [contournement des mesures techniques](https://www.copyright.gov/title17/92chap12.html) qui contrôlent efficacement l’accès aux œuvres protégées par le droit d’auteur. Étant donné que ces types de réclamations sont souvent de nature très technique, GitHub demande aux demandeurs de fournir [des informations détaillées sur ces réclamations](/github/site-policy/guide-to-submitting-a-dmca-takedown-notice#complaints-about-anti-circumvention-technology), et nous entreprendrons alors un examen plus approfondi. 

Une réclamation pour contournement doit inclure les informations suivantes sur les mesures techniques en place et la manière dont le projet mis en cause les contourne. Plus précisément, l’avis envoyé à GitHub doit inclure des déclarations précises décrivant :
1. quelles sont les mesures techniques ;
2. comment elles contrôlent efficacement l’accès aux éléments protégés par le droit d’auteur ; et 
3. comment le projet mis en cause est conçu pour contourner les mesures de protection technologiques précédemment décrites.

GitHub examinera de près les réclamations pour contournement, notamment par des experts techniques et juridiques. Lors de l’examen technique, nous chercherons à valider les détails sur la manière dont les mesures techniques de protection fonctionnent et la manière dont le projet les contourne prétendument. Lors de l’examen juridique, nous chercherons à nous assurer que les réclamations ne dépassent pas les limites du DMCA. Dans les cas où nous ne sommes pas en mesure de déterminer si une réclamation est valable, nous pencherons du côté du développeur et laisserons le contenu en place. Si le demandeur souhaite donner des détails supplémentaires, nous recommencerons le processus d’examen pour évaluer les réclamations révisées.

Lorsque nos experts déterminent qu’une réclamation est complète, légale et techniquement légitime, nous contactons le propriétaire du dépôt et lui donnons la possibilité de répondre à la réclamation ou d’apporter des modifications au dépôt pour éviter un retrait. S’il ne répond pas, nous tenterons de contacter à nouveau le propriétaire du dépôt avant de prendre d’autres mesures. En d’autres termes, nous ne désactiverons pas un dépôt sur la base d’une allégation de technologie de contournement sans essayer de contacter le propriétaire du dépôt pour lui donner une chance de répondre ou d’apporter des modifications avant. Si nous ne parvenons pas à résoudre le problème en contactant d’abord le propriétaire du dépôt, nous serons toujours heureux de prendre en considération une réponse du propriétaire du dépôt, même après que le contenu a été désactivé, s’il souhaite avoir la possibilité de contester la réclamation, de nous présenter des faits supplémentaires ou d’apporter des modifications pour que le contenu soit restauré. Lorsque nous devrons désactiver du contenu, nous veillerons à ce que les propriétaires de dépôts puissent exporter leurs problèmes, leurs demandes de retrait et autres données de dépôt qui ne contiennent pas le code de contournement présumé, dans la mesure où cela est légalement possible.

Veuillez noter que notre processus d’examen des technologies de contournement ne s’applique pas au contenu qui violerait autrement les restrictions de nos Règles de Bon Usage concernant le partage de clés de licence de produits non autorisées, les logiciels permettant de générer des clés de licence de produits non autorisées ou les logiciels permettant de contourner les contrôles des clés de licence de produits. Bien que ces types de réclamations puissent également violer les dispositions du DMCA relatives aux technologies de contournement, elles sont généralement simples et ne justifient pas un examen technique et juridique supplémentaire. Néanmoins, lorsqu’une revendication n’est pas simple, par exemple dans le cas des jailbreaks, le processus d’examen des revendications relatives aux technologies de contournement s’applique.  

Lorsque GitHub traite une demande de retrait DMCA dans le cadre de notre processus d’examen des réclamations relatives aux technologies de contournement, nous proposons au propriétaire du dépôt de bénéficier gratuitement d’une consultation juridique indépendante par l’intermédiaire du [Fonds de Défense des Développeurs de GitHub](https://github.blog/2021-07-27-github-developer-rights-fellowship-stanford-law-school/).

## D. Que se passe-t-il si je n’ai pas respecté par inadvertance le délai pour effectuer des modifications ?

Nous reconnaissons qu’il existe de nombreuses raisons valables pour lesquelles vous ne pouvez pas effectuer de modifications dans le délai d’environ un jour ouvrable que nous vous accordons avant que votre dépôt ne soit désactivé. Peut-être que notre message a été signalé comme un spam, peut-être que vous étiez en vacances, peut-être que vous ne vérifiez pas ce compte de messagerie régulièrement, ou peut-être que vous étiez simplement occupé. Nous comprenons. Si vous répondez pour nous faire savoir que vous auriez voulu effectuer les modifications, mais que vous avez manqué la première occasion, nous réactiverons le dépôt une fois de plus pendant environ un jour ouvrable pour vous permettre d’effectuer les modifications. Encore une fois, vous devez nous notifier que vous avez apporté les modifications pour pouvoir conserver le dépôt après ce délai d’environ 1 jour ouvrable, comme indiqué ci-dessus à [l’étape A.4](#a-how-does-this-actually-work). Veuillez noter que nous n’offrirons qu’une seule chance supplémentaire.

## E. Transparence

Nous pensons que la transparence est une vertu. Le public doit savoir quel contenu est retiré de GitHub et pourquoi. Un public informé peut remarquer et mettre en évidence des problèmes potentiels qui passeraient autrement inaperçus dans un système opaque. Nous publions des copies expurgées de tous les avis juridiques que nous recevons (y compris les avis originaux, les avis de contestation ou les rétractations) à l’adresse <https://github.com/github/dmca>. Nous ne publierons pas publiquement vos coordonnées personnelles. Nous supprimerons les informations personnelles (à l’exception des noms d’utilisateur dans les URL) avant de publier les avis. Toutefois, nous n’expurgerons pas d’autres informations de votre avis, sauf si vous nous le demandez expressément. Voici quelques exemples d’un [avis](https://github.com/github/dmca/blob/master/2014/2014-05-28-Delicious-Brains.md) et d’un [avis de contestation](https://github.com/github/dmca/blob/master/2014/2014-05-01-Pushwoosh-SDK-counternotice.md) publiés pour vous permettre de voir à quoi ils ressemblent. Lorsque nous supprimons un contenu, nous publions à sa place un lien vers l’avis correspondant.

Sachez également que, bien que nous ne publiions pas les avis non expurgés, nous pouvons fournir une copie complète non expurgée de tout avis que nous recevons directement à toute partie dont les droits seraient affectés par cet avis.

## F. Infraction répétée

La politique de GitHub est, dans des circonstances appropriées et à sa seule discrétion, de désactiver et de résilier les comptes des utilisateurs qui peuvent enfreindre les droits d’auteur ou d’autres droits de propriété intellectuelle de GitHub ou d’autres.

## G. Envoi d’avis

Si vous êtes prêt à soumettre un avis ou un avis de contestation :
- [Comment soumettre un avis DMCA](/articles/guide-to-submitting-a-dmca-takedown-notice)
- [Comment soumettre un avis de contestation DMCA](/articles/guide-to-submitting-a-dmca-counter-notice)

## Informez-vous et exprimez-vous

Si vous vous promenez sur Internet, il n’est pas difficile de trouver des commentaires et des critiques sur le système du droit d’auteur en général et sur le DMCA en particulier. Bien que GitHub reconnaisse et apprécie le rôle important que le DMCA a joué dans la promotion de l’innovation en ligne, nous pensons que les lois sur le droit d’auteur auraient besoin d’être revues, paritellement voire complètement. Dans le domaine des logiciels, nous améliorons et mettons à jour notre code en permanence. Pensez à l’évolution de la technologie depuis 1998, date à laquelle le DMCA a été rédigé. N’est-il pas logique de mettre à jour ces lois qui s’appliquent aux logiciels ?

Nous ne prétendons pas avoir toutes les réponses. Mais si vous êtes curieux, voici quelques liens vers des articles d’universitaires et des articles de blog que nous avons trouvés et qui contiennent des opinions et des propositions de réforme :

- [Unintended Consequences: Twelve Years Under the DMCA](https://www.eff.org/wp/unintended-consequences-under-dmca) (en anglais, Electronic Frontier Foundation)
- [Statutory Damages in Copyright Law: A Remedy in Need of Reform](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=1375604) (en anglais, William et Mary Law Review)
- [Is the Term of Protection of Copyright Too Long?](https://the1709blog.blogspot.com/2012/11/is-term-of-protection-of-copyright-too.html) (en anglais, The 1709 Blog)
- [If We’re Going to Change DMCA’s ’Notice &amp; Takedown,’ Let’s Focus on How Widely It’s Abused](https://www.techdirt.com/articles/20140314/11350426579/if-were-going-to-change-dmcas-notice-takedown-lets-focus-how-widely-its-abused.shtml) (en anglais, TechDirt)
- [Opportunities for Copyright Reform](https://www.cato-unbound.org/issues/january-2013/opportunities-copyright-reform) (en anglais, Cato Unbound)
- [Fair Use Doctrine and the Digital Millennium Copyright Act: Does Fair Use Exist on the Internet Under the DMCA?](https://digitalcommons.law.scu.edu/lawreview/vol42/iss1/6/) (En anglais, Santa Clara Law Review)

GitHub n’approuve pas nécessairement les points de vue exprimés dans ces articles. Nous fournissons ces liens pour vous encourager à en savoir plus, à vous forger votre propre opinion, puis à contacter votre ou vos représentants élus (par exemple, au [Congrès américain](https://www.govtrack.us/congress/members) ou au [Parlement européen](https://www.europarl.europa.eu/meps/en/home)) pour demander les changements que vous jugez nécessaires.
