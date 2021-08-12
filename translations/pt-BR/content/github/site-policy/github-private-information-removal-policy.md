---
title: Política de Remoção de Informações Privadas do GitHub
redirect_from:
  - /articles/github-sensitive-data-removal-policy
  - /github/site-policy/github-sensitive-data-removal-policy
versions:
  free-pro-team: '*'
topics:
  - Policy
  - Legal
---

Oferecemos este processo de remoção de informações privadas como um serviço excepcional apenas para conteúdo de alto risco que viola os [Termos de Serviço do GitHub](/github/site-policy/github-acceptable-use-policies#3-conduct-restrictions), como quando a sua segurança está em risco a partir de credenciais de acesso expostas. Este guia descreve as informações que o GitHub precisa de você para processar uma solicitação a fim de remover informações privadas de um repositório.

### O que são Informações Privadas?

Para os fins deste documento, “informações privadas” refere-se ao conteúdo que (i) deve ser mantido confidencial, *e* (ii) cuja disponibilidade pública representa um risco específico ou direcionado à segurança para você ou sua organização.

"Risco de segurança" refere-se a uma situação que envolve exposição ao perigo físico, roubo de identidade ou aumento da probabilidade de acesso não autorizado a instalações físicas ou de rede.

#### Solicitações de remoção de informações privadas são apropriadas para:
- Acesso às credenciais, como nomes de usuários combinados com senhas, tokens de acesso, ou outros segredos confidenciais que podem conceder acesso ao servidor, à rede ou ao domínio da sua organização.
- Tokens AWS e outras credenciais de acesso semelhantes que concedem acesso a um terceiro em seu nome. Você deve comprovar que o token lhe pertence.
- Documentação (tais como diagramas de rede ou arquiteturas) que representam um risco específico de segurança para uma organização.
- [Informações](/github/site-policy/github-community-guidelines#doxxing-and-invasion-of-privacy) relacionadas à, e que representam um risco de segurança para você como indivíduo (como, por exemplo, números de segurança social ou outros números de identificação do governo).

#### As solicitações de remoção de informações privadas _não são_ apropriadas para:
- Nomes internos do servidor, endereços IP e URLs, por conta própria. Você deve ser capaz de mostrar que o seu uso em um determinado arquivo ou código representa uma ameaça de segurança.
- Menções simples à identidade da sua empresa, nome, marca, nome de domínio ou outras referências à sua empresa em arquivos no GitHub. Você deve ser ser capaz de explicar a razão pela qual o uso da identidade da empresa é uma ameaça à posição de segurança da empresa.
- Arquivos ou repositórios inteiros que não representam um risco específico de segurança, mas você acredita que, de qualquer forma, são censuráveis.
- Solicitações para remover conteúdo que possa infringir seus direitos autorais ou os de sua organização. Se você tiver dúvidas sobre como o GitHub lida com questões relacionadas aos direitos autorais ou gostaria de relatar conteúdos potencialmente infratores, por favor, reveja nossa [Política de Retirada](/articles/dmca-takedown-policy/) DMCA. O processo de remoção de informações privadas geralmente não é destinado à remoção de arquivos completos ou repositórios — apenas para as partes específicas de informações privadas nesses arquivos. Embora possa haver casos em que os arquivos são preenchidos inteiramente com informações privadas, você deverá justificar o risco de segurança referente à remoção desses arquivos, e isso poderá aumentar o tempo necessário para processar a sua solicitação.
- Disputas de marcas registradas. Se você tiver dúvidas sobre como o GitHub lida com as questões relacionadas às marcas registradas ou gostaria de denunciar conteúdo que contenha sua marca comercial ou seus serviços, por favor, revise nossa [Política de Marca Registrada](/articles/github-trademark-policy/).
- Queixas de privacidade. Se você deseja acessar, transferir, alterar ou excluir suas informações pessoais no GitHub, entre em contato conosco por meio do [nosso formulário de contato de privacidade](https://github.com/contact/privacy).
- Conteúdo regido pelas nossas [Diretrizes da Comunidade](/articles/github-community-guidelines/), como malware ou ferramentas de propósito geral. Se você tiver dúvidas sobre nossas Diretrizes da Comunidade ou acredita que o conteúdo no GitHub pode violar nossas diretrizes, você pode usar {% data variables.contact.report_content %} para entrar em contato conosco.

### Informações que você precisa saber

**Primeiro, peça gentilmente.** Um ótimo primeiro passo antes de nos enviar um aviso é tentar entrar em contato diretamente com o usuário. Ele pode ter listado informações de contato na página de perfil público dele ou no README do repositório ou no arquivo de Suporte, ou você pode entrar em contato abrindo um problema ou uma pull request no repositório. Isso não é estritamente necessário, mas é educado.

**Sem bots.** Você precisa contar com a avaliação de um profissional treinado a respeito dos fatos de cada solicitação que você envia. Se você estiver terceirizando seus esforços, certifique-se de saber como eles operam, e certifique-se de que eles não estão usando bots automatizados para enviar reclamações em massa. Essas queixas, muitas vezes, incluem dados que não representam quaisquer ameaças à segurança e não incluem explicações suficientes, exigindo idas e vindas de documentos e resultando em atrasos, mesmo quando a reclamação é válida.

**Envie a solicitação correta.** Conforme mencionado acima, oferecemos este processo de remoção de informações privadas como um serviço excepcional somente para conteúdo de alto risco. Não podemos usar este processo para remover outros tipos de conteúdo, como conteúdo potencialmente infrator e não conseguimos processar qualquer outro tipo de solicitação de remoção simultaneamente ao pedido de remoção das informações privadas. Nós poderemos ajudar você mais rapidamente se você enviar, nas suas solicitações de remoção de informações privadas separadamente de qualquer solicitação, para remover conteúdo potencialmente infrator. Se você não tem certeza se a sua solicitação envolve apenas informações privadas ou também envolve outras questões jurídicas, solicite aconselhamento jurídico.

**Tempo de Processamento.** Embora processemos as solicitações de remoção de informações privadas o mais rápido possível, devido ao volume de solicitações que processamos, pode levar algum tempo para que seu pedido seja revisado. Solicitações adicionais ou vários pedidos de pontos de contatos diferentes podem resultar em atrasos.

### Como realmente funciona?

1. **O requerente deve investigar.** Cabe à parte requerente realizar sua própria investigação e nos fornecer os [detalhes necessários](#your-request-must-include) — e o mais importante: uma explicação de como os dados representam um risco à segurança. O GitHub não está em posição de procurar ou fazer determinações iniciais sobre informações privadas em nome de qualquer indivíduo ou organização.

2. **O reclamante envia um pedido de remoção de informações pessoais.**Após realizar uma investigação, o reclamante prepara e [envia uma solicitação de remoção de informações privadas](#sending-a-private-information-removal-request) para o GitHub. Se o pedido não for suficientemente detalhado para demonstrar o risco de segurança, e para que o GitHub localize os dados, responderemos e pediremos mais informações.

3. **O GitHub pede que usuário faça alterações.** Na maioria dos casos, entraremos em contato com o usuário que criou o repositório e daremos a oportunidade de apagar ou modificar as informações confidenciais especificadas na solicitação ou para contestar a reclamação.

4. **O usuário notifica o GitHub sobre as alterações.** Se o usuário escolher fazer as alterações especificadas, ele deve nos informar dentro do período permitido. Se não o fizer, desativaremos o repositório. Se o usuário nos notificar que fez as alterações, verificaremos se as alterações foram realmente feitas e notificaremos o requerente.

  OU

5. **O usuário pode contestar a solicitação.** Se um usuário acreditar que o conteúdo em questão não é uma informação privada sujeita a esta política, ele poderá contestar isso. Se o fizer, geralmente deixaremos ao requerente a iniciativa de entrar em contato com o usuário para resolver tudo diretamente, racionalmente.

6. **O requerente revisa as alterações.** Se o usuário fizer alterações, o requerente deve revisá-las. Se as mudanças forem insuficientes, o requerente deve fornecer informações sobre os motivos. O GitHub pode desativar o repositório ou dar ao usuário uma chance adicional de fazer as alterações.

7. **O usuário pode solicitar um prazo adicional para fazer alterações.** Se o usuário perdeu a oportunidade de remover as informações privadas especificadas na nota, podemos permitir que tenha uma janela adicional de aproximadamente 1 dia útil, mediante solicitação, para fazer essas alterações. Nesse caso, o GitHub irá notificar o requerente.

#### O que significa Bifurcação? (ou O que é uma Bifurcação?)
Um dos melhores recursos do GitHub é a possibilidade de os usuários "bifurcarem" repositórios uns dos outros. O que isso significa? Basicamente, isso significa que os usuários podem fazer uma cópia de um projeto no GitHub em seus próprios repositórios. Conforme a licença ou a lei permitirem, os usuários podem fazer alterações nessa bifurcação para ou fazer push de volta para o projeto principal ou simplesmente manter como sua própria variação de um projeto. Cada uma dessas cópias é uma "[bifurcação](/articles/github-glossary/#fork)" do repositório original que, por sua vez, também pode ser chamado de "principal" da bifurcação.

O GitHub não irá desabilitar bifurcações automaticamente quando desabilitar um repositório principal. Isso porque as bifurcações pertencem a usuários diferentes e podem ter sido alteradas de maneiras significativas. O GitHub não realiza nenhuma investigação independente sobre as bifurcações. Esperamos que aqueles que enviam solicitações de remoção de informações privadas realizem essa investigação e, se entenderem que as bifurcações também contêm informações privadas, incluam expressamente as bifurcações na sua solicitação.

Se, no momento que você enviou o aviso, você identificou todas as bifurcações existentes desse repositório, nós processaríamos uma reivindicação válida para todas as bifurcações dessa rede no momento em que processamos a notificação. Nós faríamos isso tendo em conta a probabilidade de todas as novas bifurcações criadas conterem o mesmo conteúdo. Além disso, se a rede informada que contém o conteúdo relatado for superior a cem (100) repositórios, o que dificulta revisá-la na sua totalidade, podemos considerar a desabilitação de toda a rede se você declarar na sua notificação que, com base no número representativo de bifurcações revisados, você acredita que todas ou a maioria das bifurcações contêm o conteúdo informado no repositório principal.

### Enviar uma solicitação de remoção de informações privadas

Devido ao tipo de conteúdo que o GitHub hospeda (principalmente código de software) e a forma como o conteúdo é gerenciado (com o Git), precisamos que as queixas sejam as mais específicas possíveis. Para que possamos verificar se um usuário removeu informações privadas relatadas completamente, precisamos saber exatamente onde procurar.

Estas diretrizes tem o objetivo de simplificar, o máximo possível, o tratamento dos pedidos de remoção das informações privadas.

#### Seu pedido deve incluir:

1. Um link funcional e clicável para cada arquivo que contém informações privadas. (Note que não podemos trabalhar a partir de resultados de pesquisa, exemplos ou capturas de tela.)
2. As linhas específicas dentro de cada arquivo que contém as informações privadas.
3. Uma breve descrição de como cada item que você identificou representa um risco de segurança para você ou sua organização. ***É importante que você forneça uma explicação de como os dados representam um risco de segurança além de simplesmente afirmar isso.***
4. Se você é um terceiro atuando como representante de uma organização que enfrenta um risco de segurança, inclua uma declaração de que tem o direito legal de agir em nome dessa organização.
5. OPCIONAL: informe-nos se o seu pedido é particularmente urgente, e por quê. Respondemos a todas as solicitações de remoção de informações privadas o mais rápido possível. No entanto, se esse pedido for especialmente sensível ao tempo, como uma exposição de credenciais muito recente, por favor, explique o porquê.

### Como enviar sua solicitação

Você pode enviar a sua solicitação para remover informações privadas por meio do nosso [formulário de contato](https://support.github.com/contact?tags=docs-private-information). Por favor, inclua uma versão simples de texto da sua solicitação no corpo da mensagem. Enviar sua solicitação em um anexo pode resultar em atrasos.

### Disputas

Se você recebeu a nossa solicitação de remoção de informações privada, você pode contestar respondendo ao nosso e-mail e nos informando — da forma mais detalhada possível —  por que você acha que o conteúdo em questão não é uma informação privada sujeita a esta Política.
