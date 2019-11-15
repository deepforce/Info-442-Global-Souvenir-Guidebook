## Models (to persist and retrieve data)

* StoreModel: 

	* It is to store all of the store information and characteristics (aligning with filters).
	* It resides on server. 
	* It communicates with the controllers specified in the following controller part. 

* ProductModel: 

	* It is to store all of the product information and characteristics which are aligning with filters.
	* It resides on server. 
	* It communicates with the controllers specified in the following controller part. 

## Controllers (to implement the application's logic for passing data back and forth between the model and views, as well as manipulating data)

* SearchController (type and clicking search)

	1. It is to search for stores with store names
	2. It resides only on server.
	3. It communicates with StoreModel and FiltersController as follows:
		* The SearchController can retrieve store information such as Store Name, Price, Phone number and Address from the StoreModel.
		* The SearchController only pull out the data based on the search input. If there is no search input, it’ll select all the data.
		* The SearchController send the result data to the FiltersController.

* FiltersController (filter from different categories)

	1. It is to filter results based on the information of stores or products.
	2. It resides only on server.
	3. It communicates with the SearchControllerl and the SortingController as follows: 
		* The FiltersController can take the data from the SearchController and apply the filters selected by the user to the data.
		* The FiltersController can send the filtered data to the SortingController.

* SortingController

	1. It is to sort the store listings based on the price either ascending or descending.
	2. It resides on server.
	3. It communicates with the FiltersController and the PageController as follows:
		* It communicates with the FiltersController to get the filtered data.
		* It sorts the data as specified by the user and sends the sorted data to the PageController.

* PageController

	1. It is to pass to ListController every 10 store listings for the “next page” and “previous page”.
	2. It resides on server.
	3. It communicates with the SortingController and the ListController as follows:
		* It can ask the SortingController to retrieve the results of store listings.
		* At default, it passes the first 10 store listings from SortingController to ListController.
		* It communicates with ListController to send every 10 store listings provided by SortingController when users clicking on “next page” or “previous page”. 

* ListController

	1. It is to navigate to the “next page” and “previous page” for every 10 store listings.   
	2. It resides on Client side.
	3. It communicates with the PageController and the ListView as follows:
		* It takes the data from the PageController and select only the data needed for display on the ListView.
		* It sends the exactly needed data to the ListView.

* StoreDetailedInfoController

	1. It is to retrieve store and product information to communicate with StoreView once users clicking on one store in the store listings to display the store detailed information with product listings.   
	2. It resides on server.
	3. It communicates with StoreModel, ProductModel and StoreView  as follows:
		* It can ask the StoreModel and ProductModel to retrieve the store and product information according to user inputs when users clicking on the specific store. 
		* It can communicate with StoreView to display the detailed store information.

## Views (to display data and elicit it from users)

* LocationView

	1. Display a world map with marks showing active locations.
	2. It resides on the client side.
	3. It should communicate to a LocationController which connects to the LocationModel. Since we’ll just have Seattle for now, we won’t have the LocationModel and the LocationView won’t communicate with any other components.


* ListView

	1. Display the list of stores, based on the searching, filtering and other controllers.
	2. It resides on the client side.
	3. It communicates to the SearchController and the FiltersController to get the data to display.

* StoreView

	1. Display the store detailed information including products.
	2. It resides on the client side.
	3. It communicates to the StoreDetailedInfoController and the controller will send the data of store and products to the view for display.




