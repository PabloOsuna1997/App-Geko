import { useRef, useState } from "react";

enum Operadores {
    suma, resta, multiplicacion, division, modulo, igual
}

export const useCalculatorHook = () => {
    
    const [number, setNumber] = useState('0')
    const [previusNumber, setPreviusNumber] = useState('0')
    const [registry, setRegistry] = useState('0')
    const ultimoOperador = useRef<Operadores>();

    const concatNumber = ( newNumber: string) => {
        

        if (number.includes('.') && newNumber === '.' ) return

        if((number.includes('+') || number.includes('-') || 
                number.includes('*') || number.includes('/') || 
                number.includes('%') )  && 
                (newNumber === '+' || newNumber === '-' || 
                newNumber === '*' || newNumber === '/' || 
                newNumber === '%' )) return

        
        if(number.startsWith('0')){

            if(newNumber === '.'){
                setNumber(number + newNumber)
                setRegistry( number + newNumber)
            }
            else if(newNumber === '0' && number.includes('.')){
                setNumber(number + newNumber)
                setRegistry( number + newNumber)
            }
            else if(newNumber !== '0' && !number.includes('.')){
                setNumber(newNumber)
                setRegistry(newNumber)
            }
            else if(newNumber === '0' && !number.includes('.')){
                setNumber(number)
                setRegistry( number)
            }else{
                setNumber(number + newNumber)
                setRegistry( number + newNumber)
            }

        }else{
            setNumber(number + newNumber)
            setRegistry( number + newNumber)
        }
        
    }

    const clear = ( ) => {
        setNumber('0')
        setPreviusNumber('0')
        setRegistry('')
    }
 
    const calc = () => {

        const num1 = Number(number)
        const num2 = Number(previusNumber)

        switch (ultimoOperador.current) {
            case Operadores.suma:                
                    setNumber((num1 + num2) + '')
                    setPreviusNumber(previusNumber + ' + ' + number)
                    setRegistry( previusNumber + ' + ' + number + ' = ' + (num1 + num2))
                break;
            case Operadores.resta:                
                setNumber((num2 - num1) + '')
                setPreviusNumber(previusNumber + ' - ' + number)
                setRegistry( previusNumber + ' - ' + number + ' = ' + (num2 - num1))
            break;
            
            case Operadores.multiplicacion:                
                setNumber((num1 * num2) + '')
                setPreviusNumber(previusNumber + ' * ' + number)
                setRegistry( previusNumber + ' * ' + number + ' = ' + (num1 * num2))
            break;

            case Operadores.division: 
                if(num1 !== 0){              
                    setNumber((num2 / num1) + '')
                    setPreviusNumber(previusNumber + ' / ' + number)
                    setRegistry( previusNumber + ' / ' + number + ' = ' + (num2 + num1))
                }else{
                    setNumber('0')
                    setPreviusNumber('0')
                    setPreviusNumber('0')
                }
            break;
            default:
                break;
        }
        ultimoOperador.current = Operadores.igual
    }

    const subirNUmero = () => {
        setPreviusNumber(number) 
        setNumber('0')
    }

    const btnDividir = () => {
        subirNUmero()
        ultimoOperador.current = Operadores.division
    }

    const btnMultiplicar = () => {
        subirNUmero()
        ultimoOperador.current = Operadores.multiplicacion
    }

    const btnSumar = () => {
        subirNUmero()
        ultimoOperador.current = Operadores.suma
    }

    const btnRestar = () => {
        subirNUmero()
        ultimoOperador.current = Operadores.resta
    } 

    const btnModulo = () => {
        const num1 = Number(number)

        setPreviusNumber(( num1 / 100) + '')
        setNumber(( num1 / 100) + '')
    }

    return {
        number,
        previusNumber,
        registry,
        concatNumber,
        calc,
        btnDividir,
        btnMultiplicar,
        btnSumar,
        btnRestar,
        btnModulo,
        clear
    }

}
