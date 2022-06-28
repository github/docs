## 成果物の比較と依存関係のキャッシング

成果物とキャッシングは、{% data variables.product.prodname_dotcom %}にファイルを保存できるようにするので似ていますが、それぞれの機能のユースケースは異なっており、入れ替えて使うことはできません。

- Use caching when you want to reuse files that don't change often between jobs or workflow runs, such as build dependencies from a package management system.
- Use artifacts when you want to save files produced by a job to view after a workflow run has ended, such as built binaries or build logs. 
