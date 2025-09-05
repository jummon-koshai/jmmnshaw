# JMMN x SHAW


**A Cyberpunk Social Network for the Digital Frontier**

Welcome to **JMMN x SHAW**, a futuristic, neon-lit social networking platform designed to immerse users in a cyberpunk-inspired digital experience. Built with a sleek, responsive interface, this project combines social media functionalities, AI-driven interactions, and a blogging platform, all wrapped in a visually stunning cyberpunk aesthetic. Whether you're sharing posts, engaging with the AI-powered CyberBhai, or publishing neon-charged articles, JMMN x SHAW offers a unique environment for tech enthusiasts and cyber warriors alike.

## Table of Contents

- [Features](#features)
- [Demo](#demo)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Features

- **Cyberpunk Aesthetic**: A visually immersive interface with neon gradients, custom cursors, particle effects, and a futuristic grid background.
- **Social Networking**: Create posts, manage profiles, and engage with a community through likes and comments.
- **CyberBhai AI**: Interact with an AI companion for insights on cybersecurity, quantum encryption, neural networks, and more.
- **Blogging Platform**: Publish and browse articles with a rich text editor (Quill.js) and cyberpunk-styled previews.
- **Real-Time Chat**: Communicate via the "FISFAS Terminal" with Pusher-powered real-time messaging.
- **Notifications System**: Stay updated with dynamic notifications for posts, chats, and articles.
- **Customizable Themes**: Switch between Neon Green, Cyber Purple, and Matrix Blue themes, with color picker support.
- **Responsive Design**: Optimized for desktop and mobile devices with a mobile-friendly navigation menu.
- **Accessibility**: Includes ARIA labels, skip-to-content links, and keyboard navigation for inclusivity.
- **Offline Support**: Service Worker integration for basic offline functionality.

## Demo

Explore the live demo of JMMN x SHAW:

[Live Demo](https://jmmnshaw.netlify.app)

Default credentials for testing:
- **Username**: 1 or 2
- **Password**: 1 or 2 (respectively)

*Note*: The platform is currently in demo mode with limited account creation functionality.

## Installation

To set up JMMN x SHAW locally, follow these steps:

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/jummon-koshai/jmmnshaw.git
   cd jmmnshaw
   ```

2. **Install Dependencies**:
   The project relies on external libraries served via CDNs (e.g., GSAP, Quill.js, Pusher). No local installation of dependencies is required, but ensure you have a stable internet connection for CDN access.

3. **Set Up a Local Server**:
   Since this is a static HTML project, serve it using a local development server:
   ```bash
   # Using Python
   python -m http.server 8000
   ```
   Or use any other local server tool like `live-server`:
   ```bash
   npm install -g live-server
   live-server
   ```

4. **Configure Pusher**:
   - Sign up at [Pusher](https://pusher.com/) and create a new app.
   - Update the Pusher configuration in the `<script>` section with your app credentials:
     ```javascript
     const pusher = new Pusher('YOUR_APP_KEY', { cluster: 'YOUR_CLUSTER' });
     ```

5. **Optional: Configure Netlify Functions**:
   - For real-time chat persistence, deploy the project on Netlify and set up serverless functions (`/.netlify/functions/get-messages` and `/.netlify/functions/save-message`) to integrate with a Neon database or similar.
   - Refer to [Netlify Functions Documentation](https://docs.netlify.com/functions/overview/) for setup details.

6. **Access the Application**:
   Open your browser and navigate to `http://localhost:8000` (or the port specified by your server).

## Usage

1. **Login**:
   - Use the default credentials (`1`/`1` or `2`/`2`) to log in as Admin 1 or Admin 2.
   - The login page features a cyberpunk-styled interface with a scanning animation.

2. **Navigation**:
   - Use the top navigation bar to access Home, Profile, Blog, FISFAS (Chat), CyberBhai (AI), Notifications, and Settings.
   - On mobile, toggle the menu using the hamburger icon.

3. **Profile Management**:
   - Update your display name, handle, bio, and avatar in the Profile section.
   - Share posts in the "Share Your Digital Pulse" section.

4. **Blogging**:
   - Create articles using the Quill.js editor on the "Create Article" page.
   - Add tags and publish content to the Blog section.

5. **CyberBhai AI**:
   - Interact with the AI by typing queries or using commands like `ANALYZE`, `SIMULATE`, or `PREDICT`.
   - The AI responds to topics like cybersecurity, quantum encryption, and neural networks.

6. **Chat**:
   - Use the FISFAS Terminal to send real-time messages, powered by Pusher.
   - Messages are persisted via Netlify Functions (requires server-side setup).

7. **Notifications**:
   - View and manage notifications for posts, articles, and chat messages.
   - Mark notifications as read or delete them.

8. **Settings**:
   - Customize themes, primary/accent colors, and language preferences.
   - Update bio and password in the Security Console.

## Contributing

We welcome contributions to enhance JMMN x SHAW! To contribute:

1. **Fork the Repository**:
   ```bash
   git clone https://github.com/your-username/jmmnshaw.git
   cd jmmnshaw
   ```

2. **Create a Feature Branch**:
   ```bash
   git checkout -b feature/your-feature-name
   ```

3. **Make Changes**:
   - Add new features, fix bugs, or improve documentation.
   - Ensure code follows the existing cyberpunk aesthetic and accessibility standards.

4. **Test Locally**:
   - Test changes using a local server to ensure functionality and responsiveness.

5. **Commit Changes**:
   ```bash
   git commit -m "Add your feature description"
   ```

6. **Push to Your Fork**:
   ```bash
   git push origin feature/your-feature-name
   ```

7. **Open a Pull Request**:
   - Submit a pull request on GitHub with a clear description of your changes.
   - Reference any related issues.

Please review our [Contributing Guidelines](CONTRIBUTING.md) for more details.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact

For questions, suggestions, or feedback:
- **GitHub Issues**: [Create an issue](https://github.com/jummon-koshai/jmmnshaw/issues)
- **Email**: [contact@jmmnxshaw.example.com](mailto:contact@jmmnxshaw.example.com)
- **Community**: Join our [Discord community](https://discord.com)

---

⭐ If you enjoy JMMN x SHAW, please give it a star on GitHub! Let's build the future of the digital frontier together.
