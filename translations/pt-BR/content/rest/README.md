# REST

O diretório `/content/rest` é onde fica a documentação da API REST do GitHub!

* Os diretórios `/content/rest/guias` e `/content/rest/overview` contêm artigos regulares. Eles podem ser editados por uma pessoa.
* O diretório `/content/rest/reference` contém um artigo para cada grupo de pontos de extremidade na API REST do GitHub. A maioria do conteúdo nesse diretório é processada usando tags `include`.

  O conteúdo processados com as tags `include` é fornecido no diretório `/lib/rest/static`, que é gerado automaticamente a partir do código fonte da API internamente no GitHub e não deve ser editado por uma pessoa. Para obter mais informações, consulte [`/lib/rest/README.md`](/lib/rest/README.md).

  **Como resultado, não podemos aceitar contribuições para o conteúdo de referência da API REST neste repositório.**
