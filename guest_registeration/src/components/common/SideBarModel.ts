import { Settings } from "lucide-react";

export interface SideBarItem{
    text: string;
    link: string;
    iconElement: any;
}

export interface SideBarGroupItem{
    title: string;
    list: Array<SideBarItem>;
}

export const sideBarList: Array<SideBarGroupItem> = [
    {
        title: 'Profile',
        list: [
            {
                text: 'Account',
                link: '',
                iconElement: ''//<Settings className="h-5 w-5" aria-hidden="true" />
            }
        ]
    },
    {
        title: 'Manage',
        list: [
            {
                text: 'Tenants',
                link: '',
                iconElement: ''//<Users className="h-5 w-5" aria-hidden="true" />
            },
            {
                text: 'Property',
                link: '',
                iconElement: ''//<Newspaper className="h-5 w-5" aria-hidden="true" />
            }
        ]
    },
    {
        title: 'People',
        list: [
            {
                text: 'Search',
                link: '',
                iconElement: ''//<Search className="h-5 w-5" aria-hidden="true" />
            }
        ]
    },
]
