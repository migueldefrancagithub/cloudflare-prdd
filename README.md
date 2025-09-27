# Prompt Mágico

An AI-powered prompt generator to create high-converting sales copy, checkout pages, and payment integration guides, all with a touch of magic.

[![Deploy to Cloudflare](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/migueldefrancagithub/cloudflare-prd)

Prompt Mágico is a visually captivating, single-page web application designed to help digital product creators and marketers effortlessly generate high-quality prompts for AI models. The application features three specialized generators accessible via tabs: Sales Page Copy, High-Conversion Checkout Page, and ClicPay Payment Integration. Users fill out intuitive forms tailored to each need, and the tool instantly crafts a detailed, ready-to-use prompt.

## ✨ Key Features

*   **Three Specialized Generators**: Instantly create prompts for Sales Pages, High-Conversion Checkout Pages, and ClicPay Payment Integrations.
*   **Intuitive Tabbed Interface**: Easily switch between different prompt generators.
*   **Instant Generation**: Client-side logic provides immediate prompt creation with no waiting.
*   **One-Click Copy**: A simple "Copy" button transfers the generated prompt to your clipboard.
*   **Stunning Visual Design**: A whimsical and illustrative UI with custom icons, playful typography, and smooth animations.
*   **Fully Responsive**: A flawless experience on desktops, tablets, and mobile devices.
*   **Simple Pricing**: A clear, straightforward subscription model.

## 🚀 Technology Stack

*   **Framework**: React (with Vite)
*   **Language**: TypeScript
*   **Styling**: Tailwind CSS
*   **UI Components**: shadcn/ui
*   **Animations**: Framer Motion
*   **Icons**: Lucide React
*   **Notifications**: Sonner

## 🏁 Getting Started

Follow these instructions to get a local copy up and running for development and testing purposes.

### Prerequisites

*   [Bun](https://bun.sh/) installed on your machine.
*   [Git](https://git-scm.com/) for cloning the repository.

### Installation

1.  **Clone the repository:**
    ```bash
    git clone <repository-url>
    cd prompt-magico
    ```

2.  **Install dependencies:**
    ```bash
    bun install
    ```

3.  **Set up environment variables:**
    This project does not require any environment variables for its core client-side functionality. All logic is handled in the browser.

4.  **Run the development server:**
    ```bash
    bun dev
    ```
    The application will be available at `http://localhost:3000` (or another port if 3000 is in use).

## 💡 Usage

Once the application is running, you can use it as follows:

1.  **Select a Generator**: Click on one of the three tabs: "Página de Vendas", "Página de Checkout", or "Integração ClicPay".
2.  **Fill the Form**: Complete the input fields with the details of your product or service.
3.  **Generate**: Click the "Gerar Prompt Mágico" button.
4.  **Review & Copy**: The generated prompt will appear in the output box on the right. Click the "Copiar" button to copy it to your clipboard.

## 🔧 Development

The application is a single-page application built within `HomePage.tsx`.

*   `src/pages/HomePage.tsx`: This is the main file containing all UI sections (Hero, Features, Generator, Pricing, Footer) and the core application logic.
*   `src/components/MagicIcons.tsx`: Contains custom SVG components used throughout the application to enhance the visual theme.
*   `tailwind.config.js`: Defines the custom color palette, fonts (`Fredericka the Great`, `Inter`), and other design tokens for the project.
*   `src/index.css`: Imports the Google Fonts and sets up the base Tailwind CSS layers and custom CSS variables.

## ☁️ Deployment

This project is configured for easy deployment to Cloudflare Pages.

1.  **Build the project:**
    ```bash
    bun run build
    ```

2.  **Deploy to Cloudflare:**
    The `deploy` script in `package.json` handles both the build and deployment steps.
    ```bash
    bun run deploy
    ```
    This command will build the application and deploy it using the Wrangler CLI. Ensure you have Wrangler installed and authenticated with your Cloudflare account.

Alternatively, you can deploy directly from your Git repository.

[![Deploy to Cloudflare](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/migueldefrancagithub/cloudflare-prd)