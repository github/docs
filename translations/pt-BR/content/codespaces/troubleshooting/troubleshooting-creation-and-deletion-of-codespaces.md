---
title: Solucionar problemas de criação e exclusão de codespaces
intro: 'Este artigo fornece etapas de solução de problemas para problemas comuns que você pode ter ao criar ou excluir um codespace, incluindo problemas de armazenamento e configuração.'
product: '{% data reusables.gated-features.codespaces %}'
versions:
  fpt: '*'
  ghec: '*'
type: reference
topics:
  - Codespaces
shortTitle: Criação e exclusão
---

## Criando codespaces

### Sem acesso para criar um codespace
{% data variables.product.prodname_codespaces %} não estão disponíveis para todos os repositórios. Se o botão "Abrir com codespaces" estiver faltando, o {% data variables.product.prodname_github_codespaces %} pode não estar disponível para o repositório. Para obter mais informações, consulte "[Criar um codespace](/codespaces/developing-in-codespaces/creating-a-codespace#access-to-codespaces)".

Se você acredita que sua organização [habilitou {% data variables.product.prodname_codespaces %}](/codespaces/managing-codespaces-for-your-organization/enabling-codespaces-for-your-organization#about-enabling-codespaces-for-your-organization), certifique-se de que um proprietário ou gerente de cobrança da organização definiu o limite de gastos para {% data variables.product.prodname_codespaces %}. Para obter mais informações, consulte "[Gerenciar seu limite de gastos para {% data variables.product.prodname_codespaces %}](/billing/managing-billing-for-github-codespaces/managing-spending-limits-for-codespaces)".

### O codespace não abre quando criado

Se você criar um codespace e ele não abrir:

1. Tente atualizar a página no caso de haver um problema de cache ou comunicação.
2. Acesse a sua página de {% data variables.product.prodname_github_codespaces %}: https://github.com/codespaces e verifique se o novo codespace está listado lá. O processo pode ter criado com sucesso o codespace, mas não foi possível reportar ao seu navegador. Se o novo codespace estiver listado, você poderá abri-lo diretamente a partir daquela página.
3. Tente criar o código novamente para que o repositório exclua uma falha de comunicação temporária.

Se você ainda não puder criar um codespace para um repositório em que {% data variables.product.prodname_codespaces %} estão disponíveis, {% data reusables.codespaces.contact-support %}

## Excluindo codespaces

O proprietário de um codespace tem controle total sobre ele e apenas o proprietário pode excluir seus codespaces. Você não pode excluir um codespace criado por outro usuário.

Você pode excluir seus codespaces do navegador, em {% data variables.product.prodname_vscode %}, ou usando {% data variables.product.prodname_cli %}. {% data variables.product.prodname_cli %} também permite que você exclua codespaces em massa. Para obter mais informações, consulte "[Excluindo um codespace](/codespaces/developing-in-codespaces/deleting-a-codespace)".

## Armazenamento do contêiner

Ao criar um codespace, ele terá uma quantidade limitada de armazenamento e, após um tempo, poderá ser necessário que você libere espaço. Tente executar qualquer um dos comandos a seguir no terminal de {% data variables.product.prodname_codespaces %} para liberar espaço de armazenamento.

- Remova pacotes que não são mais usados usando `sudo apt autoremove`.
- Limpe o cache apt usando `sudo apt clean`.
- Veja os primeiros 10 maiores arquivos no codespace com`sudo find / -printf '%s %p\n'| sort -nr | head -10`.
- Exclua arquivos desnecessários, como artefatos e registros de criação.

Algumas opções mais destrutivas:

- Remova imagens não utilizadas do Docker, redes, e contêineres utilizando o `docker system prune` (insira `-a` se desejar remover todas as imagens, e `--volumes` se desejar remover todos os volumes).
- Remova os arquivos não rastreados da árvore de trabalho: `git clean -i`.

## Configuration

{% data reusables.codespaces.recovery-mode %}

```
Este codespace está em execução em modo de recuperação devido a um erro no contêiner.
```

Revise os registros de criação, atualize a configuração do contêiner de desenvolvimento conforme necessário e execute **Codespaces: Recriar contêiner** no {% data variables.product.prodname_vscode_command_palette %} para tentar novamente. Para obter mais informações, consulte " [Programas registra](/codespaces/troubleshooting/codespaces-logs)" e "[Configurando {% data variables.product.prodname_codespaces %} para o seu projeto](/github/developing-online-with-codespaces/configuring-codespaces-for-your-project#apply-changes-to-your-configuration)".
