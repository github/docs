---
title: 创建 GitHub CLI 扩展
intro: '了解如何通过为 {% data variables.product.prodname_cli %} 创建自定义扩展程序与其他用户共享新的 {% data variables.product.prodname_cli %} 命令。'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - CLI
---

## 关于 {% data variables.product.prodname_cli %} 扩展

{% data reusables.cli.cli-extensions %} 有关如何使用 {% data variables.product.prodname_cli %} 扩展的详细信息，请参阅“[使用 {% data variables.product.prodname_cli %} 扩展](/github-cli/github-cli/using-github-cli-extensions)”。

对于您创建的每个扩展，都需要一个存储库。 存储库名称必须以 `gh-`开头。 存储库名称的其余部分是扩展的名称。 存储库的根目录下必须有一个与存储库同名的可执行文件，或者附加到发行版的一组预编译二进制可执行文件。

{% note %}

**注意**：当依赖于可执行脚本时，我们建议使用 bash 脚本，因为 bash 是一个广泛使用的解译程序。 您可以使用非 bash 脚本，但用户必须安装必要的解译程序才能使用扩展。 如果您不希望依赖安装了解译程序的用户，请考虑使用预编译扩展。

{% endnote %}

## 使用 `gh extension create` 创建解译的扩展

{% note %}

**注意**：运行不带参数的 `gh extension create` 将启动交互式向导。

{% endnote %}

可以使用 `gh extension create` 命令为您的扩展创建一个项目，包括包含一些起始代码的 bash 脚本。

1. 使用 `gh extension create` 子命令设置新的扩展。 将 `EXTENSION-NAME` 替换为扩展的名称。

    ```shell
    gh extension create <em>EXTENSION-NAME</em>
    ```

1. 按照打印的说明完成扩展并选择性地发布扩展。

## 使用 `gh extension create`创建预编译的扩展

可以使用 `--precompiled=go` 参数为扩展创建基于 Go 的项目，包括 Go 基架、工作流程基架和起始代码。

1. 使用 `gh extension create` 子命令设置新的扩展。 将 `EXTENSION-NAME` 替换为扩展的名称，并指定 `--precompiled=go`。

    ```shell
    gh extension create --precompiled=go <em>EXTENSION-NAME</em>
    ```

1. 按照打印的说明完成扩展并选择性地发布扩展。

## 使用 `gh extension create`创建非 Go 预编译的扩展

可以使用 `--precompiled=other` 参数为非 Go 预编译扩展（包括工作流程基架）创建项目。

1. 使用 `gh extension create` 子命令设置新的扩展。 将 `EXTENSION-NAME` 替换为扩展名，并指定 `--precompiled=other`。

    ```shell
    gh extension create --precompiled=other <em>EXTENSION-NAME</em>
    ```

1. 使用所选的编译语言为扩展添加一些初始代码。

1. 在 `script/build.sh` 中填写代码以生成扩展，以确保可以自动生成扩展。

1. 按照打印的说明完成扩展并选择性地发布扩展。

## 手动创建解译的扩展

1. 为扩展创建一个名为 `gh-EXTENSION-NAME` 的本地目录。 将 `EXTENSION-NAME` 替换为扩展的名称。 例如，`gh-whoami`。

1. 在您创建的目录中，添加与该目录同名的可执行文件。

  {% note %}

  **注意：** 请确保您的文件是可执行的。 在 Unix上，您可以在命令行中执行 `chmod +x file_name` ，以使 `file_name` 可执行。 在 Windows上，您可以依次运行 `git init -b main`、`git add file_name` 和 `git update-index --chmod=+x file_name`。

  {% endnote %}

1. 在可执行文件中编写脚本。 例如：

  ```bash
  #!/usr/bin/env bash
  set -e
  exec gh api user --jq '"You are @\(.login) (\(.name))."'
  ```

1. 从目录中，将扩展安装为本地扩展。

   ```shell
   gh extension install .
   ```

1. 验证您的扩展是否正常工作。 将 `EXTENSION-NAME` 替换为扩展的名称。 例如 `whoami`。

   ```shell
   gh <em>EXTENSION-NAME</em>
   ```

1. 从目录中，创建一个存储库以发布扩展。 将 `EXTENSION-NAME` 替换为扩展的名称。

   ```shell
   git init -b main
   git add . && git commit -m "initial commit"
   gh repo create gh-<em>EXTENSION-NAME</em> --source=. --public --push
   ```

1. （可选）为了帮助其他用户发现您的扩展，请添加存储库主题 `gh-extension`。 这将使扩展显示在 [`gh-extension` 主题页面](https://github.com/topics/gh-extension)上。 有关如何添加存储库主题的更多信息，请参阅“[使用主题对存储库进行分类](/github/administering-a-repository/managing-repository-settings/classifying-your-repository-with-topics)”。

## 编写解译型 {% data variables.product.prodname_cli %} 扩展的提示

### 处理参数和标志

`gh my-extension-name` 命令之后的所有命令行参数都将传递给扩展脚本。 在 bash 脚本中，您可以引用 `$1`、`$2` 等参数。 可以使用参数来接受用户输入或修改脚本的行为。

例如，此脚本处理多个标志。 当使用 `-h` 或 `--help` 标志调用脚本时，脚本将打印帮助文本，而不是继续执行。 当使用 `--name` 标志调用脚本时，脚本会将标志后的下一个值设置为 `name_arg`。 当使用 `--verbose` 标志调用脚本时，脚本将打印不同的问候语。

```bash
#!/usr/bin/env bash
set -e

verbose=""
name_arg=""
while [ $# -gt 0 ]; do
  case "$1" in
  --verbose)
    verbose=1
    ;;
  --name)
    name_arg="$2"
    shift
    ;;
  -h|--help)
    echo "Add help text here."
    exit 0
    ;;
  esac
  shift
done

if [ -z "$name_arg" ]
then
  echo "You haven't told us your name."
elif [ -z "$verbose" ]
then
  echo "Hi $name_arg"
else
  echo "Hello and welcome, $name_arg"
fi
```

### 在非交互模式下调用核心命令

某些 {% data variables.product.prodname_cli %} 核心命令将提示用户输入。 使用这些命令编写脚本时，通常需要提示。 为避免提示，请通过参数显式提供必要的信息。

例如，要以编程方式创建问题，请指定标题和正文：

```shell
gh issue create --title "My Title" --body "Issue description"
```

### 以编程方式获取数据

许多核心命令支持 `--json` 标志，用于以编程方式获取数据。 例如，要返回其中列出拉取请求数量、标题和可合并性状态的 JSON 对象：

```shell
gh pr list --json number,title,mergeStateStatus
```

如果没有从 GitHub 获取特定数据的核心命令，则可以使用 [`gh api`](https://cli.github.com/manual/gh_api) 命令来访问 GitHub API。 例如，要获取有关当前用户的信息，

```shell
gh api user
```

所有输出 JSON 数据的命令还具有将该数据筛选为脚本可以立即使用的数据的选项。 例如，要获取当前用户的名称：

```shell
gh api user --jq '.name'
```

更多信息请参阅 [`gh help formatting`](https://cli.github.com/manual/gh_help_formatting)。

## 手动创建预编译的扩展

1. 为扩展创建一个名为 `gh-EXTENSION-NAME` 的本地目录。 将 `EXTENSION-NAME` 替换为扩展的名称。 例如，`gh-whoami`。

1. 在您创建的目录中，添加一些源代码。 例如：

    ```go
    package main
    import (
      "github.com/cli/go-gh"
      "fmt"
    )

    func main() {
      args := []string{"api", "user", "--jq", `"You are @\(.login) (\(.name))"` }
      stdOut, _, err := gh.Exec(args...)
      if err != nil {
        fmt.Println(err)
        return
      }
      fmt.Println(stdOut.String())
    }
    ```

1. 从目录中，将扩展安装为本地扩展。

    ```shell
    gh extension install .
    ```

1. 生成代码。 例如，使用 Go，将 `YOUR-USERNAME` 替换为您的 GitHub 用户名：

    ```shell
    go mod init github.com/<em>YOUR-USERNAME</em>/gh-whoami
    go mod tidy
    go build
    ```

1. 验证您的扩展是否正常工作。 将 `EXTENSION-NAME` 替换为扩展的名称。 例如 `whoami`。

    ```shell
    gh <em>EXTENSION-NAME</em>
    ```

1. 从目录中，创建一个存储库以发布扩展。 将 `EXTENSION-NAME` 替换为扩展的名称。

  {% note %}

  **注意：** 注意不要将编译步骤生成的二进制文件提交到版本控制中。

  {% endnote %}

    ```shell
    git init -b main
    echo "gh-<em>EXTENSION-NAME</em>" >> .gitignore
    git add main.go go.* .gitignore && git commit -m'Initial commit'
    gh repo create "gh-<em>EXTENSION-NAME</em>"
    ```

1. 创建版本以与他人共享预编译的扩展。 针对要支持的每个平台进行编译，将每个二进制文件作为资产附加到发行版。 附加到发行版的二进制可执行文件必须遵循命名约定，并且具有 <em>OS-ARCHITECTURE\[EXTENSION\]</em> 的后缀。

  例如，为 Windows 64 位编译的名为 `whoami` 的扩展将具有名称 `gh-whoami-windows-amd64.exe`，而为 Linux 32 位编译的同一扩展具有名称 `gh-whoami-linux-386`。 要查看 `gh` 识别的操作系统和架构的详尽列表，请参阅[此源代码](https://github.com/cli/cli/blob/14f704fd0da58cc01413ee4ba16f13f27e33d15e/pkg/cmd/extension/manager.go#L696)。

  {% note %}

  **注意：**要使扩展在 Windows 上正常运行，其资产文件必须具有 `.exe` 扩展名。 其他操作系统不需要扩展。

  {% endnote %}

  可以从命令行创建版本。 例如：

  ```shell git tag v1.0.0 git push origin v1.0.0 GOOS=windows GOARCH=amd64 go build -o gh-<em>EXTENSION-NAME</em>-windows-amd64.exe GOOS=linux GOARCH=amd64 go build -o gh-<em>EXTENSION-NAME</em>-linux-amd64 GOOS=darwin GOARCH=amd64 go build -o gh-<em>EXTENSION-NAME</em>-darwin-amd64 gh release create v1.0.0 ./*amd64*

1. （可选）为了帮助其他用户发现您的扩展，请添加存储库主题 `gh-extension`。 这将使扩展显示在 [`gh-extension` 主题页面](https://github.com/topics/gh-extension)上。 有关如何添加存储库主题的更多信息，请参阅“[使用主题对存储库进行分类](/github/administering-a-repository/managing-repository-settings/classifying-your-repository-with-topics)”。


## 编写预编译 {% data variables.product.prodname_cli %} 扩展的提示

### 自动化发布

考虑将 [gh-extension-precompiled](https://github.com/cli/gh-extension-precompile) 操作添加到项目中的工作流程。 此操作将自动为您的扩展生成交叉编译的 Go 二进制文件，并为非 Go 预编译扩展提供构建基架。

### 使用基于 Go 的扩展中的 {% data variables.product.prodname_cli %} 功能

考虑使用 [go-gh](https://github.com/cli/go-gh)，这是一个公开 `gh` 功能的 Go 库，用于扩展。

## 后续步骤

要查看 {% data variables.product.prodname_cli %} 扩展的更多示例，请查看 [具有 `gh-extension` 主题的存储库](https://github.com/topics/gh-extension)。
