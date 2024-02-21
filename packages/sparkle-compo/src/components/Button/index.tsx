import { StyledButton } from "./style";

export interface ButtonProps {
    /**
    * Define o conteudo do botão.
    */
    label: string,
    /**
    * Define o tamaho do botão.
    */
    size?: 'small' | 'medium' | 'large' | 'full',
    /**
    * Define o tema do botão: cores, bordas, etc.
    */
    theme?: 'light' | 'dark' | 'jade',
    /**
    * Recebe a função que o botão deve executar ao ser clicado.
    */
   onClick: () => void
}

/**
* Componente de botão simples.
*/
export default function Button({
    label = 'click here',
    size = 'full',
    theme = 'dark',
    onClick

} : ButtonProps) {
    const handleButtonClick = () => {
        onClick();
    }
    return(
        <StyledButton
            size={size}
            theme={theme}
            onClick={handleButtonClick}
        >
            {label}
        </StyledButton>
    );
}