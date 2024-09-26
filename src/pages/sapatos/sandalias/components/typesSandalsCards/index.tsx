import Image from 'next/image';

export function TypesSandalsCards() {
  const sandals = [
    {
      name: 'amarração',
      imageUrl:
        'https://secure-static.arezzo.com.br/medias/sys_master/arezzo/arezzo/hc5/h51/h00/h00/11943031799838/HEADLESS-1356400020001U-01-BASEIMAGE-Thumbnail-Headless.jpg',
    },
    {
      name: 'meia pata',
      imageUrl:
        'https://secure-static.arezzo.com.br/medias/sys_master/arezzo/arezzo/h44/hdf/h00/h00/11768498028574/HEADLESS-1346200010001U-01-BASEIMAGE-Midres-Headless.jpg',
    },
    {
      name: 'geométrico',
      imageUrl:
        'https://secure-static.arezzo.com.br/medias/sys_master/arezzo/arezzo/h4d/h9a/h00/h00/11943010631710/HEADLESS-1351900030002U-01-BASEIMAGE-Midres-Headless.jpg',
    },
    {
      name: 'rasteira',
      imageUrl:
        'https://secure-static.arezzo.com.br/medias/sys_master/arezzo/arezzo/h20/h19/h00/h00/11923185270814/HEADLESS-1201600190006U-01-BASEIMAGE-Midres-Headless.jpg',
    },
    {
      name: 'anabela',
      imageUrl:
        'https://secure-static.arezzo.com.br/medias/sys_master/arezzo/arezzo/ha0/he9/h00/h00/11876229546014/HEADLESS-1346500020004U-01-BASEIMAGE-Midres-Headless.jpg',
    },
  ];

  return (
    <section className="w-full flex justify-center px-6 md:px-32 py-4 md:py-8  space-x-2 md:space-x-12">
      {sandals.map((sandal, index) => (
        <div
          key={index}
          className="w-full flex flex-col items-center min-w-16 md:min-w-28 bg-gray-200"
        >
          <div className="">
            <Image
              src={sandal.imageUrl}
              alt={sandal.name}
              width={150}
              height={150}
              className="mix-blend-darken"
            />
          </div>

          <h3 className="uppercase text-[8px] sm:text-xs tracking-widest mb-5">
            {sandal.name}
          </h3>
        </div>
      ))}
    </section>
  );
}
