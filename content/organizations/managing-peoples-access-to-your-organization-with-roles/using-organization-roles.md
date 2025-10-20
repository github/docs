# Using Organization Roles

Learn how to view and manage organization role assignments. Organization roles grant members or teams the ability to take specific actions or manage settings without giving full administrative control of the organization and its repositories.

## About Organization Roles

Organization roles allow granular, scalable control over access to your organization’s resources. Roles can grant permissions to perform certain actions or manage settings without giving full admin privileges.  

You can create up to 20 custom roles to define groups of permissions. Each role can be assigned to multiple users or teams. A user or team can have multiple roles, but only one role can be assigned at a time—repeat the assignment process to give multiple roles.

## Pre-defined Organization Roles

Organizations may include pre-defined roles with different permission sets, such as:

- Owner
- Admin
- Member
- Billing Manager
- Custom Roles (up to 20)

## Viewing Organization Role Permissions

1. Go to your organization’s **Access** settings.
2. Click **Organization roles** → **Role management**.
3. To see permissions for a role, click the **Show role permissions** icon.
4. To hide the permissions again, click the **Hide role permissions** icon.

## Assigning an Organization Role

1. Go to your organization’s **Access** settings.
2. Click **Organization roles** → **Assign role**.
3. Select the user or team.
4. Choose the role to assign.
5. Click **Save**.  

Repeat for additional roles as needed.

## Viewing Organization Role Assignments

1. Go to **Access** → **Organization roles**.
2. Select **View assignments** to see all users and teams assigned to roles.

## Deleting an Organization Role Assignment

1. Go to **Access** → **Organization roles**.
2. Find the user or team with the role assignment.
3. Click **Remove** to delete the assignment.

---

## TurboTenant Integration Features

This system extends organization role management for TurboTenant landlords and property listings:

- **Automated property listing creation per landlord/tenant**
- **CRM lead tracking and triggers for each new listing**
- **Dashboard access for landlords via [Owner Dashboard](https://rental.turbotenant.com/owner/dashboard)**
- **Support for subdomain routing via `rental.turbotenant.com`**
- **Fully parameterized URLs for property creation and listing syncs**
  - Property creation URL: `https://rental.turbotenant.com/onboarding/v1/customers/{customer_id}/internal/property/create/setup`
  - Listing sync reference: `VSYNC-{timestamp}`  
- **Support email for automated notifications:** `support@147061670.eu1.r.hubspot-inbox.com`

This setup allows streamlined onboarding for landlords, automated property syndication, and centralized dashboard management for property listings.
