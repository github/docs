---
title: Limites para visualização de conteúdo e diffs no repositório
intro: 'Determinados tipos de recursos podem ser muito grandes, exigindo processamento elevado no{% data variables.product.product_name %}. Por isso, limites são estabelecidos para assegurar que as solicitações sejam completadas em um período razoável.'
redirect_from:
  - /articles/what-are-the-limits-for-viewing-content-and-diffs-in-my-repository/
  - /articles/limits-for-viewing-content-and-diffs-in-a-repository
  - /github/creating-cloning-and-archiving-repositories/limits-for-viewing-content-and-diffs-in-a-repository
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Repositories
---
A maioria dos limites abaixo afetam o {% data variables.product.product_name %} e a API.

### Limites de texto

Arquivos de texto maiores que **1 MB** são sempre exibidos como texto simples. O código não destaca a sintaxe e arquivos em prosa não são convertidos em HTML (como markdown, AsciiDoc *etc.*).

Arquivos de texto acima de **5 MB** somente estão disponíveis por meio de suas URLs brutas, que são servidas em `{% data variables.product.raw_github_com %}`; por exemplo, `https://{% data variables.product.raw_github_com %}/octocat/Spoon-Knife/master/index.html`. Clique no botão **Raw** (Bruto) para obter o URL bruto de um arquivo.

### Limites de diff

Os diffs podem ficar muito grandes, por isso impusemos estas restrições em diffs para commits, pull requests e visualizações comparadas:

- Nenum diff do arquivo pode exceder *20.000 linhas que você possa carregar* ou *1 MB* de dados diff puros. *Quatro mil linhas* e *20 kB* são automaticamente carregados em um único arquivo.
- O número máximo de arquivos em um único diff é limitado a *3.000*.
- O número máximo de arquivos renderizáveis (como imagens, PDFs e arquivos GeoJSON) em um único diff é limitado a *25*.

Algumas partes de um diff limitado podem ser exibidas, mas qualquer excedente de limite não é mostrado.

### Limites de listas de commits

As páginas de visualização comparada e pull requests exibem uma lista de commits entre as revisões `base` e `head`. Essas listas são limitadas a **250** commits. Caso o limite seja excedido, uma observação indicará que commits adicionais estão presentes (mas não são mostrados).
