import { useState } from 'react';
import Form from './components/Formulario/index';
import Resultado from './components/resultado/resultado';
import './global.css';

function App() {
    const [imc, setImc] = useState(0)
    
    return (
        <>
            <Form props={imc} setProps={setImc}/>
            <Resultado pros={imc} />
         </>
    )
    
}

export default App
