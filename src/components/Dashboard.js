import React, {useState} from "react";
import { useDispatch } from "react-redux";
import { Searcher } from "./Searcher";
import { Button } from "./Button";
import { Modal } from "./Modal";
import { addInfo } from "../actions/infoActions";

export const Dashboard = ({})=>{
    const dispatch = useDispatch();
    const [consumption, setConsumption] = useState(null);
    const [showList, setShowList] = useState(false);
    const [modalIsOpen,setModalIsOpen] = useState(false);
    const productsList = [
            {
                "supplier": "British Ash", 
                "name": "winter prices",
                "rate": 0.12, // £ 
                "dailystandingcharge": 0.35, // £ 
                "contractlength": 12, // months 
                "renewable": 39, // %
                "status": "live"
            },
            {
                "id": 109,
                "supplier": "British Ash", 
                "name": "black friday prices", 
                "rate": 0.11, 
                "dailystandingcharge": 0.95, 
                "contractlength": 24, 
                "renewable": 39,
                "status": "expired"
            },
            {
                "id": 202,
                "supplier": "LEON",
                "name": "winter prices", 
                "rate": 0.14, 
                "dailystandingcharge": 0.35, 
                "renewable": 95, 
                "contractlength": 12, 
                "status": "live"
            },
            {
                "id": 211,
                "supplier": "LEON",
                "name": "special prices", 
                "rate": 0.115,
                "renewable": 95, 
                "dailystandingcharge": 0.25, 
                "contractlength": 24, 
                "status": "live"
            },{
                "id": 325,
                "supplier": "Scottish Bower", 
                "name": "brexit prices", 
                "rate": 0.12,
                "renewable": 65, 
                "dailystandingcharge": 0.35, 
                "contractlength": 12, 
                "status": "live"
            },
            {
                "id": 455,
                "supplier": "ED-EFF", 
                "name": "normal",
                "rate": 0.21,
                "renewable": 100, 
                "dailystandingcharge": 0.42, 
                "contractlength": 12, 
                "status": "live"
            },
            {
                "id": 485,
                "supplier": "ED-EFF", 
                "name": "spring prices", 
                "rate": 0.45,
                "renewable": 100, 
                "dailystandingcharge": 0.03, 
                "contractlength": 24, 
                "status": "live"
            },
            {
                "id": 385,
                "supplier": "Scottish Bower", 
                "name": "normal prices", 
                "rate": 0.42,
                "renewable": 65, 
                "dailystandingcharge": 0.85, 
                "contractlength": 24, 
                "status": "live"
            },
            {
                "id": 371,
                "supplier": "Scottish Bower", 
                "name": "standard prices", 
                "rate": 0.22,
                "renewable": 65, 
                "dailystandingcharge": 0.35, 
                "contractlength": 36, 
                "status": "live"
            },
            {
                "id": 171,
                "supplier": "British Ash", 
                "name": "spring prices", 
                "rate": 0.45,
                "renewable": 39, 
                "dailystandingcharge": 0.66, 
                "contractlength": 36, 
                "status": "live"
            },
            {
                "id": 199,
                "supplier": "British Ash", 
                "name": "easter prices", 
                "rate": 0.77,
                "renewable": 39, 
                "dailystandingcharge": 0.26, 
                "contractlength": 48, 
                "status": "live"     
            },
            {
                "id": 299,
                "supplier": "LEON",
                "name": "easter prices", 
                "rate": 0.49,
                "renewable": 95, 
                "dailystandingcharge": 0.66, 
                "contractlength": 48, 
                "status": "expired"
            },
            {
                "id": 234,
                "supplier": "LEON",
                "name": "winter prices", 
                "rate": 0.46,
                "renewable": 95, 
                "dailystandingcharge": 0.27, 
                "contractlength": 60, 
                "status": "pending"
            }
        ];
    const titlesHeader = [
        "Suplier",
        "Annual cost",
        "Contract length",
        ""
    ];
    const annualCost = (item)=>{
        return (( consumption * item.rate ) + ( 365 * item.dailystandingcharge )) * ( item.contractlength / 12 )
     } 
    const itemsHeader = titlesHeader.map((label) => (
        <div className="title-header">{label}</div>
    ));
    const products = showList && productsList.map((item)=>(
        <div className="list-body">
            <div className="list-body-suplier">{item.supplier}</div>
            <div className="list-body-cost">{"£"}{annualCost(item).toFixed(2)}</div>
            <div className="list-body-contact">{item.contractlength}{" months"}</div>
            <div className="list-body-button">
            <Button
                label={"more info"}
                onClick={()=>{
                    dispatch(addInfo(item))
                    setModalIsOpen(!modalIsOpen)}}
                style={"border-round"}
            />
            </div>
        </div>
    )); 
 
    return[
        <div className="app-search">
            <Searcher
            title={"Total gas consumption"} 
            value={consumption} 
            buttonLabel={"Search products"}
            inputLabel={"23542"} 
            onChange={(e)=>setConsumption(e.target.value)} 
            onClick={()=>setShowList(true)}
            />
        </div>,
         <div className="app-list">
            {showList && (<div className="list-header">{itemsHeader}</div>)} 
             {products}
             {modalIsOpen&&(     <Modal
                isOpen={modalIsOpen}
                onClose={()=>{
                    setModalIsOpen(!modalIsOpen)}}
                title={"Suplier information"}
            />)}
         </div>,
    ]
}