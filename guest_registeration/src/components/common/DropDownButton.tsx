import { useNavigate } from "react-router-dom";

const dropDownItems: any = [
    {
        text: "Dashboard",
        link: "/dashboard"
    },
    {
        text: "Settings",
        link: "/"
    },
    {
        text: "Earnings",
        link: "/"
    },
    {
        text: "Sign out",
        link: "/login"
    },
]

// dropDownItems: any = dropDownItems
export default function DropDownButton({  }) {
  const navigate = useNavigate();
  const navigateTo = (path: string) => {
    navigate(path);
    return null;
  }

  return (
    <>
        <div id="dropdown" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
            <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                {
                    dropDownItems.map((dropdown: any, index: number) => (
                        <li key={`drop-li-`+index}>
                            <a 
                                onClick={() => {
                                    navigateTo(dropdown.link);
                                }} 
                                className="cursor-pointer block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                            >
                                {dropdown.text}
                            </a>
                        </li>
                    ))
                }                
            </ul>
        </div>
    </>
  );
}
