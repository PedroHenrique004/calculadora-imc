// No arquivo resultado.jsx
import styles from './resultado.module.css'

const Resultado = ({ imc }) => {

    return (

        <div className="container2">
            <table>
            <tr >
                <th>Imc</th>
                <th>Classificação</th>
                <th className={styles.th3}>Obesidade (grau)</th>
            </tr>
            <tr className={imc < 18.5 ? styles.under : ""}>
                <td>MENOR QUE 18,5</td>
                <td>Magreza</td>
                <td>0</td>
            </tr>
            <tr className={imc >= 18.5 && imc < 25 ? styles.normal : ""}>
                <td>ENTRE 18,5 E 24,9</td>
                <td>Normal</td>
                <td className={styles.td2}>0</td>
            </tr>
            <tr className={imc >= 25 && imc < 30 ? styles.alert : ""}>
                <td>ENTRE 25,0 E 29,9</td>
                <td>Sobrepeso</td>
                <td>1</td>
            </tr>
            <tr className={imc >= 30 && imc < 40 ? styles.over : ""}>
                <td>ENTRE 30,0 E 39,9</td>
                <td>Obesidade</td>
                <td>2</td>
            </tr>
            <tr className={imc >= 40 ? styles.emergency : ""}>
                <td>MAIOR QUE 40,0</td>
                <td>Obesidade grave</td>
                <td className={styles.td3}>3</td>
            </tr>
        </table>
        </div>
    )
}

export default Resultado;
