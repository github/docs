Use `jobs.<job_id>` para fornecer um identificador único ao seu trabalho. A chave `job_id` é uma string, e seu valor é um mapa dos dados de configuração do trabalho. Você deve substituir `<job_id>` por uma string exclusiva para o objeto `jobs`. `<job_id>` deve começar por uma letra ou `_`, além de conter somente caracteres alfanuméricos, `-` ou `_`.

#### Exemplo: Criando trabalhos

Neste exemplo, foram criados dois trabalhos e seus valores de `job_id` são `my_first_job` e `my_second_job`.

```yaml
jobs:
  meu_primeiro_trabalho:
    name: meu primeiro trabalho
  meu_segundo_trabalho:
    name: meu segundo trabalho
```
