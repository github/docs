---
title: Personalizing your profile
intro: 'You can share information about yourself with other {% data variables.product.product_name %} users by setting a profile picture and adding a bio to your profile.'
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
  ghec: '*'
topics:
  - Profiles
shortTitle: Personalize
---

{% note %}

**Note:**
  Any details you add to your public {% data variables.product.product_name %} profile will be visible to all {% data variables.product.product_name %} users, including in regions where local laws, regulations, or cultural norms may pose risks to expressing your identity. We respect everyone’s decision about whether or not to share information about themselves on their {% data variables.product.product_name %} profile.

{% endnote %}

## Changing your profile picture

Your profile picture helps identify you across {% data variables.product.product_name %} in pull requests, comments, contributions pages, and graphs.

When you sign up for an account, {% data variables.product.product_name %} provides you with a randomly generated "identicon". [Your identicon](https://github.com/blog/1586-identicons) generates from a hash of your user ID, so there's no way to control its color or pattern. You can replace your identicon with an image that represents you.

{% note %}

**Note{% ifversion ghec %}s{% endif %}**: {% ifversion ghec %}

* {% endif %}Your profile picture should be a PNG, JPG, or GIF file, and it must be less than 1 MB in size and smaller than 3000 by 3000 pixels. For the best quality rendering, we recommend keeping the image at about 500 by 500 pixels.
{% ifversion ghec %}* Gravatar profile pictures are not supported with {% data variables.product.prodname_emus %}.{% endif %}

{% endnote %}

If you use Gravatar, and your Gravatar image is associated with the email you use for {% data variables.product.product_name %}, the image will be shown as your {% data variables.product.product_name %} profile picture by default (rather than an identicon). To change your {% data variables.product.product_name %} profile picture, you can either upload a new image to Gravatar, or upload a new image to {% data variables.product.product_name %} and override the Gravatar image.

### Setting a profile picture

{% data reusables.user-settings.access_settings %}
{% data reusables.accounts.set-profile-picture %}

### Resetting your profile picture to the identicon

{% data reusables.user-settings.access_settings %}
1. Under "Profile Picture", select {% octicon "pencil" aria-hidden="true" %} **Edit**, then click **Remove photo** to revert to your identicon.

   If your email address is associated with a [Gravatar](https://en.gravatar.com/), you cannot revert to your identicon. Click **Revert to Gravatar** instead.

   ![Screenshot of the "Public profile" section of a user account's settings. A button, labeled with a pencil icon and "Edit", is outlined in dark orange.](/assets/images/help/profile/edit-profile-photo.png)

## Changing your profile name

You can change the name that is displayed on your profile. This name may also be displayed next to comments you make on private repositories owned by an organization. For more information, see "[AUTOTITLE](/organizations/managing-organization-settings/managing-the-display-of-member-names-in-your-organization)."

{% ifversion fpt or ghec %}
{% note %}

**Note:** If you're a member of an {% data variables.enterprise.prodname_emu_enterprise %}, any changes to your profile name must be made through your identity provider instead of {% data variables.product.prodname_dotcom %}. {% data reusables.enterprise-accounts.emu-more-info-account %}

{% endnote %}
{% endif %}

{% data reusables.user-settings.access_settings %}
1. Under "Public profile", in the "Name" field, type the name you want to be displayed on your profile.

## Adding a bio to your profile

Add a bio to your profile to share information about yourself with other {% data variables.product.product_name %} users. With the help of [@mentions](/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax) and emoji, you can include information about where you currently or have previously worked, what type of work you do, or even what kind of coffee you drink.

For a longer-form and more prominent way of displaying customized information about yourself, you can also use a profile README. For more information, see "[AUTOTITLE](/account-and-profile/setting-up-and-managing-your-github-profile/customizing-your-profile/managing-your-profile-readme)."

{% note %}

**Note:**
  If you have the activity overview section enabled for your profile and you @mention an organization you're a member of in your profile bio, then that organization will be featured first in your activity overview. For more information, see "[AUTOTITLE](/account-and-profile/setting-up-and-managing-your-github-profile/managing-contribution-settings-on-your-profile/showing-an-overview-of-your-activity-on-your-profile)."

{% endnote %}

{% data reusables.user-settings.access_settings %}
1. Under "Public profile", in the "Bio" field, type the content that you want displayed on your profile. The bio field is limited to 160 characters.

   {% tip %}

   **Tip:** When you @mention an organization, only those that you're a member of will autocomplete. You can still @mention organizations that you're not a member of, like a previous employer, but the organization name won't autocomplete for you.

   {% endtip %}

{% data reusables.profile.update-profile %}

{% ifversion profile-pronouns %}

## Adding pronouns to your profile

Add pronouns to your public user profile to share information about yourself with other {% data variables.product.product_name %} users. {% data reusables.profile.pronouns-visibility %}

{% data reusables.user-settings.access_settings %}
1. Under **Pronouns**, add the pronouns that you want displayed on your profile. You may add custom pronouns.

{% data reusables.profile.update-profile %}

{% endif %}

{% ifversion profile-time-zone %}

## Setting your location and time zone

You can set a location and time zone on your profile to show other people your local time. Your location and time zone will be visible:
* On your {% data variables.product.product_name %} profile page
* When people hover over your username or avatar on {% data variables.product.product_name %}

![Screenshot of the Octocat profile page emphasizing the location, local time, and relative time fields.](/assets/images/help/profile/profile-location-and-time.png)

When you view your profile, you will see your location, local time, and your time zone in relation to Universal Time Coordinated. When others view your profile, they will see your location, local time, and the time difference in hours from their own local time.

{% data reusables.user-settings.access_settings %}
1. Under "Public profile", in the "Location" field, type the location you want to be displayed on your profile.
1. Optionally, display the current local time on your profile.
   * Select **Display current local time**.
   * Select the **Time zone** dropdown menu, then click your local time zone.
{% data reusables.profile.update-profile %}

{% endif %}

{% ifversion profile-social-links %}

## Adding links to your social accounts

You can add up to four links to social accounts on your profile. These are visible to anyone who can view your profile.

{% data reusables.user-settings.access_settings %}
1. Under "Social accounts", in a blank "Link to social profile" field, type the full URL of the social account. For example, for the `@GitHub` Twitter account, type `https://twitter.com/github`.
{% data reusables.profile.update-profile %}

{% endif %}

{% ifversion fpt or ghec %}

## Adding your ORCID iD to your profile

If you're a researcher with an ORCID iD, you can identify yourself by adding your ORCID iD to your profile.

{% data reusables.user-settings.access_settings %}
1. Under "ORCID iD", click **Connect your ORCID iD**.
1. Follow the steps to sign in to your ORCID account and then return to {% data variables.product.prodname_dotcom %}.

{% endif %}

## Setting a status

You can set a status to display information about your current availability on {% data variables.product.product_name %}. Your status will show:
* On your {% data variables.product.product_name %} profile page
* When people hover over your username or avatar on {% data variables.product.product_name %}
* On a team page for a team where you're a team member. For more information, see "[AUTOTITLE](/organizations/organizing-members-into-teams/about-teams#team-pages)."
* On the organization dashboard in an organization where you're a member. For more information, see "[AUTOTITLE](/organizations/collaborating-with-groups-in-organizations/about-your-organization-dashboard)."

When you set your status, you can also let people know that you have limited availability on {% data variables.product.product_name %}.

If you select the "Busy" option, when people @mention your username, assign you an issue or pull request, or request a pull request review from you, a note next to your username will show that you're busy. You will also be excluded from automatic review assignment for pull requests assigned to any teams you belong to. For more information, see "[AUTOTITLE](/organizations/organizing-members-into-teams/managing-code-review-settings-for-your-team)."

![Screenshot of a draft comment. "@octocat" is written in the text field, and "The Octocat (busy)" is suggested.](/assets/images/help/profile/username-with-limited-availability-text.png)

1. In the top right corner of {% data variables.product.prodname_dotcom %}, select your profile photo, then click {% octicon "smiley" aria-hidden="true" %} **Set status** or, if you already have a status set, click your current status.

{% ifversion global-nav-update %}

   ![Screenshot of the dropdown menu under @octocat's profile picture. A smiley icon and "Set status" are outlined in dark orange.](/assets/images/help/profile/set-status-on-profile-global-nav-update.png)

{% else %}

   ![Screenshot of the dropdown menu under @octocat's profile picture. A smiley icon and "Set status" are outlined in dark orange.](/assets/images/help/profile/set-status-on-profile.png)

{% endif %}
1. In the "What's happening" field, type a status message.
1. Optionally, to set an emoji status, click {% octicon "smiley" aria-label="Choose an emoji" %}, then click an emoji from the list.
1. Optionally, if you'd like to share that you have limited availability, select "Busy."
1. Select the **Clear status** dropdown menu, then click when you want your status to expire. If you don't select a status expiration, you will keep your status until you clear or edit your status.
1. Select the **Visible to** dropdown menu, then click who you want your status visible to. If you don't select an organization, your status will be public.
1. Click **Set status**.

{% ifversion fpt or ghec %}

## Displaying badges on your profile

When you participate in certain programs, {% data variables.product.prodname_dotcom %} automatically displays a badge on your profile.

| Badge | Program | Description |
| --- | --- | --- |
| {% octicon "cpu" aria-label="The Developer Program icon" %} | **Developer Program Member** | If you're a registered member of the {% data variables.product.prodname_dotcom %} Developer Program, building an app with the {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %}{% else %}{% data variables.product.product_name %}{% endif %} API, you'll get a Developer Program Member badge on your profile. For more information on the {% data variables.product.prodname_dotcom %} Developer Program, see [GitHub Developer](/get-started/exploring-integrations/github-developer-program). |
| {% octicon "star-fill" aria-label="The star icon" %} | **Pro** | If you use {% data variables.product.prodname_pro %} you'll get a PRO badge on your profile. For more information about {% data variables.product.prodname_pro %}, see "[AUTOTITLE](/get-started/learning-about-github/githubs-plans#github-pro)." |
| {% octicon "lock" aria-label="The lock icon" %} | **Security Bug Bounty Hunter** | If you helped out hunting down security vulnerabilities, you'll get a Security Bug Bounty Hunter badge on your profile. For more information about the {% data variables.product.prodname_dotcom %} Security program, see [{% data variables.product.prodname_dotcom %} Security](https://bounty.github.com/). |
| {% octicon "mortar-board" aria-label="The mortar-board icon" %} | **{% data variables.product.prodname_dotcom %} Campus Expert** | If you participate in the {% data variables.product.prodname_campus_program %}, you will get a {% data variables.product.prodname_dotcom %} Campus Expert badge on your profile. For more information about the Campus Experts program, see [Campus Experts](https://education.github.com/experts). |
| {% octicon "shield" aria-label="The shield icon" %} | **Security advisory credit** | If a security advisory you submit to the [{% data variables.product.prodname_dotcom %} Advisory Database](https://github.com/advisories) is accepted, you'll get a Security advisory credit badge on your profile. For more information about {% data variables.product.prodname_dotcom %} Security Advisories, see [{% data variables.product.prodname_dotcom %} Security Advisories](/code-security/security-advisories/working-with-repository-security-advisories/about-repository-security-advisories). |

{% endif %}

{% ifversion fpt or ghec %}

## Earning Achievements

Achievements celebrate specific events and actions that happen on {% data variables.product.prodname_dotcom %}. They will appear as small badges listed in the sidebar of your profile. Clicking or hovering on an achievement will show a detailed view that hints at how the achievement was earned, with a short description and links to the contributing events. The event links will only be visible to users that have access to the repository or organization that the event took place in. Event links will appear inaccessible to all users without access.

To stop private contributions from counting toward your Achievements, or to turn off Achievements entirely, see "[AUTOTITLE](/account-and-profile/setting-up-and-managing-your-github-profile/managing-contribution-settings-on-your-profile/showing-your-private-contributions-and-achievements-on-your-profile)."

{% note %}

**Note:** This feature is currently in {% data variables.release-phases.public_preview %} and subject to change.

{% endnote %}

{% endif %}

## List of qualifying repositories for Mars 2020 Helicopter Contributor achievement

The Mars 2020 Helicopter Contributor achievement was given to those who had authored a commit for one of the repositories listed below. This event has now ended, and the badge is no longer available. We built the list based on information received from NASA's Jet Propulsion Laboratory.

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
| [yaml/pyyaml](https://github.com/yaml/pyyaml) | 5.4.1 | [5.4.1](https://github.com/yaml/pyyaml/releases/tag/5.4.1) |
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

* "[AUTOTITLE](/account-and-profile/setting-up-and-managing-your-github-profile/customizing-your-profile/about-your-profile)"
