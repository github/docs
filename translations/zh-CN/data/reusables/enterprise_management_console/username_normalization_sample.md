此表格举例说明 {% data variables.product.prodname_ghe_server %} 中如何标准化用户名：

| 用户名                    | 标准化的用户名       | 结果                            |
| ---------------------- | ------------- | ----------------------------- |
| Ms.Bubbles             | `ms-bubbles`  | 此用户名已成功创建。                    |
| !Ms.Bubbles            | `-ms-bubbles` | 此用户名无法创建，因其以短划线开头。            |
| Ms.Bubbles!            | `ms-bubbles-` | 此用户名无法创建，因其以短划线结尾。            |
| Ms!!Bubbles            | `ms--bubbles` | 此用户名无法创建，因其包含两个连续的短划线。        |
| Ms!Bubbles             | `ms-bubbles`  | 此用户名无法创建。 虽然标准化的用户名有效，但它已经存在。 |
| Ms.Bubbles@example.com | `ms-bubbles`  | 此用户名无法创建。 虽然标准化的用户名有效，但它已经存在。 |
