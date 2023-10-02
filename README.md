# pearls-nail-parlour-client

> This is the frontend of a MERN application that is designed to streamline the workflow of nail artists and to reduce manual scheduling. 

## Functionality
The application currently has three employee statuses and one cannot access the app if they are not added by either the admin or the manager of the company.

### Admin:
- Can view, edit, delete any of the nail artist's notes
- Can add new notes and assign tasks to any nail artist
- Can view, edit, delete employee user settings
- Can add employees to the application
- Employees not added by the Admin cannot access the app

### Manager:
- Similar privileges to the Admin.
- Can view, edit, delete any of the nail artist's notes
- Can add new notes and assign tasks to any nail artist
- Can view, edit, delete employee user settings
- Can add employees to the application
- Employees not added by the Manager cannot access the app

### Employee:
- Can only view, create, and edit their own notes
- Cannot delete their own notes

## Link to the backend
[Pearls Nail Parlour Backend](https://github.com/Buyaki01/pearls-nail-parlour-server)

## Built With

- HTML
- CSS
- JavaScript
- React
- Redux
- Redux Toolkit

## Getting Started

To get a local copy up and running follow these simple example steps.

### Prerequisites
- A text editor(preferably Visual Studio Code)
- Node
- Web browser

### Install
- [Git](https://git-scm.com/downloads)
- [Node](https://nodejs.org/en/download/)

### Using it Locally

- Clone the project

```bash 
git clone git@github.com:Buyaki01/pearls-nail-parlour-client.git

cd pearls-nail-parlour-client
```

- Install dependencies

```bash
npm i 
or
npm install
```

- To Start the development server
```bash
npm start
```

## Author
👤 **Ritta Sweta**

- Linkedin: [@ritta-sweta](https://www.linkedin.com/in/ritta-sweta/)
- Github: [@Buyaki01](https://github.com/Buyaki01)

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

Feel free to check the [issues page](https://github.com/Buyaki01/pearls-nail-parlour-client/issues).

## Show your support

Give a ⭐️ if you like this project!

## Acknowledgments
- Inspiration: [Dave Gray](https://www.youtube.com/@DaveGrayTeachesCode)

## 📝 License

This project is [MIT](./LICENSE.md) licensed.
