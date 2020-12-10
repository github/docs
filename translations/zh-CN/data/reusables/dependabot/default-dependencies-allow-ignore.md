默认情况下，清单或锁定文件中明确定义的所有依赖项都将保持最新。 您可以使用 `allow` 和 `ignore` 自定义版本更新时要保留哪些依赖项。 {% data variables.product.prodname_dependabot %} 可检查所有被允许的依赖项，然后过滤到任何被忽略的依赖项或版本。 因此，同时与 `allow` 和 `ignore` 匹配的依赖项将被忽略。
