## 比较构件和依赖项缓存

构件与缓存类似，因为它们能够在 {% data variables.product.prodname_dotcom %} 上存储文件，但每项功能都提供不同的用例，不能互换使用。

- Use caching when you want to reuse files that don't change often between jobs or workflow runs, such as build dependencies from a package management system.
- Use artifacts when you want to save files produced by a job to view after a workflow run has ended, such as built binaries or build logs. 
