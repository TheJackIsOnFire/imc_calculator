import { useState } from "react";
import { PatternFormat, NumericFormat } from 'react-number-format';
import Table from "../Table";
import 'bootstrap/dist/css/bootstrap.min.css';

const Form = () => {
    const [inputWeight, setInputWeight] = useState();
    const [inputHeight, setInputHeight] = useState();
    const [imc, setImc] = useState();

    const calculationImc = () => {
        let valueWeight = parseFloat(inputWeight.replace(',', '.'));
        let valueHeight = parseFloat(inputHeight.replace(',', '.'));

        let valueImc = valueWeight / (valueHeight ** 2);
        valueImc = parseFloat(valueImc.toFixed(2));

        return setImc(valueImc);
    }

    return (
        <form className="p-5">
            <div className="row">
                <div className="col-12 d-flex justify-content-center">
                    <h1 className="mb-4">Calcule o seu índice de massa corporal (IMC)</h1>
                </div>
            </div>
            <div className="row d-flex justify-content-center mb-5">
                <div className="form-group col-2">
                    <label className="p-1" htmlFor="input_weight">Peso <small>(ex.: 69,2)</small></label>
                    <NumericFormat decimalScale={2} decimalSeparator="," onChange={e => setInputWeight(e.target.value)} required className="form-control" id="input_weight" placeholder="kg"/>
                </div>
                <div className="form-group col-2">
                    <label className="p-1" htmlFor="input_height">Altura <small>(ex.: 1,70)</small></label>
                    <PatternFormat format="#,##" onChange={e => setInputHeight(e.target.value)} required className="form-control" id="input_height"  placeholder="cm"/>
                </div>
                <div className="col-2 align-self-end">
                    <button onClick={e => e.preventDefault(calculationImc())} type="submit" className="btn btn-primary">Calcular IMC</button>
                </div>
            </div> 
            <div className="row">
                <div className="col-6  ">
                    <strong className="h5 p-3 rounded text-light bg-primary">
                        Seu IMC é: {imc}
                    </strong>
                </div>    
            </div>
            <Table imcPull={imc} />    
        </form>
    )    
}

export default Form;
