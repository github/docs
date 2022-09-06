Você pode usar o script de configuração para adicionar automaticamente um novo executor a um grupo. Por exemplo, esse comando registra um novo executor e usa o parâmetro `--runnergroup` para adicioná-lo a um grupo denominado `rg-runnergroup`.

```sh
./config.sh --url $org_or_enterprise_url --token $token --runnergroup rg-runnergroup
```

O comando irá falhar se o grupo do executor não existir:

```
Não foi possível encontrar nenhum grupo de executor auto-hospedado denominado "rg-runnergroup".
```