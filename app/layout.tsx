// These styles apply to every route in the application
import 'antd/dist/reset.css';
import '../styles/globals.css';
export default function RootLayout({ children }: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
        <body>{children}</body>
        </html>
    );
}