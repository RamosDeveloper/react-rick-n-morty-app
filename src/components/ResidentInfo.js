import { useState, useEffect } from "react";
import Loading from "./Loading";

const ResidentInfo = ({url}) => {
    const [resident,setResident] = useState(null);

    useEffect(() => {
        setResidentInfoByUrl(url);
    },[])

    const setResidentInfoByUrl = async url => {
        let _resident = await fetchResidentInfo(url);

        setResident(_resident);
    }

    const fetchResidentInfo = async url => {
        const response = await fetch(url);  
        const data = await response.json();
    
        return data;          
    }

    return (
        <div className="col-12 col-md-6 my-2">
            {!resident &&  <Loading/>}
            {resident && (
                <div className="card">
                    
                    <div className="card-body">
                        <div className="row">
                            <div className="col-12 col-md-4">
                                <img src={resident.image} className="img-fluid" alt={resident.name}/>
                            </div>
                            <div className="col-12 col-md-8">
                                <h5 className="card-title">({resident.name}/{resident.id})</h5>
                                <p className="card-text">{resident.status} - {resident.species}</p>
                                <p className="card-text text-muted">origin</p>
                                <p className="card-text">{resident.origin.name}</p>
                                <p className="card-text text-muted">Episodes that appears:</p>
                                <p className="card-text">{resident.episode.length}</p>
                            </div>
                        </div>                        

                    </div>
                </div>                
            )}
        </div>
    )
}

export default ResidentInfo;