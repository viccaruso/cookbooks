import './globals.css';

export const metadata = {
  title: 'Cookbooks',
  description: 'Curate your favorite recipes from the cookbooks you love.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
