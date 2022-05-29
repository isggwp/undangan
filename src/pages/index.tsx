import Image from 'next/image';

const Index = () => {
  return (
    <div className="mx-auto flex w-full max-w-3xl flex-col justify-center bg-white md:hidden">
      <div className="flex h-screen w-full flex-col  items-center justify-center bg-white bg-gradient-to-r px-4">
        <div className="relative mx-auto mb-5 flex h-64 w-64">
          <Image
            layout="fill"
            src="/icons/gunung-wayang.svg"
            alt="bunga cinta"
          />
        </div>
      </div>
    </div>
  );
};

export default Index;
