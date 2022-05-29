import Image from 'next/image';
import InvitedName from '../../components/InvitedName/InvitedName';

const InvitePage = () => {
  return (
    // CONTAINER
    <div className="w-full flex flex-col bg-white mx-auto justify-center max-w-3xl md:hidden">
      {/* WRAPPER */}

      {/* OPENING */}
      <div className="w-full px-4 bg-gradient-to-r bg-white  h-screen flex flex-col justify-between items-center py-12">
        <p className="font-hand font-bold italic text-center mx-auto text-xl text-black ">
          Undangan Walimatul Urs
        </p>

        <div className="flex relative w-60 h-60 mx-auto ">
          <Image
            layout="fill"
            src="/icons/gunung-wayang.svg"
            alt="bunga cinta"
          />
        </div>

        <InvitedName />
      </div>

      <div className="w-full px-4 bg-gradient-to-r bg-black h-screen flex flex-col justify-center items-center py-10">
        <div className="w-full mx-auto">
          <p className="w-full text-center text-white font-hand font-bold text-4xl mt-10">
            Indra Susila
          </p>

          <p className="w-full text-center font-sans font-normal text-xs italic text-white">
            (Putra Bapak Ridwan Abdul Mujib)
          </p>

          <p className="w-full text-center font-hand font-bold text-5xl text-white">
            &
          </p>

          <p className="w-full text-center font-hand font-bold text-4xl text-white">
            Ratih Hasanah
          </p>

          <p className="w-full text-center font-sans font-normal text-xs italic text-white">
            (Putri dari Bapak Zainudin)
          </p>
        </div>
      </div>

      {/* MAIN INFORMATION */}
      <div className="w-full px-4 bg-gradient-to-r bg-white h-auto flex flex-col  py-20">
        {/* SALAM */}
        <div className="w-full mx-auto">
          <p className="font-hand text-2xl font-balck text-center mx-auto  font-bold text-gray-800">
            Bismillahirrahmanirrahim
          </p>
          <p className="font-sans text-sm italic font-balck text-center mx-auto mt-4  text-gray-800">
            Assalamualaikum warahmatullahi wabarakatuh
          </p>
        </div>

        <div className="w-full px-4 mx-auto">
          <p className="font-sans italic text-sm leading-7 text-center mt-8">
            Dengan memohon rahmat dan ridho Allah Subhanahu wa ta &apos; ala,
            kami bermaksud mengundang Bapak/ ibu/ Saudara/i untuk menghadiri
            resepsi pernikahan kami yang insyaAllah akan dilaksanakan pada Hari
          </p>
        </div>

        <div className="w-full flex-col justify-center mx-auto">
          <p className="text-center font-bold text-3xl font-hand mt-8 italic text-black">
            Minggu/ 24 Juli 2022
          </p>

          <p className="text-center font-medium text-lg font-sans italic text-black mt-1">
            09:00 pagi s/d 17:30 sore
          </p>
        </div>

        <a
          href="https://goo.gl/maps/k6YcmWH9MqBw7dHN9"
          target="_blank"
          rel="noreferrer"
        >
          <p className="mx-auto text-black text-monospace italic truncate font-medium w-48 text-center mt-10">
            https://goo.gl/maps/k6YcmWH9MqBw7dHN9
          </p>
        </a>

        <div className="w-full mx-auto bg-transparent mt-2">
          <p className="text-center text-sm font-sans italic leading-7 tracking-wider font-normal">
            Bertempat di kediaman mempelai wanita Gang Pelem Pasir putih
            Sawangan Depok.
          </p>
        </div>
      </div>

      {/* CLOSING */}
      <div className="w-full px-4 bg-gradient-to-r bg-black  h-screen flex flex-col justify-start items-center py-10">
        <div className="w-full px-4 mx-auto">
          <p className="font-sans text-white italic text-sm leading-7 text-center">
            Merupakan suatu kehormatan & kebahagiaan bagi kami apabila
            Bapak/Ibu/Saudara/i berkenan hadir untuk memberikan do&apos;a restu
            kepada kedua mempelai.
          </p>

          <p className="font-sans text-white italic text-sm leading-7 text-center mt-8">
            waalaikumsalam warahmatullahi wabarakatuh
          </p>
        </div>

        <div className="w-full mx-auto mt-20">
          <p className="font-sans text-white text-center tracking-widest ">
            ...
          </p>
        </div>
      </div>
    </div>
  );
};

export default InvitePage;
