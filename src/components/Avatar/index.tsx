import DropDown from "../Dropdown";
import Icon from "../Icons";

const userInfo = {
    userId: "Roman0425",
    email: "test@test.com",
    role: "Personal"
}

const Avatar =()=> {
    return (
        <DropDown menubutton={
            <div className="flex items-center gap-4">
                <div className="relative w-8 h-8 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
                    <Icon name="avatar" className="size-10"/>
                </div>
                <div className="items-start flex flex-col">
                    <span className="text-xs font-semibold">{userInfo.role}</span>
                    <span className="text-xs">{userInfo.userId}</span>
                </div>
                <Icon name="arrowDown" className="size-4"/>
            </div>
        }
        menuitems={[
            <div className="p-4 flex items-center gap-6 border-b pr-24" key={0}>
                <div className="relative w-14 h-14 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
                    <Icon name="avatar" className="size-[68px]"/>
                </div>
                <div className="items-start flex flex-col">
                    <span className="text-lg font-semibold">{userInfo.userId}</span>
                    <span className="text-xs text-gray-400">{userInfo.email}</span>
                </div>
            </div>,
            <div className="p-4 pt-2 border-b justify-between flex items-center" key={1}>
                <div>
                    <span className="text-xs font-semibold text-gray-500">{"Accounts"}</span>
                    <div className="flex items-center gap-4 py-2">
                        <div className="relative w-8 h-8 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
                            <Icon name="avatar" className="size-10"/>
                        </div>
                        <div className="items-start flex flex-col">
                            <span className="text-sm font-semibold">{userInfo.userId}</span>
                            <span className="text-xs text-gray-400">{userInfo.email}</span>
                        </div>
                    </div>
                    <div className="flex gap-2 items-center pt-2">
                        <Icon name="plus" filled width={24}/>
                        <span className="text-sm">{"Add another account"}</span>
                    </div>
                </div>
                <Icon name="check" className="size-6"/>
            </div>,
            <div className="p-4 items-center" key={2}>
                <span className="text-xs font-semibold text-gray-500">{"Teams"}</span>
                <div className="flex items-center gap-2">
                    <Icon name="team" width={24}/>
                    <span className="px-4 py-2">{"Create a team"}</span>
                </div>
            </div>,
            <div className="px-4 py-2" key={4}>{"Settings"}</div>,
            <div className="px-4 py-2" key={5}>{"What's new"}</div>,
            <div className="px-4 py-2" key={6}>{"Plans & pricing"}</div>,
            <div className="px-4 py-2" key={7}>{"Purchase history"}</div>,
            <div className="px-4 py-2" key={7}>{"Design school"}</div>,
            <div className="px-4 py-2" key={9}>{"Suggest improvement"}</div>,
            <div className="px-4 py-2" key={10}>{"Get the Canva Apps"}</div>,
            <div className="px-4 py-2" key={11}>{"Refer friends"}</div>,
            <div className="px-4 py-2" key={12}>{"Report content"}</div>,
            <div className="px-4 py-2" key={13}>{"Sign out"}</div>
        ]}
        ></DropDown>
    );
}

export default Avatar;