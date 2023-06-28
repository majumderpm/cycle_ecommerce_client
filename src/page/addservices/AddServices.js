import React, { useContext, useState } from 'react';
import { authContext } from '../../contexts/authProvider/AuthProvider';
// import { Prev } from 'react-bootstrap/esm/PageItem';

const AddServices = () => {

    const [addServices, setAddServices] = useState({});
    const {user} = useContext(authContext);
    console.log(user?.email);
   
    const handelsubmit = event => {
        setAddServices(prev => ({...prev, [event.target.name] : event.target.value}) );
    } 
    console.log(addServices);

    const handelServices = async(event) => {
        event.preventDefault();

        try {
            const response = await fetch("http://localhost:5000/services", {
              method: "POST", // or 'PUT'
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({...addServices, userEmail:user?.email}),
            });
        
            const result = await response.json();
            console.log("Success:", result);
          } catch (error) {
            console.error("Error:", error);
          }


    }


    return (
        <>
        <form onSubmit={handelServices}>
           

            <div class="form-group">
                <label class="col-md-4 control-label" for="product_name">PRODUCT NAME</label>
                <div class="col-md-4">
                    <input onChange={handelsubmit} id="product_name" name="productname" placeholder="PRODUCT NAME" class="form-control input-md" required="" type="text" />

                </div>
            </div>

            <div class="form-group">
                <label  class="col-md-4 control-label" for="product_name_fr">PRODUCT title</label>
                <div class="col-md-4">
                    <input onChange={handelsubmit} id="product_name_fr" name="title" placeholder="PRODUCT DESCRIPTION FR" class="form-control input-md" required="" type="text" />

                </div>
            </div>
            <div class="form-group">
                <label  class="col-md-4 control-label" for="product_name_fr">PRODUCT description</label>
                <div class="col-md-4">
                    <input onChange={handelsubmit} id="product_name_fr" name="description" placeholder="PRODUCT DESCRIPTION FR" class="form-control input-md" required="" type="text" />

                </div>
            </div>

            <div class="form-group">
                <label class="col-md-4 control-label" for="product_categorie">PRODUCT price</label>
                <div class="col-md-4">
                <input  onChange={handelsubmit} id="available_quantity" name="price" placeholder="AVAILABLE QUANTITY" class="form-control input-md" required="" type="text" />
                </div>
            </div>

            <div class="form-group">
                <label class="col-md-4 control-label" for="available_quantity">AVAILABLE url</label>
                <div class="col-md-4">
                    <input onChange={handelsubmit} id="available_quantity" name="url" placeholder="AVAILABLE QUANTITY" class="form-control input-md" required="" type="text" />

                </div>
            </div>
            <div class="form-group">
                
                <div class="col-md-4">
                  <button type='submit' className='submit_btn'> submit</button>

                </div>
            </div>

            


           
            

           

            

            
           
           



            



            
                </form>

            </>
            );
};
export default AddServices;