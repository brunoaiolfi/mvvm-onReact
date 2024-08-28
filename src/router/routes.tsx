import { createBrowserRouter, RouterProvider,  } from "react-router-dom";
import { ConversationView } from "../modules/conversation/views";
import { EmbeddingCreateView } from "../modules/embeddings/views/create/view";
import { HeaderView } from "../components/header/view";

export function Routes() {

    function render(component: React.ReactNode) {
        return (
            <>
                <HeaderView />
                {component}
            </>
        )
    }
    const router = createBrowserRouter([
        {
            path: "*",
            element: render(<ConversationView />)
        }, {
            path: "/",
            element: render(<ConversationView />)
        }, {
            path: "/cadastro",
            element: render(<EmbeddingCreateView />)
        }
    ])
    return (
        <RouterProvider router={router} />
    )
}