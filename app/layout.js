import "./globals.css";

export const metadata = {
  title: "Shivansh Singh | Senior React and Node.js Engineer",
  description:
    "Senior React and Node.js Engineer with 6+ years of experience specializing in React.js, Next.js, Node.js, responsive interfaces, and scalable frontend systems.",
  keywords: [
    "React and Node.js Developer",
    "Shivansh Singh",
    "React.js Developer",
    "Next.js Developer",
    "Node.js Developer",
  ],
  authors: [{ name: "Shivansh Singh" }],
  openGraph: {
    title: "Shivansh Singh | Senior React and Node.js Engineer",
    description: "Senior React and Node.js Engineer",
    url: "https://shivansh-singh.dev",
    siteName: "Shivansh Singh Portfolio",
    locale: "en_IN",
    type: "website",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#080911",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
