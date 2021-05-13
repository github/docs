---
title: Guia de envio do contra-aviso de retirada DMCA
redirect_from:
  - /dmca-counter-notice-how-to/
  - /articles/dmca-counter-notice-how-to/
  - /articles/guide-to-submitting-a-dmca-counter-notice
versions:
  free-pro-team: '*'
topics:
  - Policy
  - Legal
---

Este guia descreve as informações de que o GitHub precisa para processar um contra-aviso em uma solicitação de retirada DMCA. Se você tiver dúvidas mais gerais sobre o que é a DMCA ou como o GitHub processa solicitações de retirada DMCA, por favor, reveja nossa [Política de Aviso de Retirada DMCA](/articles/dmca-takedown-policy).

Se você acredita que seu conteúdo no GitHub foi erroneamente desabilitado por uma solicitação de retirada DMCA, você tem o direito de contestá-la, enviando um contra-aviso. Se o fizer, esperaremos entre 10 a 14 dias, e então reativaremos seu conteúdo, a menos que o proprietário dos direitos autorais inicie uma ação judicial contra você antes disso. Nossa forma de contra-aviso descrita abaixo é consistente com o formulário sugerido pelo estatuto DMCA, que pode ser encontrado no site oficial do Escritório de Direitos Autorais dos Estados Unidos: <https://www.copyright.gov>. Site oficial do escritório de direitos autorais: <https://www.copyright.gov>.

Como em todas as questões jurídicas, é sempre melhor consultar um profissional sobre suas dúvidas ou situação específica. Incentivamos a fazê-lo antes de tomar quaisquer medidas que possam impactar seus direitos. Este guia não é um aconselhamento jurídico e não deve ser tomado como tal.

### Antes de começar

***Diga a verdade.*** A DMCA requer que você jure pelos fatos relatados no seu contra-aviso, *sob pena de perjúrio*. Nos Estados Unidos, é crime federal mentir intencionalmente numa declaração juramentada. (*Veja* [Código dos EUA, Título 18, Seção 1621](https://www.gpo.gov/fdsys/pkg/USCODE-2011-title18/html/USCODE-2011-title18-partI-chap79-sec1621.htm). Código, Título 18, Seção 1621</a>.) (*Veja* [Código dos EUA, Título 18, Seção 1621](https://www.gpo.gov/fdsys/pkg/USCODE-2011-title18/html/USCODE-2011-title18-partI-chap79-sec1621.htm).) O envio de informações falsas também pode resultar em responsabilidade civil — ou seja, você poderia ser processado por danos financeiros.

***Investigação.*** Enviar um contra-aviso DMCA pode ter consequências legais reais. Se a parte reclamante discordar que o aviso de retirada dela foi um erro, ela pode decidir instaurar uma queixa contra você para manter o conteúdo desativado. Você deve conduzir uma investigação exaustiva sobre as alegações feitas no aviso de retirada e, provavelmente, falar com um advogado antes de enviar um contra-aviso.

***Você precisa ter uma boa razão para enviar um contra-aviso.*** Para registrar um contra-aviso, você deve ter "o entendimento, de boa-fé, de que o material foi removido ou desabilitado como resultado de erro ou identificação incorreta do material a ser removido ou desabilitado". ([U.S. Código, Título 17, Seção 512(g)](https://www.copyright.gov/title17/92chap5.html#512).) ([Código EUA, Título 17, Seção 512(g)](http://www.copyright.gov/title17/92chap5.html#512)) A decisão de explicar por que você acredita que houve um erro depende de você e de seu advogado, mas você *realmente* precisa identificar um erro antes de enviar um contra-aviso. No passado, recebemos contra-avisos que citavam erros no aviso de retirada, tais como: a parte reclamante não possui os direitos de autor; eu tenho uma licença; o código foi publicado sob uma licença de código aberto que permite meu uso; ou a reclamação não conta o fato de que meu uso está protegido pela doutrina de uso justo. É claro que poderiam existir outros defeitos em relação ao aviso de retirada.

***As leis de direitos autorais são complicadas.*** Às vezes, um aviso de retirada pode alegar violação de uma forma que parece atípica ou indireta. As leis de direitos autorais são complicadas e podem dar origem a alguns resultados inesperados. Em alguns casos, um aviso de retirada pode alegar que o seu código-fonte infringe os direitos por causa do que ele pode fazer após ser compilado e executado. Por exemplo:
  - O aviso pode afirmar que seu software é usado para [contornar controles de acesso](https://www.copyright.gov/title17/92chap12.html) de trabalhos protegidos por direitos autorais.
  - [Algumas vezes,](https://www.copyright.gov/docs/mgm/) o software de distribuição pode violar direitos autorais, se você induzir os usuários finais a usarem o software para infringir trabalhos protegidos por direitos autorais.
  - Uma reclamação de direitos autorais também pode ser baseada na [cópia não literal](https://en.wikipedia.org/wiki/Substantial_similarity) de elementos do design no software, ao invés do próprio código fonte — em outras palavras, alguém enviou um aviso dizendo que eles acham que o seu *design* se parece com o deles.

Esses são apenas alguns exemplos da complexidade da legislação em direitos autorais. Considerando que há muitas nuances na lei e algumas questões por resolver nesses tipos de casos, é especialmente importante obter aconselhamento profissional se as alegações por infração não parecerem simples.

***Um contra-aviso é uma declaração legal.*** Exigimos que você preencha todos os campos de um contra-aviso, porque um contra-aviso é uma declaração legal — não apenas para nós, mas para a parte reclamante. Conforme mencionado acima, se a parte reclamante desejar manter o conteúdo desabilitado após receber um contra-aviso, ela precisará iniciar uma ação na justiça em busca de uma decisão judicial para impedir você de continuar uma atividade infratora relacionada ao conteúdo no GitHub. Em outras palavras, você pode ser processado (e você concorda com isso no contra-aviso).

***Seu contra-aviso será publicado.*** Conforme observado em nossa [Política de Contra-aviso DMCA](/articles/dmca-takedown-policy#d-transparency), **depois de suprimir as informações pessoais,** publicamos todos os contra-avisos completos e válidos em <https://github.com/github/dmca>. Note também que, embora divulguemos publicamente somente avisos com conteúdo pessoal suprimido, podemos fornecer uma cópia completa sem conteúdo suprimido de qualquer aviso que recebermos diretamente para qualquer uma das partes cujos direitos seriam afetados por ele. Se você está preocupado com sua privacidade, consulte um advogado para que ele envie o contra-aviso em seu nome.

***O GitHub não é juiz.*** O GitHub se envolve pouco no processo, limitando-se a determinar se os avisos atendem aos requisitos mínimos da DMCA. Cabe às partes (e aos seus advogados) avaliar o mérito das suas reivindicações, tendo em conta que os avisos devem ser feitos corretamente sob pena de perjúrio.

***Recursos Adicionais.*** Se você precisar de ajuda adicional, há muitos recursos de autoajuda online. A Lumen possui um conjunto informativo de guias sobre [direitos autorais](https://www.lumendatabase.org/topics/5) e [porto-seguro DMCA](https://www.lumendatabase.org/topics/14). Se você estiver envolvido com um projeto de código aberto precisando de aconselhamento jurídico, entre em contato com o [Software Freedom Law Center](https://www.softwarefreedom.org/about/contact/). E se você acredita que tem um caso particularmente desafiador, organizações sem fins lucrativos como a [Electronic Frontier Foundation](https://www.eff.org/pages/legal-assistance) também podem estar dispostas a ajudá-lo diretamente ou encaminhá-lo a um advogado.

### Seu contra-aviso deve...

1. **Incluir a seguinte instrução: "Eu li e compreendi o Guia do GitHub para o Preenchimento de um Contra-aviso DMCA.** Não nos recusaremos a processar um contra-aviso se você não incluir esta declaração. No entanto, saberemos que você não leu estas orientações e poderemos pedir para que você o faça.

2. ***Identificar o conteúdo que foi desabilitado e o local onde aparece.*** O conteúdo desabilitado deve ser identificado pela URL no aviso de retirada. Você precisa simplesmente copiar a(s) URL(s) que você deseja alterar.

3. **Fornecer suas informações de contato.** Inclua seu endereço de e-mail, nome, número de telefone e endereço físico.

4. ***Incluir a seguinte declaração: "Eu juro, sob pena de perjúrio, que acredito de boa-fé, que o material foi removido ou desabilitado em consequência de um erro ou de uma identificação incorreta do material a ser removido ou desabilitado.*** Você também pode optar por comunicar as razões pelas quais você acredita que houve um erro ou identificação incorreta. Se você pensar que seu contra-aviso representa uma "notificação" para a parte reclamante, essa é uma oportunidade para explicar por que razão ela não deve dar o próximo passo e ingressar com uma ação judicial em resposta. Esse é mais um motivo para contar com um advogado ao enviar um contra-aviso.

5. ***Incluir a seguinte declaração: "Aceito a jurisdição do Tribunal Distrital Federal para a comarca em que meu endereço está localizado (caso esteja nos Estados Unidos, caso contrário, o Distrito do Norte da Califórnia, onde o GitHub está localizado), e aceitarei a citação processual da pessoa que forneceu o aviso DMCA ou um representante dessa pessoa".***

6. **Incluir sua assinatura física ou eletrônica.**

### Como enviar seu contra-aviso

A maneira mais rápida de obter uma resposta é inserir suas informações e responder todas as perguntas em nosso {% data variables.contact.contact_dmca %}.

Você também pode enviar notificações de e-mail para <copyright@github.com>. Você pode incluir um anexo, se quiser, mas inclua também uma versão em texto simples da sua carta no corpo da sua mensagem.

Se você precisa enviar seu aviso por correio físico, você também pode fazê-lo, mas levaremos um tempo *substancialmente* maior para que possamos receber e responder a ele — e o período de espera de 10 a 14 dias começa a contar a partir do dia em que *recebermos* seu contra-aviso. Avisos que recebemos por e-mail em texto simples têm um tempo de resposta muito mais rápido do que por PDF anexado ou mensagem física. Se você ainda assim deseja nos enviar seu aviso por correio, nosso endereço físico é:

```
GitHub, Inc Attn: DMCA Agent
88 Colin P Kelly Jr St San Francisco, CA. 94107
```
