import {useEffect} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const Table = ( {imcPull} ) => {
    useEffect(() => {
        const tableThinness =  document.querySelector('.table__thinness');
        const tableNormal =  document.querySelector('.table__normal');    
        const tableOverweight = document.querySelector('.table__overweight');
        const tableObesity = document.querySelector('.table__obesity');
        const tableObesitySevere = document.querySelector('.table__obesity-severe');
        
        if (imcPull < 18.5) {
            tableThinness.classList.add('table-primary')
        } else {
            tableThinness.classList.remove('table-primary')
        }

        if (imcPull >= 18.5 && imcPull < 25) {
            tableNormal.classList.add('table-primary')
        } else {
            tableNormal.classList.remove('table-primary')
        }

        if (imcPull >= 25 && imcPull < 30) {
            tableOverweight.classList.add('table-primary')
        } else {
            tableOverweight.classList.remove('table-primary')
        }

        if (imcPull >= 30 && imcPull < 40) {
            tableObesity.classList.add('table-primary')
        } else {
            tableObesity.classList.remove('table-primary')
        }

        if (imcPull >= 40) {
            tableObesitySevere.classList.add('table-primary')
        } else {
            tableObesitySevere.classList.remove('table-primary')
        }        
    },[imcPull]);

    return (
        <table className="table mt-5">
            <thead>
                <tr className="table__head">
                    <th scope="col">IMC</th>
                    <th scope="col">CLASSIFICAÇÃO</th>
                    <th scope="col">OBESIDADE (GRAU)</th>
                </tr>
            </thead>
            <tbody>
                <tr className="table__row table__thinness">
                    <td>MENOR QUE 18,5</td>
                    <td>MAGREZA</td>
                    <td>0</td>
                </tr>
                <tr className="table__row table__normal">
                    <td>ENTRE 18,5 E 24,9</td>
                    <td>NORMAL</td>
                    <td>0</td>
                </tr>
                <tr className="table__row table__overweight">
                    <td>ENTRE 25,0 E 29,9</td>
                    <td>SOBREPESO</td>
                    <td>I</td>
                </tr>
                <tr className="table__row table__obesity">
                    <td>ENTRE 30,0 E 39,9</td>
                    <td>OBESIDADE</td>
                    <td>II</td>
                </tr>
                <tr className="table__row table__obesity-severe">
                    <td>MAIOR QUE 40,0</td>
                    <td>OBESIDADE GRAVE</td>
                    <td>III</td>
                </tr>
            </tbody>
        </table>
    );
}

export default Table