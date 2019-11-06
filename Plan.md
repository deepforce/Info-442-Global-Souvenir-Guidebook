# **HW 5 Plan - good reasons for all choices**

 ## 1. How will you coordinate your work?
 - Who will coordinate the work?
	 - Our project manager Jane will coordinate the work
- What will their project management practices be?
	- Break down tasks and set up deadlines:
		1. Project manager initiates the discussion and achieve mutual agreement with everyone to break down tasks into issues for assignees and set up deadlines on GitHub based on individual skill sets and availability. By doing so, everyone is on the same page for task distributions and due dates.
	-   Update progress:
        1.  Everyone needs to update the individual progress and check on others’ progresses on GitHub by Sunday noon.
        2.  Product manager should check Kanban on Sunday afternoon.
     -   Hold meetings:
	     1. If any delays, product manager can initiate the online discussion on Sunday night. Then, we have more time before the due dates (usually Tuesday) and we can discuss how to fix the issues and synchronize again on Monday night.
	     2.  If someone encounters any problem, he/she needs to bring out this issue to everyone on Sunday afternoon.
	     3.  To discuss our tasks and how to do it, we have a regular 30 minute meeting every Thursday after class because everyone is available at that time. We limit our meeting to 30 minutes to increase the efficiency. If we are out of the topic, CEO and project manager should remind everyone going back on the track.
	-   Unexpected situation:
	    1.  If someone is sick, he/she needs to inform everyone timely. CEO needs to discuss with everyone’s availability and assign the backup to continue the work.
	    2.  If our initial design does not work or is blocked by the dependencies or technical issues, CTO and designer should initiate the conversation and product manager can hold a meeting with everyone to revise the plan and schedule.
	    3.  CEO should monitor product manager to keep our project on track.
	-   What will the agendas of meetings be?
		1.   Project manager hosts the meeting and makes sure everyone follows meeting agenda to improve the efficiency. We seperate to regular and temporary meeting agendas because of different meeting purposes. We always put Q&A part in the meeting to encourage everyone bringing up questions.
		2. Weekly regular meeting agenda:
		    - Check our progress:
				> Firstly, according to our target complete date for each task, we will synchronize the progresses of each member in the past week to make sure everyone is on the same page.
				
				>  What we have already completed? Are those tasks accomplished on time and fulfilled the requirements? Any revision or improvement for future planning?
    
				>  What we have not completed which already passed the due dates in our schedule? Why did we delay the task?
			- What is our next step?
				>  Discuss the upcoming tasks.
		    
			    > Check whether we need to revise our design and plan.
		    
			    > Confirm the direction of our solution, timeline and assignees on GitHub.
			- Does anyone need help or any other question?
    

				>  To make the communication transparent, we encourage to find out the questions and discuss the solution together.

		3. Temporary meeting agenda:
			- What problems did we encounter?
    
			-  What is the impact of this problem?
    
			-  How will we solve the problem within a limited time and existing resources?
    
			-  Break down and distribute the tasks according to deadlines

## 2.  What tools will you use to communicate?
    

-   We decided to use one single platform which is easier for managing and tracking. We choose GitHub because it has coding integrations and project management functions.
## 3.  Who will own component in your architecture?
-   Assignees should test the assigned components to meet all requirements and CTO should coordinate and make sure all components work well together.
-   Because of dependencies and sequencing, we decide to start from models, controllers to views. Among controllers, we follow the sequencing to build controllers.
-   Our CTO monitors all the component development and provide technical guidance to everyone. By doing so, everyone can finish their parts quickly.
    - StoreModel: Zack
    -  ProductModel: Jane
    -   SearchController: Zack
    -   FiltersController: Jane
    -   SortingController: Zack
    -   PageController: Garson
    -   ListController: Garson
    -   StoreDetailedInfoController: Garson
    -   LocationView: Fannie
    -   ListView: Fannie
    -   StoreView: Fannie
## 4.  What is your timeline?
-   Although 6 weeks left, we plan for 5 weeks to complete to have some bufferings. Those milestones for the components including building and testing.    
-   Week 1 (Nov 3):
	-  CTO lists all the packages we need.
	- According to the requirement list, everyone needs to complete environment setup and packages
-   Week 2 (Nov 10):
	- Build and test 2 models: StoreModel, ProductModel
	-  Build and test 1 controller: ListController
	- Build and test 1 view: LocationView:
-   Week 3 (Nov 17):
	- Build and test 4 controllers: SearchController , FiltersController, SortingController, PageController
-   Week 4 (Nov 24):
	- Build and test 1 controller: StoreDetailedInfoController
    - Integrate all components and test
-   Week 5 (Dec 1):
	- Integrate all components and test
	 -	Prepare for releasing
## 5. How will you verify that you've met your requirements?
-   All in all, we will do code review / inspections after finishing each component. And we will do code review / inspections before every merge on Github.  
    We will do peer code review using Regular change-based code review model and mainly on Github.  
    (Code review / inspections here are to make sure that every piece of code does not conflict with other parts and works according to the functionalities listed below.)
    
-   Page 1:
	- Verify the redirect part of page 1. If it fails, users cannot go to page 2.
		- Write an automated test for this part using Selenium. It should make sure it can go to page 2 after clicking on the button.
	- We will not verify the map part and instruction part in the page 1 because the page 1 is a welcome page and we plan to implement only Seattle in our application. Users can click on the mark at Seattle to be redirected to the page 
-   Page 2:
	- Verify the Listing function. Check if the listing is in default order; check whether the listing is complete.
		 -  Manual testing: Verify if all the stores are showing in the list in default order. Verify if all the attributes are correct in each store.
	    - Unit testing: Verify the ListController works well in the backend. API call works.
	- Verify the Filter function. Whether the filtered result show correctly after clicking on “Apply” button.
	    - Manual testing: Verify the filtered result is correct.
	    - Unit testing: Verify the FiltersController works well in the backend. API call works.
	- Verify the Search function. Check if the search result show correctly after clicking on “Search” button.
	    -  Manual testing: Verify the searched result is correct.
	    - Unit testing: Verify the SearchController works well in the backend. API call works.
	- Verify the Sorting function. Check if the sorted result show correctly after clicking on “Sort by” button.
	    - Manual testing: Verify the sorted result is correct.
	    - Unit testing: Verify the SortingController works well in the backend. API call works.
	- Verify the page navigator. Check if the page navigator can work well and show different store result .
	    - Manual testing: Verify if it can change page by clicking on different page number.
	    - Unit testing: Verify the PageController works well in the backend. API call works.
	- Verify redirect function. Whether clicking on one selected shop will enter the detailed shop page.
	    -  Automated testing: Use Selenium to test usability of front-end.
- Page 3:
	- Verify whether the detailed shop page is the selected shop of page 2
	   - Manual test: Check the consistency works well.
	- Verify the shop page display all the information
	    - Manual test: Check if the detailed information of store is listed correctly and completely.
-   For all of the requirements, how will your verifications be integrated into your process? Will you run automated tests after every build? Before every commit? When will you conduct inspections and who will be involved?
	-  	As “every change must be tested and approved before going to production,'' we will run tests after every commit and before every build for the production. We will run automated test after built for certain parts listed above.
	-   The member assigned to the component will run the tests. CTO and product manager will make sure the testing results fulfill the requirements. Our reasoning is that CTO understands the technology and dependencies the best and the product manager knows the timelines. Both of them should get involved in the testing process to make sure the quality. If any problems occurred, they could decide the alternatives more effectively.
