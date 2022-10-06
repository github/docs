---
title: Guia para Enviar uma Notificação de Remoção da DMCA
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
ms.contentlocale: pt-BR
ms.lasthandoff: 08/29/2022
ms.locfileid: '144556415'
---
Este guia descreve as informações de que o GitHub precisa para processar uma solicitação de remoção da DMCA. Se você tiver dúvidas mais gerais sobre o que é a DMCA ou como o GitHub processa solicitações de remoção da DMCA, consulte nossa [Política de Remoção da DMCA](/articles/dmca-takedown-policy).

Devido ao tipo de conteúdo que o GitHub hospeda (principalmente código de software) e à maneira como esse conteúdo é gerenciado (com Git), precisamos que as reclamações sejam tão específicas quanto possível. Estas diretrizes foram elaboradas para tornar o processamento de notificações de supostas violações o mais simples possível. Nosso formulário de notificação apresentado abaixo é consistente com o formulário sugerido pelo estatuto da DMCA, que pode ser encontrado no site oficial do US Copyright Office: <https://www.copyright.gov>.

Como em todas as questões jurídicas, é sempre melhor consultar um profissional a respeito de dúvidas ou situações específicas. Nós incentivamos você a fazê-lo antes de tomar qualquer medida que possa afetar seus direitos. Este guia não constitui aconselhamento jurídico e não deve ser considerado como tal.

## Antes de iniciar

***Diga a verdade.** _ A DMCA exige que você faça um juramento em relação aos fatos em sua reclamação de direitos autorais _sob pena de perjúrio *. É crime federal mentir intencionalmente em uma declaração juramentada. (* Consulte* o [Código dos EUA, Título 18, Seção 1621](https://www.gpo.gov/fdsys/pkg/USCODE-2011-title18/html/USCODE-2011-title18-partI-chap79-sec1621.htm).) O envio de informações falsas também pode ocasionar responsabilidade civil, ou seja, você pode ser processado por danos financeiros. A própria DMCA [prevê perdas e danos](https://en.wikipedia.org/wiki/Online_Copyright_Infringement_Liability_Limitation_Act#%C2%A7_512(f)_Misrepresentations) contra qualquer pessoa que alegue falsamente que uma atividade ou um material é infrator.

***Investigar.*** Milhões de usuários e organizações dedicam-se aos projetos que criam e para os quais contribuem no GitHub. A apresentação de uma reclamação da DMCA contra tal projeto é uma alegação legal séria que traz consequências reais para as pessoas. Por isso, pedimos que você realize uma investigação completa e consulte um advogado antes de enviar uma remoção a fim de garantir que o uso realmente não seja permitido.

***Primeiro pergunte gentilmente.*** Um ótimo primeiro passo antes de nos enviar uma notificação de remoção é tentar entrar em contato diretamente com o usuário. Ele pode ter fornecido informações de contato na respectiva página de perfil público ou no README do repositório, ou você pode entrar em contato abrindo um chamado ou uma solicitação de pull no repositório. Isso não é rigorosamente necessário, mas é elegante.

***Envie a solicitação correta.*** Podemos aceitar notificações de remoção da DMCA somente referentes a trabalhos protegidos por direitos autorais e que identifiquem um trabalho específico protegido por direitos autorais. Se você tiver uma reclamação sobre abuso de marca registrada, consulte nossa [política de marcas registradas](/articles/github-trademark-policy/). Se você deseja remover dados sigilosos, como senhas, consulte nossa [política sobre dados sigilosos](/articles/github-sensitive-data-removal-policy/). Se você estiver lidando com difamação ou outro comportamento abusivo, consulte nossas [Diretrizes da Comunidade](/articles/github-community-guidelines/).

***O código é diferente de outro conteúdo criativo.*** O GitHub foi desenvolvido para colaboração em código de software. Isso torna a identificação de uma violação de direitos autorais válida mais complicada do que seria, por exemplo, para fotos, músicas ou vídeos.

Há vários motivos pelos quais o código é diferente de outro conteúdo criativo. Por exemplo:

- Um repositório pode incluir partes de código de várias pessoas diferentes, mas apenas um arquivo ou até mesmo uma sub-rotina dentro de um arquivo viola seus direitos autorais.
- O código mistura funcionalidade com expressão criativa, mas os direitos autorais protegem apenas os elementos expressivos, não as partes funcionais.
- Muitas vezes há licenças a serem consideradas. O simples fato de uma parte do código ter uma notificação de direitos autorais não significa necessariamente que ele seja infrator. É possível que o código esteja sendo usado de acordo com uma licença de código aberto.
- Um uso específico pode ser [permitido](https://www.lumendatabase.org/topics/22) se usar apenas uma pequena quantidade de conteúdo protegido por direitos autorais, usar esse conteúdo de maneira transformadora, usá-lo para fins educacionais ou alguma combinação dos itens acima. Como o código naturalmente se presta a esses usos, cada caso de uso é diferente e deve ser considerado separadamente.
- É possível ocorrer uma alegação de violação do código de muitas maneiras diferentes, exigindo explicações detalhadas e identificações dos trabalhos.

Esta lista não é completa, e é por isso que conversar com um profissional da área jurídica sobre sua reclamação proposta é duplamente importante ao lidar com código.

***Ausência de bots.*** Você deve ter disponível um profissional treinado para avaliar os fatos de cada aviso de remoção enviado. Se você estiver terceirizando seus esforços, saiba como eles trabalham e garanta que eles não estejam usando bots automatizados para enviar reclamações em massa. Essas reclamações geralmente são inválidas e processá-las ocasiona a desativação de projetos desnecessariamente!

***Questões de direitos autorais são difíceis.*** Pode ser muito difícil determinar se uma determinada obra está ou não protegida por direitos autorais. Por exemplo, fatos (incluindo dados) geralmente não são protegidos por direitos autorais. Palavras e frases curtas geralmente não são protegidas por direitos autorais. URLs e nomes de domínio geralmente não são protegidos por direitos autorais. Como você só pode usar o processo de DMCA para tratar de conteúdo protegido por direitos autorais, fale com um advogado se tiver dúvidas sobre se seu conteúdo pode ou não ser protegido.

***Você pode receber uma contranotificação.*** Qualquer usuário afetado por sua notificação de remoção pode decidir enviar uma [contranotificação](/articles/guide-to-submitting-a-dmca-counter-notice). Nesse caso, reativaremos o respectivo conteúdo em 10 a 14 dias, a menos que você nos notifique de que iniciou uma ação legal para impedir que o usuário realize atividades infratoras relacionadas ao conteúdo no GitHub.

***Sua reclamação será publicada.*** Conforme observado em nossa [Política de Remoção da DMCA](/articles/dmca-takedown-policy#d-transparency), depois de editar as informações pessoais, publicamos todas as notificações de remoção completas e acionáveis em <https://github.com/github/dmca>.

***O GitHub não é o juiz.***
O GitHub tem pouca atuação no processo além de determinar se as notificações atendem aos requisitos mínimos da DMCA. Cabe às partes (e seus advogados) avaliar o mérito dos requisitos judiciais e/ou extrajudiciais, lembrando que as notificações devem ser feitas sob pena de perjúrio.

## Sua reclamação deve...

1. **Incluir a seguinte declaração: “Li e entendi o Guia do GitHub para protocolar uma notificação da DMCA.”** Não nos recusaremos a processar uma reclamação completa se você não incluir essa declaração. No entanto, saberemos que você não leu estas diretrizes e poderemos solicitar que você o faça.

2. **Identificar o trabalho protegido por direitos autorais que você acredita ter sido violado.** Essas informações são importantes porque ajudam o usuário afetado a avaliar sua reclamação e conferem a ele a capacidade de comparar seu trabalho com o dele. A especificidade de sua identificação dependerá da natureza do trabalho que você acredita ter sido violado. Se você publicou seu trabalho, poderá simplesmente vinculá-lo a uma página da web onde ele se encontre. Se for exclusivo e não tiver sido publicado, descreva-o e explique que é exclusivo. Se você o registrou no Copyright Office, inclua o número de registro. Se você está alegando que o conteúdo hospedado é uma cópia direta e literal de seu trabalho, também poderá explicar esse fato.

3. **Identificar o material que você alega estar violando o trabalho protegido por direitos autorais indicado no item 2 acima.** É importante ser o mais específico possível em sua identificação. Essa identificação precisa ser razoavelmente suficiente para permitir que o GitHub localize o material. No mínimo, isso significa que você deve incluir o URL do material que supostamente viola seus direitos autorais. Se você alegar que menos de um repositório inteiro é infrator, identifique os arquivos específicos ou os números de linha dentro de um arquivo supostamente infrator. Se você alegar que todo o conteúdo em um URL é infrator, seja explícito sobre isso também. 
   - O GitHub *não* desativará automaticamente [forks](/articles/dmca-takedown-policy#b-what-about-forks-or-whats-a-fork) ao desabilitar um repositório pai. Se você investigou e analisou os forks de um repositório e acredita que eles também são infratores, identifique explicitamente cada fork supostamente infrator. Confirme também que você investigou cada caso individual e que suas declarações juramentadas se aplicam a cada fork identificado. Em casos raros, você pode estar alegando violação de direitos autorais em um repositório completo do qual foi criado ativamente um fork. Se, no momento em que você enviou a notificação, você identificou todos os forks existentes desse repositório como supostamente infratores, processaremos um requerimento judicial e/ou extrajudicial válido contra todos os forks nessa rede no momento em que processarmos a notificação. Faríamos isso dada a probabilidade de todos os forks recém-criados conterem o mesmo conteúdo. Além disso, se a rede denunciada que contém o conteúdo supostamente infrator for maior que 100 (cem) repositórios e, portanto, difícil de revisar integralmente, poderemos considerar a desativação de toda a rede se você declarar na notificação que, “Com base no número representativo de forks revisados, acredito que todos ou a maioria dos forks estão infringindo na mesma extensão do repositório pai”. Sua declaração juramentada se aplicaria a esta declaração.

4. **Explicar o que o usuário afetado precisaria fazer para remediar a violação.** Novamente, a especificidade é importante. Ao encaminharmos sua reclamação ao usuário, ela informará o que ele precisa fazer para evitar que o restante do conteúdo seja desativado. O usuário só precisa adicionar uma declaração de atribuição? Ele precisa excluir determinadas linhas em seu código ou arquivos inteiros? Obviamente, entendemos que, em alguns casos, todo o conteúdo de um usuário pode ser acusado de violação e não há nada que ele possa fazer a não ser excluir tudo. Se for esse o caso, deixe isso claro também.

5. **Fornecer suas informações de contato.** Inclua seu endereço de email, nome, número de telefone e endereço físico.

6. **Fornecer informações de contato, se você souber, do suposto infrator.** Normalmente, essa solicitação será atendida fornecendo-se o nome de usuário do GitHub associado ao conteúdo supostamente infrator. Mas pode haver casos em que você tenha conhecimento adicional sobre o suposto infrator. Se sim, compartilhe essa informação conosco.

7. **Incluir a seguinte declaração: “Acredito de boa-fé que o uso dos materiais protegidos por direitos autorais descritos acima nas páginas da Web infratoras não é autorizado pelo proprietário do direito autoral, nem pelo seu agente, nem pela lei. Levei em consideração o uso justo.”**

8. **Além disso, incluir a seguinte declaração: “Juro, sob pena de perjúrio, que as informações nesta notificação são precisas e que sou o proprietário do direito autoral, ou estou autorizado a agir em nome do proprietário, de um direito exclusivo que supostamente foi infringido.”**

9. **Incluir sua assinatura física ou eletrônica.**

## Reclamações sobre a Tecnologia Antievasão

A Lei de Direitos Autorais também proíbe a evasão de medidas tecnológicas que efetivamente controlam o acesso a obras protegidas por direitos autorais. Se você acredita que o conteúdo hospedado no GitHub viola essa proibição, envie-nos um relatório por meio de nosso {% data variables.contact.contact_dmca %}. Uma alegação de evasão deve incluir os detalhes a seguir sobre as medidas técnicas em vigor e a maneira pela qual o projeto acusado as está contornando. Especificamente, a notificação ao GitHub deve incluir declarações detalhadas que descrevam:
1. Quais são as medidas técnicas;
2. Como elas efetivamente controlam o acesso ao material protegido por direitos autorais; e 
3. Como o projeto acusado é projetado para contornar suas medidas de proteção tecnológica descritas anteriormente.

## Como enviar sua reclamação

A maneira mais rápida de obter uma resposta é inserir suas informações e responder a todas as perguntas em nosso {% data variables.contact.contact_dmca %}.

Você também pode enviar uma notificação por email para <copyright@github.com>. Você pode incluir um anexo, se desejar, mas inclua também uma versão em texto simples de sua carta no corpo da mensagem.

Se você precisar enviar sua notificação pelos correios, também poderá fazê-lo, mas levará *substancialmente* mais tempo para recebermos e respondermos a notificação. As notificações que recebemos por email em texto simples têm uma resposta muito mais rápida do que anexos em PDF ou enviadas pelos correios. Se você ainda deseja nos enviar sua notificação pelos correios, nosso endereço físico é:

```
GitHub, Inc
Attn: DMCA Agent
88 Colin P Kelly Jr St
San Francisco, CA. 94107
```
