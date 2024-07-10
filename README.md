A web app is developed as an ecommerce site to sell 3D printed trinkets. It leverages modern technologies for a seamless user experience. Built with React and TypeScript, it uses Vite for fast development.

Firebase to handle backend user information, authentication and other functionalisties such as order details.

Material UI for a polished front end, Framer Motion and Three.js for entertaining and engaging animations to showcase products.

Integrating Stripe payments ensure secure and efficient transactions.

Implementing, local storage, sessions and cookies to save user specific data on server and client.


User Side Frontend and Backend Components:
Landing Page: A welcoming page with featured products, promotions, and navigation links.

Product Catalogue:

    Product Listing Page: Display all products with filters and sorting options.
    Individual Product Pages: Detailed view of each product with descriptions, reviews, and purchasing options.


Shopping Cart:

    Cart Page: Display items in the user's cart, allowing them to update quantities or remove items.
    Mini Cart: A quick view of the cart, accessible from any page.
    NodeMailer: for sending confirmation emails

Checkout Process:

    Checkout Page: Collect shipping and payment details.
    Order Confirmation Page: Display order details after successful payment.

User Authentication:

    Sign Up/Login Pages: Forms for user registration and login.
    Session Management: Maintain user sessions using tokens or Firebase Authentication.

User Account Management:

    Accounts Page: Allow users to view and update their profile, view order history, and manage addresses.



Shop Side Frontend and Backend:

Frontend Components

    Admin Dashboard:
        Product Management: Forms and interfaces for adding, editing, and removing products.
        Order Management: View and update the status of orders.
        User Management: Manage user roles and view user activities.
    Analytics and Reporting:
        Sales Reports: Display sales data and performance metrics.
        User Activity: Track and report user activities and site performance.

Backend Components

    Admin Authentication:
        Firebase Authentication: Secure admin login and role-based access control.
    Product Management:
        Firestore: Handle CRUD operations for products with admin privileges.
    Order Management:
        Firestore: Manage and update order statuses.
        Firebase Functions: Automate tasks like sending notifications or updating inventory.
    User Management:
        Firestore: Manage user roles and access permissions.
    Analytics:
        Firestore: Store and query analytics data.
        Firebase Functions: Generate and serve reports.
