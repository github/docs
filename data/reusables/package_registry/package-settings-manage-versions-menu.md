{% ifversion fpt or ghec %}
1. Under the "Recent Versions" list of packages, click **View and manage all versions**.
   ![Screenshot of a package's "Recent Versions" section. Underneath, the "View and manage all versions" link is highlighted with an orange outline.](/assets/images/help/package-registry/packages-recent-versions-manage-link.png)
{% elsif ghes %}
1. Navigate to where you can manage versions for your type of package.
   * **If your package is a container**, under the "Recent Versions" section, click **View and manage all versions**.
     ![Screenshot of a package's "Recent Versions" section. Underneath, the "View and manage all versions" link is highlighted with an orange outline.](/assets/images/help/package-registry/packages-recent-versions-manage-link.png)
   * **For types of packages other than containers**:
     1. On the right-hand side, click **{% octicon "gear" aria-label="" %} Package settings**.
     ![Screenshot of a package's landing page. In the lower right corner, "Package settings" is highlighted with an orange outline.](/assets/images/help/package-registry/package-settings.png)
     1. On the left click **Manage versions**.
     ![Screenshot of a package's "Manage versions" menu. In the lower right corner, "Manage versions" is highlighted with an orange outline.](/assets/images/help/package-registry/packages-settings-manage-versions-menu.png)
{% elsif ghae %}
1. On the right-hand side, click **{% octicon "gear" aria-label="" %} Package settings**.
   ![Screenshot of a package's landing page. In the lower right corner, "Package settings" is highlighted with an orange outline.](/assets/images/help/package-registry/package-settings.png)
1. On the left click **Manage versions**.
   ![Screenshot of a package's "Manage versions" menu. In the lower right corner, "Manage versions" is highlighted with an orange outline.](/assets/images/help/package-registry/packages-settings-manage-versions-menu.png)
{% endif %}