import { useEffect, useState } from 'react';
import * as Style from './style';
import { Button, ButtonGroup } from '@chakra-ui/react'
import { useLocation, useNavigate } from 'react-router-dom';

enum PageSelected {
    CONVERSA = 'conversa',
    CADASTRO = 'cadastro'
}

export function Header() {
    const location = useLocation();
    const navigate = useNavigate();

    const [pageSelected, setPageSelected] = useState(PageSelected.CONVERSA);

    useEffect(() => {
        onChangePathname(location.pathname);
    }, [location.pathname])

    function onChangePathname(pathname: string) {
        setPageSelected(pathname === '/cadastro' ? PageSelected.CADASTRO : PageSelected.CONVERSA);
    }

    function handleNavigate(pathTo: string) {
        navigate(pathTo);
    }
    return (
        <Style.HeaderContainer>
            <ButtonGroup>
                <Button
                    colorScheme='blue'
                    variant={pageSelected === PageSelected.CONVERSA ? 'solid' : 'outline'}
                    onClick={() => handleNavigate('/')}

                >
                    Conversa
                </Button>
                <Button
                    colorScheme='blue'
                    variant={pageSelected === PageSelected.CADASTRO ? 'solid' : 'outline'}
                    onClick={() => handleNavigate('/cadastro')}
                >
                    Cadastro
                </Button>
            </ButtonGroup>
        </Style.HeaderContainer >
    )
}