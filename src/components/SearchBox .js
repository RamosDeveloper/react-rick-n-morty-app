import useFormulario from '../hooks/useFormulario';

const SearchBox  = ({setLocationByID}) => {
    const [formulario, handleChange, reset] = useFormulario({ locationID: '' });

    const handleSubmit = (e) => {
        e.preventDefault();
        setLocationByID(parseInt(formulario.locationID));
        reset();
    };

    return (
        <form className="row justify-content-md-center" onSubmit={handleSubmit}>
            <div className="col-12 col-md-4 ">
                <input 
                    id="txtLocationID"
                    name="locationID" 
                    type="text"
                    className="form-control text-center"
                    placeholder="Type a location id" 
                    value={formulario.locationID} 
                    onChange={handleChange}
                />
            </div>
        </form>
    )
}

export default SearchBox;