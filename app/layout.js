export const metadata = {
  title: 'Mihajlo Spasic 👌',
  icons: {
    icon: '/sculpture.png',
  }
};

import styles from '../styles/globals.css'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
};
