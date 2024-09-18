import React from 'react';
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function FormData() {
    return (
        <div className="BookForm text-start">
            <h1 className='text-start ms-4 mt-2'>Book Form</h1>
            <p className='text-start ms-4'>Welcome to your Book Form</p>
            <Form  className="m-0 py-4 form m-4">
                <Form.Group className="mb-3" controlId="formBasicBookName">
                    <Form.Label>Shoes Name</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter Title"
                        className="text-dark inputF"
                        name="bookTitle"
                    />
                </Form.Group>

              

                <Form.Group className="mb-3" controlId="formBasicBookPrice2">
                    <Form.Label>Shoes Discount Price</Form.Label>
                    <Form.Control
                        type="number"
                        className="text-dark inputF"
                        placeholder="Enter Shoes Discount Price"
                        name="bookPrice2"
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicBookPrice">
                    <Form.Label>Shoes Price</Form.Label>
                    <Form.Control
                        type="number"
                        className="text-dark inputF"
                        placeholder="Enter Book Price"
                        name="bookPrice"
                    />
                </Form.Group>

             

               

                <Form.Group className="mb-3" controlId="formBasicBookDescription">
                    <Form.Label>Shoes Description</Form.Label>
                    <Form.Control
                        as="textarea"
                        rows={3}
                        className="text-dark inputF"
                        placeholder="Enter Description"
                        name="bookDescription"
                    />
                </Form.Group>

                <Form.Group controlId="formFile" className="mb-3">
                    <Form.Label>Shoes Image</Form.Label>
                    <Form.Control
                        className='inputF'
                        accept="image/*"
                        type="file"
                        name="bookImage"
                    />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Add Book
                </Button>
            </Form>
        </div>
    );
}

export default FormData;


