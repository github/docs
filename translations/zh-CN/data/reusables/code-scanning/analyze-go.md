{% data variables.product.prodname_codeql %} 也运行 Go 项目的构建来设置项目。 但是，与其他编译语言相比，仓库中的所有 Go 文件都是提取的，而不仅仅是构建的文件。 您可以使用自定义构建命令跳过提取未受构建影响的 Go 文件。
