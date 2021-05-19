# 学习轨迹（又名学习路径）

学习轨迹是一系列帮助您掌握特定主题的文章。 学习轨迹按每个产品定义。 有关示例，请参阅 https://docs.github.com/en/actions/guides。

产品的学习轨迹数据在两个地方定义：

1. 简单的学习轨迹名称数组在产品分类索引页面前缀中定义。

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

    在此 YAML **每个版本**中，必须通过 `featured_track: true` 指定一个学习轨迹为“特色”学习轨迹，这将设置它出现在产品分类页面的顶部。 如果缺少此属性，测试将失败。

    `featured_track` 属性可以是简单的布尔值（例如 `featured_track: true`），也可以是包含版本控制语句的字符串（例如 `featured_track: '{% if currentVersion == "free-pro-team@latest" %}true{% else %}false{% endif %}'`）。 如果您使用版本控制，每个 YML 文件将有多个 `featured_track`，但请确保每个当前支持的版本中只有一个版本会呈现。 如果每个版本的特色链接多于或少于一个，测试将失败。

学习轨迹的版本控制在页面渲染时进行处理。 代码位于 [`lib/learning-tracks.js`](lib/learning-tracks.js) 中，通过 `page.render()` 调用。 然后通过 `layouts/product-sublanding.html` 渲染处理后的学习轨迹。

验证学习轨迹的架构 YAML 位于 [`tests/helpers/schemas/learning-tracks-schema.js`](tests/helpers/schemas/learning-tracks-schema.js) 中，通过 [`tests/content/lint-files.js`](tests/content/lint-files.js) 执行。
