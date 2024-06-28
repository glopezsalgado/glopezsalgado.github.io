import { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";

export const LetsConnect = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phoneNumber: '',
        message: ''
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const validate = () => {
        const errorMessage = {};
        if (!formData.name) errorMessage.name = 'Name is required';
        if (!formData.email) errorMessage.email = 'Email is required';
        if (!formData.message) errorMessage.message = 'Message is required';
        return errorMessage;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const formErrors = validate();
        if (Object.keys(formErrors).length === 0) {
            // Submit the form
            console.log('Form submitted:', formData);
            // Reset form
            setFormData({
                name: '',
                email: '',
                phoneNumber: '',
                message: ''
            });
            setErrors({});
        } else {
            setErrors(formErrors);
        }
    };

    return (
        <Container>
            <h2>Contact Me</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formName">
                    <Form.Label>* Name</Form.Label>
                    <Form.Control
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        isInvalid={!!errors.name}
                    />
                    <Form.Control.Feedback type="invalid">
                        {errors.name}
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group controlId="formEmail">
                    <Form.Label>* Email</Form.Label>
                    <Form.Control
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        isInvalid={!!errors.email}
                    />
                    <Form.Control.Feedback type="invalid">
                        {errors.email}
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group controlId="formPhone">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control
                        type="text"
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                    />
                </Form.Group>

                <Form.Group controlId="formMessage">
                    <Form.Label>* Message</Form.Label>
                    <Form.Control
                        as="textarea"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={3}
                        isInvalid={!!errors.message}
                    />
                    <Form.Control.Feedback type="invalid">
                        {errors.message}
                    </Form.Control.Feedback>
                </Form.Group>

                <Button variant="primary" type="submit">
                    Send Email
                </Button>
            </Form>
        </Container>
    );
};
