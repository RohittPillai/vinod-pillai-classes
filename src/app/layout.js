export const metadata = {
  title: "Vinod Pillai Classes | 25 Years of Academic Excellence",
  description: "Specialized coaching for Class 8, 9, and 10 State Board in Surat. Continuing the legacy of concept clarity and unwavering discipline.",
  openGraph: {
    title: "Vinod Pillai Classes",
    description: "Expert mentorship for Class 8, 9, and 10 State Board students.",
    url: "https://vinodpillaiclasses.com",
    siteName: "Vinod Pillai Classes",
    images: [
      {
        url: "/logo.jpg", // This uses the logo you just uploaded
        width: 800,
        height: 800,
      },
    ],
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}