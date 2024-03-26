
import { useTranslations } from "next-intl";
import styles from './page.module.css'
import AccountList from "./components/account-list";
import FairMarkets from "./components/fairmarkets";
import TradingPlatforms from "./components/tradingplatforms";
import AwardWinningBroker from "./components/award-winning-broker";
import MainSlider from "./components/main-slider";
export default function Home() {
  const t = useTranslations('Index');
   {/* <h1>Test</h1>
    <h1>{t('title')}</h1> */}
  return (
    <div>
      <MainSlider/>
      <AccountList/>
      <FairMarkets/>
      <TradingPlatforms/>
      <AwardWinningBroker/>
    </div>

 
  );
}
