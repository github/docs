# 学习轨迹（又名学习路径）

学习轨迹是一系列帮助您掌握特定主题的文章。 学习轨迹按每个产品定义。 有关示例，请参阅 https://docs.github.com/en/actions/guides。

## 工作原理

产品的学习轨迹数据在两个地方定义：

1. A simple array of learning track names is defined in the product guides index page frontmatter.

    例如，在 `content/actions/guides/index.md` 中：
    ```
    learningTracks:
      - getting_started
      - continuous_integration
      - continuous_deployment
      - deploy_to_the_cloud
      - hosting_your_own_runners
      - create_actions
    ```

2. 每个轨迹的额外数据在 `data` 目录中为**产品**命名的 YAML 文件中定义。

    例如，在 `data/learning-tracks/actions.yml` 中，内容文件的 `learningTracks` 数组中每个项都用 `title`、`description` 和 `guides` 链接数组等额外数据来表示。

    One learning track in this YAML **per version** must be designated as a "featured" learning track via `featured_track: true`, which will set it to appear at the top of the product guides page. 如果缺少此属性，测试将失败。

    `featured_track` 属性可以是简单的布尔值（例如 `featured_track: true`），也可以是包含版本控制语句的字符串（例如 `featured_track: '{% ifversion fpt %}true{% else %}false{% endif %}'`）。 如果您使用版本控制，每个 YML 文件将有多个 `featured_track`，但请确保每个当前支持的版本中只有一个版本会呈现。 如果每个版本的特色链接多于或少于一个，测试将失败。

## 版本

学习轨迹的版本控制在页面渲染时进行处理。 代码位于 [`lib/learning-tracks.js`](lib/learning-tracks.js) 中，通过 `page.render()` 调用。 The processed learning tracks are then rendered by `components/guides`.

Liquid 条件**不**需要用用于指南的 YAML 文件中的版本控制。 只有适用于当前版本的学习跟踪指南才会自动呈现。 如果没有任何属于当前版本的指南的跟踪，学习跟踪部分将不会呈现。

还支持在产品的学习跟踪 YML 数据中的明确版本。 格式和允许值与 [frontmatter 版本属性](/content#versions)相同。

例如：

```
learning_track_name:
  title: 'Learning track title'
  description: 'Learning track description'
  featured_track: true
  versions:
    ghes: '>=3.0'
  guides:
   - /path/to/guide1
   - /path/to/guide2
```

如果不包含 `版本` 属性，它假定跟踪在所有版本中可用。

## 架构执行

验证学习轨迹的架构 YAML 位于 [`tests/helpers/schemas/learning-tracks-schema.js`](tests/helpers/schemas/learning-tracks-schema.js) 中，通过 [`tests/content/lint-files.js`](tests/content/lint-files.js) 执行。
