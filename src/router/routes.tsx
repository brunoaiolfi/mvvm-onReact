import { createBrowserRouter, RouterProvider,  } from "react-router-dom";
import { ConversationView } from "../modules/conversation/views";
import { EmbeddingCreateView } from "../modules/embeddings/create/view";
import { Header } from "../components/header";

export function Routes() {

    function render(component: React.ReactNode) {
        return (
            <>
                <Header />
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