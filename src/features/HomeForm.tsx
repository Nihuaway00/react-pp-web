import { useState} from "react";
import UserListObserver from "@/components/UserList";
import useStore from "@/hooks/useStore";

export default function HomeForm(){
    const {userStore} = useStore();
    const [name, setName] = useState("");

    return (
        <div>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            <button onClick={() => userStore.addName(name)}>Добавить</button>

            <UserListObserver />
        </div>
    )
}