import { Home, LayoutDashboard } from 'lucide-react'

export default function BreadCrumb({ list = [] }) {
  return (
    <nav className="flex w-full items-start rounded-md bg-gray-100 p-2" aria-label="Breadcrumb">
      <ol className="inline-flex items-center space-x-1 md:space-x-3">
        <li className="inline-flex items-center">
          <a
            href="#"
            className="ml-1 inline-flex text-sm font-medium text-gray-800 hover:underline md:ml-2"
          >
            <LayoutDashboard className="mr-3 h-4 w-4" style={{ marginTop: '2px' }} />
            Dashboard
          </a>
        </li>
        {
          list.map((item: any, index: number) => {
            console.log(item, index);
            if(index == list.length - 1) {
              return (
                <li aria-current="page" key={item}>
                  <div className="flex items-center">
                    <span className="mx-2.5 text-gray-800 ">/</span>
                    <span className="cursor-default ml-1 text-sm font-medium text-gray-800 hover:underline md:ml-2">
                      {item}
                    </span>
                  </div>
                </li>
              )
            }

            return (
              <li key={item}>
                <div className="flex items-center">
                  <span className="mx-2.5 text-gray-800 ">/</span>
                  <a href="#" className="ml-1 text-sm font-medium text-gray-800 hover:underline md:ml-2">
                    {item}
                  </a>
                </div>
              </li>
            )
          })          
        }
      </ol>
    </nav>
  )
}