
Este evento ocorre quando uma execução do fluxo de trabalho é solicitada ou concluída, e permite que você execute um fluxo de trabalho com base no resultado concluído de outro fluxo de trabalho. Por exemplo, se o fluxo de trabalho `pull_request` gera artefatos de criação, você pode criar um novo fluxo de trabalho que usa `workflow_run` para analisar os resultados e adicionar um comentário ao pull request original.

O fluxo de trabalho iniciado pelo evento `workflow_run` pode acessar os segredos e escrever tokens usados pelo fluxo de trabalho original.
