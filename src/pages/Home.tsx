import { useNavigate } from 'react-router';

import Header from '../components/Header';
import PrimaryCTAButton from '../components/PrimaryCTAButton';

const Home = () => {
  const navigate = useNavigate();

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
    // <>
    //   <div className="relative m-0 flex h-dvh flex-col p-0 lg:flex-row">
    //     <Header />
    //     <div className="relative h-full lg:flex-1/2" style={{ viewTransitionName: 'img' }}>
    //       <img src="wallpaper_2k.png" className="h-full w-full bg-cover bg-center" />
    //       <img
    //         src="logo.png"
    //         className="absolute top-0 left-1/2 w-48 -translate-x-1/2 lg:left-0 lg:translate-0"
    //       />
    //     </div>
    //     <div className="flex h-full flex-col items-center justify-between bg-white px-6 py-12 text-center md:px-24 lg:flex-1/2 lg:px-12">
    //       <div className="text-green flex flex-col gap-1 lg:gap-6">
    //         <h1 className="text-brown text-3xl font-normal">Drömmer du om din nästa resa?</h1>
    //         <p className="">
    //           Vi lanserar snart en ny typ av resetjänst. Inte för att sälja själva resan - <br />
    //           utan för att ge dig kunskapen och knepen att hitta den själv
    //         </p>
    //         <p className="">
    //           Res billigare - slipp stressen att leta, eller lär dig hur du själv hittar bäst.
    //           <br />
    //           Upplev mer av världen - utan att betala mer än du måste
    //         </p>
    //         <p className="font-bold">
    //           ✨Inför lanseringen kör vi en tävling - start 15/10
    //           <br />
    //           Följer oss på Instagram mellan den 1/10 - 14/10 <br />
    //           så får du dubbla chanser att vinna!
    //         </p>
    //       </div>
    //       <h2 className="text-brown mt-5 font-extrabold">
    //         Var 500:e foljare vinner - vid 2000 väntar även VIP-Resan
    //         <br /> 2 flygbiljetter till valfri SAS-destination i världen
    //       </h2>
    //       <div className="flex flex-col gap-1">
    //         <PrimaryCTAButton label="Starta resan på Instagram" callback={onCTAClicked} />
    //         <p className="text-xs">
    //           Vill du veta mer?{' '}
    //           <a
    //             className="text-blue-500 underline hover:cursor-pointer"
    //             onClick={() => navigate('/tavling', { viewTransition: true })}
    //           >
    //             Läs tävlingsvilkoren här
    //           </a>
    //         </p>
    //       </div>
    //       <div className="text-brown mt-5 text-center text-xs">
    //         <p>HolyVIPTravel är vårt arbetsnamn inför lansering</p>
    //         <p>Fullständiga vilkor för tävlingen publiceras senast 14/10</p>
    //         <p>på Instagram @HolyVip samt HolyVipTravel.se</p>
    //       </div>
    //     </div>
    //   </div>
    // </>
    <>
      <div className="relative flex h-dvh items-center justify-center bg-cover bg-center md:p-24">
        <Header />
        <div
          className="from- absolute inset-0 -z-10 h-full w-full bg-linear-to-b bg-[linear-gradient(to_right_bottom,rgba(0,0,0,0.1),rgba(0,0,0,0.1)),url('/wallpaper.webp')] bg-cover bg-center dark:bg-[linear-gradient(to_right_bottom,rgba(0,0,0,0.3),rgba(0,0,0,0.3)),url('/wallpaper.webp')]"
          style={{
            // backgroundImage:
            //   'linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.1)), url(/wallpaper.webp)',
            viewTransitionName: 'img',
          }}
        ></div>
        <div className="flex w-fit flex-col items-center justify-center gap-6 rounded-2xl bg-white/10 p-4 backdrop-blur-xs md:items-start md:justify-start dark:bg-black/10">
          <h1 className="text-darkblue dark:text-lightblue text-shadow-xl w-full text-center text-4xl font-bold text-wrap md:text-left md:text-4xl">
            Drömmer du om din nästa resa?
          </h1>
          <div className="text-md flex flex-col gap-3 text-center text-black md:text-left dark:text-white">
            <p>Vi lanserar snart en ny typ av resetjänst.</p>
            <p>Vi säljer inte resor utan kunskap</p>

            <p>Res billigare – slipp stressen att leta, eller lär dig hur du själv hittar.</p>

            <p>Upplev mer av världen – utan att betala mer än du måste.</p>
          </div>
          <div className="flex flex-col gap-1">
            <PrimaryCTAButton label="Tävla om en resa på Instagram" callback={onCTAClicked} />
            <p className="text-center text-xs">
              Vill du veta mer?{' '}
              <a
                className="text-blue-500 underline hover:cursor-pointer"
                onClick={() => navigate('/tavling', { viewTransition: true })}
              >
                Läs tävlingsvilkoren här
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
