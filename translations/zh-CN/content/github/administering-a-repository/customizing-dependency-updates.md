---
title: 自定义依赖项更新
intro: '您可以自定义 {% data variables.product.prodname_dependabot %} 如何维护依赖项。'
permissions: '拥有仓库写入权限的人可配置仓库的 {% data variables.product.prodname_dependabot %}。'
versions:
  free-pro-team: '*'
---

{% data reusables.dependabot.beta-note %}

### 关于自定义依赖项更新

启用版本更新后，您可以自定义 {% data variables.product.prodname_dependabot %} 通过向 *dependabot.yml* 文件添加更多选项来维护依赖项。 例如，您可以：

- 指定在每周的哪一天打开版本更新的拉取请求：`schedule.day`
- 为每个包管理器设置审查者、受理人和标签： `reviewers`、`assignees` 和 `labels`
- 为每个清单文件的更改定义版本控制策略：`versioning-strategy`
- 更改为版本更新打开的拉取请求默认最大数 5：`open-pull-requests-limit`
- 打开版本更新的拉取请求以定位特定分支，而不是默认分支：`target-branch`

有关配置选项的详细信息，请参阅“[依赖项更新的配置选项](/github/administering-a-repository/configuration-options-for-dependency-updates)”。

更新仓库中的 *dependabot.yml* 文件时，{% data variables.product.prodname_dependabot %} 使用新配置即刻进行检查。 几分钟内，您将在 **{% data variables.product.prodname_dependabot %}** 选项卡上看到更新的依赖项列表，如果仓库有很多依赖项，可能需要更长时间。 您可能还会看到针对版本更新的新拉取请求。 更多信息请参阅“[列出为版本更新配置的依赖项](/github/administering-a-repository/listing-dependencies-configured-for-version-updates)”。

### 配置更改对安全更新的影响

如果您自定义 *dependabot.yml* 文件，您可能会注意到为安全更新提出的拉取请求的一些变化。 这些拉取请求始终由依赖项的安全通告触发，而不是由 {% data variables.product.prodname_dependabot %} 时间表触发。 但是，它们会从 *dependabot.yml* 文件继承相关的配置设置，除非您为版本更新指定不同的目标分支。

有关示例，请参阅下面的“[设置自定义标签](#setting-custom-labels)”。

### 修改计划

设置 `daily` 更新计划时，默认情况下，{% data variables.product.prodname_dependabot %} 会在 05:00 UTC 检查新版本。 您可以使用 `schedule.time` 指定在一天中的其他时间检查更新（格式：`h:mm`）。

下面的示例 *dependabot.yml* 文件扩展了 npm 配置，以指定 {% data variables.product.prodname_dependabot %} 应该何时检查依赖项的版本更新。

```yaml
# dependabot.yml file with
# customized schedule for version updates

version: 2
updates:
  # Keep npm dependencies up to date
  - package-ecosystem: "npm"
    directory: "/"
    # Check the npm registry for updates at 2am UTC
    schedule:
      interval: "daily"
      time: "02:00"
```

### 设置审查者和受理人

默认情况下，{% data variables.product.prodname_dependabot %} 会提出没有任何审查者或受理人的拉取请求。

您可以使用 `reviewers` 和 `assignees` 为针对包管理器提出的所有拉取请求指定审查者和受理人。 指定一个团队时，必须使用完整的团队名称，就像 @提及团队（包括组织）一样。

下面的示例 *dependabot.yml* 文件更改了 npm 配置，使所有通过 npm 的版本和安全更新打开的拉取请求都有两个审查者和一个受理人。

```yaml
# dependabot.yml file with
# reviews and an assignee for all npm pull requests

version: 2
updates:
  # Keep npm dependencies up to date
  - package-ecosystem: "npm"
    directory: "/"
    schedule:
      interval: "daily"
    # Raise all npm pull requests with reviewers
    reviewers:
      - "my-org/team-name"
      - "octocat"
    # Raise all npm pull requests with an assignee
    assignees:
      - "user-name"
```

### 设置自定义标签

{% data reusables.dependabot.default-labels %}

您可以使用 `labels` 覆盖默认标签，并为针对包管理器提出的所有拉取请求指定替代标签。 您不能在 *dependabot.yml* 文件中创建新标签，因此，仓库中必须已存在替代标签。

下面的示例 *dependabot.yml* 文件更改了 npm 配置，因此，已完成 npm 版本和安全更新且已打开的所有拉取请求均拥有自定义标签。 它还会更改 Docker 配置，以针对自定义分支检查版本更新，并针对自定义分支使用自定义标签提出拉取请求。 Docker 的变更不会影响安全更新拉取请求，因为安全更新始终针对默认分支进行。

{% note %}

**注：**新的 `target-branch` 必须包含 Dockerfile 才能更新，否则，此变更将导致 Docker 版本更新被禁用。

{% endnote %}

```yaml
# dependabot.yml file with
# customized npm configuration

version: 2
updates:
  # Keep npm dependencies up to date
  - package-ecosystem: "npm"
    directory: "/"
    schedule:
      interval: "daily"
    # Raise all npm pull requests with custom labels
    labels:
      - "npm dependencies"
      - "triage-board"

    # Keep Docker dependencies up to date
  - package-ecosystem: "docker"
    directory: "/"
    schedule:
      interval: "daily"
    # Raise pull requests for Docker version updates
    # against the "develop" branch. The Docker configuration
    # no longer affects security update pull requests.
    target-branch: "develop"
    # Use custom labels on pull requests for Docker version updates
    labels:
      - "Docker dependencies"
      - "triage-board"
```

### 更多示例

更多示例请参阅“[依赖项更新的配置选项](/github/administering-a-repository/configuration-options-for-dependency-updates)。”
