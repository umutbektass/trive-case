
import AccountList from "./components/account-list";
import FairMarkets from "./components/fairmarkets";
import TradingPlatforms from "./components/tradingplatforms";
import AwardWinningBroker from "./components/award-winning-broker";
import MainSlider from "./components/main-slider";
export default function Home() { 
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
