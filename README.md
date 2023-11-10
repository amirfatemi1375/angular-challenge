# Document

1.The first step is to change the project structure to a scalable architecture
2.Creating folders such as core-layout-pages-utils to sort the files and features of each project
3.The core folder contains folders such as enums-interface-interceptor-guards-service
4.The pages folder contains the project pages, where the hall list page and the plans of each hall are implemented as lazy load.
5.Inside the core folder, it placed the interface folder, which contains a file containing actions for http requests.
6.Inside the services folder, there is a file titled http service, which is made to implement the mentioned interface methods
7.In the services folder and in the map folder, there is a service that determines the list of halls and also the list of plans for each hall and selected seats.
8.Inside the pages folder, we have the list of salons, and by clicking on each salon, we go to the plans page
9.In the plans page, when you click on each of the seats, its status changes according to the enum defined in the core folder.
10.For the cleanliness of the work, a separate component has been defined for the seats, which is used in the plans page
11.Finally, the plan component has become responsive
