---
title: Licenças
intro: A API de Licenças permite recuperar as licenças populares de código aberto e informações sobre o arquivo de licença do projeto em particular.
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
redirect_from:
  - /rest/reference/licenses
---

## Sobre a API de licenças

A API de Licenças usa [a Licença de código aberto do Gem do Ruby](https://github.com/benbalter/licensee) para tentar identificar a licença do projeto. A licença corresponde ao conteúdo do arquivo `LICENÇA` de um projeto (se existir) em comparação com uma pequena lista de licenças conhecidas. Como resultado, a API não leva em conta as licenças das dependências do projeto ou outros meios de documentar a licença de um projeto, como, por exemplo, referências ao nome da licença na documentação.

Se uma licença for correspondida, a chave da licença e o nome retornados serão conformes à [especificação SPDX](https://spdx.org/).

**Observação:** Estes pontos de extremidade também retornarão informações de licença de um repositório:

- [Obter um repositório](/rest/reference/repos#get-a-repository)
- [Listar repositórios para um usuário](/rest/reference/repos#list-repositories-for-a-user)
- [Listar repositórios da organização](/rest/reference/repos#list-organization-repositories)
- [Listar bifurcações](/rest/reference/repos#list-forks)
- [Listar repositórios inspecionados por um usuário](/rest/reference/activity#list-repositories-watched-by-a-user)
- [Listar repositórios da equipe](/rest/reference/teams#list-team-repositories)

{% warning %}

O GitHub pode ser muitas coisas, mas não é um escritório de advocacia. Como tal, o GitHub não oferece aconselhamento jurídico. Usar a API de licenças ou enviar-nos um e-mail sobre a mesma não constitui aconselhamento jurídico, nem cria uma relação advogado e cliente. Em caso de dúvida sobre o que se pode e não se pode fazer com uma licença específica, antes de avançar, você deverá buscar orientação jurídica antes de seguir em frente. Na verdade, você deve sempre consultar o seu próprio advogado antes de tomar decisões que possam ter desdobramentos jurídicos ou que possam afetar seus direitos.

O GitHub criou a API da licença para ajudar os usuários a obter informações sobre licenças de código aberto e os projetos que as utilizam. Esperamos que ajude. No entanto, tenha em mente que não somos advogados (pelo menos a maioria de nós) e que cometemos erros como qualquer um. Por esse motivo, o GitHub fornece a API numa base "como se apresenta" e não faz garantias sobre quaisquer informações ou licenças fornecidas em ou através dela, além de eximir-se da responsabilidade por danos resultantes do uso da API.

{% endwarning %}
