
Steps to reproduce the problem:

1) Create security group "GROUP_A"
   “Independent of Other Groups?”- Checked
   Site: BEDFORD
   In the application tab > Find for Work Order Tracking application > Options for Work Order Tracking:
   - New Work Order
   - Read Access to Work Order Tracking
   - Save Work Order
2) Create security group "GROUP_B"
   “Independent of Other Groups?”- Checked
   Site: MCLEAN
   In the application tab > Find for Work Order Tracking application > Options for Work Order Tracking:
   - Delete Work Order
   - New Work Order
   - Read Access to Work Order Tracking
   - Save Work Order
3) Create user "USER_TEST" for Group "GROUP_A" and "GROUP_B"
4) Create record for Site - "BEDFORD" by MAXADMIN
5) Check access rights
   Login as user USER_TEST, go to Work Order Tracking application and open work order record from Site BEDFORD.
   Try to delete a task the following error message is displayed:
   "BMXAA0029E - You are not authorized to perform this action for this record."
6) Create record for Site - "BEDFORD" by USER_TEST
    Create a new task
    Save Work order register
    Try to delete a task the following error message is displayed:
    "BMXAA0029E - You are not authorized to perform this action for this record
7) Create record for Site - "MCLEAN" by USER_TEST
     Create a new task
     Save Work order register
     You will get to delete a task
 
Steps used to solve this problem

1) Go to Security Groups > Find for "GROUP_A"
    In the Applications tab > find for Work Order Tracking > Options for Work Order Tracking:
    - New Work Order
    - Read Access to Work Order Tracking
    - Save Work Order
    - Flag Delete Work Order
    Save
2) Check access rights
    Login as user USER_TEST, go to Work Order Tracking application and open work order record from   Site BEDFORD (Work order register created in the step 4)
    The task will be deleted
 
