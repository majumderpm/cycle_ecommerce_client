import React, { useContext, useState } from 'react';
import { authContext } from '../../contexts/authProvider/AuthProvider';

const AddReviews = () => {



    const [addReviews, setAddReviews] = useState({});
    const { user } = useContext(authContext);
    console.log(user?.email);

    const handelsubmit = event => {
        setAddReviews(prev => ({ ...prev, [event.target.name]: event.target.value }));
    }
    console.log(addReviews);

    const handelReviews = async (event) => {
        event.preventDefault();

        try {
            const response = await fetch("http://localhost:5000/reviews", {
                method: "POST", // or 'PUT'
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ ...addReviews, userEmail: user?.email }),
            });

            const result = await response.json();
            console.log("Success:", result);
        } catch (error) {
            console.error("Error:", error);
        }


    }


    return (
        <>
            <div className='review'>
                <div className='container'>
                    <form onSubmit={handelReviews}>


                        <div class="form-group">
                            <label class="col-md-4 control-label" for="product_name">comment</label>
                            <div class="col-md-4">
                                <textarea onChange={handelsubmit} className='form-control input-md' name='comment' placeholder='comment'></textarea>

                            </div>
                        </div>

                        <div class="form-group">

                            <div class="col-md-4">
                                <button type='submit' className='submit_btn'> submit</button>

                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default AddReviews;