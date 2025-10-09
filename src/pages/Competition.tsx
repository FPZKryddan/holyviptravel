import { ReactNode } from 'react';
import PrimaryCTAButton from '../components/PrimaryCTAButton';
import Header from '../components/Header';

const Competition = () => {
  const onCTAClicked = () => {
    const webUrl = `https://www.instagram.com/${encodeURIComponent('holyvip.se')}/`;

    const appUrl1 = `https://instagram.com/_u/${encodeURIComponent('holyvip.se')}/`;

    const tryAppUrl = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent) ? appUrl1 : webUrl;

    window.location.href = tryAppUrl;

    setTimeout(() => {
      // if (Date.now() - started < 1600) {
      window.location.href = webUrl;
      // }
    }, 1200);
  };

  return (
    <>
      <div className="relative m-0 flex h-dvh flex-col p-0 lg:flex-row">
        <Header />
        <div className="text-darkblue order-1 flex flex-col items-center bg-white px-6 py-12 text-center md:px-24 lg:order-0 lg:flex-1/2 lg:px-12">
          <Heading>Tävlingsinformation &amp; villkor</Heading>

          <Text>
            HolyVIPtravel (arbetsnamn inför lansering) arrangerar två marknadsföringstävlingar.
            Kampanjen är inte sponsrad, stödd, administrerad av eller associerad med SAS eller
            Instagram. Varumärket SAS används endast i beskrivande syfte för prisets innehåll.
          </Text>
          <Text>
            Tävlingarna är öppna för personer över 18 år bosatta i Sverige, Danmark och Norge.
            Minderåriga får följa kontot men kan inte delta eller vinna priser.
          </Text>

          <SubHeader>Tävling 1 – ”Följarjakten”</SubHeader>
          <Text>
            Pågår 15 oktober–15 december 2025. Var 500:e följare kan vinna ett presentkort på 500 kr
            för kommande tjänster från HolyVIP Travel.
          </Text>

          <br />

          <Text>För att delta</Text>
          <Text>
            Följ @holyvip.se på Instagram.
            <br /> Tagga en vän i tävlingsinlägget. <br />
            Svara på en fråga (publiceras vid start).
          </Text>

          <br />

          <Text>
            En jury på tre personer utser vinnarna baserat på kreativitet och kvalitet i svaren.
          </Text>

          <SubHeader>Tävling 2 – ”VIP-resan”</SubHeader>
          <Text>
            Pågår tills kontot når 2 000 följare, oavsett datum. En vinnare utses utifrån aktivitet
            kopplad till kampanjen, inklusive värvning av följare.
          </Text>
          <Text>
            Detaljerade urvalskriterier publiceras i de fullständiga tävlingsvillkoren 14 oktober
            2025.
          </Text>
          <Text>
            Priset är två flygbiljetter till valfri SAS-destination i världen (värde ca 5 000–20 000
            kr beroende på destination och tidpunkt).
          </Text>
          <Text>
            Resan bokas av arrangören och betalas antingen med pengar eller med SAS EuroBonus-poäng,
            beroende på vilket alternativ som är mest kostnadseffektivt för arrangören.
          </Text>

          <br />

          <Text>
            Fullständiga villkor för båda tävlingarna publiceras 14 oktober 2025 på
            instagram.com/holyvip.se och holyviptravel.se.
          </Text>
          <Text>
            Inget köp krävs. Vinnare kontaktas via DM från @holyvip.se och kan publiceras i flödet.
            Vinster kan inte bytas mot kontanter.
          </Text>

          <SubHeader>Integritet (GDPR)</SubHeader>
          <Text>
            Endast offentligt tillgängliga användarnamn behandlas. Ingen ytterligare persondata
            samlas in.
          </Text>
          <br />
          <Text>Kampanjen är en marknadsföringstävling; inget lotteri.</Text>
          <br />
          <Text>
            Arrangör och avsändare: HolyVIP Travel – enskild firma (drivs av Maria Krantz).
            Kampanjen administreras från Sverige och följer svensk lagstiftning. Tävlingen är öppen
            för deltagare bosatta i Sverige, Danmark och Norge.
          </Text>
          <br />
          <PrimaryCTAButton label="Starta resan på Instagram" callback={onCTAClicked} />
        </div>
        <div className="relative h-full lg:flex-1/2" style={{ viewTransitionName: 'img' }}>
          <img src="/wallpaper_2k.png" className="h-full w-full bg-cover bg-center" />
          {/* <img
            src="logo.png"
            className="absolute top-0 left-1/2 w-48 -translate-x-1/2 lg:left-0 lg:translate-0"
          /> */}
        </div>
      </div>
    </>
  );
};

const Heading = ({ children }: { children: ReactNode }) => {
  return <h1 className="mb-6 text-2xl font-medium 2xl:mb-12">{children}</h1>;
};

const SubHeader = ({ children }: { children: ReactNode }) => {
  return <h2 className="mt-3 text-lg font-semibold 2xl:mt-6">{children}</h2>;
};

const Text = ({ children }: { children: ReactNode }) => {
  return <p className="font-regular text-sm">{children}</p>;
};
export default Competition;
