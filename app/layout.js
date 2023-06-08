
import '../styles/globals.css';

export const metadata = {
  title: 'Mihajlo Spasic 👌',
  icons: {
    icon: '/sculpture.png',
  }
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
};
