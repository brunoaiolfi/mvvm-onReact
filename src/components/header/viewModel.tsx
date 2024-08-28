import { useNavigate } from "react-router-dom";

export function HeaderViewModel() {

    const navigate = useNavigate();

    function handleNavigate(pathTo: string) {
        navigate(pathTo);
    }

    return {
        handleNavigate
    }
}