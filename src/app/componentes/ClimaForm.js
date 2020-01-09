import React from 'react';

const ClimaForm = props => (
    <div className="card card-body">
        <form onSubmit={props.getClima}>
            <div className="form-group">
                <input type="text" name="city" placeholder="Tú ciudad" className="form-control" autoFocus/>
            </div>
            <div className="form-group">
                <input type="text" name="country" placeholder="Tú país" className="form-control" />
            </div>
            <button className="btn btn-success btn-block">
                Obtener clima
            </button>
        </form>
    </div>
);

export default ClimaForm;