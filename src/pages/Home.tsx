const Home = () => {
  const onCTAClicked = () => {
    const webUrl = `https://www.instagram.com/${encodeURIComponent('holyvip.se')}/`;

    const appUrl1 = `https://instagram.com/_u/${encodeURIComponent('holyvip.se')}/`;

    const tryAppUrl = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent) ? appUrl1 : webUrl;

    const started = Date.now();
    window.location.href = tryAppUrl;

    setTimeout(() => {
      if (Date.now() - started < 1600) {
        window.location.href = webUrl;
      }
    }, 1200);
  };

  return (
    <div className="m-0 flex h-dvh flex-col p-0 lg:flex-row">
      <div className="relative h-full lg:flex-1/2">
        <img src="wallpaper.png" className="h-full w-full bg-cover bg-center" />
        <img
          src="logo.png"
          className="absolute top-0 left-1/2 w-48 -translate-x-1/2 lg:left-0 lg:translate-0"
        />
      </div>
      <div className="flex h-full flex-col items-center justify-between bg-white px-12 py-12 text-center md:px-24 lg:flex-1/2">
        <div className="text-green flex flex-col gap-6">
          <h1 className="text-brown text-3xl font-normal">Drömmer du om din nästa resa?</h1>
          <p className="">
            Vi lanserar snart en ny typ av resetjänst. Inte för att sälja själva resan - <br />
            utan för att ge dig kunskapen och knepen att hitta den själv
          </p>
          <p className="">
            Res billigare - slipp stressen att leta, eller lär dig hur du själv hittar bäst.
            <br />
            Upplev mer av världen - utan att betala mer än du måste
          </p>
          <p className="font-bold">
            ✨Inför lanseringen kör vi en tävling - start 15/10
            <br />
            Följer oss på Instagram mellan den 1/10 - 14/10 <br />
            så får du dubbla chanser att vinna!
          </p>
        </div>
        <h2 className="text-brown font-extrabold">
          Var 500:e foljare vinner - vid 2000 väntar även VIP-Resan
          <br /> 2 flygbiljetter till valfri SAS-destination i världen
        </h2>
        <button className="bg-green w-64 p-6 text-2xl text-white" onClick={onCTAClicked}>
          STARTA RESAN HÄR
        </button>
        <div className="text-brown text-center text-xs">
          <p>HolyVIPTravel är vårt arbetsnamn inför lansering</p>
          <p>Fullständiga vilkor för tävlingen publiceras senast 14/10</p>
          <p>på Instagram @HolyVip samt HolyVipTravel.se</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
