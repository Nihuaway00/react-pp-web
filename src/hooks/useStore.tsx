import {useContext} from "react";
import {StoreContext} from "@/components/wrappers/StoreWrapper";

export default function useStore(){
    return useContext(StoreContext)
}