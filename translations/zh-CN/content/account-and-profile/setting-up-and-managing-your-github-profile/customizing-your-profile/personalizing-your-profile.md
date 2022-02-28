---
title: 个性化您的个人资料
intro: '您可以在个人资料中设置头像和添加个人简历，与其他 {% data variables.product.product_name %} 用户共享您自己的信息。'
redirect_from:
  - /articles/adding-a-bio-to-your-profile
  - /articles/setting-your-profile-picture
  - /articles/how-do-i-set-up-my-profile-picture
  - /articles/gravatar-problems
  - /articles/how-do-i-set-up-my-avatar
  - /articles/personalizing-your-profile
  - /github/setting-up-and-managing-your-github-profile/personalizing-your-profile
  - /github/setting-up-and-managing-your-github-profile/customizing-your-profile/personalizing-your-profile
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Profiles
shortTitle: 个性化
---

## 更改头像

您的头像可帮助在 {% data variables.product.product_name %} 的拉取请求、评论、参与页面及图形中识别您。

在注册帐户时，{% data variables.product.product_name %} 会提供一个随机生成的“默认肖像”。 [默认肖像](https://github.com/blog/1586-identicons)从用户 ID 的哈希生成，因此无法控制其颜色或图案。 您可以将默认肖像替换为能代表您的图片。

{% note %}

**注意{% ifversion ghec %}s{% endif %}**：{% ifversion ghec %}

* {% endif %}头像应为 1 MB 以下的 PNG、JPG 或 GIF 文件。 为获取质量最佳的渲染，建议图像的像素保持在大约 500 x 500 像素。
{% ifversion ghec %}* {% data variables.product.prodname_emus %} 不支持 Gravatar 头像。{% endif %}

{% endnote %}

### 设置头像

{% data reusables.user-settings.access_settings %}
2. 在 **Profile Picture（头像）**下，单击 {% octicon "pencil" aria-label="The edit icon" %} **Edit（编辑）**。 ![编辑头像](/assets/images/help/profile/edit-profile-photo.png)
3. 单击 **Upload a photo...（上传图片...）**。 ![更新头像](/assets/images/help/profile/edit-profile-picture-options.png)
3. 裁剪图片。 完成后，单击 **Set new profile picture（设置新头像）**。 ![裁剪上传的照片](/assets/images/help/profile/avatar_crop_and_save.png)

### 将头像重置为默认肖像

{% data reusables.user-settings.access_settings %}
2. 在 **Profile Picture（头像）**下，单击 {% octicon "pencil" aria-label="The edit icon" %} **Edit（编辑）**。 ![编辑头像](/assets/images/help/profile/edit-profile-photo.png)
3. 要还原为默认肖像，请单击 **Remove photo（删除照片）**。 如果您的电子邮件地址与[个人全球统一标识](https://en.gravatar.com/)关联，则无法还原到默认肖像。 此时请单击 **Revert to Gravatar（还原到个人全球统一标识）**。 ![更新头像](/assets/images/help/profile/edit-profile-picture-options.png)

## 更改个人资料名称

您可以更改显示在个人资料中的名称。 此名称也可能显示在您对于组织拥有的私有仓库所做的注释旁边。 更多信息请参阅“[管理组织中成员名称的显示](/articles/managing-the-display-of-member-names-in-your-organization)”。

{% ifversion fpt or ghec %}
{% note %}

**注：** 如果您是 {% data variables.product.prodname_emu_enterprise %} 的成员，则必须通过您的身份提供商而不是 {% data variables.product.prodname_dotcom_the_website %} 对您的个人资料名称进行任何更改。 {% data reusables.enterprise-accounts.emu-more-info-account %}

{% endnote %}
{% endif %}

{% data reusables.user-settings.access_settings %}
2. 在“Name（名称）”下，键入要显示在个人资料中的名称。 ![个人资料设置中的名称字段](/assets/images/help/profile/name-field.png)

## 在个人资料中添加个人简历

在个人资料中添加个人简历，与其他 {% data variables.product.product_name %} 用户共享您自己的信息。 借助 [@提及](/articles/basic-writing-and-formatting-syntax)和表情符号，可以包含您当前或以前的工作经历、工作类型甚至您喜欢的咖啡种类。

{% ifversion fpt or ghes or ghec %}

要以更长和更突出的方式显示有关自己的自定义信息，您还可以使用个人资料自述文件。 更多信息请参阅“[管理个人资料自述文件](/github/setting-up-and-managing-your-github-profile/managing-your-profile-readme)”。

{% endif %}

{% note %}

**注：** 如果为个人资料启用了活动概述部分，并且您在个人资料的个人简历中 @提及您所属的组织，则该组织会先出现在活动概述中。 更多信息请参阅“[在您的个人资料中显示活动概述](/articles/showing-an-overview-of-your-activity-on-your-profile)”。

{% endnote %}

{% data reusables.user-settings.access_settings %}
2. 在 **Bio（个人简历）**下，添加您要显示在个人资料中的内容。 个人资料字段限于 160 个字符。 ![更新个人资料中的个人简历](/assets/images/help/profile/bio-field.png)

  {% tip %}

  **提示：**当您 @提及组织时，只有您所属的组织才会自动填写。 您也可 @提及您不是其成员的组织，例如前雇主，但不会自动填写该组织名称。

  {% endtip %}

3. 单击 **Update profile（更新个人资料）**。 ![更新个人资料按钮](/assets/images/help/profile/update-profile-button.png)

## 设置状态

您可以设置状态以显示您当前在 {% data variables.product.product_name %} 上的可用性。 您的状态将会显示：
- 在您的 {% data variables.product.product_name %} 个人资料页面上。
- 当有人在 {% data variables.product.product_name %} 上将鼠标放在您的用户名或头像上时。
- 在您属于其成员的团队页面上时。 更多信息请参阅“[关于团队](/articles/about-teams/#team-pages)”。
- 在您属于其成员的组织的组织仪表板上。 更多信息请参阅“[关于组织仪表板](/articles/about-your-organization-dashboard/)”。

在设置状态时，您也可以让人们知道您在 {% data variables.product.product_name %} 上的可用性有限。

![@提及的用户名在用户名旁边显示“忙碌”注释](/assets/images/help/profile/username-with-limited-availability-text.png)

![申请的审查者在用户名旁边显示“忙碌”注释](/assets/images/help/profile/request-a-review-limited-availability-status.png)

如果选择“Busy（忙碌）”选项，当人们 @提及您的用户名、向您分配议题或拉取请求或者申请您进行拉取请求审查时，您的用户名旁边将会出现一条表示您在忙碌的注释。 您还将被排除在分配给您所属的任何团队的拉取请求的自动审核任务之外。 更多信息请参阅“[管理团队的代码审查设置](/organizations/organizing-members-into-teams/managing-code-review-settings-for-your-team)”。

1. 在 {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom_the_website %}{% else %}{% data variables.product.product_name %}{% endif %}的右上角，单击您的头像，然后单击 **Set your status（设置状态）**，或者，如果您已经设置了状态，请单击您的当前状态。 ![个人资料中用于设置状态的按钮](/assets/images/help/profile/set-status-on-profile.png)
2. 要添加自定义文本到状态，请单击文本字段，然后输入状态消息。 ![用于输入状态消息的字段](/assets/images/help/profile/type-a-status-message.png)
3. （可选）要设置表情符号状态，请单击笑脸图标并从列表中选择表情符号。 ![用于选择表情符号状态的按钮](/assets/images/help/profile/select-emoji-status.png)
4. （可选）如果想表示您的可用性受限，请选择“Busy（忙碌）”。 ![在编辑状态选项中选择的忙碌选项](/assets/images/help/profile/limited-availability-status.png)
5. 使用 **Clear status（清除状态）**下拉菜单，选择状态的到期时间。 如果不选择状态到期时间，您的状态将保持到您清除或编辑状态为止。 ![用于选择状态到期时间的下拉菜单](/assets/images/help/profile/status-expiration.png)
6. 使用下拉菜单，单击您要向其显示状态的组织。 如果不选择组织，您的状态将是公共的。 ![用于选择您的状态可见者的下拉菜单](/assets/images/help/profile/status-visibility.png)
7. 单击 **Set status（设置状态）**。 ![用于设置状态的按钮](/assets/images/help/profile/set-status-button.png)

{% ifversion fpt or ghec %}
## 在个人资料中显示徽章

当您参与某些计划时， {% data variables.product.prodname_dotcom %} 会自动在您的个人资料中显示徽章。

| 徽章                                                                                                            | 计划                                                             | 描述                                                                                                                                                                                                                                                                                                                                                |
| ------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ![Mars 2020 Helicopter 贡献者徽章图标](/assets/images/help/profile/badge-mars-2020-small.png)                        | **Mars 2020 Helicopter 贡献者**                                   | 如果您在提交历史记录中撰写了对 Mars 2020 Helicopter 任务中使用的开放源码库相关标记的任何提交， 您将在个人资料上获得 Mars 2020 Helicopter 贡献者徽章。 悬停在徽章上会显示您参与的任务中使用的几个仓库。 要查看符合您徽章资格的完整仓库列表，请参阅“[Mars 2020 Helicopter 贡献者徽章的合格仓库列表](/github/setting-up-and-managing-your-github-profile/personalizing-your-profile#list-of-qualifying-repositories-for-mars-2020-helicopter-contributor-badge)”。 |
| ![Arctic Code Vault 贡献者徽章图标](/assets/images/help/profile/badge-arctic-code-vault-small.png)                   | **{% data variables.product.prodname_arctic_vault %} 贡献者**   | 如果您在存档于 2020 Arctic Vault 计划的仓库默认分支上编写了任何提交，您的个人资料上会获得一个 {% data variables.product.prodname_arctic_vault %} 贡献者徽章。 悬停在徽章上显示您参与的属于计划一部分的几个仓库。 有关该计划的更多信息，请参阅 [{% data variables.product.prodname_archive %}](https://archiveprogram.github.com)。                                                                                                 |
| ![{% data variables.product.prodname_dotcom %} 赞助者徽章图标](/assets/images/help/profile/badge-sponsors-small.png) | **{% data variables.product.prodname_dotcom %} 赞助者**           | 如果您通过 {% data variables.product.prodname_sponsors %} 赞助了开源贡献者，您的个人资料中将获得一个 {% data variables.product.prodname_dotcom %} 赞助者徽章。 单击徽章将带您到个人资料的 **Sponsoring（赞助）**选项卡。 更多信息请参阅“[赞助开源贡献者](/github/supporting-the-open-source-community-with-github-sponsors/sponsoring-open-source-contributors)”。                                                  |
| {% octicon "cpu" aria-label="The Developer Program icon" %}                                                   | **开发者计划成员**                                                    | 如果您是 {% data variables.product.prodname_dotcom %} 开发者计划的注册成员，使用 {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %}{% else %}{% data variables.product.product_name %}{% endif %} API 构建应用程序，您的个人资料上将获得开发者计划成员徽章。 有关 {% data variables.product.prodname_dotcom %} 开发者计划的更多信息，请参阅 [GitHub 开发者](/program/)。                 |
| {% octicon "star-fill" aria-label="The star icon" %}                                                          | **Pro**                                                        | 如果您使用 {% data variables.product.prodname_pro %}，您的个人资料中将获得一个 PRO 徽章。 有关 {% data variables.product.prodname_pro %} 的更多信息，请参阅“[{% data variables.product.prodname_dotcom %} 的产品](/github/getting-started-with-github/githubs-products#github-pro)”。                                                                                               |
| {% octicon "lock" aria-label="The lock icon" %}                                                               | **Security Bug Bounty Hunter**                                 | 如果你帮助寻找安全漏洞，您的个人资料上将获得 Security Bug Bounty Hunter 徽章。 有关 {% data variables.product.prodname_dotcom %} 安全计划的更多信息，请参阅 [{% data variables.product.prodname_dotcom %} 安全性](https://bounty.github.com/)。                                                                                                                                               |
| {% octicon "mortar-board" aria-label="The mortar-board icon" %}                                               | **{% data variables.product.prodname_dotcom %} Campus Expert** | 如果您参加 {% data variables.product.prodname_campus_program %}，您的个人资料上将获得 {% data variables.product.prodname_dotcom %} 校园专家徽章。 有关校园专家计划的更多信息，请参阅 [Campus Experts](https://education.github.com/experts)。                                                                                                                                            |

## 在个人资料中禁用徽章

您可以对您参与的 {% data variables.product.prodname_dotcom %} 计划禁用某些徽章，包括 PRO、{% data variables.product.prodname_arctic_vault %} 和 Mars 2020 Helicopter 贡献者徽章。

{% data reusables.user-settings.access_settings %}
2. 在“Profile settings（个人资料设置）”下，取消选择您想要禁用的徽章。 ![不再在个人资料中显示徽章的复选框](/assets/images/help/profile/profile-badge-settings.png)
3. 单击 **Update preferences（更新首选项）**。

{% endif %}

## Mars 2020 Helicopter 贡献者徽章的合格仓库列表

如果您为下面一个或多个仓库列出的标记撰写了提交历史记录中的任何提交，您的个人资料中将获得 Mars 2020 Helicopter 贡献者徽章。 撰写的提交必须有验证过的电子邮件地址，该电子邮件地址在 {% data variables.product.prodname_dotcom %} 确定符合条件的贡献时与您帐户关联，表示该贡献归属于您。 您可以是提交的原始作者或 [共同作者](/pull-requests/committing-changes-to-your-project/creating-and-editing-commits/creating-a-commit-with-multiple-authors)。 将来对经过验证的电子邮件的更改不会对徽章产生影响。 我们根据从美国航天局喷气推进实验室获得的资料编制了清单。

| {% data variables.product.prodname_dotcom %} 仓库                               | 版本        | 标记                                                                                                         |
| ----------------------------------------------------------------------------- | --------- | ---------------------------------------------------------------------------------------------------------- |
| [torvalds/linux](https://github.com/torvalds/linux)                           | 3.4       | [v3.4](https://github.com/torvalds/linux/releases/tag/v3.4)                                                |
| [python/cpython](https://github.com/python/cpython)                           | 3.9.2     | [v3.9.2](https://github.com/python/cpython/releases/tag/v3.9.2)                                            |
| [boto/boto3](https://github.com/boto/boto3)                                   | 1.17.17   | [1.17.17](https://github.com/boto/boto3/releases/tag/1.17.17)                                              |
| [boto/botocore](https://github.com/boto/botocore)                             | 1.20.11   | [1.20.11](https://github.com/boto/botocore/releases/tag/1.20.11)                                           |
| [certifi/python-certifi](https://github.com/certifi/python-certifi)           | 2020.12.5 | [2020.12.05](https://github.com/certifi/python-certifi/releases/tag/2020.12.05)                            |
| [chardet/chardet](https://github.com/chardet/chardet)                         | 4.0.0     | [4.0.0](https://github.com/chardet/chardet/releases/tag/4.0.0)                                             |
| [matplotlib/cycler](https://github.com/matplotlib/cycler)                     | 0.10.0    | [v0.10.0](https://github.com/matplotlib/cycler/releases/tag/v0.10.0)                                       |
| [elastic/elasticsearch-py](https://github.com/elastic/elasticsearch-py)       | 6.8.1     | [6.8.1](https://github.com/elastic/elasticsearch-py/releases/tag/6.8.1)                                    |
| [ianare/exif-py](https://github.com/ianare/exif-py)                           | 2.3.2     | [2.3.2](https://github.com/ianare/exif-py/releases/tag/2.3.2)                                              |
| [kjd/idna](https://github.com/kjd/idna)                                       | 2.10      | [v2.10](https://github.com/kjd/idna/releases/tag/v2.10)                                                    |
| [jmespath/jmespath.py](https://github.com/jmespath/jmespath.py)               | 0.10.0    | [0.10.0](https://github.com/jmespath/jmespath.py/releases/tag/0.10.0)                                      |
| [nucleic/kiwi](https://github.com/nucleic/kiwi)                               | 1.3.1     | [1.3.1](https://github.com/nucleic/kiwi/releases/tag/1.3.1)                                                |
| [matplotlib/matplotlib](https://github.com/matplotlib/matplotlib)             | 3.3.4     | [v3.3.4](https://github.com/matplotlib/matplotlib/releases/tag/v3.3.4)                                     |
| [numpy/numpy](https://github.com/numpy/numpy)                                 | 1.20.1    | [v1.20.1](https://github.com/numpy/numpy/releases/tag/v1.20.1)                                             |
| [opencv/opencv-python](https://github.com/opencv/opencv-python)               | 4.5.1.48  | [48](https://github.com/opencv/opencv-python/releases/tag/48)                                              |
| [python-pillow/Pillow](https://github.com/python-pillow/Pillow)               | 8.1.0     | [8.1.0](https://github.com/python-pillow/Pillow/releases/tag/8.1.0)                                        |
| [pycurl/pycurl](https://github.com/pycurl/pycurl)                             | 7.43.0.6  | [REL_7_43_0_6](https://github.com/pycurl/pycurl/releases/tag/REL_7_43_0_6)                             |
| [pyparsing/pyparsing](https://github.com/pyparsing/pyparsing)                 | 2.4.7     | [pyparsing_2.4.7](https://github.com/pyparsing/pyparsing/releases/tag/pyparsing_2.4.7)                     |
| [pyserial/pyserial](https://github.com/pyserial/pyserial)                     | 3.5       | [v3.5](https://github.com/pyserial/pyserial/releases/tag/v3.5)                                             |
| [dateutil/dateutil](https://github.com/dateutil/dateutil)                     | 2.8.1     | [2.8.1](https://github.com/dateutil/dateutil/releases/tag/2.8.1)                                           |
| [yaml/pyyaml ](https://github.com/yaml/pyyaml)                                | 5.4.1     | [5.4.1](https://github.com/yaml/pyyaml/releases/tag/5.4.1)                                                 |
| [psf/requests](https://github.com/psf/requests)                               | 2.25.1    | [v2.25.1](https://github.com/psf/requests/releases/tag/v2.25.1)                                            |
| [boto/s3transfer](https://github.com/boto/s3transfer)                         | 0.3.4     | [0.3.4](https://github.com/boto/s3transfer/releases/tag/0.3.4)                                             |
| [enthought/scimath](https://github.com/enthought/scimath)                     | 4.2.0     | [4.2.0](https://github.com/enthought/scimath/releases/tag/4.2.0)                                           |
| [scipy/scipy](https://github.com/scipy/scipy)                                 | 1.6.1     | [v1.6.1](https://github.com/scipy/scipy/releases/tag/v1.6.1)                                               |
| [benjaminp/six](https://github.com/benjaminp/six)                             | 1.15.0    | [1.15.0](https://github.com/benjaminp/six/releases/tag/1.15.0)                                             |
| [enthought/traits](https://github.com/enthought/traits)                       | 6.2.0     | [6.2.0](https://github.com/enthought/traits/releases/tag/6.2.0)                                            |
| [urllib3/urllib3](https://github.com/urllib3/urllib3)                         | 1.26.3    | [1.26.3](https://github.com/urllib3/urllib3/releases/tag/1.26.3)                                           |
| [python-attrs/attrs](https://github.com/python-attrs/attrs)                   | 19.3.0    | [19.3.0](https://github.com/python-attrs/attrs/releases/tag/19.3.0)                                        |
| [CheetahTemplate3/cheetah3](https://github.com/CheetahTemplate3/cheetah3/)    | 3.2.4     | [3.2.4](https://github.com/CheetahTemplate3/cheetah3/releases/tag/3.2.4)                                   |
| [pallets/click](https://github.com/pallets/click)                             | 7.0       | [7.0](https://github.com/pallets/click/releases/tag/7.0)                                                   |
| [pallets/flask](https://github.com/pallets/flask)                             | 1.1.1     | [1.1.1](https://github.com/pallets/flask/releases/tag/1.1.1)                                               |
| [flask-restful/flask-restful](https://github.com/flask-restful/flask-restful) | 0.3.7     | [0.3.7](https://github.com/flask-restful/flask-restful/releases/tag/0.3.7)                                 |
| [pytest-dev/iniconfig](https://github.com/pytest-dev/iniconfig)               | 1.0.0     | [v1.0.0](https://github.com/pytest-dev/iniconfig/releases/tag/v1.0.0)                                      |
| [pallets/itsdangerous](https://github.com/pallets/itsdangerous)               | 1.1.0     | [1.1.0](https://github.com/pallets/itsdangerous/releases/tag/1.1.0)                                        |
| [pallets/jinja](https://github.com/pallets/jinja)                             | 2.10.3    | [2.10.3](https://github.com/pallets/jinja/releases/tag/2.10.3)                                             |
| [lxml/lxml](https://github.com/lxml/lxml)                                     | 4.4.1     | [lxml-4.4.1](https://github.com/lxml/lxml/releases/tag/lxml-4.4.1)                                         |
| [Python-Markdown/markdown](https://github.com/Python-Markdown/markdown)       | 3.1.1     | [3.1.1](https://github.com/Python-Markdown/markdown/releases/tag/3.1.1)                                    |
| [pallets/markupsafe](https://github.com/pallets/markupsafe)                   | 1.1.1     | [1.1.1](https://github.com/pallets/markupsafe/releases/tag/1.1.1)                                          |
| [pypa/packaging](https://github.com/pypa/packaging)                           | 19.2      | [19.2](https://github.com/pypa/packaging/releases/tag/19.2)                                                |
| [pexpect/pexpect](https://github.com/pexpect/pexpect)                         | 4.7.0     | [4.7.0](https://github.com/pexpect/pexpect/releases/tag/4.7.0)                                             |
| [pytest-dev/pluggy](https://github.com/pytest-dev/pluggy)                     | 0.13.0    | [0.13.0](https://github.com/pytest-dev/pluggy/releases/tag/0.13.0)                                         |
| [pexpect/ptyprocess](https://github.com/pexpect/ptyprocess)                   | 0.6.0     | [0.6.0](https://github.com/pexpect/ptyprocess/releases/tag/0.6.0)                                          |
| [pytest-dev/py](https://github.com/pytest-dev/py)                             | 1.8.0     | [1.8.0](https://github.com/pytest-dev/py/releases/tag/1.8.0)                                               |
| [pyparsing/pyparsing](https://github.com/pyparsing/pyparsing)                 | 2.4.5     | [pyparsing_2.4.5](https://github.com/pyparsing/pyparsing/releases/tag/pyparsing_2.4.5)                     |
| [pytest-dev/pytest](https://github.com/pytest-dev/pytest)                     | 5.3.0     | [5.3.0](https://github.com/pytest-dev/pytest/releases/tag/5.3.0)                                           |
| [stub42/pytz](https://github.com/stub42/pytz)                                 | 2019.3    | [release_2019.3](https://github.com/stub42/pytz/releases/tag/release_2019.3)                               |
| [uiri/toml](https://github.com/uiri/toml)                                     | 0.10.0    | [0.10.0](https://github.com/uiri/toml/releases/tag/0.10.0)                                                 |
| [pallets/werkzeug](https://github.com/pallets/werkzeug)                       | 0.16.0    | [0.16.0](https://github.com/pallets/werkzeug/releases/tag/0.16.0)                                          |
| [dmnfarrell/tkintertable](https://github.com/dmnfarrell/tkintertable)         | 1.2       | [v1.2](https://github.com/dmnfarrell/tkintertable/releases/tag/v1.2)                                       |
| [wxWidgets/wxPython-Classic](https://github.com/wxWidgets/wxPython-Classic)   | 2.9.1.1   | [wxPy-2.9.1.1](https://github.com/wxWidgets/wxPython-Classic/releases/tag/wxPy-2.9.1.1)                    |
| [nasa/fprime](https://github.com/nasa/fprime)                                 | 1.3       | [NASA-v1.3](https://github.com/nasa/fprime/releases/tag/NASA-v1.3)                                         |
| [nucleic/cppy](https://github.com/nucleic/cppy)                               | 1.1.0     | [1.1.0](https://github.com/nucleic/cppy/releases/tag/1.1.0)                                                |
| [opencv/opencv](https://github.com/opencv/opencv)                             | 4.5.1     | [4.5.1](https://github.com/opencv/opencv/releases/tag/4.5.1)                                               |
| [curl/curl](https://github.com/curl/curl)                                     | 7.72.0    | [curl-7_72_0](https://github.com/curl/curl/releases/tag/curl-7_72_0)                                     |
| [madler/zlib](https://github.com/madler/zlib)                                 | 1.2.11    | [v1.2.11](https://github.com/madler/zlib/releases/tag/v1.2.11)                                             |
| [apache/lucene](https://github.com/apache/lucene)                             | 7.7.3     | [releases/lucene-solr/7.7.3](https://github.com/apache/lucene/releases/tag/releases%2Flucene-solr%2F7.7.3) |
| [yaml/libyaml](https://github.com/yaml/libyaml)                               | 0.2.5     | [0.2.5](https://github.com/yaml/libyaml/releases/tag/0.2.5)                                                |
| [elastic/elasticsearch](https://github.com/elastic/elasticsearch)             | 6.8.1     | [v6.8.1](https://github.com/elastic/elasticsearch/releases/tag/v6.8.1)                                     |
| [twbs/bootstrap](https://github.com/twbs/bootstrap)                           | 4.3.1     | [v4.3.1](https://github.com/twbs/bootstrap/releases/tag/v4.3.1)                                            |
| [vuejs/vue](https://github.com/vuejs/vue)                                     | 2.6.10    | [v2.6.10](https://github.com/vuejs/vue/releases/tag/v2.6.10)                                               |
| [carrotsearch/hppc](https://github.com/carrotsearch/hppc)                     | 0.7.1     | [0.7.1](https://github.com/carrotsearch/hppc/releases/tag/0.7.1)                                           |
| [JodaOrg/joda-time](https://github.com/JodaOrg/joda-time)                     | 2.10.1    | [v2.10.1](https://github.com/JodaOrg/joda-time/releases/tag/v2.10.1)                                       |
| [tdunning/t-digest](https://github.com/tdunning/t-digest)                     | 3.2       | [t-digest-3.2](https://github.com/tdunning/t-digest/releases/tag/t-digest-3.2)                             |
| [HdrHistogram/HdrHistogram](https://github.com/HdrHistogram/HdrHistogram)     | 2.1.9     | [HdrHistogram-2.1.9](https://github.com/HdrHistogram/HdrHistogram/releases/tag/HdrHistogram-2.1.9)         |
| [locationtech/spatial4j](https://github.com/locationtech/spatial4j)           | 0.7       | [spatial4j-0.7](https://github.com/locationtech/spatial4j/releases/tag/spatial4j-0.7)                      |
| [locationtech/jts](https://github.com/locationtech/jts)                       | 1.15.0    | [jts-1.15.0](https://github.com/locationtech/jts/releases/tag/jts-1.15.0)                                  |
| [apache/logging-log4j2](https://github.com/apache/logging-log4j2)             | 2.11      | [log4j-2.11.0](https://github.com/apache/logging-log4j2/releases/tag/log4j-2.11.0)                         |

## 延伸阅读

- "[关于个人资料](/articles/about-your-profile)"
