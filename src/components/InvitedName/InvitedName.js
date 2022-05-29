import { useRouter } from 'next/router';

const InvitedName = () => {
  const router = useRouter();
  const { isReady, query } = router;
  const { name } = query;

  return (
    <>
      <div className="w-full mx-auto ">
        <p className="text-xs text-gray-800 font-sans italic text-center ">
          Kepada Yth Bapak/Ibu/Saudara/i
        </p>
        <h1 className="font-hand text-2xl text-black text-center font-bold">
          {isReady ? name.replace(/-/g, ' ') : 'fulan'}
        </h1>
      </div>
    </>
  );
};

export default InvitedName;
