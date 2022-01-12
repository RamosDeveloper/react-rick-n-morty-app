import ResidentInfo from "./ResidentInfo";

const ResidentsList = ({residents}) => {

    return (
        <div className="row">
            <div className="col-12">
                <h3>Residents</h3>
            </div>
            <div className="col-12">
                <div className="row">
                    {residents.map((url) => 
                        <ResidentInfo key={url} url={url} />
                    )}  
                </div>              
            </div>  
        </div>
    )
}

export default ResidentsList;