The objective of this project is to build a cinema's movie booking page.

The project utilises ReactJS, and consists of the following:

1. Parent component found at App.js
2. 2 x child components found at Seats.js and PriceTable.js
3. 1 x image found in the assets folder
4. Styling for project found in App.css
5. MUI was used in PriceTable.js to build the table.
6. EmailJS was used for the user to send a copy of the booking confirmation to.

# The scenario

The user has selected to watch the movie, "Disney and Pixar’s Lightyear", takes place at "Orchard Theatres Hall 1" on "THURSDAY 16 JUN 2022 8:00 PM". On the page, user will be able to select from available seats, choose the ticket type, make a booking, and then send a copy of the booking to his email.

# Approach for the project

1. Desktop research was done to identify common user journeys and designs from existing cinema booking websites.
2. Created wireframes to visualise the concept, and then features to be developed were prioritised.
3. Reviewed the layout of the page to decide on structure of the code (parent and child components).
4. After the base features were developed, additional features (ticket type selection and EmailJS) were then gradually picked up and added in.

# Assumptions

1. We assume that the cinema has a fixed seat layout as defined in App.js. To illustrate the example of unavailable seats, seats 'G4' and 'G5' are coded to be unavailable.
2. We do not integrate with a payment gateway for this project. We assume that the user has paid when he confirms his booking. An enhancement to integrate with a payment gateway may be considered in the future.
3. We assume that the user inputs validated name and email address in the input fields for EmailJS to send out the email to.

# Possible future enhancements

1. Add validation checks for the name and email address input fields.
2. Modify the parent component so that the seats layout is modifiable.
3. Integrate with backend to reflect real time bookings by different users.
4. Integrate with a payment gateway system.
