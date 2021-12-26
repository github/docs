---
title: Solucionar problemas do seu codespace
intro: Use este guia para ajudá-lo a resolver problemas comuns com seu codespace.
redirect_from:
  - /github/developing-online-with-github-codespaces/troubleshooting-your-codespace
  - /github/developing-online-with-codespaces/troubleshooting-your-codespace
  - /codespaces/working-with-your-codespace/troubleshooting-your-codespace
versions:
  free-pro-team: '*'
type: reference
topics:
  - Codespaces
---

{% data reusables.codespaces.release-stage %}

### Limitações conhecidas

{% data reusables.codespaces.beta-functionality-limited %}

{% data reusables.codespaces.unsupported-repos %}

### Solução de problemas de {% data variables.product.prodname_vscode %}

Use **Problemas** no [`microsoft/vscode`](https://github.com/microsoft/vscode/issues) para verificar problemas conhecidos ou registrar problemas sobre a experiência de {% data variables.product.prodname_vscode %}.


### Solução de problemas de configuração

{% data reusables.codespaces.recovery-mode %}

```
Este codespace está em execução em modo de recuperação devido a um erro no contêiner.
```

Revise os registros de criação, atualize a configuração conforme necessário e execute **Codespaces: Rebuild Container** na paleta de comandos para tentar novamente. Para obter mais informações, consulte "[Configurar o {% data variables.product.prodname_codespaces %} para seu projeto](/github/developing-online-with-codespaces/configuring-codespaces-for-your-project#apply-changes-to-your-configuration)".

### solução de problemas dotfiles

- Certifique-se de que seu repositório dotfiles seja público. Se você tem segredos ou dados confidenciais que você deseja usar em seu código, use [segredos de codespaces ](/codespaces/managing-your-codespaces/managing-encrypted-secrets-for-your-codespaces) em vez dos dotfiles privados.
- Verifique `/workspaces/.codespaces/.persistedshare/dotfiles` para ver se seus dotfiles foram clonados.
  - Se seus dotfiles foram clonados, tente reexecutar manualmente seu script de instalação para verificar se ele é executável.
  - Se seus dotfiles não foram clonados, verifique `/workspaces/.codespaces/.persistedshare/EnvironmentLog.txt` para ver se havia um problema com a clonagem.
- Verifique `/workspaces/.codespaces/.persistedshare/creation.log` com relação a possíveis problemas. Como alternativa, você pode ver o `creation.log` acessando a paleta de comandos e inserindo os **Codespaces: View Creation Log**.


### Solução de problemas do navegador

Se você encontrar problemas ao usar um navegador que não se baseie no Chromium, tente alternar para um navegador baseado no Chromium ou verifique se há problemas conhecidos com seu navegador no repositório `microsoft/vscode` procurando por problemas etiquetados com o nome do seu navegador, como, por exemplo, [`fogo-fogo`](https://github.com/microsoft/vscode/issues?q=is%3Aissue+is%3Aopen+label%3Afirefox) ou [`safari`](https://github.com/Microsoft/vscode/issues?q=is%3Aopen+is%3Aissue+label%3Asafari).

Se você encontrar problemas ao usar um navegador baseado em Chromium, você poderá verificar se você está tendo outro problema conhecido com {% data variables.product.prodname_vscode %} no repositório [`microsoft/vscode`](https://github.com/microsoft/vscode/issues).

### Solução de problemas de armazenamento do contêiner

Ao criar um codespace, ele terá uma quantidade limitada de armazenamento e, após um tempo, poderá ser necessário que você libere espaço. Experimente qualquer um dos seguintes itens para liberar espaço de armazenamento.

- Remova pacotes que não são mais usando `sudo apt autoremove`
- Limpe o cache apt usando `sudo apt clean`
- Exclua arquivos desnecessários, como artefatos de compilação e registros (estes são muito dependentes do projeto)
- Veja os 10 principais arquivos no codespace: `sudo find / -printf '%s %p\n'├sort -nr ├head -10`

Mais opções para exclusão:
- Remova imagens não utilizadas do Docker, redes, e contêineres utilizando o `docker system prune` (insira `-a` se desejar remover todas as imagens, e `--volumes` se desejar remover todos os volumes)
- Remova os arquivos não rastreados da árvore de trabalho: `git clean -i`

### Entrar em contato

Se precisar de ajuda, você poderá entrar em contato conosco. Para obter mais informações, consulte "[Sobre {% data variables.product.prodname_codespaces %}](/github/developing-online-with-codespaces/about-codespaces#contacting-us-about-codespaces)."
