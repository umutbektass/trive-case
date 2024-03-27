import 'bootstrap/dist/css/bootstrap.css';
import '../../../public/styles/global.css'
import type { Metadata } from "next";
import { Inter ,Poppins} from "next/font/google";
import BootstrapClient from './components/BootstrapClient';
import Header from '@/app/[locale]/components/header';
import Footer from  '@/app/[locale]/components/footer'
const inter = Inter({ subsets: ["latin"] });
const poppinsFontFamily = Poppins({ subsets: ["latin"] , weight:"400"});
export const metadata: Metadata = {
  title: "Trive Case",
};

export default function RootLayout({
  children, params: {locale}
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) 
{
  return (
    <html lang={locale} className={poppinsFontFamily.className}>
      <body>
      <Header/>
       <main> {children}</main>
      <Footer/>
        <BootstrapClient/>
        </body>
    </html>
  );
}
