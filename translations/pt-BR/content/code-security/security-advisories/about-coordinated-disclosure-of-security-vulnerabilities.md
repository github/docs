---
title: Sobre a divulgação coordenada de vulnerabilidades de segurança
intro: A divulgação das vulnerabilidades é um esforço coordenado entre os relatores de segurança e os mantenedores de repositório.
miniTocMaxHeadingLevel: 4
versions:
  free-pro-team: '*'
---

### Sobre a divulgação de vulnerabilidades no setor

{% data reusables.security-advisory.disclosing-vulnerabilities %}

O relatório inicial de uma vulnerabilidade é tornado privado, e os detalhes completos só são publicados depois de o mantenedor reconhecer o problema e, idealmente, são disponibilizadas soluções ou atualizações, às vezes com um atraso para dar mais tempo para a instalação das atualizações. Para obter mais informações, consulte a "[Série de Páginas de Referência de OWASP sobre a divulgação de vulnerabilidades](https://cheatsheetseries.owasp.org/cheatsheets/Vulnerability_Disclosure_Cheat_Sheet.html#commercial-and-open-source-software)" no site da Série de Páginas de Referência de OWASP.

#### Práticas recomendadas para relatores de vulnerabilidade

É uma prática recomendada relatar de forma privada vulnerabilidades para os mantenedores. Quando possível, como um relator de vulnerabilidades, recomendamos que você evite:
- Divulgar a vulnerabilidade publicamente sem dar aos mantenedores a oportunidade de remediar.
- Ignorar os mantenedores.
- Divulgar a vulnerabilidade antes de uma versão fixa do código estar disponível.
- Esperar ser compensado por relatar um problema, quando não há nenhum programa de recompensa pública.

É aceitável para os relatores de vulnerabilidade revelar uma vulnerabilidade publicamente após um período de tempo, se eles tentaram entrar em contato com os mantenedores e não receberem uma resposta, ou caso tenha entrado em contato com eles e solicitado para esperar muito tempo para divulgá-lo.

Recomendamos que os relatores de vulnerabilidade indiquem claramente os termos da sua política de divulgação como parte do seu processo de relatório. Mesmo que o relator de vulnerabilidade não adira a uma política rigorosa, é bom estabelecer expectativas claras para os mantenedores em termos de cronogramas sobre divulgações de vulnerabilidades intencionais. Para obter um exemplo de política de divulgação, consulte a "[Política de divulgação do Laboratório de Segurança](https://securitylab.github.com/advisories#policy)" no site do GitHub Security Lab.

#### Práticas recomendadas para mantenedores

Como mantenedor, considera-se uma prática recomendada indicar claramente como e onde você deseja receber relatórios de vulnerabilidades. Se essas informações não estiverem claramente disponíveis, os relatores de vulnerabilidade não saberão como entrar em contato com você, e poderão recorrer à extração de endereços de e-mail do desenvolvedor a partir do histórico de commit do git para tentar encontrar um contato de segurança apropriado. Isso pode gerar atritos, relatórios perdidos ou publicação de relatórios não resolvidos.

Os mantenedores devem divulgar as vulnerabilidades em tempo oportuno. Se houver uma vulnerabilidade de segurança no seu repositório, recomendamos que você:
- Trate a vulnerabilidade como um problema de segurança em vez de um erro simples, tanto na sua resposta quanto na sua divulgação. Por exemplo, você deverá mencionar explicitamente que o problema é uma vulnerabilidade de segurança nas observações da versão.
- Confirme o recebimento do relatório de vulnerabilidade o mais rapidamente possível, mesmo que não estejam disponíveis recursos imediatos para investigação. Isso envia a mensagem de que você está rapidamente para responder e agir e define um tom positivo para o resto da interação entre você e o relator da vulnerabilidade.
- Envolva o relator da vulnerabilidade após verificar o impacto e a veracidade do relatório. É provável que o relator da vulnerabilidade já tenha gasto tempo considerando a vulnerabilidade em uma série de cenários. alguns dos quais você pode não ter se considerado.
- Remedeie o problema de uma forma que você considere adequada, considerando, de forma ponderada, as preocupações e conselhos fornecidos pelo relator de vulnerabilidade. Muitas vezes, o relator da vulnerabilidade tem conhecimento de certos casos extremos e correções desviadas que são fáceis de perder sem uma pesquisa de segurança em segundo plano.
- Sempre reconheça o relator da vulnerabilidade quando você der crédito para a descoberta.
- Busque publicar uma correção assim que puder.
- Certifique-se de que você conscientize o ecossistema mais amplo sobre o problema e sua correção quando você publicar a vulnerabilidade. Não é incomum ver casos em que um problema de segurança reconhecido é corrigido no branch de desenvolvimento atual de um projeto. mas o commit ou versão posterior não é explicitamente marcado como uma correção ou versão de segurança. Isso pode causar problemas para consumidores em níveis inferiores..

Publicar os detalhes de uma vulnerabilidade de segurança não faz com que os mantenedores pareçam ruins. As vulnerabilidades de segurança estão presentes em todos os lugares no software, e os usuários confiarão nos mantenedores que têm um processo claro e estabelecido para divulgar as vulnerabilidades de segurança no seu código.

### Sobre relatar e publicar vulnerabilidades em projetos em {% data variables.product.prodname_dotcom %}

O processo de relatório e divulgação de vulnerabilidades para projetos em {% data variables.product.prodname_dotcom_the_website %} é o seguinte:

 Se você é um relator de vulnerabilidades (por exemplo, um pesquisador de segurança) que gostaria de relatar uma vulnerabilidade, primeiro verifique se existe uma política de segurança para o repositório relacionado. Para obter mais informações, consulte "[Sobre políticas de segurança](/github/managing-security-vulnerabilities/adding-a-security-policy-to-your-repository#about-security-policies)". Se houver uma, siga-a para entender o processo antes de entrar em contato com a equipe de segurança do repositório.

 Se não houver uma política de segurança, a forma mais eficiente de estabelecer um meio privado de comunicação com os mantenedores é criar uma problema, solicitando um contato de segurança preferido. Vale a pena notar que o problema será imediatamente visível ao público. Portanto, não deve incluir nenhuma informação sobre o erro. Quando a comunicação for estabelecida, você poderá sugerir que os mantenedores definam uma política de segurança para uso futuro.

{% note %}

**Observação**: _Somente para o npm_ - Se recebermos um relatório de malware em um pacote npm, tentaremos entrar em contato com você em particular. Se você não resolver o problema em tempo, iremos divulgá-lo. Para obter mais informações, consulte "[Relatar malware em um pacote npm](https://docs.npmjs.com/reporting-malware-in-an-npm-package)" no site do npm Docs.

{% endnote %}

 Se você encontrou uma vulnerabilidade de segurança em {% data variables.product.prodname_dotcom_the_website %}, informe a vulnerabilidade por meio de nosso processo de divulgação coordenada. Para obter mais informações, consulte o site [{% data variables.product.prodname_dotcom %} Recompensa por Erros de Segurança](https://bounty.github.com/).

 Se for mantenedor, você poderá assumir a propriedade do processo no início do pipeline, configurando uma política de segurança para o seu repositório, ou disponibilizando as instruções de relatórios de segurança de forma clara, por exemplo, no arquivo LEIAME do seu projeto. Para obter informações sobre como adicionar uma política de segurança, consulte "[Sobre políticas de segurança](/github/managing-security-vulnerabilities/adding-a-security-policy-to-your-repository#about-security-policies)". Se não houver política de segurança, é provável que um relator de vulnerabilidade tente enviar um e-mail para você ou entrar em contato com você de forma privada. Como alternativa, alguém pode abrir um problema (público) com detalhes de um problema de segurança.

 Como mantenedor, para divulgar uma vulnerabilidade no seu código, você primeiro cria um rascunho de uma consultoria de segurança no repositório do pacote em {% data variables.product.prodname_dotcom %}. {% data reusables.security-advisory.security-advisory-overview %} Para obter mais informações, consulte "[Sobre o {% data variables.product.prodname_security_advisories %}](/github/managing-security-vulnerabilities/about-github-security-advisories).


 Para começar, consulte "[Criar um aviso de segurança](/github/managing-security-vulnerabilities/creating-a-security-advisory)."


