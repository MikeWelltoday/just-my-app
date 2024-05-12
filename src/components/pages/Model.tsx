import {adidasArr, AdidasItem} from "./Adidas";
import {useParams} from "react-router-dom";
import {pumaArr, PumaItem} from "./Puma";



type CrossModels= {
    [key: string]: (AdidasItem[] | PumaItem[]);
}

const crossModels: CrossModels={
    adidas:adidasArr,
    puma: pumaArr
}

export const Model = () => {
    // const params=useParams()
    const { model, id } = useParams();
    console.log(model)
        //const currentModel=adidasArr.find(el=>el.id===Number(id))
    const currentModel = model
        ? crossModels[model].find((el) => el.id === Number(id))
        : null;

      return (
        <div style={{textAlign:'center'}}>
            {currentModel
                ?<>
                    <h2>{currentModel?.model}</h2>
                    <h4>{currentModel?.collection}</h4>
                    <h3>{currentModel?.price}</h3>
                    <img
                        src={currentModel?.picture}
                        alt={currentModel?.model}
                        style={{width: '600px', height: 'auto', marginRight: '10px'}}
                    />
                </>
                :   <h2>Модель отсутствует</h2>
            }



        {/*    <h2>{adidasArr[Number(params.id)].model}</h2>*/}
        {/*    <h4>{adidasArr[Number(params.id)].collection}</h4>*/}
        {/*    <h3>{adidasArr[Number(params.id)].price}</h3>*/}
        {/*    <img*/}
        {/*        src={adidasArr[Number(params.id)].picture}*/}
        {/*        alt={adidasArr[Number(params.id)].model}*/}
        {/*        style={{width: '600px', height: 'auto', marginRight: '10px'}}*/}
        {/*    />*/}
        </div>
);
};