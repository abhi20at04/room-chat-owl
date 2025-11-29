<<<<<<< HEAD
# Welcome to your Lovable project

## Project info

**URL**: https://lovable.dev/projects/9d509d9f-1d46-4964-9493-07ec894de979

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/9d509d9f-1d46-4964-9493-07ec894de979) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/9d509d9f-1d46-4964-9493-07ec894de979) and click on Share -> Publish.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/features/custom-domain#custom-domain)
=======
# Room Chat Owl

A modern, real-time chat application built with React, TypeScript, and Supabase. This application allows users to create and join chat rooms for seamless communication.

## Features

- **Real-time Messaging**: Instant message delivery using Supabase real-time subscriptions
- **Room-based Chat**: Create and join different chat rooms
- **User Presence**: See who's online in each room
- **Responsive Design**: Works perfectly on desktop and mobile devices
- **Modern UI**: Built with shadcn/ui components and Tailwind CSS
- **TypeScript**: Full type safety throughout the application

## Tech Stack

- **Frontend**: React 18, TypeScript, Vite
- **UI Components**: shadcn/ui, Radix UI, Tailwind CSS
- **Backend**: Supabase (Database, Real-time, Authentication)
- **State Management**: TanStack Query (React Query)
- **Routing**: React Router DOM
- **Icons**: Lucide React

## Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- npm or yarn or bun

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/abhi20at04/room-chat-owl.git
   cd room-chat-owl
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   # or
   bun install
   ```

3. Set up Supabase:
   - Create a new project at [supabase.com](https://supabase.com)
   - Copy your project URL and anon key
   - Create a `.env.local` file in the root directory:
     ```
     VITE_SUPABASE_URL=your_supabase_url
     VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
     ```

4. Set up the database:
   - Run the SQL migrations in the `supabase/migrations` folder
   - Or use the Supabase dashboard to create the necessary tables

### Running the Application

Start the development server:
```bash
npm run dev
# or
yarn dev
# or
bun dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Building for Production

```bash
npm run build
# or
yarn build
# or
bun run build
```

Preview the production build:
```bash
npm run preview
# or
yarn preview
# or
bun run preview
```

## Project Structure

```
src/
├── components/
│   ├── ui/          # Reusable UI components (shadcn/ui)
│   ├── ChatInput.tsx
│   ├── ChatMessage.tsx
│   ├── OnlineUsers.tsx
│   └── ...
├── hooks/
│   ├── useChat.ts   # Custom hook for chat functionality
│   └── ...
├── integrations/
│   └── supabase/    # Supabase client and types
├── lib/
│   └── utils.ts     # Utility functions
├── pages/
│   ├── Index.tsx    # Main chat page
│   └── NotFound.tsx # 404 page
└── ...
```

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature-name`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin feature/your-feature-name`
5. Open a pull request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [shadcn/ui](https://ui.shadcn.com/) for the beautiful UI components
- [Supabase](https://supabase.com/) for the backend services
- [Vite](https://vitejs.dev/) for the fast build tool
>>>>>>> cec2533438e8ef1bc92c2d9a7b8ff6e6d90f2bff
