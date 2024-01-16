import { useState } from "react";
import styles from './index.module.css'

const Form = ({ props, setProps }) => {
    let [peso, setPeso] = useState(0)
    let [altura, setAltura] = useState(0)
    let [funciona, setFunciona] = useState(false)

    console.log(altura)
    console.log(peso)

    const calculaIMC = () => {
        let props = peso / ((altura / 100) * (altura / 100) );
        setProps(props)
    }

    const ativaFuncoes = () => {
        calculaIMC();
        setFunciona(true)
    }

    

    return (
        <>
            <div className="container">
                    <form className={styles.formulario}>
                        <input onChange={(evento) => setPeso(parseFloat(evento.target.value))} type="number" placeholder="Digite seu peso" /> 
                        <input onChange={(evento) => setAltura(parseFloat(evento.target.value))} type="number" placeholder="Digite sua altura em cm"/>
                        <button type="button" onClick={ativaFuncoes}>Enviar</button>   
                         {funciona ? <h5>O seu IMC é: {parseFloat(props.toFixed(2))}</h5> : <p>Preencha o formulário</p>}
                    </form>
            </div>
        </>
    )
}

export default Form;