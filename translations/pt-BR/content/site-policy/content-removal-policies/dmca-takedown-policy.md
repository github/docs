---
title: Política de Remoção de DMCA
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
ms.contentlocale: pt-BR
ms.lasthandoff: 08/29/2022
ms.locfileid: '144556429'
---
Bem-vindo ao Guia do GitHub para a Digital Millennium Copyright Act, comumente conhecida como "DMCA". Esta página não pretende ser uma cartilha abrangente para a lei. No entanto, se você recebeu uma notificação de remoção da DMCA visando o conteúdo publicado no GitHub ou se você é um detentor de direitos que deseja emitir tal notificação, esperamos que esta página ajude a desmistificar um pouco a lei, bem como nossas políticas para cumpri-la.

(Se você quiser apenas enviar uma notificação, poderá ir para "[G. Envio de Notificações](#g-submitting-notices)".)

Como em todas as questões jurídicas, é sempre melhor consultar um profissional a respeito de dúvidas ou situações específicas. Nós incentivamos você a fazê-lo antes de tomar qualquer medida que possa afetar seus direitos. Este guia não constitui aconselhamento jurídico e não deve ser considerado como tal.

## O que é a DMCA?

Para entender a DMCA e algumas das linhas de política que ela traça, talvez seja útil considerar como era a realidade antes de ela ser promulgada.

A DMCA fornece um porto seguro para provedores de serviços que hospedam conteúdo gerado pelo usuário. Considerando-se que um simples requerimento judicial ou extrajudicial de violação de direitos autorais pode acarretar indenização prevista em lei de até US$ 150.000, a possibilidade de ser responsabilizado por conteúdo gerado pelo usuário pode ser muito prejudicial para os provedores de serviços. Com possíveis danos multiplicados por milhões de usuários, sites de computação em nuvem e de conteúdo gerado por usuários, como YouTube, Facebook ou GitHub, provavelmente [nunca teriam existido](https://arstechnica.com/tech-policy/2015/04/how-the-dmca-made-youtube/) sem a DMCA (ou pelo menos não sem repassar parte desse custo para seus usuários).

A DMCA aborda esse problema criando um [porto seguro de responsabilidade de direitos autorais](https://www.copyright.gov/title17/92chap5.html#512) para provedores de serviços de Internet que hospedam conteúdo gerado pelo usuário supostamente infrator. Basicamente, desde que um provedor de serviços siga as regras de aviso e remoção da DMCA, ele não será responsável por violação de direitos autorais com base no conteúdo gerado pelo usuário. Por isso, é importante que o GitHub mantenha seu status de porto seguro de DMCA.

A DMCA também proíbe a [evasão de medidas técnicas](https://www.copyright.gov/title17/92chap12.html) que efetivamente controlam o acesso a obras protegidas por direitos autorais. 

## Notificações de DMCA em poucas palavras

A DMCA fornece dois procedimentos simples e diretos que todos os usuários do GitHub devem conhecer: (i) um procedimento de [notificação de remoção](/articles/guide-to-submitting-a-dmca-takedown-notice) para os detentores de direitos autorais solicitarem que o conteúdo seja removido e (ii) um procedimento de [contranotificação](/articles/guide-to-submitting-a-dmca-counter-notice) para que os usuários reativem o conteúdo quando o conteúdo for removido por engano ou identificação incorreta.

As [notificações de remoção](/articles/guide-to-submitting-a-dmca-takedown-notice) da DMCA são usadas por proprietários de direitos autorais para solicitar ao GitHub que retire o conteúdo que eles acreditam estar infringindo seus direitos. Se você for um designer ou desenvolvedor de software, você cria conteúdo protegido por direitos autorais todos os dias. Se outra pessoa estiver usando seu conteúdo protegido por direitos autorais de maneira não autorizada no GitHub, você poderá nos enviar uma notificação de remoção da DMCA para solicitar que o conteúdo infrator seja alterado ou removido.

Por outro lado, [contranotificações](/articles/guide-to-submitting-a-dmca-counter-notice) podem ser usadas para corrigir erros. Talvez a pessoa que esteja enviando a notificação de remoção não detenha os direitos autorais, não tenha percebido que você tem uma licença ou tenha cometido algum outro erro na notificação de remoção. Como o GitHub geralmente não tem como saber se houve um erro, a contranotificação da DMCA permite que você nos informe e solicite que coloquemos o conteúdo novamente.

O processo de notificação e remoção da DMCA deve ser usado apenas para reclamações sobre violação de direitos autorais. As notificações enviadas por meio do processo de DMCA devem identificar trabalhos protegidos por direitos autorais ou trabalhos que estejam sendo supostamente violados. O processo não pode ser usado para outras reclamações, como reclamações sobre supostas [violações de marca registrada](/articles/github-trademark-policy/) ou [dados suscetíveis](/articles/github-sensitive-data-removal-policy/); oferecemos processos separados para essas situações.

## R. Como isso realmente funciona?

A estrutura DMCA é parecida com tirar notas para passar de ano na escola. O proprietário dos direitos autorais envia ao GitHub uma reclamação sobre um usuário. Se estiver escrita corretamente, repassaremos a reclamação ao usuário. Se o usuário contestar a reclamação, ele poderá devolver uma nota sobre isso. O GitHub tem pouca atuação no processo além de determinar se as notificações atendem aos requisitos mínimos da DMCA. Cabe às partes (e seus advogados) avaliar o mérito dos requisitos judiciais e/ou extrajudiciais, lembrando que as notificações devem ser feitas sob pena de perjúrio.

Aqui estão as etapas básicas do processo.

1. **O proprietário dos direitos autorais investiga.** O proprietário de direitos autorais deve sempre conduzir uma investigação inicial para confirmar (a) que possui os direitos autorais de um trabalho original e (b) que o conteúdo no GitHub não é autorizado e está violando os direitos. Isso inclui a confirmação de que o uso não está protegido como [uso permitido](https://www.lumendatabase.org/topics/22). Um uso específico pode ser permitido se usar apenas uma pequena quantidade de conteúdo protegido por direitos autorais, usar esse conteúdo de maneira transformadora, usá-lo para fins educacionais ou alguma combinação dos itens acima. Como o código naturalmente se presta a esses usos, cada caso de uso é diferente e deve ser considerado separadamente.
> **Exemplo:** Um funcionário da Acme Web Company encontra parte do código da empresa em um repositório do GitHub. A Acme Web Company licencia seu código-fonte para vários parceiros confiáveis. Antes de enviar uma notificação de remoção, a Acme deve revisar essas licenças e seus acordos para confirmar que o código no GitHub não está autorizado em nenhum deles.

2. **O proprietário dos direitos autorais envia uma notificação.** Após conduzir uma investigação, o proprietário dos direitos autorais prepara e envia uma [notificação de remoção](/articles/guide-to-submitting-a-dmca-takedown-notice) para o GitHub. Supondo que a notificação de remoção seja suficientemente detalhada de acordo com os requisitos legais (conforme explicado no [guia de procedimentos](/articles/guide-to-submitting-a-dmca-takedown-notice)), [postaremos a notificação](#d-transparency) em nosso [repositório público](https://github.com/github/dmca) e passaremos o link para o usuário afetado.

3. **O GitHub pede ao usuário para fazer alterações.** Se a notificação alegar que todo o conteúdo de um repositório ou um pacote constitui uma violação, pularemos para a Etapa 6 e desabilitaremos todo o repositório ou pacote rapidamente. Caso contrário, como o GitHub não pode desabilitar o acesso a arquivos específicos dentro de um repositório, entraremos em contato com o usuário que criou o repositório e daremos aproximadamente 1 dia útil para excluir ou modificar o conteúdo especificado no aviso. Notificaremos o proprietário dos direitos autorais se e quando dermos ao usuário a chance de fazer alterações. Como os pacotes são imutáveis, se apenas parte de um pacote contivesse uma infração, o GitHub precisaria desabilitar o pacote inteiro, mas permitiremos o restabelecimento assim que a parte referente à infração seja removida. 

4. **O usuário notifica o GitHub sobre as alterações.** Se o usuário optar por fazer as alterações especificadas, ele *deverá* nos informar no prazo de aproximadamente 1 dia útil. Caso contrário, desabilitaremos o repositório (conforme descrito na Etapa 6). Se o usuário nos notificar que fez alterações, verificaremos se as alterações foram feitas e notificaremos o proprietário dos direitos autorais.

5. **O proprietário dos direitos autorais revisará ou retirará a notificação.** Se o usuário fizer alterações, o proprietário dos direitos autorais deverá revisá-las e renovar ou revisar a notificação de remoção se as alterações forem insuficientes. O GitHub não tomará nenhuma medida, a menos que o proprietário dos direitos autorais entre em contato conosco para renovar a notificação de remoção original ou enviar uma notificação revisada. Se o proprietário dos direitos autorais estiver satisfeito com as alterações, ele poderá enviar uma retratação formal ou não fazer nada. O GitHub interpretará o silêncio por mais de duas semanas como uma retratação implícita da notificação de remoção.

6. **O GitHub poderá desabilitar o acesso ao conteúdo.** O GitHub desabilitará o conteúdo de um usuário se: (i) o proprietário dos direitos autorais alegou direitos autorais sobre todo o repositório ou pacote do usuário (conforme observado na Etapa 3); (ii) o usuário não fez nenhuma alteração após ter tido a oportunidade de fazê-lo (conforme observado na Etapa 4); ou (iii) o proprietário dos direitos autorais renovou a notificação de remoção depois que o usuário teve a chance de fazer alterações. Se o proprietário dos direitos autorais optar por *rever* a notificação, voltaremos à Etapa 2 e repetiremos o processo como se a notificação revisada fosse nova.

7. **O usuário pode enviar uma contranotificação.** Incentivamos os usuários que tiveram o conteúdo desativado a consultar um advogado sobre suas opções. Se um usuário acreditar que seu conteúdo foi desativado como resultado de um erro ou identificação incorreta, ele poderá nos enviar uma [contranotificação](/articles/guide-to-submitting-a-dmca-counter-notice). Assim como na notificação original, nós nos certificaremos de que a contranotificação seja suficientemente detalhada (conforme explicado no [guia de procedimentos](/articles/guide-to-submitting-a-dmca-counter-notice)). Se for, nós [a publicaremos](#d-transparency) no [repositório público](https://github.com/github/dmca) e repassaremos a notificação ao proprietário dos direitos autorais enviando a eles o link.

8. **O proprietário dos direitos autorais pode entrar com uma ação legal.** Se um proprietário de direitos autorais desejar manter o conteúdo desativado após receber uma contranotificação, ele precisará iniciar uma ação legal buscando uma decisão judicial para impedir que o usuário se envolva em atividades infratoras relacionadas ao conteúdo no GitHub. Em outras palavras, você poderá ser processado. Se o proprietário dos direitos autorais não notificar o GitHub dentro de 10 a 14 dias, enviando uma cópia de uma reclamação legal válida apresentada a um juiz competente, o GitHub reativará o conteúdo desativado.

## B. E os forks? (ou O que é um fork?)

Um dos melhores recursos do GitHub é a capacidade de os usuários "criarem forks" dos repositórios uns dos outros. O que isso significa? Basicamente, isso significa que os usuários podem fazer uma cópia de um projeto no GitHub em seus próprios repositórios. Conforme a licença ou a lei permitir, os usuários podem fazer alterações nesse fork para retornar ao projeto principal ou apenas manter como sua própria variação de um projeto. Cada uma dessas cópias é um "[fork](/articles/github-glossary#fork)" do repositório original, que por sua vez também pode ser chamado de "pai" do fork.

O GitHub *não* desabilitará automaticamente os forks ao desabilitar um repositório pai. Isso ocorre porque os forks pertencem a usuários diferentes, podem ter sido alterados de maneira significativa e podem ser licenciados ou usados de uma maneira diferente, protegida pela doutrina do uso permitido. O GitHub não conduz nenhuma investigação independente sobre forks. Esperamos que os proprietários de direitos autorais conduzam essa investigação e, se acreditarem que os forks também envolvem infrações, incluam expressamente os forks na notificação de remoção.

Em casos raros, você pode estar alegando violação de direitos autorais em um repositório completo do qual foi criado ativamente um fork. Se, no momento em que você enviou a notificação, você identificou todos os forks existentes desse repositório como supostamente infratores, processaremos um requerimento judicial e/ou extrajudicial válido contra todos os forks nessa rede no momento em que processarmos a notificação. Faríamos isso dada a probabilidade de todos os forks recém-criados conterem o mesmo conteúdo. Além disso, se a rede denunciada que contém o conteúdo supostamente infrator for maior que 100 (cem) repositórios e, portanto, difícil de revisar integralmente, poderemos considerar a desativação de toda a rede se você declarar na notificação que "Com base no número representativo de forks revisados, acredito que todos ou a maioria dos forks estão infringindo na mesma extensão do repositório pai". Sua declaração juramentada se aplicaria a esta declaração.

## C. E quanto às alegações de evasão?

A DMCA proíbe a [evasão de medidas técnicas](https://www.copyright.gov/title17/92chap12.html) que efetivamente controlam o acesso a obras protegidas por direitos autorais. Uma vez que esses tipos de alegações geralmente são de natureza altamente técnica, o GitHub exige que os autores forneçam [informações detalhadas sobre essas alegações](/github/site-policy/guide-to-submitting-a-dmca-takedown-notice#complaints-about-anti-circumvention-technology) e realizaremos uma revisão mais extensa. 

Uma alegação de evasão deve incluir os detalhes a seguir sobre as medidas técnicas em vigor e a maneira pela qual o projeto acusado as está contornando. Especificamente, a notificação ao GitHub deve incluir declarações detalhadas que descrevam:
1. Quais são as medidas técnicas;
2. Como elas efetivamente controlam o acesso ao material protegido por direitos autorais; e 
3. Como o projeto acusado é projetado para contornar suas medidas de proteção tecnológica descritas anteriormente.

O GitHub analisará cuidadosamente as alegações de evasão, inclusive por especialistas técnicos e jurídicos. Na revisão técnica, buscaremos validar os detalhes sobre o funcionamento das medidas técnicas de proteção e a forma como o projeto supostamente as contorna. Na revisão jurídica, procuraremos garantir que as alegações não ultrapassem os limites da DMCA. Nos casos em que não pudermos determinar se uma alegação é válida, pecaremos do lado do desenvolvedor e deixaremos o conteúdo no ar. Se o autor desejar dar mais detalhes, iniciaremos o processo de análise novamente para avaliar as alegações revisadas.

Quando nossos especialistas determinarem que a alegação está completa e que ela é legal e tecnicamente legítima, entraremos em contato com o proprietário do repositório e daremos a ele a chance de responder à alegação ou de fazer alterações no repositório para evitar uma remoção. Se ele não responder, tentaremos entrar em contato com o proprietário do repositório novamente antes de tomar outras medidas. Ou seja, não desabilitaremos um repositório com base em uma alegação de tecnologia de evasão sem tentar entrar em contato com o proprietário do repositório para dar a ele uma chance de responder ou de fazer alterações primeiro. Se não pudermos resolver o problema entrando em contato com o proprietário do repositório primeiro, sempre teremos prazer em considerar uma resposta do proprietário do repositório, mesmo após o conteúdo ter sido desabilitado, caso ele queira uma oportunidade de contestar a alegação, apresente-nos fatos adicionais ou faça alterações para que o conteúdo seja restaurado. Se precisarmos desabilitar o conteúdo, garantiremos que os proprietários do repositório possam exportar seus problemas e solicitações de pull e outros dados do repositório que não contenham o suposto código de evasão na medida legalmente possível.

Observe que nosso processo de análise de tecnologia de evasão não se aplica a conteúdo que violaria nossas restrições de Política de Uso Aceitável em relação ao compartilhamento de chaves de licenciamento de produto não autorizadas, software para gerar chaves de licenciamento de produto não autorizadas ou software para ignorar verificações de chaves de licenciamento de produto. Embora esses tipos de reivindicações também possam violar as disposições da DMCA sobre tecnologia de evasão, elas geralmente são diretas e não garantem uma revisão técnica e jurídica adicional. No entanto, se uma alegação não for direta, por exemplo, no caso de desbloqueios por jailbreak, será aplicado o processo de revisão de alegação de tecnologia de evasão.  

Quando o GitHub processar uma remoção de DMCA segundo o processo de revisão de alegação de tecnologia de evasão, ofereceremos ao proprietário do repositório uma indicação para receber consultoria jurídica independente por meio do [Fundo de Defesa do Desenvolvedor do GitHub](https://github.blog/2021-07-27-github-developer-rights-fellowship-stanford-law-school/) sem nenhum custo para ele.

## D. E se eu acidentalmente perder o prazo para fazer as alterações?

Reconhecemos que há muitos motivos válidos para que você não consiga fazer alterações dentro do prazo de aproximadamente 1 dia útil que fornecemos antes que seu repositório seja desativado. Talvez nossa mensagem tenha sido sinalizada como spam, talvez você estivesse de férias, talvez você não verifique essa conta de email regularmente ou talvez estivesse simplesmente ocupado. Nós entendemos. Se você responder para nos informar que gostaria de fazer as alterações, mas que, de alguma forma, perdeu a primeira oportunidade, reativaremos o repositório mais uma vez por aproximadamente 1 dia útil para permitir que você faça as alterações. Novamente, você deve nos notificar de que fez as alterações para manter o repositório ativado após esse prazo de aproximadamente 1 dia útil, conforme observado acima na [Etapa A.4](#a-how-does-this-actually-work). Observe que forneceremos apenas uma chance adicional.

## E. Transparência

Acreditamos que a transparência é uma virtude. O público deve saber qual conteúdo está sendo removido do GitHub e por quê. Um público informado pode perceber e trazer à tona possíveis problemas que, de outra forma, passariam despercebidos em um sistema obscuro. Postamos cópias editadas de quaisquer notificações legais que recebemos (incluindo notificações originais, contranotificações ou retratações) em <https://github.com/github/dmca>. Não divulgaremos publicamente suas informações de contato pessoais; removeremos informações pessoais (exceto nomes de usuário em URLs) antes de publicar notificações. No entanto, não eliminaremos nenhuma outra informação da notificação, a menos que você nos solicite especificamente. Aqui estão alguns exemplos de uma [notificação publicada](https://github.com/github/dmca/blob/master/2014/2014-05-28-Delicious-Brains.md) e [contranotificação](https://github.com/github/dmca/blob/master/2014/2014-05-01-Pushwoosh-SDK-counternotice.md) para você ver como é o formato delas. Quando removermos o conteúdo, postaremos um link para a notificação relacionada em seu lugar.

Observe também que, embora não divulguemos publicamente notificações não editadas, podemos fornecer uma cópia completa não editada de quaisquer notificações que recebermos diretamente a qualquer parte cujos direitos sejam afetados por elas.

## F. Violação repetida

É política do GitHub, em circunstâncias apropriadas e a seu exclusivo critério, desativar e encerrar as contas de usuários que possam infringir os direitos autorais ou outros direitos de propriedade intelectual do GitHub ou de outros.

## G. Envio de notificações

Se você estiver pronto para enviar uma notificação ou uma contranotificação:
- [Como enviar uma notificação de DMCA](/articles/guide-to-submitting-a-dmca-takedown-notice)
- [Como enviar uma contranotificação de DMCA](/articles/guide-to-submitting-a-dmca-counter-notice)

## Saiba mais e denuncie

Se você vasculhar a Internet, não é muito difícil encontrar comentários e críticas sobre o sistema de direitos autorais em geral e, especialmente, a DMCA. Embora o GitHub reconheça e aprecie o importante papel que a DMCA desempenhou na promoção da inovação online, acreditamos que as leis de direitos autorais provavelmente poderiam usar um patch ou dois, se não uma versão totalmente nova. No software, estamos constantemente melhorando e atualizando nosso código. Pense em quanto a tecnologia mudou desde 1998, quando a DMCA foi escrita. Não faz sentido atualizar essas leis que se aplicam ao software?

Não pretendemos ter todas as respostas. Mas, se você estiver curioso, aqui estão alguns links para artigos acadêmicos e postagens de blogs que encontramos com opiniões e propostas de reforma:

- [Unintended Consequences: Twelve Years Under the DMCA](https://www.eff.org/wp/unintended-consequences-under-dmca) (Electronic Frontier Foundation)
- [Statutory Damages in Copyright Law: A Remedy in Need of Reform](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=1375604) (William &amp; Mary Law Review)
- [Is the Term of Protection of Copyright Too Long?](https://the1709blog.blogspot.com/2012/11/is-term-of-protection-of-copyright-too.html) (The 1709 Blog)
- [If We're Going to Change DMCA's 'Notice &amp; Takedown,' Let's Focus on How Widely It's Abused](https://www.techdirt.com/articles/20140314/11350426579/if-were-going-to-change-dmcas-notice-takedown-lets-focus-how-widely-its-abused.shtml) (TechDirt)
- [Opportunities for Copyright Reform](https://www.cato-unbound.org/issues/january-2013/opportunities-copyright-reform) (Cato Unbound)
- [Fair Use Doctrine and the Digital Millennium Copyright Act: Does Fair Use Exist on the Internet Under the DMCA?](https://digitalcommons.law.scu.edu/lawreview/vol42/iss1/6/) (Santa Clara Law Review)

O GitHub não endossa necessariamente nenhum dos pontos de vista desses artigos. Fornecemos os links para incentivá-lo a aprender mais, formar suas próprias opiniões e, em seguida, entrar em contato com seus representantes eleitos (por exemplo, no [Congresso dos EUA](https://www.govtrack.us/congress/members) ou [Parlamento dos EUA](https://www.europarl.europa.eu/meps/en/home)) para buscar as mudanças que você acha que devem ser feitas.
