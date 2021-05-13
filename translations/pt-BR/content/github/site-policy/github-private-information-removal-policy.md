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
- Solicitações para remover conteúdo que possa infringir seus direitos autorais ou os de sua organização. Se você tiver dúvidas sobre como o GitHub lida com questões relacionadas aos direitos autorais ou gostaria de relatar conteúdos potencialmente infratores, por favor, reveja nossa [Política de Retirada](/articles/dmca-takedown-policy/) DMCA. The private information removal process is generally not intended for the removal of full files or repositories — only for the specific pieces of private information in those files. While there may be cases where files are filled entirely with private information, you must justify the security risk for the removal of such files, and this may increase the time required to process your request.
- Disputas de marcas registradas. Se você tiver dúvidas sobre como o GitHub lida com as questões relacionadas às marcas registradas ou gostaria de denunciar conteúdo que contenha sua marca comercial ou seus serviços, por favor, revise nossa [Política de Marca Registrada](/articles/github-trademark-policy/).
- Queixas de privacidade. If you wish to access, transfer, change, or delete your personal information on GitHub, please contact us via [our Privacy contact form](https://github.com/contact/privacy).
- Conteúdo regido pelas nossas [Diretrizes da Comunidade](/articles/github-community-guidelines/), como malware ou ferramentas de propósito geral. Se você tiver dúvidas sobre nossas Diretrizes da Comunidade ou acredita que o conteúdo no GitHub pode violar nossas diretrizes, você pode usar {% data variables.contact.report_content %} para entrar em contato conosco.

### Informações que você precisa saber

**Primeiro, peça gentilmente.** Um ótimo primeiro passo antes de nos enviar um aviso é tentar entrar em contato diretamente com o usuário. Ele pode ter listado informações de contato na página de perfil público dele ou no README do repositório ou no arquivo de Suporte, ou você pode entrar em contato abrindo um problema ou uma pull request no repositório. Isso não é estritamente necessário, mas é educado.

**Sem bots.** Você precisa contar com a avaliação de um profissional treinado a respeito dos fatos de cada solicitação que você envia. Se você estiver terceirizando seus esforços, certifique-se de saber como eles operam, e certifique-se de que eles não estão usando bots automatizados para enviar reclamações em massa. Essas queixas, muitas vezes, incluem dados que não representam quaisquer ameaças à segurança e não incluem explicações suficientes, exigindo idas e vindas de documentos e resultando em atrasos, mesmo quando a reclamação é válida.

**Send In The Correct Request.** As noted above, we offer this private information removal process as an exceptional service only for high-risk content. We are not able to use this process to remove other kinds of content, such as potentially infringing content, and we are not able to process any other kinds of removal requests simultaneously while processing private information removal requests. We will be able to help you more quickly if you send in your private information removal requests separately from any requests to remove potentially infringing content. If you are unsure whether your request involves only private information or also involves other legal matters, please consult legal counsel.

**Processing Time.** While we do process private information removal requests as quickly as possible, due to the volume of requests we process, it may take some time for your request to be reviewed. Solicitações adicionais ou vários pedidos de pontos de contatos diferentes podem resultar em atrasos.

### Como realmente funciona?

1. **O requerente deve investigar.** Cabe à parte requerente realizar sua própria investigação e nos fornecer os [detalhes necessários](#your-request-must-include) — e o mais importante: uma explicação de como os dados representam um risco à segurança. GitHub is not in a position to search for or make initial determinations about private information on any individual's or organization's behalf.

2. **Complainant Sends a Private Information Removal Request.** After conducting an investigation, the complainant prepares and [sends a private information removal request](#sending-a-private-information-removal-request) to GitHub. Se o pedido não for suficientemente detalhado para demonstrar o risco de segurança, e para que o GitHub localize os dados, responderemos e pediremos mais informações.

3. **GitHub Asks User to Make Changes.** In most cases, we will contact the user who created the repository and give them an opportunity to delete or modify the private information specified in the request or to dispute the claim.

4. **O usuário notifica o GitHub sobre as alterações.** Se o usuário escolher fazer as alterações especificadas, ele deve nos informar dentro do período permitido. Se não o fizer, desativaremos o repositório. Se o usuário nos notificar que fez as alterações, verificaremos se as alterações foram realmente feitas e notificaremos o requerente.

  OU

5. **User May Dispute the Request.** If a user believes the content in question is not private information subject to this Policy, they may dispute it. Se o fizer, geralmente deixaremos ao requerente a iniciativa de entrar em contato com o usuário para resolver tudo diretamente, racionalmente.

6. **O requerente revisa as alterações.** Se o usuário fizer alterações, o requerente deve revisá-las. Se as mudanças forem insuficientes, o requerente deve fornecer informações sobre os motivos. O GitHub pode desativar o repositório ou dar ao usuário uma chance adicional de fazer as alterações.

7. **User May Request an Additional Window to Make Changes.** If the user missed their opportunity to remove the private information specified in the notice, we may allow them an additional window of approximately 1 business day, upon request, to make those changes. Nesse caso, o GitHub irá notificar o requerente.

#### O que significa Bifurcação? (ou O que é uma Bifurcação?)
Um dos melhores recursos do GitHub é a possibilidade de os usuários "bifurcarem" repositórios uns dos outros. O que isso significa? Basicamente, isso significa que os usuários podem fazer uma cópia de um projeto no GitHub em seus próprios repositórios. Conforme a licença ou a lei permitirem, os usuários podem fazer alterações nessa bifurcação para ou fazer push de volta para o projeto principal ou simplesmente manter como sua própria variação de um projeto. Cada uma dessas cópias é uma "[bifurcação](/articles/github-glossary/#fork)" do repositório original que, por sua vez, também pode ser chamado de "principal" da bifurcação.

O GitHub não irá desabilitar bifurcações automaticamente quando desabilitar um repositório principal. Isso porque as bifurcações pertencem a usuários diferentes e podem ter sido alteradas de maneiras significativas. O GitHub não realiza nenhuma investigação independente sobre as bifurcações. We expect those sending private information removal requests to conduct that investigation and, if they believe that the forks also contain private information, expressly include forks in their request.

If at the time that you submitted your notice, you identified all existing forks of that repository, we would process a valid claim against all forks in that network at the time we process the notice. Nós faríamos isso tendo em conta a probabilidade de todas as novas bifurcações criadas conterem o mesmo conteúdo. In addition, if the reported network that contains the reported content is larger than one hundred (100) repositories and thus would be difficult to review in its entirety, we may consider disabling the entire network if you state in your notice that, based on the representative number of forks you have reviewed, you believe that all or most of the forks contain the content reported in the parent repository.

### Sending A Private Information Removal Request

Devido ao tipo de conteúdo que o GitHub hospeda (principalmente código de software) e a forma como o conteúdo é gerenciado (com o Git), precisamos que as queixas sejam as mais específicas possíveis. In order for us to verify that a user has removed reported private information completely, we need to know exactly where to look.

These guidelines are designed to make the processing of requests to remove private information as straightforward as possible.

#### Seu pedido deve incluir:

1. A working, clickable link to each file containing private information. (Note que não podemos trabalhar a partir de resultados de pesquisa, exemplos ou capturas de tela.)
2. Specific line numbers within each file containing the private information.
3. Uma breve descrição de como cada item que você identificou representa um risco de segurança para você ou sua organização. ***É importante que você forneça uma explicação de como os dados representam um risco de segurança além de simplesmente afirmar isso.***
4. Se você é um terceiro atuando como representante de uma organização que enfrenta um risco de segurança, inclua uma declaração de que tem o direito legal de agir em nome dessa organização.
5. OPCIONAL: informe-nos se o seu pedido é particularmente urgente, e por quê. We respond to all private information removal requests as quickly as possible. No entanto, se esse pedido for especialmente sensível ao tempo, como uma exposição de credenciais muito recente, por favor, explique o porquê.

### Como enviar sua solicitação

You can submit your request to remove private information via our [contact form](https://support.github.com/contact?tags=docs-private-information). Por favor, inclua uma versão simples de texto da sua solicitação no corpo da mensagem. Enviar sua solicitação em um anexo pode resultar em atrasos.

### Disputas

If you received a private information removal request from us, you can dispute it by replying to our email and letting us know — in as much detail as possible — why you think the content in question is not private information subject to this Policy.
