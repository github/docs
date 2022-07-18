{% ifversion fpt or ghes > 3.3 or ghae-issue-4757 or ghec %}

{% ifversion ghes or ghec or ghae %}您可以公开或私下在一个工作流程中调用{% else %}您可以在一个工作流程中调用{% endif %}另一个工作流程，以与组织分享工作流程。 这使您可以重复使用工作流程，避免重复并使您的工作流程更易于维护。 更多信息请参阅“[重用工作流程](/actions/learn-github-actions/reusing-workflows)”。
{% endif %}
