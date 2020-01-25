import React, { useState } from 'react';



const QuantityInput = props => {

    const getQuantityMessage = count => {

        if (count > 7) {
            return <div className="alert alert-success text-center" role="alert">
                All good
      </div>
        }

   

    if (count < 3) {
        return <div className="alert alert-danger text-center" role="alert">
            Oh no!
</div>
    }
        return <div className="alert alert-info text-center" role="alert">
            Almost there
</div>
    }



    const [count, setCount] = useState(props.count);

    return (
        <div>
            <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <button onClick={() => setCount(count - 1)} className="btn btn-info" type="button"><i className="fa fa-minus-circle"></i></button>
                </div>
                <input readOnly value={count} type="text" className="form-control text-center" aria-label="" aria-describedby="basic-addon1" />
                <div className="input-group-append">
                    <button onClick={() => setCount(count + 1)} className="btn btn-info" type="button"><i className="fa fa-plus-circle"></i></button>
                </div>
            </div>

            {getQuantityMessage(count)}
        </div>

    )
}

export default QuantityInput