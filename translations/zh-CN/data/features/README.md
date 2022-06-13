## 基于功能的版本

基于功能的版本管理允许我们在一个地方定义和控制任意命名的“功能”版本。

**注意**：不要删除 `data/features/placeholder.yml`，因为它被测试使用。

## 工作原理

添加一个新的 YAML 文件，其中包含您想要在此目录中使用的功能名称。 对于名为 `meow`的功能，将是 `data/features/meow.yml`。

在 YML 文件中添加 `versions` 块，其中带有该功能所提供的版本的短名称。 例如：

```yaml
versions:
  fpt: '*'
  ghes: '>3.1'
  ghae: '*'
```

格式和允许值与 [frontmatter 版本属性](/content#versions)相同。

### 液体条件

现在您可以在内容文件中使用 `{% ifversion meow %} ... {% endif %}`！

### 前辅文

您也可以在内容文件中使用前辅文功能：

```yaml
versions:
  fpt: '*'
  ghes: '>3.1'
  feature: 'meow'
```

如果您希望内容文件应用于多个功能，您可以执行以下功能：

```yaml
versions:
  fpt: '*'
  ghes: '>3.1'
  feature: ['meow', 'blorp']
```

## 架构执行

验证功能版本管理的架构位于 [`tests/helpers/schemas/feature-versions-schema.js`](/tests/helpers/schemas/feature-versions-schema.js) 中，通过 [`tests/linting/lint-versioning.js`](/tests/linting/lint-versioning.js) 执行。

## 删除功能标签的脚本

待定!
