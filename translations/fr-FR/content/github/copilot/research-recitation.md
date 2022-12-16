---
title: Recherche concernant la récitation
intro: A first look at rote learning in {% data variables.product.prodname_dotcom %} Copilot suggestions.
redirect_from:
- /early-access/github/copilot/research-recitation
versions:
  fpt: '*'
ms.openlocfilehash: cacf9a63013c5bbf9b7d867e088640ff01400289
ms.sourcegitcommit: 67064b14c9d4d18819db8f6398358b77a1c8002a
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 05/17/2022
ms.locfileid: "145066692"
---
Par Albert Ziegler (@wunderalbert)

## <a name="-data-variablesproductprodname_dotcom--copilot-parrot-or-crow"></a>{% data variables.product.prodname_dotcom %} Copilot : perroquet ou corbeau ?
Premier aperçu de l’apprentissage par cœur dans les suggestions de {% data variables.product.prodname_dotcom %} Copilot.

## <a name="introduction"></a>Introduction

{% data variables.product.prodname_dotcom %} Copilot est entraîné sur des milliards de lignes de code public. Les suggestions qu’il vous propose sont adaptées à votre code, mais le traitement sous-jacent est, au bout du compte, informé par le code écrit par d’autres personnes.

Dans quelle mesure la relation entre le code suggéré et le code qui l’a informé est-elle directe ? Dans un document récent <sup id="anchor1">[1](#footnote1)</sup>, Bender, Gebru et al. ont inventé l’expression « perroquets stochastiques » pour faire référence aux systèmes d’intelligence artificielle comme ceux qui alimentent {% data variables.product.prodname_dotcom %} Copilot. Ou, comme l’a fait remarquer un ingénieur de machine learning chez {% data variables.product.company_short %}<sup id="anchor2">[2](#footnote2)</sup> lors d’une conversation devant une machine à café : ces systèmes font un peu penser à « un gamin avec une mémoire photographique ».

Il s’agit là de simplifications excessives délibérées. De nombreuses suggestions de {% data variables.product.prodname_dotcom %} Copilot semblent adaptées spécifiquement à la base de code particulière sur laquelle l’utilisateur travaille. Souvent, cela ressemble moins à un perroquet qu’à un corbeau qui construit de nouveaux outils à partir de petits blocs<sup id="anchor3">[3](#footnote3)</sup>. Mais il ne fait aucun doute que {% data variables.product.prodname_dotcom %} Copilot a une mémoire impressionnante :

![Démonstration animée de Copilot](/assets/images/help/copilot/resources_recitation_example_zen.gif)

Ici, j’ai intentionnellement dirigé<sup id="anchor4">[4](#footnote4)</sup> {% data variables.product.prodname_dotcom %} Copilot afin qu’il récite un texte bien connu qu’il connaît évidemment par cœur. Moi aussi je connais quelques textes par cœur. Par exemple, je me souviens encore de quelques poèmes que j’ai appris à l’école. Mais quel que soit le sujet, je n’ai jamais été tenté de détourner une conversation en me mettant à débiter des alexandrins sur une contrée où tout n’est que calme, luxe et volupté.

Est-ce quelque chose (ou plutôt son équivalent de programmation) que {% data variables.product.prodname_dotcom %} Copilot est susceptible de faire ? Parmi ses suggestions, combien sont uniques ? Et avec quelle fréquence ne fait-il que répéter du code ressemblant qu’il a vu pendant l’entraînement ?

## <a name="the-experiment"></a>L’expérience

Pendant les premières phases de développement de {% data variables.product.prodname_dotcom %} Copilot, près de 300 employés l’ont utilisé dans leur travail quotidien dans le cadre d’un essai interne. Cette essai a fourni un bon jeu de données pour tester la récitation. Je voulais savoir à quelle fréquence {% data variables.product.prodname_dotcom %} Copilot leur donnait une suggestion qui provenait de quelque chose qu’il avait vu auparavant.

J’ai limité l’enquête aux suggestions Python avec une date butoir du 7 mai 2021 (le jour où nous avons commencé à extraire ces données). Cela a donné 453 780 suggestions réparties sur 396 « semaines utilisateur », c’est-à-dire des semaines civiles pendant lesquelles un utilisateur a activement utilisé {% data variables.product.prodname_dotcom %} Copilot sur du code Python.

### <a name="automatic-filtering"></a>Filtrage automatique

453 780 suggestions, c’est beaucoup, mais bon nombre d’entre elles peuvent être ignorées immédiatement. Pour accéder aux cas intéressants, considérez des séquences de « mots » qui se produisent dans la suggestion dans le même ordre que dans le code sur lequel {% data variables.product.prodname_dotcom %} Copilot a été entraîné. Dans ce contexte, la ponctuation, les crochets ou d’autres caractères spéciaux comptent tous comme des « mots », tandis que les tabulations, les espaces ou même les sauts de ligne sont ignorés complètement. Après tout, un guillemet est toujours un guillemet, qu’il soit mis en retrait d’un onglet ou de huit espaces.

Par exemple, l’une des suggestions de {% data variables.product.prodname_dotcom %} Copilot était l’expression régulière suivante pour des nombres séparés par des espaces blancs :

```
r'^\s+\d+\s+\d+\s+\d+\s+\d+\s+\d+\s+\d+\s+\d+\s+\d+\s+\d+\s+\d+\s+\d+\s+\d+\s+\d+\s+\d+\s+\d+\s+\d+'
```

Ce serait exactement 100 « mots » d’après la définition ci-dessus, mais il s’agit d’un exemple particulièrement dense : la ligne moyenne de code non vide n’a que 10 « mots ». J’ai restreint cette enquête aux cas où le chevauchement avec le code sur lequel a été entraîné {% data variables.product.prodname_dotcom %} Copilot contient au moins 60 « mots » de ce genre. Nous devons bien définir un seuil quelque part, et je pense qu’il serait plutôt rare que des séquences plus courtes soient dignes d’intérêt. En fait, la plupart des cas intéressants identifiés plus tard sont bien loin de ce seuil de 60.

Si le chevauchement s’étend à ce que l’utilisateur a déjà écrit, cela compte également pour la longueur. Après tout, l’utilisateur peut aussi avoir écrit ce contexte avec l’aide de {% data variables.product.prodname_dotcom %} Copilot !

Dans l’exemple suivant, l’utilisateur a commencé à écrire un extrait de code très courant. {% data variables.product.prodname_dotcom %} Copilot le termine. Même si la complétion proprement dite est plutôt courte, avec le code existant elle va au-delà du seuil et est donc conservée. 

![Exemple de code](/assets/images/help/copilot/example_last_straw.png)

Cette procédure est suffisamment permissive pour laisser passer de nombreux exemples relativement « ennuyeux », comme les deux ci-dessus. Mais elle est tout de même efficace pour limiter l’analyse humaine aux cas intéressants, car elle trie plus de 99 % des suggestions de Copilot.

### <a name="manual-bucketing"></a>Compartimentage manuel

Après le filtrage, il restait 473 suggestions. Mais elles assumaient des formes très différentes :

1. Certaines étaient essentiellement des répétitions d’un autre cas ayant passé le filtrage. Par exemple, parfois {% data variables.product.prodname_dotcom %} Copilot fait une suggestion, le développeur tape une ligne de commentaire, et {% data variables.product.prodname_dotcom %} Copilot offre à nouveau une suggestion très similaire. J’ai supprimé ces cas de l’analyse en tant que doublons.
2. Certaines étaient des séquences longues et répétitives. Comme dans l’exemple suivant, où les blocs répétés de `‘<p>’` sont bien sûr trouvés quelque part dans le jeu d’entraînement : <br>![Exemples de répétitions](/assets/images/help/copilot/example_repetitions.png)<br> Ces suggestions peuvent être utiles (cas de test, expressions régulières) ou non (comme c’est le cas ici, je pense). Mais dans tous les cas, elles ne correspondent pas à l’idée de l’apprentissage par cœur que j’avais à l’esprit quand j’ai commencé cette enquête.
3. Certaines étaient des inventaires standard, comme les nombres naturels, ou les nombres premiers, ou des symboles boursiers, ou l’alphabet grec : <br>![Exemple d’alphabet grec](/assets/images/help/copilot/example_greek.png)
4. Certaines étaient des façons courantes, simples, peut-être même universelles, de faire des choses avec très peu de degrés naturels de liberté. Par exemple, la partie centrale de ce qui suit me frappe comme étant la façon très standard d’utiliser le package BeautifulSoup pour analyser une liste Wikipédia. En fait, l’extrait de code avec la meilleure correspondance trouvé dans les données d’entraînement de {% data variables.product.prodname_dotcom %} Copilot <sup id="anchor5">[5](#footnote5)</sup> utilise ce genre de code pour analyser un autre article, et effectue des opérations différentes avec les résultats. <br>![Exemple BeautifulSoup](/assets/images/help/copilot/example_beautiful_soup.png) <br>Cela ne correspond pas non plus à mon idée d’une récitation par cœur. C’est un peu comme quand quelqu’un dit : « Je sors la poubelle, je reviens ». C’est un énoncé standard, pas une citation, même si cette phrase particulière a été prononcé plusieurs fois auparavant.
5. Et puis il y a tous les autres cas. Ceux avec au moins un chevauchement spécifique dans le code ou les commentaires. Ce sont ceux-là qui m’intéressent le plus, et c’est sur eux que je vais me concentrer à partir de maintenant.

Ce compartimentage a nécessairement des cas de périphérie <sup id="anchor6">[6](#footnote6)</sup>, et chacun peut souhaiter les classifier de manière différente. Peut-être que vous n’êtes même pas du tout d’accord avec l’ensemble des compartiments.

C’est pourquoi nous avons mis ce jeu de données en open source <sup id="anchor7">[7](#footnote7)</sup>. Par conséquent, si vous avez un avis un peu différent concernant le compartimentage, ou si vous êtes intéressé par d’autres aspects de la récitation par cœur par GitHub Copilot de son jeu d’entraînement, n’hésitez pas à ignorer ma prochaine section et à tirer vos propres conclusions.

## <a name="results"></a>Résultats

![Graphique de vue d’ensemble](/assets/images/help/copilot/plot_buckets.png)

Pour la plupart des suggestions de {% data variables.product.prodname_dotcom %} Copilot, notre filtre automatique n’a trouvé aucun chevauchement significatif avec le code utilisé pour l’entraînement. Mais il a porté 473 cas à notre attention. La suppression du premier compartiment (cas qui ressemblent beaucoup à d’autres cas) m’a laissé 185 suggestions. Parmi celles-ci, 144 ont été triées et rejetées dans les compartiments 2 - 4. Cela a laissé 41 cas dans le dernier compartiment, les « récitations », dans le sens du terme que j’ai à l’esprit.

Cela correspond à **1 événement de récitation toutes les 10 semaines utilisateur** (intervalle de confiance de 95 % : 7 à 13 semaines, à l’aide d’un test Poisson).

Bien sûr, cela a été mesuré sur les développeurs {% data variables.product.prodname_dotcom %} et Microsoft qui ont essayé {% data variables.product.prodname_dotcom %} Copilot. Si votre comportement de programmation est très différent du leur, vos résultats peuvent différer. En particulier, certains de ces développeurs travaillent uniquement à temps partiel sur des projets Python ; je n’ai pas pu distinguer cela, et j’ai donc compté tous ceux qui écrivent du code Python dans une semaine donnée en tant qu’utilisateur.

Un événement en 10 semaines, cela ne semble pas beaucoup, mais ce n’est pas non plus 0. Et trois choses m’ont frappé.

### <a name="-data-variablesproductprodname_dotcom--copilot-quotes-when-it-lacks-specific-context"></a>{% data variables.product.prodname_dotcom %} Copilot cite lorsqu’il manque de contexte spécifique

Si je veux apprendre les paroles d’une chanson, je dois l’écouter plusieurs fois. {% data variables.product.prodname_dotcom %} Copilot est pareil : pour apprendre un extrait de code par cœur, il doit beaucoup voir cet extrait de code. Chaque fichier n’est montré à {% data variables.product.prodname_dotcom %} Copilot qu’une seule fois. L’extrait de code doit donc exister dans de nombreux fichiers différents dans le code public.

Parmi les 41 cas principaux que nous avons détectés lors de l’étiquetage manuel, aucun n’apparaît dans moins de 10 fichiers différents. La plupart (35 cas) apparaissent plus d’une centaine de fois. Une fois, {% data variables.product.prodname_dotcom %} Copilot a suggéré de commencer un fichier vide avec quelque chose qu’il avait même vu plus de 700 000 fois pendant l’entraînement : la licence publique générale GNU.

Le tracé suivant montre le nombre de fichiers correspondants des résultats dans le compartiment 5 (une marque rouge sur le bas pour chaque résultat) par rapport aux compartiments 2-4. J’ai ignoré le compartiment 1, qui n’est en fait qu’un mélange de doublons de cas des compartiments 2-4 et de doublons de cas du compartiment 5. La distribution déduite est affichée sous la forme d’une ligne rouge ; elle pointe entre 100 et 1000 correspondances.

![Tracé du nombre de correspondances](/assets/images/help/copilot/plot_copies.png)

### <a name="-data-variablesproductprodname_dotcom--copilot-mostly-quotes-in-generic-contexts"></a>{% data variables.product.prodname_dotcom %} Copilot cite principalement dans des contextes génériques

Au fil du temps, chaque fichier devient unique. Mais {% data variables.product.prodname_dotcom %} Copilot n’attend pas cela<sup id="anchor8">[8](#footnote8)</sup> : il offre ses solutions pendant que votre fichier est encore extrêmement générique. Et en l’absence de quelque chose de spécifique, il est beaucoup plus susceptible de citer du code provenant d’ailleurs qu’il ne le serait autrement.

![Tracé de longueur du contexte](/assets/images/help/copilot/plot_context.png)

Bien entendu, les développeurs de logiciels passent la majeure partie de leur temps dans les profondeurs de l’intérieur des fichiers, là où le contexte est suffisamment unique pour que {% data variables.product.prodname_dotcom %} Copilot offre des suggestions uniques. En revanche, les suggestions au début sont plutôt aléatoires, car {% data variables.product.prodname_dotcom %} Copilot ne peut pas savoir ce que sera le programme. Mais parfois, en particulier dans les projets personnels ou les scripts autonomes, une quantité modeste de contexte peut être suffisante pour risquer une estimation raisonnable de ce que l’utilisateur voulait faire. Et parfois, le contexte est encore suffisamment générique pour que {% data variables.product.prodname_dotcom %} Copilot pense que l’une des solutions qu’il connaît par cœur semble prometteuse :

![Exemple de code](/assets/images/help/copilot/example_robot.png)

Ce code provient plus ou moins directement de cours de robotique chargés dans différentes variantes<sup id="anchor9">[9](#footnote9)</sup>.

### <a name="detection-is-only-as-good-as-the-tool-that-does-the-detecting"></a>La détection n’est aussi performante que l’outil qui l’effectue

Dans sa forme actuelle, le filtre affiche un bon nombre de cas inintéressants lorsqu’il est appliqué à grande échelle. Mais il ne devrait pas y avoir trop bruit. Pour les utilisateurs internes de l’expérience, il y aurait eu un peu plus d’un résultat par semaine en moyenne (bien que ces résultats aient probablement été en rafales !). Parmi ceux-ci, environ 17 % (intervalle de confiance de 95 % à l’aide d’un test binomial : 14 %-21 %) se trouveraient dans le cinquième compartiment.

Et rien n’est jamais infaillible bien sûr. Certains cas sont plutôt difficiles à détecter par l’outil que nous créons, mais ont tout de même une source évidente. Pour revenir au Zen de Python :

![Variante Zen](/assets/images/help/copilot/resources_recitation_example_zen_caw.gif)

## <a name="conclusion-and-next-steps"></a>Conclusion et étapes suivantes

Cette enquête montre que {% data variables.product.prodname_dotcom %} Copilot _peut_ citer un corps de code détaillé, mais qu’il le fait rarement, et quand c’est le cas, il cite principalement du code que tout le monde cite, et surtout au début d’un fichier, comme pour rompre la glace.

Mais il y a toujours une grande différence entre GitHub Copilot récitant du code et moi-même récitant un poème : je _sais_ quand je cite. J’aimerais également savoir quand Copilot fait écho à du code existant au lieu de trouver ses propres idées. Cela me permet de rechercher des informations contextuelles sur ce code et d’attribuer le mérite à qui de droit.

La réponse est évidente : partager la solution de préfiltrage que nous avons utilisée dans cette analyse afin de détecter le chevauchement avec le jeu d’entraînement. Lorsqu’une suggestion contient des extraits copiés à partir du jeu d’entraînement, l’interface utilisateur devrait tout simplement vous indiquer d’où provient le code qu’elle cite. Vous pouvez alors inclure une attribution appropriée ou décider de ne pas du tout utiliser ce code.

Cette recherche de duplication n’est pas encore intégrée à la préversion technique, mais nous prévoyons de le faire. Et nous continuerons à travailler en vue de réduire les taux de récitation et de rendre sa détection plus précise.

<br><br>

### <a name="footnotes"></a>Notes de bas de page

<a name="footnote1">1</a> : [On the Dangers of Stochastic Parrots: Can Language Models Be Too Big?](https://dl.acm.org/doi/10.1145/3442188.3445922) [^](#anchor1)

<a name="footnote2">2</a> : [Tiferet Gazit](https://github.com/tiferet) [^](#anchor2)

<a name="footnote3">3</a> : Voir von Bayern et al. sur la sagesse créative des corbeaux : [Compound tool construction by New Caledonian crows](https://www.nature.com/articles/s41598-018-33458-z) [^](#anchor3)

<a name="footnote4">4</a> : Voir Carlini et al. sur le déclenchement délibéré du rappel des données d’entraînement : [Extracting Training Data from Large Language Models](https://arxiv.org/pdf/2012.07805.pdf) [^](#anchor4)

<a name="footnote5">5</a> : jaeteekae : [DelayedTwitter](https://github.com/jaeteekae/DelayedTwitter/blob/0a0b03de74c03cfbf36877ffded0cb1312d59642/get_top_twitter_accounts.py#L21) [^](#anchor5)

<a name="footnote6">6</a> : Mais sans doute _pas tant que ça_, en fait. J’ai demandé à certains développeurs de m’aider à étiqueter les cas, et tout le monde a été invité à signaler toute incertitude avec son jugement. Cela s’est produit dans seulement 34 cas, c’est-à-dire moins de 10 %. [^](#anchor6)

<a name="footnote7">7</a> : Dans le [jeu de données public](/assets/images/help/copilot/matched_snippets.csv), je répertorie la partie de la suggestion de Copilot qui a également été trouvée dans le jeu d’entraînement, la fréquence à laquelle elle a été trouvée, et un lien vers un exemple où elle se produit dans le code public. Pour des raisons de confidentialité, je n’inclus pas la partie non mise en correspondance de la complétion ni le contexte de code que l’utilisateur a tapé (uniquement une indication de sa longueur). [^](#anchor7)

<a name="footnote8">8</a> : En fait, depuis cette expérience, {% data variables.product.prodname_dotcom %} Copilot _a_ changé et exige un contenu de fichier minimal. Par conséquent, certaines des suggestions signalées ici n’auraient pas été affichées par la version actuelle. [^](#anchor8)

<a name="footnote9">9</a> : Par exemple jenevans33 : [CS8803-1](https://github.com/jenevans33/CS8803-1/blob/eca1bbc27ca6f7355dbc806b2f95964b59381605/src/Final/ekfcode.py#L23)[^](#anchor9)
