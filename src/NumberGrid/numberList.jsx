import Number from "./number";

const NumberList = ({innerTexts}) => {
    const jsxArray = [];
    for(let obj of innerTexts){
        const el = <Number text={obj.text} key={obj.id}/>;
        jsxArray.push(el);
    }

    return (
        <div className='numberList'>
            {jsxArray}
        </div>
    )
}

export default NumberList;