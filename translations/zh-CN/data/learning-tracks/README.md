---
ms.openlocfilehash: dcc6cf1e8adf15c4997d4d62cd34bde99f7d37cd
ms.sourcegitcommit: 6edb015070d3f0fda4525c6c931f1324626345dc
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/12/2022
ms.locfileid: "147887324"
---
# 学习轨迹（又名学习路径）

学习轨迹是一系列帮助您掌握特定主题的文章。 学习轨迹按每个产品定义。 有关示例，请参阅 https://docs.github.com/en/actions/guides。

## 工作原理

产品的学习轨迹数据在两个地方定义：

1. 产品指南索引页面前辅文中定义了一个简单的学习轨迹名称数组。

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

2. 每个轨迹的其他数据在 `data` 目录中以“产品”命名的 YAML 文件中定义。

    例如，在 `data/learning-tracks/actions.yml` 中，内容文件的 `learningTracks` 数组中的每个项目都用其他数据（如 `title`、`description` 和 `guides` 链接数组）表示。

    每个版本的 YAML 中必须有一个学习轨道通过 `featured_track: true` 指定为“特色”学习轨道，这会使其显示在产品指南页面的顶部。 如果缺少此属性，测试将失败。

    `featured_track` 属性可以是简单的布尔值（即 `featured_track: true`），也可以是包含版本控制语句（例如 `featured_track: '{% ifversion fpt %}true{% else %}false{% endif %}'`）的字符串。 如果你使用版本控制，每个 YML 文件将有多个 `featured_track`，但请确保每个当前支持的版本中只有一个版本会呈现。 如果每个版本的特色链接多于或少于一个，测试将失败。

## 版本控制

学习轨迹的版本控制在页面渲染时进行处理。 代码位于 [`lib/learning-tracks.js`](lib/learning-tracks.js) 中，由 `page.render()` 调用。 然后，由 `components/guides` 呈现处理学习轨迹。

液体条件不必用于指南的 YAML 文件中的版本控制。 只有适用于当前版本的学习跟踪指南才会自动呈现。 如果没有任何属于当前版本的指南的跟踪，学习跟踪部分将不会呈现。

还支持在产品的学习跟踪 YML 数据中的明确版本。 格式和允许的值与 [frontmatter 版本属性](/content#versions)相同。

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

如果未包含 `versions` 属性，则假定轨迹在所有版本中都可用。

## 架构实施

用于验证学习轨迹 YAML 的架构位于 [`tests/helpers/schemas/learning-tracks-schema.js`](tests/helpers/schemas/learning-tracks-schema.js) 中，由 [`tests/content/lint-files.js`](tests/content/lint-files.js) 执行。
