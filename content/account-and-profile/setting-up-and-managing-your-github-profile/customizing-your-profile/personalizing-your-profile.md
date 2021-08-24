---
title: Personalizing your profile
intro: 'You can share information about yourself with other {% data variables.product.product_name %} users by setting a profile picture and adding a bio to your profile.'
redirect_from:
  - /articles/adding-a-bio-to-your-profile/
  - /articles/setting-your-profile-picture/
  - /articles/how-do-i-set-up-my-profile-picture/
  - /articles/gravatar-problems/
  - /articles/how-do-i-set-up-my-avatar/
  - /articles/personalizing-your-profile
  - /github/setting-up-and-managing-your-github-profile/personalizing-your-profile
  - /github/setting-up-and-managing-your-github-profile/customizing-your-profile/personalizing-your-profile
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
topics:
  - Profiles
shortTitle: Personalize
---
## Changing your profile picture

Your profile picture helps identify you across {% data variables.product.product_name %} in pull requests, comments, contributions pages, and graphs.

When you sign up for an account, {% data variables.product.product_name %} provides you with a randomly generated "identicon". [Your identicon](https://github.com/blog/1586-identicons) generates from a hash of your user ID, so there's no way to control its color or pattern. You can replace your identicon with an image that represents you.

{% tip %}

**Tip**: Your profile picture should be a PNG, JPG, or GIF file under 1 MB in size. For the best quality rendering, we recommend keeping the image at about 500 by 500 pixels.

{% endtip %}

### Setting a profile picture

{% data reusables.user_settings.access_settings %}
2. Under **Profile Picture**, click {% octicon "pencil" aria-label="The edit icon" %} **Edit**.
![Edit profile picture](/assets/images/help/profile/edit-profile-photo.png)
3. Click **Upload a photo...**.
![Update profile picture](/assets/images/help/profile/edit-profile-picture-options.png)
3. Crop your picture. When you're done, click **Set new profile picture**.
	![Crop uploaded photo](/assets/images/help/profile/avatar_crop_and_save.png)

### Resetting your profile picture to the identicon

{% data reusables.user_settings.access_settings %}
2. Under **Profile Picture**, click {% octicon "pencil" aria-label="The edit icon" %} **Edit**.
![Edit profile picture](/assets/images/help/profile/edit-profile-photo.png)
3. To revert to your identicon, click **Remove photo**. If your email address is associated with a [Gravatar](https://en.gravatar.com/), you cannot revert to your identicon. Click **Revert to Gravatar** instead.
![Update profile picture](/assets/images/help/profile/edit-profile-picture-options.png)

## Changing your profile name

You can change the name that is displayed on your profile. This name may also be displayed next to comments you make on private repositories owned by an organization. For more information, see "[Managing the display of member names in your organization](/articles/managing-the-display-of-member-names-in-your-organization)."

{% data reusables.user_settings.access_settings %}
2. Under "Name", type the name you want to be displayed on your profile.
  ![Name field in profile settings](/assets/images/help/profile/name-field.png)

## Adding a bio to your profile

Add a bio to your profile to share information about yourself with other {% data variables.product.product_name %} users. With the help of [@mentions](/articles/basic-writing-and-formatting-syntax) and emoji, you can include information about where you currently or have previously worked, what type of work you do, or even what kind of coffee you drink.

{% ifversion fpt or ghes %}

For a longer-form and more prominent way of displaying customized information about yourself, you can also use a profile README. For more information, see "[Managing your profile README](/github/setting-up-and-managing-your-github-profile/managing-your-profile-readme)."

{% endif %}

{% note %}

**Note:**
  If you have the activity overview section enabled for your profile and you @mention an organization you're a member of in your profile bio, then that organization will be featured first in your activity overview. For more information, see "[Showing an overview of your activity on your profile](/articles/showing-an-overview-of-your-activity-on-your-profile)."

{% endnote %}

{% data reusables.user_settings.access_settings %}
2. Under **Bio**, add the content that you want displayed on your profile. The bio field is limited to 160 characters.
	![Update bio on profile](/assets/images/help/profile/bio-field.png)

  {% tip %}

  **Tip:** When you @mention an organization, only those that you're a member of will autocomplete. You can still @mention organizations that you're not a member of, like a previous employer, but the organization name won't autocomplete for you.

  {% endtip %}

3. Click **Update profile**.
	![Update profile button](/assets/images/help/profile/update-profile-button.png)

## Setting a status

You can set a status to display information about your current availability on {% data variables.product.product_name %}. Your status will show:
- on your {% data variables.product.product_name %} profile page.
- when people hover over your username or avatar on {% data variables.product.product_name %}.
- on a team page for a team where you're a team member. For more information, see "[About teams](/articles/about-teams/#team-pages)."
- on the organization dashboard in an organization where you're a member. For more information, see "[About your organization dashboard](/articles/about-your-organization-dashboard/)."

When you set your status, you can also let people know that you have limited availability on {% data variables.product.product_name %}.

![At-mentioned username shows "busy" note next to username](/assets/images/help/profile/username-with-limited-availability-text.png)

![Requested reviewer shows "busy" note next to username](/assets/images/help/profile/request-a-review-limited-availability-status.png)

If you select the "Busy" option, when people @mention your username, assign you an issue or pull request, or request a pull request review from you, a note next to your username will show that you're busy.

1. In the top right corner of {% data variables.product.product_name %}, click your profile photo, then click **Set your status** or, if you already have a status set, click your current status.
  ![Button on profile to set your status](/assets/images/help/profile/set-status-on-profile.png)
2. To add custom text to your status, click in the text field and type a status message.
  ![Field to type a status message](/assets/images/help/profile/type-a-status-message.png)
3. Optionally, to set an emoji status, click the smiley icon and select an emoji from the list.
  ![Button to select an emoji status](/assets/images/help/profile/select-emoji-status.png)
4. Optionally, if you'd like to share that you have limited availability, select "Busy."
  ![Busy option selected in Edit status options](/assets/images/help/profile/limited-availability-status.png)
5. Use the **Clear status** drop-down menu, and select when you want your status to expire. If you don't select a status expiration, you will keep your status until you clear or edit your status.
  ![Drop down menu to choose when your status expires](/assets/images/help/profile/status-expiration.png)
6. Use the drop-down menu and click the organization you want your status visible to. If you don't select an organization, your status will be public.
  ![Drop down menu to choose who your status is visible to](/assets/images/help/profile/status-visibility.png)
7. Click **Set status**.
  ![Button to set status](/assets/images/help/profile/set-status-button.png)

{% ifversion fpt %}
## Displaying badges on your profile

When you participate in certain programs, {% data variables.product.prodname_dotcom %} automatically displays a badge on your profile.

| Badge | Program | Description |
| --- | --- | --- |
| ![Mars 2020 Helicopter Contributor badge icon](/assets/images/help/profile/badge-mars-2020-small.png) | **Mars 2020 Helicopter Contributor**  | If you authored any commit(s) present in the commit history for the relevant tag of an open source library used in the Mars 2020 Helicopter Mission, you'll get a Mars 2020 Helicopter Contributor badge on your profile. Hovering over the badge shows you several of the repositories you contributed to that were used in the mission. For the full list of repositories that will qualify you for the badge, see "[List of qualifying repositories for Mars 2020 Helicopter Contributor badge](/github/setting-up-and-managing-your-github-profile/personalizing-your-profile#list-of-qualifying-repositories-for-mars-2020-helicopter-contributor-badge)." |
| ![Arctic Code Vault Contributor badge icon](/assets/images/help/profile/badge-arctic-code-vault-small.png) | **{% data variables.product.prodname_arctic_vault %} Contributor** | If you authored any commit(s) on the default branch of a repository that was archived in the 2020 Arctic Vault program, you'll get an {% data variables.product.prodname_arctic_vault %} Contributor badge on your profile. Hovering over the badge shows you several of the repositories you contributed to that were part of the program. For more information on the program, see [{% data variables.product.prodname_archive %}](https://archiveprogram.github.com). |
| ![{% data variables.product.prodname_dotcom %} Sponsor badge icon](/assets/images/help/profile/badge-sponsors-small.png) | **{% data variables.product.prodname_dotcom %} Sponsor**  | If you sponsored an open source contributor through {% data variables.product.prodname_sponsors %} you'll get a {% data variables.product.prodname_dotcom %} Sponsor badge on your profile. Clicking the badge takes you to the **Sponsoring** tab of your profile. For more information, see "[Sponsoring open source contributors](/github/supporting-the-open-source-community-with-github-sponsors/sponsoring-open-source-contributors)." |
| {% octicon "cpu" aria-label="The Developer Program icon" %} | **Developer Program Member** | If you're a registered member of the {% data variables.product.prodname_dotcom %} Developer Program, building an app with the {% data variables.product.prodname_dotcom %} API, you'll get a Developer Program Member badge on your profile. For more information on the {% data variables.product.prodname_dotcom %} Developer Program, see [GitHub Developer](/program/). |
| {% octicon "star-fill" aria-label="The star icon" %} | **Pro** | If you use {% data variables.product.prodname_pro %} you'll get a PRO badge on your profile. For more information about {% data variables.product.prodname_pro %}, see "[{% data variables.product.prodname_dotcom %}'s products](/github/getting-started-with-github/githubs-products#github-pro)." |
| {% octicon "lock" aria-label="The lock icon" %} | **Security Bug Bounty Hunter** | If you helped out hunting down security vulnerabilities, you'll get a Security Bug Bounty Hunter badge on your profile. For more information about the {% data variables.product.prodname_dotcom %} Security program, see [{% data variables.product.prodname_dotcom %} Security](https://bounty.github.com/). |
| {% octicon "mortar-board" aria-label="The mortar-board icon" %} | **Github Campus Expert** | If you participate in the {% data variables.product.prodname_dotcom %} Campus Program you'll get a {% data variables.product.prodname_dotcom %} Campus Expert badge on your profile. For more information about the Campus Experts program, see [Campus Experts](https://education.github.com/experts). |

## Disabling badges on your profile

You can disable some of the badges for {% data variables.product.prodname_dotcom %} programs you're participating in, including the PRO, {% data variables.product.prodname_arctic_vault %} and Mars 2020 Helicopter Contributor badges.

{% data reusables.user_settings.access_settings %}
2. Under "Profile settings", deselect the badge you want you disable.
  ![Checkbox to no longer display a badge on your profile](/assets/images/help/profile/profile-badge-settings.png)
3. Click **Update preferences**.

{% endif %}

## List of qualifying repositories for Mars 2020 Helicopter Contributor badge

If you authored any commit(s) present in the commit history for the listed tag of one or more of the repositories below, you'll receive the Mars 2020 Helicopter Contributor badge on your profile. The authored commit must be with a verified email address, associated with your account at the time {% data variables.product.prodname_dotcom %} determined the eligible contributions, in order to be attributed to you. You can be the original author or [one of the co-authors](/github/committing-changes-to-your-project/creating-and-editing-commits/creating-a-commit-with-multiple-authors) of the commit. Future changes to verified emails will not have an effect on the badge. We built the list based on information received from NASA's Jet Propulsion Laboratory.

| {% data variables.product.prodname_dotcom %} Repository | Version | Tag |
|---|---|---|
| [torvalds/linux](https://github.com/torvalds/linux) | 3.4 | [v3.4](https://github.com/torvalds/linux/releases/tag/v3.4) |
| [python/cpython](https://github.com/python/cpython) | 3.9.2 | [v3.9.2](https://github.com/python/cpython/releases/tag/v3.9.2) |
| [boto/boto3](https://github.com/boto/boto3) | 1.17.17 | [1.17.17](https://github.com/boto/boto3/releases/tag/1.17.17) |
| [boto/botocore](https://github.com/boto/botocore) | 1.20.11 | [1.20.11](https://github.com/boto/botocore/releases/tag/1.20.11) |
| [certifi/python-certifi](https://github.com/certifi/python-certifi) | 2020.12.5 | [2020.12.05](https://github.com/certifi/python-certifi/releases/tag/2020.12.05) |
| [chardet/chardet](https://github.com/chardet/chardet) | 4.0.0 | [4.0.0](https://github.com/chardet/chardet/releases/tag/4.0.0) |
| [matplotlib/cycler](https://github.com/matplotlib/cycler) | 0.10.0 | [v0.10.0](https://github.com/matplotlib/cycler/releases/tag/v0.10.0) |
| [elastic/elasticsearch-py](https://github.com/elastic/elasticsearch-py) | 6.8.1 | [6.8.1](https://github.com/elastic/elasticsearch-py/releases/tag/6.8.1) |
| [ianare/exif-py](https://github.com/ianare/exif-py) | 2.3.2 | [2.3.2](https://github.com/ianare/exif-py/releases/tag/2.3.2) |
| [kjd/idna](https://github.com/kjd/idna) | 2.10 | [v2.10](https://github.com/kjd/idna/releases/tag/v2.10) |
| [jmespath/jmespath.py](https://github.com/jmespath/jmespath.py) | 0.10.0 | [0.10.0](https://github.com/jmespath/jmespath.py/releases/tag/0.10.0) |
| [nucleic/kiwi](https://github.com/nucleic/kiwi) | 1.3.1 | [1.3.1](https://github.com/nucleic/kiwi/releases/tag/1.3.1) |
| [matplotlib/matplotlib](https://github.com/matplotlib/matplotlib) | 3.3.4 | [v3.3.4](https://github.com/matplotlib/matplotlib/releases/tag/v3.3.4) |
| [numpy/numpy](https://github.com/numpy/numpy) | 1.20.1 | [v1.20.1](https://github.com/numpy/numpy/releases/tag/v1.20.1) |
| [opencv/opencv-python](https://github.com/opencv/opencv-python) | 4.5.1.48 | [48](https://github.com/opencv/opencv-python/releases/tag/48) |
| [python-pillow/Pillow](https://github.com/python-pillow/Pillow) | 8.1.0 | [8.1.0](https://github.com/python-pillow/Pillow/releases/tag/8.1.0) |
| [pycurl/pycurl](https://github.com/pycurl/pycurl) | 7.43.0.6 | [REL_7_43_0_6](https://github.com/pycurl/pycurl/releases/tag/REL_7_43_0_6) |
| [pyparsing/pyparsing](https://github.com/pyparsing/pyparsing) | 2.4.7 | [pyparsing_2.4.7](https://github.com/pyparsing/pyparsing/releases/tag/pyparsing_2.4.7) |
| [pyserial/pyserial](https://github.com/pyserial/pyserial) | 3.5 | [v3.5](https://github.com/pyserial/pyserial/releases/tag/v3.5) |
| [dateutil/dateutil](https://github.com/dateutil/dateutil) | 2.8.1 | [2.8.1](https://github.com/dateutil/dateutil/releases/tag/2.8.1) |
| [yaml/pyyaml ](https://github.com/yaml/pyyaml) | 5.4.1 | [5.4.1](https://github.com/yaml/pyyaml/releases/tag/5.4.1) |
| [psf/requests](https://github.com/psf/requests) | 2.25.1 | [v2.25.1](https://github.com/psf/requests/releases/tag/v2.25.1) |
| [boto/s3transfer](https://github.com/boto/s3transfer) | 0.3.4 | [0.3.4](https://github.com/boto/s3transfer/releases/tag/0.3.4) |
| [enthought/scimath](https://github.com/enthought/scimath) | 4.2.0 | [4.2.0](https://github.com/enthought/scimath/releases/tag/4.2.0) |
| [scipy/scipy](https://github.com/scipy/scipy) | 1.6.1 | [v1.6.1](https://github.com/scipy/scipy/releases/tag/v1.6.1) |
| [benjaminp/six](https://github.com/benjaminp/six) | 1.15.0 | [1.15.0](https://github.com/benjaminp/six/releases/tag/1.15.0) |
| [enthought/traits](https://github.com/enthought/traits) | 6.2.0 | [6.2.0](https://github.com/enthought/traits/releases/tag/6.2.0) |
| [urllib3/urllib3](https://github.com/urllib3/urllib3) | 1.26.3 | [1.26.3](https://github.com/urllib3/urllib3/releases/tag/1.26.3) |
| [python-attrs/attrs](https://github.com/python-attrs/attrs) | 19.3.0 | [19.3.0](https://github.com/python-attrs/attrs/releases/tag/19.3.0) |
| [CheetahTemplate3/cheetah3](https://github.com/CheetahTemplate3/cheetah3/) | 3.2.4 | [3.2.4](https://github.com/CheetahTemplate3/cheetah3/releases/tag/3.2.4) |
| [pallets/click](https://github.com/pallets/click) | 7.0 | [7.0](https://github.com/pallets/click/releases/tag/7.0) |
| [pallets/flask](https://github.com/pallets/flask) | 1.1.1 | [1.1.1](https://github.com/pallets/flask/releases/tag/1.1.1) |
| [flask-restful/flask-restful](https://github.com/flask-restful/flask-restful) | 0.3.7 | [0.3.7](https://github.com/flask-restful/flask-restful/releases/tag/0.3.7) |
| [pytest-dev/iniconfig](https://github.com/pytest-dev/iniconfig) | 1.0.0 | [v1.0.0](https://github.com/pytest-dev/iniconfig/releases/tag/v1.0.0) |
| [pallets/itsdangerous](https://github.com/pallets/itsdangerous) | 1.1.0 | [1.1.0](https://github.com/pallets/itsdangerous/releases/tag/1.1.0) |
| [pallets/jinja](https://github.com/pallets/jinja) | 2.10.3 | [2.10.3](https://github.com/pallets/jinja/releases/tag/2.10.3) |
| [lxml/lxml](https://github.com/lxml/lxml) | 4.4.1 | [lxml-4.4.1](https://github.com/lxml/lxml/releases/tag/lxml-4.4.1) |
| [Python-Markdown/markdown](https://github.com/Python-Markdown/markdown) | 3.1.1 | [3.1.1](https://github.com/Python-Markdown/markdown/releases/tag/3.1.1) |
| [pallets/markupsafe](https://github.com/pallets/markupsafe) | 1.1.1 | [1.1.1](https://github.com/pallets/markupsafe/releases/tag/1.1.1) |
| [pypa/packaging](https://github.com/pypa/packaging) | 19.2 | [19.2](https://github.com/pypa/packaging/releases/tag/19.2) |
| [pexpect/pexpect](https://github.com/pexpect/pexpect) | 4.7.0 | [4.7.0](https://github.com/pexpect/pexpect/releases/tag/4.7.0) |
| [pytest-dev/pluggy](https://github.com/pytest-dev/pluggy) | 0.13.0 | [0.13.0](https://github.com/pytest-dev/pluggy/releases/tag/0.13.0) |
| [pexpect/ptyprocess](https://github.com/pexpect/ptyprocess) | 0.6.0 | [0.6.0](https://github.com/pexpect/ptyprocess/releases/tag/0.6.0) |
| [pytest-dev/py](https://github.com/pytest-dev/py) | 1.8.0 | [1.8.0](https://github.com/pytest-dev/py/releases/tag/1.8.0) |
| [pyparsing/pyparsing](https://github.com/pyparsing/pyparsing) | 2.4.5 | [pyparsing_2.4.5](https://github.com/pyparsing/pyparsing/releases/tag/pyparsing_2.4.5) |
| [pytest-dev/pytest](https://github.com/pytest-dev/pytest) | 5.3.0 | [5.3.0](https://github.com/pytest-dev/pytest/releases/tag/5.3.0) |
| [stub42/pytz](https://github.com/stub42/pytz) | 2019.3 | [release_2019.3](https://github.com/stub42/pytz/releases/tag/release_2019.3) |
| [uiri/toml](https://github.com/uiri/toml) | 0.10.0 | [0.10.0](https://github.com/uiri/toml/releases/tag/0.10.0) |
| [pallets/werkzeug](https://github.com/pallets/werkzeug) | 0.16.0 | [0.16.0](https://github.com/pallets/werkzeug/releases/tag/0.16.0) |
| [dmnfarrell/tkintertable](https://github.com/dmnfarrell/tkintertable) | 1.2 | [v1.2](https://github.com/dmnfarrell/tkintertable/releases/tag/v1.2) |
| [wxWidgets/wxPython-Classic](https://github.com/wxWidgets/wxPython-Classic) | 2.9.1.1 | [wxPy-2.9.1.1](https://github.com/wxWidgets/wxPython-Classic/releases/tag/wxPy-2.9.1.1) |
| [nasa/fprime](https://github.com/nasa/fprime) | 1.3 | [NASA-v1.3](https://github.com/nasa/fprime/releases/tag/NASA-v1.3) |
| [nucleic/cppy](https://github.com/nucleic/cppy) | 1.1.0 | [1.1.0](https://github.com/nucleic/cppy/releases/tag/1.1.0) |
| [opencv/opencv](https://github.com/opencv/opencv) | 4.5.1 | [4.5.1](https://github.com/opencv/opencv/releases/tag/4.5.1) |
| [curl/curl](https://github.com/curl/curl) | 7.72.0 | [curl-7_72_0](https://github.com/curl/curl/releases/tag/curl-7_72_0) |
| [madler/zlib](https://github.com/madler/zlib) | 1.2.11 | [v1.2.11](https://github.com/madler/zlib/releases/tag/v1.2.11) |
| [apache/lucene](https://github.com/apache/lucene) | 7.7.3 | [releases/lucene-solr/7.7.3](https://github.com/apache/lucene/releases/tag/releases%2Flucene-solr%2F7.7.3) |
| [yaml/libyaml](https://github.com/yaml/libyaml) | 0.2.5 | [0.2.5](https://github.com/yaml/libyaml/releases/tag/0.2.5) |
| [elastic/elasticsearch](https://github.com/elastic/elasticsearch) | 6.8.1 | [v6.8.1](https://github.com/elastic/elasticsearch/releases/tag/v6.8.1) |
| [twbs/bootstrap](https://github.com/twbs/bootstrap) | 4.3.1 | [v4.3.1](https://github.com/twbs/bootstrap/releases/tag/v4.3.1) |
| [vuejs/vue](https://github.com/vuejs/vue) | 2.6.10 | [v2.6.10](https://github.com/vuejs/vue/releases/tag/v2.6.10) |
| [carrotsearch/hppc](https://github.com/carrotsearch/hppc) | 0.7.1 | [0.7.1](https://github.com/carrotsearch/hppc/releases/tag/0.7.1) |
| [JodaOrg/joda-time](https://github.com/JodaOrg/joda-time) | 2.10.1 | [v2.10.1](https://github.com/JodaOrg/joda-time/releases/tag/v2.10.1) |
| [tdunning/t-digest](https://github.com/tdunning/t-digest) | 3.2 | [t-digest-3.2](https://github.com/tdunning/t-digest/releases/tag/t-digest-3.2) |
| [HdrHistogram/HdrHistogram](https://github.com/HdrHistogram/HdrHistogram) | 2.1.9 | [HdrHistogram-2.1.9](https://github.com/HdrHistogram/HdrHistogram/releases/tag/HdrHistogram-2.1.9) |
| [locationtech/spatial4j](https://github.com/locationtech/spatial4j) | 0.7 | [spatial4j-0.7](https://github.com/locationtech/spatial4j/releases/tag/spatial4j-0.7) |
| [locationtech/jts](https://github.com/locationtech/jts) | 1.15.0 | [jts-1.15.0](https://github.com/locationtech/jts/releases/tag/jts-1.15.0) |
| [apache/logging-log4j2](https://github.com/apache/logging-log4j2) | 2.11 | [log4j-2.11.0](https://github.com/apache/logging-log4j2/releases/tag/log4j-2.11.0) |

## Further reading

- "[About your profile](/articles/about-your-profile)"
