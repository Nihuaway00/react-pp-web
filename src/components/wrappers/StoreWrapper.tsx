import {createContext, ReactNode} from "react";
import userStore from "@/stores/UserStore";
import rootStore from "@/stores/RootStore";

export const StoreContext = createContext(rootStore);

export default function StoreWrapper({children}: {children: ReactNode}) {
    return (
        <StoreContext.Provider value={rootStore}>
            {children}
        </StoreContext.Provider>
    )
}