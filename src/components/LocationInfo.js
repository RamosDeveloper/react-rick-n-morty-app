import ResidentsList from "./ResidentsList";

const LocationInfo = ({location}) => {

    return (
        <div className="row">
            <div className="col-12">
                <div className="row">
                    <div className="col-12">
                        <div className="containerr">
                            <div className="row">
                                <div className="col-12 my-2">
                                    <h3 className="text-center">({location.name} / {location.id})</h3>                            
                                </div>
                                <div className="col-12 col-md-4 text-center">
                                    <span>Yype:</span> &nbsp;
                                    <span className="text-muted">{location.type}</span>
                                </div>
                                <div className="col-12 col-md-4  text-center">
                                    <span>Dimension:</span> &nbsp;
                                    <span className="text-muted">{location.dimension}</span>
                                </div>
                                <div className="col-12 col-md-4  text-center">
                                    <span>Population:</span> &nbsp;
                                    <span className="text-muted">{location.residents.length}</span>
                                </div>                                                
                            </div>
                        </div>
                    </div>
                </div>
                <hr />                
                <div className="row">
                    <div className="col-12">
                        <div className="container-fluid">
                            <ResidentsList 
                                residents={location.residents}    
                            />
                        </div>
                    </div>
                </div> 
            </div>
        </div>
    )
}

export default LocationInfo;