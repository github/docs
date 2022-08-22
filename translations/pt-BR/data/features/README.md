## Versionamento baseado em funcionalidade

O versionamento baseado em recursos nos permite definir e controlar as versões de um "recurso" nomeado arbitrariamente em um só lugar.

**Observação**: Não exclua `data/features/placeholder.yml` porque ele é usado pelos testes.

## Como funciona

Adicione um novo arquivo YAML com o nome da funcionalidade que deseja usar neste diretório. Para uma funcionalidade denominada `meow`, isso seria `data/features/meow.yml`.

Adicione um bloco de `versões` ao arquivo YML com nomes curtos das versões em que o recurso estiver disponível. Por exemplo:

```yaml
versions:
  fpt: '*'
  ghes: '>3.1'
  ghae: '*'
```

O formato e os valores permitidos são os mesmos que [frontmatter versions property](/content#versions).

### Condicionais de Liquid

Agora você pode usar `{% ifversion meow %} ... {% endif %}` nos arquivos de conteúdo!

### Frontmatter

Você também pode usar o recurso no frontmatter em arquivos de conteúdo:

```yaml
versions:
  fpt: '*'
  ghes: '>3.1'
  feature: 'meow'
```

Você não pode usar o `feature:` para especificar várias versões simultâneas, pois não há compatibilidade. Como alternativa, você pode criar um novo arquivo de versão baseado em recursos com a versão necessária.

## Aplicação de esquema

O esquema para validar a versão do recurso encontra-se em [`tests/helpers/schemas/feature-versions-schema.js`](/tests/helpers/schemas/feature-versions-schema.js) e é exercido por [`tests/linting/lint-versioning.js`](/tests/linting/lint-versioning.js).

## Script para remover tags de recursos

TBD!
