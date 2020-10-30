---
title: Política de remoção de dados confidenciais do GitHub
redirect_from:
  - /articles/github-sensitive-data-removal-policy
versions:
  free-pro-team: '*'
---

Se você acredita que o conteúdo no GitHub infringe direitos autorais de sua propriedade, por favor, consulte nossa [Política de Retirada DMCA](/articles/dmca-takedown-policy/) e nosso [Guia para envio de um Aviso de Retirada DMCA](/articles/guide-to-submitting-a-dmca-takedown-notice/). Confiamos no processo de aviso e retirada DMCA para a maioria das nossas ações de remoção.

No entanto, entendemos que, vez ou outra, conteúdos confidenciais relacionados à segurança podem ser publicados no GitHub – acidentalmente ou de propósito. Fornecemos nosso processo de remoção de dados confidenciais para remover esses dados em determinadas circunstâncias excepcionais em que o processo DMCA não seria aplicável, tais como situações em que sua segurança esteja em risco por causa de senhas expostas e que você não possua os direitos autorais do conteúdo específico que precisa ser removido, ou quando o conteúdo não seja possível de ser protegido pelos direitos autorais. Este guia descreve as informações de que o GitHub precisa para processar uma solicitação de remoção de dados confidenciais de um repositório.

### O que são dados confidenciais?

Para os fins deste documento, "dados confidenciais" referem-se ao conteúdo (i) que deve ser mantido confidencial, *e* (ii) cuja disponibilidade pública represente um risco específico ou direcionado à sua segurança ou à da sua organização.

#### Requisições de remoção de dados confidenciais são apropriadas para:
- Acesso às credenciais, como nomes de usuários combinados com senhas, tokens de acesso, ou outros segredos confidenciais que podem conceder acesso ao servidor, à rede ou ao domínio da sua organização.
- Tokens AWS e outras credenciais de acesso semelhantes que concedem acesso a um terceiro em seu nome. Você deve comprovar que o token lhe pertence.
- Documentação (tais como diagramas de rede) que representam um risco específico de segurança para uma organização. Nomes internos do servidor, endereços IP e URLs, por si só, não são suficientemente confidenciais. Você deve ser capaz de mostrar que o uso do nome do servidor interno em um determinado arquivo ou trecho de código representa uma ameaça de segurança.

#### Requisições de remoção de dados confidenciais _não são_ apropriadas para:
-  Solicitações para remover conteúdo que possa infringir seus direitos autorais ou os de sua organização. Se você tiver dúvidas sobre como o GitHub lida com questões relacionadas aos direitos autorais ou gostaria de relatar conteúdos potencialmente infratores, por favor, reveja nossa [Política de Retirada](/articles/dmca-takedown-policy/) DMCA. O processo de remoção de dados confidenciais geralmente não é destinado à remoção de arquivos ou repositórios completos — apenas para algumas partes específicas de dados confidenciais nesses arquivos. Embora possa haver casos em que os arquivos sejam preenchidos inteiramente com informações confidenciais, você deve justificar o risco de segurança para a remoção desses arquivos, e isso pode aumentar o tempo necessário para processar sua solicitação.
- Disputas de marcas registradas. Se você tiver dúvidas sobre como o GitHub lida com as questões relacionadas às marcas registradas ou gostaria de denunciar conteúdo que contenha sua marca comercial ou seus serviços, por favor, revise nossa [Política de Marca Registrada](/articles/github-trademark-policy/).
- Menções simples à identidade da sua empresa, nome, marca, nome de domínio ou outras referências à sua empresa em arquivos no GitHub. Você deve ser capaz de explicar por que o uso da identidade de sua empresa é uma ameaça à segurança da mesma antes de tomarmos medidas sob esta política.
- Queixas de privacidade. Se você tem preocupações sobre sua própria privacidade ou está nos contactando em nome de seus funcionários devido a uma preocupação de privacidade — por exemplo, se houver um endereço de e-mail privado ou outras informações pessoais publicadas — entre em contato conosco via [formulário de contato de Privacidade](https://github.com/contact/privacy).
- Arquivos ou repositórios inteiros que não representam um risco específico de segurança, mas você acredita que, de qualquer forma, são censuráveis.
- Conteúdo regido pelas nossas [Diretrizes da Comunidade](/articles/github-community-guidelines/), como malware ou ferramentas de propósito geral. Se você tiver dúvidas sobre nossas Diretrizes da Comunidade ou acredita que o conteúdo no GitHub pode violar nossas diretrizes, você pode usar {% data variables.contact.report_content %} para entrar em contato conosco.

### Informações que você precisa saber

**Primeiro, peça gentilmente.** Um ótimo primeiro passo antes de nos enviar um aviso é tentar entrar em contato diretamente com o usuário. Ele pode ter listado informações de contato na página de perfil público dele ou no LEIAME do repositório ou no arquivo de Suporte, ou você pode entrar em contato abrindo um problema ou uma pull request no repositório. Isso não é estritamente necessário, mas é educado.

**Sem bots.** Você precisa contar com a avaliação de um profissional treinado a respeito dos fatos de cada solicitação que você envia. Se você estiver terceirizando seus esforços, certifique-se de saber como eles operam, e certifique-se de que eles não estão usando bots automatizados para enviar reclamações em massa. Essas queixas, muitas vezes, incluem dados que não representam quaisquer ameaças à segurança e não incluem explicações suficientes, exigindo idas e vindas de documentos e resultando em atrasos, mesmo quando a reclamação é válida.

**Envie a solicitação correta.** Oferecemos este processo de remoção de dados confidenciais como um serviço excepcional somente para conteúdo de alto risco. Não podemos usar este processo para remover outros tipos de conteúdo, como conteúdos potencialmente infratores, e não conseguimos processar qualquer outro tipo de solicitação de remoção simultaneamente ao pedido de remoção de conteúdo confidencial. Conseguiremos ajudá-lo mais rapidamente se você enviar suas solicitações de remoção de dados confidenciais separadamente de qualquer outra solicitação para remover conteúdo potencialmente infrator. Se você não tem certeza se o seu pedido envolve apenas dados confidenciais ou também envolve outras questões jurídicas, consulte um advogado.

**Tempo de Processamento.** Embora realmente processemos solicitações de remoção de dados confidenciais o mais rápido possível, devido ao volume de solicitações que processamos, pode levar algum tempo para que seu pedido seja avaliado. Solicitações adicionais ou vários pedidos de pontos de contatos diferentes podem resultar em atrasos.

### Como realmente funciona?

1. **O requerente deve investigar.** Cabe à parte requerente realizar sua própria investigação e nos fornecer os [detalhes necessários](#your-request-must-include) — e o mais importante: uma explicação de como os dados representam um risco à segurança. O GitHub não está em posição de procurar ou fazer investigações iniciais sobre dados confidenciais em nome de qualquer indivíduo ou organização.

2. **O requerente envia um pedido de remoção de dados confidenciais.** Depois de realizar uma investigação, o requerente prepara e [envia uma solicitação de remoção de dados confidenciais](#sending-a-sensitive-data-removal-request) para o GitHub. Se o pedido não for suficientemente detalhado para demonstrar o risco de segurança, e para que o GitHub localize os dados, responderemos e pediremos mais informações.

3. **O GitHub pede que usuário faça alterações.** Na maioria dos casos, entraremos em contato com o usuário que criou o repositório e daremos a oportunidade de apagar ou modificar os dados confidenciais especificados na solicitação ou para contestar a reclamação.

4. **O usuário notifica o GitHub sobre as alterações.** Se o usuário escolher fazer as alterações especificadas, ele deve nos informar dentro do período permitido. Se não o fizer, desativaremos o repositório. Se o usuário nos notificar que fez as alterações, verificaremos se as alterações foram realmente feitas e notificaremos o requerente.

  OU

5. **O usuário pode contestar a solicitação.** Se um usuário acredita que o conteúdo em questão não é um dado confidencial sujeito a esta Política, ele pode contestar isso. Se o fizer, geralmente deixaremos ao requerente a iniciativa de entrar em contato com o usuário para resolver tudo diretamente, racionalmente.

6. **O requerente revisa as alterações.** Se o usuário fizer alterações, o requerente deve revisá-las. Se as mudanças forem insuficientes, o requerente deve fornecer informações sobre os motivos. O GitHub pode desativar o repositório ou dar ao usuário uma chance adicional de fazer as alterações.

7. **O usuário pode solicitar um período adicional para fazer as alterações.** Se o usuário perdeu a oportunidade de remover os dados confidenciais especificados na notificação, podemos permitir que ele tenha um período adicional de 1 dia útil, se solicitado, para fazer essas alterações. Nesse caso, o GitHub irá notificar o requerente.

#### O que significa Bifurcação? (ou O que é uma Bifurcação?)
Um dos melhores recursos do GitHub é a possibilidade de os usuários "bifurcarem" repositórios uns dos outros. O que isso significa? Basicamente, isso significa que os usuários podem fazer uma cópia de um projeto no GitHub em seus próprios repositórios. Conforme a licença ou a lei permitirem, os usuários podem fazer alterações nessa bifurcação para ou fazer push de volta para o projeto principal ou simplesmente manter como sua própria variação de um projeto. Cada uma dessas cópias é uma "[bifurcação](/articles/github-glossary/#fork)" do repositório original que, por sua vez, também pode ser chamado de "principal" da bifurcação.

O GitHub não irá desabilitar bifurcações automaticamente quando desabilitar um repositório principal. Isso porque as bifurcações pertencem a usuários diferentes e podem ter sido alteradas de maneiras significativas. O GitHub não realiza nenhuma investigação independente sobre as bifurcações. Esperamos que as pessoas que enviam pedidos de remoção de dados confidenciais conduzam essa investigação e, se acreditam que as bifurcações também contêm dados confidenciais, incluam expressamente as bifurcações no seu pedido.

### Enviando uma solicitação de remoção de dados confidenciais

Devido ao tipo de conteúdo que o GitHub hospeda (principalmente código de software) e a forma como o conteúdo é gerenciado (com o Git), precisamos que as queixas sejam as mais específicas possíveis. Para que possamos verificar se um usuário removeu completamente os dados confidenciais relatados, precisamos saber exatamente onde procurar.

Essas diretrizes destinam-se a tornar o processamento de solicitação de remoção de dados confidenciais o mais simples possível.

#### Seu pedido deve incluir:

1. Um link clicável e funcional para cada arquivo contendo dados confidenciais. (Note que não podemos trabalhar a partir de resultados de pesquisa, exemplos ou capturas de tela.)
2. Números de linha específicos dentro de cada arquivo contendo os dados confidenciais.
3. Uma breve descrição de como cada item que você identificou representa um risco de segurança para você ou sua organização. ***É importante que você forneça uma explicação de como os dados representam um risco de segurança além de simplesmente afirmar isso.***
4. Se você é um terceiro atuando como representante de uma organização que enfrenta um risco de segurança, inclua uma declaração de que tem o direito legal de agir em nome dessa organização.
5. OPCIONAL: informe-nos se o seu pedido é particularmente urgente, e por quê. Respondemos a todas as solicitações de remoção de dados confidenciais o mais rápido possível. No entanto, se esse pedido for especialmente sensível ao tempo, como uma exposição de credenciais muito recente, por favor, explique o porquê.

### Como enviar sua solicitação

Você pode enviar sua solicitação para remover dados confidenciais através do nosso [formulário de contato](https://support.github.com/contact). Por favor, inclua uma versão simples de texto da sua solicitação no corpo da mensagem. Enviar sua solicitação em um anexo pode resultar em atrasos.

### Disputas

Se você recebeu uma solicitação de remoção de dados confidenciais, você pode contestar isso respondendo ao nosso e-mail e nos informando — o mais detalhado possível — por que você acha que o conteúdo em questão não se refere a dados confidenciais sob esta Política.
