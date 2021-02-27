# GraphQL

O diretório `/content/graphql` é onde fica a documentação da API GraphQL do GitHub!

* Os diretórios `/content/graphql/guides` e `/content/graphql/overview` contêm artigos que são editáveis pelas pessoas.
* O diretório `/content/graphql/reference` contém um artigo para cada tipo de dado do GraphQL usado na API GraphQL do GitHub. A maioria do conteúdo nesse diretório é processada usando tags `include`.

  O conteúdo processado etiquetas de `include` é fornecido no diretório `/lib/graphql/static`, que é gerado automaticamente a partir do código-fonte da API internamente no GitHub e não deve ser editado por uma pessoa. Para obter mais informações, consulte [`/lib/graphql/README.md`](/lib/graphql/README.md).

  **Como resultado, não podemos aceitar contribuições para o conteúdo da API do GraphQL neste repositório.**
