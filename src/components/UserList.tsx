import userStore from "@/stores/UserStore";
import {observer} from "mobx-react-lite";
import useStore from "@/hooks/useStore";

function UserList(){
    const {userStore} = useStore();
    return (
        <ul>
            {
                userStore.getAll().map((user, index) => {
                    return (
                        <li key={index}>
                            <span>{user}</span>
                        </li>
                    )
                })
            }
        </ul>
    )
}

const UserListObserver = observer(UserList);
export default UserListObserver;