import { useNavigate } from 'react-router-dom';

export function TenantCard({ imageURL = "https://avatars.githubusercontent.com/u/65148377?v=4", name = "Pratik Ghare", address = "Madhuban Society, Lane 2, Old Sangvi" }) {
  const navigate = useNavigate();
  return (
    <div className="mx-auto grid w-full max-w-7xl items-center space-y-4 px-2 py-10 md:grid-cols-2 md:gap-6 md:space-y-0 lg:grid-cols-4">
      <div
          className="relative aspect-[16/9] rounded-md md:aspect-auto md:h-[400px]"
          style={{
            height: '230px'
          }}
        >
          <img
            src={imageURL}
            alt="tenant profile"
            className="z-0 rounded-md object-cover"
            style={{
                height: '230px',
            }}
          />
          <div className="absolute inset-0 rounded-md bg-gradient-to-t from-gray-900 to-transparent"></div>
          <div className="absolute bottom-4 left-4 text-left">
            <h1 className="text-lg font-semibold text-white">{name}</h1>
            <p className="mt-2 text-sm text-gray-300">
              {address}
            </p>
            <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white"
                onClick={() => {
                    navigate('/dashboard/t-details')
                }}
            >
              View Details &rarr;
            </button>
          </div>
        </div>
    </div>
  )
}
