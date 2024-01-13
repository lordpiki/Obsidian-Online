# Obsidian-Online

Obsidian-Online is a web application that brings the note-taking experience of Obsidian to the cloud. Users can seamlessly create, edit, and synchronize their notes across devices, all while leveraging the power of cloud storage services like OneDrive. The project is built using Node.js and React.js, with authentication provided by Passport.js.

## How It Works

Obsidian-Online allows users to log in using their Google or Microsoft accounts through Passport.js. Upon authentication, users can create and manage their notes, which are stored securely in the cloud using OneDrive. The application leverages the Microsoft Graph API for seamless synchronization.

## Getting Started

1. Clone the repository: `git clone https://github.com/lordpiki/Obsidian-Online.git`
2. Install dependencies: `cd Obsidian-Online && npm install`
3. Set up environment variables (refer to `.env.example`)
4. Run the development server: `npm run dev`

## Contribution Guidelines

We welcome contributions to Obsidian-Online! If you'd like to contribute, please follow our [Contribution Guidelines](CONTRIBUTING.md).

## Roadmap

- [ ] Basic note creation and editing functionality
- [ ] Basic folder integration
- [ ] User authentication with Google and Microsoft accounts
- [ ] Integration with OneDrive for cloud storage
- [ ] Support for additional cloud storage services (e.g., Dropbox, Google Drive)

## License

This project is licensed under the [MIT License](LICENSE).

## Acknowledgments

- [Node.js](https://nodejs.org/)
- [React.js](https://reactjs.org/)
- [Passport.js](http://www.passportjs.org/)
- [Microsoft Graph API](https://docs.microsoft.com/en-us/graph/)
