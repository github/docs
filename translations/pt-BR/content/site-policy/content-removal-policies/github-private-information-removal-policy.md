---
title: Política de Remoção de Informações Privadas do GitHub
redirect_from:
  - /articles/github-sensitive-data-removal-policy
  - /github/site-policy/github-sensitive-data-removal-policy
  - /github/site-policy/github-private-information-removal-policy
versions:
  fpt: '*'
topics:
  - Policy
  - Legal
ms.openlocfilehash: 42dbae3bcd7a1ee09a209c7bb5d81506e2d473bf
ms.sourcegitcommit: 93b306112b5cd5ce482d468a25c9961ad02f87ac
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 08/29/2022
ms.locfileid: '147099169'
---
Oferecemos esse processo de remoção de informações privadas como um serviço excepcional apenas para conteúdo de alto risco que viola os [Termos de Serviço do GitHub](/github/site-policy/github-acceptable-use-policies#3-conduct-restrictions), como quando sua segurança está em risco devido à exposição das credenciais de acesso. Este guia descreve as informações que o GitHub precisa que você forneça a fim de processar uma solicitação para remover informações privadas de um repositório.

## O que são Informações Privadas?

Para as finalidades deste documento, “informação privada” refere-se ao conteúdo que (i) deveria ter sido mantido em sigilo *e* (ii) cuja disponibilidade pública represente um risco específico ou direcionado à segurança para você ou para sua organização. 

“Risco à segurança” refere-se a uma situação envolvendo exposição a perigo físico, roubo de identidade ou maior probabilidade de acesso não autorizado a instalações físicas ou de rede.

### As solicitações de remoção de informações privadas são apropriadas para:
- Credenciais de acesso, como nomes de usuário combinados com senhas, tokens de acesso ou outros segredos confidenciais que podem permitir acesso ao servidor, à rede ou ao domínio da sua organização.
- Tokens da AWS e outras credenciais de acesso semelhantes que permitem acesso a terceiros em seu nome. Você deve ser capaz de mostrar que o token pertence a você.
- Documentação (como arquitetura ou diagramas de rede) que representa um risco de segurança específico para uma organização. 
- [Informações](/site-policy/acceptable-use-policies/github-doxxing-and-invasion-of-privacy) relacionadas e que representam um risco à segurança para você como pessoa física (como números da previdência social ou outros números de identificação do governo).

### As solicitações de remoção de informações privadas _não_ são apropriadas para:
- Nomes de servidores internos, endereços IP e URLs por conta própria. Você deve ser capaz de comprovar que seu uso em um determinado arquivo ou parte de código representa uma ameaça à segurança.
- Meras menções à identidade, nome, marca, nome de domínio da sua empresa ou outras referências a ela em arquivos no GitHub. Você deverá ser capaz de expressar por que o uso da identidade de sua empresa é uma ameaça à postura de segurança de sua empresa.
- Arquivos ou repositórios inteiros que não representam um risco à segurança específico, mas que você acredita serem censuráveis.
- Solicitações para remover conteúdo que possa violar seus direitos autorais ou os da sua organização. Se você tiver dúvidas sobre como o GitHub lida com questões relacionadas a direitos autorais ou se gostaria de denunciar conteúdo potencialmente infrator, consulte a [Política de Remoção de DMCA](/articles/dmca-takedown-policy/). O processo de remoção de informações privadas geralmente não se destina à remoção de arquivos ou repositórios completos — apenas de partes específicas de informações privadas nesses arquivos. Embora possa haver casos em que os arquivos sejam preenchidos inteiramente com informações privadas, você deverá justificar o risco à segurança para a remoção de tais arquivos, e isso pode aumentar o tempo necessário para processar sua solicitação.
- Controvérsias sobre marcas. Se você tiver dúvidas sobre como o GitHub lida com assuntos relacionados a marcas ou se gostaria de denunciar conteúdo que contenha marcas comerciais ou de serviço de sua organização, consulte a [Política de Marcas](/articles/github-trademark-policy/).
- Reclamações de privacidade. Se você desejar acessar, transferir, alterar ou excluir suas informações pessoais no GitHub, entre em contato conosco usando o [Formulário de contato de privacidade](https://github.com/contact/privacy). 
- Conteúdo regido pelas [Diretrizes da Comunidade](/articles/github-community-guidelines/), como malware ou ferramentas de uso geral. Se você tiver dúvidas sobre as Diretrizes da Comunidade ou se acreditar que o conteúdo do GitHub pode violar nossas diretrizes, use {% data variables.contact.report_content %} para entrar em contato conosco.

## Coisas que você deve saber

**Primeiro pergunte gentilmente.** Um ótimo primeiro passo antes de nos enviar uma solicitação para remover dados é tentar entrar em contato diretamente com o usuário. Ele pode ter fornecido informações de contato na respectiva página de perfil público ou no arquivo de Suporte ou arquivo README do repositório, ou você pode entrar em contato criando um chamado ou uma solicitação de pull no repositório. Isso não é rigorosamente necessário, mas é recomendável.

**Ausência de bots.** Você deve ter disponível um profissional treinado para avaliar os fatos de cada solicitação enviada. Se você estiver terceirizando seus esforços, saiba como eles trabalham e garanta que eles não estejam usando bots automatizados para enviar reclamações em massa. Essas reclamações geralmente incluem dados que não representam ameaças à segurança e não incluem explicações suficientes, exigindo idas e vindas adicionais e resultando em atrasos, mesmo quando a reclamação é válida.

**Envie a solicitação correta.** Conforme observado acima, oferecemos esse processo de remoção de informações privadas como um serviço excepcional apenas para conteúdo de alto risco. Não podemos usar esse processo para remover outros tipos de conteúdo, como conteúdo potencialmente infrator, e não podemos processar nenhum outro tipo de solicitação de remoção simultaneamente enquanto processamos solicitações de remoção de informações privadas. Poderemos ajudá-lo mais rapidamente se você enviar suas solicitações de remoção de informações privadas separadamente de quaisquer solicitações para remover conteúdo potencialmente infrator. Se você não tiver certeza se sua solicitação envolve apenas informações privadas ou também envolve outros assuntos jurídicos, consulte um advogado. 

**Tempo de processamento.** Embora processemos solicitações de remoção de informações privadas o mais rápido possível, devido ao volume de solicitações que processamos, pode levar algum tempo para que sua solicitação seja analisada. Solicitações adicionais ou diversas solicitações de pontos de contato adicionais podem resultar em atrasos.

## Como isso realmente funciona?

1. **O denunciante investiga.** Cabe à parte requerente conduzir sua própria investigação e nos fornecer os [detalhes que exigimos](#your-request-must-include) — mais importante, uma explicação de como os dados representam um risco à segurança. O GitHub não está em posição de pesquisar nem de fazer determinações iniciais sobre informações privadas em nome de qualquer pessoa ou organização.

2. **O denunciante envia uma solicitação de remoção de informações privadas.** Depois de conduzir uma investigação, o denunciante prepara e [envia uma solicitação de remoção de informações privadas](#sending-a-private-information-removal-request) para o GitHub. Se a solicitação não for suficientemente detalhada para demonstrar o risco à segurança e para o GitHub localizar os dados, responderemos e solicitaremos mais informações.

3. **O GitHub pede ao usuário para fazer alterações.** Na maioria dos casos, entraremos em contato com o usuário que criou o repositório e daremos a ele a oportunidade de excluir ou modificar as informações privadas especificadas na solicitação ou de contestar a reclamação.

4. **O usuário notifica o GitHub sobre as alterações.** Se o usuário optar por fazer as alterações especificadas, ele deverá nos informar no prazo concedido a eles. Caso contrário, desativaremos o repositório. Se o usuário nos notificar que fez alterações, verificaremos se as alterações foram feitas e notificaremos o denunciante.

  OU

5. **O usuário pode contestar a solicitação.** Se um usuário acreditar que o conteúdo em questão não é uma informação privada sujeita a esta Política, ele poderá contestá-lo. Se o fizer, geralmente deixaremos que o denunciante entre em contato com o usuário e resolva a situação diretamente com ele, dentro do razoável.

6. **O denunciante analisa as alterações.** Se o usuário fizer alterações, o denunciante deverá analisá-las. Se as alterações forem insuficientes, o denunciante deverá fornecer ao GitHub detalhes explicando o motivo. O GitHub pode desabilitar o repositório ou dar ao usuário uma chance adicional de fazer as alterações.

7. **O usuário pode solicitar uma janela adicional para fazer alterações.** Se o usuário perder a oportunidade de remover as informações privadas especificadas na notificação, poderemos conceder a ele um período adicional de aproximadamente 1 dia útil, mediante solicitação, para fazer essas alterações. Nesse caso, o GitHub notificará o denunciante.

### E os forks? (ou O que é um fork?)
Um dos melhores recursos do GitHub é a capacidade de os usuários "criarem forks" dos repositórios uns dos outros. O que isso significa? Basicamente, isso significa que os usuários podem fazer uma cópia de um projeto no GitHub em seus próprios repositórios. Conforme a licença ou a lei permitir, os usuários podem fazer alterações nesse fork para retornar ao projeto principal ou apenas manter como sua própria variação de um projeto. Cada uma dessas cópias é um “[fork](/articles/github-glossary/#fork)” do repositório original, que por sua vez também pode ser chamado de “pai” do fork.

O GitHub não desabilitará automaticamente os forks ao desabilitar um repositório pai. Isso ocorre porque os forks pertencem a usuários diferentes e podem ter sido alterados de maneira significativa. O GitHub não conduz nenhuma investigação independente sobre forks. Esperamos que aqueles que enviam solicitações de remoção de informações privadas conduzam essa investigação e, se acreditarem que os forks também contêm informações privadas, incluam expressamente os forks em sua solicitação.

Se, no momento em que você enviou a notificação, você identificou todos os forks existentes desse repositório, processaremos um requerimento judicial ou extrajudicial válido contra todos os forks nessa rede no momento em que processarmos a notificação. Faríamos isso dada a probabilidade de todos os forks recém-criados conterem o mesmo conteúdo. Além disso, se a rede denunciada que contém o conteúdo denunciado for maior que 100 (cem) repositórios e, portanto, difícil de revisar integralmente, poderemos considerar a desativação de toda a rede se você declarar que, com base no número representativo de forks revisados, você acredita que todos ou a maioria dos forks contêm o conteúdo denunciado no repositório pai.

## Enviando uma solicitação de remoção de informações privadas

Devido ao tipo de conteúdo que o GitHub hospeda (principalmente código de software) e à maneira como esse conteúdo é gerenciado (com Git), precisamos que as reclamações sejam tão específicas quanto possível. Para que possamos verificar se um usuário removeu completamente as informações privadas denunciadas, precisamos saber exatamente onde procurar.

Essas diretrizes foram elaboradas para tornar o processamento de solicitações de remoção de informações privadas o mais simples possível.

### Sua solicitação deve incluir:

1. Um link funcional e clicável para cada arquivo que contém informações privadas. (Observe que não podemos trabalhar com resultados de pesquisa, exemplos ou capturas de tela.)
2. Números de linha específicos dentro de cada arquivo que contém as informações privadas.
3. Uma breve descrição de como cada item identificado representa um risco à segurança para você ou sua organização. ***É importante que você forneça uma explicação de como os dados representam um risco à segurança além de apenas declarar que sim.***
4. Se você for um terceiro atuando como agente de uma organização que enfrenta um risco à segurança, inclua uma declaração de que você tem o direito legal de agir em nome dela.
5. OPCIONAL: Informe-nos se a sua solicitação é particularmente urgente e o motivo. Respondemos a todas as solicitações de remoção de informações privadas o mais rápido possível. No entanto, se esta solicitação for especialmente suscetível ao tempo, como uma exposição de credencial muito recente, explique o motivo.

## Como enviar sua solicitação

Você pode enviar sua solicitação para remover informações privadas por meio do [formulário de contato](https://support.github.com/contact?tags=docs-private-information). Inclua uma versão em texto simples de sua solicitação no corpo de sua mensagem. O envio de sua solicitação em anexo pode resultar em atrasos no processamento.

## Controvérsias

Se você recebeu uma solicitação de remoção de informação privada enviada por nós, poderá contestá-la respondendo ao nosso email e nos informando — com o máximo de detalhes possível — por que você acha que o conteúdo em questão não é uma informação privada sujeita a esta Política.
