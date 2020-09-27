1. 在 `/PATH/REPO-NAME.git/git-import/raw-authors.csv` 中检查逗号分隔 (CSV) 的文件。 它应包含以下三列：
    - `ID`：存储在原始仓库中的作者，后接唯一识别符。
    - `NAME`：存储在原始仓库中的作者

  要将作者从原始仓库映射到电子邮件地址和名称，请使用 `ID,(ignored),GIT_EMAIL,GIT_NAME` 列新建一个 CSV 文件，将用 "ID" 表示的任何作者信息替换为 "GIT_EMAIL" 和 "GIT_NAME"。


  #### 示例：

   - 原始作者 ID：`octocat@111111-2222-3333-4444-55555555555`
   - 新电子邮件地址：`octocat@github.com`
   - 新名称：`The Octocat`

   要将原始作者映射到新 Git 用户，CSV 文件应包含行：

   `octocat@111111-2222-3333-4444-55555555555, ,octocat@github.com,The Octocat`
