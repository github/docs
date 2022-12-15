---
title: À propos de la divulgation coordonnée des vulnérabilités de sécurité
intro: La divulgation des vulnérabilités est un effort coordonné entre les rapporteurs de sécurité et les personnes chargées de la maintenance des dépôts.
redirect_from:
- /code-security/security-advisories/about-coordinated-disclosure-of-security-vulnerabilities
- /code-security/repository-security-advisories/about-coordinated-disclosure-of-security-vulnerabilities
miniTocMaxHeadingLevel: 3
versions:
  fpt: '*'
  ghec: '*'
type: overview
topics:
- Security advisories
- Vulnerabilities
shortTitle: Coordinated disclosure
ms.openlocfilehash: c451554e08b4193ca20f9af8a5e694750808bf19
ms.sourcegitcommit: 27882d9b3f19979c817c25952a2fb4dc4c6f0a65
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 10/27/2022
ms.locfileid: "148114059"
---
## À propos de la divulgation des vulnérabilités dans le secteur d’activité

{% data reusables.security-advisory.disclosing-vulnerabilities %}

Le signalement initial d’une vulnérabilité est réalisé en privé et les détails complets ne sont publiés qu’une fois que le chargé de maintenance a reconnu le problème et, dans l’idéal, mis à disposition des corrections ou un correctif, parfois avec un délai afin d’accorder plus de temps pour l’installation des correctifs. Pour plus d’informations, consultez la « [série d’aide-mémoire OWASP sur la divulgation des vulnérabilités](https://cheatsheetseries.owasp.org/cheatsheets/Vulnerability_Disclosure_Cheat_Sheet.html#commercial-and-open-source-software) » sur le site web OWASP Cheat Sheet Series.

### Bonnes pratiques pour les rapporteurs de vulnérabilité

Il est recommandé de signaler les vulnérabilités en privé aux chargés de maintenance. Dans la mesure du possible, en tant que rapporteur de vulnérabilité, nous vous recommandons d’éviter :
- De divulguer publiquement la vulnérabilité sans donner aux chargés de maintenance l’occasion d’apporter une correction
- De contourner les chargés de maintenance
- De divulguer la vulnérabilité avant qu’une version corrigée du code soit disponible
- D’espérer une compensation en échange du signalement d’un problème, alors qu’aucun programme de primes publiques n’existe

Il est acceptable que les rapporteurs de vulnérabilité divulguent publiquement une vulnérabilité après une certaine période, s’ils ont essayé de contacter les chargés de maintenance et qu’ils n’ont pas reçu de réponse, ou s’ils les ont contactés et qu’ils ont été invités à attendre trop longtemps. 

Nous recommandons aux rapporteurs de vulnérabilité d’indiquer clairement les conditions de leur politique de divulgation dans le cadre de leur processus de signalement. Même si le rapporteur de vulnérabilité n’adhère pas à une politique stricte, il est judicieux de définir des attentes claires pour les chargés de maintenance en termes de chronologies sur les divulgations de vulnérabilité prévues. Pour obtenir un exemple de politique de divulgation, consultez la « [politique de divulgation de Security Lab](https://securitylab.github.com/advisories#policy) » sur le site web GitHub Security Lab.

### Bonnes pratiques pour les chargés de maintenance

En tant que chargé de maintenance, il est recommandé d’indiquer clairement comment et où vous souhaitez recevoir les rapports des vulnérabilités. Si ces informations ne sont pas clairement disponibles, les rapporteurs de vulnérabilité ne savent pas comment vous contacter et peuvent recourir à l’extraction d’adresses e-mail de développeur à partir d’historiques de commit Git pour essayer de trouver un contact de sécurité approprié. Cela peut entraîner des frictions, des pertes de rapports ou la publication de rapports non résolus.

Les chargés de maintenance doivent divulguer les vulnérabilités en temps opportun. S’il existe une vulnérabilité de sécurité dans votre dépôt, nous vous recommandons  :
- De traiter la vulnérabilité comme un problème de sécurité plutôt que comme un bogue simple, à la fois dans votre réponse et dans votre divulgation. Par exemple, vous devez mentionner explicitement que le problème est une vulnérabilité de sécurité dans les notes de publication.
- D’accuser réception du rapport de vulnérabilité le plus rapidement possible, même si aucune ressource immédiate n’est disponible à des fins d’investigation. Cette action envoie le message selon lequel vous êtes rapide à répondre et à agir et il définit une tonalité positive pour le reste de l’interaction entre vous et le rapporteur de vulnérabilité.
- D’impliquer le rapporteur de vulnérabilité quand vous vérifiez l’impact et la véracité du rapport. Il est probable que le rapporteur de vulnérabilité ait déjà passé du temps à envisager la vulnérabilité dans divers scénarios, dont certains ont pu vous échapper.
- De corriger le problème d’une manière qui vous semble adaptée, en prenant en compte les préoccupations et les avis communiqués par le rapporteur de vulnérabilité. Souvent, le rapporteur de vulnérabilité a connaissance de certains cas particuliers et contournements de correction qui sont faciles à rater sans expérience de recherche en matière de sécurité.
- De reconnaître toujours le rapporteur de vulnérabilité quand vous créditez la découverte.
- D’essayer de publier un correctif dès que possible.
- De veiller à mettre l’écosystème plus large au courant du problème et de sa correction quand vous divulguez la vulnérabilité. Il n’est pas rare qu’un problème de sécurité reconnu soit résolu dans la branche de développement actuelle d’un projet, mais que le commit ou la version ultérieure ne soit pas explicitement marqué comme correctif de sécurité ou version. Cela peut entraîner des problèmes avec les consommateurs en aval.

La publication des détails d’une vulnérabilité de sécurité n’a pas lieu d’être embarrassante pour les chargés de maintenance. Les vulnérabilités de sécurité sont présentes partout dans les logiciels, et les utilisateurs font confiance aux chargés de maintenance qui ont un processus clair et établi pour divulguer les vulnérabilités de sécurité dans leur code.

## À propos du signalement et de la divulgation des vulnérabilités dans les projets sur {% data variables.product.prodname_dotcom %}

Le processus de signalement et de divulgation des vulnérabilités pour les projets sur {% data variables.product.prodname_dotcom_the_website %} est le suivant :

 Si vous êtes un rapporteur de vulnérabilité (par exemple, un chercheur en sécurité) qui souhaite signaler une vulnérabilité, vérifiez d’abord s’il existe une stratégie de sécurité pour le dépôt associé. Pour plus d’informations, consultez « [À propos des stratégies de sécurité](/code-security/getting-started/adding-a-security-policy-to-your-repository#about-security-policies) ». S’il en existe une, suivez-la pour comprendre le processus avant de contacter l’équipe de sécurité pour ce dépôt. 
 
 S’il n’existe pas de stratégie de sécurité en place, la méthode la plus efficace pour établir un moyen privé de communication avec les chargés de maintenance consiste à créer un problème demandant un contact de sécurité préféré. Il est important de noter que le problème est immédiatement visible publiquement. De ce fait, il ne doit pas inclure d’informations sur le bogue. Une fois la communication établie, vous pouvez suggérer aux chargés de maintenance de définir une stratégie de sécurité pour une utilisation ultérieure.

{% note %}

**Remarque** : _Pour npm uniquement_ - Si nous recevons un rapport de programmes malveillants dans un package npm, nous essayons de vous contacter en privé. Si vous ne résolvez pas le problème en temps voulu, nous le divulguons. Pour plus d’informations, consultez « [Signalement de programmes malveillants dans un package npm](https://docs.npmjs.com/reporting-malware-in-an-npm-package) » sur le site web npm Docs.

{% endnote %}

 Si vous avez trouvé une vulnérabilité de sécurité dans {% data variables.product.prodname_dotcom_the_website %}, signalez-la par le biais de notre processus de divulgation coordonné. Pour plus d’informations, consultez le site web [{% data variables.product.prodname_dotcom %} Security Bug Bounty](https://bounty.github.com/).

 Si vous êtes chargé de maintenance, vous pouvez prendre possession du processus au tout début du pipeline en configurant une stratégie de sécurité pour votre dépôt, ou en rendant clairement disponibles les instructions de signalement de vulnérabilités de sécurité, par exemple dans le fichier README de votre projet. Pour plus d’informations sur l’ajout d’une stratégie de sécurité, consultez « [À propos des stratégies de sécurité](/code-security/getting-started/adding-a-security-policy-to-your-repository#about-security-policies) ». S’il n’existe aucune stratégie de sécurité, il est probable qu’un rapporteur de vulnérabilité tente de vous envoyer un e-mail ou de vous contacter en privé. Un utilisateur peut également ouvrir un problème (public) avec les détails d’un problème de sécurité.

 En tant que chargé de maintenance, pour divulguer une vulnérabilité dans votre code, vous créez d’abord un brouillon d’avis de sécurité dans le dépôt du package dans {% data variables.product.prodname_dotcom %}. {% data reusables.security-advisory.security-advisory-overview %} Pour plus d’informations, consultez « [À propos des avis de sécurité des référentiels](/code-security/repository-security-advisories/about-github-security-advisories-for-repositories). »


 Pour commencer, consultez « [Création d’un avis de sécurité de dépôt](/code-security/repository-security-advisories/creating-a-repository-security-advisory) ».
